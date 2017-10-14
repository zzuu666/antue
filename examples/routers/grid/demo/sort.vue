<template>
  <div>
    <a-row class="grid-row">
      <a-col class="grid-col" push="6" :span="18">col-18 push-6</a-col>
      <a-col class="grid-col" pull="18" :span="6">col-6 pull-18</a-col>
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
