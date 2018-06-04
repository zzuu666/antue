<template>
  <div style="position: relative; height: 380px; overflow: auto;">
    <Layout hasSider style="min-height: 100vh;">
      <Sider collapsible @on-collapse="onCollapse">
        <Menu :mode="collapsed ? 'vertical' : 'inline'" theme="dark" :defaultSelectedKeys="['1']" :inlineCollapsed="collapsed" slot-scope="{collapsed}">
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
.ant-layout-sider-trigger {
  position: sticky;
}
</style>

