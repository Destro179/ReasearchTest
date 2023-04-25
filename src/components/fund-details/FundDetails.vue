<script setup lang="ts">
import { ref, defineProps } from 'vue'
import ReportIcon from '@/assets/icons/pdf.svg'
import SmartIcon from '@/assets/icons/icon_smartfilters.svg'
import FactsheetIcon from '@/assets/icons/balance-sheet.svg'
import PDSIcon from '@/assets/icons/report.svg'
import ArticleIcon from '@/assets/icons/newspaper.svg'
import ChartReportIcon from '@/assets/icons/chart-report.svg'
import VideoIcon from '@/assets/icons/online-video.svg'
import axios from 'axios'
const title = ref('Fund Details')
const subtitle = ref('something')

const feesvalue = ref(11)
const riskvalue = ref(27)
const returnvalue = ref(86)
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';



</script>

<template>
  <h1>{{ receivedData }}</h1>
    <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
            <div
                class="text-primary font-normal text-2xl lg:text-3xl mb-3 md:mb-0"
            >
                Fiducian India
            </div>
            <!--
            <div
                class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs mobileHide lg:block"
            >
                Reference ID: 12345664
            </div>
            -->
        </div>
        <div class="w-full md:w-auto flex items-center">
            <q-btn color="primary" unelevated class="mr-2">
                <ReportIcon
                    class="w-5 h-auto fill-current cursor-pointer text-white mr-2"
                />
                RIPPL Effect Report
            </q-btn>
            <q-btn color="primary" unelevated>
                <ReportIcon
                    class="w-5 h-auto fill-current cursor-pointer text-white mr-2"
                />
                Second Opinion Report
            </q-btn>
        </div>
    </div>
    <q-card flat class="rounded p-4 mb-4">
        <div class="grid grid-cols-12 gap-4">
            <div class="text-sm col-span-12 lg:col-span-8 xl:col-span-9">
                <div class="text-base font-semibold">Investment Objectives</div>
                To outperform the benchmark, the Bombay Stock Exchange 100 Index
                (BSE 100) in $A after fees, over rolling five-year periods. The
                Fund aims to provide investors with the opportunity to invest in
                a well diversified range of companies listed on Indian stock
                exchanges. It is managed by carefully selected Indian fund
                managers who are based in India and have satisfied Fiducians
                selection criteria. This Fund gives investors the opportunity to
                invest in an economy that has been one of the fastest growing in
                the world in recent years.
            </div>
            <div class="col-span-12 lg:col-span-4 xl:col-span-3">
                <div class="text-base font-semibold text-left lg:text-center">
                    RIPPL Fees/Risk/Rtn
                </div>
                Risk Return Fee pie
                <!--risk return grid kept for reference-->
                <!--
                <div
                    class="riskReturnGridContainer"
                    style="width: 100%; max-width: 320px; margin: auto"
                >
                    <div class="flex items-center justify-center">
                        <div class="riskReturnGrid flex">
                            <div
                                class="square rounded-tl-lg bg-yellow-12"
                            ></div>
                            <div class="square"></div>
                            <div class="square rounded-tr-lg"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square"></div>
                            <div class="square rounded-bl-lg"></div>
                            <div class="square"></div>
                            <div class="square rounded-br-lg"></div>
                        </div>
                        <div
                            class="riskReturnValue text-center text-xs font-semibold uppercase"
                        >
                            High return
                            <br />High risk
                        </div>
                    </div>
                </div>
                -->
                <!--risk return grid kept for reference-->
            </div>
        </div>
    </q-card>
    <div>
        <q-card flat class="rounded p-4 text-sm">
            <div
                class="grid grid-cols-2 md:grid-cols-12 gap-4 gap-y-6 self-center w-full"
            >
                <div class="col-span-1 md:col-span-4 lg:col-span-3 text-center">
                    <div class="text-base font-semibold">$103.66</div>
                    <div
                        class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs"
                    >
                        FUND VALUE (US$m)
                    </div>
                </div>
                <div class="col-span-1 md:col-span-4 lg:col-span-3 text-center">
                    <div class="text-base font-semibold">9 Aug 1997</div>
                    <div
                        class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs"
                    >
                        Inception Date
                    </div>
                </div>
                <div class="col-span-1 md:col-span-4 lg:col-span-3 text-center">
                    <div class="text-base font-semibold">AUD</div>
                    <div
                        class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs"
                    >
                        Currency
                    </div>
                </div>
                <div class="col-span-1 md:col-span-4 lg:col-span-3 text-center">
                    <div class="text-base font-semibold">?</div>
                    <div
                        class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs"
                    >
                        Geographic Focus
                    </div>
                </div>
                <div class="col-span-1 md:col-span-4 lg:col-span-3 text-center">
                    <div class="text-base font-semibold">?</div>
                    <div
                        class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs"
                    >
                        Asset Focus
                    </div>
                </div>
                <div class="col-span-1 md:col-span-4 lg:col-span-3 text-center">
                    <div class="text-base font-semibold">?</div>
                    <div
                        class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs"
                    >
                        Management Fee
                    </div>
                </div>
                <div class="col-span-1 md:col-span-4 lg:col-span-3 text-center">
                    <div class="text-base font-semibold">1.84%</div>
                    <div
                        class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs"
                    >
                        Total Expense Ratio
                    </div>
                </div>
                <div class="col-span-1 md:col-span-4 lg:col-span-3 text-center">
                    <div class="text-base font-semibold">Quarterly</div>
                    <div
                        class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs"
                    >
                        Distribution Frequency
                    </div>
                </div>
                <div class="col-span-1 md:col-span-4 lg:col-span-3 text-center">
                    <div class="text-base font-semibold">$0</div>
                    <div
                        class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs"
                    >
                        Distribution Yield
                    </div>
                </div>
                <div class="col-span-1 md:col-span-4 lg:col-span-3 text-center">
                    <div class="text-base font-semibold">?</div>
                    <div
                        class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs"
                    >
                        SG
                    </div>
                </div>
                <div class="col-span-1 md:col-span-4 lg:col-span-3 text-center">
                    <div class="text-base font-semibold">?</div>
                    <div
                        class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs"
                    >
                        RIAA
                    </div>
                </div>
                <div class="col-span-1 md:col-span-4 lg:col-span-3 text-center">
                    <div class="text-base font-semibold">?</div>
                    <div
                        class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs"
                    >
                        PRI
                    </div>
                </div>
            </div>
        </q-card>
    </div>

    <q-card flat class="rounded p-4 my-4">
        <div class="text-base font-semibold text-center mt-2 mb-2">
            Historical Performance
        </div>
        <p>Add line chart here once chart js is added</p>
        <img
            src="@/assets/images/placeholders/Historical_Net_Asset.png"
            alt=""
            class="w-full h-auto mb-4 px-20"
        />
    </q-card>
    <q-card flat class="rounded p-4 my-4">
        <div class="text-base font-semibold text-center mt-2 mb-2">
            Monthly Fund Returns
        </div>
        <p>Add bar chart here once chart js is added</p>
        <img
            src="@/assets/images/placeholders/Investment_based.png"
            alt=""
            class="w-full h-auto mb-4 px-20"
        />
    </q-card>

    <q-card flat class="rounded p-4 mb-6">
        <div class="text-base font-semibold text-center mt-2 mb-4">
            Useful Links
        </div>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div class="col-span-1 text-center">
                <a
                    href=""
                    target="_blank"
                    class="flex items-center justify-start md:justify-center font-normal"
                >
                    <FactsheetIcon
                        class="w-11 h-auto mr-2 fill-current text-primary"
                    />
                    Factsheet</a
                >
            </div>
            <div class="col-span-1 text-center">
                <a
                    href=""
                    target="_blank"
                    class="flex items-center justify-start md:justify-center font-normal"
                >
                    <ChartReportIcon
                        class="w-11 h-auto mr-2 fill-current text-primary"
                    />
                    Report</a
                >
            </div>
            <div class="col-span-1 text-center">
                <a
                    href=""
                    target="_blank"
                    class="flex items-center justify-start md:justify-center font-normal"
                >
                    <PDSIcon
                        class="w-11 h-auto mr-2 fill-current text-primary"
                    />
                    PDS</a
                >
            </div>
            <div class="col-span-1 text-center">
                <a
                    href=""
                    target="_blank"
                    class="flex items-center justify-start md:justify-center font-normal"
                >
                    <ArticleIcon
                        class="w-10 h-auto mr-2 fill-current text-primary"
                    />
                    Articles/Views</a
                >
            </div>
            <div class="col-span-1 text-center">
                <a
                    href=""
                    target="_blank"
                    class="flex items-center justify-start md:justify-center font-normal"
                >
                    <VideoIcon
                        class="w-11 h-auto mr-2 fill-current text-primary"
                    />
                    Videos</a
                >
            </div>
        </div>
    </q-card>
    <q-separator color="grey-10" />

    <div class="text-2xl lg:text-3xl text-primary font-normal mt-6 mb-4">
        Funds in Focus
    </div>

    <div
        class="grid grid-flow-row xl:grid-flow-col auto-cols-max grid-cols-10 gap-4 mb-4"
    >
        <q-card
            flat
            class="cursor-pointer hover:opacity-75 rounded p-4 text-sm col-span-10 lg:col-span-2"
        >
            <div class="text-base font-semibold text-center mb-2">
                Vanguard International Shares Index
            </div>

            <div class="my-4 text-xs font-semibold">
                Historical NAV- 31-Aug-2021
            </div>

            <img
                src="@/assets/images/placeholders/HistoricalNAV.png"
                alt=""
                class="w-full h-auto"
            />
        </q-card>

        <q-card
            flat
            class="cursor-pointer hover:opacity-75 rounded p-4 text-sm col-span-10 lg:col-span-2"
        >
            <div class="text-base font-semibold text-center mb-2">
                Vanguard International Shares Index
            </div>

            <div class="my-4 text-xs font-semibold">
                Historical NAV- 31-Aug-2021
            </div>

            <img
                src="@/assets/images/placeholders/HistoricalNAV.png"
                alt=""
                class="w-full h-auto"
            />
        </q-card>

        <q-card
            flat
            class="cursor-pointer hover:opacity-75 rounded p-4 text-sm col-span-10 lg:col-span-2"
        >
            <div class="text-base font-semibold text-center mb-2">
                Vanguard International Shares Index
            </div>

            <div class="my-4 text-xs font-semibold">
                Historical NAV- 31-Aug-2021
            </div>

            <img
                src="@/assets/images/placeholders/HistoricalNAV.png"
                alt=""
                class="w-full h-auto"
            />
        </q-card>

        <q-card
            flat
            class="cursor-pointer hover:opacity-75 rounded p-4 text-sm col-span-10 lg:col-span-2"
        >
            <div class="text-base font-semibold text-center mb-2">
                Vanguard International Shares Index
            </div>

            <div class="my-4 text-xs font-semibold">
                Historical NAV- 31-Aug-2021
            </div>

            <img
                src="@/assets/images/placeholders/HistoricalNAV.png"
                alt=""
                class="w-full h-auto"
            />
        </q-card>

        <q-card
            flat
            class="cursor-pointer hover:opacity-75 rounded p-4 text-sm col-span-10 lg:col-span-2"
        >
            <div class="text-base font-semibold text-center mb-2">
                Vanguard International Shares Index
            </div>

            <div class="my-4 text-xs font-semibold">
                Historical NAV- 31-Aug-2021
            </div>

            <img
                src="@/assets/images/placeholders/HistoricalNAV.png"
                alt=""
                class="w-full h-auto"
            />
        </q-card>
    </div>
</template>
