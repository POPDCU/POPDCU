<template>
  <div>
    <v-btn
      @click="toggleLeaderboard"
      color="deep-purple accent-4"
      text
    >
      Toggle Leaderboard
    </v-btn>

    <!-- 리더보드 표시 -->
    <v-card v-if="leaderboardVisible">
      <!-- 리더보드 컨텐츠 -->
      <v-card-title>Leaderboard</v-card-title>
      <v-card-text>
        <v-row>
          <v-col v-for="(user, index) in exampleUsers" :key="index" cols="12">
            {{ index + 1 }}. {{ user.name }} - {{ user.score }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leaderboardVisible: false, // 리더보드 표시 여부를 저장하는 데이터
      exampleUsers: [
        { id: 1, name: 'Alice', score: 1200 },
        { id: 2, name: 'Bob', score: 1000 },
        { id: 3, name: 'Charlie', score: 800 },
        // 추가 예시 데이터를 필요한 만큼 추가할 수 있습니다.
      ],
    };
  },
  methods: {
    // 리더보드 토글 메서드
    toggleLeaderboard() {
      this.leaderboardVisible = !this.leaderboardVisible;
    },
  },
};
</script>

<style>
</style>
