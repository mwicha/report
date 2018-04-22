<template>
  <v-layout row wrap px-1>
    <v-flex md12 sm12 xs12 :key="`table`">
      <template>
        <v-card>
          <v-card-title>
            {{table.tableName}}
            <v-spacer></v-spacer>
            <v-text-field
              append-icon="search"
              label="Search"
              single-line
              hide-details
              v-model="search"
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="table.headers"
            :items="result"
            :search="search"
          >
            <template slot="items" slot-scope="props">
              <tr>
                <report-row v-for="(item, index) in props.item" :key="`row_${index}`" :columnName="item" />
              </tr>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
        </v-card>
      </template>
    </v-flex>
  </v-layout>
</template>

<script>
import ReportRow from '@/components/common/ReportRow'

export default {
  data () {
    return {
      search: ''
    }
  },
  props: {
    table: Object,
    result: Array
  },
  components: {
    'report-row': ReportRow
  }
}
</script>

<style>

</style>
