---
category: Components
type: Data Entry
title: DatePicker
---

To select or input a date.

## When To Use

By clicking the input box, you can select a date from a popup calendar.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| value | Set date | moment \| string | - |
| format | Format of the date | string | `YYYY-MM-DD` |
| placeholder | Placeholder of date input | string | `请选择日期` |
| disabled | Whether disabled | boolean | `false` |
| allowClear | Whether to show clear button | boolean | `true` |
| size | Size of input box, options: `large` `default` `small` | string | `default` |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| change | Callback when date is changed | date, dateString |
