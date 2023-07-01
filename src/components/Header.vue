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


function route(path: String) {
    
}

</script>

<template>
<MDBNavbar  expand="md" dark class="header">

    <MDBNavbarToggler
        target="#navbarExample03"
        @click="collapse3 = !collapse3"
      ></MDBNavbarToggler>
      <MDBCollapse id="#navbarExample03" v-model="collapse3">
        <MDBNavbarNav>
          <MDBNavbarItem  class="item" href="/"> / </MDBNavbarItem>
          <MDBNavbarItem class="item" href="/feats"> /feats </MDBNavbarItem>
          <MDBNavbarItem class="item" href="/hackathons"> /hackathons </MDBNavbarItem>
          <MDBNavbarItem class="item" href="/stuffidoforfun"> /stuffidoforfun </MDBNavbarItem>
          <MDBNavbarItem class="item" href="/curriculum"> /curriculum </MDBNavbarItem>
          <MDBNavbarItem class="link item" href="https://substack.com/inbox"> /blog </MDBNavbarItem>
          <MDBNavbarItem class="link item" href="https://github.com/Giulio2002"> /github </MDBNavbarItem>
          <MDBNavbarItem class="link item" href="https://twitter.com/GiulioRebuffo"> /twitter </MDBNavbarItem>
          <MDBNavbarItem class="link item" href="https://myanimelist.net/profile/GiulioRebuffo"> /myanimelist </MDBNavbarItem>
          <MDBNavbarItem class="link item" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> /inspiration </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
</template>
<style>
.link {
    text-decoration: underline;
}

@media all and (max-width: 768px) {
    .header {
        position: absolute;
    }
}


.item {
    margin-left: 5px;
}
</style>
