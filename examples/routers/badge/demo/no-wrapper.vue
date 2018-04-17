<template>
  <div class="badge-container">
    <ant-badge :count="25" independent></ant-badge>
    <ant-badge :count="4" independent :badge-style="whiteBadge"></ant-badge>
    <ant-badge :count="109" independent :badge-style="greenBadge"></ant-badge>
  </div>
</template>
<script>
import AntBadge from '@/badge'
export default {
  components: {
    AntBadge
  },
  data () {
    return {
      greenBadge: {
        backgroundColor: '#52c41a'
      },
      whiteBadge: {
        backgroundColor: '#fff',
        color: '#999',
        boxShadow: '0 0 0 1px #d9d9d9 inset'
      }
    }
  }
}
</script>
