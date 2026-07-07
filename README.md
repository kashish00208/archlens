# 🔎 ArchLens

> **Your AI Software Architect Inside Slack**
>
> Ask architecture questions in Slack. Instantly understand dependencies, PRs, APIs, and system design across your repositories.

---

# 🚀 Overview

Modern codebases are spread across multiple repositories, services, APIs, and documentation. Developers often spend hours understanding architecture before writing a single line of code.

**ArchLens** is a Slack AI Agent that acts as an intelligent software architect for your team.

Instead of manually searching GitHub, reading documentation, or asking teammates, developers simply ask questions inside Slack.

Examples:

- What services depend on PaymentService?
- Who should review this PR?
- Will removing `/v1/auth` break anything?
- Summarize the architectural changes in this PR.
- Where is this endpoint used?

ArchLens analyzes repositories, dependency graphs, API specifications, pull requests, and documentation to generate accurate answers.

---

# 🎯 Problem

Engineering teams struggle with:

- Hidden dependencies between services
- Slow onboarding of new developers
- Difficult impact analysis
- Time-consuming PR reviews
- Outdated documentation
- Knowledge silos

Understanding an unfamiliar codebase can take hours—or even days.

---

# 💡 Solution

ArchLens continuously analyzes your repositories and exposes an AI Software Architect directly inside Slack.

Developers ask questions in natural language.

The agent searches the codebase, traverses dependency graphs, analyzes Git history, and responds with contextual architectural insights.

```
Developer
     │
     ▼
 Slack AI Agent
     │
     ▼
 Architecture Engine
     │
 ┌────────────────────────────────────┐
 │ GitHub │ OpenAPI │ Docs │ Git Logs │
 └────────────────────────────────────┘
     │
     ▼
  AI Response
```

---

# ✨ Features

## 🔍 Dependency Analysis

Find service relationships instantly.

Example:

> What services depend on PaymentService?

Returns:

- Direct dependencies
- Indirect dependencies
- Dependency graph
- Impact level

---

## 💥 Impact Analysis

Estimate breaking changes before modifying code.

Example:

> Will removing `/v1/auth` break anything?

Returns:

- Affected services
- API consumers
- Related repositories
- Estimated impact
- Risk level

---

## 👨‍💻 PR Review Assistant

Automatically summarize pull requests.

Example:

> Summarize PR #284

Returns:

- Files changed
- Services affected
- API changes
- Architectural changes
- Breaking changes
- Risk score

---

## 👥 Reviewer Recommendation

Suggest the best reviewers based on repository history.

Example:

> Who should review this PR?

Returns:

- Recommended reviewers
- Code ownership
- Previous contributors
- Similar PR history

---

## 🔎 Endpoint Discovery

Locate every usage of an API endpoint.

Example:

> Where is `/v1/payment` used?

Returns:

- Backend services
- Frontend applications
- SDKs
- Internal APIs

---

## 🏗 Architecture Q&A

Ask questions about your system.

Examples:

- Explain the authentication flow.
- Which services use Redis?
- Show all microservices.
- Which APIs are deprecated?
- What databases does BillingService use?
- How does NotificationService communicate with other services?

---

## 📊 Interactive Architecture Graph

Generate an interactive dependency graph that can be opened from Slack.

Visualize:

- Services
- APIs
- Databases
- Queues
- External integrations

---

# 🤖 Slack Commands

```
/archlens dependency PaymentService

/archlens impact /v1/auth

/archlens summarize PR-284

/archlens reviewers PR-284

/archlens endpoint /v1/payment

/archlens architecture authentication

/archlens graph PaymentService
```

---

# ⚙️ How It Works

## 1. Repository Indexing

ArchLens connects to GitHub and continuously indexes:

- Source code
- Pull Requests
- OpenAPI specifications
- README files
- Architecture documentation
- Package manifests

---

## 2. Dependency Extraction

The parser detects:

- Imports
- API calls
- Service-to-service communication
- Database connections
- Event queues
- Package dependencies

---

## 3. Graph Construction

Relationships are stored as a graph.

Example:

```
UserService
      │
      ├── PaymentService
      │
      ├── NotificationService
      │
      └── AuthService
```

---

## 4. AI Analysis

When a Slack message is received:

1. Understand the question
2. Search relevant repositories
3. Traverse dependency graph
4. Analyze Git history
5. Generate an AI response

---

# 🏗 Architecture

```
                    GitHub Webhook
                           │
                           ▼
                   Repository Parser
                           │
                           ▼
                Dependency Extractor
                           │
                           ▼
                   Graph Construction
                           │
                 ┌─────────┴─────────┐
                 ▼                   ▼
            Graph Database      Search Index
                 │                   │
                 └─────────┬─────────┘
                           ▼
                      MCP Server
                           │
                           ▼
                     Slack AI Agent
                           │
                           ▼
                    Developer in Slack
```

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

## Slack

- Slack Bolt SDK
- Slack AI Capabilities

## AI

- OpenAI Responses API (or compatible LLM)

## Search

- Real-Time Search API

## MCP

Custom MCP Server exposing tools such as:

- searchRepository()
- findDependencies()
- summarizePullRequest()
- recommendReviewers()
- endpointUsage()
- architectureSearch()
- listServices()

## Storage

- Neo4j
- PostgreSQL
- Redis

---

# 📂 Project Structure

```
archlens/

apps/
    dashboard/
    slack-agent/

packages/
    parser/
    graph/
    ai/
    github/
    slack/
    mcp-server/

services/
    webhook/
    indexer/

database/

docs/
```

---

# 📈 Example Conversation

**Developer**

> @ArchLens Will removing PaymentService break anything?

**ArchLens**

```
Risk Level: High

Affected Services
• BillingService
• NotificationService
• OrderService

Affected APIs
• /v1/payment
• /v1/refund

Affected Files
• paymentClient.ts
• billing.ts
• orderProcessor.ts

Recommended Reviewers
• Alice
• Bob

Estimated Impact
17 files
5 services
2 APIs
```

---

# 🚀 Roadmap

## MVP

- Slack AI Agent
- GitHub Integration
- Dependency Analysis
- PR Summaries
- Endpoint Search
- Reviewer Recommendation

## Phase 2

- Interactive Architecture Graph
- Multi-repository Support
- Documentation Search
- Service Ownership Detection

## Phase 3

- Architectural Drift Detection
- AI-generated RFC Reviews
- Architecture Health Score
- Refactoring Suggestions

---

# 🌟 Why ArchLens?

ArchLens isn't another code chatbot.

It is an AI Software Architect that understands **how your entire system is connected**, helping developers answer architectural questions, review changes, estimate impact, and navigate large codebases—all without leaving Slack.

By bringing architectural intelligence directly into everyday conversations, ArchLens reduces context switching, accelerates onboarding, and helps teams make safer engineering decisions.
