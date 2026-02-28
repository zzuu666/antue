<template>
  <div>
    <ant-transfer
      :data-source="dataSource"
      :target-keys="targetKeys"
      :titles="['源列表', '目标列表']"
      :render="item => item.title"
      @change="handleChange"
    ></ant-transfer>
  </div>
</template>

<script>
  import AntTransfer from '@/transfer'

  export default {
    components: {
      AntTransfer
    },
    data () {
      const dataSource = []
      for (let i = 0; i < 10; i++) {
        dataSource.push({
          key: i.toString(),
          title: `内容${i + 1}`,
          description: `描述${i + 1}`
        })
      }
      return {
        dataSource,
        targetKeys: ['1', '3', '5']
      }
    },
    methods: {
      handleChange (targetKeys) {
        this.targetKeys = targetKeys
      }
    }
  }
</script>
