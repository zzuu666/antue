<template>
  <atu-menu :defaultOpenKeys="opens" mode="inline">
    <atu-menu-item v-for="(item, index) in menu.items" :key="index" :index="autoIndex('item', index)">
      <router-link :to="nameRouter(item.route)" replace>
        {{item.title}}
      </router-link>
    </atu-menu-item>
    <sub-menu :index="autoIndex('sub', '')">
      <template slot="title">{{menu.submenu.title}}</template>
      <item-group v-for="(group, index) in menu.submenu.groups" :key="index" :title="group.title">
        <atu-menu-item v-for="(item, index) in group.items" :key="index" :index="autoIndex('sub-item', index)">
          <router-link :to="nameRouter(item.route)" replace>
            {{item.title}}
          </router-link>
        </atu-menu-item>
      </item-group>
    </sub-menu>
  </atu-menu>
</template>

<script>
import AtuMenu from '@/menu'
import config from '../menu'

const AtuMenuItem = AtuMenu.Item
const ItemGroup = AtuMenu.ItemGroup
const SubMenu = AtuMenu.SubMenu

export default {
  components: {
    AtuMenu,
    AtuMenuItem,
    SubMenu,
    ItemGroup
  },
  methods: {
    autoIndex (prefix, index) {
      return prefix + index + ''
    },
    nameRouter (name) {
      return {
        name
      }
    }
  },
  data () {
    return {
      menu: config,
      opens: ['sub']
    }
  }
}
</script>
