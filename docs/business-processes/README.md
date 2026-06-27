# Business Processes

This section contains a starter catalog of **150 reusable business-process patterns** for Neuro Graph.

Each process page contains:

- A workflow diagram as SVG
- A primary workflow table
- Typical business concepts
- CDS/custom-table correlation signals
- Common variants and exception paths
- RDF/TTL mapping hints
- Human confirmation questions

> This is a practical starter library, not a claim that these are literally all possible workflows. Real businesses can add variants, industry extensions, local rules, and custom process templates.

## Process catalog

### Customer & Revenue

- [BP-001 — Lead Capture to Qualification](./lead-capture-to-qualification.md)
- [BP-002 — Campaign to Lead](./campaign-to-lead.md)
- [BP-003 — Opportunity to Quote](./opportunity-to-quote.md)
- [BP-004 — Quote to Order](./quote-to-order.md)
- [BP-005 — Contract to Renewal](./contract-to-renewal.md)
- [BP-006 — Order Capture to Confirmation](./order-capture-to-confirmation.md)
- [BP-007 — Order to Delivery](./order-to-delivery.md)
- [BP-008 — Delivery to Billing](./delivery-to-billing.md)
- [BP-009 — Billing to Cash](./billing-to-cash.md)
- [BP-010 — Customer Return to Credit](./customer-return-to-credit.md)
- [BP-011 — Complaint to Resolution](./complaint-to-resolution.md)
- [BP-012 — Service Request to Closure](./service-request-to-closure.md)
- [BP-013 — Subscription Activation to Renewal](./subscription-activation-to-renewal.md)
- [BP-014 — Usage Capture to Billing](./usage-capture-to-billing.md)
- [BP-015 — Partner Channel Order to Settlement](./partner-channel-order-to-settlement.md)
- [BP-016 — Customer Onboarding to Account Activation](./customer-onboarding-to-account-activation.md)
- [BP-017 — Credit Check to Order Release](./credit-check-to-order-release.md)
- [BP-018 — Price Determination to Approval](./price-determination-to-approval.md)

### Procurement & Supplier

- [BP-019 — Supplier Discovery to Qualification](./supplier-discovery-to-qualification.md)
- [BP-020 — Supplier Onboarding to Activation](./supplier-onboarding-to-activation.md)
- [BP-021 — Source to Contract](./source-to-contract.md)
- [BP-022 — Contract to Purchase Requisition](./contract-to-purchase-requisition.md)
- [BP-023 — Purchase Requisition to Purchase Order](./purchase-requisition-to-purchase-order.md)
- [BP-024 — Purchase Order to Confirmation](./purchase-order-to-confirmation.md)
- [BP-025 — Purchase Order to Goods Receipt](./purchase-order-to-goods-receipt.md)
- [BP-026 — Goods Receipt to Supplier Invoice](./goods-receipt-to-supplier-invoice.md)
- [BP-027 — Supplier Invoice to Payment](./supplier-invoice-to-payment.md)
- [BP-028 — Three Way Match to Exception Resolution](./three-way-match-to-exception-resolution.md)
- [BP-029 — Supplier Return to Credit Memo](./supplier-return-to-credit-memo.md)
- [BP-030 — Spend Request to Approval](./spend-request-to-approval.md)
- [BP-031 — Catalog Request to Order](./catalog-request-to-order.md)
- [BP-032 — Supplier Performance Review to Improvement](./supplier-performance-review-to-improvement.md)
- [BP-033 — Contract Compliance to Exception](./contract-compliance-to-exception.md)
- [BP-034 — Import Procurement to Landed Cost](./import-procurement-to-landed-cost.md)
- [BP-035 — Service Entry to Invoice](./service-entry-to-invoice.md)
- [BP-036 — Procurement Closure to Archive](./procurement-closure-to-archive.md)

### Inventory & Logistics

- [BP-037 — Material Request to Reservation](./material-request-to-reservation.md)
- [BP-038 — Inbound Delivery to Putaway](./inbound-delivery-to-putaway.md)
- [BP-039 — Outbound Delivery to Goods Issue](./outbound-delivery-to-goods-issue.md)
- [BP-040 — Stock Transfer Request to Receipt](./stock-transfer-request-to-receipt.md)
- [BP-041 — Goods Movement to Inventory Posting](./goods-movement-to-inventory-posting.md)
- [BP-042 — Cycle Count to Adjustment](./cycle-count-to-adjustment.md)
- [BP-043 — Physical Inventory to Reconciliation](./physical-inventory-to-reconciliation.md)
- [BP-044 — Batch Creation to Traceability](./batch-creation-to-traceability.md)
- [BP-045 — Serial Number Assignment to Tracking](./serial-number-assignment-to-tracking.md)
- [BP-046 — Warehouse Task to Confirmation](./warehouse-task-to-confirmation.md)
- [BP-047 — Picking to Packing](./picking-to-packing.md)
- [BP-048 — Packing to Shipment](./packing-to-shipment.md)
- [BP-049 — Shipment Planning to Dispatch](./shipment-planning-to-dispatch.md)
- [BP-050 — Transportation Tender to Carrier Confirmation](./transportation-tender-to-carrier-confirmation.md)
- [BP-051 — Freight Cost Capture to Settlement](./freight-cost-capture-to-settlement.md)
- [BP-052 — Return Receipt to Restock](./return-receipt-to-restock.md)
- [BP-053 — Scrap Request to Inventory Writeoff](./scrap-request-to-inventory-writeoff.md)
- [BP-054 — Inventory Aging to Disposition](./inventory-aging-to-disposition.md)

### Manufacturing & Operations

- [BP-055 — Demand Signal to Production Plan](./demand-signal-to-production-plan.md)
- [BP-056 — Production Order Creation to Release](./production-order-creation-to-release.md)
- [BP-057 — Production Order Release to Staging](./production-order-release-to-staging.md)
- [BP-058 — Material Staging to Consumption](./material-staging-to-consumption.md)
- [BP-059 — Operation Confirmation to Yield](./operation-confirmation-to-yield.md)
- [BP-060 — Quality Inspection to Usage Decision](./quality-inspection-to-usage-decision.md)
- [BP-061 — Production Variance to Settlement](./production-variance-to-settlement.md)
- [BP-062 — Make to Stock Production](./make-to-stock-production.md)
- [BP-063 — Make to Order Production](./make-to-order-production.md)
- [BP-064 — Engineer to Order Fulfillment](./engineer-to-order-fulfillment.md)
- [BP-065 — Bill of Material Change to Release](./bill-of-material-change-to-release.md)
- [BP-066 — Routing Change to Production Version](./routing-change-to-production-version.md)
- [BP-067 — Work Center Capacity to Dispatch](./work-center-capacity-to-dispatch.md)
- [BP-068 — Shop Floor Issue to Resolution](./shop-floor-issue-to-resolution.md)
- [BP-069 — Rework Order to Completion](./rework-order-to-completion.md)
- [BP-070 — Subcontracting Issue to Receipt](./subcontracting-issue-to-receipt.md)
- [BP-071 — Co Product Allocation to Costing](./co-product-allocation-to-costing.md)
- [BP-072 — Production Close to Archive](./production-close-to-archive.md)

### Finance & Controlling

- [BP-073 — Journal Entry Request to Posting](./journal-entry-request-to-posting.md)
- [BP-074 — Accrual Calculation to Reversal](./accrual-calculation-to-reversal.md)
- [BP-075 — Accounts Payable Invoice to Clearing](./accounts-payable-invoice-to-clearing.md)
- [BP-076 — Accounts Receivable Invoice to Clearing](./accounts-receivable-invoice-to-clearing.md)
- [BP-077 — Incoming Payment to Bank Reconciliation](./incoming-payment-to-bank-reconciliation.md)
- [BP-078 — Outgoing Payment to Bank Statement](./outgoing-payment-to-bank-statement.md)
- [BP-079 — Bank Statement to Cash Application](./bank-statement-to-cash-application.md)
- [BP-080 — Expense Claim to Reimbursement](./expense-claim-to-reimbursement.md)
- [BP-081 — Cost Center Planning to Allocation](./cost-center-planning-to-allocation.md)
- [BP-082 — Profit Center Posting to Reporting](./profit-center-posting-to-reporting.md)
- [BP-083 — Internal Order Planning to Settlement](./internal-order-planning-to-settlement.md)
- [BP-084 — Asset Acquisition to Capitalization](./asset-acquisition-to-capitalization.md)
- [BP-085 — Asset Depreciation to Posting](./asset-depreciation-to-posting.md)
- [BP-086 — Asset Transfer to Retirement](./asset-transfer-to-retirement.md)
- [BP-087 — Budget Request to Release](./budget-request-to-release.md)
- [BP-088 — Commitment Tracking to Actuals](./commitment-tracking-to-actuals.md)
- [BP-089 — Period Close to Financial Statement](./period-close-to-financial-statement.md)
- [BP-090 — Intercompany Transaction to Reconciliation](./intercompany-transaction-to-reconciliation.md)
- [BP-091 — Tax Determination to Reporting](./tax-determination-to-reporting.md)
- [BP-092 — Currency Revaluation to Posting](./currency-revaluation-to-posting.md)

### Assets & Maintenance

- [BP-093 — Maintenance Request to Notification](./maintenance-request-to-notification.md)
- [BP-094 — Notification to Work Order](./notification-to-work-order.md)
- [BP-095 — Work Order Planning to Release](./work-order-planning-to-release.md)
- [BP-096 — Work Order Execution to Confirmation](./work-order-execution-to-confirmation.md)
- [BP-097 — Spare Part Reservation to Issue](./spare-part-reservation-to-issue.md)
- [BP-098 — Breakdown Event to Restoration](./breakdown-event-to-restoration.md)
- [BP-099 — Preventive Maintenance Plan to Call](./preventive-maintenance-plan-to-call.md)
- [BP-100 — Inspection Finding to Corrective Action](./inspection-finding-to-corrective-action.md)
- [BP-101 — Meter Reading to Maintenance Trigger](./meter-reading-to-maintenance-trigger.md)
- [BP-102 — Maintenance Cost Capture to Settlement](./maintenance-cost-capture-to-settlement.md)
- [BP-103 — Asset Warranty Claim to Recovery](./asset-warranty-claim-to-recovery.md)
- [BP-104 — Equipment Installation to Decommissioning](./equipment-installation-to-decommissioning.md)

### Projects & Services

- [BP-105 — Project Proposal to Approval](./project-proposal-to-approval.md)
- [BP-106 — Project Planning to Baseline](./project-planning-to-baseline.md)
- [BP-107 — Work Package Assignment to Execution](./work-package-assignment-to-execution.md)
- [BP-108 — Timesheet Capture to Approval](./timesheet-capture-to-approval.md)
- [BP-109 — Milestone Completion to Billing](./milestone-completion-to-billing.md)
- [BP-110 — Service Contract to Service Order](./service-contract-to-service-order.md)
- [BP-111 — Service Order to Dispatch](./service-order-to-dispatch.md)
- [BP-112 — Service Delivery to Confirmation](./service-delivery-to-confirmation.md)
- [BP-113 — Service Confirmation to Billing](./service-confirmation-to-billing.md)
- [BP-114 — Project Cost Capture to Settlement](./project-cost-capture-to-settlement.md)
- [BP-115 — Change Request to Scope Update](./change-request-to-scope-update.md)
- [BP-116 — Project Closure to Lessons Learned](./project-closure-to-lessons-learned.md)

### Workforce & HR

- [BP-117 — Workforce Request to Job Requisition](./workforce-request-to-job-requisition.md)
- [BP-118 — Candidate Application to Screening](./candidate-application-to-screening.md)
- [BP-119 — Interview Scheduling to Feedback](./interview-scheduling-to-feedback.md)
- [BP-120 — Offer Creation to Acceptance](./offer-creation-to-acceptance.md)
- [BP-121 — Employee Onboarding to Activation](./employee-onboarding-to-activation.md)
- [BP-122 — Employee Master Data Change to Approval](./employee-master-data-change-to-approval.md)
- [BP-123 — Time Recording to Approval](./time-recording-to-approval.md)
- [BP-124 — Leave Request to Approval](./leave-request-to-approval.md)
- [BP-125 — Payroll Preparation to Payment](./payroll-preparation-to-payment.md)
- [BP-126 — Performance Goal Setting to Review](./performance-goal-setting-to-review.md)
- [BP-127 — Learning Assignment to Completion](./learning-assignment-to-completion.md)
- [BP-128 — Employee Offboarding to Deactivation](./employee-offboarding-to-deactivation.md)

### Planning & Supply Chain

- [BP-129 — Strategic Plan to Demand Forecast](./strategic-plan-to-demand-forecast.md)
- [BP-130 — Demand Forecast to Supply Plan](./demand-forecast-to-supply-plan.md)
- [BP-131 — Supply Plan to Procurement Proposal](./supply-plan-to-procurement-proposal.md)
- [BP-132 — Supply Plan to Production Proposal](./supply-plan-to-production-proposal.md)
- [BP-133 — Sales and Operations Planning Cycle](./sales-and-operations-planning-cycle.md)
- [BP-134 — Material Requirements Planning to Exception](./material-requirements-planning-to-exception.md)
- [BP-135 — Replenishment Proposal to Order](./replenishment-proposal-to-order.md)
- [BP-136 — Allocation Planning to Fulfillment](./allocation-planning-to-fulfillment.md)
- [BP-137 — Capacity Planning to Constraint Resolution](./capacity-planning-to-constraint-resolution.md)
- [BP-138 — Scenario Planning to Decision](./scenario-planning-to-decision.md)
- [BP-139 — Forecast Consumption to Rebalance](./forecast-consumption-to-rebalance.md)
- [BP-140 — Supply Chain Exception to Recovery](./supply-chain-exception-to-recovery.md)

### Governance Risk Data

- [BP-141 — Policy Draft to Publication](./policy-draft-to-publication.md)
- [BP-142 — Control Design to Test](./control-design-to-test.md)
- [BP-143 — Risk Identification to Mitigation](./risk-identification-to-mitigation.md)
- [BP-144 — Audit Finding to Remediation](./audit-finding-to-remediation.md)
- [BP-145 — Access Request to Approval](./access-request-to-approval.md)
- [BP-146 — Role Design to Assignment](./role-design-to-assignment.md)
- [BP-147 — Master Data Request to Approval](./master-data-request-to-approval.md)
- [BP-148 — Data Quality Issue to Correction](./data-quality-issue-to-correction.md)
- [BP-149 — Integration Event to Error Resolution](./integration-event-to-error-resolution.md)
- [BP-150 — Change Request to Production Release](./change-request-to-production-release.md)

