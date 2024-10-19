<template>
  <div class="content-container">
    <slot />
  </div>
</template>

<script lang="ts">

onMounted(() => {
  console.log('ContentContainer mounted');
});



</script>


<style lang="scss">


</style>