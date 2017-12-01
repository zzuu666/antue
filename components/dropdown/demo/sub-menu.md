---
order: 6
title:
  zh-CN: 多级菜单
  en-US: Cascading menu
---

## zh-CN

传入的菜单里有多个层级。

## en-US

The menu has multiple levels.

```` html
<template>
  <atu-dropdown trigger="click">
    <a class="ant-dropdown-link">Cascading menu<atu-icon type="down" /></a>
    <atu-menu slot="overlay">
      <atu-menu-item index="1">
        1st menu item
      </atu-menu-item>
      <atu-menu-item index="2">
        2nd menu item
      </atu-menu-item>
      <atu-submenu title="3st ">
        <atu-menu-item index="3-1">
          2nd menu item
        </atu-menu-item>
        <atu-menu-item index="3-2">
          2nd menu item
        </atu-menu-item>
      </atu-submenu>
    </atu-menu>
  </atu-dropdown>
</template>

<script>
import AtuDropdown from '@/dropdown'
import AtuIcon from '@/icon'
import AtuMenu from '@/menu'
const AtuMenuItem = AtuMenu.Item
const AtuSubmenu = AtuMenu.SubMenu

export default {
  components: {
    AtuMenu,
    AtuIcon,
    AtuMenuItem,
    AtuDropdown,
    AtuSubmenu
  }
}
</script>

````
