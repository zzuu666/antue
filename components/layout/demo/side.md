---
order: 3
iframe: 360
title:
  zh-CN: 侧边布局
  en-US: Sider
---

## zh-CN

侧边两列式布局。页面横向空间有限时，侧边导航可收起。

侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。

## en-US

Two-columns layout. The sider menu can be collapsed when horizontal space is limited.

Generally, the mainnav is placed on the left side of the page, and the secondary menu is placed on the top of the working area. Contents will adapt the layout to the viewing area to improve the horizontal space usage, while the layout of the whole page is not stable.

The level of the aisde navigation is scalable. The first, second, and third level navigations could be present more fluently and relevantly, and aside navigation can be fixed, allowing the user to quickly switch and spot the current position, improving the user experience. However, this navigation occupies some horizontal space of the contents

```` html
<template>
  <div style="position: relative; height: 380px; overflow: auto;">
    <Layout hasSider style="min-height: 100vh;">
      <Sider collapsible @on-collapse="onCollapse">
        <Menu :mode="collapsed ? 'vertical' : 'inline'" theme="dark" :defaultSelectedKeys="['1']"
          :inlineCollapsed="collapsed" slot-scope="{collapsed}">
          <menu-item index="1">
            <icon type="pie-chart"></icon>
            <span>Option 1</span>
          </menu-item>
          <menu-item index="2">
            <icon type="desktop"></icon>
            <span>Option 2</span>
          </menu-item>
          <SubMenu index="sub1">
            <template slot="title">
              <icon type="user" />
              <span>User</span>
            </template>
            <menu-item index="5">Tom</menu-item>
            <menu-item index="6">Bill</menu-item>
            <menu-item index="7">Alex</menu-item>
          </SubMenu>
          <SubMenu index="sub2">
            <template slot="title">
              <icon type="team" />
              <span>Team</span>
            </template>
            <menu-item index="9">Team1</menu-item>
            <menu-item index="10">Team2</menu-item>
          </SubMenu>
          <menu-item index="11">
            <icon type="file"></icon>
            <span>File</span>
          </menu-item>
        </Menu>
      </Sider>
      <Layout>
        <Header style="background: #fff; padding: 0;"></Header>
        <Content :style="{margin: '0 16px'}">
          <breadcrumb style="margin: 16px 0;">
            <breadcrumb-item>
              User
            </breadcrumb-item>
            <breadcrumb-item>
              Bill
            </breadcrumb-item>
          </breadcrumb>
          <div style="background: #fff; padding: 24px; min-height: 360px">Bill is a cat.</div>
        </Content>
        <Footer :style="{textAlign: 'center'}">
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/layout'
import Breadcrumb from '@/breadcrumb'
import Menu from '@/menu'
import Icon from '@/icon'

export default {
  components: {
    Layout,
    Sider: Layout.Sider,
    Header: Layout.Header,
    Content: Layout.Content,
    Footer: Layout.Footer,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item,
    Menu,
    SubMenu: Menu.SubMenu,
    MenuItem: Menu.Item,
    Icon
  },
  methods: {
    onCollapse (collapsed, type) {
      console.log('side-demo is collapsed: ' + collapsed, '\ntype is ' + type)
    }
  }
}
</script>

<style>
.ant-layout-sider-trigger{
  position: sticky;
}
</style>


````
