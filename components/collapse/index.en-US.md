---
category: Components
type: Data Display
title: Collapse
---

A content area which can be collapsed and expanded.

## When To Use

- Can be used to group or hide complex regions to keep the page clean.
- Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time.

## API

### Collapse

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| activeKey | Key of the active panel | string[]/string | - |
| defaultActiveKey | Key of the initial active panel | string[] | `[]` |
| accordion | Accordion mode | boolean | `false` |
| bordered | Toggles rendering of the border around the collapse block | boolean | `true` |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| change | Callback when active panel changes | activeKey |

### Collapse.Panel

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| header | Title of the panel | string | - |
| panelKey | Unique key identifying the panel | string/number | - |
| disabled | If true, panel cannot be opened or closed | boolean | `false` |
| showArrow | Whether to show the arrow icon | boolean | `true` |
