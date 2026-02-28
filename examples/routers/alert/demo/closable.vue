<template>
  <div>
    <ant-alert type="warning" message="Warning Text Warning Text" closable @close="onClose"></ant-alert>
  </div>
</template>

<script>
  import AntAlert from '@/alert'
  export default {
    components: { AntAlert },
    methods: {
      onClose (e) {
        console.log('Alert closed', e)
      }
    }
  }
</script>
