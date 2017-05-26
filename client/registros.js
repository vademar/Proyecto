Template.registros.onRendered(function(){
     $(".panelForm").css("opacity",0);
});
Template.registros.events({

	"submit form" : function(e){
		console.log(e);
	var user = {
		"Nombre" : e.target.username.value,
		"Apellido" : e.target.username.vale,
		"email" : e.target.email.value,
		"username" : e.target.username.value,
		"password" : e.target.password.value,

	}
	
	return false
}
})
