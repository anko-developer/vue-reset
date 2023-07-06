<template>
  <div class="app-alert">
    <TransitionGroup name="slide-fade">
      <div
        v-for="({ message, type }, index) in items"
        :key="index"
        class="alert"
        :class="typeStyle(type)"
        role="alert"
      >
        {{ message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
});

const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-primary');
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 100px;
  right: 10px;
}
</style>
