var express = require('express');
var router = express.Router();
const sequelize = require('../db');
const Users_e_tarefas = require('../models/users_e_tarefas');

sequelize.sync()

module.exports = router;