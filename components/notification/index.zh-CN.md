---
category: Components
type: Feedback
noinstant: true
title: Notification
subtitle: 通知提醒框
---

全局展示通知提醒信息。

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。

## API

- `notification.open(config)`
- `notification.success(config)`
- `notification.error(config)`
- `notification.info(config)`
- `notification.warning(config)`
- `notification.warn(config)`
- `notification.destroy()`

config 参数如下：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prefixCls | 类前缀 | String | `ant-notification` |
| type | 通知类型，可选 `success`, `info`, `warning`, `error`, '' | String | '' |
| btn | 自定义关闭按钮 | String | - |
| btnType | 自定义关闭按钮类型，可选`primary`, `default`, `dashed`, `danger` | String | primary |
| description | 通知提醒内容，必选 | string | - |
| duration | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭 | number | 4.5 |
| icon | 自定义图标 | String | - |
| iconStyle | 自定义图标样式 | Object | - |
| message | 通知提醒标题，必选 | string | - |
| placement | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string | bottomRight |
| onClose | 点击默认关闭按钮时触发的回调函数 | Function | - |

还提供了一个全局配置方法，在调用前提前配置，全局一次生效。

- `notification.config(options)`

```js
notification.config({
  placement: 'bottomRight',
  duration: 3
});
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prefixCls | 类前缀 | String | `ant-notification` |
| duration | 默认自动关闭延时，单位秒 | number | 4.5 |
| getContainer | 配置渲染节点的输出位置 | () => HTMLNode | () => document.body |
| placement | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string | `bottomRight` |
