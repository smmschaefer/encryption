FILES INCLUDED
power point slides
hide.js
extract.js
proMMVvid (video) showing test consoles displaying results.  The video is captured with QUICKTIME


hide.js takes a String message and breaks it down to the ACSII values.  From here it breaks the ASCII value into binary and stores the result into an array.  After fetching all IDs on the webpage it determines how many letters you can store.  It then attempts to store the letters by injecting classes into each ID that can host a 1 or 0.


extract.js fetches the hidden message through a similar process, but this time turning binary into ASCII.


To view this in action, the website has been uploaded to...

www.littleroomproductions.com/projectMM/

Access it using GOOGLE CHROME and open dev tools.  Display the console to view hidden and extract message.  To view the injection, click on the tab 'Elements' and open arrow 'body', 'nav', 'wrapper', 'secFlip', 'divHome'.   Please reload the page before doing this!  Once all elements are open, press HIDE button to view the injection into the html/css elements.  

About the website.

The HIDE button runs hide.js and the GRAB button runs extract.js.  Within the dev tools you can open hide.js and extract.js to uncomment certain console.log tests to view whats happening in the code.  Without doing this you will only see the console success logs. 
