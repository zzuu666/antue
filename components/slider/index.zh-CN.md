---
category: Components
subtitle: 滑动输入条
type: Data Entry
title: Slider
---

滑动型输入器，展示当前值和可选范围。

## 何时使用

当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 设置当前取值 | number | `0` |
| min | 最小值 | number | `0` |
| max | 最大值 | number | `100` |
| step | 步长 | number | `1` |
| disabled | 禁用状态 | boolean | `false` |
| vertical | 垂直方向 | boolean | `false` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 值变化时的回调 | value |
| afterChange | 拖拽结束或点击后的回调 | value |
