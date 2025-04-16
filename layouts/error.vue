<style lang="scss">
.error-wrap {
  @include flex-center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
}
</style>
<template>
  <div class="error-wrap">
    <slot />
  </div>
</template>
