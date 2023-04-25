<script setup lang="ts">
import router from '@/router'
import SearchAll from '@/components/partials/SearchAll.vue'
import { useMenuStore } from '@/stores/menu'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import SmartIcon from '@/assets/icons/icon_smartfilters.svg'
import SearchIcon from '@/assets/icons/icon_search.svg'
import AboutIcon from '@/assets/icons/icon_about.svg'
import SettingsIcon from '@/assets/icons/icon_settings.svg'
import Logo from '@/assets/images/researchIPSidelogo-dark.svg'

const selected = ref('SmartFundListView')

const menuStore = useMenuStore()
const { drawer } = storeToRefs(menuStore)

const goToRoute = (name: string) => {
    selected.value = name
    router.push({ name })
}
const isSelected = (option: string) => {
    return selected.value === option
}
</script>

<template>
    <q-drawer
        v-model="drawer"
        show-if-above
        :width="240"
        :breakpoint="1025"
        id="sideBar"
    >
        <q-scroll-area class="fit">
            <div class="tabletShow">
                <Logo
                    class="m-auto my-5 block h-7 w-auto cursor-pointer"
                    @click="goToHome"
                />
            </div>
            <q-list>
                <q-item
                    clickable
                    :active="isSelected('SmartFundListView')"
                    @click="goToRoute('SmartFundListView')"
                >
                    <q-item-section>
                        <div class="flex items-center">
                            <SmartIcon class="w-9 h-auto mr-4 fill-current" />
                            <q-item-section>Smart Filters</q-item-section>
                        </div>
                    </q-item-section>
                </q-item>
                <q-item
                    clickable
                    :active="isSelected('FundList')"
                    @click="goToRoute('FundList')"
                >
                    <q-item-section>
                        <div class="flex items-center">
                            <SearchIcon
                                class="w-9 p-1 h-auto mr-4 fill-current"
                            />
                            <q-item-section>Search Funds</q-item-section>
                        </div>
                        <SearchAll
                            class="tabletHide"
                            v-if="isSelected('FundList')"
                        />
                    </q-item-section>
                </q-item>
                <q-item
                    clickable
                    :active="isSelected('About')"
                    @click="goToRoute('About')"
                >
                    <q-item-section>
                        <div class="flex items-center">
                            <AboutIcon
                                class="w-9 p-1 h-auto mr-4 fill-current"
                            />
                            <q-item-section>About</q-item-section>
                        </div>
                    </q-item-section>
                </q-item>
                <q-item
                    clickable
                    :active="isSelected('Settings')"
                    @click="goToRoute('Settings')"
                >
                    <q-item-section>
                        <div class="flex items-center">
                            <SettingsIcon
                                class="w-9 p-1 h-auto mr-4 fill-current"
                            />
                            <q-item-section>Settings</q-item-section>
                        </div>
                    </q-item-section>
                </q-item>

                <div class="mt-2">
                    <q-card
                        flat
                        class="cursor-pointer hover:opacity-75 px-4 py-2 text-sm my-2"
                    >
                        <div class="text-base font-semibold text-center mb-2">
                            Title of advertisement space
                        </div>

                        <img
                            src="@/assets/images/placeholders/placeholder-image.png"
                            alt=""
                            class="w-full h-auto"
                        />
                        <div class="mt-2 text-xs font-semibold">
                            Subtitle text for advertisement can go here~ doo di
                            doo.
                        </div>
                    </q-card>
                    <q-card
                        flat
                        class="cursor-pointer hover:opacity-75 px-4 py-2 text-sm my-2"
                    >
                        <div class="text-base font-semibold text-center mb-2">
                            Title of advertisement space
                        </div>

                        <img
                            src="@/assets/images/placeholders/placeholder-image.png"
                            alt=""
                            class="w-full h-auto"
                        />
                        <div class="mt-2 text-xs font-semibold">
                            Subtitle text for advertisement can go here~ doo di
                            doo.
                        </div>
                    </q-card>
                    <q-card
                        flat
                        class="cursor-pointer hover:opacity-75 px-4 py-2 text-sm my-2"
                    >
                        <div class="text-base font-semibold text-center mb-2">
                            Title of advertisement space
                        </div>

                        <img
                            src="@/assets/images/placeholders/placeholder-image.png"
                            alt=""
                            class="w-full h-auto"
                        />
                        <div class="mt-2 text-xs font-semibold">
                            Subtitle text for advertisement can go here~ doo di
                            doo.
                        </div>
                    </q-card>
                    <q-card
                        flat
                        class="cursor-pointer hover:opacity-75 px-4 py-2 text-sm my-2"
                    >
                        <div class="text-base font-semibold text-center mb-2">
                            Title of advertisement space
                        </div>

                        <img
                            src="@/assets/images/placeholders/placeholder-image.png"
                            alt=""
                            class="w-full h-auto"
                        />
                        <div class="mt-2 text-xs font-semibold">
                            Subtitle text for advertisement can go here~ doo di
                            doo.
                        </div>
                    </q-card>
                </div>
            </q-list>
        </q-scroll-area>
    </q-drawer>
</template>
