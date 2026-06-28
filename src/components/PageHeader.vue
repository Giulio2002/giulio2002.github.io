<script setup lang="ts">
import { computed } from 'vue'
import rey from '@/assets/rey.gif'
import smol from '@/assets/smol.gif'

const props = defineProps<{ title: string; gif?: 'rey' | 'smol' }>()
const gifSrc = computed(() => (props.gif === 'smol' ? smol : props.gif === 'rey' ? rey : null))
</script>

<template>
  <p class="section-title centered">
    <img v-if="gifSrc" :src="gifSrc" alt="" aria-hidden="true" class="inverted smol" />
    <span class="grad">{{ title }}</span>
    <img v-if="gifSrc" :src="gifSrc" alt="" aria-hidden="true" class="smol" />
  </p>
  <p class="section-sub"><slot /></p>
</template>
