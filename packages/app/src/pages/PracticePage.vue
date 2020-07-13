<template>
  <q-page class="mobile-container full-width row justify-evenly items-center">
    <transition name="fade">
      <div v-show="showingFeedback" class="feedback-container">
        <div v-if="practiceLastQuestionCorrect" class="feedback-container correct-feedback"></div>
        <div v-else class="feedback-container incorrect-feedback"></div>
      </div>
    </transition>
    <classic-challenge
      :operators="operators"
      :difficulty="difficulty"
      :challengeTypes="challengeTypes"
    />
  </q-page>
</template>

<script lang="ts">
import ClassicChallenge from "../components/ClassicChallenge.vue";
import { Operator } from "../engine/math_questions/expression/models";
import { Difficulty, ChallengeType } from "../engine/models/math_question";
import { PracticeGetters, PracticeActions } from "../store/practice/practice";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "practice",
  components: {
    ClassicChallenge
  },
  data() {
    return {
      challengeTypes: [ChallengeType.Expression]
    };
  },
  methods: {
    ...mapActions({
      finishPracticeSession: PracticeActions.FINISH_PRACTICE_SESSION
    })
  },
  computed: {
    ...mapGetters({
      operators: PracticeGetters.OPERATORS,
      difficulty: PracticeGetters.DIFFICULTY,
      showingFeedback: PracticeGetters.SHOWING_FEEDBACK,
      practiceLastQuestionCorrect:
        PracticeGetters.PRACTICE_LAST_QUESTION_CORRECT
    })
  },
  beforeDestroy() {
    const app: any = this;
    app.finishPracticeSession();
  }
};
</script>

<style>
.feedback-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
}

.mobile-container {
  width: 420px;
  max-height: 85%;
  display: flex;
  flex-direction: column;
}

@media (max-width: 599px) {
  .mobile-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.incorrect-feedback {
  opacity: 0.72;
  background: #e74c3c;
}

.correct-feedback {
  opacity: 0.72;
  background: #2ecc71;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
