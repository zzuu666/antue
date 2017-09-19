<template>
  <div id="app">
    <atu-row class="header">
      <atu-col class="header-logo" :span="5">
        <img src="../examples/logo.png"> Ant x Vue
      </atu-col>
      <atu-col class="header-title" :span="19">
      </atu-col>
    </atu-row>
    <atu-row>
      <atu-col :span="5">
        <atu-menu mode="inline">
          <atu-menu-group
            v-for="group in menu"
            :key="group.title"
            :title="group.title">
              <atu-menu-item
                v-for="item in group.items"
                :key="item.title"
                :index="item.title">
                  <router-link :to="item.route" replace>
                    {{item.title}}
                  </router-link>
              </atu-menu-item>
          </atu-menu-group>
        </atu-menu>
      </atu-col>
      <atu-col :span="19">
        <router-view></router-view>
      </atu-col>
    </atu-row>
  </div>
</template>

<script>
import AtuRow from '@/row'
import AtuCol from '@/col'
import AtuMenu from '@/menu'
import menuConfig from './common/menu.js'

const AtuMenuItem = AtuMenu.Item
const AtuMenuGroup = AtuMenu.ItemGroup

export default {
  name: 'app',
  components: {
    AtuRow,
    AtuCol,
    AtuMenu,
    AtuMenuItem,
    AtuMenuGroup
  },
  data () {
    return {
      menu: [
        {
          title: 'General',
          items: [
            {
              title: 'Button 按钮',
              route: 'button'
            },
            {
              title: 'Icon 图标',
              route: 'icon'
            }
          ]
        },
        {
          title: 'Layout',
          items: [
            {
              title: 'Grid 栅格',
              route: 'grid'
            }
          ]
        },
        {
          title: 'Navigation',
          items: [
            {
              title: 'Menu 菜单',
              route: 'menu'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  border-bottom: 1px solid #dfdfdf;
  &-logo {
    position: relative;
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    img {
      position: relative;
      display: inline-block;
      height: 40px;
      vertical-align: middle;
    }
  }
  &-title {
    position: relative;
    line-height: 60px;
    height: 60px;
    font-size: 24px;
    font-weight: 900;
  }
}
.ant-menu {
  height: 100%;
}
</style>
