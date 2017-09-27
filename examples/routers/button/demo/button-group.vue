<template>
  <btn-group>
    <atu-button>Right</atu-button>
    <atu-button>M</atu-button>
    <atu-button>M</atu-button>
    <atu-button>Left</atu-button>
  </btn-group>
</template>

<script>
import AtuButton from '@/button'

const BtnGroup = AtuButton.Group

export default {
  components: {
    AtuButton,
    BtnGroup
  }
}
</script>

