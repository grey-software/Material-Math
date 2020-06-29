<template>
  <div style="height:75vh" class="column justify-center items-center">
    <h1>Choose your mode</h1>
    <div class="row items-center justify-around" style="margin-top: 20px;width:100%">
      <div style="max-width:140px;" class="column justify-center items-center">
        <q-btn
          class="selected-btn"
          v-if="isTimedMode"
          @click="setTimedMode"
          round
          size="40px"
          icon="alarm"
        />
        <q-btn v-else class="unselected-btn" @click="setTimedMode" round size="40px" icon="alarm" />
        <h3 class="text-center" :class="{'unselected-h3': ! isTimedMode}">Timed Practice</h3>
      </div>
      <div style="max-width:140px;" class="column justify-center items-center">
        <q-btn
          v-if="isQuestionsMode"
          @click="setQuestionsMode"
          round
          size="40px"
          color="primary"
          icon="help_outline"
        />
        <q-btn v-else class="unselected-btn" @click="setQuestionsMode" round size="40px" icon="help_outline" />
        <h3 class="text-center" :class="{'unselected-h3': ! isQuestionsMode}">Maths Worksheet</h3>
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
h1 {
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */
  text-align: center;
}
h3 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  /* or 129% */
  text-align: center;
}
.selected-btn {
  background-color: #114489;
  color: #FFFFFF;
}
.unselected-btn {
  background: #E5E5E5;
  color: #C4C4C4;
}
.unselected-h3 {
  color: #C4C4C4;
}
.select-width {
  width: 250px;
}
</style>