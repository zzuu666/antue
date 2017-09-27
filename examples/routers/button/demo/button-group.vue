<template>
  <div>
    <btn-group size="small">
      <atu-button>Right</atu-button>
      <atu-button>M</atu-button>
      <atu-button>M</atu-button>
      <atu-button>Left</atu-button>
    </btn-group>

    <btn-group>
      <atu-button>Right</atu-button>
      <atu-button>M</atu-button>
      <atu-button>M</atu-button>
      <atu-button>Left</atu-button>
    </btn-group>

    <btn-group size="large">
      <atu-button>Right</atu-button>
      <atu-button>M</atu-button>
      <atu-button>M</atu-button>
      <atu-button>Left</atu-button>
    </btn-group>

  </div>
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

