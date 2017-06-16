import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	

	Meteor.publishComposite("getConnections",{
		find(){
			return CONNECT.find({stade:true});//todas las conecciones donde el estado del cliente sea tru
		},
		children:[{  //va tener cada uno de los elementos de CONNECT
			find(connect){    //nos va dar un objeto con la lista de elementos de los usuarios
				return Meteor.users.find({_id:connect.idUs});
			}
		}]
	});

	Meteor.methods({
		"checkConnection": function(id){
			// select * from connect where idus=id and stade = true
			var result = CONNECT.find({idUs:id,stade:true}).fetch();
			if(result.length>0){
				return {value:true,id:result[0]._id};
			}
			return {value:false};
		},
		"createConnection": function(idus){
			console.log(idus);
			var id = CONNECT.insert({idUs:idus,connectionDate:new Date(),disconnectionDate:new Date(),stade:true});
			return id;
		},
		"disconnection": function(id){
			CONNECT.update(id,{$set:{stade:false,disconnectionDate:new Date()}});
			return true;
		},
		"addChat": function(msnObj){
			CHAT.insert(msnObj);
			return true;
		}
	});
});
