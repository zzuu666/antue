---
category: Components
cols: 1
type: Navigation
title: Menu
---

Menu list of Navigation.

## When To Use

Navigation menu is important for a website, it helps users jump from one site section to another quickly. Mostly, it includes top navigation and side navigation. Top navigation provides all the category and functions of the website. Side navigation provides the Multi-level structure of the website.

More layouts with navigation: [layout](/components/layout).

## API

```html
<atu-menu>
  <menu-item>菜单项</menu-item>
  <sub-menu title="子菜单">
    <menu-item>子菜单项</menu-item>
  </sub-menu>
</atu-menu>
```

### Menu

| Param    | Description   | Type     | Default value       |
|----------|---------------|----------|--------------|
| theme    | color theme of the menu | string: `light` `dark` | `light` |
| mode | type of the menu; `vertical`, `horizontal`, and `inline` modes are supported | string: `vertical` \| `horizontal` \| `inline` | `vertical` |
| selectable | allow selecting menu items | boolean | true |
| selectedKeys | array with the keys of currently selected menu items | string[] |      |
| defaultSelectedKeys | array with the keys of default selected menu items | string[] |      |
| openKeys | array with the keys of currently opened sub menus | string[] |  |
| defaultOpenKeys | array with the keys of default opened sub menus |  |      |
| inlineIndent | indent px of inline menu item on each level | number | 24 |
| multiple | Allow selection of multiple items | boolean | false |
| inlineCollapsed | specifies the collapsed status when menu is inline mode | boolean | - |
| selectable | Allow to be selected | boolean | true |

### Events

| Param    | Description   | Type     | Default value       |
|----------|---------------|----------|--------------|
| open-change | called when open/close sub menu | function(openKeys: string[]) | noop |
| select | callback executed when a menu item is selected | function({ e, vm, path, index }) | none   |
| de-select | callback executed when a menu item is deselected, only supported for multiple mode | function({ e, vm, path, index }) | - |
| click | callback executed when a menu item is clicked | function({ e, vm, path, index }) | - |

### Menu.Item

| Param    | Description    | Type     | Default value       |
|----------|----------------|----------|--------------|
| disabled    | whether menu item is disabled or not | boolean   |  false  |
| index   | unique id of the menu item |  string |  |

### Menu.SubMenu

| Param    | Description    | Type     | Default value       |
|----------|----------------|----------|--------------|
| disabled    | whether sub menu is disabled or not | boolean   |  false  |
| index   | unique id of the sub menu |  string |  |
| title    | title of the sub menu | string   |    |

### Menu.SubMenu Slots

| Param    | Description    | Type     | Default value       |
|----------|----------------|----------|--------------|
| title    | title of the sub menu | DOM   |    |

### Menu.ItemGroup

| Param    | Description    | Type     | Default value       |
|----------|----------------|----------|--------------|
| title    | title of the group       | string |    |

