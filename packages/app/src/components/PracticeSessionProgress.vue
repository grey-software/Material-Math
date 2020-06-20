<template>
  <div>
    <span class="text-challenge-header row items-center" v-if="practiceMode == 'time'">
      <q-icon name="mdi-clock" class="icon-challenge-header q-mr-xs" />
      {{ practiceTime }}
    </span>
    <span class="text-challenge-header row items-center" v-else>
      <q-icon name="mdi-format-list-checkbox" class="icon-challenge-header q-mr-xs" />
      {{practiceCorrectQuestionCount}} / {{ practiceQuestionCount }}
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
      practiceCorrectQuestionCount:
        PracticeGetters.PRACTICE_CORRECT_QUESTION_COUNT
    })
  }
};
</script>

<style scoped>
</style>