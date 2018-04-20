<template>
  <div>
    <ant-progress :percent="percent"/>
    <button-group>
      <ant-button @click="decline" icon="minus"></ant-button>
      <ant-button @click="increase" icon="plus"></ant-button>
    </button-group>
  </div>
</template>

<script>
  import AntProgress from '@/progress'
  import AntButton from '@/button'
  const ButtonGroup = AntButton.Group

  export default {
    components: {
      AntProgress,
      AntButton,
      ButtonGroup
    },
    data () {
      return {
        percent: 0
      }
    },
    methods: {
      increase () {
        let percent = this.percent + 10
        if (percent > 100) {
          percent = 100
        }
        this.percent = percent
      },
      decline () {
        let percent = this.percent - 10
        if (percent < 0) {
          percent = 0
        }
        this.percent = percent
      }
    }
  }
</script>
