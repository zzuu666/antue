<template>
  <div>
    <a-row class="grid-row">
      <a-col class="grid-col" :span="8">col-8</a-col>
      <a-col class="grid-col" offset="8" :span="8">col-8</a-col>
    </a-row>
    <a-row class="grid-row">
      <a-col class="grid-col" offset="6" :span="6">col-6</a-col>
      <a-col class="grid-col" offset="6" :span="6">col-6</a-col>
    </a-row>
    <a-row class="grid-row">
      <a-col class="grid-col" offset="6" :span="12">col-12 offset-6</a-col>
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
