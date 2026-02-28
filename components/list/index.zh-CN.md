---
category: Components
subtitle: 列表
type: Data Display
title: List
---

通用列表。

## 何时使用

最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

## API

### List

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 列表数据源 | Array | `[]` |
| bordered | 是否展示边框 | boolean | `false` |
| size | list 的尺寸 | `default` \| `small` \| `large` | `default` |
| header | 列表头部 | string \| slot | - |
| footer | 列表底部 | string \| slot | - |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | `false` |
| split | 是否展示分割线 | boolean | `true` |

### List.Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extra | 额外内容 | string \| slot | - |

### List.Item.Meta

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| avatar | 列表元素的图标 | string | - |
| title | 列表元素的标题 | string | - |
| description | 列表元素的描述内容 | string | - |
