<template>
  <main>
    <h1>Week 5</h1>
    <h2>Testing v-else</h2>
    <p v-if="test1">Test 1: True</p>
    <p v-else>Test 1: False</p>
    <h2>Testing v-if</h2>
    <p v-if="test2">Test 2: True</p>
    <p v-else>Test 2: False</p>
    <h2>To-do List</h2>
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
    <label>Message: </label><input v-model="message">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </main>
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
      test2: true,
      todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ],
        message: 'Hello Vue.js!',
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>

</style>
