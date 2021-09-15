<template>
  <div id="app">
    <Nav/>
    <div id="container">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <Footer author="Ethan" year="2021"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Nav,
    Footer
  }
}
</script>

<style>
/*** Reset CSS ***/
@import './assets/styles/reset.css';

/*** Global CSS ***/
body {
  font-family: sans-serif;
}

h1 {
	font-size: 3em;
	margin-bottom: 30px;
	text-align: center;
}

h2 {
	font-size: 2em;
	margin-bottom: 30px;
}

p {
	font-size: 1em;
	margin-bottom: 20px;
}

img {
	max-width: 100%;
	margin-bottom: 50px;
  box-shadow: 5px 5px 5px #ccc;
}

ol {
  list-style-type: upper-alpha;
  margin-bottom: 20px;
}

ol li {
  line-height: 1.3em;
}

input {
  margin-bottom: 20px;
  font-size: 1em;
}

#app {
  min-height: 100vh;
  position: relative;
}

#container {
  width: 960px;
  margin: 0 auto;
}
</style>
