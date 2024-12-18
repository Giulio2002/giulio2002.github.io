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
<MDBNavbar  expand="md" dark class="header">

    <MDBNavbarToggler
        target="#navbarExample03"
        @click="collapse3 = !collapse3"
      ></MDBNavbarToggler>
      <MDBCollapse id="#navbarExample03" v-model="collapse3">
        <MDBNavbarNav>
          <MDBNavbarItem  class="item" href="/"> /home </MDBNavbarItem>
          <MDBNavbarItem class="item" href="#eips"> /eips </MDBNavbarItem>
          <MDBNavbarItem class="item" href="#feats"> /work </MDBNavbarItem>
          <MDBNavbarItem class="item" href="#hackathons"> /hackathons </MDBNavbarItem>
          <MDBNavbarItem class="item" href="#stuffidoforfun"> /stuffidoforfun </MDBNavbarItem>
          <MDBNavbarItem class="item link" @click.prevent="downloadCV()" href="#curriculum"> /curriculum </MDBNavbarItem>
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
    text-decoration: underline;
}

.header {
    outline: 3px solid #333;
}


.item {
    margin-left: 5px;
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