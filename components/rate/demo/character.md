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

```` html
<template>
  <div>
    <div>
      <ant-rate :allow-half="allowHalf">
        <template scope="props">
          <Icon type="heart"></Icon>
        </template>
      </ant-rate>
    </div>
    <div>
      <ant-rate :allow-half="allowHalf">
        <template scope="props">
          <span>A</span>
        </template>
      </ant-rate>
    </div>
    <div>
      <ant-rate :allow-half="allowHalf">
        <template scope="props">
          <span>好</span>
        </template>
      </ant-rate>
    </div>
  </div>
</template>
<script>
import Icon from '@/icon'
import AntRate from '@/rate'
export default {
  components: {
    AntRate,
    Icon
  },
  data () {
    return {
      allowHalf: true
    }
  }
}
</script>
````
