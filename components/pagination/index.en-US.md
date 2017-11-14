---
category: Components
type: Navigation
title: Pagination
cols: 1
---

A long list can be divided into several pages by `Pagination`, and only one page will be loaded at a time.

## When To Use

- When it will take a long time to load/render all items.
- If you want to browse the data by navigating through pages.

## API

Property | Description | Type | Default
-----|-----|-----|------
current | current page number | number | -
total | total number of data items | number | 0
pageSize | number of data items per page | number | -
change | a callback function, executed when the page number is changed, and it takes the resulting page number and pageSize as its arguments | Function(page, pageSize) | noop
showSizeChanger(not ready) | determine whether `pageSize` can be changed | boolean | false
pageSizeOptions(not ready) | specify the sizeChanger options | string[] | ['10', '20', '30', '40']
onShowSizeChange(not ready) | a callback function, executed when `pageSize` is changed | Function(current, size) | noop
showQuickJumper | determine whether you can jump to pages directly | boolean | false
size(not ready) | specify the size of `Pagination`, can be set to `small` | string | ""
simple(not ready) | whether to use simple mode | boolean | -
showTotal(not ready) | to display the total number and range | Function(total, range) | -

## slot
`prev` and `next` to change next\prev button style.
