---
order: 1
title:
  zh-CN: 不可用
  en-US: disabled
---

## zh-CN

Radio 不可用。

## en-US

Radio unavailable.

```` html
<template>
  <div>
    <radio :disabled="disabled" :checked="true">Disabled</radio>
    <br>
    <radio :disabled="disabled">Disabled</radio>
    <div style="margin-top: 20px">
      <atu-button type="primary" @click="handleClick">Toggle Disabled</atu-button>
    </div>
  </div>
</template>

<script>
  import Radio from '@/radio'
  import AtuButton from '@/button'
  export default {
    data () {
      return {
        disabled: true
      }
    },
    methods: {
      handleClick () {
        this.disabled = !this.disabled
      }
    },
    components: {
      Radio,
      AtuButton
    }
  }
</script>
````
