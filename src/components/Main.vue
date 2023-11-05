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
            :height="imageHeight"
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
      imageHeight: '700px',
    };
  },
  created() {
    // 화면 너비에 따라 이미지 높이를 조정
    window.addEventListener('resize', this.adjustImageSize);
    this.adjustImageSize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustImageSize);
  },
  methods: {
    adjustImageSize() {
      // 화면 너비에 따라 이미지 높이를 동적으로 조정
      if (window.innerWidth < 768) {  // 모바일 화면 크기 (예: 768px)로 조정
        this.imageHeight = '300px';  // 모바일 환경에서 이미지 높이를 300px로 설정
      } else {
        this.imageHeight = '700px';  // 데스크톱 환경에서 이미지 높이를 700px로 설정
      }
    },
  },
};

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
@media screen and (max-width: 1100px) {
  #DcuImage {
    top: 10; /* 모바일 화면일 때 top은 0px */
  }
}

@media screen and (min-width: 1101px) {
  #DcuImage {
    top: 300px; /* 데스크톱 화면일 때 top은 300px */
  }
}
  /* 스크롤 영역만 숨기기 */
  body {
    scrollbar-width: none;
  }

  body::-webkit-scrollbar {
    display: none;
  }


</style>