---
category: Components
type: Data Display
title: Checkbox
subtitle: 多选框
cols: 1
---

多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## API

```html
<Checkbox>Checkbox</Checkbox>
```

### Checkbox

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| value    | 指定当前是否选中。可以使用 v-model 双向绑定数据 | boolean   |  false  |
| disabled    | 是否禁用 | boolean   |  false  |
| indeterminate    | 设置 indeterminate 状态，只负责样式控制 | boolean   |  false  |

#### 事件

| 参数     | 说明           | 类型     | 返回值       |
|----------|----------------|----------|--------------|
| change | 变化时回调函数 | function | true \ false |

### Checkbox.Group

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled    | 是否禁用 | boolean   |  false  |
| options    | 指定可选项 | string[] \ object[]   |  []  |
| value    | 指定选中的选项 | string[]   |  []  |

#### 事件

| 参数     | 说明           | 类型     | 返回值       |
|----------|----------------|----------|--------------|
| change | 变化时回调函数 | function | true \ false, items |
