<template>
  <div class="h-14 w-32 bg-app-color-1 hover:bg-app-color-2 rounded-full flex flex-row items-center justify-center">
    <p class="text-white text-xs font-bold">{{ markPaid }}</p>
  </div>
</template>

<script>
//Save & Send
export default {
  props: ['buttonText'],
  setup(props) {
    const markPaid = props.buttonText;
    return { markPaid}
  }
};
</script>

<style></style>
