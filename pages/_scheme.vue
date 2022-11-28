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
          <apexchart type="line" height="350" :options="options" :series="mfs"></apexchart>
        </v-card>
      </v-col>

    </v-row>
  </div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Charts',
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
            style: {
              colors: '#009B81',
            },
            datetimeFormatter: {
              year: 'yyyy',
              month: 'MMM \'yy',
              day: 'dd MMM',
              hour: 'HH:mm'
            },
          },
          axisBorder: {
          show: true,
          color: '#009B81',
          offsetX: 0,
          offsetY: 0
      },
      axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#009B81',
          width: 6,
          offsetX: 0,
          offsetY: 0
      },
        },
        yaxis: {
          labels: {
            style: {
              colors: '#009B81',
            },
          },
          axisBorder: {
          show: true,
          color: '#009B81',
          offsetX: 0,
          offsetY: 0
      },
      axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#009B81',
          width: 6,
          offsetX: 0,
          offsetY: 0
      },
        },
        grid: {
    show: true,
    borderColor: '#009b819f',
    strokeDashArray: 0,
    position: 'back',
    xaxis: {
        lines: {
            show: false
        }
    },   
    yaxis: {
        lines: {
            show: true
        }
    },
  },
    tooltip: {
              theme: this.$vuetify.theme.dark ? 'dark' : 'light',
              x: {
            show: true,
            format: "dd MMM yyyy",
            },
            
            }
      },
      

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
  },
}
</script>
<style scoped>
#chart {
  border-radius: 30px;
}
#back {
  color: white;
  border-radius: 15px;
  padding: 10px;
  width: 70px;
  position: absolute;
}

#fundname {
  border-radius: 15px;
  padding: 10px;
  width: 60%;
  position: relative;
  margin-left: 25%;
  
}

</style>