require("dotenv").config();
const { sign } = require("jsonwebtoken");

const createAccessToken = (User) => {
  return sign({ userId: User.id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};
const createRefeshToken = (User) => {
  return sign(
    { userId: User.id, tokenVersion: User.tokenVersion },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
};
module.exports = { createAccessToken, createRefeshToken };
