const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv/config");
const api = process.env.API_URL;
const cors = require("cors");
const morgan = require("morgan");
//const tokenAuthentication = require("./HELPERS/jwt");
const cookieAuthentication = require("./HELPERS/cookie");

app.use(express.json());

const accountsRouter = require("./ROUTES/accounts");
const applicationsRouter = require("./ROUTES/applications");
const interviewsRouter = require("./ROUTES/interviews");
const contactsRouter = require("./ROUTES/contacts");
const analyticsRouter = require("./ROUTES/analytics");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(morgan("tiny"));
app.use(cookieParser());

app.use(`${api}/accounts`, accountsRouter);
app.use(`${api}/applications`, cookieAuthentication, applicationsRouter);
app.use(`${api}/interviews`, cookieAuthentication, interviewsRouter);
app.use(`${api}/analytics`, cookieAuthentication, analyticsRouter);
app.use(`${api}/contacts`, cookieAuthentication, contactsRouter);

module.exports = app;
