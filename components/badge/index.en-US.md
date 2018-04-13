---
category: Components
type: Data Display
title: Badge
---

Small numerical value or status descriptor for UI elements.

## When To Use

Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.

## API

```
<ant-badge :count="5">
  <a href="#" class="head-example"></a>
</ant-badge>
```

```
<ant-badge :count="5"/>
```

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| count | Number to show in badge | number |  |
| dot | Whether to display a red dot instead of `count` | boolean | `false` |
| overflowCount | Max count to show | number | 99 |
| showZero | Whether to show badge when `count` is zero | boolean | `false` |
| status | Set Badge as a status dot | `success` \| `processing` \| `default` \| `error` \| `warning` | `''` |
| independent | badge with no wrapper | boolean | `false` |
