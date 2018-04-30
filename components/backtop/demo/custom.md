---
order: 1
title:
  zh-CN: 自定义样式
  en-US: Custom style
---

## zh-CN

可以自定义回到顶部按钮的样式，限制宽高：`40px * 40px`。

## en-US

You can customize the style of the button, just note the size limit: no more than `40px * 40px`.


```` html
<template>
  <div>
    Scroll down to see the bottom-right <strong style="color: '#1088e9'"> blue </strong> button.
    <back-top style="bottom: 100px">
      <div style="height: 40px;width: 40px;line-height: 40px;border-radius: 4px;background-color: #1088e9;color: #fff;text-align: center;font-size: 20px;">UP</div>
    </back-top>
  </div>
</template>

<script>
  import BackTop from '@/backtop'

  export default {
    components: {
      BackTop
    }
  }
</script>
````

````css
#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}
#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
````
