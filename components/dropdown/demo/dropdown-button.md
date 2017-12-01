---
order: 5
title:
  zh-CN: 带下拉框的按钮
  en-US: Button with dropdown menu
---

## zh-CN

左边是按钮，右边是额外的相关功能菜单。

## en-US

A button is on the left, and a related functional menu is on the right.

```` html
<template>
  <div>
    <atu-dropdown-button @click="handleClick">
      Dropdown
      <atu-menu slot="overlay">
        <atu-menu-item index="1">
          <a target="_blank" rel="noopener noreferrer" href="#dropdown">1st menu item</a>
        </atu-menu-item>
        <atu-menu-item index="2">
          <a target="_blank" rel="noopener noreferrer" href="#dropdown">2nd menu item</a>
        </atu-menu-item>
        <atu-menu-item index="3">
          <a target="_blank" rel="noopener noreferrer" href="#dropdown">3rd menu item</a>
        </atu-menu-item>
      </atu-menu>
    </atu-dropdown-button>
    <atu-dropdown-button disabled>
      Dropdown
      <atu-menu slot="overlay">
        <atu-menu-item index="1">
          <a target="_blank" rel="noopener noreferrer" href="#dropdown">1st menu item</a>
        </atu-menu-item>
        <atu-menu-item index="2">
          <a target="_blank" rel="noopener noreferrer" href="#dropdown">2nd menu item</a>
        </atu-menu-item>
        <atu-menu-item index="3">
          <a target="_blank" rel="noopener noreferrer" href="#dropdown">3rd menu item</a>
        </atu-menu-item>
      </atu-menu>
    </atu-dropdown-button>
    <atu-dropdown>
      <atu-button>
        Button
        <atu-icon type="down"/>
      </atu-button>
      <atu-menu slot="overlay">
        <atu-menu-item index="1">
          <a target="_blank" rel="noopener noreferrer" href="#dropdown">1st menu item</a>
        </atu-menu-item>
        <atu-menu-item index="2">
          <a target="_blank" rel="noopener noreferrer" href="#dropdown">2nd menu item</a>
        </atu-menu-item>
        <atu-menu-item index="3">
          <a target="_blank" rel="noopener noreferrer" href="#dropdown">3rd menu item</a>
        </atu-menu-item>
      </atu-menu>
    </atu-dropdown>
  </div>
</template>

<script>
import AtuDropdown from '@/dropdown'
import AtuMenu from '@/menu'
import AtuButton from '@/button'
import AtuIcon from '@/icon'
import message from '@/message'

const AtuMenuItem = AtuMenu.Item
const AtuDropdownButton = AtuDropdown.Button
export default {
  components: {
    AtuIcon,
    AtuMenu,
    AtuButton,
    AtuMenuItem,
    AtuDropdown,
    AtuDropdownButton
  },
  methods: {
    handleClick () {
      message.info('You click left button.')
    }
  }
}
</script>

````
