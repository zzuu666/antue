<template>
  <a-row type="flex" class="grid-row grid-row-flex">
    <a-col class="grid-col" :span="6" order="3">col-6 1 order-3</a-col>
    <a-col class="grid-col" :span="6" order="4">col-6 2 order-4</a-col>
    <a-col class="grid-col" :span="6" order="1">col-6 3 order-1</a-col>
    <a-col class="grid-col" :span="6" order="2">col-6 4 order-2</a-col>
  </a-row>
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
