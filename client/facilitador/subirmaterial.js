Template.SUBIRMATERIAL.events({
	"click #cargar" : function(e){
		e.preventDefault();
		var nomb;
		var descrip;
		var element=document.getElementById('nombre');var element1=document.getElementById('descripcion');
		if(element !=null && element1 != null){nomb=element.value;descrip=element1.value;}
		else{nomb=null;descrip=null;}
		var idcu=FlowRouter.getParam('id');
		var curs = {
			"nombre" : nomb,
			"descripcion" : descrip,
			"imgId" : 'null',
			"cursId" : idcu
		};
		//console.log(curs);
		//console.log(idcu);
		Meteor.call("subirmaterial",curs);
		return false;
	} 
});
