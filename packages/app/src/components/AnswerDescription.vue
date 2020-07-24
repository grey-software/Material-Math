<template>
  <div class="container q-mb-md">
    <div class="col question-container">
      <div class="question-text">{{ question.question }}</div>
      <div class="answer-text">
        Given Answer: {{ question.answer }}
        <br />
        Correct Answer: {{ question.correctAnswer }}
      </div>
    </div>
    <div class="col correctness-display">
      <!-- <img v-if="skipped" src="../public/img/loading.svg" class="img-container" />
      <img v-if="correct" src="../public/img/tick.svg" class="img-container" />
      <img v-if="!correct" src="../public/img/close.svg" class="img-container" /> -->
    </div>
  </div>
</template>

<script>
import { QuestionReport } from "../store/practice/models";
import { boolean } from "mathjs";
export default {
  props: {
    question: {
      type: QuestionReport,
      required: true,
    }
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 98px;
  border-radius: 10px;
  box-shadow: -2px 0px 2px 2px #767676;
  background: #ffffff;
}
.question-text {
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  /* identical to box height, or 178% */
  color: #767676;
  margin: 0 0 25px;
}
.answer-text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  /* or 180% */
  color: #767676;
  bottom: -10px;
}
.img-container {
  height: 50px;
  width: 50px;
}
.question-container {
  width: 80%;
  margin-left: 20px;
}
</style>