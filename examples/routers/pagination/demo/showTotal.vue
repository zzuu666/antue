<template>
  <div>
    <ant-page :total="50"></ant-page>
  </div>
</template>

<script>
  import AntPage from '@/pagination'

  export default {
    data () {
      return {
        showTotal: () => {}
      }
    },
    components: {
      AntPage
    }
  }
</script>
