<template>
  <AppModal v-model="show" title="게시글">
    <template #default>
      <div class="row">
        <div class="col-3 text-muted">제목</div>
        <div class="col-9">{{ modalData.title }}</div>
        <div class="col-3 text-muted">내용</div>
        <div class="col-9">{{ modalData.content }}</div>
        <div class="col-3 text-muted">등록일</div>
        <div class="col-9">{{ modalData.createdAt }}</div>
      </div>
    </template>
    <template #actions>
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
        @click="closeModal"
      >
        닫기
      </button>
    </template>
  </AppModal>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  show: Boolean,
  modalData: Object,
});

const emit = defineEmits(['update:show']);

const show = computed({
  get() {
    return props.show;
  },
  set(value) {
    emit('update:show', value);
  },
});
const closeModal = () => {
  emit('update:show', false);
};
</script>

<style lang="scss" scoped></style>
