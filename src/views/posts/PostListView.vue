<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <PostFilter
      v-model:title="params.title_like"
      v-model:limit="params._limit"
    />
    <hr class="my-4" />

    <AppLoading />
    <AppError message="Erroor!" />

    <AppGrid :items="posts">
      <template v-slot="{ item }">
        <PostItem
          :title="item.title"
          :content="item.content"
          :created-at="item.createdAt"
          @click="goPage(item.id)"
          @modal="openModal(item)"
        />
      </template>
    </AppGrid>
  </div>
  <AppPagination
    :current-page="params._page"
    :page-count="pageCount"
    @page="page => (params._page = page)"
  />

  <Teleport to="#modal">
    <PostModal v-model:show="show" :modalData="modalData" />
  </Teleport>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { getPosts } from '@/api/posts';
import PostItem from '@/components/posts/PostItem.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';

const router = useRouter();
const posts = ref([]);
const error = ref(null);
const loading = ref(false);
const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 3,
  title_like: '',
});

// pagination
const totalCount = ref(0);
const pageCount = computed(() => {
  return Math.ceil(totalCount.value / params.value._limit);
});

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value);
    posts.value = data;
    totalCount.value = headers['x-total-count'];
  } catch (error) {
    console.error(error);
  }
};
watchEffect(fetchPosts);
// fetchPosts();

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
