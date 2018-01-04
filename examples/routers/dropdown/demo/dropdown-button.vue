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
