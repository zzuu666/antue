<template>
  <a-menu :mode="mode" style="width: 240px;">
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
      mode: 'inline'
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