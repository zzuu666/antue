<template>
  <div>
    <ant-page :total="600" :current="6" :page-size="20"></ant-page>
  </div>
</template>

<script>
  import AntPage from '@/pagination'

  export default {
    components: {
      AntPage
    }
  }
</script>

<style>

</style>
