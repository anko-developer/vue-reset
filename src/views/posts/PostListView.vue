<template>
  <h2>게시글 목록</h2>
  <hr class="my-4" />
  <PostFilter v-model:title="params.title_like" v-model:limit="params._limit" />
  <hr class="my-4" />

  <AppLoading v-if="loading" />

  <AppError v-else-if="error" :message="error.message" />
  <template v-else>
    <AppGrid :items="posts">
      <template v-slot="{ item }">
        <PostItem
          :title="item.title"
          :content="item.content"
          :created-at="item.createdAt"
          @click="goPage(item.id)"
          @modal="openModal(item)"
          @preview="selectPreview(item.id)"
        />
      </template>
    </AppGrid>

    <AppPagination
      :current-page="params._page"
      :page-count="pageCount"
      @page="page => (params._page = page)"
    />
  </template>

  <Teleport to="#modal">
    <PostModal v-model:show="show" :modalData="modalData" />
  </Teleport>

  <template v-if="previewId">
    <AppCard>
      <PostDetailView :id="previewId"></PostDetailView>
    </AppCard>
  </template>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import PostItem from '@/components/posts/PostItem.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
import { useAxios } from '@/composables/useAxios';
import PostDetailView from './PostDetailView.vue';

const router = useRouter();
const previewId = ref(null);
const selectPreview = id => (previewId.value = id);

const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 3,
  title_like: '',
});
const {
  response,
  data: posts,
  error,
  loading,
} = useAxios('/posts', { method: 'get', params });

// pagination
const totalCount = computed(() => response.value.headers['x-total-count']);
const pageCount = computed(() => {
  return Math.ceil(totalCount.value / params.value._limit);
});

const goPage = id => {
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
  });
};

// modal
const show = ref(false);
const modalData = ref({});
const openModal = ({ title, content, createdAt }) => {
  show.value = true;
  modalData.value = {
    title,
    content,
    createdAt,
  };
};
</script>

<style lang="scss" scoped></style>
