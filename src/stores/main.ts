import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useMainStore = defineStore('main-store', () => {

  const count = ref(0);

  const doubled = computed(() => count.value * 2);

  return {
    count,
    doubled,
  }
})