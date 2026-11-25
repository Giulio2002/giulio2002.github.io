<script setup lang="ts">
import SiteHeader from './components/Header.vue'
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <SiteHeader />
  <main id="main">
    <div class="wrap">
      <router-view />
    </div>
  </main>
  <footer class="site-footer">
    <div class="wrap footer-row">
      <span>Giulio Rebuffo</span>
      <span class="footer-links">
        <a href="https://github.com/Giulio2002" target="_blank" rel="noopener">github</a>
        <a href="https://x.com/GiulioRebuffo" target="_blank" rel="noopener">twitter</a>
        <a href="https://giulioswamp.substack.com" target="_blank" rel="noopener">blog</a>
        <a href="mailto:giulio.rebuffo@gmail.com">email</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener">inspiration</a>
      </span>
    </div>
  </footer>
</template>
