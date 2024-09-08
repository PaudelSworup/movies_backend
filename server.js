const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("./database/DB_connection");

const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const NetflixRouter = require("./routes/NetflixRoutes");
const userRoutes = require("./routes/usersRoutes");
const sendNotification = require("./firebase/sendNotification");

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

// middlewares
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/profile", express.static("public/profile"));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cookieParser());

// routes middllware
app.use("/api", NetflixRouter);
app.use("/api", userRoutes);

// setTimeout(()=>{
//   sendNotification()
// }, 3000);

//for testing
app.get("/api/activation/:token", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "Activation.html"));
});

// server start code
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
