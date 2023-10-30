import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/components/Login.vue')
    },
    {
        path: '/bookmarks',
        name: 'bookmarks',
        component: () => import('@/components/BookmarksList.vue')
    },
    {
        path: '/bookmarks/new',
        name: 'bookmarks-new',
        component: () => import('@/components/BookmarkForm.vue')
    },
    {
        path: '/bookmarks/:id',
        name: 'bookmarks-detail',
        component: () => import('@/components/BookmarkDetail.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;