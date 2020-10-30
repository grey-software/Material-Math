<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<style>
body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}
html {
  height: -webkit-fill-available;
}
a { 
  text-decoration: none;
}

.full-viewport-height {
  min-height: 100vh;
min-height: -webkit-fill-available;
}
</style>
