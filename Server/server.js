require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const httpErrors = require("http-errors");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./Models/index");
const userRouter = require("./Routes/user.route");
const authRouter = require("./Routes/auth.route");

// Khoi tao Express webserver
const app = express();

// Sử dụng CORS với cấu hình mặc định
app.use(cors());

// Bo sung cac middlewarre kiem soat du hoat dong cua client toi webserver
app.use(bodyParser.json());
app.use(morgan("dev"));

// Router toi web root
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to RESTFull API",
  });
});

// Tiep nhan cac Request tu Client
app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

// Xu ly cac loi phat sinh
app.use(async (req, res, next) => {
    next(httpErrors.NotFound());
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

// Tiep nhan cac request 
app.listen(process.env.PORT, process.env.HOST_NAME, () => {
    console.log(`Server is running at: http://${process.env.HOST_NAME}:${process.env.PORT}`);
    db.connectDB();
})
