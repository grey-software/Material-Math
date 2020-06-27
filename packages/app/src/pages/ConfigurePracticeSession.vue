<template>
  <q-page class="body-style">
    <div style="text-align: center;">
      <h2>Configure Your Practice Session</h2>
    </div>
    <!-- Select Concepts  -->
    <div style="subheading-margin">
      <p>Which concepts would you like to practice?</p>
    </div>
    <div class="wrap">
      <span
          v-for="concept in concepts"
          :key="concept.operator"
        >
          <concept-picker-item
            :operator="concept.operator"
          ></concept-picker-item>
        </span>
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
      <router-link style="q-mt-lg" to="/practice">
      <q-btn
        rounded
        color="primary"
        icon-right="right"
        label="Continue"
        class="full-width"
      />
    </router-link>
    </div>
  </q-page>
</template>

<script>
import ConceptPickerItem from "../components/ConceptPickerItem.vue";
import ModeSelector from "../components/ModeSelector.vue";
import DifficultyPicker from "../components/DifficultyPicker.vue";
import { Operator } from "../engine/math_questions/expression/models";

export default {
  data: function() {
    return {
      concepts: {
        "Addition": {
          operator: Operator.Addition,
        },
        "Subtraction": {
          operator: Operator.Subtraction,
        },
        "Multiplication": {
          operator: Operator.Multiplication,
        }
      }
    }
  },
  components: {
    ConceptPickerItem: ConceptPickerItem,
    ModeSelector: ModeSelector,
    DifficultyPicker: DifficultyPicker
  },
};
</script>

<style scoped>
.body-style {
  padding-top: 30px;
  padding-left: 5em;
  padding-right: 5em;
}
</style>