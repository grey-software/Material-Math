<template>
  <q-chip :selected.sync="enabled" color="primary" text-color="white" icon="add">
        {{operator}}
  </q-chip>
</template>

<script lang="ts">
import { Operator } from "../engine/math_questions/expression/models";
import { mapMutations, mapState } from 'vuex';

export default {
    props: {
      "operator": {
        type: String,
        required: true
      },
      "imgSrc": String
      },
    data: function () {
      return {
        clickAttached: false,
        enabled: false
      };
    },
    beforeMount () {
      console.log(this.operators)
      this.enabled = this.operators.includes(this.operator)
    },
    watch: {
      enabled(enable) {
        if (enable){
          this.setOperatorEnabled(this.operator);
        }else {
          this.setOperatorDisabled(this.operator);
        }
      }
    },
    computed: {
      ...mapState([
        "operators",
      ])
    },
      methods: {
      ...mapMutations([
        'setOperatorEnabled', 'setOperatorDisabled'
      ])
    },
  }
</script>

<style scoped>
  .container{
    border-color: darkgrey;
    border-radius: 16px;
    width: 72px;
    height: 72x;
    margin-left: 20px;
    margin-top: 20px;
    box-shadow: 2px 2px 4px grey;
  }
  .not-clicked:hover{
    background: #D3D3D3;
  }
  .clicked{
    background: #21BA45;
  }
  .clicked:hover{
    background: #22CF4B;
  }
  .img-style{
    width: 50px;
    height: 50px;
    padding: 10px;
  }
</style>
