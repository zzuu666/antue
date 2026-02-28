<template>
  <div>
    <ant-input-number :min="1" :max="10" v-model="value"></ant-input-number>
  </div>
</template>

<script>
  import AntInputNumber from '@/input-number'

  export default {
    components: {
      AntInputNumber
    },
    data () {
      return {
        value: 3
      }
    }
  }
</script>
