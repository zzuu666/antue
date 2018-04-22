---
order: 2
title:
  zh-CN: 滚动容器
  en-US: Container to scroll.
---

## zh-CN

用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。

## en-US

Set a `target` for 'Affix', which is listen to scroll event of target element (default is `window`).

```` html
<template>
  <div class="scrollable-container" ref="container">
    <div class="background">
      <Affix :target="passRef">
        <atu-button type="primary">
          Fixed at the top of container
        </atu-button>
      </Affix>
    </div>
  </div>
</template>

<script>
  import Affix from '@/affix'
  import AtuButton from '@/button'
  export default {
    methods: {
      passRef () {
        return this.$refs.container
      }
    },
    components: {
      Affix,
      AtuButton
    }
  }
</script>
````

<style>
#components-affix-demo-target .scrollable-container {
  height: 100px;
  overflow-y: scroll;
}
#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}
</style>
