<template>
  <atu-menu :defaultOpenKeys="opens" mode="inline">
    <atu-menu-item v-for="(item, index) in menu.items" :key="index" :index="autoIndex('item', index)">
      <router-link :to="nameRouter(item.route)" replace>
        {{item.title}}
      </router-link>
    </atu-menu-item>
    <sub-menu v-for="(sub, index) in menu.submenu" :key="index" :index="autoIndex('sub', index)">
      <template slot="title">{{sub.title}}</template>
      <item-group v-for="(group, index) in sub.groups" :key="index" :title="group.title">
        <atu-menu-item v-for="(item, index) in group.items" :key="index" :index="autoIndex(`${group.title}`, index)">
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
      opens: ['sub0']
    }
  }
}
</script>
