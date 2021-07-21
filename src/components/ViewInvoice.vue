<template>
  <div class="flex flex-col">
    <div @click="clickModal" class="flex flex-row w-full">
      <img src="../assets/icon-arrow-left.svg" class="mt-2 mr-2 mb-2" alt="" />
      <p :class="darkModeState ? 'ml-3 mt-2 text-xs font-bold text-white' : 'ml-3 mt-2 text-xs font-bold'">Go back</p>
    </div>
    <ViewStatus />
    <div class="rounded-md p-5 h-auto w-full mt-3 mb-14" :class="darkModeState ? 'bg-app-color-3' : 'bg-white'">
      <div class="flex flex-col h-full w-full">
        <div class="flex flex-col">
          <p :class="darkModeState ? 'text-white' : ''" class="text-xs font-bold">
            <span class="text-app-color-7">#</span>
            XM9141
          </p>
          <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs mt-1">Graphic Design</p>
        </div>
        <div class="flex flex-col mt-6">
          <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs  mt-1">19 Union Terrace</p>
          <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs ">London</p>
          <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs">E1 3EZ</p>
          <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs">United Kingdom</p>
        </div>
        <div class="flex flex-row mt-8">
          <div class="flex flex-col">
            <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs">Invoice Date</p>
            <p :class="darkModeState ? 'text-white' : 'text-black'" class="mt-2 text-lg font-semibold">Aug 21 2021</p>
            <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs mt-8">Payment Due</p>
            <p :class="darkModeState ? 'text-white' : 'text-black'" class="mt-2 text-lg font-semibold">Sep 20 2021</p>
          </div>
          <div class="flex flex-col ml-12">
            <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs">Bill To</p>
            <p :class="darkModeState ? 'text-white' : 'text-black'" class="mt-2 text-lg font-semibold">Alex Grim</p>
            <div class="flex flex-col mt-2">
              <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs">19 Union Terrace</p>
              <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs mt-1">London</p>
              <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs mt-1">E1 3EZ</p>
              <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs mt-1">United Kingdom</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-4">
            <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs mt-8">Sent To</p>
            <p :class="darkModeState ? 'text-white' : 'text-black'" class="mt-2 text-lg font-semibold">alexgrim@mail.com</p>
        </div>
        <div :class="darkModeState ? 'bg-app-color-4' : 'bg-app-color-view-bg'" class="flex flex-col w-full h-auto mt-8  rounded-lg">
          <div class="w-full px-7 pt-7 h-auto flex flex-col">
            <div class="flex flex-row justify-between">
              <div class="flex flex-col">
                <p :class="darkModeState ? 'text-white' : 'text-black'" class="text-xs font-bold">Banner Design</p>
                <div class="mt-2">
                  <p class="text-xs font-bold text-app-color-7">1 x  $156.00</p>
                </div>
                
              </div>
              <div class="flex flex-row items-center">
                <p :class="darkModeState ? 'text-white' : 'text-black'"  class="text-xs font-bold">$156.00</p>
              </div>
            </div>
            <div class="flex flex-row justify-between mt-8 mb-8">
              <div class="flex flex-col">
                <p :class="darkModeState ? 'text-white' : 'text-black'" class="text-xs font-bold">Email Design</p>
                <div class="mt-2">
                  <p class="text-xs  font-bold text-app-color-7">2 x  $200.00</p>
                </div>
                
              </div>
              <div class="flex flex-row items-center">
                <p :class="darkModeState ? 'text-white' : 'text-black'" class="text-xs font-bold">$400.00</p>
              </div>
            </div>
            
          </div>
          <div class="w-full h-20 bg-app-color-0 rounded-b-lg px-7 flex flex-row items-center justify-between">
            <p class="text-xs text-white">Grand Total</p>
            <p class="text-2xl font-bold text-white">$556.00</p>
          </div>
        </div>
      </div>
    </div>
    <div :class="darkModeState ? 'bg-app-color-3' : 'bg-white'" class="flex flex-row h-20 mb-20 mt-2 items-center  -mx-7 justify-between px-7">
      <EditButton class="mr-2" />
      <DeleteButton class="mr-2" />
      <SaveButton :buttonText="'Mark as Paid'" />
    </div>
  </div>
</template>

<script>
import { ref, toRefs } from "vue";
import { darkModeState } from "../state";
import AddButton from "./AddButton.vue";
import Header from "./Header.vue";
import SaveButton from "./SaveButton.vue";
import DeleteButton from "./DeleteButton.vue";
import EditButton from "./EditButton.vue";
import ViewStatus from "./ViewStatus.vue";
export default {
  components: {
    AddButton,
    Header,
    SaveButton,
    DeleteButton,
    EditButton,
    ViewStatus,
  },
  emits: ["closeModal"],

  setup(props, { emit }) {
    const { testModal } = toRefs(props);
    const clickModal = () => {
      emit("closeModal", false);
    };

    return { darkModeState, clickModal };
  },
};
</script>

<style></style>
