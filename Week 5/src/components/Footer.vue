<template>
  <footer>
    <span>Copyright {{year}} | Website by {{author}}</span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    author: String,
    year: String
  }
}
</script>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
	text-align: center;
  padding: 5px 0;
}
</style>
