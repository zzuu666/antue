<template>
  <Anchor>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
    <Link href="#API" title="API">
    <Link href="#Anchor-Props" title="Anchor Props" />
    <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>
</template>

<script>
import Anchor from '@/anchor'

export default {
  name: 'base-demo',
  components: {
    Anchor,
    Link: Anchor.Link
  }
}
</script>
