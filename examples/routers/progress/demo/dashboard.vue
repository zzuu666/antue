<template>
  <div>
    <ant-progress type="dashboard" :percent="75"/>
  </div>
</template>

<script>
  import AntProgress from '@/progress'

  export default {
    components: {
      AntProgress
    }
  }
</script>
