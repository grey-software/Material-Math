<template>
  <q-layout
    view="lhr lpr lfr"
    class="bg-grey-1"
  >
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>