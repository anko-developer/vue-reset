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
    props: true,
    // props: route => ({ id: parseInt(route.params.id) }),
  },
  {
    path: '/post/:id/edit',
    name: 'PostEdit',
    component: () => import('@/views/posts/PostEditView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
  },
  {
    path: '/nested',
    name: 'Nested',
    component: () => import('@/views/nested/NestedView.vue'),
    children: [
      {
        path: '',
        name: 'NestedHome',
        component: () => import('@/views/nested/NestedHome.vue'),
      },
      {
        path: 'one',
        name: 'NestedOne',
        component: () => import('@/views/nested/NestedOne.vue'),
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: () => import('@/views/nested/NestedTwo.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
