---
order: 0
title:
  zh-CN: 动画效果
  en-US: Transition
---

## zh-CN

可以通过改变 type 与 motion 来改变动画效果。

## en-US

The simplest usage.

```` html
<template>
  <div>
    <atu-row>
      <atu-col :span="6">
        <atu-input addonBefore="Type" v-model="type" />
      </atu-col>
      <atu-col :offset="4" :span="6">
        <atu-input addonBefore="Motion" v-model="motion" />
      </atu-col>
      <atu-col :span="8">
        <atu-button type="primary" @click="handleClick"> Click Me </atu-button>
      </atu-col>
    </atu-row>
    <atu-transtion :type="type" :motion="motion">
      <div class="big-text" v-show="isShow">
        <span v-text="type"></span> <span v-text="motion"></span>
      </div>
    </atu-transtion>
  </div>
</template>

<script>
import AtuTranstion from '@/transition'
import AtuButton from '@/button'
import AtuRow from '@/row'
import AtuCol from '@/col'
import AtuInput from '@/input'

export default {
  data () {
    return {
      isShow: true,
      motion: 'up',
      type: 'slide'
    }
  },
  components: {
    AtuTranstion,
    AtuButton,
    AtuRow,
    AtuCol,
    AtuInput
  },
  methods: {
    handleClick () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="less" scoped>
.big-text {
  margin-top: 16px;
  font-size: 36px;
  font-weight: 900;
  padding: 24px 48px;
  border-radius: 8px;
  background-color: #5e5e5e;
  color: #fff;
}
</style>
````
