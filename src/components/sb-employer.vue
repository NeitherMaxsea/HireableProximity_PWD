<template>
  <aside class="sidebar">

    <!-- BRAND -->
    <div class="brand">
      <div class="logo">LOGO</div>
      <div>
        <h4>PWD Portal</h4>
        <small>Dashboard Panel</small>
      </div>
    </div>

    <!-- NAV -->
    <nav>
      <router-link to="/employer/dashboard">Dashboard</router-link>
      <router-link to="/job-post">Job Posting</router-link>
      <router-link to="/applicant">Applicant Lists</router-link>
      <router-link to="/interview-scheduling">Interview Scheduling</router-link>
      <router-link to="/employee-records">Employee Records</router-link>
      <router-link to="/attendance">Attendance</router-link>
      <router-link to="/payroll">Payroll</router-link>
      <router-link to="/reports">Reports</router-link>
    </nav>

    <!-- PROFILE -->
    <div class="sidebar-bottom">

      <!-- PROFILE CLICK -->
      <div class="profile-wrapper" @click="toggleMenu">
        <div class="avatar">A</div>

        <div class="profile-info">
          <span class="profile-name">HR Admin</span>
          <span class="profile-email">hradmin@gmail.com</span>
        </div>
      </div>

      <!-- DROPDOWN MENU -->
      <div v-if="showMenu" class="profile-menu">

        <button class="menu-item">
          Help
        </button>

        <button class="menu-item">
          Settings
        </button>

        <button class="menu-item logout" @click="logout">
          Logout
        </button>

      </div>

    </div>

  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const showMenu = ref(false)
const router = useRouter()

function toggleMenu(){
  showMenu.value = !showMenu.value
}

function logout(){
  localStorage.clear()
  router.push('/login')
}
</script>

<style scoped>

.sidebar{
  width:250px;
  height:100vh;
  background:#ffffff;
  border-right:1px solid #e5e7eb;
  padding:20px;
  display:flex;
  flex-direction:column;
}

/* BRAND */
.brand{
  display:flex;
  gap:10px;
  margin-bottom:30px;
  align-items:center;
}

.logo{
  width:45px;
  height:45px;
  background:#2563eb;
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:10px;
  font-weight:bold;
}

/* NAV */
nav a{
  display:block;
  padding:12px;
  border-radius:8px;
  margin-bottom:6px;
  color:#374151;
  text-decoration:none;
}

nav a:hover,
nav a.router-link-active{
  background:#eef2ff;
  color:#2563eb;
}

/* PROFILE */
.sidebar-bottom{
  margin-top:auto;
  border-top:1px solid #e5e7eb;
  padding-top:15px;
  position:relative;
}

.profile-wrapper{
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
}

.avatar{
  width:38px;
  height:38px;
  background:#2563eb;
  color:white;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
}

.profile-name{
  font-weight:600;
  font-size:14px;
}

.profile-email{
  font-size:12px;
  color:#6b7280;
}

/* DROPDOWN */

.profile-menu{
  position:absolute;
  bottom:65px;
  left:0;
  width:100%;
  background:white;
  border:1px solid #e5e7eb;
  border-radius:10px;
  box-shadow:0 8px 20px rgba(0,0,0,0.08);
  padding:6px;
}

.menu-item{
  width:100%;
  padding:10px;
  background:none;
  border:none;
  text-align:left;
  border-radius:8px;
  cursor:pointer;
}

.menu-item:hover{
  background:#f3f4f6;
}

.menu-item.logout{
  color:#ef4444;
}

</style>
