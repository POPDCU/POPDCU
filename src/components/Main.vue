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
          <div id="college"> {{ college }} </div>
          <div id="count"> {{ $store.state.clickedOrKeyedCount }} </div>

          <img v-if="$store.state.mouseClicked || $store.state.keyPressed" 
            id="DcuImage"
            :src="require('@/assets/img/DCU_Click.svg')"
            class="my-3"
            contain
            :style="{ transition: 'none', height: imageHeight }"
          />
          <img v-else 
            id="DcuImage" 
            :src="require('@/assets/img/DCU_NoneClick.svg')"
            class="my-3"
            contain
            :style="{ transition: 'none', height: imageHeight }"
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
      college: "소프트웨어융합대학",
      imageHeight: '700px',
    };
  },
  created() {
    // 화면 너비에 따라 이미지 높이를 조정
    window.addEventListener('resize', this.adjustImageSize);
    this.adjustImageSize();
    if ('ontouchstart' in window) {
    // 모바일 환경일 경우에만 터치 이벤트 리스너 등록
    window.addEventListener('touchstart', this.handleTouchStart);
    window.addEventListener('touchend', this.handleTouchEnd);
    window.addEventListener('touchmove', this.handleTouchMove);
    } else {
      // 모바일이 아닌 환경에서는 마우스 이벤트 리스너 등록
      window.addEventListener('mousedown', this.handleMouseDown);
      window.addEventListener('mouseup', this.handleMouseUp);
    }
    // 키보드 이벤트 리스너 등록
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustImageSize);
    if ('ontouchstart' in window) {
    // 모바일 환경일 경우에만 터치 이벤트 리스너 제거
    window.removeEventListener('touchstart', this.handleTouchStart);
    window.removeEventListener('touchend', this.handleTouchEnd);
    window.removeEventListener('touchmove', this.handleTouchMove);
    } else {
      // 모바일이 아닌 환경에서는 마우스 이벤트 리스너 제거
      window.removeEventListener('mousedown', this.handleMouseDown);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }

    // 키보드 이벤트 리스너 제거
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  },
  methods: {
    adjustImageSize() {
      // 화면 너비에 따라 이미지 높이를 동적으로 조정
      if (window.innerWidth < 768) {  // 모바일 화면 크기 (예: 768px)로 조정
        this.imageHeight = '300px';  // 모바일 환경에서 이미지 높이를 300px로 설정
      } else {
        this.imageHeight = '400px';  // 데스크톱 환경에서 이미지 높이를 400px로 설정
      }
    },
    handleMouseDown() {
      this.$store.commit('setMouseClicked', true);
      this.$store.dispatch('updateClickedOrKeyedCount');
    },
    handleMouseUp() {
      this.$store.commit('setMouseClicked', false);
      this.$store.dispatch('updateClickedOrKeyedCount');
    },
    handleTouchStart() {
      this.$store.commit('setMouseClicked', true);
      this.$store.dispatch('updateClickedOrKeyedCount');
    },
    handleTouchEnd() {
      this.$store.commit('setMouseClicked', false);
      this.$store.dispatch('updateClickedOrKeyedCount');
    },
    handleKeyDown(event) {
      if (event.repeat) { // 이벤트 반복일 경우 무시
        return;
      }
      this.$store.commit('setKeyPressed', true);
      this.$store.dispatch('updateClickedOrKeyedCount');
    },
    handleKeyUp() {

      this.$store.commit('setKeyPressed', false);
      this.$store.dispatch('updateClickedOrKeyedCount');
    },
  },
};

</script>

<style>
#college {
  cursor: default !important;
}
#count {
  /*position: absolute;*/
  cursor: default !important;
  font-size: 40px;
  font-weight: 900;
  color: #ffffff;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: rgb(0, 0, 0);
}
#DcuImage {
    position: relative; /* 또는 absolute; */
}
@media screen and (max-width: 1100px) {
  #DcuImage {
    top: 10px; /* 모바일 화면일 때 top은 0px */
  }
}

@media screen and (min-width: 1101px) {
  #DcuImage {
    top: 100px; /* 데스크톱 화면일 때 top은 300px */
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