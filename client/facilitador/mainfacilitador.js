Template.menu.events({
	"click #Logout" : function(){
		Meteor.logout();
	}

});
Template.menu.helpers({
	username : function(){
		return Accounts.user().profile.nombre;
	}
});