<template>
  <div>
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
      <q-btn
        v-on:click="inputSymbol(symbol)"
        v-for="symbol in [7, 8, 9]"
        v-bind:key="symbol"
        class="headline"
        depressed
        large
        color="primary"
      >{{symbol}}
      </q-btn>

      <q-btn
        v-on:click="backspace"
        class="headline"
        depressed
        large
        color="primary"
      >
        <q-icon
          name="backspace"
          dark
        ></q-icon>
      </q-btn>
      <q-btn
        v-on:click="inputSymbol(symbol)"
        class="headline"
        v-bind:key="symbol"
        v-for="symbol in [4, 5, 6, '-']"
        depressed
        large
        color="primary"
      >{{symbol}}
      </q-btn>
      <q-btn
        v-on:click="inputSymbol(symbol)"
        class="headline"
        v-for="symbol in [1, 2, 3, '.']"
        depressed
        v-bind:key="symbol"
        large
        color="primary"
      >{{symbol}}
      </q-btn>
      <q-btn
        v-on:click="inputSymbol(0)"
        class="zero headline"
        depressed
        large
        color="primary"
      >0</q-btn>
      <q-btn
        v-on:click="inputSymbol(symbol)"
        class="headline"
        v-for="symbol in ['(', ')']"
        depressed
        v-bind:key="symbol"
        large
        color="primary"
      >{{symbol}}
      </q-btn>
      <q-btn
        v-on:click="checkAnswer"
        class="check-button headline"
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
      setAnswer: PracticeActions.SET_ANSWER
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
  },
});
</script>

<style>
.answer-input {
  font-size: 2em;
  margin-bottom: 42px;
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

.check-button {
  grid-column: 1 / -1;
}

.q-btn {
  margin-bottom: 4px;
  margin-right: 4px;
}
</style>
