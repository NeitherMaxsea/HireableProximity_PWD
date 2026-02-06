<template>
  <Navbar />

  <div class="container">
    <!-- LEFT IMAGE -->
    <div class="left">
      <img src="@/assets/PWD_worker.png" alt="Worker" class="worker" />
    </div>

    <!-- RIGHT FORM -->
    <div class="right">
      <button class="back-btn-outline" @click="$router.push('/role')">
        ← Back to Choose Role
      </button>

      <div class="logo-container">
        <img src="@/assets/titlelogo.png" class="logo-img" />
      </div>

      <h2>Sign Up</h2>

      <!-- USERNAME -->
      <div class="form-group">
        <label>Username</label>
        <input type="text" placeholder="Enter username" v-model="username" />
      </div>

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
          <span v-if="password" class="toggle-eye" @click="togglePassword">👁</span>
        </div>
      </div>

      <!-- CONFIRM PASSWORD -->
      <div class="form-group password-group">
        <label>Confirm Password</label>
        <div class="password-wrapper">
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            placeholder="Confirm password"
            v-model="confirmPassword"
          />
          <span v-if="confirmPassword" class="toggle-eye" @click="toggleConfirmPassword">👁</span>
        </div>
      </div>

      <!-- PASSWORD RULES -->
      <div class="rules">
        <strong>Password Rules:</strong>
        <ul>
          <li :class="{ valid: rules.filled }">✔ All fields filled</li>
          <li :class="{ valid: rules.length }">✔ 8–16 characters</li>
          <li :class="{ valid: rules.upperLower }">✔ Upper & lowercase</li>
          <li :class="{ valid: rules.number }">✔ Number</li>
          <li :class="{ valid: rules.special }">✔ Special character</li>
          <li :class="{ valid: rules.match }">✔ Passwords match</li>
        </ul>
      </div>

      <!-- REGISTER BUTTON -->
      <button class="btn" @click="register" :disabled="loading">
        <span v-if="loading">Loading...</span>
        <span v-else>Register</span>
      </button>

      <p class="auth-link">
        Already have an account?
        <router-link to="/login">Login here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default {
  name: "Register",

  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
      loading: false
    };
  },

  computed: {
    rules() {
      return {
        filled: this.username && this.email && this.password && this.confirmPassword,
        length: this.password.length >= 8 && this.password.length <= 16,
        upperLower: /(?=.*[a-z])(?=.*[A-Z])/.test(this.password),
        number: /(?=.*\d)/.test(this.password),
        special: /(?=.*[@$!%*?&])/.test(this.password),
        match: this.password === this.confirmPassword && this.password.length > 0
      };
    },

    allValid() {
      return Object.values(this.rules).every(Boolean);
    }
  },

  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },

    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },

    register() {
      if (!this.allValid) {
        Toastify({
          text: "Please meet all password requirements",
          duration: 3000
        }).showToast();
        return;
      }

      Toastify({
        text: "✅ Registration successful (UI only, no Firebase)",
        duration: 3000
      }).showToast();

      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.back-btn-outline {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 8px 16px;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  color: #333;
  cursor: pointer;
  transition: 0.2s ease;
}

.back-btn-outline:hover {
  background: #f0f2f5;
}
</style>
