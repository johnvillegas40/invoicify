<template>
  <div class=" bg-app-color-0 h-20 flex flex-row sticky top-0">
      <LogoArea />
      <div class=" h-20 flex flex-row-reverse m-auto items-center w-full">
          <img v-if="darkModeState" @click="setDarkMode" src="../assets/icon-sun.svg" alt="" class=" h-6 pr-8">
          <img v-else @click="setDarkMode" src="../assets/icon-moon.svg" alt="" class=" h-6 pr-8">
      </div>
      <div class="h-20 px-6 border-l border-app-color-border flex flex-row items-center justify-center">
          <div class=" h-10 w-10 border-black border rounded-full overflow-hidden">
              <img src="../assets/image-avatar.jpg" class=" object-contain" alt="">
          </div>
      </div>
  </div>
</template>

<script>
import { setDarkMode, darkModeState } from '../state.js'
import LogoArea from './LogoArea.vue'
export default {
components: { LogoArea },
  setup(){
    return {setDarkMode, darkModeState}
  }
}
</script>

<style>

</style>