<template>
  <div>
    <div class="gap-top">
      <atu-tag
        v-for="item in color"
        v-text="item"
        :key="item"
        :color="item"></atu-tag>
    </div>
    <div class="gap-top">
      <atu-tag
        v-for="item in custom"
        v-text="item"
        :key="item"
        :color="item"></atu-tag>
    </div>
  </div>
</template>

<script>
import AtuTag from '@/tag'
export default {
  components: {
    AtuTag
  },
  data () {
    return {
      color: [
        'pink',
        'red',
        'orange',
        'green',
        'cyan',
        'blue',
        'purple'
      ],
      custom: [
        '#f50',
        '#2db7f5',
        '#87d068',
        '#108ee9'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.gap-top {
  margin-top: 16px;
}
</style>

