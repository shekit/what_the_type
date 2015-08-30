var fonts = ['font-20db', 'font-open-sans']
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
		}

		// DOWN KEY
		if(event.keyCode == 40){
			var currentFontSize = parseInt($("#text").css('font-size'));
			console.log(currentFontSize);
			if(currentFontSize >= 10){
				currentFontSize-=2;
				$("#text").css('font-size',currentFontSize);
			}
		}

		// RIGHT KEY
		if(event.keyCode == 39){

			if(counter == fontListLength-1){
				counter = 0
			} else {
				counter++
			}

			console.log($(fontListId + ' li').eq(counter)[0]['innerHTML']);
			console.log("RIGHT KEY COUNTER: "+ counter);



			// rightKeyPressed = true;
			// console.log("next");
			// var selectList = $(".font-lists").not(":hidden")[0];
			// var ulListId = $(selectList).find("ul")[0]['id']
			// console.log(ulListId)
			// var ulLength = $('#'+ ulListId + ' li').length;
			// if(leftKeyPressed && counter==ulLength-1){
			// 	counter=1;
			// } else if(leftKeyPressed && counter == ulLength){
			// 	counter = 0
			// } else if(leftKeyPressed && counter != ulLength-1){
			// 	counter+=2
			// }
			// console.log("COUNTER: "+counter);
			// console.log($('#'+ ulListId + ' li').eq(counter)[0]['innerHTML']);
			// counter++;
			// if(counter>ulLength-1){
			// 	counter = 0;
			// }
			// console.log("COUNTER AGAIN: "+counter);
			// leftKeyPressed = false;
		}

		// LEFT KEY
		if(event.keyCode == 37){

			if(counter == 0){
				counter = fontListLength - 1
			} else {
				counter--
			}

			console.log($(fontListId + ' li').eq(counter)[0]['innerHTML']);
			console.log("LEFT KEY COUNTER: "+ counter);


			// leftKeyPressed = true;
			// console.log("prev")
			// var selectList = $(".font-lists").not(":hidden")[0];
			// var ulListId = $(selectList).find("ul")[0]['id']
			// console.log(ulListId)
			// var ulLength = $('#'+ ulListId + ' li').length;
			// if(rightKeyPressed && counter==0){
			// 	counter = ulLength - 2;
			// } else if(rightKeyPressed && counter!=0){
			// 	counter-=2;
			// }
			// console.log("COUNTER: "+counter);
			// console.log($('#'+ ulListId + ' li').eq(counter)[0]['innerHTML']);
			// counter--;
			// if(counter<0){
			// 	counter = ulLength-1;
			// }
			// console.log("COUNTER AGAIN: "+counter);
			// rightKeyPressed = false;
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

Template.fontClassificationList.helpers({
	"fontTypes": ["all","serif", "sans-serif", "display", "script"]
})

Template.serifList.helpers({
	"serifs": ['font-20db','font-lala', 'font-chambu', 'font-like']
})

Template.sansSerifList.helpers({
	"sansSerifs": ['font-open-sans', 'font-no-sans', 'font-nonsense']
})

