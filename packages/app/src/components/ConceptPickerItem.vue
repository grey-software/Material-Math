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
    const app: any = this
    app.enabled = app.operators.includes(app.operator);
  },
  watch: {
    enabled(enable: boolean) {
      const app: any = this
      if (!app.operators.includes(app.operator) && enable) {
        app.setOperatorEnabled(app.operator);
      } else if (!enable) {
        app.setOperatorDisabled(app.operator);
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
</style>