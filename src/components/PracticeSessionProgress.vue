<template>
  <div>
    <span class="text-challenge-header row items-center" v-if="practiceMode == 'time'">
      <q-icon name="mdi-clock" class="icon-challenge-header q-mr-sm" />
      <span id="practice-time-left">{{ getFormattedTime }}</span>
    </span>
    <span class="text-challenge-header row items-center" v-else>
      <q-icon name="mdi-format-list-checkbox" class="icon-challenge-header q-mr-sm" />
      <span
        id="practice-questions-progress"
      >{{practiceCorrectQuestionCount}} / {{ practiceQuestionCount }}</span>
    </span>
  </div>
</template>

<script lang="ts">
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
        PracticeGetters.PRACTICE_CORRECT_QUESTION_COUNT
    }),
    getFormattedTime() {
      const app: any = this;
      const mins = Math.floor(parseInt(app.practiceTimeLeft) / 60);
      const secs = Math.floor(parseInt(app.practiceTimeLeft) % 60);
      if (secs < 10) return mins + ":0" + secs;
      return mins + ":" + secs;
    }
  }
};
</script>

<style scoped>
#practice-time-left {
  width: 48px;
}
</style>