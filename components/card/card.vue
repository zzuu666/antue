<template>
  <div
    :class="[
      prefixCls,
      loading ? `${prefixCls}-loading` : ``
    ]"
    ref=card>
    <div :class="[`${prefixCls}-head`]">
      <div v-if="title" :class="[`${prefixCls}-head-title`]">
        {{title}}
      </div>
      <!--{extra ? <div class={`${prefixCls}-extra`}>{extra}</div> : null}-->
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
      prefixCls: 'ant-card',
      title: '123',
      bodyStyle: {}
    }
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
