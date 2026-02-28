<template>
  <div>
    <ant-select v-model="value" :options="options" showSearch style="width: 200px;" placeholder="搜索选择"></ant-select>
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
          { label: 'Tom', value: 'tom' },
          { label: 'Oliver', value: 'oliver' }
        ]
      }
    }
  }
</script>
