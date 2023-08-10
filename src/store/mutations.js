export function SET_USER_INFO(state, payload) {
  state.userInfo = payload;
}
export function SET_ERROR(state, error) {
  state.error = error;
}
export function SET_LOADER(state, loader) {
  state.loader = loader;
}
export function CLEAR_USER_INFO(state) {
  state.userInfo = {
    token: "",
    email: "",
    userId: "",
    refreshToken: "",
  };
}
