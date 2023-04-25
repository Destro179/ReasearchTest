<script setup lang="ts">
import FundDetails from '@/components/fund-details/FundDetails.vue'
import router from '@/router'
import { ref } from 'vue'

const title = ref('A Title')

const goBack = () => {
    router.push({ name: 'FundList' })
}
</script>

<template>
    <div class="px-5 py-2">
        <div class="flex items-center justify-between mb-1">
            <div
                @click="goBack"
                class="py-2 text-blue-grey-8 hover:text-primary flex items-center cursor-pointer"
            >
                <fa-icon icon="chevron-left" class="mr-2" />
                <div class="uppercase text-xs font-semibold">back</div>
            </div>

            <div
                class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs"
            >
                Updated: 31 Aug 2021
            </div>
        </div>
        <FundDetails />
    </div>
</template>
