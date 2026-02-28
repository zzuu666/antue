<template>
  <div v-if="visible || animVisible">
    <transition name="ant-modal-mask">
      <div v-show="visible" :class="`${prefixCls}-mask`" v-if="mask"></div>
    </transition>
    <div :class="`${prefixCls}-wrap`" @click.self="handleMaskClick">
      <transition name="ant-modal" @after-leave="handleAfterLeave">
        <div v-show="visible" :class="modalClasses" :style="modalStyle" ref="modal">
          <div :class="`${prefixCls}-content`">
            <button v-if="closable" :class="`${prefixCls}-close`" @click="handleClose">
              <span :class="`${prefixCls}-close-x`">
                <icon type="cross"></icon>
              </span>
            </button>
            <div v-if="hasHeader" :class="`${prefixCls}-header`">
              <div :class="`${prefixCls}-title`">
                <slot name="title">{{ title }}</slot>
              </div>
            </div>
            <div :class="`${prefixCls}-body`">
              <slot></slot>
            </div>
            <div v-if="hasFooter" :class="`${prefixCls}-footer`">
              <slot name="footer">
                <button :class="cancelBtnClasses" @click="handleCancel">{{ cancelText }}</button>
                <button :class="okBtnClasses" @click="handleOk">{{ okText }}</button>
              </slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import Icon from '../icon'
  import { oneOf } from '../_util/proptype'

  export default {
    name: 'atu-modal',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
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
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      okType: {
        type: String,
        default: 'primary',
        validator (value) {
          return oneOf(value, ['primary', 'dashed', 'danger', 'default'])
        }
      },
      width: {
        type: [String, Number],
        default: 520
      },
      centered: {
        type: Boolean,
        default: false
      },
      footer: {
        type: [Boolean],
        default: undefined
      },
      prefixCls: {
        type: String,
        default: 'ant-modal'
      }
    },
    data () {
      return {
        animVisible: false
      }
    },
    computed: {
      modalClasses () {
        return [
          this.prefixCls,
          {
            [`${this.prefixCls}-centered`]: this.centered
          }
        ]
      },
      modalStyle () {
        const w = typeof this.width === 'number' ? this.width + 'px' : this.width
        const style = { width: w }
        if (this.centered) {
          style.top = 0
        }
        return style
      },
      hasHeader () {
        return this.title || this.$slots.title
      },
      hasFooter () {
        if (this.footer === false) return false
        return true
      },
      cancelBtnClasses () {
        return ['ant-btn']
      },
      okBtnClasses () {
        return ['ant-btn', `ant-btn-${this.okType}`]
      }
    },
    watch: {
      visible (val) {
        if (val) {
          this.animVisible = true
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = ''
        }
      }
    },
    methods: {
      handleClose () {
        this.$emit('cancel')
        this.$emit('update:visible', false)
      },
      handleCancel () {
        this.$emit('cancel')
        this.$emit('update:visible', false)
      },
      handleOk () {
        this.$emit('ok')
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
