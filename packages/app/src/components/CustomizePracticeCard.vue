<template>
  <div class="container">
    <router-link id="customize-practice" v-if="icon != null" :to="btnHref">
      <q-btn
        color="white"
        id="btn-customize-practice"
        size="20px"
        round
        text-color="black"
        :icon="icon"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      default: null
    },
    btnHref: {
      default: null
    }
  }
};
</script>

<style scoped>
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
  z-index:3;
  float: right;
  top: -20px;
  left: 12px;
}
#btn-customize-practice { 
  z-index:4;
}
</style>