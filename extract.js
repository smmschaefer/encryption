//////////////////////////////////////////
//	NAME: SAM SCHAEFER
//	FILE: This file extracts the message from hidden from hide.js
//  grab all of the style & styleOne classes.  
//	if style place 0 into an array, if styleOne place 1.
//	user join ("") to remove ','s from the array. Then use String.fromCharCode parseIntto conver a binary number to 
//	ASCII char.  Join the arrays together and print the hidden msg to console.
//////////////////////////////////////////

$(function() {
	
	
	// on button click - hide msg
	$('#btnTest').on('click', function() {	
		
		//grab the hidden message by grabbing all .style and .styleOne classes
		var allElements = document.querySelectorAll('.style, .styleOne');
		var allIds = [];
		for (var i = 0, n = allElements.length; i < n; ++i) {
		  var el = allElements[i];
		  if (el.id) { 
			  allIds.push(el.id);
			  //console.log(el.id);
		   }
		}
		
		//reconstruct the msg
		var together;
		var len = allIds.length;
		var zero = "0";
		var one = "1";
		var grabClass; 
		var putMsg = [];
		var count = 0;
		var joinMsg;
		var theMsg = [];
		var cMsg = 0;
		
		//console.log("style COUNTs: " + allIds.length);
		//loop through the list of classes and extract 1's, 0's into an array
		//convert this array into a string, then into the char ASCII value
		//store this result and print the message at the end
		
		//test: shows all classes with 0 or 1 embeded
		//console.log(allIds);
		
		for(var i = 0; i < len+1; i++)
		{	
			if(count === 8)
			{
				//console.log(putMsg);
				joinMsg = putMsg.join("");
				var convert = String.fromCharCode(parseInt(joinMsg,2));
				//console.log(joinMsg);
				//console.log("converting: " + convert);
				theMsg[cMsg] = convert;
				cMsg++;
				count = 0;
				putMsg = [];
			}
			
			grabClass = $("#"+allIds[i]).attr("class");
			
			if(grabClass === "style")
			{
				putMsg[i] = zero;	
			} 
			if(grabClass === "styleOne")
			{
				putMsg[i] = one;
			}
			count++;
		}
		
		//remove commas from the result array
		theMsg = theMsg.join("");
		//print msg to console
		console.log("extracted msg: " + theMsg);
			
	});

});