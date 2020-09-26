<template>
  <div id="app">
    <div>filterTime: {{ now | filterTime }}</div>

    <div>
      <xv-switch-controller v-model="open" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      now: Date.now(),
      open: true,
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
