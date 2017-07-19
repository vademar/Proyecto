Template.sistemabaneo.helpers({

	verestado: function(){
		var ver= Meteor.users.findOne({_id:this._id,'profile.estado':false}).profile.tipo;
		if(ver === "Facilitador"){
			return true;
		}else{
			return false;
		}		
	},
	permisos: function(){
		
		if(Roles.userIsInRole(this._id,'facilitador', 'facilitador'))
		{
				return true;
		}
		else{
			if(Roles.userIsInRole(this._id,'estudiante', 'estudiante')){
				return true;
			}
			else{
				return false;
			}
		}
	},

	ver:function(){
		var vii=Meteor.users.findOne({_id:this._id}).profile.estado;
		if(vii===true)
		{
			return true;
		}	
		return false;
	},
	lis: function(){
		//return Meteor.users.find({ "$or": [{'roles.facilitador':'facilitador'},{ 'roles.estudiante':'estudiante' }]});
		return Meteor.users.find();
	}
});
Template.sistemabaneo.events({
	"click #deleterol":function(e){
		//alert(this._id);
		id=this._id;
		Meteor.call("eliminarrol",id);

	},
	"click #Habilitar":function(e){
		
		id=this._id;
		Meteor.call("habiUsuario",id);
	},
	"click #Deshabilitar":function(e){
		id=this._id;
		Meteor.call("desUsuario",id);
	},
	"click #rolestu":function(e){
		
		id=this._id;
		Meteor.call("addEstu",id);
		Meteor.call("habiUsuario",id);
	},
	"click #rolfacili":function(e){
		//e.preventDefault();
		alert(this._id);
		id=this._id;
		Meteor.call("addFaci",id);
		Meteor.call("addUsuario",id);
	}
});


Meteor.subscribe('listPendientes');