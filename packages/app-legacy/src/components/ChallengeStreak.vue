<template>
  <span class="streak">Streak: {{streak}}</span>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { PracticeGetters } from '../store/practice/practice'

export default {
  name: 'challenge-streak',
  computed: {
    ...mapGetters({ streak: PracticeGetters.STREAK })
  }
}
</script>

<style scoped>
.streak {
  font-family: "Montserrat", sans-serif;
  font-size: 2em;
  margin: 16px;
}
</style>
