<template>

 <div :class="(darkModeState) ? 'h-screen overflow-auto bg-app-color-12' : 'h-screen overflow-auto bg-app-color-11'">
    <router-view></router-view>
 </div>
</template>

<script>

import Header from './components/Header.vue'
import { darkModeState } from './state.js'
export default {
  components: { Header },
  setup(){
    return {darkModeState}
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');
#app {
  
  font-family: 'Spartan', sans-serif;

}
</style>
