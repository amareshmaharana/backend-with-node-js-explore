import express from "express";

import { connectDB } from "./db/db-connect.js";
import { logReqRes } from "./middlewares/index.js";
import userRouter from "./routes/user.route.js";

const app = express();
const PORT = 5000;

// DB Connection
connectDB('mongodb://127.0.0.1:27017/yt-app')

// ++++++ Middleware - Plugin ++++++
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('log.txt'));

// ++++++++++ Routes ++++++++++
app.use('/api/users', userRouter)

app.listen(PORT, () => `Server initiated! at ${PORT}`);

