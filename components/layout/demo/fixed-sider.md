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
    <atu-layout has-sider style="height: 100%;">
      <atu-sider style="overflow: auto; height: 100%; position: sticky; top: 0; left: 0; bottom: 0;">
        <atu-menu mode="inline" theme="dark" :defaultSelectedKeys="['1']">
          <atu-menu-item index="1">
            <atu-icon type="pie-chart"/>
            <span>Option 1</span>
          </atu-menu-item>
          <atu-menu-item index="2">
            <atu-icon type="desktop"/>
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
            <atu-icon type="file"/>
            <span>File</span>
          </atu-menu-item>
          <atu-menu-item index="12">
            <atu-icon type="file"/>
            <span>File</span>
          </atu-menu-item>
          <atu-menu-item index="13">
            <atu-icon type="file"/>
            <span>File</span>
          </atu-menu-item>
          <atu-menu-item index="14">
            <atu-icon type="file"/>
            <span>File</span>
          </atu-menu-item>
          <atu-menu-item index="15">
            <atu-icon type="file"/>
            <span>File</span>
          </atu-menu-item>
          <atu-menu-item index="16">
            <atu-icon type="file"/>
            <span>File</span>
          </atu-menu-item>
        </atu-menu>
      </atu-sider>
      <atu-layout>
        <atu-header style="background: #fff; padding: 0;" />
        <atu-content :style="{margin: '0 16px'}">
          <atu-breadcrumb style="margin: 16px 0;">
            <atu-breadcrumb-item>
              User
            </atu-breadcrumb-item>
            <atu-breadcrumb-item>
              Bill
            </atu-breadcrumb-item>
          </atu-breadcrumb>
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
        </atu-content>
        <atu-footer :style="{ textAlign: 'center' }">
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
  }
}
</script>

````
