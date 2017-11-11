---
category: Components
subtitle: 单选框
type: Data Entry
title: Radio
---

单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## API

### Radio

建议使用`v-model`进行绑定，而不是传递checked。

| 参数           | 说明                                     | 类型       |  可选值 | 默认值 |
|----------------|------------------------------------------|------------|---------|--------|
| checked        | 指定当前是否选中                         | boolean    |         | false  |
| value          | 根据 value 进行比较，判断是否选中          | any     |         | 无     |
| disabled       | 是否禁用该按钮                           | boolean     |         | false     |

### RadioGroup

单选框组合，用于包裹一组 `Radio`。

| 参数           | 说明                              | 类型              | 可选值 | 默认值 |
|----------------|----------------------------------|-------------------|--------|--------|
| name | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性 | string |  | 无 |
| change         | 选项变化时触发的事件，返回值为选中的值   | Function(value) | 无     | 无     |
| value          | 用于设置当前选中的值                 | any            | 无     | 无     |
| disable        | 是否禁用该组按钮                     | boolean            | 无     | undefined     |
| size           | 大小，只对按钮样式生效           | string            | `large` `default` `small` | `default` |
| options        | 以配置形式设置子元素             | string[] \ Array<{ label: string value: string disabled?: boolean }>            | 无     | 无     |
