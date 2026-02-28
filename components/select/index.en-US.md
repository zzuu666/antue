---
category: Components
type: Data Entry
title: Select
---

Select component to select value from options.

## When To Use

- A dropdown menu for displaying choices - an elegant alternative to the native `<select>` element.
- Utilizing Radio is recommended when there are fewer total options (less than 5).

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| value | Current selected option | string \| string[] | - |
| placeholder | Placeholder of select | string | `请选择` |
| disabled | Whether disabled select | boolean | `false` |
| allowClear | Show clear button | boolean | `false` |
| showSearch | Whether show search input in single mode | boolean | `false` |
| multiple | Set mode of Select to multiple | boolean | `false` |
| size | Size of Select input, can be set to `large` `default` `small` | string | `default` |
| options | Select options | Array<{ label, value, disabled }> | [] |
| notFoundContent | Specify content to show when no result matches | string | `Not Found` |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| change | Called when select an option or input value change | value |
| search | Callback function that is fired when input changed | searchValue |
