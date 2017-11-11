<template>
  <li :class="`${prefixCls}`">
    <div :class="`${prefixCls}-quick-jumper`">
      {{locale.jump_to}}
      <atu-input type="text" v-model="pageText" @press-enter="handleJump"></atu-input>
    </div>
  </li>
</template>

<script>
  import locale from './locale/zh_CN'
  import AtuInput from '../input'

  export default {
    props: {
      prefixCls: {
        type: String,
        default: 'ant-pagination-options'
      }
    },
    data () {
      return {
        locale,
        pageText: ''
      }
    },
    methods: {
      handleJump (event) {
        (event.key === 'Enter' || event.charCode === 13) && this.$emit('jump-to', this.pageText)
        this.pageText = ''
      }
    },
    components: {
      AtuInput
    }
  }
</script>
