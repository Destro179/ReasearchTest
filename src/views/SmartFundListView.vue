<script setup lang="ts">
import testTableData from '@/json/testTableData.json'
import WorldIcon from '@/assets/icons/planet-earth.svg'
import ReportIcon from '@/assets/icons/pdf.svg'

import router from '@/router'
import { ref } from 'vue'
import PieChart from '@/components/chart/PieChart.vue'

//below are copied table example
const showIndeterminate = ref(true)

const sort = (a: string, b: string) => parseInt(a, 10) - parseInt(b, 10)

const columns = [
    {
        name: 'name',
        required: true,
        label: 'Name',
        align: 'left',
        field: (row: any) => row.name,
        format: (val: string) => `${val}`,
        sortable: true,
        //style: 'width: 20%',
    },
    {
        name: '1yr',
        align: 'center',
        label: '1 Yr Rtn',
        field: 'calories',
        sortable: true,
        style: 'width: 100px',
    },
    {
        name: '2yr',
        label: '2 Yr Rtn',
        field: 'fat',
        sortable: true,
        style: 'width: 100px',
    },
    {
        name: '3yr',
        label: '3 Yr Rtn',
        field: 'fat',
        sortable: true,
        style: 'width: 100px',
    },
    {
        name: 'size',
        label: 'Fund Size ($m)',
        field: 'carbs',
        sortable: true,
        style: 'width: 150px',
    },
    {
        name: 'ter',
        label: 'TER',
        field: 'protein',
        sortable: true,
    },
    {
        name: 'ripplscore',
        label: 'RIPPL fees/risk/rtn',
        field: 'sodium',
        sortable: true,
        align: 'center',
    },
    {
        name: 'actions',
        label: 'RIPPL Effect Report',
        align: 'left',
        style: 'width: 180px',
    },
    {
        name: 'detail',
        label: '',
        style: 'width: 80px',
    },
]

const rows = [...testTableData]

setTimeout(() => {
    showIndeterminate.value = false
}, 3000)

const doRowClick = (props: any) => {
    console.log('we clicked a row!', props.row)
    router.push({ name: 'FundDetail', params: { id: props.row.id } })
}
</script>

<template>
    <div class="px-5 py-2">
        <div class="w-full mb-1">
            <q-btn
                class="no-hover"
                id="universeDropdown"
                unelevated
                :ripple="false"
            >
                <div class="flex items-center">
                    <WorldIcon class="w-5 h-auto mr-2 fill-current" />
                    <div class="uppercase font-normal text-xs">New Zealand</div>
                    <fa-icon icon="angle-down" class="text-xs ml-2" />
                </div>
                <q-menu
                    :offset="[0, 4]"
                    class="border border-dark-popup-border rounded"
                >
                    <q-list style="min-width: 140px" dense>
                        <q-item clickable v-close-popup @click="goToOrderForm">
                            <q-item-section>
                                <div>Australia</div>
                            </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup @click="goToOrderForm">
                            <q-item-section>
                                <div>New Zealand</div>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
        </div>
        <q-btn
            color="transparent"
            class="no-hover mb-4"
            id="universeDropdown"
            unelevated
            :ripple="false"
        >
            <div
                class="flex items-center text-primary"
                style="min-width: 300px"
            >
                <div class="font-normal text-2xl lg:text-3xl mr-4">
                    NZ Pie Funds
                </div>
                <div class="flex items-center uppercase font-normal text-xs">
                    <div>800 FUNDS</div>
                    <fa-icon icon="angle-down" class="text-xs ml-2" />
                </div>
            </div>
            <q-menu
                :offset="[0, 8]"
                class="border border-dark-popup-border rounded"
            >
                <q-list style="min-width: 300px" dense>
                    <q-item clickable v-close-popup @click="goToOrderForm">
                        <q-item-section>
                            <div
                                class="flex items-center justify-between text-white"
                                style="min-width: 300px"
                            >
                                <div class="font-normal mr-4">NZ Pie Funds</div>
                                <div
                                    class="flex items-center uppercase font-normal text-xs"
                                >
                                    <div>800 FUNDS</div>
                                </div>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup @click="goToOrderForm">
                        <q-item-section>
                            <div
                                class="flex items-center justify-between text-white"
                                style="min-width: 300px"
                            >
                                <div class="font-normal mr-4">
                                    NZ Registered AUTs
                                </div>
                                <div
                                    class="flex items-center uppercase font-normal text-xs"
                                >
                                    <div>1337 FUNDS</div>
                                </div>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-menu>
        </q-btn>

        <q-table
            :rows="rows"
            :columns="columns"
            row-key="name"
            class="no-shadow"
        >
            <template v-slot:body="props">
                <q-tr :props="props" @click="doRowClick(props)">
                    <q-td key="name" :props="props">
                        <div class="text-base font-semibold">
                            {{ props.row.name }}
                        </div>
                        <!--Asset type-->
                        <div
                            class="uppercase font-semibold tracking-wide text-blue-grey-8 text-xs"
                        >
                            Equity
                        </div>
                    </q-td>
                    <q-td key="1yr" :props="props">
                        <div class="text-base font-normal">
                            {{ props.row.calories }}%
                        </div>
                    </q-td>
                    <q-td key="2yr" :props="props">
                        <div class="text-base font-normal">
                            {{ props.row.calories }}%
                        </div>
                    </q-td>
                    <q-td key="3yr" :props="props">
                        <div class="text-base font-normal">
                            {{ props.row.calories }}%
                        </div>
                    </q-td>
                    <q-td key="size" :props="props">
                        <div class="text-base font-normal">
                            ${{ props.row.carbs }}
                        </div>
                    </q-td>
                    <q-td key="ter" :props="props">
                        <div class="text-base font-normal">
                            ${{ props.row.protein }}%
                        </div>
                    </q-td>
                    <!--Colour logic for Fees/Risk/Return tds
                        0 - 25 %: use "red-13" for circle and "text-CLASS" color
                        26 - 50 %: use "orange" for circle and "text-CLASS" color
                        51 - 75 %: use "light-green-6" for circle and "text-CLASS" color
                        76 - 100 %: use "green-14" for circle and "text-CLASS" color
                    end -->
                    <q-td key="ripplscore" :props="props">
                        <div class="flex items-center justify-center">
                            <!-- <q-circular-progress
                                :value="props.row.sodium"
                                size="24px"
                                color="red-13"
                                class="q-ma-md"
                                :indeterminate="showIndeterminate"
                            /> -->
                            <PieChart />
                            <div class="text-base font-semibold text-red-13">
                                {{ props.row.sodium }}%
                            </div>
                        </div>
                    </q-td>
                    <q-td key="actions" :props="props">
                        <q-btn
                            color="primary"
                            unelevated
                            class="mr-2"
                            size="sm"
                        >
                            <ReportIcon
                                class="w-4 h-auto fill-current cursor-pointer text-white mr-2"
                            />
                            RIPPL Effect Report
                        </q-btn>
                    </q-td>
                    <q-td key="detail" :props="props">
                        <fa-icon
                            icon="chevron-right"
                            class="text-blue-grey-8 cursor-pointer pr-2"
                        />
                    </q-td>
                </q-tr>
            </template>
        </q-table>

        <q-card flat class="rounded p-4 mb-4">
            <div class="text-base font-semibold">Advertisement banner here</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </q-card>
    </div>
</template>
