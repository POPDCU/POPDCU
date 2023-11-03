<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/img/POPDCU_LOGO.svg')"
          class="my-3"
          contain
          height="200"
        />

        <p id="count"> {{ count }} </p>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name : 'main_component',
  data() {
    return {
      count: 0
    };
  },
  methods: {

  }
}

</script>

<style>
#count {
  /*position: absolute;*/

  font-size: 40px;
  font-weight: 900;
  color: #ffffff;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: rgb(0, 0, 0);
}

</style>