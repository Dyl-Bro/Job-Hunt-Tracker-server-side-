var { expressjwt: jwt } = require("express-jwt");
const secret = process.env.SECRET;

function tokenAuthentication() {
  return jwt({
    secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      `${process.env.API_URL}/accounts/login`,
      `${process.env.API_URL}/accounts/register`,
      `${process.env.API_URL}/`,
    ],
  });
}

module.exports = tokenAuthentication;
