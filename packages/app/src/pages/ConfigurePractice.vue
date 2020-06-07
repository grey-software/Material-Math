<template>
  <div>
    <div class="body-style">
      <div style="text-align: center;">
        <h2>Configure Your Practice Session</h2>
      </div>
      <div style="subheading-margin">
        <p>Which concepts would you like to practice?</p>
      </div>
      <div class="wrap">
          <span
            v-for="concept in concepts"
            :key="concept.operator"
          >
          <concept-picker-item
            :operator="concept.operator"
            :img-src="concept.imgSrc"
          ></concept-picker-item>
            </span>
      </div>
      <div>
        <p>Set Difficulty</p>
      </div>
      <select-difficulty />
      <div style="margin-top:10px;">
      <p>Choose Mode</p>
      </div>
      <div class="container centered-container" justify-around style="margin-top: 20px;">
        <div style="max-width:140px;" class="container column-container centered-container">
        <q-btn round size="40px" color="primary" icon="alarm" />
        <p style="text-align:center;">How long would you like to play for?</p>
        </div>
        <h3>OR</h3>
        <div style="max-width:140px;" class="container column-container centered-container">
        <q-btn round size="40px" color="primary" icon="help_outline" />
        <p style="text-align:center;">How many question would you like to play?</p>
        </div>
      </div>
      <div style="margin-top: 30px">
        <q-btn
          rounded
          color="primary"
          icon-right="right"
          label="Continue"
          class="full-width"
          @click="getToPracticeSession"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import ConceptPickerItem from "../components/ConceptPickerItem.vue";
  import SelectDifficulty from "../components/SelectDifficulty.vue"
  import { Operator } from "../engine/math_questions/expression/models";


    export default {
        name: "ConfigurePractice",
        data: function () {
          return {
            concepts: {
              "Addition": {
                operator: Operator.Addition,
                imgSrc: "statics/icons/concepts/add.png"
              },
              "Subtraction": {
                operator: Operator.Subtraction,
                imgSrc: "statics/icons/concepts/add.png"
              },
              "Multiplication": {
                operator: Operator.Multiplication,
                imgSrc: "statics/icons/concepts/add.png"
              }
            }
          }
        },
        methods: {
            getToPracticeSession($event){
                this.$router.push("/practice");
            }
        },
        components: {
          ConceptPickerItem: ConceptPickerItem,
          SelectDifficulty: SelectDifficulty
        },

    }
</script>

<style scoped>
  .body-style {
    padding-top: 30px;
    padding-left: 10em;
    padding-right: 10em;
  }
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
