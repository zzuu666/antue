<template>
  <div :style="{width: '170px'}">
    <ant-progress :percent="30" :stroke-width="5"></ant-progress>
    <ant-progress :percent="50" :stroke-width="5" status="active"></ant-progress>
    <ant-progress :percent="70" :stroke-width="5" status="exception"></ant-progress>
    <ant-progress :percent="100" :stroke-width="5"></ant-progress>
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
