<template>
  <div id="app">
        <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    showHelp() {
      // eslint-disable-next-line
      console.log('show help');
    },
  },
};
</script>

<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}
</style>
