<template>
  <Transition name="slide-fade">
    <div v-if="show" class="app-alert alert" :class="styleClass" role="alert">
      {{ alertMessage }}
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  alertMessage: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: '',
    validator: value => ['success', 'error'].includes(value),
  },
});

const styleClass = computed(() => {
  return props.type === 'error' ? 'alert-danger' : 'alert-primary';
});
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 100px;
  right: 10px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
