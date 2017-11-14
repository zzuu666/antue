<template>
  <div>
    <ant-page :total="500" :current="1">
      <a slot="prev">Previous</a>
      <a slot="next">Next</a>
    </ant-page>
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
