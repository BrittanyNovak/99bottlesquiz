function getLyrics(){
	var output = document.getElementById("printOut");
	
  for(var i = 99; i >= 1; i-- ) {
    var lyrics = i + " Bottles of Beer on the wall, " + i + "Bottles of Beer";
    wordsPlace.innerHTML = wordsPlace.innerHTML + lyrics + '<br />';
    wordsPlace.innerHTML = wordsPlace.innerHTML + ' You take one down, you pass it around...<br />';
    var tmp = i - 1;
    wordsPlace.innerHTML = wordsPlace.innerHTML + tmp + ' Bottles of beer on the wall. <br /><br />'; 
  }