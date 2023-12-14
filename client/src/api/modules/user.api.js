import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const userEndpoints = {
  signin: "user/signin",
  signup: "user/signup",
  getInfo: "user/info",
  passwordUpdate: "user/update-password"
};

const userApi = {
  signin: async ({ username, password }) => {
    try {
      console.log("send signin request in public client");
      const response = await publicClient.post(
        userEndpoints.signin,
        { username, password }
      );
      console.log("send signin request in public client", response);

      return { response };
    } catch (err) { console.log("err"); return { err }; }
  },
  signup: async ({ username, password, confirmPassword, displayName }) => {
    try {
      console.log("send signup request in public client");
      const response = await publicClient.post(
        userEndpoints.signup,
        { username, password, confirmPassword, displayName }
      );
      console.log("send signup request in public client", response);

      return { response };
    } catch (err) { return { err }; }
  },
  getInfo: async () => {
    try {
      console.log("send getInfo request in privateClient");
      const response = await privateClient.get(userEndpoints.getInfo);
      console.log("send getInfo request in privateClient", response);
      return { response };
    } catch (err) { return { err }; }
  },
  passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
    try {
      console.log("send passwordUpdate request in privateClient");
      const response = await privateClient.put(
        userEndpoints.passwordUpdate,
        { password, newPassword, confirmNewPassword }
      );
      console.log("send passwordUpdate request in privateClient", response);

      return { response };
    } catch (err) { return { err }; }
  }
};

export default userApi;