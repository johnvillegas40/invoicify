<template>
  <div class="rounded-md p-5 h-24 mt-4 w-full flex flex-row items-center justify-between" :class="darkModeState ? 'bg-app-color-3' : 'bg-white'">
    <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'" class="text-xs">Status</p>
    <PendingBadge />
  </div>
</template>

<script>
import { darkModeState } from "../state";
import PendingBadge from "./PendingBadge.vue";
export default {
    components: {
    PendingBadge,
  },
  setup() {
      return { darkModeState }
  }

}
</script>

<style>

</style>