---
category: Components
type: Data Display
title: Tabs
cols: 1
---

Tabs make it easy to switch between different views.

### When To Use

Ant Design has 3 types of Tabs for different situations.

- Card Tabs: for managing too many closeable views.
- Normal Tabs: for functional aspects of a page.
- [RadioButton](/components/radio/#components-radio-demo-radiobutton): for secondary tabs.

## API

### Tabs

| Property     | Description           | Type     | Default      |
|--------------|-----------------------|----------|--------------|
| active    | Current TabPane's key| string   | - |
| type         | Basic style of tabs | `line` \| `card` \| `editable-card` | `line` |
| size         | Tab bar size. Only works while `type="line"`. | `default` \| `small` | `default` |
| position  | Position of tabs | `top` \| `right` \| `bottom` \| `left` | `top` |
| hideAdd      | Hide plus icon or not. Only works while `type="editable-card"` | boolean | `false` |
| animated | Whether to change tabs with animation. Only works while `tabPosition="top"\|"bottom"` | boolean \| {inkBar:boolean, tabPane:boolean} | `true`, `false` when `type="card"` |

### Events

| Property     | Description           | Type     | Default      |
|--------------|-----------------------|----------|--------------|
| change     | Callback executed when active tab is changed | Function | - |
| tab-click   | Callback executed when tab is clicked | Function | - |
| prev-click  | Callback executed when prev button is clicked | Function | - |
| next-click  | Callback executed when next button is clicked | Function | - |
| onEdit       | Callback executed when tab is added or removed. Only works while `type="editable-card"` | (targetKey, action): void | - |

### Slot

| 参数             | 说明                                         | 
|------------------|----------------------------------------------|
| extra | Extra content in tab bar


### Tabs.TabPane
| Property     | Description           | Type     | Default      |
|--------------|-----------------------|----------|--------------|
| index          | TabPane's key         | string   | - |
| tab          | Show text in TabPane's head | string\Render | - |

