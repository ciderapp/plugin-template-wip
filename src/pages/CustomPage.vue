<script setup lang="ts">
import {computed} from 'vue';
import HelloWorld from '../components/HelloWorld.vue';
import CComponent from '../api/CComponent.vue';

const cfg = computed(() => {
    return window.CiderApp.config.getRef();
})
</script>

<template>
  <div class="q-pa-lg plugin-base">
    <h1 class="apple-heading">
        My Custom Page
    </h1>

    <CComponent name="MojavePlayer"></CComponent>

    {{ cfg.general.displayName }}

    <p>
        This is a custom page. You can add your own content here.
    </p>
    <HelloWorld></HelloWorld>

  </div>
</template>

<style scoped></style>
