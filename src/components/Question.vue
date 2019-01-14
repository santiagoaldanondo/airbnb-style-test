<template>
  <v-card>
    <v-card-title>{{ value.title }}</v-card-title>
      <v-card-text v-if="value.info" class="text-xs-left code">{{ value.info }}</v-card-text>
      <v-radio-group v-model="value.answer">
        <v-radio 
          v-for="option in value.options"
          :key="option.content"
          :label="option.content" v-bind:class="{'code': option.code }"
          :value="option.letter"
        ></v-radio>
    </v-radio-group>
    <v-divider></v-divider>
  </v-card>
</template>
<script>
  export default {
    props: [ 'value' ],
    methods: {
      setAnswer(val) {
        this.value.answer = val;
      },
    },
    watch: {
      value() {
        this.setAnswer(this.value.answer);
      }
    }
  }
</script>