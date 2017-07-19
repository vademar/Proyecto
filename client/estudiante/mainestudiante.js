Template.maines.events({
	"click #Logout" : function(){
		Meteor.logout();
	} 
});
Template.maines.helpers({
	username : function(){
		return Accounts.user().profile.nombre;
	}
});