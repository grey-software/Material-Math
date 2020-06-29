<template>
  <q-page>
    <q-stepper flat v-model="step" ref="stepper" contracted color="primary" animated>
      <q-step title="Mode Selector" :name="1" :done="step > 1">
        <mode-selector />
      </q-step>

      <q-step
        :name="2"
        title="Time and Question Chooser"
        caption="Optional"
        :done="step > 2"
      >
        <select-mode-option />
      </q-step>

      <q-step :name="3" title="Difficulty Picker">
        <difficulty-picker />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation class="justify-center">
          <q-btn
            class="full-width"
            rounded
            @click="$refs.stepper.next()"
            color="primary"
            :label="step === 3 ? 'Done' : 'Next'"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </q-page>
</template>

<script>
import ModeSelector from "../components/ModeSelector.vue"
import SelectModeOption from "../components/SelectModeOption.vue"
import DifficultyPicker from "../components/DifficultyPicker.vue"

export default {
  data() {
    return {
      step: 1
    };
  },
  components: {
      ModeSelector,
      SelectModeOption,
      DifficultyPicker
  }
};
</script>

<style>
</style>