Videos = new FilesCollection({
    storagePath: '/home/sergio/Escritorio/SEMI/data',
    collectionName: 'Videos',
    allowClientCode: false
});

Images = new FilesCollection({
  storagePath: '/home/sergio/Escritorio/SEMI/data',
  collectionName: 'Images',
  allowClientCode: false,
  cacheControl: 'public, max-age=31536000'
});


Chateo = new Mongo.Collection("chats");
var mensajesSchema =new SimpleSchema({
    claseId : {
        type:String,
    },
    userId : {
        type:String,
    },
    mensaje : {
        type : String
    },
    cursId : {
        type : String
    },
    estado : {
    	type : Boolean
    }
});

Chateo.attachSchema(mensajesSchema);





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
	video: {
		type:String
	},
	cursId:{
		type: String
	}
});

Material.attachSchema(MaterialSchema);


Pregunta = new  Mongo.Collection("pregunta");
var preguntaSchema = new SimpleSchema({
	mensaje: {
		type:String
	},
	idcurso: {
		type:String
	},
	idusuario: {
		type:String
	},
	fecha:{
		type: Date
	},
	votos:{
		type:Number
	}
});

Pregunta.attachSchema(preguntaSchema);