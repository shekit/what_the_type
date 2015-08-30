var fonts = ['font-20db', 'font-open-sans']

var serifFonts = ['font-20db','font-bebas', 'font-chunkfive', 'font-ostrich-regular']
var sansSerifFonts = ['font-open-sans', 'font-no-sans', 'font-nonsense']

var fontSizes = [12,14,16,18,24,32,44,48,64,72];

var counter = 0;
var leftKeyPressed = false;
var rightKeyPressed = false;

var fontListId = '';
var fontListLength = 0

function nextFont(){
	if(counter == fontListLength-1){
		counter = 0
	} else {
		counter++
	}

	setFontOnKeyPress();
}

function prevFont(){
	if(counter == 0){
		counter = fontListLength - 1
	} else {
		counter--
	}

	setFontOnKeyPress();
}

function setFontOnKeyPress(){

	//get current list element
	var listElement = $(fontListId + ' li').eq(counter)[0];
	// find data attr of a tag in li to set font class
	var fontClass = $(listElement).find("a").attr("data-font-class")
	// set text of btn
	$(fontListId+"-btn").html(fontClass);
	// set font class
	setFont(fontClass);
}

function setFont(fontClass){
	$("#text").removeClass();
	$("#text").addClass(fontClass);
}

function setFontSizeOnKeyPress(increase){
	var currentFontSize = parseInt($("#text").css('font-size'));
	console.log(currentFontSize);

	if(increase){
		if(currentFontSize <= 100){
			currentFontSize+=2;
		}
	} else {
		if(currentFontSize >= 10){
			currentFontSize-=2;
		}
	}
	
	$("#text").css('font-size',currentFontSize);
	//set btn text to current font size
	$("#font-size-list-btn").html(currentFontSize + " px");
}

Template.body.events({
	"keydown": function(event){

		//UP KEY
		if(event.keyCode == 38){
			setFontSizeOnKeyPress(true);
		}

		// DOWN KEY
		if(event.keyCode == 40){
			setFontSizeOnKeyPress(false);
		}

		// RIGHT KEY
		if(event.keyCode == 39){
			nextFont()	
		}

		// LEFT KEY
		if(event.keyCode == 37){
			prevFont()
		}
	}
})

Template.font.onRendered(function(){
	//set cursor to end of textarea
	var fontField = $("#text");
	var field = fontField.get(0);
	var fieldLength = field.value.length;
	field.selectionStart = fieldLength;
	field.selectionEnd = fieldLength;
	field.focus();
})

Template.font.events({

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

		var fontClass = $(self).attr("data-font-class")
		setFont(fontClass);
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

