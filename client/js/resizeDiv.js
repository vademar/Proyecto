$.fn.resizeDiv = function(callback){
	var current,ant;
	var obj = $(this);
	this.resizeEvent = function(){
		current = obj.height();
		if(current != ant){
			callback(current);
		}
		
		ant = obj.height();
	}
	var ant = $(this).height();
	var interval = setInterval(this.resizeEvent,500);
}