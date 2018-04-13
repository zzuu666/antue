---
category: Components
subtitle: 下拉菜单
type: Navigation
title: Dropdown
---

向下弹出的列表。

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## API

### Dropdown
属性如下

| 参数        | 说明             | 类型               | 默认值       |
|-------------|------------------|--------------------|--------------|
| trigger     | 触发下拉的行为   | String | 'hover'      |
| disabled    | 菜单是否禁用 | boolean   | -           |
| onVisibleChange  | 菜单显示状态改变时调用，参数为 visible | Function(visible) | - |
| placement | 菜单弹出位置：`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | String | `bottomLeft` |


### Dropdown Slots

| 参数        | 说明             | 
|-------------|-----------------|
| overlay     | 触发下拉的行为   |

`overlay` 菜单使用 [Menu](#/components/menu/index/zh)，还包括菜单项 `Menu.Item`，暂时不包括分割线 `Menu.Divider`。

> 注意： Menu.Item 必须设置唯一的 key 属性。

> [暂不支持] Dropdown 下的 Menu 默认不可选中。如果需要菜单可选中，可以指定 `<Menu selectable>`.

### Dropdown.Button

| 参数        | 说明             | 类型               | 默认值       |
|-------------|------------------|--------------------|--------------|
| type        | 按钮类型，和 [Button](#/components/button/index/zh/) 一致 | string | 'default' |
| size        | 按钮大小，和 [Button](#/components/button/index/zh/) 一致 | string | 'default' |
| trigger     | 触发下拉的行为   | String|  'hover'       |
| overlay     | 菜单         | [Menu](#/components/menu/index/zh) | -     |
| disabled    | 菜单是否禁用 | boolean   | -           |
| placement | 菜单弹出位置：`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | String | `bottomLeft` |

### Dropdown.Button Events

| 参数        | 说明             | 类型               | 默认值       |
|-------------|------------------|--------------------|--------------|
| onClick     | 点击左侧按钮的回调，和 [Button](#/components/button/index/zh/) 一致 | Function   | - |

### Dropdown.Button  Slots

| 参数        | 说明             | 
|-------------|-----------------|
| overlay     | 触发下拉的行为   |