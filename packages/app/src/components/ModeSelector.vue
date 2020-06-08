<template>
    <div>
        <div class="container centered-container" justify-around style="margin-top: 20px;">
        <div style="max-width:140px;" class="container column-container centered-container">
          <q-btn v-if="istimed" @click="onistimedClicked" round size="40px" color="primary" icon="alarm" />
          <q-btn v-else @click="onistimedClicked" round size="40px" icon="alarm" />
          <p style="text-align:center;">How long would you like to play for?</p>
        </div>
        <h3>OR</h3>
        <div style="max-width:140px;" class="container column-container centered-container">
          <q-btn v-if="noOfQuestions" @click="onNoOfQuestionsClicked" round size="40px" color="primary" icon="help_outline" />
          <q-btn v-else @click="onNoOfQuestionsClicked" round size="40px" icon="help_outline" />
          <p style="text-align:center;">How many question would you like to play?</p>
        </div>
      </div>
      <div class="conatiner" v-if="istimed">
            <p>How long would you like to practice for?</p>
            <q-btn-dropdown rounded label="Select Time">
                <q-list>
                    <q-item v-for="time in timingOptions" :key="time" clickable v-close-popup>
                    <q-item-section>
                        <q-item-label>{{time}} minutes</q-item-label>
                    </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
      </div>
      <div class="conatiner" v-if="noOfQuestions">
          <p>How many questions would you like to practice</p>
          <q-btn-dropdown rounded label="Select Questions">
                <q-list>
                    <q-item v-for="question in questionOptions" :key="question" clickable v-close-popup>
                    <q-item-section>
                        <q-item-label>{{question}} questions</q-item-label>
                    </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                istimed: false,
                noOfQuestions: false,
                timingOptions: [1, 3, 5, 8, 10],
                questionOptions: [10, 20, 25, 50, 100]
            }
        },
        methods: {
            onistimedClicked(){
                this.istimed = true;
                this.noOfQuestions = false;
            },
            onNoOfQuestionsClicked(){
                this.istimed = false;
                this.noOfQuestions = true;
            }
        },
        computed: {
            getNoOfQuestions(){
                return this.noOfQuestions
            }
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