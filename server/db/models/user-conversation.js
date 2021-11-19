const Sequelize = require("sequelize");
const db = require("../db");

const UserConversation = db.define("user-conversation", {} );

UserConversation.findUserConversation = async function (userId, conversationId) {
   
    const userConversation = await UserConversation.findOne({
      where: {
        [Op.and]: [
            {userId: userId},
            {conversationId: conversationId}
        ]
      }
    });
  
    return userConversation;
  };

module.exports = UserConversation;
