import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import taskEdit from '../views/taskEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/task/edit/:taskId',
      name: 'task-edit',
      component: taskEdit,
    },
  ],
})

export default router
