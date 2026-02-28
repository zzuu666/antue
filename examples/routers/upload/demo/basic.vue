<template>
  <div>
    <ant-upload action="//jsonplaceholder.typicode.com/posts/">
      <ant-button>
        <ant-icon type="upload"></ant-icon> 点击上传
      </ant-button>
    </ant-upload>
  </div>
</template>

<script>
  import AntUpload from '@/upload'
  import AntButton from '@/button'
  import AntIcon from '@/icon'

  export default {
    components: {
      AntUpload,
      AntButton,
      AntIcon
    }
  }
</script>
