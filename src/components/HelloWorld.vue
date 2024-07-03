<script setup lang="ts">
import { count } from '../store';

</script>

<template>
  <div class="plugin-base">
    Hello world!
    <button @click="count++">count is: {{ count }}</button>
  </div>
</template>

<style scoped>

</style>