<template>
  <atu-layout has-sider>
    <atu-sider collapsible @collapse="onCollapse" :trigger="null" ref="siderVM">
      <div class="logo" />
      <atu-menu mode="inline" theme="dark" :defaultSelectedKeys="['1']" :inlineCollapsed="collapsed" slot-scope="{collapsed}">
        <atu-menu-item index="1">
          <atu-icon type="user" />
          <span>nav 1</span>
        </atu-menu-item>
        <atu-menu-item index="2">
          <atu-icon type="video-camera" />
          <span>nav 2</span>
        </atu-menu-item>
        <atu-menu-item index="3">
          <atu-icon type="upload" />
          <span>nav 3</span>
        </atu-menu-item>
      </atu-menu>
    </atu-sider>
    <atu-layout>
      <atu-header style="background: #fff; padding: 0;">
        <atu-icon :type="triggerIcon" class="trigger" @click.native="toggle" />
      </atu-header>
      <atu-content style="margin: 24px 16px; padding: 24px; background: #fff; minHeight: 280px">Content</atu-content>
    </atu-layout>
  </atu-layout>
</template>

<script>
import AtuLayout from '@/layout'
import AtuBreadcrumb from '@/breadcrumb'
import AtuMenu from '@/menu'
import AtuIcon from '@/icon'

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
    AtuLayout,
    AtuSider: AtuLayout.Sider,
    AtuHeader: AtuLayout.Header,
    AtuContent: AtuLayout.Content,
    AtuFooter: AtuLayout.Footer,
    AtuBreadcrumb,
    AtuBreadcrumbItem: AtuBreadcrumb.Item,
    AtuMenu,
    AtuMenuItem: AtuMenu.Item,
    AtuIcon
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
