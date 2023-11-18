<template>
  <v-dialog v-model="showModal" max-width="600px">
    <v-card>
      <v-card-title>Welcome! Please make a selection:</v-card-title>
      <v-list>
        <v-list-item v-for="(option, index) in options" :key="index">
          <v-btn @click="handleSelection(option)">{{ option }}</v-btn>
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
export default {
  data() {
    return {
      showModal: true,
      options: ['Option 1', 'Option 2'], // 선택 옵션들을 추가
    };
  },
  methods: {
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