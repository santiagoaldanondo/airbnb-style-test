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

.v-card {
  padding-left: 30px;
}

.v-card__title {
  padding: 35px 0px 0px 20px;
  margin-top: 30px;
  font-size: 18px;
}

.v-card__text {
  padding: 5px 0px 5px 20px;
}

.v-label {
  font-size: 14px;
  padding-left: 10px;
}

.v-input {
  margin-top: 30px;
  margin-bottom: 10px;
  padding-top: 20px;
  padding-left: 20px;
  margin: 0;
}

</style>