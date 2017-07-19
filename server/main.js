import { Meteor } from 'meteor/meteor';
 
Meteor.startup(() => {
	Meteor.publishComposite("chatas",function(id){
    return {
      find(){
      	
        return Chateo.find({cursId:id});
      },
      children:[{
          find(preg){
          	
            return Meteor.users.find({_id:preg.userId});
          }          
        }]
    }});


	Meteor.publishComposite("getMSN",function(idUs,idMe){
		return {
			find(){
				return CHAT.find(
					{$or:
						[
							{idSource:idMe,idDestination:idUs},
							{idSource:idUs,idDestination:idMe}
							]});
			},
			children:[
				{
					find(chat){
						return Meteor.users.find({_id:chat.idSource});
					}
					
				},
				{
					find(chat){
						return Meteor.users.find({_id:chat.idDestination});
						
					}
				}
			]
		}
	});
	Meteor.publishComposite("listaMaterial",function(id){
		return {
			find(){
				return Material.find({cursId:id});
			},
			children:[
				{
					find(mate){
						return Cursos.find({_id:mate.id});
					}
				}
			]
		}
	});
	Meteor.publishComposite("pregunta",function(id){
		return {
			find(){
				return Pregunta.find({idcurso:id});
			},
			children:[
				{
					find(mate){
						return Meteor.users.find({_id:mate.idusuario});
					}
				}
			]
		}
	});

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
		"editarperfil": function(id,msnObj){
			Meteor.users.update({_id:id},
				{$set:{ 'profile.nombre':msnObj.nombre,
						'profile.apellido':msnObj.apellido,
						'profile.imagen':msnObj.imagen,
						'emails.0.address':msnObj.email
					}});
			return true;
	    },

		"eliminarrol":function(id){
			var ver=Meteor.users.findOne({_id:id}).profile.tipo;
			if(ver === "Facilitador")
			{
				Roles.removeUsersFromRoles(id, ['facilitador'], 'facilitador');
			}
			else
			{
				Roles.removeUsersFromRoles(id, ['estudiante'], 'estudiante')

			}
		
			return true;
		},

		"habiUsuario": function(id){
			Meteor.users.update(id,{$set:{'profile.estado':true}});
			return true;
		  },

		  "desUsuario": function(id){
			Meteor.users.update(id,{$set:{'profile.estado':false}});
			return true;
		  },

		  "addEstu": function(id){
			Roles.addUsersToRoles(id,['estudiante'], 'estudiante');
			return true;
		  },
		  "addFaci": function(id){
		  	// Meteor.users.update({_id:id},{$set:{}})
		  	Roles.addUsersToRoles(id,['facilitador'], 'facilitador');
			return true;	
		  },



		"editarcu": function(id,msnObj){
			Cursos.update({_id:id},{$set:{'nombre':msnObj.nombre,'descripcion':msnObj.descripcion}});
			return true;
		},
		"chatss": function(msnObj){
		
			Chateo.insert(msnObj);
			return true;
		},
		"checkAccount": function(username){
			
			var t = Meteor.users.find({username:username}).fetch();
			
			if(t.length == 1){
				return true;
			}
			return false;
		},
		"checkConnection": function(id){
			// select * from connect where idus=id and stade = true
			var result = CONNECT.find({idUs:id,stade:true}).fetch();
			if(result.length>0){
				return {value:true,id:result[0]._id};
			}
			return {value:false};
		},
		"subirmaterial": function(msnObj){
			Material.insert(msnObj);
			return true;
		},
		"preguntass": function(msnObj){
			Pregunta.insert(msnObj);
			return true;
		},
		"crearcurso": function(msnObj){
			
			Cursos.insert(msnObj);
			return true;
		},
		"createConnection": function(idus){
			
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
	Meteor.publish('img', function () {
	    return Images.find().cursor;
	 });
	Meteor.publish('videos', function () {
	    return Videos.find().cursor;
	  });
	Meteor.publish('findcurso',function(){
		return Cursos.find();
	});
	Meteor.publish('lista',function(){
		return Meteor.users.find();
	});
	
});
