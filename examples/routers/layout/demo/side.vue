<template>
  <div style="position: relative; height: 380px; overflow: auto;">
    <atu-layout hasSider style="min-height: 100vh;">
      <atu-sider collapsible @collapse="onCollapse">
        <atu-menu :mode="collapsed ? 'vertical' : 'inline'" theme="dark" :defaultSelectedKeys="['1']" :inlineCollapsed="collapsed" slot-scope="{collapsed}">
          <atu-menu-item index="1">
            <atu-icon type="pie-chart" />
            <span>Option 1</span>
          </atu-menu-item>
          <atu-menu-item index="2">
            <atu-icon type="desktop" />
            <span>Option 2</span>
          </atu-menu-item>
          <atu-sub-menu index="sub1">
            <template slot="title">
              <atu-icon type="user" />
              <span>User</span>
            </template>
            <atu-menu-item index="5">Tom</atu-menu-item>
            <atu-menu-item index="6">Bill</atu-menu-item>
            <atu-menu-item index="7">Alex</atu-menu-item>
          </atu-sub-menu>
          <atu-sub-menu index="sub2">
            <template slot="title">
              <atu-icon type="team" />
              <span>Team</span>
            </template>
            <atu-menu-item index="9">Team1</atu-menu-item>
            <atu-menu-item index="10">Team2</atu-menu-item>
          </atu-sub-menu>
          <atu-menu-item index="11">
            <atu-icon type="file" />
            <span>File</span>
          </atu-menu-item>
        </atu-menu>
      </atu-sider>
      <atu-layout>
        <atu-header style="background: #fff; padding: 0;"></atu-header>
        <atu-content :style="{margin: '0 16px'}">
          <atu-breadcrumb style="margin: 16px 0;">
            <atu-breadcrumb-item>
              User
            </atu-breadcrumb-item>
            <atu-breadcrumb-item>
              Bill
            </atu-breadcrumb-item>
          </atu-breadcrumb>
          <div style="background: #fff; padding: 24px; min-height: 360px">Bill is a cat.</div>
        </atu-content>
        <atu-footer :style="{textAlign: 'center'}">
          Ant Design ©2016 Created by Ant UED
        </atu-footer>
      </atu-layout>
    </atu-layout>
  </div>
</template>

<script>
import AtuLayout from '@/layout'
import AtuBreadcrumb from '@/breadcrumb'
import AtuMenu from '@/menu'
import AtuIcon from '@/icon'

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
    AtuSubMenu: AtuMenu.SubMenu,
    AtuMenuItem: AtuMenu.Item,
    AtuIcon
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
