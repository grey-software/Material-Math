<template>
  <div>
    <div
      class="container centered-container"
      justify-around
      style="margin-top: 20px;"
    >
      <div
        style="max-width:140px;"
        class="container column-container centered-container"
      >
        <q-btn
          v-if="isTimedMode"
          @click="setTimedMode"
          round
          size="40px"
          color="primary"
          icon="alarm"
        />
        <q-btn
          v-else
          @click="setTimedMode"
          round
          size="40px"
          icon="alarm"
        />
        <p style="text-align:center;">How long would you like to play for?</p>
      </div>
      <h3>OR</h3>
      <div
        style="max-width:140px;"
        class="container column-container centered-container"
      >
        <q-btn
          v-if="isQuestionsMode"
          @click="setQuestionsMode"
          round
          size="40px"
          color="primary"
          icon="help_outline"
        />
        <q-btn
          v-else
          @click="setQuestionsMode"
          round
          size="40px"
          icon="help_outline"
        />
        <p style="text-align:center;">How many question would you like to play?</p>
      </div>
    </div>
    <div
      class="conatiner"
      v-if="isTimedMode"
    >
      <p>How long would you like to practice for?</p>
      <q-select
        filled
        v-model="selectedTime"
        :options="timeOptions"
        label="Choose Time"
        style="width: 250px"
      />
      <!-- <q-btn-dropdown rounded label="Select Time">
                <q-list>
                    <q-item v-for="(time, index) in timeOptions" :key="index" clickable v-close-popup>
                    <q-item-section>
                        <q-item-label @click="setTime(time)">{{time}} minutes</q-item-label>
                    </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown> -->
    </div>
    <div
      class="conatiner"
      v-if="isQuestionsMode"
    >
      <p>How many questions would you like to practice</p>
      <q-select
        filled
        v-model="selectedQuestionCount"
        :options="questionOptions"
        label="Choose Question"
        style="width: 250px"
      />
      <!-- <q-btn-dropdown rounded label="Select Questions">
                <q-list>
                    <q-item v-for="(question, index) in questionOptions" :key="index" clickable v-close-popup>
                    <q-item-section>
                        <q-item-label @click="setQuestionCount(question)">{{question}} questions</q-item-label>
                    </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown> -->
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
          { label: "10 minute", value: 10 }, 
          { label: "20 minutes", value: 20 }, 
          { label: "25 minutes", value: 25 }, 
          { label: "50 minutes", value: 50 }, 
          { label: "100 minutes", value: 100 }
        ]
    };
  },
  mounted() {
    this.selectedTime = Math.round(this.practiceTime / 60);
    this.selectedQuestionCount = this.practiceQuestionCount;
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
      return this.practiceMode === PracticeMode.QUESTIONS;
    },
    isTimedMode() {
      return this.practiceMode === PracticeMode.TIME;
    },
    ...mapGetters({
      practiceMode: PracticeGetters.PRACTICE_MODE,
      practiceQuestionCount: PracticeGetters.PRACTICE_QUESTION_COUNT,
      practiceTime: PracticeGetters.PRACTICE_TIME
    })
  },
  watch: {
    selectedQuestionCount(newValue) {
      if (typeof newValue.value !== 'undefined')
        this.setPracticeQuestionCount(newValue.value);
      else
        this.setPracticeQuestionCount(newValue)
    },
    selectedTime(newValue) {
      if (typeof newValue.value !== 'undefined')
        this.setPracticeTime(newValue.value * 60);
      else
        this.setPracticeTime(newValue * 60);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
}
.centered-container {
  justify-content: space-around;
  align-items: center;
}
.column-container {
  flex-direction: column;
}
h3 {
  margin-block-start: 0px;
  margin-block-end: 0px;
}
</style>