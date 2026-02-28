---
category: Components
type: Feedback
title: Modal
---

Modal dialogs.

## When To Use

When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use `Modal` to create a new floating layer over the current page to get user feedback or display information.

Additionally, if you need show a simple confirmation dialog, you can use `confirm()`, and so on.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| visible | Whether the modal dialog is visible or not | boolean | `false` |
| title | The modal dialog's title | string | - |
| closable | Whether a close (x) button is visible on top right of the modal dialog or not | boolean | `true` |
| mask | Whether show mask or not | boolean | `true` |
| maskClosable | Whether to close the modal dialog when the mask (area outside the modal) is clicked | boolean | `true` |
| okText | Text of the OK button | string | `确定` |
| cancelText | Text of the Cancel button | string | `取消` |
| okType | Button type of the OK button, can be set to `primary` `dashed` `danger` `default` | string | `primary` |
| width | Width of the modal dialog | string \| number | 520 |
| centered | Centered modal | boolean | `false` |
| footer | Whether to show the footer | boolean | `true` |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| ok | Specify a function that will be called when a user clicks the OK button | $event |
| cancel | Specify a function that will be called when a user clicks mask, close button on top right or Cancel button | $event |
