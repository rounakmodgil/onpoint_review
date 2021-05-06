let accessToken = "";
const setAccessToken = (s) => {
  accessToken = s;
};
const getAccessToken = () => {
  return accessToken;
};
export { setAccessToken, getAccessToken };
