<template>
  <div class="breadcrumb-container">
    <breadcrumb>
      <breadcrumb-item><a href="">Application Center</a></breadcrumb-item>
      <breadcrumb-item><a href="">Application Center</a></breadcrumb-item>
      <breadcrumb-item><a href="">Application Center</a></breadcrumb-item>
    </breadcrumb>
  </div>
</template>

<script>
  import Breadcrumb from '@/breadcrumb'
  export default {
    components: {
      Breadcrumb,
      BreadcrumbItem: Breadcrumb.Item
    }
  }
</script>

<style>
.breadcrumb-container {
  text-align: left;
}
</style>
