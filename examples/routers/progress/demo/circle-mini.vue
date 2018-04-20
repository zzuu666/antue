<template>
  <div>
    <ant-progress type="circle" :percent="30" :width="80" />
    <ant-progress type="circle" :percent="70" :width="80" status="exception" />
    <ant-progress type="circle" :percent="100" :width="80" />
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

