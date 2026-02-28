<template>
  <div>
    <ant-slider :default-value="30"></ant-slider>
    <ant-slider range :default-value="[20, 50]"></ant-slider>
  </div>
</template>

<script>
  import AntSlider from '@/slider'

  export default {
    components: {
      AntSlider
    }
  }
</script>
