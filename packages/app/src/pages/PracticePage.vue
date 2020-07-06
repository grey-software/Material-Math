<template>
  <q-page class="row items-center justify-evenly">
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
      difficulty: PracticeGetters.DIFFICULTY
    })
  },
  beforeDestroy () {
    const app: any = this
    app.finishPracticeSession();
  },
};
</script>

<style>

</style>
