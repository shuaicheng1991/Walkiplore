(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"task2_part1_atlas_", frames: [[1127,1337,566,849],[1127,0,751,1335],[0,0,1125,2001]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["task2_part1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blurbg_invitation = function() {
	this.spriteSheet = ss["task2_part1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Lockscreen3x = function() {
	this.spriteSheet = ss["task2_part1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUCAIjNjXQgNgOAIgSQAIgSATAAIGXAAQAUAAAIASQAHATgNANIjMDXQgJAKgNAAQgMAAgIgKg");
	this.shape.setTransform(0,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDD7B").s().p("AlIFIQiIiHAAjBQAAi/CIiJQCIiIDAAAQDAAACICIQCICJAAC/QAADBiICHQiICIjAAAQjAAAiIiIg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlwFxQiaiZABjYQgBjYCaiYQCYiZDYAAQDYAACaCZQCYCYABDYQgBDYiYCZQiaCZjYABQjYgBiYiZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.2,-52.2,104.5,104.5);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUCAIjNjXQgNgOAIgSQAIgSATAAIGXAAQAUAAAIASQAHATgNANIjMDXQgJAKgNAAQgMAAgIgKg");
	this.shape.setTransform(0,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDD7B").s().p("AlIFIQiIiHAAjBQAAi/CIiJQCIiIDAAAQDAAACICIQCICJAAC/QAADBiICHQiICIjAAAQjAAAiIiIg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlwFxQiaiZABjYQgBjYCaiYQCYiZDYAAQDYAACaCZQCYCYABDYQgBDYiYCZQiaCZjYABQjYgBiYiZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.2,-52.2,104.5,104.5);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404041").s().p("EgILA90MAAAh7nIQWAAMAAAB7ng");
	this.shape.setTransform(0,0,0.952,0.952);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.8,-376.5,99.7,753);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBQQgFgBgEgDQgEgDgCgEQgDgFAAgHIABgDIABgEIAPAAQAAAIAEADQACADAGAAIAEAAIAEgDQACgCABgEIABgJIAAgTQgDAEgFADQgEADgGAAIgFgBIgFgCQgEgBgDgDQgCgDgDgEIgDgNQgCgHABgJIAAggQgBgKACgHIADgLQADgFACgDIAHgDIAFgCIAFgBQAFAAACACIAGADIAEAEIADAFIACgMIARAAIAABzQAAAKgCAIQgBAIgFAGQgEAGgGADQgHADgIAAIgLgBgAgEg/IgDAEIgCAGIgBALIAAAoIABAKQAAAFACACIADAEIAEAAIAEAAIADgCIADgDIACgDIAAhCIgFgGQgDgCgEAAg");
	this.shape.setTransform(32.1,63.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHA9QgEAAgDgCQgEgCgDgEQgEgDgCgHQgDgFgBgJIgBgVIAAgSQAAgLABgIQABgJADgGQACgGAEgDIAHgFIAIgCIAGgBIAIABQAEAAADACQAEABADAEQAEADACAGQADAFABAKIABATIAAASQAAAMgBAJQgCAJgCAFIgGAKIgHAGIgHACIgIABgAgEgrQgCABgCAEIgCAJIAAAPIAAAdIAAAOIACAJQACADACACQACABACAAQADAAACgBQACgCACgDIACgJIAAgOIAAgdIAAgPQgBgFgBgEQgCgEgCgBQgCgCgDAAQgCAAgCACg");
	this.shape_1.setTransform(23.7,61.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBQIAAifIAVAAIAACfg");
	this.shape_2.setTransform(17.3,59.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBOIAAgOQAFABAEgBQAFgBADgDQADgCABgFQACgFAAgGIgch5IAWAAIANBDIADAWIABAAIACgWIAKhDIAWAAIgZB8IgEAQIgHALQgDAEgFACQgFACgHAAQgGAAgGgCg");
	this.shape_3.setTransform(7.2,63.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBQQgFgBgEgDQgEgDgCgEQgDgFAAgHIABgDIABgEIAPAAQAAAIAEADQACADAGAAIAEAAIAEgDQACgCABgEIABgJIAAgTQgDAEgFADQgEADgGAAIgFgBIgFgCQgDgBgEgDQgCgDgCgEIgEgNQgBgHgBgJIAAggQABgKABgHIAEgLQACgFACgDIAHgDIAFgCIAFgBQAFAAACACIAGADIAEAEIADAFIACgMIARAAIAABzQAAAKgCAIQgBAIgEAGQgFAGgGADQgHADgIAAIgLgBgAgEg/IgDAEIgCAGIgBALIAAAoIABAKQAAAFACACIADAEIAEAAIAEAAIADgCIADgDIACgDIAAhCIgFgGQgDgCgEAAg");
	this.shape_4.setTransform(-1.1,63.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaA9IAAh4IAPAAIADANQAEgHAEgEQAEgDAFAAQAJAAAFAGQAEAGABALIAAAEIgBAEIgBAFIgCAEIgPAAIAAgLIAAgHIgBgDIgDgCIgCgBQgCAAgBACIgFAFIAABig");
	this.shape_5.setTransform(-8.3,61.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA7QgGgDgFgGQgDgHgCgJQgDgKAAgNIAAgWQAAgMACgHQACgJACgGQADgFAEgEQADgDAFgBIAHgCIAGgBQAGAAAFACQAGACAFAEQAEAEACAIQADAHAAALIAAAIIgBAHIgBAHIgBAFIgnAAIAAAMIAAAOIACAJQABADAEABIAEABIAFAAIADgDIACgFIABgIIAAgEIASAAIAAAFQAAARgHAIQgJAIgPAAQgHAAgGgDgAgDgsQgCACgCADIgBAJIgBANIAAAHIAVAAIAAgCIAAgEIAAgDIAAgDQAAgMgDgFQgCgFgGgBIgEABg");
	this.shape_6.setTransform(-16.2,61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALA9IAAhbQAAgIgCgDQgDgDgFAAQgCAAgDACQgEACgCAEIAABhIgWAAIAAh4IARAAIACANIAGgHIAGgEIAFgCIAHgBQALAAAGAHQAFAIAAAPIAABbg");
	this.shape_7.setTransform(-24.8,61.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbBLIAAiVIA2AAIAAASIggAAIAAAtIAZAAIAAARIgZAAIAAAzIAhAAIAAASg");
	this.shape_8.setTransform(-32.4,60.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1F1F2").s().p("AkGAaIBEgzIGvAAQAKAAAJAHQAHAIAAAKQAAALgHAHQgJAIgKAAg");
	this.shape_9.setTransform(3.2,7.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAaQgLAAgIgIQgIgHABgLQgBgKAIgIQAIgHALAAIBQAAIhDAzg");
	this.shape_10.setTransform(-21.7,7.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1F1F2").s().p("Ai3AaIBDgzIESAAQAKAAAJAHQAHAIAAAKQAAALgHAHQgJAIgKAAg");
	this.shape_11.setTransform(11.1,-5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhpAaQgLAAgIgIQgIgHABgLQgBgKAIgIQAIgHALAAIDtAAIhDAzg");
	this.shape_12.setTransform(-13.8,-5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1F1F2").s().p("AhoAaIBEgzIBzAAQAKAAAJAHQAHAIAAAKQAAAKgHAIQgJAIgKAAg");
	this.shape_13.setTransform(19,-17.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ai4AaQgLAAgIgIQgIgIABgKQgBgKAIgIQAIgHALAAIGMAAIhEAzg");
	this.shape_14.setTransform(-5.9,-17.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AE4C45").s().p("AkME8Qg1gegpgrIBXhEIHzAAQALABAIgIQAHgIAAgKQAAgLgHgIQgIgIgLABImvAAIBahGIFVAAQALAAAIgIQAHgHAAgLQAAgLgHgIQgIgHgLAAIkRAAIBZhFIC4AAQALABAIgIQAHgIAAgKQAAgLgHgIQgIgIgLABIh0AAID/jFIAAHbQg8BihjA6g");
	this.shape_15.setTransform(4.5,-7.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAFA4Ihwg+IBwi5IgFCEIBsA1IhnDGg");
	this.shape_16.setTransform(-14.9,-44.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjFADIA7igIFAElIAQAWg");
	this.shape_17.setTransform(19.7,-58.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DC5B4E").s().p("AmLFxIAArIQAAgtAgggQAfgfAtAAIFNAAIg5CgIGXChIAAAYIj/DEImMAAQgLAAgIAIQgIAHABALQgBAKAIAIQAIAIALAAIFIAAIhaBGIjuAAQgLgBgIAIQgIAIABALQgBAKAIAIQAIAIALgBICrAAIhaBGIhRAAQgLAAgIAHQgIAIABALQgBALAIAHQAIAIALAAIANAAIhYBDQglglgcgugAkMihIBxA/IAACHIBmjGIhsg1IAGiDg");
	this.shape_18.setTransform(1.2,-28.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9DD88").s().p("AghAAQAAiDBDhvIAAHlQhDhvAAiEg");
	this.shape_19.setTransform(-41.8,-16.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F9DD88").s().p("AghjyQBDBvAACDQAACEhDBvg");
	this.shape_20.setTransform(44.2,-16.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F9DD88").s().p("Ag4gzQBAApAxA/g");
	this.shape_21.setTransform(32.2,-49.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AABAIIgPgUIAdAag");
	this.shape_22.setTransform(39.4,-43.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9DD88").s().p("AlHFIQiJiIAAjAQAAjACJiIQCHiIDAAAQDAAACJCIQCICIAADAQAADAiICIQiJCIjAAAQjAAAiHiIg");
	this.shape_23.setTransform(1.2,-16.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AlwFyQiZiagBjYQABjYCZiYQCZiaDXABQDZgBCYCaQCZCYAADYQAADYiZCaQiYCYjZABQjXgBiZiYg");
	this.shape_24.setTransform(1.2,-16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-74,116,148.1);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBQQgFgBgEgDQgEgDgCgEQgDgFAAgHIABgDIABgEIAPAAQAAAIAEADQACADAGAAIAEAAIAEgDQACgCABgEIABgJIAAgTQgDAEgFADQgEADgGAAIgFgBIgFgCQgEgBgDgDQgCgDgDgEIgDgNQgCgHABgJIAAggQgBgKACgHIADgLQADgFACgDIAHgDIAFgCIAFgBQAFAAACACIAGADIAEAEIADAFIACgMIARAAIAABzQAAAKgCAIQgBAIgFAGQgEAGgGADQgHADgIAAIgLgBgAgEg/IgDAEIgCAGIgBALIAAAoIABAKQAAAFACACIADAEIAEAAIAEAAIADgCIADgDIACgDIAAhCIgFgGQgDgCgEAAg");
	this.shape.setTransform(32.1,63.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHA9QgEAAgDgCQgEgCgDgEQgEgDgCgHQgDgFgBgJIgBgVIAAgSQAAgLABgIQABgJADgGQACgGAEgDIAHgFIAIgCIAGgBIAIABQAEAAADACQAEABADAEQAEADACAGQADAFABAKIABATIAAASQAAAMgBAJQgCAJgCAFIgGAKIgHAGIgHACIgIABgAgEgrQgCABgCAEIgCAJIAAAPIAAAdIAAAOIACAJQACADACACQACABACAAQADAAACgBQACgCACgDIACgJIAAgOIAAgdIAAgPQgBgFgBgEQgCgEgCgBQgCgCgDAAQgCAAgCACg");
	this.shape_1.setTransform(23.7,61.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBQIAAifIAVAAIAACfg");
	this.shape_2.setTransform(17.3,59.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBOIAAgOQAFABAEgBQAFgBADgDQADgCABgFQACgFAAgGIgch5IAWAAIANBDIADAWIABAAIACgWIAKhDIAWAAIgZB8IgEAQIgHALQgDAEgFACQgFACgHAAQgGAAgGgCg");
	this.shape_3.setTransform(7.2,63.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBQQgFgBgEgDQgEgDgCgEQgDgFAAgHIABgDIABgEIAPAAQAAAIAEADQACADAGAAIAEAAIAEgDQACgCABgEIABgJIAAgTQgDAEgFADQgEADgGAAIgFgBIgFgCQgDgBgEgDQgCgDgCgEIgEgNQgBgHgBgJIAAggQABgKABgHIAEgLQACgFACgDIAHgDIAFgCIAFgBQAFAAACACIAGADIAEAEIADAFIACgMIARAAIAABzQAAAKgCAIQgBAIgEAGQgFAGgGADQgHADgIAAIgLgBgAgEg/IgDAEIgCAGIgBALIAAAoIABAKQAAAFACACIADAEIAEAAIAEAAIADgCIADgDIACgDIAAhCIgFgGQgDgCgEAAg");
	this.shape_4.setTransform(-1.1,63.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaA9IAAh4IAPAAIADANQAEgHAEgEQAEgDAFAAQAJAAAFAGQAEAGABALIAAAEIgBAEIgBAFIgCAEIgPAAIAAgLIAAgHIgBgDIgDgCIgCgBQgCAAgBACIgFAFIAABig");
	this.shape_5.setTransform(-8.3,61.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA7QgGgDgFgGQgDgHgCgJQgDgKAAgNIAAgWQAAgMACgHQACgJACgGQADgFAEgEQADgDAFgBIAHgCIAGgBQAGAAAFACQAGACAFAEQAEAEACAIQADAHAAALIAAAIIgBAHIgBAHIgBAFIgnAAIAAAMIAAAOIACAJQABADAEABIAEABIAFAAIADgDIACgFIABgIIAAgEIASAAIAAAFQAAARgHAIQgJAIgPAAQgHAAgGgDgAgDgsQgCACgCADIgBAJIgBANIAAAHIAVAAIAAgCIAAgEIAAgDIAAgDQAAgMgDgFQgCgFgGgBIgEABg");
	this.shape_6.setTransform(-16.2,61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALA9IAAhbQAAgIgCgDQgDgDgFAAQgCAAgDACQgEACgCAEIAABhIgWAAIAAh4IARAAIACANIAGgHIAGgEIAFgCIAHgBQALAAAGAHQAFAIAAAPIAABbg");
	this.shape_7.setTransform(-24.8,61.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbBLIAAiVIA2AAIAAASIggAAIAAAtIAZAAIAAARIgZAAIAAAzIAhAAIAAASg");
	this.shape_8.setTransform(-32.4,60.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1F1F2").s().p("AkGAaIBEgzIGvAAQAKAAAJAHQAHAIAAAKQAAALgHAHQgJAIgKAAg");
	this.shape_9.setTransform(3.2,7.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAaQgLAAgIgIQgIgHABgLQgBgKAIgIQAIgHALAAIBQAAIhDAzg");
	this.shape_10.setTransform(-21.7,7.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1F1F2").s().p("Ai3AaIBDgzIESAAQAKAAAJAHQAHAIAAAKQAAALgHAHQgJAIgKAAg");
	this.shape_11.setTransform(11.1,-5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhpAaQgLAAgIgIQgIgHABgLQgBgKAIgIQAIgHALAAIDtAAIhDAzg");
	this.shape_12.setTransform(-13.8,-5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1F1F2").s().p("AhoAaIBEgzIBzAAQAKAAAJAHQAHAIAAAKQAAAKgHAIQgJAIgKAAg");
	this.shape_13.setTransform(19,-17.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ai4AaQgLAAgIgIQgIgIABgKQgBgKAIgIQAIgHALAAIGMAAIhEAzg");
	this.shape_14.setTransform(-5.9,-17.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AE4C45").s().p("AkME8Qg1gegpgrIBXhEIHzAAQALABAIgIQAHgIAAgKQAAgLgHgIQgIgIgLABImvAAIBahGIFVAAQALAAAIgIQAHgHAAgLQAAgLgHgIQgIgHgLAAIkRAAIBZhFIC4AAQALABAIgIQAHgIAAgKQAAgLgHgIQgIgIgLABIh0AAID/jFIAAHbQg8BihjA6g");
	this.shape_15.setTransform(4.5,-7.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAFA4Ihwg+IBwi5IgFCEIBsA1IhnDGg");
	this.shape_16.setTransform(-14.9,-44.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjFADIA7igIFAElIAQAWg");
	this.shape_17.setTransform(19.7,-58.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DC5B4E").s().p("AmLFxIAArIQAAgtAgggQAfgfAtAAIFNAAIg5CgIGXChIAAAYIj/DEImMAAQgLAAgIAIQgIAHABALQgBAKAIAIQAIAIALAAIFIAAIhaBGIjuAAQgLgBgIAIQgIAIABALQgBAKAIAIQAIAIALgBICrAAIhaBGIhRAAQgLAAgIAHQgIAIABALQgBALAIAHQAIAIALAAIANAAIhYBDQglglgcgugAkMihIBxA/IAACHIBmjGIhsg1IAGiDg");
	this.shape_18.setTransform(1.2,-28.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9DD88").s().p("AghAAQAAiDBDhvIAAHlQhDhvAAiEg");
	this.shape_19.setTransform(-41.8,-16.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F9DD88").s().p("AghjyQBDBvAACDQAACEhDBvg");
	this.shape_20.setTransform(44.2,-16.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F9DD88").s().p("Ag4gzQBAApAxA/g");
	this.shape_21.setTransform(32.2,-49.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AABAIIgPgUIAdAag");
	this.shape_22.setTransform(39.4,-43.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9DD88").s().p("AlHFIQiJiIAAjAQAAjACJiIQCHiIDAAAQDAAACJCIQCICIAADAQAADAiICIQiJCIjAAAQjAAAiHiIg");
	this.shape_23.setTransform(1.2,-16.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AlwFyQiZiagBjYQABjYCZiYQCZiaDXABQDZgBCYCaQCZCYAADYQAADYiZCaQiYCYjZABQjXgBiZiYg");
	this.shape_24.setTransform(1.2,-16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-74,116,148.1);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA9QgGgCgEgDQgDgDgDgFQgCgFAAgIIABgIIABgFIAQAAIAAALIADAHQABACADABIAFABQAFABACgDQACgDAAgEIAAgDIgCgEIgCgDIgDgFIgQgTIgGgHIgFgIIgDgKQgCgEAAgGQAAgHADgFQACgEAEgEQAEgDAGgDQAFgBAFAAQAGAAAGABQAFACAEADQAEAEACAFQACAEAAAGIgBAIIgCAHIgPAAIAAgKQgBgFgBgCQgBgDgCgCQgCgBgEgBIgEABIgDACIgBAEIgBAEQAAAEACADIAGAJIAQATIAFAGIAFAIIADAJQACAEAAAGQAAAGgCAFQgCAFgEAEQgEAEgGACQgFACgHAAQgGAAgFgBg");
	this.shape.setTransform(29.1,65.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbA9IAAh4IAQAAIACANQAEgHAFgEQAEgDAFAAQAKAAAEAGQAFAGgBALIAAAEIAAAEIgBAFIgCAEIgPAAIAAgLIgBgHIgBgDIgCgCIgBgBQgDAAgCACIgDAFIAABig");
	this.shape_1.setTransform(22.4,65.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNA7QgHgDgDgGQgEgGgDgKQgCgJAAgOIAAgWQABgMABgHQABgJAEgGQACgFAEgEQADgDAEgBIAIgDIAGAAQAGAAAFACQAGABAEAFQAFAFACAGQADAIgBALIAAAHIAAAIIgBAHIgBAFIgoAAIAAAMIABAOIADAIQABAEACABIAGABIADAAIAEgDIACgFIABgIIAAgEIASAAIAAAFQABARgJAIQgIAIgPAAQgHAAgGgDgAgDgsQgCACgBAEIgCAIIgCANIAAAHIAWAAIAAgCIABgEIAAgDIAAgDQgBgMgCgFQgEgGgFAAIgEABg");
	this.shape_2.setTransform(14.5,65.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBBMQgEgCgDgDQgDgDgCgHQgCgGAAgJIAAhLIgKAAIAAgQIAMAAIAEgfIAOAAIAAAfIAUAAIAAAQIgUAAIAABNIABAFIACAFIAEABIADAAIAGAAIAFgCIAAAMIgEAEIgFADIgFAAIgFABQgEAAgEgBg");
	this.shape_3.setTransform(7.6,63.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA9QgGgCgEgDQgDgDgDgFQgCgFAAgIIABgIIABgFIAQAAIAAALIADAHQABACADABIAFABQAFABACgDQACgDAAgEIAAgDIgCgEIgCgDIgDgFIgQgTIgGgHIgFgIIgDgKQgCgEAAgGQAAgHADgFQACgEAEgEQAEgDAGgDQAFgBAFAAQAGAAAGABQAFACAEADQAEAEACAFQACAEAAAGIgBAIIgCAHIgPAAIAAgKQgBgFgBgCQgBgDgCgCQgCgBgEgBIgEABIgDACIgBAEIgBAEQAAAEACADIAGAJIAQATIAFAGIAFAIIADAJQACAEAAAGQAAAGgCAFQgCAFgEAEQgEAEgGACQgFACgHAAQgGAAgFgBg");
	this.shape_4.setTransform(0.9,65.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALA9IAAhbQAAgIgCgDQgDgDgFAAQgCAAgDACQgEACgCAEIAABhIgWAAIAAh4IARAAIACANIAGgHIAGgEIAFgCIAHgBQALAAAGAHQAFAIAAAPIAABbg");
	this.shape_5.setTransform(-7.2,65.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHA9QgEgBgDgBQgEgCgDgEQgEgEgCgGQgDgFgBgJIgBgVIAAgSQAAgLABgIQABgJADgGQACgFAEgEIAHgFIAIgDIAGAAIAIAAQAEABADACQAEABADAEQAEADACAGQADAFABAKIABATIAAASQAAAMgBAJQgCAJgCAFIgGAKIgHAGIgHACIgIABgAgEgrQgCACgCADIgCAKIAAANIAAAeIAAAOIACAJQACADACACQACACACgBQADABACgCQACgCACgDIACgJIAAgOIAAgeIAAgNIgCgKQgCgDgCgCQgCgBgDgBQgCABgCABg");
	this.shape_6.setTransform(-15.8,65.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdBLIAAgxIABgXIAAgSIABgPIABgMIgCAAIgXBhIgNAAIgXhhIgCAAIABAMIABAPIAAASIAAAXIAAAxIgUAAIAAiVIAdAAIAPA6IADARIACARIAAAAIADgRIADgRIAQg6IAdAAIAACVg");
	this.shape_7.setTransform(-26.3,64);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAGBGIiMhOICMjmIgGCkICHBCIiBD3g");
	this.shape_8.setTransform(2.4,-7.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AE4C45").s().p("AjlCvIHFlnQAGAcABAeQAACBhsBaQhtBciYAAQgvAAgsgKg");
	this.shape_9.setTransform(16.3,5.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DC5B4E").s().p("AkDGkQhshbAAiCQAAhEAhg9QAgg7A6grQhjiFgshpQhFilBigpQBcgmA0CeQAiBqAMCuQBQgkBZAAQBXAABOAhQAEi2AfhwQAwizBqA3QBlA0hAClQgqBthnCKQA6ArAgA7QAiA+AABEQAACChsBbQhtBbiZAAQiYAAhshbg");
	this.shape_10.setTransform(2.2,-26.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#67B9A5").s().p("AjKBMQhtg0hFhjIL5AAQhGBkhsAzg");
	this.shape_11.setTransform(1.2,20.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9DD88").s().p("AlHFIQiJiHAAjBQAAjACJiIQCHiIDAAAQDAAACJCIQCICIAADAQAADBiICHQiJCIjAAAQjAAAiHiIg");
	this.shape_12.setTransform(1.2,-13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AlwFyQiZiZgBjZQABjYCZiYQCZiaDXABQDZgBCYCaQCZCYAADYQAADZiZCZQiYCYjZABQjXgBiZiYg");
	this.shape_13.setTransform(1.2,-13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-77.9,112.1,155.8);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA9QgGgCgEgDQgDgDgDgFQgCgFAAgIIABgIIABgFIAQAAIAAALIADAHQABACADABIAFABQAFABACgDQACgDAAgEIAAgDIgCgEIgCgDIgDgFIgQgTIgGgHIgFgIIgDgKQgCgEAAgGQAAgHADgFQACgEAEgEQAEgDAGgDQAFgBAFAAQAGAAAGABQAFACAEADQAEAEACAFQACAEAAAGIgBAIIgCAHIgPAAIAAgKQgBgFgBgCQgBgDgCgCQgCgBgEgBIgEABIgDACIgBAEIgBAEQAAAEACADIAGAJIAQATIAFAGIAFAIIADAJQACAEAAAGQAAAGgCAFQgCAFgEAEQgEAEgGACQgFACgHAAQgGAAgFgBg");
	this.shape.setTransform(29.1,65.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbA9IAAh4IAQAAIACANQAEgHAFgEQAEgDAFAAQAKAAAEAGQAFAGgBALIAAAEIAAAEIgBAFIgCAEIgPAAIAAgLIgBgHIgBgDIgCgCIgBgBQgDAAgCACIgDAFIAABig");
	this.shape_1.setTransform(22.4,65.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNA7QgHgDgDgGQgEgGgDgKQgCgJAAgOIAAgWQABgMABgHQABgJAEgGQACgFAEgEQADgDAEgBIAIgDIAGAAQAGAAAFACQAGABAEAFQAFAFACAGQADAIgBALIAAAHIAAAIIgBAHIgBAFIgoAAIAAAMIABAOIADAIQABAEACABIAGABIADAAIAEgDIACgFIABgIIAAgEIASAAIAAAFQABARgJAIQgIAIgPAAQgHAAgGgDgAgDgsQgCACgBAEIgCAIIgCANIAAAHIAWAAIAAgCIABgEIAAgDIAAgDQgBgMgCgFQgEgGgFAAIgEABg");
	this.shape_2.setTransform(14.5,65.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBBMQgEgCgDgDQgDgDgCgHQgCgGAAgJIAAhLIgKAAIAAgQIAMAAIAEgfIAOAAIAAAfIAUAAIAAAQIgUAAIAABNIABAFIACAFIAEABIADAAIAGAAIAFgCIAAAMIgEAEIgFADIgFAAIgFABQgEAAgEgBg");
	this.shape_3.setTransform(7.6,63.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA9QgGgCgEgDQgDgDgDgFQgCgFAAgIIABgIIABgFIAQAAIAAALIADAHQABACADABIAFABQAFABACgDQACgDAAgEIAAgDIgCgEIgCgDIgDgFIgQgTIgGgHIgFgIIgDgKQgCgEAAgGQAAgHADgFQACgEAEgEQAEgDAGgDQAFgBAFAAQAGAAAGABQAFACAEADQAEAEACAFQACAEAAAGIgBAIIgCAHIgPAAIAAgKQgBgFgBgCQgBgDgCgCQgCgBgEgBIgEABIgDACIgBAEIgBAEQAAAEACADIAGAJIAQATIAFAGIAFAIIADAJQACAEAAAGQAAAGgCAFQgCAFgEAEQgEAEgGACQgFACgHAAQgGAAgFgBg");
	this.shape_4.setTransform(0.9,65.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALA9IAAhbQAAgIgCgDQgDgDgFAAQgCAAgDACQgEACgCAEIAABhIgWAAIAAh4IARAAIACANIAGgHIAGgEIAFgCIAHgBQALAAAGAHQAFAIAAAPIAABbg");
	this.shape_5.setTransform(-7.2,65.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHA9QgEgBgDgBQgEgCgDgEQgEgEgCgGQgDgFgBgJIgBgVIAAgSQAAgLABgIQABgJADgGQACgFAEgEIAHgFIAIgDIAGAAIAIAAQAEABADACQAEABADAEQAEADACAGQADAFABAKIABATIAAASQAAAMgBAJQgCAJgCAFIgGAKIgHAGIgHACIgIABgAgEgrQgCACgCADIgCAKIAAANIAAAeIAAAOIACAJQACADACACQACACACgBQADABACgCQACgCACgDIACgJIAAgOIAAgeIAAgNIgCgKQgCgDgCgCQgCgBgDgBQgCABgCABg");
	this.shape_6.setTransform(-15.8,65.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdBLIAAgxIABgXIAAgSIABgPIABgMIgCAAIgXBhIgNAAIgXhhIgCAAIABAMIABAPIAAASIAAAXIAAAxIgUAAIAAiVIAdAAIAPA6IADARIACARIAAAAIADgRIADgRIAQg6IAdAAIAACVg");
	this.shape_7.setTransform(-26.3,64);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAGBGIiMhOICMjmIgGCkICHBCIiBD3g");
	this.shape_8.setTransform(2.4,-7.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AE4C45").s().p("AjlCvIHFlnQAGAcABAeQAACBhsBaQhtBciYAAQgvAAgsgKg");
	this.shape_9.setTransform(16.3,5.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DC5B4E").s().p("AkDGkQhshbAAiCQAAhEAhg9QAgg7A6grQhjiFgshpQhFilBigpQBcgmA0CeQAiBqAMCuQBQgkBZAAQBXAABOAhQAEi2AfhwQAwizBqA3QBlA0hAClQgqBthnCKQA6ArAgA7QAiA+AABEQAACChsBbQhtBbiZAAQiYAAhshbg");
	this.shape_10.setTransform(2.2,-26.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#67B9A5").s().p("AjKBMQhtg0hFhjIL5AAQhGBkhsAzg");
	this.shape_11.setTransform(1.2,20.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9DD88").s().p("AlHFIQiJiHAAjBQAAjACJiIQCHiIDAAAQDAAACJCIQCICIAADAQAADBiICHQiJCIjAAAQjAAAiHiIg");
	this.shape_12.setTransform(1.2,-13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AlwFyQiZiZgBjZQABjYCZiYQCZiaDXABQDZgBCYCaQCZCYAADYQAADZiZCZQiYCYjZABQjXgBiZiYg");
	this.shape_13.setTransform(1.2,-13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-77.9,112.1,155.8);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E06F6B").s().p("AiaH3QjRhAhmjBQhmjBBBjPQBAjRDBhmQDBhmDQBAQDQBBBmDBQBmDBhADPQhBDRjBBmQh2A+h8AAQhOAAhQgZg");
	this.shape.setTransform(442.2,461.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(246,203,132,0.698)","rgba(249,218,167,0.475)","rgba(252,236,210,0.216)","rgba(254,248,239,0.059)","rgba(255,255,255,0)"],[0,0.271,0.612,0.863,1],35.2,-110.6,22.5,-58.5).s().p("Aq2d1MAR1g94ID4A8MgMfA/Lg");
	this.shape_1.setTransform(378.5,699.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(246,203,132,0.698)","rgba(249,218,167,0.475)","rgba(252,236,210,0.216)","rgba(254,248,239,0.059)","rgba(255,255,255,0)"],[0,0.271,0.612,0.863,1],-35.1,110.7,-22.4,58.6).s().p("Aq1fIMAMeg/MIJOCQMgR1A94g");
	this.shape_2.setTransform(509.2,225.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(246,203,132,0.698)","rgba(249,218,167,0.475)","rgba(252,236,210,0.216)","rgba(254,248,239,0.059)","rgba(255,255,255,0)"],[0,0.271,0.612,0.863,1],110.6,35.2,58.5,22.5).s().p("EggEgBoICQpOMA94AR1Ig8D4g");
	this.shape_3.setTransform(205.3,397);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(246,203,132,0.698)","rgba(249,218,167,0.475)","rgba(252,236,210,0.216)","rgba(254,248,239,0.059)","rgba(255,255,255,0)"],[0,0.271,0.612,0.863,1],-204.1,-57.9,-152,-45.2).s().p("EhDfgPmIA8j4MCGDAdvIiQJNg");
	this.shape_4.setTransform(905.7,583);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(246,203,132,0.698)","rgba(249,218,167,0.475)","rgba(252,236,210,0.216)","rgba(254,248,239,0.059)","rgba(255,255,255,0)"],[0,0.271,0.612,0.863,1],100.2,-65.4,54.4,-37.6).s().p("A9NLiMA4XgfJICFDZMg1hAj2g");
	this.shape_5.setTransform(231.5,595.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(246,203,132,0.698)","rgba(249,218,167,0.475)","rgba(252,236,210,0.216)","rgba(254,248,239,0.059)","rgba(255,255,255,0)"],[0,0.271,0.612,0.863,1],-168.9,107.2,-123.1,79.4).s().p("Eg3RAgFMBpnhDjIE7IHMhsdA+2g");
	this.shape_6.setTransform(819.7,227.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(246,203,132,0.698)","rgba(249,218,167,0.475)","rgba(252,236,210,0.216)","rgba(254,248,239,0.059)","rgba(255,255,255,0)"],[0,0.271,0.612,0.863,1],65.4,100.1,37.6,54.3).s().p("Azn4SIIGk7MAfJA4XIjZCEg");
	this.shape_7.setTransform(306.5,246);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(246,203,132,0.698)","rgba(249,218,167,0.475)","rgba(252,236,210,0.216)","rgba(254,248,239,0.059)","rgba(255,255,255,0)"],[0,0.271,0.612,0.863,1],-97.1,-152.3,-69.3,-106.5).s().p("Egfqgu7IDaiFMA77BdFIoHE8g");
	this.shape_8.setTransform(649.8,793.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol62, new cjs.Rectangle(0,0,1337.7,1107.6), null);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmA0Qgngzg3gBQA3AAAngzQAmgzAAhHQABBHAnAzQAmAzA3AAQg3ABgmAzQgnAzgBBHQAAhHgmgzg");
	this.shape.setTransform(157.3,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAnQgegngpAAQApAAAegmQAcgmAAg1QABA1AdAmQAdAmApAAQgpAAgdAnQgdAmgBA1QAAg1gcgmg");
	this.shape_1.setTransform(78.9,102.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAjQgagiglgBQAlAAAagjQAagiAAgxQAAAxAbAiQAaAjAmAAQgmABgaAiQgbAjAAAxQAAgxgagjg");
	this.shape_2.setTransform(9,249.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol60, new cjs.Rectangle(0,0,170.6,261.6), null);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.3).s().p("AhdBeQgngnABg3QgBg2AngnQAngmA2AAQA3AAAmAmQAnAnAAA2QAAA3gnAnQgmAmg3AAQg2AAgngmg");
	this.shape.setTransform(120.1,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(244,208,193,0.647)","rgba(234,165,144,0.298)","rgba(229,141,118,0.082)","rgba(227,132,109,0)"],[0,0.298,0.624,0.871,1],0,0,0,0,0,13.3).s().p("AhdBeQgmgnAAg3QAAg2AmgmQAngnA2AAQA3AAAnAnQAmAmAAA2QAAA3gmAnQgnAmg3AAQg2AAgngmg");
	this.shape_1.setTransform(13.2,288.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol59, new cjs.Rectangle(0,0,133.4,301.4), null);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.3).s().p("AhdBdQgmgmAAg3QAAg2AmgnQAngnA2ABQA3gBAmAnQAnAnAAA2QAAA3gnAmQgmAng3AAQg2AAgngng");
	this.shape.setTransform(160.4,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(244,208,193,0.647)","rgba(234,165,144,0.298)","rgba(229,141,118,0.082)","rgba(227,132,109,0)"],[0,0.298,0.624,0.871,1],0,0,0,0,0,13.3).s().p("AhdBeQgmgnAAg3QAAg2AmgnQAngmA2AAQA3AAAnAmQAmAnAAA2QAAA3gmAnQgnAmg3AAQg2AAgngmg");
	this.shape_1.setTransform(13.2,255.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol58, new cjs.Rectangle(0,0,173.6,268.9), null);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(244,208,193,0.647)","rgba(234,165,144,0.298)","rgba(229,141,118,0.082)","rgba(227,132,109,0)"],[0,0.298,0.624,0.871,1],0,0,0,0,0,13.3).s().p("AhdBdQgmgmAAg3QAAg2AmgmQAngnA2gBQA3ABAmAnQAnAmAAA2QAAA3gnAmQgmAog3AAQg2AAgngog");
	this.shape.setTransform(193.6,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(244,208,193,0.647)","rgba(234,165,144,0.298)","rgba(229,141,118,0.082)","rgba(227,132,109,0)"],[0,0.298,0.624,0.871,1],0,0,0,0,0,13.3).s().p("AhdBeQgmgnAAg3QAAg2AmgnQAngmA2AAQA3AAAnAmQAmAnAAA2QAAA3gmAnQgnAmg3AAQg2AAgngmg");
	this.shape_1.setTransform(13.2,220);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(244,208,193,0.647)","rgba(234,165,144,0.298)","rgba(229,141,118,0.082)","rgba(227,132,109,0)"],[0,0.298,0.624,0.871,1],0,0,0,0,0,13.3).s().p("AhdBeQgmgngBg3QABg1AmgnQAngnA2AAQA3AAAmAnQAoAnAAA1QAAA3goAnQgmAmg3AAQg2AAgngmg");
	this.shape_2.setTransform(317.7,71.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol57, new cjs.Rectangle(0,0,330.9,233.2), null);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmA0Qgngzg3gBQA3AAAngzQAmgyAAhIQABBIAnAyQAmAzA2AAQg2ABgmAzQgnAygBBIQAAhIgmgyg");
	this.shape.setTransform(294.2,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA0Qgmgzg3gBQA3AAAmgzQAngzAAhHQABBHAmAzQAnAzA3AAQg3ABgnAzQgmAzgBBHQAAhHgngzg");
	this.shape_1.setTransform(13.3,93.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAjQgagiglgBQAlAAAagjQAagiAAgxQAAAxAbAiQAaAjAmAAQgmABgaAiQgbAjAAAxQAAgxgagjg");
	this.shape_2.setTransform(289.7,309.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol56, new cjs.Rectangle(0,0,307.5,321.8), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#529181").s().p("AhKENQgEgHAFgRQAHgbACgVQgVAJgXAAQgXAAgWgJQACAVAIAbQAFARgFAHQgMAQgagYQgZgagDgiQgCgWACgTQgUgUgOgbIFrmDQAQAIAyAgQBAArgGASQgDAKgZABQgZAAgggKQgMgDgPgMIgWgRIgOAXQgLAPgPAOQgXAUgQAXQAWAzAAA3QAAAwgRAsQgQAqgcAdQACAXgCASQgDAigZAaQgPAOgLAAQgHAAgFgGg");
	this.shape.setTransform(76,101.4,0.993,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#67B9A5").s().p("AgEBCQgagagDgiQgDgiAGgZQAHgaALgBQAMAAAJAXQAKAZADAhQACAWAIAbQAFARgFAHQgFAHgHAAQgKAAgOgPg");
	this.shape_1.setTransform(58.4,120.9,0.993,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#67B9A5").s().p("AgfBKQgFgHAFgRQAIgbACgWQADgiAKgYQAKgXALAAQAMABAGAaQAGAZgDAiQgDAigaAaQgOAPgKAAQgHAAgFgHg");
	this.shape_2.setTransform(71.8,120.9,0.993,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#67B9A5").s().p("AhrA/QgLg5AHgsQALg9AYgLQAVgKBeAYQBLATAAAUQABALgYAIQgXAJghABQgNABgSgGIgagJIgFAaQgFARgKASQgRAegIAkQgGAbgHACIgCAAQgOAAgLgzg");
	this.shape_3.setTransform(47.1,96.4,0.993,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#67B9A5").s().p("Ah7AwQAIg4AWgnQAfg3AagDQAYgCBQA3QBAArgGARQgDAKgZABQgZAAgggKQgMgDgPgLIgVgRIgOAWQgLAPgPAOQgaAWgUAgQgOAXgHAAQgQAAAHg6g");
	this.shape_4.setTransform(87.7,83.2,0.993,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67B9A5").s().p("AhyCUQgwg+ABhWQgBhVAwg+QAvg+BDABQBDgBAwA+QAwA+AABVQAABWgwA+QgwA9hDAAQhDAAgvg9g");
	this.shape_5.setTransform(65.1,101,0.993,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#67B9A5").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_6.setTransform(65.1,77.5,0.993,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#67B9A5").s().p("AgfA2QgOgWAAggQAAgfAOgWQANgWASAAQATAAANAWQAOAWAAAfQAAAggOAWQgNAWgTAAQgSAAgNgWg");
	this.shape_7.setTransform(65.1,69.3,0.993,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5).p("AHpPsIvRAAQgyAAgjgjQgjgkAAgxIAA7nQAAgxAjgjQAjgkAyAAIPRAAQAyAAAjAkQAjAjAAAxIAAbnQAAAxgjAkQgjAjgyAAg");
	this.shape_8.setTransform(63,101.8,0.993,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DC5B4E").s().p("AnoPsQgyAAgjgjQgjgkAAgxIAA7nQAAgxAjgjQAjgkAyAAIPRAAQAyAAAjAkQAjAjAAAxIAAbnQAAAxgjAkQgjAjgyAAg");
	this.shape_9.setTransform(63,101.8,0.993,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,-1,126,205.7), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#529181").s().p("AhKENQgEgHAFgRQAHgbACgVQgVAJgXAAQgXAAgWgJQACAVAIAbQAFARgFAHQgMAQgagYQgZgagDgiQgCgWACgTQgUgUgOgbIFrmDQAQAIAyAgQBAArgGASQgDAKgZABQgZAAgggKQgMgDgPgMIgWgRIgOAXQgLAPgPAOQgXAUgQAXQAWAzAAA3QAAAwgRAsQgQAqgcAdQACAXgCASQgDAigZAaQgPAOgLAAQgHAAgFgGg");
	this.shape.setTransform(74,100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#67B9A5").s().p("AgEBCQgagagDgiQgDgiAGgZQAHgaALgBQAMAAAJAXQAKAZADAhQACAWAIAbQAFARgFAHQgFAHgHAAQgKAAgOgPg");
	this.shape_1.setTransform(56.3,119.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#67B9A5").s().p("AgfBKQgFgHAFgRQAIgbACgWQADgiAKgYQAKgXALAAQAMABAGAaQAGAZgDAiQgDAigaAaQgOAPgKAAQgHAAgFgHg");
	this.shape_2.setTransform(69.7,119.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#67B9A5").s().p("AhrA/QgLg5AHgsQALg9AYgLQAVgKBeAYQBLATAAAUQABALgYAIQgXAJghABQgNABgSgGIgagJIgFAaQgFARgKASQgRAegIAkQgGAbgHACIgCAAQgOAAgLgzg");
	this.shape_3.setTransform(44.9,95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#67B9A5").s().p("Ah7AwQAIg4AWgnQAfg3AagDQAYgCBQA3QBAArgGARQgDAKgZABQgZAAgggKQgMgDgPgLIgVgRIgOAWQgLAPgPAOQgaAWgUAgQgOAXgHAAQgQAAAHg6g");
	this.shape_4.setTransform(85.8,81.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67B9A5").s().p("AhyCUQgwg+ABhWQgBhVAwg+QAvg+BDABQBDgBAwA+QAwA+AABVQAABWgwA+QgwA9hDAAQhDAAgvg9g");
	this.shape_5.setTransform(63.1,99.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#67B9A5").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_6.setTransform(63.1,76.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#67B9A5").s().p("AgfA2QgOgWAAggQAAgfAOgWQANgWASAAQATAAANAWQAOAWAAAfQAAAggOAWQgNAWgTAAQgSAAgNgWg");
	this.shape_7.setTransform(63,67.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5).p("AHpPsIvRAAQgyAAgjgjQgjgkAAgxIAA7nQAAgxAjgjQAjgkAyAAIPRAAQAyAAAjAkQAjAjAAAxIAAbnQAAAxgjAkQgjAjgyAAg");
	this.shape_8.setTransform(60.9,100.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DC5B4E").s().p("AnoPsQgyAAgjgjQgjgkAAgxIAA7nQAAgxAjgjQAjgkAyAAIPRAAQAyAAAjAkQAjAjAAAxIAAbnQAAAxgjAkQgjAjgyAAg");
	this.shape_9.setTransform(60.9,100.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-2.5,-2.5,126.9,205.8), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWC1IiFiGQgUgTAAgcQAAgbAUgTICFiHQATgSAbAAQAaAAATASQATATAAAbQAAAbgTASIhJBJQgHAHAAAKQAAALAHAHIBJBJQATATAAAaQAAAbgTASQgTATgaAAQgbAAgTgTg");
	this.shape.setTransform(33.3,36.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(6).p("AEDEDQhrBsiYAAQiXAAhrhsQhrhrAAiYQAAiXBrhrQBrhsCXAAQCYAABrBsQBrBrAACXQAACYhrBrg");
	this.shape_1.setTransform(36.6,36.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9DD88").s().p("AkCEDQhrhrAAiYQAAiXBrhrQBrhrCXAAQCYAABrBrQBrBrAACXQAACYhrBrQhrBriYAAQiXAAhrhrg");
	this.shape_2.setTransform(36.6,36.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-3,-3,79.3,79.3), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLB2QgGgBgHgDQgGgDgGgFQgGgFgFgJQgEgIgDgNQgDgNAAgRIAAhSQAAgSADgMQADgNAFgIQAEgJAGgFQAGgFAHgCQAGgDAGgBIALgBIAMABQAGABAHACQAGADAGAFQAGAFAFAIQAEAJADANQADAMAAASIAABSQAAARgDANQgDAMgEAJQgFAIgGAGQgGAFgHADQgGADgGABIgMABgAgIhYQgEACgCAFQgDAEgBAIIgCASIAABqIACASQABAHADAEQACAFAEABQAEACAEAAQAGAAAEgCQADgBADgFQACgEACgHIABgSIAAhqIgBgSQgCgIgCgEQgDgFgDgCQgEgCgGAAQgEAAgEACg");
	this.shape.setTransform(100.1,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOB2QgGgBgFgDQgGgDgGgFQgFgFgFgJQgEgIgDgNQgDgNAAgRIAAhSQAAgSADgMQADgNAFgIQAEgJAHgFQAGgFAHgCQAGgDAHgBIALgBQAOAAAKAEQAKAEAGAHQAGAHADAJQACAJAAAKIgBAOIgCAOIgcAAIAAgMQAAgmgVAAQgFAAgEACQgEACgCAFQgDAEgBAIIgCASIAABpIACASQABAIADAEQACAEAEACQAEACAFAAQAGAAAEgDQAEgDADgFQADgGABgHIABgQIAAgeIgSAAIAAgXIA1AAIAAB2IgYAAIgEgWQgGANgJAFQgJAGgLAAg");
	this.shape_1.setTransform(86,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5).p("ALhE1I3BAAQgyAAgjgjQgjgjAAgyIAAl5QAAgyAjgjQAjgjAyAAIXBAAQAyAAAjAjQAjAjAAAyIAAF5QAAAygjAjQgjAjgyAAg");
	this.shape_2.setTransform(95.5,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC5B4E").s().p("ArgE1QgyAAgjgjQgjgjAAgyIAAl5QAAgyAjgjQAjgjAyAAIXBAAQAyAAAjAjQAjAjAAAyIAAF5QAAAygjAjQgjAjgyAAg");
	this.shape_3.setTransform(95.5,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,-2.5,186,66.9), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABtDIIhthuIhsBuQgLALgQAAQgQAAgMgLIgkglQgLgLAAgQQAAgQALgMIBthsIhthsQgLgMAAgQQAAgPALgMIAkgkQAMgLAQAAQAQAAALALIBsBtIBthtQALgLAQAAQAQAAALALIAkAkQAMAMAAAPQAAAQgMAMIhtBsIBtBsQAMAMAAAQQAAAQgMALIgkAlQgLALgQAAQgQAAgLgLg");
	this.shape.setTransform(36.6,36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(6).p("AEDEDQhrBsiYAAQiXAAhrhsQhrhrAAiYQAAiXBrhrQBrhrCXAAQCYAABrBrQBrBrAACXQAACYhrBrg");
	this.shape_1.setTransform(36.6,36.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9DD88").s().p("AkCEDQhrhrAAiYQAAiXBrhrQBrhrCXAAQCYAABrBrQBrBrAACXQAACYhrBrQhrBsiYgBQiXABhrhsg");
	this.shape_2.setTransform(36.6,36.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-3,-3,79.3,79.3), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC5B4E").s().p("AgtQfItFtsQgegfARgoQASgpArgBIGEAAQAbgBAUgTQATgUABgaIgDvvQAAgbATgUQAUgTAcAAIJxgCQAcAAAUAUQATATAAAcIADPuQgBAbAUAUQATATAcgBIGEAAQAsgBARApQASAogeAhItBNvQgUAVgcAAQgcAAgTgVg");
	this.shape.setTransform(90.2,107.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,180.4,215.2), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BBBDBF").ss(2).p("AClAAIlJAA");
	this.shape.setTransform(23.7,359.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BBBDBF").ss(2).p("ACmAAIlKAA");
	this.shape_1.setTransform(20.8,127.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BBBDBF").ss(2).p("ACmAAIlKAA");
	this.shape_2.setTransform(20.8,237);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgARAiAQgHgHAAgLMAAAhDbQAAgKAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAKMAAABDbQAAALgHAHQgIAHgKAAQgJAAgIgHg");
	this.shape_3.setTransform(8.3,253.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5D077").s().p("EgDCAmUMAAAhIXQAAiAA9hMQA3hEBOAAQBPAAA3BEQA9BMAACAMAAABIXg");
	this.shape_4.setTransform(19.8,490.3,1,0.76,0,0,0,0.1,245.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3).p("EADDAl2ImFAAMAAAhIoQAAhQA5g6QA5g5BQAAQBRAAA5A5QA5A6AABQg");
	this.shape_5.setTransform(19.5,242.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D0D2D3").s().p("EgDCAl1MAAAhImQAAhRA5g6QA6g5BPAAQBRAAA5A5QA5A6AABRMAAABImg");
	this.shape_6.setTransform(19.5,242.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-1.5,-1.5,42.8,491.9), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgSAYQgHgIAAgPQAAgSAHgHQAHgHALgBQAMAAAIAJQAGAHAAARQAAAOgGAJQgIAIgMAAQgLAAgHgIg");
	this.shape.setTransform(189.1,459.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58595B").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_1.setTransform(177.4,454.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgGIAAgdIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAEQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAIIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_2.setTransform(161.8,451.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58595B").s().p("AgWCYIgKgEQgGgCgFgGQgGgFgEgJQgEgJgCgOQgDgOAAgTIAAhIQAAgTADgNQACgNAFgJQAEgJAGgFQAGgFAFgCIAKgDIAJAAIALABIAKAFIAHAGIAGAHIgBgdIAAg9IAqAAIAAEtIghAAIgDgVIgHAIIgIAIIgMAFQgFACgIAAgAgHgwQgEACgDAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQADAEAEACIAHACIAHgBIAGgEIAFgFIADgHIAAiIQgDgHgFgFQgFgFgIAAg");
	this.shape_3.setTransform(146.4,447.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#58595B").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_4.setTransform(130.8,454.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_5.setTransform(117.8,451);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#58595B").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_6.setTransform(102.9,451.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58595B").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_7.setTransform(87.9,451.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_8.setTransform(73.1,451.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58595B").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFACQAFACAFABQAKgBAEgFQAFgFAAgHIgBgHIgDgHIgFgHIgGgHIgdglIgMgNIgKgRIgGgRQgDgJAAgKQAAgNAFgKQAEgJAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAGIgBAIQAAAHADAHIAKAPIAhAmIAIAMIAKANIAHARQADAJAAAKQAAAMgEALQgEAJgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgCg");
	this.shape_9.setTransform(393.2,394.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_10.setTransform(380.6,394.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_11.setTransform(365.6,394.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_12.setTransform(353.6,390.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_13.setTransform(341.7,394.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_14.setTransform(326.7,394.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFABgDAEQgDAEgCAHQgCAHAAAJIAAALIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_15.setTransform(311.2,394.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_16.setTransform(298.5,394.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("AgCCPQgIgCgHgHQgFgGgEgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgJAAgHgCg");
	this.shape_17.setTransform(285.7,391.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_18.setTransform(267,394.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_19.setTransform(252.1,394.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJAAQgGABgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgDIALgIIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_20.setTransform(235.9,390.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_21.setTransform(222,391.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_22.setTransform(208.3,394.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_23.setTransform(185.6,394.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#58595B").s().p("AgVCXQgKgDgIgFQgHgFgEgIQgEgJAAgOIAAgGIACgHIAdAAQABAPAFAGQAFAGAMAAIAIgBQAEgCADgDQAEgEABgHQACgGAAgLIAAgkQgFAIgJAEQgIAGgNAAIgJgBIgKgEQgGgCgFgFQgGgFgEgKQgEgJgDgOQgCgNAAgTIAAg8QAAgTACgNQADgNAEgJQAEgIAGgFQAFgFAGgCIAKgEIAKgBQAIAAAGACQAGADAFADIAIAIIAGAJIADgXIAhAAIAADbQAAAUgEAPQgEAPgHALQgIALgMAFQgMAHgQgBQgLAAgKgBgAgHh3QgFACgCAEQgDAEgBAJIgCAUIAABMIACAUQABAHADAFQACAFAFABIAHACIAIgBIAFgEIAFgFIADgHIAAh8QgDgGgFgFQgGgFgHAAg");
	this.shape_24.setTransform(169.4,398);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#58595B").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_25.setTransform(153,394.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_26.setTransform(137,394.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_27.setTransform(125,390.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_28.setTransform(116.4,390.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFABgDAEQgDAEgCAHQgCAHAAAJIAAALIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_29.setTransform(103.8,394.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJAAQgGABgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgDIALgIIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_30.setTransform(88.3,390.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("AgqBeQgQgYAAgxIAAgqQAAgWAEgPQADgQAFgKQAGgLAGgGQAHgHAHgCQAHgEAHgBIAMgBQAMAAAJAEQAJACAIAHQAHAGAEAJQADAKAAANIgBANIgCAMIghAAIAAgIQAAgSgEgJQgEgKgKAAQgEAAgEADQgDACgCAGQgEAFgBAKIgBAZIAAA/IABAaQABALADAGQACAGAEADQAEADAFABIAGgCQADgBADgEIADgKIACgPIAAgHIAkAAIAAAIQAAAigOAOQgOAPgdAAQgcAAgPgXg");
	this.shape_31.setTransform(72.8,394.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgWADgQQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_32.setTransform(424.1,337.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("AgCCPQgIgCgHgHQgFgGgEgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgJAAgHgCg");
	this.shape_33.setTransform(410.8,334.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_34.setTransform(390.2,337.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AgqBdQgPgYAAgwIAAgrQgBgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAHgDAHgBIAMgBQALAAAKADQAJAEAHAFQAIAHADAKQAEAJABAMIgBAPIgDAKIghAAIAAgIQAAgQgEgLQgEgJgJAAQgFAAgDACQgFADgCAFQgCAHgBAJIgCAZIAABAIABAZQABALADAGQACAGAEAEQAEACAGAAIAFgBQADgCADgDIADgKIACgPIAAgHIAkAAIAAAJQAAAggOAPQgPAPgcAAQgcAAgPgYg");
	this.shape_35.setTransform(375.5,337.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_36.setTransform(359.6,337.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAJIggAAIgCgLIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhIg");
	this.shape_37.setTransform(342.9,337.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#58595B").s().p("AAVCXIAAisQAAgQgFgGQgEgFgJAAQgGgBgGAFQgGAEgFAHIAAC4IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgFIALgGIALgEIALgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_38.setTransform(327.4,334);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#58595B").s().p("AgqBdQgQgYAAgwIAAgrQABgVADgQQADgPAFgLQAGgKAGgHQAHgGAHgDQAHgDAHgBIAMgBQAMAAAJADQAKAEAGAFQAHAHAFAKQADAJAAAMIAAAPIgCAKIgiAAIAAgIQAAgQgEgLQgEgJgKAAQgEAAgEACQgEADgCAFQgDAHAAAJIgCAZIAABAIABAZQABALACAGQADAGAEAEQAEACAFAAIAHgBQADgCACgDIAEgKIABgPIAAgHIAkAAIAAAJQAAAggOAPQgPAPgcAAQgcAAgPgYg");
	this.shape_39.setTransform(311.9,337.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAJIggAAIgCgLIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhIg");
	this.shape_40.setTransform(288.9,337.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_41.setTransform(267.1,337.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_42.setTransform(252.1,337.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAJIggAAIgCgLIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhIg");
	this.shape_43.setTransform(236.6,337.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("AAVCXIAAisQAAgQgFgGQgEgFgJAAQgGgBgGAFQgGAEgFAHIAAC4IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgFIALgGIALgEIALgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_44.setTransform(221.1,334);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("AgzBmQgLgOAAgcIAAivIAqAAIAACrQAAAPAFAHQAEAFAJAAQAGAAAGgEQAGgDAFgHIAAi4IAqAAIAADkIghAAIgEgZQgFAJgFAFQgGAFgGADIgLAEIgNABQgUABgLgOg");
	this.shape_45.setTransform(196.9,337.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgWADgQQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_46.setTransform(180.5,337.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("AgVCOIAAhfIg5i8IArAAIAjCIIABAAIAiiIIAsAAIg6C8IAABfg");
	this.shape_47.setTransform(164.7,334.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#58595B").s().p("AgSAYQgHgIAAgPQAAgSAHgHQAHgHALAAQANgBAGAJQAHAHAAARQAAAPgHAIQgGAIgNAAQgLAAgHgIg");
	this.shape_48.setTransform(145.3,346.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAJIggAAIgCgLIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhIg");
	this.shape_49.setTransform(132.9,337.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#58595B").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_50.setTransform(117.5,337.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#58595B").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_51.setTransform(101.4,337.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_52.setTransform(88,337.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAJIggAAIgCgLIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhIg");
	this.shape_53.setTransform(72.4,337.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#58595B").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgHIgFgHIgGgHIgdglIgMgNIgKgQIgGgSQgDgJAAgJQAAgOAFgKQAEgJAIgHQAHgGALgEQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAHIgBAHQAAAHADAHIAKAPIAhAmIAIAMIAKANIAHARQADAJAAAKQAAANgEAKQgEAJgHAHQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_54.setTransform(417.8,280.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#58595B").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAFQAFAFAEAJQAEAKADAOQACANAAATIAABGQAAASgCAOQgDANgEAJQgEAKgFAFQgGAFgFADIgLAEIgJAAQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHABIAIgBQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_55.setTransform(402.9,284.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#58595B").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_56.setTransform(386.9,280.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#58595B").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgIAAgIgCg");
	this.shape_57.setTransform(373.7,278);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#58595B").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgHIgFgHIgGgHIgdglIgMgNIgKgQIgGgSQgDgJAAgJQAAgOAFgKQAEgJAIgHQAHgGALgEQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAHIgBAHQAAAHADAHIAKAPIAhAmIAIAMIAKANIAHARQADAJAAAKQAAANgEAKQgEAJgHAHQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_58.setTransform(361.1,280.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#58595B").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_59.setTransform(339.4,280.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#58595B").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJAAQgGABgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgDIALgIIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_60.setTransform(323.2,277.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#58595B").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_61.setTransform(309.3,278);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("AA+B0IAAitIgBgNIgDgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAGgFIALgJIAMgEIAOgCQAMAAAJAHQAKAGAEANQAFgHAFgFIAMgIIANgEIAMgCQATAAAMAPQAKAOABAcIAACug");
	this.shape_62.setTransform(283.7,280.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#58595B").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgLgCgQQgDgQAAgWIAAgjQAAgXADgPQACgRAFgKQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAXIAAAjQAAAWgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAFgIABIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA2IABAbQABALADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgLIABgbIAAg2IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_63.setTransform(263.2,280.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_64.setTransform(249.6,280.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#58595B").s().p("AgcCZIAAjGIgUAAIAAgeIAUAAIAAgQQAAgTAEgMQAEgMAGgGQAHgHAIgCQAJgDALABIAGAAIAIABIAHACIAHADIAAAdQgHgCgJAAIgIACIgHAEIgEAIIgCANIAAAQIAgAAIAAAeIggAAIAADGg");
	this.shape_65.setTransform(237.7,277.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#58595B").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgIAAgIgCg");
	this.shape_66.setTransform(219.4,278);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#58595B").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_67.setTransform(206,280.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#58595B").s().p("AAYCXIgvhxIgBAAIAABxIgqAAIAAktIAqAAIAACtIABAAIAthjIAoAAIgyBnIA3B8g");
	this.shape_68.setTransform(191.6,277.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#58595B").s().p("AgqBdQgPgYAAgwIAAgqQgBgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAHgEAHgBIAMgBQALAAAKADQAJAEAHAFQAIAHADAJQAFAKAAANIgBANIgDALIghAAIAAgHQAAgSgEgJQgEgKgJAAQgFAAgDADQgFACgCAGQgCAFgBAKIgCAZIAAA/IABAaQABAKADAHQACAGAEADQAEADAGAAIAFgBQADgCADgDIADgKIACgPIAAgHIAkAAIAAAIQAAAigOAOQgPAPgcAAQgcAAgPgYg");
	this.shape_69.setTransform(175.7,280.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#58595B").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_70.setTransform(164.1,276.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#58595B").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgIAAgIgCg");
	this.shape_71.setTransform(154.2,278);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAHAAAJIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgKAIgGQAIgHALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_72.setTransform(132.9,280.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#58595B").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_73.setTransform(117.5,280.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#58595B").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_74.setTransform(101.4,280.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_75.setTransform(88,280.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAHAAAJIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgKAIgGQAIgHALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_76.setTransform(72.4,280.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_77.setTransform(384.1,224);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#58595B").s().p("AgzBlQgLgNAAgcIAAivIAqAAIAACrQAAAPAFAHQAEAFAJAAQAGAAAGgEQAGgDAFgGIAAi5IAqAAIAADkIghAAIgEgZQgFAJgFAEQgGAGgGADIgLAFIgNABQgUgBgLgOg");
	this.shape_78.setTransform(368.3,224.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#58595B").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_79.setTransform(351.9,224.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#58595B").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_80.setTransform(336.5,227.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#58595B").s().p("AgWByQgKgCgIgGQgHgGgEgJQgFgKAAgOIACgPIADgLIAdAAIABAVQACAJACAFQADAFAFACQAFACAFAAQAKAAAEgGQAFgFAAgHIgBgHIgDgHIgFgGIgGgIIgdgkIgMgPIgKgQIgGgRQgDgIAAgLQAAgNAFgJQAEgKAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgIgCgGQgCgGgEgCQgEgDgGAAQgFAAgDACIgGAFIgDAFIgBAHQAAAIADAIIAKAOIAhAnIAIAKIAKAPIAHAQQADAKAAAKQAAALgEAKQgEAKgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgDg");
	this.shape_81.setTransform(315.1,224.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#58595B").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_82.setTransform(304,219.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_83.setTransform(284.7,224.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_84.setTransform(271.3,224);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_85.setTransform(256.4,224.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#58595B").s().p("AAaCOIAAiDIgzAAIAACDIgrAAIAAkbIArAAIAAB3IAzAAIAAh3IArAAIAAEbg");
	this.shape_86.setTransform(239.4,221.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#58595B").s().p("AgSAYQgHgIAAgQQAAgQAHgIQAHgHALAAQANgBAGAJQAHAHAAAQQAAAQgHAIQgGAIgNABQgLgBgHgIg");
	this.shape_87.setTransform(218.7,232.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_88.setTransform(208.9,224);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_89.setTransform(193.9,224.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#58595B").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_90.setTransform(181.9,220.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_91.setTransform(170,224.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#58595B").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_92.setTransform(155,224.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_93.setTransform(139.5,224.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_94.setTransform(126.8,224);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#58595B").s().p("AgCCPQgIgCgHgHQgGgGgEgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_95.setTransform(114,221.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#58595B").s().p("AgdA4IARhvIAqAAIgZBvg");
	this.shape_96.setTransform(96.4,235.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#58595B").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_97.setTransform(88.3,219.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#58595B").s().p("AAZCOIAAiDIgxAAIAACDIgrAAIAAkbIArAAIAAB3IAxAAIAAh3IArAAIAAEbg");
	this.shape_98.setTransform(74.6,221.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#DC5B4E").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAPQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_99.setTransform(304,160.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#DC5B4E").s().p("AgVCXQgKgDgHgEQgIgGgEgJQgFgIAAgNIABgHIABgHIAfAAQgBAPAGAGQAFAGALAAIAIgBQAFgBAEgEQACgEADgHQACgHAAgKIAAgkQgGAIgJAFQgIAFgNAAIgJgBIgKgDQgGgDgGgFQgFgGgEgJQgEgJgCgNQgDgPAAgSIAAg8QAAgSADgOQACgNAEgIQAEgJAFgFQAGgFAGgDIALgDIAJAAQAIAAAFABQAHACAFAFIAIAIIAFAJIAEgYIAhAAIAADbQAAATgDAPQgEAQgIALQgIALgMAFQgMAHgQAAQgLAAgKgCgAgIh4QgEADgCAEQgDAEgCAJIgBAVIAABKIABAVQACAHADAFQACAFAEACIAIACIAHgCIAHgEIAEgFIADgGIAAh9QgDgGgFgFQgGgFgHAAg");
	this.shape_100.setTransform(287.8,164.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#DC5B4E").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgHIANgGIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHABQgFADgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAIIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_101.setTransform(271.6,160.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#DC5B4E").s().p("AgWBzQgKgDgIgGQgHgGgEgJQgFgKAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFACQAFABAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgIIgGgHIgdglIgMgOIgKgPIgGgRQgDgKAAgJQAAgOAFgKQAEgKAIgGQAHgHALgDQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAFIgDAGIgBAGQAAAJADAGIAKAQIAhAlIAIALIAKAPIAHARQADAIAAALQAAAMgEAJQgEALgHAGQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_102.setTransform(257.7,160.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#DC5B4E").s().p("AgWBzQgKgDgIgGQgHgGgEgJQgFgKAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFACQAFABAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgIIgGgHIgdglIgMgOIgKgPIgGgRQgDgKAAgJQAAgOAFgKQAEgKAIgGQAHgHALgDQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAFIgDAGIgBAGQAAAJADAGIAKAQIAhAlIAIALIAKAPIAHARQADAIAAALQAAAMgEAJQgEALgHAGQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_103.setTransform(244,160.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#DC5B4E").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAPQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_104.setTransform(229.5,160.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#DC5B4E").s().p("AA4COIAAheIAAgqIABgjIABgeIACgUIgDAAIgrC4IgaAAIgsi4IgDAAIACAUIABAeIABAjIABAqIAABeIgpAAIAAkbIA5AAIAbBuIAHAiIAEAfIABAAIAFgfIAHgiIAbhuIA3AAIAAEbg");
	this.shape_105.setTransform(209.8,157.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#DC5B4E").s().p("Ag0BxIgTgLIALgYIAJAHIAJAGIAMAFQAMAFAPAAQAZAAAKgNQAHgKAAgLQAAgKgCgGQgEgLgMgJIgMgHIgbgPQgRgIgIgIQgIgIgFgHQgJgQAAgZQAAgZASgSQASgSAdAAQASAAAPAEQAOAFAIAHIgGAYQgVgQgbAAQgPAAgKALQgJALAAARQAAAIADAHQAEALAOAKIAOAIIAbAOIAOAHIALAJQARASABAcQgBAcgSATQgUATgfAAQggAAgWgMg");
	this.shape_106.setTransform(264.2,76.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#DC5B4E").s().p("AgMB6IhcjzIAfAAIBKDIIBKjIIAeAAIhcDzg");
	this.shape_107.setTransform(243.7,76.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AnQClIAAlJIOhAAIAAFJg");
	this.shape_108.setTransform(253,76.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3B7062").s().p("Ag2goIBtAAIhtBRg");
	this.shape_109.setTransform(293.8,100.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#67B9A5").s().p("AiACCIAAkDIEBAAIhUCBIBUCCg");
	this.shape_110.setTransform(301.3,91.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3B7062").s().p("Ag2goIBtAAIAABRg");
	this.shape_111.setTransform(212,100.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#67B9A5").s().p("AnQDJIAAmRIOhAAIAAGRg");
	this.shape_112.setTransform(253,76.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#67B9A5").s().p("AiBCCIBViCIhViBIEDAAIAAEDg");
	this.shape_113.setTransform(204.5,91.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgJAsQgEgEgBgGIAAhDQABgGAEgEQAEgEAFAAQAGAAAFAEQADAEAAAGIAABDQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_114.setTransform(250.1,20.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgJAsQgEgEgBgGIAAhDQABgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGIAABDQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_115.setTransform(257.4,21);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgJAtQgFgFAAgGIAAhDQAAgGAFgEQAEgFAFAAQAGAAAEAFQAEAEABAGIAABDQgBAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_116.setTransform(264.7,21.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgJAtQgFgFAAgGIAAhDQAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIAABDQAAAGgFAFQgEADgGAAQgFAAgEgDg");
	this.shape_117.setTransform(272,21.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AiSAVQgJAAgGgGQgGgGAAgJQAAgHAGgHQAGgGAJAAIElAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAg");
	this.shape_118.setTransform(223.4,2.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#AE4C45").s().p("AjABnIEfjNQAzARAZAxQAWAqAABAIAAAhg");
	this.shape_119.setTransform(275.2,30.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#DC5B4E").s().p("AltDDIAAmFIDzADQgCAaAIAeQAOA7AsAVQBSAlEgABQAeAAAYAHIkgDNg");
	this.shape_120.setTransform(248.1,21.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AlzAZQgSAAgMgMQgNgNAAgQIAAgIIM9AAIAAAIQAAAQgNANQgMAMgSAAg");
	this.shape_121.setTransform(253,43.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("ABtDHIhthsIhsBsQgLAMgQAAQgQAAgLgMIglgkQgLgLAAgQQAAgQALgLIBthtIhthsQgLgLAAgQQAAgQALgMIAlgkQALgLAQAAQAQAAALALIBsBtIBthtQALgLAQAAQAQAAALALIAkAkQAMAMAAAQQAAAQgMALIhsBsIBsBtQAMALAAAQQAAAQgMALIgkAkQgLAMgQAAQgQAAgLgMg");
	this.shape_122.setTransform(492.1,78.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FFFFFF").ss(6).p("AEDEDQhrBriYAAQiXAAhrhrQhrhrAAiYQAAiXBrhrQBrhrCXAAQCYAABrBrQBrBrAACXQAACYhrBrg");
	this.shape_123.setTransform(492.1,78.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F9DD88").s().p("AkCEDQhrhrAAiYQAAiXBrhrQBrhrCXAAQCYAABrBrQBrBrAACXQAACYhrBrQhrBriYAAQiXAAhrhrg");
	this.shape_124.setTransform(492.1,78.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FFFFFF").ss(6).p("EAdUgmiI2RAAQAOg5AAg3QAAjAiIiIQiJiIjAAAQjAAAiICIQiICIAADAQAAA3AOA5I2RAAQkPAAjAC/Qi/DAAAEPMAAABBoQAAEQC/DAQDAC/EPAAMA6nAAAQEPAADAi/QC/jAAAkQMAAAhBoQAAkPi/jAQjAi/kPAAg");
	this.shape_125.setTransform(253,314.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F9DD88").s().p("EgdTAvjQkPAAjAi/Qi/jAAAkQMAAAhBoQAAkPC/jAQDAi/EPAAIWRAAQgOg5AAg3QAAjACIiIQCIiIDAAAQDAAACJCIQCICIAADAQAAA3gOA5IWRAAQEPAADAC/QC/DAAAEPMAAABBoQAAEQi/DAQjAC/kPAAg");
	this.shape_126.setTransform(253,314.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-3,0,534.7,621.5), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC5B4E").s().p("Ak/A4IAAhvIKAAAIAABvg");
	this.shape.setTransform(172.8,52.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC5B4E").s().p("Ak/A4IAAhvIJ/AAIAABvg");
	this.shape_1.setTransform(42.1,52.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC5B4E").s().p("Ak/A5IAAhxIJ/AAIAABxg");
	this.shape_2.setTransform(42.1,35.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC5B4E").s().p("Ak/A5IAAhxIJ/AAIAABxg");
	this.shape_3.setTransform(42.1,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#67B9A5").s().p("AhwBxIAAjhIDhAAIAADhg");
	this.shape_4.setTransform(193.6,24.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AxOFnIAArNMAidAAAIAALNg");
	this.shape_5.setTransform(110.3,35.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,220.6,71.8), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blurbg_invitation();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.999,0.999);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,750.5,1334), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBB2QgHgCgFgGQgFgFgDgKQgEgJAAgPIAAh0IgOAAIAAgZIARAAIAHgwIAYAAIAAAwIAeAAIAAAZIgeAAIAAB2IABAKIADAHIAFACIAGABIAJgCIAHgDIAAAUIgGAFIgHAEIgIACIgHAAQgIABgFgCg");
	this.shape.setTransform(283.7,488.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRB1IAAjpIAjAAIAADpg");
	this.shape_1.setTransform(275.2,488.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBB2QgHgCgFgGQgFgFgDgKQgEgJAAgPIAAh0IgOAAIAAgZIARAAIAHgwIAYAAIAAAwIAeAAIAAAZIgeAAIAAB2IABAKIADAHIAFACIAGABIAJgCIAHgDIAAAUIgGAFIgHAEIgIACIgHAAQgIABgFgCg");
	this.shape_2.setTransform(261,488.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVBcQgJgFgHgJQgGgKgEgPQgDgPAAgVIAAgiQAAgSADgNQACgNAFgIQAEgJAGgFQAFgFAGgDQAGgDAGAAIAKgBQAKAAAIADQAJACAGAHQAHAHAEALQAEAMAAARIAAALIgBAMIgCALIgCAJIg9AAIAAATIABAVQABAIACAFQACAFAEACQAEADAFAAIAGgCQADgBACgDIAEgIIABgMIAAgGIAdAAIAAAHQAAAbgNAMQgMAMgYAAQgMAAgJgEgAgFhEQgEACgCAFIgDAOIgBAUIAAALIAiAAIAAgEIAAgFIAAgFIAAgFQAAgSgEgJQgFgIgIAAQgEAAgDACg");
	this.shape_3.setTransform(250.1,490.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOB2QgGgBgFgDQgGgDgGgFQgFgFgFgJQgEgIgDgNQgDgNAAgRIAAhSQAAgSADgMQADgNAFgIQAEgJAHgFQAGgFAHgCQAGgDAHgBIALgBQAOAAAKAEQAKAEAGAHQAGAHADAJQACAJAAAKIgBAOIgCAOIgcAAIAAgMQAAgmgVAAQgFAAgEACQgEACgCAFQgDAEgBAIIgCASIAABpIACASQABAIADAEQACAEAEACQAEACAFAAQAGAAAEgDQAEgDADgFQADgGABgHIABgQIAAgeIgSAAIAAgXIA1AAIAAB2IgYAAIgEgWQgGANgJAFQgJAGgLAAg");
	this.shape_4.setTransform(236.7,488.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(6).p("AK5EfI1xAAQgxAAgjgjQgkgkAAgxIAAlNQAAgxAkgjQAjgkAxAAIVxAAQAxAAAkAkQAjAjAAAxIAAFNQAAAxgjAkQgkAjgxAAg");
	this.shape_5.setTransform(258.9,489);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DC5B4E").s().p("Aq4EfQgxAAgjgjQgkgkAAgxIAAlNQAAgxAkgjQAjgkAxAAIVxAAQAxAAAkAkQAjAjAAAxIAAFNQAAAxgjAkQgkAjgxAAg");
	this.shape_6.setTransform(258.9,489);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58595B").s().p("AgSCQQgHgJAAgPQAAgSAHgHQAHgIALAAQAMAAAIAIQAGAIAAARQAAAPgGAIQgIAJgMAAQgLAAgHgIgAgQA5IgGjQIAsAAIgFDQg");
	this.shape_7.setTransform(364.8,349.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("AgWByQgKgCgIgGQgHgGgEgJQgFgKAAgOIACgPIADgLIAdAAIABAVQACAJACAFQADAFAFACQAFACAFAAQAKAAAEgGQAFgFAAgHIgBgHIgDgHIgFgGIgGgIIgdgkIgMgPIgKgQIgGgRQgDgIAAgLQAAgNAFgJQAEgKAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgIgCgGQgCgGgEgCQgEgDgGAAQgFAAgDACIgGAFIgDAFIgBAHQAAAJADAHIAKAOIAhAnIAIALIAKAOIAHAQQADAKAAAKQAAALgEAKQgEAKgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgDg");
	this.shape_8.setTransform(352.2,353.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58595B").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_9.setTransform(339.9,350.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_10.setTransform(325.7,353.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_11.setTransform(313,348.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_12.setTransform(300.7,353.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIAAIAIAAIAKADQAGADAFAGQAFAFAEAIQAEAKADANQACAOAAAUIAABEQAAATgCANQgDAOgEAKQgEAIgFAGQgGAFgFADIgLADIgJABQgNAAgIgFQgJgGgFgGIABAcIAAA8gAgMh0QgFAEgDAHIAACJIADAGIAFAFIAFAFIAHABIAIgCQAEgCADgFQADgEACgIIABgVIAAhWIgBgWQgCgHgDgFQgDgFgDgCIgJgBQgHAAgFAFg");
	this.shape_13.setTransform(284.9,356.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_14.setTransform(261.6,357);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("AgVCWQgKgBgIgGQgHgEgEgJQgEgJgBgOIABgFIACgIIAdAAQABAPAFAGQAFAGALAAIAIgBQAFgCADgEQAEgDACgHQABgHAAgKIAAgkQgFAHgJAGQgIAFgNAAIgJgBIgKgDQgGgDgFgFQgGgGgEgJQgEgJgCgNQgDgOAAgTIAAg8QAAgTADgMQACgNAEgKQAEgIAGgFQAFgFAGgDIAKgDIAKAAQAIAAAGACQAGABAFAEIAIAIIAGAJIADgWIAhAAIAADaQAAATgEAPQgDAQgIALQgIALgMAGQgMAFgQAAQgLAAgKgCgAgHh4QgEACgDAFQgDAFgCAHIgBAWIAABLIABATQACAJADAEQADAFAEABIAHADIAHgCIAGgEIAFgFIADgGIAAh8QgDgIgFgEQgFgFgIAAg");
	this.shape_15.setTransform(245.8,356.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_16.setTransform(232.2,353.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_17.setTransform(217.2,353.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAEAZQAGgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_18.setTransform(201.1,353.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_19.setTransform(185,353.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AAdByIgXh+IgGgjIAAAAIgFAjIgVB+IgpAAIgljjIAoAAIAQB6IAEAvIABAAIAFgvIAWh6IAjAAIAWB6IAGAvIACAAIACgvIAPh6IAnAAIglDjg");
	this.shape_20.setTransform(159,353.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_21.setTransform(140.3,353.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAEAZQAGgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_22.setTransform(124.1,353.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DC5B4E").s().p("AgbCMQgOgFgJgKQgJgLgFgQQgEgRgBgXIAAh0QABgUADgNQADgOAHgKQAFgKAIgFQAIgGAIgDQAIgDAIAAIANgBQASAAALAEQAMAFAJAHQAHAHAEAKQADAKAAALIgBAMIgDAOIghAAIAAgIIgCgVQgBgIgEgFQgDgFgEgCQgFgBgIAAQgNAAgHAJQgIAKAAAVIAAA3QAGgHALgFQAJgEANAAQAKAAAKADQAJADAJAIQAIAIAEAMQAFAOABAVIAAAbQAAAXgFAQQgFAPgIAKQgKAKgMAEQgMAEgQAAQgQAAgNgEgAgGgBIgIADIgGAFIgFAFIAAA+QAAATAHAKQAGAJAOAAQANAAAFgJQAHgJAAgTIAAgqQgBgKgBgHQgCgHgEgEQgCgFgFAAQgFgCgFAAg");
	this.shape_23.setTransform(99.8,350.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DC5B4E").s().p("AgyCAQgRgPAAgdIAAgQIAEgRIAhAAIAAAOQAAANACAJQADAJADAGQAFAFAFADQAFACAGAAIALgCQAFgCADgEQADgEACgGQACgGAAgJIAAgfIgCgQQgBgHgDgFQgEgFgFgCQgGgDgHAAIgTAAIAAgdIATAAIAIgCQAFgCADgEQAEgEACgGQACgGAAgJIAAgeQAAgPgGgIQgHgHgLAAQgNAAgHAMQgHAMgBAXIAAAQIghAAIgDgRIgBgRQAAgLAEgLQAEgKAIgJQAIgJANgFQAMgFAQAAQARAAAOAEQANAEAIAIQAIAIAEAMQAEAMAAAOIAAASQAAAMgDAJQgDAKgFAHQgFAHgHAFIgMAHIAAACQAIADAIADQAGAFAGAHQAFAHADAKQADAKAAAOIAAATQAAAUgFANQgHAOgJAIQgJAIgOAEQgNADgNAAQggAAgRgQg");
	this.shape_24.setTransform(82.4,350.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DC5B4E").s().p("Ag7COIBNj1IhSAAIAAgmICBAAIAAAXIhNEEg");
	this.shape_25.setTransform(67,350.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAFgFAGgCIALgDIAIAAIAMABIAIAFIAIAGIAHAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAHgBIAHgEIAEgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_26.setTransform(429.9,286);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_27.setTransform(414.4,289.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("AgqBeQgQgYAAgxIAAgqQABgWADgPQADgQAFgKQAGgLAGgGQAHgHAHgCQAHgEAHgBIAMgBQAMAAAJAEQAKACAGAHQAHAGAFAJQADAKAAANIAAANIgCAMIgiAAIAAgIQAAgSgEgJQgEgKgKAAQgEAAgEADQgEACgCAGQgDAFAAAKIgCAZIAAA/IABAaQABALACAGQADAGAEADQAEADAFABIAHgCQADgBACgEIAEgKIABgPIAAgHIAkAAIAAAIQAAAigOAOQgPAPgcAAQgcAAgPgXg");
	this.shape_28.setTransform(399.6,289.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AgzBlQgLgNAAgdIAAitIAqAAIAACqQAAAQAFAFQAEAGAJAAQAGAAAGgDQAGgEAFgGIAAi4IAqAAIAADjIghAAIgEgYQgFAHgFAFQgGAGgGADIgLAFIgNABQgUAAgLgPg");
	this.shape_29.setTransform(383.7,289.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAGgFAFgCIALgDIAIAAIAMABIAIAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgDACgDAEQgDAFgBAIIgCAVIAABWIACAVQABAIADAFQADAEADACIAIACIAIgBIAGgEIAEgFIADgHIAAiIQgDgHgFgFQgFgFgIAAg");
	this.shape_30.setTransform(366.8,286);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_31.setTransform(351,289.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_32.setTransform(337.4,289.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAGQAFAEAEAJQAEAKADAOQACANAAATIAABFQAAATgCAOQgDAOgEAIQgEAKgFAFQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAFIAFAEIAHACIAIgCQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_33.setTransform(322.1,293.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("AgzBlQgLgNAAgdIAAitIAqAAIAACqQAAAQAFAFQAEAGAJAAQAGAAAGgDQAGgEAFgGIAAi4IAqAAIAADjIghAAIgEgYQgFAHgFAFQgGAGgGADIgLAFIgNABQgUAAgLgPg");
	this.shape_34.setTransform(297.9,289.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_35.setTransform(281.6,289.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("AgVCOIAAhfIg5i8IArAAIAjCIIABAAIAiiIIAsAAIg6C8IAABfg");
	this.shape_36.setTransform(265.8,286.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58595B").s().p("AgSCQQgHgJAAgPQAAgSAHgHQAHgIALAAQAMAAAIAIQAGAIAAARQAAAPgGAIQgIAJgMAAQgLAAgHgIgAgQA5IgGjQIAsAAIgFDQg");
	this.shape_37.setTransform(237.6,286);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_38.setTransform(226.2,289.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_39.setTransform(211.2,289.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#58595B").s().p("AgCCPQgIgCgHgHQgFgGgEgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgJAAgHgCg");
	this.shape_40.setTransform(198.1,286.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFACQAFACAFABQAKgBAEgFQAFgFAAgHIgBgHIgDgHIgFgHIgGgHIgdglIgMgNIgKgRIgGgRQgDgJAAgKQAAgNAFgKQAEgJAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAGIgBAIQAAAHADAHIAKAPIAhAmIAIAMIAKANIAHARQADAJAAAKQAAAMgEALQgEAJgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgCg");
	this.shape_41.setTransform(185.5,289.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFABgDAEQgDAEgCAHQgCAHAAAJIAAALIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_42.setTransform(170.3,289.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("AA+B0IAAitIgBgNIgDgIQgDgDgDgBIgJgCQgGAAgFAFQgGAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAFgFIAMgJIANgEIAMgCQANAAAJAHQAJAGAFANQAFgHAFgFIAMgIIAMgEIANgCQATAAAMAPQALAOgBAcIAACug");
	this.shape_43.setTransform(150.7,289.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("AgdA4IARhvIAqAAIgZBvg");
	this.shape_44.setTransform(126.2,300.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("AAdByIgXh+IgGgjIAAAAIgFAjIgVB+IgpAAIgljjIAoAAIAQB6IAEAvIABAAIAFgvIAWh6IAjAAIAWB6IAGAvIACAAIACgvIAPh6IAnAAIglDjg");
	this.shape_45.setTransform(111.2,289.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_46.setTransform(92.2,289.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("AAiCOIgYiJIgIg6IgCAAIgHA6IgZCJIgqAAIgqkbIAqAAIATCrIACAoIAEAAIAEgtIAeimIAiAAIAdCmIAEAtIAEAAIACgoIARirIApAAIgnEbg");
	this.shape_47.setTransform(72.1,286.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#AE4C45").s().p("ABfESQgJgDgEgIQgFgIACgJIAeh1QACgJgFgIQgEgIgJgCIjtg7QgJgCgFgHQgFgHAAgJIABgFIAgiFIDJiZIAAABIhJEvICVAmQAJADAFAIQAFAIgDAJIgpCgQgCAJgIAFQgFADgGAAIgGAAg");
	this.shape_48.setTransform(260,62.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#AE4C45").s().p("AAABaIh0hGQgEgCADgHQAFgLAAgHIgBgIIALgIIBXA0QAIAFAIgDQAJgCAFgIIA/hnQAFgIAJgCQAJgCAIAFQAIAFACAJQACAIgFAIIhWCOQgFAIgJACIgGABQgGAAgEgEg");
	this.shape_49.setTransform(279.4,36.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DC5B4E").s().p("AhgBhQgngoAAg5QAAg4AngoQAogoA4AAQA5AAAoAoQAnAoAAA4QAAA5gnAoQgoAng5AAQg4AAgogng");
	this.shape_50.setTransform(262.4,13.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DC5B4E").s().p("AgzCAIA3jmIhfgGQgJAAgHAGQgHAGAAAKIgHB4QAAAJgHAGQgHAHgJgBQgKAAgGgHQgGgHAAgJIAJilQABgKAHgGQAGgGAKAAIChAJQADgBA7ANIA6AOQAJACAEAGQAIAKgDAMIg8D2g");
	this.shape_51.setTransform(250.4,44.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DC5B4E").s().p("AAABaIh0hGQgEgCADgHQAFgLAAgHQAAgIgEgLQAAgCgBgBQAAgBAAgBQABAAAAAAQAAAAABAAIBkA8QAIAFAIgDQAJgCAFgIIA/hnQAFgIAJgCQAJgCAIAFQAIAFACAJQACAIgFAIIhWCOQgFAIgJACIgGABQgGAAgEgEg");
	this.shape_52.setTransform(279.4,36.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#AE4C45").s().p("AAeBZIiUhMQgIgEgDgJQgDgHAEgJQAEgIAJgDQAJgDAIAEIBsA2QAJAEAIgDQAJgCAEgJIAbg1QAag3ADAAQABAAAFAGQAFAIAFADIANAHQAGADAAACQAAAEg9B0IgKAUQgEAIgJADIgHABQgFAAgFgCg");
	this.shape_53.setTransform(232.4,74.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DC5B4E").s().p("AgWCYIgLgEQgFgCgFgGQgGgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAFgJQAEgJAGgFQAFgFAGgCIAKgDIAJAAIAMABIAJAFIAIAGIAFAHIgBgdIAAg9IAqAAIAAEtIghAAIgDgVIgHAIIgJAIIgLAFQgFACgIAAgAgHgwQgFACgCAEQgDAFgBAIIgCAVIAABWIACAVQABAIADAFQACAEAFACIAHACIAIgBIAFgEIAFgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_54.setTransform(384.1,177.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DC5B4E").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_55.setTransform(368.5,181.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DC5B4E").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_56.setTransform(353.5,181.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DC5B4E").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_57.setTransform(342.1,177);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DC5B4E").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_58.setTransform(330.1,181.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DC5B4E").s().p("AgqBeQgPgYAAgxIAAgrQAAgVADgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAHgDAHgBIAMgBQALAAAKAEQAKACAGAHQAIAGADAKQAFAJAAAMIgBAPIgCALIgiAAIAAgJQAAgQgEgLQgEgJgJAAQgFAAgDACQgEADgDAFQgCAHgBAJIgCAZIAABAIABAZQABALACAGQADAGAEAEQAEADAFAAIAHgCQADgCACgDIAEgKIABgPIAAgHIAkAAIAAAJQAAAggOAPQgOAPgdAAQgcAAgPgXg");
	this.shape_59.setTransform(315.4,181.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DC5B4E").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_60.setTransform(300.4,181.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DC5B4E").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_61.setTransform(287,181.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DC5B4E").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_62.setTransform(264.8,185.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DC5B4E").s().p("AgVCWQgKgBgIgGQgHgEgEgJQgEgJgBgOIABgFIACgIIAdAAQABAPAFAGQAFAGALAAIAIgBQAFgBADgFQAEgDACgHQABgHAAgKIAAgkQgFAHgJAGQgIAFgNAAIgJgBIgKgDQgGgDgFgFQgGgGgEgJQgEgJgCgNQgDgOAAgTIAAg8QAAgTADgMQACgNAEgKQAEgIAGgFQAFgFAGgDIAKgDIAKAAQAIAAAGACQAGACAFADIAIAIIAGAJIADgWIAhAAIAADaQAAATgEAQQgDAPgIALQgIALgMAGQgMAFgQAAQgLAAgKgCgAgHh4QgEACgDAFQgDAFgCAHIgBAWIAABLIABATQACAJADAEQADAFAEABIAHADIAHgCIAGgEIAFgFIADgGIAAh8QgDgIgFgEQgFgFgIAAg");
	this.shape_63.setTransform(249,185);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DC5B4E").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_64.setTransform(235.3,181.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DC5B4E").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_65.setTransform(220.4,181.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#DC5B4E").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAEAZQAGgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_66.setTransform(204.2,181.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DC5B4E").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_67.setTransform(188.2,181.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#DC5B4E").s().p("AAdByIgXh+IgGgjIAAAAIgFAjIgVB+IgpAAIgljjIAoAAIAQB6IAEAvIABAAIAFgvIAWh6IAjAAIAWB6IAGAvIACAAIACgvIAPh6IAnAAIglDjg");
	this.shape_68.setTransform(162.1,181.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#DC5B4E").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_69.setTransform(143.4,181.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#DC5B4E").s().p("AAiCOIhDi4IgCAAIACAQIACAVIABAaIAAAlIAABUIgmAAIAAkbIAjAAIBDC9IABAAIgBgPIgCgSIAAgXIgBgdIAAhoIAmAAIAAEbg");
	this.shape_70.setTransform(126.4,178.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(6).p("EAdUgjBI2RAAQAOg5AAg3QAAjAiIiIQiIiIjBAAQi/AAiJCIQiICIAADAQAAA3AOA5I2RAAQkPAAjAC/Qi/DAAAEPMAAAA6mQAAEQC/DAQDAC/EPAAMA6nAAAQEPAADAi/QC/jAAAkQMAAAg6mQAAkPi/jAQjAi/kPAAg");
	this.shape_71.setTransform(253,289.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F9DD88").s().p("EgdTAsCQkPAAjAi/Qi/jAAAkQMAAAg6mQAAkPC/jAQDAi/EPAAIWRAAQgOg5AAg3QAAjACIiIQCJiIC/AAQDBAACICIQCICIAADAQAAA3gOA5IWRAAQEPAADAC/QC/DAAAEPMAAAA6mQAAEQi/DAQjAC/kPAAg");
	this.shape_72.setTransform(253,289.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-3,0,512.1,574.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBB2QgHgCgFgGQgFgFgDgKQgEgJAAgPIAAh0IgOAAIAAgZIARAAIAHgwIAYAAIAAAwIAeAAIAAAZIgeAAIAAB2IABAKIADAHIAFACIAGABIAJgCIAHgDIAAAUIgGAFIgHAEIgIACIgHAAQgIABgFgCg");
	this.shape.setTransform(106.5,28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRB1IAAjpIAjAAIAADpg");
	this.shape_1.setTransform(98,28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBB2QgHgCgFgGQgFgFgDgKQgEgJAAgPIAAh0IgOAAIAAgZIARAAIAHgwIAYAAIAAAwIAeAAIAAAZIgeAAIAAB2IABAKIADAHIAFACIAGABIAJgCIAHgDIAAAUIgGAFIgHAEIgIACIgHAAQgIABgFgCg");
	this.shape_2.setTransform(83.8,28.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVBcQgJgFgHgJQgGgKgEgPQgDgPAAgVIAAgiQAAgSADgNQACgNAFgIQAEgJAGgFQAFgFAGgDQAGgDAGAAIAKgBQAKAAAIADQAJACAGAHQAHAHAEALQAEAMAAARIAAALIgBAMIgCALIgCAJIg9AAIAAATIABAVQABAIACAFQACAFAEACQAEADAFAAIAGgCQADgBACgDIAEgIIABgMIAAgGIAdAAIAAAHQAAAbgNAMQgMAMgYAAQgMAAgJgEgAgFhEQgEACgCAFIgDAOIgBAUIAAALIAiAAIAAgEIAAgFIAAgFIAAgFQAAgSgEgJQgFgIgIAAQgEAAgDACg");
	this.shape_3.setTransform(72.9,30.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOB2QgGgBgFgDQgGgDgGgFQgFgFgFgJQgEgIgDgNQgDgNAAgRIAAhSQAAgSADgMQADgNAFgIQAEgJAHgFQAGgFAHgCQAGgDAHgBIALgBQAOAAAKAEQAKAEAGAHQAGAHADAJQACAJAAAKIgBAOIgCAOIgcAAIAAgMQAAgmgVAAQgFAAgEACQgEACgCAFQgDAEgBAIIgCASIAABpIACASQABAIADAEQACAEAEACQAEACAFAAQAGAAAEgDQAEgDADgFQADgGABgHIABgQIAAgeIgSAAIAAgXIA1AAIAAB2IgYAAIgEgWQgGANgJAFQgJAGgLAAg");
	this.shape_4.setTransform(59.5,28.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(6).p("AK5EfI1xAAQgxAAgjgjQgkgkAAgxIAAlNQAAgxAkgjQAjgkAxAAIVxAAQAxAAAkAkQAjAjAAAxIAAFNQAAAxgjAkQgkAjgxAAg");
	this.shape_5.setTransform(81.7,28.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DC5B4E").s().p("Aq4EfQgxAAgjgjQgkgkAAgxIAAlNQAAgxAkgjQAjgkAxAAIVxAAQAxAAAkAkQAjAjAAAxIAAFNQAAAxgjAkQgkAjgxAAg");
	this.shape_6.setTransform(81.7,28.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-3,-3,169.4,63.4), null);


(lib.menu_mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(65,65,65,0.008)").s().p("AlwFxQiaiZABjYQgBjYCaiYQCYiZDYAAQDYAACaCZQCYCYABDYQgBDYiYCZQiaCZjYABQjYgBiYiZg");
	this.shape.setTransform(52.2,52.2,0.999,0.999,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.menu_mask, new cjs.Rectangle(0,0,104.4,104.4), null);


(lib.gotoNext1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Eg5WAScMAAAgk3MBytAAAMAAAAk3g");
	this.shape.setTransform(367.1,118);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gotoNext1, new cjs.Rectangle(0,0,734.2,236.1), null);


(lib.goingIntoArena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLB2QgGgBgHgDQgGgDgGgFQgGgFgFgJQgEgIgDgNQgDgNAAgRIAAhSQAAgSADgMQADgNAFgIQAEgJAGgFQAGgFAHgCQAGgDAGgBIALgBIAMABQAGABAHACQAGADAGAFQAGAFAFAIQAEAJADANQADAMAAASIAABSQAAARgDANQgDAMgEAJQgFAIgGAGQgGAFgHADQgGADgGABIgMABgAgIhYQgEACgCAFQgDAEgBAIIgCASIAABqIACASQABAHADAEQACAFAEABQAEACAEAAQAGAAAEgCQADgBADgFQACgEACgHIABgSIAAhqIgBgSQgCgIgCgEQgDgFgDgCQgEgCgGAAQgEAAgEACg");
	this.shape.setTransform(100.1,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOB2QgGgBgFgDQgGgDgGgFQgFgFgFgJQgEgIgDgNQgDgNAAgRIAAhSQAAgSADgMQADgNAFgIQAEgJAHgFQAGgFAHgCQAGgDAHgBIALgBQAOAAAKAEQAKAEAGAHQAGAHADAJQACAJAAAKIgBAOIgCAOIgcAAIAAgMQAAgmgVAAQgFAAgEACQgEACgCAFQgDAEgBAIIgCASIAABpIACASQABAIADAEQACAEAEACQAEACAFAAQAGAAAEgDQAEgDADgFQADgGABgHIABgQIAAgeIgSAAIAAgXIA1AAIAAB2IgYAAIgEgWQgGANgJAFQgJAGgLAAg");
	this.shape_1.setTransform(86,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5).p("ALhE1I3BAAQgyAAgjgjQgjgjAAgyIAAl5QAAgyAjgjQAjgjAyAAIXBAAQAyAAAjAjQAjAjAAAyIAAF5QAAAygjAjQgjAjgyAAg");
	this.shape_2.setTransform(95.5,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC5B4E").s().p("ArgE1QgyAAgjgjQgjgjAAgyIAAl5QAAgyAjgjQAjgjAyAAIXBAAQAyAAAjAjQAjAjAAAyIAAF5QAAAygjAjQgjAjgyAAg");
	this.shape_3.setTransform(95.5,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.goingIntoArena, new cjs.Rectangle(0,-2.5,186,66.9), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("Eg9bBoOMAAAjQbMB63AAAMAAADQbgEAP1BRNQgGAGAAAJQAAAIAGAGQAGAHAJAAIAdAAIAADMQg0BDgbBPQgdBTAABYQAADYCZCZQCZCZDZABQDYgBCZiZQCZiZAAjYQAAjZiZiYQiZiZjYAAQhXAAhSAbQgDgOAAgMIAWAAQAJAAAGgHQAGgGAAgIQAAgJgGgGQgGgGgJgBIkmAAQgJABgGAGg");
	this.shape.setTransform(386.2,667);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(-7,0,786.5,1334), null);


(lib.Path_92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#153123").s().p("AFgCYQifgDjWguQjYguiRg+QiSg/AJgrQAJgqCfACQCfACDWAuQDYAvCRA+QCSA/gJAqQgJApiOAAIgRAAg");
	this.shape.setTransform(52,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_92, new cjs.Rectangle(0,0,104.1,30.4), null);


(lib.Path_91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#153123").s().p("A4gGuQk9gaiyg3Qi4g5gIhRQgHhQCqhbQClhWEzhUQKKiyOmhYQOlhXKgA2QE9AZCyA4QC4A5AIBQQAHBRiqBaQilBXkzBUQqKCyumBXQpAA3ncAAQkoAAkBgVg");
	this.shape.setTransform(225.6,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_91, new cjs.Rectangle(0,-0.1,451.3,90.1), null);


(lib.Path_90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#61763D").s().p("AleCDQiagIgHgsQgHgsCRg1QCRg2DVghQDTggCbAIQCbAHAGAsQAHAsiRA1QiRA2jVAhQirAaiHAAIg8gBg");
	this.shape.setTransform(51.3,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_90, new cjs.Rectangle(0,0.1,102.6,26.4), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414142").s().p("Ak5BsQiKgDgFgjQgFgiCCgsQCCgtC9gdQC9gdCJAEQCKADAFAjQAGAiiDAsQiCAti9AdQimAah/AAIghgBg");
	this.shape.setTransform(45.8,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0.1,0,91.5,21.8), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414142").s().p("Ak5BsQiKgDgFgjQgFgiCCgsQCCgsC9geQC9gdCJAEQCKADAFAjQAGAiiDAsQiCAti9AdQimAah/AAIghgBg");
	this.shape.setTransform(45.8,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0.1,0,91.5,21.8), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ax1DOQAMhABngiQBTgbCXgKQA3gEAigtQAUgZAlhFQApg9A9gfQBUgqCNABQCNABBoArQBMAgBLBBQAqAjBIBAQA+AwBDAGQBrAJCyghQCvgiBRAJQBoALBjBPQAyAnAcAlg");
	this.shape.setTransform(114.2,20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,228.5,41.2), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ar/CLQAIgrBGgYQA3gRBmgIQAlgCAXgeQANgRAZguQA7haChABQCeAABsBeIBMBDQArAgAsAEQBIAGB4gXQB2gWA2AFQBGAJBDA0QAhAbATAZg");
	this.shape.setTransform(76.8,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,153.7,27.7), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2xEHQAPhRCEgsQBpgiDBgOQBHgGArg4QAaghAvhXQA0hOBPgoQBqg0C0AAQC0ABCGA3QBhApBgBTQA0AtBcBSQBQA9BVAHQCJANDkgsQDfgrBnALQCFAPB/BlQA/AyAkAvg");
	this.shape_1.setTransform(145.8,26.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,291.7,52.6), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A9EFQQAShoCpg3QCGgsD4gSQBZgHA4hJQAhgqA7huQBDhlBkgyQCIhDDlABQDmAACrBHQB9A0B6BqIBfBWQA3AyAiAbQBnBNBsAKQBxAKCBgOQBSgJCOgbQCTgdA/gHQBzgOBaAJQCrAUChCAQBQBAAvA8g");
	this.shape_1.setTransform(186.1,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,372.2,67.1), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221E1F").s().p("ApfDHQhMAAg1g1Qg1g0AAhMIAAgjQAAhLA1g1QA1g2BMAAIV1AAIAAGOg");
	this.shape.setTransform(79,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,158,39.9), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3).p("AMXlDI4sAAIizFDICzFEIYsAAICylEg");
	this.shape_2.setTransform(98.6,33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221E1F").s().p("AsWFEIiylEICylDIYtAAICyFDIiyFEg");
	this.shape_3.setTransform(98.6,33.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,197.2,67.9), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC5435").s().p("AgaFEIizlEICzlDIA1AAICzFDIizFEg");
	this.shape_2.setTransform(20.6,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,41.1,64.9), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E5E5E").s().p("AipCHIAAkNIFTAAIAAENg");
	this.shape.setTransform(17,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,33.9,26.9), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E5E5E").s().p("AipCHIAAkNIFTAAIAAENg");
	this.shape_1.setTransform(17,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,33.9,27), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E5E5E").s().p("AgzChIgohIIhTAAIgWglIBXgxQAPAbAaAQQAbAQAgAAQAvAAAigiQAighAAgwQgBgfgPgbIBVgxIAWAkIgqBHIAqBHIgqBHIhSAAIgqBIg");
	this.shape.setTransform(19.7,16.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,39.3,32.2), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E5E5E").s().p("AipCHIAAkNIFTAAIAAENg");
	this.shape_1.setTransform(17,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,33.9,27), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E5E5E").s().p("Ag2A6QgVgNgNgWIAagPQAJAPAOAJQAQAJASAAQAaAAATgTQATgTAAgaQAAgRgJgPIAagQQANAWAAAaQAAAngcAcQgbAcgnAAQgaAAgXgOg");
	this.shape.setTransform(8.9,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,17.8,14.3), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E5E5E").s().p("AipCHIAAkNIFTAAIAAENg");
	this.shape_4.setTransform(17,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,33.9,26.9), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E5E5E").s().p("AibgOQBKgPBBgnQA/gnAvg6IA+CCQgtBHhCA0QhBA0hRAag");
	this.shape.setTransform(15.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,31.1,33.2), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6).p("ARmAAQAADlhYDRQhWDKibCcQicCcjLBWQjRBYjlAAQjkAAjRhYQjLhWibicQicichWjKQhYjRAAjlQAAjkBYjSQBWjKCcibQCbicDLhWQDRhYDkAAQDlAADRBYQDLBWCcCcQCbCbBWDKQBYDSAADkg");
	this.shape.setTransform(149.5,137.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am1QNQjLhVibicQicichWjKQhYjRAAjlQAAjkBYjSQBWjKCcibQCbicDLhWQDRhYDkAAQDlAADRBYQDLBWCbCcQCcCbBWDKQBYDSAADkQAADlhYDRQhWDKicCcQibCcjLBVQjRBZjlAAQjkAAjRhZg");
	mask.setTransform(149.5,137.9);

	// Layer 3
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.515,0.515);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(31.3,19.7,236.3,236.5), null);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#080405").s().p("Ap0KVQjvhnici2QCeCRDWBQQDeBSD1AAQDkAADShJQDKhGCch/QCciABVikQBZirAAi7QAAiRg3iKQg0iEhjhzQCJB9BKCbQBNCgAACuQAAC7hZCrQhVClicCAQicB/jKBGQjSBIjkABQkYAAj2hrg");
	this.shape_5.setTransform(102.4,76.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,204.8,153.5), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8D58D").s().p("AsRXPQjKhGiciAQich/hWilQhYirAAi8QAAj1CUjTQCPjMD2h8QklmWhGhpQhPh2g3i2QhCjcBNgsQBSgvCLCMQB7B7BqDHQA7BvA6DBQApCIAjCbQDPhGDhAAQDlAADQBIQBJlmAGiyQABgegFinQgFiiAEhlQANlMBwgTQA+gKA9AjQA7AjAvBHQBnCcgIDbQgHC/h6E6QhQDLhyDeQB4BEBeBYQBdhpBzgjQCGgqCgA6QBpAnCUCCQCIB6A0BZQAxBSgnCIQgoCLhqBpQhhBficghQh9gahhhUQgugogMgvIABATQAAC8hZCrQhVClicB/QicCAjKBGQjRBIjlAAQjlAAjRhIgAMGItIACAUQACgRAHgPIAGgMg");
	this.shape_1.setTransform(155.4,163.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(8,8,294.9,311.9), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A5EJBQhKAAg1g1Qg1g1AAhLIAAsXQAAhLA1g1QA1g1BKAAMAyJAAAQBLAAA1A1QA0A1AABLIAAMXQAABLg0A1Qg1A1hLAAg");
	this.shape_1.setTransform(187.5,61.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(9,4,357.1,115.4), null);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A5EJBQhKAAg1g1Qg1g1AAhLIAAsXQAAhLA1g1QA1g1BKAAMAyJAAAQBLAAA1A1QA0A1AABLIAAMXQAABLg0A1Qg1A1hLAAg");
	this.shape_1.setTransform(187.5,61.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(9,4,357.1,115.4), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A5EJBQhKAAg1g1Qg1g1AAhLIAAsXQAAhLA1g1QA1g1BKAAMAyJAAAQBLAAA1A1QA0A1AABLIAAMXQAABLg0A1Qg1A1hLAAg");
	this.shape_2.setTransform(187.5,61.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(9,4,357.1,115.4), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A5EJBQhKAAg1g1Qg1g1AAhLIAAsXQAAhLA1g1QA1g1BKAAMAyJAAAQBLAAA1A1QA0A1AABLIAAMXQAABLg0A1Qg1A1hLAAg");
	this.shape_2.setTransform(187.5,61.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(9,4,357.1,115.4), null);


(lib.Path_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("A5EJBQhKAAg1g1Qg1g1AAhLIAAsXQAAhLA1g1QA1g1BKAAMAyJAAAQBLAAA1A1QA0A1AABLIAAMXQAABLg0A1Qg1A1hLAAg");
	this.shape_6.setTransform(187.5,61.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(9,4,357.1,115.4), null);


(lib.Path_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("A1FFEIkwlEIEwlDMAqKAAAIExFDIkxFEg");
	this.shape_2.setTransform(165.4,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_3, new cjs.Rectangle(0,0,330.8,64.8), null);


(lib.Path_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AmSFEIExlEIkxlDIH0AAIExFDIkxFEg");
	this.shape_3.setTransform(40.3,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_3, new cjs.Rectangle(0,0,80.6,64.8), null);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AmSFEIExlEIkxlDIH1AAIEvFDIkvFEg");
	this.shape_3.setTransform(40.3,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,80.5,64.8), null);


(lib.Path_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AhhFEIkwlEIEwlDIHzAAIkwFDIEwFEg");
	this.shape_7.setTransform(40.2,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0,0,80.5,64.8), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AhhFEIkxlEIExlDIHzAAIkwFDIEwFEg");
	this.shape_1.setTransform(40.3,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,80.5,64.8), null);


(lib.deeper_menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUCAIjNjXQgNgOAIgSQAIgSATAAIGXAAQAUAAAIASQAHATgNANIjMDXQgJAKgNAAQgMAAgIgKg");
	this.shape.setTransform(52.8,48.7,0.999,0.999,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDD7B").s().p("AlIFIQiIiHAAjBQAAi/CIiJQCIiIDAAAQDAAACICIQCICJAAC/QAADBiICHQiICIjAAAQjAAAiIiIg");
	this.shape_1.setTransform(52.2,52.2,0.999,0.999,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlwFxQiaiZABjYQgBjYCaiYQCYiZDYAAQDYAACaCZQCYCYABDYQgBDYiYCZQiaCZjYABQjYgBiYiZg");
	this.shape_2.setTransform(52.2,52.2,0.999,0.999,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.deeper_menu, new cjs.Rectangle(0,0,104.4,104.4), null);


(lib.closeMessage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABtDHIhthsIhsBsQgLAMgQAAQgQAAgLgMIglgkQgLgLAAgQQAAgQALgLIBthtIhthsQgLgLAAgQQAAgQALgMIAlgkQALgLAQAAQAQAAALALIBsBtIBthtQALgLAQAAQAQAAALALIAkAkQAMAMAAAQQAAAQgMALIhsBsIBsBtQAMALAAAQQAAAQgMALIgkAkQgLAMgQAAQgQAAgLgMg");
	this.shape.setTransform(36.6,36.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(6).p("AEDEDQhrBriYAAQiXAAhrhrQhrhrAAiYQAAiXBrhrQBrhrCXAAQCYAABrBrQBrBrAACXQAACYhrBrg");
	this.shape_1.setTransform(36.6,36.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9DD88").s().p("AkCEDQhrhrAAiYQAAiXBrhrQBrhrCXAAQCYAABrBrQBrBrAACXQAACYhrBrQhrBriYAAQiXAAhrhrg");
	this.shape_2.setTransform(36.6,36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.closeMessage, new cjs.Rectangle(-3,-3,79.3,79.3), null);


(lib.backToparent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWC1IiFiGQgUgTAAgcQAAgbAUgTICFiHQATgSAbAAQAaAAATASQATATAAAbQAAAbgTASIhJBJQgHAHAAAKQAAALAHAHIBJBJQATATAAAaQAAAbgTASQgTATgaAAQgbAAgTgTg");
	this.shape.setTransform(33.3,36.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(6).p("AEDEDQhrBsiYAAQiXAAhrhsQhrhrAAiYQAAiXBrhrQBrhsCXAAQCYAABrBsQBrBrAACXQAACYhrBrg");
	this.shape_1.setTransform(36.6,36.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9DD88").s().p("AkCEDQhrhrAAiYQAAiXBrhrQBrhrCXAAQCYAABrBrQBrBrAACXQAACYhrBrQhrBriYAAQiXAAhrhrg");
	this.shape_2.setTransform(36.6,36.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backToparent, new cjs.Rectangle(-3,-3,79.3,79.3), null);


(lib.arena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF5046").s().p("Ag0BxIgTgLIALgYIAJAHIAJAGIAMAFQAMAFAPAAQAZAAAKgNQAHgKAAgLQAAgKgCgGQgEgLgMgJIgMgHIgbgPQgRgIgIgIQgIgIgFgHQgJgQAAgZQAAgZASgSQASgSAdAAQASAAAPAEQAOAFAIAHIgGAYQgVgQgbAAQgPAAgKALQgJALAAARQAAAIADAHQAEALAOAKIAOAIIAbAOIAOAHIALAJQARASABAcQgBAcgSATQgUATgfAAQggAAgWgMg");
	this.shape.setTransform(63.5,76.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF5046").s().p("AgMB6IhcjzIAfAAIBKDIIBKjIIAeAAIhcDzg");
	this.shape_1.setTransform(43,76.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkWCrQhRg8gvhYQgyhagHhnIOeAAQgGBngxBaQgwBYhQA8g");
	this.shape_2.setTransform(52.3,76.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3EBCA4").s().p("AjoDJQhpg+g/hpQg/hrgBh/IOhAAQAAB/hABrQg+BphpA+g");
	this.shape_3.setTransform(52.3,76.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAtQgEgFgBgGIAAhDQABgGAEgEQAEgFAFAAQAGAAAFAFQADAEAAAGIAABDQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_4.setTransform(49.4,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAsQgFgEAAgHIAAhCQAAgGAFgEQAEgFAFAAQAGAAAEAFQAEAEAAAGIAABCQAAAHgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_5.setTransform(56.7,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAsQgFgEAAgGIAAhDQAAgGAFgEQAEgFAFABQAGgBAEAFQAEAEABAGIAABDQgBAGgEAEQgEAEgGABQgFgBgEgEg");
	this.shape_6.setTransform(64,21.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAsQgFgEAAgGIAAhDQAAgGAFgEQAEgFAFABQAGgBAEAFQAEAEABAGIAABDQgBAGgEAEQgEAEgGABQgFgBgEgEg");
	this.shape_7.setTransform(71.3,21.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiSAVQgJAAgGgGQgGgHAAgIQAAgIAGgGQAGgGAJAAIElAAQAJAAAGAGQAGAGAAAIQAAAIgGAHQgGAGgJAAg");
	this.shape_8.setTransform(22.6,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BD4440").s().p("AjABnIEejNQA0ARAZAwQAWArAABAIAAAhg");
	this.shape_9.setTransform(74.5,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EF5046").s().p("AltDDIAAmFIDzADIAGA4QAPA7ArAUQBSAmEgAAQAcAAAaAIIkfDNg");
	this.shape_10.setTransform(47.3,21.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlzAZQgRAAgOgNQgMgMAAgQIAAgIIM9AAIAAAIQAAAQgMAMQgNANgSAAg");
	this.shape_11.setTransform(52.3,43.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFDD7B").s().p("AlIFIQiIiHAAjBQAAi/CIiJQCJiIC/AAQDBAACHCIQCJCJAAC/QAADBiJCHQiHCIjBAAQi/AAiJiIg");
	this.shape_12.setTransform(52.3,56.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AlwFxQiZiZAAjYQAAjYCZiYQCYiZDYAAQDZAACZCZQCYCYAADYQAADYiYCZQiZCZjZABQjYgBiYiZg");
	this.shape_13.setTransform(52.3,56.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arena, new cjs.Rectangle(0,0,104.5,108.6), null);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiPigQAOgRASgKQAzgaBAAlQBBAmAoBOQApBOgHBLQgHBKg0AbIgMAFQidihg6jGg");
	this.shape.setTransform(-129.3,102);

	this.instance = new lib.Path_1_4();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,79.4,1,1,0,0,0,102.4,76.8);
	this.instance.alpha = 0.262;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E27B39").s().p("ABUCaIhRjPIgUgpQgUglgWghQgSgcgPgUIgNgSIAQAPQAUAVATAYQAYAfAYAlIAsBUIAhBYQALAkAKAtQAJAwABAgQgIgfgOgug");
	this.shape_1.setTransform(-95.6,-43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E27B39").s().p("AhMFDIAJiJIAIg+IALhBIAOhCQAHghAJghIASg/QASg9ASgzIAqhqIggBuIgfBwIgPBAIg8E2IgQBxIAAggg");
	this.shape_2.setTransform(25.3,-57.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhxDkQg8gfgHhYQgIhYAxhcQAxhdBNgrQBNgrA7AgQApAVASA0QhUDZjHChg");
	this.shape_3.setTransform(54.6,103.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("ABeA9QgagIgXgOQgUgNgVgVIgRgTIgKgOIgEALIgLARQgNARgRANQgJAGgKAFQgJAFgKADQgSAHgWADIgVADIgVAAQgWAAgTgJQgTgJgPgPQgQgQgJgPQAKAPARAPQAQAOASAHQATAIAUgBIAUgBIAUgCQAVgEASgHIATgIIAQgLQARgMALgPQAGgHAFgKQAEgKACgIIADgLIAVAeQAFAJALAKQARARAWAPQAWANAZAIQAZAHAZgCIANgBIAMgCQANgDAMgEQAZgHAUgQQAVgRAMgWQAFgKAEgOQAEgNABgNQAAAZgLAbQgLAYgVARQgTAQgbALIgaAHIgNACIgNACIgLAAQgVAAgWgFg");
	this.shape_4.setTransform(-49,119.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAsQgPgQgDgYQgCgWAMgTQANgSAUgCQASgCAQAQQAQAQACAXQACAXgMATQgNASgUACIgEAAQgQAAgOgOg");
	this.shape_5.setTransform(-91.7,56.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#411513").s().p("AgSCvQg8gGgkg4Qglg5AIhHQAIhIAwgvQAwgvA6AHQA8AHAlA4QAkA3gIBIQgIBIgvAvQgqApgzAAIgOgBg");
	this.shape_6.setTransform(-96.7,61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnAwQgQgUAAgcQAAgbAQgUQARgUAWAAQAXAAARAUQAQAUAAAbQAAAcgQAUQgRAUgXAAQgWAAgRgUg");
	this.shape_7.setTransform(14.2,52.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#411513").s().p("AhOCWQg3gsgQhLQgPhKAgg+QAhg+A+gNQA9gNA3AsQA3AsAPBLQAQBKghA+QggA/g+ANQgOACgNAAQguAAgrgig");
	this.shape_8.setTransform(11.5,59.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E27B39").s().p("ABNBzQgSgEgNgLQgJgHgGgJIgDgHIAEAGQAGAIAKAGQANAIARACQATADAWgGQAZgGAEgXQAEgTgLghQgHgWgQgfIgbgvIgJgKIgFgDQgEgEgHgBQgNgDgOACQgYAFgdAQQgqAXgqAoQgfAegTAbIgPAYIAMgaQAFgLANgSQAMgRAOgRQARgTAUgRQAZgVAWgOQAggSAagGQATgDAQAEQATAEAOAPIAFAHIAMAVIAPAcQAPAfAIAaQAKAkgGAYQgEASgLAIQgGAGgHACIgGACIgGABQgMACgLAAQgLAAgLgCg");
	this.shape_9.setTransform(93.8,49.4);

	this.instance_1 = new lib.CompoundPath_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,-0.2,1,1,0,0,0,155.5,163.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.4,-165.1,330,347);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA9QgGgCgEgDQgDgDgDgFQgCgFAAgIIABgIIABgFIAQAAIAAALIADAHQABACADACIAFAAQAFABACgDQACgDAAgEIAAgDIgCgEIgCgDIgDgFIgQgTIgGgHIgFgIIgDgKQgCgEAAgGQAAgHADgFQACgEAEgEQAEgDAGgDQAFgBAFAAQAGAAAGABQAFACAEAEQAEADACAFQACAEAAAGIgBAJIgCAGIgPAAIAAgKQgBgFgBgCQgBgDgCgCQgCgBgEgBIgEABIgDACIgBAEIgBAEQAAAEACADIAGAIIAQAUIAFAGIAFAIIADAJQACAEAAAGQAAAGgCAFQgCAFgEAEQgEAEgGACQgFACgHAAQgGAAgFgBg");
	this.shape.setTransform(44.9,59.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABMQgFgCgDgDQgEgDgBgHQgDgGAAgJIAAhLIgJAAIAAgQIAMAAIAEgfIAPAAIAAAfIATAAIAAAQIgTAAIAABNIABAFIABAFIADABIAFAAIAFAAIAFgCIAAAMIgEAEIgFADIgFAAIgFABQgEAAgDgBg");
	this.shape_1.setTransform(38.4,58.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALA9IAAhbQAAgIgCgDQgDgDgFAAQgCAAgDACQgEACgCAEIAABhIgWAAIAAh4IARAAIACANIAGgHIAGgEIAFgCIAHgBQALAAAGAHQAFAIAAAPIAABbg");
	this.shape_2.setTransform(30.9,59.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNA7QgGgDgEgGQgFgGgBgKQgCgJAAgOIAAgWQgBgMACgHQACgJACgGQADgFAEgEQAEgDADgBIAIgDIAGAAQAGAAAGACQAFABAFAFQADAFADAGQACAIAAALIAAAHIAAAIIgBAHIgBAFIgoAAIAAANIABANIADAIQABAEACACIAGAAIADAAIAEgDIACgFIABgIIAAgEIATAAIAAAFQAAARgIAIQgJAIgPAAQgHAAgGgDgAgDgsQgCACgBAEIgDAIIgBANIAAAHIAWAAIAAgCIABgEIAAgDIAAgDQAAgMgEgFQgDgGgFAAIgEABg");
	this.shape_3.setTransform(22.4,59.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhA9IAAhbIgBgGIgBgFIgEgCIgEgBQgDAAgDACQgEADgCAEIAAABIAAACIAABdIgVAAIAAhbIgBgGIgCgFIgDgCIgEgBQgDAAgEACQgDACgCAEIAABhIgWAAIAAh4IARAAIACANIAFgHIAHgEIAGgCIAHgBQAHAAAEADQAFAEACAHIAGgHIAGgEIAHgCIAGgBQALAAAGAHQAFAIAAAPIAABbg");
	this.shape_4.setTransform(11.6,59.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNA7QgGgDgFgGQgDgGgCgKQgCgJgBgOIAAgWQAAgMACgHQABgJADgGQADgFAEgEQAEgDAEgBIAHgDIAGAAQAGAAAGACQAFABAFAFQAEAFACAGQADAIAAALIAAAHIgBAIIgBAHIgBAFIgnAAIAAANIAAANIACAIQABAEAEACIAEAAIAFAAIADgDIACgFIABgIIAAgEIATAAIAAAFQgBARgHAIQgJAIgPAAQgHAAgGgDgAgDgsQgCACgCAEIgCAIIAAANIAAAHIAVAAIAAgCIAAgEIAAgDIAAgDQAAgMgDgFQgDgGgFAAIgEABg");
	this.shape_5.setTransform(1,59.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJA9Igbh5IAWAAIAMBAIACAZIABAAIADgZIAMhAIAVAAIgcB5g");
	this.shape_6.setTransform(-7,59.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNA7QgGgDgFgGQgDgGgCgKQgCgJgBgOIAAgWQAAgMACgHQABgJADgGQADgFAEgEQAEgDAEgBIAHgDIAGAAQAGAAAGACQAFABAFAFQAEAFACAGQADAIAAALIAAAHIgBAIIgBAHIgBAFIgnAAIAAANIAAANIACAIQABAEAEACIAEAAIAFAAIADgDIACgFIABgIIAAgEIATAAIAAAFQgBARgHAIQgJAIgPAAQgHAAgGgDgAgDgsQgCACgCAEIgCAIIAAANIAAAHIAVAAIAAgCIAAgEIAAgDIAAgDQAAgMgDgFQgDgGgFAAIgEABg");
	this.shape_7.setTransform(-14.8,59.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKBUIAAh5IAUAAIAAB5gAgJg6QgDgDAAgHIABgHIACgEQACgCACgBIAFgBQAGAAAEAEQAEADAAAIQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_8.setTransform(-21.1,57.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALBQIAAhbQAAgIgCgDQgDgDgEAAQgDAAgDACQgEADgCAEIAABgIgWAAIAAifIAWAAIAAAdIgBAUIAFgGIAGgDIAFgCIAGAAQALAAAGAHQAFAIAAAOIAABcg");
	this.shape_9.setTransform(-27.9,57.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAyQgIgNAAgaIAAgWQAAgMACgHQABgJADgGQADgFADgEIAIgEIAHgDIAGAAQAGAAAFABIAJAGQAEADACAFQACAFAAAGIgBAIIgBAGIgRAAIAAgEQAAgKgDgEQgCgGgFAAIgDABIgEAFIgCAIIAAANIAAAiIAAANIACAJQABADACACQACACADgBIADAAIADgDIACgFIABgIIAAgEIATAAIAAAFQAAARgIAIQgHAIgQAAQgOAAgIgMg");
	this.shape_10.setTransform(-36.1,59.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASBLIgFgbIgaAAIgDAbIgYAAIAciVIAZAAIAcCVgAALAfIgKhKIgBAAIgKBKIAVAAg");
	this.shape_11.setTransform(-44.2,58.1);

	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(25.4,12.4,1,1,0,0,0,15.6,16.6);
	this.instance.alpha = 0.289;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1F1F2").s().p("AgcgEIAhggIAYBJg");
	this.shape_12.setTransform(12.4,-16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AE4C45").s().p("Ai5CrICYiRIA6ApIgZhJIC0isQAFAaABAeQAAB8hZBYQhYBZh8AAQgigBgkgHg");
	this.shape_13.setTransform(12.8,-19);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F1F1F2").s().p("AjsDRIAvgsQAkAIAhAAQB8AABYhZQBZhXAAh9QAAgegFgZIAvgtQAOAxAAAzQAACThoBpQhpBpiUAAQg7AAg5gUg");
	this.shape_14.setTransform(13.3,-18.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AE4C45").s().p("AkZDyIAognQA5AUA7AAQCUAABphoQBohpAAiTQAAg0gOgwIAognQAYBEAABHQAACnh3B4Qh4B3ioAAQhSAAhKgfg");
	this.shape_15.setTransform(13.8,-17.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhWAzIiMhlICtAAIA1ilIA2ClICtAAIiMBlIAdBbIgiAgIhSg8IiMBmg");
	this.shape_16.setTransform(1.2,-33.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DC5B4E").s().p("AjoDAQhChSAAhqQAAh8BZhYQBXhYB9AAQBuAABTBGQBUBGATBpIi0CrIgehbICNhkIitAAIg2imIg1CmIiuAAICNBkIg2ClICMhmIBSA9IiXCRQhkgZhChRg");
	this.shape_17.setTransform(1,-31.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkaDbQhEhdAAh0QAAiTBphpQBphpCTAAQB5AABgBJQBeBIAhBxIgwAsQgThphThGQhUhHhuAAQh8AAhYBZQhZBYABB8QAABqBCBSQBBBRBkAYIgvAtQhqglhDhcg");
	this.shape_18.setTransform(0.5,-32.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DC5B4E").s().p("AlFD0QhGhnAAh9QAAioB4h3QB3h4CoAAQCDAABqBMQBoBKArB3IgoAnQghhyhehHQhghJh5AAQiTAAhpBpQhpBoAACUQAABzBEBeQBDBcBqAkIgoAnQhwgvhFhlg");
	this.shape_19.setTransform(0,-32.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#67B9A5").s().p("AiagOQBKgPBAgnQA/gnAug6IA+CCQgrBHhCA0QhCA0hRAag");
	this.shape_20.setTransform(25.3,12.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#67B9A5").s().p("AgtBYQhCg0gshHIA/iCQAvA6A+AnQBAAnBLAPIg2C0QhRgahCg0g");
	this.shape_21.setTransform(-22.9,12.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAByIiMBmIA2ilIiMhlICtAAIA1ilIA2ClICtAAIiMBlIA2Clg");
	this.shape_22.setTransform(1.2,-33.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DC5B4E").s().p("AjUDVQhZhYABh9QgBh8BZhYQBYhYB8AAQB9AABYBYQBZBYAAB8QAAB9hZBYQhYBZh9AAQh8AAhYhZg");
	this.shape_23.setTransform(1.2,-31.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Aj8D9QhphpAAiUQAAiTBphpQBphoCTAAQCUAABpBoQBpBpAACTQAACUhpBpQhpBpiUgBQiTABhphpg");
	this.shape_24.setTransform(1.2,-31.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DC5B4E").s().p("AkfEgQh4h3AAipQAAioB4h3QB3h4CoAAQCpAAB3B4QB4B3AACoQAACph4B3Qh3B4ipAAQioAAh3h4g");
	this.shape_25.setTransform(1.2,-31.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F9DD88").s().p("AlHFIQiJiIAAjAQAAjACJiHQCHiIDAAAQDAAACJCIQCICHAADAQAADAiICIQiJCIjAAAQjAAAiHiIg");
	this.shape_26.setTransform(1.2,-15.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AlwFxQiZiZgBjYQABjYCZiYQCZiZDXAAQDZAACYCZQCZCYAADYQAADYiZCZQiYCZjZAAQjXAAiZiZg");
	this.shape_27.setTransform(1.2,-15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-72.1,112.1,144.1);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA9QgGgCgEgDQgDgDgDgFQgCgFAAgIIABgIIABgFIAQAAIAAALIADAHQABACADACIAFAAQAFABACgDQACgDAAgEIAAgDIgCgEIgCgDIgDgFIgQgTIgGgHIgFgIIgDgKQgCgEAAgGQAAgHADgFQACgEAEgEQAEgDAGgDQAFgBAFAAQAGAAAGABQAFACAEAEQAEADACAFQACAEAAAGIgBAJIgCAGIgPAAIAAgKQgBgFgBgCQgBgDgCgCQgCgBgEgBIgEABIgDACIgBAEIgBAEQAAAEACADIAGAIIAQAUIAFAGIAFAIIADAJQACAEAAAGQAAAGgCAFQgCAFgEAEQgEAEgGACQgFACgHAAQgGAAgFgBg");
	this.shape.setTransform(44.9,59.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABMQgFgCgDgDQgEgDgBgHQgDgGAAgJIAAhLIgJAAIAAgQIAMAAIAEgfIAPAAIAAAfIATAAIAAAQIgTAAIAABNIABAFIABAFIADABIAFAAIAFAAIAFgCIAAAMIgEAEIgFADIgFAAIgFABQgEAAgDgBg");
	this.shape_1.setTransform(38.4,58.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALA9IAAhbQAAgIgCgDQgDgDgFAAQgCAAgDACQgEACgCAEIAABhIgWAAIAAh4IARAAIACANIAGgHIAGgEIAFgCIAHgBQALAAAGAHQAFAIAAAPIAABbg");
	this.shape_2.setTransform(30.9,59.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNA7QgGgDgEgGQgFgGgBgKQgCgJAAgOIAAgWQgBgMACgHQACgJACgGQADgFAEgEQAEgDADgBIAIgDIAGAAQAGAAAGACQAFABAFAFQADAFADAGQACAIAAALIAAAHIAAAIIgBAHIgBAFIgoAAIAAANIABANIADAIQABAEACACIAGAAIADAAIAEgDIACgFIABgIIAAgEIATAAIAAAFQAAARgIAIQgJAIgPAAQgHAAgGgDgAgDgsQgCACgBAEIgDAIIgBANIAAAHIAWAAIAAgCIABgEIAAgDIAAgDQAAgMgEgFQgDgGgFAAIgEABg");
	this.shape_3.setTransform(22.4,59.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhA9IAAhbIgBgGIgBgFIgEgCIgEgBQgDAAgDACQgEADgCAEIAAABIAAACIAABdIgVAAIAAhbIgBgGIgCgFIgDgCIgEgBQgDAAgEACQgDACgCAEIAABhIgWAAIAAh4IARAAIACANIAFgHIAHgEIAGgCIAHgBQAHAAAEADQAFAEACAHIAGgHIAGgEIAHgCIAGgBQALAAAGAHQAFAIAAAPIAABbg");
	this.shape_4.setTransform(11.6,59.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNA7QgGgDgFgGQgDgGgCgKQgCgJgBgOIAAgWQAAgMACgHQABgJADgGQADgFAEgEQAEgDAEgBIAHgDIAGAAQAGAAAGACQAFABAFAFQAEAFACAGQADAIAAALIAAAHIgBAIIgBAHIgBAFIgnAAIAAANIAAANIACAIQABAEAEACIAEAAIAFAAIADgDIACgFIABgIIAAgEIATAAIAAAFQgBARgHAIQgJAIgPAAQgHAAgGgDgAgDgsQgCACgCAEIgCAIIAAANIAAAHIAVAAIAAgCIAAgEIAAgDIAAgDQAAgMgDgFQgDgGgFAAIgEABg");
	this.shape_5.setTransform(1,59.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJA9Igbh5IAWAAIAMBAIACAZIABAAIADgZIAMhAIAVAAIgcB5g");
	this.shape_6.setTransform(-7,59.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNA7QgGgDgFgGQgDgGgCgKQgCgJgBgOIAAgWQAAgMACgHQABgJADgGQADgFAEgEQAEgDAEgBIAHgDIAGAAQAGAAAGACQAFABAFAFQAEAFACAGQADAIAAALIAAAHIgBAIIgBAHIgBAFIgnAAIAAANIAAANIACAIQABAEAEACIAEAAIAFAAIADgDIACgFIABgIIAAgEIATAAIAAAFQgBARgHAIQgJAIgPAAQgHAAgGgDgAgDgsQgCACgCAEIgCAIIAAANIAAAHIAVAAIAAgCIAAgEIAAgDIAAgDQAAgMgDgFQgDgGgFAAIgEABg");
	this.shape_7.setTransform(-14.8,59.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKBUIAAh5IAUAAIAAB5gAgJg6QgDgDAAgHIABgHIACgEQACgCACgBIAFgBQAGAAAEAEQAEADAAAIQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_8.setTransform(-21.1,57.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALBQIAAhbQAAgIgCgDQgDgDgEAAQgDAAgDACQgEADgCAEIAABgIgWAAIAAifIAWAAIAAAdIgBAUIAFgGIAGgDIAFgCIAGAAQALAAAGAHQAFAIAAAOIAABcg");
	this.shape_9.setTransform(-27.9,57.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAyQgIgNAAgaIAAgWQAAgMACgHQABgJADgGQADgFADgEIAIgEIAHgDIAGAAQAGAAAFABIAJAGQAEADACAFQACAFAAAGIgBAIIgBAGIgRAAIAAgEQAAgKgDgEQgCgGgFAAIgDABIgEAFIgCAIIAAANIAAAiIAAANIACAJQABADACACQACACADgBIADAAIADgDIACgFIABgIIAAgEIATAAIAAAFQAAARgIAIQgHAIgQAAQgOAAgIgMg");
	this.shape_10.setTransform(-36.1,59.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASBLIgFgbIgaAAIgDAbIgYAAIAciVIAZAAIAcCVgAALAfIgKhKIgBAAIgKBKIAVAAg");
	this.shape_11.setTransform(-44.2,58.1);

	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(25.4,12.4,1,1,0,0,0,15.6,16.6);
	this.instance.alpha = 0.289;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1F1F2").s().p("AgcgEIAhggIAYBJg");
	this.shape_12.setTransform(12.4,-16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AE4C45").s().p("Ai5CrICYiRIA6ApIgZhJIC0isQAFAaABAeQAAB8hZBYQhYBZh8AAQgigBgkgHg");
	this.shape_13.setTransform(12.8,-19);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F1F1F2").s().p("AjsDRIAvgsQAkAIAhAAQB8AABYhZQBZhXAAh9QAAgegFgZIAvgtQAOAxAAAzQAACThoBpQhpBpiUAAQg7AAg5gUg");
	this.shape_14.setTransform(13.3,-18.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AE4C45").s().p("AkZDyIAognQA5AUA7AAQCUAABphoQBohpAAiTQAAg0gOgwIAognQAYBEAABHQAACnh3B4Qh4B3ioAAQhSAAhKgfg");
	this.shape_15.setTransform(13.8,-17.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhWAzIiMhlICtAAIA1ilIA2ClICtAAIiMBlIAdBbIgiAgIhSg8IiMBmg");
	this.shape_16.setTransform(1.2,-33.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DC5B4E").s().p("AjoDAQhChSAAhqQAAh8BZhYQBXhYB9AAQBuAABTBGQBUBGATBpIi0CrIgehbICNhkIitAAIg2imIg1CmIiuAAICNBkIg2ClICMhmIBSA9IiXCRQhkgZhChRg");
	this.shape_17.setTransform(1,-31.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkaDbQhEhdAAh0QAAiTBphpQBphpCTAAQB5AABgBJQBeBIAhBxIgwAsQgThphThGQhUhHhuAAQh8AAhYBZQhZBYABB8QAABqBCBSQBBBRBkAYIgvAtQhqglhDhcg");
	this.shape_18.setTransform(0.5,-32.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DC5B4E").s().p("AlFD0QhGhnAAh9QAAioB4h3QB3h4CoAAQCDAABqBMQBoBKArB3IgoAnQghhyhehHQhghJh5AAQiTAAhpBpQhpBoAACUQAABzBEBeQBDBcBqAkIgoAnQhwgvhFhlg");
	this.shape_19.setTransform(0,-32.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#67B9A5").s().p("AiagOQBKgPBAgnQA/gnAug6IA+CCQgrBHhCA0QhCA0hRAag");
	this.shape_20.setTransform(25.3,12.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#67B9A5").s().p("AgtBYQhCg0gshHIA/iCQAvA6A+AnQBAAnBLAPIg2C0QhRgahCg0g");
	this.shape_21.setTransform(-22.9,12.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAByIiMBmIA2ilIiMhlICtAAIA1ilIA2ClICtAAIiMBlIA2Clg");
	this.shape_22.setTransform(1.2,-33.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DC5B4E").s().p("AjUDVQhZhYABh9QgBh8BZhYQBYhYB8AAQB9AABYBYQBZBYAAB8QAAB9hZBYQhYBZh9AAQh8AAhYhZg");
	this.shape_23.setTransform(1.2,-31.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Aj8D9QhphpAAiUQAAiTBphpQBphoCTAAQCUAABpBoQBpBpAACTQAACUhpBpQhpBpiUgBQiTABhphpg");
	this.shape_24.setTransform(1.2,-31.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DC5B4E").s().p("AkfEgQh4h3AAipQAAioB4h3QB3h4CoAAQCpAAB3B4QB4B3AACoQAACph4B3Qh3B4ipAAQioAAh3h4g");
	this.shape_25.setTransform(1.2,-31.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F9DD88").s().p("AlHFIQiJiIAAjAQAAjACJiHQCHiIDAAAQDAAACJCIQCICHAADAQAADAiICIQiJCIjAAAQjAAAiHiIg");
	this.shape_26.setTransform(1.2,-15.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AlwFxQiZiZgBjYQABjYCZiYQCZiZDXAAQDZAACYCZQCZCYAADYQAADYiZCZQiYCZjZAAQjXAAiZiZg");
	this.shape_27.setTransform(1.2,-15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-72.1,112.1,144.1);


(lib.ticket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(110.3,35.9,1,1,0,0,0,110.3,35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:3.9,x:124.2,y:47.4,alpha:0.983},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:7.8,x:137.8,y:59.5,alpha:0.966},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:11.7,x:150.9,y:71.9,alpha:0.949},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:15.7,x:163.5,y:84.9,alpha:0.932},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:19.6,x:175.7,y:98.3,alpha:0.915},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:23.5,x:187.3,y:112.2,alpha:0.898},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:27.4,x:198.2,y:126.7,alpha:0.881},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:31.3,x:208.4,y:141.6,alpha:0.864},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:35.2,x:217.9,y:157,alpha:0.846},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:39.1,x:226.7,y:172.8,alpha:0.829},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:43,x:234.4,y:189.2,alpha:0.812},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:47,x:241.4,y:206,alpha:0.795},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:50.9,x:247.3,y:223,alpha:0.778},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:54.8,x:252.2,y:240.4,alpha:0.761},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:58.7,x:256.2,y:258.2,alpha:0.744},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:62.6,x:259,y:276,alpha:0.727},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:66.5,x:260.9,y:294,alpha:0.71},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:70.4,x:261.7,y:312.1,alpha:0.592},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:74.3,x:261.6,y:330.2,alpha:0.473},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:78.3,x:260.5,y:348.2,alpha:0.355},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:82.2,x:258.6,y:366.3,alpha:0.237},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:86.1,x:255.8,y:384.1,alpha:0.118},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:90,x:252.3,y:401.9,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220.6,71.8);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween32("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(147.5,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:142.1},7).to({y:156.1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,330,347);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(57,128.8,0.382,0.382,0,0,0,144.2,217.1);
	this.instance.shadow = new cjs.Shadow("rgba(2,3,3,0.749)",2,2,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("AHpPsIvRAAQgyAAgjgjQgjgkAAgxIAA7nQAAgxAjgjQAjgkAyAAIPRAAQAyAAAjAkQAjAjAAAxIAAbnQAAAxgjAkQgjAjgyAAg");
	this.shape.setTransform(60.5,100.3,0.993,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC5B4E").s().p("AnoPsQgyAAgjgjQgjgkAAgxIAA7nQAAgxAjgjQAjgkAyAAIPRAAQAyAAAjAkQAjAjAAAxIAAbnQAAAxgjAkQgjAjgyAAg");
	this.shape_1.setTransform(60.5,100.3,0.993,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-12.1,-2.5,147,237.4), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var canvas = this;
		
		this.backToUp.addEventListener("click",chooseCard)
		function chooseCard(){
			canvas.parent.gotoAndPlay("chooseCard");
			
			
		}
		this.closeArena.addEventListener("click",closeArena)
		function closeArena(){
			canvas.parent.gotoAndPlay("view");
			
			
		}
	}
	this.frame_13 = function() {
		this.stop();
		this.goingIntoArena.addEventListener("click", goingIntoArena);
		
		function goingIntoArena() {
			window.open("task2_part2.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1));

	// Layer 5
	this.goingIntoArena = new lib.goingIntoArena();
	this.goingIntoArena.parent = this;
	this.goingIntoArena.setTransform(273.3,496.1,1,1,0,0,0,93,30.9);

	this.timeline.addTween(cjs.Tween.get(this.goingIntoArena).wait(14));

	// Layer 4
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(136.3,313,0.01,1,0,0,0,60.1,100.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(1).to({regX:60.5,scaleX:0.17,skewY:180,x:135.8},0).wait(1).to({scaleX:0.33,x:135.5},0).wait(1).to({scaleX:0.5,x:135},0).wait(1).to({scaleX:0.67,x:134.6},0).wait(1).to({scaleX:0.83,x:134.2},0).wait(1).to({scaleX:1,x:133.8},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(135.1,313,1,1,0,0,0,63.8,101.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:63,scaleX:0.86,x:134.6,y:312.9},0).wait(1).to({scaleX:0.71,x:135,y:312.7},0).wait(1).to({scaleX:0.57,x:135.4,y:312.6},0).wait(1).to({scaleX:0.43,x:135.8,y:312.4},0).wait(1).to({scaleX:0.29,x:136.2,y:312.3},0).wait(1).to({scaleX:0.14,x:136.6,y:312.1},0).wait(1).to({scaleX:0,scaleY:0,x:-137,y:-108.4},0).to({_off:true},1).wait(6));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#529181").s().p("AhKENQgFgHAFgRQAIgbACgVQgVAJgYAAQgXAAgVgJQACAVAIAbQAFARgFAHQgMAQgagYQgZgagDgiQgCgWACgTQgVgUgNgbIFrmDQAXAMAqAcQBAAqgFATQgDAKgZABQgZAAgggKQgMgDgQgMQgPgNgHgEQgIAQgFAHQgLAPgQAOQgWAUgQAXQAWAyAAA4QAAAwgRAsQgQAqgcAdQACATgCAWQgDAigZAaQgPAOgLAAQgHAAgFgGg");
	this.shape.setTransform(426.7,312.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#67B9A5").s().p("AgEBCQgagagDgiQgDgiAGgZQAGgaAMgBQALAAAKAXQAKAYADAiQACAWAIAbQAFARgFAHQgFAHgHAAQgKAAgOgPg");
	this.shape_1.setTransform(409.1,331.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#67B9A5").s().p("AgfBKQgFgHAFgRQAIgbACgWQADgiAKgYQAKgXALAAQAMABAGAaQAGAagDAhQgDAigaAaQgOAPgKAAQgHAAgFgHg");
	this.shape_2.setTransform(422.5,331.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#67B9A5").s().p("AhqA/QgMg5AIgsQAKg9AYgLQAWgKBdAYQBLATABAUQAAALgXAIQgYAJghABQgMABgTgGIgagJIgFAaQgFARgKASQgRAdgIAlQgGAbgHACIgDAAQgNAAgKgzg");
	this.shape_3.setTransform(397.6,307.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#67B9A5").s().p("Ah7AwQAIg4AWgnQAfg3AagDQAYgCBPA3QBAAqgFASQgDAKgZABQgZAAgggKQgMgDgQgLQgOgNgHgEQgIAQgFAGQgLAPgQAOQgZAWgUAgQgPAXgGAAQgQAAAHg6g");
	this.shape_4.setTransform(438.5,294);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67B9A5").s().p("AhyCUQgwg+ABhWQgBhVAwg+QAwg+BCABQBEgBAvA+QAwA+AABVQAABWgwA+QgvA9hEAAQhCAAgwg9g");
	this.shape_5.setTransform(415.8,311.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#67B9A5").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_6.setTransform(415.8,288.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#67B9A5").s().p("AgfA2QgOgWAAggQAAgfAOgWQANgWASAAQATAAANAWQAOAWAAAfQAAAggOAWQgNAWgTAAQgSAAgNgWg");
	this.shape_7.setTransform(415.8,280.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5).p("AHpPsIvRAAQgyAAgjgjQgjgkAAgxIAA7nQAAgxAjgjQAjgkAyAAIPRAAQAxAAAkAkQAjAjAAAxIAAbnQAAAxgjAkQgkAjgxAAg");
	this.shape_8.setTransform(414.4,312.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DC5B4E").s().p("AnoPsQgxAAgjgjQgkgkAAgxIAA7nQAAgxAkgjQAjgkAxAAIPRAAQAyAAAjAkQAjAjAAAxIAAbnQAAAxgjAkQgjAjgyAAg");
	this.shape_9.setTransform(414.4,312.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#529181").s().p("AhJENQgFgHAFgRQAIgcACgUQgXAJgWAAQgXAAgWgJQACAUAIAcQAFARgFAHQgMAQgZgYQgagagDgiQgCgVACgUQgUgUgOgbIFrmDQAPAHAzAhQBAArgGASQgDAKgZABQgZAAgggKQgMgDgPgMQgQgNgGgEQgIAPgGAIQgLAPgPAOQgXAUgQAXQAWAxAAA5QAAAwgQAsQgRAqgcAdQADATgDAWQgDAigZAaQgPAOgLAAQgHAAgEgGg");
	this.shape_10.setTransform(287.2,312.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#67B9A5").s().p("AgEBCQgagagCgiQgEgiAGgZQAHgaALgBQAMAAAIAXQALAZADAhQACAWAIAbQAFARgFAHQgFAHgHAAQgKAAgOgPg");
	this.shape_11.setTransform(269.6,331.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#67B9A5").s().p("AgfBKQgFgHAFgRQAIgbACgWQADgiAKgYQAKgXALAAQALABAHAaQAFAZgCAiQgDAigaAaQgOAPgKAAQgHAAgFgHg");
	this.shape_12.setTransform(283,331.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#67B9A5").s().p("AhrA/QgLg5AHgsQAGgbAFgPQAKgYAOgGQAWgKBdAYQBLATAAAUQABALgYAIQgXAJghABQgMABgTgGIgagJIgFAaQgFARgKASQgRAegIAkQgGAbgHACIgCAAQgOAAgLgzg");
	this.shape_13.setTransform(258.1,307.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#67B9A5").s().p("Ah7AwQAIg4AWgnQAOgZAKgMQARgTAQgCQAYgCBPA3QBAArgFARQgEAKgYABQgZAAgggKQgMgDgQgLQgOgNgHgEQgIAPgFAHQgLAPgQAOQgZAWgUAgQgPAXgHAAQgQAAAIg6g");
	this.shape_14.setTransform(299,294);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#67B9A5").s().p("AhyCUQgwg+ABhWQgBhVAwg+QAvg+BDABQBDgBAwA+QAwA+AABVQAABWgwA+QgwA9hDAAQhDAAgvg9g");
	this.shape_15.setTransform(276.3,311.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#67B9A5").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_16.setTransform(276.3,288.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#67B9A5").s().p("AggA2QgNgWABggQgBgfANgWQAOgWASAAQATAAANAWQAOAWAAAfQAAAggOAWQgNAWgTAAQgSAAgOgWg");
	this.shape_17.setTransform(276.3,280.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5).p("AHpPsIvRAAQgyAAgjgjQgjgkAAgxIAA7nQAAgxAjgjQAjgkAyAAIPRAAQAyAAAjAkQAjAjAAAxIAAbnQAAAxgjAkQgjAjgyAAg");
	this.shape_18.setTransform(274.3,312.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DC5B4E").s().p("AnoPsQgyAAgjgjQgjgkAAgxIAA7nQAAgxAjgjQAjgkAyAAIPRAAQAyAAAjAkQAjAjAAAxIAAbnQAAAxgjAkQgjAjgyAAg");
	this.shape_19.setTransform(274.3,312.6);

	this.closeArena = new lib.Symbol16();
	this.closeArena.parent = this;
	this.closeArena.setTransform(511.2,78.2,1,1,0,0,0,36.6,36.6);

	this.backToUp = new lib.Symbol19();
	this.backToUp.parent = this;
	this.backToUp.setTransform(36.6,77.4,1,1,0,0,0,36.6,36.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DC5B4E").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_20.setTransform(385.4,155.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DC5B4E").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_21.setTransform(371.2,158);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DC5B4E").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_22.setTransform(355.2,158.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DC5B4E").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_23.setTransform(339,158);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DC5B4E").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAGQgDAIgBALIgBAaIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgaQgBgLgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_24.setTransform(322.7,158.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DC5B4E").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAGQAFAEAEAJQAEAKADAOQACANAAATIAABGQAAASgCAOQgDAOgEAIQgEAKgFAFQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHACIAIgCQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_25.setTransform(306.9,161.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DC5B4E").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAGQAFAEAEAJQAEAKADAOQACANAAATIAABGQAAASgCAOQgDAOgEAIQgEAKgFAFQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHACIAIgCQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_26.setTransform(290.5,161.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DC5B4E").s().p("AgOCPQgIgBgHgDQgIgEgHgGQgIgHgFgKQgGgLgDgPQgDgPAAgWIAAhjQAAgVADgQQADgPAGgKQAGgLAHgGQAHgGAIgDQAIgDAIgBIANgBIAOABQAIABAIADQAHADAIAGQAHAGAGAKQAFALAEAPQADAPAAAWIAABjQAAAWgDAPQgEAPgFALQgGAKgHAGQgIAHgIADQgHAEgIABIgOABgAgKhrQgFACgDAGQgDAFgCAJIgBAXIAACAIABAWQACAJADAFQADAGAFACQAFACAFAAQAHAAAEgCQAFgCADgGQADgFACgJIABgWIAAiAIgBgXQgCgJgDgFQgDgGgFgCQgEgCgHAAQgFAAgFACg");
	this.shape_27.setTransform(273.4,155.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DC5B4E").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_28.setTransform(249.9,158.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DC5B4E").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFACQAFACAFABQAKgBAEgEQAFgGAAgHIgBgHIgDgHIgFgHIgGgHIgdglIgMgNIgKgRIgGgRQgDgJAAgKQAAgNAFgKQAEgJAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAGIgBAIQAAAHADAHIAKAPIAhAmIAIAMIAKANIAHARQADAJAAAKQAAAMgEALQgEAJgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgCg");
	this.shape_29.setTransform(235.3,158.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DC5B4E").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAGQgDAIgBALIgBAaIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgaQgBgLgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_30.setTransform(220.5,158.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DC5B4E").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAGQgDAIgBALIgBAaIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgaQgBgLgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_31.setTransform(204.8,158.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DC5B4E").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJAAQgGABgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgEIALgHIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_32.setTransform(188.4,154.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DC5B4E").s().p("AgJCPQgIgBgIgDQgHgEgHgGQgIgHgFgKQgFgLgDgPQgEgPAAgWIAAhjQAAgVAEgQQADgPAFgKQAGgLAHgGQAHgGAIgDQAHgDAIgBIANgBQARAAALAFQAMAEAHAIQAGAJADALQADALAAAMIgBARIgCARIgjAAIAAgPQAAgXgFgMQgGgLgKAAQgFAAgEACQgFACgDAGQgDAFgBAJIgCAXIAACBIACAWQABAJADAFQACAFAFADQAFACAFAAIAIgCQAEgCADgEIAFgKQABgHAAgIIAAgcIAoAAIAAAaQAAAjgQAQQgQAQgdAAg");
	this.shape_33.setTransform(172.6,155.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DC5B4E").s().p("Ag0BxIgSgLIAKgYIAJAHIAJAGIALAFQANAFAPAAQAZAAAJgNQAJgKgBgLQAAgKgBgGQgEgLgNgJIgMgHIgbgPQgRgIgIgIQgJgIgEgHQgJgQAAgZQAAgZASgSQASgSAdAAQASAAAOAEQAPAFAIAHIgGAYQgVgQgbAAQgPAAgKALQgJALAAARQAAAIACAHQAFALANAKIAPAIIAbAOIAOAHIALAJQASASAAAcQgBAcgSATQgUATgfAAQggAAgWgMg");
	this.shape_34.setTransform(283.4,76.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DC5B4E").s().p("AgMB6IhcjzIAfAAIBKDIIBKjIIAeAAIhcDzg");
	this.shape_35.setTransform(262.9,76.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AnQClIAAlJIOhAAIAAFJg");
	this.shape_36.setTransform(272.1,76.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3B7062").s().p("Ag1goIBsAAIhsBRg");
	this.shape_37.setTransform(312.9,100.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#67B9A5").s().p("AiACCIAAkCIEBAAIhUCAIBUCCg");
	this.shape_38.setTransform(320.4,92);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3B7062").s().p("Ag2goIBtAAIAABRg");
	this.shape_39.setTransform(231.1,100.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#67B9A5").s().p("AnQDJIAAmRIOhAAIAAGRg");
	this.shape_40.setTransform(272.1,76.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#67B9A5").s().p("AiBCCIBViCIhViAIEDAAIAAECg");
	this.shape_41.setTransform(223.6,92);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgJAsQgEgEgBgGIAAhDQABgGAEgEQAEgEAFAAQAGAAAFAEQADAEAAAGIAABDQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_42.setTransform(269.2,20.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJAsQgEgFgBgGIAAhCQABgGAEgEQAEgEAFgBQAGABAEAEQAEAEAAAGIAABCQAAAGgEAFQgEAEgGABQgFgBgEgEg");
	this.shape_43.setTransform(276.5,21.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgJAtQgFgFAAgGIAAhDQAAgGAFgEQAEgFAFAAQAGAAAEAFQAEAEABAGIAABDQgBAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_44.setTransform(283.8,21.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJAtQgFgFAAgGIAAhDQAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIAABDQgBAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_45.setTransform(291.1,21.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AiSAVQgJAAgGgGQgGgGAAgJQAAgHAGgHQAGgGAJAAIElAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAg");
	this.shape_46.setTransform(242.5,2.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AE4C45").s().p("AjABnIEejNQA0AQAZAxQAWArAABAIAAAhg");
	this.shape_47.setTransform(294.3,30.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DC5B4E").s().p("AltDDIAAmFIDzADQgCAaAIAeQAPA7ArAUQBSAmEgAAQAfAAAXAIIkfDNg");
	this.shape_48.setTransform(267.2,21.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AlzAZQgRAAgOgMQgMgNAAgRIAAgHIM9AAIAAAHQAAARgMANQgNAMgSAAg");
	this.shape_49.setTransform(272.1,43.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(6).p("EAdTgjCI2QAAQANg1AAg6QAAjAiIiIQiIiIjAAAQjAAAiICIQiICIAADAQAAA3AOA4I2RAAQkPAAjADAQi/DAAAEPMAAAA6nQAAEPC/DAQDAC/EPAAMA6mAAAQEQAADAi/QC/jAAAkPMAAAg6nQAAkPi/jAQjAjAkQAAg");
	this.shape_50.setTransform(272.1,291.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F9DD88").s().p("EgdTAsCQkPAAjAjAQi/jAAAkPMAAAg6mQAAkPC/jAQDAjAEPAAIWRAAQgOg4AAg3QAAjACIiIQCIiIDAAAQDAAACICIQCICIAADAQAAA7gNA0IWQAAQEQAADADAQC/DAAAEPMAAAA6mQAAEPi/DAQjADAkQAAg");
	this.shape_51.setTransform(272.1,291.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_52.setTransform(293.2,126.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_53.setTransform(293.2,144.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_54.setTransform(289.7,144.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_55.setTransform(286.2,144.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#67B9A5").s().p("AgWAPIAAgdIAtAAIAAAdg");
	this.shape_56.setTransform(287.4,123.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhKCXIAAktICVAAIAAEtg");
	this.shape_57.setTransform(289.7,135.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#58595B").s().p("AgfBpIAAgYIAYAAIAAiOIgaAXIgOgQIAvgyIAYAAIAAC5IAYAAIAAAYg");
	this.shape_58.setTransform(263.2,138.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.backToUp},{t:this.closeArena},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,553.8,576.5);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var canvas = this
		this.backToparent.addEventListener("click",backToparent)
		function backToparent(){
			canvas.parent.gotoAndPlay("closeArena");
			
			
		}
		
		this.closeArena.addEventListener("click",closeArena)
		function closeArena(){
			canvas.parent.gotoAndPlay("view");
			
			
		}
		var canvas = this;
		
		this.gotoChooseCard.addEventListener("click",chooseCard)
		function chooseCard(){
			canvas.parent.gotoAndPlay("chooseCard");
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// FlashAICB
	this.closeArena = new lib.Symbol16();
	this.closeArena.parent = this;
	this.closeArena.setTransform(492.1,78.2,1,1,0,0,0,36.6,36.6);

	this.backToparent = new lib.backToparent();
	this.backToparent.parent = this;
	this.backToparent.setTransform(17.5,77.4,1,1,0,0,0,36.6,36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backToparent},{t:this.closeArena}]}).wait(1));

	// FlashAICB
	this.gotoChooseCard = new lib.Symbol17();
	this.gotoChooseCard.parent = this;
	this.gotoChooseCard.setTransform(254.2,496.1,1,1,0,0,0,93,30.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2B4DB").s().p("AAahIIALAhIgoBiIghANg");
	this.shape.setTransform(426.7,401.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C984B2").s().p("Aggg7IAhgOIAfBDIAABQg");
	this.shape_1.setTransform(426.2,414.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#87386B").s().p("AhHgbIBWgaIA4BOIiOAcg");
	this.shape_2.setTransform(436.6,416.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A95286").s().p("AhEASIAthyIBcAAIhQDBg");
	this.shape_3.setTransform(445,409.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E079B2").s().p("AgUA6Igzg5IAzg6IBcBzg");
	this.shape_4.setTransform(444.7,394.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7D6EA").s().p("AhCANICFg6Ig0A6IhFAhg");
	this.shape_5.setTransform(435.9,392.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED81B2").s().p("AhQAgIAphiIBFggIA0A5IgtByIhWAag");
	this.shape_6.setTransform(434.4,404.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2B4DB").s().p("AAahIIALAhIgoBiIghANg");
	this.shape_7.setTransform(217.2,401.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C984B2").s().p("Aggg7IAggOIAhBDIAABQg");
	this.shape_8.setTransform(216.7,414.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#87386B").s().p("AhGgbIBUgaIA6BOIiOAcg");
	this.shape_9.setTransform(227.1,416.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A95286").s().p("AhEASIAthyIBcAAIhQDBg");
	this.shape_10.setTransform(235.5,409.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E079B2").s().p("AgUA6Igzg5IAzg6IBcBzg");
	this.shape_11.setTransform(235.2,394.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7D6EA").s().p("AhCANICEg6IgyA6IhGAhg");
	this.shape_12.setTransform(226.4,392.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ED81B2").s().p("AhRAgIAqhiIBGggIAyA5IgtByIhUAag");
	this.shape_13.setTransform(224.9,404.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DC5B4E").s().p("AgLB2IgNgEQgGgCgGgFQgGgFgEgIQgFgIgDgLQgCgLAAgPIAAhiQAAgPACgLQADgMAFgHQAEgIAGgEQAGgFAHgDQAGgCAHgBIAKgBIAMABIAMADQAGACAGAFQAGAFAFAHQAEAIADALQADALAAAQIAABiQAAAPgDALQgDALgEAIQgFAIgGAFQgGAFgGACIgNAEIgLABgAgPhUQgFAHAAAPIAAB+QAAAOAFAHQAFAGAKAAQALAAAFgGQAFgHAAgOIAAh+QAAgPgFgHQgFgHgLAAQgKAAgFAHg");
	this.shape_14.setTransform(408.7,405.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DC5B4E").s().p("AgLB2IgNgEQgGgCgGgFQgGgFgEgIQgFgIgDgLQgCgLAAgPIAAhiQAAgPACgLQADgMAFgHQAEgIAGgEQAGgFAHgDQAGgCAHgBIAKgBIAMABIAMADQAGACAGAFQAGAFAFAHQAEAIADALQADALAAAQIAABiQAAAPgDALQgDALgEAIQgFAIgGAFQgGAFgGACIgNAEIgLABgAgPhUQgFAHAAAPIAAB+QAAAOAFAHQAFAGAKAAQALAAAFgGQAFgHAAgOIAAh+QAAgPgFgHQgFgHgLAAQgKAAgFAHg");
	this.shape_15.setTransform(394.4,405.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DC5B4E").s().p("Ag3B2IAAgVIAzhiIALgYIAHgSIAEgNIABgKIgCgMQgBgFgDgDQgCgDgEgBIgHgBQgMAAgGAKQgFAKgBASIAAAOIgbAAIgCgOIgBgOQAAgJACgJQADgJAHgHQAHgHAKgEQAKgFAPAAQAOAAALAEQAKADAIAHQAHAHADAKQADAKAAAMIgBAOIgFAPIgHARIgNAUIgtBYIBEAAIAAAcg");
	this.shape_16.setTransform(380.7,405.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DC5B4E").s().p("AgyAOIAAgbIBlAAIAAAbg");
	this.shape_17.setTransform(366.9,406.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("AgVBcQgJgFgHgJQgGgKgEgPQgDgPAAgVIAAgiQAAgSADgNQACgNAFgIQAEgJAGgFQAFgFAGgDQAGgDAGAAIAKgBQAKAAAIADQAJACAGAHQAHAHAEALQAEAMAAARIAAALIgBAMIgCALIgCAJIg9AAIAAATIABAVQABAIACAFQACAFAEACQAEADAFAAIAGgCQADgBACgDIAEgIIABgMIAAgGIAdAAIAAAHQAAAbgNAMQgMAMgYAAQgMAAgJgEgAgFhEQgEACgCAFIgDAOIgBAUIAAALIAiAAIAAgEIAAgFIAAgFIAAgFQAAgSgEgJQgFgIgIAAQgEAAgDACg");
	this.shape_18.setTransform(337.9,407.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AgSBeQgIgCgHgFQgGgFgDgIQgEgIAAgLIABgMIADgJIAYAAIABARQABAHACAEQADAEAEACQADACAFAAQAIAAADgFQAEgEAAgGIgBgGIgCgFIgEgGIgFgGIgYgeIgKgLIgIgNIgFgPQgCgHAAgIQAAgLADgIQAEgIAGgGQAHgFAIgDQAIgCAJAAQAKAAAIACQAIADAGAFQAGAFADAHQADAHAAAKIgBANIgCAKIgYAAIgBgQQAAgHgCgFQgCgEgDgDQgDgCgGAAQgDAAgDACIgFADIgDAFIAAAGQAAAHADAGIAIAMIAbAfIAHAJIAHAMIAGAOQADAHAAAIQAAAKgDAIQgEAJgGAFQgGAGgJADQgJADgKAAQgKAAgIgCg");
	this.shape_19.setTransform(325.9,407.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AgLBfQgGgBgGgDQgGgDgFgFQgFgGgEgJQgEgJgCgOQgCgNAAgTIAAgcQAAgSACgNQACgOAFgIQADgJAGgFQAFgGAFgDQAGgCAGgBIAMgBIALABQAGAAAFADQAHADAEAFQAGAFADAJQAEAJADANQACANAAATIAAAcQAAATgDANQgBANgFAJQgDAKgGAFQgFAGgGADQgGADgFABIgMABgAgGhDQgEACgDAGQgBAFgBAJIgBAWIAAAuIABAWQABAJABAFQADAGAEACQACADAFAAQAEAAAEgDQADgCABgGQACgFABgJIACgWIAAguIgCgWQgBgJgCgFQgBgGgDgCQgEgDgEAAQgFAAgCADg");
	this.shape_20.setTransform(313.8,407.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("AgpB1IAAjpIAkAAIAADNIAvAAIAAAcg");
	this.shape_21.setTransform(302.8,405.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DC5B4E").s().p("AgLB2IgNgEQgGgCgGgFQgGgFgEgIQgFgIgDgLQgCgLAAgPIAAhiQAAgPACgLQADgMAFgHQAEgIAGgEQAGgFAHgDQAGgCAHgBIAKgBIAMABIAMADQAGACAGAFQAGAFAFAHQAEAIADALQADALAAAQIAABiQAAAPgDALQgDALgEAIQgFAIgGAFQgGAFgGACIgNAEIgLABgAgPhUQgFAHAAAPIAAB+QAAAOAFAHQAFAGAKAAQALAAAFgGQAFgHAAgOIAAh+QAAgPgFgHQgFgHgLAAQgKAAgFAHg");
	this.shape_22.setTransform(195.3,405.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DC5B4E").s().p("AgLB2IgNgEQgGgCgGgFQgGgFgEgIQgFgIgDgLQgCgLAAgPIAAhiQAAgPACgLQADgMAFgHQAEgIAGgEQAGgFAHgDQAGgCAHgBIAKgBIAMABIAMADQAGACAGAFQAGAFAFAHQAEAIADALQADALAAAQIAABiQAAAPgDALQgDALgEAIQgFAIgGAFQgGAFgGACIgNAEIgLABgAgPhUQgFAHAAAPIAAB+QAAAOAFAHQAFAGAKAAQALAAAFgGQAFgHAAgOIAAh+QAAgPgFgHQgFgHgLAAQgKAAgFAHg");
	this.shape_23.setTransform(181,405.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DC5B4E").s().p("AgpBqQgOgNAAgYIABgNIACgOIAcAAIAAAMQAAALACAHQACAHADAFQADAEAEACQAFACAFAAIAIgBQAEgCADgDQADgDABgFQACgGAAgHIAAgaIgBgNQgCgGgDgDQgCgEgFgCQgFgDgGAAIgOAAIAAgYIAOAAIAIgBQADgCADgDQADgDACgFQABgFAAgHIAAgZQAAgNgFgGQgFgGgJAAQgLAAgGAKQgGAKAAASIAAAOIgbAAIgDgOIgBgOQAAgJAEgJQADgJAHgHQAGgHAKgEQALgFANAAQAOAAALAEQALADAGAHQAHAGADAKQAEAKAAAMIAAAOQAAAKgDAIQgCAIgEAFQgFAGgFAEIgKAHIAAABIANAFQAFAEAFAFQAEAGADAJQACAIAAAMIAAAPQAAAQgFALQgEALgIAHQgIAHgLADQgKADgLAAQgbAAgOgNg");
	this.shape_24.setTransform(166.7,405.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DC5B4E").s().p("AgNA5IAAgsIglAAIAAgaIAlAAIAAgrIAaAAIAAArIAmAAIAAAaIgmAAIAAAsg");
	this.shape_25.setTransform(154,406.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AARBfIAAiOQAAgMgEgFQgEgFgHAAQgEAAgFAEQgFADgEAGIAACXIgjAAIAAi7IAbAAIADAUQAEgGAFgEIAJgHIAKgEIAKgBQARAAAJALQAJAMAAAXIAACPg");
	this.shape_26.setTransform(124.5,407.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AgRCCIAAi8IAiAAIAAC8gAgPhaQgFgGAAgLQAAgGACgEQABgEACgDQADgDAEgBIAIgBQAKAAAFAFQAGAGAAALQAAALgGAGQgFAGgKAAQgJAAgGgGg");
	this.shape_27.setTransform(114.1,404.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("AAbB1IgThwIgGgwIgCAAIgGAwIgUBwIgkAAIghjpIAiAAIAQCMIABAhIAEAAIADglIAaiIIAbAAIAXCIIAEAlIADAAIABghIAPiMIAiAAIggDpg");
	this.shape_28.setTransform(100.3,405.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#529181").s().p("AhqGCQgHgKAHgYQALgnADgdQggALghAAQggAAgggLQADAdALAnQAHAYgHAKQgRAXgkgjQglgkgEgxQgDggADgbQgdgdgUgnIILosQAdAOBAArQBcA9gIAbQgEAPgkABQgkAAgugOQgRgFgWgRIgggZQgMAXgIAKQgPAWgWAUQgfAbgZAkQAgBFAABTQAABFgYA/QgXA8gpAqQADAbgDAgQgEAxglAkQgVAVgPAAQgKAAgHgJg");
	this.shape_29.setTransform(276.6,275.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#67B9A5").s().p("AgGBeQglgkgEgxQgEgxAIgkQAJglAQgBQARgCAOAjQAPAiAEAxQADAfALAoQAHAYgHAJQgHAJgJAAQgPAAgVgVg");
	this.shape_30.setTransform(251.2,303.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#67B9A5").s().p("AgtBqQgHgJAHgYQAMgoACgfQAEgxAPgiQAOgjARACQAQABAJAlQAIAkgEAxQgEAxglAkQgVAVgPAAQgJAAgHgJg");
	this.shape_31.setTransform(270.5,303.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#67B9A5").s().p("AiZBaQgRhRALg/QAHgnAJgWQANgiAVgKQAUgJA+ALQAdAFA2AOQBsAcAAAcQABAPghANQgiAMgwACQgSABgagJQgbgKgLgDQgEAbgDALQgHAYgPAbQgYAqgMA1QgJAmgJADIgDAAQgUAAgPhKg");
	this.shape_32.setTransform(234.8,268.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#67B9A5").s().p("AixBGQAMhSAfg5QArhOAngEQAhgDB0BPQBbA9gHAaQgFAPgkAAQgjABgugPQgRgFgXgQIgfgYQgMAWgHAKQgPAVgXAUQgkAggdAuQgVAhgKAAQgXAAALhSg");
	this.shape_33.setTransform(293.6,249.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#67B9A5").s().p("AikDVQhEhYAAh9QAAh8BEhYQBEhYBgAAQBhAABEBYQBEBYAAB8QAAB9hEBYQhEBYhhAAQhgAAhEhYg");
	this.shape_34.setTransform(260.9,275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#67B9A5").s().p("AgcBCIAAiEIA5AAIAACEg");
	this.shape_35.setTransform(260.9,241.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#67B9A5").s().p("AgtBNQgUggAAgtQAAgsAUggQATggAaAAQAbAAATAgQAUAgAAAsQAAAtgUAgQgTAggbAAQgaAAgTggg");
	this.shape_36.setTransform(260.9,229.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9DD88").s().p("AlIFJQiIiJAAjAQAAjACIiIQCIiIDAAAQDAAACJCIQCICIAADAQAADBiICIQiICIjBAAQjAAAiIiIg");
	this.shape_37.setTransform(258.7,278.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AlxFyQiYiagBjYQABjYCYiYQCZiaDYABQDZgBCYCaQCaCYgBDYQABDZiaCZQiYCZjZAAQjYAAiZiZg");
	this.shape_38.setTransform(258.7,278.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DC5B4E").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAHAAAJIAAALIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_39.setTransform(346.8,158.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DC5B4E").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_40.setTransform(331.3,158);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DC5B4E").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_41.setTransform(315.3,158.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DC5B4E").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_42.setTransform(301.9,158);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DC5B4E").s().p("AAiCOIgIgzIgzAAIgHAzIgsAAIA0kbIAxAAIA0EbgAAVA7IgUiNIgBAAIgUCNIApAAg");
	this.shape_43.setTransform(286.5,155.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DC5B4E").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_44.setTransform(265.5,158);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DC5B4E").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_45.setTransform(250.6,158.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DC5B4E").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIAEAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_46.setTransform(234.4,158);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DC5B4E").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_47.setTransform(217.5,158);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DC5B4E").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_48.setTransform(204.9,153.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DC5B4E").s().p("AgVCXQgKgDgHgFQgIgFgEgIQgFgJAAgOIABgGIABgHIAfAAQgBAPAGAGQAFAGALAAIAIgBQAFgCAEgDQACgEADgHQACgGAAgLIAAgkQgGAIgJAEQgIAGgNAAIgJgBIgKgEQgGgCgGgFQgFgFgEgKQgEgJgCgOQgDgNAAgTIAAg8QAAgTADgNQACgNAEgJQAEgIAFgFQAGgFAGgCIALgEIAJgBQAIAAAFACQAHADAFADIAIAJIAFAIIAEgXIAhAAIAADbQAAAUgDAPQgEAPgIALQgIALgMAFQgMAHgQgBQgLAAgKgBgAgIh3QgEACgCAEQgDAEgCAJIgBAUIAABMIABAUQACAHADAFQACAFAEABIAIACIAHgBIAHgEIAEgFIADgHIAAh8QgDgGgFgFQgGgFgHAAg");
	this.shape_49.setTransform(192,161.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DC5B4E").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_50.setTransform(176.4,158.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DC5B4E").s().p("AhDCOIAAkbIArAAIAUABIATADQAKACAJAEQAJAEAHAHQAGAIAEAKQAEALAAAOIAAAOQAAAMgDAJQgEAJgFAIQgFAHgHAFQgHAEgHACIAAABQAVAEALAPQAKARAAAZIAAAOQAAAQgDALQgDALgGAJQgHAHgIAGQgJAFgKADQgKADgLABIgXABgAgZBwIAMAAQAJAAAGgCQAHgDAFgEQAFgFADgHQADgIAAgKIAAgWQAAgKgCgHQgCgIgFgFQgEgGgIgCQgGgDgLAAIgMAAgAgZgTIAIAAQAJAAAHgCQAGgDAGgEQAEgEADgHQADgIAAgJIAAgMQAAgKgCgIQgCgHgEgGQgFgFgHgDQgHgCgLAAIgIAAg");
	this.shape_51.setTransform(160.6,155.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.gotoChooseCard}]}).wait(1));

	// Layer 1
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DC5B4E").s().p("Ag0BxIgSgLIAKgYIAJAHIAKAGIAKAFQANAFAPAAQAYAAAKgNQAJgKgBgLQAAgKgBgGQgFgLgMgJIgMgHIgcgPQgQgIgIgIQgIgIgFgHQgJgQAAgZQAAgZASgSQASgSAdAAQARAAAPAEQAPAFAJAHIgHAYQgVgQgaAAQgQAAgJALQgKALAAARQAAAIACAHQAFALANAKIAPAIIAcAOIAMAHIAMAJQARASABAcQAAAcgUATQgTATgeAAQghAAgWgMg");
	this.shape_52.setTransform(264.3,76.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DC5B4E").s().p("AgMB6IhcjzIAfAAIBKDIIBKjIIAeAAIhcDzg");
	this.shape_53.setTransform(243.8,76.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AnQClIAAlJIOhAAIAAFJg");
	this.shape_54.setTransform(253,76.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3B7062").s().p("Ag1goIBsAAIhsBRg");
	this.shape_55.setTransform(293.8,100.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#67B9A5").s().p("AiACCIAAkCIEBAAIhUCAIBUCCg");
	this.shape_56.setTransform(301.3,92);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3B7062").s().p("Ag2goIBtAAIAABRg");
	this.shape_57.setTransform(212,100.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#67B9A5").s().p("AnQDJIAAmRIOhAAIAAGRg");
	this.shape_58.setTransform(253,76.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#67B9A5").s().p("AiBCCIBViCIhViAIEDAAIAAECg");
	this.shape_59.setTransform(204.5,92);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgJAsQgEgEgBgGIAAhDQABgGAEgEQAEgEAFAAQAGAAAFAEQADAEAAAGIAABDQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_60.setTransform(250.1,20.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgJAsQgEgFgBgGIAAhCQABgGAEgEQAEgEAFgBQAGABAEAEQAEAEAAAGIAABCQAAAGgEAFQgEAEgGABQgFgBgEgEg");
	this.shape_61.setTransform(257.4,21.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgJAtQgFgFAAgGIAAhDQAAgGAFgEQAEgFAFAAQAGAAAEAFQAEAEABAGIAABDQgBAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_62.setTransform(264.7,21.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgJAtQgFgFAAgGIAAhDQAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIAABDQgBAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_63.setTransform(272,21.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AiSAVQgJAAgGgGQgGgGAAgJQAAgHAGgHQAGgGAJAAIElAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAg");
	this.shape_64.setTransform(223.4,2.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#AE4C45").s().p("AjABnIEejNQA0AQAZAxQAWArAABAIAAAhg");
	this.shape_65.setTransform(275.2,30.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#DC5B4E").s().p("AltDDIAAmFIDzADQgCAaAIAeQAPA7ArAUQBSAmEgAAQAfAAAXAIIkfDNg");
	this.shape_66.setTransform(248.1,21.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AlzAZQgRAAgOgMQgMgNAAgRIAAgHIM9AAIAAAHQAAARgMANQgNAMgSAAg");
	this.shape_67.setTransform(253,43.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(6).p("EAdTgjCI2QAAQANg1AAg6QAAjAiIiIQiIiIjAAAQjAAAiICIQiICIAADAQAAA3AOA4I2RAAQkPAAjADAQi/DAAAEPMAAAA6nQAAEPC/DAQDAC/EPAAMA6mAAAQEQAADAi/QC/jAAAkPMAAAg6nQAAkPi/jAQjAjAkQAAg");
	this.shape_68.setTransform(253,291.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F9DD88").s().p("EgdTAsCQkPAAjAjAQi/jAAAkPMAAAg6mQAAkPC/jAQDAjAEPAAIWRAAQgOg4AAg3QAAjACIiIQCIiIDAAAQDAAACICIQCICIAADAQAAA7gNA0IWQAAQEQAADADAQC/DAAAEPMAAAA6mQAAEPi/DAQjADAkQAAg");
	this.shape_69.setTransform(253,291.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-22.1,0,553.8,576.5), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(375.2,667,1,1,0,0,0,375.2,667);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750.5,1334);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(90.2,107.6,1,1,0,0,0,90.2,107.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:108.9},0).wait(1).to({y:110.1},0).wait(1).to({y:111.4},0).wait(1).to({y:112.6},0).wait(1).to({y:113.9},0).wait(1).to({y:115.1},0).wait(1).to({y:116.4},0).wait(1).to({y:117.6},0).wait(1).to({y:118.9},0).wait(1).to({y:120.1},0).wait(1).to({y:121.4},0).wait(1).to({y:122.6},0).wait(1).to({y:123.9},0).wait(1).to({y:125.1},0).wait(1).to({y:126.4},0).wait(1).to({y:127.6},0).wait(1).to({y:128.9},0).wait(1).to({y:130.1},0).wait(1).to({y:131.4},0).wait(1).to({y:132.6},0).wait(1).to({y:131.2},0).wait(1).to({y:129.8},0).wait(1).to({y:128.4},0).wait(1).to({y:127},0).wait(1).to({y:125.7},0).wait(1).to({y:124.3},0).wait(1).to({y:122.9},0).wait(1).to({y:121.5},0).wait(1).to({y:120.1},0).wait(1).to({y:118.7},0).wait(1).to({y:117.3},0).wait(1).to({y:115.9},0).wait(1).to({y:114.5},0).wait(1).to({y:113.2},0).wait(1).to({y:111.8},0).wait(1).to({y:110.4},0).wait(1).to({y:109},0).wait(1).to({y:107.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.4,215.2);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSCQQgHgJAAgPQAAgSAHgHQAHgIALAAQANAAAGAIQAHAIAAARQAAAPgHAIQgGAJgNAAQgLAAgHgIgAgQA5IgGjQIAtAAIgGDQg");
	this.shape.setTransform(325.5,773.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWByQgKgCgIgGQgHgGgEgJQgFgKAAgOIACgPIADgLIAdAAIABAVQACAJACAFQADAEAFADQAFACAFAAQAKAAAEgGQAFgFAAgHIgBgHIgDgHIgFgGIgGgIIgdgkIgMgPIgKgQIgGgRQgDgIAAgLQAAgNAFgJQAEgKAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgIgCgGQgCgGgEgCQgEgDgGAAQgFAAgDACIgGAFIgDAFIgBAHQAAAJADAHIAKAOIAhAnIAIAKIAKAPIAHAQQADAKAAAKQAAALgEAKQgEAKgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgDg");
	this.shape_1.setTransform(312.9,776.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_2.setTransform(300.3,776.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_3.setTransform(285.4,776.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_4.setTransform(273.4,773.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_5.setTransform(261.5,776.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_6.setTransform(246.5,776.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgKAIgHQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_7.setTransform(231,776.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_8.setTransform(218.3,776.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgFgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_9.setTransform(205.5,773.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_10.setTransform(540.3,719.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAhgQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_11.setTransform(525.4,720);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVCXIAAisQAAgQgFgFQgEgHgJABQgGAAgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgEIALgHIALgEIALgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_12.setTransform(509.2,716.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgFgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_13.setTransform(495.3,717.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgHQgHgGgEgMQgFgLgCgQQgDgQAAgWIAAgjQAAgXADgPQACgRAFgKQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAXIAAAjQAAAVgCAQQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAaQABAMADAGQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgGABgMIABgaIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_14.setTransform(481.6,720);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAhgQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_15.setTransform(458.9,720);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVCXQgKgCgHgFQgIgGgEgJQgFgIAAgNIABgHIABgHIAfAAQgBAPAGAGQAFAGALAAIAIgBQAFgBADgEQAEgEACgHQACgHAAgKIAAgkQgGAIgJAEQgIAGgNAAIgJgBIgKgEQgGgCgGgFQgFgGgEgJQgEgJgCgOQgDgOAAgSIAAg8QAAgSADgOQACgNAEgIQAEgJAFgFQAGgFAGgDIALgDIAJgBQAIAAAGACQAGADAFAEIAIAIIAFAJIAEgYIAhAAIAADbQAAAUgEAOQgDAQgIALQgIALgMAFQgMAHgQAAQgLAAgKgCgAgIh3QgEABgCAFQgDAEgCAJIgBAVIAABKIABAVQACAHADAFQACAFAEACIAIACIAHgCIAHgEIAEgFIADgHIAAh8QgDgGgFgFQgGgFgHAAg");
	this.shape_16.setTransform(442.7,723.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_17.setTransform(426.3,719.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAhgQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_18.setTransform(410.3,720);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_19.setTransform(398.3,716.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_20.setTransform(389.7,716.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGAMQgCAHAAAIQAAAOAFAHQAFAIAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_21.setTransform(377.1,720);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAVCXIAAisQAAgQgFgFQgEgHgJABQgGAAgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgEIALgHIALgEIALgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_22.setTransform(361.6,716.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgqBdQgQgXAAgxIAAgrQABgVADgQQADgPAFgLQAGgKAGgGQAHgHAHgCQAHgEAHgBIAMgBQALAAAKADQAKAEAGAFQAHAHAFAJQADAKAAANIAAANIgCALIgiAAIAAgIQAAgRgEgKQgEgJgJAAQgFAAgDADQgFACgCAGQgDAFAAAKIgCAZIAAA/IABAaQABAKACAHQADAHAEACQAEADAFAAIAHgBQADgCACgDIAEgKIABgPIAAgHIAkAAIAAAIQAAAhgOAPQgPAPgcAAQgcAAgPgYg");
	this.shape_23.setTransform(346.1,720);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgWCYIgLgEQgFgCgFgGQgGgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAFgJQAEgJAGgFQAFgFAGgCIAKgDIAJAAIAMABIAJAFIAIAGIAFAHIgBgdIAAg9IAqAAIAAEtIghAAIgDgVIgHAIIgJAIIgLAFQgFACgIAAgAgHgwQgEACgDAEQgDAFgBAIIgCAVIAABWIACAVQABAIADAFQADAEAEACIAHACIAIgBIAFgEIAFgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_24.setTransform(323,716.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_25.setTransform(306.6,719.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGAMQgCAHAAAIQAAAOAFAHQAFAIAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_26.setTransform(289.8,720);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGAMQgCAHAAAIQAAAOAFAHQAFAIAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_27.setTransform(267.3,720);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAGgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_28.setTransform(251.8,719.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAhgQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_29.setTransform(235.8,720);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_30.setTransform(222.4,719.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGAMQgCAHAAAIQAAAOAFAHQAFAIAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_31.setTransform(206.7,720);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgWByQgKgCgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFADQAFACAFAAQAKAAAEgGQAFgFAAgHIgBgHIgDgHIgFgGIgGgIIgdgkIgMgOIgKgRIgGgRQgDgIAAgLQAAgNAFgJQAEgKAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgJgCgFQgCgGgEgCQgEgDgGAAQgFAAgDACIgGAFIgDAFIgBAHQAAAJADAHIAKAOIAhAnIAIALIAKANIAHARQADAKAAAJQAAAMgEALQgEAJgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgDg");
	this.shape_32.setTransform(546.5,663.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgDAIAAIAIABIAKAEQAGACAFAGQAFAFAEAIQAEAKADAOQACANAAAUIAABEQAAATgCAOQgDAOgEAIQgEAJgFAGQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAdIAAA8gAgMh0QgFAEgDAHIAACJIADAGIAFAFIAFAFIAHABIAIgCQAEgCADgEQADgFACgIIABgVIAAhXIgBgVQgCgHgDgFQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_33.setTransform(531.7,666.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgGAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAIAFAPQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_34.setTransform(515.6,663.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgFgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_35.setTransform(502.5,660.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgWByQgKgCgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFADQAFACAFAAQAKAAAEgGQAFgFAAgHIgBgHIgDgHIgFgGIgGgIIgdgkIgMgOIgKgRIgGgRQgDgIAAgLQAAgNAFgJQAEgKAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgJgCgFQgCgGgEgCQgEgDgGAAQgFAAgDACIgGAFIgDAFIgBAHQAAAJADAHIAKAOIAhAnIAIALIAKANIAHARQADAKAAAJQAAAMgEALQgEAJgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgDg");
	this.shape_36.setTransform(489.9,663.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgQQACgRAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAHgBALIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgLgCgHQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_37.setTransform(467.8,663.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgGgHQgGgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_38.setTransform(454.5,660.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgQQACgRAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAHgBALIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgLgCgHQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_39.setTransform(433.6,663.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVCWQgKgBgIgGQgHgFgEgIQgEgJgBgOIABgFIACgIIAdAAQABAPAFAGQAFAGALAAIAIgBQAFgCADgEQAEgDACgHQABgHAAgKIAAgkQgFAHgJAFQgIAGgNAAIgJgBIgKgDQgGgDgFgFQgGgGgEgJQgEgJgCgNQgDgPAAgSIAAg8QAAgTADgMQACgNAEgKQAEgIAGgFQAFgFAGgCIAKgEIAKgBQAIAAAGADQAGACAFADIAIAIIAGAJIADgWIAhAAIAADaQAAAUgEAPQgDAPgIALQgIALgMAGQgMAFgQAAQgLAAgKgCgAgHh3QgEACgDAEQgDAFgCAHIgBAVIAABMIABATQACAJADAEQADAFAEABIAHACIAHgBIAGgEIAFgFIADgGIAAh8QgDgIgFgEQgFgFgIAAg");
	this.shape_40.setTransform(417.3,666.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgQQACgRAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAHgBALIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgLgCgHQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_41.setTransform(394.2,663.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgGgGgEgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_42.setTransform(380.9,660.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgGAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAIAFAPQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_43.setTransform(360.3,663.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIANgEIAMgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_44.setTransform(340,663.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_45.setTransform(323.2,658.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_46.setTransform(313.3,660.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgGAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAIAFAPQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_47.setTransform(292.7,663.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAVCXIAAitQAAgPgFgFQgEgGgJgBQgGAAgGAFQgGAEgFAHIAAC4IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgFIALgHIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_48.setTransform(276.5,659.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgFgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_49.setTransform(262.6,660.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgWByQgKgCgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFADQAFACAFAAQAKAAAEgGQAFgFAAgHIgBgHIgDgHIgFgGIgGgIIgdgkIgMgOIgKgRIgGgRQgDgIAAgLQAAgNAFgJQAEgKAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgJgCgFQgCgGgEgCQgEgDgGAAQgFAAgDACIgGAFIgDAFIgBAHQAAAJADAHIAKAOIAhAnIAIALIAKANIAHARQADAKAAAJQAAAMgEALQgEAJgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgDg");
	this.shape_50.setTransform(242.8,663.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_51.setTransform(231.7,658.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgFgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgJAAgHgCg");
	this.shape_52.setTransform(214.6,660.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgUCOIAAkbIApAAIAAEbg");
	this.shape_53.setTransform(204.3,660.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(376.2,667,1,1,0,0,0,376.2,667);
	this.instance.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-7,0,786.5,1334), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(264.4,310.8,1,1,0,0,0,264.4,310.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,534.7,621.5);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(375.2,667,1,1,0,0,0,375.2,667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.724},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.621},0).wait(1).to({alpha:0.586},0).wait(1).to({alpha:0.552},0).wait(1).to({alpha:0.517},0).wait(1).to({alpha:0.483},0).wait(1).to({alpha:0.448},0).wait(1).to({alpha:0.414},0).wait(1).to({alpha:0.379},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.276},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.207},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.138},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.069},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750.5,1334);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var canvas = this
		this.closeMessage.addEventListener("click",closeMessage)
		function closeMessage(){
			canvas.parent.parent.gotoAndPlay("showArenaguide");
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.closeMessage = new lib.closeMessage();
	this.closeMessage.parent = this;
	this.closeMessage.setTransform(492.1,78.2,1,1,0,0,0,36.6,36.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC5B4E").s().p("Ak/A4IAAhvIKAAAIAABvg");
	this.shape.setTransform(319.9,533.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC5B4E").s().p("Ak/A4IAAhvIJ/AAIAABvg");
	this.shape_1.setTransform(189.2,533.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC5B4E").s().p("Ak/A5IAAhxIJ/AAIAABxg");
	this.shape_2.setTransform(189.2,516.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC5B4E").s().p("Ak/A5IAAhxIJ/AAIAABxg");
	this.shape_3.setTransform(189.2,499.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#67B9A5").s().p("AhwBxIAAjhIDhAAIAADhg");
	this.shape_4.setTransform(340.7,505.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AxOFnIAArNMAidAAAIAALNg");
	this.shape_5.setTransform(257.4,516.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#58595B").s().p("AgSAYQgHgIAAgPQAAgSAHgHQAHgHALgBQAMAAAIAJQAGAHAAARQAAAOgGAJQgIAIgMAAQgLAAgHgIg");
	this.shape_6.setTransform(189.1,459.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58595B").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_7.setTransform(177.4,454.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgGIAAgdIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAEQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAIIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_8.setTransform(161.8,451.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58595B").s().p("AgWCYIgKgEQgGgCgFgGQgGgFgEgJQgEgJgCgOQgDgOAAgTIAAhIQAAgTADgNQACgNAFgJQAEgJAGgFQAGgFAFgCIAKgDIAJAAIALABIAKAFIAHAGIAGAHIgBgdIAAg9IAqAAIAAEtIghAAIgDgVIgHAIIgIAIIgMAFQgFACgIAAgAgHgwQgEACgDAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQADAEAEACIAHACIAHgBIAGgEIAFgFIADgHIAAiIQgDgHgFgFQgFgFgIAAg");
	this.shape_9.setTransform(146.4,447.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_10.setTransform(130.8,454.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_11.setTransform(117.8,451);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_12.setTransform(102.9,451.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_13.setTransform(87.9,451.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_14.setTransform(73.1,451.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFACQAFACAFABQAKgBAEgFQAFgFAAgHIgBgHIgDgHIgFgHIgGgHIgdglIgMgNIgKgRIgGgRQgDgJAAgKQAAgNAFgKQAEgJAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAGIgBAIQAAAHADAHIAKAPIAhAmIAIAMIAKANIAHARQADAJAAAKQAAAMgEALQgEAJgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgCg");
	this.shape_15.setTransform(393.2,394.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_16.setTransform(380.6,394.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_17.setTransform(365.6,394.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_18.setTransform(353.6,390.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_19.setTransform(341.7,394.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_20.setTransform(326.7,394.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFABgDAEQgDAEgCAHQgCAHAAAJIAAALIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_21.setTransform(311.2,394.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_22.setTransform(298.5,394.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#58595B").s().p("AgCCPQgIgCgHgHQgFgGgEgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgJAAgHgCg");
	this.shape_23.setTransform(285.7,391.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_24.setTransform(267,394.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_25.setTransform(252.1,394.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJAAQgGABgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgDIALgIIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_26.setTransform(235.9,390.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_27.setTransform(222,391.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_28.setTransform(208.3,394.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_29.setTransform(185.6,394.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("AgVCXQgKgDgIgFQgHgFgEgIQgEgJAAgOIAAgGIACgHIAdAAQABAPAFAGQAFAGAMAAIAIgBQAEgCADgDQAEgEABgHQACgGAAgLIAAgkQgFAIgJAEQgIAGgNAAIgJgBIgKgEQgGgCgFgFQgGgFgEgKQgEgJgDgOQgCgNAAgTIAAg8QAAgTACgNQADgNAEgJQAEgIAGgFQAFgFAGgCIAKgEIAKgBQAIAAAGACQAGADAFADIAIAIIAGAJIADgXIAhAAIAADbQAAAUgEAPQgEAPgHALQgIALgMAFQgMAHgQgBQgLAAgKgBgAgHh3QgFACgCAEQgDAEgBAJIgCAUIAABMIACAUQABAHADAFQACAFAFABIAHACIAIgBIAFgEIAFgFIADgHIAAh8QgDgGgFgFQgGgFgHAAg");
	this.shape_30.setTransform(169.4,398);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_31.setTransform(153,394.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_32.setTransform(137,394.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_33.setTransform(125,390.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_34.setTransform(116.4,390.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFABgDAEQgDAEgCAHQgCAHAAAJIAAALIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_35.setTransform(103.8,394.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJAAQgGABgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgDIALgIIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_36.setTransform(88.3,390.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58595B").s().p("AgqBeQgQgYAAgxIAAgqQAAgWAEgPQADgQAFgKQAGgLAGgGQAHgHAHgCQAHgEAHgBIAMgBQAMAAAJAEQAJACAIAHQAHAGAEAJQADAKAAANIgBANIgCAMIghAAIAAgIQAAgSgEgJQgEgKgKAAQgEAAgEADQgDACgCAGQgEAFgBAKIgBAZIAAA/IABAaQABALADAGQACAGAEADQAEADAFABIAGgCQADgBADgEIADgKIACgPIAAgHIAkAAIAAAIQAAAigOAOQgOAPgdAAQgcAAgPgXg");
	this.shape_37.setTransform(72.8,394.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#58595B").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgWADgQQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_38.setTransform(424.1,337.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#58595B").s().p("AgCCPQgIgCgHgHQgFgGgEgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgJAAgHgCg");
	this.shape_39.setTransform(410.8,334.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#58595B").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_40.setTransform(390.2,337.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("AgqBdQgPgYAAgwIAAgrQgBgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAHgDAHgBIAMgBQALAAAKADQAJAEAHAFQAIAHADAKQAEAJABAMIgBAPIgDAKIghAAIAAgIQAAgQgEgLQgEgJgJAAQgFAAgDACQgFADgCAFQgCAHgBAJIgCAZIAABAIABAZQABALADAGQACAGAEAEQAEACAGAAIAFgBQADgCADgDIADgKIACgPIAAgHIAkAAIAAAJQAAAggOAPQgPAPgcAAQgcAAgPgYg");
	this.shape_41.setTransform(375.5,337.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_42.setTransform(359.6,337.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAJIggAAIgCgLIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhIg");
	this.shape_43.setTransform(342.9,337.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("AAVCXIAAisQAAgQgFgGQgEgFgJAAQgGgBgGAFQgGAEgFAHIAAC4IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgFIALgGIALgEIALgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_44.setTransform(327.4,334);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("AgqBdQgQgYAAgwIAAgrQABgVADgQQADgPAFgLQAGgKAGgHQAHgGAHgDQAHgDAHgBIAMgBQAMAAAJADQAKAEAGAFQAHAHAFAKQADAJAAAMIAAAPIgCAKIgiAAIAAgIQAAgQgEgLQgEgJgKAAQgEAAgEACQgEADgCAFQgDAHAAAJIgCAZIAABAIABAZQABALACAGQADAGAEAEQAEACAFAAIAHgBQADgCACgDIAEgKIABgPIAAgHIAkAAIAAAJQAAAggOAPQgPAPgcAAQgcAAgPgYg");
	this.shape_45.setTransform(311.9,337.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAJIggAAIgCgLIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhIg");
	this.shape_46.setTransform(288.9,337.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_47.setTransform(267.1,337.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#58595B").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_48.setTransform(252.1,337.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAJIggAAIgCgLIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhIg");
	this.shape_49.setTransform(236.6,337.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#58595B").s().p("AAVCXIAAisQAAgQgFgGQgEgFgJAAQgGgBgGAFQgGAEgFAHIAAC4IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgFIALgGIALgEIALgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_50.setTransform(221.1,334);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#58595B").s().p("AgzBmQgLgOAAgcIAAivIAqAAIAACrQAAAPAFAHQAEAFAJAAQAGAAAGgEQAGgDAFgHIAAi4IAqAAIAADkIghAAIgEgZQgFAJgFAFQgGAFgGADIgLAEIgNABQgUABgLgOg");
	this.shape_51.setTransform(196.9,337.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#58595B").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgWADgQQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_52.setTransform(180.5,337.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#58595B").s().p("AgVCOIAAhfIg5i8IArAAIAjCIIABAAIAiiIIAsAAIg6C8IAABfg");
	this.shape_53.setTransform(164.7,334.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#58595B").s().p("AgSAYQgHgIAAgPQAAgSAHgHQAHgHALAAQANgBAGAJQAHAHAAARQAAAPgHAIQgGAIgNAAQgLAAgHgIg");
	this.shape_54.setTransform(145.3,346.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAJIggAAIgCgLIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhIg");
	this.shape_55.setTransform(132.9,337.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#58595B").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_56.setTransform(117.5,337.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#58595B").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_57.setTransform(101.4,337.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_58.setTransform(88,337.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAJIggAAIgCgLIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhIg");
	this.shape_59.setTransform(72.4,337.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#58595B").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgHIgFgHIgGgHIgdglIgMgNIgKgQIgGgSQgDgJAAgJQAAgOAFgKQAEgJAIgHQAHgGALgEQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAHIgBAHQAAAHADAHIAKAPIAhAmIAIAMIAKANIAHARQADAJAAAKQAAANgEAKQgEAJgHAHQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_60.setTransform(417.8,280.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#58595B").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAFQAFAFAEAJQAEAKADAOQACANAAATIAABGQAAASgCAOQgDANgEAJQgEAKgFAFQgGAFgFADIgLAEIgJAAQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHABIAIgBQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_61.setTransform(402.9,284.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_62.setTransform(386.9,280.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#58595B").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgIAAgIgCg");
	this.shape_63.setTransform(373.7,278);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#58595B").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgHIgFgHIgGgHIgdglIgMgNIgKgQIgGgSQgDgJAAgJQAAgOAFgKQAEgJAIgHQAHgGALgEQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAHIgBAHQAAAHADAHIAKAPIAhAmIAIAMIAKANIAHARQADAJAAAKQAAANgEAKQgEAJgHAHQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_64.setTransform(361.1,280.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#58595B").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_65.setTransform(339.4,280.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#58595B").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJAAQgGABgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgDIALgIIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_66.setTransform(323.2,277.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#58595B").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_67.setTransform(309.3,278);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#58595B").s().p("AA+B0IAAitIgBgNIgDgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAGgFIALgJIAMgEIAOgCQAMAAAJAHQAKAGAEANQAFgHAFgFIAMgIIANgEIAMgCQATAAAMAPQAKAOABAcIAACug");
	this.shape_68.setTransform(283.7,280.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#58595B").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgLgCgQQgDgQAAgWIAAgjQAAgXADgPQACgRAFgKQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAXIAAAjQAAAWgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAFgIABIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA2IABAbQABALADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgLIABgbIAAg2IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_69.setTransform(263.2,280.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_70.setTransform(249.6,280.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#58595B").s().p("AgcCZIAAjGIgUAAIAAgeIAUAAIAAgQQAAgTAEgMQAEgMAGgGQAHgHAIgCQAJgDALABIAGAAIAIABIAHACIAHADIAAAdQgHgCgJAAIgIACIgHAEIgEAIIgCANIAAAQIAgAAIAAAeIggAAIAADGg");
	this.shape_71.setTransform(237.7,277.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#58595B").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgIAAgIgCg");
	this.shape_72.setTransform(219.4,278);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#58595B").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_73.setTransform(206,280.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#58595B").s().p("AAYCXIgvhxIgBAAIAABxIgqAAIAAktIAqAAIAACtIABAAIAthjIAoAAIgyBnIA3B8g");
	this.shape_74.setTransform(191.6,277.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#58595B").s().p("AgqBdQgPgYAAgwIAAgqQgBgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAHgEAHgBIAMgBQALAAAKADQAJAEAHAFQAIAHADAJQAFAKAAANIgBANIgDALIghAAIAAgHQAAgSgEgJQgEgKgJAAQgFAAgDADQgFACgCAGQgCAFgBAKIgCAZIAAA/IABAaQABAKADAHQACAGAEADQAEADAGAAIAFgBQADgCADgDIADgKIACgPIAAgHIAkAAIAAAIQAAAigOAOQgPAPgcAAQgcAAgPgYg");
	this.shape_75.setTransform(175.7,280.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#58595B").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_76.setTransform(164.1,276.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#58595B").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgIAAgIgCg");
	this.shape_77.setTransform(154.2,278);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAHAAAJIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgKAIgGQAIgHALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_78.setTransform(132.9,280.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#58595B").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_79.setTransform(117.5,280.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#58595B").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_80.setTransform(101.4,280.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_81.setTransform(88,280.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAHAAAJIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgKAIgGQAIgHALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_82.setTransform(72.4,280.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_83.setTransform(384.1,224);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#58595B").s().p("AgzBlQgLgNAAgcIAAivIAqAAIAACrQAAAPAFAHQAEAFAJAAQAGAAAGgEQAGgDAFgGIAAi5IAqAAIAADkIghAAIgEgZQgFAJgFAEQgGAGgGADIgLAFIgNABQgUgBgLgOg");
	this.shape_84.setTransform(368.3,224.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#58595B").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_85.setTransform(351.9,224.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#58595B").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_86.setTransform(336.5,227.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#58595B").s().p("AgWByQgKgCgIgGQgHgGgEgJQgFgKAAgOIACgPIADgLIAdAAIABAVQACAJACAFQADAFAFACQAFACAFAAQAKAAAEgGQAFgFAAgHIgBgHIgDgHIgFgGIgGgIIgdgkIgMgPIgKgQIgGgRQgDgIAAgLQAAgNAFgJQAEgKAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgIgCgGQgCgGgEgCQgEgDgGAAQgFAAgDACIgGAFIgDAFIgBAHQAAAIADAIIAKAOIAhAnIAIAKIAKAPIAHAQQADAKAAAKQAAALgEAKQgEAKgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgDg");
	this.shape_87.setTransform(315.1,224.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#58595B").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_88.setTransform(304,219.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_89.setTransform(284.7,224.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_90.setTransform(271.3,224);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_91.setTransform(256.4,224.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#58595B").s().p("AAaCOIAAiDIgzAAIAACDIgrAAIAAkbIArAAIAAB3IAzAAIAAh3IArAAIAAEbg");
	this.shape_92.setTransform(239.4,221.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#58595B").s().p("AgSAYQgHgIAAgQQAAgQAHgIQAHgHALAAQANgBAGAJQAHAHAAAQQAAAQgHAIQgGAIgNABQgLgBgHgIg");
	this.shape_93.setTransform(218.7,232.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_94.setTransform(208.9,224);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_95.setTransform(193.9,224.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#58595B").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_96.setTransform(181.9,220.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#58595B").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAOIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_97.setTransform(170,224.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#58595B").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_98.setTransform(155,224.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_99.setTransform(139.5,224.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_100.setTransform(126.8,224);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#58595B").s().p("AgCCPQgIgCgHgHQgGgGgEgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_101.setTransform(114,221.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#58595B").s().p("AgdA4IARhvIAqAAIgZBvg");
	this.shape_102.setTransform(96.4,235.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#58595B").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_103.setTransform(88.3,219.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#58595B").s().p("AAZCOIAAiDIgxAAIAACDIgrAAIAAkbIArAAIAAB3IAxAAIAAh3IArAAIAAEbg");
	this.shape_104.setTransform(74.6,221.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#DC5B4E").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAPQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_105.setTransform(304,160.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#DC5B4E").s().p("AgVCXQgKgDgHgEQgIgGgEgJQgFgIAAgNIABgHIABgHIAfAAQgBAPAGAGQAFAGALAAIAIgBQAFgBAEgEQACgEADgHQACgHAAgKIAAgkQgGAIgJAFQgIAFgNAAIgJgBIgKgDQgGgDgGgFQgFgGgEgJQgEgJgCgNQgDgPAAgSIAAg8QAAgSADgOQACgNAEgIQAEgJAFgFQAGgFAGgDIALgDIAJAAQAIAAAFABQAHACAFAFIAIAIIAFAJIAEgYIAhAAIAADbQAAATgDAPQgEAQgIALQgIALgMAFQgMAHgQAAQgLAAgKgCgAgIh4QgEADgCAEQgDAEgCAJIgBAVIAABKIABAVQACAHADAFQACAFAEACIAIACIAHgCIAHgEIAEgFIADgGIAAh9QgDgGgFgFQgGgFgHAAg");
	this.shape_106.setTransform(287.8,164.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#DC5B4E").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgHIANgGIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHABQgFADgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAIIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_107.setTransform(271.6,160.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#DC5B4E").s().p("AgWBzQgKgDgIgGQgHgGgEgJQgFgKAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFACQAFABAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgIIgGgHIgdglIgMgOIgKgPIgGgRQgDgKAAgJQAAgOAFgKQAEgKAIgGQAHgHALgDQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAFIgDAGIgBAGQAAAJADAGIAKAQIAhAlIAIALIAKAPIAHARQADAIAAALQAAAMgEAJQgEALgHAGQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_108.setTransform(257.7,160.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#DC5B4E").s().p("AgWBzQgKgDgIgGQgHgGgEgJQgFgKAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFACQAFABAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgIIgGgHIgdglIgMgOIgKgPIgGgRQgDgKAAgJQAAgOAFgKQAEgKAIgGQAHgHALgDQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAFIgDAGIgBAGQAAAJADAGIAKAQIAhAlIAIALIAKAPIAHARQADAIAAALQAAAMgEAJQgEALgHAGQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_109.setTransform(244,160.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#DC5B4E").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAPQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_110.setTransform(229.5,160.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#DC5B4E").s().p("AA4COIAAheIAAgqIABgjIABgeIACgUIgDAAIgrC4IgaAAIgsi4IgDAAIACAUIABAeIABAjIABAqIAABeIgpAAIAAkbIA5AAIAbBuIAHAiIAEAfIABAAIAFgfIAHgiIAbhuIA3AAIAAEbg");
	this.shape_111.setTransform(209.8,157.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#DC5B4E").s().p("Ag0BxIgTgLIALgYIAJAHIAJAGIAMAFQAMAFAPAAQAZAAAKgNQAHgKAAgLQAAgKgCgGQgEgLgMgJIgMgHIgbgPQgRgIgIgIQgIgIgFgHQgJgQAAgZQAAgZASgSQASgSAdAAQASAAAPAEQAOAFAIAHIgGAYQgVgQgbAAQgPAAgKALQgJALAAARQAAAIADAHQAEALAOAKIAOAIIAbAOIAOAHIALAJQARASABAcQgBAcgSATQgUATgfAAQggAAgWgMg");
	this.shape_112.setTransform(264.2,76.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#DC5B4E").s().p("AgMB6IhcjzIAfAAIBKDIIBKjIIAeAAIhcDzg");
	this.shape_113.setTransform(243.7,76.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AnQClIAAlJIOhAAIAAFJg");
	this.shape_114.setTransform(253,76.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3B7062").s().p("Ag2goIBtAAIhtBRg");
	this.shape_115.setTransform(293.8,100.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#67B9A5").s().p("AiACCIAAkDIEBAAIhUCBIBUCCg");
	this.shape_116.setTransform(301.3,91.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3B7062").s().p("Ag2goIBtAAIAABRg");
	this.shape_117.setTransform(212,100.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#67B9A5").s().p("AnQDJIAAmRIOhAAIAAGRg");
	this.shape_118.setTransform(253,76.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#67B9A5").s().p("AiBCCIBViCIhViBIEDAAIAAEDg");
	this.shape_119.setTransform(204.5,91.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgJAsQgEgEgBgGIAAhDQABgGAEgEQAEgEAFAAQAGAAAFAEQADAEAAAGIAABDQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_120.setTransform(250.1,20.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgJAsQgEgEgBgGIAAhDQABgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGIAABDQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_121.setTransform(257.4,21);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgJAtQgFgFAAgGIAAhDQAAgGAFgEQAEgFAFAAQAGAAAEAFQAEAEABAGIAABDQgBAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_122.setTransform(264.7,21.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgJAtQgFgFAAgGIAAhDQAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIAABDQAAAGgFAFQgEADgGAAQgFAAgEgDg");
	this.shape_123.setTransform(272,21.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AiSAVQgJAAgGgGQgGgGAAgJQAAgHAGgHQAGgGAJAAIElAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAg");
	this.shape_124.setTransform(223.4,2.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#AE4C45").s().p("AjABnIEfjNQAzARAZAxQAWAqAABAIAAAhg");
	this.shape_125.setTransform(275.2,30.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#DC5B4E").s().p("AltDDIAAmFIDzADQgCAaAIAeQAOA7AsAVQBSAlEgABQAeAAAYAHIkgDNg");
	this.shape_126.setTransform(248.1,21.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AlzAZQgSAAgMgMQgNgNAAgQIAAgIIM9AAIAAAIQAAAQgNANQgMAMgSAAg");
	this.shape_127.setTransform(253,43.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FFFFFF").ss(6).p("EAdUgmiI2RAAQAOg5AAg3QAAjAiIiIQiJiIjAAAQjAAAiICIQiICIAADAQAAA3AOA5I2RAAQkPAAjAC/Qi/DAAAEPMAAABBoQAAEQC/DAQDAC/EPAAMA6nAAAQEPAADAi/QC/jAAAkQMAAAhBoQAAkPi/jAQjAi/kPAAg");
	this.shape_128.setTransform(253,314.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F9DD88").s().p("EgdTAvjQkPAAjAi/Qi/jAAAkQMAAAhBoQAAkPC/jAQDAi/EPAAIWRAAQgOg5AAg3QAAjACIiIQCIiIDAAAQDAAACJCIQCICIAADAQAAA3gOA5IWRAAQEPAADAC/QC/DAAAEPMAAABBoQAAEQi/DAQjAC/kPAAg");
	this.shape_129.setTransform(253,314.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.closeMessage}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-3,0,534.7,621.5), null);


(lib.sunlayer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sun
	this.instance = new lib.Symbol62();
	this.instance.parent = this;
	this.instance.setTransform(131.4,236,1,1,0,0,0,440.8,463.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:668.8,regY:553.8,rotation:1.3,x:360.2,y:329.8},0).wait(1).to({rotation:2.5,x:360.8,y:333.6},0).wait(1).to({rotation:3.8,x:361.3,y:337.3},0).wait(1).to({rotation:5.1,x:361.8,y:341.1},0).wait(1).to({rotation:6.3,x:362.1,y:344.7},0).wait(1).to({rotation:7.6,x:362.4,y:348.2},0).wait(1).to({rotation:8.9,x:362.5,y:351.8},0).wait(1).to({rotation:10.1,y:355.3},0).wait(1).to({rotation:11.4,y:358.7},0).wait(1).to({rotation:12.7,x:362.3,y:362},0).wait(1).to({rotation:13.9,x:362,y:365.2},0).wait(1).to({rotation:15.2,x:361.6,y:368.5},0).wait(1).to({rotation:16.5,x:361.2,y:371.6},0).wait(1).to({rotation:17.7,x:360.5,y:374.7},0).wait(1).to({rotation:19,x:359.9,y:377.7},0).wait(1).to({rotation:20.3,x:359.2,y:380.5},0).wait(1).to({rotation:21.5,x:358.3,y:383.4},0).wait(1).to({rotation:22.8,x:357.4,y:386.1},0).wait(1).to({rotation:24.1,x:356.3,y:388.7},0).wait(1).to({rotation:25.4,x:355.3,y:391.3},0).wait(1).to({rotation:26.6,x:354,y:393.8},0).wait(1).to({rotation:27.9,x:352.8,y:396.2},0).wait(1).to({rotation:29.2,x:351.4,y:398.5},0).wait(1).to({rotation:30.4,x:350,y:400.7},0).wait(1).to({rotation:31.7,x:348.6,y:402.8},0).wait(1).to({rotation:33,x:347,y:404.8},0).wait(1).to({rotation:34.2,x:345.3,y:406.7},0).wait(1).to({rotation:35.5,x:343.6,y:408.5},0).wait(1).to({rotation:36.8,x:341.8,y:410.2},0).wait(1).to({rotation:38,x:340,y:411.9},0).wait(1).to({rotation:39.3,x:338.1,y:413.3},0).wait(1).to({rotation:40.6,x:336.2,y:414.8},0).wait(1).to({rotation:41.8,x:334.2,y:416.1},0).wait(1).to({rotation:43.1,x:332.1,y:417.3},0).wait(1).to({rotation:44.4,x:330,y:418.4},0).wait(1).to({rotation:45.6,x:327.9,y:419.3},0).wait(1).to({rotation:46.9,x:325.7,y:420.2},0).wait(1).to({rotation:48.2,x:323.4,y:420.9},0).wait(1).to({rotation:49.4,x:321.5,y:422.5},0).wait(1).to({rotation:50.7,x:319.5,y:423.9},0).wait(1).to({rotation:52,x:317.5,y:425.2},0).wait(1).to({rotation:53.2,x:315.5,y:426.5},0).wait(1).to({rotation:54.5,x:313.4,y:427.5},0).wait(1).to({rotation:55.8,x:311.3,y:428.5},0).wait(1).to({rotation:57,x:309.2,y:429.3},0).wait(1).to({rotation:58.3,x:307.1,y:430.1},0).wait(1).to({rotation:59.6,x:304.8,y:430.6},0).wait(1).to({rotation:60.8,x:302.6,y:431.2},0).wait(1).to({rotation:62.1,x:300.4,y:431.6},0).wait(1).to({rotation:63.4,x:298.2,y:431.8},0).wait(1).to({rotation:64.6,x:296,y:431.9},0).wait(1).to({rotation:65.9,x:293.7},0).wait(1).to({rotation:67.2,x:291.5,y:431.8},0).wait(1).to({rotation:68.5,x:289.2,y:431.6},0).wait(1).to({rotation:69.7,x:287,y:431.3},0).wait(1).to({rotation:71,x:284.7,y:430.8},0).wait(1).to({rotation:72.3,x:282.5,y:430.2},0).wait(1).to({rotation:73.5,x:280.3,y:429.6},0).wait(1).to({rotation:74.8,x:278.1,y:428.7},0).wait(1).to({rotation:76.1,x:275.9,y:427.8},0).wait(1).to({rotation:77.3,x:273.7,y:426.7},0).wait(1).to({rotation:78.6,x:271.5,y:425.6},0).wait(1).to({rotation:79.9,x:269.3,y:424.3},0).wait(1).to({rotation:81.1,x:267.2,y:422.8},0).wait(1).to({rotation:82.4,x:265.1,y:421.3},0).wait(1).to({rotation:83.7,x:263,y:419.7},0).wait(1).to({rotation:84.9,x:261,y:417.9},0).wait(1).to({rotation:86.2,x:259,y:416},0).wait(1).to({rotation:87.5,x:257,y:414},0).wait(1).to({rotation:88.7,x:255.1,y:411.9},0).wait(1).to({rotation:90,x:253.2,y:409.7},0).wait(1).to({rotation:91.3,x:251.4,y:407.4},0).wait(1).to({rotation:92.5,x:249.6,y:404.9},0).wait(1).to({rotation:93.8,x:247.8,y:402.3},0).wait(1).to({rotation:95.1,x:246.1,y:399.7},0).wait(1).to({rotation:96.3,x:244.5,y:396.9},0).wait(1).to({rotation:97.6,x:242.9,y:394.1},0).wait(1).to({rotation:98.9,x:241.4,y:391.1},0).wait(1).to({rotation:100.1,x:239.9,y:388},0).wait(1).to({rotation:101.4,x:238.4,y:384.8},0).wait(1).to({rotation:102.7,x:237.1,y:381.6},0).wait(1).to({rotation:103.9,x:235.9,y:379.6},0).wait(1).to({rotation:105.2,x:234.6,y:377.5},0).wait(1).to({rotation:106.5,x:233.6,y:375.3},0).wait(1).to({rotation:107.7,x:232.5,y:373},0).wait(1).to({rotation:109,x:231.5,y:370.7},0).wait(1).to({rotation:110.3,x:230.7,y:368.3},0).wait(1).to({rotation:111.5,x:229.9,y:365.7},0).wait(1).to({rotation:112.8,x:229.2,y:363.1},0).wait(1).to({rotation:114.1,x:228.5,y:360.3},0).wait(1).to({rotation:115.4,x:228,y:357.6},0).wait(1).to({rotation:116.6,x:227.5,y:354.6},0).wait(1).to({rotation:117.9,x:227.1,y:351.7},0).wait(1).to({rotation:119.2,x:226.9,y:348.6},0).wait(1).to({rotation:120.4,x:226.7,y:345.5},0).wait(1).to({rotation:121.7,x:226.6,y:342.4},0).wait(1).to({rotation:123,y:339.1},0).wait(1).to({rotation:124.2,x:226.7,y:335.7},0).wait(1).to({rotation:125.5,x:226.9,y:332.3},0).wait(1).to({rotation:126.8,x:227.2,y:328.9},0).wait(1).to({rotation:128,x:227.6,y:325.3},0).wait(1).to({rotation:129.3,x:228.1,y:321.7},0).wait(1).to({rotation:130.6,x:228.7,y:318.1},0).wait(1).to({rotation:131.8,x:229.4,y:314.4},0).wait(1).to({rotation:133.1,x:230.3,y:310.7},0).wait(1).to({rotation:134.4,x:231.2,y:306.8},0).wait(1).to({rotation:135.6,x:232.2,y:303},0).wait(1).to({rotation:136.9,x:233.3,y:299.1},0).wait(1).to({rotation:138.2,x:234.6,y:295.1},0).wait(1).to({rotation:139.4,x:236,y:291.2},0).wait(1).to({rotation:140.7,x:237.5,y:287.1},0).wait(1).to({rotation:142,x:239.1,y:283},0).wait(1).to({rotation:143.2,x:240.8,y:279},0).wait(1).to({rotation:144.5,x:242.7,y:274.8},0).wait(1).to({rotation:145.8,x:244.6,y:270.7},0).wait(1).to({rotation:147,x:246.7,y:266.5},0).wait(1).to({rotation:148.3,x:248.9,y:262.3},0).wait(1).to({rotation:149.6,x:251.2,y:258.1},0).wait(1).to({rotation:150.8,x:253.6,y:253.8},0).wait(1).to({rotation:152.1,x:254.9,y:250.3},0).wait(1).to({rotation:153.4,x:256.5,y:246.9},0).wait(1).to({rotation:154.6,x:258.1,y:243.4},0).wait(1).to({rotation:155.9,x:259.9,y:239.9},0).wait(1).to({rotation:157.2,x:261.7,y:236.5},0).wait(1).to({rotation:158.5,x:263.7,y:233},0).wait(1).to({rotation:159.7,x:265.8,y:229.6},0).wait(1).to({rotation:161,x:268.1,y:226},0).wait(1).to({rotation:162.3,x:270.4,y:222.6},0).wait(1).to({rotation:163.5,x:272.8,y:219.1},0).wait(1).to({rotation:164.8,x:275.5,y:215.7},0).wait(1).to({rotation:166.1,x:278.1,y:212.2},0).wait(1).to({rotation:167.3,x:281,y:208.8},0).wait(1).to({rotation:168.6,x:283.9,y:205.4},0).wait(1).to({rotation:169.9,x:287,y:202},0).wait(1).to({rotation:171.1,x:290.2,y:198.6},0).wait(1).to({rotation:172.4,x:293.5,y:195.3},0).wait(1).to({rotation:173.7,x:296.9,y:192},0).wait(1).to({rotation:174.9,x:300.4,y:188.7},0).wait(1).to({rotation:176.2,x:304.1,y:185.5},0).wait(1).to({rotation:177.5,x:307.8,y:182.2},0).wait(1).to({rotation:178.7,x:311.7,y:179.1},0).wait(1).to({rotation:180,x:315.7,y:175.9},0).wait(1).to({rotation:181.3,x:319.7,y:172.9},0).wait(1).to({rotation:182.5,x:324,y:169.9},0).wait(1).to({rotation:183.8,x:328.3,y:166.9},0).wait(1).to({rotation:185.1,x:332.7,y:163.9},0).wait(1).to({rotation:186.3,x:337.3,y:161.1},0).wait(1).to({rotation:187.6,x:341.9,y:158.3},0).wait(1).to({rotation:188.9,x:346.6,y:155.5},0).wait(1).to({rotation:190.1,x:351.5,y:152.7},0).wait(1).to({rotation:191.4,x:356.4,y:150.1},0).wait(1).to({rotation:192.7,x:361.4,y:147.5},0).wait(1).to({rotation:193.9,x:366.6,y:145},0).wait(1).to({rotation:195.2,x:367.6,y:138.3},0).wait(1).to({rotation:196.5,x:368.6,y:131.8},0).wait(1).to({rotation:197.7,x:369.7,y:125.3},0).wait(1).to({rotation:199,x:370.9,y:118.8},0).wait(1).to({rotation:200.3,x:372.2,y:112.5},0).wait(1).to({rotation:201.5,x:373.7,y:106.2},0).wait(1).to({rotation:202.8,x:375.2,y:100},0).wait(1).to({rotation:204.1,x:376.8,y:93.9},0).wait(1).to({rotation:205.4,x:378.4,y:87.9},0).wait(1).to({rotation:206.6,x:380.1,y:82},0).wait(1).to({rotation:207.9,x:382,y:76.1},0).wait(1).to({rotation:209.2,x:383.9,y:70.4},0).wait(1).to({rotation:210.4,x:385.8,y:64.7},0).wait(1).to({rotation:211.7,x:387.8,y:59.1},0).wait(1).to({rotation:213,x:390,y:53.7},0).wait(1).to({rotation:214.2,x:392.2,y:48.3},0).wait(1).to({rotation:215.5,x:394.5,y:43},0).wait(1).to({rotation:216.8,x:396.8,y:37.9},0).wait(1).to({rotation:218,x:399.2,y:32.8},0).wait(1).to({rotation:219.3,x:401.7,y:27.9},0).wait(1).to({rotation:220.6,x:404.2,y:23},0).wait(1).to({rotation:221.8,x:406.7,y:18.2},0).wait(1).to({rotation:223.1,x:409.3,y:13.6},0).wait(1).to({rotation:224.4,x:412,y:9},0).wait(1).to({rotation:225.6,x:414.7,y:4.6},0).wait(1).to({rotation:226.9,x:417.4,y:0.2},0).wait(1).to({rotation:228.2,x:420.3,y:-3.9},0).wait(1).to({rotation:229.4,x:423.1,y:-8},0).wait(1).to({rotation:230.7,x:426,y:-12},0).wait(1).to({rotation:232,x:427,y:-14.9},0).wait(1).to({rotation:233.2,x:428,y:-17.8},0).wait(1).to({rotation:234.5,x:429.1,y:-20.5},0).wait(1).to({rotation:235.8,x:430.2,y:-23.1},0).wait(1).to({rotation:237,x:431.3,y:-25.5},0).wait(1).to({rotation:238.3,x:432.5,y:-28},0).wait(1).to({rotation:239.6,x:433.7,y:-30.2},0).wait(1).to({rotation:240.8,x:434.9,y:-32.3},0).wait(1).to({rotation:242.1,x:436.1,y:-34.4},0).wait(1).to({rotation:243.4,x:437.3,y:-36.2},0).wait(1).to({rotation:244.6,x:438.5,y:-38},0).wait(1).to({rotation:245.9,x:439.8,y:-39.6},0).wait(1).to({rotation:247.2,x:441,y:-41.1},0).wait(1).to({rotation:248.5,x:442.3,y:-42.6},0).wait(1).to({rotation:249.7,x:443.5,y:-43.9},0).wait(1).to({rotation:251,x:444.8,y:-45},0).wait(1).to({rotation:252.3,x:446,y:-46.1},0).wait(1).to({rotation:253.5,x:447.3,y:-47},0).wait(1).to({rotation:254.8,x:448.4,y:-47.8},0).wait(1).to({rotation:256.1,x:449.7,y:-48.5},0).wait(1).to({rotation:257.3,x:450.9,y:-49.1},0).wait(1).to({rotation:258.6,x:452,y:-49.6},0).wait(1).to({rotation:259.9,x:453.2,y:-49.9},0).wait(1).to({rotation:261.1,x:454.3,y:-50.1},0).wait(1).to({rotation:262.4,x:455.5,y:-50.2},0).wait(1).to({rotation:263.7,x:456.6},0).wait(1).to({rotation:264.9,x:457.6,y:-50.1},0).wait(1).to({rotation:266.2,x:458.6,y:-49.8},0).wait(1).to({rotation:267.5,x:459.6,y:-49.4},0).wait(1).to({rotation:268.7,x:460.5,y:-49},0).wait(1).to({rotation:270,x:461.5,y:-46.8},0).wait(1).to({rotation:271.3,x:462.4,y:-44.5},0).wait(1).to({rotation:272.5,x:463.3,y:-42},0).wait(1).to({rotation:273.8,x:464.1,y:-39.5},0).wait(1).to({rotation:275.1,x:465,y:-36.9},0).wait(1).to({rotation:276.3,x:465.6,y:-34.1},0).wait(1).to({rotation:277.6,x:466.3,y:-31.3},0).wait(1).to({rotation:278.9,x:467,y:-28.4},0).wait(1).to({rotation:280.1,x:467.6,y:-25.3},0).wait(1).to({rotation:281.4,x:468.1,y:-22.2},0).wait(1).to({rotation:282.7,x:468.5,y:-18.9},0).wait(1).to({rotation:283.9,x:468.8,y:-15.5},0).wait(1).to({rotation:285.2,x:469.2,y:-12.1},0).wait(1).to({rotation:286.5,x:469.4,y:-8.5},0).wait(1).to({rotation:287.7,x:469.5,y:-4.9},0).wait(1).to({rotation:289,x:469.6,y:-1.2},0).wait(1).to({rotation:290.3,y:2.6},0).wait(1).to({rotation:291.5,x:469.5,y:6.6},0).wait(1).to({rotation:292.8,x:469.3,y:10.6},0).wait(1).to({rotation:294.1,x:469.1,y:14.7},0).wait(1).to({rotation:295.4,x:468.7,y:18.8},0).wait(1).to({rotation:296.6,x:468.3,y:23.1},0).wait(1).to({rotation:297.9,x:467.8,y:27.5},0).wait(1).to({rotation:299.2,x:467.2,y:31.9},0).wait(1).to({rotation:300.4,x:466.5,y:36.3},0).wait(1).to({rotation:301.7,x:465.7,y:40.9},0).wait(1).to({rotation:303,x:464.8,y:45.6},0).wait(1).to({rotation:304.2,x:463.8,y:50.3},0).wait(1).to({rotation:305.5,x:462.8,y:55.1},0).wait(1).to({rotation:306.8,x:461.6,y:59.9},0).wait(1).to({rotation:308,x:460.3,y:64.8},0).wait(1).to({rotation:309.3,x:458.9,y:69.8},0).wait(1).to({rotation:310.6,x:457.4,y:74.8},0).wait(1).to({rotation:311.8,x:455.8,y:79.9},0).wait(1).to({rotation:313.1,x:455.4,y:85.9},0).wait(1).to({rotation:314.4,x:454.9,y:92.1},0).wait(1).to({rotation:315.6,x:454.3,y:98.3},0).wait(1).to({rotation:316.9,x:453.6,y:104.5},0).wait(1).to({rotation:318.2,x:452.7,y:110.8},0).wait(1).to({rotation:319.4,x:451.8,y:117.1},0).wait(1).to({rotation:320.7,x:450.7,y:123.5},0).wait(1).to({rotation:322,x:449.5,y:129.9},0).wait(1).to({rotation:323.2,x:448.3,y:136.3},0).wait(1).to({rotation:324.5,x:446.9,y:142.8},0).wait(1).to({rotation:325.8,x:445.4,y:149.3},0).wait(1).to({rotation:327,x:443.7,y:155.7},0).wait(1).to({rotation:328.3,x:442,y:162.3},0).wait(1).to({rotation:329.6,x:440,y:168.9},0).wait(1).to({rotation:330.8,x:438.1,y:175.5},0).wait(1).to({rotation:332.1,x:436,y:182.1},0).wait(1).to({rotation:333.4,x:433.8,y:188.8},0).wait(1).to({rotation:334.6,x:431.4,y:195.4},0).wait(1).to({rotation:335.9,x:428.9,y:202},0).wait(1).to({rotation:337.2,x:426.3,y:208.6},0).wait(1).to({rotation:338.5,x:423.6,y:215.3},0).wait(1).to({rotation:339.7,x:420.8,y:221.9},0).wait(1).to({rotation:341,x:417.8,y:228.6},0).wait(1).to({rotation:342.3,x:414.8,y:235.2},0).wait(1).to({rotation:343.5,x:411.6,y:241.8},0).wait(1).to({rotation:344.8,x:408.3,y:248.4},0).wait(1).to({rotation:346.1,x:404.9,y:255},0).wait(1).to({rotation:347.3,x:401.3,y:261.6},0).wait(1).to({rotation:348.6,x:397.7,y:268.2},0).wait(1).to({rotation:349.9,x:393.8,y:274.7},0).wait(1).to({rotation:351.1,x:389.9,y:281.2},0).wait(1).to({rotation:352.4,x:385.9,y:287.7},0).wait(1).to({rotation:353.7,x:381.8,y:294.2},0).wait(1).to({rotation:354.9,x:377.6,y:300.7},0).wait(1).to({rotation:356.2,x:373.2,y:307},0).wait(1).to({rotation:357.5,x:368.7,y:313.4},0).wait(1).to({rotation:358.7,x:364.1,y:319.7},0).wait(1).to({rotation:360,x:359.4,y:326},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.4,-227.8,1337.7,1107.6);


(lib.page1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var canvas = this
		this.gotoNext1.addEventListener("click",gotoPage2)
		function gotoPage2(){
			canvas.parent.gotoAndPlay("page2");
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.gotoNext1 = new lib.gotoNext1();
	this.gotoNext1.parent = this;
	this.gotoNext1.setTransform(373.2,520.1,1,1,0,0,0,367.1,118);

	this.timeline.addTween(cjs.Tween.get(this.gotoNext1).wait(1));

	// Layer 1
	this.instance = new lib.Lockscreen3x();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgjKAJsIgUAAIAA1jMBBAAAAIF9AAIAAXvMhGpAAAgAdir3IAAVjMhAsAAA");
	this.shape.setTransform(237.1,482.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgjJAL4IAAiMMBArAAAIAA1jIF8AAIAAXvgEgjJAJsIgUAAIAA1jMBA/AAAIAAVjgAdir3g");
	this.shape_1.setTransform(237.1,482.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.page1, new cjs.Rectangle(0,0,750,1334), null);


(lib.newEnergyGone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(253,287.2,1,1,0,0,0,253,287.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.971},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.853},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.794},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.735},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.618},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.559},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.441},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.382},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.324},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.265},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.206},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.147},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.088},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,512.1,574.4);


(lib.message = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(264.4,310.8,1,1,0,0,0,264.4,310.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.088},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.147},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.206},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.265},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.324},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.382},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.441},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.559},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.618},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.735},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.794},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.853},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.971},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,534.7,621.5);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlIFJQiIiJAAjAQAAjACIiIQCJiIC/AAQDAAACICIQCICIAADAQAADAiICJQiICIjAAAQi/AAiJiIg");
	mask.setTransform(46.5,46.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F1F2").s().p("AhBBHQgbgQgPgbIARgKQANAWAWANQAWANAaAAQAnAAAcgcQAcgbAAgnQgBgagNgWIASgKQAQAbAAAfQAAAvgiAiQghAigwAAQgfAAgbgQg");
	this.shape.setTransform(69.9,69);

	this.instance = new lib.Path_1_0();
	this.instance.parent = this;
	this.instance.setTransform(69.8,68.5,1,1,0,0,0,8.9,7.2);
	this.instance.alpha = 0.289;

	this.instance_1 = new lib.Path_2_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70.2,71.5,1,1,0,0,0,19.7,16.1);
	this.instance_1.alpha = 0.289;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#67B9A5").s().p("Ag2A6QgVgNgNgWIAbgPQAIAPAOAJQAQAJASAAQAaAAATgTQATgTAAgaQAAgRgJgPIAagQQANAWAAAaQAAAngcAcQgbAbgnAAQgaABgXgOg");
	this.shape_1.setTransform(69.8,68.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#67B9A5").s().p("AgzChIgohIIhTAAIgWglIBXgxQAPAbAaAQQAbAQAgAAQAvAAAigiQAighAAgwQAAgfgQgbIBVgxIAWAkIgqBHIAqBHIgqBHIhSAAIgqBIg");
	this.shape_2.setTransform(70.2,71.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhrAdQAAgvAighQAigiAvAAQAfAAAbAQQAbAPAPAaIgSAKQgNgVgVgNQgWgNgaABQgnAAgbAbQgcAcAAAmQAAAaAMAVIgSAKQgPgaAAgfg");
	this.shape_3.setTransform(68.4,63.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#67B9A5").s().p("AhXAYQAAgmAcgcQAbgcAmAAQAaAAAXANQAVANAMAVIgZAPQgJgOgPgJQgPgJgSAAQgZAAgUATQgSATgBAaQAAARAJAPIgbAPQgMgWABgZg");
	this.shape_4.setTransform(68.5,63.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67B9A5").s().p("AjDB+IAphIIgphGIAphIIBTAAIAphHIBSAAIApBHIBTAAIAUAkIhWAxQgPgagagPQgbgQggAAQgvAAghAiQgiAgAAAwQAAAfAPAaIhWAxg");
	this.shape_5.setTransform(68.1,60.7);

	var maskedShapeInstanceList = [this.shape,this.instance,this.instance_1,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(48.5,44.7,41.3,42.9), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlIFJQiIiIAAjBQAAi/CIiJQCIiIDAAAQDBAACHCIQCICJAAC/QAADBiICIQiHCIjBAAQjAAAiIiIg");
	mask_1.setTransform(77.3,55.3);

	// Layer 3
	this.instance_1 = new lib.Path_4_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.1,79.2,1,1,0,0,0,16.9,13.5);
	this.instance_1.alpha = 0.289;

	this.instance_2 = new lib.Path_1_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(58.8,79.2,1,1,0,0,0,16.9,13.5);
	this.instance_2.alpha = 0.289;

	this.instance_3 = new lib.Path_2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(96.1,48.5,1,1,0,0,0,16.9,13.5);
	this.instance_3.alpha = 0.289;

	this.instance_4 = new lib.Path_3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(58.8,48.5,1,1,0,0,0,16.9,13.5);
	this.instance_4.alpha = 0.289;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#67B9A5").s().p("AmPEzIAAplIMgAAIAAJlg");
	this.shape_1.setTransform(77.5,66.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9DD88").s().p("ArjLkIAA3HIXHAAIAAXHg");
	this.shape_2.setTransform(74,74);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(30.8,8.9,92.9,93), null);


(lib.clouds_group_pine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.Path_3();
	this.instance.parent = this;
	this.instance.setTransform(237.7,88.4,1,1,0,0,0,114.2,20.6);
	this.instance.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:237.9},0).wait(1).to({x:238.2},0).wait(1).to({x:238.5},0).wait(1).to({x:238.8},0).wait(1).to({x:239.1},0).wait(1).to({x:239.3},0).wait(1).to({x:239.6},0).wait(1).to({x:239.9},0).wait(1).to({x:240.2},0).wait(1).to({x:240.5},0).wait(1).to({x:240.7},0).wait(1).to({x:241},0).wait(1).to({x:241.3},0).wait(1).to({x:241.6},0).wait(1).to({x:241.9},0).wait(1).to({x:242.2},0).wait(1).to({x:242.4},0).wait(1).to({x:242.7},0).wait(1).to({x:243},0).wait(1).to({x:243.3},0).wait(1).to({x:243.6},0).wait(1).to({x:243.8},0).wait(1).to({x:244.1},0).wait(1).to({x:244.4},0).wait(1).to({x:244.7},0).wait(1).to({x:245},0).wait(1).to({x:245.3},0).wait(1).to({x:245.5},0).wait(1).to({x:245.8},0).wait(1).to({x:246.1},0).wait(1).to({x:246.4},0).wait(1).to({x:246.7},0).wait(1).to({x:246.9},0).wait(1).to({x:247.2},0).wait(1).to({x:247.5},0).wait(1).to({x:247.8},0).wait(1).to({x:248.1},0).wait(1).to({x:248.4},0).wait(1).to({x:248.6},0).wait(1).to({x:248.9},0).wait(1).to({x:249.2},0).wait(1).to({x:248.8},0).wait(1).to({x:248.3},0).wait(1).to({x:247.9},0).wait(1).to({x:247.4},0).wait(1).to({x:247},0).wait(1).to({x:246.5},0).wait(1).to({x:246.1},0).wait(1).to({x:245.6},0).wait(1).to({x:245.2},0).wait(1).to({x:244.8},0).wait(1).to({x:244.3},0).wait(1).to({x:243.9},0).wait(1).to({x:243.4},0).wait(1).to({x:243},0).wait(1).to({x:242.5},0).wait(1).to({x:242.1},0).wait(1).to({x:241.6},0).wait(1).to({x:241.2},0).wait(1).to({x:240.8},0).wait(1).to({x:240.3},0).wait(1).to({x:239.9},0).wait(1).to({x:239.4},0).wait(1).to({x:239},0).wait(1).to({x:238.5},0).wait(1).to({x:238.1},0).wait(1).to({x:237.7},0).wait(1));

	// Layer 12
	this.instance_1 = new lib.Path_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(752,253.8,1,1,0,0,0,186.1,33.5);
	this.instance_1.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:751.3},0).wait(1).to({x:750.7},0).wait(1).to({x:750.1},0).wait(1).to({x:749.5},0).wait(1).to({x:748.9},0).wait(1).to({x:748.3},0).wait(1).to({x:747.7},0).wait(1).to({x:747.1},0).wait(1).to({x:746.5},0).wait(1).to({x:745.9},0).wait(1).to({x:745.3},0).wait(1).to({x:744.7},0).wait(1).to({x:744},0).wait(1).to({x:743.4},0).wait(1).to({x:742.8},0).wait(1).to({x:742.2},0).wait(1).to({x:741.6},0).wait(1).to({x:741},0).wait(1).to({x:740.4},0).wait(1).to({x:739.8},0).wait(1).to({x:739.2},0).wait(1).to({x:738.6},0).wait(1).to({x:738},0).wait(1).to({x:737.4},0).wait(1).to({x:736.7},0).wait(1).to({x:736.1},0).wait(1).to({x:735.5},0).wait(1).to({x:734.9},0).wait(1).to({x:734.3},0).wait(1).to({x:733.7},0).wait(1).to({x:733.1},0).wait(1).to({x:733.6},0).wait(1).to({x:734.1},0).wait(1).to({x:734.7},0).wait(1).to({x:735.2},0).wait(1).to({x:735.7},0).wait(1).to({x:736.2},0).wait(1).to({x:736.8},0).wait(1).to({x:737.3},0).wait(1).to({x:737.8},0).wait(1).to({x:738.3},0).wait(1).to({x:738.9},0).wait(1).to({x:739.4},0).wait(1).to({x:739.9},0).wait(1).to({x:740.4},0).wait(1).to({x:741},0).wait(1).to({x:741.5},0).wait(1).to({x:742},0).wait(1).to({x:742.5},0).wait(1).to({x:743},0).wait(1).to({x:743.6},0).wait(1).to({x:744.1},0).wait(1).to({x:744.6},0).wait(1).to({x:745.1},0).wait(1).to({x:745.7},0).wait(1).to({x:746.2},0).wait(1).to({x:746.7},0).wait(1).to({x:747.2},0).wait(1).to({x:747.8},0).wait(1).to({x:748.3},0).wait(1).to({x:748.8},0).wait(1).to({x:749.3},0).wait(1).to({x:749.9},0).wait(1).to({x:750.4},0).wait(1).to({x:750.9},0).wait(1).to({x:751.4},0).wait(1).to({x:752},0).wait(1));

	// Layer 13
	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(490.2,144.4,1,1,0,0,0,76.8,13.8);
	this.instance_2.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:490.4},0).wait(1).to({x:490.7},0).wait(1).to({x:491},0).wait(1).to({x:491.3},0).wait(1).to({x:491.6},0).wait(1).to({x:491.9},0).wait(1).to({x:492.2},0).wait(1).to({x:492.5},0).wait(1).to({x:492.7},0).wait(1).to({x:493},0).wait(1).to({x:493.3},0).wait(1).to({x:493.6},0).wait(1).to({x:493.9},0).wait(1).to({x:494.2},0).wait(1).to({x:494.5},0).wait(1).to({x:494.8},0).wait(1).to({x:495},0).wait(1).to({x:495.3},0).wait(1).to({x:495.6},0).wait(1).to({x:495.9},0).wait(1).to({x:496.2},0).wait(1).to({x:496.5},0).wait(1).to({x:496.8},0).wait(1).to({x:497.1},0).wait(1).to({x:497.3},0).wait(1).to({x:497.6},0).wait(1).to({x:497.9},0).wait(1).to({x:498.2},0).wait(1).to({x:498.5},0).wait(1).to({x:498.8},0).wait(1).to({x:499.1},0).wait(1).to({x:499.4},0).wait(1).to({x:499.6},0).wait(1).to({x:499.9},0).wait(1).to({x:500.2},0).wait(1).to({x:500.5},0).wait(1).to({x:500.8},0).wait(1).to({x:500.4},0).wait(1).to({x:500.1},0).wait(1).to({x:499.7},0).wait(1).to({x:499.4},0).wait(1).to({x:499},0).wait(1).to({x:498.7},0).wait(1).to({x:498.3},0).wait(1).to({x:498},0).wait(1).to({x:497.6},0).wait(1).to({x:497.3},0).wait(1).to({x:496.9},0).wait(1).to({x:496.5},0).wait(1).to({x:496.2},0).wait(1).to({x:495.8},0).wait(1).to({x:495.5},0).wait(1).to({x:495.1},0).wait(1).to({x:494.8},0).wait(1).to({x:494.4},0).wait(1).to({x:494.1},0).wait(1).to({x:493.7},0).wait(1).to({x:493.3},0).wait(1).to({x:493},0).wait(1).to({x:492.6},0).wait(1).to({x:492.3},0).wait(1).to({x:491.9},0).wait(1).to({x:491.6},0).wait(1).to({x:491.2},0).wait(1).to({x:490.9},0).wait(1).to({x:490.5},0).wait(1).to({x:490.2},0).wait(1));

	// Layer 14
	this.instance_3 = new lib.Path_1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120.6,267.4,1,1,0,0,0,145.8,26.3);
	this.instance_3.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:121.2},0).wait(1).to({x:121.8},0).wait(1).to({x:122.4},0).wait(1).to({x:123.1},0).wait(1).to({x:123.7},0).wait(1).to({x:124.3},0).wait(1).to({x:124.9},0).wait(1).to({x:125.5},0).wait(1).to({x:126.1},0).wait(1).to({x:126.7},0).wait(1).to({x:127.3},0).wait(1).to({x:128},0).wait(1).to({x:128.6},0).wait(1).to({x:129.2},0).wait(1).to({x:129.8},0).wait(1).to({x:130.4},0).wait(1).to({x:131},0).wait(1).to({x:131.6},0).wait(1).to({x:132.3},0).wait(1).to({x:132.9},0).wait(1).to({x:133.5},0).wait(1).to({x:134.1},0).wait(1).to({x:134.7},0).wait(1).to({x:135.3},0).wait(1).to({x:135.9},0).wait(1).to({x:136.6},0).wait(1).to({x:137.2},0).wait(1).to({x:137.8},0).wait(1).to({x:138.4},0).wait(1).to({x:139},0).wait(1).to({x:139.6},0).wait(1).to({x:140.2},0).wait(1).to({x:140.8},0).wait(1).to({x:140.3},0).wait(1).to({x:139.7},0).wait(1).to({x:139.1},0).wait(1).to({x:138.5},0).wait(1).to({x:137.9},0).wait(1).to({x:137.3},0).wait(1).to({x:136.7},0).wait(1).to({x:136.1},0).wait(1).to({x:135.5},0).wait(1).to({x:134.9},0).wait(1).to({x:134.3},0).wait(1).to({x:133.7},0).wait(1).to({x:133.1},0).wait(1).to({x:132.5},0).wait(1).to({x:131.9},0).wait(1).to({x:131.3},0).wait(1).to({x:130.7},0).wait(1).to({x:130.1},0).wait(1).to({x:129.5},0).wait(1).to({x:128.9},0).wait(1).to({x:128.3},0).wait(1).to({x:127.7},0).wait(1).to({x:127.2},0).wait(1).to({x:126.6},0).wait(1).to({x:126},0).wait(1).to({x:125.4},0).wait(1).to({x:124.8},0).wait(1).to({x:124.2},0).wait(1).to({x:123.6},0).wait(1).to({x:123},0).wait(1).to({x:122.4},0).wait(1).to({x:121.8},0).wait(1).to({x:121.2},0).wait(1).to({x:120.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,67.8,963.3,225.9);


(lib.chooseOpponent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var canvas = this;
		
		this.option1.addEventListener("click",gotoOption1)
		function gotoOption1(){
			canvas.parent.gotoAndPlay("option1");
			
			
		}
		
		this.backToUp.addEventListener("click",backToUp)
		function backToUp(){
			canvas.parent.gotoAndPlay("beginnerArena");
			
			
		}
		this.closeArena.addEventListener("click",closeArena)
		function closeArena(){
			canvas.parent.gotoAndPlay("view");
			
			
		}
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLB2QgGgBgHgDQgGgDgGgFQgGgFgFgJQgEgIgDgNQgDgNAAgRIAAhSQAAgSADgMQADgNAFgIQAEgJAGgFQAGgFAHgCQAGgDAGgBIALgBIAMABQAGABAHACQAGADAGAFQAGAFAFAIQAEAJADANQADAMAAASIAABSQAAARgDANQgDAMgEAJQgFAIgGAGQgGAFgHADQgGADgGABIgMABgAgIhYQgEACgCAFQgDAEgBAIIgCASIAABqIACASQABAHADAEQACAFAEABQAEACAEAAQAGAAAEgCQADgBADgFQACgEACgHIABgSIAAhqIgBgSQgCgIgCgEQgDgFgDgCQgEgCgGAAQgEAAgEACg");
	this.shape.setTransform(280.4,495.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOB2QgGgBgFgDQgGgDgGgFQgFgFgFgJQgEgIgDgNQgDgNAAgRIAAhSQAAgSADgMQADgNAFgIQAEgJAHgFQAGgFAHgCQAGgDAHgBIALgBQAOAAAKAEQAKAEAGAHQAGAHADAJQACAJAAAKIgBAOIgCAOIgcAAIAAgMQAAgmgVAAQgFAAgEACQgEACgCAFQgDAEgBAIIgCASIAABpIACASQABAIADAEQACAEAEACQAEACAFAAQAGAAAEgDQAEgDADgFQADgGABgHIABgQIAAgeIgSAAIAAgXIA1AAIAAB2IgYAAIgEgWQgGANgJAFQgJAGgLAAg");
	this.shape_1.setTransform(266.3,495.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5).p("ALhE1I3BAAQgyAAgjgjQgjgjAAgyIAAl5QAAgyAjgjQAjgjAyAAIXBAAQAyAAAjAjQAjAjAAAyIAAF5QAAAygjAjQgjAjgyAAg");
	this.shape_2.setTransform(275.8,496.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC9794").s().p("ArgE1QgyAAgjgjQgjgjAAgyIAAl5QAAgyAjgjQAjgjAyAAIXBAAQAyAAAjAjQAjAjAAAyIAAF5QAAAygjAjQgjAjgyAAg");
	this.shape_3.setTransform(275.8,496.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// FlashAICB
	this.option1 = new lib.Symbol20();
	this.option1.parent = this;
	this.option1.setTransform(134.2,312.6,1,1,0,0,0,60.9,100.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#529181").s().p("AhKENQgFgHAFgRQAIgbACgVQgVAJgYAAQgXAAgVgJQACAVAIAbQAFARgFAHQgMAQgagYQgZgagDgiQgCgWACgTQgVgUgNgbIFrmDQAXAMAqAcQBAAqgFATQgDAKgZABQgZAAgggKQgMgDgQgMQgPgNgHgEQgIAQgFAHQgLAPgQAOQgWAUgQAXQAWAyAAA4QAAAwgRAsQgQAqgcAdQACATgCAWQgDAigZAaQgPAOgLAAQgHAAgFgGg");
	this.shape_4.setTransform(426.7,312.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67B9A5").s().p("AgEBCQgagagDgiQgDgiAGgZQAGgaAMgBQALAAAKAXQAKAYADAiQACAWAIAbQAFARgFAHQgFAHgHAAQgKAAgOgPg");
	this.shape_5.setTransform(409.1,331.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#67B9A5").s().p("AgfBKQgFgHAFgRQAIgbACgWQADgiAKgYQAKgXALAAQAMABAGAaQAGAagDAhQgDAigaAaQgOAPgKAAQgHAAgFgHg");
	this.shape_6.setTransform(422.5,331.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#67B9A5").s().p("AhqA/QgMg5AIgsQAKg9AYgLQAWgKBdAYQBLATABAUQAAALgXAIQgYAJghABQgMABgTgGIgagJIgFAaQgFARgKASQgRAdgIAlQgGAbgHACIgDAAQgNAAgKgzg");
	this.shape_7.setTransform(397.6,307.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#67B9A5").s().p("Ah7AwQAIg4AWgnQAfg3AagDQAYgCBPA3QBAAqgFASQgDAKgZABQgZAAgggKQgMgDgQgLQgOgNgHgEQgIAQgFAGQgLAPgQAOQgZAWgUAgQgPAXgGAAQgQAAAHg6g");
	this.shape_8.setTransform(438.5,294);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#67B9A5").s().p("AhyCUQgwg+ABhWQgBhVAwg+QAwg+BCABQBEgBAvA+QAwA+AABVQAABWgwA+QgvA9hEAAQhCAAgwg9g");
	this.shape_9.setTransform(415.8,311.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#67B9A5").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_10.setTransform(415.8,288.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#67B9A5").s().p("AgfA2QgOgWAAggQAAgfAOgWQANgWASAAQATAAANAWQAOAWAAAfQAAAggOAWQgNAWgTAAQgSAAgNgWg");
	this.shape_11.setTransform(415.8,280.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5).p("AHpPsIvRAAQgyAAgjgjQgjgkAAgxIAA7nQAAgxAjgjQAjgkAyAAIPRAAQAxAAAkAkQAjAjAAAxIAAbnQAAAxgjAkQgkAjgxAAg");
	this.shape_12.setTransform(414.4,312.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DC5B4E").s().p("AnoPsQgxAAgjgjQgkgkAAgxIAA7nQAAgxAkgjQAjgkAxAAIPRAAQAyAAAjAkQAjAjAAAxIAAbnQAAAxgjAkQgjAjgyAAg");
	this.shape_13.setTransform(414.4,312.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#529181").s().p("AhJENQgFgHAFgRQAIgcACgUQgXAJgWAAQgXAAgWgJQACAUAIAcQAFARgFAHQgMAQgZgYQgagagDgiQgCgVACgUQgUgUgOgbIFrmDQAPAHAzAhQBAArgGASQgDAKgZABQgZAAgggKQgMgDgPgMQgQgNgGgEQgIAPgGAIQgLAPgPAOQgXAUgQAXQAWAxAAA5QAAAwgQAsQgRAqgcAdQADATgDAWQgDAigZAaQgPAOgLAAQgHAAgEgGg");
	this.shape_14.setTransform(287.2,312.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#67B9A5").s().p("AgEBCQgagagCgiQgEgiAGgZQAHgaALgBQAMAAAIAXQALAZADAhQACAWAIAbQAFARgFAHQgFAHgHAAQgKAAgOgPg");
	this.shape_15.setTransform(269.6,331.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#67B9A5").s().p("AgfBKQgFgHAFgRQAIgbACgWQADgiAKgYQAKgXALAAQALABAHAaQAFAZgCAiQgDAigaAaQgOAPgKAAQgHAAgFgHg");
	this.shape_16.setTransform(283,331.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#67B9A5").s().p("AhrA/QgLg5AHgsQAGgbAFgPQAKgYAOgGQAWgKBdAYQBLATAAAUQABALgYAIQgXAJghABQgMABgTgGIgagJIgFAaQgFARgKASQgRAegIAkQgGAbgHACIgCAAQgOAAgLgzg");
	this.shape_17.setTransform(258.1,307.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#67B9A5").s().p("Ah7AwQAIg4AWgnQAOgZAKgMQARgTAQgCQAYgCBPA3QBAArgFARQgEAKgYABQgZAAgggKQgMgDgQgLQgOgNgHgEQgIAPgFAHQgLAPgQAOQgZAWgUAgQgPAXgHAAQgQAAAIg6g");
	this.shape_18.setTransform(299,294);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#67B9A5").s().p("AhyCUQgwg+ABhWQgBhVAwg+QAvg+BDABQBDgBAwA+QAwA+AABVQAABWgwA+QgwA9hDAAQhDAAgvg9g");
	this.shape_19.setTransform(276.3,311.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#67B9A5").s().p("AgTAuIAAhbIAnAAIAABbg");
	this.shape_20.setTransform(276.3,288.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#67B9A5").s().p("AggA2QgNgWABggQgBgfANgWQAOgWASAAQATAAANAWQAOAWAAAfQAAAggOAWQgNAWgTAAQgSAAgOgWg");
	this.shape_21.setTransform(276.3,280.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5).p("AHpPsIvRAAQgyAAgjgjQgjgkAAgxIAA7nQAAgxAjgjQAjgkAyAAIPRAAQAyAAAjAkQAjAjAAAxIAAbnQAAAxgjAkQgjAjgyAAg");
	this.shape_22.setTransform(274.3,312.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DC5B4E").s().p("AnoPsQgyAAgjgjQgjgkAAgxIAA7nQAAgxAjgjQAjgkAyAAIPRAAQAyAAAjAkQAjAjAAAxIAAbnQAAAxgjAkQgjAjgyAAg");
	this.shape_23.setTransform(274.3,312.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.option1}]}).wait(1));

	// Layer 1
	this.closeArena = new lib.Symbol16();
	this.closeArena.parent = this;
	this.closeArena.setTransform(511.2,78.2,1,1,0,0,0,36.6,36.6);

	this.backToUp = new lib.Symbol19();
	this.backToUp.parent = this;
	this.backToUp.setTransform(36.6,77.4,1,1,0,0,0,36.6,36.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DC5B4E").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_24.setTransform(385.4,155.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DC5B4E").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_25.setTransform(371.2,158);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DC5B4E").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_26.setTransform(355.2,158.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DC5B4E").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_27.setTransform(339,158);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DC5B4E").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAGQgDAIgBALIgBAaIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgaQgBgLgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_28.setTransform(322.7,158.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DC5B4E").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAGQAFAEAEAJQAEAKADAOQACANAAATIAABGQAAASgCAOQgDAOgEAIQgEAKgFAFQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHACIAIgCQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_29.setTransform(306.9,161.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DC5B4E").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAGQAFAEAEAJQAEAKADAOQACANAAATIAABGQAAASgCAOQgDAOgEAIQgEAKgFAFQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHACIAIgCQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_30.setTransform(290.5,161.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DC5B4E").s().p("AgOCPQgIgBgHgDQgIgEgHgGQgIgHgFgKQgGgLgDgPQgDgPAAgWIAAhjQAAgVADgQQADgPAGgKQAGgLAHgGQAHgGAIgDQAIgDAIgBIANgBIAOABQAIABAIADQAHADAIAGQAHAGAGAKQAFALAEAPQADAPAAAWIAABjQAAAWgDAPQgEAPgFALQgGAKgHAGQgIAHgIADQgHAEgIABIgOABgAgKhrQgFACgDAGQgDAFgCAJIgBAXIAACAIABAWQACAJADAFQADAGAFACQAFACAFAAQAHAAAEgCQAFgCADgGQADgFACgJIABgWIAAiAIgBgXQgCgJgDgFQgDgGgFgCQgEgCgHAAQgFAAgFACg");
	this.shape_31.setTransform(273.4,155.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DC5B4E").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_32.setTransform(249.9,158.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DC5B4E").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFACQAFACAFABQAKgBAEgEQAFgGAAgHIgBgHIgDgHIgFgHIgGgHIgdglIgMgNIgKgRIgGgRQgDgJAAgKQAAgNAFgKQAEgJAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAGIgBAIQAAAHADAHIAKAPIAhAmIAIAMIAKANIAHARQADAJAAAKQAAAMgEALQgEAJgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgCg");
	this.shape_33.setTransform(235.3,158.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DC5B4E").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAGQgDAIgBALIgBAaIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgaQgBgLgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_34.setTransform(220.5,158.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DC5B4E").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAGQgDAIgBALIgBAaIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgaQgBgLgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_35.setTransform(204.8,158.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DC5B4E").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJAAQgGABgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgEIALgHIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_36.setTransform(188.4,154.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DC5B4E").s().p("AgJCPQgIgBgIgDQgHgEgHgGQgIgHgFgKQgFgLgDgPQgEgPAAgWIAAhjQAAgVAEgQQADgPAFgKQAGgLAHgGQAHgGAIgDQAHgDAIgBIANgBQARAAALAFQAMAEAHAIQAGAJADALQADALAAAMIgBARIgCARIgjAAIAAgPQAAgXgFgMQgGgLgKAAQgFAAgEACQgFACgDAGQgDAFgBAJIgCAXIAACBIACAWQABAJADAFQACAFAFADQAFACAFAAIAIgCQAEgCADgEIAFgKQABgHAAgIIAAgcIAoAAIAAAaQAAAjgQAQQgQAQgdAAg");
	this.shape_37.setTransform(172.6,155.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DC5B4E").s().p("Ag0BxIgSgLIAKgYIAJAHIAJAGIALAFQANAFAPAAQAZAAAJgNQAJgKgBgLQAAgKgBgGQgEgLgNgJIgMgHIgbgPQgRgIgIgIQgJgIgEgHQgJgQAAgZQAAgZASgSQASgSAdAAQASAAAOAEQAPAFAIAHIgGAYQgVgQgbAAQgPAAgKALQgJALAAARQAAAIACAHQAFALANAKIAPAIIAbAOIAOAHIALAJQASASAAAcQgBAcgSATQgUATgfAAQggAAgWgMg");
	this.shape_38.setTransform(283.4,76.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DC5B4E").s().p("AgMB6IhcjzIAfAAIBKDIIBKjIIAeAAIhcDzg");
	this.shape_39.setTransform(262.9,76.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AnQClIAAlJIOhAAIAAFJg");
	this.shape_40.setTransform(272.1,76.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3B7062").s().p("Ag1goIBsAAIhsBRg");
	this.shape_41.setTransform(312.9,100.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#67B9A5").s().p("AiACCIAAkCIEBAAIhUCAIBUCCg");
	this.shape_42.setTransform(320.4,92);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3B7062").s().p("Ag2goIBtAAIAABRg");
	this.shape_43.setTransform(231.1,100.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#67B9A5").s().p("AnQDJIAAmRIOhAAIAAGRg");
	this.shape_44.setTransform(272.1,76.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#67B9A5").s().p("AiBCCIBViCIhViAIEDAAIAAECg");
	this.shape_45.setTransform(223.6,92);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgJAsQgEgEgBgGIAAhDQABgGAEgEQAEgEAFAAQAGAAAFAEQADAEAAAGIAABDQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_46.setTransform(269.2,20.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgJAsQgEgFgBgGIAAhCQABgGAEgEQAEgEAFgBQAGABAEAEQAEAEAAAGIAABCQAAAGgEAFQgEAEgGABQgFgBgEgEg");
	this.shape_47.setTransform(276.5,21.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgJAtQgFgFAAgGIAAhDQAAgGAFgEQAEgFAFAAQAGAAAEAFQAEAEABAGIAABDQgBAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_48.setTransform(283.8,21.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgJAtQgFgFAAgGIAAhDQAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIAABDQgBAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_49.setTransform(291.1,21.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AiSAVQgJAAgGgGQgGgGAAgJQAAgHAGgHQAGgGAJAAIElAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAg");
	this.shape_50.setTransform(242.5,2.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AE4C45").s().p("AjABnIEejNQA0AQAZAxQAWArAABAIAAAhg");
	this.shape_51.setTransform(294.3,30.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DC5B4E").s().p("AltDDIAAmFIDzADQgCAaAIAeQAPA7ArAUQBSAmEgAAQAfAAAXAIIkfDNg");
	this.shape_52.setTransform(267.2,21.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AlzAZQgRAAgOgMQgMgNAAgRIAAgHIM9AAIAAAHQAAARgMANQgNAMgSAAg");
	this.shape_53.setTransform(272.1,43.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(6).p("EAdTgjCI2QAAQANg1AAg6QAAjAiIiIQiIiIjAAAQjAAAiICIQiICIAADAQAAA3AOA4I2RAAQkPAAjADAQi/DAAAEPMAAAA6nQAAEPC/DAQDAC/EPAAMA6mAAAQEQAADAi/QC/jAAAkPMAAAg6nQAAkPi/jAQjAjAkQAAg");
	this.shape_54.setTransform(272.1,291.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F9DD88").s().p("EgdTAsCQkPAAjAjAQi/jAAAkPMAAAg6mQAAkPC/jAQDAjAEPAAIWRAAQgOg4AAg3QAAjACIiIQCIiIDAAAQDAAACICIQCICIAADAQAAA7gNA0IWQAAQEQAADADAQC/DAAAEPMAAAA6mQAAEPi/DAQjADAkQAAg");
	this.shape_55.setTransform(272.1,291.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_56.setTransform(293.2,126.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_57.setTransform(293.2,144.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_58.setTransform(289.7,144.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_59.setTransform(286.2,144.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#67B9A5").s().p("AgWAPIAAgdIAtAAIAAAdg");
	this.shape_60.setTransform(287.4,123.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhKCXIAAktICVAAIAAEtg");
	this.shape_61.setTransform(289.7,135.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("AgfBpIAAgYIAYAAIAAiOIgaAXIgOgQIAvgyIAYAAIAAC5IAYAAIAAAYg");
	this.shape_62.setTransform(263.2,138.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.backToUp},{t:this.closeArena}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chooseOpponent, new cjs.Rectangle(-3,0,553.8,576.5), null);


(lib.blingbling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.Symbol56();
	this.instance.parent = this;
	this.instance.setTransform(343.8,926.3,1,1,0,0,0,153.7,160.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(1).to({regY:160.9,y:921.8,alpha:0.032},0).wait(1).to({y:917.3,alpha:0.065},0).wait(1).to({y:912.8,alpha:0.097},0).wait(1).to({y:908.3,alpha:0.129},0).wait(1).to({y:903.7,alpha:0.161},0).wait(1).to({y:899.2,alpha:0.194},0).wait(1).to({y:894.7,alpha:0.226},0).wait(1).to({y:890.2,alpha:0.258},0).wait(1).to({y:885.7,alpha:0.29},0).wait(1).to({y:881.1,alpha:0.323},0).wait(1).to({y:876.6,alpha:0.355},0).wait(1).to({y:872.1,alpha:0.387},0).wait(1).to({y:867.6,alpha:0.419},0).wait(1).to({y:863.1,alpha:0.452},0).wait(1).to({y:858.5,alpha:0.484},0).wait(1).to({y:854,alpha:0.516},0).wait(1).to({y:849.5,alpha:0.548},0).wait(1).to({y:845,alpha:0.581},0).wait(1).to({y:840.5,alpha:0.613},0).wait(1).to({y:835.9,alpha:0.645},0).wait(1).to({y:831.4,alpha:0.677},0).wait(1).to({y:826.9,alpha:0.71},0).wait(1).to({y:822.4,alpha:0.742},0).wait(1).to({y:817.9,alpha:0.774},0).wait(1).to({y:813.3,alpha:0.806},0).wait(1).to({y:808.8,alpha:0.839},0).wait(1).to({y:804.3,alpha:0.871},0).wait(1).to({y:799.8,alpha:0.903},0).wait(1).to({y:795.3,alpha:0.935},0).wait(1).to({y:790.7,alpha:0.968},0).wait(1).to({y:786.2,alpha:1},0).wait(1).to({y:781.7,alpha:0.964},0).wait(1).to({y:777.2,alpha:0.929},0).wait(1).to({y:772.7,alpha:0.893},0).wait(1).to({y:768.1,alpha:0.857},0).wait(1).to({y:763.6,alpha:0.821},0).wait(1).to({y:759.1,alpha:0.786},0).wait(1).to({y:754.6,alpha:0.75},0).wait(1).to({y:750.1,alpha:0.714},0).wait(1).to({y:745.5,alpha:0.679},0).wait(1).to({y:741,alpha:0.643},0).wait(1).to({y:736.5,alpha:0.607},0).wait(1).to({y:732,alpha:0.571},0).wait(1).to({y:727.5,alpha:0.536},0).wait(1).to({y:722.9,alpha:0.5},0).wait(1).to({y:718.4,alpha:0.464},0).wait(1).to({y:713.9,alpha:0.429},0).wait(1).to({y:709.4,alpha:0.393},0).wait(1).to({y:704.9,alpha:0.357},0).wait(1).to({y:700.3,alpha:0.321},0).wait(1).to({y:695.8,alpha:0.286},0).wait(1).to({y:691.3,alpha:0.25},0).wait(1).to({y:686.8,alpha:0.214},0).wait(1).to({y:682.3,alpha:0.179},0).wait(1).to({y:677.7,alpha:0.143},0).wait(1).to({y:673.2,alpha:0.107},0).wait(1).to({y:668.7,alpha:0.071},0).wait(1).to({y:664.2,alpha:0.036},0).wait(1).to({y:659.7,alpha:0},0).wait(1));

	// Layer 8
	this.instance_1 = new lib.Symbol57();
	this.instance_1.parent = this;
	this.instance_1.setTransform(468.5,757.5,1,1,0,0,0,165.5,116.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:165.4,x:468.4,y:754.6,alpha:0.056},0).wait(1).to({y:751.8,alpha:0.111},0).wait(1).to({y:748.9,alpha:0.167},0).wait(1).to({y:746,alpha:0.222},0).wait(1).to({y:743.2,alpha:0.278},0).wait(1).to({y:740.3,alpha:0.333},0).wait(1).to({y:737.5,alpha:0.389},0).wait(1).to({y:734.6,alpha:0.444},0).wait(1).to({y:731.7,alpha:0.5},0).wait(1).to({y:728.9,alpha:0.556},0).wait(1).to({y:726,alpha:0.611},0).wait(1).to({y:723.2,alpha:0.667},0).wait(1).to({y:720.3,alpha:0.722},0).wait(1).to({y:717.4,alpha:0.778},0).wait(1).to({y:714.6,alpha:0.833},0).wait(1).to({y:711.7,alpha:0.889},0).wait(1).to({y:708.8,alpha:0.944},0).wait(1).to({y:706,alpha:1},0).wait(1).to({y:703.1,alpha:0.976},0).wait(1).to({y:700.2,alpha:0.951},0).wait(1).to({y:697.4,alpha:0.927},0).wait(1).to({y:694.5,alpha:0.902},0).wait(1).to({y:691.7,alpha:0.878},0).wait(1).to({y:688.8,alpha:0.854},0).wait(1).to({y:685.9,alpha:0.829},0).wait(1).to({y:683.1,alpha:0.805},0).wait(1).to({y:680.2,alpha:0.78},0).wait(1).to({y:677.3,alpha:0.756},0).wait(1).to({y:674.5,alpha:0.732},0).wait(1).to({y:671.6,alpha:0.707},0).wait(1).to({y:668.8,alpha:0.683},0).wait(1).to({y:665.9,alpha:0.659},0).wait(1).to({y:663,alpha:0.634},0).wait(1).to({y:660.2,alpha:0.61},0).wait(1).to({y:657.3,alpha:0.585},0).wait(1).to({y:654.4,alpha:0.561},0).wait(1).to({y:651.6,alpha:0.537},0).wait(1).to({y:648.7,alpha:0.512},0).wait(1).to({y:645.9,alpha:0.488},0).wait(1).to({y:643,alpha:0.463},0).wait(1).to({y:640.1,alpha:0.439},0).wait(1).to({y:637.3,alpha:0.415},0).wait(1).to({y:634.4,alpha:0.39},0).wait(1).to({y:631.5,alpha:0.366},0).wait(1).to({y:628.7,alpha:0.341},0).wait(1).to({y:625.8,alpha:0.317},0).wait(1).to({y:623,alpha:0.293},0).wait(1).to({y:620.1,alpha:0.268},0).wait(1).to({y:617.2,alpha:0.244},0).wait(1).to({y:614.4,alpha:0.22},0).wait(1).to({y:611.5,alpha:0.195},0).wait(1).to({y:608.6,alpha:0.171},0).wait(1).to({y:605.8,alpha:0.146},0).wait(1).to({y:602.9,alpha:0.122},0).wait(1).to({y:600.1,alpha:0.098},0).wait(1).to({y:597.2,alpha:0.073},0).wait(1).to({y:594.3,alpha:0.049},0).wait(1).to({y:591.5,alpha:0.024},0).wait(1).to({y:588.6,alpha:0},0).wait(9));

	// Layer 9
	this.instance_2 = new lib.Symbol58();
	this.instance_2.parent = this;
	this.instance_2.setTransform(311.4,900.3,1,1,0,0,0,86.8,134.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(1).to({x:311.3,y:893.5,alpha:0.077},0).wait(1).to({y:886.7,alpha:0.154},0).wait(1).to({y:879.9,alpha:0.231},0).wait(1).to({y:873.1,alpha:0.308},0).wait(1).to({y:866.3,alpha:0.385},0).wait(1).to({y:859.5,alpha:0.462},0).wait(1).to({y:852.7,alpha:0.538},0).wait(1).to({y:845.9,alpha:0.615},0).wait(1).to({y:839.1,alpha:0.692},0).wait(1).to({y:832.3,alpha:0.769},0).wait(1).to({y:825.6,alpha:0.846},0).wait(1).to({y:818.8,alpha:0.923},0).wait(1).to({y:812,alpha:1},0).wait(1).to({y:805.2},0).wait(1).to({y:798.4},0).wait(1).to({y:791.6},0).wait(1).to({y:784.8},0).wait(1).to({y:778},0).wait(1).to({y:771.2},0).wait(1).to({y:764.4},0).wait(1).to({y:757.6},0).wait(1).to({y:750.9},0).wait(1).to({y:744.1},0).wait(1).to({y:737.3},0).wait(1).to({y:730.5},0).wait(1).to({y:723.7},0).wait(1).to({y:716.9},0).wait(1).to({y:710.1},0).wait(1).to({y:703.3},0).wait(1).to({y:696.5},0).wait(1).to({y:689.7},0).wait(1).to({y:683},0).wait(1).to({y:676.2},0).wait(1).to({y:669.4},0).wait(1).to({y:662.6},0).wait(1).to({y:655.8},0).wait(1).to({y:649,alpha:0.917},0).wait(1).to({y:642.2,alpha:0.833},0).wait(1).to({y:635.4,alpha:0.75},0).wait(1).to({y:628.6,alpha:0.667},0).wait(1).to({y:621.8,alpha:0.583},0).wait(1).to({y:615,alpha:0.5},0).wait(1).to({y:608.3,alpha:0.417},0).wait(1).to({y:601.5,alpha:0.333},0).wait(1).to({y:594.7,alpha:0.25},0).wait(1).to({y:587.9,alpha:0.167},0).wait(1).to({y:581.1,alpha:0.083},0).wait(1).to({y:574.3,alpha:0},0).wait(1));

	// Layer 10
	this.instance_3 = new lib.Symbol59();
	this.instance_3.parent = this;
	this.instance_3.setTransform(110.5,935.4,1,1,0,0,0,66.7,150.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).wait(1).to({y:924.9,alpha:0.038},0).wait(1).to({x:110.6,y:914.4,alpha:0.077},0).wait(1).to({x:110.7,y:903.9,alpha:0.115},0).wait(1).to({y:893.4,alpha:0.154},0).wait(1).to({x:110.8,y:882.9,alpha:0.192},0).wait(1).to({x:110.9,y:872.4,alpha:0.231},0).wait(1).to({x:111,y:861.9,alpha:0.269},0).wait(1).to({y:851.4,alpha:0.308},0).wait(1).to({x:111.1,y:840.9,alpha:0.346},0).wait(1).to({x:111.2,y:830.4,alpha:0.385},0).wait(1).to({x:111.3,y:819.9,alpha:0.423},0).wait(1).to({y:809.4,alpha:0.462},0).wait(1).to({x:111.4,y:798.9,alpha:0.5},0).wait(1).to({x:111.5,y:788.4,alpha:0.538},0).wait(1).to({x:111.6,y:777.9,alpha:0.577},0).wait(1).to({y:767.4,alpha:0.615},0).wait(1).to({x:111.7,y:756.9,alpha:0.654},0).wait(1).to({x:111.8,y:746.4,alpha:0.692},0).wait(1).to({x:111.9,y:735.9,alpha:0.731},0).wait(1).to({y:725.5,alpha:0.769},0).wait(1).to({x:112,y:715,alpha:0.808},0).wait(1).to({x:112.1,y:704.5,alpha:0.846},0).wait(1).to({y:694,alpha:0.885},0).wait(1).to({x:112.2,y:683.5,alpha:0.923},0).wait(1).to({x:112.3,y:673,alpha:0.962},0).wait(1).to({x:112.4,y:662.5,alpha:1},0).wait(1).to({y:652,alpha:0.929},0).wait(1).to({x:112.5,y:641.5,alpha:0.857},0).wait(1).to({x:112.6,y:631,alpha:0.786},0).wait(1).to({x:112.7,y:620.5,alpha:0.714},0).wait(1).to({y:610,alpha:0.643},0).wait(1).to({x:112.8,y:599.5,alpha:0.571},0).wait(1).to({x:112.9,y:589,alpha:0.5},0).wait(1).to({x:113,y:578.5,alpha:0.429},0).wait(1).to({y:568,alpha:0.357},0).wait(1).to({x:113.1,y:557.5,alpha:0.286},0).wait(1).to({x:113.2,y:547,alpha:0.214},0).wait(1).to({x:113.3,y:536.5,alpha:0.143},0).wait(1).to({y:526,alpha:0.071},0).wait(1).to({x:113.4,y:515.6,alpha:0},0).to({_off:true},1).wait(22));

	// Layer 6
	this.instance_4 = new lib.Symbol60();
	this.instance_4.parent = this;
	this.instance_4.setTransform(554.3,1042.2,1,1,0,0,0,85.2,130.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({y:1031.6,alpha:0.1},0).wait(1).to({y:1021,alpha:0.2},0).wait(1).to({y:1010.4,alpha:0.3},0).wait(1).to({y:999.8,alpha:0.4},0).wait(1).to({y:989.2,alpha:0.5},0).wait(1).to({y:978.6,alpha:0.6},0).wait(1).to({y:968,alpha:0.7},0).wait(1).to({y:957.4,alpha:0.8},0).wait(1).to({y:946.8,alpha:0.9},0).wait(1).to({y:936.3,alpha:1},0).wait(1).to({y:925.7},0).wait(1).to({y:915.1},0).wait(1).to({y:904.5},0).wait(1).to({y:893.9},0).wait(1).to({y:883.3},0).wait(1).to({y:872.7},0).wait(1).to({y:862.1},0).wait(1).to({y:851.5},0).wait(1).to({y:841},0).wait(1).to({y:830.4},0).wait(1).to({y:819.8},0).wait(1).to({y:809.2},0).wait(1).to({y:798.6},0).wait(1).to({y:788},0).wait(1).to({y:777.4},0).wait(1).to({y:766.8},0).wait(1).to({y:756.2},0).wait(1).to({y:745.7},0).wait(1).to({y:735.1},0).wait(1).to({y:724.5},0).wait(1).to({y:713.9},0).wait(1).to({y:703.3},0).wait(1).to({y:692.7},0).wait(1).to({y:682.1},0).wait(1).to({y:671.5},0).wait(1).to({y:661},0).wait(1).to({y:650.4,alpha:0.889},0).wait(1).to({y:639.8,alpha:0.778},0).wait(1).to({y:629.2,alpha:0.667},0).wait(1).to({y:618.6,alpha:0.556},0).wait(1).to({y:608,alpha:0.444},0).wait(1).to({y:597.4,alpha:0.333},0).wait(1).to({y:586.8,alpha:0.222},0).wait(1).to({y:576.2,alpha:0.111},0).wait(1).to({y:565.7,alpha:0},0).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(303,640.9,330.9,233.2);


(lib.beginnerArena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D0D2D3").s().p("AhkCjQgSgRABgYQgBgYASgQIBBhCQAHgGAAgJQAAgJgHgHIhBhBQgSgSABgXQgBgYASgRQAQgRAYAAQAYAAARARIB4B5QASASgBAXQABAZgSARIh4B5QgRARgYAAQgYAAgQgRg");
	this.shape.setTransform(310.1,58.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58595B").s().p("AgQBVQgIgCgFgFQgGgEgDgHQgDgIAAgKIABgKIACgJIAWAAIAAAQQABAGADAEQACADADACQAEABAEAAQAHAAADgEQADgEAAgFIAAgFIgDgEIgDgGIgFgFIgVgbIgJgLIgHgLIgFgNQgCgGAAgIQAAgKAEgHQADgHAGgFQAFgFAIgCQAHgDAIABQAJAAAIABQAGADAGAFQAFAEADAGQADAHAAAJIgBALIgCAJIgVAAIgBgOIgDgLIgEgGQgDgCgFAAQgDAAgDACIgEADIgCAEIgBAGQAAAGADAEIAIALIAXAdIAGAIIAHALIAFALQADAIAAAHQAAAJgDAHQgDAIgGAFQgFAFgIADQgIACgJAAQgJAAgHgBg");
	this.shape_1.setTransform(146.8,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("AglBWIAAipIAWAAIADARQAFgJAHgFQAFgEAIAAQANgBAGAJQAHAIgBARIAAAEIgBAHIgBAFIgCAGIgVAAIAAgQIgBgIIgCgFIgCgDIgDgBQgEAAgCADQgEACgCAEIAACLg");
	this.shape_2.setTransform(137.4,89.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58595B").s().p("AgKBVQgFgBgFgCQgGgDgEgFQgFgFgDgIQgEgJgCgMQgCgLAAgRIAAgZQAAgRACgLQACgNAEgHQADgJAFgEQAFgFAFgDQAFgCAGgBIAJAAIALAAQAFABAFACQAGACAEAFQAFAFADAIQAEAIACAMQACAMAAARIAAAZQAAARgCALQgCAMgEAIQgDAJgFAFQgFAFgFADQgFADgFAAIgLABgAgGg8QgDACgCAEQgCAFgBAJIgBATIAAAqIABATQABAJACAEQACAFADACQADACAEAAQAEAAADgCQADgCABgFQACgEABgJIABgTIAAgqIgBgTQgBgJgCgFQgBgEgDgCQgDgDgEAAQgEAAgDADg");
	this.shape_3.setTransform(126.1,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#58595B").s().p("AgBBqQgGgCgFgFQgFgFgCgIQgDgJAAgOIAAhnIgNAAIAAgXIAPAAIAHgsIAVAAIAAAsIAbAAIAAAXIgbAAIAABqIABAJIADAFIAFADIAEAAIAIgBIAHgDIAAASIgGAFIgGAEIgHABIgGAAQgHAAgFgBg");
	this.shape_4.setTransform(116.3,87.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#58595B").s().p("AgPB1IAAipIAeAAIAACpgAgNhRQgFgFAAgKQAAgGACgEQABgDACgDIAGgDIAHAAQAJAAAFAEQAFAEAAALQAAAJgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_5.setTransform(109,86.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#58595B").s().p("AgBBqQgGgCgFgFQgFgFgCgIQgDgJAAgOIAAhnIgNAAIAAgXIAPAAIAHgsIAVAAIAAAsIAbAAIAAAXIgbAAIAABqIABAJIADAFIAEADIAGAAIAIgBIAGgDIAAASIgFAFIgHAEIgHABIgGAAQgHAAgFgBg");
	this.shape_6.setTransform(101.7,87.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58595B").s().p("AgTBTQgIgFgGgJQgGgIgDgNQgDgOAAgTIAAgeQAAgRADgLQACgMAEgIQAEgHAFgFIAKgHIALgDIAJAAQAIgBAIADQAIADAGAFQAGAHADAKQAEAKAAAPIgBALIAAAKIgCAKIgBAIIg4AAIAAARIABASQABAIACAFQACAEAEACQADACAFAAIAFgBIAFgDIADgIIABgLIAAgFIAaAAIAAAGQAAAZgLALQgMALgVgBQgKAAgJgDgAgFg9QgDACgCAEQgCAFgBAIIgBASIAAAKIAfAAIAAgEIAAgEIAAgFIAAgEQAAgRgEgIQgEgHgHAAQgDAAgEACg");
	this.shape_7.setTransform(91.9,90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("AguBxIAAjfIAZAAIACASIAFgHIAHgGIAIgFQAFgCAGAAIAGABIAHACQAEACAEAEQAEAEADAHQADAGACALQACAKAAAOIAAAzQAAAOgCAKQgCAKgDAGQgDAHgEAEQgEAEgEACIgIADIgHAAQgJAAgGgEQgHgEgEgFIABAVIAAAtgAgJhWQgDAEgDAFIAABlIADAEIADAEIAEADIAFABIAGgBQADgBACgEQACgDABgGIABgQIAAg/IgBgQQgBgGgCgDQgCgEgDgBIgGgBQgFAAgEADg");
	this.shape_8.setTransform(80.3,92.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58595B").s().p("AAuBWIAAiAIgBgJIgCgGQgCgDgDAAIgGgCQgFAAgEAEQgEADgEAFIAAACIAAACIAACEIgeAAIAAiAIAAgJIgDgGQgBgBAAgBQgBAAAAAAQAAgBgBAAQgBAAAAAAIgHgCQgEAAgEADQgFADgDAGIAACIIgfAAIAAipIAYAAIACASIAIgJIAJgHIAJgDIAKAAQAKAAAFAEQAHAFAEAJIAIgJIAIgGIAJgDIAJAAQAPAAAIAKQAIAKAAAVIAACBg");
	this.shape_9.setTransform(64.7,89.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("AgKBVQgFgBgFgCQgGgDgEgFQgFgFgDgIQgEgJgCgMQgCgLAAgRIAAgZQAAgRACgLQACgNAEgHQADgJAFgEQAFgFAFgDQAFgCAGgBIAJAAIALAAQAFABAFACQAGACAEAFQAFAFADAIQAEAIACAMQACAMAAARIAAAZQAAARgCALQgCAMgEAIQgDAJgFAFQgFAFgFADQgFADgFAAIgLABgAgGg8QgDACgCAEQgCAFgBAJIgBATIAAAqIABATQABAJACAEQACAFADACQADACAEAAQAEAAADgCQADgCABgFQACgEABgJIABgTIAAgqIgBgTQgBgJgCgFQgBgEgDgCQgDgDgEAAQgEAAgDADg");
	this.shape_10.setTransform(49.5,90);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AgfBFQgLgSAAgkIAAgeQAAgRACgLQACgMAEgIQAEgHAFgFQAFgFAFgCIALgDIAIAAQAJgBAHADQAHACAFAFQAFAEADAHQADAHAAAJIAAALIgCAIIgZAAIAAgGQAAgNgDgHQgDgHgHAAQgDAAgCACQgDABgCAFQgCAEgBAIIgBASIAAAvIABASQABAJACAEQABAFADACQADACAEAAIAFgBIAEgDIACgIIABgLIAAgFIAbAAIAAAGQAAAZgLALQgKALgVgBQgVAAgLgRg");
	this.shape_11.setTransform(38.5,90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AglBfQgMgMAAgVIAAgMIADgNIAYAAIAAALQAAAKACAGQABAHADAEQADAEAEACQAEACAEAAIAIgCQAEgBACgDQACgDACgEQACgFgBgHIAAgXIgBgMQgBgFgCgDQgDgEgEgCQgFgCgEAAIgOAAIAAgVIAOAAIAGgBIAGgFQACgDACgEQABgFABgGIAAgWQgBgMgEgFQgEgGgIAAQgLAAgFAJQgGAJABARIAAAMIgZAAIgCgMIgBgNQAAgIADgIQACgIAHgHQAFgGAKgEQAJgEANAAQAMAAAJADQAKADAGAGQAGAGADAJQADAJAAALIAAAMQAAAJgDAHQgCAHgDAFQgEAGgEADIgKAGIAAABQAGACAGADQAFADAEAFQADAFADAIQACAHAAALIAAAOQAAAOgFAKQgDAKgIAGQgHAGgJADQgKADgKAAQgYAAgMgMg");
	this.shape_12.setTransform(21.3,88);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DC5B4E").s().p("AguBoIAAjMIAcAAIADAVQAGgMAIgGQAHgGAJAAQAQAAAIAKQAIAKAAAUIgBAGIgBAIIgBAHIgCAHIgbAAIAAgTIAAgKIgDgHIgDgDIgEgBQgEAAgDADQgEADgCAFIAACog");
	this.shape_13.setTransform(117.4,34.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DC5B4E").s().p("AgXBkQgKgFgIgKQgGgLgEgQQgDgQAAgXIAAgmQAAgTACgOQADgOAFgKQAEgJAHgGQAGgFAHgDQAGgDAGgBIALgBQAKAAAKADQAKADAGAIQAIAHAEANQAFAMgBASIAAANIgBANIgBAMIgCAJIhEAAIAAAVIABAXQABAJADAGQACAFAEADQAFACAFAAIAHgBQADgCADgDIADgJIACgNIAAgHIAfAAIAAAIQAAAdgOAOQgOANgZAAQgNAAgKgFgAgGhKQgDACgDAGQgDAFgBAJIgBAWIAAANIAlAAIAAgEIAAgGIAAgGIAAgFQABgUgFgJQgFgJgJAAQgEAAgEACg");
	this.shape_14.setTransform(104,35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DC5B4E").s().p("AATBoIAAibQAAgOgEgFQgFgFgIAAQgEAAgGAEQgFADgFAHIAAClIglAAIAAjMIAdAAIADAWQAFgHAFgFIAKgHIALgFIALgBQASAAAKANQAJAMAAAaIAACcg");
	this.shape_15.setTransform(89.5,34.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DC5B4E").s().p("AATBoIAAibQAAgOgEgFQgFgFgIAAQgEAAgGAEQgFADgFAHIAAClIglAAIAAjMIAdAAIADAWQAFgHAFgFIAKgHIALgFIALgBQASAAAKANQAJAMAAAaIAACcg");
	this.shape_16.setTransform(74.3,34.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DC5B4E").s().p("AgTCOIAAjNIAlAAIAADNgAgQhiQgGgHAAgLQAAgHACgEQABgFADgDQADgDAEgBIAJgCQALABAGAFQAGAGAAANQAAALgGAGQgGAHgLAAQgKAAgGgGg");
	this.shape_17.setTransform(63,31.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DC5B4E").s().p("AgTCHQgJgCgGgFQgHgEgEgHQgEgJAAgLIABgGIABgHIAbAAQAAAOAFAFQAFAGAKAAIAHgBQAEgCADgDQADgDABgHQACgFAAgKIAAggQgFAGgIAFQgHAFgMAAIgIAAIgJgEQgFgCgFgFQgFgFgDgIQgEgIgCgMQgDgNAAgQIAAg2QAAgRADgMQACgLAEgIQADgIAFgEQAFgFAFgCIAKgDIAIgBQAIAAAFACQAFACAFAEIAHAGIAFAIIADgUIAeAAIAADEQAAASgEANQgDAOgHAKQgHAJgLAGQgLAFgOAAQgKAAgJgCgAgHhrQgDACgCAEQgDAEgBAHIgCATIAABDIACASQABAHADAFQACAEAEABIAGACIAHgCIAFgDIAEgEIADgGIAAhwQgDgGgEgEQgFgFgHABg");
	this.shape_18.setTransform(51.4,38.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DC5B4E").s().p("AgXBkQgLgFgGgKQgIgLgDgQQgDgQAAgXIAAgmQAAgTACgOQAEgOAEgKQAEgJAHgGQAGgFAHgDQAGgDAGgBIAMgBQAKAAAJADQAJADAIAIQAHAHAEANQAFAMgBASIAAANIgBANIgBAMIgCAJIhEAAIAAAVIABAXQABAJADAGQACAFAEADQAFACAFAAIAHgBQADgCACgDIAEgJIACgNIAAgHIAfAAIAAAIQABAdgOAOQgOANgaAAQgNAAgKgFgAgGhKQgEACgCAGQgDAFgBAJIgBAWIAAANIAlAAIAAgEIAAgGIAAgGIAAgFQABgUgFgJQgFgJgJAAQgEAAgEACg");
	this.shape_19.setTransform(37.5,35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DC5B4E").s().p("Ag8B/IAAj9IAnAAIASAAIARADQAJACAIAEQAHAEAGAGQAGAGAEAKQADAJAAAOIAAAMQAAAKgDAIQgDAJgEAHQgFAGgGAEQgGAEgHACIAAABQATAEAKANQAJAPAAAWIAAANQAAAOgDAKQgDAKgFAIQgGAHgHAEQgIAFgJADQgJACgKABIgUABgAgWBkIALAAQAIAAAFgBQAGgDAFgEQAEgEADgHQACgGAAgJIAAgUQAAgJgCgHQgBgHgEgEQgFgFgGgCQgGgDgJAAIgLAAgAgWgRIAHAAQAIAAAGgCQAGgCAEgEQAFgEACgGQADgHAAgIIAAgLQAAgJgCgHQgCgHgEgEQgEgFgHgCQgFgDgKAAIgHAAg");
	this.shape_20.setTransform(23.3,32.5);

	this.instance = new lib.Path_5_1();
	this.instance.parent = this;
	this.instance.setTransform(178.5,57.6,1,1,0,0,0,187.5,61.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,5,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.beginnerArena, new cjs.Rectangle(-10,-5,381,139), null);


(lib.beginner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var canvas = this
		this.closeArenaBtn.addEventListener("click",closeArena)
		function closeArena(){
			canvas.parent.gotoAndPlay("view");
			
			
		}
		
		this.beginnerBtn.addEventListener("click",gotobeginnerArena)
		function gotobeginnerArena(){
			canvas.parent.gotoAndPlay("beginnerArena");
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgfBpIAAgYIAYAAIAAiOIgaAXIgOgQIAvgyIAYAAIAAC5IAYAAIAAAYg");
	this.shape.setTransform(244.1,138.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_1.setTransform(274.1,126.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_2.setTransform(274.1,144.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_3.setTransform(270.6,144.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_4.setTransform(267.1,144.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67B9A5").s().p("AgWAPIAAgdIAtAAIAAAdg");
	this.shape_5.setTransform(268.3,123.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhKCXIAAktICVAAIAAEtg");
	this.shape_6.setTransform(270.6,135.1);

	this.closeArenaBtn = new lib.Symbol16();
	this.closeArenaBtn.parent = this;
	this.closeArenaBtn.setTransform(492.1,78.2,1,1,0,0,0,36.6,36.6);

	this.beginnerBtn = new lib.beginnerArena();
	this.beginnerBtn.parent = this;
	this.beginnerBtn.setTransform(252.8,222.7,1,1,0,0,0,178.5,57.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DC5B4E").s().p("Ag0BxIgSgLIAKgYIAJAHIAKAGIAKAFQANAFAPAAQAYAAAKgNQAJgKgBgLQAAgKgBgGQgFgLgMgJIgMgHIgcgPQgQgIgIgIQgIgIgFgHQgJgQAAgZQAAgZASgSQASgSAdAAQARAAAPAEQAPAFAJAHIgHAYQgVgQgaAAQgQAAgJALQgKALAAARQAAAIACAHQAFALANAKIAPAIIAcAOIAMAHIAMAJQARASABAcQAAAcgUATQgTATgeAAQghAAgWgMg");
	this.shape_7.setTransform(264.3,76.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DC5B4E").s().p("AgMB6IhcjzIAfAAIBKDIIBKjIIAeAAIhcDzg");
	this.shape_8.setTransform(243.8,76.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AnQClIAAlJIOhAAIAAFJg");
	this.shape_9.setTransform(253,76.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3B7062").s().p("Ag1goIBsAAIhsBRg");
	this.shape_10.setTransform(293.8,100.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#67B9A5").s().p("AiACCIAAkCIEBAAIhUCAIBUCCg");
	this.shape_11.setTransform(301.3,92);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3B7062").s().p("Ag2goIBtAAIAABRg");
	this.shape_12.setTransform(212,100.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#67B9A5").s().p("AnQDJIAAmRIOhAAIAAGRg");
	this.shape_13.setTransform(253,76.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#67B9A5").s().p("AiBCCIBViCIhViAIEDAAIAAECg");
	this.shape_14.setTransform(204.5,92);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAsQgEgEgBgGIAAhDQABgGAEgEQAEgEAFAAQAGAAAFAEQADAEAAAGIAABDQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_15.setTransform(250.1,20.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJAsQgEgFgBgGIAAhCQABgGAEgEQAEgEAFgBQAGABAEAEQAEAEAAAGIAABCQAAAGgEAFQgEAEgGABQgFgBgEgEg");
	this.shape_16.setTransform(257.4,21.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAtQgFgFAAgGIAAhDQAAgGAFgEQAEgFAFAAQAGAAAEAFQAEAEABAGIAABDQgBAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_17.setTransform(264.7,21.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAtQgFgFAAgGIAAhDQAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIAABDQgBAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_18.setTransform(272,21.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiSAVQgJAAgGgGQgGgGAAgJQAAgHAGgHQAGgGAJAAIElAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAg");
	this.shape_19.setTransform(223.4,2.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AE4C45").s().p("AjABnIEejNQA0AQAZAxQAWArAABAIAAAhg");
	this.shape_20.setTransform(275.2,30.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DC5B4E").s().p("AltDDIAAmFIDzADQgCAaAIAeQAPA7ArAUQBSAmEgAAQAfAAAXAIIkfDNg");
	this.shape_21.setTransform(248.1,21.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AlzAZQgRAAgOgMQgMgNAAgRIAAgHIM9AAIAAAHQAAARgMANQgNAMgSAAg");
	this.shape_22.setTransform(253,43.6);

	this.instance = new lib.Path_1_5();
	this.instance.parent = this;
	this.instance.setTransform(252.8,355.1,1,1,0,0,0,187.5,61.6);
	this.instance.alpha = 0.66;
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,5,9);

	this.instance_1 = new lib.Path_2_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(252.8,487.5,1,1,0,0,0,187.5,61.6);
	this.instance_1.alpha = 0.66;
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,5,9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#201108").s().p("AAnA9IhjhjQgFgEAAgHQAAgGAFgFQAFgFAGAAQAHAAAEAFIBjBjQAFAFAAAGQAAAHgFAEQgEAFgHAAQgGAAgFgFg");
	this.shape_23.setTransform(386.4,489.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#201108").s().p("AgkAlQgPgPABgWQgBgUAPgPQAQgQAUAAQAVAAAQAQQAPAPgBAUQABAWgPAPQgQAPgVAAQgUAAgQgPg");
	this.shape_24.setTransform(378.6,481.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#835E40").s().p("Ah0B1QgwgxAAhEQAAhDAwgxQAxgwBDAAQBEAAAxAwQAwAxAABDQAABEgwAxQgxAwhEAAQhDAAgxgwg");
	this.shape_25.setTransform(383.4,486.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A6A8AB").s().p("Ah0B0QgvgwAAhEQAAhDAvgwQAxgxBDAAQBEAAAwAxQAwAwAABDQAABEgwAwQgwAxhEAAQhDAAgxgxgAhRhRQgiAiAAAvQAAAwAiAiQAiAiAvAAQAwAAAigiQAigiAAgwQAAgvgigiQgigigwAAQgvAAgiAig");
	this.shape_26.setTransform(375.2,478.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#201108").s().p("AijCjQhDhEAAhfQAAhfBDhEQBEhDBfAAQBfAABEBDQBEBEAABfQAABfhEBEQhEBEhfAAQhfAAhEhEg");
	this.shape_27.setTransform(383.5,486.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#201108").s().p("AAnA9IhjhjQgFgFAAgGQAAgHAFgEQAFgFAGAAQAHAAAEAFIBjBjQAFAEAAAHQAAAGgFAFQgEAFgHAAQgGAAgFgFg");
	this.shape_28.setTransform(386.4,358.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#201108").s().p("AgkAkQgPgPABgVQgBgUAPgQQAQgPAUAAQAVAAAQAPQAPAQgBAUQABAVgPAPQgQAQgVAAQgUAAgQgQg");
	this.shape_29.setTransform(378.6,350.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#835E40").s().p("Ah0B1QgwgxAAhEQAAhDAwgxQAxgwBDAAQBEAAAxAwQAwAxAABDQAABEgwAxQgxAwhEAAQhDAAgxgwg");
	this.shape_30.setTransform(383.4,355.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A6A8AB").s().p("Ah0B1QgvgxAAhEQAAhDAvgwQAxgxBDAAQBEAAAwAxQAwAwAABDQAABEgwAxQgwAvhEABQhDgBgxgvgAhRhRQgiAiAAAvQAAAxAiAhQAiAiAvAAQAwAAAigiQAighAAgxQAAgvgigiQgigigwAAQgvAAgiAig");
	this.shape_31.setTransform(375.2,347.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#201108").s().p("AijCjQhDhEAAhfQAAheBDhEQBEhEBfAAQBfAABEBEQBEBEAABeQAABfhEBEQhEBEhfAAQhfAAhEhEg");
	this.shape_32.setTransform(383.5,355.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DC5B4E").s().p("AguBoIAAjMIAcAAIADAVQAGgMAIgGQAHgGAJAAQAQAAAIAKQAIAKAAAUIgBAGIgBAIIgBAHIgCAHIgbAAIAAgTIAAgKIgDgHIgDgDIgEgBQgEAAgDADQgEADgCAFIAACog");
	this.shape_33.setTransform(167.1,465.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DC5B4E").s().p("AgXBkQgKgFgIgKQgGgLgEgQQgEgQABgXIAAgmQAAgTACgOQADgOAFgKQAFgJAGgGQAGgFAGgDQAHgDAHgBIAKgBQAKAAAKADQAKADAGAIQAIAHAEANQAEAMABASIgBANIgBANIgBAMIgDAJIhCAAIAAAVIAAAXQACAJACAGQADAFADADQAFACAFAAIAHgBQADgCADgDIADgJIACgNIAAgHIAgAAIAAAIQgBAdgOAOQgNANgaAAQgNAAgKgFgAgGhKQgEACgCAGQgCAFgCAJIAAAWIAAANIAkAAIAAgEIAAgGIAAgGIAAgFQAAgUgEgJQgFgJgJAAQgEAAgEACg");
	this.shape_34.setTransform(153.8,465.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DC5B4E").s().p("AgBCAQgIgCgGgGQgFgGgEgKQgDgLAAgQIAAh/IgQAAIAAgaIATAAIAIg1IAaAAIAAA1IAhAAIAAAaIghAAIAACCIABALIAEAGIAFADIAGABIAKgBIAIgEIAAAVIgHAGIgIAEIgIADIgIAAQgIAAgGgCg");
	this.shape_35.setTransform(141.9,463.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DC5B4E").s().p("AgUBnQgJgDgGgFQgHgFgEgJQgEgIAAgNIABgNIADgKIAaAAIABATQACAHACAFQADAEAEACQAEACAFAAQAJAAAEgFQADgFAAgGIAAgGIgDgGIgEgGIgFgHIgbghIgKgMIgJgOIgGgQQgCgIAAgJQAAgMAEgJQAEgIAHgGQAHgGAJgDQAJgDAJAAQALAAAJADQAJADAGAFQAHAFADAIQAEAIAAALIgCAOIgCALIgaAAIgBgSQgBgHgCgFQgCgFgDgDQgEgCgGAAQgDAAgEABIgFAFIgDAFIgBAHQAAAHAEAGIAJANIAdAiIAIAKIAIANIAGAPQADAIAAAJQAAALgDAJQgEAJgHAGQgGAGgKAEQgKADgLAAQgLAAgJgCg");
	this.shape_36.setTransform(130.7,465.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DC5B4E").s().p("AgfBlQgHgEgFgGQgGgHgCgJQgDgJAAgKQAAgNADgKQADgKAHgIQAGgHAIgHQAJgFAMgGIAMgGIANgFIAAgbIgBgLIgCgJQgCgEgDgCQgEgCgGAAIgGABQgFACgCADQgDAEgCAGQgCAGAAAJIAAAJIgdAAIgBgLIgBgKQAAgLAEgJQAEgJAHgGQAHgGAKgDQAKgDALAAQAOAAALAEQAKADAGAHQAGAGACALQADAKAAANIAACZIgcAAIgDgSQgGAJgKAFQgJAGgNAAQgKAAgHgEgAAMAGIgIAEIgIAHIgGAIIgFALQgCAGAAAIQAAAMAFAHQAEAHAKAAQAEAAAFgCIAIgHIAAhAg");
	this.shape_37.setTransform(117,465.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DC5B4E").s().p("AAyB/IAAhUIAAglIABggIABgaIACgTIgDAAIgnClIgXAAIgnilIgCAAIABATIABAaIABAgIABAlIAABUIglAAIAAj9IAzAAIAYBiIAGAfIAEAbIABAAIAEgbIAGgfIAZhiIAyAAIAAD9g");
	this.shape_38.setTransform(100,463.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DC5B4E").s().p("AgMBoQgHgBgGgDQgGgEgGgGQgGgGgEgKQgEgKgCgOQgDgPAAgUIAAgfQAAgUADgPQACgOAEgKQAFgJAFgGQAGgGAGgDQAHgDAGgBIAMgBIANABQAHABAGADQAGADAGAGQAFAFAFAKQAEAKACAOQADAOAAAVIAAAfQAAAUgDAOQgCAPgFAKQgEAKgGAGQgFAGgHADQgGAEgGABIgNABgAgHhJQgEACgCAGQgDAGgBAKIgBAYIAAAyIABAYQABAKADAGQACAGAEACQADADAFAAQAFAAADgDQAEgCACgGIADgQIABgYIAAgyIgBgYIgDgQQgCgGgEgCQgDgDgFAAQgFAAgDADg");
	this.shape_39.setTransform(138.4,331.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DC5B4E").s().p("AguBoIAAjMIAcAAIADAVQAGgMAIgGQAHgGAJAAQAQAAAIAKQAIAKAAAUIgBAGIgBAIIgBAHIgCAHIgbAAIAAgTIAAgKIgDgHIgDgDIgEgBQgEAAgDADQgEADgCAFIAACog");
	this.shape_40.setTransform(126.2,331.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DC5B4E").s().p("AgXBkQgLgFgGgKQgIgLgDgQQgDgQgBgXIAAgmQAAgTAEgOQADgOAEgKQAFgJAGgGQAGgFAGgDQAHgDAGgBIAMgBQAKAAAJADQAJADAIAIQAHAHAEANQAFAMAAASIgBANIgBANIgCAMIgBAJIhEAAIAAAVIACAXQABAJACAGQADAFAEADQAEACAFAAIAHgBQADgCACgDIAFgJIABgNIAAgHIAfAAIAAAIQAAAdgNAOQgOANgaAAQgNAAgKgFgAgGhKQgDACgDAGQgCAFgBAJIgCAWIAAANIAlAAIABgEIAAgGIAAgGIAAgFQAAgUgFgJQgFgJgJAAQgEAAgEACg");
	this.shape_41.setTransform(112.9,331.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DC5B4E").s().p("AAXB/IAAh1IgsAAIAAB1IgnAAIAAj9IAnAAIAABqIAsAAIAAhqIAmAAIAAD9g");
	this.shape_42.setTransform(97.6,329.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("AgQBVQgHgCgHgFQgFgEgDgHQgDgIAAgKIABgKIACgJIAWAAIABAPQABAHABADQADAEAEACQADACAEgBQAHAAADgDQADgFAAgEIgBgGIgBgEIgEgGIgFgGIgVgbIgIgKIgIgLIgFgNQgCgHAAgHQAAgKADgHQAEgHAFgFQAHgFAHgCQAIgCAHAAQAJAAAHACQAIACAFAFQAFADADAIQADAGAAAJIgBALIgCAKIgWAAIgBgPIgBgLIgFgGQgDgCgFAAQgDAAgCABIgFAEIgCAEIgBAGQAAAGADAEIAHALIAYAcIAHAJIAGALIAFAMQADAGAAAIQAAAJgDAHQgDAHgGAGQgFAEgIAEQgIADgKAAQgHAAgIgCg");
	this.shape_43.setTransform(221.1,516.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("AgmBWIAAioIAXAAIADARQAFgKAHgFQAGgFAGABQAOAAAGAIQAGAIABAQIAAAGIgBAGIgCAFIgBAHIgWAAIAAgRIgBgIIgBgFIgDgDIgEgBQgDAAgCACQgDADgCAEIAACLg");
	this.shape_44.setTransform(211.7,516.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("AgKBWQgFgBgFgDQgGgDgEgFQgFgFgDgIQgEgIgCgMQgCgNAAgQIAAgZQAAgRACgLQACgMAEgJQADgHAFgFQAFgFAFgDQAFgCAGAAIAJgBIALAAQAFABAFACQAGADAEAFQAFAEADAIQAEAIACAMQACAMAAARIAAAZQAAAQgCANQgCALgEAJQgDAIgFAFQgFAFgFACQgFAEgFABIgLABgAgGg9QgDADgCAEQgCAGgBAIIgBAUIAAApIABAUQABAHACAFQACAFADADQADABAEAAQAEAAADgBQADgDABgFQACgFABgHIABgUIAAgpIgBgUQgBgIgCgGQgBgEgDgDQgDgCgEAAQgEAAgDACg");
	this.shape_45.setTransform(200.4,516.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("AgBBqQgGgCgFgFQgEgEgDgKQgDgIAAgOIAAhoIgNAAIAAgVIAQAAIAGgtIAVAAIAAAtIAbAAIAAAVIgbAAIAABrIABAJIADAGIAEACIAGAAIAIgBIAGgDIAAASIgFAFIgHAEIgHABIgHABQgGAAgFgCg");
	this.shape_46.setTransform(190.6,514.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("AgPB1IAAioIAeAAIAACogAgNhRQgFgFAAgKQAAgGACgDQABgEACgDIAGgCIAHgBQAJgBAFAFQAFAFAAAKQAAAKgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_47.setTransform(183.3,513.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#58595B").s().p("AgBBqQgGgCgFgFQgEgEgDgKQgDgIAAgOIAAhoIgNAAIAAgVIAQAAIAGgtIAVAAIAAAtIAbAAIAAAVIgbAAIAABrIABAJIADAGIAFACIAEAAIAIgBIAHgDIAAASIgGAFIgGAEIgHABIgHABQgGAAgFgCg");
	this.shape_48.setTransform(176,514.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#58595B").s().p("AgTBSQgIgEgGgJQgGgIgDgNQgDgOAAgTIAAgfQAAgQADgLQACgLAEgJQAEgHAFgFIAKgHIALgDIAJAAQAIAAAIACQAIADAGAGQAGAFADALQAEAKAAAPIgBALIAAAKIgCAKIgBAIIg4AAIAAARIABATQABAHACAFQACAEAEADQADABAFAAIAFgBIAFgDIADgIIABgLIAAgFIAaAAIAAAHQAAAYgLALQgMAKgVABQgKAAgJgFgAgFg9QgDACgCAEQgCAFgBAHIgBASIAAALIAfAAIAAgEIAAgEIAAgFIAAgEQAAgRgEgHQgEgIgHAAQgDAAgEACg");
	this.shape_49.setTransform(166.2,516.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#58595B").s().p("AguBxIAAjfIAZAAIACASIAFgHIAHgGIAIgFQAFgCAGAAIAGABIAHACQAEACAEAEQAEAEADAHQADAGACALQACAKAAAOIAAAzQAAAOgCAKQgCAKgDAGQgDAHgEAEQgEAEgEACIgIADIgHAAQgJAAgGgEQgHgEgEgFIABAVIAAAtgAgJhWQgDAEgDAFIAABlIADAEIADAEIAEADIAFABIAGgBQADgBACgEQACgDABgGIABgQIAAg/IgBgQQgBgGgCgDQgCgEgDgBIgGgBQgFAAgEADg");
	this.shape_50.setTransform(154.6,519);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#58595B").s().p("AAuBWIAAiAIgBgKIgCgFQgCgDgDgBIgGgBQgFAAgEAEQgEADgEAFIAAACIAAACIAACEIgeAAIAAiAIAAgKIgDgFQgCgDgCgBIgHgBQgEAAgEADQgFADgDAFIAACJIgfAAIAAioIAYAAIACASIAIgKIAJgHIAJgCIAKgBQAKgBAFAFQAHAFAEAKIAIgJIAIgHIAJgCIAJgBQAPAAAIAKQAIAKAAAVIAACBg");
	this.shape_51.setTransform(139,516.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#58595B").s().p("AgKBWQgFgBgFgDQgGgDgEgFQgFgFgDgIQgEgIgCgMQgCgNAAgQIAAgZQAAgRACgLQACgMAEgJQADgHAFgFQAFgFAFgDQAFgCAGAAIAJgBIALAAQAFABAFACQAGADAEAFQAFAEADAIQAEAIACAMQACAMAAARIAAAZQAAAQgCANQgCALgEAJQgDAIgFAFQgFAFgFACQgFAEgFABIgLABgAgGg9QgDADgCAEQgCAGgBAIIgBAUIAAApIABAUQABAHACAFQACAFADADQADABAEAAQAEAAADgBQADgDABgFQACgFABgHIABgUIAAgpIgBgUQgBgIgCgGQgBgEgDgDQgDgCgEAAQgEAAgDACg");
	this.shape_52.setTransform(123.8,516.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#58595B").s().p("AgfBFQgLgSAAgkIAAgfQAAgQACgLQACgLAEgJQAEgHAFgFQAFgEAFgDIALgDIAIAAQAJAAAHACQAHACAFAFQAFAEADAHQADAHAAAKIAAAKIgCAIIgZAAIAAgGQAAgMgDgHQgDgIgHAAQgDAAgCACQgDABgCAFQgCAFgBAGIgBASIAAAwIABATQABAHACAFQABAFADACQADADAEgBIAFgBIAEgDIACgIIABgLIAAgFIAbAAIAAAHQAAAYgLALQgKAKgVABQgVAAgLgSg");
	this.shape_53.setTransform(112.8,516.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#58595B").s().p("AgXBnQgIgDgGgFQgGgGgDgHQgCgHAAgIIABgKIACgKIAYAAIAAAEIABAQQABAGADAEQADADAEABQADACAGAAQAJAAAFgHQAGgIgBgQIAAgmQgFAFgGAEQgIADgJAAQgHAAgIgCQgHgDgGgFQgGgGgEgKQgEgJAAgQIAAgUQAAgRAEgLQADgMAHgHQAHgHAJgEQAJgDALAAQAMAAAKADQAKAEAGAHQAIAHADAMQADAMABASIAABWQgBAPgCAKQgCALgFAHQgEAHgFAEQgGAEgGACIgMADIgJABQgNAAgKgEgAgPhMQgEAHAAANIAAAgQAAAIABAFQACAFACADQADADADABQADABAFAAIAGgBIAFgBIAFgEIADgEIAAgxIgBgMQgBgFgCgDQgDgDgEgCIgIgBQgKAAgFAHg");
	this.shape_54.setTransform(95.5,514.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#58595B").s().p("AgQBUQgHgCgHgEQgFgEgDgIQgDgGAAgLIABgLIACgIIAWAAIABAPQAAAHACADQADAEAEACQADABAEABQAHAAADgFQADgDAAgGIgBgFIgBgFIgEgFIgFgGIgVgbIgIgJIgIgMIgFgNQgCgGAAgIQAAgKADgHQAEgHAFgFQAHgFAHgCQAHgDAIAAQAJAAAIADQAGACAGAEQAFAFADAHQADAGAAAIIgBAMIgCAKIgWAAIgBgPIgCgKIgEgHQgDgCgFAAQgDAAgCABIgFAEIgCAFIgBAFQAAAFADAGIAHALIAYAbIAHAJIAGAKIAFANQADAGAAAIQAAAJgDAHQgDAIgGAEQgFAGgIACQgIADgJABQgIgBgIgCg");
	this.shape_55.setTransform(221.2,384.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#58595B").s().p("AglBVIAAinIAWAAIADAQQAFgJAHgFQAGgFAGAAQAOABAGAHQAGAJAAAQIAAAGIAAAFIgCAHIgBAGIgWAAIAAgQIgBgJIgCgFIgCgDIgEgBQgDAAgCACQgDADgCAEIAACKg");
	this.shape_56.setTransform(211.8,384.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#58595B").s().p("AgKBVQgFgBgFgCQgGgDgEgFQgFgFgDgIQgEgIgCgNQgCgLAAgRIAAgaQAAgQACgMQACgLAEgJQADgIAFgEQAFgFAFgCQAFgDAGgBIAJgBIALABQAFABAFADQAGABAEAGQAFAEADAIQAEAIACAMQACAMAAAQIAAAaQAAARgCALQgCAMgEAJQgDAHgFAGQgFAFgFACQgFADgFABIgLACgAgGg9QgDADgCAFQgCAFgBAHIgBAVIAAAoIABAUQABAJACAEQACAFADADQADACAEAAQAEAAADgCQADgDABgFQACgEABgJIABgUIAAgoIgBgVQgBgHgCgFQgBgFgDgDQgDgCgEAAQgEAAgDACg");
	this.shape_57.setTransform(200.5,384.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#58595B").s().p("AgBBpQgGgBgFgFQgEgEgDgKQgDgIAAgNIAAhoIgNAAIAAgWIAPAAIAHgsIAVAAIAAAsIAbAAIAAAWIgbAAIAABqIABAJIADAGIAEACIAGABIAIgBIAGgEIAAARIgFAGIgHADIgHACIgGABQgHgBgFgCg");
	this.shape_58.setTransform(190.7,382.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#58595B").s().p("AgPB0IAAinIAeAAIAACngAgNhRQgFgFAAgKQAAgFACgEQABgEACgCIAGgDIAHgCQAJAAAFAFQAFAFAAAKQAAAJgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape_59.setTransform(183.4,381.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#58595B").s().p("AgBBpQgGgBgFgFQgEgEgDgKQgDgIAAgNIAAhoIgNAAIAAgWIAQAAIAGgsIAVAAIAAAsIAbAAIAAAWIgbAAIAABqIABAJIADAGIAFACIAFABIAHgBIAHgEIAAARIgFAGIgHADIgHACIgHABQgGgBgFgCg");
	this.shape_60.setTransform(176.1,382.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#58595B").s().p("AgTBSQgIgEgGgIQgGgJgDgOQgDgNAAgTIAAgfQAAgQADgLQACgMAEgHQAEgJAFgEIAKgHIALgDIAJgBQAIAAAIADQAIACAGAHQAGAFADALQAEAKAAAPIgBAKIAAALIgCAKIgBAIIg4AAIAAARIABATQABAHACAFQACAEAEADQADACAFAAIAFgBIAFgFIADgHIABgLIAAgFIAaAAIAAAGQAAAYgLALQgMAMgVAAQgKgBgJgEgAgFg9QgDACgCAFQgCAEgBAHIgBASIAAALIAfAAIAAgDIAAgGIAAgEIAAgFQAAgQgEgHQgEgIgHAAQgDAAgEACg");
	this.shape_61.setTransform(166.3,384.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("AguBxIAAjfIAZAAIACASIAFgHIAHgGIAIgFQAFgCAGAAIAGABIAHACQAEACAEAEQAEAEADAHQADAGACALQACAKAAAOIAAAzQAAAOgCAKQgCAKgDAGQgDAHgEAEQgEAEgEACIgIADIgHAAQgJAAgGgEQgHgEgEgFIABAVIAAAtgAgJhWQgDAEgDAFIAABlIADAEIADAEIAEADIAFABIAGgBQADgBACgEQACgDABgGIABgQIAAg/IgBgQQgBgGgCgDQgCgEgDgBIgGgBQgFAAgEADg");
	this.shape_62.setTransform(154.7,386.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#58595B").s().p("AAuBVIAAh/IgBgKIgCgGQgCgCgDAAIgGgCQgFAAgEADQgEADgEAGIAAACIAAADIAACCIgeAAIAAh/IAAgKIgDgGQgCgCgCAAIgHgCQgEAAgEADQgFAEgDAEIAACIIgfAAIAAinIAYAAIACASIAIgKIAJgGIAJgEIAKgBQAKAAAFAFQAHAFAEAJIAIgJIAIgFIAJgEIAJgBQAPAAAIALQAIAKAAAVIAACAg");
	this.shape_63.setTransform(139.1,384.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#58595B").s().p("AgKBVQgFgBgFgCQgGgDgEgFQgFgFgDgIQgEgIgCgNQgCgLAAgRIAAgaQAAgQACgMQACgLAEgJQADgIAFgEQAFgFAFgCQAFgDAGgBIAJgBIALABQAFABAFADQAGABAEAGQAFAEADAIQAEAIACAMQACAMAAAQIAAAaQAAARgCALQgCAMgEAJQgDAHgFAGQgFAFgFACQgFADgFABIgLACgAgGg9QgDADgCAFQgCAFgBAHIgBAVIAAAoIABAUQABAJACAEQACAFADADQADACAEAAQAEAAADgCQADgDABgFQACgEABgJIABgUIAAgoIgBgVQgBgHgCgFQgBgFgDgDQgDgCgEAAQgEAAgDACg");
	this.shape_64.setTransform(123.9,384.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#58595B").s().p("AgfBFQgLgSAAgkIAAgfQAAgQACgLQACgMAEgHQAEgJAFgEQAFgFAFgCIALgDIAIgBQAJAAAHADQAHACAFAEQAFAFADAHQADAHAAAJIAAALIgCAIIgZAAIAAgFQAAgOgDgGQgDgIgHAAQgDAAgCACQgDACgCAEQgCAFgBAGIgBATIAAAuIABATQABAJACAEQABAFADACQADACAEABIAFgBIAEgFIACgHIABgLIAAgFIAbAAIAAAGQAAAYgLALQgKAMgVAAQgVgBgLgRg");
	this.shape_65.setTransform(112.9,384.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#58595B").s().p("AgUBnQgKgDgHgIQgHgIgDgMQgEgMABgSIAAhVQAAgOACgLQADgKAEgHQAFgHAFgEQAGgEAFgCQAHgDAFAAIAKgBQANAAAJADQAJAEAGAFQAFAGADAHQACAHABAIIgBAKIgDAKIgYAAIAAgHIgBgPQgBgGgDgEQgCgDgEgBQgDgCgGAAQgJAAgGAIQgFAHgBAPIAAApQAFgFAIgEQAGgDAKAAQAIAAAGACQAIACAGAGQAGAGAEAJQADAKAAAQIAAAUQAAARgDALQgDAMgHAHQgGAHgKADQgJAEgLAAQgNAAgJgEgAgEAAIgGABIgFAEIgEAEIAAAtQAAAPAGAHQAEAHAKAAQAJAAAFgHQAFgHAAgNIAAggQAAgHgCgFQgBgFgDgEQgCgDgEAAIgIgBg");
	this.shape_66.setTransform(95.8,382.2);

	this.instance_2 = new lib.Path_3_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(252.8,487.5,1,1,0,0,0,187.5,61.6);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,5,9);

	this.instance_3 = new lib.Path_4_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(252.8,355.1,1,1,0,0,0,187.5,61.6);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",0,5,9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(6).p("EAdTgjCI2QAAQANg1AAg6QAAjAiIiIQiIiIjAAAQjAAAiICIQiICIAADAQAAA3AOA4I2RAAQkPAAjADAQi/DAAAEPMAAAA6nQAAEPC/DAQDAC/EPAAMA6mAAAQEQAADAi/QC/jAAAkPMAAAg6nQAAkPi/jAQjAjAkQAAg");
	this.shape_67.setTransform(253,291.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F9DD88").s().p("EgdTAsCQkPAAjAjAQi/jAAAkPMAAAg6mQAAkPC/jAQDAjAEPAAIWRAAQgOg4AAg3QAAjACIiIQCIiIDAAAQDAAACICIQCICIAADAQAAA7gNA0IWQAAQEQAADADAQC/DAAAEPMAAAA6mQAAEPi/DAQjADAkQAAg");
	this.shape_68.setTransform(253,291.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.instance_3},{t:this.instance_2},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_1},{t:this.instance},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.beginnerBtn},{t:this.closeArenaBtn},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.beginner, new cjs.Rectangle(-3,0,534.7,576.5), null);


(lib.arenaMask2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 2
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(538.5,1010.8,1,1,0,0,0,90.2,107.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:120.1,y:1023.3,alpha:0.958},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.792},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.458},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.292},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(376.2,667,1,1,0,0,0,376.2,667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:386.2,x:386.2,alpha:0.958},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.792},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.458},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.292},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,0,786.5,1334);


(lib.arenaMask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer 2
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(538.5,1010.8,1,1,0,0,0,90.2,107.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:120.1,y:1023.3,alpha:0.043},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:1},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(376.2,667,1,1,0,0,0,376.2,667);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:386.2,x:386.2,alpha:0.043},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,0,786.5,1334);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNA7QgGgDgFgGQgDgHgCgJQgCgKgBgNIAAgWQAAgMACgHQABgJADgGQADgFAEgEQAEgDAEgBIAHgCIAGgBQAGAAAGACQAFACAFAEQAEAEACAIQADAHAAALIAAAIIgBAHIgBAHIgBAFIgnAAIAAAMIAAAOIACAJQABADAEABIAEABIAFAAIADgDIACgFIABgIIAAgEIATAAIAAAFQgBARgHAIQgJAIgPAAQgHAAgGgDgAgDgsQgCACgCADIgBAJIgBANIAAAHIAVAAIAAgCIAAgEIAAgDIAAgDQAAgMgDgFQgDgFgFgBIgEABg");
	this.shape.setTransform(14.5,61.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbA9IAAh4IARAAIABANQAEgHAFgEQAEgDAFAAQAJAAAFAGQAFAGgBALIAAAEIAAAEIgBAFIgBAEIgQAAIAAgLIgBgHIgBgDIgBgCIgCgBQgEAAgBACIgDAFIAABig");
	this.shape_1.setTransform(7.4,61.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHA9QgEAAgDgCQgEgCgDgEQgEgDgCgHQgDgFgBgJIgBgVIAAgSQAAgLABgIQABgJADgGQACgGAEgDIAHgFIAIgCIAGgBIAIABQAEAAADACQAEABADAEQAEADACAGQADAFABAKIABATIAAASQAAAMgBAJQgCAJgCAFIgGAKIgHAGIgHACIgIABgAgEgrQgCABgCAEIgCAJIAAAPIAAAdIAAAOIACAJQACADACACQACABACAAQADAAACgBQACgCACgDIACgJIAAgOIAAgdIAAgPIgCgJQgCgEgCgBQgCgCgDAAQgCAAgCACg");
	this.shape_2.setTransform(-0.7,61.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABLQgFgBgDgDQgEgDgCgGQgCgHAAgJIAAhLIgJAAIAAgPIALAAIAFggIAPAAIAAAgIATAAIAAAPIgTAAIAABMIABAHIACADIACACIAFAAIAFAAIAFgDIAAANIgFAEIgEACIgFABIgEABQgGAAgCgCg");
	this.shape_3.setTransform(-7.7,60.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBJQgHgCgEgEQgEgFgCgFIgBgNIAAgJIACgIIASAAIAAAHIABALIACAIQACADADACQACABAEAAQAGAAADgEQAEgDAAgHIgBgGIgBgGIgEgGIgFgIIgWgbQgHgHgDgJQgEgIAAgJQAAgIADgGQACgGAEgFQAFgEAGgDQAHgDAHABQAKAAAHACQAGADAEAFQAEAFACAFQABAGAAAFIAAAJIgCAJIgSAAIAAgHQAAgMgDgGQgEgGgHAAQgGgBgDAEQgDAEAAAFIAAAHIACAEIACAEIADAEIAaAgQAHAJAEAJQADAIAAAKQAAAIgCAGQgDAGgEAFQgFAFgGACQgHACgIABQgKAAgGgEg");
	this.shape_4.setTransform(-14.9,60.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyA1IAAhpIBlAAIAABpg");
	this.shape_5.setTransform(41.3,-46.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DC5B4E").s().p("AgyA1IAAhpIBkAAIAABpg");
	this.shape_6.setTransform(31.2,-46.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxA1IAAhpIBjAAIAABpg");
	this.shape_7.setTransform(21.1,-46.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DC5B4E").s().p("AgxA1IAAhpIBkAAIAABpg");
	this.shape_8.setTransform(11,-46.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyA1IAAhpIBlAAIAABpg");
	this.shape_9.setTransform(0.9,-46.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DC5B4E").s().p("AgyA1IAAhpIBkAAIAABpg");
	this.shape_10.setTransform(-9.2,-46.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgxA1IAAhpIBjAAIAABpg");
	this.shape_11.setTransform(-19.3,-46.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DC5B4E").s().p("AgxA1IAAhpIBjAAIAABpg");
	this.shape_12.setTransform(-29.4,-46.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyA1IAAhpIBkAAIAABpg");
	this.shape_13.setTransform(-39.5,-46.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DC5B4E").s().p("AgxA1IAAhpIBkAAIAABpg");
	this.shape_14.setTransform(51.4,-46.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DC5B4E").s().p("AgxA1IAAhpIBjAAIAABpg");
	this.shape_15.setTransform(-49.6,-46.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DC5B4E").s().p("AgaBAIAAgLQAFABADgBIAGgDQADgDABgEQACgDAAgGIgYhjIATAAIAKA3IACASIABAAIACgSIAJg3IASAAIgVBmIgEANIgFAJQgCAEgFABQgEACgGAAQgFAAgFgCg");
	this.shape_16.setTransform(26.2,-60.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DC5B4E").s().p("AgWAzIAAhjIAOAAIABAKQADgGAEgDQADgDAEAAQAIAAAEAFQAEAFAAAKIAAADIgBADIgBAEIgBAEIgMAAIAAgKIgBgFIgBgDIgBgCIgCAAIgDABIgDAEIAABSg");
	this.shape_17.setTransform(20.5,-62.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DC5B4E").s().p("AgGAzIgGgCQgDgCgDgDQgDgDgCgFIgDgMIgBgRIAAgOIABgRQABgHADgFQACgFACgCIAGgFIAHgCIAFAAIAGAAIAGACIAGAEIAFAIIADAMQACAHAAAKIAAAOQAAAKgCAHQgBAHgCAFIgFAIIgGAFIgGACIgGAAgAgDgjQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAABIgCAIIAAAMIAAAXIAAAMIACAIQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAAAgBQABAAAAAAIADgEIACgIIAAgMIAAgXIAAgMIgCgIIgDgEQAAgBgBAAQAAAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_18.setTransform(13.9,-62.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DC5B4E").s().p("AgJAyQgFgBgDgCIgFgHQgCgFAAgGIABgGIABgFIANAAIAAAJIACAGIAEADIADABQAFAAABgCQACgDAAgDIAAgDIgBgDIgCgDIgDgDIgNgQIgFgFIgDgHIgDgIQgCgEAAgEQAAgGADgEQABgFADgCQAEgDAEgCQAFgBAEAAQAFAAAEABQAFACADACQADADACAEQABAEABAFIgBAGIgBAGIgNAAIgBgJIgBgGQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAIgDABIgCACIgCADIAAADQAAAEACACIAEAHIAOAQIADAFIAFAGIADAIIABAIQAAAFgCAFQgCAEgDADQgDADgFACQgEABgGAAIgJgBg");
	this.shape_19.setTransform(7.5,-62.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DC5B4E").s().p("AgJAyQgFgBgDgCIgFgHQgCgFAAgGIABgGIABgFIANAAIABAJIABAGIADADIAFABQADAAACgCQACgDABgDIgBgDIgBgDIgCgDIgDgDIgNgQIgEgFIgFgHIgDgIQgBgEAAgEQAAgGACgEQACgFAEgCQADgDAFgCQAEgBAEAAQAGAAAEABQAEACADACQADADACAEQACAEgBAFIAAAGIgBAGIgNAAIAAgJIgCgGQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAIgDABIgCACIgCADIAAADQAAAEACACIAEAHIAOAQIADAFIAFAGIACAIIACAIQAAAFgCAFQgBAEgEADQgDADgFACQgEABgGAAIgJgBg");
	this.shape_20.setTransform(1.5,-62.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DC5B4E").s().p("AgLAxQgFgCgDgGQgEgFgCgIQgBgIAAgLIAAgSQAAgJABgHQABgHADgEQACgFADgDIAHgEIAGgCIAEAAIAKABQAFACADAEQAEADACAGQACAGAAAJIAAAGIgBAHIAAAFIgBAFIghAAIAAAKIABALIABAHQABABAAAAQAAABABAAQAAABABAAQAAABABAAQACABACAAIAEgBIACgCIACgEIAAgHIAAgDIAQAAIAAAEQAAAOgHAHQgGAGgNAAQgGAAgFgCgAgCgjIgEADIgBAHIgBALIAAAGIASAAIAAgCIAAgDIAAgDIAAgCQAAgKgCgEQgDgFgEAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_21.setTransform(-4.9,-62.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DC5B4E").s().p("AgSApQgHgKABgWIAAgSIABgQQABgHACgEQACgFAEgDIAFgEIAHgCIAFAAQAFAAAEABIAHAEIAFAHQACAEgBAGIAAAGIgBAFIgPAAIAAgEQAAgHgBgEQgCgFgEAAIgDABIgDAEIgBAHIgBALIAAAbIABALIABAIQABADACABQAAAAABAAQAAABAAAAQAAAAABAAQABAAABAAIACgBIACgCIACgEIAAgHIAAgDIAQAAIAAAEQAAAOgGAHQgGAGgNAAQgMAAgGgKg");
	this.shape_22.setTransform(-11.3,-62.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DC5B4E").s().p("AgSApQgHgKABgWIAAgSIABgQQABgHACgEQACgFAEgDIAFgEIAHgCIAFAAQAFAAAEABIAHAEIAFAHQACAEgBAGIAAAGIgBAFIgPAAIAAgEQAAgHgBgEQgCgFgEAAIgDABIgDAEIgBAHIgBALIAAAbIABALIABAIQABADACABQAAAAABAAQAAABAAAAQAAAAABAAQABAAABAAIACgBIACgCIACgEIAAgHIAAgDIAQAAIAAAEQAAAOgGAHQgGAGgNAAQgMAAgGgKg");
	this.shape_23.setTransform(-17.6,-62.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DC5B4E").s().p("AAPA+IgEgWIgVAAIgEAWIgTAAIAXh7IAVAAIAXB7gAAJAaIgJg9IAAAAIgIA9IARAAg");
	this.shape_24.setTransform(-24.4,-63.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AmDBaIAAh/QAAgVAPgQQAQgPAVAAIKfAAQAWAAAPAPQAPAQAAAVIAAB/g");
	this.shape_25.setTransform(0.9,-62.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DC5B4E").s().p("AmTBvIAAibQAAgcAUgTQATgTAbAAIKjAAQAbAAATATQAUATAAAcIAACbg");
	this.shape_26.setTransform(0.9,-61.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjBfQgPgPAAgVIAAinIBlAAIAACnQAAAVgPAPQgPAOgVAAQgUAAgPgOg");
	this.shape_27.setTransform(41.3,-29.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AE4C45").s().p("AgiBfQgPgPgBgVIAAinIBkAAIAACnQAAAVgOAPQgPAOgVAAQgUAAgOgOg");
	this.shape_28.setTransform(31.2,-29.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgiBfQgQgPABgVIAAinIBjAAIAACnQAAAVgOAPQgPAOgVAAQgUAAgOgOg");
	this.shape_29.setTransform(21.1,-29.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AE4C45").s().p("AgjBfQgOgPAAgVIAAinIBkAAIAACnQAAAVgPAPQgPAOgVAAQgUAAgPgOg");
	this.shape_30.setTransform(11,-29.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgjBfQgPgPAAgVIAAinIBlAAIAACnQAAAVgPAPQgPAOgVAAQgUAAgPgOg");
	this.shape_31.setTransform(0.9,-29.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AE4C45").s().p("AgiBfQgPgPgBgVIAAinIBkAAIAACnQAAAVgOAPQgPAOgVAAQgTAAgPgOg");
	this.shape_32.setTransform(-9.2,-29.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgiBfQgPgPAAgVIAAinIBjAAIAACnQAAAVgOAPQgPAOgVAAQgTAAgPgOg");
	this.shape_33.setTransform(-19.3,-29.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AE4C45").s().p("AgjBfQgOgPAAgVIAAinIBjAAIAACnQAAAVgOAPQgPAOgVAAQgUAAgPgOg");
	this.shape_34.setTransform(-29.4,-29.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgiBfQgPgPgBgVIAAinIBkAAIAACnQAAAVgOAPQgPAOgVAAQgUAAgOgOg");
	this.shape_35.setTransform(-39.5,-29.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AE4C45").s().p("AgjBfQgOgPAAgVIAAinIBkAAIAACnQAAAVgPAPQgPAOgVAAQgUAAgPgOg");
	this.shape_36.setTransform(51.4,-29.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#AE4C45").s().p("AgiBfQgQgPABgVIAAinIBjAAIAACnQABAVgQAPQgOAOgVAAQgUAAgOgOg");
	this.shape_37.setTransform(-49.6,-29.9);

	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(-2.6,2.9,1,1,0,0,0,74,74);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AlwFxQiaiYABjZQgBjXCaiaQCYiZDYAAQDZAACZCZQCYCaABDXQgBDZiYCYQiZCajZgBQjYABiYiag");
	this.shape_38.setTransform(0.7,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.instance},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.6,-74.1,148,151);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNA7QgGgDgFgGQgDgHgCgJQgCgKgBgNIAAgWQAAgMACgHQABgJADgGQADgFAEgEQAEgDAEgBIAHgCIAGgBQAGAAAGACQAFACAFAEQAEAEACAIQADAHAAALIAAAIIgBAHIgBAHIgBAFIgnAAIAAAMIAAAOIACAJQABADAEABIAEABIAFAAIADgDIACgFIABgIIAAgEIATAAIAAAFQgBARgHAIQgJAIgPAAQgHAAgGgDgAgDgsQgCACgCADIgBAJIgBANIAAAHIAVAAIAAgCIAAgEIAAgDIAAgDQAAgMgDgFQgDgFgFgBIgEABg");
	this.shape.setTransform(14.5,61.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbA9IAAh4IARAAIABANQAEgHAFgEQAEgDAFAAQAJAAAFAGQAFAGgBALIAAAEIAAAEIgBAFIgBAEIgQAAIAAgLIgBgHIgBgDIgBgCIgCgBQgEAAgBACIgDAFIAABig");
	this.shape_1.setTransform(7.4,61.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHA9QgEAAgDgCQgEgCgDgEQgEgDgCgHQgDgFgBgJIgBgVIAAgSQAAgLABgIQABgJADgGQACgGAEgDIAHgFIAIgCIAGgBIAIABQAEAAADACQAEABADAEQAEADACAGQADAFABAKIABATIAAASQAAAMgBAJQgCAJgCAFIgGAKIgHAGIgHACIgIABgAgEgrQgCABgCAEIgCAJIAAAPIAAAdIAAAOIACAJQACADACACQACABACAAQADAAACgBQACgCACgDIACgJIAAgOIAAgdIAAgPIgCgJQgCgEgCgBQgCgCgDAAQgCAAgCACg");
	this.shape_2.setTransform(-0.7,61.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABLQgFgBgDgDQgEgDgCgGQgCgHAAgJIAAhLIgJAAIAAgPIALAAIAFggIAPAAIAAAgIATAAIAAAPIgTAAIAABMIABAHIACADIACACIAFAAIAFAAIAFgDIAAANIgFAEIgEACIgFABIgEABQgGAAgCgCg");
	this.shape_3.setTransform(-7.7,60.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBJQgHgCgEgEQgEgFgCgFIgBgNIAAgJIACgIIASAAIAAAHIABALIACAIQACADADACQACABAEAAQAGAAADgEQAEgDAAgHIgBgGIgBgGIgEgGIgFgIIgWgbQgHgHgDgJQgEgIAAgJQAAgIADgGQACgGAEgFQAFgEAGgDQAHgDAHABQAKAAAHACQAGADAEAFQAEAFACAFQABAGAAAFIAAAJIgCAJIgSAAIAAgHQAAgMgDgGQgEgGgHAAQgGgBgDAEQgDAEAAAFIAAAHIACAEIACAEIADAEIAaAgQAHAJAEAJQADAIAAAKQAAAIgCAGQgDAGgEAFQgFAFgGACQgHACgIABQgKAAgGgEg");
	this.shape_4.setTransform(-14.9,60.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyA1IAAhpIBlAAIAABpg");
	this.shape_5.setTransform(41.3,-46.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DC5B4E").s().p("AgyA1IAAhpIBkAAIAABpg");
	this.shape_6.setTransform(31.2,-46.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxA1IAAhpIBjAAIAABpg");
	this.shape_7.setTransform(21.1,-46.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DC5B4E").s().p("AgxA1IAAhpIBkAAIAABpg");
	this.shape_8.setTransform(11,-46.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyA1IAAhpIBlAAIAABpg");
	this.shape_9.setTransform(0.9,-46.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DC5B4E").s().p("AgyA1IAAhpIBkAAIAABpg");
	this.shape_10.setTransform(-9.2,-46.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgxA1IAAhpIBjAAIAABpg");
	this.shape_11.setTransform(-19.3,-46.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DC5B4E").s().p("AgxA1IAAhpIBjAAIAABpg");
	this.shape_12.setTransform(-29.4,-46.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyA1IAAhpIBkAAIAABpg");
	this.shape_13.setTransform(-39.5,-46.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DC5B4E").s().p("AgxA1IAAhpIBkAAIAABpg");
	this.shape_14.setTransform(51.4,-46.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DC5B4E").s().p("AgxA1IAAhpIBjAAIAABpg");
	this.shape_15.setTransform(-49.6,-46.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DC5B4E").s().p("AgaBAIAAgLQAFABADgBIAGgDQADgDABgEQACgDAAgGIgYhjIATAAIAKA3IACASIABAAIACgSIAJg3IASAAIgVBmIgEANIgFAJQgCAEgFABQgEACgGAAQgFAAgFgCg");
	this.shape_16.setTransform(26.2,-60.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DC5B4E").s().p("AgWAzIAAhjIAOAAIABAKQADgGAEgDQADgDAEAAQAIAAAEAFQAEAFAAAKIAAADIgBADIgBAEIgBAEIgMAAIAAgKIgBgFIgBgDIgBgCIgCAAIgDABIgDAEIAABSg");
	this.shape_17.setTransform(20.5,-62.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DC5B4E").s().p("AgGAzIgGgCQgDgCgDgDQgDgDgCgFIgDgMIgBgRIAAgOIABgRQABgHADgFQACgFACgCIAGgFIAHgCIAFAAIAGAAIAGACIAGAEIAFAIIADAMQACAHAAAKIAAAOQAAAKgCAHQgBAHgCAFIgFAIIgGAFIgGACIgGAAgAgDgjQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAABIgCAIIAAAMIAAAXIAAAMIACAIQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAAAgBQABAAAAAAIADgEIACgIIAAgMIAAgXIAAgMIgCgIIgDgEQAAgBgBAAQAAAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_18.setTransform(13.9,-62.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DC5B4E").s().p("AgJAyQgFgBgDgCIgFgHQgCgFAAgGIABgGIABgFIANAAIAAAJIACAGIAEADIADABQAFAAABgCQACgDAAgDIAAgDIgBgDIgCgDIgDgDIgNgQIgFgFIgDgHIgDgIQgCgEAAgEQAAgGADgEQABgFADgCQAEgDAEgCQAFgBAEAAQAFAAAEABQAFACADACQADADACAEQABAEABAFIgBAGIgBAGIgNAAIgBgJIgBgGQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAIgDABIgCACIgCADIAAADQAAAEACACIAEAHIAOAQIADAFIAFAGIADAIIABAIQAAAFgCAFQgCAEgDADQgDADgFACQgEABgGAAIgJgBg");
	this.shape_19.setTransform(7.5,-62.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DC5B4E").s().p("AgJAyQgFgBgDgCIgFgHQgCgFAAgGIABgGIABgFIANAAIABAJIABAGIADADIAFABQADAAACgCQACgDABgDIgBgDIgBgDIgCgDIgDgDIgNgQIgEgFIgFgHIgDgIQgBgEAAgEQAAgGACgEQACgFAEgCQADgDAFgCQAEgBAEAAQAGAAAEABQAEACADACQADADACAEQACAEgBAFIAAAGIgBAGIgNAAIAAgJIgCgGQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAIgDABIgCACIgCADIAAADQAAAEACACIAEAHIAOAQIADAFIAFAGIACAIIACAIQAAAFgCAFQgBAEgEADQgDADgFACQgEABgGAAIgJgBg");
	this.shape_20.setTransform(1.5,-62.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DC5B4E").s().p("AgLAxQgFgCgDgGQgEgFgCgIQgBgIAAgLIAAgSQAAgJABgHQABgHADgEQACgFADgDIAHgEIAGgCIAEAAIAKABQAFACADAEQAEADACAGQACAGAAAJIAAAGIgBAHIAAAFIgBAFIghAAIAAAKIABALIABAHQABABAAAAQAAABABAAQAAABABAAQAAABABAAQACABACAAIAEgBIACgCIACgEIAAgHIAAgDIAQAAIAAAEQAAAOgHAHQgGAGgNAAQgGAAgFgCgAgCgjIgEADIgBAHIgBALIAAAGIASAAIAAgCIAAgDIAAgDIAAgCQAAgKgCgEQgDgFgEAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_21.setTransform(-4.9,-62.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DC5B4E").s().p("AgSApQgHgKABgWIAAgSIABgQQABgHACgEQACgFAEgDIAFgEIAHgCIAFAAQAFAAAEABIAHAEIAFAHQACAEgBAGIAAAGIgBAFIgPAAIAAgEQAAgHgBgEQgCgFgEAAIgDABIgDAEIgBAHIgBALIAAAbIABALIABAIQABADACABQAAAAABAAQAAABAAAAQAAAAABAAQABAAABAAIACgBIACgCIACgEIAAgHIAAgDIAQAAIAAAEQAAAOgGAHQgGAGgNAAQgMAAgGgKg");
	this.shape_22.setTransform(-11.3,-62.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DC5B4E").s().p("AgSApQgHgKABgWIAAgSIABgQQABgHACgEQACgFAEgDIAFgEIAHgCIAFAAQAFAAAEABIAHAEIAFAHQACAEgBAGIAAAGIgBAFIgPAAIAAgEQAAgHgBgEQgCgFgEAAIgDABIgDAEIgBAHIgBALIAAAbIABALIABAIQABADACABQAAAAABAAQAAABAAAAQAAAAABAAQABAAABAAIACgBIACgCIACgEIAAgHIAAgDIAQAAIAAAEQAAAOgGAHQgGAGgNAAQgMAAgGgKg");
	this.shape_23.setTransform(-17.6,-62.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DC5B4E").s().p("AAPA+IgEgWIgVAAIgEAWIgTAAIAXh7IAVAAIAXB7gAAJAaIgJg9IAAAAIgIA9IARAAg");
	this.shape_24.setTransform(-24.4,-63.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AmDBaIAAh/QAAgVAPgQQAQgPAVAAIKfAAQAWAAAPAPQAPAQAAAVIAAB/g");
	this.shape_25.setTransform(0.9,-62.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DC5B4E").s().p("AmTBvIAAibQAAgcAUgTQATgTAbAAIKjAAQAbAAATATQAUATAAAcIAACbg");
	this.shape_26.setTransform(0.9,-61.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjBfQgPgPAAgVIAAinIBlAAIAACnQAAAVgPAPQgPAOgVAAQgUAAgPgOg");
	this.shape_27.setTransform(41.3,-29.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AE4C45").s().p("AgiBfQgPgPgBgVIAAinIBkAAIAACnQAAAVgOAPQgPAOgVAAQgUAAgOgOg");
	this.shape_28.setTransform(31.2,-29.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgiBfQgQgPABgVIAAinIBjAAIAACnQAAAVgOAPQgPAOgVAAQgUAAgOgOg");
	this.shape_29.setTransform(21.1,-29.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AE4C45").s().p("AgjBfQgOgPAAgVIAAinIBkAAIAACnQAAAVgPAPQgPAOgVAAQgUAAgPgOg");
	this.shape_30.setTransform(11,-29.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgjBfQgPgPAAgVIAAinIBlAAIAACnQAAAVgPAPQgPAOgVAAQgUAAgPgOg");
	this.shape_31.setTransform(0.9,-29.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AE4C45").s().p("AgiBfQgPgPgBgVIAAinIBkAAIAACnQAAAVgOAPQgPAOgVAAQgTAAgPgOg");
	this.shape_32.setTransform(-9.2,-29.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgiBfQgPgPAAgVIAAinIBjAAIAACnQAAAVgOAPQgPAOgVAAQgTAAgPgOg");
	this.shape_33.setTransform(-19.3,-29.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AE4C45").s().p("AgjBfQgOgPAAgVIAAinIBjAAIAACnQAAAVgOAPQgPAOgVAAQgUAAgPgOg");
	this.shape_34.setTransform(-29.4,-29.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgiBfQgPgPgBgVIAAinIBkAAIAACnQAAAVgOAPQgPAOgVAAQgUAAgOgOg");
	this.shape_35.setTransform(-39.5,-29.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AE4C45").s().p("AgjBfQgOgPAAgVIAAinIBkAAIAACnQAAAVgPAPQgPAOgVAAQgUAAgPgOg");
	this.shape_36.setTransform(51.4,-29.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#AE4C45").s().p("AgiBfQgQgPABgVIAAinIBjAAIAACnQABAVgQAPQgOAOgVAAQgUAAgOgOg");
	this.shape_37.setTransform(-49.6,-29.9);

	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(-2.6,2.9,1,1,0,0,0,74,74);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AlwFxQiaiYABjZQgBjXCaiaQCYiZDYAAQDZAACZCZQCYCaABDXQgBDZiYCYQiZCajZgBQjYABiYiag");
	this.shape_38.setTransform(0.7,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.instance},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.6,-74.1,148,151);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA9QgGgCgEgDQgDgDgDgFQgCgFAAgIIABgIIABgFIAQAAIAAALIADAHQABACADACIAFAAQAFABACgDQACgDAAgEIAAgDIgCgEIgCgDIgDgFIgQgTIgGgHIgFgIIgDgKQgCgEAAgGQAAgHADgFQACgEAEgEQAEgDAGgDQAFgBAFAAQAGAAAGABQAFACAEAEQAEADACAFQACAEAAAGIgBAJIgCAGIgPAAIAAgKQgBgFgBgCQgBgDgCgCQgCgBgEgBIgEABIgDACIgBAEIgBAEQAAAEACADIAGAIIAQAUIAFAGIAFAIIADAJQACAEAAAGQAAAGgCAFQgCAFgEAEQgEAEgGACQgFACgHAAQgGAAgFgBg");
	this.shape.setTransform(25.3,61.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBQQgFgBgEgDQgEgDgCgEQgCgFgBgHIABgDIABgEIAPAAQAAAIADADQAEADAFAAIAEAAIAEgDQACgCABgEIABgJIAAgTQgDAEgFADQgEADgGAAIgFgBIgFgCQgEgBgCgDQgEgDgCgEIgDgNQgCgHABgJIAAggQgBgKACgHIADgLQACgFAEgDIAGgDIAFgCIAFgBQAFAAACACIAGADIAEAEIADAFIACgMIARAAIAABzQAAAKgCAIQgBAIgFAGQgEAGgGADQgHADgIAAIgLgBgAgEg/IgDAEIgCAGIgBALIAAAoIABAKQABAFABACIADAEIAEAAIAEAAIADgCIADgDIACgDIAAhCIgFgGQgDgCgEAAg");
	this.shape_1.setTransform(17.1,63.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALA9IAAhbQAAgIgCgDQgDgDgFAAQgCAAgDACQgEACgCAEIAABhIgWAAIAAh4IARAAIACANIAGgHIAGgEIAFgCIAHgBQALAAAGAHQAFAIAAAPIAABbg");
	this.shape_2.setTransform(8.4,61.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBUIAAh5IAUAAIAAB5gAgJg6QgEgDAAgHIACgHIACgEQACgCACgBIAFgBQAGAAAEAEQADADAAAIQAAAGgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_3.setTransform(1.8,59.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBBMQgEgCgDgDQgEgDgBgHQgDgGAAgJIAAhLIgJAAIAAgQIAMAAIAEgfIAPAAIAAAfIATAAIAAAQIgTAAIAABNIABAFIABAFIADABIAFAAIAFAAIAFgCIAAAMIgEAEIgFADIgFAAIgFABQgEAAgEgBg");
	this.shape_4.setTransform(-3.4,60.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBBMQgEgCgDgDQgDgDgDgHQgBgGAAgJIAAhLIgKAAIAAgQIALAAIAFgfIAOAAIAAAfIAUAAIAAAQIgUAAIAABNIABAFIADAFIADABIADAAIAGAAIAFgCIAAAMIgFAEIgEADIgFAAIgFABQgEAAgEgBg");
	this.shape_5.setTransform(-9.3,60.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA7QgGgDgEgGQgFgGgBgKQgCgJAAgOIAAgWQAAgMABgHQABgJADgGQADgFAEgEQAEgDAEgBIAHgDIAGAAQAGAAAGACQAFABAFAFQADAFADAGQACAIABALIAAAHIgBAIIgBAHIgBAFIgoAAIAAANIABANIACAIQACAEADACIAFAAIADAAIAEgDIACgFIABgIIAAgEIATAAIAAAFQgBARgHAIQgJAIgPAAQgHAAgGgDgAgDgsQgCACgCAEIgCAIIgBANIAAAHIAWAAIAAgCIABgEIAAgDIAAgDQAAgMgEgFQgDgGgFAAIgEABg");
	this.shape_6.setTransform(-16.4,61.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBJQgHgCgEgFQgEgEgCgGIgBgMIAAgIIACgJIASAAIAAAHIABALIACAIQACADADABQACACAEAAQAGAAADgEQAEgDAAgHIgBgGIgBgGIgEgGIgFgIIgWgbQgHgHgDgJQgEgIAAgKQAAgHADgGQACgHAEgEQAFgEAGgDQAHgCAHAAQAKAAAHADQAGACAEAFQAEAFACAFQABAGAAAFIAAAJIgCAJIgSAAIAAgHQAAgMgDgGQgEgHgHABQgGAAgDADQgDAEAAAFIAAAHIACAEIACAEIADAEIAaAgQAHAJAEAJQADAIAAAKQAAAIgCAGQgDAGgEAFQgFAEgGADQgHADgIAAQgKgBgGgDg");
	this.shape_7.setTransform(-24.7,60.4);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(1.3,-16.7,1,1,0,0,0,46.5,46.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1F1F2").s().p("AhxB5QgtgbgaguIAegRQAWAmAlAWQAmAXAuAAQBCAAAwgwQAwgvAAhDQgBgsgWgnIAegRQAbAtAAA3QAABRg6A6Qg6A6hQAAQg3AAgvgcg");
	this.shape_8.setTransform(-12.7,-32.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AE4C45").s().p("AhdBkQglgWgWgmIAugaQAOAaAaAPQAaAQAfAAQAtAAAgghQAhggAAgtQAAgegQgbIAtgaQAXAnAAAsQAABCgwAwQgwAwhCAAQgtAAgngXg");
	this.shape_9.setTransform(-13,-33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AE4C45").s().p("AhXEUIhHh7IiNAAIgkg/ICThVQAaAuAtAbQAvAcA2AAQBRAAA6g6QA6g5AAhSQAAg2gbguICThUIAjA+IhGB6IBGB5IhGB7IiNAAIhHB7g");
	this.shape_10.setTransform(-12.3,-28.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ai3AzQAAhRA6g7QA6g5BRAAQA1AAAuAbQAtAaAaAtIgeARQgWgkgkgWQgmgXgsABQhDAAgwAvQgwAwAABDQAAApAVAnIgeARQgZgtAAg0g");
	this.shape_11.setTransform(-15.4,-42.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DC5B4E").s().p("AiXAqQAAhDAwgwQAwgvBDAAQArgBAnAXQAkAWAWAkIgtAaQgPgZgZgPQgagOgdAAQgugBggAhQghAgAAAuQAAAcAPAaIguAaQgVgnAAgpg");
	this.shape_12.setTransform(-15.1,-41.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DC5B4E").s().p("AlODXIBGh6IhGh5IBGh7ICNAAIBHh7ICMAAIBIB7ICNAAIAiA9IiTBUQgZgsgugbQgtgbg2AAQhRAAg6A6Qg6A5AABSQAAA1AZAsIiSBVg");
	this.shape_13.setTransform(-15.8,-46.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9DD88").s().p("AlHFJQiJiJAAjAQAAjACJiIQCHiIDAAAQDAAACJCIQCICIAADAQAADAiICJQiJCIjAAAQjAAAiHiIg");
	this.shape_14.setTransform(1.2,-16.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AlwFyQiZiagBjYQABjXCZiaQCZiZDXAAQDZAACYCZQCZCaAADXQAADYiZCaQiYCZjZAAQjXAAiZiZg");
	this.shape_15.setTransform(1.2,-16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-74.3,108.1,148.6);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA9QgGgCgEgDQgDgDgDgFQgCgFAAgIIABgIIABgFIAQAAIAAALIADAHQABACADACIAFAAQAFABACgDQACgDAAgEIAAgDIgCgEIgCgDIgDgFIgQgTIgGgHIgFgIIgDgKQgCgEAAgGQAAgHADgFQACgEAEgEQAEgDAGgDQAFgBAFAAQAGAAAGABQAFACAEAEQAEADACAFQACAEAAAGIgBAJIgCAGIgPAAIAAgKQgBgFgBgCQgBgDgCgCQgCgBgEgBIgEABIgDACIgBAEIgBAEQAAAEACADIAGAIIAQAUIAFAGIAFAIIADAJQACAEAAAGQAAAGgCAFQgCAFgEAEQgEAEgGACQgFACgHAAQgGAAgFgBg");
	this.shape.setTransform(25.3,61.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBQQgFgBgEgDQgEgDgCgEQgCgFgBgHIABgDIABgEIAPAAQAAAIADADQAEADAFAAIAEAAIAEgDQACgCABgEIABgJIAAgTQgDAEgFADQgEADgGAAIgFgBIgFgCQgEgBgCgDQgEgDgCgEIgDgNQgCgHABgJIAAggQgBgKACgHIADgLQACgFAEgDIAGgDIAFgCIAFgBQAFAAACACIAGADIAEAEIADAFIACgMIARAAIAABzQAAAKgCAIQgBAIgFAGQgEAGgGADQgHADgIAAIgLgBgAgEg/IgDAEIgCAGIgBALIAAAoIABAKQABAFABACIADAEIAEAAIAEAAIADgCIADgDIACgDIAAhCIgFgGQgDgCgEAAg");
	this.shape_1.setTransform(17.1,63.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALA9IAAhbQAAgIgCgDQgDgDgFAAQgCAAgDACQgEACgCAEIAABhIgWAAIAAh4IARAAIACANIAGgHIAGgEIAFgCIAHgBQALAAAGAHQAFAIAAAPIAABbg");
	this.shape_2.setTransform(8.4,61.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBUIAAh5IAUAAIAAB5gAgJg6QgEgDAAgHIACgHIACgEQACgCACgBIAFgBQAGAAAEAEQADADAAAIQAAAGgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_3.setTransform(1.8,59.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBBMQgEgCgDgDQgEgDgBgHQgDgGAAgJIAAhLIgJAAIAAgQIAMAAIAEgfIAPAAIAAAfIATAAIAAAQIgTAAIAABNIABAFIABAFIADABIAFAAIAFAAIAFgCIAAAMIgEAEIgFADIgFAAIgFABQgEAAgEgBg");
	this.shape_4.setTransform(-3.4,60.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBBMQgEgCgDgDQgDgDgDgHQgBgGAAgJIAAhLIgKAAIAAgQIALAAIAFgfIAOAAIAAAfIAUAAIAAAQIgUAAIAABNIABAFIADAFIADABIADAAIAGAAIAFgCIAAAMIgFAEIgEADIgFAAIgFABQgEAAgEgBg");
	this.shape_5.setTransform(-9.3,60.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA7QgGgDgEgGQgFgGgBgKQgCgJAAgOIAAgWQAAgMABgHQABgJADgGQADgFAEgEQAEgDAEgBIAHgDIAGAAQAGAAAGACQAFABAFAFQADAFADAGQACAIABALIAAAHIgBAIIgBAHIgBAFIgoAAIAAANIABANIACAIQACAEADACIAFAAIADAAIAEgDIACgFIABgIIAAgEIATAAIAAAFQgBARgHAIQgJAIgPAAQgHAAgGgDgAgDgsQgCACgCAEIgCAIIgBANIAAAHIAWAAIAAgCIABgEIAAgDIAAgDQAAgMgEgFQgDgGgFAAIgEABg");
	this.shape_6.setTransform(-16.4,61.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBJQgHgCgEgFQgEgEgCgGIgBgMIAAgIIACgJIASAAIAAAHIABALIACAIQACADADABQACACAEAAQAGAAADgEQAEgDAAgHIgBgGIgBgGIgEgGIgFgIIgWgbQgHgHgDgJQgEgIAAgKQAAgHADgGQACgHAEgEQAFgEAGgDQAHgCAHAAQAKAAAHADQAGACAEAFQAEAFACAFQABAGAAAFIAAAJIgCAJIgSAAIAAgHQAAgMgDgGQgEgHgHABQgGAAgDADQgDAEAAAFIAAAHIACAEIACAEIADAEIAaAgQAHAJAEAJQADAIAAAKQAAAIgCAGQgDAGgEAFQgFAEgGADQgHADgIAAQgKgBgGgDg");
	this.shape_7.setTransform(-24.7,60.4);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(1.3,-16.7,1,1,0,0,0,46.5,46.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1F1F2").s().p("AhxB5QgtgbgaguIAegRQAWAmAlAWQAmAXAuAAQBCAAAwgwQAwgvAAhDQgBgsgWgnIAegRQAbAtAAA3QAABRg6A6Qg6A6hQAAQg3AAgvgcg");
	this.shape_8.setTransform(-12.7,-32.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AE4C45").s().p("AhdBkQglgWgWgmIAugaQAOAaAaAPQAaAQAfAAQAtAAAgghQAhggAAgtQAAgegQgbIAtgaQAXAnAAAsQAABCgwAwQgwAwhCAAQgtAAgngXg");
	this.shape_9.setTransform(-13,-33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AE4C45").s().p("AhXEUIhHh7IiNAAIgkg/ICThVQAaAuAtAbQAvAcA2AAQBRAAA6g6QA6g5AAhSQAAg2gbguICThUIAjA+IhGB6IBGB5IhGB7IiNAAIhHB7g");
	this.shape_10.setTransform(-12.3,-28.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ai3AzQAAhRA6g7QA6g5BRAAQA1AAAuAbQAtAaAaAtIgeARQgWgkgkgWQgmgXgsABQhDAAgwAvQgwAwAABDQAAApAVAnIgeARQgZgtAAg0g");
	this.shape_11.setTransform(-15.4,-42.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DC5B4E").s().p("AiXAqQAAhDAwgwQAwgvBDAAQArgBAnAXQAkAWAWAkIgtAaQgPgZgZgPQgagOgdAAQgugBggAhQghAgAAAuQAAAcAPAaIguAaQgVgnAAgpg");
	this.shape_12.setTransform(-15.1,-41.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DC5B4E").s().p("AlODXIBGh6IhGh5IBGh7ICNAAIBHh7ICMAAIBIB7ICNAAIAiA9IiTBUQgZgsgugbQgtgbg2AAQhRAAg6A6Qg6A5AABSQAAA1AZAsIiSBVg");
	this.shape_13.setTransform(-15.8,-46.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9DD88").s().p("AlHFJQiJiJAAjAQAAjACJiIQCHiIDAAAQDAAACJCIQCICIAADAQAADAiICJQiJCIjAAAQjAAAiHiIg");
	this.shape_14.setTransform(1.2,-16.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AlwFyQiZiagBjYQABjXCZiaQCZiZDXAAQDZAACYCZQCZCaAADXQAADYiZCaQiYCZjZAAQjXAAiZiZg");
	this.shape_15.setTransform(1.2,-16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-74.3,108.1,148.6);


(lib.menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{menu_move:1,menu_close:12});

	// timeline functions:
	this.frame_0 = function() {
		var canvas = this
		//this.mask_menu.visible = false;
		this.deeper_menu.addEventListener("click",menu_anime_pine)
		var menuHidden = true;
		function menu_anime_pine(){
			if(menuHidden){
				canvas.gotoAndPlay("menu_move");
			}
			else{
				canvas.gotoAndPlay("menu_close");
			}
			menuHidden = !menuHidden
			//canvas.menushadow_layer.gotoAndPlay("menu_shadow");
			
		}
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(13).call(this.frame_25).wait(1));

	// button
	this.deeper_menu = new lib.menu_mask();
	this.deeper_menu.parent = this;
	this.deeper_menu.setTransform(-0.6,-1.6,1,1,0,0,0,52.2,52.1);

	this.timeline.addTween(cjs.Tween.get(this.deeper_menu).wait(26));

	// button
	this.instance = new lib.deeper_menu();
	this.instance.parent = this;
	this.instance.setTransform(-0.6,-1.6,1,1,0,0,0,52.2,52.1);

	this.instance_1 = new lib.Tween25("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,180);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween26();
	this.instance_2.parent = this;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},11).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true,rotation:0,mode:"independent"},11).wait(1).to({_off:false,rotation:180},11).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},11).wait(1).to({mode:"synched",startPosition:0},0).to({_off:true,rotation:180,mode:"independent"},11).wait(2));

	// Layer 8
	this.instance_3 = new lib.Tween12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.8,1.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1.2,-773.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true,x:-1.2,y:-773.7,alpha:1},11).wait(1).to({_off:false,x:-1.8,y:1.4,alpha:0},11).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},11).wait(1).to({_off:true,x:-1.8,y:1.4,alpha:0},11).wait(2));

	// Layer 7
	this.instance_5 = new lib.Tween14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.9,1.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-0.9,-616.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({_off:true,y:-616.4,alpha:1},11).wait(1).to({_off:false,y:1.7,alpha:0},11).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},11).wait(1).to({_off:true,y:1.7,alpha:0},11).wait(2));

	// Layer 6
	this.instance_7 = new lib.Tween18();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-2.5,1.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween19();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1.2,-457.7);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({_off:true,x:-1.2,y:-457.7,alpha:1},11).wait(1).to({_off:false,x:-2.5,y:1.7,alpha:0},11).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},11).wait(1).to({_off:true,x:-2.5,y:1.7,alpha:0},11).wait(2));

	// Layer 5
	this.instance_9 = new lib.Tween20();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1.2,3.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween21();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-1.2,-300.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({_off:true,y:-300.3,alpha:1},11).wait(1).to({_off:false,y:3.7,alpha:0},11).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},11).wait(1).to({_off:true,y:3.7,alpha:0},11).wait(2));

	// Layer 4
	this.instance_11 = new lib.Tween16();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-1.2,-2.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween17();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-1.2,-144.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({_off:true,y:-144.2,alpha:1},11).wait(1).to({_off:false,y:-2.2,alpha:0},11).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},11).wait(1).to({_off:true,y:-2.2,alpha:0},11).wait(2));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgHxA6oMAAAh1oIPjAAMAAAB1og");
	var mask_graphics_12 = new cjs.Graphics().p("EgHxA99MAAAh75IPjAAMAAAB75g");
	var mask_graphics_24 = new cjs.Graphics().p("EgHxA99MAAAh75IPjAAMAAAB75g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-0.2,y:-377.7}).wait(11).to({graphics:mask_graphics_12,x:-0.2,y:-394.5}).wait(12).to({graphics:mask_graphics_24,x:-0.2,y:-394.5}).wait(2));

	// Layer 2
	this.instance_13 = new lib.Tween23("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,406,1.054,1.054);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).to({scaleX:1,y:-407},11).wait(1).to({startPosition:0},0).to({x:-0.1,y:379.2},11).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.8,-53.7,104.4,104.4);


(lib._stage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var canvas = this
		this.arenaBtn.addEventListener("click",gotoArena)
		function gotoArena(){
			canvas.parent.gotoAndPlay("gotoArena");
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 17
	this.instance = new lib.blingbling();
	this.instance.parent = this;
	this.instance.setTransform(468.4,757.5,1,1,0,0,0,468.4,757.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol63();
	this.instance_1.parent = this;
	this.instance_1.setTransform(420.2,660.2,1,1,0,0,0,147.5,156.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AC4767").s().p("AjJhYIAAgxIGTDhIAAAyg");
	this.shape.setTransform(304.7,833.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#682234").s().p("AjMBYIGZjhIAAAxImZDig");
	this.shape_1.setTransform(471.2,833.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#853344").s().p("Ap0AZIAAgxITpAAIAAAxg");
	this.shape_2.setTransform(387.8,844.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C54C5F").s().p("Ap4DiImTjiIGTjhITxAAIGTDhImTDig");
	this.shape_3.setTransform(388.1,819.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(1));

	// levelAndName
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgCIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_4.setTransform(498.3,67.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgEgGQgFgGgKAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_5.setTransform(482,67.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHACQgFABgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAPIAACqIgfAAIgDgTQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAGIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_6.setTransform(465.3,67.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqBeQgQgYAAgxIAAgqQAAgWAEgPQADgQAFgKQAGgLAGgGQAHgHAHgCQAHgEAHgBIAMgBQAMAAAJAEQAJACAIAHQAHAGAEAJQADAKAAANIgBANIgCAMIghAAIAAgIQAAgRgEgKQgEgKgKAAQgEAAgEACQgDADgCAGQgEAFgBAKIgBAZIAABAIABAZQABAKADAHQACAGAEADQAEAEAFAAIAGgCQADgBADgEIADgKIACgPIAAgHIAkAAIAAAIQAAAigOAOQgOAPgdAAQgcAAgPgXg");
	this.shape_7.setTransform(451.2,67.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_8.setTransform(439.5,64.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgCIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_9.setTransform(427.3,67.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYCOIgzkbIAsAAIAfDgIABAAIAfjgIAsAAIgzEbg");
	this.shape_10.setTransform(411.5,65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFANQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_11.setTransform(388.8,67.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_12.setTransform(376.8,64.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgDAIAAIAIABIAKAEQAGACAFAGQAFAFAEAIQAEAKADAOQACANAAATIAABFQAAATgCAOQgDAOgEAIQgEAKgFAFQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAEgDAGIAACKIADAGIAFAFIAFAFIAHABIAIgCQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_13.setTransform(364.5,71.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgDAIAAIAIABIAKAEQAGACAFAGQAFAFAEAIQAEAKADAOQACANAAATIAABFQAAATgCAOQgDAOgEAIQgEAKgFAFQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAEgDAGIAACKIADAGIAFAFIAFAFIAHABIAIgCQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_14.setTransform(348.1,71.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHACQgFABgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAPIAACqIgfAAIgDgTQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAGIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_15.setTransform(331.4,67.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFANQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_16.setTransform(316.8,67.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_17.setTransform(300.6,67.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_18.setTransform(288,63.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhACOIAAkbIArAAIASABIASAEQAKACAJAGQAJAFAHAKQAHAKAEAOQAEAPAAAVIAAAKQAAAXgDAQQgEAPgHALQgGALgJAHQgIAGgKAEQgJADgJABIgRABIgEAAIAABXgAgVAYIACAAQAMAAAHgDQAIgEAFgHQAEgHACgLQACgLAAgQIAAgaQAAgMgCgJQgBgKgFgGQgFgGgIgCQgHgDgMAAIgCAAg");
	this.shape_19.setTransform(276.2,65);

	this.instance_2 = new lib.Path_0_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(141,66,1,1,0,0,0,40.2,32.4);
	this.instance_2.alpha = 0.66;

	this.instance_3 = new lib.Path_1_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(200.8,66,1,1,0,0,0,40.2,32.4);
	this.instance_3.alpha = 0.66;

	this.instance_4 = new lib.Path_2_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(630.8,66,1,1,0,0,0,40.2,32.4);
	this.instance_4.alpha = 0.66;

	this.instance_5 = new lib.Path_3_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(571.1,66,1,1,0,0,0,40.2,32.4);
	this.instance_5.alpha = 0.66;

	this.instance_6 = new lib.Path_4_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(386.2,66,1,1,0,0,0,165.3,32.4);
	this.instance_6.alpha = 0.66;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-57.1,111.7,-18.4,9.5).s().p("AuKUMMAKRgrPISEG3MgUvAnPg");
	this.shape_20.setTransform(524.1,626.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],56.7,101.2,13.4,0.8).s().p("AtgrnIRvnqMAJSAjVIndDOg");
	this.shape_21.setTransform(256.1,647);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag7COIBNj1IhSAAIAAgmICBAAIAAAXIhNEEg");
	this.shape_22.setTransform(712,126.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSAYQgHgIAAgQQAAgRAHgHQAHgIALABQANAAAGAHQAHAJAAAPQAAAQgHAIQgGAJgNAAQgLAAgHgJg");
	this.shape_23.setTransform(693.4,137.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_24.setTransform(681.7,132.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHACQgFABgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAPIAACqIgfAAIgDgTQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAGIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_25.setTransform(666.1,129);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhECOIAAkbIAtAAIAVABQAKAAAKADQALADAJAHQAJAGAHALQAHALAEARQAEARAAAZIAABRQAAAZgEARQgEARgHALQgHALgJAGQgJAHgLADQgKADgKAAIgVABgAgZBwIALAAQAMAAAGgDQAIgDAEgIQAFgHABgNQACgNAAgUIAAhXQAAgUgCgNQgBgNgFgIQgEgHgIgDQgGgDgMAAIgLAAg");
	this.shape_26.setTransform(650.8,126.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EAB4CE").s().p("AAjhgIAPArIg3CEIgsASg");
	this.shape_27.setTransform(696.2,176.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C884B2").s().p("AgrhQIArgTIAsBaIAABtg");
	this.shape_28.setTransform(695.6,194.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#87396C").s().p("AhfgkIBygjIBNBpIi/Amg");
	this.shape_29.setTransform(709.6,196.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AA5387").s().p("AhcAYIA8iaIB+AAIhuEEg");
	this.shape_30.setTransform(720.9,187.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DB79AA").s().p("AgcBOIhFhNIBFhOIB+Cbg");
	this.shape_31.setTransform(720.5,166.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F3D6E4").s().p("AhYASICxhPIhEBPIheAsg");
	this.shape_32.setTransform(708.7,164.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E080AD").s().p("AhtArIA4iDIBegsIBFBNIg9CZIhyAjg");
	this.shape_33.setTransform(706.6,179.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNCPQgIgBgHgDQgIgEgIgFQgHgGgFgKQgGgJgDgOQgEgNAAgTIAAh3QAAgSAEgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAHgDAIgBIANgBIAOABIAPAEQAIACAHAGQAHAFAGAKQAFAJAEAOQADANABATIAAB3QgBATgDANQgEAOgFAJQgGAKgHAGQgIAFgHAEIgPAEIgOABgAgShmQgGAIgBATIAACYQABASAGAIQAGAIAMAAQANAAAGgIQAHgIAAgSIAAiYQAAgTgHgIQgGgJgNAAQgMAAgGAJg");
	this.shape_34.setTransform(674.2,180.1);

	this.instance_7 = new lib.Path_5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(640,181.1,1,1,0,0,0,79,19.9);
	this.instance_7.alpha = 0.66;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAOCOIAAgzIhdAAIAAgXIBSjRIAzAAIAADGIAaAAIAAAiIgaAAIAAAzgAgjA5IAxAAIAAgqIAEhqIgFAAg");
	this.shape_35.setTransform(412.5,931.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgSAYQgHgIAAgQQAAgRAHgHQAHgIALAAQANABAGAHQAHAJAAAPQAAAPgHAJQgGAJgNAAQgLAAgHgJg");
	this.shape_36.setTransform(391.7,942.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_37.setTransform(380.3,934.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgyCOIAAkbIArAAIAAD5IA6AAIAAAig");
	this.shape_38.setTransform(367.7,931.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_39.setTransform(448.3,884.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_40.setTransform(432,884.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIAMgEIANgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_41.setTransform(411.5,884.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_42.setTransform(394.7,880.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_43.setTransform(382.4,881.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_44.setTransform(366,881.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgKAIgHQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_45.setTransform(349.2,884.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_46.setTransform(334.3,882);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D0D2D3").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAFQAFAFAEAKQAEAJADAOQACANAAATIAABGQAAASgCAOQgDANgEAJQgEAKgFAFQgGAFgFADIgLAEIgJAAQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHABIAIgBQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_47.setTransform(439.2,1003.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D0D2D3").s().p("AgNCOQgHgBgIgCQgHgEgHgFQgHgGgGgKQgFgKgDgPQgEgPAAgVIAAjDIAsAAIAADPIABAWQABAIADAGQADAFAFACQAEACAGAAQAGAAAFgCQAFgCADgFQADgGABgIIACgWIAAjPIArAAIAADDQAAAVgEAPQgDAPgFAKQgGAKgHAGQgHAFgIAEQgHACgIABIgNABg");
	this.shape_48.setTransform(421.7,996.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D0D2D3").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_49.setTransform(401.1,995.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D0D2D3").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAAOIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_50.setTransform(389.2,999.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D0D2D3").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_51.setTransform(374.2,999.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D0D2D3").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAAOIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_52.setTransform(359.4,999.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D0D2D3").s().p("AgyCOIAAkbIArAAIAAD5IA6AAIAAAig");
	this.shape_53.setTransform(346.3,996.8);

	this.instance_8 = new lib.Path_1_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(391.9,996.8,1,1,0,0,0,98.5,33.9);
	this.instance_8.alpha = 0.68;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_7},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 16
	this.menu_pine = new lib.menu();
	this.menu_pine.parent = this;
	this.menu_pine.setTransform(95,1242.4);

	this.timeline.addTween(cjs.Tween.get(this.menu_pine).wait(1));

	// btnLayer
	this.arenaBtn = new lib.arena();
	this.arenaBtn.parent = this;
	this.arenaBtn.setTransform(533,1240.4,1,1,0,0,0,52.2,54.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BD4440").s().p("ABfERQgJgCgEgIQgFgIACgJIAeh1QADgJgFgIQgFgIgJgCIjtg7QgIgCgGgHQgFgIAAgIIAhiKIDJiZIAAABIhJEvICVAmQAJADAFAHQAFAIgDAJIgoChQgCAJgJAFQgFADgGAAIgGgBg");
	this.shape_54.setTransform(673.8,1249.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#BD4440").s().p("AAABbIh0hIQgEgBADgIQAFgKAAgHIgBgIIALgIIBXAzQAIAGAIgDQAJgCAFgIIA/hmQAFgJAJgCQAJgCAIAFQAIAFACAIQACAKgFAHIhWCNQgFAJgJACIgFABQgGAAgFgDg");
	this.shape_55.setTransform(693.2,1222.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EF5046").s().p("AhfBhQgpgpAAg4QAAg4ApgoQAognA3AAQA4AAAoAnQApAoAAA4QAAA5gpAoQgoAng4ABQg3gBgogng");
	this.shape_56.setTransform(676.2,1200);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EF5046").s().p("AgzCBIA3jnIhfgFQgKgBgGAHQgHAGgBAJIgGB4QgBAKgGAGQgHAGgKgBQgJAAgGgHQgGgHAAgJIAJilQABgJAGgGQAHgHAJABICiAIQACAAA7ANIA7ANQAHACAGAGQAIAJgDANIg8D2g");
	this.shape_57.setTransform(664.3,1230.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EF5046").s().p("AAABbIh0hIQgEgBADgIQAFgKAAgHQAAgIgDgLQgDgGAEABIBjA7QAIAGAIgDQAJgCAFgIIA/hmQAFgJAJgCQAJgCAIAFQAIAFACAIQACAKgFAHIhWCNQgFAJgJACIgFABQgGAAgFgDg");
	this.shape_58.setTransform(693.2,1222.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BD4440").s().p("AAeBZIiUhMQgIgEgDgJQgDgIAEgIQAEgJAJgCQAJgDAIAEIBsA2QAIAEAJgDQAJgCAFgJIAag1QAbg3ACAAQACAAAEAGQAFAIAFADIANAHQAGADAAACQAAACgeA7IgeA6IgKAVQgFAIgJADIgHABQgFAAgFgCg");
	this.shape_59.setTransform(646.2,1261.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFDD7B").s().p("AlHFIQiJiHAAjBQAAi/CJiJQCHiIDAAAQDAAACJCIQCICJAAC/QAADBiICHQiJCIjAAAQjAAAiHiIg");
	this.shape_60.setTransform(669.1,1242.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AlxFxQiYiZAAjYQAAjYCYiYQCZiZDYAAQDZAACYCZQCZCYAADYQAADYiZCZQiYCZjZABQjYgBiZiZg");
	this.shape_61.setTransform(669.1,1242.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BD4440").s().p("AiEBSIEJkfIgGAZQgLAjgUAxQgfBIhBB6QgiA9gbAvg");
	this.shape_62.setTransform(404.7,1220.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EF5046").s().p("AhiCKQhjjAAAhDQAAhRA6g5QA6g5BRAAQBSAAA6A5QA6A5AABRQAABDhjDAQgxBggyBTQgwhTgyhggAhYjFQglAkAAA0QAAAzAlAlQAlAkAzAAQA1AAAlgkQAlglAAgzQAAg0glgkQglglg1AAQgzAAglAlg");
	this.shape_63.setTransform(398.4,1209.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AhaBbQglgmAAg1QAAg0AlgmQAmglA0AAQA1AAAlAlQAmAmAAA0QAAA1gmAmQglAlg1AAQg0AAgmglg");
	this.shape_64.setTransform(398.5,1198.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3EBCA4").s().p("AiaBLIiphLICphKIE1AAICpBKIipBLg");
	this.shape_65.setTransform(398.5,1240.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AhkAZIhIAtIh6i1IJNAAIh6C1IhJguIhkBYg");
	this.shape_66.setTransform(398.5,1254);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3EBCA4").s().p("AiJAMIgTAcIitj4IKTAAIitD4IgTgcIiKDFg");
	this.shape_67.setTransform(398.5,1261.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFDD7B").s().p("AlHFIQiIiHAAjBQAAi/CIiJQCIiIC/AAQDAAACJCIQCHCJAAC/QAADBiHCHQiJCIjAAAQi/AAiIiIg");
	this.shape_68.setTransform(398.5,1242.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AlxFxQiZiZAAjYQAAjYCZiYQCaiZDXAAQDZAACYCZQCaCYgBDYQABDYiaCZQiYCZjZABQjXgBiaiZg");
	this.shape_69.setTransform(398.5,1242.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.arenaBtn}]}).wait(1));

	// barLayer
	this.instance_9 = new lib.Symbol13();
	this.instance_9.parent = this;
	this.instance_9.setTransform(667.5,955.3,1,1,0,0,0,19.9,242.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Layer 18
	this.instance_10 = new lib.clouds_group_pine();
	this.instance_10.parent = this;
	this.instance_10.setTransform(456.4,180.7,1,1,0,0,0,456.4,180.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Layer 4
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6FB77F").s().p("ArnDEICGhJIHxCPInjjDIB4hMIHRDgInFkeICGhKIIaF9InjnKIEBhUIE0H6IjgohIDwgbIBAIxIBAoQICTA9IiSHCIDemBIBWApIkiGqIniBvg");
	this.shape_70.setTransform(115.1,574.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6FB77F").s().p("AmnBRIAhgrIDWCCIjBi0IA7hFICrDwIhzkiICAgxIAeFDIAXlIICXgbIh7FeICrlHIBXABIiZEDICvjoIBRAGIjBDdIDWjIIBXAAIk8EQIkQBLg");
	this.shape_71.setTransform(226.6,720.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CCCCCC").s().p("AjuAGQAJg0A2hPIA1hEICigZIA2AiQA7AoAWAfQAWAfAjBxQARA4ANAzIoLBRQAIiAAPhVg");
	this.shape_72.setTransform(206.7,722.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E6E6E5").s().p("Ak2CiQAPiAAOgcQAMgcAsh9IAph3IAvgHQA4gHAzgCQCfgGAnAzQAmAzA/C+QAfBfAXBVIqGBkQAGg6AHhAg");
	this.shape_73.setTransform(206,716.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CCCCCC").s().p("AjnEvQgEjDAIhAQAJg/Awi4IAvisQgCgUAFgXQAJgvAjgQQAjgPAeAwQAOAYAIAcIgFBmQgCBtAPAkQAPAlAyA/QAdAkBCBOQApAyAKCbQAGBNgDBEInLBGQgDhUgChig");
	this.shape_74.setTransform(166.9,692.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E6E6E5").s().p("AlFFbQAAi+AWhlQAKgsAKhmQAMh6AIgxQAfjNBSglQBTglBhBFQAxAiAhAqIgDCQQAGCVAuAbQAvAbAlA/QATAgAKAaIA1FYIqJBkQgEhLABhfg");
	this.shape_75.setTransform(167,691.2);

	this.instance_11 = new lib.Path();
	this.instance_11.parent = this;
	this.instance_11.setTransform(202.7,740.5,1,1,0,0,0,45.8,10.8);
	this.instance_11.alpha = 0.41;

	this.instance_12 = new lib.Path_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150.7,740.4,1,1,0,0,0,45.8,10.8);
	this.instance_12.alpha = 0.41;

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6FB77F").s().p("AmnBRIAigrIDVCCIjBi0IA7hFICsDwIh0kiIB/gxIAfFDIAXlIICXgaIh7FeICrlIIBXABIiZEDICvjoIBRAGIjBDdIDWjHIBWAAIk7EQIkQBJg");
	this.shape_76.setTransform(157.5,911.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EBA24D").s().p("AhDgWICHiSIgTFRg");
	this.shape_77.setTransform(139.8,914.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FAE485").s().p("AhhiJIC/AzIAEDgg");
	this.shape_78.setTransform(123.6,920.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CD6C38").s().p("Ag6hvIB0C/IhwAhg");
	this.shape_79.setTransform(138.9,923);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F2BC5F").s().p("AijAVIFHhdIiICRg");
	this.shape_80.setTransform(130.2,904.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EBA24D").s().p("AhugCIB+iQIBfElg");
	this.shape_81.setTransform(135.6,882.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FAE485").s().p("AhbiVIC3A3IhqD0g");
	this.shape_82.setTransform(115.3,891.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CD6C38").s().p("Ag4h6IDcCWIlHBfg");
	this.shape_83.setTransform(130.2,894.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F2BC5F").s().p("AiaARIE1hYIh/CPg");
	this.shape_84.setTransform(121.7,874.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CD6C38").s().p("AhCiKIDdC8Ik1BZg");
	this.shape_85.setTransform(121.7,862.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FAE485").s().p("Ag1jCIBrBwIhXEVg");
	this.shape_86.setTransform(109.5,857.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EBA24D").s().p("AhEAJICJicIhQEmg");
	this.shape_87.setTransform(164.4,906.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CD6C38").s().p("AAjh1IA5CJIi3Big");
	this.shape_88.setTransform(154,919.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FAE485").s().p("AgsioIBsBmIh/Drg");
	this.shape_89.setTransform(151.1,914.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F2BC5F").s().p("Ah7gXID3g2IiKCbg");
	this.shape_90.setTransform(159,899.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EBA24D").s().p("AhWAiIAtjUICAFlg");
	this.shape_91.setTransform(162.7,873.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CD6C38").s().p("AgwhjICsCQIj3A2g");
	this.shape_92.setTransform(159,887.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FAE485").s().p("AhTiSICnBfIhKDGg");
	this.shape_93.setTransform(145.6,882.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F2BC5F").s().p("AhqALIDVh0IgtDTg");
	this.shape_94.setTransform(147.9,866.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EBA24D").s().p("AhNALIgHh3IAQAMQAYAWAmA1QA4BPAjAzg");
	this.shape_95.setTransform(150.1,845.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CD6C38").s().p("Ag3hqICiBhIjVB0g");
	this.shape_96.setTransform(147.9,856.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FAE485").s().p("Ah3ipIDvB+IgzDWg");
	this.shape_97.setTransform(130.3,850.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F2BC5F").s().p("Ah3g+IDoAGIAHB3g");
	this.shape_98.setTransform(130.3,839.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FAE485").s().p("AhwhmIDIA7IAZCSg");
	this.shape_99.setTransform(101.3,925.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#CD6C38").s().p("Ah0hJIDpCDIjPAQg");
	this.shape_100.setTransform(121.7,928.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EBA24D").s().p("Ah0AHIAmiQIDDETg");
	this.shape_101.setTransform(121.7,920.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F2BC5F").s().p("Ah2ANIDthVIgmCQg");
	this.shape_102.setTransform(101.9,913.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FAE485").s().p("AhLi5ICXCdIhGDWg");
	this.shape_103.setTransform(89.4,896.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CD6C38").s().p("AgxhrICoCAIjtBWg");
	this.shape_104.setTransform(101.9,904.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EBA24D").s().p("AhUAVIBbiqIBOErg");
	this.shape_105.setTransform(105.4,891.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F2BC5F").s().p("Ah5hGIDzgPIhcCrg");
	this.shape_106.setTransform(94,885.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FAE485").s().p("AgigWQAEhBAIgfIAIgSIA5BpIhVCoQACg9AGhig");
	this.shape_107.setTransform(86.1,864.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#CD6C38").s().p("AgjhUICdCaIjzAOg");
	this.shape_108.setTransform(94,869.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EBA24D").s().p("AhugRIAhiYIC8FUg");
	this.shape_109.setTransform(126.1,850.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EBA24D").s().p("AhOApICIjrIAVGFg");
	this.shape_110.setTransform(98.3,857.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F2BC5F").s().p("AhGgjICNgoIghCXg");
	this.shape_111.setTransform(111.2,841.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F2BC5F").s().p("AhgANIDBiCIiHDrg");
	this.shape_112.setTransform(94.3,849.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#61B26F").s().p("Ag3ELQgQgfgugIQgugIg4AYIguAZQAGgOAQgTQAhgnAwgdQAngXA4AOQAdAHAUALQgQgSgfgTQg8gohEgKQg8gIhWALIhLANIA/gaQBLgcA5gNQA4gNBVAiQApARAgATQgVgagngiQhMhFhagtQhZgsheAMQgdAEgbAJIgUAIIAUgPQAagRAdgOQBegsBgAJQBgAKBQBKQAnAmATAjQgKgegDgqQgEhTAvg6QAvg4BkgLQAzgGApAGIg8AmQhEAxgeA3QgeA2AfBVQAQApAVAfQACgaAKgjQAXhIAxgwQBIhGBgALQAwAFAhATQgrAEgyARQhkAigkA+QgnBBAYBZQANAtAUAfIlIBqQABgOgIgQg");
	this.shape_113.setTransform(100.6,816.2);

	this.instance_13 = new lib.Path_90();
	this.instance_13.parent = this;
	this.instance_13.setTransform(135.5,934.3,1,1,0,0,0,51.2,13.2);
	this.instance_13.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.instance_12},{t:this.instance_11},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]}).wait(1));

	// Layer 3
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#386741").s().p("AhmB4QABgJgBgMQgBgXgLgOQgKgOgPgJIgMgHIATABQAWACASAFQARAEANANQAHAHADAGQADgHABgKQADgUgHgRQgHgRgMgOIgJgMIAaARQAbARAGAJQAKAMACAHQAJgvgJggQgGgTgLgbIgKgXIAOALQAQAQAIATQANAfACARQAEgrATgbQALgRAVgNIASgKIgNAvQgNAyABAUQABASAMAbQAGANAGAJQAKgdANgKQAJgHAQgIIAOgFIgNARQgOAWgDAUIgKBLg");
	this.shape_114.setTransform(174.9,465.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F1B64D").s().p("AQLN+QhohBhZhVQhVhSguhNQhUiMnfkuQm+kZkdh0QlTiJl/igQncjIhrg2Qg8gegZgsQgagsAXgkQAYgnBMgNQBWgPCKAWQCQAYCCA0QBXAiCMBLQCkBXBQAkQCaBGCqAwQClAvFDBEQC8AoGcBTQMICeDbBdQETB1CNCjQA8BGAKA1QAKA2gsATQhCAciygRQjYgUhRAJQg+AHAiBcQAMAgBZCoQBKCKAJBFQAOBjhhATQgnAHgqAAQinAAjJh8g");
	this.shape_115.setTransform(238.5,916.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F6D1A3").s().p("AnkIqQhBgpgug4Qgug4gPg4QgchlBbh0QBKheCjh0QCth7FkjGQGXjhBNALQAiAFiiBtQlODhgoAdQomGLCVCeICSCWQA1A3AHAUQAIAWgiAPQgNAGhnAfQgxAPgxAAQhmAAhmhAg");
	this.shape_116.setTransform(46.3,723.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F1B64D").s().p("Av8MyQkZh1gci2QgbivDOkNQCwjkKCkhQFuimKGjpQCvg/D8gHQB0gEA7ARQBDASgWAnQgSAikFCfIotFUQscHzgVDEQgMBvAkA9QAZAqA6AbQBGAgAHAHQAdAagUA4QgYBAhYAqQhWAph/AMQg2AFg1AAQjlAAjihfg");
	this.shape_117.setTransform(91.7,707.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F6D1A3").s().p("AjoGLQgmgZg1hLQg4hQgngfQhCg1higDQhZgChnANQhkAPglACQg9AFgfgUQgkgWgShCQggh3CbgaQA7gKBogBIC9ACQBVABAwgzQAcgdAjhRQAjhRAegfQAygyBYgBQBYgBBLAeQAyAUBBAuQBLA0AaANQA5AdA8gCQBSgDDPgkQDHgkBwAAQBHAAAqBSQAlBLAABrQAABqgmBIQgpBRhHgDQhAgDgvgoQgKgJhAhLQgvg2gzgYQhIgghtAGQhsAGhIBAQgwArg4BjQg+BuggAlQg+BHhZAOQgZAEgWAAQg9AAgsgeg");
	this.shape_118.setTransform(458.4,1104.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F1B64D").s().p("AlDKZQg9hCg1iTIgph4QgXhEgSgnQgyhshDgJQhGgKgfAtQgQAYgUBVQgUBRgcAkQgsA4hbAGQhfAGhQiWQhHiGgijKQghjHAXiSQAYifBTgKQAvgGA4AhQAXANBRA+QBFA1AyAWQBIAgBKgHQBJgGARg2QAGgVAAhgQgBhRAcgqQApg9BwgRQBxgSBjAqQBFAeBVBJQBtBgAUANQBIAxBEgHQBFgGBEgZQAfgMBWgnQCXhHCKgGQC0gHCLC7QB9CoAYDZQAJBZgkBGQgbAyg+A5QhZBQgKALQgwA3gHA7QgSCYgzBPQg8BehxADQg0ABgah7QgGgdgej2QgYi+gkheQg1iEhggNQhfgNg4B3QgdA/g0DWQgwDKgyBZQhLCLh+ANQgQABgQAAQhrAAhJhQg");
	this.shape_119.setTransform(465.3,1115.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F6D1A3").s().p("AjpEVQg0grAlhmQA4h5ANg6QAIgkACgxIADhLQAGhNAvgXQAkgSARApQALAbAJBMQAJBWAIAdQAPA4AfAEQAgAFAHgXQAEgNgDgqQgEgpAIgTQALgdAngEQApgFAkAzQAfAuAUBMQATBHABBDQABBFgUAcQgoA6i8ATQg0AGgrAAQhvAAgtglg");
	this.shape_120.setTransform(258.8,544);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F1B64D").s().p("AmqLbQhlgOgbgcQgsguBDi5IA5iWQAghUAGgtQAFgmgBhcQAAhqACgqQAMiuBcgGQAygDAdAyQAQAbAaBXQAYBRAYAiQAkA0A9AAQB5ABAmiaQAYhjgHjGQgGieALg9QANhSA0gfQAqgZAbBXQAPAyAWB4IAcCAQAOAyATADQAKABgCgqIgHhhQgHiRAvgMQAygMAOCMIAJCCQAGBTAIAtQAOBNA0DyQAoDYgWA6QgaBDg2AEQgyAEgpgxQgQgUgGhQIgIigQgMjag4gRQhBgUgPBMQgHAhAEBmQAAAOANBRQANBVAEA7QAMDHhPBcQhZBnknASQgrACgoAAQhIAAg/gIg");
	this.shape_121.setTransform(275.5,508.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#61B26F").s().p("AinC9QAFgJAAgNQAAgagdgTQgdgSgugBIgpADIAbgQQAjgRArgFQAigFAjAbQARANAKAOQgGgRgOgXQgcgtgrgbQgmgWhAgSIg3gNIA0ABQA8ACAsAIQArAIAuAwQAYAYAOAWQgFgYgPgjQgchFgvg5Qgug5hFgUIg7gIIBDgJQBPgDA/AjQA/AkAdBKQAPAlACAeQACgYAMgdQAYg6A1gZQAygYBKAWQAkALAbAQQgYABgfAHQg/ANgnAdQgmAcgIBCQgDAiAEAbQAJgRAUgWQAngqAzgRQBIgaA+AjQAgAQAQAXQgfgJgogDQhQgGgtAfQgyAigNBEQgGAiADAbg");
	this.shape_122.setTransform(179.1,458.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#386741").s().p("AgECKQgVgMgRABQgRABgQAGIgMAGQASgYAWgTQAOgMASgDQAJgCAGABQgEgGgHgHQgPgOgSgEQgSgDgTAAIgPABIAdgMQAfgMAKAAQAQgBAGACQgIgJgNgKQgZgTgTgGQgUgGgcgGIgZgFIASgFQAVgFAVAEQAiAHAPAIQgJgHgJgLQgUgVgHgUQgHgTAAgYIADgVIAeAmQAiAnARAKQAaARAsACQgSgZgBgRQgBgLACgRIADgPIAIAVQAKAYAPAOQAXAWAhAcIiDCrIgQgNg");
	this.shape_123.setTransform(135,366.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#61B26F").s().p("AgGEOQAEgnAQgoQAOggAogPQAVgIARgCQgSgEgaABQg1ABgtAYQgoAUgwAtQgYAXgPASQAqhLAwg1QAcghBAgPQAigHAagBQgXgIgmgFQhLgMhIALQhJAKgzAxQgaAYgMAWQAHgbAUgjQAmhFA/gkQA+gjBOANQAmAHAcANQgUgNgSgaQglgzAGg6QAFg4A4gzIA3gpIgVAzQgUA9AEAwQAFAwA1AoQAbAVAaAKQgKgRgIgcQgQg3AKg1QAOhMA+gjQAUgLAWgFQALgDAHgBIgwA3QguBBAEA3QAEA8AzAuQAaAWAZALIicDTQgFgJgLgGQgXgNgfAPQgfAOgYAoQgLAUgGARQgBgMABgUg");
	this.shape_124.setTransform(121.3,361.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F6D1A3").s().p("AkTEZQgMg3gOieQgTjWBAiOQAdhABBgGQAggDBIARQAjAIBKgQQApgIBHgQQAwgIAbAQQAgATAUA9QA1CmhyAyQgzAXg5hKIgrg2QgYgagVACQgsADgvB6QgrBvAABNQAABPgbBOQgeBbgwASQgGACgGAAQglAAgUhjg");
	this.shape_125.setTransform(286.3,406.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F1B64D").s().p("AhSJCQgohqgYh+QgNhJgNkyIgKkkIkQh9IktgoIDniaIEggmQE2gkBwADQBwADDwBRQB5ApBhAoIhlCnIhaA6IAMCUQAMCfgBAuQgDBIgoB7QgsCLgpAEQgoAFg3iAQgrhngRhRQgGgcgTgTQgTgSgXgBQg4gDgHBfQgDAjgEB4QgFB7gLBUQggEDhfAKIgDAAQgzAAg1iKg");
	this.shape_126.setTransform(265.6,400.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D76837").s().p("EAYJBJWQgjhngPiCIgIhsQgeg9g8g+Qh5h9iYgIQhRgEgkA8QgXAogMBiQgNBrgNAhQgaBBhCACQg+ACgYkZQgVmhgVkOQgmnzhVljQhyngjUkrQjMkgqhlxQj9iKl/i6Iqck/QspmFlHjmQnVlKBZkAQCknXVgowQGuivHzijQD6hRCjgvIDE0MIgPsrIhnkQImLggIEJjvIHFhsIBShzII8AkIAMCZIF/CXIi/FMIAYTOIC1MhQi4BHkPB0QoeDom0DjQpkE/k3EGQmGFJBoDfQCaFNLfEtQHgDFMRDHQNqDdKWGUQIQFDFxGpQEIEvCdFEQBPCiAaBlIATBkQAUB5gBBpQgBFSjGA3QhnAcgtCGQgSA0ghDWQgaCngxBCQhFBeiVgeQhbgRgthkQgcg8gYiQQgZiOgXgwQgnhThSAHQhQAHghDBQgMBHgLB+IgSDkQgaEkgzCTQhKDRiVAfQgpAJgmAAQjVAAhgkXg");
	this.shape_127.setTransform(262.5,804.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FAE485").s().p("AjCj2IGFBdIlJGQg");
	this.shape_128.setTransform(341.6,487.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F2BC5F").s().p("AkFAYIILiLIiHDng");
	this.shape_129.setTransform(348.4,460.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#CD6C38").s().p("AgTjIIFxDoIq7Cpg");
	this.shape_130.setTransform(363.1,492.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FAE485").s().p("Ai9jSIF7BbIj+FKg");
	this.shape_131.setTransform(328.6,442.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EBA24D").s().p("Ai4AAICHjoIDqHRg");
	this.shape_132.setTransform(379.6,472.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CD6C38").s().p("AgHikIENC9IoLCNg");
	this.shape_133.setTransform(348.4,446.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F2BC5F").s().p("AjxANIHkh0IhqDPg");
	this.shape_134.setTransform(333.9,419.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FAE485").s().p("AiWioIEtB2IiTDbg");
	this.shape_135.setTransform(309.2,404.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EBA24D").s().p("AiGAJIBpjPICkGNg");
	this.shape_136.setTransform(361.1,429.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CD6C38").s().p("AhehtIFRBnInkB0g");
	this.shape_137.setTransform(333.9,410);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EBA24D").s().p("AiogFIB6hbIDXDBg");
	this.shape_138.setTransform(341.2,399.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F2BC5F").s().p("AjTg6IGnAbIh5Bag");
	this.shape_139.setTransform(315.3,393.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FAE485").s().p("AjnlPIHPDJImLHWg");
	this.shape_140.setTransform(351.3,546.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F2BC5F").s().p("AldgPIK7ipIjsFxg");
	this.shape_141.setTransform(363.1,514.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CD6C38").s().p("AgijqIHRD1Qg/AZhaAfQixA9h6AeQh8AeibAbIiCAUg");
	this.shape_142.setTransform(378,556.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EBA24D").s().p("AjoA+IDslxIDlJng");
	this.shape_143.setTransform(397.8,526.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FAE485").s().p("AiugkIFeh3IiHE3g");
	this.shape_144.setTransform(354.1,393.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F2BC5F").s().p("ACCj3IAuF3IleB3g");
	this.shape_145.setTransform(354.1,365.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CD6C38").s().p("AgxknIFxC+QgVAegoAqQhQBTheA7QhcA8imBFIiSA6g");
	this.shape_146.setTransform(453.1,527.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FAE485").s().p("Aj5kzIHzAZIkNJOg");
	this.shape_147.setTransform(423.1,526.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EBA24D").s().p("Ai4BAIBsk9IA3BiQA+ByAsBQQAsBRAhBMQAPAlAIAVg");
	this.shape_148.setTransform(466.6,491.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F2BC5F").s().p("AkvCGIJfkkIhsE9g");
	this.shape_149.setTransform(428.5,482.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FAE485").s().p("AjojoIHRAAIjmHRg");
	this.shape_150.setTransform(397.9,472.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CD6C38").s().p("AhJjoIF5CsIpfElg");
	this.shape_151.setTransform(428.5,472.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#EBA24D").s().p("Ai8A3IBQkZIBABZQBDBhAYAoQAnBBBnCig");
	this.shape_152.setTransform(440,443.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F2BC5F").s().p("AkQCNIIhkZIhREZg");
	this.shape_153.setTransform(401.9,435.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FAE485").s().p("AijjGIFHAAIijGNg");
	this.shape_154.setTransform(374.5,429.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CD6C38").s().p("AhtjGIF+B1IohEYg");
	this.shape_155.setTransform(401.9,429.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EBA24D").s().p("Ai+BNIBckOIA2BIQA+BUAuA5QBJBfA2BPg");
	this.shape_156.setTransform(410,401.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F2BC5F").s().p("AjRCIIGjkPIhcEPg");
	this.shape_157.setTransform(379.1,395.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#CD6C38").s().p("AhKibIEcApImjEOg");
	this.shape_158.setTransform(379.1,393.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#EBA24D").s().p("Ah2CnIgul2IA0A/QA9BJAoA2QA9BWBzCLg");
	this.shape_159.setTransform(383.6,361.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#CD6C38").s().p("AEyDjQjKAAihgRQihgRiQgiIhwgfIHzliIHCHCQg8ADhVAAIgYAAg");
	this.shape_160.setTransform(172.6,568.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EBA24D").s().p("AjgiBIHBjAIAAKDg");
	this.shape_161.setTransform(197.6,558.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#386741").s().p("AidgpIARgNQARgPAFgRQAFgQgBgSIgCgNIAKAPQAMATAGARQAHARgCASQgBAJgDAFIAQgGQASgKAJgQQAPgaADgXIACAfQACAhgDAKQgEAQgEAGIAYgPQAbgRALgRQAUgbATglIAAASQgCAXgLASQgKASgLAOIgIAJIAXgLQAagMAVgBQAUgBAXAIQAMAEAHAFQhUAegYAUQgQANgNAZIgLAXIARgEQASgEALACQAQAFAYANIgXABQgaACgRAKIhBAmg");
	this.shape_162.setTransform(448.1,432.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FAE485").s().p("Ah7kzIF1EEInzFjg");
	this.shape_163.setTransform(150.1,550.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F2BC5F").s().p("AmbiBIM3BEInBC/g");
	this.shape_164.setTransform(178.9,532.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#CD6C38").s().p("AmbBHIHtjRIFKEVg");
	this.shape_165.setTransform(178.9,512.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EBA24D").s().p("AjEg8IGKicIhCGwg");
	this.shape_166.setTransform(206.9,504.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FAE485").s().p("AhXjXIFODeIntDRg");
	this.shape_167.setTransform(162.4,498.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F2BC5F").s().p("AlshvILZBEImKCbg");
	this.shape_168.setTransform(190.1,487.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#CD6C38").s().p("AlsBmIGtkPIEsFTg");
	this.shape_169.setTransform(190.1,466.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#EBA24D").s().p("AjGheIGMiWIhgHpg");
	this.shape_170.setTransform(216.5,458.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FAE485").s().p("Agmj8ID9DqImtEPg");
	this.shape_171.setTransform(175.1,451.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F2BC5F").s().p("AlFh0IKKBVImMCUg");
	this.shape_172.setTransform(203.8,437.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FAE485").s().p("ABckKICEGEIm/CRg");
	this.shape_173.setTransform(193.6,399.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FAE485").s().p("AiMDIQAdhgAmhjIBKjIIAehRICEFGIlFDjQAHgcAPgxg");
	this.shape_174.setTransform(76.2,526.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#61B26F").s().p("ACsEcQguhCg1gPQg5gRg8AhIgyAkIiRjaIAUgKQAUgRgEghQgEgjgdgjIgcgeIAeAKQAkASAfAdQAZAYACAqQAAAWgFAQQAKgOAJgYQARgzgHgyQgGgtgag9IgZgzIAgAqQAlAwAUAnQAWAmgIBCQgEAhgIAZIAhg0QAkhDAOhIQAOhHgbhCIgegzIAwAuQA0A8AMBGQANBHgnBGQgMAWgQASIgNAPIAxgXQA+gQA0AXQAzAZAdBGQAOAjAFAfQgQgSgYgTQgzgogugNQgvgLg5AkIguAnIAwgCQA6AEAuAcQBCAnAMBHQAGAigHAcQgMgegXghg");
	this.shape_175.setTransform(455.3,422.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#CD6C38").s().p("ADZDfQiDglh2gyQh3gxhjg7IhKgxIFEjjIFFHxQgqgIhCgSg");
	this.shape_176.setTransform(92.5,556.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#EBA24D").s().p("Ajhi9IHDh2Ih/Jng");
	this.shape_177.setTransform(115.1,550.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F2BC5F").s().p("AklijIJLDRInDB2g");
	this.shape_178.setTransform(108.3,515.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FAE485").s().p("AgwAVQAmhjAjhRIAdg/IBKEBIj/C8QATgsA8ieg");
	this.shape_179.setTransform(92.1,476.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#CD6C38").s().p("AkjgKID/i8IFIGNg");
	this.shape_180.setTransform(108.5,499.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#EBA24D").s().p("Ajyi0IHmgjIifGvg");
	this.shape_181.setTransform(129.2,498.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F2BC5F").s().p("AkXiCIIvDgInyAlg");
	this.shape_182.setTransform(125.6,467.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FAE485").s().p("AgbgIIBwjmIA8D5IkhDkQAqhgBLiXg");
	this.shape_183.setTransform(112.1,430.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#CD6C38").s().p("AkXABIEhjiIEOHDg");
	this.shape_184.setTransform(125.6,453.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#EBA24D").s().p("AjejGIG9g2IiwH5g");
	this.shape_185.setTransform(148.9,451.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#F2BC5F").s().p("Aj8h8IH5DDIm9A2g");
	this.shape_186.setTransform(145.9,418.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FAE485").s().p("AgbgJQA0hOA4hKIAvg7IArDxIlVDIQBGh8BJhqg");
	this.shape_187.setTransform(137.7,384.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#CD6C38").s().p("Aj8AFIFVjHICkGFg");
	this.shape_188.setTransform(145.9,406.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#EBA24D").s().p("Ajvh7IHfiPIk7IVg");
	this.shape_189.setTransform(178.8,399.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F2BC5F").s().p("AkEh4IIJBjIneCOg");
	this.shape_190.setTransform(176.7,374.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#ECA342").s().p("AovCDIoLhkIFfmAIJcilIMJAqIGxEgIkxHuIt7g4Ik6ENg");
	this.shape_191.setTransform(258.8,359.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#EBA24D").s().p("AicAUIE5kMIhuHxg");
	this.shape_192.setTransform(231.6,409.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#CD6C38").s().p("AlFAeIG/iQIDLDlg");
	this.shape_193.setTransform(203.8,422.8);

	this.instance_14 = new lib.Path_91();
	this.instance_14.parent = this;
	this.instance_14.setTransform(315.6,560,1,1,0,0,0,225.6,45);
	this.instance_14.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]}).wait(1));

	// Layer 15
	this.instance_15 = new lib.sunlayer();
	this.instance_15.parent = this;
	this.instance_15.setTransform(359.4,325.9,1,1,0,0,0,359.4,325.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// FlashAICB
	this.instance_16 = new lib.Path_6();
	this.instance_16.parent = this;
	this.instance_16.setTransform(315.7,996.8,1,1,0,0,0,20.6,32.4);
	this.instance_16.alpha = 0.68;

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgmA0Qgngzg3gBQA3AAAngzQAmgzAAhHQABBHAnAzQAmAzA3AAQg3ABgmAzQgnAzgBBHQAAhHgmgzg");
	this.shape_194.setTransform(251.1,287.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#6FB77F").s().p("AjmD+Ig2lbIAsgsIAeE+IAMl9IBJhDIg8HJIB2nxIBgADIi2HwIDUnWIBfAzIkWG7IEhl9IAtA1IjuEjIDojtIAmA5IjsDUIDpipIAtA0IlJDWg");
	this.shape_195.setTransform(642.5,572.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#EBA24D").s().p("Ah5hsIDzhGIjzFkg");
	this.shape_196.setTransform(595.4,576.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FAE485").s().p("AhXjXICvC4IiRD3g");
	this.shape_197.setTransform(574.4,568.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#CD6C38").s().p("AhIBoICRj3IAAEfg");
	this.shape_198.setTransform(575.9,580.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#F2BC5F").s().p("AjRhbIGjBxIjzBGg");
	this.shape_199.setTransform(586.6,556.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#EBA24D").s().p("Ahzh1IDohKIhdF/g");
	this.shape_200.setTransform(605.2,539.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FAE485").s().p("AgXi8ICjC2IkXDEg");
	this.shape_201.setTransform(579.6,528.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#CD6C38").s().p("AjRAqIEWjEICNE1g");
	this.shape_202.setTransform(586.6,543.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#F2BC5F").s().p("AjFhaIGMBrIjoBKg");
	this.shape_203.setTransform(597,518.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#CD6C38").s().p("AjFBFIEWj1IB2Fhg");
	this.shape_204.setTransform(597,502.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FAE485").s().p("ABfjaIAtDBIkXD1g");
	this.shape_205.setTransform(591.1,487.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#EBA24D").s().p("Ahwg2ID+hPIkbELg");
	this.shape_206.setTransform(624,582.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#CD6C38").s().p("AiSBOIEmirIgeC7g");
	this.shape_207.setTransform(598,586.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FAE485").s().p("ABhiyIAzC4IkmCsg");
	this.shape_208.setTransform(598,576.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#F2BC5F").s().p("AiYhbIExBoIj+BPg");
	this.shape_209.setTransform(622.9,568);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EBA24D").s().p("AhegiIC9jLIhgHbg");
	this.shape_210.setTransform(638.5,545.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#CD6C38").s().p("AiYAfIDUinIBdERg");
	this.shape_211.setTransform(622.9,555.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FAE485").s().p("AgNi/IB3DYIjUCng");
	this.shape_212.setTransform(618.3,539.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#F2BC5F").s().p("AiahrIE1AOIi9DKg");
	this.shape_213.setTransform(632.4,531.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#EBA24D").s().p("Ag3gnIBHiHIAJAXQALAoAHBTQAKB8ADBPg");
	this.shape_214.setTransform(642.3,504.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#CD6C38").s().p("AiaBdIDFjHIBwDVg");
	this.shape_215.setTransform(632.4,511);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FAE485").s().p("AhOj4ICxEpIjFDIg");
	this.shape_216.setTransform(626.8,495.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#F2BC5F").s().p("Ah8iUID5CiIhICHg");
	this.shape_217.setTransform(631.4,485.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FAE485").s().p("AhZi7ICzDFIhGCyg");
	this.shape_218.setTransform(542.9,559.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#CD6C38").s().p("Ah2AdIBGixICnEpg");
	this.shape_219.setTransform(556.8,575.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#EBA24D").s().p("AhThSICIiFIAfGvg");
	this.shape_220.setTransform(560.3,568.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#F2BC5F").s().p("AiehiIE8BBIiJCEg");
	this.shape_221.setTransform(549.8,550.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FAE485").s().p("AAwjlIA9EOIjZC9g");
	this.shape_222.setTransform(544.8,517.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#CD6C38").s().p("AieA+IDai7IBiD8g");
	this.shape_223.setTransform(549.8,534.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#EBA24D").s().p("Ahqg+IDVh+IhzF6g");
	this.shape_224.setTransform(566.5,528.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#F2BC5F").s().p("AiJiGIETCQIjVB+g");
	this.shape_225.setTransform(563.4,508.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FAE485").s().p("AhLBeIBUh5QAwhFAdgcQAPgPAFgBIgGCZIjNCAg");
	this.shape_226.setTransform(560.2,480.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#CD6C38").s().p("AiJgIIDNh/IBGEPg");
	this.shape_227.setTransform(563.4,495.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#EBA24D").s().p("AhEhnICJiRIgUHxg");
	this.shape_228.setTransform(612,495.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#EBA24D").s().p("AiXg0IEvimIjpG2g");
	this.shape_229.setTransform(585.4,487.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#F2BC5F").s().p("AhahgIC1AyIiICPg");
	this.shape_230.setTransform(609.7,475.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#F2BC5F").s().p("AiRhFIEpgNIkvClg");
	this.shape_231.setTransform(585.4,473.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#61B26F").s().p("Ak0E0QALgOABgWQADgtgsgnQgtgnhNgLIhEgEIAvgVQA+gVBIAAQA6ABA0A0QAaAbAPAaQgGgegUgqQgohUhEg2Qg8gxhmgtIhZgjIBVANQBkATBGAXQBHAYBGBcQAjAuAUAqQgFgqgThAQglh+hEhsQhEhshvgxQgigPgjgIIgcgEIAggDQAogCApAEQCEAOBiBLQBjBKAlCFQASBDgBAzIAGgZQAKggAQgdQAyheBbgfQBXgeB2A3QA7AbApAhQgngDg1AEQhqAJhFAoQhEAngWBwQgLA5ACAwIA3g7QBIhABWgUQB8gcBhBKQAxAlAYArQgygXhBgPQiEgdhQArQhXAvggByQgQA5ABAvg");
	this.shape_232.setTransform(616.9,438.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#67A7A7").s().p("AhBApQgfgIgDgSQgDgQAcgSQAbgRApgGQApgHAfAJQAfAIADASQADAQgbASQgcARgpAGQgRADgRAAQgUAAgSgFg");
	this.shape_233.setTransform(238.9,869.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#67A7A7").s().p("AhBApQgfgIgDgSQgDgQAcgSQAbgRApgGQApgHAfAJQAfAIADASQADAQgbASQgcARgpAGQgRADgQAAQgVAAgSgFg");
	this.shape_234.setTransform(46.7,789.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#61763D").s().p("AhBApQgfgIgDgSQgDgRAcgRQAbgRApgGQApgHAfAJQAfAIADARQADARgcARQgbARgpAHQgSADgQAAQgVAAgRgFg");
	this.shape_235.setTransform(109.2,732.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#67A7A7").s().p("AgqASQgTgFgBgIQgBgIASgHQASgIAagCQAZgCAUAFQATAEAAAJQABAHgSAIQgSAIgaACIgPAAQgQAAgNgDg");
	this.shape_236.setTransform(273.9,783.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#61763D").s().p("AgCAoQgtgEgfgPQgegOABgPQACgRAggJQAhgJAsAEQAsAEAfAOQAfAPgCAQQgBAQghAJQgXAGgcAAIgZgBg");
	this.shape_237.setTransform(520.1,932.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#67A7A7").s().p("AgDAoQhZgIg+gRQg+gRABgQQACgRBAgGQBBgGBYAIQBZAIA+ARQA+ARgBAQQgCARhAAGQgbACggAAQgrAAgzgEg");
	this.shape_238.setTransform(483.4,728.9);

	this.instance_17 = new lib.Path_92();
	this.instance_17.parent = this;
	this.instance_17.setTransform(575.2,587.7,1,1,0,0,0,52.1,15.2);
	this.instance_17.alpha = 0.66;

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#61763D").s().p("AgGBLQiogPh1ggQh1ggADgfQADgfB5gMQB4gLCoAPQCoAPB1AgQB1AggDAfQgCAfh5AMQg1AFg9AAQhQAAhfgJg");
	this.shape_239.setTransform(616.9,861.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#67A7A7").s().p("AiIA0Qg9gDgCgSQgDgSA5gUQA4gWBTgNQBSgNA9AEQA9ADACASQADASg5AVQg4AWhTAMQg/AKgzAAIgdgBg");
	this.shape_240.setTransform(63.8,699.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#61763D").s().p("EAyuAUNQl8gwjUk5QhChigphwIgchdQiLAaipAKQlTAUichPQhVgrgahNQgUg8AMhiQAUhyAHg4QANhigUg8QgghigJgQQgVgugtgbQgwgdhqgdQhcgYjUgsQkZg6vOCoQkxA1lSBFIkUA6QhkAWh2AtQjrBdhaB8QixD2lIBGQjzAzlhgsQjpgchnjDQgWgsghheQgYhCgQgKQgTgKiMAVQjmAjhEAHQmuAvhbiBQhdiFAljcQAMhFAYhFIAUg3Il7ljQLgjyPIiCQQtiOUrAAQTlAAUPDxQT4DtQtGoIB7MbQivDzj6DpQnHGmljAAQglAAgkgFg");
	this.shape_241.setTransform(398.2,628);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#917556").s().p("AkJLQQg5gGAOl2QAKjDAChRQAEiHgNgcQgNgdgfgfIg5g2QhEhDAKhFQAFggAegJQAWgGA3AEQBTAGAZAAQBGAAA7gQQBagYD7inQByhLAqgXQBEgmAOAPQAWAZjRD9QjyEnghA+QgYAvgkCNQgVBTgsC8QhTFUg5AAIgCAAg");
	this.shape_242.setTransform(667.2,1197.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#74542E").s().p("AqIVIQg0gngXjIQgTidADjFQABhDAqiyIBTlSQBpmzg/goQhXg5gth1QgziCAVifQASiKBnhlQAhggAkgYIAfgRIAVAHQAeAIAsADQCNAJDjgvQDjgvEthwQCWg4BpgvIAGBNQACBqgZCQQgOBQgyBDQgpA3hPBAQgvAmhsBSQhkBQhHBKQiNCTiaHoQgnB4hFDzQg3DDgVA3QhNDJhxDDQh0DKg2AAQgJAAgHgFg");
	this.shape_243.setTransform(677.9,1233.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#644725").s().p("Atde+QgjgYgahFQg8ifAXj9QAJhlAQmBQAZozAKjAQA0wJBGj4QBJj/CAizQAog4ApgqIAggeIBEADQBWADBdgFQEogPEAhVQEBhVDUhtQBCgiA2ghIApgZIgXCpQghDRgxDAQibJnj6DhQiKB8hUDFQhCCdgvDyQgbCOguEpQguEKg4CuQh3FnkfExQhdBhhxBfIh/BoQgSAQgTAAQgPAAgQgLg");
	this.shape_244.setTransform(673,1286.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#917556").s().p("AobVsQgjgagKhAQgIg3AJhqQAkk2ANjnQAQkeg3kzQgOhOgjihQgfiQgMhMQggjLBSj0QBMjfCHijQAbggCugcQCagYDTgMQDPgMCRAHQCfAHACAbQAEA1iMA2QhwAskqBMQh/AhhJA4Qg/AwgnBNQgSAigsB2QgnBpgoBDQgxBTgBBYQgBBBAdBtQAtCkAIArQAbCHgFCIQgNFThfGoQgsDGgrBpQgnBfgfAAQgHAAgGgFg");
	this.shape_245.setTransform(375.3,1285.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#74542E").s().p("ANnbuQksixiDkiQhFiag6mnQggjug4pCQgzoUggjLQgylBg9gKQjwgmh0IYQgnC1gUDfQgOCiACBYQACDFg3FwQhKHih1C5QhxCyjFA4Qg9ASg/ADIgyAAQhlp4gdj9QgLhpgIjoQgJkCADkDQAGq1BPjPQAUg1AviWQAfhlAfgyQAphFBOgzQBVg4Cbg1QEKhcFFggQCtgRDugMQCVgQC1BHQDCBMCCCMQC0DDAyEYQBIGWi7JcQhgE1APEWQAMDVBRDgQAuB/BfDTQBGCtgIByQgQDng9BfQgfAwgbABQh8geiWhYg");
	this.shape_246.setTransform(413.2,1309.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#644725").s().p("EgTKAnDQgthJgIhDQgGg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBODYA3HOQAUCvgOC9QgLCPgkDKIhBFeQgjDRgJCsQgKCyA4EGQAeCOBbFBQBPEcAWCAQAgDGgtBbQgvBdivAdQiGAXkHgKQk5gRiegEQkUgIinAdQiyAei/CtQiDB2iuDhQjCD7gjAkQg9A/gnAAQgaAAgRgag");
	this.shape_247.setTransform(423.9,1368.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#C6DA92").s().p("AgUQbQhogDjPgzQjMgxjkhMQofi1ipiUQhhhVAOhKQALg2BLg8IA9guQAigZANgQQAngsg4gkQgagQjaAaQlyAtiQAMQs0BEoSivQkihejOk0Qi7kVhsmyQCvEND2CKQHxEXI0CXQDRA4D/AwQA1AKFrA/QB+AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBvBegDBnQgBAzgXAgIBMgLQBigMBsgHQFXgUE3AyQCeAaCAAkQAaAICKAtQBEAXApAAQA0ABBLgdQBBgYB2hDQCNhSBLgqQEXibCFAAQB9AABoBBQBEAsAUAJQA5AdBDANQB/AZFajUQBNgwCthxQCBhUAkgRQAsgUBRAgQA1AUB1BCQCIBOBAAeQB3A5BgAQQC1AgFwAgQC3AQCTAKQgsCv55CjQoFAzpqArIoCAhQhpAJiAA1QgzAWitBXQiMBHhdAfQh8Aoh1AAIgTAAg");
	this.shape_248.setTransform(183.7,1053.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#C6DA92").s().p("AqlC0QhEgEgJi0QgCg4ADhDIAEg4IAPAeQAWAlAgAfQBnBjCoAMQCNALF1gyQF0gzEXhDQhmBMiQA9QjaBgmtAyQkOAgirAAQg3AAgsgEg");
	this.shape_249.setTransform(686.7,1099);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#A6BD55").s().p("AusUYQhngDjQgzQjMgxjjhMQofi2ipiTQhihVAOhKQALg2BMg8IA9guQAhgZAOgQQAmgsg3gkQgZgQjcAdQlqAxiaANQs1BKoOi9QmuiajTodQhKi8hCkfQhCk5gjiIQAoA9CeCeQCdCdC+CqQHfGqCLAaQBLAOAwhqQARgnAXhLIAqiGQA5itBPhZQBuh8CygLQDLgMCDCDQBVBUBmDZQA8B/AVAoQAxBcAwA8QB7CaC3AWQC1AWBxiXQBLhkBVj/QBgkhA1hgQBoi9CeghQE4hBIRFuQCwB6DFCnIDjDJQBLBEBHBpQAxBJBGCDQBXCgAeAyQBFB0BFBOQA6A3DXhZQCVg+E2irQF+jTBngzQD6h8BkACQB+ACCsCmQAtAsBSBVQBEBDAmAWQBhA6GyhDIFXg2QC6gbBcABQBvACCMAnQBAATCwA+QCQAzBPAQQB1AXBTgXQCagpFPlTQCoiqCJiiQgCAGgQCpQgaDLgxCsQiZIslIBrQvFE8kJjOQhOg9gQhvIgIhBQgCgZgMADQoHCP3BCoQnKA0n2AxImYAmQhpAJh/A1QgzAWitBXQiNBHhdAeQh8Aph2AAIgTAAg");
	this.shape_250.setTransform(274.6,1026.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#2B4C43").s().p("AjZKrQgLvzBmnsQBnnqBfjBQAeg8AagXIAUgLIBHFsIgVAcQgbAngbAzQhXCjg5DcQh4HagtPPQgXHoACGJQgamYgFn7g");
	this.shape_251.setTransform(598.8,1239);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#8CAC50").s().p("EgllAzeQhogDjQgzQjMgxjjhMQogi2ioiTQhihVAPhKQALg1BMg9IA8guQAigZAOgQQAmgsg3gkQgagQjaAaQl2AtiMAMQs0BEoSivQmpiMjwpHQjPn3gproQgkqYBmptQBlpgCwjlQDkkpGbj7QHLkZKQjKUAYDgHcAmCAAAQUeAAVHEHQUxEDRAHLQRkHZJ4JOQKmJ4AAKbQAAEk5KNxQslG5slF+IAbA/QAYBOgOBRQgtEBmcC1QjaBgmvAyQljApi5gNQhEgFgIi0QgDg4AEhDIAEg4QgsCv56CjQoFAzppArIoCAhQhqAJh+A1Qg0AWisBXQiNBHhdAeQh9Aph1AAIgTAAg");
	this.shape_252.setTransform(424,827.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#917556").s().p("AHpbSQgvhVggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAcQgnAMieBTQiCBEhCgBQhggCgjh/QguingZi6QgVieAAh3QAAhYHMASQDmAIDlAaIBiAbQB1AhBjAmQE+B6ARB0QAPBkgPCOQgJBWgjDEQhOG1AAEWQAAE7A1GhQAcDbApENQAFAsAVBrQAVBqAHA9QAXDQhNCjQhJCdhKAHIgGAAQg7AAg2hhg");
	this.shape_253.setTransform(159.7,1357.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#74542E").s().p("EAJMAoKQh2gSg6g1QgSgQgKgSIgGgPQgjgPghgqQhEhVAGiKQAGiChZhpIhUhbQg0g6geg4Qg3hih6o0QiDpegnhmQgZhDhVifQh7jkgthbQjrnZhqnHQh8oTgVlTQgHhuAEhoQAFhgAAgjQAAhYRahXQItgsItgbIg3GDQg3GaAAB2QAABfAIJEQAFIpgNBcQgPBxAAEFQAAEHAPCOQAFAwAeDgQAgD2AQDHQAzJzhXEUQhiE7hzB1QhTBThzAAQgbAAgdgFg");
	this.shape_254.setTransform(166.8,1383.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg3hih6o0QiDpegmhmQhGi4igkiQiokwkmnWQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_255.setTransform(153.3,1345.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#523821").s().p("Egc5A/GQkihKjKlEQiikDh2m/Qg7jehpoeQhSmsg8iNQhJivjYhrQiThJkphGQlnhVhkgjQjrhShfiCQi0j1hknkQgciFgpkEQgnj0gWhmQgfiNhuhRQhWg/irgvQjPgxhwggQjFg4iIhSQkNiij3tMQhOkHhBksIgzj4MDMhgQwICWV+QlNJomLKfQsVU+k5EPQiqCUj5B4QixBVkuBrQmgCThRAgQkYBujDB3QlsDelWHaQgwBCjUE5QiUDahgBwQhxCDjnA5QioAqk1APIkGALQidAHhqAKQkpAai6BJQi3BHjWDqQhBBIh3CPQh/Cag7BDQjiD9jCBkQijBUixAAQhjAAhogbg");
	this.shape_256.setTransform(419.6,1258.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-339,0,339).s().p("Eg6xAzhMAAAhoeMB1jAAAMAAABp7g");
	this.shape_257.setTransform(375.8,339.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.instance_17},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.instance_16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._stage, new cjs.Rectangle(-309.4,-227.8,1413.1,1893), null);


(lib.page2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hideReceive:1,showArenaguide:2,gotoArena:3,view:4,closeArena:5,beginnerArena:6,chooseCard:7,option1:8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var canvas = this
		this.getIt.addEventListener("click",hideReceive)
		function hideReceive(){
			canvas.gotoAndPlay("hideReceive");
			
			
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1));

	// FlashAICB
	this.instance = new lib.beginner();
	this.instance.parent = this;
	this.instance.setTransform(397.2,580.6,1,1,0,0,0,264.4,288.2);

	this.instance_1 = new lib.Symbol18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(397.2,580.6,1,1,0,0,0,264.4,288.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgfBpIAAgYIAYAAIAAiOIgaAXIgOgQIAvgyIAYAAIAAC5IAYAAIAAAYg");
	this.shape.setTransform(376.9,430.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_1.setTransform(406.9,418.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_2.setTransform(406.9,436.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_3.setTransform(403.4,436.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DC5B4E").s().p("AgLAsIAAhXIAXAAIAABXg");
	this.shape_4.setTransform(399.9,436.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67B9A5").s().p("AgWAPIAAgdIAtAAIAAAdg");
	this.shape_5.setTransform(401.1,416.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhKCXIAAktICVAAIAAEtg");
	this.shape_6.setTransform(403.4,427.4);

	this.instance_2 = new lib.chooseOpponent();
	this.instance_2.parent = this;
	this.instance_2.setTransform(387.6,580.6,1,1,0,0,0,273.9,288.2);

	this.instance_3 = new lib.Symbol21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(387.6,580.6,1,1,0,0,0,273.9,288.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},3).to({state:[]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// FlashAICB
	this.instance_4 = new lib.arenaMask2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(386.2,667,1,1,0,0,0,386.2,667);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer 17
	this.instance_5 = new lib.Symbol15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(375.2,667,1,1,0,0,0,375.2,667);

	this.instance_6 = new lib.Symbol6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(375.2,667,1,1,0,0,0,375.2,667);
	this.instance_6.alpha = 0.578;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},3).to({state:[]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).wait(4));

	// Layer 18
	this.instance_7 = new lib._stage();
	this.instance_7.parent = this;
	this.instance_7.setTransform(397.1,718.6,1,1,0,0,0,397.1,718.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(6));

	// Layer 7
	this.instance_8 = new lib.ticket();
	this.instance_8.parent = this;
	this.instance_8.setTransform(390.4,808.7,1,1,0,0,0,110.3,35.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({_off:true},1).wait(6));

	// Layer 5
	this.instance_9 = new lib.message();
	this.instance_9.parent = this;
	this.instance_9.setTransform(397.4,602.9,1,1,0,0,0,264.4,310.8);

	this.instance_10 = new lib.Symbol8();
	this.instance_10.parent = this;
	this.instance_10.setTransform(397.4,602.9,1,1,0,0,0,264.4,310.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).wait(6));

	// FlashAICB
	this.instance_11 = new lib.arenaMask();
	this.instance_11.parent = this;
	this.instance_11.setTransform(376.2,667,1,1,0,0,0,376.2,667);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({_off:false},0).to({_off:true},1).wait(6));

	// FlashAICB
	this.getIt = new lib.Symbol3();
	this.getIt.parent = this;
	this.getIt.setTransform(391.9,815.2,1,1,0,0,0,81.7,28.7);

	this.timeline.addTween(cjs.Tween.get(this.getIt).to({_off:true},1).wait(8));

	// FlashAICB
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58595B").s().p("AgSCQQgHgJAAgPQAAgSAHgHQAHgIALAAQAMAAAIAIQAGAIAAARQAAAPgGAIQgIAJgMAAQgLAAgHgIgAgQA5IgGjQIAsAAIgFDQg");
	this.shape_7.setTransform(497.8,675.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("AgWBzQgKgDgIgGQgHgGgEgJQgFgKAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgHIgGgIIgdglIgMgOIgKgPIgGgRQgDgKAAgJQAAgOAFgKQAEgKAIgGQAHgHALgDQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAHIgBAGQAAAJADAGIAKAQIAhAlIAIALIAKAPIAHARQADAIAAALQAAAMgEAJQgEALgHAGQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_8.setTransform(485.2,679.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58595B").s().p("AgCCPQgIgCgHgHQgFgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgJAAgHgCg");
	this.shape_9.setTransform(472.9,676.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_10.setTransform(458.7,679.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_11.setTransform(446,675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AgNB0QgIgCgHgDQgHgEgGgHQgHgHgEgLQgFgKgCgRQgDgQAAgWIAAgjQAAgWADgRQACgPAFgLQAFgLAGgGQAGgHAIgDQAHgDAHgCIAOgBIAOABQAHABAHADQAHAEAGAGQAGAHAFAKQAFALADAQQACAQAAAXIAAAjQAAAVgCARQgDAQgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAbQABALADAGQADAHAEADQAEADAFgBQAFABAEgDQAEgDADgHQACgGABgLIABgbIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_12.setTransform(433.7,679.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("Ag+CZIAAkuIAhAAIAEAYIAGgJIAJgJIALgGQAHgDAIABIAIAAIAKADQAGADAFAFQAFAGAEAJQAEAJADANQACAOAAATIAABGQAAASgCANQgDAOgEAKQgEAJgFAFQgGAFgFADIgLAEIgJAAQgNAAgIgFQgJgGgFgGIABAbIAAA+gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHABIAIgBQAEgCADgFQADgEACgIIABgVIAAhWIgBgVQgCgJgDgEQgDgEgDgDIgJgBQgHAAgFAFg");
	this.shape_13.setTransform(417.9,683);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_14.setTransform(394.6,683.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("AgVCXQgKgDgHgEQgIgGgEgJQgFgIAAgNIABgHIABgHIAfAAQgBAPAGAGQAFAGALAAIAIgBQAFgBADgEQAEgEACgHQACgHAAgKIAAgkQgGAIgJAFQgIAFgNAAIgJgBIgKgEQgGgCgGgFQgFgGgEgJQgEgJgCgOQgDgOAAgSIAAg8QAAgSADgOQACgNAEgIQAEgJAFgFQAGgFAGgDIALgDIAJAAQAIAAAGABQAGACAFAFIAIAIIAFAJIAEgYIAhAAIAADbQAAATgEAPQgDAQgIALQgIALgMAFQgMAHgQAAQgLAAgKgCgAgIh4QgEADgCAEQgDAEgCAJIgBAVIAABKIABAVQACAHADAFQACAFAEACIAIACIAHgCIAHgEIAEgFIADgHIAAh8QgDgGgFgFQgGgFgHAAg");
	this.shape_15.setTransform(378.8,683);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_16.setTransform(365.2,679.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_17.setTransform(350.2,679.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_18.setTransform(334.1,679.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_19.setTransform(318,679.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AAdByIgXh+IgGgjIAAAAIgFAjIgVB+IgpAAIgljjIAoAAIAQB6IAEAvIABAAIAFgvIAWh6IAjAAIAWB6IAGAvIACAAIACgvIAPh6IAnAAIglDjg");
	this.shape_20.setTransform(292,679.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_21.setTransform(273.3,679.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_22.setTransform(257.1,679.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DC5B4E").s().p("AgbCMQgNgFgKgKQgJgLgFgQQgEgRAAgXIAAh0QAAgUADgNQAEgOAFgKQAHgKAHgFQAHgGAJgDQAIgDAHAAIAOgBQARAAAMAEQANAFAHAHQAIAHAEAKQADAKAAALIgBAMIgDAOIghAAIAAgIIgBgVQgDgIgDgFQgDgFgFgCQgEgBgIAAQgNAAgHAJQgIAKAAAVIAAA3QAGgHALgFQAIgEAOAAQAKAAAJADQALADAHAIQAIAIAGAMQAEAOAAAVIAAAbQABAXgFAQQgEAPgKAKQgIAKgMAEQgNAEgPAAQgRAAgNgEgAgGgBIgIADIgGAFIgFAFIAAA+QAAATAGAKQAIAJANAAQANAAAGgJQAFgJABgTIAAgqQAAgKgCgHQgCgHgDgEQgDgFgFAAQgFgCgFAAg");
	this.shape_23.setTransform(232.8,676.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DC5B4E").s().p("AgyCAQgSgPABgdIABgQIADgRIAiAAIAAAOQAAANABAJQADAJAEAGQADAFAGADQAFACAGAAIAKgCQAGgCADgEQADgEACgGQACgGAAgJIAAgfIgBgQQgCgHgEgFQgDgFgGgCQgGgDgGAAIgSAAIAAgdIASAAIAJgCQAEgCAEgEQADgEACgGQACgGAAgJIAAgeQAAgPgGgIQgGgHgLAAQgOAAgHAMQgHAMAAAXIAAAQIgiAAIgCgRIgCgRQAAgLAEgLQAEgKAIgJQAIgJANgFQAMgFARAAQAQAAANAEQAOAEAIAIQAIAIAEAMQADAMAAAOIAAASQAAAMgCAJQgEAKgEAHQgFAHgHAFIgMAHIAAACQAIADAHADQAIAFAFAHQAFAHADAKQADAKAAAOIAAATQAAAUgGANQgFAOgKAIQgKAIgNAEQgNADgNAAQggAAgRgQg");
	this.shape_24.setTransform(215.4,676.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DC5B4E").s().p("Ag7COIBNj1IhSAAIAAgmICBAAIAAAXIhNEEg");
	this.shape_25.setTransform(200,676.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AgWCYIgLgEQgFgCgFgGQgGgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAFgFAGgCIALgDIAIAAIAMABIAJAFIAIAGIAFAHIgBgdIAAg9IAqAAIAAEtIghAAIgDgVIgHAIIgJAIIgLAFQgFACgIAAgAgIgwQgDACgDAEQgDAFgBAIIgCAVIAABWIACAVQABAIADAFQADAEADACIAIACIAIgBIAFgEIAFgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_26.setTransform(562.9,612.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_27.setTransform(547.4,615.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("AgqBeQgPgYAAgxIAAgrQgBgVAEgPQADgQAFgLQAFgKAHgHQAHgGAHgDQAHgDAHgBIAMgBQALAAAKAEQAJACAHAHQAIAGADAKQAFAJAAAMIgBAPIgDALIghAAIAAgJQAAgQgEgKQgEgKgJAAQgFAAgDACQgFADgCAFQgCAHgBAJIgCAZIAABAIABAZQABAKADAHQACAGAEAEQAEADAGAAIAGgCQACgCADgDIAEgKIABgPIAAgHIAkAAIAAAJQAAAggOAPQgOAPgdAAQgcAAgPgXg");
	this.shape_28.setTransform(532.6,615.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AgzBlQgLgNAAgcIAAivIAqAAIAACrQAAAPAFAHQAEAFAJAAQAGAAAGgDQAGgEAFgGIAAi5IAqAAIAADkIghAAIgEgZQgFAJgFAEQgGAGgGADIgLAFIgNAAQgUAAgLgOg");
	this.shape_29.setTransform(516.7,615.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("AgWCYIgLgEQgFgCgFgGQgGgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAFgJQAEgJAGgFQAFgFAGgCIAKgDIAJAAIAMABIAJAFIAIAGIAFAHIgBgdIAAg9IAqAAIAAEtIghAAIgDgVIgHAIIgJAIIgLAFQgFACgIAAgAgHgwQgEACgDAEQgDAFgBAIIgCAVIAABWIACAVQABAIADAFQADAEAEACIAHACIAIgBIAFgEIAFgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_30.setTransform(499.8,612.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAHgBALIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgLgCgHQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_31.setTransform(484,615.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_32.setTransform(470.4,615.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIAAIAIAAIAKADQAGADAFAGQAFAFAEAIQAEAKADANQACAOAAAUIAABEQAAATgCANQgDAOgEAKQgEAIgFAGQgGAFgFADIgLADIgJABQgNAAgIgFQgJgGgFgGIABAcIAAA8gAgMh0QgFAEgDAHIAACJIADAGIAFAFIAFAFIAHABIAIgCQAEgCADgFQADgEACgIIABgVIAAhWIgBgWQgCgHgDgFQgDgFgDgCIgJgBQgHAAgFAFg");
	this.shape_33.setTransform(455.1,619.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("AgzBlQgLgNAAgcIAAivIAqAAIAACrQAAAPAFAHQAEAFAJAAQAGAAAGgDQAGgEAFgGIAAi5IAqAAIAADkIghAAIgEgZQgFAJgFAEQgGAGgGADIgLAFIgNAAQgUAAgLgOg");
	this.shape_34.setTransform(430.9,615.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAHgBALIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgLgCgHQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_35.setTransform(414.6,615.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("AgVCOIAAhfIg5i8IArAAIAjCIIABAAIAiiIIAsAAIg6C8IAABfg");
	this.shape_36.setTransform(398.8,612.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58595B").s().p("AgSCQQgHgJAAgPQAAgSAHgHQAHgIALAAQANAAAGAIQAHAIAAARQAAAPgHAIQgGAJgNAAQgLAAgHgIgAgQA5IgGjQIAtAAIgGDQg");
	this.shape_37.setTransform(370.6,612.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#58595B").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_38.setTransform(359.2,615.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#58595B").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_39.setTransform(344.2,615.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#58595B").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgIAAgIgCg");
	this.shape_40.setTransform(331.1,612.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("AgWByQgKgCgIgGQgHgGgEgJQgFgKAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAFAFACQAFACAFAAQAKAAAEgGQAFgFAAgHIgBgHIgDgHIgFgGIgGgIIgdgkIgMgPIgKgQIgGgRQgDgIAAgLQAAgNAFgJQAEgKAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgIgCgGQgCgGgEgCQgEgDgGAAQgFAAgDACIgGAFIgDAFIgBAHQAAAIADAIIAKAOIAhAnIAIALIAKAOIAHAQQADAKAAAKQAAALgEAKQgEAKgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgDg");
	this.shape_41.setTransform(318.5,615.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgHQAIgHALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAJQAFAIAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_42.setTransform(303.3,615.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("AA+B0IAAitIgBgNIgDgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAGgFIALgJIAMgEIAOgCQAMAAAJAHQAKAGAEANQAFgHAFgFIAMgIIANgEIAMgCQATAAAMAPQAKAOABAcIAACug");
	this.shape_43.setTransform(283.7,615.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("AgdA4IARhvIAqAAIgZBvg");
	this.shape_44.setTransform(259.2,626.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("AAdByIgXh+IgGgjIAAAAIgFAjIgVB+IgpAAIgljjIAoAAIAQB6IAEAvIABAAIAFgvIAWh6IAjAAIAWB6IAGAvIACAAIACgvIAPh6IAnAAIglDjg");
	this.shape_45.setTransform(244.2,615.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAHgBALIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgLgCgHQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_46.setTransform(225.2,615.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("AAiCOIgYiJIgIg6IgCAAIgHA6IgZCJIgrAAIgokbIApAAIATCrIACAoIAEAAIAEgtIAeimIAiAAIAdCmIAEAtIAEAAIACgoIARirIAqAAIgoEbg");
	this.shape_47.setTransform(205.1,612.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#AE4C45").s().p("ABfESQgJgDgEgIQgFgIACgJIAeh1QACgJgFgIQgEgIgJgCIjtg7QgJgCgFgHQgFgHAAgJIABgFIAgiFIDJiZIAAABIhJEvICVAmQAJADAFAIQAFAIgDAJIgpCgQgCAJgIAFQgFADgGAAIgGAAg");
	this.shape_48.setTransform(393,388.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#AE4C45").s().p("AAABaIh0hGQgEgCADgHQAFgLAAgHIgBgIIALgIIBXA0QAIAFAIgDQAJgCAFgIIA/hnQAFgIAJgCQAJgCAIAFQAIAFACAJQACAIgFAIIhWCOQgFAIgJACIgGABQgGAAgEgEg");
	this.shape_49.setTransform(412.4,362.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DC5B4E").s().p("AhgBhQgngoAAg5QAAg4AngoQAogoA4AAQA5AAAoAoQAnAoAAA4QAAA5gnAoQgoAng5AAQg4AAgogng");
	this.shape_50.setTransform(395.4,339.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DC5B4E").s().p("AgzCAIA3jmIhfgGQgJAAgHAGQgHAGAAAKIgHB4QAAAJgHAGQgHAHgJgBQgKAAgGgHQgGgHAAgJIAJilQABgKAHgGQAGgGAKAAIChAJQADgBA7ANIA6AOQAJACAEAGQAIAKgDAMIg8D2g");
	this.shape_51.setTransform(383.4,370.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DC5B4E").s().p("AAABaIh0hGQgEgCADgHQAFgLAAgHQAAgIgEgLQAAgCgBgBQAAgBAAgBQABAAAAAAQAAAAABAAIBkA8QAIAFAIgDQAJgCAFgIIA/hnQAFgIAJgCQAJgCAIAFQAIAFACAJQACAIgFAIIhWCOQgFAIgJACIgGABQgGAAgEgEg");
	this.shape_52.setTransform(412.4,362.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#AE4C45").s().p("AAeBZIiUhMQgIgEgDgJQgDgHAEgJQAEgIAJgDQAJgDAIAEIBsA2QAJAEAIgDQAJgCAEgJIAbg1QAag3ADAAQABAAAFAGQAFAIAFADIANAHQAGADAAACQAAAEg9B0IgKAUQgEAIgJADIgHABQgFAAgFgCg");
	this.shape_53.setTransform(365.4,400.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DC5B4E").s().p("AgWCYIgKgEQgGgCgFgGQgGgFgEgJQgEgJgCgOQgDgOAAgTIAAhIQAAgTADgNQACgNAFgJQAEgJAGgFQAGgFAFgCIAKgDIAJAAIALABIAJAFIAIAGIAGAHIgBgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgIAIIgMAFQgFACgIAAgAgHgwQgEACgDAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQADAEAEACIAHACIAHgBIAGgEIAFgFIADgHIAAiIQgDgHgFgFQgFgFgIAAg");
	this.shape_54.setTransform(517.1,503.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DC5B4E").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAPQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_55.setTransform(501.5,507.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DC5B4E").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_56.setTransform(486.5,507.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DC5B4E").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_57.setTransform(475.1,503.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DC5B4E").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAPQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_58.setTransform(463.1,507.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DC5B4E").s().p("AgqBdQgPgYAAgwIAAgrQgBgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAHgDAHgBIAMgBQALAAAKADQAJADAHAGQAHAHAEAKQAFAJAAAMIgBAPIgDAKIghAAIAAgIQAAgQgEgLQgEgJgJAAQgFAAgDADQgFACgCAFQgCAHgBAJIgCAZIAAA/IABAaQABALADAGQACAHAEADQAEACAGAAIAFgBQADgCADgDIADgKIACgPIAAgHIAkAAIAAAJQAAAggOAPQgPAPgcAAQgcAAgPgYg");
	this.shape_59.setTransform(448.4,507.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DC5B4E").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAPQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_60.setTransform(433.4,507.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DC5B4E").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_61.setTransform(420,507.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DC5B4E").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_62.setTransform(397.8,511.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DC5B4E").s().p("AgVCXQgKgDgHgEQgIgGgEgJQgFgIAAgNIABgHIABgHIAfAAQgBAPAGAGQAFAGALAAIAIgBQAFgBADgEQAEgEACgHQACgHAAgKIAAgkQgGAHgJAGQgIAFgNAAIgJgBIgKgDQgGgDgGgFQgFgGgEgJQgEgJgCgNQgDgPAAgSIAAg8QAAgSADgOQACgNAEgIQAEgJAFgFQAGgFAGgDIALgDIAJAAQAIAAAGABQAGACAFAFIAIAIIAFAJIAEgYIAhAAIAADbQAAATgEAPQgDAQgIALQgIALgMAFQgMAHgQAAQgLAAgKgCgAgIh4QgEADgCAEQgDAEgCAJIgBAVIAABKIABAVQACAHADAFQACAFAEACIAIACIAHgCIAHgEIAEgFIADgGIAAh9QgDgGgFgFQgGgFgHAAg");
	this.shape_63.setTransform(382,511.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DC5B4E").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_64.setTransform(368.3,507.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DC5B4E").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAPQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_65.setTransform(353.4,507.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#DC5B4E").s().p("AAVB0IAAitQAAgPgEgGQgFgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_66.setTransform(337.2,507.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DC5B4E").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAPQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_67.setTransform(321.2,507.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#DC5B4E").s().p("AAdByIgXh+IgGgjIAAAAIgFAjIgVB+IgpAAIgljjIAoAAIAQB6IAEAvIABAAIAFgvIAWh6IAjAAIAWB6IAGAvIACAAIACgvIAPh6IAnAAIglDjg");
	this.shape_68.setTransform(295.1,507.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#DC5B4E").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAPQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_69.setTransform(276.4,507.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#DC5B4E").s().p("AAiCOIhDi4IgCAAIACAQIACAVIABAaIAAAlIAABUIgnAAIAAkbIAjAAIBEC9IABAAIgBgPIgBgSIgBgXIgBgdIAAhoIAnAAIAAEbg");
	this.shape_70.setTransform(259.4,504.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(6).p("EAdUgjBI2RAAQAOg5AAg3QAAjAiIiIQiIiIjBAAQi/AAiJCIQiICIAADAQAAA3AOA5I2RAAQkPAAjAC/Qi/DAAAEPMAAAA6mQAAEQC/DAQDAC/EPAAMA6nAAAQEPAADAi/QC/jAAAkQMAAAg6mQAAkPi/jAQjAi/kPAAg");
	this.shape_71.setTransform(386,615.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F9DD88").s().p("EgdTAsCQkPAAjAi/Qi/jAAAkQMAAAg6mQAAkPC/jAQDAi/EPAAIWRAAQgOg5AAg3QAAjACIiIQCJiIC/AAQDBAACICIQCICIAADAQAAA3gOA5IWRAAQEPAADAC/QC/DAAAEPMAAAA6mQAAEQi/DAQjAC/kPAAg");
	this.shape_72.setTransform(386,615.6);

	this.instance_12 = new lib.newEnergyGone();
	this.instance_12.parent = this;
	this.instance_12.setTransform(386,613.3,1,1,0,0,0,253,287.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.instance_12}]},1).to({state:[]},1).wait(7));

	// Layer 1
	this.instance_13 = new lib.blurbg_invitation();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,0,0.999,0.999);

	this.instance_14 = new lib.Symbol5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(375.2,667,1,1,0,0,0,375.2,667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(6));

	// Layer 6
	this.instance_15 = new lib._stage();
	this.instance_15.parent = this;
	this.instance_15.setTransform(397.1,718.6,1,1,0,0,0,397.1,718.6);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2).to({_off:false},0).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750.5,1334);


// stage content:
(lib.task2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{page2:1});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		
		responsive scale code as expressed by @davegamez 
		
		*/
		
		
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.backgroundColor = "#ffffff";
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";
		
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		
		var viewport = document.querySelector('meta[name=viewport]');
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';
		
		if (viewport === null) {
		 var head = document.getElementsByTagName('head')[0];
		 viewport = document.createElement('meta');
		 viewport.setAttribute('name', 'viewport');
		 head.appendChild(viewport);
		}
		
		viewport.setAttribute('content', viewportContent);
		
		function onResize() {
		 var widthToHeight = stageWidth / stageHeight;
		 var newWidth = window.innerWidth;
		 var newHeight = window.innerHeight;
		 var newWidthToHeight = newWidth / newHeight;
		 //
		 if (newWidthToHeight > widthToHeight) {
		 newWidth = newHeight * widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 } else {
		 newHeight = newWidth / widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 }
		 scale = newWidthToHeight / widthToHeight;
		 stage.width = newWidth;
		 stage.height = newHeight;
		 page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
		 page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
		}
		
		window.onresize = function () {
		 onResize();
		}
		
		onResize();
		this.stop();
		playSound("projectBGM20173172010",-1);
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 1
	this.instance = new lib.page1();
	this.instance.parent = this;
	this.instance.setTransform(375,667,1,1,0,0,0,375,667);

	this.instance_1 = new lib.page2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(375.2,667,1,1,0,0,0,375.2,667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,667,750,1334);
// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/task2_part1_atlas_.png", id:"task2_part1_atlas_"},
		{src:"sounds/projectBGM20173172010.mp3", id:"projectBGM20173172010"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;