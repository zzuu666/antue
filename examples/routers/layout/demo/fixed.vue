<template>
  <div style="position: relative; height: 380px; overflow: auto;">
    <Layout>
      <Header style="position: sticky; top: 0; width: 100%;">
        <div class="logo"></div>
        <Menu mode="horizontal" theme="dark" :defaultSelectedKeys="['2']" style="line-height: 64px;">
          <menu-item index="1">nav 1</menu-item>
          <menu-item index="2">nav 2</menu-item>
          <menu-item index="3">nav 3</menu-item>
        </Menu>
      </Header>
      <!-- <Content style="padding: 0 50px; margin-top: 64px;"> -->
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
        <div style="background: #fff; padding: 24px; min-height: 380px">Content</div>
      </Content>
      <Footer :style="{textAlign: 'center'}">
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/layout'
import Breadcrumb from '@/breadcrumb'
import Menu from '@/menu'

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
    MenuItem: Menu.Item
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
