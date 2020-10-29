<template>
  <q-page class="mobile-container">
    <div class="config-header" />
    <div class="column full-viewport-height q-pb-lg">
      <div class="row config-header-label">
        <span class="q-mr-lg">Hello there!</span>
        <a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VEAGAZP7DHJNE&source=url"><button class="paypal-button" ><img
            class="paypal-icon"
            src="https://assets.codepen.io/853141/paypal.png"
          />Donate</button></a>
      </div>
      <div class="config-customize-practice row justify-center">
        <customize-practice-card />
      </div>
      <concept-picker />
      <q-space />
      <div class="row justify-center">
        <router-link
          style="q-mt-lg"
          to="/practice"
        >
          <action-button label="Play" />
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import ConceptPicker from "../components/ConceptPicker.vue";
import CustomizePracticeCard from "../components/CustomizePracticeCard.vue";
import ActionButton from "../components/ActionButton.vue";
import { Operator } from "../engine/math_questions/expression/models";

export default {
  components: {
    ConceptPicker,
    ActionButton,
    CustomizePracticeCard,
  },
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
.paypal-icon {
  height: 28px;
  margin-right: 8px;
}

.paypal-button {
  border-radius: 24px;
  height: 48px;
  border: 1px solid #003084;
  outline: none;
  display: flex;
  align-items: center;
  padding: 2px 20px;
  color: #003084;
  font-size: 20px;
  background-color: white;
  transition: all 0.3s ease-out;
}

.paypal-button:hover {
  cursor: pointer;
  border: 1px solid #1ba0de;
}

.paypal-button:active {
  cursor: pointer;
  border: 1px solid #1ba0de;
  color: white;
  background-color: #003084;
}
</style>