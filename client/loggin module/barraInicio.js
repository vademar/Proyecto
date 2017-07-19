

 Template.barraInicio.onRendered(function(){
     $(".panelForm").css("opacity",0);
});
Template.barraInicio.helpers({
	username : function(){
		return Accounts.user().username;
	}
})
 
Template.barraInicio.events({
	"click #Login" : function(){
		$(".panelForm").css("opacity",1);
		$(".panelForm").css("display","inline");
	},
	"click #Logout" : function(){
		Meteor.logout();
		FlowRouter.go('/');
	} 
});
