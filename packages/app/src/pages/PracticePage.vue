<template>
  <q-page class="mobile-container full-width row items-center justify-evenly">
      <classic-challenge
        v-show="!showingFeedback"
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
import { PracticeGetters, PracticeActions } from '../store/practice/practice';
import { mapState, mapActions } from 'vuex';

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
  beforeDestroy () {
    const app: any = this
    app.finishPracticeSession();
  },
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

.fading-out {
    -webkit-animation: fadeout .1s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadeout .1s; /* Firefox < 16 */
        -ms-animation: fadeout .1s; /* Internet Explorer */
         -o-animation: fadeout .1s; /* Opera < 12.1 */
            animation: fadeout .1s;
}

@keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
}

/* Firefox < 16 */
@-moz-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
}

/* Internet Explorer */
@-ms-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
}

/* Opera < 12.1 */
@-o-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
}
</style>
