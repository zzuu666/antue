---
category: Components
type: Feedback
title: Alert
---

Alert component for feedback.

## When To Use

- When you need to show alert messages to users.
- When you need a persistent static container which can be closed by user actions.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| type | Type of Alert styles, can be set to `success` `info` `warning` `error` | string | `info` |
| message | Content of Alert | string | - |
| description | Additional content of Alert | string | - |
| closable | Whether Alert can be closed | boolean | `false` |
| showIcon | Whether to show icon | boolean | `false` |
| banner | Whether to display as banner | boolean | `false` |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| close | Callback when Alert is closed | $event |
