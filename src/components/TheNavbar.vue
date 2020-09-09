<template>
  <header class="header" id="header">
    <router-link :to="{ name: 'Home' }" class="logo">
      <img src="../assets/img/vueschool-logo.png" alt="Logo Vueschool" />
    </router-link>

    <li class="navbar-user">
      <router-link :to="{ name: 'Profile' }">
        <img :src="user.avatar" alt="image avatar" class="avatar-small" />
        <span>
          {{ user.name }}
        </span>
      </router-link>
    </li>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "authUser"
    })
  }
};
</script>

<style scoped></style>
