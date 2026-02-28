---
category: Components
type: Feedback
title: Drawer
---

A panel which slides in from the edge of the screen.

## When To Use

A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It allows the user to interact with content without having to leave the current page.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| visible | Whether the Drawer dialog is visible | boolean | `false` |
| title | The title for Drawer | string | - |
| placement | The placement of the Drawer | `left` / `right` / `top` / `bottom` | `right` |
| closable | Whether a close button is visible on top right | boolean | `true` |
| mask | Whether to show mask | boolean | `true` |
| maskClosable | Clicking on the mask to close the Drawer | boolean | `true` |
| width | Width of the Drawer dialog | string/number | `256` |
| height | Height of the Drawer dialog, used when placement is top or bottom | string/number | `256` |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| close | Called when Drawer is closed | - |
