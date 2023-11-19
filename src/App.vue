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