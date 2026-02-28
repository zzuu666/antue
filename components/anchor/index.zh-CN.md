---
category: Components
subtitle: 锚点
type: Other
title: Anchor
---

用于跳转到页面指定位置。

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## API

### Anchor

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number | `0` |
| affix | 固定模式 | boolean | `true` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击链接时触发 | (e, link) |
| change | 监听锚点链接改变 | currentActiveLink |

### Anchor.Link

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| href | 锚点链接 | string | - |
| title | 文字内容 | string | - |
