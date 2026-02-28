<template>
  <div>
    <ant-date-picker v-model="value" placeholder="请选择日期"></ant-date-picker>
  </div>
</template>

<script>
  import AntDatePicker from '@/date-picker'

  export default {
    components: {
      AntDatePicker
    },
    data () {
      return {
        value: null
      }
    }
  }
</script>
