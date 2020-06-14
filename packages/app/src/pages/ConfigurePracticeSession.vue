<template>
  <q-page class="body-style">
    <div style="text-align: center;">
      <h2>Configure Your Practice Session</h2>
    </div>
    <!-- Select Concepts  -->
    <div style="subheading-margin">
      <p>Which concepts would you like to practice?</p>
    </div>
    <!-- Select Mode -->
    <div style="subheading-margin">
      <p>Choose Mode</p>
    </div>
    <!-- Select Difficulty -->
    <div style="ubheading-margin">
      <p>Set Difficulty</p>
    </div>
    <div style="margin-top: 40px">
      <q-btn
        rounded
        color="primary"
        icon-right="right"
        label="Continue"
        class="full-width"
        @click="getToPracticeSession"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    getToPracticeSession($event) {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.body-style {
  padding-top: 30px;
  padding-left: 10em;
  padding-right: 10em;
}
</style>