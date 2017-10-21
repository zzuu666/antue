<template>
  <div class="breadcrumb-container">
    <breadcrumb separator=">">
      <breadcrumb-item>Home</breadcrumb-item>
      <breadcrumb-item href="">Application Center</breadcrumb-item>
      <breadcrumb-item href="">Application List</breadcrumb-item>
      <breadcrumb-item>An Application</breadcrumb-item>
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
