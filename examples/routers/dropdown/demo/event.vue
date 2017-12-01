<template>
  <atu-dropdown>
    <a class="ant-dropdown-link">Hover me, Click menu item<atu-icon type="down" /></a>
    <atu-menu slot="overlay" @click="handleClick">
      <atu-menu-item index="1">
        1st menu item
      </atu-menu-item>
      <atu-menu-item index="2">
        2nd menu item
      </atu-menu-item>
      <atu-menu-item index="3">
        3rd menu item
      </atu-menu-item>
    </atu-menu>
  </atu-dropdown>
</template>

<script>
import AtuDropdown from '@/dropdown'
import AtuIcon from '@/icon'
import AtuMenu from '@/menu'
import message from '@/message'
const AtuMenuItem = AtuMenu.Item

export default {
  components: {
    AtuMenu,
    AtuIcon,
    AtuMenuItem,
    AtuDropdown
  },
  methods: {
    handleClick ({index}) {
      message.info(`Click on item ${index}`)
    }
  }
}
</script>

