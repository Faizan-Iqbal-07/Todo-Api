
const path = require('path');

const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');

const DB_PATH = "mongodb+srv://Faizan:faizan313@todi-api.dwhuxvy.mongodb.net/todo?appName=todi-api"
const todoItemsRouter = require("./routes/todoItemsRouter")
const errorsController = require("./controllers/errors");

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoItemsRouter);

app.use(errorsController.pageNotFound);

const PORT = 3001;

const dns = require('dns');
dns.setServers(["8.8.8.8" ,"1.1.1.1"])

mongoose.connect(DB_PATH).then(() => {
  console.log('Connected to Mongo');
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log('Error while connecting to Mongo: ', err);
});
