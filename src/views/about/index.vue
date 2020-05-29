<template>
  <div class="about">
    <p>
      <code>v-if</code>&nbsp;指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。
    </p>
    <pre><code>&lt;h1 v-if="awesome"&gt;Vue is awesome!&lt;/h1&gt;</code></pre>
    <p>
      也可以用&nbsp;
      <code>v-else</code>&nbsp;添加一个“else 块”：
    </p>
    <pre><code>&lt;h1 v-if="awesome"&gt;Vue is awesome!&lt;/h1&gt;↵&lt;h1 v-else&gt;Oh no 😢&lt;/h1&gt;</code></pre>
    <pre>
      我们可能知道水平渐变的实现，类似这样：
      <code>
        {background-image:
        linear-gradient
        (left, red 100px, yellow 200px);
        }
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'about',
  methods: {},
  created() {}
}
</script>

<style>
.about {
  background-color: #fff;
}
code {
  background-color: #ccc;
}
pre {
  background-color: #ccc;
}
</style>