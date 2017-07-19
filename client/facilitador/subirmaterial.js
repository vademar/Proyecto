Template.SUBIRMATERIAL.events({
	"submit form" : function(e){
		e.preventDefault();
		/*var nomb;
		var descrip;
		var element=document.getElementById('nombre');var element1=document.getElementById('descripcion');
		if(element !=null && element1 != null){nomb=element.value;descrip=element1.value;}
		else{nomb=null;descrip=null;}
		*/

		var idcu=FlowRouter.getParam('id');
		var upload = Videos.insert({
			file: e.target.imagen.files[0],
			streams: 'dynamic',
			chunkSize: 'dynamic',
		});
		var curs = {
			"nombre" : e.target.nombre.value,
			"descripcion" : e.target.descripcion.value,
			"video" : upload.config.fileId,
			"cursId" : idcu
		};
		//console.log(curs);
		//console.log(idcu);
		Meteor.call("subirmaterial",curs);
		e.target.nombre.value="";
		e.target.descripcion.value="";
		e.target.imagen.value="";
		return false;
	} 
});
