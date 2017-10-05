<template>
  <div>
    <a-row class="grid-row">
      <a-col class="grid-col" xs="2" sm="4" md="6" lg="8" xl="10">col</a-col>
      <a-col class="grid-col" xs="20" sm="16" md="12" lg="8" xl="4">col</a-col>
      <a-col class="grid-col" xs="2" sm="4" md="6" lg="8" xl="4">col</a-col>
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
