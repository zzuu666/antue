<template>
  <div class="dropdown-placement">
    <atu-dropdown placement="topLeft">
      <atu-button>topLeft</atu-button>
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
    <atu-dropdown placement="top">
      <atu-button>top</atu-button>
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
    <atu-dropdown placement="topRight">
      <atu-button>topRight</atu-button>
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
    <br />
    <atu-dropdown placement="bottomLeft">
      <atu-button>bottomLeft</atu-button>
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
    <atu-dropdown placement="bottom">
      <atu-button>bottom</atu-button>
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
    <atu-dropdown placement="bottomRight">
      <atu-button>bottomRight</atu-button>
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
import AtuIcon from '@/icon'
import AtuButton from '@/button'
import AtuMenu from '@/menu'
const AtuMenuItem = AtuMenu.Item

export default {
  components: {
    AtuMenu,
    AtuIcon,
    AtuButton,
    AtuMenuItem,
    AtuDropdown
  }
}
</script>

<style lang="less" scoped>
.dropdown-placement {
  & button {
    margin: 4px 8px;
  }
}
</style>


