<script setup lang="ts">
import rey from '@/assets/rey.gif'
</script>

<template>
  <div>
    <h1 class="page-title">
      <span>Hackathons</span>
      <img :src="rey" alt="" aria-hidden="true" class="tiny-gif" />
    </h1>
    <p class="lead">Mostly Verkle Trees, and one solo grand prize.</p>

    <article class="entry">
      <div class="entry-head">
        <h3>Lisbon Hackathon (Grand Prize, solo)</h3>
        <span class="entry-meta">Oct 2022 · team of 1</span>
      </div>
      <p>
        After Berlin, management flew me out (all paid) to the next hackathon. My teammates could
        not make it, so I went up against teams of five completely solo and won the Grand Prize.
        The project was a precomputation-based approach to Ethereum's Verkle Tree transition:
        generating the tree used to take ~7 days, and my approach cut it down to ~6 hours. The
        solution is genuinely the simplest thing you can imagine.
      </p>
      <div class="entry-links">
        <a href="https://github.com/Giulio2002/verkleipfs" target="_blank" rel="noopener">verkleipfs</a>
      </div>
    </article>

    <article class="entry">
      <div class="entry-head">
        <h3>Berlin Hackathon</h3>
        <span class="entry-meta">Sep 2022</span>
      </div>
      <p>
        Built a prototype for the Verkle Tree transition of Ethereum mainnet with Nicholas (a dev
        from Ubisoft) and Enrique (a coworker and friend from high school). In three days we
        bootstrapped a working EVM chain with Otterscan as the block explorer and Docker for
        containers. We lost to Dandelion, a team of five skilled core devs, which is respectable
        company.
      </p>
      <div class="entry-links">
        <a href="https://github.com/Giulio2002/Erigon-Verkled" target="_blank" rel="noopener">Erigon-Verkled</a>
      </div>
    </article>
  </div>
</template>
