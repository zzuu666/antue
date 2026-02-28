---
category: Components
type: Data Entry
title: AutoComplete
---

Autocomplete function of input field.

## When To Use

When there is a need for autocomplete functionality.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| value | Current selected option | string | - |
| dataSource | Data source for autocomplete | Array | `[]` |
| placeholder | Placeholder of input | string | - |
| disabled | Whether disabled | boolean | `false` |
| allowClear | Show clear button | boolean | `false` |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| search | Called when searching items | value |
| select | Called when a option is selected | value |
| change | Called when select an option or input value change | value |
