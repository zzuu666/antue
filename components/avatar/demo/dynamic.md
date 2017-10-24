---
order: 2
title:
  zh-CN: 自动调整字符大小
  en-US: Autoset Font Size
---

## zh-CN

对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

## en-US

For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar.

```` html
<template>
  <div>
    <Avatar :style="{ backgroundColor: color }" size="large">{{ user }}</Avatar>
    <atu-button size="small" :style="{ marginLeft: 16 + 'px' }" @click="changeUser">Change</atu-button>
  </div>
</template>
<script>
  import Avatar from '@/avatar'
  import AtuButton from '@/button'
  const UserList = ['U', 'Lucy', 'Tom', 'Edward']
  const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae']
  export default {
    data () {
      return {
        user: UserList[0],
        color: colorList[0]
      }
    },
    components: {
      Avatar,
      AtuButton
    },
    methods: {
      changeUser () {
        const index = UserList.indexOf(this.user)
        this.user  = index < UserList.length - 1 ? UserList[index + 1] : UserList[0]
        this.color = index < colorList.length -1 ? colorList[index + 1] : colorList[0]
      }
    }
  }
</script>
````
