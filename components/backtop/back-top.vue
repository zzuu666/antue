<template>
  <div :class="classes" @click="runTop">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Function,
        default: () => document.body
      },
      classStyle: {
        type: String,
        default: null
      },
      time: {
        type: Number,
        default: 10
      },
      callBack: {
        type: Function,
        default: () => {}
      }
    },
    computed: {
      classes () {
        return this.classStyle === null ? [
          'ant-btn-top'
        ] : [
          this.classStyle
        ]
      }
    },
    methods: {
      runTop (e) {
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
            nextHeight = this.time <= 0 ? endHeight : nextHeight - (offsetHeight - endHeight) / this.time
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
      getTop () {
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
</script>


