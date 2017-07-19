Template.mainadmin.events({
	"click #Logout" : function(){
		Meteor.logout();
		FlowRouter.go('/');
	} 
});
Template.mainadmin.helpers({
	username : function(){
		return Accounts.user().profile.nombre;
	}
});