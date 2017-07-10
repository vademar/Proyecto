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