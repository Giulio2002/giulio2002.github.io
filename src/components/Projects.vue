<script setup lang="ts">
import { projects } from '@/data/projects'
</script>

<template>
  <div>
    <h1>Work</h1>
    <p class="lead">
      Highlights of the serious stuff, roughly newest first (and historically ordered by how
      suicidal they made me).
    </p>

    <article class="entry" v-for="p in projects" :key="p.title">
      <div class="entry-head">
        <h3>{{ p.title }}</h3>
        <span class="entry-meta">{{ p.meta }}</span>
      </div>
      <p>{{ p.body }}</p>
      <ul v-if="p.bullets">
        <li v-for="(b, i) in p.bullets" :key="i">{{ b }}</li>
      </ul>
      <div class="entry-links" v-if="p.links && p.links.length">
        <a v-for="l in p.links" :key="l.url" :href="l.url" target="_blank" rel="noopener">
          {{ l.label }}
        </a>
      </div>
    </article>
  </div>
</template>
