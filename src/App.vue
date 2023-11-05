<template>
  <v-app>
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
    mouseClicked: false,
    keyPressed: false,
  }),
  created() {
    // 마우스 down, up감지
    window.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mouseup', this.handleMouseUp);
    // keyboard down, up 감지
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  },
  beforeUnmount() {
    // 마우스 down, up감지
    window.removeEventListener('mousedown', this.handleMouseDown);
    window.removeEventListener('mouseup', this.handleMouseUp);
    // keyboard down, up 감지
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  },
  methods: {
    handleMouseDown() {
      this.mouseClicked = true;
    },
    handleMouseUp() {
      this.mouseClicked = false;
    },
    handleKeyDown() {
      this.keyPressed = true;
    },
    handleKeyUp() {
      this.keyPressed = false;
    }
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
</style>