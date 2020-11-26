import { loginWithApi } from '../../api';

const state = () => ({
  user: null,
});

const getters = {
  IS_AUTHENTICATED(state /*getters, rootState, rootGetters*/) {
    return !!state.user;
  },
};

const mutations = {
  // MUTATION_TYPE(state, payload)
  // called by commit
  // returns NOTHING!
  SET_USER(state, user) {
    state.user = user;
  },
};

const actions = {
  // ACTION_TYPE(context, payload)
  // context = { state, getters, commit, dispatch, rootState, rootGetters }
  // called by dispatch
  // always returns Promise!
  LOGIN({ commit }, { email, password }) {
    return loginWithApi(email, password).then((user) => {
      commit('SET_USER', user);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
