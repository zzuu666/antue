<template>
  <div>
    <ant-progress type="circle" :percent="75" :format="percent => `${percent} Days`"/>
    <ant-progress type="circle" :percent="100" :format="() => 'Done'"/>
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

<style>
div.ant-progress-circle,
div.ant-progress-line {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
