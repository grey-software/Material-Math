<template xmlns="http://www.w3.org/1999/html">
    <div class="absolute-center">
      <q-btn @click="startPracticeSession" color="secondary" icon-right="send" rounded label="Get Started!" />
    </div>
</template>

<script>
    export default {
        name: "Index.vue",
        data: function (){
          return {

          };
        },
        methods: {
            startPracticeSession($event) {
                this.$router.push({path: '/configure-practice-sessions'});
            }
        }
    }
</script>

<style scoped>

</style>
