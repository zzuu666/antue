---
category: Components
type: Data Display
title: Calendar
---

Container for displaying data in calendar form.

## When To Use

When data is associated with dates, such as schedules, timetables, prices calendar, lunar calendar. This component also supports yearly/monthly switch.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| value | The current selected date | moment | current date |
| mode | The display mode of the calendar, options: `month` `year` | string | `month` |
| fullscreen | Whether to display in full-screen | boolean | `true` |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| select | Callback when a date is selected | date |
| panelChange | Callback when panel changes | date, mode |
| change | Callback when date changes | date |
