---
order: 11
title:
  zh-CN: 自定义新增页签触发器
  en-US: Customized trigger of new tab
---
## zh-CN

隐藏默认的页签增加图标，给自定义触发器绑定事件。

## en-US

Hide default plus icon, and bind event for customized trigger.


```` html
<template>
  <div>
    <atu-button @click="add"> Add </atu-button>
    <atu-tabs v-model="active" hide-add type="editable-card" @edit="handleEdit">
      <atu-pane
        v-for="pane in panes"
        :closable="pane.closable"
        :key="pane.index"
        :tab="pane.tab"
        :index="pane.index">{{pane.tab}}</atu-pane>
    </atu-tabs>
  </div>
</template>

<script>
import AtuButton from '@/button'
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
    AtuPane,
    AtuButton
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

````
