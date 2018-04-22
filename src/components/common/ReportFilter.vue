<template>
  <v-layout row wrap px-1>
    <v-flex md4 sm12 xs12 v-for="filter in filters" :key="`filter_${filter.filterName}`">
      <v-select
        v-if="filter.filterType === 'select'"
        :items="filter.filterItems"
        v-model="filter.filterValue"
        :label="filter.filterName"
        item-text="desc"
        item-value="code"
        autocomplete
        :required="filter.isMandatory"
        :key="`filterSelect_${filter.filterName}`"
      />
      <v-text-field
        v-else-if="filter.filterType === 'textField'"
        v-model="filter.filterValue"
        :label="filter.filterName"
        :required="filter.isMandatory"
        :key="`filterTextField_${filter.filterName}`"
      ></v-text-field>
      <v-text-field
        v-else-if="filter.filterType === 'numberField'"
        v-model="filter.filterValue"
        :label="filter.filterName"
        :required="filter.isMandatory"
        type="number"
        :key="`filterNumberField_${filter.filterName}`"
      ></v-text-field>
    </v-flex>
    <v-flex md12 sm12 xs12>
      <v-btn block color="primary" @click="search" :disabled="notComplete">Search</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    filters: Array
  },
  methods: {
    search () {
      this.$emit('search', this.filters)
    }
  },
  computed: {
    notComplete () {
      let notComplete = false
      this.filters.forEach(function (element) {
        if (element.isMandatory) {
          if (element.filterValue === null || element.filterValue === '' || element.filterValue === undefined) {
            notComplete = true
          }
        }
      })
      return notComplete
    }
  }
}
</script>

<style>

</style>
