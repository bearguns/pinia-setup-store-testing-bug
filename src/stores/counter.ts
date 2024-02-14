import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, watch } from "vue";
export const useCounter = defineStore('counter', () => {
  const count = ref(0);
  const tallies = ref(0);

  function tally() {
    tallies.value = tallies.value +1;
  }

  watch(count, () => tally());

  return { count, tally, tallies };
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta))
}
