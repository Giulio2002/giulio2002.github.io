<script setup lang="ts">
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
  } from 'mdb-vue-ui-kit';
import { ref, onMounted } from 'vue';

const collapse3 = ref(false);

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
onMounted(() => {
  const saved = (() => { try { return localStorage.getItem('theme'); } catch (e) { return null; } })();
  applyTheme(saved === 'light' ? 'light' : 'dark');
});
</script>

<template>
<MDBNavbar expand="md" dark class="header">
    <a class="brand" href="#/">
      <span class="brand-mark">gr</span>
      <span class="brand-name">giulio<span class="brand-eth">.eth</span></span>
    </a>

    <MDBNavbarToggler
        target="#navbarExample03"
        @click="collapse3 = !collapse3"
      ></MDBNavbarToggler>
      <MDBCollapse id="navbarExample03" v-model="collapse3">
        <MDBNavbarNav>
          <MDBNavbarItem class="item" to="/"> /home </MDBNavbarItem>
          <MDBNavbarItem class="item" to="/feats"> /work </MDBNavbarItem>
          <MDBNavbarItem class="item" to="/research"> /research </MDBNavbarItem>
          <MDBNavbarItem class="item" to="/eips"> /eips </MDBNavbarItem>
          <MDBNavbarItem class="item" to="/hackathons"> /hackathons </MDBNavbarItem>
          <MDBNavbarItem class="item" to="/stuffidoforfun"> /fun </MDBNavbarItem>
          <MDBNavbarItem class="item link" href="/cv.pdf" :newTab="true"> /cv </MDBNavbarItem>
          <MDBNavbarItem class="link item" href="https://substack.com/@giulioswamp"> /blog </MDBNavbarItem>
          <MDBNavbarItem class="link item" href="https://github.com/Giulio2002"> /github </MDBNavbarItem>
          <MDBNavbarItem class="link item" href="https://twitter.com/GiulioRebuffo"> /twitter </MDBNavbarItem>
          <MDBNavbarItem class="link item" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> /inspiration </MDBNavbarItem>
          <li class="nav-item theme-li">
            <button
              class="theme-toggle"
              type="button"
              @click="toggleTheme"
              :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
              :title="theme === 'dark' ? 'Light mode' : 'Dark mode'"
            >
              <i :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" aria-hidden="true"></i>
            </button>
          </li>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
</template>

<style>
.link {
    text-decoration: none;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 14px;
  border-bottom: none;
  white-space: nowrap;
}
.brand:hover { border-bottom: none; }
.brand-mark {
  font-family: var(--mono);
  font-weight: 700;
  font-size: 0.95rem;
  color: #0b0c10;
  background: var(--accent-grad);
  border-radius: 8px;
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.brand-name {
  font-family: var(--mono);
  font-weight: 700;
  color: var(--text);
  font-size: 1rem;
}
.brand-eth { color: var(--accent-2); }

.item {
    margin-left: 2px;
}

.theme-li { display: flex; align-items: center; margin-left: 4px; }
.theme-toggle {
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text-dim);
  border-radius: 8px;
  width: 34px;
  height: 34px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.16s ease;
}
.theme-toggle:hover {
  color: var(--text);
  border-color: var(--accent);
  transform: translateY(-1px);
}
</style>
