Template.registros.onRendered(function(){
     $(".panelForm").css("opacity",0);
});
Template.registros.events({

	"submit form" : function(e){
		
	var user = {
		"username":e.target.Nombre.value,
		"email" : e.target.email.value,
		"password" : e.target.password.value,
		"profile":{
			"nombre": e.target.Nombre.value,
			"apellido":e.target.Apellido.value
		}
	};
	Accounts.createUser(user, function(e){
				console.log(user);
				//
			});
	
	return false
}
})
