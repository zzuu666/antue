---
order: 4
title:
  zh-CN: 加载中状态
  en-US: Loading
---

## zh-CN

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

## en-US

A loading indicator can be added to a button by setting the `loading` property on the `Button`.

```` html
<template>
  <div>
    <atu-button type="primary" loading>Primary</atu-button>
    <atu-button type="primary" :loading="btn1" @click="handleBtn1">Click Me</atu-button>
    <atu-button type="primary" icon="poweroff" :loading="btn2" @click="handleBtn2">Delay 3s</atu-button>
    <atu-button type="primary" shape="circle" loading></atu-button>
  </div>
</template>

<script>
import AtuButton from '@/button'
export default {
  components: {
    AtuButton
  },
  data () {
    return {
      btn1: false,
      btn2: false
    }
  },
  methods: {
    handleBtn1 () {
      this.btn1 = true
    },
    handleBtn2 () {
      this.btn2 = {
        delay: 3000
      }
    }
  }
}
</script>
````
