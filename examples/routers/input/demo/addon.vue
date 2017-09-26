<template>
  <div class="ant-input-addon">
    <ant-input v-model="inputData" placeholder="Enter your username" addonBefore="Http://" addonAfter=".com"></ant-input>
    <ant-input style="margin-top: 10px" v-model="inputData" placeholder="Enter your username">
      <ant-icon slot="addonAfter" type="setting"></ant-icon>
    </ant-input>
  </div>
</template>

<script>
  import AntInput from '@/input'
  import AntIcon from '@/icon'

  export default {
    data () {
      return {
        inputData: ''
      }
    },
    components: {
      AntInput,
      AntIcon
    }
  }
</script>

<style lang="less" scoped>
  .ant-input-addon {
    padding: 10px;
  }
</style>
