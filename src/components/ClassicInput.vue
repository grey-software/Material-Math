<template>
  <div>
    <v-container>
      <v-text-field
          v-model="answer"
          class="answer-input"
          single-line
          autofocus
          placeholder="Enter Answer Here"
          color="primary"
          clearable
          @click:clear="clearAnswer"
          @change="setAnswer"
          v-on:keyup.13="checkAnswer"
      />
    </v-container>

    <v-container class="input-container">
      <v-btn
          v-on:click="inputSymbol(symbol)"
          v-for="symbol in [7, 8, 9]"
          v-bind:key="symbol"
          class="headline"
          depressed
          large
          color="primary"
      >{{symbol}}
      </v-btn>

      <v-btn v-on:click="backspace" class="headline" depressed large color="primary">
        <v-icon dark>mdi-backspace</v-icon>
      </v-btn>
      <v-btn
          v-on:click="inputSymbol(symbol)"
          class="headline"
          v-bind:key="symbol"
          v-for="symbol in [4, 5, 6, '-']"
          depressed
          large
          color="primary"
      >{{symbol}}
      </v-btn>
      <v-btn
          v-on:click="inputSymbol(symbol)"
          class="headline"
          v-for="symbol in [1, 2, 3, '.']"
          depressed
          v-bind:key="symbol"
          large
          color="primary"
      >{{symbol}}
      </v-btn>
      <v-btn v-on:click="inputSymbol(0)" class="zero headline" depressed large color="primary">0</v-btn>
      <v-btn
          v-on:click="inputSymbol(symbol)"
          class="headline"
          v-for="symbol in ['(', ')']"
          depressed
          v-bind:key="symbol"
          large
          color="primary"
      >{{symbol}}
      </v-btn>
      <v-btn
          v-on:click="checkAnswer"
          class="check-button headline"
          depressed
          large
          color="green"
          dark
      >
        <v-icon dark left>mdi-check-circle</v-icon>
        Check
      </v-btn>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {mapActions, mapGetters} from "vuex";
  import {PracticeActions, PracticeGetters} from "../store/practice/practice";

  export default Vue.extend({
    name: "classic-input",
    data() {
      return {
        inputTags: [7, 8, 9, "⌫", 4, 5, 6, "-", 1, 2, 3, ".", 0, "(", ")", ""],
        text: "" as String
      };
    },
    methods: {
      inputSymbol: function (symbol: string) {
        this.setAnswer(this.answer.concat(symbol))
      },
      backspace: function () {
        this.setAnswer(this.answer.slice(0, -1))
      },
      clearAnswer: function () {
        this.setAnswer('')
      },
      ...mapActions({
        checkAnswer: PracticeActions.CHECK_ANSWER,
        setAnswer: PracticeActions.SET_ANSWER
      })
    },
    computed: {
      ...mapGetters({
        answer: PracticeGetters.ANSWER
      })
    }
  });
</script>

<style>
  .v-text-field__slot {
    margin-bottom: 12px;
  }

  .answer-input {
    font-size: 3em;
  }

  .input-container {
    margin-top: -24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  .zero {
    grid-column: 1 / 3;
  }

  .margin-10 {
    margin: 10px;
  }

  .answer-input {
    margin: 8px;
  }

  .check-button {
    grid-column: 1 / -1;
  }
</style>
