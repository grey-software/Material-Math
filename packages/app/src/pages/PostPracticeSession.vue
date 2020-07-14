<template>
  <q-page class="mobile-container">
    <div class="config-header" />
    <div class="column q-pb-lg">
      <router-link to="/" class="absolute-top-left left-btn">
        <q-btn flat round size="40px" class="btn-style">
          <q-icon name="mdi-file-document-outline" size="50px" class="left-btn-icon" />
        </q-btn>
      </router-link>
      <router-link to="/" class="absolute-top-right home-btn">
        <q-btn flat round size="40px" class="btn-style">
          <q-icon name="home" size="50px" class="home-btn-icon" />
        </q-btn>
      </router-link>
      <span class="config-header-label text-center">Summary</span>
      <span class="config-header-label config-sub-header-label text-center">Session Completed!</span>
      <div class="full-width config-btn row justify-center">
        <div class="config-btn-border">
          <router-link to="/practice">
            <q-btn flat size="25px" class="config-btn-style btn-style" rounded>
              Play Again
              <q-icon name="mdi-rotate-left" right />
            </q-btn>
          </router-link>
        </div>
      </div>
      <div class="column q-ma-lg">
        <div class="headings">Concepts Practiced</div>
        <div class="row justify-center">
          <q-chip color="pink" size="16px" v-for="operator in operators" :key="operator"> {{ operator }}</q-chip>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { PracticeGetters } from "../store/practice/practice";
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({ operators: PracticeGetters.OPERATORS })
  }
};
</script>

<style scoped>
.mobile-container {
  width: 420px;
  max-height: 85%;
  display: flex;
  flex-direction: column;
}

@media (max-width: 599px) {
  .mobile-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.config-header {
  width: 140%;
  height: 384px;
  background: linear-gradient(0deg, #114489, #114489), #2f80ed;
  border-radius: 50%;
  margin-top: -192px;
  position: absolute;
  margin-left: -20%;
}
.config-header-label {
  color: white;
  font-size: 32px;
  font-family: "Montserrat", sans-serif;
  top: 24px;
  z-index: 2;
  position: relative;
}
.config-sub-header-label {
  font-size: 24px;
}
.config-btn {
  margin-top: 75px;
  z-index: 2;
}
.btn-style {
  color: #ffffff;
  background: #2f80ed;
}
.config-btn-style {
  border-radius: 30px;
  top: -6px;
}
.config-btn-border {
  background: #114489;
  border-radius: 30px;
  color: #ffffff;
  z-index: 1;
  width: 230px;
  box-shadow: 0px 0px 5px grey;
}
.home-btn {
  top: -35px;
  right: -35px;
}
.home-btn-icon {
  left: -15px;
  bottom: -15px;
}
.left-btn {
  top: -35px;
  left: -35px;
}
.left-btn-icon {
  right: -15px;
  bottom: -15px;
}
.headings {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
}
</style>