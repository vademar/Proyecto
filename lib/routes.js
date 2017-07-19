FlowRouter.route("/",{
	action: function(query,queryParams){
		BlazeLayout.render("index");
	}
});
FlowRouter.route("/registros",{
	action: function(query,queryParams){
		BlazeLayout.render("registros");
	}
});

FlowRouter.route("/list",{
	action: function(query,queryParams){
		BlazeLayout.render("list");
	}
});

FlowRouter.route("/perfil",{
	action: function(query,queryParams){
		BlazeLayout.render("perfil");
	}
});


FlowRouter.route("/cursos",{
	action: function(query,queryParams){
		BlazeLayout.render("cursos");
	}
});


FlowRouter.route("/crearcurso",{
	action: function(query,queryParams){
		BlazeLayout.render("crearcurso");
	}
});

FlowRouter.route("/tomarcurso/:id",{
	name:'tomarcurso',
	subscriptions:function(params,queryParams){
		this.register("listaMateriales",Meteor.subscribe("listaMaterial",params.id));
		this.register("preguntas",Meteor.subscribe("pregunta",params.id));
		this.register("chats",Meteor.subscribe("chatas",params.id));
	},
	action: function(query,queryParams){
		BlazeLayout.render("tomarcurso");
	}
});

/*FlowRouter.route("/editarcurso/:_id",function(){
	this.render('editarcurso',{
		to:"main_content",
		data:function(){
			return Cursos.findOne({_id:this.params._id});
		}
	});
	}
});*/


FlowRouter.route("/SUBIRMATERIAL/:id",{

	action: function(query,queryParams){
		BlazeLayout.render("SUBIRMATERIAL");
	}
});
FlowRouter.route("/editarcurso/:id",{
	
	action: function(query,queryParams){
		BlazeLayout.render("editarcurso");
	}
});


FlowRouter.route("/desarrollo",{
	action: function(query,queryParams){
		BlazeLayout.render("desarrollo",{bannerD :"bannerD",content:"contenDesarrollo"});
	}
});

FlowRouter.route("/soporte",{
	subscriptions: function(params,queryParams){ //subbscription esta sobreescriviendo los metedos
		//console.log(queryParams);
		this.register("getMSN",Meteor.subscribe("getMSN",queryParams.idus,queryParams.id));
		this.register("getConnections",Meteor.subscribe("getConnections"));	//para los susuaris q entren a soporte se crea una lista de susuarios
	},
	action: function(query,queryParams){
		BlazeLayout.render("desarrollo",{bannerD :"bannernav",content:"soporteTemplate"});
	}
});
