<template>
  <div class="" @click="click">
    <slot></slot>
  </div>
</template>

<script>
  const BackTop = {
    props: {
      item: {
        type: Function,
        default: () => window
      },
      time: {
        type: Number,
        default: 0
      },
      callBack: {
        type: Function,
        default: () => {}
      }
    },
    methods: {
      click: function (e) {
        let offsetHeight = this.getTop()
        const endHeight = this.item().offsetTop
        let nextHeight = offsetHeight
        if (this.time <= 0) {
          window.scrollTo(0, endHeight)
          this.callBack()
          return
        }
        function move () {
          setTimeout(() => {
            nextHeight = this.time === 0 ? endHeight : nextHeight - (offsetHeight - endHeight) / this.time
            window.scrollTo(0, nextHeight)
            if ((nextHeight - endHeight) * (offsetHeight - endHeight) <= 0) {
              this.callBack()
            } else {
              move.apply(this)
            }
          }, 10)
        }
        move.apply(this)
      },
      getTop: function () {
        let scrollTop = 0
        if (document.documentElement && document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop
        } else if (document.body) {
          scrollTop = document.body.scrollTop
        }
        return scrollTop
      }
    }
  }
  export default BackTop
</script>


<style scoped>
  .back-top{
    position: fixed;
    right: 40px;
    bottom: 40px;
  }
</style>
