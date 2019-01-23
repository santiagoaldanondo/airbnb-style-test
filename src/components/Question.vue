<template>
  <v-card class="my-card">
    <v-icon color="blue darken-3" class="my-icon">pan_tool</v-icon>
    <v-card-title class ="my-title">
      {{ value.name }} - {{ value.title }}
    </v-card-title>
    <v-card-text v-if="value.info" class="text-xs-left code my-text">{{ value.info }}</v-card-text>
    <v-radio-group v-model="value.answer">
      <v-radio
        v-for="option in value.options"
        :key="option.content"
        :label="option.content" v-bind:class="{'code': option.code }"
        :value="option.letter"
      >
      </v-radio>
    </v-radio-group>
  <v-divider></v-divider>
  <v-divider></v-divider>
  </v-card>
</template>
<script>
  export default {
    props: [ 'value' ]
  }
</script>

<style>

.my-icon {
  padding: 30px 0px 5px 0px;
}

.my-card {
  margin-top: 30px;
  padding-left: 50px;
}

.my-title {
  padding: 5px 0px;
  margin-top: 20px;
  font-size: 1.2em;
}

.my-text {
  padding: 0px 0px 5px 10px;
}

.my-card label {
  font-size: 0.9em;
  margin: 10px 0px;
}

</style>