<template>
  <div class="classic-input-container shadow-up-10">
    <div class="q-mx-sm">
      <q-input
        v-model="answer"
        class="answer-input"
        single-line
        autofocus
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
        <div class="q-pa-xs headline col-3" v-for="symbol in [7, 8, 9]" v-bind:key="symbol">
          <q-btn
            class="input-button"
            @click="inputSymbol(symbol)"
            depressed
            large
            color="primary"
          >{{symbol}}</q-btn>
        </div>

        <div class="q-pa-xs headline col-3">
          <q-btn class="input-button" @click="backspace" depressed large color="primary">
            <q-icon name="backspace" dark></q-icon>
          </q-btn>
        </div>
      </div>
      <div class="row justify-center">
        <div v-bind:key="symbol" v-for="symbol in [4, 5, 6, '-']" class="q-pa-xs headline col-3">
          <q-btn
            class="input-button"
            v-on:click="inputSymbol(symbol)"
            depressed
            large
            color="primary"
          >{{symbol}}</q-btn>
        </div>
      </div>

      <div class="row justify-center">
        <div v-bind:key="symbol" v-for="symbol in [1, 2, 3, '.']" class="q-pa-xs headline col-3">
          <q-btn
            class="input-button"
            v-on:click="inputSymbol(symbol)"
            depressed
            large
            color="primary"
          >{{symbol}}</q-btn>
        </div>
      </div>
      <div class="row justify-center">
        <div class="q-pa-xs headline col-6">
          <q-btn
            class="input-button btn-zero"
            v-on:click="inputSymbol(0)"
            depressed
            large
            color="primary"
          >0</q-btn>
        </div>
        <div v-bind:key="symbol" v-for="symbol in ['(', ')']" class="q-pa-xs headline col-3">
          <q-btn
            class="input-button"
            v-on:click="inputSymbol(symbol)"
            depressed
            large
            color="primary"
          >{{symbol}}</q-btn>
        </div>
      </div>
      <div class="row justify-around">
        <div class="q-pa-xs headline col-6">
          <q-btn @click="skipQuestion" class="action-button" depressed large color="green" dark>
            <q-icon name="mdi-arrow-right" class="q-mr-sm"></q-icon>Skip
          </q-btn>
        </div>
        <div class="q-pa-xs headline col-6">
          <q-btn @click="checkAnswer" class="action-button" depressed large color="green" dark>
            <q-icon name="check" class="q-mr-sm"></q-icon>Check
          </q-btn>
        </div>
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
  }
});
</script>

<style>
.classic-input-container {
  background-color: white;
  padding: 12px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

.answer-input {
  font-size: 2em;
  margin-bottom: 42px;
}
.input-container {
  display: flex;
  flex-direction: column;
}
.input-button {
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
  width: 100%;
  height: 64px;
  font-size: 1.5em;
}
</style>