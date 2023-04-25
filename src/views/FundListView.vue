<script setup lang="ts">
import FiltersIcon from '@/assets/icons/filter.svg'
import ReportIcon from '@/assets/icons/pdf.svg'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const showIndeterminate = ref(true)
const funds = ref([])

const sort = (a: string, b: string) => parseInt(a, 10) - parseInt(b, 10)
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: (row: any) => row.fund_name,
    format: (val: string) => `${val}`,
    sortable: true,
    //style: 'width: 20%',
  },
  {
    name: '1yr',
    align: 'center',
    label: '1 Yr Rtn',
    field: 'return_1_year',
    sortable: true,
    style: 'width: 100px',
  },
  {
    name: '3yr',
    label: '3 Yr Rtn',
    field: 'return_3_year',
    sortable: true,
    style: 'width: 100px',
  },
  {
    name: 'size',
    label: 'Fund Size ($m)',
    field: 'fund_size_local',
    sortable: true,
    style: 'width: 150px',
  },
  {
    name: 'ter',
    label: 'TER',
    field: 'icr_retail',
    sortable: true,
  },
  {
    name: 'actions',
    label: 'RIPPL Effect Report',
    field: 'rippl_effect_link',
    align: 'left',
    style: 'width: 180px',
  },
  {
    name: 'detail',
    label: '',
    style: 'width: 80px',
  },

]

const rows = ref([]);

axios.get('http://127.0.0.1:8080/funds').then((resp) => {
  console.log(resp.data.recordset)
  const data = Object.values(resp.data.recordset);

  // Group the data by rippl_id and template_tag
  const groupedData = data.reduce((acc, curr) => {
    const { rippl_id, template_tag, value } = curr;
    acc[rippl_id] = acc[rippl_id] || { icr_retail: 'n/a', fund_size_local: 'n/a', return_1_year: 'n/a', return_3_year: 'n/a', fund_name: 'n/a',rippl_effect_link: 'n/a'};
    acc[rippl_id][template_tag] = value || 'n/a';
    return acc;
  }, {});

  // Extract the unique rippl_ids
  const uniqueRipplIds = Object.keys(groupedData);

  // Create an array of fund objects
  const funds = uniqueRipplIds.map((ripplId) => {
    const fundData = groupedData[ripplId];
    return {
      id: ripplId,
      rippl_effect_link: fundData.rippl_effect_link,
      icr_retail: fundData.icr_retail,
      fund_size_local: fundData.fund_size_local,
      return_1_year: fundData.return_1_year,
      return_3_year: fundData.return_3_year,
      fund_name: fundData.fund_name,
    };
  });

  console.log([funds]);
  rows.value = funds;

}).catch((err) => {
  console.error(err);
});






setTimeout(() => {
    showIndeterminate.value = false
}, 3000)

const doRowClick = (props: any) => {
  console.log('we clicked a row!', props.row)
  const store = useStore();
  const router = useRouter();

    store.commit("setFunds", 1);
    router.push({ name: "FundDetails" });


  router.push({ name: 'FundDetail', params: { id: props.row.id } })
  axios.post('http://127.0.0.1:8080/preferred', { id: props.row.id })
      .then((resp) => {
        const data = Object.values(resp.data.recordset);

        // Group the data by rippl_id and template_tag
        const groupedData = data.reduce((acc, curr) => {
          const { rippl_id, template_tag, value } = curr;
          acc[rippl_id] = acc[rippl_id] || { icr_retail: 'n/a', fund_size_local: 'n/a', return_1_year: 'n/a', return_3_year: 'n/a', fund_name: 'n/a',rippl_effect_link: 'n/a'};
          acc[rippl_id][template_tag] = value || 'n/a';
          return acc;
        }, {});

        // Extract the unique rippl_ids
        const uniqueRipplIds = Object.keys(groupedData);

        // Create an array of fund objects
        const funds = uniqueRipplIds.map((ripplId) => {
          const fundData = groupedData[ripplId];
          return {
            id: ripplId,
            rippl_effect_link: fundData.rippl_effect_link,
            icr_retail: fundData.icr_retail,
            fund_size_local: fundData.fund_size_local,
            return_1_year: fundData.return_1_year,
            return_3_year: fundData.return_3_year,
            fund_name: fundData.fund_name,
          };
        });

        console.log([funds]);

      }).catch((err) => {
    console.error(err);
  });


}
const goToReport = (props: any) => {
  const url = props.row.rippl_effect_link;
  if (url !== 'n/a') {
    window.open(url, '_blank');
  }
}

export default defineComponent({
  methods: {
    sendFunds(): void {
      // dispatch an action to update the store with funds data
      this.$store.commit("setFunds", a.value);
      this.$router.push({ name: "SecondComponent" });
    },
  },
});
</script>

<template>
    <div class="px-5 py-2">
        <div class="w-full flex items-center justify-between mb-4">
            <div class="text-primary font-normal text-2xl lg:text-3xl">
                Search Funds
            </div>
            <div class="tabletShow">
                <q-btn
                    color="primary"
                    unelevated
                    class="bg-transparent -mr-3 no-hover"
                    :ripple="false"
                >
                    <FiltersIcon
                        class="w-5 h-auto fill-current cursor-pointer text-white mr-2"
                    />
                    <div class="uppercase font-normal text-xs">filters</div>
                </q-btn>
            </div>
        </div>

        <q-table
            :rows="rows"
            :columns="columns"
            row-key="fund_name"
            class="no-shadow"
        >
            <template v-slot:body="props">
                <q-tr :props="props" >
                    <q-td key="name" @click="doRowClick(props)" :props="props">
                        <div class="text-base font-semibold">
                            {{ props.row.fund_name }}
                        </div>
                        <!--Asset type-->
                        <div
                            class="uppercase font-semibold tracking-wide text-blue-grey-6 text-xs"
                        >
                            Equity
                        </div>
                    </q-td>
                    <q-td key="1yr" @click="doRowClick(props)" :props="props">
                        <div class="text-base font-normal">
                            {{ props.row.return_1_year }}%
                        </div>
                    </q-td>
                    <q-td key="3yr" @click="doRowClick(props)" :props="props">
                        <div class="text-base font-normal">
                            {{ props.row.return_3_year }}%
                        </div>
                    </q-td>
                    <q-td key="size" @click="doRowClick(props)" :props="props">
                        <div class="text-base font-normal">
                            ${{ props.row.fund_size_local }}
                        </div>
                    </q-td>
                    <q-td key="ter" @click="doRowClick(props)" :props="props">
                        <div class="text-base font-normal">
                            ${{ props.row.icr_retail }}
                        </div>
                    </q-td>
                    <!--Colour logic for Fees/Risk/Return tds
                        0 - 25 %: use "red-13" for circle and "text-CLASS" color
                        26 - 50 %: use "orange" for circle and "text-CLASS" color
                        51 - 75 %: use "light-green-6" for circle and "text-CLASS" color
                        76 - 100 %: use "green-14" for circle and "text-CLASS" color
                    end -->
                    <q-td key="actions" :props="props">
                        <q-btn
                            color="primary"
                            unelevated
                            class="mr-2"
                            size="sm"
                            @click="goToReport(props)"
                        >
                            <ReportIcon
                                class="w-4 h-auto fill-current cursor-pointer text-white mr-2"
                            />
                            RIPPL Effect Report
                        </q-btn>
                    </q-td>
                    <q-td key="detail" @click="doRowClick(props)" :props="props">
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
