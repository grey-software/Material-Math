<template>
<q-card id="this-card">
  <q-btn
    id="customize-btn"
    color="white"
    size="20px"
    round
    icon="settings"
    to="/customize"
  >
    <q-tooltip
      anchor="bottom middle"
      self="top middle"
      :offset="[10, 10]"
      content-class="bg-primary"
      content-style="font-size: 16px"
    >
      Customize Session
    </q-tooltip>
  </q-btn>
  <q-card-section class="q-pb-none">
    <div class="header">Your Practice Session</div>
  </q-card-section>
  <q-card-section>
    <div class="row justify-around no-wrap" id="content">
      <div class="col-auto">
        <template v-if="isTimed">
          <q-icon size="72px" class="icon" name="alarm" large />
          <div class="label">Timed Practice</div>
        </template>
        <template v-else>
          <q-icon size="72px" class="icon" name="help_outline" large/>
          <div class="label">Math Worksheet</div>
        </template>
      </div>
      <div class="col-auto">
        <template v-if="isTimed">
          <div class="icon">{{timeInMins}}</div>
          <div class="label">Minutes</div>
        </template>
        <template v-else>
          <div class="icon">{{practiceQuestionCount}}</div>
          <div class="label">Questions</div>
        </template>
      </div>
      <div class="col-auto">
        <template v-if="isBasic">
          <BasicIcon style="display:block"/>
          <div class="label">Basic</div>
        </template>
        <template v-if="isNormal">
          <NormalIcon style="display:block"/>
          <div class="label">Normal</div>
        </template>
        <template v-if="isAdvanced">
          <AdvancedIcon style="display:block"/>
          <div class="label">Advanced</div>
        </template>
      </div>
    </div>
  </q-card-section>
</q-card>
</template>

<script lang="ts">
import { PracticeGetters, PracticeActions } from "../store/practice/practice";
import { mapGetters, mapActions } from "vuex";
import { PracticeMode, Difficulty } from "../engine/models/math_question";

import BasicIcon from "../assets/difficulty-icons/basic.svg"
import NormalIcon from "../assets/difficulty-icons/normal.svg"
import AdvancedIcon from "../assets/difficulty-icons/advanced.svg"

export default {
  components: {
    BasicIcon,
    NormalIcon,
    AdvancedIcon,
  },
  computed: {
    ...mapGetters({
      practiceMode: PracticeGetters.PRACTICE_MODE,
      practiceTime: PracticeGetters.PRACTICE_TIME,
      practiceQuestionCount: PracticeGetters.PRACTICE_QUESTION_COUNT,
      difficulty: PracticeGetters.DIFFICULTY,
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
#this-card {
  width: 85%;
  max-width: 320px;
  height: auto;
  border-radius: 32px;
  line-height: 1;
  align-content: flex-start;
}

#customize-btn {
  position: absolute;
  left: 90%;
  top: -20%;
  z-index: 4;
  color: #114489 !important;
}

#content {
  width: 100%;
  text-align: center;
}

.header {
  color: #4f4f4f;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
}

.label {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  vertical-align: top;
  color: #4f4f4f;
}

.icon {
  width: 72px;
  height: 72px;
  font-size: 72px;
  color: #114489;
  fill: #114489;
}

.practice-customization-columns {
  max-width: 343px;
}
.practice-customization-container {
  position: absolute;
}
</style>
