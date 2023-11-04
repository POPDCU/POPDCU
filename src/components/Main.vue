<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
          <v-img
            :src="require('@/assets/img/POPDCU_LOGO.svg')"
            class="my-3"
            contain
            height="150"
          />
          <p id="college"> {{ college }} </p>
          <p id="count"> {{ count }} </p>

          <v-img id="DcuImage"
            :src="require('@/assets/img/DCU_NoneClick.svg')"
            class="my-3"
            contain
            height="700"
          />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name : 'main_component',

  data() {
    return {
      count: 0,
      college: "소프트웨어융합대학",
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
#DcuImage {
  position: relative;
  top: 100px; /* 이미지를 20px 아래로 이동합니다. */
}
</style>