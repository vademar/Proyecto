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



