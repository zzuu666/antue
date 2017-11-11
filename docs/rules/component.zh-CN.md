---
title: 组件规范
---

本规范部分参考[Vue.js 组件编码规范](https://github.com/pablohpsilva/vuejs-component-style-guide/blob/master/README-CN.md#避免-this.$parent)。

### 组件命名
组件的命名与Antd中的组件明明保持一致。全部采用小写字母，使用连字符分割单词。

### 必选属性
+ 组件名：与文件名保持一致，但是使用驼峰式例如`button`、`buttonGroup`。
+ 类前缀: 为了使组件有拓展性，类名前缀在 props 中声明，与 Ant-Design 保持一致。

``` js
export default {
  name: 'button',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-button'
    }
  }
}
```

### 组件暴露事件
+ 为了兼容 `inline-template` 模式，对于暴露出来的事件，一律采用 `kebab-case` 的写法。

``` js
export default {
  name: 'button',
  methods: {
    handleTabClick () {
      this.$emit('tab-click')  // Good
      this.$emit('tabClick')   // Bad
    }
  }
}
```

### 组件表达式简单化
如果你发现写了太多复杂并难以阅读的行内表达式，那么可以使用 method 或是 computed 属性来替代其功能。

``` html
✅ 这是对的

<menu :style="style">

<script>
computed: {
  style () {
	let res = {}
	if (this.mode === 'inline' && this.level > 0) {
	  res['padding-left'] = this.level * this.inlineIndent + 'px'
	}
	return res
  }
}
</script>
```

``` html

⚠️ 对于繁多的条件class

<button
  :class="[
    prefixCls,
    type ? `${prefixCls}-${type}` : ``,
    shape ? `${prefixCls}-${shape}` : ``,
    size ? `${prefixCls}-${size}` : ``,
    isLoading ? `${prefixCls}-loading` : ``,
    ghost ? `${prefixCls}-background-ghost` : ``,
    clicked ? `${prefixCls}-clicked` : ``,
  ]">
</button>

✅ 可以这样做

<button
  :class="classes">
</button>

<script>
export default {
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.type}`]: !!this.type,
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-loading`]: !!this.loading,
          [`${prefixCls}-background-ghost`]: !!this.ghost,
          [`${prefixCls}-clicked`]: !!this.clicked
        }
      ]
    }
  }
}
</script>




```

### 使用$emit来暴露事件
与 React 不同，Vue 不应使用 props 传递需要暴露出来的事件。这就需要在组件触发事件时采用`this.$emit()`。

``` html
✅ 这是对的
<atu-button @click="event"></atu-button>

```

``` html
❌ 这是不对的
<atu-button :click="event"></atu-button>
```

### 不需要处理父级class与style
与 React 不同，不需使用 props 传递 style 与 className，Vue 的组件会自己处理他们。

### 组件 props 原子化

虽然 Vue.js 支持传递复杂的 JavaScript 对象通过 props 属性，但是你应该尽可能的使用原始类型的数据。尽量只使用 JavaScript 原始类型（字符串、数字、布尔值）和函数。尽量避免复杂的对象。

### 验证组件的 props

在 Vue.js 中，组件的 props 即 API，一个稳定并可预测的 API 会使得你的组件更容易被其他开发者使用。

我们在 `components/_util/proptype`中提供了可供 `validator` 使用的函数，如果需要其他的，请给我们提`issue`。

``` js
// type 的值需为 'primary', 'dashed', 'danger' 其中之一。
type: {
  type: String,
  validator (value) {
    return oneOf(value, ['primary', 'dashed', 'danger'])
  }
}
```

### 组件结构化

+ 按首字母排序 properties、data、computed、watches 和 methods 使得这些对象内的属性便于查找。
+ 使用 name 属性。借助于 vue devtools 可以让你更方便的测试。
+ 合理组织，使得组件易于阅读。（name; extends; props, data 和 computed; components; watch 和 methods; lifecycle methods 等）。

``` html
<template lang="html">
  <div class="Ranger__Wrapper">
    <!-- ... -->
  </div>
</template>

<script type="text/javascript">
  export default {
    // 不要忘记了 name 属性
    name: 'RangeSlider',
    // 组合其它组件
    extends: {},
    // 组件属性、变量
    props: {
      bar: {}, // 按字母顺序
      foo: {},
      fooBar: {},
    },
    // 变量
    data() {},
    computed: {},
    // 使用其它组件
    components: {},
    // 方法
    watch: {},
    methods: {},
    // 生命周期函数
    beforeCreate() {},
    mounted() {},
  };
</script>
```

