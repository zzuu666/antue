---
order: 10
title:
  zh-CN: 上一步和下一步
  en-US: Prev and next
---

## zh-CN

修改上一步和下一步为文字链接。

## en-US

Use text link for prev and next button.

```` html
<template>
  <div>
    <ant-page :total="500" :current="1">
      <a slot="prev">Previous</a>
      <a slot="next">Next</a>
    </ant-page>
  </div>
</template>

<script>
  import AntPage from '@/pagination'
  export default {
    components: {
      AntPage
    }
  }
</script>
````
