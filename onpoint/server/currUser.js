let currUser = "";
const setCurrUser = (s) => {
  currUser = s;
};
const getcurrUser = () => {
  return currUser;
};
module.exports = { setCurrUser, getcurrUser };