import {ref} from 'vue'

const darkModeState = ref(false)

const setDarkMode = () => {
    darkModeState.value = !darkModeState.value;
}

export {darkModeState, setDarkMode}