Template.registros.onRendered(function(){
     $(".panelForm").css("opacity",0);
});
Template.registros.events({

	"submit form" : function(e){
		
	var user = {
		"Nombre" : e.target.Nombre.value,
		"Apellido" : e.target.Apellido.value,
		"email" : e.target.email.value,
		"username" : e.target.username.value,
		"password" : e.target.password.value,
      
	};
	Accounts.createUser(user, function(e){
				console.log(user);
				//
			});
	
	return false
}
})
