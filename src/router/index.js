import { createRouter, createWebHistory } from 'vue-router'
import ExamOneView from '../views/ExamOneView.vue'
import ExamTwoView from '../views/ExamTwoView.vue'
import ExamThreeView from '../views/ExamThreeView.vue'
import ExamFourView from '../views/ExamFourView.vue'


const routes = [
  {
    path: '/one',
    name: 'oneView',
    component: ExamOneView
  },
  {
    path: '/two',
    name: 'twoView',
    component: ExamTwoView
  },
  {
    path: '/three',
    name: 'threeView',
    component: ExamThreeView
  },
  {
    path: '/four',
    name: 'fourView',
    component: ExamFourView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
