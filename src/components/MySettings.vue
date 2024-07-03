<script setup lang="ts">
import { useConfig } from "../config";

const cfg = useConfig()
</script>

<template>
  <div class="q-px-lg plugin-base">
    Custom settings page
    <div>
      <button @click="cfg.count++">config count is: {{ cfg.count }}</button>
    </div>
    <div>
      <label>
        <input type="checkbox" v-model="cfg.booleanOption" /> Switch Setting
      </label>
    </div>
    <div v-if="cfg.booleanOption">
      <label>
        Favorite Color
        <select class="c-select" v-model="cfg.favoriteColor">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </label>
    </div>
  </div>
</template>

<style scoped></style>
