<template>
  <div style="position: relative; height: 380px; overflow: auto;">
    <atu-layout>
      <atu-header style="position: sticky; top: 0; width: 100%;">
        <div class="logo" />
        <atu-menu mode="horizontal" theme="dark" :defaultSelectedKeys="['2']" style="line-height: 64px;">
          <atu-menu-item index="1">nav 1</atu-menu-item>
          <atu-menu-item index="2">nav 2</atu-menu-item>
          <atu-menu-item index="3">nav 3</atu-menu-item>
        </atu-menu>
      </atu-header>
      <!-- <atu-content style="padding: 0 50px; margin-top: 64px;"> -->
      <atu-content style="padding: 0 50px;">
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
        <div style="background: #fff; padding: 24px; min-height: 380px">Content</div>
      </atu-content>
      <atu-footer :style="{textAlign: 'center'}">
        Ant Design ©2016 Created by Ant UED
      </atu-footer>
    </atu-layout>
  </div>
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
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
