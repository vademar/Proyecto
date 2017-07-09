
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



Cursos = new  Mongo.Collection("cursos");
var cursosSchema = new SimpleSchema({
	nombre: {
		type:String
	},
	descripcion: {
		type:String
	},
	inicio: {
		type:Date
	},
	fecha: {
		type:Date
	},
	imgId: {
		type:String
	},
	usersId:{
		type: String,
		autoValue:function(){
			return	Accounts.user()._id;
		}
	}
});

Cursos.attachSchema(cursosSchema);



Material = new  Mongo.Collection("material");
var MaterialSchema = new SimpleSchema({
	nombre: {
		type:String
	},
	descripcion: {
		type:String
	},
	imgId: {
		type:String
	},
	cursId:{
		type: String
	}
});

Material.attachSchema(MaterialSchema);