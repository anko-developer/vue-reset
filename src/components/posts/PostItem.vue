<template>
  <AppCard>
    <template #header>
      <h5 class="card-title">{{ title }}</h5>
    </template>

    <p class="card-text">
      {{ content }}
    </p>
    <p class="text-muted">{{ createdDate }}</p>

    <template #footer>
      <div class="d-flex flex-row-reverse">
        <button class="btn p-0" type="button" @click.stop="modal">
          <i class="bi bi-apple"></i>
        </button>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { inject, computed } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: [String, Number],
  },
});

const emit = defineEmits(['modal']);

const modal = () => {
  emit('modal');
};

const dayjs = inject('dayjs');
const createdDate = computed(() =>
  dayjs(props.createdAt).format('YYYY. MM. DD HH:mm:ss'),
);
</script>
