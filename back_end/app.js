const express = require("express");
var createError = require('http-errors');
var path = require('path');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const Tarefa = require('./routes/tarefa');
const ForeignKey = require("./routes/User_e_tarefas");
const Users = require("./routes/users")
const Login = require("./routes/Login")
const PORT =  8082;

app.use(cors());
app.use(bodyParser.json());
app.use(ForeignKey);
app.use(Users);
app.use(Tarefa);
app.use(Login);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});