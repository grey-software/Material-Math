<template>
  <div>
    <span class="text-challenge-header row items-center" v-if="practiceMode == 'time'">
      <q-icon name="mdi-clock" class="icon-challenge-header q-mr-xs" />
      <span id="practice-time-left">{{ practiceTimeLeft }}</span>
    </span>
    <span class="text-challenge-header row items-center" v-else>
      <q-icon name="mdi-format-list-checkbox" class="icon-challenge-header q-mr-xs" />
      <span id="practice-questions-progress">{{practiceCorrectQuestionCount}} / {{ practiceQuestionCount }} </span>
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { PracticeGetters } from "../store/practice/practice";

export default {
  computed: {
    ...mapGetters({
      practiceMode: PracticeGetters.PRACTICE_MODE,
      practiceQuestionCount: PracticeGetters.PRACTICE_QUESTION_COUNT,
      practiceTime: PracticeGetters.PRACTICE_TIME,
      practiceTimeLeft: PracticeGetters.PRACTICE_TIME_LEFT,
      practiceCorrectQuestionCount:
        PracticeGetters.PRACTICE_CORRECT_QUESTION_COUNT,
    })
  }
};
</script>

<style scoped>
#practice-time-left {
  width: 48px;
}
</style>