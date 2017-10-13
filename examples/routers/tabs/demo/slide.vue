<template>
  <div>
    <atu-switch on="Vertical" off="Horizontal" v-model="checked" />
    <atu-tabs @prev-click="test" @next-click="test" :position="position" v-model="active" style="height:220px">
      <atu-pane v-for="i in 15" :key="i" :tab="`Tab ${i}`" :index="i">Tab {{i}}</atu-pane>
    </atu-tabs>
  </div>
</template>

<script>
import AtuSwitch from '@/switch'
import AtuTabs from '@/tabs'
const AtuPane = AtuTabs.Pane

export default {
  data () {
    return {
      active: 4,
      checked: false
    }
  },
  computed: {
    position () {
      return this.checked ? 'left' : 'top'
    }
  },
  components: {
    AtuTabs,
    AtuPane,
    AtuSwitch
  },
  methods: {
    test (e) {
      console.log(e)
    }
  }
}
</script>
