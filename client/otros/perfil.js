
Template.perfil.helpers({
	
	datos : function(){
		return Meteor.users.find({_id:Accounts.user()._id}).fetch();
	},
	email:function(e){
		return Accounts.user().emails[0].address;
	}
})
Template.perfil.events({
	//alert("result.value");
	"submit form":function(e){
		var nombre= document.getElementById("nombre");
		var email= document.getElementById("email");
		var apellido= document.getElementById("apellido");
		if(nombre!=undefined && email!=undefined && apellido!=undefined )
		{nombre=nombre.value;email=email.value;apellido=apellido.value;}
		var id=Accounts.user()._id;
		
		valor = document.getElementById("imagen").value;
	     var imagenes;
	     if( valor != "" ) {
	        var upload = Images.insert({
	          file: e.target.imagen.files[0],
	          streams: 'dynamic',
	          chunkSize: 'dynamic',
	        });
	        imagenes=upload.config.fileId;
	     }else{
	         var sacar=Meteor.users.findOne({_id:Accounts.user()._id}).profile.imagen;
	        imagenes=sacar;
	     }
		
		//console.log(e.target.imagen.value);

		var obj = {
			"nombre" : nombre,
			"apellido" : apellido,
			"email" : email,
			"imagen":imagenes
	    };
		Meteor.call("editperfil",id,obj);
		$('#modal1').closeModal();
		return false;
	},
	"click #datoseditar":function(){
			
			   $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
			    $('.modal-trigger').leanModal();
			  });
			     

	}
});
