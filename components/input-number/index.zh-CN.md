---
category: Components
subtitle: 数字输入框
type: Data Entry
title: InputNumber
---

通过鼠标或键盘，输入范围内的数值。

## 何时使用

当需要获取标准数值时。

## API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value | 当前值 | number | - |
| min | 最小值 | number | `-Infinity` |
| max | 最大值 | number | `Infinity` |
| step | 每次改变步数，可以为小数 | number | `1` |
| disabled | 禁用 | boolean | `false` |
| size | 输入框大小，可选值为 `large` `default` `small` | string | `default` |
| precision | 数值精度 | number | - |
