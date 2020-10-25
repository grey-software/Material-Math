<template>
  <div class="container">
    <router-link id="customize-practice" to="/customize">
      <q-btn
        color="primary"
        id="btn-customize-practice"
        size="20px"
        round
        text-color="white"
        icon="settings"
        >
      <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]" content-class="bg-primary" content-style="font-size: 16px">
        Customize Session
      </q-tooltip>
      </q-btn>
    </router-link>
    <!-- Header -->
    <div class="practice-customization-container column full-width">
      <div class="customize-practice-label">Your Practice Session</div>
      <!-- Centered Flex container for 3 columns -->
      <div class="practice-customization-columns row justify-evenly">
        <!-- Mode Descriptor -->
        <div class="practice-customization column justify-center items-center">
          <q-icon v-if="isTimed" size="72px" class="icon-display-color q-mb-sm" name="alarm" large />
          <q-icon v-else size="72px" class="icon-display-color q-mb-sm" name="help_outline" large />
          <div class="practice-customization-label" v-if="isTimed">Timed Practice</div>
          <div class="practice-customization-label" v-else>Math Worksheet</div>
        </div>
        <!-- Value Descriptor -->
        <div class="practice-customization column justify-center items-center">
          <div
            v-if="isTimed"
            class="practice-customization-value icon-display-color q-mb-sm"
          >{{timeInMins}}</div>
          <div
            v-else
            class="practice-customization-value icon-display-color q-mb-sm"
          >{{practiceQuestionCount}}</div>
          <div v-if="isTimed" class="practice-customization-label">Minutes</div>
          <div v-else class="practice-customization-label">Questions</div>
        </div>
        <div class="practice-customization column justify-center">
          <div v-if="isBasic" class="flex column">
            <svg
              width="56"
              height="77"
              viewBox="0 0 56 32"
              class="icon-display-fill-color"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="12" y="12" width="32" height="8" />
              <rect x="12" y="12" width="32" height="8" />
              <rect width="8" height="32" />
              <rect x="48" width="8" height="32" />
            </svg>

            <div class="practice-customization-label">Basic</div>
          </div>
          <div v-if="isNormal" class="flex column">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="77"
              class="icon-display-fill-color"
              viewBox="0 0 75 31"
            >
              <rect x="19.9082" y="10.4523" width="35.0853" height="9.95261" />
              <rect x="9.38232" y="0.5" width="7.01706" height="29.8578" />
              <rect x="0.926758" y="5.47617" width="7.01706" height="19.9052" />
              <rect x="58.502" y="0.5" width="7.01706" height="29.8578" />
              <rect x="67.5884" y="5.47617" width="7.01706" height="19.9052" />
            </svg>
            <div class="practice-customization-label">Normal</div>
          </div>
          <div v-if="isAdvanced" class="flex column">
            <svg
              width="91"
              height="77"
              class="icon-display-fill-color"
              viewBox="0 0 91 31"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="27.2646" y="10.5" width="35" height="10" />
              <rect x="17.4448" y="0.5" width="7" height="30" />
              <path d="M83.2646 10.5H90.2817V20.4526H83.2646V10.5Z" />
              <rect x="0.264648" y="10.5" width="7" height="10" />
              <rect x="9.26465" y="5.5" width="7" height="20" />
              <rect x="65.2646" y="0.5" width="7" height="30" />
              <rect x="74.2646" y="5.5" width="7" height="20" />
            </svg>
            <div class="practice-customization-label">Advanced</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PracticeGetters, PracticeActions } from "../store/practice/practice";
import { mapGetters, mapActions } from "vuex";
import { PracticeMode, Difficulty } from "../engine/models/math_question";

export default {
  props: {
    icon: {
      default: null
    }
  },
  computed: {
    ...mapGetters({
      practiceMode: PracticeGetters.PRACTICE_MODE,
      practiceTime: PracticeGetters.PRACTICE_TIME,
      practiceQuestionCount: PracticeGetters.PRACTICE_QUESTION_COUNT,
      difficulty: PracticeGetters.DIFFICULTY
    }),
    isTimed() {
      const app: any = this;
      return app.practiceMode === PracticeMode.TIME;
    },
    timeInMins() {
      const app: any = this;
      return Math.floor(app.practiceTime / 60);
    },
    isBasic() {
      const app: any = this;
      return app.difficulty === Difficulty.Basic;
    },
    isNormal() {
      const app: any = this;
      return app.difficulty === Difficulty.Normal;
    },
    isAdvanced() {
      const app: any = this;
      return app.difficulty === Difficulty.Advanced;
    }
  }
};
</script>

<style scoped>
.practice-customization-columns {
  max-width: 343px;
}
.practice-customization-container {
  position: absolute;
}
.customize-practice-label {
  color: #4f4f4f;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  margin: 12px 0 0 24px;
}

.practice-customization-value {
  font-size: 72px;
  line-height: 0.96;
}

.practice-customization-label {
  font-size: 70px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #4f4f4f;
}
.container {
  width: 84%;
  height: 172px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  z-index: 2;
}
.icon-display-color {
  color: #114489;
}
.icon-display-fill-color {
  fill: #114489;
}
#customize-practice {
  position: relative;
  z-index: 3;
  float: right;
  top: -20px;
  left: 12px;
}
#btn-customize-practice {
  z-index: 4;
  color: white !important;
}

.practice-customization {
  height: 116px;
}
</style>