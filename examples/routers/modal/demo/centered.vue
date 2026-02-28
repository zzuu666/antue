<template>
  <div>
    <ant-button type="primary" @click="showModal">居中显示</ant-button>
    <ant-modal :visible="visible" title="居中对话框" centered @ok="handleOk" @cancel="handleCancel">
      <p>这个对话框垂直居中展示。</p>
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
