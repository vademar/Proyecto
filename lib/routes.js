FlowRouter.route("/",{
	action: function(query,queryParams){
		BlazeLayout.render("formulario");
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