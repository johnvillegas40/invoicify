<template>
  <div class="w-full h-full fixed block top-0 left-0 z-50 ">
    <Header />
    <div class="w-full h-full overflow-auto">
      <div class="mt-10 mx-6 h-14 flex flex-row">
      <div class="w-full">
        <p :class="darkModeState ? ' text-white font-bold text-xl' : 'font-bold text-xl'">Invoices</p>
        <div v-if="!json.length">
          <p :class="darkModeState ? 'text-xs text-app-color-5' : 'text-xs text-app-color-6'">No Invoices</p>
        </div>
        <div v-if="json.length == 1">
          <p :class="darkModeState ? 'text-xs text-app-color-5' : 'text-xs text-app-color-6'">1 Invoice</p>
        </div>
        <div v-if="json.length > 1">
          <p :class="darkModeState ? 'text-xs text-app-color-5' : 'text-xs text-app-color-6'">{{json.length}} Invoices</p>
        </div>
        
      </div>
      <div class="flex flex-row pt-4 mr-4 pr-8">
        <p :class="darkModeState ? 'text-white text-xs font-bold pr-3' : 'text-xs font-bold pr-3'">Filter</p>
        <img src="../assets/icon-arrow-down.svg" class="h-2 mt-1" alt="" />
      </div>
      <AddButton @click="addInvoice" />
    </div>
    <div >
      <div v-if="!json.length" class="mt-24 flex flex-col items-center">
        <EmptyView :darkModeState='darkModeState' />
      </div>
      <div v-else class=" mt-5 mx-6 mb-28">
        <div class="mb-5" v-for="item of json"><InvoiceCard @click="viewInvoice(item)" :invoiceInfo='item' /></div>
      </div>
    </div>
    </div>
  </div>
  <!-- Opens Create New Invoice Modal  -->
  <div :class="addNewInvoiceModal ? 'w-full h-full fixed block top-0 left-0 z-50' : ' hidden'">
    <Header />
    <div
      :class="
        addNewInvoiceModal
          ? darkModeState
            ? 'w-full h-full bg-app-color-12  slide-enter-active pt-5 px-7 overflow-auto'
            : 'w-full h-full bg-white  slide-enter-active pt-5 px-7 overflow-auto'
          : 'w-full h-full bg-white  slide-leave-active'
      "
    >
      <AddInvoice v-if="addNewInvoiceModal" @closeModal="addInvoice" />
    </div>
  </div>
  <!-- Opens View Info Page -->
  <div :class="viewInvoiceModal ? 'w-full h-full fixed block top-0 left-0 z-50' : ' hidden'">
    <Header />
    <div
      :class="
        viewInvoiceModal
          ? darkModeState
            ? 'w-full h-full slide-enter-active-view overflow-auto'
            : 'w-full h-full slide-enter-active-view  overflow-auto'
          : 'w-full h-full slide-leave-active'
      "
    >
      <ViewInvoice v-if="viewInvoiceModal" @closeModal="viewInvoice" :fullInvoice='itemToView' />
    </div>
  </div>
</template>

<script>
import jsonFile from '../assets/data.json';
import { ref } from "vue";
import { darkModeState } from "../state";
import AddButton from "./AddButton.vue";
import Header from "./Header.vue";
import EmptyView from './EmptyView.vue';
import AddInvoice from "./AddInvoice.vue";
import InvoiceCard from './InvoiceCard.vue'
import ViewInvoice from './ViewInvoice.vue'
export default {
  components: {
    AddButton,
    Header,
    AddInvoice,
    EmptyView,
    InvoiceCard,
    ViewInvoice,
  },
  setup() {
    const json = ref(jsonFile)
    const info = ref([])
    info.value.push("one")
    info.value.push("two")
    const addNewInvoiceModal = ref(false);
    const viewInvoiceModal = ref(false)
    const itemToView = ref({});
    const addInvoice = () => {
      addNewInvoiceModal.value = !addNewInvoiceModal.value;
    };
    const viewInvoice = (item) => {
      viewInvoiceModal.value = !viewInvoiceModal.value;
      itemToView.value = item
    };

    return { darkModeState, addNewInvoiceModal, addInvoice, info, viewInvoiceModal, viewInvoice, json, itemToView };
  },
};
</script>

<style>
.slide-enter-active {
  animation: menu-slide-new 0.5s;
}
.slide-leave-active {
  animation: menu-slide-new 0.5s reverse;
}
.slide-enter-active-view {
  animation: menu-slide-view 0.5s;
}
.slide-leave-active-view {
  animation: menu-slide-view 0.5s reverse;
}
@keyframes menu-slide-new {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes menu-slide-view {
  from {
    transform: translateX(200%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
