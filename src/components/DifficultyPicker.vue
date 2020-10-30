<template>
  <div
    style="height:75vh"
    class="flex column justify-center items-center"
  >
    <div class="pick-difficulty-heading">Pick your difficulty</div>
    <div class="flex justify-around q-mt-lg">
      <div
        class="flex column items-center q-mx-lg"
        @click="setDifficulty('basic')"
      >
        <svg
          width="56"
          height="32"
          viewBox="0 0 56 32"
          class="difficulty-icon"
          :class="{'selected-difficulty-icon': isBasic}"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="12"
            y="12"
            width="32"
            height="8"
          />
          <rect
            x="12"
            y="12"
            width="32"
            height="8"
          />
          <rect
            width="8"
            height="32"
          />
          <rect
            x="48"
            width="8"
            height="32"
          />
        </svg>

        <div
          class="difficulty-label"
          :class="{'selected-difficulty-label': isBasic}"
        >Basic</div>
      </div>
      <div
        class="flex column items-center q-mx-lg"
        @click="setDifficulty('normal')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="31"
          class="difficulty-icon"
          :class="{'selected-difficulty-icon': isNormal}"
          viewBox="0 0 75 31"
        >
          <rect
            x="19.9082"
            y="10.4523"
            width="35.0853"
            height="9.95261"
          />
          <rect
            x="9.38232"
            y="0.5"
            width="7.01706"
            height="29.8578"
          />
          <rect
            x="0.926758"
            y="5.47617"
            width="7.01706"
            height="19.9052"
          />
          <rect
            x="58.502"
            y="0.5"
            width="7.01706"
            height="29.8578"
          />
          <rect
            x="67.5884"
            y="5.47617"
            width="7.01706"
            height="19.9052"
          />
        </svg>
        <div
          class="difficulty-label"
          :class="{'selected-difficulty-label': isNormal}"
        >Normal</div>
      </div>
      <div
        class="flex column items-center q-mx-lg"
        @click="setDifficulty('advanced')"
      >
        <svg
          width="91"
          height="31"
          class="difficulty-icon"
          :class="{'selected-difficulty-icon': isAdvanced}"
          viewBox="0 0 91 31"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="27.2646"
            y="10.5"
            width="35"
            height="10"
          />
          <rect
            x="17.4448"
            y="0.5"
            width="7"
            height="30"
          />
          <path d="M83.2646 10.5H90.2817V20.4526H83.2646V10.5Z" />
          <rect
            x="0.264648"
            y="10.5"
            width="7"
            height="10"
          />
          <rect
            x="9.26465"
            y="5.5"
            width="7"
            height="20"
          />
          <rect
            x="65.2646"
            y="0.5"
            width="7"
            height="30"
          />
          <rect
            x="74.2646"
            y="5.5"
            width="7"
            height="20"
          />
        </svg>

        <div
          class="difficulty-label"
          :class="{'selected-difficulty-label': isAdvanced}"
        >Advanced</div>
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
.pick-difficulty-heading {
  font-family: "Montserrat", sans-serif;
  color: #4f4f4f;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
}
.difficulty-icon {
  transition: fill 0.2s ease-out;
  fill: #c4c4c4;
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

.container-width {
  min-width: 343px;
}
.unselected-color {
  background-color: #e5e5e5;
}
.selected-color {
  background-color: #114489;
}
.difficulty-label {
  color: #e5e5e5;
}
.selected-difficulty-label {
  color: #114489;
}
</style>