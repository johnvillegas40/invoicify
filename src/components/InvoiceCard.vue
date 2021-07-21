<template>
  <div class="rounded-md p-5 h-32 w-full" :class="darkModeState ? 'bg-app-color-3' : 'bg-white'">
    <div class="flex flex-col h-full w-full justify-between">
      <div class="flex flex-row justify-between">
        <p :class="darkModeState ? 'text-white' : ''" class="text-xs font-bold">
          <span class="text-app-color-7">#</span>
          XM9141
        </p>
        <p :class="darkModeState ? 'text-white' : 'text-app-color-idn'" class="text-xs">Alex Grim</p>
      </div>
      <div class="flex flex-row justify-between">
        <div class="flex flex-col">
          <p class="text-xs text-app-color-7 pb-2">Due Sept 20 2021</p>
          <p :class="darkModeState ? 'text-white' : ''" class="font-semibold">$556.95</p>
        </div>
        <PendingBadge />
      </div>
    </div>
  </div>
</template>

<script>
import PaidBadge from "./PaidBadge.vue";
import PendingBadge from "./PendingBadge.vue";
import { darkModeState } from "../state";
export default {
  components: {
    PaidBadge,
    PendingBadge,
  },
  setup() {
    return { darkModeState };
  },
};
</script>

<style></style>
