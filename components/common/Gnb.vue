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

<template>
  <nav class="gnb">
    <ul>
      <li>
        <NuxtLink to="/" class="gnb__link" active-class="gnb__link--active">
          메인
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/board"
          class="gnb__link"
          active-class="gnb__link--active"
        >
          게시판
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/error"
          class="gnb__link"
          active-class="gnb__link--active"
        >
          에러페이지
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
