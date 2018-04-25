<template>
  <div>
    <Affix>
      <atu-button type="primary">Affix top</atu-button>
    </Affix>
    <br/>
    <affix :offsetBottom="0">
      <atu-button type="primary">Affix bottom</atu-button>
    </affix>
  </div>
</template>

<script>
  import Affix from '@/affix'
  import AtuButton from '@/button'

  export default {
    components: {
      Affix,
      AtuButton
    }
  }
</script>
