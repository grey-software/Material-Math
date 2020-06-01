import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [ { path: '', component: () => import('pages/Index.vue') },
                { path: 'practice', component: () => import('pages/PracticeSession.vue') },
                { path: 'configure-practice-sessions', component: () => import('pages/ConfigurePractice.vue') }
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
