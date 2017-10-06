---
order: 2
title:
    zh-CN: 只展开当前父级菜单
    en-US: Open current submenu only
---

## zh-CN

点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。

## en-US

Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact.

```` html
<template>
  <a-menu
    mode="inline"
    style="width: 240px;"
    :open-keys="open"
    @open-change="openChange">
    <a-sub-menu index="1">
      <template slot="title">
        <icon type="setting" />Navigation One
      </template>
      <a-item-group title="Item 1">
        <a-menu-item index="1-1">Option 1</a-menu-item>
        <a-menu-item index="1-2">Option 2</a-menu-item>
      </a-item-group>
      <a-item-group title="Item 2">
        <a-menu-item index="1-3">Option 3</a-menu-item>
        <a-menu-item index="1-4">Option 4</a-menu-item>
      </a-item-group>
    </a-sub-menu>
    <a-sub-menu index="2">
      <template slot="title">
        <icon type="setting" />Navigation Two
      </template>
      <a-item-group title="Item 1">
        <a-menu-item index="2-1">Option 1</a-menu-item>
        <a-menu-item index="2-2">Option 2</a-menu-item>
      </a-item-group>
      <a-item-group title="Item 2">
        <a-menu-item index="2-3">Option 3</a-menu-item>
        <a-menu-item index="2-4">Option 4</a-menu-item>
      </a-item-group>
    </a-sub-menu>
    <a-sub-menu index="3">
      <template slot="title">
        <icon type="setting" />Navigation Three
      </template>
      <a-item-group title="Item 1">
        <a-menu-item index="3-1">Option 1</a-menu-item>
        <a-menu-item index="3-2">Option 2</a-menu-item>
      </a-item-group>
      <a-item-group title="Item 2">
        <a-menu-item index="3-3">Option 3</a-menu-item>
        <a-menu-item index="3-4">Option 4</a-menu-item>
      </a-item-group>
      <a-sub-menu index="4">
        <template slot="title">
          <icon type="setting" />Navigation Three
        </template>
          <a-menu-item index="4-1">Option 1</a-menu-item>
          <a-menu-item index="4-2">Option 2</a-menu-item>
          <a-menu-item index="4-3">Option 3</a-menu-item>
          <a-menu-item index="4-4">Option 4</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import Icon from '@/icon'
import AMenu from '@/menu'

const AMenuItem = AMenu.Item
const ASubMenu = AMenu.SubMenu
const AItemGroup = AMenu.ItemGroup

export default {
  data () {
    return {
      open: ['1'],
      rootKeys: ['1', '2', '3']
    }
  },
  methods: {
    openChange (keys) {
      const latestOpenKey = keys.find(key => this.open.indexOf(key) === -1)
      if (this.rootKeys.indexOf(latestOpenKey) === -1) {
        latestOpenKey && (this.open = keys)
      } else {
        this.open = latestOpenKey ? [latestOpenKey] : []
      }
    }
  },
  components: {
    Icon,
    AMenu,
    AMenuItem,
    ASubMenu,
    AItemGroup
  }
}
</script>
````
