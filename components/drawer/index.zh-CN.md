---
category: Components
subtitle: 抽屉
type: Feedback
title: Drawer
---

屏幕边缘滑出的浮层面板。

## 何时使用

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否可见 | boolean | `false` |
| title | 标题 | string | - |
| placement | 抽屉的方向 | `left` / `right` / `top` / `bottom` | `right` |
| closable | 是否显示右上角的关闭按钮 | boolean | `true` |
| mask | 是否展示遮罩 | boolean | `true` |
| maskClosable | 点击蒙层是否允许关闭 | boolean | `true` |
| width | 宽度 | string/number | `256` |
| height | 高度，在 placement 为 top 或 bottom 时使用 | string/number | `256` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| close | 点击关闭时的回调 | - |
