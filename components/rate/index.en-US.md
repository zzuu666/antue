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
| default-value | default value | number | 0 |
| change | callback when select value | Function(value: number) | - |
| hoverChange | callback when hover item | Function(value: number) | - |
| allow-half | whether to allow semi selection   | boolean | false |
| disabled | read only, unable to interact | boolean | false |
