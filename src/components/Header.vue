<script setup lang="ts">
import { ref, onMounted } from 'vue';

const open = ref(false); // mobile menu

// theme toggle — persisted, applied to <html data-theme>
const theme = ref<'dark' | 'light'>('dark');
function applyTheme(t: 'dark' | 'light') {
  theme.value = t;
  document.documentElement.setAttribute('data-theme', t);
  try { localStorage.setItem('theme', t); } catch (e) { /* ignore */ }
}
function toggleTheme() {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark');
}
function closeMenu() { open.value = false; }

onMounted(() => {
  const saved = (() => { try { return localStorage.getItem('theme'); } catch (e) { return null; } })();
  applyTheme(saved === 'light' ? 'light' : 'dark');
});
</script>

<template>
<nav class="header">
  <div class="nav-inner">
    <router-link class="brand" to="/" @click="closeMenu">
      <span class="brand-mark">gr</span>
      <span class="brand-name">giulio<span class="brand-eth">.eth</span></span>
    </router-link>

    <button
      class="hamburger"
      type="button"
      @click="open = !open"
      :aria-expanded="open"
      aria-label="Toggle navigation menu"
      aria-controls="nav-menu"
    >
      <i :class="open ? 'fas fa-xmark' : 'fas fa-bars'" aria-hidden="true"></i>
    </button>

    <div id="nav-menu" class="nav-menu" :class="{ open }">
      <router-link class="nav-link" to="/" @click="closeMenu">/home</router-link>
      <router-link class="nav-link" to="/feats" @click="closeMenu">/work</router-link>
      <router-link class="nav-link" to="/research" @click="closeMenu">/research</router-link>
      <router-link class="nav-link" to="/eips" @click="closeMenu">/eips</router-link>
      <router-link class="nav-link" to="/hackathons" @click="closeMenu">/hackathons</router-link>
      <router-link class="nav-link" to="/stuffidoforfun" @click="closeMenu">/fun</router-link>
      <a class="nav-link" href="/cv.pdf" target="_blank" rel="noopener">/cv</a>
      <a class="nav-link ext" href="https://substack.com/@giulioswamp" target="_blank" rel="noopener">/blog</a>
      <a class="nav-link ext" href="https://github.com/Giulio2002" target="_blank" rel="noopener">/github</a>
      <a class="nav-link ext" href="https://twitter.com/GiulioRebuffo" target="_blank" rel="noopener">/twitter</a>
      <a class="nav-link ext" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener">/inspiration</a>
      <button
        class="theme-toggle"
        type="button"
        @click="toggleTheme"
        :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
        :title="theme === 'dark' ? 'Light mode' : 'Dark mode'"
      >
        <i :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</nav>
</template>
