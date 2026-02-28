---
category: Components
subtitle: 日期选择框
type: Data Entry
title: DatePicker
---

输入或选择日期的控件。

## 何时使用

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 日期 | moment \| string | - |
| format | 展示的日期格式 | string | `YYYY-MM-DD` |
| placeholder | 输入框提示文字 | string | `请选择日期` |
| disabled | 禁用 | boolean | `false` |
| allowClear | 是否显示清除按钮 | boolean | `true` |
| size | 输入框大小，可选 `large` `default` `small` | string | `default` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 时间发生变化的回调 | date, dateString |
