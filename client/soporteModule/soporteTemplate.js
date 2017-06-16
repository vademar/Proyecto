Template.templateSupport.helpers({ //Template es de cliente
	ready: function(){ //verificar si los datos estan cargados
		return FlowRouter.subsReady("getConnections"); 
	},
	user_connection_list: function(){
		return CONNECT.find();  //aqui estamos usasndo mini mongo
	},
	user_list: function(){
		return Meteor.users.findOne({_id:this.idUs});
	}
});