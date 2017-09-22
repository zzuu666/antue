<template>
  <footer class="footer">
    <atu-row :gutter="48">
      <atu-col :span="6">
        <footer-item icon="github" title="Github" :as="as1"></footer-item>
      </atu-col>
      <atu-col :span="6">
        <footer-item icon="link" title="相关链接" :as="as2"></footer-item>
      </atu-col>
      <atu-col :span="6">
        <footer-item icon="customer-service" title="社区" :as="as3"></footer-item>
      </atu-col>
      <atu-col :span="6">
        <footer-item title="Copyright © 2017">
          <p>Released under the MIT License</p>
        </footer-item>
      </atu-col>
    </atu-row>
  </footer>
</template>

<script>
import AtuRow from '@/row'
import AtuCol from '@/col'
import FooterItem from './footer-item'

export default {
  components: {
    AtuRow,
    AtuCol,
    FooterItem
  },
  data () {
    return {
      as1: [
        {
          name: 'Antue',
          href: 'https://github.com/zzuu666/antue'
        },
        {
          name: 'Antd',
          href: 'https://github.com/ant-design/ant-design',
          desc: 'Ant Design of React'
        },
        {
          name: 'NG-ZORRO',
          href: 'https://github.com/NG-ZORRO/ng-zorro-antd',
          desc: 'Ant Design of Angular'
        },
        {
          name: 'Awesome Ant Design',
          href: 'https://github.com/websemantics/awesome-ant-design'
        }
      ],
      as2: [
        {
          name: 'NPM',
          href: 'https://www.npmjs.com/package/antue'
        },
        {
          name: 'Vue',
          href: 'https://vuejs.org/'
        }
      ],
      as3: [
        {
          name: 'Issue',
          href: 'https://github.com/zzuu666/antue/issues'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  position: relative;
  background: #fff;
  padding: 24px;
  &-title {
    position: relative;
    font-size: 14px;
  }
}
</style>

