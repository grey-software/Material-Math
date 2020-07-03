<template>
  <q-page class="container">
    <div style="text-align: center;">
      <h2>Configure Your Practice Session</h2>
    </div>
    <!-- Select Concepts  -->
    <div style="subheading-margin">
      <h6>What would you like to practice?</h6>
    </div>
    <div class="justify-center"></div>
    <div class="justify-around row wrap">
      <concept-picker />
    </div>
    <!-- Select Mode -->
    <div style="subheading-margin">
      <p>Choose Mode</p>
    </div>
    <mode-selector />
    <!-- Select Difficulty -->
    <div style="subheading-margin">
      <p>Set Difficulty</p>
    </div>
    <difficulty-picker />
    <!-- Continue Button -->
    <div style="margin-top: 40px">
      <q-btn
        rounded
        color="primary"
        icon-right="right"
        label="Continue"
        class="full-width"
        @click="getToPracticeSession"
      />
    </div>
  </q-page>
</template>

<script>
import ConceptPicker from "../components/ConceptPicker.vue";
import ModeSelector from "../components/ModeSelector.vue";
import DifficultyPicker from "../components/DifficultyPicker.vue";
import { Operator } from "../engine/math_questions/expression/models";

export default {
  methods: {
    getToPracticeSession($event) {
      this.$router.push("/");
    }
  },
  components: {
    ConceptPicker: ConceptPicker,
    ModeSelector: ModeSelector,
    DifficultyPicker: DifficultyPicker
  }
};
</script>

<style scoped>
.container {
  padding-top: 30px;
  padding-left: 3em;
  padding-right: 3em;
}
h6 {
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
}
</style>