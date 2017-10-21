<template>
    <span>
      <span :class="`${prefixCls}-link`">
        <a :href="href" v-if="href!==undefined">
          <slot></slot>
        </a>
        <slot v-if="href===undefined"></slot>
      </span>
      <span :class="`${prefixCls}-separator`">{{separator}}</span>
    </span>
</template>

<script>
  export default {
    name: 'breadcrumb-item',
    props: {
      prefixCls: {
        type: String,
        default: 'ant-breadcrumb'
      },
      href: String
    },
    computed: {
      separator () {
        return this.$parent.separator
      }
    }
  }
</script>

<style>

</style>
