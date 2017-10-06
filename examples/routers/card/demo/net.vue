<template>
  <div class="ant-card-net">
    <Card title="Card Title" noHovering>
      <card-grid :style="gridStyle">Content</card-grid>
      <card-grid :style="gridStyle">Content</card-grid>
      <card-grid :style="gridStyle">Content</card-grid>
      <card-grid :style="gridStyle">Content</card-grid>
      <card-grid :style="gridStyle">Content</card-grid>
      <card-grid :style="gridStyle">Content</card-grid>
      <card-grid :style="gridStyle">Content</card-grid>
    </Card>
  </div>
</template>

<script>
  import Card from '@/card'
  export default {
    data () {
      return {
        gridStyle: {
          width: '25%',
          textAlign: 'center'
        }
      }
    },
    components: {
      Card,
      CardGrid: Card.grid
    }
  }
</script>

<style scoped>
  .ant-card-net {
    padding: 20px;
    text-align: left;
  }
</style>
