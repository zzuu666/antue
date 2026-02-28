<template>
  <div>
    <ant-list bordered :data-source="data">
      <ant-list-item slot="renderItem" slot-scope="item">
        <ant-list-item-meta :title="item.title" :description="item.description">
        </ant-list-item-meta>
      </ant-list-item>
    </ant-list>
  </div>
</template>

<script>
  import AntList from '@/list'

  const AntListItem = AntList.Item
  const AntListItemMeta = AntListItem.Meta

  export default {
    components: {
      AntList,
      AntListItem,
      AntListItemMeta
    },
    data () {
      return {
        data: [
          {
            title: 'Ant Design Title 1',
            description: 'Ant Design, a design language for background applications.'
          },
          {
            title: 'Ant Design Title 2',
            description: 'Ant Design, a design language for background applications.'
          },
          {
            title: 'Ant Design Title 3',
            description: 'Ant Design, a design language for background applications.'
          },
          {
            title: 'Ant Design Title 4',
            description: 'Ant Design, a design language for background applications.'
          }
        ]
      }
    }
  }
</script>
