<template>
  <Layout :hasSider='true'>
    <Sider collapsible @on-collapse="onCollapse" trigger="null" ref="siderVM">
      <div class="logo"></div>
      <Menu mode="inline" theme="dark" :defaultSelectedKeys="['1']" :inlineCollapsed="collapsed" slot-scope="{collapsed}">
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
        <Icon :type="triggerIcon" class="trigger" @click.native="toggle" />
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
  data () {
    return {
      triggerIcon: 'menu-fold'
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
    onCollapse () {
      console.log('trigger is clicked')
    },
    toggle () {
      let collapsed = this.$refs.siderVM.toggle()
      this.triggerIcon = collapsed ? 'menu-unfold' : 'menu-fold'
    }
  }
}
</script>

<style lang="less" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
