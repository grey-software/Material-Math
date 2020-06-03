<template>
  <div>
    <div class="body-style">
      <div style="text-align: center;">
        <h2>Configure Your Practice Session</h2>
      </div>
      <div style="margin-left: 15px">
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
          ConceptPickerItem: ConceptPickerItem
        },

    }
</script>

<style scoped>
  .body-style{
    padding-top: 30px;
    padding-left: 10em;
    padding-right: 10em;
  }
</style>
