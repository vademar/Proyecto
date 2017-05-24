//variable reactiva
myTemplates = new ReactiveVar();
myTemplates.set("loginForm")
Template.mainModule.helpers({
	template : function(){
		return myTemplates.get();

	}
})