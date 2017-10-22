<template>
  <div id="app">
    <a-row class="header">
      <a-col class="header-logo" :span="4">
        <img src="./logo.png"> Ant x Vue
      </a-col>
      <a-col class="header-title" :span="20">

      </a-col>
    </a-row>
    <a-row>
      <a-col :span="4">
        <a-menu mode="inline">
          <a-menu-group
            v-for="group in menu"
            :key="group.title"
            :title="group.title">
              <a-menu-item
                v-for="item in group.items"
                :key="item.title"
                :index="item.title">
                  <router-link :to="item.route" replace>
                    {{item.title}}
                  </router-link>
              </a-menu-item>
          </a-menu-group>
        </a-menu>
      </a-col>
      <a-col :span="20">
        <router-view></router-view>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import aRow from '../components/row'
import aCol from '../components/col'
import aMenu from '../components/menu'

const aMenuItem = aMenu.Item
const aMenuGroup = aMenu.ItemGroup

export default {
  name: 'app',
  components: {
    aRow,
    aCol,
    aMenu,
    aMenuItem,
    aMenuGroup
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
        },
        {
          title: 'Data Entry',
          items: [
            {

              title: 'Input 输入框',
              route: 'input'
            },
            {
              title: 'Rate 评分',
              route: 'rate'
            },
            {
              title: 'Radio 单选框',
              route: 'radio'
            },
            {
              title: 'Switch 开关',
              route: 'switch'
            }
          ]
        },
        {
          title: 'Data Display',
          items: [
            {
              title: 'Card 卡片',
              route: 'card'
            },
            {
              title: 'Tabs 标签页',
              route: 'tabs'
            },
            {
              title: 'Tag 标签',
              route: 'tag'
            }
          ]
        },
        {
          title: 'Feedback',
          items: [
            {
              title: 'Message 全局提示',
              route: 'message'
            }
          ]
        },
        {
          title: 'Transition',
          items: [
            {
              title: 'Transition 输入框',
              route: 'transition'
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
</style>
