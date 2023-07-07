<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-dark me-1"
          @click="goListPage"
        >
          목록
        </button>
        <button type="submit" class="btn btn-primary">저장</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/useAlert';

const { vAlert, vSuccess } = useAlert();
const router = useRouter();
const form = ref({
  title: null,
  content: null,
});
const save = async () => {
  try {
    await createPost({
      ...form.value,
      createdAt: Date.now(),
    });
    vSuccess('등록이 완료되었습니다.');
    // router.push({
    //   name: 'Post',
    // });
  } catch (error) {
    vAlert(error.message);
    console.error(error);
  }
};
const goListPage = () => {
  router.push({
    name: 'Post',
  });
};
</script>

<style lang="scss" scoped></style>
