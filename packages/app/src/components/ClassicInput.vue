<template>
  <div class="classic-input-container">
    <div>
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
        <div
          class="input-button-container headline col-3"
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

        <div class="input-button-container headline col-3">
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
          class="input-button-container headline col-3"
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
          class="input-button-container headline col-3"
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
        <div class="input-button-container headline col-6">
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
          class="input-button-container headline col-3"
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
      <div class="row justify-around">
        <div class="input-button-container headline col-6">
          <q-btn
            v-on:click="skipQuestion"
            class="action-button"
            depressed
            large
            color="green"
            dark
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
          >
            <q-icon
              name="check"
              class="q-mr-sm"
            ></q-icon>
            Check
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

<style scoped>
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
}
</style>
