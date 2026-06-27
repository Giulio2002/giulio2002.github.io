<script setup lang="ts">
import { eips, statusPill } from '@/data/eips'

const finalEips = eips.filter((e) => e.group === 'final')
const otherEips = eips.filter((e) => e.group === 'other')
</script>

<template>
<div class="page">
  <div class="container">
    <div class="flex-item big">
      <p class="section-title centered">
        <img src="@/assets/rey.gif" alt="" aria-hidden="true" class="inverted smol" />
        <span class="grad">EIPs</span>
        <img src="@/assets/rey.gif" alt="" aria-hidden="true" class="smol" />
      </p>
      <p class="section-sub">
        Ethereum Improvement Proposals I've authored or co-authored. Several are
        <b>Final</b> and shipped in the Fusaka/Osaka upgrade path.
      </p>

      <!-- FINAL / SHIPPED -->
      <h3 class="centered" style="margin:30px 0 6px">Final &amp; shipped — Fusaka / Osaka</h3>
      <div class="card headline" v-for="e in finalEips" :key="e.id">
        <h3>
          EIP-{{ e.id }} — {{ e.title }}
          <span :class="statusPill(e.status)">{{ e.status }}</span>
        </h3>
        <div class="meta" v-if="e.meta">{{ e.meta }}</div>
        <p v-html="e.summary"></p>
        <a :href="e.url" target="_blank" rel="noopener">Read EIP-{{ e.id }} →</a>
      </div>

      <!-- AUTHORED / PROPOSALS -->
      <h3 class="centered" style="margin:36px 0 6px">Other authored EIPs &amp; proposals</h3>
      <div class="card" v-for="e in otherEips" :key="e.id">
        <h3>
          EIP-{{ e.id }} — {{ e.title }}
          <span :class="statusPill(e.status)">{{ e.status }}</span>
        </h3>
        <div class="meta" v-if="e.meta">{{ e.meta }}</div>
        <p v-html="e.summary"></p>
        <a :href="e.url" target="_blank" rel="noopener">Read EIP-{{ e.id }} →</a>
      </div>

      <p class="centered" style="color:var(--text-faint);font-family:var(--mono);margin-top:28px">
        protocol design never really stops — most of these live as threads on
        <a href="https://ethereum-magicians.org/" target="_blank" rel="noopener">Ethereum Magicians</a>.
      </p>
    </div>
  </div>
</div>
</template>
