<template>
  <nav>
    <a href="#">Example 1</a>
    <a href="#">Example 2</a>
    <a href="#">Example 3</a>
    <a href="#">Example 4</a>
    <a href="#">Example 5</a>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
nav {
	margin: 0 auto 60px auto;
	padding: 10px;
	background-color: darkblue;
	text-align: center;
}

nav a {
	text-decoration: none;
	color: #FFF;
	margin-right: 40px;
}
</style>
