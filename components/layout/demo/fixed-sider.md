---
order: 7
iframe: 360
title:
  zh-CN: 固定侧边栏
  en-US: Fixed Sider
---

## zh-CN

当内容较长时，使用固定侧边栏可以提供更好的体验。

## en-US

When dealing with long content, a fixed sider can provide a better user experience.

```` html
<template>
  <div style="position: relative; height: 380px; overflow: auto;">
  <Layout hasSider style="height: 100%;">
    <Sider style="overflow: auto; height: 100%; position: sticky; top: 0; left: 0; bottom: 0;">
      <Menu mode="inline" theme="dark" :defaultSelectedKeys="['1']">
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
        <menu-item index="12">
          <icon type="file"></icon>
          <span>File</span>
        </menu-item>
        <menu-item index="13">
          <icon type="file"></icon>
          <span>File</span>
        </menu-item>
        <menu-item index="14">
          <icon type="file"></icon>
          <span>File</span>
        </menu-item>
        <menu-item index="15">
          <icon type="file"></icon>
          <span>File</span>
        </menu-item>
        <menu-item index="16">
          <icon type="file"></icon>
          <span>File</span>
        </menu-item>
      </Menu>
    </Sider>
    <!-- <Layout style="margin-left: 200px;"> -->
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
        <div style="background: #fff; padding: 24px; min-height: 360px">
          ...
          <br /> Really
          <br />...<br />...<br />...<br /> long
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br /> content
        </div>
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
  }
}
</script>

````
