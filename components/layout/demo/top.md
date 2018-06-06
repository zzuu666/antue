---
order: 1
title:
  zh-CN: 上中下布局
  en-US: Header-Content-Footer
---

## zh-CN

最基本的『上-中-下』布局。

一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。

## en-US

The most basic "header-content-footer" layout.

Generally, the mainnav is placed at the top of the page, and includes the logo, the first level navigation, and the secondary menu (users, settings, notifications) from left to right in it.
We always put contents in a fixed size navigation (eg: `1200px`), the layout of the whole page is stable, it's not affected by viewing area.

Top-bottom structure is conform with the top-bottom viewing habit, it's a classical navigation pattern of websites. This pattern demonstrates efficiency in the main workarea, while using some vertical space. And because the horizontal space of the navigation is limited, this pattern is not suitable for cases when the first level navigation contains many elements or links

```` html
<template>
  <atu-layout>
    <atu-header>
      <div class="logo" />
      <atu-menu mode="horizontal" theme="dark" :defaultSelectedKeys="['2']" style="line-height: 64px;">
        <atu-menu-item index="1">nav 1</atu-menu-item>
        <atu-menu-item index="2">nav 2</atu-menu-item>
        <atu-menu-item index="3">nav 3</atu-menu-item>
      </atu-menu>
    </atu-header>
    <atu-content :style="{padding: '0 50px'}">
      <atu-breadcrumb style="margin: 16px 0;">
        <atu-breadcrumb-item>
          Home
        </atu-breadcrumb-item>
        <atu-breadcrumb-item>
          List
        </atu-breadcrumb-item>
        <atu-breadcrumb-item>
          App
        </atu-breadcrumb-item>
      </atu-breadcrumb>
      <div style="background: #fff; padding: 24px; min-height: 280px">Content</div>
    </atu-content>
    <atu-footer :style="{textAlign: 'center'}">
      Ant Design ©2016 Created by Ant UED
    </atu-footer>
  </atu-layout>
</template>

<script>
import AtuLayout from '@/layout'
import AtuBreadcrumb from '@/breadcrumb'
import AtuMenu from '@/menu'

export default {
  components: {
    AtuLayout,
    AtuSider: AtuLayout.Sider,
    AtuHeader: AtuLayout.Header,
    AtuContent: AtuLayout.Content,
    AtuFooter: AtuLayout.Footer,
    AtuBreadcrumb,
    AtuBreadcrumbItem: AtuBreadcrumb.Item,
    AtuMenu,
    AtuMenuItem: AtuMenu.Item
  }
}
</script>

<style scoped>
.logo {
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);  
  margin: 16px 24px 16px 0;
  float: left;
}
</style>

````
