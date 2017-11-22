---
category: Components
type: Data Display
title: Timeline
---

Vertical display timeline.

## When To Use

- When a series of information needs to be ordered from top to bottom by time.
- When you need a timeline to make a visual connection.

## API

``` html
<atu-timeline>
  <atu-timeline-item>Create a services site 2015-09-01</atu-timeline-item>
  <atu-timeline-item>Solve initial network problems 2015-09-01</atu-timeline-item>
  <atu-timeline-item>Technical testing 2015-09-01</atu-timeline-item>
  <atu-timeline-item>Network problems being solved 2015-09-01</atu-timeline-item>
</atu-timeline>
```

### Timeline

Timeline

| Property      | Description                                     | Type       | Default |
|----------|----------------------------------------|------------|-------|
| pending  | Set the last ghost node's existence or its content | boolean string | `false`  |

### Slots

Timeline

| name      | Description                        | 
|----------|----------------------------------------|
| pending  | Set the last ghost node's content |

### Timeline.Item

Node of timeline

| Property      | Description                                     | Type       | Default |
|----------|------------------------------------------|------------|-------|
| color   | Set the circle's color to `blue`, `red`, `green` or other custom colors | string | `blue` |


### Timeline.Item Slots

| name      | Description                        | 
|----------|----------------------------------------|
| dot   | Customize timeline dot |
