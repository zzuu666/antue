<template>
  <div :class="[
    'ant-card-base',
    !bordered ? `ant-bgc` : '']">
    <ant-card :title="title" :extra="extra" :loading="loading" style="width: 300px" :bordered="bordered">
      <a href="#" slot="extra">More</a>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </ant-card>
  </div>
</template>

<script>
  import AntCard from '@/card'
  export default {
    components: {
      AntCard
    },
    props: {
      bordered: {
        type: Boolean,
        default: true
      },
      title: String,
      extra: String,
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="less" scoped>
  .ant-card-base {
    padding: 10px 30px;
    text-align: left;
  }

  .ant-bgc {
    background-color: rgba(236,236,236,1);
  }
</style>
