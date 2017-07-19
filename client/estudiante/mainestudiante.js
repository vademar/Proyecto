Template.maines.events({
	"click #Logout" : function(){
		Meteor.logout();
		FlowRouter.go('/');
	} 
});
Template.maines.helpers({
	username : function(){
		return Accounts.user().profile.nombre;
	}
});