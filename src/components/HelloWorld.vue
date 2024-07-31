<script setup lang="ts">
import { useMainStore } from '../stores/main';

const store = useMainStore();

</script>

<template>
  <div class="plugin-base">
    Hello world!
    <br>
    <button class="c-btn primary" @click="store.count++">count is: {{ store.count }}</button>
    <br>
    (doubled: {{ store.doubled }})
  </div>
</template>

<style scoped>

</style>