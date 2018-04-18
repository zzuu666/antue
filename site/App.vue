<template>
  <div id="app">
    <site-header></site-header>
    <atu-row class="content">
      <atu-col :span="4">
        <site-menu></site-menu>
      </atu-col>
      <atu-col class="content-doc" :span="20">
        <router-view></router-view>
      </atu-col>
    </atu-row>
    <site-footer></site-footer>
  </div>
</template>

<script>
import AtuRow from '@/row'
import AtuCol from '@/col'
import SiteHeader from './common/layout/header'
import SiteMenu from './common/layout/menu'
import SiteFooter from './common/layout/footer'

export default {
  name: 'app',
  components: {
    AtuRow,
    AtuCol,
    SiteHeader,
    SiteMenu,
    SiteFooter
  }
}
</script>

<style lang="less" scoped>
#app {
  background-color: #f0f2f5;
}
.content {
  position: relative;
  margin: 0 48px 24px 48px;
  padding: 24px 0;
  background-color: #fff;
  border-radius: 4px;

  &-doc {
    border-left: 1px solid #e9e9e9;
    margin-left: -1px;
  }
}

</style>
