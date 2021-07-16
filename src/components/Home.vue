<template>
  <div class="h-full">
    <Header testModal="testModal" />
    <div class="mt-10 mx-6 h-14 flex flex-row">
      <div class="w-full">
        <p
          :class="
            darkModeState
              ? ' text-white font-bold text-xl'
              : 'font-bold text-xl'
          "
        >
          Invoices
        </p>
        <p
          :class="
            darkModeState
              ? 'text-xs text-app-color-5'
              : 'text-xs text-app-color-6'
          "
        >
          No Invoices
        </p>
      </div>
      <div class="flex flex-row pt-4 mr-4 pr-8">
        <p
          :class="
            darkModeState
              ? 'text-white text-xs font-bold pr-3'
              : 'text-xs font-bold pr-3'
          "
        >
          Filter
        </p>
        <img src="../assets/icon-arrow-down.svg" class="h-2 mt-1" alt="" />
      </div>
      <AddButton @click="clickModal" />
    </div>
    <div>
      <div class="mt-24 flex flex-col items-center">
        <img src="../assets/illustration-empty.svg" alt="" />
        <p
          :class="
            darkModeState
              ? 'text-white mt-10 font-bold text-xl'
              : 'mt-10 font-bold text-xl'
          "
        >
          There is nothing here
        </p>
        <p
          :class="
            darkModeState
              ? 'text-xs mt-7 text-app-color-5'
              : 'text-xs mt-7 text-app-color-6'
          "
        >
          Create an invoice by clicking the
        </p>
        <p
          :class="
            darkModeState
              ? 'text-xs text-app-color-5'
              : 'text-xs text-app-color-6'
          "
        >
          <strong>New</strong> button and get started
        </p>
      </div>
    </div>
    
  </div>
  <div
    :class="
      testModal
        ? 'w-full h-full fixed block top-0 left-0 z-50'
        : ' hidden'
    "
  >
    <Header />
    <div :class="(testModal) ? (darkModeState) ? 'w-full h-full bg-app-color-12  slide-enter-active pt-5 px-7': 'w-full h-full bg-white  slide-enter-active pt-5 px-7 overflow-auto' : 'w-full h-full bg-white  slide-leave-active'">
        <div @click="clickModal" class=" flex flex-row w-full">
            <img src="../assets/icon-arrow-left.svg" class="mt-2 mr-2 mb-2 " alt="">
            <p :class="(darkModeState) ? 'ml-3 mt-2 text-xs font-bold text-white' : 'ml-3 mt-2 text-xs font-bold'">Go back</p>        
        </div>
        <div class="mt-6">
            <p class="text-3xl font-bold">New Invoice</p>
        </div>
        <!-- Bill From -->
        <div class="mt-6">
            <p class="text-xs font-bold text-app-color-1">Bill From</p>
            <p class="text-xs mt-5 text-app-color-7 font-medium">Street Address</p>
            <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                <input class="w-full text-xs font-semibold outline-none" type="text">
            </div>
           
            <div class="flex flex-row">
                 <div class="flex flex-col mr-1">
                     <p class="text-xs mt-5 text-app-color-7 font-medium">City</p>
                     <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                        <input class="w-full text-xs font-semibold outline-none" type="text">
                    </div>
                 </div>
                 <div class="flex flex-col ml-5">
                     <p class="text-xs mt-5 text-app-color-7 font-medium">Post Code</p>
                     <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                        <input class="w-full text-xs font-semibold outline-none" type="text">
                    </div>
                 </div>
            </div>
            <p class="text-xs mt-5 text-app-color-7 font-medium">Country</p>
            <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                <input class="w-full text-xs font-semibold outline-none" type="text">
            </div>
        </div>
        <!-- Bill To -->
        <div class="mt-6">
            <p class="text-xs font-bold text-app-color-1">Bill To</p>
            <p class="text-xs mt-5 text-app-color-7 font-medium">Client's Name</p>
            <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                <input class="w-full text-xs font-semibold outline-none" type="text">
            </div>
            <p class="text-xs mt-5 text-app-color-7 font-medium">Client's Email</p>
            <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                <input class="w-full text-xs font-semibold outline-none" type="text">
            </div>
            <p class="text-xs mt-5 text-app-color-7 font-medium">Street Address</p>
            <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                <input class="w-full text-xs font-semibold outline-none" type="text">
            </div>
           
            <div class="flex flex-row">
                 <div class="flex flex-col mr-1">
                     <p class="text-xs mt-5 text-app-color-7 font-medium">City</p>
                     <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                        <input class="w-full text-xs font-semibold outline-none" type="text">
                    </div>
                 </div>
                 <div class="flex flex-col ml-5">
                     <p class="text-xs mt-5 text-app-color-7 font-medium">Post Code</p>
                     <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                        <input class="w-full text-xs font-semibold outline-none" type="text">
                    </div>
                 </div>
            </div>
            <p class="text-xs mt-5 text-app-color-7 font-medium">Country</p>
            <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                <input class="w-full text-xs font-semibold outline-none" type="text">
            </div>
            <!-- Invoice Info -->
            <div class="">
                <p class="text-xs mt-12 text-app-color-7 font-medium">Invoice Date</p>
                <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                    <!-- <input class="w-full text-xs font-semibold outline-none" type="text"> -->
                    <input class=" w-full text-xs font-semibold outline-none bg-transparent" type="date">
                </div>
                <p class="text-xs mt-5 text-app-color-7 font-medium">Payment Terms</p>
                <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                    <!-- <input class="w-full text-xs font-semibold outline-none" type="text"> -->
                    <select class="w-full text-xs font-semibold outline-none bg-transparent" name="select" id="">
                        <option value="">Net 1 Day</option>
                        <option value="">Net 10 Day</option>
                        <option value="">Net 30 Day</option>
                        <option value="">Net 60 Day</option>
                    </select>
                </div>
                <p class="text-xs mt-5 text-app-color-7 font-medium">Project Description</p>
                <div class="mt-2  border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                    <input class="w-full text-xs font-semibold outline-none" type="text">
                </div>
            </div>
            <!-- ITEM INFO -->
            <div class="mt-20 mb-32">
                <p class=" text-xl text-app-color-new font-bold">Item List</p>
                <div v-for="num in 2">
                    <p class="text-xs mt-5 text-app-color-7 font-medium">Item Name</p>
            <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                <input class="w-full text-xs font-semibold outline-none" type="text">
            </div>
           
            <div class="flex flex-row" >
                 <div class="flex flex-col mr-12">
                     <p class="text-xs mt-5 text-app-color-7 font-medium">Qty.</p>
                     <div class="mt-2 mr-12 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                        <input class="w-full text-xs font-semibold outline-none" type="text">
                    </div>
                 </div>
                 <div class="flex flex-col -ml-12">
                     <p class="text-xs -ml-8 mt-5 text-app-color-7 font-medium">Price</p>
                     <div class="mt-2 -ml-8 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                        <input class="w-full text-xs font-semibold outline-none" type="text">
                    </div>
                 </div>
                 <div class="flex flex-col ml-5">
                     <p class="text-xs mt-5 text-app-color-7 font-medium">Total</p>
                     <p class="text-xs mt-5 text-app-color-7 font-medium">156.00</p>
                     <!-- <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                        <input class="w-full text-xs font-semibold outline-none" type="text">
                    </div> -->
                 </div>
                 <img src="../assets/icon-delete.svg" class="pt-10 pb-10 mt-3 ml-20 " alt="">
            </div>
                </div>
                
            </div>
            
            
        </div>
    </div>
    
  </div>
  
</template>

<script>
import { ref } from "vue";
import { darkModeState } from "../state";
import AddButton from "./AddButton.vue";
import Header from "./Header.vue";
export default {
  components: {
    AddButton,
    Header,
  },
  setup() {
    const testModal = ref(false);
    const clickModal = () => {
      testModal.value = !testModal.value;
    };

    return { darkModeState, testModal, testModal, clickModal };
  },
};
</script>

<style>
.slide-enter-active {
  animation: menu-slide .5s;
}
.slide-leave-active {
  animation: menu-slide .5s reverse;
}
@keyframes menu-slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>