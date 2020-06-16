<template>
  <q-chip
    :selected.sync="enabled"
    :color="enabled ? 'primary' : 'grey'"
    text-color="white"
    icon="add"
  >{{operator}}</q-chip>
</template>

<script lang="ts">
import { Operator } from "../engine/math_questions/expression/models";
import { mapMutations, mapGetters } from "vuex";
import { PracticeGetters } from "../store/practice/practice";

export default {
  props: {
    operator: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      clickAttached: false,
      enabled: false
    };
  },
  mounted() {
    this.enabled = this.operators.includes(this.operator);
  },
  watch: {
    enabled(enable) {
      if (!this.operators.includes(this.operator) && enable) {
        this.setOperatorEnabled(this.operator);
      } else if (!enable) {
        this.setOperatorDisabled(this.operator);
      }
    }
  },
  computed: {
    ...mapGetters({ operators: PracticeGetters.OPERATORS })
  },
  methods: {
    ...mapMutations(["setOperatorEnabled", "setOperatorDisabled"])
  }
};
</script>

<style scoped>
.container {
  border-color: darkgrey;
  border-radius: 16px;
  width: 72px;
  height: 72x;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 2px 2px 4px grey;
}
.not-clicked:hover {
  background: #d3d3d3;
}
.clicked {
  background: #21ba45;
}
.clicked:hover {
  background: #22cf4b;
}
.img-style {
  width: 50px;
  height: 50px;
  padding: 10px;
}
</style>