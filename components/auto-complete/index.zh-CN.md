---
category: Components
subtitle: 自动完成
type: Data Entry
title: AutoComplete
---

输入框自动完成功能。

## 何时使用

需要自动完成时。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 指定当前选中的条目 | string | - |
| dataSource | 自动完成的数据源 | Array | `[]` |
| placeholder | 输入框提示 | string | - |
| disabled | 是否禁用 | boolean | `false` |
| allowClear | 支持清除 | boolean | `false` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| search | 搜索补全项的时候调用 | value |
| select | 被选中时调用 | value |
| change | 选中 option，或 input 的 value 变化时调用 | value |
