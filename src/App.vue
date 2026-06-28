<script setup lang="ts">
import NavBar from './components/Header.vue'
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <NavBar/>
  <main id="main">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <footer class="footer">
    <div class="container">
      <span>© 2016–2026 Giulio Rebuffo · built with too much caffeine</span>
      <span class="footer-links">
        <a href="https://github.com/Giulio2002">github</a>
        <a href="https://twitter.com/GiulioRebuffo">twitter</a>
        <a href="https://substack.com/@giulioswamp">blog</a>
        <a href="mailto:giulio.rebuffo@gmail.com">email</a>
      </span>
    </div>
  </footer>
</template>

<style scoped>
#app {
  font-family: var(--sans);
}
main {
  min-height: 70vh;
}
</style>
