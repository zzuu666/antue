<template>
  <div class="ant-input-size">
    <a-row :gutter="12">
      <a-col :span="12">
        <ant-input v-model="inputData1" placeholder="Large size" size="large"></ant-input>
      </a-col>
      <a-col :span="12">
        <ant-input v-model="inputData2" placeholder="Default size" size="default"></ant-input>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <ant-input v-model="inputData3" placeholder="Small size" size="small"></ant-input>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import AntInput from '@/input'
  import ARow from '@/row'
  import ACol from '@/col'

  export default {
    data () {
      return {
        inputData1: '',
        inputData2: '',
        inputData3: ''
      }
    },
    components: {
      ARow,
      ACol,
      AntInput
    }
  }
</script>

<style lang="less" scoped>
  .ant-input-size {
    padding: 10px;

    .ant-row {
      margin-top: 10px;
    }
  }
</style>
