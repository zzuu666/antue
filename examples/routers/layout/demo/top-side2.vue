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
    <atu-layout hasSider>
      <atu-sider>
        <atu-menu mode="inline" style="height:100%;border-right:0;" :defaultOpenKeys="['sub1']" :defaultSelectedKeys="['1']">
          <atu-sub-menu index="sub1" >
            <template slot="title">
              <atu-icon type="user" />subnav 1
            </template>
            <atu-menu-item index="1">option1</atu-menu-item>
            <atu-menu-item index="2">option2</atu-menu-item>
            <atu-menu-item index="3">option3</atu-menu-item>
            <atu-menu-item index="4">option4</atu-menu-item>
          </atu-sub-menu>
          <atu-sub-menu index="sub2" >
            <template slot="title">
              <atu-icon type="laptop" />subnav 2
            </template>
            <atu-menu-item index="5">option5</atu-menu-item>
            <atu-menu-item index="6">option6</atu-menu-item>
            <atu-menu-item index="7">option7</atu-menu-item>
            <atu-menu-item index="8">option8</atu-menu-item>
          </atu-sub-menu>
          <atu-sub-menu index="sub3" >
            <template slot="title">
              <atu-icon type="notification" />subnav 3
            </template>
            <atu-menu-item index="9">option9</atu-menu-item>
            <atu-menu-item index="10">option10</atu-menu-item>
            <atu-menu-item index="11">option11</atu-menu-item>
            <atu-menu-item index="12">option12</atu-menu-item>
          </atu-sub-menu>
        </atu-menu>
      </atu-sider>
      <atu-layout style="padding: 0px 24px 24px">
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
        <atu-content style="background: #fff; padding: 24px; min-height: 280px">
          <div>Content</div>
        </atu-content>
      </atu-layout>
    </atu-layout>
  </atu-layout>
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
