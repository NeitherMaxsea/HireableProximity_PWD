import { createRouter, createWebHistory } from 'vue-router'

// AUTH
import LoginPages from '@/module/Authentication/login-pages.vue'    
import register_pages from '@/module/Authentication/register_pages.vue'
import Role_pages from '@/module/Authentication/roled-based-pages.vue'

// ADMIN
import AdminLayout from '@/layout/adminlayout.vue'
import AdminDashboard from '@/module/Admin/views/Dashboard.vue'
import SidebarAdmin from '@/components/sidebar-admin.vue'
import NavbarAdmin from '@/components/navbar-admin.vue'

// EMPLOYER
import EmployerDashboard from '@/module/Employer/views/dashboard.vue'
import SidebarEmployer from '@/components/sb-employer.vue'
import NavbarEmployer from '@/components/nv-employer.vue'
import Applicant from '@/module/Employer/views/Applicant.vue'

const routes = [

  { path: '/', redirect: '/login' },

  {
    path: '/login',
    name: 'Login',
    component: LoginPages,
    meta: { title: "PWD Job Portal | Login" }
  },

  {
    path: '/register',
    name: 'Register',
    component: register_pages,
    meta: { title: "PWD Job Portal | Register" }
  },

  {
    path: '/role',
    name: 'Role',
    component: Role_pages,
    meta: { title: "PWD Job Portal | Role Selection" }
  },

  // ================= ADMIN TEST ROUTES =================

  {
    path: '/sidebar-admin',
    component: SidebarAdmin
  },

  {
    path: '/navbar-admin',
    component: NavbarAdmin
  },

  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard
      }
    ]
  },

  // ================= EMPLOYER =================

  {
    path: '/employer/dashboard',
    name: 'EmployerDashboard',
    component: EmployerDashboard
  },

  {
    path: '/applicant',
    name: 'Applicant',
    component: Applicant
  },

  {
    path: '/sidebar-employer',
    component: SidebarEmployer
  },

  {
    path: '/navbar-employer',
    component: NavbarEmployer
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
