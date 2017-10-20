<template>
  <div class="breadcrumb-container">
    <breadcrumb>
      <breadcrumb-item>Home</breadcrumb-item>
      <breadcrumb-item><a href="">Application Center</a></breadcrumb-item>
      <breadcrumb-item><a href="">Application List</a></breadcrumb-item>
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
