 Template.loginForm.events({
	"click #registrar" : function(e){
		e.preventDefault();
		myTemplates.set("registros");
	},


	"click #close" : function(e){
		e.preventDefault();
		$(".panelForm").css("opacity",0);
		$(".panelForm").css("display","none");
	},
	"submit form" : function(e){
		//SERVIDOR
		Meteor.loginWithPassword(e.target.username.value,e.target.password.value);
		$(".panelForm").css("opacity",0);
		$(".panelForm").css("display","none");
		return false;
	}
});
