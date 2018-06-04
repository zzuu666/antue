<template>
  <container title="Layout布局" profile="协助进行页面级整体布局。">
    <blockquote>
      <p>注意：采用 flex 布局实现，请注意
        <a href="http://caniuse.com/#search=flex">浏览器兼容性</a>问题。</p>
        <p><b>注意：在需要fixed定位的三个demo中，为了避免使用iframe，使用了sticky属性替代</b></p>
    </blockquote>
    <h2>代码演示</h2>
    <a-row :gutter="12" style="margin-bottom: 20px">
      <a-col :span="24">
        <code-show title="基本结构" desc="典型页面布局。">
          <base-demo></base-demo>
        </code-show>
        <code-show title="上中下布局" desc="一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。">
          <top-demo></top-demo>
        </code-show>
        <code-show title="顶部-侧边布局-通栏" desc="同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。">
          <top-side2-demo></top-side2-demo>
        </code-show>
        <code-show title="顶部-侧边布局" desc="拥有顶部导航及侧边栏的页面，多用于展示类网站。">
          <top-side-demo></top-side-demo>
        </code-show>
        <code-show title="侧边布局" desc="侧边两列式布局。页面横向空间有限时，侧边导航可收起。
侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。">
          <side-demo></side-demo>
        </code-show>
        <code-show title="自定义触发器" desc="要使用自定义触发器，可以设置 `trigger={null}` 来隐藏默认设定。">
          <custom-trigger-demo></custom-trigger-demo>
        </code-show>
        <code-show title="响应式布局" desc="Layout.Sider 支持响应式布局。说明：配置 `breakpoint` 属性即生效，视窗宽度小于 `breakpoint` 时 Sider 缩小为 `collapsedWidth` 宽度，若将 `collapsedWidth` 设置为零，会出现特殊 trigger。">
          <responsive-demo></responsive-demo>
        </code-show>
        <code-show title="固定头部" desc="一般用于固定顶部导航，方便页面切换。">
          <fixed-demo></fixed-demo>
        </code-show>
        <code-show title="固定侧边栏" desc="当内容较长时，使用固定侧边栏可以提供更好的体验。">
          <fixed-sider-demo></fixed-sider-demo>
        </code-show>
      </a-col>
    </a-row>
  </container>
</template>
<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import ARow from '@/row'
import ACol from '@/col'

import BaseDemo from './demo/basic.vue'
import TopDemo from './demo/top'
import TopSide2Demo from './demo/top-side2'
import TopSideDemo from './demo/top-side'
import SideDemo from './demo/side'
import CustomTriggerDemo from './demo/custom-trigger.vue'
import ResponsiveDemo from './demo/responsive'
import FixedDemo from './demo/fixed'
import FixedSiderDemo from './demo/fixed-sider'

export default {
  components: {
    Container,
    ARow,
    ACol,
    CodeShow,
    BaseDemo,
    TopDemo,
    TopSide2Demo,
    TopSideDemo,
    SideDemo,
    CustomTriggerDemo,
    ResponsiveDemo,
    FixedDemo,
    FixedSiderDemo
  }
}
</script>
