reactiveCheck = new ReactiveVar();
reactiveCheck.set(false);
SESIONID = new ReactiveVar();

getMSN = new SubsManager();
Template.templateClient.onCreated(function() {
	self = this;
	self.ready = new ReactiveVar();
	self.autorun(function() {
		var handler = getMSN.subscribe("getMSN",Accounts.user()._id,"Esttqdv5nwdSnEsdo");
		self.ready.set(handler.ready());
	});
});
Template.templateClient.onRendered(function(){
	//alert("result.value");
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
Template.templateFormChat.events({
	"submit form": function(e){
		var msn = e.target.msn.value;
		obj ={
				idSource: Accounts.user()._id,
				idDestination: "Esttqdv5nwdSnEsdo",
				message:msn,
				date: new Date()
			}
		Meteor.call("addChat",obj,function(err,result) {

		})
		e.target.msn.value = "";
		return false;
	}
});
Template.templateFormChat.helpers({
	list_msn: function(){
		return CHAT.find();
	},
	idMe: function(){
		console.log(this.idSource);
		console.log(this.idSource == Accounts.user()._id);
		return this.idSource == Accounts.user()._id;
	},
	user_source: function(){

		console.log(this);
		console.log(Meteor.users.findOne({_id:this.idSource}));
		return Meteor.users.findOne({_id:this.idSource});
	}
});
Template.templateFormChat.onRendered(function() {
	$(".container_chat").resizeDiv(function(num){
		$(".rectangle_hidden_client").animate({scrollTop:num},500);
	});
});
