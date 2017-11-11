<template>
  <div class="ant-input-base">
    <ant-textarea :autosize="{maxRows: 6}" v-model="inputData" placeholder="Basic usage"></ant-textarea>
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
      AntTextarea: AntInput.TextArea
    }
  }
</script>

<style lang="less" scoped>
  .ant-input-base {
    padding: 10px;
  }
</style>
