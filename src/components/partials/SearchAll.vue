<script setup lang="ts">
import { ref } from 'vue'

const showMenu = ref(false)
const fundName = ref('')
const assetType = ref('')
</script>

<template>
    <q-list id="searchAll">
        <div class="px-3 py-2">
            <q-input
                dense
                outlined
                type="text"
                v-model="fundName"
                label="Fund name, manager or keyword"
                class="mb-2"
            ></q-input>
        </div>
        <q-expansion-item expand-separator label="Basic">
            <div class="p-3 pt-0">
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="Fund manager"
                    class="mb-2"
                ></q-select>
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="Asset focus"
                    class="mb-2"
                ></q-select>
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="Geographic focus"
                    class="mb-2"
                ></q-select>
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="Currency"
                ></q-select>
            </div>
        </q-expansion-item>

        <q-expansion-item expand-separator label="Fund Features">
            <div class="p-3 pt-0">
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="Fund size ($m)"
                    class="mb-2"
                ></q-select>
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="Inception date (Yr)"
                    class="mb-2"
                ></q-select>
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="Distribution frequency"
                    class="mb-2"
                ></q-select>
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="Distribution yield"
                    class="mb-2"
                ></q-select>
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="TER"
                    class="mb-2"
                ></q-select>
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="MER"
                ></q-select>
            </div>
        </q-expansion-item>

        <q-expansion-item expand-separator label="Fund Performance">
            <div class="p-3 pt-0">
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="1 Year return"
                    class="mb-2"
                ></q-select>
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="3 Year return"
                    class="mb-2"
                ></q-select>
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="5 Year return"
                ></q-select>
            </div>
        </q-expansion-item>

        <q-expansion-item
            expand-separator
            label="RIPPL Rankings"
            class="text-white"
        >
            <div class="p-3 pt-0">
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="Risk Ranking"
                    class="mb-2"
                ></q-select>
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="Return Ranking"
                    class="mb-2"
                ></q-select>
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="Fee Ranking"
                    class="mb-2"
                ></q-select>
                <q-select
                    dense
                    outlined
                    v-model="assetType"
                    label="Qualitative Score"
                ></q-select>
            </div>
        </q-expansion-item>
    </q-list>
</template>
