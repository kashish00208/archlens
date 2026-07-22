# AgentScope

## Overview

AgentScope is a debugging and observability platform for AI agents.

The goal is not to build another AI agent. The goal is to help developers understand how an AI agent works internally, why it made a decision, where it failed, and how it can be improved.

A simple demo agent generates execution data. AgentScope captures that data and provides tools to inspect, replay, compare, and analyze every execution.

---

## Problem

When an AI agent produces an incorrect answer or fails, developers often have to inspect logs, prompts, and traces manually.

Questions like these are difficult to answer quickly:

- Why did the agent choose this tool?
- Which step caused the failure?
- Why did latency increase?
- Why did token usage suddenly spike?
- What changed between two successful and failed runs?

Traditional observability tools provide traces and metrics, but they do not explain AI-specific behavior.

---

## Solution

AgentScope records every step of an AI agent execution and presents it as an interactive debugging session.

Instead of only viewing logs, developers can replay the execution, inspect every decision, compare runs, and receive AI-generated explanations for failures.

The demo agent exists only to generate realistic workflows for debugging.

---

# Features

## 1. Execution Replay

Replay an agent execution from start to finish.

For every step, display:

- Prompt
- LLM response
- Tool called
- Tool input
- Tool output
- Latency
- Token usage
- Cost
- Errors

---

## 2. Workflow Visualization

Visualize the complete execution graph.

Example:

User

↓

Planner

↓

Retriever

↓

LLM

↓

Weather API

↓

Final Response

Developers can inspect every node in the workflow.

---

## 3. Execution Timeline

Show the exact order in which events occurred.

Example:

09:42:01 Prompt received

09:42:02 Planner started

09:42:03 Weather API called

09:42:05 Retry

09:42:08 Final response generated

---

## 4. AI Health Report

Generate a summary after every execution.

Example:

Execution Score: 84/100

Issues:
- Two retries
- Weather API timeout
- High token usage

Recommendations:
- Cache weather responses
- Reduce retrieved context
- Execute tool calls in parallel

---

## 5. Compare Executions

Compare two runs of the same workflow.

Highlight differences in:

- Prompt
- Model
- Tool calls
- Token usage
- Cost
- Latency
- Final response

The platform explains what changed between executions.

---

## 6. Root Cause Analysis

Instead of only showing traces, generate an explanation.

Example:

The Weather API timed out twice.

The planner retried because weather information was required.

The retries increased latency by 5.2 seconds.

---

## 7. SigNoz Integration

SigNoz collects:

- Traces
- Metrics
- Logs

AgentScope enriches this telemetry with AI-specific information such as:

- Prompt history
- Tool execution
- Token usage
- Model responses
- AI-generated analysis

---

# Architecture

                  Demo AI Agent
                         │
                         │
                  OpenTelemetry
                         │
                         ▼
                     SigNoz
                         │
                         ▼
                   AgentScope API
                         │
        ┌────────────────┴───────────────┐
        │                                │
        ▼                                ▼
Execution Store                 AI Analysis Engine
        │                                │
        └──────────────┬─────────────────┘
                       ▼
                  React Dashboard

---

# Tech Stack

Frontend

- React
- TypeScript
- React Flow
- Tailwind CSS

Backend

- Node.js
- Express or NestJS
- TypeScript

AI

- OpenAI API
- LangGraph (optional)

Observability

- SigNoz
- OpenTelemetry

Database

- PostgreSQL

---

# Demo Flow

1. User submits a request.
2. Demo agent executes a workflow.
3. OpenTelemetry sends traces to SigNoz.
4. AgentScope reads telemetry.
5. AgentScope reconstructs the execution.
6. The dashboard displays:
   - Workflow graph
   - Timeline
   - Replay
   - Metrics
   - Root cause analysis
   - AI Health Report

---

# Why This Project

Current observability tools explain system behavior.

AgentScope explains agent behavior.

It helps developers understand not only what happened during execution, but also why it happened and how to improve it.