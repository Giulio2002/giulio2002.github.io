<script setup lang="ts">
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
  } from 'mdb-vue-ui-kit';
import { ref } from 'vue';

const collapse3 = ref(false);
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
          <MDBNavbarItem class="item link" @click.prevent="downloadCV()" href="#curriculum"> /cv </MDBNavbarItem>
          <MDBNavbarItem class="link item" href="https://substack.com/@giulioswamp"> /blog </MDBNavbarItem>
          <MDBNavbarItem class="link item" href="https://github.com/Giulio2002"> /github </MDBNavbarItem>
          <MDBNavbarItem class="link item" href="https://twitter.com/GiulioRebuffo"> /twitter </MDBNavbarItem>
          <MDBNavbarItem class="link item" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> /inspiration </MDBNavbarItem>
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
  color: #fff;
  font-size: 1rem;
}
.brand-eth { color: var(--accent-2); }

.item {
    margin-left: 2px;
}
</style>

<script lang="ts">
import Axios from 'axios';

export default {

  methods: {
    downloadCV () {
      Axios.get("/cv.pdf", { responseType: 'blob' })
        .then(response => {
          const blob = new Blob([response.data], { type: 'application/pdf' })
          const link = document.createElement('a')
          link.href = URL.createObjectURL(blob)
          link.download = "cv.pdf"
          link.click()
          URL.revokeObjectURL(link.href)
      }).catch(console.error)
    }
  }
}
</script>
