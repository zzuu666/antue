<template>
  <div>
    <ant-input v-model="data1" @onKeyDown="handleKeyDown" :disabled="false" id="123" placeholder="Basic usage" size="large">Primary</ant-input>
  </div>
</template>

<script>
  import AntInput from '@/input'

  export default {
    data () {
      return {
        data1: 1
      }
    },
    methods: {
      handleKeyDown (e) {
        // console.log(e)
      }
    },
    components: {
      AntInput,
      AntSearch: AntInput.Search
    }
  }
</script>
