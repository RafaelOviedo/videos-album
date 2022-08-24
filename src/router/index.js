import { createRouter, createWebHistory } from 'vue-router';
import Videos from '../views/Videos';
import About from '../views/About';

const routes = [
    {
        path: '/',
        name: 'VideosPage',
        component: Videos
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;