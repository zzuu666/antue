---
category: Components
type: Data Display
title: Tag
---

Tag for categorizing or markup.

## When To Use

- It can be used to tag by dimension or property.

- When categorizing.

## API

### Tag

| Property     | Description           | Type     | Default      |
|--------------|-----------------------|----------|--------------|
| color        | Color of the Tag      | string | - |
| closable     | Whether Tag can be closed    | boolean  | `false`        |

# Events
| Property     | Description           | Type     | Default      |
|--------------|-----------------------|----------|--------------|
| close      | Callback executed when tag is closed | (e) => void | - |
| after-close   | Callback executed when close animation is completed | () => void | - |

### Tag.CheckableTag

| Property     | Description           | Type     | Default      |
|--------------|-----------------------|----------|--------------|
| checked      | Checked status of Tag | boolean | `false` |
| change     | Callback executed when Tag is checked/unchecked | (checked) => void | - |
