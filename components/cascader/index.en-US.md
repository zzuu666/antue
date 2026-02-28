---
category: Components
type: Data Entry
title: Cascader
---

Cascade selection box.

## When To Use

- When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
- When selecting from a large data set, with multi-stage classification separated for easy selection.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| options | Data options of cascade | Array<{value, label, children?, disabled?}> | [] |
| value | Selected value | Array | [] |
| placeholder | Input placeholder | string | `请选择` |
| disabled | Whether disabled | boolean | `false` |
| allowClear | Whether allow clear | boolean | `false` |
| showSearch | Whether show search input | boolean | `false` |
| size | Input size, can be set to `large` `default` `small` | string | `default` |
| changeOnSelect | Change value on each selection if set to true | boolean | `false` |
| expandTrigger | Expand current item when click or hover, one of `click` `hover` | string | `click` |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| change | Callback when finishing cascader select | value, selectedOptions |
