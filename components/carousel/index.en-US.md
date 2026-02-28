---
category: Components
type: Data Display
title: Carousel
---

A carousel component. Scales with its container.

## When To Use

- When there is a group of content on the same level.
- When there is insufficient content space, it can be used to save space in the form of a revolving door.
- Commonly used for a group of pictures/cards.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| autoplay | Whether to scroll automatically | boolean | `false` |
| dots | Whether to show the dots at the bottom of the gallery | boolean | `true` |
| dotPosition | The position of the dots, which can be one of `top` `bottom` `left` `right` | string | `bottom` |
| easing | Transition interpolation function name | string | `linear` |
| effect | Transition effect, `scrollx` or `fade` | string | `scrollx` |
| vertical | Whether to use a vertical display | boolean | `false` |
| autoplaySpeed | Delay between each auto scroll (milliseconds) | number | `3000` |

### Methods

| Name | Description | Arguments |
| ---- | ----------- | --------- |
| next() | Change current slide to next slide | - |
| prev() | Change current slide to previous slide | - |
| goTo(slideNumber) | Change current slide to given slide number | slideNumber |
