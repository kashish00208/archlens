A good way to build **ArchLens** is to think of it as a pipeline instead of a dashboard. Every action a developer performs should flow through the same memory lifecycle: **Ingest → Understand → Store → Query → Improve → Forget**.

---

# Overall User Workflow

```text
                    ┌─────────────────────────┐
                    │ Developer Login         │
                    └────────────┬────────────┘
                                 │
                                 		▼
                  Connect GitHub Repository
                                 │
                                 ▼
               Initial Repository Indexing
                                 │
                                 ▼
        Parse Code + Docs + OpenAPI + PR History
                                 │
                                 ▼
        Convert into Structured Knowledge Objects
                                 │
                                 ▼
            Store using Cognee remember()
                                 │
                                 ▼
       Generate Architecture Graph (React Flow)
                                 │
        ┌────────────────────────┴───────────────────────┐
        │                                                │
        ▼                                                ▼
 Ask Questions                                   Open Pull Request
        │                                                │
        ▼                                                ▼
 Cognee recall()                                 Silent Reviewer
        │                                                │
        ▼                                                ▼
 Graph Traversal                             Structural Drift Detection
        │                                                │
        ▼                                                ▼
  Answer + Highlight                           Suggestions
        │                                                │
        └────────────────────────┬───────────────────────┘
                                 │
                                 ▼
                 Developer Accepts Suggestions
                                 │
                                 ▼
                      Cognee improve()
                                 │
                                 ▼
                 Memory Continuously Evolves
```

---

# Phase 1 — Repository Onboarding

### User Journey

```
Home
      ↓
Connect GitHub
      ↓
Select Repository
      ↓
Import
      ↓
Indexing...
      ↓
Dashboard
```

### Backend Workflow

```
GitHub OAuth

↓

Repository Metadata

↓

Clone Repository

↓

Walk File Tree

↓

Identify

- TS
- JS
- Go
- Python
- Java
- Markdown
- OpenAPI
- Docker
- Terraform

↓

Parse Files

↓

Create Memory Objects

↓

remember()
```

Example:

```
src/auth/controller.ts

↓

Extract

Class
Functions
Imports
Exports
API Routes

↓

remember()
```

---

# Phase 2 — Repository Parsing

Every parser produces structured nodes.

```
Repository

│

├── Files

├── Classes

├── Functions

├── APIs

├── Databases

├── Services

├── Packages

├── Environment Variables

└── Documentation
```

Example graph

```
AuthController

│

├── calls

│      UserService

│

├── uses

│      JWT

│

├── writes

│      Redis

│

└── publishes

       RabbitMQ Event
```

---

# Phase 3 — Memory Construction

Every parsed relationship becomes a graph edge.

```
UserService

↓

depends_on

↓

Postgres
```

```
OrderService

↓

calls

↓

AuthService
```

```
Notification

↓

consumes

↓

RabbitMQ
```

Everything becomes searchable.

---

# Phase 4 — Dashboard

```
+------------------------------------------------------+

Repositories

-------------------------------------------------------

✓ auth-service

✓ billing

✓ notification

✓ gateway

-------------------------------------------------------

Graph

[ React Flow ]

-------------------------------------------------------

Search

"What breaks if Auth changes?"

-------------------------------------------------------

Recent PR Reviews

-------------------------------------------------------

Memory Status

Nodes : 5400

Edges : 18422

Documents : 930

-------------------------------------------------------

```

---

# Phase 5 — Architecture Graph

React Flow displays exactly what Cognee stores.

Example

```
Gateway

│

├────► Auth

│

├────► Billing

│

└────► Notification

```

Click Auth

Shows

```
Classes

Functions

APIs

Consumers

Dependencies

Recent PRs

Related RFCs

```

---

# Phase 6 — Ask Architecture Questions

Developer types

```
If I migrate auth to Go,
what downstream services break?
```

Workflow

```
Question

↓

Cognee recall()

↓

Hybrid Search

↓

Graph Traversal

↓

LLM

↓

Answer

↓

Highlight Nodes
```

UI

```
Affected

✓ gateway

✓ notification

✓ user-profile

✓ billing

✓ frontend

Estimated Impact

HIGH
```

---

# Phase 7 — Silent PR Reviewer

GitHub Webhook

```
Pull Request Opened

↓

Changed Files

↓

Extract Symbols

↓

Compare against Memory

↓

Compare RFCs

↓

Detect Drift

↓

Generate Suggestions
```

Example

```
RFC

"No module should directly access DB."

↓

PR

NotificationModule

↓

Direct SQL Query Found

↓

Comment

"This violates RFC-12."
```

---

# Phase 8 — Learning

Developer marks suggestion as correct.

```
Accept Suggestion

↓

remember()

↓

improve()

↓

Relationship Weight Updated
```

Now future reviews prioritize this architectural rule.

---

# Phase 9 — Memory Cleanup

Developer removes Billing V1.

```
Archive Service

↓

forget()

↓

Delete Nodes

↓

Reconnect Graph

↓

Refresh Dashboard
```

No stale recommendations remain.

---

# Suggested Folder Structure

```text
archlens/

├── apps/
│   ├── web/                 # Next.js frontend
│   └── api/                 # Backend API
│
├── packages/
│   ├── parser/
│   │   ├── typescript/
│   │   ├── python/
│   │   ├── golang/
│   │   ├── markdown/
│   │   └── openapi/
│   │
│   ├── graph/
│   │   ├── builder.ts
│   │   ├── traverser.ts
│   │   └── relationships.ts
│   │
│   ├── cognee/
│   │   ├── remember.ts
│   │   ├── recall.ts
│   │   ├── improve.ts
│   │   └── forget.ts
│   │
│   └── github/
│       ├── webhook.ts
│       ├── clone.ts
│       └── prs.ts
│
├── workers/
│   ├── indexer.ts
│   ├── reviewer.ts
│   └── ingestion.ts
│
└── docker/
```

---

# Recommended Development Milestones

| Sprint | Goal                      | Deliverable                                                                                                          |
| ------ | ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1      | GitHub integration        | Connect a repository, clone it, and display its file tree                                                            |
| 2      | Code parser               | Extract classes, functions, imports, APIs, and dependencies into structured objects                                  |
| 3      | Cognee integration        | Store and retrieve repository knowledge using `remember()` and `recall()`                                            |
| 4      | Graph visualization       | Render the architecture graph with React Flow, including node and edge details                                       |
| 5      | Natural language querying | Support impact analysis and dependency questions with highlighted graph paths                                        |
| 6      | Silent PR reviewer        | Analyze pull requests, compare changes against stored architectural knowledge and RFCs, and generate review comments |
| 7      | Continuous learning       | Update memory with approved architectural decisions using `improve()` and remove obsolete knowledge with `forget()`  |

This workflow naturally aligns with your proposed architecture and demonstrates the complete Cognee memory lifecycle—**remember → recall → improve → forget**—while providing a coherent developer experience from repository onboarding to continuous architectural evolution.
