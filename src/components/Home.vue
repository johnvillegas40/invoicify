<template>
  <div class="h-full bg-app">
    <div class="mt-10 mx-6 h-14 flex flex-row">
      <div class="w-full">
        <p :class="(darkModeState) ? ' text-white font-bold text-xl' : 'font-bold text-xl'">Invoices</p>
        <p :class="(darkModeState) ? 'text-xs text-app-color-5' : 'text-xs text-app-color-6' ">No Invoices</p>
      </div>
      <div class="flex flex-row pt-4 mr-4 pr-8">
        <p :class="(darkModeState) ? 'text-white text-xs font-bold pr-3' : 'text-xs font-bold pr-3' ">Filter</p>
        <img src="../assets/icon-arrow-down.svg" class="h-2 mt-1" alt="" />
      </div>
      <AddButton />
    </div>
    <div>
      <div class=" mt-24 flex flex-col items-center">
        <img src="../assets/illustration-empty.svg" alt="" />
        <p :class="(darkModeState) ? 'text-white mt-10 font-bold text-xl' : 'mt-10 font-bold text-xl'">There is nothing here</p>
        <p :class="(darkModeState) ? 'text-xs mt-7 text-app-color-5' : 'text-xs mt-7 text-app-color-6'">Create an invoice by clicking the</p>
        <p :class="(darkModeState) ? 'text-xs text-app-color-5' : 'text-xs text-app-color-6'"><strong>New</strong> button and get started</p>
      </div>
    </div>

  </div>
</template>

<script>
import { darkModeState } from '../state';
import AddButton from "./AddButton.vue";
export default {
  components: {
    AddButton,
  },
  setup() {
    //   let darkMode = darkModeState.value


    //   watch(
    //   () => darkmodeState.value,
    //   (dm) => {
    //     darkMode = dm
    //   }
    // );
      return { darkModeState }
  }
};
</script>

<style>
</style>