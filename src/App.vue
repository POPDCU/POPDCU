<template>
  <v-app id="app">
    <v-main @click="handlePageClick" class="background-image">
      <router-view/>
      <LeaderBoard id="bottom_leader_board_button"></LeaderBoard>
    </v-main>
  </v-app>
</template>

<script>
import LeaderBoard from '@/components/LeaderBoard.vue';

export default {
  name: 'App',
  components: {
    LeaderBoard
  },
  data: () => ({
  }),
  created() {
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
}
</script>
<style scoped>
  .background-image {
    background-image: url('@/assets/img/winter_background_img.png');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    height: 100vh; /* 화면 높이의 100%로 설정하여 세로 중앙 정렬을 수행 */

  }
  #bottom_leader_board_button {
  position: fixed;
  width:10%; bottom:0;
  }
  .app {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}
  
</style>