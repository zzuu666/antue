<template>
  <div>
    <p>
      <atu-button type="primary">Primary</atu-button>
      <atu-button disabled type="primary">Primary</atu-button>
    </p>
    <p>
      <atu-button>Default</atu-button>
      <atu-button disabled>Default</atu-button>
    </p>
    <p class="ghost">
      <atu-button type="danger">Danger</atu-button>
      <atu-button disabled type="danger">Danger</atu-button>
    </p>
    <p>
      <atu-button type="dashed">Dashed</atu-button>
      <atu-button disabled type="dashed">Dashed</atu-button>
    </p>
  </div>
</template>

<script>
import AtuButton from '@/button'
export default {
  components: {
    AtuButton
  }
}
</script>


