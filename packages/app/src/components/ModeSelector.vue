<template>
  <div>
    <div class="row items-center justify-around" style="margin-top: 20px;">
      <div style="max-width:140px;" class="column justify-center items-center">
        <q-btn
          v-if="isTimedMode"
          @click="setTimedMode"
          round
          size="40px"
          color="primary"
          icon="alarm"
        />
        <q-btn v-else @click="setTimedMode" round size="40px" icon="alarm" />
        <p class="text-center">How long would you like to play for?</p>
      </div>
      <h3>OR</h3>
      <div style="max-width:140px;" class="column justify-center items-center">
        <q-btn
          v-if="isQuestionsMode"
          @click="setQuestionsMode"
          round
          size="40px"
          color="primary"
          icon="help_outline"
        />
        <q-btn v-else @click="setQuestionsMode" round size="40px" icon="help_outline" />
        <p class="text-center">How many question would you like to play?</p>
      </div>
    </div>
    <div class="column" v-if="isTimedMode">
      <p>How long would you like to practice for?</p>
      <q-select
        filled
        v-model="selectedTime"
        :options="timeOptions"
        label="Choose Time"
        class="select-width"
      />
    </div>
    <div class="column" v-if="isQuestionsMode">
      <p>How many questions would you like to practice</p>
      <q-select
        filled
        v-model="selectedQuestionCount"
        :options="questionOptions"
        label="Choose Question"
        class="select-width"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { PracticeMode } from "../engine/models/math_question";
import { PracticeActions, PracticeGetters } from "../store/practice/practice";

export default {
  data() {
    return {
      selectedQuestionCount: 10,
      selectedTime: 1,
      timeOptions: [
        { label: "1 minute", value: 1 },
        { label: "3 minutes", value: 3 },
        { label: "5 minutes", value: 5 },
        { label: "8 minutes", value: 8 },
        { label: "10 minutes", value: 10 }
      ],
      questionOptions: [
        { label: "10 questions", value: 10 },
        { label: "20 questions", value: 20 },
        { label: "25 questions", value: 25 },
        { label: "50 questions", value: 50 },
        { label: "100 questions", value: 100 }
      ]
    };
  },
  mounted() {
    const app: any = this;
    app.selectedTime = Math.round(app.practiceTime / 60);
    app.selectedQuestionCount = app.practiceQuestionCount;
  },
  methods: {
    setTimedMode() {
      this.setPracticeMode(PracticeMode.TIME);
    },
    setQuestionsMode() {
      this.setPracticeMode(PracticeMode.QUESTIONS);
    },
    ...mapActions({
      setPracticeQuestionCount: PracticeActions.SET_PRACTICE_QUESTION_COUNT,
      setPracticeMode: PracticeActions.SET_PRACTICE_MODE,
      setPracticeTime: PracticeActions.SET_PRACTICE_TIME
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
      practiceMode: PracticeGetters.PRACTICE_MODE,
      practiceQuestionCount: PracticeGetters.PRACTICE_QUESTION_COUNT,
      practiceTime: PracticeGetters.PRACTICE_TIME
    })
  },
  watch: {
    selectedQuestionCount(newValue: any) {
      const app: any = this;
      if (typeof newValue.value !== "undefined")
        app.setPracticeQuestionCount(newValue.value);
      else app.setPracticeQuestionCount(newValue);
    },
    selectedTime(newValue: any) {
      const app: any = this;
      if (typeof newValue.value !== "undefined")
        app.setPracticeTime(newValue.value * 60);
      else app.setPracticeTime(newValue * 60);
    }
  }
};
</script>

<style scoped>
h3 {
  margin-block-start: 0px;
  margin-block-end: 0px;
}
.select-width {
  width: 250px;
}
</style>