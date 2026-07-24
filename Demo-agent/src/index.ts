import { AgentExecution, AgentOptions, AgentStep, QueryResult } from "./types";
const DEFAULT_OPTIONS: AgentOptions = {
  name: "llm agent",
  systemPrompt: "You are a helpful agent",
  tools: [],
  maxSteps: 5,
  timeout_ms: 5,
  enableMemory: false,
};

export function createAgent(options: AgentOptions) {
  return new Agent();
}

class Agent {
  private options: AgentOptions;

  constructor() {
    this.options = DEFAULT_OPTIONS;
  }
  async run(userInput: string) {
    // Return type : Promise<QueryResult>
  }

  private async plan() {
    // Return type:  Promise<AgentStep>
  }

  private async exicuteTool(toolName: string, input: Record<string, unknown>) {
    //Return type Promise<AgentStep>
  }

  private async finalize(userInput: string, steps: AgentStep[]) {
    // Return type : Promise<AgentStep>
  }

  private selectToolForQuery(userInput: string) {
    const normalizedQuery = userInput.toLowerCase();
    return this.options.tools.find((tool) => {
      const nameMatch = normalizedQuery.includes(tool.name.toLowerCase());
      const descriptionMatch = tool.description
        .toLowerCase()
        .split(/\s+/)
        .some((word) => normalizedQuery.includes(word));
      return nameMatch || descriptionMatch;
    });
  }
  private buildMessages(userInput: string, steps: AgentStep[]){
    //Return type: AgentMessage[] 
  }
  private buildExecution(userInput: string) {
    // AgentExecution
  }
}
