
Template.perfil.helpers({
	img() {
	    return Images.findOne(this.profile.imagen);
	 },
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
	     var imagen;
	     if( valor != "" ) {
	        var upload = Images.insert({
	          file: e.target.imagen.files[0],
	          streams: 'dynamic',
	          chunkSize: 'dynamic',
	        });
	        imagen=upload.config.fileId;
	     }else{
	         var sacar=Meteor.users.findOne({_id:Accounts.user()._id}).profile.imagen;
	        imagen=sacar;
	     }
		
		//console.log(e.target.imagen.value);

		var obj = {
			"nombre" : nombre,
			"apellido" : apellido,
			"email" : email,
			"imagen":imagen
	    };
		Meteor.call("editarperfil",id,obj);
		//$('#modal1').closeModal();
		$('#modal1').modal('close');
		return false;
	},
	"click #datoseditar":function(){
			
	$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });	

	}
});
Meteor.subscribe('img');