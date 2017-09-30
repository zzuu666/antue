---
order: 1
title:
  zh-CN: 类型
  en-US: Type
---

## zh-CN

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

## en-US

Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.

```` html
<template>
  <div id="#components-avatar-demo-type">
    <Avatar icon="user" />
    <Avatar>U</Avatar>
    <Avatar>USER</Avatar>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar :style="{ color: '#f56a00', backgroundColor: '#fde3cf' }">U</Avatar>
    <Avatar :style="{ backgroundColor: '#87d068' }" icon="user" />
  </div>
</template>
<script>
import { Avatar } from '@';
export default {
  components: {
    Avatar
  }
}
</script>
<style>
#components-avatar-demo-type .ant-avatar {
  margin-top: 16px;
  margin-right: 16px;
}
</style>
````
