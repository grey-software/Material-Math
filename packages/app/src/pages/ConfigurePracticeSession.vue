<template>
  <q-page>
    <div class="config-header">
    </div>
    <span class="config-header-label">Hello there!</span>
    <div class="config-customize-practice row justify-center">
      <customize-practice-card />
    </div>
    <concept-picker />
    <div class="row justify-center">
      <router-link style="q-mt-lg" to="/practice">
        <action-button label="Play"/>
      </router-link>
    </div>
  </q-page>
</template>

<script lang="ts">
import ConceptPicker from "../components/ConceptPicker.vue";
import ModeSelector from "../components/ModeSelector.vue";
import CustomizePracticeCard from "../components/CustomizePracticeCard.vue";
import ActionButton from "../components/ActionButton.vue";
import DifficultyPicker from "../components/DifficultyPicker.vue";
import { Operator } from "../engine/math_questions/expression/models";

export default {
  components: {
    ConceptPicker,
    ModeSelector,
    DifficultyPicker,
    ActionButton, 
    CustomizePracticeCard
  }
};
</script>

<style>
.config-header {
  width: 140%;
  height: 384px;
  background: linear-gradient(0deg, #2f80ed, #2f80ed), #2f80ed;
  border-radius: 192px;
  margin-top: -192px;
  position: absolute;
  margin-left: -20%;
}

.config-header-label {
  color: white;
  font-size: 32px;
  left: 36px;
  font-family: "Montserrat", sans-serif;
  top: 24px;
  z-index: 1;
  position: relative;
}

.config-customize-practice {
  margin-top: 42px;
  z-index: 1;

}
</style>
