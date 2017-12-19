<template>
  <div>
    <ant-checkbox disabled>Checkbox</ant-checkbox>
    <ant-checkbox v-model="checked" disabled>Checkbox</ant-checkbox>
  </div>
</template>

<script>
  import AntCheckbox from '@/checkbox'

  export default {
    components: { AntCheckbox },
    data: () => ({
      checked: true
    })
  }
</script>
