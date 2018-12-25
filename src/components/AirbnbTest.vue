<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <v-radio-group v-model="radioGroup">
          <v-radio
            v-for="n in 3"
            :key="n"
            :label="`Radio ${n}`"
            :value="n"
          ></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>    
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        radioGroup: 1,
      }
    }
  }
</script>