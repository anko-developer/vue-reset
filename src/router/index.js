import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('@/views/posts/PostListView.vue'),
  },
  {
    path: '/post/create',
    name: 'PostsCreate',
    component: () => import('@/views/posts/PostCreateView.vue'),
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: () => import('@/views/posts/PostDetailView.vue'),
  },
  {
    path: '/post/:id/edit',
    name: 'PostEdit',
    component: () => import('@/views/posts/PostEditView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
