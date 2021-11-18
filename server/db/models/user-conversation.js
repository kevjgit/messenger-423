const Sequelize = require("sequelize");
const db = require("../db");

const UserConversation = db.define("user-conversation", {} );

module.exports = UserConversation;
