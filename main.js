window.onload=function(){
$("#console").prepend(">")
$("#console").hover(function() {
    this.focus();
}, function() {
    this.blur();
}).keydown(function(e) {
	if(e.keyCode==8){//backspace
		contents = $("#line1").text()
		contents = contents.slice(0, -1);
		$("#line1").text(contents)
	}
	else if (e.keyCode ==13){//enter
    //add next line
    //prepend >
    //update global variable
	}
	else if(e.keyCode >64 &&  e.keyCode < 91){
		$("#line1").append(String.fromCharCode(e.keyCode+32))
    	console.log(e.keyCode)
    }
    else
    {
    	$("#line1").append(String.fromCharCode(e.keyCode))
    }


});

}
