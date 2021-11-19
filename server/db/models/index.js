const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
const UserConversation = require("./user-conversation");

// associations


User.hasMany(Conversation); 
Conversation.belongsTo(User, { as: "user1" }); 
Conversation.belongsTo(User, { as: "user2" }); 
Message.belongsTo(Conversation);
Conversation.hasMany(Message); 


Conversation.hasMany(UserConversation);
UserConversation.belongsTo(Conversation);
User.hasMany(UserConversation);
UserConversation.belongsTo(User);


module.exports = {
  User,
  Conversation,
  Message
};
