---
category: Components
subtitle: 树选择
type: Data Entry
title: TreeSelect
---

树型选择控件。

## 何时使用

- 类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| treeData | 树形数据 | Array<{title, value, key, children?, disabled?}> | [] |
| value | 指定当前选中的条目 | string \| string[] | - |
| multiple | 支持多选 | boolean | `false` |
| placeholder | 选择框默认文字 | string | `请选择` |
| disabled | 是否禁用 | boolean | `false` |
| allowClear | 支持清除 | boolean | `false` |
| showSearch | 使搜索模式可用 | boolean | `false` |
| treeCheckable | 显示 Checkbox | boolean | `false` |
| treeDefaultExpandAll | 默认展开所有树节点 | boolean | `false` |
| size | 选择框大小，可选 `large` `default` `small` | string | `default` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 选中树节点时触发 | value |
| select | 被选中时调用 | value, node |
