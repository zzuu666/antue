<template>
  <div>
    <ant-select v-model="value" :options="options" style="width: 200px;" placeholder="请选择"></ant-select>
    <p style="margin-top: 8px;">已选: {{ value || '无' }}</p>
  </div>
</template>

<script>
  import AntSelect from '@/select'
  export default {
    components: { AntSelect },
    data () {
      return {
        value: undefined,
        options: [
          { label: 'Jack', value: 'jack' },
          { label: 'Lucy', value: 'lucy' },
          { label: 'Tom', value: 'tom' }
        ]
      }
    }
  }
</script>
