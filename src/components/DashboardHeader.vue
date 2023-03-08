<template>
  <div class="dashboard-header">
    <div class="dashboard-header__wrap" v-if="authStore.isLoaded">
      <div class="dashboard-header__item">
        Wallet:
        <span class="dashboard-header__item-value">{{
          authStore.walletCropped
        }}</span>
      </div>
      <div class="dashboard-header__item">
        Balance:
        <span class="dashboard-header__item-value">
          {{ authStore.balanceRounded }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '../stores/authStore.js'

const authStore = useAuth()
</script>

<style lang="scss">
.dashboard-header {
  color: #fff;
  padding: 20px 0;
  font-weight: 600;
  &__wrap {
    display: flex;
    justify-content: flex-end;
  }
  &__item {
    margin-right: 10px;
    background: #161620;
    padding: 10px 15px;
    border-radius: 5px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__item-value {
    font-weight: 500;
  }
}
</style>