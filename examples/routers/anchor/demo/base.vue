<template>
  <Affix>
    <Anchor>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
      <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
      </Link>
    </Anchor>
  </Affix>
</template>

<script>
import Anchor from '@/anchor'
import Affix from '@/affix'

export default {
  name: 'base-demo',
  components: {
    Anchor,
    Link: Anchor.Link,
    Affix
  }
}
</script>
