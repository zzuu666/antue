<template>
  <div>
    <ant-page :total="600" :current="6"></ant-page>
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
