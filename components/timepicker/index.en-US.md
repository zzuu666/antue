---
category: Components
type: Data Entry
title: TimePicker
---

To select/input a time.

## When To Use

* * *

By clicking the input box, you can select a time from a popup panel.

## API

* * *

```html
<time-picker v-model="time"/>
```

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| addon | called from timepicker panel to render some addon to its bottom | function | - |
| allowEmpty | allow clearing text | boolean | true |
| clearText | clear tooltip of icon | string | clear |
| disabled | determine whether the TimePicker is disabled | boolean | false |
| disabledHours | to specify the hours that cannot be selected | function() | - |
| disabledMinutes | to specify the minutes that cannot be selected | function(selectedHour) | - |
| disabledSeconds | to specify the seconds that cannot be selected | function(selectedHour, selectedMinute) | - |
| format | to set the time format | string | "HH:mm:ss" |
| getPopupContainer | to set the container of the floating layer, while the default is to create a div element in body | function(trigger) | no provide |
| hideDisabledOptions | hide the options that can not be selected | boolean | false |
| open | whether to popup panel | boolean | false |
| placeholder | display when there's no value | string | "Select a time" |
| popupClassName | className of panel | string | '' |
| use12Hours | display as 12 hours format, with default format `h:mm:ss a` | boolean | false |
| value | to set time | [moment](http://momentjs.com/) | - |
| onChange | a callback function, can be executed when the selected time is changing | function(time: moment, timeString: string): void | - |
| onOpenChange | a callback function which will be called while panel opening/closing | (open: boolean): void | - |
