<template>
  <div>
    <ant-button type="primary" shape="circle" icon="search"></ant-button>
    <ant-button type="primary" shape="circle-outline" icon="search"></ant-button>
    <ant-button type="primary" icon="search"><span>Search</span></ant-button>
    <ant-button type="primary" icon="search">Search</ant-button>
  </div>
</template>

<script>
import AntButton from '@/button'
export default {
  components: {
    AntButton
  },
  mounted () {
    console.log(this)
  }
}
</script>
