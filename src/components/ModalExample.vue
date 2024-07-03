<script setup lang="ts">
defineProps<{
    closeFn: () => void
}>()

</script>

<template>
  <div class="plugin-base">
    this is a modal
    <div>
        <input type="text"/>
        <input type="checkbox"/>

    </div>
    <div>
        <button class="full-width c-btn primary" @click="closeFn">close</button>
    </div>
  </div>
</template>

<style scoped>

</style>