---
category: Components
subtitle: 对话框
type: Feedback
title: Modal
---

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `confirm()` 等方法。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 对话框是否可见 | boolean | `false` |
| title | 标题 | string | - |
| closable | 是否显示右上角的关闭按钮 | boolean | `true` |
| mask | 是否展示遮罩 | boolean | `true` |
| maskClosable | 点击蒙层是否允许关闭 | boolean | `true` |
| okText | 确认按钮文字 | string | `确定` |
| cancelText | 取消按钮文字 | string | `取消` |
| okType | 确认按钮类型，可选 `primary` `dashed` `danger` `default` | string | `primary` |
| width | 宽度 | string \| number | 520 |
| centered | 垂直居中展示 Modal | boolean | `false` |
| footer | 是否显示底部内容 | boolean | `true` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| ok | 点击确定回调 | $event |
| cancel | 点击遮罩层或右上角叉或取消按钮的回调 | $event |
