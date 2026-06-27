<script setup lang="ts">
</script>

<template>
<div class="page">
  <div class="container">
    <div class="flex-item big">
      <p class="section-title centered">
        <img src="@/assets/rey.gif" alt="" aria-hidden="true" class="inverted smol" />
        <span class="grad">Hackathons</span>
        <img src="@/assets/rey.gif" alt="" aria-hidden="true" class="smol" />
      </p>
      <p class="section-sub">Verkle Trees, mostly. And one solo grand prize.</p>

      <div class="card">
        <h3>Berlin Hackathon <span class="pill">Sep 2022</span></h3>
        <p>
          I built a prototype for the Verkle Tree transition of Ethereum mainnet, teamed up with
          Nicholas (a dev from Ubisoft) and Enrique (a coworker and friend from high school). In
          three days we bootstrapped a working EVM-based chain with Otterscan as the block
          explorer and Docker for containers. We lost to Dandelion — a team of five skilled
          core devs — so, respectable company.
        </p>
        <a href="https://github.com/Giulio2002/Erigon-Verkled" target="_blank">
          Erigon-Verkled on GitHub →</a>
      </div>

      <div class="card headline">
        <h3>Lisbon Hackathon <span class="pill live">grand prize 🏆</span></h3>
        <div class="meta">Oct 2022 · team size: 1</div>
        <p>
          After Berlin, management flew me out (all paid) to the next hackathon. My teammates
          couldn't make it — so I squared up against teams of five completely solo. And won the
          <b>Grand Prize</b> as a team of exactly me. The project was a different approach to the
          Verkle Tree transition based on precomputation: Verkle trees used to take ~7 days to
          generate; my approach got it down to <b>~6 hours</b>. The solution is genuinely the
          simplest thing you can imagine.
        </p>
        <a href="https://github.com/Giulio2002/verkleipfs" target="_blank">
          verkleipfs on GitHub →</a>
      </div>
    </div>
  </div>
</div>
</template>
