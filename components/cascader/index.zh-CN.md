---
category: Components
subtitle: 级联选择
type: Data Entry
title: Cascader
---

级联选择框。

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 可选项数据源 | Array<{value, label, children?, disabled?}> | [] |
| value | 指定选中项 | Array | [] |
| placeholder | 输入框占位文本 | string | `请选择` |
| disabled | 是否禁用 | boolean | `false` |
| allowClear | 是否支持清除 | boolean | `false` |
| showSearch | 是否支持搜索 | boolean | `false` |
| size | 输入框大小，可选 `large` `default` `small` | string | `default` |
| changeOnSelect | 当此项为 true 时，点选每级菜单选项值都会发生变化 | boolean | `false` |
| expandTrigger | 次级菜单的展开方式，可选 `click` `hover` | string | `click` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 选择完成后的回调 | value, selectedOptions |
