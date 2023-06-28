<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <router-link
        class="nav-link"
        ative
        active-class="active"
        aria-current="page"
        :to="{ name: 'NestedOne', replace: true }"
        >첫번째</router-link
      >
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link"
        active-class="active"
        :to="{ name: 'NestedTwo', replace: true }"
        >두번째</router-link
      >
    </li>
  </ul>
  <hr class="my-4" />
  <RouterView></RouterView>
</template>

<script setup></script>

<style lang="scss" scoped></style>
