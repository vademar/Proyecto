Template.msn_template.onRendered(function(){
	//function test(){
	//	console.log(" "+$("#contenedor").height());
	//}
	//setInterval(test,20);
	$("#contenedor").resizeDiv(function(num){
		$(".rectangle_hidden").animate({scrollTop:num},500);
	});
});

Template.templateSupport.helpers({
	ready: function(){
		return FlowRouter.subsReady("getConnections");
	},
	user_connection_list: function(){
		return CONNECT.find();
	},
	user_list: function(){
		return Meteor.users.findOne({_id:this.idUs});
	}
});
Template.templateSupport.events({
	"submit form": function(e){
		var msn = e.target.msn.value;
		if(idDestination.get() != undefined) {
			obj ={
				idSource: Accounts.user()._id,
				idDestination: idDestination.get(),
				message:msn,
				date: new Date()
			}
			e.target.msn.value = "";
			Meteor.call("addChat",obj,function(){
			});	
		}else{
			alert("Debe seleccionar a un usuario primero")
		}
		
		//console.log(obj);
		/*Meteor.call("addChat",obj,function(){	

		});*/
		return false;
	}
});
var idDestination = new ReactiveVar();
Template.itemConnection.events({
	"click #users_list": function(){
		idDestination.set(this._id);
		FlowRouter.setQueryParams({idus:this._id,id:Accounts.user()._id});
		
	}
})
Template.msn_template.helpers({

	ready: function(){
		
		return FlowRouter.subsReady("getMSN");
	},
	list_msn: function(){
		return CHAT.find();
	},
	user_source: function(){
		return Meteor.users.findOne({_id:this.idSource});
	},
	user_destination: function(){
		//console.log(this.idSource);
		//console.log(Meteor.users.findOne({_id:this.idSource}));
		
		return Meteor.users.findOne({_id:this.idSource});
	},
	idMe: function(){
		return Accounts.user()._id == this.idSource;	
	}

});	