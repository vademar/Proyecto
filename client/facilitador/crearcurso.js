Template.crearcurso.events({
	"submit form": function(e){
		console.log("click")
		e.preventDefault();
		var curs = {
			"nombre" : e.target.nombre.value,
			"descripcion" : e.target.descripcion.value,
			"inicio" : e.target.inicio.value,
			"fecha" : e.target.fin.value,
			"imgId":'null'
		};
		console.log(curs);
		Meteor.call("crearcurso",curs);
	}
});

