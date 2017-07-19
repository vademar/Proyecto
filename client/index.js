Template.users.events({
	"click #Logout" : function(){
		Meteor.logout();
		FlowRouter.go('/');
	} 
});
Template.users.helpers({
	username : function(){
		return Accounts.user().profile.nombre;
	}
});