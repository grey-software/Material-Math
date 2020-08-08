<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  created() {
    document.addEventListener("keyup", e => {
    if (e.key == "d") {
        [].forEach.call(document.querySelectorAll("*"), function(a) {
        a.style.outline =
            "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
        });
    }
    });
}
}
</script>

<style>
a { 
  text-decoration: none;
}

.full-viewport-height {
  height: 100vh;
}
</style>
