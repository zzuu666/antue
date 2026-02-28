<template>
  <div>
    <ant-button type="primary" @click="showDrawer">打开抽屉</ant-button>
    <ant-drawer
      title="基本抽屉"
      :visible="visible"
      @close="onClose"
    >
      <p>这是一些内容...</p>
      <p>这是一些内容...</p>
      <p>这是一些内容...</p>
    </ant-drawer>
  </div>
</template>

<script>
  import AntDrawer from '@/drawer'
  import AntButton from '@/button'

  export default {
    components: {
      AntDrawer,
      AntButton
    },
    data () {
      return {
        visible: false
      }
    },
    methods: {
      showDrawer () {
        this.visible = true
      },
      onClose () {
        this.visible = false
      }
    }
  }
</script>
