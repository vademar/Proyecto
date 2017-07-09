Template.tomarcurso.helpers({
	readMA: function(){
		return FlowRouter.subsReady("listaMateriales");
	},
	clases: function(){
		return Material.find();
	},
	clasescur: function(){
		return Cursos.findOne(this.id);
	}
});