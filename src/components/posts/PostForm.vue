<template>
  <form>
    <div class="mb-3">
      <label for="title" class="form-label"> 제목 </label>
      <input
        v-focus
        v-color="'#ffd200'"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
        type="text"
        class="form-control"
        id="text"
        placeholder="제목을 입력해주세요."
      />
    </div>
    <div class="mb-3">
      <label for="contents" class="form-label"> 내용 </label>
      <textarea
        :value="content"
        @input="$emit('update:content', $event.target.value)"
        class="form-control"
        id="contents"
        rows="3"
      ></textarea>
    </div>
    <div class="d-flex gap-2 mt-4">
      <slot name="actions"></slot>
    </div>
  </form>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
});

defineEmits(['update:title', 'update:content']);
</script>

<style lang="scss" scoped></style>
