<template>
  <div>
    <ant-select v-model="value" :options="options" multiple style="width: 300px;" placeholder="请选择多个"></ant-select>
    <p style="margin-top: 8px;">已选: {{ value.join(', ') || '无' }}</p>
  </div>
</template>

<script>
  import AntSelect from '@/select'
  export default {
    components: { AntSelect },
    data () {
      return {
        value: [],
        options: [
          { label: 'Jack', value: 'jack' },
          { label: 'Lucy', value: 'lucy' },
          { label: 'Tom', value: 'tom' },
          { label: 'Oliver', value: 'oliver' }
        ]
      }
    }
  }
</script>
