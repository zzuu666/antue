---
category: Components
type: Navigation
title: Breadcrumb
---

A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

## When To Use

- When the system has more than two layers in a hierarchy.
- When you need to inform the user of where they are.
- When the user may need to navigate back to a higher level.
- When the application has multi-layer architecture.

## API

### Breadcrumb

| Property      | Description                              | Type            | Default |
|-----------|-----------------------------------|----------------|--------|
| separator | Custom separator       | string | '/'    |

### Breadcrumb.Item

| Property      | Description                              | Type           | Default |
|-----------|-----------------------------------|----------------|--------|
| href | the url you wanna go                      | string |  -  |
| to | use it with vue-router          | Object/String |  -  |
| replace | if use vue-router, it decide use replace model or not(replace model will not add record in history)  | Boolean | false   |

#### Slot

| Name      | Description                              | Type              |
|-----------|-----------------------------------|-----------------|
| separator | Custom separator                    | DOM |


#### Event

| EventName  | Description | Type              |
|-----------|-----------------------------------|-----------------|
| click | Triggered when click breadcrumb-item, can custom handle click      | Function(e) |
