<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <div class="container">
      <!-- LEFT IMAGE -->
      <div class="left">
        <img src="@/assets/PWD_login.png" alt="Worker" class="worker" />
      </div>

      <!-- RIGHT FORM -->
      <div class="right" :class="{ 'fade-in': isVisible }">
        <!-- PAGE LOADING -->
        <div v-if="pageLoading" class="page-loading">
          <div class="loader"></div>
        </div>

        <div class="logo-container">
          <img src="@/assets/titlelogo.png" class="logo-img" />
        </div>

          <h2 class="form-h2">
        Welcome!
        <p class="form-p">
          Your journey to meaningful and inclusive employment starts here.
        </p>
      </h2>


        <!-- EMAIL -->
        <div class="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email" v-model="email" />
        </div>

        <!-- PASSWORD -->
        <div class="form-group password-group">
          <label>Password</label>
          <div class="password-wrapper">
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter password"
              v-model="password"
            />
            <span class="toggle-eye" @click="togglePassword">👁</span>
          </div>

          <div class="forgot-password">
            <router-link to="/forgot-password">Forgot password?</router-link>
          </div>
        </div>

        <!-- LOGIN BUTTON -->
        <button class="btn" @click="login" :disabled="loading">
          <span v-if="loading" class="spinner"></span>
          <span v-else>Login</span>
        </button>

        <!-- REGISTER LINK -->
        <p class="auth-link">
          Don’t have an account?
          <a href="#" @click.prevent="goRegister">Register here</a>
        </p>

        <!-- DIVIDER -->
        <div class="divider">
          <span>OR</span>
        </div>

        <!-- GOOGLE BUTTON (UI ONLY) -->
        <button class="google-btn" disabled>
          Continue with Google (coming soon)
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

import "@/assets/Styles/styles.css"
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

// Router
const router = useRouter()

// Form state
const email = ref("")
const password = ref("")
const showPassword = ref(false)
const loading = ref(false)

// Animation state
const pageLoading = ref(true)
const isVisible = ref(false)

onMounted(() => {
  // Show the login form after loading animation
  setTimeout(() => {
    pageLoading.value = false
    isVisible.value = true
  }, 500)
})

// Toggle password visibility
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

// Navigate to Role Selection page on Register click
const goRegister = () => {
  isVisible.value = false
  setTimeout(() => {
    router.push("/role")  // This is your roles-base-pages.vue
  }, 300)
}

// Temporary login function (UI only)
const login = () => {
  if (!email.value || !password.value) {
    Toastify({
      text: "Please enter your email and password",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "#e74c3c",
    }).showToast()
    return
  }

  loading.value = true

  setTimeout(() => {
    Toastify({
      text: "Login successful!",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "#2ecc71",
    }).showToast()

    router.push("/applicant/dashboard")  // Change as needed
    loading.value = false
  }, 800)
}
</script>

