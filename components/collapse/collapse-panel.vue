<template>
  <div :class="classes">
    <div
      :class="`${prefixCls}-header`"
      role="tab"
      @click="handleClick"
    >
      <icon v-if="showArrow" type="right" :class="`${prefixCls}-arrow`"></icon>
      <span>{{ header }}</span>
    </div>
    <transition name="ant-collapse-content">
      <div v-show="isActive" :class="`${prefixCls}-content ${prefixCls}-content-active`">
        <div :class="`${prefixCls}-content-box`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Icon from '../icon'

  export default {
    name: 'atu-collapse-panel',
    props: {
      header: {
        type: String,
        required: true
      },
      panelKey: {
        type: [String, Number],
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      showArrow: {
        type: Boolean,
        default: true
      },
      prefixCls: {
        type: String,
        default: 'ant-collapse-item'
      }
    },
    inject: ['collapse'],
    computed: {
      isActive () {
        return this.collapse.isActive(this.panelKey)
      },
      classes () {
        return [
          this.prefixCls,
          {
            [`${this.prefixCls}-active`]: this.isActive,
            [`${this.prefixCls}-disabled`]: this.disabled
          }
        ]
      }
    },
    methods: {
      handleClick () {
        if (!this.disabled) {
          this.collapse.handlePanelClick(this.panelKey)
        }
      }
    },
    components: {
      Icon
    }
  }
</script>
