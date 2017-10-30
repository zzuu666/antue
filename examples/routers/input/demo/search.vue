<template>
  <div class="ant-input-base">
    <ant-search v-model="inputData" placeholder="Basic usage" @search="handleSearch"></ant-search>
  </div>
</template>

<script>
  import AntInput from '@/input'

  export default {
    data () {
      return {
        inputData: null
      }
    },
    methods: {
      handleSearch (value) {
        console.log(value)
      }
    },
    components: {
      AntSearch: AntInput.Search
    }
  }
</script>

<style lang="less" scoped>
  .ant-input-base {
    padding: 10px;
  }
</style>
