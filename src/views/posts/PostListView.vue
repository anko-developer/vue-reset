<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        />
      </div>
    </div>
  </div>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
  <hr class="my-4" />
  <PostDetailView :id="1"></PostDetailView>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPosts } from '@/api/posts';
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';

const router = useRouter();
const posts = ref([]);
const prarams = ref({
  _sort: 'createdAt',
  _order: 'desc',
});

const fetchPosts = async () => {
  try {
    const { data } = await getPosts(prarams.value);
    posts.value = data;
  } catch (error) {
    console.error(error);
  }
};
fetchPosts();

const goPage = id => {
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
  });
};
</script>

<style lang="scss" scoped></style>
