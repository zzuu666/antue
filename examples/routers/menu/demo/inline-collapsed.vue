<template>
  <a-menu mode="inline" style="width: 240px;">
    <!--todo-->
    <a-menu-item index="1"><icon type="mail" />Navigation One</a-menu-item>
    <a-menu-item index="2" disabled><icon type="appstore" />Navigation Two</a-menu-item>
    <a-menu-item index="3" disabled><icon type="appstore" />Navigation Two</a-menu-item>
    <a-sub-menu index="4">
      <template slot="title">
        <icon type="setting" />Navigation Two
      </template>
      <a-item-group title="Item 1">
        <a-menu-item index="4-1">Option 1</a-menu-item>
        <a-menu-item index="4-2">Option 2</a-menu-item>
      </a-item-group>
      <a-item-group title="Item 2">
        <a-menu-item index="4-3">Option 3</a-menu-item>
        <a-menu-item index="4-4">Option 4</a-menu-item>
      </a-item-group>
    </a-sub-menu>
    <a-sub-menu index="5">
      <template slot="title">
        <icon type="setting" />Navigation Three
      </template>
      <a-item-group title="Item 1">
        <a-menu-item index="5-1">Option 1</a-menu-item>
        <a-menu-item index="5-2">Option 2</a-menu-item>
      </a-item-group>
      <a-item-group title="Item 2">
        <a-menu-item index="5-3">Option 3</a-menu-item>
        <a-menu-item index="5-4">Option 4</a-menu-item>
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
  components: {
    Icon,
    AMenu,
    AMenuItem,
    ASubMenu,
    AItemGroup
  }
}
</script>