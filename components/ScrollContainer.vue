<template>
  <div :class="combined">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  classes?: string;
}>();

const defaults:string = 'scroll-container';

const combined = computed(() => {
  return [defaults, props.classes].filter(Boolean).join(' ');
});


</script>
<style lang="scss" scoped>
.scroll-container {
  overflow: auto;
  height: 100%;
}
</style>
