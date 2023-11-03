<template>
  <v-app >
    <v-main class="background-image">
      <main_component/>
    </v-main>
  </v-app>
</template>

<script>
import main_component from './components/Main.vue'

export default {
  name: 'App',

  components: {
    main_component,
  },

  data: () => ({
    //
  }),
}
</script>
<style scoped>
  .background-image {
    background-image: url('@/assets/img/winter_background_img.png');
    background-size: cover;
    background-position: center;
    /* 다른 배경 스타일 속성을 여기에 추가 */
  }
</style>