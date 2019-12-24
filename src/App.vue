<template>
  <v-app>
    <classic-challenge
        :operators="operators"
        :difficulty="difficulty"
        :challengeTypes="challengeTypes"
    />
  </v-app>
</template>

<script>
  import ClassicChallenge from "./components/ClassicChallenge";
  import {Operator} from "@/engine/math_questions/expression/models";
  import {Difficulty, ChallengeType} from "@/engine/models/math_question";

  export default {
    name: "App",
    components: {
      ClassicChallenge
    },
    data() {
      return {
        operators: [
          Operator.Addition,
          Operator.Subtraction,
          Operator.Mutliplication
        ],
        difficulty: Difficulty.Normal,
        challengeTypes: [ChallengeType.Expression]
      };
    }
  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Montserrat");

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
</style>

