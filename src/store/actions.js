import axios from "axios";

const apiKey = "Key Firebase";

export function signUp({ commit }, payload) {
  axios
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      { ...payload, returnSecureToken: true }
    )
    .then((response) => {
      const userInfo = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
      };

      commit("SET_USER_INFO", userInfo);
      localStorage.setItem(
        "userTokens",
        JSON.stringify({
          token: userInfo.token,
          refreshToken: userInfo.refreshToken,
        })
      );
    })
    .catch((err) => {
      commit("SET_ERROR", err.response.data.error.message);
    })
    .finally(() => {
      commit("SET_LOADER", false);
    });
}

export function logoutExit({ commit }) {
  commit("CLEAR_USER_INFO");
}
