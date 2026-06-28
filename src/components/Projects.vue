<script setup lang="ts">
import { projects } from '@/data/projects'
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
<div class="page">
  <div class="container">
    <div class="flex-item big">
      <PageHeader title="Stuff I've done">
        Highlights of the serious work, roughly ordered by how suicidal they made me.
      </PageHeader>

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
