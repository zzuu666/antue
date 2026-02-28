<template>
  <div>
    <ant-alert type="success" message="Success Tips"></ant-alert>
    <br>
    <ant-alert type="info" message="Informational Notes"></ant-alert>
    <br>
    <ant-alert type="warning" message="Warning"></ant-alert>
    <br>
    <ant-alert type="error" message="Error"></ant-alert>
  </div>
</template>

<script>
  import AntAlert from '@/alert'
  export default {
    components: { AntAlert }
  }
</script>
