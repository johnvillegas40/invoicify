<template>
  <img src="../assets/illustration-empty.svg" alt="" />
        <p :class="darkModeState ? 'text-white mt-10 font-bold text-xl' : 'mt-10 font-bold text-xl'">
          There is nothing here
        </p>
        <p :class="darkModeState ? 'text-xs mt-7 text-app-color-5' : 'text-xs mt-7 text-app-color-6'">
          Create an invoice by clicking the
        </p>
        <p :class="darkModeState ? 'text-xs text-app-color-5' : 'text-xs text-app-color-6'">
          <strong>New</strong>
          button and get started
        </p>
</template>

<script>
import { onMounted, ref, watch } from "vue";
export default {
props: ['darkModeState'],
setup(props) {
    const darkModeState = ref(false)
    
    console.log("Im created!")
    darkModeState.value = props.darkModeState;
    watch(
      () => props.darkModeState,
      (newVal) => {
        darkModeState.value = newVal
      }
    );

    return { darkModeState }
}
}
</script>

<style>

</style>