const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");

// associations

/**
 * Documentation:
 * belongsTo - add a foreign key and singular association mixins to the source.
 * hasMany - adds a foreign key to target and plural association mixins to the source.
 * Conversation has a foreign key to User
 * Message has a foreign key (conversationId) to Conversation 
 */

User.hasMany(Conversation); //Conversation has a reference to User in a 1-many relationship
Conversation.belongsTo(User, { as: "user1" }); //Conversation has a reference to User
Conversation.belongsTo(User, { as: "user2" }); 
Message.belongsTo(Conversation);
Conversation.hasMany(Message); //Message has a reference to Conversation

module.exports = {
  User,
  Conversation,
  Message
};
