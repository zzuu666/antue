<template>
  <div>
    <a-row type="flex" class="grid-row grid-row-flex" justify="center" align="top">
      <a-col class="grid-col" style="height: 100px" :span="4">col-4</a-col>
      <a-col class="grid-col" style="height: 50px" :span="4">col-4</a-col>
      <a-col class="grid-col" style="height: 100px" :span="4">col-4</a-col>
      <a-col class="grid-col" style="height: 50px" :span="4">col-4</a-col>
    </a-row>
    <a-row type="flex" class="grid-row grid-row-flex" justify="space-around" align="middle">
      <a-col class="grid-col" style="height: 100px" :span="4">col-4</a-col>
      <a-col class="grid-col" style="height: 50px" :span="4">col-4</a-col>
      <a-col class="grid-col" style="height: 100px" :span="4">col-4</a-col>
      <a-col class="grid-col" style="height: 50px" :span="4">col-4</a-col>
    </a-row>
    <a-row type="flex" class="grid-row grid-row-flex" justify="space-between" align="bottom">
      <a-col class="grid-col" style="height: 100px" :span="4">col-4</a-col>
      <a-col class="grid-col" style="height: 50px" :span="4">col-4</a-col>
      <a-col class="grid-col" style="height: 100px" :span="4">col-4</a-col>
      <a-col class="grid-col" style="height: 50px" :span="4">col-4</a-col>
    </a-row>
  </div>
</template>

<script>
import ARow from '@/row'
import ACol from '@/col'

export default {
  components: {
    ARow,
    ACol
  }
}
</script>
