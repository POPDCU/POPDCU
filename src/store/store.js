import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    clickedOrKeyedCount: JSON.parse(localStorage.getItem('clickedOrKeyedCount')) || 0,
    mouseClicked: false,
    keyPressed: false,
  },
  mutations: {
    setMouseClicked(state, value) {
      state.mouseClicked = value;
    },
    setKeyPressed(state, value) {
      state.keyPressed = value;
    },
    incrementClickedOrKeyedCount(state) {
      state.clickedOrKeyedCount++;
      localStorage.setItem('clickedOrKeyedCount', state.clickedOrKeyedCount);
    },
    setClickedOrKeyedCount(state, value) {
        state.clickedOrKeyedCount = value;
        localStorage.setItem('clickedOrKeyedCount', value);
      },
  },
  actions: {
    updateClickedOrKeyedCount({ commit, state }) {
      if (state.mouseClicked || state.keyPressed) {
        commit('incrementClickedOrKeyedCount');
        if (state.mouseClicked && state.keyPressed) {
            state.mouseClicked = false;
            state.keyPressed = false;
        }
      }
    },
    resetClickedOrKeyedCount({ commit }) {
        commit('setClickedOrKeyedCount', 0);
    },
  },
});
