var fontTypes = ["all","serif", "sans-serif", "display", "script"]

var serifFonts = ['font-20db','font-bebas', 'font-chunkfive', 'font-ostrich-regular']
var sansSerifFonts = ['font-open-sans', 'font-no-sans', 'font-nonsense']

var fontSizes = [12,14,16,18,24,32,44,48,64,72];

var serifFontDicts = [{
							"name":"20db",
							"class":"font-20db",
							"styles":["regular"]
						},
						{
							"name":"bebas",
							"class":"font-bebas",
							"styles":["regular"]
						},
						{
							"name":"chunkfive",
							"class":"font-chunkfive",
							"styles":["regular"]
						},
						{
							"name":"ostrich",
							"class":"font-ostrich",
							"styles":["regular","black","bold","dashed","light","rounded"]
						}]

var counter = 0;
var fontListId = '';
var fontListLength = 0;
var fontClassGlobal = '';

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
	Session.set('counter',counter)
	//get current list element
	var listElement = $(fontListId + ' li').eq(counter)[0];
	// find data attr of a tag in li to set font class and btn name
	var aElement = $(listElement).find("a")
	var fontClass = aElement.attr("data-font-class")
	var fontName = aElement.html()
	// set text of btn
	$(fontListId+"-btn").html(fontName);
	// set font class
	setFont(fontClass);
}

function setFont(fontClass){
	console.log(fontClass)
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

Template.registerHelper('capitalize', function(str){
	return str.replace(/\w\S*/g, function(txt){
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	})
})

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
		setFontSizeOnKeyPress(true);
	},

	"click .decrease-font-size": function(event){
		event.preventDefault();
		setFontSizeOnKeyPress(false);
	},

	"click .font-type": function(event){
		event.preventDefault();
		var self = event.target
		var fontName = self.innerHTML;
		$(self).parents("ul").siblings("button").html(fontName);

		//set counter to index of element
		counter = $(self).parent().index();
		Session.set('counter',counter);
		console.log("COUNTER VAL: "+counter)
		var fontClass = $(self).attr("data-font-class")
		fontClassGlobal = fontClass;

		$("#font-style-btn").html("Regular")

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

		$("#font-style-btn").html("Regular")

	}
})

Template.fontStyleList.events({
	"click .font-style": function(event){
		event.preventDefault();
		var self = $(event.target);
		var style = self.attr('data-font-style');
		var styleName = self.html()
		var fontClass = fontClassGlobal
		if(style != 'regular'){
			fontClass += "-" + style
		}
		$("#font-style-btn").html(styleName)
		setFont(fontClass)
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
	"fontTypes": function(){
		return fontTypes
	},

	"firstType":function(){
		return fontTypes[0]
	}
})

Template.serifList.helpers({
	"serifs": function(){
		return serifFontDicts
	},

	"firstFont" : function(){
		return serifFontDicts[0]["name"]
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

Template.fontStyleList.helpers({
	"fontStyles": function(){
		console.log("COUNTER IN HELPER: "+counter)
		var c = Session.get('counter') || counter
		return serifFontDicts[c]["styles"]
	},

	"firstStyle": function(){
		var c = Session.get('counter') || counter
		return serifFontDicts[c]["styles"][0]
	}
})

Template.fontSize.helpers({
	"sizes" : function(){
		return fontSizes
	}
})

