<template>
  <div>
    <h2>HomeView</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
  </div>

  <AppGrid :items="items" v-slot="{ item }" col-class="col-3">
    <div>{{ item }}</div>
  </AppGrid>

  <h1>{{ position }}</h1>
  <div>{{ x }} {{ y }}</div>
</template>

<script setup>
import { reactive, toRef, toRefs } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
  router.push({ name: 'About' });
};

const position = reactive({
  x: 100,
  y: 1000,
});

// const x = toRef(position, 'x');
// const y = toRef(position, 'y');
const { x, y } = toRefs(position);
</script>

<style lang="scss" scoped></style>
