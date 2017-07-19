Template.menu.events({
	"click #Logout" : function(){
		Meteor.logout();
		FlowRouter.go('/');
	}

});
Template.menu.helpers({
	username : function(){
		return Accounts.user().profile.nombre;
	}
});