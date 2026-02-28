---
category: Components
type: Data Entry
title: TreeSelect
---

Tree selection control.

## When To Use

- TreeSelect is similar to Select, but the values are provided in a tree like structure.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| treeData | Data of the treeNodes | Array<{title, value, key, children?, disabled?}> | [] |
| value | Current selected treeNode | string \| string[] | - |
| multiple | Support multiple selection | boolean | `false` |
| placeholder | Placeholder of the select input | string | `请选择` |
| disabled | Whether disabled select | boolean | `false` |
| allowClear | Show clear button | boolean | `false` |
| showSearch | Whether to show search input | boolean | `false` |
| treeCheckable | Whether to show checkbox on the treeNodes | boolean | `false` |
| treeDefaultExpandAll | Whether to expand all treeNodes by default | boolean | `false` |
| size | Size of Select input, options: `large` `default` `small` | string | `default` |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| change | Called when tree node is selected | value |
| select | Called when a treeNode is selected | value, node |
