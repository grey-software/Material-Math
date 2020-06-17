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
import { PracticeGetters } from '../store/practice/practice';
import { mapState } from 'vuex';

export default {
  name: "PageIndex",
  components: { ClassicChallenge },
  data() {
    return {
      challengeTypes: [ChallengeType.Expression]
    };
  },
  computed: {
    ...mapGetters({
      operators: PracticeGetters.OPERATORS,
      difficulty: PracticeGetters.DIFFICULTY
    })
  }
};
</script>
