Template.mainadmin.events({
	"click #Logout" : function(){
		Meteor.logout();
	} 
});
Template.mainadmin.helpers({
	username : function(){
		return Accounts.user().profile.nombre;
	}
});