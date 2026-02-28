---
category: Components
type: Data Entry
title: Transfer
---

Double column transfer choice box.

## When To Use

Transfer the elements between two columns in an intuitive and efficient way.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| dataSource | Used for setting the source data | Array<{key, title, disabled?, description?}> | [] |
| targetKeys | A set of keys of elements that are listed on the right column | Array | [] |
| titles | A set of titles that are sorted from left to right | Array | `['源列表', '目标列表']` |
| showSearch | If included, a search box is shown on each column | boolean | `false` |
| disabled | Whether disabled transfer | boolean | `false` |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| change | A callback function that is executed when the transfer between columns is complete | targetKeys, direction, moveKeys |
| selectChange | A callback function which is executed when selected items are changed | sourceSelectedKeys, targetSelectedKeys |
| search | A callback function which is executed when search field are changed | direction, value |
