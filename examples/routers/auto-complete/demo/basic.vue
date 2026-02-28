<template>
  <div>
    <ant-auto-complete
      :data-source="dataSource"
      placeholder="请输入"
      @search="handleSearch"
    ></ant-auto-complete>
  </div>
</template>

<script>
  import AntAutoComplete from '@/auto-complete'

  export default {
    components: {
      AntAutoComplete
    },
    data () {
      return {
        dataSource: []
      }
    },
    methods: {
      handleSearch (value) {
        this.dataSource = value ? [
          value,
          value + value,
          value + value + value
        ] : []
      }
    }
  }
</script>
