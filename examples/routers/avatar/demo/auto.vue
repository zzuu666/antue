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
        this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0]
        this.color = index < colorList.length - 1 ? colorList[index + 1] : colorList[0]
      }
    }
  }
</script>
