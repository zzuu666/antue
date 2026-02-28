---
category: Components
subtitle: 日历
type: Data Display
title: Calendar
---

按照日历形式展示数据的容器。

## 何时使用

当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 展示日期 | moment | 当前日期 |
| mode | 初始模式，可选 `month` `year` | string | `month` |
| fullscreen | 是否全屏显示 | boolean | `true` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| select | 点击选择日期回调 | date |
| panelChange | 日期面板变化回调 | date, mode |
| change | 日期变化回调 | date |
