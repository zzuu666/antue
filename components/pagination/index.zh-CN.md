---
category: Components
subtitle: 分页
type: Navigation
title: Pagination
cols: 1
---

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。

## API

| 参数             | 说明                               | 类型          | 默认值                   |
|------------------|------------------------------------|---------------|--------------------------|
| current          | 当前页数                           | number        | 0                   |
| total            | 数据总数                           | number        | 0                        |
| pageSize         | 每页条数                           | number        | 10                         |
| change         | 页码改变时触发的自定义事件，参数是改变后的页码及每页条数 | Function(page, pageSize)      | noop                     |
| showSizeChanger(暂未实现)  | 是否可以改变 pageSize              | boolean        | false                    |
| pageSizeOptions（暂未实现）  | 指定每页可以显示多少条             | string[] | ['10', '20', '30', '40'] |
| onShowSizeChange（暂未实现） | pageSize 变化的回调                | Function(current, size)      | noop                     |
| showQuickJumper  | 是否可以快速跳转至某页             | boolean         | false                    |
| size（暂未实现）             | 当为「small」时，是小尺寸分页      | string        | ""                       |
| simple（暂未实现）           | 当添加该属性时，显示为简单分页     | boolean        | -                       |
| showTotal（暂未实现）        | 用于显示数据总量和当前数据顺序     | Function(total, range) | -              |

## slot

prev 和 next，分别可以修改上一页和下一页
