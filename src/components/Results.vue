s<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Results</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <v-form ref="form" @submit.prevent="getResults">
          <v-layout column>
            <v-flex>
            </v-flex>
            <v-flex>
              <v-text-field mt-5 class="text-xs-center"
                v-model="email" 
                required
                :rules="emailRules"
                label="E-mail"
              >
              </v-text-field>
                <v-card v-if="total" xs10 offset-xs1>
                  <v-card-title>Your Score!!</v-card-title>
                    <v-card-text>
                      {{ score }} / {{ total }}
                    </v-card-text>
                </v-card>
              <v-alert type="error" dismissible v-model="alert">
                {{ error }}
              </v-alert>
              <v-progress-circular xs10 offset-xs1 class="text-xs-center"
                v-if="loading"
                indeterminate
                color="primary"
              ></v-progress-circular>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary" type="submit" :disabled="loading"> Get results</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        alert: null,
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
      }
    },
    watch: {
      error (value) {
        if (value) {
          this.alert = true
        }
      },
      alert (value) {
        if (!value) {
          this.$store.commit('setError', null)
        }
      }
    },
    computed: {
      error () {
        return this.$store.state.error
      },
      loading () {
        return this.$store.state.loading
      },
      score () {
        return this.$store.state.score
      },
      total () {
        return this.$store.state.total
      },
    },
    methods: {
      getResults () {
        if (!this.$refs.form.validate()) return;
        this.$store.dispatch('getResults', { email: this.email })
      }
    }
  }
</script>