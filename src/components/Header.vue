<script setup lang="ts">
import { ref, onMounted } from 'vue'

const theme = ref<'light' | 'dark'>('light')

function toggleTheme() {
  const next = theme.value === 'dark' ? 'light' : 'dark'
  theme.value = next
  document.documentElement.setAttribute('data-theme', next)
  try {
    localStorage.setItem('theme', next)
  } catch {
    /* ignore storage errors */
  }
}

onMounted(() => {
  theme.value = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
})
</script>

<template>
  <header class="site-header">
    <div class="wrap nav-row">
      <router-link class="site-name" to="/">Giulio Rebuffo</router-link>
      <nav class="nav-links" aria-label="Main navigation">
        <router-link to="/feats">work</router-link>
        <router-link to="/research">research</router-link>
        <router-link to="/eips">eips</router-link>
        <router-link to="/hackathons">hackathons</router-link>
        <router-link to="/stuffidoforfun">fun</router-link>
        <a href="/cv.pdf" target="_blank" rel="noopener">cv</a>
        <button
          class="theme-btn"
          type="button"
          @click="toggleTheme"
          :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
        >
          [{{ theme === 'dark' ? 'light' : 'dark' }}]
        </button>
      </nav>
    </div>
  </header>
</template>
