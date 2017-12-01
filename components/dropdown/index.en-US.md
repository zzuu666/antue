---
category: Components
type: Navigation
title: Dropdown
---

A dropdown list.

## When To Use

If there are too many operations to display, you can wrap them in a `Dropdown`. By clicking/hovering on the trigger, a dropdown menu should appear, which allows you to choose one option and execute relevant actions.

## API

### Dropdown

| Property         | Description           | Type     | Default       |
|--------------|----------------|----------|--------------|
| trigger        | the trigger mode which executes the drop-down action  | String   | `hover` |
| disabled| whether the dropdown menu is disabled| boolean | -           |
| placement | placement of pop menu: `bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | String | `bottomLeft` |

### Dropdown Slots

| Slot         | Description     | 
|--------------|----------------|
| overlay | the dropdown menu     |

You should use [Menu](#/components/menu/index/en/) as `overlay`. The menu items and dividers are also available by using `Menu.Item` and [TODO] `Menu.Divider`.

> Warning: You must set a unique `key` for `Menu.Item`.

> [TODO] Menu of Dropdown is unselectable by default, you can make it selectable via `<Menu selectable>`.

### Dropdown.Button

| Property         | Description           | Type     | Default       |
|--------------|----------------|----------|--------------|
| type        | type of the button, the same as [Button](#/components/button/index/en/)   | string   | `default`           |
| size        | size of the button, the same as [Button](#/components/button/index/en/)   | string   | `default`           |
| trigger       | the trigger mode which executes the drop-down action | Array<'click'\|`hover`>   | [`hover`] |
| disabled    | whether the dropdown menu is disabled| boolean | -           |
| placement | placement of pop menu: `bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | String | `bottomLeft` |

### Dropdown.Button Slots

| Slot         | Description     | 
|--------------|----------------|
| overlay | the dropdown menu     |

### Dropdown.Button Events

| Property         | Description           | Type     | Default       |
|--------------|----------------|----------|--------------|
| click | a callback function, the same as [Button](#/components/button/index/en/), which will be executed when you click the button on the left       | Function   | -           |