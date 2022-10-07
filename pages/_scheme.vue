<template>
  <div>
    <v-card id="back" class="text-center pa-3 teal">
      <button @click="goBack">
        Back
      </button>
    </v-card>
    <v-card class="mt-8 text-center pa-3 font-weight-medium teal--text" id="fundname">
      {{fund_house}}
    </v-card>
    <v-row>

      <v-col class="text-center mt-10 " align="center" id="chart">
        <v-card align="center">
          <apexchart type="line" height="350" :options="options" :series="series"></apexchart>
        </v-card>
      </v-col>

    </v-row>
  </div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'InspirePage',
  components: {
    [process.browser && 'apexchart']: () => import('vue-apexcharts'),
  },
  data() {
    return {
      props: {
        mf: Object,
      },
      options: {
        chart: {
          id: 'vuechart-example',
        },
        colors: ['#009B81'],
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          labels: {
            format: 'dd MMM yyyy',
            datetimeFormatter: {
              year: 'yyyy',
              month: 'MMM \'yy',
              day: 'dd MMM',
              hour: 'HH:mm'
            }
          },
        },
        tooltip: {
              shared: false,
              x: {
            show: true,
            format: "dd MMM yyyy",
            }
            }
      },
      series: [
        {
          name: "Navs",
          data: []
        }
      ],

    };
  },
  computed: {
    ...mapGetters(["mfs", "fund_house"]),
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    ...mapActions(['get_mfdata']),

  },
  created() {
    const scheme = this.$route.params.scheme;
    this.get_mfdata(scheme);
    this.series[0].data = this.mfs;
    

  },
}
</script>
<style scoped>
#chart {
  border-radius: 30px;
}



#back {
  background-color: #3f51b5;
  color: white;
  border-radius: 15px;
  padding: 10px;
  width: 70px;
  position: absolute;
}

#fundname {
  color: #3f51b5;
  border-radius: 15px;
  padding: 10px;
  width: 60%;
  position: relative;
  margin-left: 25%;
}
</style>