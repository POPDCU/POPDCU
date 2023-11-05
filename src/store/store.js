import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    clickedOrKeyedCount: 0,
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
    },
  },
  actions: {
    updateClickedOrKeyedCount({ commit, state }) {
      if (state.mouseClicked || state.keyPressed) {
        commit('incrementClickedOrKeyedCount');
      }
    },
  },
});
