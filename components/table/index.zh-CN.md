---
category: Components
subtitle: 表格
type: Data Display
title: Table
cols: 1
---

展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## API

### Table

| 参数           | 说明                                     | 类型       |  默认值 |
|----------------|------------------------------------------|------------|--------|
| dataSource     | 数据数组                                 | any[]      | []     |
| columns        | 表格列的配置描述，具体项见下表              | object[]   | []     |
| rowKey         | 表格行 key 的取值，可以是字符串或一个函数    | string \| function(record) | 'key' |
| bordered       | 是否展示外边框和列边框                     | boolean    | false  |
| size           | 表格大小                                 | `default` \| `middle` \| `small` | `default` |
| loading        | 页面是否加载中                            | boolean    | false  |
| showHeader     | 是否显示表头                              | boolean    | true   |
| pagination     | 分页器，设为 false 时不展示分页             | object \| false | 无  |
| rowSelection   | 列表项是否可选择，配置项见下表              | object     | null   |
| scroll         | 设置横向或纵向滚动                         | object     | {}     |
| locale         | 默认文案设置，目前包括排序、过滤、空数据文案  | object     | { emptyText: '暂无数据' } |

### Column

列描述数据对象，是 columns 中的一项。

| 参数           | 说明                                     | 类型       | 默认值  |
|----------------|------------------------------------------|------------|--------|
| title          | 列头显示文字                              | string     | -      |
| dataIndex      | 列数据在数据项中对应的 key                  | string     | -      |
| key            | Vue 需要的 key                            | string     | -      |
| width          | 列宽度                                    | string \| number | -  |
| align          | 设置列内容的对齐方式                       | `left` \| `right` \| `center` | `left` |
| sorter         | 排序函数，本地排序使用一个函数              | function(a, b)  | -  |
| filters        | 表头的筛选菜单项                           | object[]   | -      |
| onFilter       | 本地模式下，确定筛选的运行函数              | function   | -      |
| filteredValue  | 筛选的受控属性                             | string[]   | -      |
| render         | 生成复杂数据的渲染函数                     | function(h, text, record, index) | - |
| className      | 列的 className                            | string     | -      |

### rowSelection

选择功能的配置。

| 参数              | 说明                                     | 类型       | 默认值    |
|-------------------|------------------------------------------|------------|----------|
| type              | 多选/单选                                | `checkbox` \| `radio` | `checkbox` |
| selectedRowKeys   | 指定选中项的 key 数组                     | string[]   | []       |
| onChange          | 选中项发生变化的回调                       | function(selectedRowKeys, selectedRows) | - |
| onSelect          | 用户手动选择/取消选择某列的回调             | function(record, selected, selectedRows) | - |
| onSelectAll       | 用户手动选择/取消选择所有列的回调           | function(selected, selectedRows) | - |
| getCheckboxProps  | 选择框的默认属性配置                       | function(record) | - |

### 事件

| 事件名    | 说明                                     | 回调参数 |
|-----------|------------------------------------------|----------|
| change    | 分页、排序、筛选变化时触发                  | function(pagination, filters, sorter) |
| row-click | 行点击事件                                | function(record, index) |
