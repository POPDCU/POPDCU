import axios from 'axios';

const apiUrl = 'https://port-0-popdcu-back-test-3yl7k2blopd9kw1.sel5.cloudtype.app/api';

export const getCollegeList = async () => {
  try {
    const response = await axios.get(`${apiUrl}/ranking`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ranking data:', error);
    throw error; // 에러를 상위 컴포넌트로 전파
  }
};