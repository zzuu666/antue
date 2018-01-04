---
order: 3
title:
  zh-CN: 触发方式
  en-US: Trigger mode
---

## zh-CN

默认是移入触发菜单，可以点击触发。

## en-US

The default trigger mode is `hover`, you can change it to `click`.

```` html
<template>
  <atu-dropdown trigger="click">
    <a class="ant-dropdown-link">Click me <atu-icon type="down" /></a>
    <atu-menu slot="overlay">
      <atu-menu-item index="1">
        <a target="_blank" rel="noopener noreferrer" href="#dropdown">1st menu item</a>
      </atu-menu-item>
      <atu-menu-item index="2">
        <a target="_blank" rel="noopener noreferrer" href="#dropdown">2nd menu item</a>
      </atu-menu-item>
      <atu-menu-item index="3">
        3st menu item
      </atu-menu-item>
    </atu-menu>
  </atu-dropdown>
</template>

<script>
import AtuDropdown from '@/dropdown'
import AtuIcon from '@/icon'
import AtuMenu from '@/menu'
const AtuMenuItem = AtuMenu.Item

export default {
  components: {
    AtuMenu,
    AtuIcon,
    AtuMenuItem,
    AtuDropdown
  }
}
</script>

````
