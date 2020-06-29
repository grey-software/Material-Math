<template>
  <div style="height:75vh" class="flex column justify-center items-center">
    <h1>Pick your difficulty</h1>
    <div class="flex justify-around">
      <div class="flex column items-center container-width" @click="setDifficulty('basic')">
        <div class="flex justify-center items-center">
          <div class="easy-vertical-bar unselected-color" :class="{'selected-color': isEasy}" />
          <div class="horizontal-bar unselected-color" :class="{'selected-color': isEasy}" />
          <div class="easy-vertical-bar unselected-color" :class="{'selected-color': isEasy}" />
        </div>
        <h6 class="unselected-txt" :class="{'selected-txt': isEasy}" >Easy</h6>
      </div>
      <div class="flex column items-center container-width" @click="setDifficulty('normal')">
        <div class="flex justify-center items-center">
          <div class="medium-vertical-bar unselected-color" :class="{'selected-color': isMedium}" />
          <div class="easy-vertical-bar unselected-color" :class="{'selected-color': isMedium}" />
          <div class="horizontal-bar unselected-color" :class="{'selected-color': isMedium}" />
          <div class="easy-vertical-bar unselected-color" :class="{'selected-color': isMedium}" />
          <div class="medium-vertical-bar unselected-color" :class="{'selected-color': isMedium}" />
        </div>
        <h6 class="unselected-txt" :class="{'selected-txt': isMedium}" >Medium</h6>
      </div>
      <div class="flex column items-center container-width" @click="setDifficulty('advanced')">
        <div class="flex justify-center items-center">
          <div class="hard-vertical-bar unselected-color" :class="{'selected-color': isHard}" />
          <div class="medium-vertical-bar unselected-color" :class="{'selected-color': isHard}" />
          <div class="easy-vertical-bar unselected-color" :class="{'selected-color': isHard}" />
          <div class="horizontal-bar unselected-color" :class="{'selected-color': isHard}" />
          <div class="easy-vertical-bar unselected-color" :class="{'selected-color': isHard}" />
          <div class="medium-vertical-bar unselected-color" :class="{'selected-color': isHard}" />
          <div class="hard-vertical-bar unselected-color" :class="{'selected-color': isHard}" />
        </div>
        <h6 class="unselected-txt" :class="{'selected-txt': isHard}" >Hard</h6>
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
    isEasy() {
      const app: any = this;
      return app.difficulty === Difficulty.Basic;
    },
    isMedium() {
      const app: any = this;
      return app.difficulty === Difficulty.Normal;
    },
    isHard() {
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
  background-color: #E5E5E5;
}
.selected-color {
  background-color: #114489;
}
.unselected-txt {
  color: #E5E5E5
}
.selected-txt {
  color: #114489
}
</style>