

 Template.barraInicio.onRendered(function(){
     $(".panelForm").css("opacity",0);
});

 
Template.barraInicio.events({
	"click #Login" : function(){
		$(".panelForm").css("opacity",1)
	}
});
