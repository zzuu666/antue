---
order: 2
title:
  zh-CN: 顶部-侧边布局
  en-US: Header-Sider
---

## zh-CN

拥有顶部导航及侧边栏的页面，多用于展示类网站。

## en-US

Both the top navigation and the sidebar, commonly used in documentation site.

```` html
<template>
  <Layout>
    <Header>
      <div class="logo"></div>
      <Menu mode="horizontal" theme="dark" :defaultSelectedKeys="['2']" style="line-height: 64px;">
        <menu-item index="1">nav 1</menu-item>
        <menu-item index="2">nav 2</menu-item>
        <menu-item index="3">nav 3</menu-item>
      </Menu>
    </Header>
    <Content style="padding: 0 50px;">
      <breadcrumb style="margin: 16px 0;">
        <breadcrumb-item>
          Home
        </breadcrumb-item>
        <breadcrumb-item>
          List
        </breadcrumb-item>
        <breadcrumb-item>
          App
        </breadcrumb-item>
      </breadcrumb>
      <Layout hasSider style="padding: 24px 0; background: #fff;">
        <Sider style="background: #fff">
          <Menu mode="inline" style="height:100%;" :defaultOpenKeys="['sub1']" :defaultSelectedKeys="['1']">
            <SubMenu index="sub1">
              <template slot="title">
                <icon type="user" />subnav 1
              </template>
              <menu-item index="1">option1</menu-item>
              <menu-item index="2">option2</menu-item>
              <menu-item index="3">option3</menu-item>
              <menu-item index="4">option4</menu-item>
            </SubMenu>
            <SubMenu index="sub2">
              <template slot="title">
                <icon type="laptop" />subnav 2
              </template>
              <menu-item index="5">option5</menu-item>
              <menu-item index="6">option6</menu-item>
              <menu-item index="7">option7</menu-item>
              <menu-item index="8">option8</menu-item>
            </SubMenu>
            <SubMenu index="sub3">
              <template slot="title">
                <icon type="notification" />subnav 3
              </template>
              <menu-item index="9">option9</menu-item>
              <menu-item index="10">option10</menu-item>
              <menu-item index="11">option11</menu-item>
              <menu-item index="12">option12</menu-item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style="padding: 0 24px; min-height: 280px">
          <div>Content</div>
        </Content>
      </Layout>
    </Content>
    <Footer :style="{textAlign: 'center'}">
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
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
