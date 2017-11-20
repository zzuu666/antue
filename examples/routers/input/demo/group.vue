<template>
  <div class="ant-input-base">
    <ant-input-group>
      <a-col :span="4">
        <ant-input value="0571"></ant-input>
      </a-col>
      <a-col :span="8">
        <ant-input value="26888888"></ant-input>
      </a-col>
    </ant-input-group>
    <ant-input-group compact>
      <ant-input style="width: 20%" value="0571"></ant-input>
      <ant-input style="width: 30%" value="26888888"></ant-input>
    </ant-input-group>
  </div>
</template>

<script>
  import AntInput from '@/input'
  import ACol from '@/col'
  export default {
    data () {
      return {
        inputData: ''
      }
    },
    components: {
      AntInput,
      AntInputGroup: AntInput.Group,
      ACol
    }
  }
</script>

<style lang="less" scoped>
  .ant-input-base {
    padding: 10px;
    text-align: left;

    .ant-input-group {
      margin-top: 10px;
    }
  }
</style>
