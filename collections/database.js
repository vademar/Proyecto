
CHAT = new  Mongo.Collection("chat");
CONNECT = new Mongo.Collection("connect");
var chatSchema = new SimpleSchema({
	idSource: {
		type:String
	},
	idDestination: {
		type:String
	},
	date: {
		type:Date
	},
	message: {
		type:String
	}
});
CHAT.attachSchema(chatSchema);
var connectSchema = new SimpleSchema({
	idUs: {
		type:String
	},
	connectionDate: {
		type:Date
	},
	disconnectionDate: {
		type:Date
	},
	stade: {
		type:Boolean
	}
});
CONNECT.attachSchema(connectSchema);