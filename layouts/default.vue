<style lang="scss">
.layout-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
}
</style>

<template>
  <div class="layout-wrap">
    <CommonHeader />
    <CommonContainer>
      <slot />
    </CommonContainer>
    <CommonFooter />
  </div>
</template>
