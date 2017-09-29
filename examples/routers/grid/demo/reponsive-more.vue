<template>
  <div>
    <a-row class="grid-row">
      <a-col class="grid-col" :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">col</a-col>
      <a-col class="grid-col" :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">col</a-col>
      <a-col class="grid-col" :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">col</a-col>
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
