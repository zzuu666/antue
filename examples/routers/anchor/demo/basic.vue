<template>
  <div>
    <ant-anchor>
      <ant-anchor-link href="#components-anchor-demo-basic" title="基本"></ant-anchor-link>
      <ant-anchor-link href="#components-anchor-demo-static" title="静态位置"></ant-anchor-link>
      <ant-anchor-link href="#api" title="API">
        <ant-anchor-link href="#anchor-props" title="Anchor Props"></ant-anchor-link>
        <ant-anchor-link href="#link-props" title="Link Props"></ant-anchor-link>
      </ant-anchor-link>
    </ant-anchor>
  </div>
</template>

<script>
  import AntAnchor from '@/anchor'

  const AntAnchorLink = AntAnchor.Link

  export default {
    components: {
      AntAnchor,
      AntAnchorLink
    }
  }
</script>
