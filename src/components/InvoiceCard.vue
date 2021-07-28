<template>
  <div class="rounded-md p-5 h-32 w-full" :class="darkModeState ? 'bg-app-color-3' : 'bg-white'">
    <div class="flex flex-col h-full w-full justify-between">
      <div class="flex flex-row justify-between">
        <p :class="darkModeState ? 'text-white' : ''" class="text-xs font-bold">
          <span class="text-app-color-7">#</span>
          {{ invoice.id }}
        </p>
        <p :class="darkModeState ? 'text-white' : 'text-app-color-idn'" class="text-xs">{{invoice.clientName}}</p>
      </div>
      <div class="flex flex-row justify-between">
        <div class="flex flex-col">
          <p class="text-xs text-app-color-7 pb-2">Due {{invoice.paymentDueFullDate}}</p>
          <p :class="darkModeState ? 'text-white' : ''" class="font-semibold">{{invoice.total}}</p>
        </div>
        <div v-if='invoice.status == "pending"'>
          <PendingBadge />
        </div>
        <div v-if='invoice.status == "paid"'>
          <PaidBadge />
        </div>
        <div v-if='invoice.status == "draft"'>
          <DraftBadge />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaidBadge from "./PaidBadge.vue";
import PendingBadge from "./PendingBadge.vue";
import DraftBadge from "./DraftBadge.vue";
import { darkModeState } from "../state";
import moment from 'moment'
export default {
  components: {
    PaidBadge,
    PendingBadge,
    DraftBadge
  },
  props:['invoiceInfo'],
  setup(props) {
    const invoice = props.invoiceInfo;
    invoice.paymentDueFullDate = moment(invoice.paymentDue, 'YYYY-MM-DD').format('MMM D, YYYY')
    invoice.createdAtFullDate = moment(invoice.createdAt, 'YYYY-MM-DD').format('MMM D, YYYY')
    invoice.total = invoice.total.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});
  for(let item of invoice.items) {
    invoice.items[invoice.items.indexOf(item)].pricedollar = invoice.items[invoice.items.indexOf(item)].price.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});
 invoice.items[invoice.items.indexOf(item)].totaldollar = invoice.items[invoice.items.indexOf(item)].total.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});
  }
    return { darkModeState, invoice };
  },
};
</script>

<style></style>
