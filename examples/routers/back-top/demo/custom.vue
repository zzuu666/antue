<template>
  <div class="custom-container">
    Scroll down to see the bottom-right blue button.
    <back-top>
      <div class="ant-back-top-inner">UP</div>
    </back-top>
  </div>
</template>

<script>
  import BackTop from '@/backtop'

  export default {
    components: {
      BackTop
    }
  }
</script>

<style>
  .custom-container .ant-back-top {
    bottom: 100px;
  }

  .ant-back-top-inner {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #1088e9;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
</style>
