<template>
  <div v-if="visible || animVisible" :class="wrapClasses">
    <transition name="ant-drawer-mask">
      <div v-if="mask" v-show="visible" :class="`${prefixCls}-mask`" @click="handleMaskClick"></div>
    </transition>
    <transition :name="transitionName" @after-leave="handleAfterLeave">
      <div v-show="visible" :class="drawerClasses" :style="drawerStyle">
        <div :class="`${prefixCls}-content`">
          <div v-if="title" :class="`${prefixCls}-header`">
            <div :class="`${prefixCls}-title`">{{ title }}</div>
          </div>
          <button v-if="closable" :class="`${prefixCls}-close`" @click="handleClose">
            <icon type="cross"></icon>
          </button>
          <div :class="`${prefixCls}-body`">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Icon from '../icon'
  import { oneOf } from '../_util/proptype'

  export default {
    name: 'atu-drawer',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      placement: {
        type: String,
        default: 'right',
        validator (value) {
          return oneOf(value, ['left', 'right', 'top', 'bottom'])
        }
      },
      closable: {
        type: Boolean,
        default: true
      },
      mask: {
        type: Boolean,
        default: true
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      width: {
        type: [String, Number],
        default: 256
      },
      height: {
        type: [String, Number],
        default: 256
      },
      prefixCls: {
        type: String,
        default: 'ant-drawer'
      }
    },
    data () {
      return {
        animVisible: false
      }
    },
    computed: {
      wrapClasses () {
        return [
          `${this.prefixCls}-wrap`,
          `${this.prefixCls}-${this.placement}`
        ]
      },
      drawerClasses () {
        return [
          this.prefixCls,
          `${this.prefixCls}-${this.placement}`
        ]
      },
      drawerStyle () {
        const style = {}
        if (this.placement === 'left' || this.placement === 'right') {
          style.width = typeof this.width === 'number' ? this.width + 'px' : this.width
        } else {
          style.height = typeof this.height === 'number' ? this.height + 'px' : this.height
        }
        return style
      },
      transitionName () {
        const map = {
          left: 'ant-drawer-slide-left',
          right: 'ant-drawer-slide-right',
          top: 'ant-drawer-slide-top',
          bottom: 'ant-drawer-slide-bottom'
        }
        return map[this.placement]
      }
    },
    watch: {
      visible (val) {
        if (val) {
          this.animVisible = true
        }
      }
    },
    methods: {
      handleClose () {
        this.$emit('close')
      },
      handleMaskClick () {
        if (this.maskClosable) {
          this.handleClose()
        }
      },
      handleAfterLeave () {
        this.animVisible = false
      }
    },
    components: {
      Icon
    }
  }
</script>
