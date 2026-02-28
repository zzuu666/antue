<template>
  <div>
    <ant-button type="primary" @click="showModal">打开对话框</ant-button>
    <ant-modal :visible="visible" title="基本对话框" @ok="handleOk" @cancel="handleCancel">
      <p>这是一段对话框内容。</p>
      <p>这是一段对话框内容。</p>
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
      handleOk () { this.visible = false },
      handleCancel () { this.visible = false }
    }
  }
</script>
