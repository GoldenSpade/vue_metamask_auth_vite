<template >
  <div class="auth">
    <div class="auth__message" v-if="authStore.showMessage">
      {{
        !authStore.isLoaded
          ? 'You are not logged in. Please log in using your MetaMask wallet.'
          : 'Thank you :)'
      }}
    </div>
    <button
      class="auth__btn"
      v-if="!authStore.isLoaded"
      @click="authStore.auth"
    >
      Log in
    </button>
  </div>
</template>

<script setup>
import { useAuth } from '../stores/authStore.js'

const authStore = useAuth()
</script>

<style lang="scss">
.auth {
  text-align: center;
  color: #fff;
  &__message {
    padding-bottom: 20px;
  }
  &__btn {
    color: #fff;
    background: #ff9501;
    font-size: 18px;
    font-weight: 600;
    padding: 15px 30px;
    border-radius: 10px;
    transition: background 500ms;
    &:hover {
      cursor: pointer;
      background: #ff7b00;
    }
  }
}
</style>