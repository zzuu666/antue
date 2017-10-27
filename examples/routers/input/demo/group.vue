<template>
  <div class="ant-input-base">
    <ant-input-group compact>
      <ant-input style="width: 20%"></ant-input><ant-input style="width: 30%"></ant-input>
    </ant-input-group>
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
      AntInput,
      AntInputGroup: AntInput.Group
    }
  }
</script>

<style lang="less" scoped>
  .ant-input-base {
    padding: 10px;
  }
</style>
