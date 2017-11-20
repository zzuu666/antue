<template>
  <div>
    <ant-page :total="500" :current="page" controlled @change-page="handleChange"></ant-page>
  </div>
</template>

<script>
  import AntPage from '@/pagination'

  export default {
    data () {
      return {
        page: 1
      }
    },
    methods: {
      handleChange (i) {
        this.page = i
      }
    },
    components: {
      AntPage
    }
  }
</script>

<style>

</style>
