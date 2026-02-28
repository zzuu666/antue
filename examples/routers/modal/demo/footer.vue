<template>
  <div>
    <ant-button @click="showModal">无页脚对话框</ant-button>
    <ant-modal :visible="visible" title="无页脚" :footer="false" @cancel="handleCancel">
      <p>这个对话框没有页脚按钮。</p>
    </ant-modal>
  </div>
</template>

<script>
  import AntButton from '@/button'
  import AntModal from '@/modal'
  export default {
    components: { AntButton, AntModal },
    data () {
      return { visible: false }
    },
    methods: {
      showModal () { this.visible = true },
      handleCancel () { this.visible = false }
    }
  }
</script>
