<template>
  <div class="inner--full">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.inner--full {
  min-width: $max-width;
  width: $max-width;
  margin: 0 auto;
}
</style>
