<template>
  <div class="inner">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.inner {
  min-width: $min-width;
  width: $min-width;
  margin: 0 auto;
}
</style>
