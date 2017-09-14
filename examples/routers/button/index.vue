<template>
  <container
    title="Button 按钮"
    profile="按钮用于开始一个即时操作。">
    <ant-button>你好</ant-button>
  </container>
</template>

<script>
import Container from '../../common/container'
import AntButton from '@/button'
export default {
  components: {
    AntButton,
    Container
  }
}
</script>

<style lang="less" scoped>

</style>

