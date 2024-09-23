import * as vscode from "vscode";
import { ConfigurationManager } from "./configuration";
import { LLMService } from "./llm-service";

export function activate(context: vscode.ExtensionContext) {
  console.log("LLM Plugin is now active!");

  let configureDisposable = vscode.commands.registerCommand(
    "vscode-llm-plugin.configureLLM",
    () => {
      ConfigurationManager.configureLLM(context);
    }
  );

  let suggestDisposable = vscode.commands.registerCommand(
    "vscode-llm-plugin.getCodeSuggestion",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const selection = editor.selection;
        const text = editor.document.getText(selection);

        try {
          const suggestion = await LLMService.getCodeSuggestion(context, text);
          editor.edit((editBuilder) => {
            editBuilder.replace(selection, suggestion);
          });
        } catch (error) {
          if (error instanceof Error) {
            vscode.window.showErrorMessage(`Error: ${error.message}`);
          } else {
            vscode.window.showErrorMessage("An unknown error occurred");
          }
        }
      }
    }
  );

  context.subscriptions.push(configureDisposable, suggestDisposable);
}

export function deactivate() {}
