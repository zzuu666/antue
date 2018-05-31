<template>
  <div>
    <Affix :offsetTop="120" @on-change="handleStatusChange">
      <atu-button>120px to affix top</atu-button>
    </Affix>
  </div>
</template>

<script>
  import Affix from '@/affix'
  import AtuButton from '@/button'

  export default {
    methods: {
      handleStatusChange (affixed) { console.log(affixed) }
    },
    components: {
      Affix,
      AtuButton
    }
  }
</script>
