<template>
  <div>
    <ant-carousel>
      <div><div class="carousel-item" style="background: #364d79;">1</div></div>
      <div><div class="carousel-item" style="background: #6b8e23;">2</div></div>
      <div><div class="carousel-item" style="background: #c0392b;">3</div></div>
      <div><div class="carousel-item" style="background: #8e44ad;">4</div></div>
    </ant-carousel>
  </div>
</template>

<script>
  import AntCarousel from '@/carousel'

  export default {
    components: {
      AntCarousel
    }
  }
</script>

<style scoped>
  .carousel-item {
    height: 160px;
    color: #fff;
    line-height: 160px;
    text-align: center;
    font-size: 24px;
  }
</style>
