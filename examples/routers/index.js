import Vue from 'vue'
import Router from 'vue-router'
import Button from './button'
import Badge from './badge'
import Menu from './menu'
import Icon from './icon'
import Input from './input'
import Checkbox from './checkbox'
import Rate from './rate'
import Pagination from './pagination'
import Card from './card'
import Grid from './grid'
import Radio from './radio'
import Switch from './switch'
import Message from './message'
import Transition from './transition'
import Breadcrumb from './breadcrumb'
import Tabs from './tabs'
import Tag from './tag'
import Affix from './affix'
import Progress from './progress'
import ToolTip from './tooltip'
import Popover from './popover'
import Popconfirm from './popconfirm'
import Timeline from './timeline'
import Dropdown from './dropdown'
import Avatar from './avatar'
import Steps from './steps'
import TimePicker from './timepicker'
import BackTop from './back-top'
import Layout from './layout'
import Table from './table'
import Alert from './alert'
import Select from './select'
import Modal from './modal'
import Spin from './spin'
import Divider from './divider'
import InputNumber from './input-number'
import Collapse from './collapse'
import Drawer from './drawer'
import Slider from './slider'
import Anchor from './anchor'
import Form from './form'
import List from './list'
import Carousel from './carousel'
import AutoComplete from './auto-complete'
import Cascader from './cascader'
import Transfer from './transfer'
import Tree from './tree'
import TreeSelect from './tree-select'
import Upload from './upload'
import DatePicker from './date-picker'
import Calendar from './calendar'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/button',
      component: Button
    },
    {
      path: '/menu',
      component: Menu
    },
    {
      path: '/icon',
      component: Icon
    },
    {
      path: '/checkbox',
      component: Checkbox
    },
    {
      path: '/input',
      component: Input
    },
    {
      path: '/rate',
      component: Rate
    },
    {
      path: '/pagination',
      component: Pagination
    },
    {
      path: '/card',
      component: Card
    },
    {
      path: '/grid',
      component: Grid
    },
    {
      path: '/radio',
      component: Radio
    },
    {
      path: '/switch',
      component: Switch
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/transition',
      component: Transition
    },
    {
      path: '/breadcrumb',
      component: Breadcrumb
    },
    {
      path: '/tabs',
      component: Tabs
    },
    {
      path: '/tag',
      component: Tag
    },
    {
      path: '/affix',
      component: Affix
    },
    {
      path: '/progress',
      component: Progress
    },
    {
      path: '/tooltip',
      component: ToolTip
    },
    {
      path: '/popover',
      component: Popover
    },
    {
      path: '/popconfirm',
      component: Popconfirm
    },
    {
      path: '/timeline',
      component: Timeline
    },
    {
      path: '/dropdown',
      component: Dropdown
    },
    {
      path: '/badge',
      component: Badge
    },
    {
      path: '/avatar',
      component: Avatar
    },
    {
      path: '/steps',
      component: Steps
    },
    {
      path: '/timepicker',
      component: TimePicker
    },
    {
      path: '/backtop',
      component: BackTop
    },
    {
      path: '/layout',
      component: Layout
    },
    {
      path: '/table',
      component: Table
    },
    {
      path: '/alert',
      component: Alert
    },
    {
      path: '/select',
      component: Select
    },
    {
      path: '/modal',
      component: Modal
    },
    {
      path: '/spin',
      component: Spin
    },
    {
      path: '/divider',
      component: Divider
    },
    {
      path: '/input-number',
      component: InputNumber
    },
    {
      path: '/collapse',
      component: Collapse
    },
    {
      path: '/drawer',
      component: Drawer
    },
    {
      path: '/slider',
      component: Slider
    },
    {
      path: '/anchor',
      component: Anchor
    },
    {
      path: '/form',
      component: Form
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/carousel',
      component: Carousel
    },
    {
      path: '/auto-complete',
      component: AutoComplete
    },
    {
      path: '/cascader',
      component: Cascader
    },
    {
      path: '/transfer',
      component: Transfer
    },
    {
      path: '/tree',
      component: Tree
    },
    {
      path: '/tree-select',
      component: TreeSelect
    },
    {
      path: '/upload',
      component: Upload
    },
    {
      path: '/date-picker',
      component: DatePicker
    },
    {
      path: '/calendar',
      component: Calendar
    }
  ]
})

export default router
