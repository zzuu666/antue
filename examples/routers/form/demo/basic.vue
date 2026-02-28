<template>
  <div>
    <ant-form>
      <ant-form-item label="用户名">
        <ant-input placeholder="请输入用户名"></ant-input>
      </ant-form-item>
      <ant-form-item label="密码">
        <ant-input type="password" placeholder="请输入密码"></ant-input>
      </ant-form-item>
    </ant-form>
  </div>
</template>

<script>
  import AntForm from '@/form'
  import AntInput from '@/input'

  const AntFormItem = AntForm.Item

  export default {
    components: {
      AntForm,
      AntFormItem,
      AntInput
    }
  }
</script>
