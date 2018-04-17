<template>
  <div class="badge-container">
    <div>
      <ant-badge :count="count">
        <a href="#" class="head-example"></a>
      </ant-badge>
      <btn-group size="large">
        <ant-button @click="reduceCount">
          <ant-icon type="minus"></ant-icon>
        </ant-button>
        <ant-button @click="increaseCount">
          <ant-icon type="plus"></ant-icon>
        </ant-button>
      </btn-group>
    </div>
    <div style="margin-top: 10px">
      <ant-badge :dot="check">
        <a href="#" class="head-example"></a>
      </ant-badge>
      <ant-switch v-model="check"></ant-switch>
    </div>
  </div>
</template>
<script>
import AntBadge from '@/badge'
import AntButton from '@/button'
import AntIcon from '@/icon'
import AntSwitch from '@/switch'

const BtnGroup = AntButton.Group

export default {
  data () {
    return {
      count: 5,
      check: true
    }
  },
  components: {
    AntBadge,
    AntButton,
    BtnGroup,
    AntIcon,
    AntSwitch
  },
  methods: {
    increaseCount () {
      if (this.count < 0) this.count = 0
      this.count += 1
    },
    reduceCount () {
      if (this.count > 0) this.count -= 1
    }
  }
}
</script>
<style lang="less" scoped>
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
}
</style>
