---
category: Components
subtitle: 输入框
type: Data Entry
title: Input
---

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## API

### Input

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|-----------------------------------------|------------|-------|
| type | 声明 input 类型，同原生 input 标签的 type 属性。 | string  | `text` |
| id | 输入框的 id | string | |
| size | 控件大小。注：标准表单内的输入框大小限制为 `large`。可选 `large` `default` `small` | string | `default` |
| disabled | 是否禁用状态，默认为 false | boolean | false |
| addonBefore | 带标签的 input，设置前置标签 | string\component | |
| addonAfter | 带标签的 input，设置后置标签 | string\component | |
| prefix | 带有前缀图标的 input | string\component | |
| suffix | 带有后缀图标的 input | string\component | |
| onPressEnter | 按下回车键触发的事件 | Function | |
| onKeyDown | 按下按键触发的事件 | Function | |
| blur | 失去焦点时触发的事件 | Function | |
| focus | 获得焦点时触发的事件 | Function | |
| click | 点击输入框时触发的事件 | Function | |
| change | 内容改变时触发的事件，注意，只在失去焦点后才对比判断 | Function | |

> value 和 defaultValue不再需要，使用Vue风格的v-model来进行数据绑定。

```html
<ant-input v-model="value" type="text" @onPressEnter="handlePressEnter">
```


### *(暂未实现)Input.TextArea

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|-----------------------------------------|------------|-------|
| defaultValue | 输入框默认内容 | string | |
| value | 输入框内容 | string | |
| onPressEnter | 按下回车的回调 | function(e) | |
| autosize | 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }` |  | false |

`Input.TextArea` 的其他属性和浏览器自带的 [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) 一致。

#### *(暂未实现)Input.Search

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|-----------------------------------------|-----------|-------|
| onSearch | 点击搜索或按下回车键时的回调                 | function(value) |  |

其余属性和 Input 一致。

#### *(暂未实现)Input.Group

| 参数      | 说明                                     | 类型         | 默认值 |
|-----------|-----------------------------------------|-------------|-------|
|  size | `Input.Group` 中所有的 `Input` 的大小，可选 `large` `default` `small` | string | `default` |
|  compact | 是否用紧凑模式 | boolean | false |


```html

```
