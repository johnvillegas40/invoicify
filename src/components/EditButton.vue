<template>
  <div :class="darkModeState ? 'bg-app-color-4' : 'bg-app-color-discard'" class="h-14 w-24  rounded-full flex flex-row items-center justify-center">
    <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'" class=" text-xs font-bold">Discard</p>
  </div>
</template>

<script>
import { darkModeState } from "../state";
export default {
setup() {
    return {darkModeState}
}
};
</script>

<style></style>
