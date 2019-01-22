/* eslint-disable no-param-reassign, import/no-unresolved */
import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import questions from '@/assets/questions';

Vue.use(Vuex);

const API = process.env.VUE_APP_API;

const getErrorMessage = (error) => {
  try {
    const parsed = JSON.parse(error.message);
    return parsed.error.message;
  } catch (e) {
    return error.message;
  }
};

export default new Vuex.Store({
  state: {
    appTitle: 'Testing stuff',
    error: null,
    loading: false,
    questions,
  },
  mutations: {
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
      // eslint-disable-next-line
      fetch(`${API}/test`, {
        method: 'POST',
        body: JSON.stringify(payload),
      }).then(res => res.json())
        .then((data) => {
          commit('setLoading', false);
          commit('setError', null);
          if (data.statusCode !== 200) {
            throw new Error(data.message);
          }
          router.push('/');
        }).catch((error) => {
          commit('setError', getErrorMessage(error));
          commit('setLoading', false);
        });
    },
  },
});
