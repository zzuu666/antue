<template>
  <div class="ant-input-base">
    <ant-input v-model="inputData" placeholder="Basic usage"></ant-input>
  </div>
</template>

<script>
  import AntInput from '@/input'

  export default {
    data () {
      return {
        inputData: ''
      }
    },
    components: {
      AntInput
    }
  }
</script>

<style lang="less" scoped>
  .ant-input-base {
    padding: 10px;
  }
</style>
