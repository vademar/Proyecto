Template.list.helpers({
	
	lista: function(){
		
		return Meteor.users.find({'roles.facilitador':'facilitador'});
	}
});

Meteor.subscribe('lista');