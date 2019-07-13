<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <sampleForm></sampleForm>
  </div>
</template>

<script>
import sampleForm from './components/form/index.vue'

export default {
  name: 'app',
  components: {
    sampleForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  widows: 60px;
  height: 60px;
}
</style>
