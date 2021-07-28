<template>
  <div class="flex flex-col pt-5 px-7" :class="darkModeState ? 'bg-app-color-12': editMode ? 'bg-white' : 'bg-app-color-view-bg'">
    <div @click="clickModal" class="flex flex-row w-full">
      <img src="../assets/icon-arrow-left.svg" class="mt-2 mr-2 mb-2" alt="" />
      <p :class="darkModeState ? 'ml-3 mt-2 text-xs font-bold text-white' : 'ml-3 mt-2 text-xs font-bold'">Go back</p>
    </div>
    <div v-if="editMode">
      <AddInvoice v-if="editMode" :invoice="fullInvoice" />
    </div>
    <div v-if="!editMode">
      <ViewStatus :status='fullInvoice.status'/>
    <div class="rounded-md p-5 h-auto w-full mt-3 mb-14" :class="darkModeState ? 'bg-app-color-3' : 'bg-white'">
      <div class="flex flex-col h-full w-full">
        <div class="flex flex-col">
          <p :class="darkModeState ? 'text-white' : ''" class="text-xs font-bold">
            <span class="text-app-color-7">#</span>
            {{fullInvoice.id}}
          </p>
          <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs mt-1">{{fullInvoice.description}}</p>
        </div>
        <div class="flex flex-col mt-6">
          <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs  mt-1">{{fullInvoice.senderAddress.street}}</p>
          <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs ">{{fullInvoice.senderAddress.city}}</p>
          <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs">{{fullInvoice.senderAddress.postCode}}</p>
          <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs">{{fullInvoice.senderAddress.country}}</p>
        </div>
        <div class="flex flex-row mt-8">
          <div class="flex flex-col">
            <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs">Invoice Date</p>
            <p :class="darkModeState ? 'text-white' : 'text-black'" class="mt-2 text-lg font-semibold">{{fullInvoice.createdAtFullDate}}</p>
            <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs mt-8">Payment Due</p>
            <p :class="darkModeState ? 'text-white' : 'text-black'" class="mt-2 text-lg font-semibold">{{fullInvoice.paymentDueFullDate}}</p>
          </div>
          <div class="flex flex-col ml-12">
            <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs">Bill To</p>
            <p :class="darkModeState ? 'text-white' : 'text-black'" class="mt-2 text-lg font-semibold">{{fullInvoice.clientName}}</p>
            <div class="flex flex-col mt-2">
              <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs">{{fullInvoice.clientAddress.street}}</p>
              <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs mt-1">{{fullInvoice.clientAddress.city}}</p>
              <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs mt-1">{{fullInvoice.clientAddress.postCode}}</p>
              <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs mt-1">{{fullInvoice.clientAddress.country}}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-4">
            <p :class="darkModeState ? 'text-app-color-5' : 'text-app-color-7'"  class="text-xs mt-8">Sent To</p>
            <p :class="darkModeState ? 'text-white' : 'text-black'" class="mt-2 text-lg font-semibold">{{fullInvoice.clientEmail}}</p>
        </div>
        <div :class="darkModeState ? 'bg-app-color-4' : 'bg-app-color-view-bg'" class="flex flex-col w-full h-auto mt-8  rounded-lg">
          <div class="w-full px-7 pt-7 h-auto flex flex-col">
            <div v-for="item in fullInvoice.items" class="flex flex-row justify-between mb-8">
              <div class="flex flex-col">
                <p :class="darkModeState ? 'text-white' : 'text-black'" class="text-xs font-bold">{{item.name}}</p>
                <div class="mt-2">
                  <p class="text-xs font-bold text-app-color-7">{{item.quantity}} x  {{item.pricedollar}}</p>
                </div>
                
              </div>
              <div class="flex flex-row items-center">
                <p :class="darkModeState ? 'text-white' : 'text-black'"  class="text-xs font-bold">{{item.totaldollar}}</p>
              </div>
            </div>
            
          </div>
          <div class="w-full h-20 bg-app-color-0 rounded-b-lg px-7 flex flex-row items-center justify-between">
            <p class="text-xs text-white">Grand Total</p>
            <p class="text-2xl font-bold text-white">{{fullInvoice.total}}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div :class="darkModeState ? 'bg-app-color-3' : 'bg-white'" class="flex flex-row h-20 mb-20 mt-2 items-center  -mx-7 justify-between px-7">
      <EditButton @click="clickEdit" class="mr-2" />
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
import AddInvoice from "./AddInvoice.vue";
export default {
  components: {
    AddButton,
    Header,
    SaveButton,
    DeleteButton,
    EditButton,
    ViewStatus,
    AddInvoice
  },
  emits: ["closeModal"],
  props: ['fullInvoice'],

  setup(props, { emit }) {
    const editMode = ref(false)
    const clickModal = () => {
      emit("closeModal", false);
    };
    const clickEdit = () => {
      editMode.value = !editMode.value
    }
    const fullInvoice = props.fullInvoice;

    return { darkModeState, clickModal, fullInvoice, clickEdit, editMode };
  },
};
</script>

<style></style>
