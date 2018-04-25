<template>
  <container
    title="Avatar "
    profile="头像">
    <h2>何时使用</h2>
    <p>用来代表用户或事物，支持图片、图标或字符展示。</p>
    <h2>代码演示</h2>
    <a-row :gutter="12" style="margin-bottom: 20px">
      <a-col :span="12">
        <code-show title="基本" desc="头像有三种尺寸，两种形状可选。">
          <base-demo></base-demo>
        </code-show>
        <code-show title="自动调整字符大小" desc="对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。">
          <auto-demo></auto-demo>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="类型" desc="支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。">
          <type-demo></type-demo>
        </code-show>
        <code-show title="带徽标的头像" desc="通常用于消息提示。">
          <badge-demo></badge-demo>
        </code-show>
      </a-col>
    </a-row>
  </container>
</template>
<script>
  import Container from '../../common/container'
  import CodeShow from '../../common/code-show'
  import ARow from '@/row'
  import ACol from '@/col'

  import BaseDemo from './demo/basic.vue'
  import TypeDemo from './demo/type.vue'
  import AutoDemo from './demo/auto.vue'
  import BadgeDemo from './demo/with-badge.vue'

  export default {
    components: {
      Container,
      ARow,
      ACol,
      CodeShow,
      BaseDemo,
      TypeDemo,
      AutoDemo,
      BadgeDemo
    }
  }
</script>
