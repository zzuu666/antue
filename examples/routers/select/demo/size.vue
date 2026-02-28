<template>
  <div>
    <ant-select :options="options" size="large" style="width: 200px; margin-bottom: 10px;" placeholder="大号"></ant-select>
    <br>
    <ant-select :options="options" style="width: 200px; margin-bottom: 10px;" placeholder="默认"></ant-select>
    <br>
    <ant-select :options="options" size="small" style="width: 200px;" placeholder="小号"></ant-select>
  </div>
</template>

<script>
  import AntSelect from '@/select'
  export default {
    components: { AntSelect },
    data () {
      return {
        options: [
          { label: 'Jack', value: 'jack' },
          { label: 'Lucy', value: 'lucy' }
        ]
      }
    }
  }
</script>
