import * as vscode from "vscode";

interface LLMConfig {
  provider: string;
  apiKey: string;
}

export class ConfigurationManager {
  private static readonly CONFIG_KEY = "llmPlugin.config";

  static async configureLLM(context: vscode.ExtensionContext) {
    const provider = await vscode.window.showQuickPick(
      ["OpenAI", "Hugging Face", "AWS"],
      { placeHolder: "Select LLM Provider" }
    );

    if (!provider) return;

    const apiKey = await vscode.window.showInputBox({
      prompt: `Enter API Key for ${provider}`,
      password: true,
    });

    if (!apiKey) return;

    const config: LLMConfig = { provider, apiKey };
    await context.secrets.store(this.CONFIG_KEY, JSON.stringify(config));

    vscode.window.showInformationMessage(`LLM configured for ${provider}`);
  }

  static async getLLMConfig(
    context: vscode.ExtensionContext
  ): Promise<LLMConfig | null> {
    const configString = await context.secrets.get(this.CONFIG_KEY);
    return configString ? JSON.parse(configString) : null;
  }
}
