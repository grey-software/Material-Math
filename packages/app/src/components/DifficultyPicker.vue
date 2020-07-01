<template>
  <div style="height:75vh" class="flex column justify-center items-center">
    <h1>Pick your difficulty</h1>
    <div class="flex justify-around">
      <div class="flex column items-center container-width" @click="setDifficulty('basic')">
        <svg
          width="56"
          height="32"
          viewBox="0 0 56 32"
          class="difficulty-icon"
          :class="{'selected-difficulty-icon': isBasic}"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="12" y="12" width="32" height="8"  />
          <rect x="12" y="12" width="32" height="8"  />
          <rect width="8" height="32"  />
          <rect x="48" width="8" height="32" />
        </svg>

        <h6 class="unselected-txt" :class="{'selected-txt': isBasic}">Basic</h6>
      </div>
      <div class="flex column items-center container-width" @click="setDifficulty('normal')">
        <div class="flex justify-center items-center">
          <div class="medium-vertical-bar unselected-color" :class="{'selected-color': isNormal}" />
          <div class="easy-vertical-bar unselected-color" :class="{'selected-color': isNormal}" />
          <div class="horizontal-bar unselected-color" :class="{'selected-color': isNormal}" />
          <div class="easy-vertical-bar unselected-color" :class="{'selected-color': isNormal}" />
          <div class="medium-vertical-bar unselected-color" :class="{'selected-color': isNormal}" />
        </div>
        <h6 class="unselected-txt" :class="{'selected-txt': isNormal}">Normal</h6>
      </div>
      <div class="flex column items-center container-width" @click="setDifficulty('advanced')">
        <div class="flex justify-center items-center">
          <div class="hard-vertical-bar unselected-color" :class="{'selected-color': isAdvanced}" />
          <div class="medium-vertical-bar unselected-color" :class="{'selected-color': isAdvanced}" />
          <div class="easy-vertical-bar unselected-color" :class="{'selected-color': isAdvanced}" />
          <div class="horizontal-bar unselected-color" :class="{'selected-color': isAdvanced}" />
          <div class="easy-vertical-bar unselected-color" :class="{'selected-color': isAdvanced}" />
          <div class="medium-vertical-bar unselected-color" :class="{'selected-color': isAdvanced}" />
          <div class="hard-vertical-bar unselected-color" :class="{'selected-color': isAdvanced}" />
        </div>
        <h6 class="unselected-txt" :class="{'selected-txt': isAdvanced}">Advanced</h6>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Difficulty } from "../engine/models/math_question";
import { mapGetters, mapActions } from "vuex";
import { PracticeGetters, PracticeActions } from "../store/practice/practice";

export default {
  computed: {
    ...mapGetters({ difficulty: PracticeGetters.DIFFICULTY }),
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
  },
  methods: {
    ...mapActions({ setDifficulty: PracticeActions.SET_DIFFICULTY })
  }
};
</script>

<style scoped>
.difficulty-icon {
  transition: fill 0.2s ease-out;
  fill: #C4C4C4;
}

.selected-difficulty-icon {
  fill: #114489;
}

.horizontal-bar {
  min-width: 80px;
  min-height: 10px;
  max-width: 80px;
  max-height: 10px;
  margin: 5px;
}
.easy-vertical-bar {
  min-width: 10px;
  min-height: 60px;
  max-width: 10px;
  max-height: 60px;
}
.medium-vertical-bar {
  min-width: 10px;
  min-height: 40px;
  max-width: 10px;
  max-height: 40px;
  margin: 3px;
}
.hard-vertical-bar {
  min-width: 10px;
  min-height: 20px;
  max-width: 10px;
  max-height: 20px;
}
h6 {
  margin: 0px;
  margin-top: 5px;
}
.container-width {
  min-width: 160px;
}
.unselected-color {
  background-color: #e5e5e5;
}
.selected-color {
  background-color: #114489;
}
.unselected-txt {
  color: #e5e5e5;
}
.selected-txt {
  color: #114489;
}
</style>