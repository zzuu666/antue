<template>
  <div class="code-box-demo">
    <atu-layout>
      <atu-header>Header</atu-header>
      <atu-content>Content</atu-content>
      <atu-footer>Footer</atu-footer>
    </atu-layout>

    <atu-layout>
      <atu-header>Header</atu-header>
      <atu-layout has-sider>
        <atu-sider>Sider</atu-sider>
        <atu-content>Content</atu-content>
      </atu-layout>
      <atu-footer>Footer</atu-footer>
    </atu-layout>

    <atu-layout>
      <atu-header>Header</atu-header>
      <atu-layout has-sider>
        <atu-content>Content</atu-content>
        <atu-sider>Sider</atu-sider>
      </atu-layout>
      <atu-footer>Footer</atu-footer>
    </atu-layout>

    <atu-layout has-sider>
      <atu-sider>Sider</atu-sider>
      <atu-layout>
        <atu-header>Header</atu-header>
        <atu-content>Content</atu-content>
        <atu-footer>Footer</atu-footer>
      </atu-layout>
    </atu-layout>
  </div>
</template>
<script>
import AtuLayout from '@/layout'

export default {
  components: {
    AtuLayout,
    AtuSider: AtuLayout.Sider,
    AtuHeader: AtuLayout.Header,
    AtuContent: AtuLayout.Content,
    AtuFooter: AtuLayout.Footer
  }
}
</script>

<style scoped>
.code-box-demo>.ant-layout{
  margin-bottom: 48px;
}
.ant-layout {
  text-align: center;
}
.ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
.ant-layout-header,
.ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
.ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
</style>
