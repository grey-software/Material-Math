<template>
  <div style="height:75vh" class="column justify-center items-center">
    <div class="select-mode-heading">How would you like to practice?</div>
    <div class="row items-center justify-around" style="margin-top: 20px;width:100%">
      <div style="max-width:140px;" class="column justify-center items-center">
        <q-btn
          @click="setTimedMode"
          round
          size="40px"
          icon="alarm"
          class="select-mode-btn"
          :class="{'selected-mode-btn': isTimedMode}"
        />
        <div class="mode-label q-mt-lg" :class="{'selected': isTimedMode}">Timed Practice</div>
      </div>
      <div style="max-width:140px;" class="column justify-center items-center">
        <q-btn
          @click="setQuestionsMode"
          round
          size="40px"
          class="select-mode-btn"
          :class="{'selected-mode-btn': isQuestionsMode}"
          icon="help_outline"
        />
        <div class="mode-label q-mt-lg" :class="{'selected': isQuestionsMode}">Maths Worksheet</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { PracticeMode } from "../engine/models/math_question";
import { PracticeActions, PracticeGetters } from "../store/practice/practice";

export default {
  methods: {
    setTimedMode() {
      const app: any = this;
      app.setPracticeMode(PracticeMode.TIME);
    },
    setQuestionsMode() {
      const app: any = this;
      app.setPracticeMode(PracticeMode.QUESTIONS);
    },
    ...mapActions({
      setPracticeMode: PracticeActions.SET_PRACTICE_MODE
    })
  },
  computed: {
    isQuestionsMode() {
      const app: any = this;
      return app.practiceMode === PracticeMode.QUESTIONS;
    },
    isTimedMode() {
      const app: any = this;
      return app.practiceMode === PracticeMode.TIME;
    },
    ...mapGetters({
      practiceMode: PracticeGetters.PRACTICE_MODE
    })
  }
};
</script>

<style scoped>
.select-mode-heading {
  font-family: "Montserrat", sans-serif;
  color: #4f4f4f;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
}
.mode-label {
  font-family: "Montserrat", sans-serif;;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #C4C4C4;
}

.select-mode-btn {
  background: #E5E5E5;
  color: #C4C4C4;
}
.selected-mode-btn {
  background-color: #114489;
  color: #FFFFFF;
}

.selected {
  color: #114489;
}
.select-width {
  width: 250px;
}
</style>