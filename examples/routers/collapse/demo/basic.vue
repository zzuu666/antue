<template>
  <div>
    <ant-collapse>
      <ant-collapse-panel header="This is panel header 1" key="1">
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness.</p>
      </ant-collapse-panel>
      <ant-collapse-panel header="This is panel header 2" key="2">
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness.</p>
      </ant-collapse-panel>
      <ant-collapse-panel header="This is panel header 3" key="3">
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness.</p>
      </ant-collapse-panel>
    </ant-collapse>
  </div>
</template>

<script>
  import AntCollapse from '@/collapse'

  const AntCollapsePanel = AntCollapse.Panel

  export default {
    components: {
      AntCollapse,
      AntCollapsePanel
    }
  }
</script>
