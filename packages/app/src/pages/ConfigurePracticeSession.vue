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
import ConceptPickerItem from "../components/ConceptPickerItem.vue";
import ModeSelector from "../components/ModeSelector.vue";
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
  methods: {
    getToPracticeSession($event) {
      this.$router.push("/");
    }
  },
  components: {
    ConceptPickerItem: ConceptPickerItem,
    ModeSelector: ModeSelector
  },
};
</script>

<style scoped>
.body-style {
  padding-top: 30px;
  padding-left: 10em;
  padding-right: 10em;
}
</style>