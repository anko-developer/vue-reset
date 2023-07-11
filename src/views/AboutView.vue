<template>
  <div>
    <h2>AboutView</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="$router.push('/')">
      Home으로 이동
    </button>
    <h2>Stroe</h2>
    <p>counter: {{ counter }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <button type="button" @click="increment">테스트</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const { counter, doubleCount } = storeToRefs(store);
const { increment } = store;
counter.value = 100;
</script>

<style lang="scss" scoped></style>
