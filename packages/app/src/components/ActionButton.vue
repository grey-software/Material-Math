<template>
  <q-btn unelevated rounded>{{label}}</q-btn>
</template>

<script lang="ts">
export default {
    props: {
        label: String
    },
};
</script>

<style scoped>
.q-btn {
  background-color: #2f80ed;
  width: 256px;
  height: 56px;
  color: white;
  font-size: 20px;
line-height: 32px;
}
</style>