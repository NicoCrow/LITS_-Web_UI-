
		//		Menu		//

var elements = document.getElementsByClassName("reveal");
for (var i = 0; i < elements.length; i++) {
	var elt = elements[i];
	var title = elt.getElementsByClassName("handle")[0];
	addRevealHandler(title, elt);
};

window.onresize = function(){
	var nav = document.getElementById('nav');
	nav.style.height = "57px";
	nav.style.backgroundColor = "#3c2b21";
	elt.className = "reveal";
}

		//		Language		//

var lang = document.getElementById('lang');
lang.addEventListener('change', changeLang, false);

var lang_footer = document.getElementById('lang_footer');
lang_footer.addEventListener('change', changeLang, false);

function addRevealHandler(title, elt){
	title.onclick = function(){
		var nav = document.getElementById('nav');
		if (elt.className == "reveal"){
			elt.className = "revealed";
			nav.style.height = "564px";
			nav.style.backgroundColor = "#442f24";
		} else if (elt.className == "revealed"){
			elt.className = "reveal";
			nav.style.height = "57px";
			nav.style.backgroundColor = "#442f24";
		}
	}
}

function changeLang(){
	window.location = this.value;
}


//live reload 3s

// window.setTimeout(function() {
// 	document.location.reload(true);
// }, 8000);