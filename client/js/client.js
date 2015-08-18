var fonts = ['font-20db', 'font-open-sans']
var counter = 0;
Template.font.events({
	"click .change": function(event){
		event.preventDefault();
		$("#text").removeClass();
		$("#text").addClass(fonts[counter]);
		counter++;
		if(counter>fonts.length){
			counter = 0;
		}
	}
})