---
category: Components
subtitle: 选择器
type: Data Entry
title: Select
---

下拉选择器。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 指定当前选中的条目 | string \| string[] | - |
| placeholder | 选择框默认文字 | string | `请选择` |
| disabled | 是否禁用 | boolean | `false` |
| allowClear | 支持清除 | boolean | `false` |
| showSearch | 使单选模式可搜索 | boolean | `false` |
| multiple | 设置多选模式 | boolean | `false` |
| size | 选择框大小，可选 `large` `default` `small` | string | `default` |
| options | 选项数据 | Array<{ label, value, disabled }> | [] |
| notFoundContent | 当下拉列表为空时显示的内容 | string | `Not Found` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 选中 option 时触发 | value |
| search | 搜索时触发 | searchValue |
