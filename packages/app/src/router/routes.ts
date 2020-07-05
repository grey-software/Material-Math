import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
<<<<<<< HEAD
      { path: 'practice', component: () => import('pages/PracticePage.vue') },
      { path: '', component: () => import('pages/HomePage.vue') },
=======
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'config', component: () => import('pages/ConfigurePracticeSession.vue') },
>>>>>>> master
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
