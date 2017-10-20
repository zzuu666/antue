<template>
  <div class="breadcrumb-container">
    <breadcrumb>
      <breadcrumb-item>
        <Icon type="home" />
      </breadcrumb-item>
      <breadcrumb-item>
        <Icon type="user" />
        <a href="">Application List</a>
      </breadcrumb-item>
      <breadcrumb-item>An Application</breadcrumb-item>
    </breadcrumb>
  </div>
</template>

<script>
  import Breadcrumb from '@/breadcrumb'
  import Icon from '@/icon'
  export default {
    components: {
      Breadcrumb,
      BreadcrumbItem: Breadcrumb.Item,
      Icon
    }
  }
</script>

<style>
  .breadcrumb-container {
    text-align: left;
  }
</style>
