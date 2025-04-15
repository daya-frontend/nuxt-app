<script setup>
import { ref } from "vue";

const count = ref(0);
const increment = () => count.value++;
</script>

<template>
  <div>
    <h1>대박스</h1>
    <p>Nuxt의 페이지 기반 라우팅을 시작해보세요.</p>
    <h1>
      Count: {{ count }}
      <button @click="increment">plus 1</button>
      <ButtonType1 @click="increment">plus 1 button</ButtonType1>
    </h1>
  </div>
</template>
