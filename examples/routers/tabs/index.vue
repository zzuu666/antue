<template>
  <container>
    <code-show>
      <atu-tabs>
        <atu-pane tab="Tab1" index="1">Tab 1</atu-pane>
        <atu-pane tab="Tab2" index="2">Tab 2</atu-pane>
        <atu-pane tab="Tab3" index="3">Tab 3</atu-pane>
      </atu-tabs>
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import AtuTabs from '@/tabs'
const AtuPane = AtuTabs.Pane

export default {
  components: {
    AtuTabs,
    AtuPane,
    Container,
    CodeShow
  }
}
</script>
