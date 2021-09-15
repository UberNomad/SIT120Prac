<template>
  <div class="hello">
    <h1>Week 4</h1>
    <h2>Testing v-else</h2>
    <p v-if="test1">Test 1: True</p>
    <p v-else>Test 1: False</p>
    <h2>Testing v-if</h2>
    <p v-if="test2">Test 2: True</p>
    <p v-else>Test 2: False</p>
    <h2>Testing v-show</h2>
    <p v-show="test2">I'm visible because my condition was true!</p>
    <h2>Testing v-for</h2>
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data: function() {
    return {
      test1: false,
      test2: false,
      todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' },
          { text: 'Do something cool' },
        ],
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

