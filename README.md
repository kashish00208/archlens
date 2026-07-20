## MCP Observatory

> **MCP Observatory** is an observability platform for Model Context Protocol (MCP) servers. It provides end-to-end tracing, debugging, replay, and performance analytics for every MCP tool call made by AI agents.

Instead of asking:

> "Why did my agent fail?"

You can answer:

> "The GitHub MCP server timed out after 2.3 seconds, the Notion tool returned malformed JSON, the agent retried twice, and the final response degraded because context retrieval failed."

---

# Problem

Today, when AI agents use MCP:

```
Agent
   │
GitHub Tool
Notion Tool
Slack Tool
Database Tool
Filesystem Tool
```

Developers often lack visibility into:

* Which tool was called?
* How long did it take?
* Which arguments were passed?
* Which tool failed?
* Was there a retry?
* Which step made the agent slow?
* Which tool consumes the most tokens?
* Which server is unhealthy?

MCP Observatory answers those questions.

---

# Architecture

```text
                 AI Agent
                     │
                     ▼
          MCP Observatory SDK
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
 GitHub MCP     Notion MCP    Slack MCP
        │            │            │
        └────────────┼────────────┘
                     ▼
         OpenTelemetry Spans
                     ▼
                SigNoz Backend
                     ▼
        Observatory Dashboard
```

The SDK wraps MCP client calls and emits OpenTelemetry spans.

---

# Features

### 1. End-to-End Tracing

Visualize every request:

```
User Question
     │
Planner
     │
GitHub Tool
     │
Filesystem Tool
     │
Notion Tool
     │
LLM
     │
Answer
```

Each step is a trace.

---

### 2. Tool Performance Dashboard

Show metrics like:

* Average latency
* P95 latency
* Error rate
* Timeout rate
* Retry count
* Calls per minute
* Slowest tools

---

### 3. Tool Replay

Click a trace and inspect:

* Tool name
* Arguments (with sensitive data masked)
* Response
* Duration
* Errors

Replay the execution to reproduce issues.

---

### 4. Live Tool Timeline

```
10:00 GitHub Search
10:00 Filesystem Read
10:01 PostgreSQL Query
10:02 Notion Search
10:02 Slack Send
```

Like a distributed trace for MCP.

---

### 5. Failure Heatmap

```
GitHub        ██ 2%
Filesystem    ████████ 18%
Notion        ███ 4%
Slack         █ 1%
```

Identify unreliable tools at a glance.

---

### 6. AI Tool Cost

Track:

* Tokens
* Latency
* Cost
* Calls
* Average execution time

Per tool.

---

### 7. Conversation Trace

Follow a user request:

```
Slack

↓

Planner

↓

GitHub

↓

Database

↓

Filesystem

↓

OpenAI

↓

Slack Reply
```

---

### 8. Tool Dependency Graph

```
Planner
   │
   ├── GitHub
   ├── Notion
   ├── PostgreSQL
   ├── Filesystem
   └── Slack
```

Highlight:

* Slow nodes
* Failed nodes
* Healthy nodes

---

### 9. Anomaly Detection

Examples:

* Tool latency spikes
* Error rate increases
* Sudden token usage growth
* Retry storms

Generate alerts in SigNoz.

---

### 10. Session Replay

Replay the entire agent execution with timing, tool sequence, and outcomes.

---

# Tech Stack

* **SigNoz** for traces, logs, metrics, and dashboards
* **OpenTelemetry** for instrumentation
* **TypeScript**
* **Node.js**
* **MCP SDK**
* **Next.js** for the dashboard
* **Redis** (optional) for caching
* **PostgreSQL** (optional) for historical metadata

---

# Demo

1. Ask an AI agent:

   > "Summarize PR #245"

2. The agent calls:

   * GitHub MCP
   * Filesystem MCP
   * Documentation MCP

3. Open SigNoz:

   * Watch the trace build live.
   * Inspect each span.

4. Simulate a slow GitHub MCP server.

5. SigNoz highlights the latency spike.

6. Drill into the trace to see:

   * Which tool slowed the request.
   * How retries affected latency.
   * Which downstream calls were impacted.

This demonstrates observability in a concrete, easy-to-follow way.

## Stretch Goals

If you have extra time, consider adding:

* **Automatic root-cause analysis**, where an AI summarizes why a trace failed based on telemetry.
* **MCP Health Score**, combining latency, availability, and error rates into a single metric.
* **Open-source SDK**, so any MCP server can emit telemetry with minimal setup.

These additions would make the project more useful beyond the hackathon while reinforcing the AI observability theme.
