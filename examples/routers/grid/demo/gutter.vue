<template>
  <div>
    <a-row class="grid-row" :gutter="16">
      <a-col :span="6">
        <p class="grid-col">col-6</p>
      </a-col>
      <a-col :span="6">
        <p class="grid-col">col-6</p>
      </a-col>
      <a-col :span="6">
        <p class="grid-col">col-6</p>
      </a-col>
      <a-col :span="6">
        <p class="grid-col">col-6</p>
      </a-col>
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
