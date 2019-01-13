<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Home page</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <form @submit.prevent="submitTest">
          <v-alert type="error" dismissible v-model="alert">
            {{ error }}
          </v-alert>
          <div
            <question 
              v-for="(question, index) in questions"
              :key="index"
              v-model="questions[index]"
              >
            </question>
          </div>
          <v-flex class="text-xs-center" mt-5>
            <v-btn color="primary" type="submit" :disabled="loading"> Submit </v-btn>
          </v-flex>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Question from './Question.vue';
export default {
  components: { Question },
  data () {
    return {
      answers: {},
      alert: null
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
    questions () {
      return this.$store.state.questions
    },
    error () {
      return this.$store.state.error
    },
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    submitTest () {
      if (this.comparePasswords !== true) {
        return
      }
      this.$store.dispatch('submitTest', { options: this.options })
    }
  }
}
</script>

<style>
  .code .theme--light.v-label {
    font-family: monospace;
    white-space: pre;
    color: #476582;
  }
  .code {
    font-family: monospace;
    white-space: pre;
    color: #476582;
  }
</style>