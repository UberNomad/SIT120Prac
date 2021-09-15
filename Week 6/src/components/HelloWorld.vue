<template>
  <main>
    <h1 v-if="toggleTitle">{{ msg }}</h1>
    <h1 v-else>Alternate Title</h1>
    <p v-show="toggleTitle">Lorem ipsum</p>
    <section>
      <h2>To-do List</h2>
      <ol>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.text }}
        </li>
      </ol>
    </section>
    <section>
      <h2>User Input</h2>
      <label>Message: </label><input v-model="message">
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">Reverse Message</button>
    </section>
    <section>
      <h2>Checkbox</h2>
      <div id="v-model-multiple-checkboxes" class="demo">
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames" />
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
        <label for="mike">Mike</label>
        <br />
        <span>Checked names: {{ checkedNames }}</span>
      </div>
    </section>
    <section>
      <h2>Selective Rendering</h2>
      <div id="v-model-select-dynamic" class="demo">
        <select v-model="selected">
          <option v-for="option in options" v-bind:value="option.value" :key="option.id">
            {{ option.text }}
          </option>
        </select>
        <span> Selected: {{ selected }}</span>
      </div>
    </section>
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
      toggleTitle: false,
      todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ],
        message: 'Hello Vue.js!',
        checkedNames: [],
        selected: 'A',
        options: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ],
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
section {
  margin-bottom: 50px;
  padding-bottom: 50px;
  border-bottom: 3px dotted #CCC;
}
</style>
