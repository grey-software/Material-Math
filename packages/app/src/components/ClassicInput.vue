<template>
<<<<<<< HEAD
  <div class="classic-input-container">
    <div>
=======
  <div>
    <div class="q-mx-sm">
>>>>>>> master
      <q-input
        v-model="answer"
        class="answer-input"
        single-line
        autofocus
        :readonly="$q.platform.is.mobile"
        placeholder="Enter Answer Here"
        color="primary"
        clearable
        @click:clear="clearAnswer"
        @input="setAnswer"
        v-on:keyup.13="checkAnswer"
      />
    </div>

    <div class="input-container">
      <div class="row justify-center">
        <div
<<<<<<< HEAD
          class="input-button-container headline col-3"
=======
          class="q-pa-xs headline col-3"
>>>>>>> master
          v-for="symbol in [7, 8, 9]"
          v-bind:key="symbol"
        >
          <q-btn
            @click="inputSymbol(symbol)"
            depressed
            large
            color="primary"
          >{{symbol}}
          </q-btn>
        </div>

<<<<<<< HEAD
        <div class="input-button-container headline col-3">
=======
        <div class="q-pa-xs headline col-3">
>>>>>>> master
          <q-btn
            @click="backspace"
            depressed
            large
            color="primary"
          >
            <q-icon
              name="backspace"
              dark
            ></q-icon>
          </q-btn>
        </div>
      </div>
      <div class="row justify-center">

        <div
          v-bind:key="symbol"
          v-for="symbol in [4, 5, 6, '-']"
<<<<<<< HEAD
          class="input-button-container headline col-3"
=======
          class="q-pa-xs headline col-3"
>>>>>>> master
        >
          <q-btn
            v-on:click="inputSymbol(symbol)"
            depressed
            large
            color="primary"
          >{{symbol}}
          </q-btn>
        </div>
      </div>

      <div class="row justify-center">
        <div
          v-bind:key="symbol"
          v-for="symbol in [1, 2, 3, '.']"
<<<<<<< HEAD
          class="input-button-container headline col-3"
=======
          class="q-pa-xs headline col-3"
>>>>>>> master
        >
          <q-btn
            v-on:click="inputSymbol(symbol)"
            depressed
            large
            color="primary"
          >{{symbol}}
          </q-btn>
        </div>
      </div>
      <div class="row justify-center">
<<<<<<< HEAD
        <div class="input-button-container headline col-6">
=======
        <div class="q-pa-xs headline col-6">
>>>>>>> master
          <q-btn
            v-on:click="inputSymbol(0)"
            depressed
            large
            class="btn-zero"
            color="primary"
          >0</q-btn>
        </div>
        <div
          v-bind:key="symbol"
          v-for="symbol in ['(', ')']"
<<<<<<< HEAD
          class="input-button-container headline col-3"
=======
          class="q-pa-xs headline col-3"
>>>>>>> master
        >
          <q-btn
            v-on:click="inputSymbol(symbol)"
            depressed
            large
            color="primary"
          >{{symbol}}
          </q-btn>
        </div>
      </div>
<<<<<<< HEAD
      <div class="row justify-around">
        <div class="input-button-container headline col-6">
          <q-btn
            v-on:click="skipQuestion"
=======
      <div class="row justify-around q-pa-xs">
          <q-btn
            @click="checkAnswer"
>>>>>>> master
            class="action-button"
            depressed
            large
            color="green"
            dark
<<<<<<< HEAD
            icon
          >
            <q-icon
              name="mdi-arrow-right"
              class="q-mr-sm"
            ></q-icon>
            Skip
          </q-btn>
        </div>
        <div class="input-button-container headline col-6">
          <q-btn
            v-on:click="checkAnswer"
            class="action-button"
            depressed
            large
            color="green"
            dark
            icon
=======
>>>>>>> master
          >
            <q-icon
              name="check"
              class="q-mr-sm"
            ></q-icon>
            Check
          </q-btn>
<<<<<<< HEAD
        </div>
=======
>>>>>>> master
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import { PracticeActions, PracticeGetters } from "../store/practice/practice";

export default Vue.extend({
  name: "classic-input",
  data() {
    return {
      inputTags: [7, 8, 9, "⌫", 4, 5, 6, "-", 1, 2, 3, ".", 0, "(", ")", ""],
      text: "" as string
    };
  },
  methods: {
    inputSymbol: function(symbol: string) {
      this.setAnswer(this.answer.concat(symbol));
    },
    backspace: function() {
      this.setAnswer(this.answer.slice(0, -1));
    },
    clearAnswer: function() {
      this.setAnswer("");
    },
    ...mapActions({
      checkAnswer: PracticeActions.CHECK_ANSWER,
      setAnswer: PracticeActions.SET_ANSWER,
      skipQuestion: PracticeActions.SKIP_QUESTION
    })
  },
  computed: {
    myProperty(): boolean {
      // <- Here
      return true;
    },
    ...mapGetters({
      answer: PracticeGetters.ANSWER
    })
  },
  watch: {
    answer(newValue) {
      if (newValue == null) {
        this.setAnswer("");
      }
    }
  }
});
</script>

<<<<<<< HEAD
<style scoped>
=======
<style>
>>>>>>> master
.classic-input-container {
  padding: 16px;
  display: flex;
  flex-direction: column;
}
.answer-input {
  font-size: 2em;
  margin-bottom: 42px;
}

.input-container {
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  margin-bottom: 35%;
}

.q-btn {
  max-height: 48px;
  width: 100%;
  min-width: 72px;
  max-width: 96px;
}

.btn-zero {
  max-width: 100%;
}

.action-button {
  max-width: 100%;
  min-width: 148px;
  height: 64px;
}

.input-button-container {
  padding: 4px 4px;
=======
}

.q-btn {
  max-height: 72px;
  width: 100%;
  min-width: 72px;
  max-width: 96px;
  font-size: 2em;
}

.btn-zero {
  max-width: 100%;
}

.action-button {
  max-width: 100%;
  min-width: 148px;
  height: 64px;
>>>>>>> master
}
</style>
