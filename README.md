# VS Code LLM Plugin

## Overview

The VS Code LLM Plugin is an extension for Visual Studio Code that integrates Large Language Models (LLMs) into your development environment. It allows developers to leverage the power of LLMs for code suggestions, completions, and refactoring directly within their IDE.

## Features

- **LLM Configuration**: Easily configure and switch between different LLM providers.
- **Code Suggestions**: Get AI-powered code suggestions based on your current code context.
- **Secure API Key Management**: Safely store and manage your LLM provider API keys.

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/vscode-llm-plugin.git
   ```
2. Navigate to the project directory:
   ```
   cd vscode-llm-plugin
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Compile the extension:
   ```
   npm run compile
   ```

## Usage

1. Press F5 to run the extension in a new VS Code Development Host window.
2. In the new window, open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on Mac).
3. Type "Configure LLM" and select the command to set up your LLM provider and API key.
4. To get a code suggestion, select some code in your editor, open the Command Palette, and run the "Get Code Suggestion" command.

## Requirements

- Visual Studio Code v1.60.0 or higher
- Node.js v14.0.0 or higher

## Extension Settings

This extension contributes the following settings:

- `llmPlugin.provider`: The LLM provider to use (e.g., "OpenAI", "Hugging Face", "AWS")
- `llmPlugin.apiKey`: Your API key for the selected LLM provider

## Known Issues

- Currently supports a limited number of LLM providers.
- Error handling for API failures could be improved.

## Contributing

Contributions to the VS Code LLM Plugin are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
