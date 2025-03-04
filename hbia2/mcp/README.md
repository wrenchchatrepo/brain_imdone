# MCP Server for Data Scraping

A modular and configurable MCP (Master Control Program) server for web scraping tasks.

## Features

- Asynchronous HTTP requests with aiohttp
- Proxy support with rotation
- Rate limiting and request throttling
- Configurable user agents
- Local and cloud storage options
- Comprehensive logging
- Error handling and retries

## Setup

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Configure the server:
   - Copy `config/mcp_config.yml.example` to `config/mcp_config.yml`
   - Update the configuration with your settings
   - Set up proxy credentials if needed

## Usage

1. Start the server:
   ```bash
   python scripts/mcp_server.py
   ```

2. The server will:
   - Load configuration
   - Initialize logging
   - Set up proxy connections
   - Begin scraping configured URLs
   - Save results to the configured storage location

## Configuration

The server can be configured through `config/mcp_config.yml`:

- Server settings (host, port, debug mode)
- Proxy configurations
- Scraping parameters (timeouts, retries, rate limits)
- Storage options
- Logging settings

## Data Storage

Scraped data is stored in the following format:
```json
{
    "url": "https://example.com",
    "status": 200,
    "content": "...",
    "timestamp": "2024-03-02T12:00:00Z"
}
```

## Development

To add new features:

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```

2. Make your changes
3. Run tests
4. Submit a pull request

## Security

- Credentials are stored in environment variables
- Proxy authentication is handled securely
- Rate limiting prevents abuse
- User agent rotation available

## License

MIT License - See LICENSE file for details 