<script setup>
import { ref } from "vue";

const count = ref(0);
const increment = () => count.value++;
</script>

<template>
  <div>
    <LayoutInner>
      <h1>대박스</h1>
      <NuxtLink to="/error">에러페이지 레이아웃</NuxtLink>
      <p>Nuxt의 페이지 기반 라우팅을 시작해보세요.</p>
      <h1>
        Count: {{ count }}
        <button @click="increment">plus 1</button>
        <UiButtonType1 @click="increment">버튼이름</UiButtonType1>
      </h1>
    </LayoutInner>
    <LayoutInnerFull>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
      molestias voluptatibus autem enim asperiores culpa quibusdam similique
      neque et saepe aut aliquid minima nesciunt repudiandae totam error,
      praesentium officiis! Delectus.Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Obcaecati, molestias voluptatibus autem enim asperiores
      culpa quibusdam similique neque et saepe aut aliquid minima nesciunt
      repudiandae totam error, praesentium officiis! Delectus.Lorem ipsum, dolor
      sit amet consectetur adipisicing elit. Obcaecati, molestias voluptatibus
      autem enim asperiores culpa quibusdam similique neque et saepe aut aliquid
      minima nesciunt repudiandae totam error, praesentium officiis!
      Delectus.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Obcaecati, molestias voluptatibus autem enim asperiores culpa quibusdam
      similique neque et saepe aut aliquid minima nesciunt repudiandae totam
      error, praesentium officiis! Delectus.Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Obcaecati, molestias voluptatibus autem enim
      asperiores culpa quibusdam similique neque et saepe aut aliquid minima
      nesciunt repudiandae totam error, praesentium officiis! Delectus.Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, molestias
      voluptatibus autem enim asperiores culpa quibusdam similique neque et
      saepe aut aliquid minima nesciunt repudiandae totam error, praesentium
      officiis! Delectus.Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Obcaecati, molestias voluptatibus autem enim asperiores culpa
      quibusdam similique neque et saepe aut aliquid minima nesciunt repudiandae
      totam error, praesentium officiis! Delectus.Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Obcaecati, molestias voluptatibus autem enim
      asperiores culpa quibusdam similique neque et saepe aut aliquid minima
      nesciunt repudiandae totam error, praesentium officiis! Delectus.Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, molestias
      voluptatibus autem enim asperiores culpa quibusdam similique neque et
      saepe aut aliquid minima nesciunt repudiandae totam error, praesentium
      officiis! Delectus.Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Obcaecati, molestias voluptatibus autem enim asperiores culpa
      quibusdam similique neque et saepe aut aliquid minima nesciunt repudiandae
      totam error, praesentium officiis! Delectus.Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Obcaecati, molestias voluptatibus autem enim
      asperiores culpa quibusdam similique neque et saepe aut aliquid minima
      nesciunt repudiandae totam error, praesentium officiis! Delectus.Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, molestias
      voluptatibus autem enim asperiores culpa quibusdam similique neque et
      saepe aut aliquid minima nesciunt repudiandae totam error, praesentium
      officiis! Delectus.Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Obcaecati, molestias voluptatibus autem enim asperiores culpa
      quibusdam similique neque et saepe aut aliquid minima nesciunt repudiandae
      totam error, praesentium officiis! Delectus.Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Obcaecati, molestias voluptatibus autem enim
      asperiores culpa quibusdam similique neque et saepe aut aliquid minima
      nesciunt repudiandae totam error, praesentium officiis! Delectus.Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, molestias
      voluptatibus autem enim asperiores culpa quibusdam similique neque et
      saepe aut aliquid minima nesciunt repudiandae totam error, praesentium
      officiis! Delectus.Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Obcaecati, molestias voluptatibus autem enim asperiores culpa
      quibusdam similique neque et saepe aut aliquid minima nesciunt repudiandae
      totam error, praesentium officiis! Delectus.Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Obcaecati, molestias voluptatibus autem enim
      asperiores culpa quibusdam similique neque et saepe aut aliquid minima
      nesciunt repudiandae totam error, praesentium officiis! Delectus.Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, molestias
      voluptatibus autem enim asperiores culpa quibusdam similique neque et
      saepe aut aliquid minima nesciunt repudiandae totam error, praesentium
      officiis! Delectus.Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Obcaecati, molestias voluptatibus autem enim asperiores culpa
      quibusdam similique neque et saepe aut aliquid minima nesciunt repudiandae
      totam error, praesentium officiis! Delectus.</LayoutInnerFull
    >
  </div>
</template>
