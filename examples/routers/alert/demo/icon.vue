<template>
  <div>
    <ant-alert type="success" message="Success Tips" showIcon></ant-alert>
    <br>
    <ant-alert type="info" message="Informational Notes" showIcon></ant-alert>
    <br>
    <ant-alert type="warning" message="Warning" showIcon></ant-alert>
    <br>
    <ant-alert type="error" message="Error" showIcon></ant-alert>
  </div>
</template>

<script>
  import AntAlert from '@/alert'
  export default {
    components: { AntAlert }
  }
</script>
