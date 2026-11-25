<script setup lang="ts">
import { eips } from '@/data/eips'

const sections = [
  { heading: 'Shipped (Fusaka / Osaka)', items: eips.filter((e) => e.group === 'final') },
  { heading: 'Scheduled for Glamsterdam', items: eips.filter((e) => e.group === 'glamsterdam') },
  { heading: 'Active drafts & proposals', items: eips.filter((e) => e.group === 'active') },
  { heading: 'Earlier informational proposals', items: eips.filter((e) => e.group === 'historical') },
]
</script>

<template>
  <div>
    <h1>EIPs</h1>
    <p class="lead">
      Ethereum Improvement Proposals I have authored or co-authored. Most discussions live on
      <a href="https://ethereum-magicians.org/u/Giulio2002" target="_blank" rel="noopener">Ethereum Magicians</a>.
    </p>

    <section v-for="sec in sections" :key="sec.heading">
      <h2>{{ sec.heading }}</h2>
      <div class="eip-row" v-for="e in sec.items" :key="e.id">
        <div class="eip-id">
          <a :href="e.url" target="_blank" rel="noopener">EIP-{{ e.id }}</a>
        </div>
        <div>
          <div class="eip-title">{{ e.title }}</div>
          <div class="eip-sub">{{ e.status }} · {{ e.meta }}</div>
          <p class="eip-summary">{{ e.summary }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
