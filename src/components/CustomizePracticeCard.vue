<template>
  <div class="container">
    <router-link id="customize-practice" to="/customize">
      <q-btn
        color="white"
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
          <q-icon v-if="isTimed" size="72px" class="icon q-mb-sm" name="alarm" large />
          <q-icon v-else size="72px" class="icon q-mb-sm" name="help_outline" large />
          <div class="practice-customization-label" v-if="isTimed">Timed Practice</div>
          <div class="practice-customization-label" v-else>Math Worksheet</div>
        </div>
        <!-- Value Descriptor -->
        <div class="practice-customization column justify-center items-center">
          <div
            v-if="isTimed"
            class="practice-customization-value icon q-mb-sm"
          >{{timeInMins}}</div>
          <div
            v-else
            class="practice-customization-value icon q-mb-sm"
          >{{practiceQuestionCount}}</div>
          <div v-if="isTimed" class="practice-customization-label">Minutes</div>
          <div v-else class="practice-customization-label">Questions</div>
        </div>
        <div class="practice-customization column justify-center">
          <div v-if="isBasic" class="flex column">
            <BasicDiffIcon/>
            <div class="practice-customization-label">Basic</div>
          </div>
          <div v-if="isNormal" class="flex column">
            <NormalDiffIcon/>
            <div class="practice-customization-label">Normal</div>
          </div>
          <div v-if="isAdvanced" class="flex column">
            <AdvancedDiffIcon/>
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

import BasicDiffIcon from "../assets/difficulty_icons/basic.svg"
import NormalDiffIcon from "../assets/difficulty_icons/normal.svg"
import AdvancedDiffIcon from "../assets/difficulty_icons/advanced.svg"

export default {
  props: {
    icon: {
      default: null
    }
  },
  components: {
    BasicDiffIcon,
    NormalDiffIcon,
    AdvancedDiffIcon,
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

.icon {
  color: #114489;
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
  color: #114489 !important;
}

.practice-customization {
  height: 116px;
}
</style>
