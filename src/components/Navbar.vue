<template>
  <div class="navbar">
    <div class="nav-item">
      <router-link class="nav-link" :to="{ name: 'home' }"> Home </router-link>
      <span class="nav-link-span">Search:</span>

      <router-link class="nav-link" :to="{ name: 'singup' }">
        Auth
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.navbar
  position: relative
  background: $graynav
  padding: 15px
  text-align: center
  justify-content: space-between

.nav-link
  text-decoration: none
  color: #fff
  font-weight: bold
  font-size: 18px
  margin: 0 70px
  letter-spacing: 1px

.nav-link-span
  text-decoration: none
  color: #fff
  font-weight: bold
  font-size: 18px
  margin: 0 70px
  letter-spacing: 1px
.nav-link:hover
  color: $violet
</style>
