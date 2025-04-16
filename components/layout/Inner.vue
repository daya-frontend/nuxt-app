<template>
  <div class="inner">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.inner {
  width: $min-width;
  min-width: $min-width;
  margin: 0 auto;
}
</style>
