<template>
  <header class="header">
    <atu-row>
      <atu-col class="header-logo" :span="4">
        <embed class="header-icon" src="../icon.svg" height="36" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" />
        <span class="header-name">ANTUE</span>
      </atu-col>
      <atu-col :span="20">
        
      </atu-col>
    </atu-row>
  </header> 
</template>

<script>
import AtuRow from '@/row'
import AtuCol from '@/col'

export default {
  components: {
    AtuRow,
    AtuCol
  }
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  height: 80px;
  line-height: 80px;
  margin-bottom: 24px;
  background-color: #fff;
  &-logo {
    position: relative;
    text-align: center;
  }
  &-icon {
    display: inline-block;
    vertical-align: middle;
  }
  &-name {
    font-size: 16px;
    height: 80px;
    line-height: 80px;
    color: #108ee9;
    margin-left: 16px;
  }
}
</style>


