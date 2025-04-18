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
  <header @mouseenter="showGnb" @mouseleave="hideGnb">
    <div class="header">
      <h1>Header</h1>
    </div>
    <Transition name="fade">
      <CommonGnb v-if="gnb" />
    </Transition>
  </header>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(0);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(100%);
}
header {
  position: relative;
}
.header {
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
