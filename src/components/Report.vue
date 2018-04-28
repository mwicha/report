<template>
  <v-layout row wrap px-1>
    <v-flex md4 sm12>
      <v-select
        :items="sections"
        v-model="section"
        label="Section"
        item-text="desc"
        item-value="code"
        autocomplete
        :key="`sectionSelect`"
      ></v-select>
    </v-flex>
    <v-flex md4 sm12>
      <v-select
        :items="applications"
        v-model="application"
        label="Application"
        item-text="desc"
        item-value="code"
        autocomplete
        :key="`applicationSelect`"
      ></v-select>
    </v-flex>
    <v-flex md4 sm12>
      <v-select
        :items="reports"
        v-model="report"
        label="Report"
        item-text="desc"
        item-value="code"
        autocomplete
        :key="`reportSelect`"
      ></v-select>
    </v-flex>
    <v-card>
      <v-layout row wrap>
        <v-flex md12 sm12 xs12 v-if="report !== ''">
          <report-filters :filters="resource.filters" @search="search" />
        </v-flex>
        <v-flex md12 sm12 xs12 v-if="report !== ''">
          <report-table :table="resource.table" :result="result" />
        </v-flex>
      </v-layout>
    </v-card>
  </v-layout>
</template>

<script>
import services from '@/services'
import ReportFilter from '@/components/common/ReportFilter'
import ReportTable from '@/components/common/ReportTable'

export default {
  data () {
    return {
      sections: [],
      section: '',
      applications: [],
      application: '',
      reports: [],
      report: '',
      resource: {},
      result: []
    }
  },
  mounted () {
    // http://localhost:8080/#/?first=1&second=12&third=5
    alert(this.$route.query.first)
    alert(this.$route.query.second)
    this.fillData()
  },
  methods: {
    fillData () {
      services.getSection().then(result => {
        this.sections = result.data
      })
    },
    search (val) {
      services.getResult(val).then(result => {
        this.result = result.data
      })
    }
  },
  components: {
    'report-filters': ReportFilter,
    'report-table': ReportTable
  },
  watch: {
    sections () {
      services.getApplication(this.sections).then(result => {
        this.applications = result.data
      })
    },
    application () {
      services.getReport(this.application).then(result => {
        this.reports = result.data
      })
    },
    report () {
      services.getResource(this.report).then(result => {
        this.resource = result.data
      })
    }
  }
}
</script>

<style scoped>

</style>
