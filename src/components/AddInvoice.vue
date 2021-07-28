<template>
  <div v-if="!isEdit" @click="clickModal" class="flex flex-row w-full">
    <img src="../assets/icon-arrow-left.svg" class="mt-2 mr-2 mb-2" alt="" />
    <p :class="darkModeState ? 'ml-3 mt-2 text-xs font-bold text-white' : 'ml-3 mt-2 text-xs font-bold'">Go back</p>
  </div>
  <div class="mt-6">
    <div v-if="!isEdit">
      <p :class="darkModeState ? 'text-3xl font-bold text-white' : ' text-3xl font-bold'">New Invoice</p>
    </div>
    <div v-else>
      <p :class="darkModeState ? 'text-3xl font-bold text-white' : ' text-3xl font-bold'">Edit #{{ invoice.id }}</p>
    </div>
  </div>
  <!-- Bill From -->
  <div class="mt-6">
    <p class="text-xs font-bold text-app-color-1">Bill From</p>
    <p class="text-xs mt-5 text-app-color-7 font-medium">Street Address</p>
    <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
      <input
        :class="
          darkModeState
            ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
            : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
        "
        type="text"
        v-model="invoice.senderAddress.street"
      />
    </div>

    <div class="flex flex-row">
      <div class="flex flex-col mr-1">
        <p class="text-xs mt-5 text-app-color-7 font-medium">City</p>
        <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
          <input
            :class="
              darkModeState
                ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
                : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
            "
            type="text"
            v-model="invoice.senderAddress.city"
          />
        </div>
      </div>
      <div class="flex flex-col ml-5">
        <p class="text-xs mt-5 text-app-color-7 font-medium">Post Code</p>
        <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
          <input
            :class="
              darkModeState
                ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
                : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
            "
            type="text"
            v-model="invoice.senderAddress.postCode"
          />
        </div>
      </div>
    </div>
    <p class="text-xs mt-5 text-app-color-7 font-medium">Country</p>
    <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
      <input
        :class="
          darkModeState
            ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
            : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
        "
        type="text"
        v-model="invoice.senderAddress.country"
      />
    </div>
  </div>
  <!-- Bill To -->
  <div class="mt-6">
    <p class="text-xs font-bold text-app-color-1">Bill To</p>
    <p class="text-xs mt-5 text-app-color-7 font-medium">Client's Name</p>
    <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
      <input
        :class="
          darkModeState
            ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
            : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
        "
        type="text"
        v-model="invoice.clientName"
      />
    </div>
    <p class="text-xs mt-5 text-app-color-7 font-medium">Client's Email</p>
    <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
      <input
        :class="
          darkModeState
            ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
            : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
        "
        type="text"
        v-model="invoice.clientEmail"
      />
    </div>
    <p class="text-xs mt-5 text-app-color-7 font-medium">Street Address</p>
    <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
      <input
        :class="
          darkModeState
            ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
            : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
        "
        type="text"
        v-model="invoice.clientAddress.street"
      />
    </div>

    <div class="flex flex-row">
      <div class="flex flex-col mr-1">
        <p class="text-xs mt-5 text-app-color-7 font-medium">City</p>
        <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
          <input
            :class="
              darkModeState
                ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
                : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
            "
            type="text"
            v-model="invoice.clientAddress.city"
          />
        </div>
      </div>
      <div class="flex flex-col ml-5">
        <p class="text-xs mt-5 text-app-color-7 font-medium">Post Code</p>
        <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
          <input
            :class="
              darkModeState
                ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
                : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
            "
            type="text"
            v-model="invoice.clientAddress.postCode"
          />
        </div>
      </div>
    </div>
    <p class="text-xs mt-5 text-app-color-7 font-medium">Country</p>
    <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
      <input
        :class="
          darkModeState
            ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
            : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
        "
        type="text"
        v-model="invoice.clientAddress.country"
      />
    </div>
    <!-- Invoice Info -->
    <div class="">
      <p class="text-xs mt-12 text-app-color-7 font-medium">Invoice Date</p>
      <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
        <!-- <input class="w-full text-xs font-semibold outline-none" type="text"> -->
        <input
          :class="
            darkModeState
              ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
              : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
          "
          type="date"
          v-model="invoice.createdAt"
        />
      </div>
      <p class="text-xs mt-5 text-app-color-7 font-medium">Payment Terms</p>
      <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
        <!-- <input class="w-full text-xs font-semibold outline-none" type="text"> -->
        <select
          class="w-full text-xs font-semibold outline-none bg-transparent"
          name="select"
          id=""
          v-model="invoice.paymentTerms"
        >
          <option value="1">Net 1 Day</option>
          <option value="7">Net 7 Day</option>
          <option value="14">Net 14 Day</option>
          <option value="30">Net 30 Day</option>
        </select>
      </div>
      <p class="text-xs mt-5 text-app-color-7 font-medium">Project Description</p>
      <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
        <input
          :class="
            darkModeState
              ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
              : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
          "
          type="text"
          v-model="invoice.description"
        />
      </div>
    </div>
    <!-- ITEM INFO -->
    <div class="mt-20">
      <p class="text-xl text-app-color-new font-bold">Item List</p>
        <div v-for="item in invoice.items">
          <p class="text-xs mt-5 text-app-color-7 font-medium">Item Name</p>
          <div
            class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5"
          >
            <input
              :class="
                darkModeState
                  ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
                  : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
              "
              type="text"
              v-model="item.name"
            />
          </div>

          <div class="flex flex-row">
            <div class="flex flex-col mr-12">
              <p class="text-xs mt-5 text-app-color-7 font-medium">Qty.</p>
              <div
                class="
                  mt-2
                  mr-12
                  border border-app-color-5
                  h-10
                  rounded-md
                  flex flex-col
                  justify-center
                  items-center
                  pl-5
                  pr-5
                "
              >
                <input
                  :class="
                    darkModeState
                      ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
                      : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
                  "
                  type="text"
                  v-model="item.quantity"
                />
              </div>
            </div>
            <div class="flex flex-col -ml-12">
              <p class="text-xs -ml-8 mt-5 text-app-color-7 font-medium">Price</p>
              <div
                class="
                  mt-2
                  -ml-8
                  border border-app-color-5
                  h-10
                  rounded-md
                  flex flex-col
                  justify-center
                  items-center
                  pl-5
                  pr-5
                "
              >
                <input
                  :class="
                    darkModeState
                      ? 'w-full text-xs font-semibold outline-none bg-transparent text-white'
                      : 'w-full text-xs font-semibold outline-none bg-transparent text-app-color-8'
                  "
                  type="text"
                  v-model="item.price"
                />
              </div>
            </div>
            <div class="flex flex-col ml-5">
              <p class="text-xs mt-5 text-app-color-7 font-medium">Total</p>
              <p class="text-xs mt-5 text-app-color-7 font-medium">{{ item.totaldollar }}</p>
              <!-- <div class="mt-2 border border-app-color-5 h-10 rounded-md flex flex-col justify-center items-center pl-5 pr-5">
                        <input class="w-full text-xs font-semibold outline-none" type="text">
                    </div> -->
            </div>
            <img src="../assets/icon-delete.svg" class="pt-10 pb-10 mt-3 ml-20" alt="" />
          </div>
        </div>
      <div class="mt-2 border border-app-color-5 h-10 rounded-full flex flex-row justify-center items-center pl-5 pr-5">
        <img class="p-2" src="../assets/icon-plus.svg" alt="" />
        <p class="text-sm pt-1 text-app-color-7">Add New Item</p>
      </div>
      <div class="-mx-7 h-24 bg-gradient-to-b from-white to-black opacity-5"></div>
    </div>
  </div>
  <div v-if="!isEdit" class="flex flex-row-reverse h-20 mb-24 mt-2 items-center">
    <SaveButton @click="clickSubmit" :buttonText="'Save & Send'" />
    <SaveDraft class="mr-2" />
    <DiscardButton class="mr-2" />
  </div>
</template>

<script>
import { ref, toRefs } from "vue";
import { darkModeState } from "../state";
import AddButton from "./AddButton.vue";
import Header from "./Header.vue";
import SaveButton from "./SaveButton.vue";
import SaveDraft from "./SaveDraft.vue";
import DiscardButton from "./DiscardButton.vue";
export default {
  components: {
    AddButton,
    Header,
    SaveButton,
    SaveDraft,
    DiscardButton,
  },
  emits: ["closeModal"],
  props: ["invoice"],
  setup(props, { emit }) {
    const isEdit = props.invoice ? true : false;
    const invoice = props.invoice ? ref(props.invoice) : ref({
    "id": "",
    "createdAt": "",
    "paymentDue": "",
    "description": "",
    "paymentTerms": null,
    "clientName": "",
    "clientEmail": "",
    "status": "",
    "senderAddress": {
      "street": "",
      "city": "",
      "postCode": "",
      "country": ""
    },
    "clientAddress": {
      "street": "",
      "city": "",
      "postCode": "",
      "country": ""
    },
    "items": [
      {
        "name": "",
        "quantity": null,
        "price": null,
        "total": null
      }
    ],
    "total": null
    });
    
    const clickSubmit = () => {
      console.log(invoice.value)
    }
    const newItems = ref({});
    const { testModal } = toRefs(props);
    const clickModal = () => {
      emit("closeModal", false);
    };

    return { darkModeState, clickModal, invoice, isEdit, newItems, clickSubmit };
  },
};
</script>

<style></style>
