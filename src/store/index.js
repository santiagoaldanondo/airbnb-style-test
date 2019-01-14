/* eslint-disable no-param-reassign, import/no-unresolved */
import Vue from 'vue';
import Vuex from 'vuex';
// import router from '@/router';
import questions from '@/assets/questions';

Vue.use(Vuex);

// const getErrorMessage = (error) => {
//   try {
//     const parsed = JSON.parse(error.message);
//     return parsed.error.message;
//   } catch (e) {
//     return error.message;
//   }
// };

export default new Vuex.Store({
  state: {
    appTitle: 'Testing stuff',
    user: null,
    error: null,
    loading: false,
    questions,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    submitTest({ commit }, payload) {
      commit('setLoading', true);
      console.log(payload);
      //  .then((firebaseUser) => {
      //    commit('setUser', { email: firebaseUser.user.email });
      //    commit('setLoading', false);
      //    commit('setError', null);
      //    router.push('/home');
      //  })
      //  .catch((error) => {
      //    commit('setError', getErrorMessage(error));
      //    commit('setLoading', false);
      //  });
    },
  },
  getters: {},
});
