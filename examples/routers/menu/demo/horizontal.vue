<template>
  <a-menu mode="horizontal">
    <a-menu-item index="1"><icon type="mail" />Navigation One</a-menu-item>
    <a-menu-item index="2" disabled><icon type="appstore" />Navigation Two</a-menu-item>
    <a-sub-menu index="3">
      <template slot="title">
        <icon type="setting" />Navigation Three - Submenu
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
    <a-menu-item key="alipay">
      <a href="https://zzuu666.github.io/antue/" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
    </a-menu-item>
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

