# 🔎 ArchLens

> **Your AI Software Architect in Slack**
>
> Ask questions about your architecture, dependencies, pull requests, APIs, and system design—all without leaving Slack.

---

## 🚀 What is ArchLens?

Modern software systems span dozens of repositories, microservices, APIs, and documentation. Understanding how everything connects often requires searching through code, reading docs, and asking teammates.

**ArchLens** is an AI-powered architecture assistant that continuously analyzes your codebase and answers architectural questions directly in Slack.

Instead of searching manually, simply ask:

> *"Will removing this API break anything?"*

or

> *"Who should review this PR?"*

ArchLens analyzes your repositories, dependency graph, API specifications, Git history, and documentation to provide contextual, architecture-aware answers.

---

# ✨ Features

- 🔍 Dependency Analysis
- 💥 Impact Analysis
- 👨‍💻 AI PR Summaries
- 👥 Reviewer Recommendation
- 🔎 Endpoint Discovery
- 🏗 Architecture Q&A
- 📊 Interactive Dependency Graph

---

# 💬 Example Questions

```
What services depend on PaymentService?

Will removing /v1/auth break anything?

Summarize PR #284

Who should review this PR?

Where is /v1/payment used?

Explain the authentication flow.

Which services use Redis?

Show all microservices.
```

---

# ⚡ Example Response

```
Risk Level: High

Affected Services
• BillingService
• NotificationService
• OrderService

Affected APIs
• /v1/payment
• /v1/refund

Breaking Changes
• 5 services impacted
• 17 files affected

Recommended Reviewers
• Alice
• Bob
```

---

# 🏗 System Architecture

```
                GitHub
                   │
                   ▼
        Repository Indexer
                   │
                   ▼
        Dependency Parser
                   │
                   ▼
          Knowledge Graph
      (Neo4j + PostgreSQL)
                   │
                   ▼
             MCP Server
                   │
                   ▼
          OpenAI Responses API
                   │
                   ▼
          Slack AI Assistant
                   │
                   ▼
              Developer
```

---

# ⚙️ How It Works

### 1. Repository Indexing

ArchLens continuously indexes

- Source code
- Pull Requests
- OpenAPI Specs
- README files
- Architecture Docs
- Git History

---

### 2. Dependency Extraction

It automatically discovers

- Imports
- Service-to-service communication
- API calls
- Database usage
- Queues
- Package dependencies

---

### 3. Knowledge Graph

Relationships are stored inside Neo4j.

```
UserService
    │
    ├── AuthService
    ├── PaymentService
    └── NotificationService
```

---

### 4. AI Analysis

When a developer asks a question:

1. Understand intent
2. Search repositories
3. Traverse dependency graph
4. Analyze Git history
5. Generate an architecture-aware answer

---

# 🛠 Tech Stack

## Frontend

- Next.js
- TypeScript
- Tailwind CSS
- React Flow

## Backend

- Node.js
- Express
- GitHub Webhooks

## AI

- OpenAI Responses API
- MCP Server

## Storage

- Neo4j
- PostgreSQL
- Redis

## Integrations

- GitHub
- Slack

---

# 📂 Project Structure

```
apps/
├── api/
│   ├── src/
│   │   ├── routes/
│   │   ├── services/
│   │   │   ├── github/
│   │   │   ├── parser/
│   │   │   ├── graph/
│   │   │   ├── ai/
│   │   │   └── slack/
│   │   ├── mcp/
│   │   └── db/
│
└── web/
    ├── app/
    ├── components/
    └── lib/
```

---

# 🔄 Data Flow

```
GitHub
   │
   ▼
Webhook
   │
   ▼
Repository Indexer
   │
   ▼
Parser
   │
   ▼
Dependency Graph
   │
   ▼
Neo4j + PostgreSQL
   │
   ▼
MCP Server
   │
   ▼
OpenAI
   │
   ▼
Slack
```

---

# 🗺 Roadmap

### MVP

- ✅ Slack AI Assistant
- ✅ GitHub Integration
- ✅ Dependency Analysis
- ✅ PR Summaries
- ✅ Endpoint Search
- ✅ Reviewer Recommendation

### Future

- Interactive Architecture Graph
- Multi-repository Support
- Documentation Search
- Architecture Drift Detection
- AI RFC Reviews
- Architecture Health Score

---

# 🌟 Why ArchLens?

Unlike traditional code assistants, **ArchLens understands your system—not just your code.**

It builds a living architectural knowledge graph of your repositories, allowing developers to understand dependencies, estimate the impact of changes, review pull requests, and navigate complex systems directly from Slack.

Spend less time searching and more time building.