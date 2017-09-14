<template>
  <div class="display">
    <button @click="toggleTheme">Toggle</button>
    <a-menu @open-change="openChange" :theme="theme" mode="horizontal">
      <a-menu-item index="1">Navigation One</a-menu-item>
      <a-menu-item index="2">Navigation One</a-menu-item>
      <a-submenu index="3">
        <template slot="title">
          Navigation Three - Submenu
        </template>
        <a-item-group title="Item 1">
          <a-menu-item index="3-1">Option 1</a-menu-item>
          <a-menu-item index="3-2">Option 2</a-menu-item>
        </a-item-group>
        <a-item-group title="Item 2">
          <a-menu-item index="3-3">Option 3</a-menu-item>
          <a-menu-item index="3-4">Option 4</a-menu-item>
        </a-item-group>
      </a-submenu>
    </a-menu>
  </div>
</template>

<script>
import aMenu from '@/menu'
const aMenuItem = aMenu.Item
const aSubmenu = aMenu.SubMenu
const aItemGroup = aMenu.ItemGroup

export default {
  data () {
    return {
      theme: 'light',
      isShow: false
    }
  },
  components: {
    aMenu,
    aMenuItem,
    aSubmenu,
    aItemGroup
  },
  methods: {
    toggleTheme () {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      // this.isShow = !this.isShow
    },
    openChange () {
      // console.log('change')
    }
  }
}
</script>

<style lang="less">
.display {
  position: relative;
  width: 620px;
}
</style>

