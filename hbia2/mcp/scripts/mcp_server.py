#!/usr/bin/env python3
import os
import yaml
import logging
import asyncio
import aiohttp
from pathlib import Path
from typing import Dict, List, Optional
from datetime import datetime

class MCPServer:
    def __init__(self, config_path: str):
        self.config = self._load_config(config_path)
        self._setup_logging()
        self.session = None
        self.proxies = self._setup_proxies()
        
    def _load_config(self, config_path: str) -> Dict:
        """Load configuration from YAML file."""
        with open(config_path, 'r') as f:
            return yaml.safe_load(f)
            
    def _setup_logging(self):
        """Configure logging based on settings."""
        log_config = self.config['logging']
        logging.basicConfig(
            level=getattr(logging, log_config['level']),
            format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler(log_config['file']),
                logging.StreamHandler()
            ]
        )
        self.logger = logging.getLogger('MCPServer')
        
    def _setup_proxies(self) -> List[Dict]:
        """Setup proxy configurations."""
        proxies = []
        for proxy in self.config['proxies']:
            proxy_url = f"http://{proxy['username']}:{proxy['password']}@{proxy['host']}:{proxy['port']}"
            proxies.append({
                'name': proxy['name'],
                'url': proxy_url
            })
        return proxies
        
    async def _init_session(self):
        """Initialize aiohttp session with proxy support."""
        if not self.session:
            self.session = aiohttp.ClientSession()
            
    async def _close_session(self):
        """Close aiohttp session."""
        if self.session:
            await self.session.close()
            self.session = None
            
    async def scrape_url(self, url: str, proxy_name: Optional[str] = None) -> Dict:
        """Scrape a URL with optional proxy support."""
        await self._init_session()
        
        headers = {
            'User-Agent': self.config['scraping']['user_agent']
        }
        
        proxy = None
        if proxy_name:
            proxy = next((p['url'] for p in self.proxies if p['name'] == proxy_name), None)
            
        try:
            async with self.session.get(
                url,
                headers=headers,
                proxy=proxy,
                timeout=self.config['scraping']['request_timeout']
            ) as response:
                return {
                    'url': url,
                    'status': response.status,
                    'content': await response.text(),
                    'timestamp': datetime.utcnow().isoformat()
                }
        except Exception as e:
            self.logger.error(f"Error scraping {url}: {str(e)}")
            return {
                'url': url,
                'error': str(e),
                'timestamp': datetime.utcnow().isoformat()
            }
            
    async def save_data(self, data: Dict):
        """Save scraped data to storage."""
        storage_config = self.config['storage']
        if storage_config['type'] == 'local':
            data_dir = Path(storage_config['path'])
            data_dir.mkdir(parents=True, exist_ok=True)
            
            filename = f"scrape_{datetime.utcnow().strftime('%Y%m%d_%H%M%S')}.json"
            filepath = data_dir / filename
            
            with open(filepath, 'w') as f:
                yaml.dump(data, f)
                
            self.logger.info(f"Saved data to {filepath}")
            
    async def run(self):
        """Run the MCP server."""
        self.logger.info("Starting MCP server...")
        try:
            # Example usage
            urls = [
                "https://example.com",
                "https://example.org"
            ]
            
            for url in urls:
                result = await self.scrape_url(url)
                await self.save_data(result)
                
        finally:
            await self._close_session()
            
async def main():
    config_path = Path(__file__).parent.parent / 'config' / 'mcp_config.yml'
    server = MCPServer(str(config_path))
    await server.run()

if __name__ == '__main__':
    asyncio.run(main()) 