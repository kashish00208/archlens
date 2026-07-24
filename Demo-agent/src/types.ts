export interface AgentOptions {
  name: string;
  systemPrompt: string;
  tools: ToolDefinition[];
  maxSteps?: number;
  timeout_ms?: number;
  enableMemory?: boolean;
}

export interface ToolDefinition {
  name: string;
  description: string;
  parameters: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<ToolResult>;
}

export interface ToolResult {
  toolName: string;
  input: Record<string, unknown>;
  output: unknown;
  success: boolean;
  error?: string;
  duration_ms: number;
}

export interface AgentExecution {
  executionId: string;
  agentName: string;
  userInput: string;
  startedAt: Date;
  completedAt?: Date;
  status: "running" | "completed" | "failed";
  steps: AgentStep[];
  totalDuration_ms: number;
}

export interface AgentStep {
  stepId: string;
  type: "planner" | "llm" | "tool" | "memory" | "final";
  input: unknown;
  output: unknown;
  toolName?: string;
  latency_ms: number;
  timestamp: Date;
  error?: string;
}

export interface QueryResult {
  executionId: string;
  text: string;
  messages: AgentMessage[];
  steps: AgentStep[];
  duration_ms: number;
 success: boolean;
  error?: string;
}

export interface AgentMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  timestamp: Date;
  toolCallId?: string;
}
