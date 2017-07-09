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
