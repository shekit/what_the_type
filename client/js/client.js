var fonts = ['font-20db', 'font-open-sans']

var serifFonts = ['font-20db','font-lala', 'font-chambu', 'font-like']
var sansSerifFonts = ['font-open-sans', 'font-no-sans', 'font-nonsense']

var fontSizes = [12,14,16,18,24,32,44,48,64,72];

var counter = 0;
var leftKeyPressed = false;
var rightKeyPressed = false;

var fontListId = '';
var fontListLength = 0

Template.body.events({
	"keydown": function(event){

		//UP KEY
		if(event.keyCode == 38){
			var currentFontSize = parseInt($("#text").css('font-size'));
			console.log(currentFontSize);
			if(currentFontSize <= 100){
				currentFontSize+=2;
				$("#text").css('font-size',currentFontSize);
			}

			//set btn text to current font size
			$("#font-size-list-btn").html(currentFontSize + " px");
		}

		// DOWN KEY
		if(event.keyCode == 40){
			var currentFontSize = parseInt($("#text").css('font-size'));
			console.log(currentFontSize);
			if(currentFontSize >= 10){
				currentFontSize-=2;
				$("#text").css('font-size',currentFontSize);
			}
			
			//set btn text to current font size
			$("#font-size-list-btn").html(currentFontSize + " px");
		}

		// RIGHT KEY
		if(event.keyCode == 39){

			if(counter == fontListLength-1){
				counter = 0
			} else {
				counter++
			}

			var fontName = $(fontListId + ' li').eq(counter)[0]['innerText'];
			console.log($(fontListId + ' li').eq(counter))
			$(fontListId+"-btn").html(fontName);
			console.log("RIGHT KEY COUNTER: "+ counter);
			
		}

		// LEFT KEY
		if(event.keyCode == 37){

			if(counter == 0){
				counter = fontListLength - 1
			} else {
				counter--
			}

			var fontName = $(fontListId + ' li').eq(counter)[0]['innerText'];
			$(fontListId+"-btn").html(fontName);
			console.log("LEFT KEY COUNTER: "+ counter);

		}
	}
})

Template.font.onRendered(function(){
	var fontField = $("#text");
	var field = fontField.get(0);
	var fieldLength = field.value.length;
	field.selectionStart = fieldLength;
	field.selectionEnd = fieldLength;
	field.focus();
})

Template.font.events({
	"click .change": function(event){
		event.preventDefault();
		$("#text").removeClass();
		$("#text").addClass(fonts[counter]);
		counter++;
		if(counter>fonts.length){
			counter = 0;
		}
	},

	"click .increase-font-size": function(event){
		event.preventDefault();
		var currentFontSize = parseInt($("#text").css('font-size'));
		console.log(currentFontSize);
		if(currentFontSize <= 100){
			currentFontSize+=2;
			$("#text").css('font-size',currentFontSize);
		}
	},

	"click .decrease-font-size": function(event){
		event.preventDefault();
		var currentFontSize = parseInt($("#text").css('font-size'));
		console.log(currentFontSize);
		if(currentFontSize >= 10){
			currentFontSize-=2;
			$("#text").css('font-size',currentFontSize);
		}
	},

	"click .font-type": function(event){
		event.preventDefault();
		var self = event.target
		var fontName = self.innerHTML;
		$(self).parents("ul").siblings("button").html(fontName);

		//set counter to index of element
		counter = $(self).parent().index();
		console.log("COUNTERRR: "+counter)
	}
})

Template.fontClassificationList.events({
	"click .font-class-type": function(event){
		event.preventDefault();
		var listName = event.target.innerHTML
		$("#font-type-btn").html(listName);

		var listToDisplay = "#" + listName.toLowerCase() + "-list";

		// show sub fonts of this style
		$(".font-lists").hide();
		$(listToDisplay).show();

		//set global variables to hold the newly displayed list
		fontListLength = $(listToDisplay + " li").length;
		fontListId = listToDisplay;

		console.log("FONT LENGTH: " + fontListLength);
		console.log("FONT LIST ID: " + fontListId)

		//reset counter to zero
		counter = 0;

	}
})

Template.fontSize.events({
	"click .font-size": function(event){
		event.preventDefault();
		var fontSize = parseInt(event.target.innerHTML);
		console.log(fontSize);
		$("#text").css('font-size',fontSize);
		$(event.target).parents("ul").siblings("button").html(fontSize + " px");
	}
})

Template.fontClassificationList.helpers({
	"fontTypes": ["all","serif", "sans-serif", "display", "script"]
})

Template.serifList.helpers({
	"serifs": function(){
		return serifFonts
	},

	"firstFont" : function(){
		return serifFonts[0]
	}
})

Template.sansSerifList.helpers({
	"sansSerifs": function(){
		return sansSerifFonts
	},

	"firstFont": function(){
		return sansSerifFonts[0]
	}
})

Template.fontSize.helpers({
	"sizes" : function(){
		return fontSizes
	}
})

