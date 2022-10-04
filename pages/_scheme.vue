<template>
  <div>
    <v-card id="back" class="mt-5 text-center pa-3">
      <button   @click="goBack">
     Back
    </button>
    </v-card>
    <v-card class="mt-5  pa-3" id="fundname">
      Fund Name : {{fund_house}}
    </v-card>
  <v-row >
    
    <v-col class="text-center mt-15 " align="center" id="chart">
      <v-card  align="center">
      <apexchart type="line" height="350" :options="options" :series="series"></apexchart>
    </v-card>
    </v-col>
    
  </v-row>
    </div>
</template>
  
  <script>
    import axios from 'axios';
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
              id: 'vuechart-example'
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
            }
          },
          series: [
            {
              name: "Navs",
              data: []
            }
          ],
          mfs: [],
          fund_house: [],
        };
      },
      async asyncData({ params }) {
        const scheme = params.scheme // When calling /abc the slug will be "abc"
        return { scheme }
      },
      methods: {
        mydatecon(d) {
      const c = d.split('-')
      return c[1] + '-' + c[0] + '-' + c[2]
    },
      goBack() {
        this.$router.go(-1)
      }
    
      },
      created() {
        const output = axios.get("https://api.mfapi.in/mf/"+this.scheme).then((data) => {this.mfs = data.data.data, this.fund_house = data.data.meta.fund_house})
        .then((s) => {
          
          for (var i = 0; i < this.mfs.length; i++) {
            const date = this.mydatecon(this.mfs[i].date);
            this.series[0].data.push({x: date, y: this.mfs[i].nav});
          }
        })
      },
    }
    </script>
    <style scoped>
      #chart{
        transition: all 0.3s ease;
        border-radius: 30px;
      }
    #chart:hover{
      transform: scale(1.02);
    }
    #back{
      background-color: #3f51b5;
      color: white;
      border-radius: 30px;
      padding: 10px;
      transition: all 0.3s ease;
      width: 70px;
      position:absolute;
    }
    #fundname{
      color: #3f51b5;
      border-radius: 30px;
      padding: 10px;
      transition: all 0.3s ease;
      width: 70%;
      position:absolute;
      margin-left: 15%;
    }
    </style>