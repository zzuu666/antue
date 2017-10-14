<template>
  <div>
    <a-row type="flex" class="grid-row grid-row-flex">
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
    </a-row>
    <a-row type="flex" class="grid-row grid-row-flex" justify="center">
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
    </a-row>
    <a-row type="flex" class="grid-row grid-row-flex" justify="end">
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
    </a-row>
     <a-row type="flex" class="grid-row grid-row-flex" justify="space-between">
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
    </a-row>
     <a-row type="flex" class="grid-row grid-row-flex" justify="space-around">
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
      <a-col class="grid-col" :span="4">col-4</a-col>
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
