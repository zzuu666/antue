<template>
  <div
    :class="classes"
    ref=card>
    <div :class="`${prefixCls}-head`" v-if="!!title">
      <div :class="`${prefixCls}-head-title`">
        <slot name="title">
          {{title}}
        </slot>
      </div>
      <div v-if="extra" :class="[`${prefixCls}-extra`]">
        <slot name="extra">
          {{extra}}
        </slot>
      </div>
    </div>
    <div :class="`${prefixCls}-body`" :style="bodyStyle">
      <div v-if="loading" :class="`${prefixCls}-loading-content`">
        <p :class="`${prefixCls}-loading-block`" :style="{width:'94%'}"></p>
        <p>
          <span :class="`${prefixCls}-loading-block`" :style="{width: '28%'}"></span>
          <span :class="`${prefixCls}-loading-block`" :style="{width: '62%'}"></span>
        </p>
        <p>
          <span :class="`${prefixCls}-loading-block`" :style="{width: '22%'}"></span>
          <span :class="`${prefixCls}-loading-block`" :style="{width: '66%'}"></span>
        </p>
        <p>
          <span :class="`${prefixCls}-loading-block`" :style="{width: '56%'}"></span>
          <span :class="`${prefixCls}-loading-block`" :style="{width: '39%'}"></span>
        </p>
        <p>
          <span :class="`${prefixCls}-loading-block`" :style="{width: '21%'}"></span>
          <span :class="`${prefixCls}-loading-block`" :style="{width: '15%'}"></span>
          <span :class="`${prefixCls}-loading-block`" :style="{width: '40%'}"></span>
        </p>
      </div>
      <slot v-if="!loading"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        widerPadding: false,
        updateWiderPaddingCalled: true
      }
    },
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      prefixCls: {
        type: String,
        default: 'ant-card'
      },
      title: String,
      extra: String,
      bordered: {
        type: Boolean,
        default: true
      },
      bodyStyle: Object,
      noHovering: Boolean
    },
    computed: {
      classes () {
        return [
          this.prefixCls,
          this.loading ? `${this.prefixCls}-loading` : ``,
          this.bordered ? `${this.prefixCls}-bordered` : '',
          this.noHovering ? `${this.prefixCls}-no-hovering` : '',
          this.widerPadding ? `${this.prefixCls}-wider-padding` : '',
          this.updateWiderPaddingCalled ? `${this.prefixCls}-padding-transition` : ''
        ]
      }
    }
  }
</script>

<style>

</style>
