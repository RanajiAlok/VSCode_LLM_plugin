import axios from "axios";
import * as vscode from "vscode";
import { ConfigurationManager } from "./configuration";

export class LLMService {
  private static async getConfig(context: vscode.ExtensionContext) {
    const config = await ConfigurationManager.getLLMConfig(context);
    if (!config) {
      throw new Error("LLM not configured. Please configure the LLM first.");
    }
    return config;
  }

  static async getCodeSuggestion(
    context: vscode.ExtensionContext,
    prompt: string
  ): Promise<string> {
    const config = await this.getConfig(context);

    // This is a simplified example. In a real implementation, you'd need to handle
    // different API structures for different providers.
    const response = await axios.post(
      `https://api.${config.provider.toLowerCase()}.com/v1/completions`,
      {
        prompt: prompt,
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].text;
  }
}
