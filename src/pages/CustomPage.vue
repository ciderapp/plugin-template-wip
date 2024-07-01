<script setup lang="ts">
import {computed} from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

const cfg = computed(() => {
    return window.CiderApp.config.getRef();
})
</script>

<template>
  <div class="q-pa-lg">
    <h1 class="apple-heading">
        My Custom Page
    </h1>

    {{ cfg.general.displayName }}

    <p>
        This is a custom page. You can add your own content here.
    </p>
    <HelloWorld></HelloWorld>

  </div>
</template>

<style scoped></style>
