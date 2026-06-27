---
title: Supply Plan to Procurement Proposal
category: Planning & Supply Chain
processId: BP-131
---

# Supply Plan to Procurement Proposal

**Process ID:** `BP-131`  
**Domain:** Planning & Supply Chain

This page describes a reusable business-process pattern that can be used by Neuro Graph when correlating custom entities, CDS models, table schemas, fields, and relationships to semantic business meaning.

## Workflow diagram

![Supply Plan to Procurement Proposal workflow](./diagrams/supply-plan-to-procurement-proposal.svg)

## Primary workflow

| Step | Workflow stage | Suggested RDF role |
|---:|---|---|
| 1 | Supply Plan | `supply_plan` |
| 2 | Collect planning signals | `collect_planning_signals` |
| 3 | Generate proposal | `generate_proposal` |
| 4 | Resolve constraints | `resolve_constraints` |
| 5 | Release executable plan | `release_executable_plan` |
| 6 | Procurement Proposal | `procurement_proposal` |

## Typical business concepts

`Forecast`, `Demand Plan`, `Supply Plan`, `Capacity`, `Constraint`, `Replenishment Proposal`

## CDS or custom table signals

These signals can help an AI or rule engine correlate technical entities to this process:

- Planning period
- Forecast quantity
- Supply proposal
- Capacity bucket
- Exception code
- Version or scenario

## Common variants and exception paths

- **Approval loop**: use this branch when the process requires approval loop before continuing.
- **Exception route**: use this branch when the process requires exception route before continuing.
- **Reversal/correction**: use this branch when the process requires reversal/correction before continuing.
- **Audit evidence**: use this branch when the process requires audit evidence before continuing.
- **Closure archive**: use this branch when the process requires closure archive before continuing.

## Business rules useful for RDF generation

- Demand plans drive supply proposals across time buckets.
- Constraints require replanning, substitution, or escalation.
- Approved plans feed procurement, production, or fulfillment execution.

## Suggested RDF mapping roles

- `supply_plan` → process step candidate
- `collect_planning_signals` → process step candidate
- `generate_proposal` → process step candidate
- `resolve_constraints` → process step candidate
- `release_executable_plan` → process step candidate
- `procurement_proposal` → process step candidate

## Example TTL relationship pattern

```ttl
@prefix bp: <https://neuro-graph.dev/business-process/> .
@prefix ng: <https://neuro-graph.dev/ontology#> .

bp:supplyplantoprocurementproposal a ng:BusinessProcessPattern ;
  ng:processId "BP-131" ;
  ng:domain "Planning & Supply Chain" ;
  rdfs:label "Supply Plan to Procurement Proposal" .
```

## Human confirmation questions

- Which custom entity acts as the initiating object for this process?
- Which entity or field represents the current status of the process?
- Which relationships represent parent-child document structure?
- Which events are approvals, exceptions, reversals, or closure events?
- Which mappings are confirmed facts and which are only candidates?
