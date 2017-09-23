---
category: Components
type: Data Entry
title: Rate
---

Rate component.

## When To Use

- Show evaluation.
- A quick rating operation on something.

## API

| Property        | Description           | type               | Default       |
|------------|----------------|-------------------|-------------|
| count    | star count | number | 5 |
| value | current value | number | - |
| defaultValue | default value | number | 0 |
| onChange | callback when select value | Function(value: number) | - |
| onHoverChange | callback when hover item | Function(value: number) | - |
| allowHalf | whether to allow semi selection   | boolean | false |
| disabled | read only, unable to interact | boolean | false |
| className | custom class name of rate | string | - |
| styles | custom style object of rate | object | - |

## Slot

| name        | Description           | Default       |
|------------|----------------|-------------|
| character    | custom character of rate | `<Icon type="star" />`
