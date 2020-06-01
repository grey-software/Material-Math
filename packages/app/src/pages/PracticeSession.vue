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
import { mapState } from 'vuex';

export default {
  name: "PracticeSession",
  components: { ClassicChallenge },
  data() {
    return {
      challengeTypes: [ChallengeType.Expression]
    };
  },
  computed: {
    ...mapState([
      'operators',
      'difficulty'
    ])
  },

};
</script>
