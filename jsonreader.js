//reading params
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
	if (properties.customtext) {
			var up = properties.customtext.value;
			var url = new URL(up);
			var videoID = url.searchParams.get("v");
			var listID = url.searchParams.get("list");
			localStorage.setItem('linkID', videoID);
			localStorage.setItem('listID', listID);
        }
	if (properties.custombool) {
            var pop = properties.custombool.value;
            localStorage.setItem('muteV', pop);
        }
	if (properties.custombool2) {
            var pop = properties.custombool2.value;
            localStorage.setItem('useControls', pop);
        }
	if (properties.customint) {
            var vol = properties.customint.value;
            player.setVolume(vol);
			localStorage.setItem('volume', vol);
        }
	if (properties.customcombo) {
            var qt = properties.customcombo.value;
			var res = "";
			if (qt == 1){res = "hd1080";}
			else if (qt == 2){res = "default";}
			else if (qt == 3){res = "highres";}
			else if (qt == 4){res = "medium";}
			else if (qt == 5){res = "small";}
			localStorage.setItem('res', res);
            
        }	
		
	  }
 };
 
 //async settings load 0.5s refreshrate
	var previousL = null,
		currentL = null,
		previousM = null,
		currentM = null,
		previousQ = null,
		currentQ = null,
		previousC = null,
		currentC = null;
    setInterval(function() {
		currentL = localStorage.getItem("linkID");    
		currentM = localStorage.getItem("muteV"); 
		currentQ = localStorage.getItem("res");
		currentC = localStorage.getItem("useControls");
            if (previousL && currentL && (previousL !== currentL)) {
                console.log('refresh');
                location.reload();
            }
			if (previousM && currentM && ( previousM !== currentM )) {
					if (currentM == "true") {player.mute();}
					if (currentM == "false") {player.unMute();}
				}
			if (previousC && currentC && ( previousC !== currentC )) {
					console.log('refresh');
					location.reload();
				}
			if (previousQ && currentQ && previousQ !== currentQ) {
					console.log('refresh');
					location.reload();
				}
            previousL = currentL;        
			previousM = currentM;  
			previousQ = currentQ; 
			previousC = currentC; 
    }, 500);
	
