<script setup lang="ts" :>
import { gnb } from "@data/gnb";
</script>

<template>
  <nav class="gnb">
    <ul>
      <li v-for="menu in gnb" :key="menu.path">
        <NuxtLink
          :to="menu.path"
          class="gnb__link"
          active-class="gnb__link--active"
          >{{ menu.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.gnb {
  background: $gray-60;
  & > ul {
    display: flex;
    justify-content: center;
    .gnb__link {
      display: block;
      padding: 10px;
      &--active {
        color: greenyellow;
      }
    }
  }
}
</style>
