<template>
  <div>
    <Avatar icon="user" />
    <Avatar>U</Avatar>
    <Avatar>USER</Avatar>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar :style="{ color: '#f56a00', backgroundColor: '#fde3cf' }">U</Avatar>
    <Avatar :style="{ backgroundColor: '#87d068' }" icon="user" />
  </div>
</template>
<script>
  import Avatar from '@/avatar'
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
