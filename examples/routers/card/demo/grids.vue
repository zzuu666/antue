<template>
  <div class="ant-card-base ant-bgc">
    <a-row :gutter="12">
      <a-col :span="8">
        <ant-card title="Card Title" :bordered="false">
          Card content
        </ant-card>
      </a-col>
      <a-col :span="8">
        <ant-card title="Card Title" :bordered="false">
          Card content
        </ant-card>
      </a-col>
      <a-col :span="8">
        <ant-card title="Card Title" :bordered="false">
          Card content
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
