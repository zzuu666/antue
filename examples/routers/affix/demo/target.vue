<template>
  <div class="scrollable-container" ref="container">
    <div class="background">
      <Affix :target="passRef">
        <atu-button type="primary">
          Fixed at the top of container
        </atu-button>
      </Affix>
    </div>
  </div>
</template>

<script>
  import Affix from '@/affix'
  import AtuButton from '@/button'
  export default {
    methods: {
      passRef () {
        return this.$refs.container
      }
    },
    components: {
      Affix,
      AtuButton
    }
  }
</script>

<style scoped>
  .scrollable-container {
    height: 100px;
    overflow-y: scroll;
  }

  .background {
    padding-top: 60px;
    height: 300px;
    background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
  }
</style>
