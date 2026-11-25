<script setup lang="ts">
import { eips, statusPill } from '@/data/eips'
import PageHeader from '@/components/PageHeader.vue'

const finalEips = eips.filter((e) => e.group === 'final')
const glamsterdamEips = eips.filter((e) => e.group === 'glamsterdam')
const activeEips = eips.filter((e) => e.group === 'active')
const historicalEips = eips.filter((e) => e.group === 'historical')
</script>

<template>
<div class="page">
  <div class="container">
    <div class="flex-item big">
      <PageHeader title="EIPs" gif="rey">
        Ethereum Improvement Proposals I've authored or co-authored — four <b>Final</b> in
        Fusaka/Osaka, two <b>Scheduled for Glamsterdam</b>, plus active protocol &amp;
        post-quantum proposals.
      </PageHeader>

      <!-- FINAL / SHIPPED -->
      <h3 class="centered" style="margin:30px 0 6px">Final &amp; shipped — Fusaka / Osaka</h3>
      <div class="card headline" v-for="e in finalEips" :key="e.id">
        <h3>
          EIP-{{ e.id }} — {{ e.title }}
          <span :class="statusPill(e.status)">{{ e.status }}</span>
        </h3>
        <div class="meta" v-if="e.meta">{{ e.meta }}</div>
        <p v-html="e.summary"></p>
        <a :href="e.url" target="_blank" rel="noopener">{{ e.linkLabel || `Read EIP-${e.id} →` }}</a>
      </div>

      <!-- SCHEDULED FOR GLAMSTERDAM -->
      <h3 class="centered" style="margin:36px 0 6px">Scheduled for Glamsterdam</h3>
      <div class="card headline" v-for="e in glamsterdamEips" :key="e.id">
        <h3>
          EIP-{{ e.id }} — {{ e.title }}
          <span :class="statusPill(e.status)">{{ e.status }}</span>
        </h3>
        <div class="meta" v-if="e.meta">{{ e.meta }}</div>
        <p v-html="e.summary"></p>
        <a :href="e.url" target="_blank" rel="noopener">{{ e.linkLabel || `Read EIP-${e.id} →` }}</a>
      </div>

      <!-- ACTIVE DRAFTS & PROPOSALS -->
      <h3 class="centered" style="margin:36px 0 6px">Active drafts &amp; proposals</h3>
      <div class="card" v-for="e in activeEips" :key="e.id">
        <h3>
          EIP-{{ e.id }} — {{ e.title }}
          <span :class="statusPill(e.status)">{{ e.status }}</span>
        </h3>
        <div class="meta" v-if="e.meta">{{ e.meta }}</div>
        <p v-html="e.summary"></p>
        <a :href="e.url" target="_blank" rel="noopener">{{ e.linkLabel || `Read EIP-${e.id} →` }}</a>
      </div>

      <!-- HISTORICAL -->
      <h3 class="centered" style="margin:36px 0 6px">Earlier informational proposals</h3>
      <div class="card" v-for="e in historicalEips" :key="e.id">
        <h3>
          EIP-{{ e.id }} — {{ e.title }}
          <span :class="statusPill(e.status)">{{ e.status }}</span>
        </h3>
        <div class="meta" v-if="e.meta">{{ e.meta }}</div>
        <p v-html="e.summary"></p>
        <a :href="e.url" target="_blank" rel="noopener">{{ e.linkLabel || `Read EIP-${e.id} →` }}</a>
      </div>

      <p class="centered" style="color:var(--text-faint);font-family:var(--mono);margin-top:28px">
        protocol design never really stops — most of these live as threads on
        <a href="https://ethereum-magicians.org/u/Giulio2002" target="_blank" rel="noopener">Ethereum Magicians</a>.
      </p>
    </div>
  </div>
</div>
</template>
