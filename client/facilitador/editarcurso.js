var c=new ReactiveVar();

Template.editarcurso.onRendered(function(){
    var idre= FlowRouter.getParam('id');
   // console.log(idre);
    c.set(idre);
    return true;
});

Template.editarcurso.events({
  	'submit form': function(e) {
    e.preventDefault();
    id=c.get();
    var a={
    	"nombre":e.target.nomb.value,
    	"descripcion":e.target.descri.value
    }
    Meteor.call('editarcu',id,a);
    FlowRouter.go('/cursos/');
    console.log(a);
  }
});

Template.editarcurso.helpers({
	editcurs(){
		console.log(Cursos.find({_id:c.get()}).fetch());
		return Cursos.find({_id:c.get()}).fetch();	
	}
});