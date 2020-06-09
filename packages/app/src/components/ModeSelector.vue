<template>
    <div>
        <div class="container centered-container" justify-around style="margin-top: 20px;">
        <div style="max-width:140px;" class="container column-container centered-container">
          <q-btn v-if="isTimedMode" @click="setTimedMode" round size="40px" color="primary" icon="alarm" />
          <q-btn v-else @click="setTimedMode" round size="40px" icon="alarm" />
          <p style="text-align:center;">How long would you like to play for?</p>
        </div>
        <h3>OR</h3>
        <div style="max-width:140px;" class="container column-container centered-container">
          <q-btn v-if="isQuestionsMode" @click="setQuestionsMode" round size="40px" color="primary" icon="help_outline" />
          <q-btn v-else @click="setQuestionsMode" round size="40px" icon="help_outline" />
          <p style="text-align:center;">How many question would you like to play?</p>
        </div>
      </div>
      <div class="conatiner" v-if="isTimedMode">
            <p>How long would you like to practice for?</p>
            <q-btn-dropdown rounded label="Select Time">
                <q-list>
                    <q-item v-for="(time, index) in timingOptions" :key="index" clickable v-close-popup>
                    <q-item-section>
                        <q-item-label @click="setTime(time)">{{time}} minutes</q-item-label>
                    </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
      </div>
      <div class="conatiner" v-if="isQuestionsMode">
          <p>How many questions would you like to practice</p>
          <q-btn-dropdown rounded label="Select Questions">
                <q-list>
                    <q-item v-for="(question, index) in questionOptions" :key="index" clickable v-close-popup>
                    <q-item-section>
                        <q-item-label @click="setQuestionCount(question)">{{question}} questions</q-item-label>
                    </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
      </div>
    </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations } from 'vuex';
import { PracticeMode } from "../engine/models/math_question";
import { PracticeActions, PracticeGetters } from "../store/practice/practice";

    export default {
        data() {
            return {
                timingOptions: [1, 3, 5, 8, 10],
                questionOptions: [10, 20, 25, 50, 100]
            }
        },
        methods: {
            setTimedMode(){
                this.setPracticeMode(PracticeMode.TIME);
            },
            setQuestionsMode(){
                this.setPracticeMode(PracticeMode.QUESTIONS);

            },
            setQuestionCount(question){
                this.setPracticeQuestionCount(question);
            },
            setTime(time){
                this.setPracticeTime(time * 60);
            },
            ...mapMutations({
                setPracticeQuestionCount: PracticeActions.SET_PRACTICE_QUESTION_COUNT,
                setPracticeMode: PracticeActions.SET_PRACTICE_MODE,
                setPracticeTime: PracticeActions.SET_PRACTICE_TIME
            })
        },
        watch: {
            timed(istimed) {
                this.setPracticeMode(PracticeMode.TIME);
            },
            questioned(isQuestions) {
                this.setPracticeMode(PracticeMode.QUESTIONS);
            }
        },
        mounted() {
            if(this.practiceMode == PracticeMode.TIME)
                this.istimed = true
            else
                this.isQuestions = true
        },
        computed: {
            isQuestionsMode(){
                return this.practiceMode === PracticeMode.QUESTIONS
            },
            isTimedMode() {
                return this.practiceMode === PracticeMode.TIME
            },
            ...mapGetters({
                practiceMode: PracticeGetters.PRACTICE_MODE,
                practiceQuestionCount: PracticeGetters.PRACTICE_QUESTION_COUNT,
                practiceTime: PracticeGetters.PRACTICE_TIME
            })
        }
    }
</script>

<style scoped>
  .container {
    display: flex;
  }
  .centered-container {
    justify-content: space-around;
    align-items: center;
  }
  .column-container {
    flex-direction: column;
  }
  h3 {
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
</style>