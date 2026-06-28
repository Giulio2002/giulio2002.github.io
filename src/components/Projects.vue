<script setup lang="ts">
import { projects } from '@/data/projects'
</script>

<template>
<div class="page">
  <div class="container">
    <div class="flex-item big">
      <p class="section-title centered"><span class="grad">Stuff I've done</span></p>
      <p class="section-sub">
        Highlights of the serious work, roughly ordered by how suicidal they made me.
      </p>

      <div
        v-for="p in projects"
        :key="p.title"
        class="card"
        :class="{ headline: p.headline }"
      >
        <h3>
          {{ p.title }}
          <span v-if="p.pill" :class="p.pill[1]">{{ p.pill[0] }}</span>
        </h3>
        <div class="meta">{{ p.meta }}</div>
        <p v-html="p.body"></p>
        <ul v-if="p.bullets">
          <li v-for="(b, i) in p.bullets" :key="i" v-html="b"></li>
        </ul>
        <div class="tags">
          <span class="tag" v-for="t in p.tags" :key="t">{{ t }}</span>
        </div>
      </div>

    </div>
  </div>
</div>
</template>
