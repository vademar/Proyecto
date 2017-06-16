reactiveCheck = new ReactiveVar();
reactiveCheck.set(false);
SESIONID = new ReactiveVar();
Template.templateClient.onRendered(function(){
	Meteor.call("checkConnection",Accounts.user()._id,function(err,result){
		reactiveCheck.set(result.value);
		SESIONID.set(result.id);
	});
});

Template.templateClient.helpers({
	conectado: function(){
		return reactiveCheck.get();
	}
});
Template.connect_template.events({
	"click button": function(e){
		console.log("click")
		e.preventDefault();
		Meteor.call("createConnection",Accounts.user()._id,function(err,result){
			SESIONID.set(result);
			if(err == undefined){
				reactiveCheck.set(true);	
			}
			
		});
	}
}); 