---
category: Components
type: Data Display
title: Table
cols: 1
---

A table displays rows of data.

## When To Use

- To display a collection of structured data.
- To sort, search, paginate, filter data.

## API

### Table

| Property       | Description                              | Type       | Default |
|----------------|------------------------------------------|------------|---------|
| dataSource     | Data record array to be displayed        | any[]      | []      |
| columns        | Columns of table                         | object[]   | []      |
| rowKey         | Row's unique key                         | string \| function(record) | 'key' |
| bordered       | Whether to show all table borders        | boolean    | false   |
| size           | Size of table                            | `default` \| `middle` \| `small` | `default` |
| loading        | Loading status of table                  | boolean    | false   |
| showHeader     | Whether to show table header             | boolean    | true    |
| pagination     | Pagination config or false to hide       | object \| false | -   |
| rowSelection   | Row selection config                     | object     | null    |
| scroll         | Set horizontal or vertical scrolling     | object     | {}      |
| locale         | i18n text including filter, empty text   | object     | { emptyText: 'No Data' } |

### Column

| Property       | Description                              | Type       | Default |
|----------------|------------------------------------------|------------|---------|
| title          | Title of this column                     | string     | -       |
| dataIndex      | Display field of the data record         | string     | -       |
| key            | Unique key of this column                | string     | -       |
| width          | Width of this column                     | string \| number | -   |
| align          | Specify how content is aligned           | `left` \| `right` \| `center` | `left` |
| sorter         | Sort function for local sort             | function(a, b)  | -   |
| filters        | Filter menu config                       | object[]   | -       |
| onFilter       | Callback executed when filter confirmed  | function   | -       |
| filteredValue  | Controlled filtered value                | string[]   | -       |
| render         | Renderer of the table cell               | function(h, text, record, index) | - |
| className      | className of this column                 | string     | -       |

### rowSelection

| Property          | Description                              | Type       | Default  |
|-------------------|------------------------------------------|------------|----------|
| type              | checkbox or radio                        | `checkbox` \| `radio` | `checkbox` |
| selectedRowKeys   | Controlled selected row keys             | string[]   | []       |
| onChange          | Callback on selected rows change         | function(selectedRowKeys, selectedRows) | - |
| onSelect          | Callback on row select/deselect          | function(record, selected, selectedRows) | - |
| onSelectAll       | Callback on select/deselect all          | function(selected, selectedRows) | - |
| getCheckboxProps  | Get checkbox props for each row          | function(record) | - |

### Events

| Event     | Description                              | Arguments |
|-----------|------------------------------------------|-----------|
| change    | Triggered on pagination, filters, sorter change | function(pagination, filters, sorter) |
| row-click | Row click event                          | function(record, index) |
