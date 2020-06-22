<template>
  <div id="challenge-header" class="row items-center justify-between q-px-md">
    <router-link to="/"><q-icon class="icon-challenge-header" name="mdi-arrow-left"></q-icon></router-link>
    <div class="row items-center">
      <practice-session-progress class="q-mr-md"/>
      <challenge-streak />
    </div>
  </div>
</template>

<script lang="ts">
import ChallengeStreak from "./ChallengeStreak.vue";
import PracticeSessionProgress from "./PracticeSessionProgress.vue";

export default {
  components: {
    ChallengeStreak,
    PracticeSessionProgress
  }
};
</script>

<style>
#challenge-header {
  height: 48px;
  width: 100%;
  background-color: #114489;
  color: white;
}

.text-challenge-header {
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
}

.icon-challenge-header {
  font-size: 24px;
}
</style>