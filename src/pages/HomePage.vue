<template>
  <q-page class="mobile-container">
    <div class="home-bubble" />
    <div class="column full-viewport-height q-pb-lg">
      <div class="home-header row items-center justify-between">
        <span class="config-header-label">Hello there!</span>
        <donation-dialog />
      </div>
      <customize-practice-card class="self-center"/>
      <concept-picker />
      <q-space />
      <div class="row justify-center">
        <router-link style="q-mt-lg" to="/practice">
          <action-button label="Play" icon="mdi-play-circle-outline" />
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import ConceptPicker from "../components/ConceptPicker.vue";
import ActionButton from "../components/ActionButton.vue";
import DonationDialog from "../components/DonationDialog.vue";
import { Operator } from "../engine/math_questions/expression/models";
import CustomizePracticeCard from "../components/CustomizePracticeCard.vue"

export default {
  components: {
    ConceptPicker,
    ActionButton,
    CustomizePracticeCard,
    DonationDialog,
  },
};
</script>

<style>
.home-bubble {
  width: 140%;
  height: 384px;
  background: linear-gradient(0deg, #2f80ed, #2f80ed), #2f80ed;
  border-radius: 192px;
  margin-top: -192px;
  position: absolute;
  margin-left: -20%;
}

.home-header {
  padding: 6% 10% 0 10%;
  color: white;
  margin-bottom: 36px;
}

.config-header-label {
  font-size: 32px;
  font-family: "Montserrat", sans-serif;
  z-index: 1;
}

.mobile-container {
  width: 420px;
  max-height: 85%;
  display: flex;
  flex-direction: column;
}

@media (max-width: 599px) {
  .mobile-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
