<template>
  <div>
    <ant-button type="primary" loading>Primary</ant-button>
    <ant-button type="primary" :loading="btn1" @click="handleBtn1">Click Me</ant-button>
    <ant-button type="primary" icon="poweroff" :loading="btn2" @click="handleBtn2">Delay 3s</ant-button>
  </div>
</template>

<script>
import AntButton from '@/button'
export default {
  components: {
    AntButton
  },
  data () {
    return {
      btn1: false,
      btn2: false
    }
  },
  methods: {
    handleBtn1 () {
      this.btn1 = true
    },
    handleBtn2 () {
      this.btn2 = {
        delay: 3000
      }
    }
  }
}
</script>
