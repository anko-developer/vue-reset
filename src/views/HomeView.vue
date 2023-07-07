<template>
  <div>
    <h2>HomeView</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
  </div>

  <AppGrid :items="items" v-slot="{ item }" col-class="col-3">
    <div>{{ item }}</div>
  </AppGrid>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
  router.push({ name: 'About' });
};
</script>

<style lang="scss" scoped></style>
