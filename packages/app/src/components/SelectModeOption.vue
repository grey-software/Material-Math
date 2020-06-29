<template>
  <div style="height:75vh" class="column justify-center items-center">
    <h1>How long would you like to practice for?</h1>
    <q-select
      v-if="isTimedMode"
      filled
      v-model="selectedTime"
      :options="timeOptions"
      class="select-width"
    />
    <q-select
      v-else
      filled
      v-model="selectedQuestionCount"
      :options="questionOptions"
      class="select-width"
    />
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
  methods: {
    ...mapActions({
      setPracticeQuestionCount: PracticeActions.SET_PRACTICE_QUESTION_COUNT,
      setPracticeTime: PracticeActions.SET_PRACTICE_TIME
    })
  },
  computed: {
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
    },
    selectedTime(newValue: any) {
      const app: any = this;
      if (typeof newValue.value !== "undefined")
        app.setPracticeTime(newValue.value * 60);
    }
  }
};
</script>

<style>
h1 {
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */

  text-align: center;
}
</style>