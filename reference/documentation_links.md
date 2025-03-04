orry im on a new k Documentation Links

This file contains important documentation links organized by category for quick reference.

## Brain System

- [imdone Documentation](https://imdone.io/docs/#) - Official documentation for imdone
- [Markdown Guide](https://www.markdownguide.org/) - Comprehensive guide to Markdown syntax

## Development

### Languages & Frameworks

- [Python Documentation](https://docs.python.org/3/) - Official Python documentation
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Mozilla Developer Network JavaScript docs
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Official TypeScript documentation
- [React Documentation](https://react.dev/learn) - Official React documentation
- [Next.js Documentation](https://nextjs.org/docs) - Official Next.js documentation
- [FastAPI Documentation](https://fastapi.tiangolo.com/) - Official FastAPI documentation

### Tools & Libraries

- [Git Documentation](https://git-scm.com/doc) - Official Git documentation
- [GitHub Docs](https://docs.github.com/en) - GitHub documentation
- [Sublime Text Documentation](https://www.sublimetext.com/docs/index.html) - Official Sublime Text documentation
- [VS Code Documentation](https://code.visualstudio.com/docs) - VS Code documentation
- [Cursor Documentation](https://cursor.sh/docs) - Cursor IDE documentation
- [Cursor Context Configuration](https://cursor.sh/docs/features/context) - How to configure context for Cursor AI
- [Docker Documentation](https://docs.docker.com/) - Official Docker documentation
- [Zen Browser Documentation](https://github.com/zen-browser/zen#readme) - Zen Browser documentation and features

### AI & Machine Learning

- [OpenAI Documentation](https://platform.openai.com/docs) - OpenAI API documentation
- [Anthropic Documentation](https://docs.anthropic.com/) - Anthropic Claude API documentation
- [Hugging Face Documentation](https://huggingface.co/docs) - Hugging Face documentation
- [TensorFlow Documentation](https://www.tensorflow.org/api_docs) - TensorFlow documentation
- [PyTorch Documentation](https://pytorch.org/docs/stable/index.html) - PyTorch documentation
- [LangChain Documentation](https://python.langchain.com/docs/get_started/introduction) - LangChain documentation

### Data & Databases

- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - PostgreSQL documentation
- [MongoDB Documentation](https://docs.mongodb.com/) - MongoDB documentation
- [Qdrant Documentation](https://qdrant.tech/documentation/) - Qdrant vector database documentation
- [ChromaDB Documentation](https://docs.trychroma.com/) - ChromaDB documentation
- [Pandas Documentation](https://pandas.pydata.org/docs/) - Pandas documentation

## Design & UI

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Tailwind CSS documentation
- [Shadcn UI Documentation](https://ui.shadcn.com/docs) - Shadcn UI documentation
- [Figma Help Center](https://help.figma.com/) - Figma documentation

## Cloud & Deployment

- [AWS Documentation](https://docs.aws.amazon.com/) - Amazon Web Services documentation
- [Google Cloud Documentation](https://cloud.google.com/docs) - Google Cloud documentation
- [Vercel Documentation](https://vercel.com/docs) - Vercel documentation
- [Netlify Documentation](https://docs.netlify.com/) - Netlify documentation

## Tools from dev_investigate.md

- [Potpie Documentation](https://github.com/potpie-ai/potpie#readme) - Prompt-To-Agent documentation
- [PydanticAI Documentation](https://ai.pydantic.dev/) - PydanticAI documentation
- [Nushell Documentation](https://www.nushell.sh/book/) - Nushell documentation
- [Ghostty Documentation](https://github.com/ghostty-org/ghostty#readme) - Ghostty terminal emulator documentation
- [Cline Documentation](https://github.com/cline/cline#readme) - Cline autonomous coding agent documentation
- [Panel Documentation](https://panel.holoviz.org/getting_started/index.html) - Panel data exploration framework documentation

## Cursor Context Configuration

Cursor allows you to configure custom context for AI assistance through the `.cursor/context.json` file. This enables you to provide additional documentation and reference materials to the AI assistant.

### Configuration Format

```json
{
  "contextSources": [
    {
      "name": "Documentation Name",
      "sourceType": "url",
      "url": "https://example.com/docs"
    },
    {
      "name": "Local Documentation",
      "sourceType": "file",
      "path": "path/to/documentation.md"
    }
  ],
  "excludePatterns": [
    "node_modules/**",
    ".git/**"
  ]
}
```

### Resources

- [Cursor Context Documentation](https://cursor.sh/docs/features/context) - Official documentation on Cursor context
- [Cursor AI Features](https://cursor.sh/docs/features/ai) - Overview of Cursor AI capabilities

## How to Add New Documentation Links

To add new documentation links to this file:

1. Identify the appropriate category (or create a new one if needed)
2. Add the link in the format: `- [Name](URL) - Brief description`
3. Keep descriptions concise but informative
4. Maintain alphabetical order within categories when possible 