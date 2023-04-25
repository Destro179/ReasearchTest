<script lang="ts" setup>
import router from '@/router'
import { useMenuStore } from '@/stores/menu'
import Logo from '@/assets/images/researchIPSidelogo-dark.svg'
import MenuIcon from '@/assets/icons/menu.svg'

const { changeDrawer } = useMenuStore()

const goToHome = () => {
    router.push({ name: 'Dashboard' })
}
</script>

<template>
    <q-header class="bg-transparent">
        <q-toolbar class="flex items-center justify-between">
            <div class="flex items-center">
                <div class="p-2 mr-2 cursor-pointer" @click="changeDrawer">
                    <MenuIcon class="w-4 h-auto fill-current menuIcon" />
                </div>
                <Logo class="block h-7 w-auto" />
                <!---
                <img
                    src="@/assets/images/logo-darkmode.png"
                    alt=""
                    class="cursor-pointer m-auto h-7 w-auto block"
                />
                -->
            </div>
            <div v-if="!isLoggedIn" class="font-semibold flex items-center">
                <router-link to="/login" class="mr-4">Sign in</router-link>
                <router-link to="/register" class="mr-2">Sign up</router-link>
            </div>
            <q-btn v-else color="transparent" unelevated class="-mr-4">
                Andrew Stevens
                <fa-icon icon="fa-solid fa-angle-down" class="ml-2"></fa-icon>
                <q-menu :offset="[0, 10]">
                    <q-list style="min-width: 200px">
                        <q-item clickable v-close-popup @click="goToOrderForm">
                            <q-item-section>
                                <div class="flex items-center">
                                    <fa-icon
                                        icon="fa-solid fa-list"
                                        class="mr-2"
                                    ></fa-icon>
                                    <div>Patient List</div>
                                </div>
                            </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup @click="goToOrderForm">
                            <q-item-section>
                                <div class="flex items-center">
                                    <fa-icon
                                        icon="fa-solid fa-user"
                                        class="mr-2"
                                    ></fa-icon>
                                    <div>Account Settings</div>
                                </div>
                            </q-item-section>
                        </q-item>
                        <q-separator />
                        <q-item clickable v-close-popup @click="logOut">
                            <q-item-section>Sign Out</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
        </q-toolbar>
    </q-header>
</template>
