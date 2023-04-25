import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginView,
        },
        {
            path: '/funds',
            name: 'Dashboard',
            component: () => import('@/views/DashboardView.vue'),
            children: [
                {
                    path: '/funds',
                    name: 'FundList',
                    component: () => import('@/views/FundListView.vue'),
                },
                {
                    path: '/smart-funds',
                    name: 'SmartFundListView',
                    component: () => import('@/views/SmartFundListView.vue'),
                },
                {
                    path: '/funds/:id',
                    name: 'FundDetail',
                    component: () => import('@/views/FundDetailsView.vue'),
                },
                {
                    path: '/about',
                    name: 'About',
                    // route level code-splitting
                    // this generates a separate chunk (About.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import('@/views/AboutView.vue'),
                },
                {
                    path: '/settings',
                    name: 'Settings',
                    component: () => import('@/views/SettingsView.vue'),
                },
            ],
        },
    ],
})

export default router
