<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Home page</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <v-form ref="form" @submit.prevent="submitTest">
          <question 
            v-for="(question, index) in questions"
            :key="index"
            v-model="questions[index]"
            >
          </question>
          <v-text-field 
            v-model="email" 
            required
            :rules="emailRules"
            label="E-mail"
          >
          </v-text-field>
          <v-alert type="error" dismissible v-model="alert">
            {{ error }}
          </v-alert>
          <v-progress-circular
            v-if="loading"
            indeterminate
            color="primary"
          ></v-progress-circular>
          <v-flex class="text-xs-center" mt-5>
            <v-btn color="primary" type="submit" :disabled="loading"> Submit </v-btn>
          </v-flex>
        </v-form>
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
      valid: false,
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
    prepareAnswers (obj) {
      const response = {
        name: obj.name,
        answer: obj.answer
      }
      delete obj.answer;
      return response;
    },
    submitTest () {
      if (!this.$refs.form.validate()) return;
      this.$store.dispatch('submitTest', {
          email: this.email,
          main: 'airbnb-style',
          answers: this.questions.map(this.prepareAnswers)
        })
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