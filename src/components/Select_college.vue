<template>
  <v-dialog v-model="showModal" max-width="600px">
    <v-card>
      <v-card-title>POPDCU에 오신것을 환영합니다! 본인의 단과대학을 선택해 주세요.</v-card-title>
      <div v-if="isLoading" class="loading-overlay">
        <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
      </div>
      <div v-else>
        <v-card class="mx-auto">
          <v-list-item v-for="(college, index) in collegeNames" :key="index" @click="handleSelection(college)">
            <v-list-item-content>
              <v-list-item-title>{{ college }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { getCollegeList } from '@/api.js';

export default {
  data() {
    return {
      isLoading: true,
      showModal: true,
      collegeList: [],
      collegeNames: [],
    };
  },
  mounted() {
    this.fetchCollegeData();
  },
  methods: {
    async fetchCollegeData() {
      try {
        this.isLoading = true;
        this.collegeList = await getCollegeList();
        setTimeout(() => {},2000);
        this.collegeNames = this.collegeList.map(college => college.collegeName);
        this.isLoading = false;
        console.log(this.collegeList);
      } catch (error) {
        console.log('Error in component:', error);
      }
    },
    handleSelection(option) {
      // 선택된 옵션에 대한 처리 로직 추가
      console.log('Selected option:', option);
      this.$router.push('/');
      // 모달 닫기
    },
  },
};
</script>

<style>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
}
</style>