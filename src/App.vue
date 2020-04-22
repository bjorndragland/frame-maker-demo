<template>
  <div id="app">
   <UiMain></UiMain>

  </div>
</template>

<script>
import UiMain from "./components/UiMain.vue";

export default {
  name: "App",
  components: {
    UiMain
  }
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
