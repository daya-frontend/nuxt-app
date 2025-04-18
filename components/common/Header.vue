<script setup>
import { ref } from "vue";
const gnb = ref(false);
const showGnb = () => {
  gnb.value = true;
};
const hideGnb = () => {
  gnb.value = false;
};
</script>

<template>
  <header @mouseover="showGnb" @mouseout="hideGnb">
    <h1>Header</h1>
    <CommonGnb v-show="gnb" />
    {{ gnb }}
  </header>
</template>

<style lang="scss">
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: $gray-50;
  text-align: center;
  h1 {
    padding: 20px;
  }
}
</style>
