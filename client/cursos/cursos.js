Template.cursos.onRendered(function(){
     $(".panelForm").css("opacity",0);
});

Template.cursos.helpers({
	findcurso:function(){
		return Cursos.find();
	}
});

Meteor.subscribe('findcurso');