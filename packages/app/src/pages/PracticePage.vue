<template>
  <q-page class="mobile-container full-width row items-center justify-evenly">
    <transition name="fade">
      <div v-if="showingFeedback" class="mobile-container full-width animation-container" />
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
import { mapGetters } from "vuex";
import { PracticeGetters, PracticeActions } from "../store/practice/practice";
import { mapState, mapActions } from "vuex";

export default {
  name: "practice",
  components: { ClassicChallenge },
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
      showingFeedback: PracticeGetters.SHOWING_FEEDBACK
    })
  },
  beforeDestroy() {
    const app: any = this;
    app.finishPracticeSession();
  }
};
</script>

<style>
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

.animation-container {
  /* position: absolute; */
  opacity: 0.72;
  background: #e74c3c;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
