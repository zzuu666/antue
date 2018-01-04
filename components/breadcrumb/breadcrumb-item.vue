<template>
    <span @click="handleClick">
      <a :href="href" :class="`${prefixCls}-link`" v-if="href !== undefined || to !== undefined">
        <slot></slot>
      </a>
      <span :class="`${prefixCls}-link`" v-else>
        <slot></slot>
      </span>
      <span :class="`${prefixCls}-separator`">
        <slot name="separator">
          {{separator}}
        </slot>
      </span>
    </span>
</template>

<script>
  export default {
    name: 'breadcrumbItem',
    props: {
      prefixCls: {
        type: String,
        default: 'ant-breadcrumb'
      },
      href: String,
      replace: {
        type: Boolean,
        default: false
      },
      to: [Object, String]
    },
    computed: {
      separator () {
        return this.$parent.separator
      }
    },
    methods: {
      handleClick (e) {
        if (this.to === undefined) {
          this.$emit('click', e)
        } else {
          e.preventDefault()
          this.replace ? this.$router.replace(this.to) : this.$router.push(this.to)
        }
      }
    }
  }
</script>
