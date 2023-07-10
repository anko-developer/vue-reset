<template>
  <AppLoading v-if="loading" />

  <AppError v-else-if="error" :message="error.message" />
  <div v-else>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">
      {{ $dayjs(post.createdAt).format('YYYY. MM. DD HH:mm:ss') }}
    </p>
    <hr class="my-4" />
    <AppError v-if="removeError" :message="removeError.message" />
    <div class="row">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button
          class="btn btn-outline-danger"
          @click="remove"
          :disabled="removeLoading"
        >
          <template v-if="removeLoading">
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Loading...</span>
          </template>
          <template v-else> 삭제 </template>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';
import { useAxios } from '@/composables/useAxios';
import { useAlert } from '@/composables/useAlert';

const { vAlert, vSuccess } = useAlert();

const props = defineProps({
  id: {
    type: [String, Number],
  },
});
const router = useRouter();

const { error, loading, data: post } = useAxios(`/posts/${props.id}`);

const {
  error: removeError,
  loading: removeLoading,
  execute,
} = useAxios(
  `/posts/${props.id}`,
  { method: 'delete' },
  {
    immediate: false,
    onSuccess: () => {
      vSuccess('삭제가 완료되었습니다.');
      router.push({
        name: 'Post',
      });
    },
    onError: err => {
      vAlert(err.message);
    },
  },
);

const remove = async () => {
  if (!confirm('삭제 하실?')) return;
  execute();
};

const goListPage = () => {
  router.push('/post');
};
const goEditPage = () => {
  router.push({
    name: 'PostEdit',
    params: {
      id: props.id,
    },
  });
};
</script>

<style lang="scss" scoped></style>
