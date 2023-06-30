<script setup lang="ts">
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

  const collapse3 = ref(true);

</script>

<template>
<MDBNavbar  expand="md" dark >
    <MDBNavbarToggler
        target="#navbarExample03"
        @click="collapse3 = !collapse3"
      ></MDBNavbarToggler>
      <MDBCollapse id="#navbarExample03" v-model="collapse3">
        <MDBNavbarNav >
          <MDBNavbarItem href="/"> /home </MDBNavbarItem>
          <MDBNavbarItem href="/feats"> /feats </MDBNavbarItem>
          <MDBNavbarItem href="/hackathons"> /hackathons </MDBNavbarItem>
          <MDBNavbarItem href="/stuffidoforfun"> /stuffidoforfun </MDBNavbarItem>
          <MDBNavbarItem href="/curriculum"> /curriculum </MDBNavbarItem>
          <MDBNavbarItem class="link" href="https://substack.com/inbox"> /blog </MDBNavbarItem>
          <MDBNavbarItem class="link" href="https://github.com/Giulio2002"> /github </MDBNavbarItem>
          <MDBNavbarItem class="link" href="https://twitter.com/GiulioRebuffo"> /twitter </MDBNavbarItem>
          <MDBNavbarItem class="link" href="https://myanimelist.net/profile/GiulioRebuffo"> /myanimelist </MDBNavbarItem>
          <MDBNavbarItem class="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> /inspiration </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
</template>
<style>
.link {
    text-decoration: underline;
}
</style>
