---
layout: Integration
status: published
name: Twilio
title: Dagster & Twilio
sidebar_label: Twilio
excerpt: Integrate Twilio tasks into your data pipeline runs.
date: 2024-08-30
apireflink: https://docs.dagster.io/api/libraries/dagster-twilio
docslink:
partnerlink: https://www.twilio.com/
categories:
  - Alerting
enabledBy:
enables:
tags: [dagster-supported, alerting]
sidebar_custom_props:
  logo: images/integrations/twilio.svg
---

Use your Twilio `Account SID` and `Auth Token` to build Twilio tasks right into your Dagster pipeline.

### Installation

```bash
pip install dagster-twilio
```

### Example

<CodeExample path="docs_snippets/docs_snippets/integrations/twilio.py" language="python" />

### About Twilio

**Twilio** provides communication APIs for phone calls, text messages, and other communication functions.
