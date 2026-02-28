---
category: Components
type: Other
title: Anchor
---

Hyperlinks to scroll on one page.

## When To Use

For displaying anchor hyperlinks on page and jumping between them.

## API

### Anchor

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| offsetTop | Pixels to offset from top when calculating position of scroll | number | `0` |
| affix | Fixed mode of Anchor | boolean | `true` |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| click | Callback when link is clicked | (e, link) |
| change | Listening for anchor link change | currentActiveLink |

### Anchor.Link

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| href | Target of hyperlink | string | - |
| title | Content of hyperlink | string | - |
