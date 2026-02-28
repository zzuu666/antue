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
            },
            {
              title: 'Layout 布局',
              route: 'layout'
            },
            {
              title: 'Divider 分割线',
              route: 'divider'
            }
          ]
        },
        {
          title: 'Navigation',
          items: [
            {
              title: 'Affix 固钉',
              route: 'affix'
            },
            {
              title: 'Breadcrumb 面包屑',
              route: 'breadcrumb'
            },
            {
              title: 'Menu 菜单',
              route: 'menu'
            },
            {
              title: 'Pagination 分页',
              route: 'pagination'
            },
            {
              title: 'Dropdown 下拉菜单',
              route: 'dropdown'
            },
            {
              title: 'Steps 步骤条',
              route: 'steps'
            }
          ]
        },
        {
          title: 'Data Entry',
          items: [
            {
              title: 'Checkbox 多选框',
              route: 'checkbox'
            },
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
            },
            {
              title: 'TimePicker 时间选择框',
              route: 'timepicker'
            },
            {
              title: 'Select 选择器',
              route: 'select'
            },
            {
              title: 'InputNumber 数字输入框',
              route: 'input-number'
            },
            {
              title: 'Slider 滑动输入条',
              route: 'slider'
            },
            {
              title: 'AutoComplete 自动完成',
              route: 'auto-complete'
            },
            {
              title: 'Cascader 级联选择',
              route: 'cascader'
            },
            {
              title: 'Form 表单',
              route: 'form'
            },
            {
              title: 'Transfer 穿梭框',
              route: 'transfer'
            },
            {
              title: 'TreeSelect 树选择',
              route: 'tree-select'
            },
            {
              title: 'Upload 上传',
              route: 'upload'
            },
            {
              title: 'DatePicker 日期选择框',
              route: 'date-picker'
            }
          ]
        },
        {
          title: 'Data Display',
          items: [
            {
              title: 'Table 表格',
              route: 'table'
            },
            {
              title: 'Avatar 头像',
              route: 'avatar'
            },
            {
              title: 'Badge 徽章',
              route: 'badge'
            },
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
            },
            {
              title: 'Tooltip 提示',
              route: 'tooltip'
            },
            {
              title: 'Popover 文字提示',
              route: 'popover'
            },
            {
              title: 'Timeline 时间轴',
              route: 'timeline'
            },
            {
              title: 'Collapse 折叠面板',
              route: 'collapse'
            },
            {
              title: 'Carousel 走马灯',
              route: 'carousel'
            },
            {
              title: 'List 列表',
              route: 'list'
            },
            {
              title: 'Tree 树形控件',
              route: 'tree'
            },
            {
              title: 'Calendar 日历',
              route: 'calendar'
            }
          ]
        },
        {
          title: 'Feedback',
          items: [
            {
              title: 'Message 全局提示',
              route: 'message'
            },
            {
              title: 'Progress 进度条',
              route: 'progress'
            },
            {
              title: 'Popconfirm 气泡确认',
              route: 'popconfirm'
            },
            {
              title: 'Alert 警告提示',
              route: 'alert'
            },
            {
              title: 'Modal 对话框',
              route: 'modal'
            },
            {
              title: 'Spin 加载中',
              route: 'spin'
            },
            {
              title: 'Drawer 抽屉',
              route: 'drawer'
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
        },
        {
          title: 'Other',
          items: [
            {
              title: 'BackTop 回到顶部',
              route: 'backtop'
            },
            {
              title: 'Anchor 锚点',
              route: 'anchor'
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
