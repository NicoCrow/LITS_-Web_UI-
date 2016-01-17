function traverse(el){
	var re = /(\#+\w+)|(\.+\w+)|(\s+\w+)|(\b\w+)/g;
	var a = el.match(re);
	
	var par = document;
	var arg = [];

	for (var i = 0; i < a.length; i++){
		if (i === 0){
			arg = selectors(par, a[i]);
		} else if (i<a.length && i!==0){
			arg = childs(arg, a[i]);
		};
	};

	console.log(arg);
	return arg;
}

function childs(way, a){
	var arr = [];
	for (var i = 0; i < way.length; i++) {
		var wi = selectors(way[i], a)
		if (wi.length !== 0){
			for (var j = 0; j < wi.length; j++) {
				arr.push(wi[j]);
			};
		};
	};
	return arr;
}

function selectors(parent, tag){
	var way = [];
	switch(tag.charAt(0)){
		case '#':
			var b =  parent.getElementById(tag.slice(1));
			way.push(b);
			break;

		case '.':
			var b = parent.getElementsByClassName(tag.slice(1));
			for (var i = 0; i < b.length; i++) {
				way.push(b[i]);
			};
			break;

		case ' ':
			var b = parent.getElementsByTagName(tag.slice(1));
			for (var i = 0; i < b.length; i++) {
				way.push(b[i]);
			};
			break;

		default:
			var b = parent.getElementsByTagName(tag);
			for (var i = 0; i < b.length; i++) {
				way.push(b[i]);
			};
	};
	return way;
}
