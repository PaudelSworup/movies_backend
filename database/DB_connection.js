const mongoose = require("mongoose");
// mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("Database Connected"))
  .catch((err) => console.error(err));
