chat = new ReactiveVar();
Template.tomarcurso.helpers({
	readyMA: function(){
		return FlowRouter.subsReady("listaMateriales");
	},
	clases: function(){
		return Material.find();
	},
	clasescur: function(){
		return Cursos.findOne(this.id);
	}
});

Template.tomarcurso.events({
	"click .CHATS":function(e){
		var idd = this._id;
		chat.set(idd);
		$('#'+this._id).slideToggle('slow', function() {});
		return false;
	},
});



Template.preguntas.events({
	
	"click #ANADIR": function(e){
		e.preventDefault();
		var nomb;var element=document.getElementById('pregunta');if(element !=null){nomb=element.value;}else{nomb=null;}

		var pre = {
			"mensaje" : nomb,
			"idcurso" : FlowRouter.getParam('id'),
			"idusuario" : Accounts.user()._id,
			"fecha": new Date(),
			"votos" : 0
		};
		//console.log(pre);
		Meteor.call("preguntass",pre);
	}
});

Template.tomarcurso.helpers({
	readyPre: function(){
		return FlowRouter.subsReady("preguntas");
	},
	pregu: function(){
		return Pregunta.find().fetch().reverse();;
	},
	preguser: function(){
		return Meteor.users.findOne({_id:this.idusuario});
	}
});

Template.chatss.helpers({
	
	readychat:function(){
		return FlowRouter.subsReady("chats");
	},
    listchat: function () {
    	//var va=Chateo.findOne({_id:this.cursId})._id;
		return Chateo.find({claseId:this._id}).fetch();
	},
	users :  function () {
		//console.log(Meteor.users.findOne({_id:this.userId}));
		return	Meteor.users.findOne({_id:this.userId});
	}
});



Template.chatss.events({
	
	'submit form': function (e) {
		var pre=chat.get();

		//var nomb;var element = document.getElementById('chattt');
	    //if (element != null) {nomb = element.value;}else {nomb = null;}
	    var obj = {
	    	claseId: pre,
		  	userId : Accounts.user()._id,
			mensaje : e.target.chattts.value,
			//mensaje : nomb, 
			cursId : FlowRouter.getParam('id'),
			estado : false
		};
		console.log(obj);
		Meteor.call('chatss',obj);

		e.target.chattts.value=" ";
		/*$(document).keypress(function(e) {
		    if(e.which == 13) {
		        Meteor.call('chatss',obj);
		    }
		    else{
				Meteor.call('chatss',obj);
		   }
		});*/
		return false;
	}
});

