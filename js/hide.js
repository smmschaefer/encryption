/////////////////////////////////////////
//     NAME: SAM function SCHAEFER
//     FILE: This file hides a message into the CSS of IDs by injecting a class 
//     VIEW: Use google chrome and open dev tools and view the console log after clicking the 'hide' button to view results
////////////////////////////////////////

$(function() {

	// on button click - hide msg
	$('#btnHide').on('click', function() {
		
		
		//grab all IDS ON WEBPAGE
		var n;
		var allElements = document.getElementsByTagName("*");
		var allIds = [];
		for (var i = 0, n = allElements.length; i < n; ++i) {
		  var el = allElements[i];
		  if (el.id) { 
			  allIds.push(el.id);
			  //console.log(el.id);  //lists all tags found in console (how many bits you can hide)
		   }
		}
		
		//test to see ids grabbed
		//console.log(allIds);
		
		//container
		var hiddenMsgData = [];
		//CHANGE hideMsg to hide a different WORD!  Can only hide 1 letter per 8 IDs.
		var hideMsg = "wow";
		//turn messaged into binary
		for(var a = 0; a < hideMsg.length; a++)
		{
			hiddenMsgData[a] = "0" + hideMsg.charCodeAt(a).toString(2);
		}
		
		var space = allIds.length;
		var count = 0;
		var styleCount = 0;
		
		//first check to make sure the message you wish to hide has enough room (1 letter per 8 Ids)
		if(space < hiddenMsgData.length * 8)
		{
			console.log("Not enough space to embed, can't hide message");
		}
		else {
			
			for(var i = 0; i < hiddenMsgData.length; i++)
			{
				//console.log("MSG LENGTH: " + hiddenMsgData[i]);
				for(var j = 0; j < 8; j++)
				{
					if(hiddenMsgData[i].charAt(j) === "0")
					{
						$("#"+allIds[count]).addClass("style");
						styleCount++;
						//console.log("adding style: " + "#"+allIds[j]);
					}else{
						$("#"+allIds[count]).addClass("styleOne");
						styleCount++;
						//console.log("adding styleOne: " + "#"+allIds[j]);
					}
					//console.log(allIds[count]);
					count++;
				}
			}	
			console.log("Success! Msg " + "'" + hideMsg + "'" + " had been hidden!");		
		}	
	});	
});