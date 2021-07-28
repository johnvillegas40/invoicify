<template>
  <div class="rounded-md p-5 h-24 mt-4 w-full flex flex-row items-center justify-between" :class="darkModeState ? 'bg-app-color-3' : 'bg-white'">
    <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'" class="text-xs">Status</p>
    <div v-if='status == "pending"'>
          <PendingBadge />
        </div>
        <div v-if='status == "paid"'>
          <PaidBadge />
        </div>
        <div v-if='status == "draft"'>
          <DraftBadge />
        </div>
  </div>
</template>

<script>
import { darkModeState } from "../state";
import PendingBadge from "./PendingBadge.vue";
import PaidBadge from "./PaidBadge.vue";
import DraftBadge from "./DraftBadge.vue";
export default {
    components: {
    PendingBadge,
    PaidBadge,
    DraftBadge
  },
  props: ['status'],
  setup(props) {
      const status = props.status
      return { darkModeState, status }
  }

}
</script>

<style>

</style>