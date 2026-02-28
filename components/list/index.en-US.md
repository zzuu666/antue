---
category: Components
type: Data Display
title: List
---

Simple List.

## When To Use

A list can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.

## API

### List

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| dataSource | dataSource array for list | Array | `[]` |
| bordered | Toggles rendering of the border around the list | boolean | `false` |
| size | Size of list | `default` \| `small` \| `large` | `default` |
| header | List header renderer | string \| slot | - |
| footer | List footer renderer | string \| slot | - |
| loading | Shows a loading indicator while the contents of the list are being fetched | boolean | `false` |
| split | Toggles rendering of the split under list item | boolean | `true` |

### List.Item

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| extra | Extra content of list item | string \| slot | - |

### List.Item.Meta

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| avatar | The avatar of list item | string | - |
| title | The title of list item | string | - |
| description | The description of list item | string | - |
