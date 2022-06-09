require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const yaml = require("js-yaml");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const messageRouter = require("./routes/messageRouter");
const swaggerDocument = yaml.load(
    fs.readFileSync(path.join(__dirname, "./openapi.yaml"), "utf8")
);

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/messages", messageRouter)
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.EXPRESS_PORT || 5000;
app.listen(port, () => {
    console.log(`server has started on port ${port}`);
});
