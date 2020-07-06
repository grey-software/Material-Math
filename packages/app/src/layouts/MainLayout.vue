<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-page-container class="column items-center">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MaterialMathIcon from "../components/MaterialMathIcon";

export default {
  name: "MyLayout",
  components: {
    MaterialMathIcon
  }
};
</script>
