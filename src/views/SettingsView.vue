<script setup lang="ts">
import { ref } from 'vue'

const primaryColor = ref('#54c0e8')
const mode = ref('Dark')
const modeOptions = ref(['Dark', 'Light'])
</script>
<template>
    <div class="px-5 py-2">
        <div class="w-full flex items-center justify-between mb-4">
            <div class="text-primary font-normal text-2xl lg:text-3xl">
                Settings
            </div>
        </div>

        <q-card flat class="rounded p-4 mb-4">
            <div class="">
                <div class="text-base font-semibold mb-4">Appearance</div>
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-3">
                        <q-select
                            dense
                            outlined
                            v-model="mode"
                            :options="modeOptions"
                            label="Mode"
                            class="mb-2"
                        ></q-select>
                    </div>
                    <div class="col-span-3">
                        <q-input
                            dense
                            :rules="['anyColor']"
                            outlined
                            v-model="primaryColor"
                            label="Primary colour"
                            hint="6 char hex code"
                            class="my-input"
                        >
                            <template v-slot:append>
                                <q-icon name="colorize" class="cursor-pointer">
                                    <q-popup-proxy
                                        cover
                                        transition-show="scale"
                                        transition-hide="scale"
                                    >
                                        <q-color
                                            no-header-tabs
                                            v-model="primaryColor"
                                        />
                                    </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                    </div>
                    <div class="col-span-3">
                        <q-input
                            dense
                            :rules="['anyColor']"
                            outlined
                            v-model="primaryColor"
                            label="Secondary colour"
                            hint="6 char hex code"
                            class="my-input"
                        >
                            <template v-slot:append>
                                <q-icon name="colorize" class="cursor-pointer">
                                    <q-popup-proxy
                                        cover
                                        transition-show="scale"
                                        transition-hide="scale"
                                    >
                                        <q-color
                                            no-header-tabs
                                            v-model="primaryColor"
                                        />
                                    </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                    </div>
                </div>
            </div>

            <q-btn color="primary" unelevated class="mt-2"
                >Apply Changes
            </q-btn>
        </q-card>
        <q-card flat class="rounded p-4 mb-4">
            <div class="">
                <div class="text-base font-semibold mb-4">Account</div>
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-4">Email</div>
                    <div class="col-span-4">Password</div>
                    <div class="col-span-4">Type</div>
                </div>
            </div>
        </q-card>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
