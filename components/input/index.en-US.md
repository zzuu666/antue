---
category: Components
type: Data Entry
title: Input
---

A basic widget for getting the user input is a text field.
Keyboard and mouse can be used for providing or changing data.

## When To Use

- A user input in a form field is needed.
- A search input is required.

## API

### Input

| Property       | Description           | Type     | Default       |
|----------------|-----------------------|----------|---------------|
| type | The type of input | string  | `text`    |
| id | The ID for input | string |   |
| size | The size of the input box. Note: in the context of a form, the `large` size is used. Available: `large` `default` `small` | string | `default` |
| disabled | Whether the input is disabled. | boolean | false |
| addonBefore | The label text displayed before (on the left side of) the input field. | string\component |   |
| addonAfter | The label text displayed after (on the right side of) the input field. | string\component  |   |
| prefix | The prefix icon for the Input. | string\component | |
| suffix | The suffix icon for the Input. | string\component | |
| onPressEnter | The callback function that is triggered when Enter key is pressed. | function(e) |   |
| onKeyDown | The callback function that is triggered when any key is pressed. | Function | |
| blur | The callback function that is triggered when input is blur. | Function | |
| focus | The callback function that is triggered when input is focused. | Function | |
| click | The callback function that is triggered when input is clicked. | Function | |
| change | The callback function that is triggered when content of input changed | Function | |

```html
<ant-input v-model="value" type="text" @onPressEnter="handlePressEnter">
```

### *(not ready)Input.TextArea

> If you are using `antd@<2.12`, please use `Input[type=textarea]`.

| Property       | Description           | Type     | Default       |
|----------------|-----------------------|----------|---------------|
| defaultValue | The initial input content | string |   |
| value | The input content value | string |   |
| onPressEnter | The callback function that is triggered when Enter key is pressed. | function(e) |   |
| autosize | Height autosize feature, can be set to `true|false` or an object `{ minRows: 2, maxRows: 6 }` | boolean\|object | false |

The rest of the props of `Input.TextArea` are the same as the original [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

#### *(not ready)Input.Search

| Property  | Description                          | Type       | Default |
|-----------|--------------------------------------|------------|---------|
| onSearch | The callback function that is triggered when you click on the search-icon or press Enter key. | function(value) |  |

Supports all props of `Input`.

#### *(not ready)Input.Group

| Property  | Description                      | Type   | Default   |
|-----------|----------------------------------|--------|-----------|
|  size | The size of `Input.Group` specifies the size of the included `Input` fields. Available: `large` `default` `small` | string | `default` |
|  compact | Whether use compact style | boolean | false |


```html

```
