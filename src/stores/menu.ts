import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
    const drawer = ref(false)
    const changeDrawer = () => {
        drawer.value = !drawer.value
    }

    return { drawer, changeDrawer }
})
