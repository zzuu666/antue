---
category: Components
type: Feedback
noinstant: true
title: Notification
---

Display a notification message globally.

## When To Use

To display a notification message at any of the four corners of the viewport. Typically it can be
used in the following cases:

- A notification with complex content.
- A notification providing a feedback based on the user interaction. Or it may show some details
  about upcoming steps the user may have to follow.
- A notification that is pushed by the application.

## API

- `notification.open(config)`
- `notification.success(config)`
- `notification.error(config)`
- `notification.info(config)`
- `notification.warning(config)`
- `notification.warn(config)`
- `notification.destroy()`

The properties of config are as follows:

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| prefixCls | prefix class | String | `ant-notification` |
| type | notification type，can be one of `success`, `info`, `warning`, `error`, '' | String | '' |
| btn | Customized close button | String | - |
| btnType | Customized close button type, can be one of `primary`, `default`, `dashed`, `danger` | String | primary |
| description | The content of notification box (required) | string | - |
| duration | Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically | number | 4.5 |
| icon | Customized icon | String | - |
| iconStyle | Customized icon style | Object | - |
| message | The title of notification box (required) | string | - |
| placement | Position of Notification, can be one of `topLeft` `topRight` `bottomLeft` `bottomRight` | string | `topRight` |
| onClose | Specify a function that will be called when the close button is clicked | Function | - |

`notification` also provides a global `config()` method that can be used for specifying the default options. Once this method is used, all the notification boxes will take into account these globally defined options when displaying.

- `notification.config(options)`

```js
notification.config({
  placement: 'bottomRight',
  duration: 3
});
```

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| prefixCls | prefix class | String | `ant-notification` |
| duration | Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically | number | 4.5 |
| getContainer | Return the mount node for Notification | () => HTMLNode | () => document.body |
| placement | Position of Notification, can be one of `topLeft` `topRight` `bottomLeft` `bottomRight` | string | `bottomRight` |
