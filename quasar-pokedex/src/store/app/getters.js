export default {
  getUser(state) {
    return state.userData;
  },

  isAuthenticated(state) {
    return state.authenticated;
  },
};
