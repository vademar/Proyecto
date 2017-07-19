


Template.registros.onRendered(function(){
	$("select").material_select();
});


Template.registros.events({

	"submit form" : function(e){
		
	var user = {
		"username":e.target.Nombre.value,
		"email" : e.target.email.value,
		"password" : e.target.password.value,
		"profile":{
			"nombre": e.target.Nombre.value,
			"apellido":e.target.Apellido.value,
			"estado":false,
			"tipo":e.target.tipo.value,
			"imagen":'null'
		}
	};
	Accounts.createUser(user, function(e){
				console.log(user);
				//
			});
	
	return false
}
})
