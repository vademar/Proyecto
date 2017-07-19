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
	"click .Archivos":function(e){
		if($('.MATERIAL').css('display')=='block')
		{
			$('#'+this._id+'material').slideToggle('slow', function() {});
			$(".chat").css({"display": "none"});
		}
		else{
			$('#'+this._id+'material').slideToggle('slow', function() {});
			$(".chat").css({"display": "none"});
		}
		return false;

	},
	"click .CHATS":function(e){
		var id = this._id;
		chat.set(id);
		if($('.chat').css('display')=='none')
		{
			$('#'+this._id).slideToggle('slow', function() {});
			$(".MATERIAL").css({"display": "none"});
			console.log("entra");
		}
		else{
			$('#'+this._id).slideToggle('slow', function() {});
			$(".MATERIAL").css({"display": "none"});
		}
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
	ima() {
		//Respuesta.findOne({userId:idUsuario}).texto
		var im=Meteor.users.findOne({_id:this.userId}).profile.imagen;
		return Images.findOne(im);
	},
	fec(){
		var  pre=Respuesta.findOne({_id:this._id}).fecha;
		var  re= moment(pre).format("LLL");
		return re;
	},
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
Template.respuestasas.events({
	"submit form":function(e){
		var pre=resp.get();
		e.preventDefault();
		var obj = {
			texto  : e.target.email.value, 
			userId : Accounts.user()._id,
			pregId : pre,
			cursId : FlowRouter.getParam('id')
	
		};
		
		Meteor.call('respuesta', obj);
		 
		 $('#formularioderespuesta').trigger("reset");
		return false;
	
	}
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
		
		Meteor.call("preguntass",pre);
	}
});
Template.chatss.helpers({
	username:function(){
		return Accounts.user().profile.nombre;
	},
	yo(){
		if( this.userId===Accounts.user()._id )
		{
			return true;
		}
		return false;
	},
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

