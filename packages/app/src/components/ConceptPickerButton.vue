<template>
  <div class="justify-center btn-concept-picker">
    <div class="column items-center">
      <q-btn
        @click="enabled = ! enabled"
        :color="enabled ? 'primary' : 'grey'"
        text-color="white"
        :icon="icon"
        size="25px"
        class="rounded-rect"
      ></q-btn>
      <h4>{{ operator }}</h4>
    </div>
  </div>
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
    },
    icon: {
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
    const app: any = this;
    app.enabled = app.operators.includes(app.operator);
  },
  watch: {
    enabled(enable: boolean) {
      const app: any = this;
      if (!app.operators.includes(app.operator) && enable) {
        app.setOperatorEnabled(app.operator);
      } else if (!enable) {
        app.setOperatorDisabled(app.operator);
      }
    },
    operators(newOperators: Operator[]) {
      const app: any = this;
      app.enabled = newOperators.includes(app.operator);
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
h4 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.rounded-rect {
  border-radius: 10px;
}
.btn-concept-picker {
  width: 100px;
  height: 114.2px;
}
</style>