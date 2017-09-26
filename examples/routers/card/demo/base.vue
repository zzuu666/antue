<template>
  <div class="ant-card-base">
    <ant-card title="Card title" extra="more" style="width: 300px">
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
    }
  }
</script>

<style lang="less" scoped>
  .ant-card-base {
    padding: 10px 30px;
    text-align: left;
  }
</style>
