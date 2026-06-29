# Open Knowledge Format (OKF) 

---

## 1. Overview

**Open Knowledge Format**, or **OKF**, is an open, vendor-neutral format for representing knowledge as plain Markdown files with YAML frontmatter.

It is designed so that:

- Humans can read and edit knowledge in ordinary text editors.
- AI agents can parse metadata, follow links, and retrieve relevant context.
- Organizations can version knowledge using Git.
- Knowledge can move across tools without requiring a proprietary platform.

A simple OKF bundle looks like this:

```text
commerce-okf/
├── index.md
├── log.md
├── tables/
│   ├── index.md
│   ├── orders.md
│   └── customers.md
├── metrics/
│   ├── index.md
│   └── net-revenue.md
└── playbooks/
    ├── index.md
    └── revenue-reconciliation.md
```

Each normal Markdown file is a **concept document**. A concept can represent a table, API, metric, dashboard, service, playbook, policy, decision, glossary term, or any other unit of useful knowledge.

A minimal OKF concept looks like this:

````markdown
---
type: Metric
title: Weekly Active Users
description: Unique users who performed a qualifying activity during a calendar week.
tags: [analytics, product, metric]
timestamp: 2026-06-29T10:00:00Z
---

# Definition

Weekly Active Users counts unique users with at least one qualifying activity during a calendar week.

# Related Concepts

- [Events](/tables/events.md)
````

The most important rule is simple: every concept document must have YAML frontmatter with a non-empty `type` field.

---

## 2. Background

AI systems increasingly need access to organizational context. A model may understand SQL, APIs, and documentation syntax, but it does not automatically know the local meaning of a company’s data, systems, and processes.

For example, an AI agent might need to answer:

- Which table contains completed orders?
- How do we calculate net revenue?
- Which API endpoint creates a customer?
- Which dashboard is authoritative?
- What runbook should be followed when data freshness fails?
- Which columns are deprecated?
- Which metric definition is approved by Finance?

In most organizations, this knowledge is scattered across:

- Data catalogs.
- Internal wikis.
- API docs.
- Dashboard descriptions.
- Source-code comments.
- Notebook cells.
- Tickets.
- Chat messages.
- Shared drives.
- Individual employee memory.

This creates a serious context problem. Humans and AI agents both waste time assembling the same context repeatedly, and different tools often encode knowledge in incompatible ways.

OKF addresses this by making knowledge portable, inspectable, linkable, and easy to consume.

---

## 3. Why OKF Exists

OKF exists because AI agents need more than raw data. They need surrounding knowledge.

A database table is not enough. Agents also need to know:

- What the table means.
- What the row grain is.
- Which columns are safe to use.
- Which joins are valid.
- Which metrics depend on it.
- Which caveats matter.
- Which source supports the documentation.

A schema file is not enough. Agents also need examples, ownership, lifecycle status, business definitions, and operational context.

OKF provides a lightweight common format for this knowledge.

### Main goals

OKF is designed to:

1. Let humans and agents write knowledge in the same artifacts.
2. Provide a common exchange format for knowledge bundles.
3. Keep knowledge readable without specialized software.
4. Support version control and review workflows.
5. Allow many producers and consumers to interoperate.
6. Avoid lock-in to a specific cloud, catalog, model, database, or framework.

### Non-goals

OKF is not intended to:

- Replace OpenAPI, Avro, Protobuf, JSON Schema, SQL DDL, or other domain schemas.
- Define one universal taxonomy of all knowledge types.
- Require a central registry.
- Prescribe a storage backend.
- Provide access control by itself.
- Replace search indexes, vector databases, or knowledge graphs.

Instead, OKF can reference, summarize, link, and explain those other systems.

---

## 4. What OKF Is and Is Not

### OKF is

- A directory of Markdown files.
- A small set of conventions.
- A portable knowledge-bundle format.
- A human-readable and agent-readable representation.
- A good source format for search, retrieval, static sites, and agent context.
- A way to treat organizational knowledge as code.

### OKF is not

- A database.
- A vector store.
- A formal ontology.
- A schema registry.
- A documentation website generator.
- An access-control system.
- A replacement for domain-specific formats.
- A proprietary platform.

The key mental model is:

> OKF is source material for knowledge systems, not the entire knowledge system.

A bundle can later be indexed, embedded, visualized, rendered, reviewed, packaged, or consumed by agents.

---

## 5. Core Ideas

### 5.1 Plain files

An OKF bundle is a directory. You can copy it, zip it, commit it, diff it, or serve it from static storage.

### 5.2 Markdown body

Markdown carries the narrative knowledge: definitions, examples, schemas, caveats, playbook steps, and citations.

### 5.3 YAML frontmatter

YAML frontmatter carries structured metadata: type, title, description, tags, resource, timestamp, owner, status, and other fields.

### 5.4 One concept per file

Each concept should usually have its own Markdown file. This improves retrieval, review, linking, and maintenance.

### 5.5 Links create a graph

The directory tree provides hierarchy. Markdown links provide relationships. Together, they allow a bundle to behave like a graph-shaped wiki.

### 5.6 Indexes support progressive disclosure

`index.md` files let a human or agent inspect a directory before opening individual concept files.

### 5.7 Logs record change history

`log.md` files can record important updates at the bundle or directory level.

### 5.8 Tolerant consumers

Consumers should accept partial or evolving bundles. Missing optional fields, unknown types, unknown extension fields, missing indexes, and broken links should usually produce warnings, not hard failures.

---

## 6. Terminology

### Knowledge bundle

A self-contained directory tree of OKF documents. It is the unit of distribution.

Example:

```text
finance-okf/
├── index.md
├── metrics/
└── policies/
```

### Concept

A single unit of knowledge represented by one Markdown file.

Examples:

```text
metrics/net-revenue.md
tables/orders.md
playbooks/freshness-alert.md
```

### Concept ID

The file path inside the bundle without the `.md` suffix.

Examples:

```text
tables/orders.md        -> tables/orders
metrics/net-revenue.md  -> metrics/net-revenue
```

### Frontmatter

The YAML metadata block at the top of a concept file.

### Body

The Markdown content after the frontmatter.

### Link

A Markdown link from one concept to another or to an external source.

### Citation

A source reference that supports a claim in the body.

### Producer

A human, script, exporter, or agent that writes OKF content.

### Consumer

A human, agent, search index, static-site generator, graph viewer, catalog, or tool that reads OKF content.

---

## 7. OKF Bundle Structure

An OKF bundle is a folder containing Markdown files.

Example:

```text
okf-bundle/
├── index.md
├── log.md
├── datasets/
│   ├── index.md
│   └── sales.md
├── tables/
│   ├── index.md
│   ├── orders.md
│   └── customers.md
├── metrics/
│   ├── index.md
│   └── net-revenue.md
└── references/
    ├── index.md
    └── finance-policy.md
```

### 7.1 Root directory

The root directory should usually contain:

- `index.md`: a human- and agent-friendly entry point.
- `log.md`: optional change history.
- Subdirectories containing related concepts.

### 7.2 Subdirectories

Subdirectories can be organized however the producer wants.

Common examples:

```text
datasets/
tables/
metrics/
dashboards/
apis/
services/
playbooks/
policies/
decisions/
glossary/
references/
```

### 7.3 Reserved filenames

Two filenames have special meaning:

| Filename | Purpose |
|---|---|
| `index.md` | Directory listing and progressive disclosure. |
| `log.md` | Change history. |

Any other `.md` file is normally treated as a concept document.

---

## 8. Concept Documents

A concept document is a Markdown file representing one unit of knowledge.

It has two parts:

1. YAML frontmatter.
2. Markdown body.

Example:

````markdown
---
type: Table
title: Orders
description: One row per completed customer order.
resource: warehouse://commerce.analytics.orders
tags: [commerce, orders, revenue]
timestamp: 2026-06-29T10:00:00Z
owner: commerce-data
status: active
---

# Overview

The Orders table contains completed customer orders.

# Grain

One row represents one completed order.

# Schema

| Column | Type | Description |
|---|---|---|
| `order_id` | STRING | Unique order identifier. |
| `customer_id` | STRING | Customer identifier. |
| `order_total_usd` | NUMERIC | Order value before refunds. |

# Common Joins

- Join to [Customers](/tables/customers.md) on `customer_id`.

# Caveats

- Refunds are stored separately.
````

### 8.1 Good concept boundaries

Good concepts are focused and reusable.

Good examples:

```text
metrics/net-revenue.md
tables/orders.md
apis/create-customer.md
playbooks/revenue-reconciliation.md
policies/data-retention.md
```

Weak examples:

```text
misc.md
all-metrics.md
everything-about-data.md
notes.md
old.md
```

### 8.2 Recommended concept size

A concept should usually be small enough for an agent to load independently, but complete enough to answer the main questions about the subject.

A good concept answers:

- What is this?
- Why does it matter?
- How is it used?
- What are the important fields, rules, steps, or examples?
- What should readers be careful about?
- What other concepts are related?
- What sources support this knowledge?

---

## 9. YAML Frontmatter

YAML frontmatter is metadata at the top of a concept file.

Example:

```yaml
---
type: Metric
title: Net Revenue
description: Revenue after discounts and refunds.
tags: [finance, commerce, metric]
timestamp: 2026-06-29T10:00:00Z
owner: finance-analytics
status: active
---
```

### 9.1 Required field

#### `type`

Every concept document must have a non-empty `type` field.

Examples:

```yaml
type: Metric
```

```yaml
type: Table
```

```yaml
type: API Endpoint
```

```yaml
type: Playbook
```

There is no central registry of type values in OKF v0.1. Producers should use clear, descriptive names. Consumers should tolerate unknown types.

### 9.2 Recommended fields

#### `title`

Human-readable display title.

```yaml
title: Weekly Active Users
```

#### `description`

One-sentence summary.

```yaml
description: Unique users who performed a qualifying activity during a calendar week.
```

#### `resource`

URI for the underlying asset, if the concept describes one.

```yaml
resource: https://console.example.com/catalog/orders
```

For abstract concepts, this field may be omitted.

#### `tags`

A YAML list of short labels.

```yaml
tags: [analytics, metric, revenue]
```

#### `timestamp`

ISO 8601 timestamp of the last meaningful change.

```yaml
timestamp: 2026-06-29T10:00:00Z
```

### 9.3 Useful extension fields

OKF allows producer-defined fields. Common useful fields include:

```yaml
owner: analytics-platform
status: active
sensitivity: internal
source_system: BigQuery
reviewed_by: data-governance
reviewed_at: 2026-06-29
next_review_due: 2026-09-29
replaced_by: /metrics/new-net-revenue.md
```

### 9.4 Frontmatter guidelines

Use frontmatter for values that tools may filter, index, route, or display.

Good frontmatter:

```yaml
---
type: Metric
title: Net Revenue
description: Revenue after discounts and refunds.
tags: [commerce, finance, metric]
timestamp: 2026-06-29T10:00:00Z
owner: finance-analytics
status: active
---
```

Avoid invalid or unclear frontmatter:

```yaml
---
title: Missing type
---
```

Avoid overly complicated metadata unless your consumers support it.

---

## 10. Markdown Body

The body contains the actual knowledge.

It can include headings, paragraphs, lists, tables, code blocks, links, and citations.

### 10.1 Recommended body sections

OKF does not require fixed body sections, but these are useful:

```text
# Overview
# Definition
# Business Meaning
# Schema
# Calculation
# Examples
# Common Joins
# Inputs
# Outputs
# Dependencies
# Caveats
# Related Concepts
# Citations
```

### 10.2 Why structure matters

Structured Markdown helps humans scan and helps agents retrieve precise information.

Use:

- Headings for sections.
- Tables for schemas and parameters.
- Lists for steps and caveats.
- Code blocks for SQL, JSON, HTTP, YAML, shell commands, and examples.
- Links for relationships.

### 10.3 Example schema section

```markdown
# Schema

| Column | Type | Description |
|---|---|---|
| `order_id` | STRING | Unique order identifier. |
| `customer_id` | STRING | Foreign key to Customers. |
| `created_at` | TIMESTAMP | Time when the order was completed. |
```

### 10.4 Example calculation section

```sql
SELECT
  DATE(created_at) AS order_date,
  SUM(order_total_usd - discount_usd) AS net_revenue_usd
FROM commerce.analytics.orders
GROUP BY order_date;
```

### 10.5 Example caveats section

```markdown
# Caveats

- Data before 2024-01-01 came from the legacy pipeline.
- Refunds may arrive after the original order date.
- Test accounts are excluded from the production model.
```

Caveats are especially important for AI agents because they reduce confident but incorrect answers.

---

## 11. Links, Relationships, and Citations

### 11.1 Internal links

Concepts can link to other concepts with standard Markdown links.

Recommended bundle-relative link:

```markdown
See [Customers](/tables/customers.md) for customer profile fields.
```

Relative link:

```markdown
See [Orders](../tables/orders.md).
```

Bundle-relative links are often easier for tools to resolve consistently.

### 11.2 Link semantics

A link means there is a relationship. The surrounding prose explains the relationship.

Example:

```markdown
Orders can be joined to [Customers](/tables/customers.md) using `customer_id`.
```

This describes a join relationship.

Example:

```markdown
If revenue changes unexpectedly, follow the [Revenue Reconciliation Playbook](/playbooks/revenue-reconciliation.md).
```

This describes an operational relationship.

### 11.3 External links

External links can point to source documentation, dashboards, catalog entries, tickets, policies, or APIs.

Example:

```markdown
The authoritative source is the [Finance Revenue Policy](https://example.com/finance-policy).
```

### 11.4 Citations

A `# Citations` section lists sources that support the claims in the concept.

Example:

```markdown
# Citations

[1] [Finance Revenue Policy](https://example.com/finance-policy)
[2] [Orders Catalog Entry](https://example.com/catalog/orders)
```

Cite sources for:

- Official business definitions.
- API behavior.
- Regulatory or policy claims.
- Schema descriptions.
- Operational procedures.
- Data quality assumptions.

### 11.5 References as first-class concepts

You can mirror important sources into a `references/` directory.

Example:

```text
references/
├── index.md
├── finance-revenue-policy.md
└── api-style-guide.md
```

Then cite them internally:

```markdown
# Citations

[1] [Finance Revenue Policy](/references/finance-revenue-policy.md)
```

---

## 12. Index Files

An `index.md` file is a directory listing.

It helps humans and agents discover what is available before opening every file.

### 12.1 Root index example

````markdown
# Commerce Knowledge Bundle

This bundle documents commerce analytics knowledge.

## Tables

* [Orders](tables/orders.md) - One row per completed order.
* [Customers](tables/customers.md) - One row per customer profile.

## Metrics

* [Net Revenue](metrics/net-revenue.md) - Revenue after discounts and refunds.

## Playbooks

* [Revenue Reconciliation](playbooks/revenue-reconciliation.md) - Steps for investigating revenue mismatches.
````

### 12.2 Directory index example

````markdown
# Tables

* [Orders](orders.md) - One row per completed order.
* [Customers](customers.md) - One row per customer profile.
* [Refunds](refunds.md) - One row per refund event.
````

### 12.3 Index generation

Indexes may be written by hand or generated automatically from frontmatter.

A generator can read each concept’s `title` and `description`, then write index entries.

### 12.4 Best practices for indexes

- Keep descriptions short.
- Use headings to group related concepts.
- Include links to subdirectories.
- Regenerate indexes when files move.
- Keep the root index useful as an entry point.

---

## 13. Log Files

A `log.md` file records changes.

It can appear at the root or inside a subdirectory.

Example:

````markdown
# Bundle Update Log

## 2026-06-29

* **Initialization**: Created the initial OKF bundle.
* **Creation**: Added Orders, Customers, and Net Revenue concepts.
* **Update**: Added caveats to Revenue Reconciliation.

## 2026-06-15

* **Planning**: Defined initial bundle scope and directory structure.
````

### 13.1 Recommended log style

- Use newest entries first.
- Use ISO date headings: `YYYY-MM-DD`.
- Link to changed concepts when useful.
- Keep entries short.
- Use labels such as `Creation`, `Update`, `Deprecation`, `Review`, and `Fix`.

---

## 14. Conformance Rules

A bundle is conformant with OKF v0.1 if it follows a small set of rules.

### 14.1 Required rules

1. Every non-reserved `.md` file has parseable YAML frontmatter.
2. Every concept frontmatter block contains a non-empty `type` field.
3. Reserved files, when present, are used as `index.md` and `log.md` files rather than normal concepts.

### 14.2 Soft guidance

Consumers should not reject a bundle only because:

- Optional frontmatter fields are missing.
- Unknown frontmatter fields are present.
- The `type` value is unfamiliar.
- Internal links are broken.
- `index.md` files are missing.
- The body uses custom headings.

OKF is designed to be permissive because real bundles may be partial, generated incrementally, or maintained by multiple producers.

---

## 15. Versioning

OKF v0.1 is a draft version.

A bundle may declare its target version using metadata if the producer wants to make that explicit.

Example:

```yaml
okf_version: "0.1"
```

Consumers should use best-effort parsing:

- If version is missing, attempt to parse using known OKF conventions.
- If version is unknown, warn but try to read the bundle.
- Preserve unknown fields when round-tripping.

Producers should avoid relying on undocumented assumptions and should keep output as simple as possible.

---

## 16. Step-by-Step: How to Create OKF

This section gives a complete workflow for creating an OKF bundle.

### Step 1: Define the scope

Decide what the bundle will cover.

Examples:

- Commerce analytics knowledge.
- Finance metrics.
- API platform documentation.
- Security operations playbooks.
- Product feature knowledge.
- Data warehouse metadata.

Write a one-sentence scope statement:

```text
This bundle documents commerce analytics tables, official metrics, dashboards, and operational playbooks.
```

### Step 2: Identify consumers

Decide who or what will read the bundle.

Examples:

- Analysts.
- Engineers.
- AI agents.
- Documentation websites.
- Search indexes.
- Data catalogs.
- Governance reviewers.

The consumers determine how much detail, structure, and citation is needed.

### Step 3: Choose concept types

Define your local concept vocabulary.

Example:

```text
Dataset
Table
Metric
Dashboard
Pipeline
API Endpoint
Service
Playbook
Policy
Reference
Glossary Term
Decision Record
```

OKF does not require a central type registry, but your organization should be consistent.

### Step 4: Design the directory tree

Create directories that match your knowledge domain.

Example:

```text
commerce-okf/
├── index.md
├── log.md
├── datasets/
├── tables/
├── metrics/
├── dashboards/
├── playbooks/
└── references/
```

### Step 5: Create the root index

Create `index.md` at the root.

````markdown
# Commerce OKF Bundle

This bundle documents commerce analytics knowledge.

## Sections

* [Datasets](datasets/) - Warehouse datasets and ownership.
* [Tables](tables/) - Table schemas and usage notes.
* [Metrics](metrics/) - Official metric definitions.
* [Dashboards](dashboards/) - Reporting surfaces and owners.
* [Playbooks](playbooks/) - Operational procedures.
* [References](references/) - Source documents and policies.
````

### Step 6: Create directory indexes

Create an `index.md` inside each major directory.

Example:

````markdown
# Metrics

* [Net Revenue](net-revenue.md) - Revenue after discounts and refunds.
* [Weekly Active Users](weekly-active-users.md) - Unique active users by week.
````

### Step 7: Create concept files

Create one file per concept.

Example:

```text
metrics/net-revenue.md
tables/orders.md
playbooks/revenue-reconciliation.md
```

### Step 8: Add frontmatter

Every concept needs frontmatter with `type`.

````markdown
---
type: Metric
title: Net Revenue
description: Revenue after discounts and refunds.
tags: [commerce, finance, metric]
timestamp: 2026-06-29T10:00:00Z
owner: finance-analytics
status: active
---
````

### Step 9: Add structured Markdown content

Use headings and tables.

````markdown
# Definition

Net Revenue is revenue after discounts and refunds.

# Calculation

```sql
SELECT
  DATE(created_at) AS revenue_date,
  SUM(order_total_usd - discount_usd) AS revenue_before_refunds_usd
FROM commerce.analytics.orders
GROUP BY revenue_date;
```

# Caveats

- Refunds can arrive after the original order date.
- Finance recognition rules may apply in official reporting.
````

### Step 10: Link related concepts

Add Markdown links.

```markdown
This metric depends on [Orders](/tables/orders.md).
```

### Step 11: Add citations

Add sources for important claims.

````markdown
# Citations

[1] [Finance Revenue Recognition Policy](/references/finance-revenue-policy.md)
[2] [Orders Catalog Entry](https://example.com/catalog/orders)
````

### Step 12: Add a log

Create `log.md`.

````markdown
# Bundle Update Log

## 2026-06-29

* **Initialization**: Created initial OKF bundle.
* **Creation**: Added initial tables, metrics, and playbooks.
````

### Step 13: Validate

Check:

- YAML parses.
- Every concept has `type`.
- Links work.
- Indexes point to real files.
- Sensitive data is not exposed.
- Important claims have citations.

### Step 14: Publish

Distribute the bundle as:

- A Git repository.
- A zip or tarball.
- A directory in object storage.
- A static-site source directory.
- A package for an internal agent.

### Step 15: Maintain

Use a maintenance process:

- Review pull requests.
- Run validation in CI.
- Assign owners.
- Track changes in `log.md`.
- Mark deprecated concepts.
- Schedule periodic reviews.

---

## 17. Templates

### 17.1 Generic concept template

````markdown
---
type: <Concept Type>
title: <Human-readable title>
description: <One-sentence summary.>
resource: <Optional URI>
tags: [tag1, tag2]
timestamp: <YYYY-MM-DDTHH:MM:SSZ>
owner: <team-or-person>
status: active
---

# Overview

Explain what this concept is and why it matters.

# Details

Add structured knowledge here.

# Usage

Explain how humans or agents should use this concept.

# Caveats

- Add limitations, exceptions, and risks.

# Related Concepts

- [Related Concept](/path/to/concept.md)

# Citations

[1] [Source Title](https://example.com/source)
````

### 17.2 Table template

````markdown
---
type: Table
title: <Table Name>
description: <One-sentence summary of the table grain and purpose.>
resource: <catalog-or-warehouse-uri>
tags: [data, table]
timestamp: <YYYY-MM-DDTHH:MM:SSZ>
owner: <owning-team>
source_system: <warehouse-or-database>
status: active
---

# Overview

Explain what the table contains and who uses it.

# Grain

One row represents <row-level meaning>.

# Schema

| Column | Type | Description |
|---|---|---|
| `<column>` | `<type>` | <description> |

# Common Joins

- Join to [Other Table](/tables/other-table.md) on `<key>`.

# Example Query

```sql
SELECT *
FROM <database>.<schema>.<table>
LIMIT 10;
```

# Caveats

- <Important limitation.>

# Citations

[1] [Source](https://example.com/source)
````

### 17.3 Metric template

````markdown
---
type: Metric
title: <Metric Name>
description: <One-sentence metric definition.>
tags: [metric]
timestamp: <YYYY-MM-DDTHH:MM:SSZ>
owner: <owning-team>
status: active
---

# Definition

Define the metric precisely.

# Business Meaning

Explain what this metric indicates and how it is used.

# Calculation

```sql
-- Add canonical SQL or pseudocode here.
```

# Inputs

- [Input Table](/tables/input-table.md)

# Dimensions

- <Dimension 1>
- <Dimension 2>

# Caveats

- <Important caveat.>

# Citations

[1] [Source](https://example.com/source)
````

### 17.4 API endpoint template

````markdown
---
type: API Endpoint
title: <Endpoint Name>
description: <One-sentence endpoint purpose.>
resource: <api-doc-url>
tags: [api]
timestamp: <YYYY-MM-DDTHH:MM:SSZ>
owner: <owning-team>
status: active
---

# Overview

Describe what the endpoint does.

# Method and Path

```http
POST /customers
```

# Request

```json
{
  "email": "person@example.com",
  "name": "Example Person"
}
```

# Response

```json
{
  "customer_id": "cust_123"
}
```

# Errors

| Status | Meaning | Recovery |
|---|---|---|
| 400 | Bad request | Fix the payload. |
| 401 | Unauthorized | Check credentials. |

# Related Concepts

- [Customer Schema](/schemas/customer.md)

# Citations

[1] [API Documentation](https://example.com/api-docs)
````

### 17.5 Playbook template

````markdown
---
type: Playbook
title: <Playbook Name>
description: <One-sentence summary of when to use this playbook.>
tags: [playbook, operations]
timestamp: <YYYY-MM-DDTHH:MM:SSZ>
owner: <owning-team>
status: active
---

# Trigger

Describe when this playbook should be used.

# Preconditions

- <Access requirement or condition.>

# Steps

1. <Step one.>
2. <Step two.>
3. <Step three.>

# Escalation

Escalate to <team/person/channel> when <condition>.

# Verification

Describe how to confirm the issue is resolved.

# Related Concepts

- [Related System](/services/example.md)

# Citations

[1] [Runbook Source](https://example.com/source)
````

---

## 18. Complete Example Bundle

This section shows a complete small OKF bundle.

### 18.1 Directory tree

```text
commerce-okf/
├── index.md
├── log.md
├── tables/
│   ├── index.md
│   ├── orders.md
│   └── customers.md
├── metrics/
│   ├── index.md
│   └── net-revenue.md
└── playbooks/
    ├── index.md
    └── revenue-reconciliation.md
```

### 18.2 Root `index.md`

````markdown
# Commerce OKF Bundle

This bundle documents the commerce analytics domain.

## Sections

* [Tables](tables/) - Warehouse tables used by commerce analytics.
* [Metrics](metrics/) - Official commerce metrics.
* [Playbooks](playbooks/) - Operational procedures for common analytics issues.
````

### 18.3 Root `log.md`

````markdown
# Bundle Update Log

## 2026-06-29

* **Initialization**: Created initial Commerce OKF bundle.
* **Creation**: Added Orders, Customers, Net Revenue, and Revenue Reconciliation concepts.
````

### 18.4 `tables/index.md`

````markdown
# Tables

* [Orders](orders.md) - One row per completed commerce order.
* [Customers](customers.md) - One row per customer profile.
````

### 18.5 `tables/orders.md`

````markdown
---
type: Table
title: Orders
description: One row per completed commerce order.
resource: warehouse://commerce.analytics.orders
tags: [commerce, orders, revenue]
timestamp: 2026-06-29T10:00:00Z
owner: commerce-data
status: active
---

# Overview

The Orders table contains completed customer orders. It is the primary source for order volume and revenue calculations.

# Grain

One row represents one completed order.

# Schema

| Column | Type | Description |
|---|---|---|
| `order_id` | STRING | Unique order identifier. |
| `customer_id` | STRING | Customer identifier. |
| `order_total_usd` | NUMERIC | Total order amount in USD before refunds. |
| `discount_usd` | NUMERIC | Discount amount in USD. |
| `created_at` | TIMESTAMP | Time when the order was completed. |

# Common Joins

- Join to [Customers](/tables/customers.md) on `customer_id`.

# Used By

- [Net Revenue](/metrics/net-revenue.md)
- [Revenue Reconciliation](/playbooks/revenue-reconciliation.md)

# Caveats

- Orders from test accounts are excluded.
- Refunds are not stored in this table.
````

### 18.6 `tables/customers.md`

````markdown
---
type: Table
title: Customers
description: One row per customer profile.
resource: warehouse://commerce.analytics.customers
tags: [commerce, customers]
timestamp: 2026-06-29T10:00:00Z
owner: commerce-data
status: active
---

# Overview

The Customers table contains customer profile information.

# Grain

One row represents one customer.

# Schema

| Column | Type | Description |
|---|---|---|
| `customer_id` | STRING | Unique customer identifier. |
| `email_hash` | STRING | Hashed customer email address. |
| `created_at` | TIMESTAMP | Time when the customer profile was created. |
| `segment` | STRING | Current customer segment. |

# Common Joins

- Join to [Orders](/tables/orders.md) on `customer_id`.

# Caveats

- Segment is current-state and not historically versioned.
````

### 18.7 `metrics/index.md`

````markdown
# Metrics

* [Net Revenue](net-revenue.md) - Revenue after discounts and refunds.
````

### 18.8 `metrics/net-revenue.md`

````markdown
---
type: Metric
title: Net Revenue
description: Revenue after discounts and refunds.
tags: [commerce, finance, revenue, metric]
timestamp: 2026-06-29T10:00:00Z
owner: finance-analytics
status: active
---

# Definition

Net Revenue is order revenue after discounts and refunds.

# Business Meaning

This metric tracks commerce revenue after customer-facing adjustments.

# Calculation

```sql
SELECT
  DATE(created_at) AS revenue_date,
  SUM(order_total_usd - discount_usd) AS revenue_before_refunds_usd
FROM commerce.analytics.orders
GROUP BY revenue_date;
```

Refunds must be subtracted when refund data is available.

# Inputs

- [Orders](/tables/orders.md)

# Caveats

- Refund timing can cause differences between order date and accounting date.
- Finance-owned dashboards may apply additional recognition rules.

# Related Concepts

- [Revenue Reconciliation](/playbooks/revenue-reconciliation.md)
````

### 18.9 `playbooks/index.md`

````markdown
# Playbooks

* [Revenue Reconciliation](revenue-reconciliation.md) - Steps for investigating revenue mismatches.
````

### 18.10 `playbooks/revenue-reconciliation.md`

````markdown
---
type: Playbook
title: Revenue Reconciliation
description: Steps for investigating mismatches in commerce revenue reporting.
tags: [commerce, finance, playbook]
timestamp: 2026-06-29T10:00:00Z
owner: finance-analytics
status: active
---

# Trigger

Use this playbook when reported revenue differs between warehouse queries, finance dashboards, and executive dashboards.

# Steps

1. Confirm the date range and timezone.
2. Query [Orders](/tables/orders.md) for raw order totals.
3. Recalculate [Net Revenue](/metrics/net-revenue.md).
4. Check whether refunds have been loaded.
5. Confirm whether finance recognition rules apply.
6. Document the root cause and update the bundle if new context was discovered.

# Escalation

Escalate to the finance analytics owner if the mismatch exceeds the reporting tolerance.

# Verification

The issue is resolved when the warehouse query, finance dashboard, and executive dashboard agree or have a documented reason for difference.
````

---

## 19. Validation and Quality Checks

### 19.1 Minimal validation

A minimal OKF validator should check:

- Every normal `.md` file has frontmatter.
- Frontmatter is valid YAML.
- Frontmatter contains a non-empty `type`.

### 19.2 Recommended validation

A stronger validator should also check:

- `title` exists.
- `description` exists.
- `tags` is a list.
- `timestamp` is ISO 8601 if present.
- Internal links resolve.
- `index.md` files link to existing files.
- Reserved filenames are not used as concepts.

### 19.3 Organization-specific validation

Your organization may also require:

- `owner` for all production concepts.
- `status` from an approved list.
- `sensitivity` labels.
- Citations for policy and metric concepts.
- Review dates.
- No secrets or credentials.
- Approved concept type names.

### 19.4 Basic validation script

```python
from pathlib import Path
import sys
import yaml

RESERVED = {"index.md", "log.md"}


def split_frontmatter(text: str):
    if not text.startswith("---\n"):
        return None
    end = text.find("\n---\n", 4)
    if end == -1:
        return None
    return text[4:end]


def validate_bundle(root: Path) -> int:
    errors = 0

    for path in root.rglob("*.md"):
        if path.name in RESERVED:
            continue

        rel = path.relative_to(root)
        text = path.read_text(encoding="utf-8")
        raw_yaml = split_frontmatter(text)

        if raw_yaml is None:
            print(f"ERROR {rel}: missing frontmatter")
            errors += 1
            continue

        try:
            data = yaml.safe_load(raw_yaml) or {}
        except Exception as exc:
            print(f"ERROR {rel}: invalid YAML: {exc}")
            errors += 1
            continue

        value = data.get("type")
        if not isinstance(value, str) or not value.strip():
            print(f"ERROR {rel}: missing non-empty type")
            errors += 1

    return errors


if __name__ == "__main__":
    root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(".")
    count = validate_bundle(root)
    if count:
        print(f"Validation failed with {count} error(s).")
        sys.exit(1)
    print("OKF validation passed.")
```

### 19.5 CI example

```yaml
name: Validate OKF

on:
  pull_request:
  push:
    branches: [main]

jobs:
  validate-okf:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - run: pip install pyyaml
      - run: python scripts/validate_okf.py ./commerce-okf
```

---

## 20. Best Practices

### 20.1 Use one concept per file

This improves search, linking, review, and context loading.

### 20.2 Use clear filenames

Prefer:

```text
net-revenue.md
weekly-active-users.md
revenue-reconciliation.md
create-customer.md
```

Avoid:

```text
misc.md
old.md
new.md
stuff.md
notes.md
```

### 20.3 Keep frontmatter lightweight

Use frontmatter for structured metadata. Do not turn it into a full database.

### 20.4 Put real explanation in the body

Agents need prose, examples, caveats, and context, not just fields.

### 20.5 Add caveats

Document known limitations, exceptions, stale data, deprecated behavior, and policy constraints.

### 20.6 Prefer stable links

Use bundle-relative links like:

```markdown
[Orders](/tables/orders.md)
```

### 20.7 Cite authoritative sources

Citations improve trust and help agents avoid unsupported claims.

### 20.8 Treat OKF as code

Use Git workflows:

- Pull requests.
- Reviews.
- Diffs.
- CI validation.
- CODEOWNERS.
- Release tags.

### 20.9 Preserve manual edits

If a generator updates files, protect human-authored sections.

Example convention:

```markdown
<!-- generated:start schema -->
Generated content here.
<!-- generated:end schema -->

# Human Notes

Manual context here.
```

### 20.10 Mark deprecated concepts

Use metadata and body warnings.

```yaml
status: deprecated
replaced_by: /metrics/net-revenue.md
```

````markdown
# Deprecation Notice

This concept is deprecated. Use [Net Revenue](/metrics/net-revenue.md) instead.
````

---

## 21. Implementation Notes

### 21.1 Producer responsibilities

A producer should:

- Write valid Markdown.
- Write valid YAML frontmatter.
- Include a non-empty `type` field.
- Use stable paths.
- Generate helpful titles and descriptions.
- Add links when relationships are known.
- Add citations when claims come from sources.
- Preserve unknown fields when updating existing documents.
- Avoid overwriting manual content accidentally.

### 21.2 Consumer responsibilities

A consumer should:

- Recursively read Markdown files.
- Identify reserved filenames.
- Parse frontmatter.
- Extract concept metadata.
- Extract Markdown links.
- Tolerate unknown fields.
- Tolerate unknown concept types.
- Tolerate broken links.
- Warn rather than fail when possible.

### 21.3 Suggested consumer algorithm

```text
1. Walk the bundle directory.
2. For each Markdown file:
   - If it is index.md, parse as an index.
   - If it is log.md, parse as a log.
   - Otherwise, parse as a concept.
3. For each concept:
   - Parse YAML frontmatter.
   - Require non-empty type.
   - Extract title, description, tags, resource, timestamp.
   - Parse body headings, links, code blocks, and citations.
4. Build a concept map.
5. Build a link graph.
6. Expose search, browsing, graph, or agent retrieval.
```

### 21.4 Search indexing fields

Useful fields to index:

- Concept ID.
- File path.
- Type.
- Title.
- Description.
- Tags.
- Resource.
- Timestamp.
- Body text.
- Headings.
- Code blocks.
- Links.
- Citations.

### 21.5 Graph representation

A graph viewer can treat:

- Concepts as nodes.
- Markdown links as directed edges.
- `type` as node category.
- `title` as display label.
- `description` as preview text.
- `tags` as filters.

---

## 22. Using OKF with AI Agents

OKF is particularly useful for AI agents because it provides curated context in a predictable format.

### 22.1 Agent retrieval workflow

A practical workflow:

```text
User question
  ↓
Read root index
  ↓
Select relevant directories
  ↓
Read directory indexes
  ↓
Retrieve relevant concept files
  ↓
Follow related links
  ↓
Use caveats and citations
  ↓
Answer with grounded context
```

### 22.2 Agent instructions

Example instruction for an agent:

```text
You have access to an Open Knowledge Format bundle.
Use index.md files to navigate progressively.
Read relevant concept documents before answering.
Follow Markdown links when concepts depend on other concepts.
Pay attention to Caveats, Status, and Citations sections.
If the bundle lacks the needed concept, say so instead of guessing.
```

### 22.3 Why indexes matter for agents

Large bundles may be too big to load all at once. Indexes let the agent inspect the map before selecting specific files.

### 22.4 Why caveats matter for agents

Caveats help prevent hallucinated or overly broad answers.

Example caveat:

```markdown
# Caveats

- This metric excludes trial users.
- Data before 2024-01-01 used a legacy pipeline.
- The dashboard uses UTC, not local business time.
```

### 22.5 Agent-maintained OKF

Agents can help maintain OKF by:

- Drafting concepts.
- Updating descriptions.
- Adding links.
- Generating indexes.
- Detecting broken links.
- Summarizing changes in logs.
- Suggesting citations.

Human review is recommended for authoritative content.

---

## 23. Security and Governance

OKF is a format, not a security layer. Security depends on where the bundle is stored and how it is served.

### 23.1 Do not include secrets

Avoid storing:

- API keys.
- Passwords.
- Tokens.
- Private credentials.
- Sensitive personal data.
- Confidential customer data.

### 23.2 Add sensitivity metadata

Example:

```yaml
sensitivity: internal
classification: confidential
contains_pii: false
```

### 23.3 Enforce access outside OKF

Use repository permissions, object-storage IAM, internal documentation permissions, or agent tool permissions.

### 23.4 Add governance metadata

Example:

```yaml
owner: data-governance
status: approved
reviewed_by: finance-data-steward
reviewed_at: 2026-06-29
next_review_due: 2026-09-29
```

### 23.5 Use citations for provenance

Citations show where knowledge came from and make review easier.

---

## 24. Maintenance Workflow

Knowledge becomes stale, so OKF bundles need maintenance.

### 24.1 Suggested lifecycle states

```yaml
status: draft
status: active
status: deprecated
status: archived
```

### 24.2 Review cadence

Add review metadata for important concepts:

```yaml
reviewed_at: 2026-06-29
next_review_due: 2026-09-29
```

### 24.3 Deprecation workflow

When replacing a concept:

1. Keep the old file.
2. Mark it deprecated.
3. Link to the replacement.
4. Add a log entry.

Example:

```yaml
status: deprecated
replaced_by: /metrics/new-net-revenue.md
```

### 24.4 Change management

Use `log.md` for meaningful changes:

- New concepts.
- Definition changes.
- Deprecations.
- Ownership changes.
- Important corrections.
- Major citation updates.

### 24.5 Automated checks

Useful automation:

- YAML validation.
- Required field validation.
- Link checking.
- Secret scanning.
- Timestamp checking.
- Required owner checking.
- Citation checking for governed concept types.

---

## 25. FAQ

### Is OKF only for Google Cloud?

No. OKF is intended to be vendor-neutral. It can describe resources from any cloud, database, service, or organization.

### Is OKF only for data catalogs?

No. Data catalogs are an important use case, but OKF can also describe APIs, services, metrics, policies, playbooks, decisions, product features, and references.

### What is the only required frontmatter field?

The required field for concept documents is `type`.

### Do `index.md` files need frontmatter?

Generally no. They are directory listings. Some producers may add metadata at the root for versioning, but consumers should not require it.

### Can I add custom fields?

Yes. Producers may add extra frontmatter fields. Consumers should preserve unknown fields when possible.

### What happens if a link is broken?

Consumers should tolerate broken links, but producers should check and fix them where possible.

### Can OKF be generated automatically?

Yes. OKF can be generated from data catalogs, warehouses, APIs, documentation sites, repositories, or agents.

### Should humans review generated OKF?

For important or authoritative knowledge, yes. Automated generation is useful, but business meaning and governance often require human review.

### Can OKF be indexed in a vector database?

Yes. OKF can be used as source material for embeddings and retrieval systems.

### Can OKF be rendered as a website?

Yes. Since it is Markdown, it can be rendered by many static-site and documentation tools.

---

## 26. Quick Reference

### Minimal concept

````markdown
---
type: Reference
---

This is a minimal OKF concept.
````

### Recommended concept

````markdown
---
type: Metric
title: Weekly Active Users
description: Unique users who performed a qualifying activity during a calendar week.
tags: [analytics, metric]
timestamp: 2026-06-29T10:00:00Z
owner: product-analytics
status: active
---

# Definition

Weekly Active Users counts unique users with at least one qualifying activity in a calendar week.

# Related Concepts

- [Events](/tables/events.md)
````

### Reserved filenames

| File | Purpose |
|---|---|
| `index.md` | Directory listing. |
| `log.md` | Change history. |

### Required frontmatter

| Field | Required | Purpose |
|---|---:|---|
| `type` | Yes | Identifies the concept kind. |

### Recommended frontmatter

| Field | Purpose |
|---|---|
| `title` | Human-readable display name. |
| `description` | Short summary. |
| `resource` | URI of underlying asset. |
| `tags` | Cross-cutting labels. |
| `timestamp` | Last meaningful update time. |

### Creation checklist

1. Define scope.
2. Identify consumers.
3. Choose concept types.
4. Create directory structure.
5. Create root `index.md`.
6. Create directory indexes.
7. Create concept files.
8. Add YAML frontmatter.
9. Add structured Markdown body.
10. Add links.
11. Add citations.
12. Add `log.md`.
13. Validate.
14. Publish.
15. Maintain.

---

## 27. References

The following sources were used to ground this documentation:

1. Google Cloud Blog, **Introducing the Open Knowledge Format**  
   https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing

2. Official OKF v0.1 draft specification, `SPEC.md`  
   https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md

3. Official OKF README and reference implementation notes  
   https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/README.md

4. GoogleCloudPlatform Knowledge Catalog repository  
   https://github.com/GoogleCloudPlatform/knowledge-catalog

---

## Appendix A: Starter Bundle Commands

Use these shell commands to create a minimal starter bundle.

```bash
mkdir -p my-okf-bundle/{concepts,references}

cat > my-okf-bundle/index.md <<'EOF_INDEX'
# My OKF Bundle

## Sections

* [Concepts](concepts/) - Main concepts.
* [References](references/) - Supporting sources.
EOF_INDEX

cat > my-okf-bundle/log.md <<'EOF_LOG'
# Bundle Update Log

## 2026-06-29

* **Initialization**: Created initial bundle.
EOF_LOG

cat > my-okf-bundle/concepts/index.md <<'EOF_CONCEPT_INDEX'
# Concepts

* [Example Concept](example-concept.md) - Starter concept.
EOF_CONCEPT_INDEX

cat > my-okf-bundle/concepts/example-concept.md <<'EOF_CONCEPT'
---
type: Reference
title: Example Concept
description: Starter concept for an OKF bundle.
tags: [example]
timestamp: 2026-06-29T10:00:00Z
---

# Overview

This is the first concept in the bundle.
EOF_CONCEPT
```

---

## Appendix B: Authoring Rules

Use these rules when creating production OKF content:

1. One concept per file.
2. Use clear, stable filenames.
3. Always include `type`.
4. Include `title` and `description` unless there is a strong reason not to.
5. Write for humans first, but structure for agents.
6. Add examples whenever possible.
7. Add caveats when misuse is likely.
8. Link related concepts.
9. Cite authoritative sources.
10. Review important concepts with domain experts.
11. Keep generated output deterministic.
12. Validate before publishing.
13. Treat the bundle as living documentation.

---

## Appendix C: Suggested Extension Vocabulary

These fields are not required by OKF v0.1, but they are useful in real-world bundles.

| Field | Example | Purpose |
|---|---|---|
| `owner` | `analytics-platform` | Responsible team or person. |
| `status` | `active` | Lifecycle state. |
| `sensitivity` | `internal` | Information classification. |
| `source_system` | `BigQuery` | Origin system. |
| `reviewed_by` | `data-governance` | Last reviewer. |
| `reviewed_at` | `2026-06-29` | Review date. |
| `next_review_due` | `2026-09-29` | Maintenance schedule. |
| `replaced_by` | `/metrics/new-metric.md` | Replacement for deprecated concept. |
| `domain` | `commerce` | Business or technical domain. |
| `criticality` | `high` | Importance of the concept. |
