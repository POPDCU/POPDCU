<template>
  <v-dialog v-model="showModal" max-width="600px">
    <v-card>
      <v-card-title>POPDCU에 오신것을 환영합니다! 본인의 단과대학을 선택해 주세요.</v-card-title>
      <v-list>
        <v-list-item v-for="(college, index) in collegeList" :key="index">
          <v-btn @click="handleSelection(college)">{{ college }}</v-btn>
        </v-list-item>
      </v-list>
      <!-- 선택창을 닫는 버튼 -->
      <v-card-actions>
        <v-btn @click="closeModal">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { getCollegeList } from '@/api.js';

export default {
  data() {
    return {
      showModal: true,
      collegeList: [],
    };
  },
  mounted() {
    this.fetchCollegeData();
  },
  methods: {
    async fetchCollegeData() {
      try {
        this.collegeList = await getCollegeList();
        console.log(this.collegeList);
      } catch (error) {
        console.log('Error in component:', error);
      }
    },
    handleSelection(option) {
      // 선택된 옵션에 대한 처리 로직 추가
      console.log('Selected option:', option);
      // 모달 닫기
      this.closeModal();
    },
    closeModal() {
      // 모달 닫기
      this.showModal = false;
    },
  },
};
</script>