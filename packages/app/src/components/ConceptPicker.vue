<template>
  <div class="justify-around col wrap">
    <div style="margin:40px;" class="justify-between row nowrap">
<<<<<<< HEAD
        <q-btn flat color="primary" @click="selectAll" label="Select All" />
        <q-btn flat color="primary" @click="reset" label="Reset" />
    </div>
    <div class="justify-around row wrap">
    <span v-for="concept in concepts" :key="concept.operator">
      <concept-picker-button :operator="concept.operator" :icon="concept.icon" />
    </span>
=======
      <q-btn flat color="primary" @click="selectAllConcepts" label="Select All" />
      <q-btn flat color="primary" @click="resetConcepts" label="Reset" />
    </div>
    <div class="justify-around row wrap">
      <span v-for="concept in concepts" :key="concept.operator">
        <concept-picker-button :operator="concept.operator" :icon="concept.icon" />
      </span>
>>>>>>> master
    </div>
  </div>
</template>

<script lang="ts">
import ConceptPickerButton from "../components/ConceptPickerButton.vue";
<<<<<<< HEAD
import { mapMutations, mapActions } from "vuex";
import { Operator } from "../engine/math_questions/expression/models";
import { PracticeGetters } from "../store/practice/practice";
=======
import { mapActions } from "vuex";
import { Operator } from "../engine/math_questions/expression/models";
import { PracticeGetters, PracticeActions } from "../store/practice/practice";
>>>>>>> master

export default {
  data: function() {
    return {
      concepts: {
        Addition: {
          operator: Operator.Addition,
          icon: "add"
        },
        Subtraction: {
          operator: Operator.Subtraction,
          icon: "remove"
        },
        Multiplication: {
          operator: Operator.Multiplication,
          icon: "close"
        }
      }
    };
  },
  components: {
<<<<<<< HEAD
    ConceptPickerButton: ConceptPickerButton,
  },
  methods: {
      ...mapMutations(["setOperatorEnabled", "setOperatorDisabled"]),
      ...mapActions(["selectAll", "reset"])
=======
    ConceptPickerButton: ConceptPickerButton
  },
  methods: {
    ...mapActions({
      selectAllConcepts: PracticeActions.SELECT_ALL_CONCEPTS,
      resetConcepts: PracticeActions.RESET_CONCPETS
    })
>>>>>>> master
  }
};
</script>

<style>
</style>