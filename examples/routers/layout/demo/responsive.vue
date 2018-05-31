<template>
  <Layout :hasSider='true'>
    <Sider collapsible @on-collapse="onCollapse" breakpoint="md" :collapsedWidth="0">
      <div class="logo"></div>
      <Menu mode="inline" theme="dark" :defaultSelectedKeys="['1']" :inlineCollapsed="slotProps.collapsed" slot-scope="slotProps">
        <MenuItem index="1">
        <Icon type="user" />
        <span>nav 1</span>
        </MenuItem>
        <MenuItem index="2">
        <Icon type="video-camera" />
        <span>nav 2</span>
        </MenuItem>
        <MenuItem index="3">
        <Icon type="upload" />
        <span>nav 3</span>
        </MenuItem>
      </Menu>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0;">
      </Header>
      <Content style="margin: 24px 16px; padding: 24px; background: #fff; minHeight: 280px">Content</Content>
    </Layout>
  </Layout>
</template>

<script>
import Layout from '@/layout'
import Breadcrumb from '@/breadcrumb'
import Menu from '@/menu'
import Icon from '@/icon'

export default {
  props: {
    prefixCls: {
      type: String,
      default: 'ant-layout'
    }
  },
  components: {
    Layout,
    Sider: Layout.Sider,
    Header: Layout.Header,
    Content: Layout.Content,
    Footer: Layout.Footer,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item,
    Menu,
    MenuItem: Menu.Item,
    Icon
  },
  methods: {
    onCollapse (collapsed, type) {
      console.log('responsive-demo is collapsed: ' + collapsed, '\ntype is ' + type)
    }
  }
}
</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
