const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

function cookieAuthentication(req, res, next) {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1];
  if (!token) {
    res.status(401).send("No Auth Token Found");
  }
  try {
    const user = jwt.verify(token, secret);
    req.user = user.user_id;
    console.log(req.user);
    next();
  } catch (err) {
    console.log("error with authentication");
    res.clearCookie("AuthToken");
    return res.redirect(`${process.env.API_URL}/accounts/login`);
  }
}
module.exports = cookieAuthentication;
