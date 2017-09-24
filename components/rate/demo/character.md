---
order: 4
title:
  zh-CN: 其他字符
  en-US: Other Character
---

## zh-CN

可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。

## en-US

Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.

````html
<template>
  <div>
    <div>
      <rate :allow-half="allowHalf">
        <template scope="character">
          <Icon type="heart"></Icon>
        </template>
      </rate>
    </div>
    <div>
      <rate :allow-half="allowHalf">
        <template scope="character">
          <span>A</span>
        </template>
      </rate>
    </div>
    <div>
      <rate :allow-half="allowHalf">
        <template scope="character">
          <span>好</span>
        </template>
      </rate>
    </div>
  </div>
</template>
<script>
import AntRate from '@/rate'
export default {
  components: {
    AntRate
  },
  data () {
    return {
      allowHalf: true
    }
  }
}
</script>
````
