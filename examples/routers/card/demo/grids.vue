<template>
  <div :class="[
    'ant-card-base',
    !bordered ? `ant-bgc` : '']">
    <a-row :gutter="12">
      <a-col :span="8">
        <ant-card :title="title" :extra="extra" :bordered="bordered">
          <p>Card content</p>
        </ant-card>
      </a-col>
      <a-col :span="8">
        <ant-card :title="title" :extra="extra" :bordered="bordered">
          <p>Card content</p>
        </ant-card>
      </a-col>
      <a-col :span="8">
        <ant-card :title="title" :extra="extra" :bordered="bordered">
          <p>Card content</p>
        </ant-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import AntCard from '@/card'
  import ARow from '@/row'
  import ACol from '@/col'
  export default {
    components: {
      AntCard,
      ARow,
      ACol
    },
    props: {
      bordered: {
        type: Boolean,
        default: true
      },
      title: String,
      extra: String
    }
  }
</script>

<style lang="less" scoped>
  .ant-card-base {
    padding: 30px;
    text-align: left;
  }

  .ant-bgc {
    background-color: rgba(236,236,236,1);
  }
</style>
