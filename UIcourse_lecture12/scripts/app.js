function O(){
	return this;
}

O.prototype = {
	total:0,
	add:function(){
		var sum = 0;
		for (var i=0, a=arguments.length; i<a; i++){
			sum += arguments[i];
		};
		this.total += sum;
		return this;
	},
	sub:function(){
		var sum = 0;
		for (var i=0, a=arguments.length; i<a; i++){
			sum += arguments[i];
		};
		this.total -= sum;
		return this;
	},
	result:function(){
		return this.total;
	}
};

var o = new O();