---
order: 1
title:
  zh-CN: 固定状态改变的回调
  en-US: Callback
---

## zh-CN

可以获得是否固定的状态。

## en-US

Callback with affixed state.

```` html
<template>
  <div>
    <Affix :offsetTop="120" @on-change="handleStatusChange">
      <atu-button>120px to affix top</atu-button>
    </Affix>
  </div>
</template>

<script>
  import Affix from '@/affix'
  import AtuButton from '@/button'

  export default {
    methods: {
      handleStatusChange (affixed) { console.log(affixed) }
    },
    components: {
      Affix,
      AtuButton
    }
  }
</script>
````
