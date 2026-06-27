---
title: Production Order Creation to Release
category: Manufacturing & Operations
processId: BP-056
---

# Production Order Creation to Release

**Process ID:** `BP-056`  
**Domain:** Manufacturing & Operations

This page describes a reusable business-process pattern that can be used by Neuro Graph when correlating custom entities, CDS models, table schemas, fields, and relationships to semantic business meaning.

## Workflow diagram

![Production Order Creation to Release workflow](./diagrams/production-order-creation-to-release.svg)

## Primary workflow

| Step | Workflow stage | Suggested RDF role |
|---:|---|---|
| 1 | Production Order Creation | `production_order_creation` |
| 2 | Plan resources and components | `plan_resources_and_components` |
| 3 | Release execution | `release_execution` |
| 4 | Confirm operation | `confirm_operation` |
| 5 | Record quality and cost | `record_quality_and_cost` |
| 6 | Release | `release` |

## Typical business concepts

`Production Order`, `Operation`, `Bill of Material`, `Routing`, `Work Center`, `Consumption`

## CDS or custom table signals

These signals can help an AI or rule engine correlate technical entities to this process:

- Production order reference
- Operation or routing step
- Component consumption
- Yield or scrap quantity
- Work center
- Confirmation status

## Common variants and exception paths

- **Approval loop**: use this branch when the process requires approval loop before continuing.
- **Exception route**: use this branch when the process requires exception route before continuing.
- **Reversal/correction**: use this branch when the process requires reversal/correction before continuing.
- **Audit evidence**: use this branch when the process requires audit evidence before continuing.
- **Closure archive**: use this branch when the process requires closure archive before continuing.

## Business rules useful for RDF generation

- Released production orders usually consume components and confirm operations.
- Quality decisions may allow, block, or rework produced quantity.
- Production settlement records variance and cost impact.

## Suggested RDF mapping roles

- `production_order_creation` → process step candidate
- `plan_resources_and_components` → process step candidate
- `release_execution` → process step candidate
- `confirm_operation` → process step candidate
- `record_quality_and_cost` → process step candidate
- `release` → process step candidate

## Example TTL relationship pattern

```ttl
@prefix bp: <https://neuro-graph.dev/business-process/> .
@prefix ng: <https://neuro-graph.dev/ontology#> .

bp:productionordercreationtorelease a ng:BusinessProcessPattern ;
  ng:processId "BP-056" ;
  ng:domain "Manufacturing & Operations" ;
  rdfs:label "Production Order Creation to Release" .
```

## Human confirmation questions

- Which custom entity acts as the initiating object for this process?
- Which entity or field represents the current status of the process?
- Which relationships represent parent-child document structure?
- Which events are approvals, exceptions, reversals, or closure events?
- Which mappings are confirmed facts and which are only candidates?
