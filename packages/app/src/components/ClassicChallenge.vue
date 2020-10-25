<template>
  <div class="container">
    <challenge-header />
    <div class="challenge-container flex column justify-between align-center">
      <classic-question id="question" :question="question" />
      <classic-input />
    </div>
  </div>
</template>

<script lang="ts">
import ClassicInput from "./ClassicInput.vue";
import ClassicQuestion from "./ClassicQuestion.vue";
import ChallengeStreak from "./ChallengeStreak.vue";
import ChallengeHeader from "./ChallengeHeader.vue";
import {
  PracticeActions,
  PracticeGetters,
  PracticeOptions
} from "../store/practice/practice";
import { Operator } from "../engine/math_questions/expression/models";
import { ChallengeType } from "../engine/models/math_question";
import { mapActions, mapGetters } from "vuex";
import Vue from "vue";

export default Vue.extend({
  components: {
    ClassicInput,
    ClassicQuestion,
    ChallengeStreak,
    ChallengeHeader
  },
  props: {
    challengeTypes: Array as () => Array<ChallengeType>,
    operators: Array as () => Array<Operator>,
    difficulty: String
  },
  mounted() {
    this.initializePractice({
      operators: this.operators,
      difficulty: this.difficulty,
      challengeTypes: this.challengeTypes
    } as PracticeOptions);
    this.newQuestion();
  },
  methods: {
    ...mapActions({
      newQuestion: PracticeActions.NEW_QUESTION,
      initializePractice: PracticeActions.INIT
    }),
    myProperty(): boolean {
      // <- Here
      return true;
    }
  },
  computed: {
    ...mapGetters({
      question: PracticeGetters.QUESTION_LATEX,
      practiceSessionActive: PracticeGetters.PRACTICE_SESSION_ACTIVE
    })
  },
  watch: {
    practiceSessionActive(newValue) {
      if (newValue == false) this.$router.push("/");
    }
  }
});
</script>

<style scoped>
.container {
  width: 420px;
  background-color: #114489;
}

#question {
  margin-bottom: 72px;
  max-height: 72px;
}

#input {
  flex: auto;
}

@media (max-width: 599px) {
  .container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #114489;
    justify-content: space-between;
  }
}
</style>
