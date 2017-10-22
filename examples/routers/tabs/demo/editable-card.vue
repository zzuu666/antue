<template>
  <atu-tabs v-model="active" type="editable-card" @edit="handleEdit">
    <atu-pane
      v-for="pane in panes"
      :closable="pane.closable"
      :key="pane.index"
      :tab="pane.tab"
      :index="pane.index">{{pane.tab}}</atu-pane>
  </atu-tabs>
</template>

<script>
import AtuTabs from '@/tabs'
const AtuPane = AtuTabs.Pane

export default {
  data () {
    return {
      active: 1,
      index: 0,
      panes: [
        {
          tab: 'Tab 1',
          index: 1,
          closable: false
        },
        {
          tab: 'Tab 2',
          index: 2,
          closable: true
        },
        {
          tab: 'Tab 3',
          index: 3,
          closable: true
        }
      ]
    }
  },
  components: {
    AtuTabs,
    AtuPane
  },
  methods: {
    handleEdit (action, index) {
      this[action](index)
    },
    add () {
      console.log('88')
      this.panes.push({
        tab: 'New Tab',
        index: `New${this.index++}`
      })
    },
    remove (index) {
      const i = this.panes.findIndex(el => el.index === index)
      i > -1 && this.panes.splice(i, 1)
    }
  }
}
</script>
