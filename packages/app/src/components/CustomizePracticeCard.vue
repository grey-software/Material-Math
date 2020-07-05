<template>
  <div class="container">
    <router-link id="customize-practice" to="/config">
      <q-btn
        color="white"
        id="btn-customize-practice"
        size="20px"
        round
        text-color="black"
        icon="mdi-pencil"
      />
    </router-link>
    <!-- Header -->
    <h6>Your Practice Session</h6>
    <!-- Centered Flex container for 3 columns -->
    <div class="row justify-around">
      <div class="column justify-center">
        <q-icon v-if="isTimed" large />

      </div>
      
    </div>
    <!-- v if mode -->
    <!-- value  -->
    <!-- difficulty -->
  </div>
</template>

<script lang="ts">
import { PracticeGetters, PracticeActions, PracticeMode } from "../store/practice/practice";
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    icon: {
      default: null
    }
  },
  computed: {
    ...mapGetters({ practiceMode: PracticeGetters.PRACTICE_MODE }),
    isTimed() {
      const app: any = this;
      return app.practiceMode == PracticeMode.QUESTIONS
    }
  }
};
</script>

<style scoped>
h6 {
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  color: #4f4f4f;
  margin: 10px 0 0 25px;
}
.container {
  width: 84%;
  height: 172px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  z-index: 2;
}
#customize-practice {
  position: relative;
  z-index: 3;
  float: right;
  top: -20px;
  left: 12px;
}
#btn-customize-practice {
  z-index: 4;
}
</style>