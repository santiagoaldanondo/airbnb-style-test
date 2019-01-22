/* eslint-disable no-param-reassign, import/no-unresolved */
import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import questions from '@/assets/questions';
import axios from 'axios';

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
    score: 0,
    total: 0,
  },
  mutations: {
    setError(state, payload) {
      state.error = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setScore(state, payload) {
      state.score = payload;
    },
    setTotal(state, payload) {
      state.total = payload;
    },
  },
  actions: {
    async submitTest({ commit }, payload) {
      commit('setLoading', true);
      try {
        await axios.post(`${API}/test`, {
          method: 'POST',
          body: payload,
        });
        commit('setLoading', false);
        commit('setError', null);
        router.push('/results');
      } catch (error) {
        commit('setError', getErrorMessage(error));
        commit('setLoading', false);
      }
    },
    async getResults({ commit }, payload) {
      commit('setLoading', true);
      commit('setTotal', 0);
      commit('setScore', 0);
      try {
        const result = await axios.post(`${API}/results`, {
          method: 'POST',
          body: payload,
        });
        commit('setLoading', false);
        commit('setError', null);
        if (result.data && result.data.Item) {
          commit('setTotal', result.data.Item.total);
          commit('setScore', result.data.Item.score);
        } else {
          throw new Error('Email not found!!');
        }
      } catch (error) {
        commit('setError', getErrorMessage(error));
        commit('setLoading', false);
      }
    },
  },
});
