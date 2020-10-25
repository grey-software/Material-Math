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
a { 
  text-decoration: none;
}

.full-viewport-height {
  min-height: 100vh;
}
</style>
