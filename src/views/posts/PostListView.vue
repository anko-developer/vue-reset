<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <PostFilter
      v-model:title="params.title_like"
      v-model:limit="params._limit"
    />
    <hr class="my-4" />
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
    <!-- <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        />
      </div>
    </div> -->
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
import AppGrid from '@/components/AppGrid.vue';
import AppPagination from '@/components/AppPagination.vue';

const router = useRouter();
const posts = ref([]);
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
