<template>
    <container>
      <h1>Button undefined</h1>
      
To trigger an operation.

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.


      <h2> 代码展示 </h2>
      
    <code-show
      title="Type"
      desc="<p>There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button and <code>danger</code> button in antd.</p>
<blockquote>
<p><code>danger</code> is supported after <code>antd@2.7</code>.</p>
</blockquote>
"
      code="<pre><code class="lang-html">&lt;template&gt;
  &lt;div&gt;
    &lt;ant-button type=&quot;primary&quot;&gt;你好&lt;/ant-button&gt;
    &lt;ant-button type=&quot;dashed&quot;&gt;你好&lt;/ant-button&gt;
    &lt;ant-button&gt;你好&lt;/ant-button&gt;
    &lt;ant-button type=&quot;danger&quot;&gt;你好&lt;/ant-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import AntButton from &#39;@/button&#39;
export default {
  components: {
    AntButton
  }
}
&lt;/script&gt;
</code></pre>
">
      <button-base></button-base>

    </code-show>
    
      ## API

To get a customized button, just set `type`/`shape`/`size`/`loading`/`disabled`.

Property | Description | Type | Default
-----|-----|-----|------
type | can be set to `primary` `ghost` `dashed` `danger`(added in 2.7) or omitted (meaning `default`) | string | `default`
htmlType | set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button`
icon | set the icon of button, see: Icon component | string | -
shape | can be set to `circle` or omitted | string | -
size | can be set to `small` `large` or omitted | string | `default`
loading | set the loading status of button | boolean \| { delay: number } | false
onClick | set the handler to handle `click` event | function | -
ghost | make background transparent and invert text and border colors, added in 2.7 | boolean | false

`<Button>Hello world!</Button>` will be rendered into `<button>Hello world!</button>`, and all the properties which are not listed above will be transferred to the `<button>` tag.
    </container>
  </template>
  <script>
  import Container from '../common/container'
  import CodeShow from '../common/code-show'
  import buttonbase from './demo/base'

  export default {
    components: {
      buttonbase,

      Container,
      CodeShow
    }
  }
  </script>
  