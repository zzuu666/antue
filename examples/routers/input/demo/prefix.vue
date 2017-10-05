<template>
  <div class="ant-input-prefix">
    <ant-input v-model="inputData" placeholder="Enter your username">
      <ant-icon slot="prefix" type="user"></ant-icon>
      <!--<ant-icon slot="suffix" type="search"></ant-icon>-->
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
  .ant-input-prefix {
    padding: 10px;
  }
</style>
