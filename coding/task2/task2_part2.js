(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"task2_part2_atlas_", frames: [[0,0,3125,5559],[2439,5561,287,298],[2131,5992,312,356],[1783,5992,346,416],[0,6230,400,513],[494,6083,425,550],[0,5561,492,667],[1244,6116,315,360],[2141,5561,296,326],[921,6116,321,370],[1783,5561,356,429],[1401,5561,380,468],[968,5561,431,553],[921,6488,226,226],[2131,6350,226,226],[494,5561,472,520],[402,6635,138,156]]}
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
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_1 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_2 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_3 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_0_4 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_1 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_2 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_3 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Image_2_4 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.FlashAICBAssets = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.FlashAICBAssets_1 = function() {
	this.spriteSheet = ss["task2_part2_atlas_"];
	this.gotoAndStop(16);
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


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer 1
	this.text = new cjs.Text("0", "34px 'Fjalla One'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 50;
	this.text.parent = this;
	this.text.setTransform(19.6,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"3",lineWidth:17},0).wait(1).to({text:"8"},0).wait(1).to({text:"15",lineWidth:31},0).wait(1).to({text:"25",lineWidth:34},0).wait(1).to({x:19.5,text:"35"},0).wait(1).to({x:19.6,text:"45",lineWidth:36},0).wait(1).to({x:19.5,text:"65",lineWidth:35},0).wait(1).to({x:19.6,text:"85"},0).wait(1).to({x:19.5,text:"100",lineWidth:49},0).wait(1).to({x:19.6,text:"120",lineWidth:48},0).wait(1).to({text:"150"},0).wait(1).to({x:19.5,text:"180",lineWidth:49},0).wait(1).to({x:19.6,text:"200",lineWidth:51},0).wait(1).to({text:"0",lineWidth:18},0).wait(1).to({text:"210",lineWidth:48},0).wait(1).to({text:"220",lineWidth:50},0).wait(1).to({x:19.5,text:"230",lineWidth:51},0).wait(1).to({text:"240",lineWidth:52},0).wait(1).to({x:19.6,text:"255",lineWidth:51},0).wait(1).to({x:19.5,text:"270",lineWidth:48},0).wait(1).to({x:19.6,text:"280",lineWidth:51},0).wait(1).to({text:"290"},0).wait(1).to({x:19.5,text:"300",lineWidth:52},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.6,46.8);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICBAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,472,520), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AA5398","#D93D4D"],[0,1],0,41.6,0,-41.5).s().p("AhlGPQgvgQgpgeQgngdgfgoQgggpgVgtQgVgwgLgxQgMgzAAgxQAAgwAMg0QALgxAVgwQAWgvAfgnQAfgpAngdQApgeAvgQQAwgQA2AAQA2AAAwAQQAvARAoAdQAnAdAgApQAeAnAWAvQAWAwALAxQALAyAAAyQAAAzgLAxQgLAxgWAwQgVAtgfApQgfAogoAdQgoAdgvARQgwAQg2AAQg3AAgvgQgAg6iNQgXASgOAbQgPAagHAgQgHAeAAAaQAAAcAHAcQAHAfAPAcQAOAaAXATQAWASAgAAQAeAAAXgSQAWgSAOgbQAPgcAHgfQAHggAAgYQAAgXgHghQgHgggPgaQgPgcgVgRQgWgTgfAAQggAAgWATg");
	this.shape.setTransform(268.1,51.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#AA5398","#D93D4D"],[0,1],0,41.6,0,-41.5).s().p("AhmGPQgvgQgogeQgngdgggoQgfgpgVgtQgWgwgLgxQgLgxAAgzQAAgyALgyQALgxAWgwQAWgvAegnQAhgpAmgdQApgeAvgQQAwgQA1AAQA4AAAvAQQAuAQApAeQAnAdAgApQAfAoAVAuQAVAwALAxQAMA0AAAwQAAAxgMAzQgLAxgVAwQgVAsgfAqQgfAogoAdQgpAeguAQQgvAQg4AAQg2AAgwgQgAg7iNQgVARgQAcQgPAdgGAdQgHAhAAAXQAAAYAHAgQAGAdAPAeQAPAbAWASQAXASAgAAQAeAAAWgSQAXgTAOgaQAPgdAGgeQAHgcAAgcQAAgagHgeQgHgfgOgbQgOgbgXgSQgWgTgeAAQghAAgWATg");
	this.shape_1.setTransform(193.4,51.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#AA5398","#D93D4D"],[0,1],0,44.4,0,-44.4).s().p("AhlG2QgmgHgfgKQgkgMgdgOQgigQgagQIAWjoQAVAOAcAOQAdAPAbAKQAcAKAfAHQAdAGAcAAQATAAAOgDQAPgCAPgHQAOgHAJgNQAJgMAAgVQAAgMgMgLQgNgMgOgHQgPgIgSgEQgSgEgLAAIgTABIgXACQgLACgLADQgLAEgFAEIADikIAlACQAVAAAXgDQAYgEAUgKQATgKANgQQAOgRAAgaQAAgTgLgMQgKgLgPgHQgPgHgRgCQgUgCgNAAQguAAguAQQgsAQgjAfIgxjRQA2gsBDgWQBDgXBFAAQA+AAA5ASQA7ATArAjQArAjAaA0QAaAzAABFQAAAUgGATQgEASgLAWQgLAUgMAPQgPASgNALQAXAKAQASQAPARAKAYQAJAVAEAaQADAYAAAaQAABNgYA4QgZA5gsAkQgrAlg9ASQg9AShIAAQggAAgjgGg");
	this.shape_2.setTransform(124.4,49.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F20").s().p("AhvG1Qg2gTgqggQgsgggigsQgigrgXgzQgXgvgNg6QgNg6AAg0QAAg0ANg6QANg7AXgvQAXgzAigrQAigsAsggQAqggA2gTQA1gSA7AAQA8AAA0ASQA2AUAqAfQAqAfAjAtQAiArAYAzQAXAyANA4QAMA4AAA2QAAA3gMA3QgNA3gXAyQgXAzgjArQgjAtgqAfQgqAfg2AUQg0ASg8AAQg8AAg0gSgAgrhhQgQANgKATQgLATgEAWQgFAVAAASQAAATAFAUQAEAWALATQAKAUAQAMQAPANAXAAQAVAAAQgNQAQgMAKgUQAKgTAFgWQAFgYAAgPQAAgPgFgYQgFgWgKgTQgKgTgQgNQgRgNgUAAQgWAAgQANg");
	this.shape_3.setTransform(268.1,51.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("AhwG1Qg2gTgqggQgqgfgjgtQgkgugWgwQgXgygNg3QgMg4AAg2QAAg2AMg4QANg4AXgyQAXgwAjguQAjgtAqgfQArggA2gTQA0gSA7AAQA8AAA1ASQA2ATAqAgQArAgAiAsQAiAsAXAyQAXAvANA7QANA6AAA0QAAA0gNA6QgNA6gXAvQgWAygjAsQgiAsgrAgQgqAgg2ATQg1ASg8AAQg7AAg1gSgAgrhhQgRAOgKASQgLAWgEATQgFAVAAASQAAATAFAUQAEAUALAVQAKATARANQAPANAXAAQAWAAAPgNQAPgMALgUQAKgTAFgWQAFgUAAgTQAAgSgFgVQgFgWgKgTQgLgTgPgNQgQgNgVAAQgWAAgQANg");
	this.shape_4.setTransform(193.4,51.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("Ah0HmQgngHgpgMQgjgKgogTQghgOgkgWIArlEQANAJA+AeQA/AhAQAFQAfALAlAIQAZAFAbgEQAkgGACgTQACgRgNgMQgQgSgtABQgjABgfAHQgWAGgFAEIAHjQIAaABQAcABALgBQAvgFAagSQAWgRAAgVQAAgOgRgJQgQgJgagBQg8gCgtAVQgsAUgtAnIhdklQA9gvBPgaQBMgZBQAAQBJAABBAUQBCAUAzAnQAzAoAdA5QAfA8gBBKQAAAggKAfQgHAUgOAbQgLAYgSAVIARAUQAUAbAOAhQAKAWAEAfQAFAdAAAZQgBBWgcA+QgbA+gzApQgzAqhGAUQhGAUhTAAQgoAAglgHg");
	this.shape_5.setTransform(123.6,49.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#AA5398","#D93D4D"],[0,1],0,39.5,0,-39.4).s().p("AiTGHIgCj1IjqgDIgDkXIDpgIIAAjcIEggeIAEDtID0gHIAEE+Ij0gEIADD1g");
	this.shape_6.setTransform(44.7,46.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221F20").s().p("AjOG8IgCj9IjkgFIgLmEIDtgJIgDjQIGRgcIAIDjID4gJIAEGtIj+gFIAED+g");
	this.shape_7.setTransform(44.8,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,307.3,98.6), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,51.5,0,-51.4).s().p("AnoICIAavyIFlgRID1IBIAMnlIFRgLIg0PGIl2AiIjGoFIggIPg");
	this.shape.setTransform(527.2,56.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,49.4,0,-49.3).s().p("Ai9nZIF7gUIhPPLIksAQg");
	this.shape_1.setTransform(455.2,57.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,51.5,0,-51.4).s().p("AABACIhXHbImVAPIiovOIFigfIBIJPIBfpPIEVAAIBwJWIA4pWIFhAfIinPcImVAIg");
	this.shape_2.setTransform(365.7,58.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,51.3,0,-51.3).s().p("Ai5HmQg9gagsguQgqgsgdg+Qgbg6gRhFQgPhCgGhIQgGhFAAhBQAAhoAKhfQAJhkAUhjIFOANQgTBqgPB2QgOB2AABuIACAjIADA1QADAcAGAhQAEAdAKAcQAJAaANAQQAOARASAAQAUgBAQgTQAQgTANghQALgeAKgvQAJgnAHgyQAFgdAFg+IAKjLQAAg3gBg4IgFhuIFOAAQAIBlAABiQAAA4gFA9QgFA/gMBFQgLBBgSBGQgRBDgcBEQgdBCgiA1QgkA4gvAqQgwAqg5AYQg6AYhFAAQhTAAg9gbg");
	this.shape_3.setTransform(225.5,60.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,46.7,0,-46.6).s().p("Ah5HCQg8gRgwgdQgygdgqgrQgpgpgdgzQgdg0gQg5QgQg7AAhAQAAg9APg7QAPg8Acg1QAbgyApgvQAogrAyghQAwgfA7gTQA7gSA/AAQBoAABUAhQBVAgA8A7QA9A8AhBUQAhBWAABnQAABAgPA8QgPA9gcA0QgbAzgqAuQgnArgzAgQgzAgg7ARQg8AShBAAQg/AAg7gRgAg6iMQgaANgTAUQgTAVgKAdQgKAbAAAfQAAAhAIAbQAJAfARAYQARAYAZAOQAaAPAhABQAigBAZgNQAcgNASgWQASgXAKgdQAKgeAAgfQAAgdgJgdQgJgegRgVQgRgXgZgOQgbgOgfAAQggAAgbAMg");
	this.shape_4.setTransform(133.1,59.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,51,0,-50.9).s().p("AkUH9IAJm7IjMoRIFsgtIA5E0IC0k0IFWAYImIIjIgTG+g");
	this.shape_5.setTransform(55.4,60.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221F20").s().p("AoQovIHBgKICVFkIADlNIHbgGIgwQaInYA7IiSl8IgUGEImaAFg");
	this.shape_6.setTransform(528.5,57);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221F20").s().p("AjvoMIHfgWIhLQyIl8ATg");
	this.shape_7.setTransform(454.4,58);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221F20").s().p("AgDDTIgzFNInsgEIiswtIHEgmIAnFHIAnk7IGEgMIApGbIASmTIHMAmIi1QsIntAVg");
	this.shape_8.setTransform(365.9,58);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221F20").s().p("AjTIdQhEgcgzg0QgygzgfhCQgghCgRhLQgShJgHhPQgHhIAAhNQAAhxALhsQAMh1AVhnIGiANQgWB7gQB+QgQCAAAB8IAGBiQAEAlAFAfQAEAQAIASQANAaAMgFQAOgFASgnQAMggAFgUQAKgvAIg0QAGgqAFg7IAIhgQACgmABgoIABgzQAAhFgCg2QgCg7gEg/IGyAFQAJBrAABzQAABAgFBAQgGBKgNBIQgPBQgTBHQgUBLggBKQgfBIgpA8QgpA/g0AuQg1AthCAbQhCAbhQAAQhgAAhEgeg");
	this.shape_9.setTransform(225.8,61.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221F20").s().p("AiJH/QhDgTg5ghQg5ghgvgwQgvgwggg5Qghg6gShDQgThEAAhGQAAhFAShEQAQhDAhg9QAfg7AugzQAugzA4gkQA4glBCgUQBAgUBKAAQB1AABgAlQBhAkBFBEQBEBEAmBfQAmBiAAB1QAABGgRBHQgRBDggA9QggA8guAyQguAxg5AlQg5AjhEAUQhCAUhMAAQhJAAhBgTgAgqhnQgTAJgNAPQgNAPgHATQgHAVAAAVQAAAUAGAUQAHAWALAQQAMARASALQASAKAXAAQAXAAASgJQAUgKAMgPQANgRAHgTQAHgVAAgVQAAgWgHgTQgGgUgMgQQgMgPgRgKQgTgKgVAAQgXAAgTAIg");
	this.shape_10.setTransform(133.1,59.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221F20").s().p("Ak+BNIjso3IHghTIAzD2IB9jvIHFA7Im1JFIALHdInRAXg");
	this.shape_11.setTransform(55.5,60.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,583.3,118.7), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg66AQaMAAAggzMB11AAAMAAAAgzg");
	this.shape.setTransform(377.1,105);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,754.2,210.1), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg6lAspMAAAhZRMB1LAAAMAAABZRg");
	this.shape.setTransform(375,285.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,750,571.4), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(66,131,193,0)","rgba(69,132,193,0.02)","rgba(76,133,193,0.09)","rgba(88,135,194,0.216)","rgba(103,138,194,0.396)","rgba(121,142,195,0.627)","rgba(141,147,196,0.91)","#9395C5"],[0.294,0.616,0.729,0.812,0.878,0.937,0.988,1],0,0,0,0,0,513.4).s().p("EgZwA8/Qr4lCpLpKQpJpKlCr4QlNsTAAteQAAtdFNsTQFCr4JJpKQJLpKL4lCQMTlNNdAAQNeAAMTFNQL4FCJKJKQJLJKFBL4QFNMTAANdQAANelNMTQlBL4pLJKQpKJKr4FCQsTFNteAAQtdAAsTlNg");
	this.shape.setTransform(181.6,181.5,0.429,0.429);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,363.1,363.1), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#697E9B").s().p("Amls4IJvAAQBaAABCBBQBABAAABbIAADnQAAFaitEtQiuEskrCuIhMAsQgmAWhTALg");
	this.shape.setTransform(126.6,82.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0BAD3").s().p("Ah4MYIhMgsQksiuitksQiuktAAlaIAAjnQAAhbBBhAQBAhBBbAAITfAAQBaAABCBBQBABAAABbIAADnQAAFaitEtQiuEsksCuIhMAsQg4AhhBAAQg/AAg5ghg");
	this.shape_1.setTransform(84.4,82.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,168.8,165), null);


(lib.Symbol17copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.659)").s().p("EgjDABkQgpAAgegeQgdgdAAgpQAAgoAdgdQAegeApAAMBGHAAAQAqAAAdAeQAdAdAAAoQAAApgdAdQgdAegqAAg");
	this.shape.setTransform(234.4,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17copy3, new cjs.Rectangle(0,0,468.9,20), null);


(lib.Symbol17copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.659)").s().p("EgjDABkQgpAAgegeQgdgdAAgpQAAgoAdgdQAegeApAAMBGHAAAQAqAAAdAeQAdAdAAAoQAAApgdAdQgdAegqAAg");
	this.shape.setTransform(234.4,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17copy2, new cjs.Rectangle(0,0,468.9,20), null);


(lib.Symbol17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.659)").s().p("EgjDABkQgpAAgegeQgdgdAAgpQAAgoAdgdQAegeApAAMBGHAAAQAqAAAdAeQAdAdAAAoQAAApgdAdQgdAegqAAg");
	this.shape.setTransform(234.4,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17copy, new cjs.Rectangle(0,0,468.9,20), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.659)").s().p("EgjDABkQgpAAgegeQgdgdAAgpQAAgoAdgdQAegeApAAMBGHAAAQAqAAAdAeQAdAdAAAoQAAApgdAdQgdAegqAAg");
	this.shape.setTransform(234.4,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,468.9,20), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B33F6C").s().p("AyLOxQAehLBJjdQC7iRCejaQB6iqBdjFQCQhDClibQCqihBGiQQDBhRBkg6QCyhnCRiYQCCgXC4hOQCVg/DQhtQi+B+hjBTQiiCIhWCNQh7AZiQBcQirBth5ChQiHA6iQCVQiQCSg5CGQieBsiGCmQh7CWg9CSQgdgPhNBBQhFA6gxBDQgpA4hHBnIh5BtQhYBdhJBVQBjicBIivg");
	this.shape.setTransform(214.5,186.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA4934").s().p("AyvN+QAghHBUjcQC/iJCmjUQCBilBki/QCSg9CriUQCxiaBLiMQDEhJBmg1QC2hfCWiSQCDgRC7hGQCXg4DUhlQjBB2hoBPQimCBhcCJQh8ATiTBWQivBlh/CcQiJA0iWCPQiVCMg+CDQiiBliNCfQh/CShECOQgbgQhQA9QhIA3gzBBQgqA2hMBlIh9BnQhbBZhNBSQBqiYBNirg");
	this.shape_1.setTransform(214.5,196.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B33F6C").s().p("AtoRJQAFhHABjiQCNiqBXjpQBEi2AcjKQB9hYBzivQB4i2AXiVQCqhtBUhKQCTiABhipQB+gtCjhqQCChWCxiMQiXCXhKBiQh3CcgpCUQh2Auh0BwQiLCFhFCtQh2BPhiCmQhhCjgNCIQh9CChRC0QhKCjgOCUQgigJg5BLQgzBDgbBIQgXA8gmBuIhWB8Qg7BngvBdQAyikAMiyg");
	this.shape_2.setTransform(135.4,161.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DA4934").s().p("AuVQiQAIhJAKjgQCVijBgjmQBLiyAljIQCAhTB7iqQCAixAdiTQCuhnBXhFQCZh6BnikQCAgoCnhiQCHhQC1iFQidCShOBdQh9CYgvCSQh4Anh5BrQiQCAhMCpQh6BKhoChQhoCggTCHQiCB8hZCwQhRCggUCTQghgKg9BIQg2BBgeBHQgZA6gqBsIhcB4Qg/BlgyBbQA4iiAUixg");
	this.shape_3.setTransform(142,166.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B33F6C").s().p("AmxRdQgRhBhAi9QBTiuANjaQAKipggiyQBbhlA4itQA7i1gViDQB/iAA5hRQBjiMApikQBphBB4h8QBhhjB8ieQhhChgoBiQhCCeAFCHQhhA/hLB4QhbCPgPChQhWBdgsCiQgqCeAcB4QhQCIgYCrQgVCaAeCBQgjAAgfBMQgdBDgEBDIAABSQABAwgIAcQgFASgQApIgXBBQgaBkgQBZQgCiXgniag");
	this.shape_4.setTransform(54.2,142.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DA4934").s().p("An8Q9QgVhFhRjLQBiipANjeQAKisgqi8QBthbBDisQBFixgciKQCZh0BEhLQB3iDAwikQB+g0CShxQB2haCTiRQhzCagwBeQhOCbAICLQh1A0hbBxQhsCIgPCkQhpBTgzCiQgxCcAjB/QheCCgaCtQgYCcAmCIQgqgFglBKQgiBCgEBEQgBANACBHQACAygJAcQgHARgSAoQgUAsgIAUQgdBkgTBZQgEibgzijg");
	this.shape_5.setTransform(61.1,141.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,352.8,318.2), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeCAQgNgGgJgOQgJgNgEgVQgFgVAAgdIAAgxQAAgZAEgRQAEgSAGgMQAGgMAIgHQAHgHAJgEQAIgEAJgBIAOgBQANAAAMAEQAMAEAJAJQAJAKAFAPQAGAQAAAYIgBAQIgBAQIgCAPIgCANIhWAAIAAAbIABAdQABALADAIQADAHAGADQAFADAIAAIAIgCQAEgCAEgEIAEgLIACgRIAAgIIApAAIAAAKQAAAlgSARQgSARghAAQgRAAgNgGgAgIhfQgEADgDAHQgDAHgCALIgBAdIAAAQIAvAAIAAgGIABgHIAAgIIAAgGQAAgagGgLQgHgMgMAAQgFAAgFADg");
	this.shape.setTransform(649.6,1146.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6B0QgNgPAAghIAAjHIAxAAIAADDQAAASAEAGQAGAHALAAQAFAAAHgEQAHgEAGgHIAAjTIAwAAIAAEFIglAAIgEgcIgBAAQgFAIgHAGQgGAHgHADIgOAFIgOACQgXgBgMgQg");
	this.shape_1.setTransform(631.1,1146.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYCFIAAjGQAAgSgFgGQgGgHgKAAQgGAAgIAEQgGAFgGAJIAADTIgwAAIAAkFIAlAAIAEAcQAGgJAHgGIANgKIAOgFIAOgCQAXAAAMARQANAQAAAgIAADIg");
	this.shape_2.setTransform(611.7,1146.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYC1IAAkFIAvAAIAAEFgAgUh+QgIgIAAgPQAAgJACgGQACgGAEgDQADgEAGgBIALgCQAOAAAIAHQAHAIAAAQQAAAOgHAJQgIAIgOAAQgNAAgHgIg");
	this.shape_3.setTransform(597.1,1141.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCCkQgKgDgHgHQgHgIgEgNQgEgNgBgWIAAiiIgUAAIAAghIAZAAIAJhFIAiAAIAABFIApAAIAAAhIgpAAIAACnIABANIAEAIIAHAFIAIAAIANgBIAKgGIAAAbIgJAJIgKAFIgLADIgKABQgKgBgIgCg");
	this.shape_4.setTransform(585.8,1143);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYCFIAAjGQAAgSgGgGQgEgHgLAAQgHAAgHAEQgGAFgGAJIAADTIgwAAIAAkFIAlAAIAFAcQAFgJAGgGIAOgKIANgFIAPgCQAXAAANARQAMAQAAAgIAADIg");
	this.shape_5.setTransform(569.5,1146.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPCFQgKgCgHgEQgIgEgIgIQgHgIgFgMQgFgNgDgTQgDgSgBgaIAAgoQABgaADgSQADgSAFgNQAGgMAHgHQAHgIAIgEQAIgEAJgBIAQgBIAPABQAJABAIAEQAIAEAIAHQAGAHAGANQAFAMADATQADASABAaIAAAoQgBAZgDATQgDASgGANQgFANgHAIQgHAHgJAFQgIAEgIACIgPABgAgKheQgEADgEAIQgCAHgCANIgBAfIAABAIABAfQACAMACAIQAEAHAEAEQAFADAGAAQAGAAAFgDQAEgEADgHQACgIACgMIABgfIAAhAIgBgfQgCgNgCgHQgDgIgEgDQgFgEgGAAQgGAAgFAEg");
	this.shape_6.setTransform(550.8,1146.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxBrQgRgbAAg4IAAgxQAAgZADgRQAEgSAGgMQAGgMAIgHQAHgHAJgEQAIgEAIgBIANgBQAOAAALAEQALADAIAHQAIAHAEALQAFALAAAPIgBAPIgCANIgnAAIAAgJQAAgUgEgLQgGgLgKAAQgFAAgEADQgFADgDAGQgDAHgBALIgCAcIAABKIACAdQABAMADAIQACAHAGAEQAEADAGAAIAHgCIAHgGIADgLIACgRIAAgIIAqAAIAAAKQAAAlgRARQgQARghAAQggAAgSgbg");
	this.shape_7.setTransform(533.7,1146.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaCuIgLgEQgHgDgGgGQgGgGgFgLQgEgKgEgQQgDgQAAgWIAAhSQABgWADgPQADgQAFgKQAFgKAHgFQAGgGAGgDIAMgDIAKAAIAOACIAKAFIAJAHIAHAIIAAgBIgBghIAAhGIAvAAIAAFaIglAAIgFgZIgGAKIgKAJIgOAHQgGACgJAAgAgJg3QgEACgDAFQgEAFgBAJIgCAYIAABkIACAYQABAJAEAFQADAFAEADIAJABIAJgBIAHgEIAFgGIAEgHIAAidQgEgIgGgGQgGgFgJAAg");
	this.shape_8.setTransform(507.2,1142.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYCFIAAjGQAAgSgGgGQgEgHgLAAQgHAAgGAEQgIAFgFAJIAADTIgwAAIAAkFIAlAAIAFAcQAFgJAGgGIAOgKIANgFIAPgCQAXAAANARQAMAQAAAgIAADIg");
	this.shape_9.setTransform(488.4,1146.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoCBQgKgFgGgIQgHgIgDgMQgDgLAAgOQAAgQAEgNQAEgMAHgKQAIgKALgJQAMgHAPgHIAPgIIAQgGIAAgjIAAgOIgDgLQgCgFgFgDQgEgDgIAAIgJACQgFACgDAFQgEAEgCAIQgCAHAAAMIAAALIglAAIgDgNIgBgNQAAgPAGgLQAFgLAJgIQAJgHAMgEQANgEAOAAQATAAANAEQANAFAIAIQAIAJADANQADANAAARIAADDIgkAAIgDgWQgIALgNAHQgMAHgRAAQgMAAgJgFgAAPAIIgLAFIgJAIIgIALIgHAOQgCAIAAAKQAAAPAGAJQAGAJAMAAQAGAAAGgDIAJgIIAAhSg");
	this.shape_10.setTransform(469.2,1146.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhICvIAAlaIAmAAIAFAcIAHgLIALgKIAMgHQAHgDAKAAIAJABIAMAEQAGADAGAGQAGAGAFAKQAFALADAPQACAQAAAWIAABQQAAAVgCAQQgDAPgFALQgFAKgGAGQgGAGgHADIgMAEIgKABQgPAAgKgGQgKgGgGgIIABAgIAABGgAgOiFQgGAFgEAHIAACeIAEAHIAFAGIAHAEIAIACIAJgCQAEgCAEgFQADgFACgKIACgYIAAhjIgCgYQgCgJgDgGQgDgFgFgCIgJgCQgJAAgFAGg");
	this.shape_11.setTransform(443.8,1150.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoCBQgKgFgGgIQgHgIgDgMQgDgLAAgOQAAgQAEgNQAEgMAHgKQAIgKALgJQAMgHAPgHIAPgIIAQgGIAAgjIAAgOIgDgLQgCgFgFgDQgEgDgIAAIgJACQgFACgDAFQgEAEgCAIQgCAHAAAMIAAALIglAAIgDgNIgBgNQAAgPAGgLQAFgLAJgIQAJgHAMgEQANgEAOAAQATAAANAEQANAFAIAIQAIAJADANQADANAAARIAADDIgkAAIgDgWQgIALgNAHQgMAHgRAAQgMAAgJgFgAAPAIIgLAFIgJAIIgIALIgHAOQgCAIAAAKQAAAPAGAJQAGAJAMAAQAGAAAGgDIAJgIIAAhSg");
	this.shape_12.setTransform(424.5,1146.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXCjIAAkeIg1AAIAAgnICZAAIAAAnIg1AAIAAEeg");
	this.shape_13.setTransform(408.3,1143.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAYQgHgIAAgQQAAgRAHgHQAHgIALAAQANABAGAHQAHAJAAAPQAAAPgHAJQgGAJgNAAQgLAAgHgJg");
	this.shape_14.setTransform(343.6,642.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIAMgEIANgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_15.setTransform(326.9,633.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgLgCgQQgDgQAAgWIAAgjQAAgXADgPQACgRAFgKQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAXIAAAjQAAAVgCAQQgDARgFALQgFALgGAHQgHAHgHADQgGAFgIABIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA2IABAbQABALADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgLIABgbIAAg2IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_16.setTransform(306.4,633.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWCYIgLgEQgFgCgFgGQgGgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAFgJQAEgJAGgFQAFgFAGgCIAKgDIAJAAIAMABIAJAFIAIAGIAFAHIgBgdIAAg9IAqAAIAAEtIghAAIgDgVIgHAIIgJAIIgLAFQgFACgIAAgAgHgwQgEACgDAEQgDAFgBAIIgCAVIAABWIACAVQABAIADAFQADAEAEACIAHACIAIgBIAFgEIAFgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_17.setTransform(290.1,630.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_18.setTransform(273.7,633.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAHAAAJIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgKAIgGQAIgHALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_19.setTransform(257,633.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_20.setTransform(244.3,633.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWBzQgKgDgIgGQgHgGgEgJQgFgKAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgIIgGgHIgdglIgMgOIgKgPIgGgRQgDgKAAgJQAAgOAFgKQAEgKAIgGQAHgHALgDQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAFIgDAGIgBAGQAAAJADAGIAKAQIAhAlIAIALIAKAPIAHARQADAIAAALQAAAMgEAJQgEALgHAGQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_21.setTransform(526.5,588.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_22.setTransform(515.4,584.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgGgGgEgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_23.setTransform(498.3,586.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgWBzQgKgDgIgGQgHgGgEgJQgFgKAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgIIgGgHIgdglIgMgOIgKgPIgGgRQgDgKAAgJQAAgOAFgKQAEgKAIgGQAHgHALgDQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAFIgDAGIgBAGQAAAJADAGIAKAQIAhAlIAIALIAKAPIAHARQADAIAAALQAAAMgEAJQgEALgHAGQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_24.setTransform(485.7,588.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_25.setTransform(473.1,588.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_26.setTransform(461.6,584.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcCZIAAjGIgUAAIAAgeIAUAAIAAgRQAAgSAEgMQAEgLAGgHQAHgGAIgDQAJgCALAAIAGAAIAIABIAHACIAHACIAAAeQgHgCgJAAIgIACIgHAEIgEAIIgCAMIAAARIAgAAIAAAeIggAAIAADGg");
	this.shape_27.setTransform(452.6,585.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAYCXIgvhyIgBAAIAAByIgqAAIAAktIAqAAIAACtIABAAIAthjIAoAAIgyBnIA3B8g");
	this.shape_28.setTransform(433,585.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgqBdQgPgYAAgwIAAgrQgBgVAEgQQADgPAFgLQAGgKAGgHQAHgFAHgEQAHgDAHgBIAMgBQALAAAKADQAKADAGAGQAIAHADAJQAFAKAAAMIgBAOIgCALIgiAAIAAgIQAAgQgEgLQgEgJgJAAQgFAAgDADQgEACgDAFQgCAHgBAJIgCAZIAAA/IABAaQABALACAGQADAHAEADQAEACAGAAIAGgBQADgCACgDIAEgKIABgPIAAgHIAkAAIAAAJQAAAggOAPQgOAPgdAAQgcAAgPgYg");
	this.shape_29.setTransform(417.1,588.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgHQAKgGANgHIANgGIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHABQgFADgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAIIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_30.setTransform(401.4,588.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_31.setTransform(388.9,586.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgGgGgEgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_32.setTransform(377.7,586.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgHQAKgGANgHIANgGIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHABQgFADgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAIIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_33.setTransform(363.7,588.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_34.setTransform(345.1,585.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_35.setTransform(336.5,585.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_36.setTransform(328,584.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAdByIgXh+IgGgjIAAAAIgFAjIgVB+IgpAAIgljjIAoAAIAQB6IAEAvIABAAIAFgvIAWh6IAjAAIAWB6IAGAvIACAAIACgvIAPh6IAnAAIglDjg");
	this.shape_37.setTransform(312.5,588.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgGQgHgIgEgLQgFgKgCgRQgDgQAAgWIAAgjQAAgWADgRQACgPAFgLQAFgLAGgGQAGgHAIgDQAHgDAHgCIAOgBIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAXIAAAjQAAAVgCARQgDAQgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAbQABALADAGQADAHAEADQAEADAFgBQAFABAEgDQAEgDADgHQACgGABgLIABgbIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_38.setTransform(286.3,588.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAVCXIAAisQAAgQgFgGQgEgFgJAAQgGgBgGAFQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgEIALgHIALgEIALgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_39.setTransform(269.9,585.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAiCOIgYiJIgIg6IgCAAIgHA6IgZCJIgrAAIgokbIApAAIATCrIACAoIAEAAIAEgtIAeimIAiAAIAdCmIAEAtIAEAAIACgoIARirIAqAAIgoEbg");
	this.shape_40.setTransform(249.2,586.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.659)").s().p("Eg7iBpgMAAAjS/MB3FAAAMAAADS/g");
	this.shape_41.setTransform(381.1,675.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,762.2,1350.4), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,0,0,0.286)").s().p("EhAsBsyMAAAjZjMCBZAAAMAAADZjg");
	this.shape.setTransform(414.1,696.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,828.3,1392.4), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A+gFQQAUhpCxg3QCOgsECgRQBfgHA5hJQAjgqA/huQBFhlBqgyQCOhDDxABQDxAACzBHQCDA0CABqQAWARBNBFQA6AxAlAbQBrBOByAJQC3ARExg4QCbgdBCgHQB5gOBfAJQCyAUCpCAQBVBAAxA8g");
	this.shape.setTransform(195.3,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,390.6,67.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A35EHQAPhRCLgsQBvgiDKgOQBLgFAtg5QAbghAxhXQA3hOBSgoQBwg0C9AAQC8ABCNA3QBmApBlBTICXB/QBUA9BZAHQCQANDvgsQB6gWA0gGQBegLBKAHQCMAPCEBlQBDAyAmAvg");
	this.shape.setTransform(153,26.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,306,52.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,50.7,0,-50.7).s().p("AjHivIjrALIAKlVINbgBIgIEyIjrAIIg8KrIlMAQg");
	this.shape.setTransform(373.1,58.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,52.7,0,-52.7).s().p("ABKDCIi1AAIgLE8IlhAAIAev1IF3APIgXIFICuAAIACorIFoAIIAZQEImLARg");
	this.shape_1.setTransform(278.4,60);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,54.5,0,-54.4).s().p("AixH7QhhgmhGhBQhGhDgnhZQgohaAAhnQAAhLAUhOQAUhKAlhEQAkhCA1g4QA1g4BDgpQBCgnBRgXQBPgWBbAAQAeAAAqACQAkACApAHQAoAGAjALQAnAMAbAPIgWETQgtgQgugFQgrgFgxAAQg+AAg4ARQg2ASgpAhQgoAigYAvQgYAwAAA6QAAAlALAkQALAiAXAcQAYAcAgAQQAgARAtAAQAeAAAggIQAfgHAYgSIADg3Ii+gDIAKjYIDrgGQBpgCCEgFIAKHkQglArg3AfQg1AfhAAWQg7AUhFALQhBALg8AAQhxAAhggmg");
	this.shape_2.setTransform(176.5,58.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,49.9,0,-49.9).s().p("AjRneIGjgUIhXPVIlMAQg");
	this.shape_3.setTransform(104.9,59.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,52,0,-52).s().p("AlfoHILYAAIgJCGQgEA6gGBMIlPAQIAABbIEiAAIgPDeIkVAIIACGrImPAHg");
	this.shape_4.setTransform(41.6,59);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("AjtIdIASqnIkCANIAOmNIOsgWIgKGAIj2gFIg0LGg");
	this.shape_5.setTransform(373.4,58.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221F20").s().p("AAoDtIhrAAIgMFAIm0AAIAhxTIHMARIgaIFIBUAAIABovIHEAJIAbRjInZATg");
	this.shape_6.setTransform(278.7,60);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221F20").s().p("AjIIqQhrgohPhJQhPhIgshiQgthjAAhvQAAhVAXhTQAUhQArhLQAphIA8g+QA7g9BMgsQBMgtBYgYQBZgYBmAAQAhAAAxACQAvADAnAHQAuAHAmALQAsANAfARIgZFmQgugPhVgLQh0gQhBASQhCARguArIgBABIIBAEIAqIiQgpAug+AjQg/AjhFAWQhCAWhOANQhKALhBAAQh/AAhugpgAhAgvQgXA3APA1QANAwAlAiQAjAeA1AFQA2AFA5gYIgTgZIilgCIgIkAQggAigRArg");
	this.shape_7.setTransform(175.7,60);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221F20").s().p("AkFopIILAAIhlRBImmASg");
	this.shape_8.setTransform(105.5,60.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221F20").s().p("AmXolIM8ghIglF3IlNASIAAAIIE9AAIgRE+IkVAIIAAGgInuAWg");
	this.shape_9.setTransform(42.1,58.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,421.2,119.5), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,53.2,0,-53.1).s().p("AkTIUQgEAAgDgEQgDgDAAgFIAJnCIgBgEIjPoZQgCgEACgFQACgEAGAAIFkgtQALgCABAKIA0EcQACAIAHABQAHABAEgGICrkkQACgGAIABIFMAXQAGABACAGQADAFgDAEImOIqQgBADAAACIgTHGQAAADgDADQgDAEgEAAg");
	this.shape.setTransform(396.6,62.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,52.7,0,-52.7).s().p("AljINIg7gFQgJgBAAgJIAUvVQAAgIAIgCQBPgZBSgJQBVgLBXAAQBrAABYAgQBbAhA/A8QBCA8AjBWQAkBZAABtQAABngbBUQgaBTgwBCQgxBBhCAvQhDAvhOAeQhPAfhYAOQhaAOhcAAQgnAAgegCgAgwjWQgDACgBAEIgcG1QAAAGAEADQAEADAFgBQAlgHAegUQAkgXAaghQAaggAPgpQAPgqABgqIAAgKQABgmgJgnQgKglgVgcQgVgdghgSQgcgPgmgDIgCAAQgDAAgDADg");
	this.shape_1.setTransform(308.7,59.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,52.4,0,-52.4).s().p("ACBIFIgpiYQgBgIgJAAIiYAAQgIAAgCAIIgiCXQgBAJgKgBIlmgjQgFgBgCgEQgDgDABgFIEjvMQACgHAHAAIGOgUQAIgBACAJIEdPVQABAFgCAEQgDADgFABIlcAtIgCAAQgHAAgCgHgAgGhSIgqDGQgBAFADAEQADAEAFAAIBVAAQAFAAADgEQADgEgBgFIgsjGQgCgIgIAAQgHAAgCAIg");
	this.shape_2.setTransform(215.2,58.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,53.7,0,-53.6).s().p("AlfIWQgDgEAAgEIAYwcQAAgEADgDQADgDAEAAIKYAAQAFAAADAEQADADAAAEIgREBQgBAJgJABIkpAPQgEAAgDADQgDADAAAEIgGBJQAAAFADADQADADAFAAIDHAAQAFAAADAEQADADgBAFIgPDRQAAAJgKABIjMAGQgIAAgBAKIgGBYQgBAFAEADQADADADAAIEmAAQAEAAADAEQADADAAAEIgREwQgBAJgJABIpsAPQgEAAgEgDg");
	this.shape_3.setTransform(133.3,59.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EBA044","#F9DD89"],[0,1],0,54.1,0,-54.1).s().p("ABiIWIhsktQgDgHgHAAIhLACQgKABAAAJIgMEiQgBAEgDADQgDADgEAAIksAAQgEAAgDgDQgDgDAAgEIAHlIIAIlRIADipQABhQAFhTQgBgHAHgCQAxgSAvgMQA5gOAtgGQA4gHAwgCQA0gDA2AAQBVAABPAXQBQAZA9AuQA+AwAjBFQAlBFAABeQAAA8gKAtQgJAvgWAnQgWAngiAiQgfAegsAcQgDADgBAEQgBAEACADIClEnQADAEgDAFQgCAFgFABIk4A9IgCAAQgHAAgDgHgAg5kcIgUAEQgHACAAAIIgMECQAAAEADAEQAEADAEAAIAHAAQAhAAAggIQAfgIAcgSQAagQARgcQAQgaAAgmQABgggJgZQgIgagRgTQgRgTgZgLQgZgKggAAQgPAAgPABg");
	this.shape_4.setTransform(49.3,57.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#222222").s().p("AlSJHQgDgDAAgFIAKnvIgBgEIjzpPQgCgFADgFQADgEAFgBIHfgxQAJgBACAJIAoDKQACAHAHACQAHABADgHIB4jWQADgGAHABIHHAyQAGABACAFQACAFgDAFInCJPQgCACAAAEIABHRQAAAKgJABIm9AgIgBAAQgEAAgDgDg");
	this.shape_5.setTransform(396.9,63.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#222222").s().p("AmiJHIhGgFQgEgBgDgDQgDgDAAgEIAYxCQAAgIAIgCQBdgbBigMQBmgMBkAAQB8AABqAkQBqAkBLBCQBMBDArBhQAqBhAAB6QAAByggBdQggBeg4BHQg4BJhOA0QhOA0hdAhQhbAihpAQQhlAQhyAAQgtAAgkgCgAgqifQgEADAAAFIgSE3QAAAGAEADQAEADAFgBQATgFAVgNQAWgRASgYQARgYAKgeQAJgeACgeIAAgIQAAgfgGgZQgHgcgNgUQgNgVgXgNQgQgKgXgDIgCAAQgDAAgDACg");
	this.shape_6.setTransform(309.6,59.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#222222").s().p("ABOI8IgxitQgBgHgJAAIg4AAQgGAAgDAGIhICVQgDAHgHgBImqgpQgFgBgCgEQgDgEABgFIE1wuQACgHAIAAIHVAMQAHAAADAHIFJP+QABAEgCAEQgDAEgEABInSBpIgDAAQgHAAgCgIgAgPAQIgMAzQgBAFADAEQADAEAFAAIAXAAQAFAAADgEQADgEgBgFIgMgzQgCgIgHAAQgIAAgCAIg");
	this.shape_7.setTransform(216.4,60.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#222222").s().p("AmIJHQgDgDAAgFIgHx9QAAgFAEgDQADgDAEAAIMQAKQAEAAADADQADADAAAFIgJCpIgKCnQAAADgDADQgCADgEAAIkhARQgIABgCAGIgCAIQgBAFADAEQADAFAFgBICpgGQAFAAADADQADADAAAFIgREVQgBAKgJAAIi6AHQgIAAgCAIIgDARQgBAFADAEQADAEAFAAIEjgGQAFAAADADQADAEAAAEQgDAlgPChQgQCegCAkQAAAEgDADQgDADgEAAIqwAQQgFAAgDgDg");
	this.shape_8.setTransform(133.4,58.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#222222").s().p("ABSJDIh6lDQgDgIgIABIgPACQgJABAAAIIgPE4QAAAEgDADQgDADgEAAImAgOQgKgBAAgKIAHleIANodQABhdAFhSQAAgHAHgCQA0gSA5gOQA6gNA5gIQA6gHA7gDQA6gDA+AAQBgAABZAZQBZAZBFAyQBEAyArBLQApBLAABjQAAA9gLA0QgLAygZApQgYAqgnAkQgkAigwAdQgEADgBAEQgBAEACADIC7E8QADAFgCAFQgDAFgFABIl/BPIgDAAQgGAAgDgGgAgpj4QgIACAAAIIgGCrQAAAFADADQADADAEAAQAVAAASgGQATgFAQgMQAQgLALgTQAKgTAAgZQAAgUgGgTQgEgRgLgOQgLgOgOgHQgPgHgTAAg");
	this.shape_9.setTransform(49.5,58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,454.6,121.9), null);


(lib.menu_mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(65,65,65,0.008)").s().p("AlwFxQiaiZABjYQgBjYCaiYQCYiZDYAAQDYAACaCZQCYCYABDYQgBDYiYCZQiaCZjYABQjYgBiYiZg");
	this.shape.setTransform(52.2,52.2,0.999,0.999,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.menu_mask, new cjs.Rectangle(0,0,104.4,104.4), null);


(lib.leaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#648746").s().p("AgbAqQgHgbAFgXQAEgYAQgWQASgXAYgGIgHAuIgIAmIgHAmQgFAagHATQgTgRgHgZg");
	this.shape.setTransform(28.6,-23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#648746").s().p("AhFASQgngQgTgZIBCADQAjACAagBQAXAAAmgFIBDgFQgTAZglARQgkARgjAAIgCAAQgiAAgigMg");
	this.shape_1.setTransform(64.7,-9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#648746").s().p("AgKA0Qg+gIgxgaQg8gegcgqQAsAUA7ARQAxAOA0AGQAmAFBDABIBuAAQgtAag+ANQgmAHgjAAQgWAAgSgDg");
	this.shape_2.setTransform(52.9,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#648746").s().p("AlLEaQAThJAehAQAbg/ArhCQApg9Azg1QBehnB9hXQCFhbB6gtQhzBKh0BcQh9BohSBaIgYAaQgIAIgPATIgqA2QgoA4gjA/QgjBCgYA+QgcBEgSBDQABg6AVhVg");
	this.shape_3.setTransform(47.7,-3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A6BD55").s().p("AikItQiAgjhdhCQhGhQgpiBQhRkBCUjxQCJjdGmhKQDTgmC5AHQgZESABCJQABCsgxCkQg9DNh2BjQh9BpifAAQhKAAhRgWg");
	this.shape_4.setTransform(47.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf, new cjs.Rectangle(-5,-57.8,105.2,115.8), null);


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


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3EB3E8").s().p("EgnXBXDQj1AAiuitQiuiuAAj2MAAAibjQAAj2CuiuQCuitD1gBMBOvAAAQD1ABCuCtQCuCuAAD2MAAACbjQAAD2iuCuQiuCtj1AAg");
	this.shape_1.setTransform(311.3,557.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,622.6,1114.3), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3EB3E8").s().p("Ege7BH+Qj2AAiuitQitiuAAj2MAAAh9ZQAAj1CtiuQCuiuD2AAMA93AAAQD2AACuCuQCtCuAAD1MAAAB9ZQAAD2itCuQiuCtj2AAg");
	this.shape.setTransform(257.3,460.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,514.7,921.2), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7BC0EB").ss(38).p("AayAAQAAFdiHE+QiCE0jtDtQjtDtk0CCQk+CHldAAQlbAAk/iHQkziCjujtQjtjtiCk0QiHk+AAldQAAlbCHk/QCCkzDtjuQDujtEziCQE/iHFbAAQEpAAEVBjQEMBfDfCyQEuDwCrFZQCwFkAAGQg");
	this.shape_1.setTransform(190.4,190.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,-35.3,445.3,416.1), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#ABE0F9","#58C5F2"],[0,1],-33.1,0,33.1,0).s().p("AlKAAIItouIBoBoInGHGIHGHHIhoBog");
	this.shape_1.setTransform(63.4,86);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(30.3,30.2,66.3,111.8), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#199187","rgba(9,100,161,0.4)"],[0,1],88.2,167.3,-99.3,-188.3).s().p("AhjdtQmAgUlbipQlcioj9kiQj0kXh6lgQh6lhATlxQAUmACplbIFVCmQiHEWgPEzQgQEnBiEaQBiEaDDDgQDKDoEXCHQEWCHEzAQQEnAPEahiQEahiDgjDQDojKCHkXQCHkWAQkzQAPknhikaQhikajDjgQjKjokXiHQlAiblgACIgDl8QG5gDGQDDQFcCoD9EiQD0EXB6FgQB6FhgTFxQgUGAipFbQioFckiD9QkXD0lgB6QkxBqk+AAQgxAAgygDg");
	this.shape_4.setTransform(220.5,220.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(30.2,30.1,380.7,380.7), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#60C4D2").s().p("Ag0BZIkZAAIHTqKIhRHZIEYAAInSKKg");
	this.shape_3.setTransform(63.5,86.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(30.2,30.2,66.7,112.3), null);


(lib.Image_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_2_5, new cjs.Rectangle(0,0,103.5,132.7), null);


(lib.Image_0_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_0_5, new cjs.Rectangle(0,0,118.1,160.1), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgphAGZIAAsxMBFIAAAIN7GsIAAGFg");
	mask.setTransform(265.8,40.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgoiAFlIAAqVQAAgVAQgQQAPgPAWAAMBPbAAAQAWAAAPAPQAQAQAAAVIAAKVg");
	this.shape.setTransform(265.9,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE4940").s().p("EgphAGZIAArNQAAgpAdgeQAegdApAAMBP6AAAQAqAAAdAdQAeAeAAApIAALNg");
	this.shape_1.setTransform(265.8,40.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,531.5,81.8), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am9lqIN6GtIk0Eog");
	mask.setTransform(324.2,427);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAVpAieQgVgBgOgRMgzEg82QgOgRACgVQACgWARgOIH7mqMA0HA+HIn7GpQgPANgSAAIgGgBg");
	this.shape.setTransform(199.5,228.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE4940").s().p("EAViAjmQgpgEgagfMgzYg9OQgaggADgpQAEgpAggbIImnNMA1XA/mIomHOQgcAXgjAAIgKAAg");
	this.shape_1.setTransform(200.1,227.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(279.7,390.7,89.1,65), null);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0A0A0A").s().p("AwlRbQmSivkHkwQEKDyFpCHQF2CLGeAAQGCAAFhh6QFVh2EHjWQEHjXCQkXQCVkgAAk8QAAj1hbjoQhZjfimjCQDmDTB9EFQCCEPAAEmQAAE7iWEgQiQEXkHDXQkHDXlVB2QlhB6mBAAQnaAAmfi0g");
	this.shape_5.setTransform(172.7,129.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,345.4,259), null);


(lib.Image_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_2_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_1, new cjs.Rectangle(0,0,91.2,112.3), null);


(lib.Image_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_0_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_4, new cjs.Rectangle(0,0,102,132), null);


(lib.Image_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_2_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_2, new cjs.Rectangle(0,0,85.5,103), null);


(lib.Image_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Image_0_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_5, new cjs.Rectangle(0,0,96,123.1), null);


(lib.Image_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_2_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_3, new cjs.Rectangle(0,0,77.1,88.8), null);


(lib.Image_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Image_0_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_6, new cjs.Rectangle(0,0,83.1,99.9), null);


(lib.Image_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_4, new cjs.Rectangle(0,0,71.1,78.3), null);


(lib.Image_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Image_0_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_7, new cjs.Rectangle(0,0,74.9,85.5), null);


(lib.Image_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_1_5, new cjs.Rectangle(0,0,75.6,86.4), null);


(lib.Image_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Image_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_8, new cjs.Rectangle(0,0,68.9,71.5), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8A5D3E").s().p("Am2QPQjKhVicidQicichWjKQhZjSAAjlQAAjlBZjRQBWjKCcicQCcidDKhVQDShZDkAAQDmAADRBZQDKBVCcCdQCdCcBVDKQBZDRAADlQAADlhZDSQhVDKidCcQicCdjKBVQjRBZjmAAQjkAAjShZg");
	this.shape_4.setTransform(112.8,112.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,225.6,225.6), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Egi5ABkQgpAAgegeQgdgdAAgpQAAgoAdgdQAegeApAAMBFzAAAQAqAAAdAeQAdAdAAAoQAAApgdAdQgdAegqAAg");
	mask_1.setTransform(233.4,10);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, null, null);


(lib.Path_1_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4D1C9").s().p("ApxXIQkgh6jejeQjfjeh6khQh+kqAAlHQAAlGB+krQB6kgDfjeQDejfEgh6QErh+FGAAQFHAAEqB+QEhB6DeDfQDfDeB5EgQB/ErAAFGQAAFHh/EqQh5EhjfDeQjeDekhB6QkqB/lHAAQlGAAkrh/g");
	this.shape.setTransform(190.8,190.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1_1, new cjs.Rectangle(30.1,30,321.4,321.4), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4D1C9").s().p("EguHABoQgXAAgRgQQgQgRAAgXIAAhfQAAgXAQgRQARgQAXAAMBcPAAAQAXAAARAQQAQARAAAXIAABfQAAAXgQARQgRAQgXAAg");
	this.shape.setTransform(331,40.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(30.2,30.1,601.7,20.8), null);


(lib.Path_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4D1C9").s().p("EguHABoQgXAAgQgQQgRgRAAgXIAAhfQAAgXARgRQAQgQAXAAMBcPAAAQAXAAARAQQAQARAAAXIAABfQAAAXgQARQgRAQgXAAg");
	this.shape_6.setTransform(331,40.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(30.2,30.1,601.6,20.8), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221E1F").s().p("Eg7tBo4MAAAjRvMB3bAAAMAAADRvg");
	this.shape_5.setTransform(382.2,671.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,764.4,1342.4), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjMQBTjFCYiYQCYiYDFhTQDMhXDeAAQDfAADMBXQDFBTCYCYQCYCYBTDFQBXDMAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjMBXjfAAQjeAAjMhXg");
	mask.setTransform(109.8,109.8);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, null, null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjNQBTjFCYiXQCYiYDFhTQDMhXDeAAQDgAADLBXQDFBTCYCYQCYCXBTDFQBXDNAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjLBWjgABQjegBjMhWg");
	mask.setTransform(109.8,109.8);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, null, null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjMQBTjFCYiYQCYiYDFhTQDMhXDeAAQDfAADMBXQDFBTCYCYQCYCYBTDFQBXDMAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjMBXjfAAQjeAAjMhXg");
	mask.setTransform(109.8,109.8);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, null, null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjNQBTjFCYiXQCYiYDFhTQDMhXDeAAQDgAADLBXQDFBTCYCYQCYCXBTDFQBXDNAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjLBWjgABQjegBjMhWg");
	mask_1.setTransform(109.8,109.8);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApUNaQANgpAlhlQAziIBCiOIAhhEIAhhDIBGiGQA3hlBhifIBRh/IBTh9QByieBEhSQAbgiBHhRICeiiIA4gzQBBg5A3giQgNAJgsAoIicCiQhaBmhiCCQiqDfilEQIhNB/IhLCBQgwBShfC1QhQCfgxBvQgkBPgYA7IgbBGQgRAsgJAaQAPg/AZhSg");
	this.shape_2.setTransform(181.5,134.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ApUNaQATg7AfhTQAziIBCiOIAhhEIAhhDIBGiGQA/hzBZiRIBRh/IBTh9QByieBEhSQAggnBChMICeiiIA4gzQBBg5A3giQgQAMgpAlIicCiQhaBmhiCCQiqDfilEQIhNB/IhLCBQgwBShfC1QhQCfgxBvQgaA4giBSIgbBGQgRAsgJAaQAPg/AZhSg");
	this.shape_3.setTransform(79.3,143.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlfF/QAMgeARgnIBHiFQBJh7Bjh6QBmh9BoheQA8g1A6gqIA+gpQAogYAbgLQgYARgiAcIg4AxQgpAmhBBCQhpBuhZBxQhdBzhUB4QhoCYg1BlQAHgaAQgug");
	this.shape_4.setTransform(57.5,79.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#648746").s().p("AgkgDQAIgOAPgGQANgHARAEQASAEAJAOQgKALgMAJQgHAFgJAFQgKAEgJABQgLABgSAAQgEgQAKgPg");
	this.shape_5.setTransform(85.4,25.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#648746").s().p("AgPAgIgGgfQgDgOgCgQQgCgRABgXQATAEARATQANARAFAWQAEATgIAXQgHAWgRANQgIgQgGgWg");
	this.shape_6.setTransform(97.1,43.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#648746").s().p("AALAzIgQg0IgshsQAdAGAbAdQAWAXAMAhQALAegCAjQgCAkgPAbQgMgagKghg");
	this.shape_7.setTransform(110.9,34.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#648746").s().p("AiYBTQAfhRAtg+QAYgiAdgdQAhghAegUQBMgyBKgNQhBAog8A2QgeAcgYAaIgYAeIgWAeQgnA0gqBPQgmBEgiBIQAFhJAfhUg");
	this.shape_8.setTransform(98.2,33.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A6BD55").s().p("AkqBrQgIjsBohjQBxhsCUAOQBKAIA0AcIAbAeQAfAlAVApQBECDg+BzQgoBMhoA4QhTAuhcATQgvAJhbAaIhSAZQgZhjgEh3g");
	this.shape_9.setTransform(102,35.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#648746").s().p("Ag6gDQARgUAXgKQAXgKAaABQAdADATAOQgSAMgYAKIhHAeQgUAIgYAIQABgYATgWg");
	this.shape_10.setTransform(97.4,123.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#648746").s().p("AgCA7QgDgkgFgYQgDgTgKgoIgRhBQAdAOAXAjQAUAfAGAjQAHAhgIAnQgLAogUAYIgIhDg");
	this.shape_11.setTransform(117.4,156.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#648746").s().p("AAsBbQgQhDgMghQgRg0gYgsQgbg0gegpQAvAUAqAzQAlAtATA4QASAyACA/QAAA/gQAxIgXhsg");
	this.shape_12.setTransform(142.6,138.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#648746").s().p("AkGCdQA8iQBRhuQAqg+AzgzQA8g9AzgjQA4gpBFgjQBNglA6gPQhAAhg7ApQg1Aig8AyQgyAqgzA4QgjApgKAMIgqA4QhIBkhJCOQhBCAgzCGQATiAA9iWg");
	this.shape_13.setTransform(120.4,137.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A6BD55").s().p("AocDBQgOmsC8izQDNjDEMAaQCGANBdA0IAxA1QA5BEAmBLQB6DthvDRQhJCIi8BmQiWBSipAjQhTARilAvIiUAsQgtizgIjXg");
	this.shape_14.setTransform(127.4,141.5);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(15.6,3.4,204,216.2), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjNQBTjFCYiXQCYiYDFhTQDMhXDeAAQDgAADLBXQDFBTCYCYQCYCXBTDFQBXDNAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjLBWjgABQjegBjMhWg");
	mask.setTransform(109.8,109.8);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, null, null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AmqPzQjFhTiYiYQiYiYhTjFQhWjMgBjfQABjfBWjLQBTjFCYiYQCYiYDFhTQDMhXDeAAQDfAADMBXQDFBTCYCYQCYCYBTDFQBXDLAADfQAADfhXDMQhTDFiYCYQiYCYjFBTQjMBWjfAAQjeAAjMhWg");
	mask_2.setTransform(109.8,217.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B33F6C").s().p("AyMOxQAehIBLjfQC6iSCdjaQB7iqBdjEQCQhECkibQCrihBGiRQDAhPBlg7QCyhnCRiYQCCgXC4hOQCUg/DRhuQi+B/hjBTQihCIhXCNQh7AZiQBbQirBuh5ChQiHA6iQCVQiPCSg6CGQieBsiGCmQh7CWg9CSQgdgPhNBBQhFA6gxBDQgpA4hHBoIh5BtQhYBchKBWQBkidBHivg");
	this.shape_2.setTransform(244.2,186.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DA4934").s().p("AyvN+QAhhIBTjcQDAiJCljTQCBikBljAQCSg9CqiUQCxiaBLiNQDDhHBng2QC2hfCWiSQCDgRC7hGQCXg4DUhlQjBB2hoBPQimCBhcCJQh8ATiTBWQivBmh/CbQiJA0iWCOQiUCMg/CEQiiBliMCfQiACRhECPQgcgQhPA9QhIA3gzBBQgqA2hMBlIh8BnQhcBZhNBSQBqiYBNirg");
	this.shape_3.setTransform(244.2,196.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B33F6C").s().p("AtoRJQAFhMAAjdQCPipBWjqQBDi2AcjKQB9hXB1iwQB4i2AXiUQCphuBUhKQCTiABgipQB+gtCjhqQCDhVCwiNQiXCZhJBgQh4CdgoCUQh2Ath0BvQiLCGhFCtQh2BPhiCmQhhCkgNCIQh9CBhRC0QhKCjgNCUQgjgIg5BKQg0BEgaBHQgXA8gmBuIhXB8Qg7BngtBdQAwilANixg");
	this.shape_4.setTransform(165.2,161.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DA4934").s().p("AuVQiQAIhLAKjdQCUikBhjmQBLiyAkjIQCBhTB7iqQCAixAdiTQCuhmBXhFQCYh6BoilQCAgnCnhkQCHhPC1iFQicCRhPBeQh9CXgvCSQh4Aoh5BrQiQCAhMCpQh7BKhnCiQhoCegTCIQiCB8hZCvQhQChgVCTQghgLg9BJQg2BAgeBHQgZA7grBtIhbB3Qg/BlgzBbQA5iiAUixg");
	this.shape_5.setTransform(171.8,166.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B33F6C").s().p("AmxReQgRhBhAi+QBTivANjYQAKiqggiyQBbhmA5isQA7i1gWiDQB/iBA5hPQBjiNApikQBphBB4h8QBihlB7icQhhCigoBhQhCCfAFCHQhhA/hMB3QhaCPgPChQhWBdgsCiQgqCfAbB3QhPCJgXCpQgWCbAeCCQgjgBgfBLQgcBEgFBDIABBSQAAAwgIAcIgVA7IgYBBQgZBkgQBZQgCiXgniZg");
	this.shape_6.setTransform(83.9,142.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DA4934").s().p("An8Q9QgVhDhSjOQBjioANjeQAKisgqi8QBshcBDiqQBGizgciJQCYh0BGhLQB2iEAwiiQB+g2CShwQB1haCViRQh0CZgwBgQhOCZAICLQh1A1haByQhtCGgQClQhoBTgzChQgxCeAjB+QheCCgaCsQgZCcAnCJQgqgFglBKQgiBCgFBEQAAANADBIQABAxgJAbQgHASgSApQgVArgHAUQgeBkgSBZQgEibgzijg");
	this.shape_7.setTransform(90.9,141.4);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(29.7,107.8,189.8,210.5), null);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E5E5E").s().p("AipCHIAAkNIFTAAIAAENg");
	this.shape_1.setTransform(17,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0,33.9,26.9), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E5E5E").s().p("AipCHIAAkNIFTAAIAAENg");
	this.shape_2.setTransform(17,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,33.9,27), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E5E5E").s().p("AgzChIgohIIhTAAIgWglIBXgxQAPAbAaAQQAbAQAgAAQAvAAAigiQAighAAgwQgBgfgPgbIBVgxIAWAkIgqBHIAqBHIgqBHIhSAAIgqBIg");
	this.shape.setTransform(19.7,16.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,39.3,32.2), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E5E5E").s().p("AipCHIAAkNIFTAAIAAENg");
	this.shape_2.setTransform(17,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,33.9,27), null);


(lib.Path_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E5E5E").s().p("Ag2A6QgVgNgNgWIAagPQAJAPAOAJQAQAJASAAQAaAAATgTQATgTAAgaQAAgRgJgPIAagQQANAWAAAaQAAAngcAcQgbAcgnAAQgaAAgXgOg");
	this.shape_1.setTransform(8.9,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0_1, new cjs.Rectangle(0,0,17.8,14.3), null);


(lib.Path_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E5E5E").s().p("AipCHIAAkNIFTAAIAAENg");
	this.shape_7.setTransform(17,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0,0,33.9,26.9), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E5E5E").s().p("AibgOQBKgPBBgnQA/gnAvg6IA+CCQgtBHhCA0QhBA0hRAag");
	this.shape.setTransform(15.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,31.1,33.2), null);


(lib.Path_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221E1F").s().p("AvoBkQgpAAgdgeQgegdAAgpQAAgoAegdQAdgeApAAIfRAAQApAAAdAeQAeAdAAAoQAAApgeAdQgdAegpAAg");
	this.shape_3.setTransform(110.1,10);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_3, new cjs.Rectangle(0,0,220.2,20), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221E1F").s().p("AxkFEIkwlEIEwlDMAjIAAAIExFDIkxFEg");
	this.shape_6.setTransform(142.9,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,285.8,64.9), null);


(lib.Path_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_3_4, null, null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221E1F").s().p("AxkFEIkwlEIEwlDMAjIAAAIExFDIkxFEg");
	this.shape_7.setTransform(142.9,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,285.8,64.9), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#83312B").s().p("ACOEcQDRjZAAkLQgBjNh+i2QBQBeAqBsQAtBxAAB2QAAEZjhDUQjfDSlNAnQFJhbDLjVg");
	this.shape_8.setTransform(39.1,58.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,78.2,117.6), null);


(lib.Path_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#080405").s().p("Ap0KVQjvhnici2QCeCRDWBQQDeBSD1AAQDkAADShJQDKhGCch/QCciABVikQBZirAAi7QAAiRg3iKQg0iEhjhzQCJB9BKCbQBNCgAACuQAAC7hZCrQhVClicCAQicB/jKBGQjSBIjkABQkYAAj2hrg");
	this.shape_8.setTransform(102.4,76.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_7, new cjs.Rectangle(0,0,204.8,153.5), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D58D").s().p("AsRXPQjKhGiciAQich/hWilQhYirAAi8QAAj1CUjTQCPjMD2h8QklmWhGhpQhPh2g3i2QhCjcBNgsQBSgvCLCMQB7B7BqDHQA7BvA6DBQApCIAjCbQDPhGDhAAQDlAADQBIQBJlmAGiyQABgegFinQgFiiAEhlQANlMBwgTQA+gKA9AjQA7AjAvBHQBnCcgIDbQgHC/h6E6QhQDLhyDeQB4BEBeBYQBdhpBzgjQCGgqCgA6QBpAnCUCCQCIB6A0BZQAxBSgnCIQgoCLhqBpQhhBficghQh9gahhhUQgugogMgvIABATQAAC8hZCrQhVClicB/QicCAjKBGQjRBIjlAAQjlAAjRhIgAMGItIACAUQACgRAHgPIAGgMg");
	this.shape.setTransform(155.4,163.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(8,8,294.9,311.9), null);


(lib.Path_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A0A0A").s().p("AlPK3QjKhGibh/QiciAhWilQhYirgBi6QAAiuBNihQBLibCIh9QhjBzg1CFQg2CJAACRQABC8BYCqQBWClCcB/QCbCADKBGQDSBIDjAAQD2AADehSQDWhQCdiQQicC1jtBnQj3BrkZAAQjkAAjRhJg");
	this.shape_2.setTransform(102.4,76.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_3, new cjs.Rectangle(0,0,204.7,153.6), null);


(lib.Path_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0A0A0A").s().p("ABSEXQhHhghLiXQhLiTgih1Qgjh0AbgNQAbgNBJBgQBHBhBLCWQBLCUAiB0QAjBzgbAOQgDACgEAAQgdAAhAhVg");
	this.shape_4.setTransform(19.3,36.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_5, new cjs.Rectangle(0,0,38.7,72.7), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0A0A0A").s().p("ABuHUQhbhAhThcQgzg4hNi5QgmhbgchSQAcgeAggtQBBhbARhMQARhNgOg3QgIgcgKgNQBBgFA/AkQB9BGgODKQgLChgUCTQgIBSAaA9QAbA/BaBdQAgAiAJAUQANAbgNAaQgKATgXAAQgmAAhIgzg");
	this.shape_9.setTransform(25.9,51.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,51.9,103.7), null);


(lib.Path_4_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A0A0A").s().p("Ar+BbQk+gmAAg1QAAg0E+gmQE+glHAAAQHBAAE+AlQE+AmAAA0QAAA1k+AmQk+AlnBAAQnBAAk9glg");
	this.shape_3.setTransform(108.5,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_4, new cjs.Rectangle(0,0,217.1,25.7), null);


(lib.Path_3_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0A0A0A").s().p("ApABbQjvglAAg2QAAg0DvgmQDvglFRgBQFSABDvAlQDvAmAAA0QAAA2jvAlQjvAmlSAAQlRAAjvgmg");
	this.shape_5.setTransform(81.6,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_6, new cjs.Rectangle(0,0,163.3,25.7), null);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A0A0A").s().p("AnWBpQgKgqCEg8QCDg6DEgsQDCgrCRgCQCQgCAKAqQAJAqiEA7QiDA8jEArQjCAriRACIgKAAQiHAAgIgog");
	this.shape_3.setTransform(47.2,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,94.4,29), null);


(lib.Path_4_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("A1FFEIkwlEIEwlDMAqKAAAIExFDIkxFEg");
	this.shape_4.setTransform(165.4,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_5, new cjs.Rectangle(0,0,330.8,64.8), null);


(lib.Path_3_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AmSFEIExlEIkxlDIH0AAIExFDIkxFEg");
	this.shape_6.setTransform(40.3,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_7, new cjs.Rectangle(0,0,80.6,64.8), null);


(lib.Path_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AmSFEIExlEIkxlDIH1AAIEvFDIkvFEg");
	this.shape_4.setTransform(40.3,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_4, new cjs.Rectangle(0,0,80.5,64.8), null);


(lib.Path_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AhhFEIkwlEIEwlDIHzAAIkwFDIEwFEg");
	this.shape_9.setTransform(40.2,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_8, new cjs.Rectangle(0,0,80.5,64.8), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AhhFEIkxlEIExlDIHzAAIkwFDIEwFEg");
	this.shape_1.setTransform(40.3,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,80.5,64.8), null);


(lib.Symbol13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BBBDBF").ss(2).p("AClAAIlJAA");
	this.shape_6.setTransform(23.7,359.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BBBDBF").ss(2).p("ACmAAIlKAA");
	this.shape_7.setTransform(20.8,127.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BBBDBF").ss(2).p("ACmAAIlKAA");
	this.shape_8.setTransform(20.8,237);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgARAiAQgHgHAAgLMAAAhDbQAAgKAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAKMAAABDbQAAALgHAHQgIAHgKAAQgJAAgIgHg");
	this.shape_9.setTransform(8.3,253.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5D077").s().p("EgDCAmUMAAAhIXQAAiAA9hMQA3hEBOAAQBPAAA3BEQA9BMAACAMAAABIXg");
	this.shape_10.setTransform(19.8,490.3,1,0.76,0,0,0,0.1,245.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(3).p("EADDAl2ImFAAMAAAhIoQAAhQA5g6QA5g5BQAAQBRAAA5A5QA5A6AABQg");
	this.shape_11.setTransform(19.5,242.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D0D2D3").s().p("EgDCAl1MAAAhImQAAhRA5g6QA6g5BPAAQBRAAA5A5QA5A6AABRMAAABImg");
	this.shape_12.setTransform(19.5,242.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13_1, new cjs.Rectangle(-1.5,-1.5,42.8,491.9), null);


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


(lib.circle3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-113,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle3, new cjs.Rectangle(-113,-113,226,226), null);


(lib.circle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-111,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle2, new cjs.Rectangle(-111,-116,226,226), null);


(lib.circle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4C5QhuioiXgRQCXgPBuipQB1i0ADj+QAED+B2C0QBtCpCXAPQAQAAARAAIAAACQgRAAgQgCQiXARhtCoQh2C1gED9QgDj9h1i1gAmeAAQARAAAQAAQgQACgRAAgAl9AAIAAAAg");
	this.shape.setTransform(-57.8,-30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#697E9B").s().p("Amls4IJvAAQBbAABABBQBBBAAABbIAADmQAAFbiuEsQitEtkrCuIhMAsQgXAOgzALIgvAIg");
	this.shape_1.setTransform(40.9,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0BAD3").s().p("Ah4MZIhMgsQksiviuktQitkrAAlcIAAjmQAAhbBBhBQBAhABbAAITfAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtksCvIhMAsQg4AghBAAQhAAAg4ggg");
	this.shape_2.setTransform(-1.3,6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_3.setTransform(-1.2,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_4.setTransform(-1.2,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D3E9EB").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjMQBTjFCYiYQCYiYDFhTQDMhXDeAAQDfAADMBXQDFBTCYCYQCYCYBTDFQBXDMAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjMBXjfAAQjeAAjMhXg");
	this.shape_5.setTransform(-1.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle1, new cjs.Rectangle(-114,-111.9,225.6,225.6), null);


(lib.box3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6AaBMAAAg0BMA0BAAAMAAAA0Bg");
	this.shape.setTransform(-5.6,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3, new cjs.Rectangle(-172,-170,333,333), null);


(lib.box2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6AaBMAAAg0BMA0BAAAMAAAA0Bg");
	this.shape.setTransform(-5.6,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2, new cjs.Rectangle(-172,-170,333,333), null);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6AaBMAAAg0BMA0BAAAMAAAA0Bg");
	this.shape.setTransform(-5.6,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(-172,-170,333,333), null);


(lib.backtogotoMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABkEDIj2jqQgLgKAAgPQAAgOALgKID2jqQARgPAUAJQAVAJAAAWIAABUQAAAVgQAOIhfBaQgLAKAAAOQAAAPALAKIBfBaQAQAOAAAVIAABUQAAAWgVAJQgHAEgHAAQgNAAgKgKg");
	this.shape.setTransform(47.3,52.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FED872").s().p("AlIFJQiIiIAAjBQAAi/CIiJQCIiIDAAAQDAAACICIQCICJAAC/QAADBiICIQiICIjAAAQjAAAiIiIg");
	this.shape_1.setTransform(52.3,52.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlwFxQiaiYABjZQgBjYCaiZQCYiYDYgBQDYABCaCYQCYCZABDYQgBDZiYCYQiaCajYgBQjYABiYiag");
	this.shape_2.setTransform(52.3,52.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backtogotoMenu, new cjs.Rectangle(0,0,104.5,104.5), null);


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

	this.instance = new lib.Path_1_7();
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

	this.instance_1 = new lib.CompoundPath();
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


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween32("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(147.5,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:142.1},7).to({y:156.1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,330,347);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var canvas = this
		this.backtogotoMenu.addEventListener("click",backtogotoMenu)
		function backtogotoMenu(){
			canvas.parent.gotoAndPlay("page12");
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.backtogotoMenu = new lib.backtogotoMenu();
	this.backtogotoMenu.parent = this;
	this.backtogotoMenu.setTransform(570.8,452.4,1,1,0,0,0,52.2,52.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1DZQgYgIgSgPQgTgOgNgTQgOgUgIgXQgJgXgFgZQgEgaAAgaQAAggAFgeQAFgfAKgbQAKgaAQgXQAPgWAWgQQAWgRAcgIQAcgKAiAAIAaACIAbADIAaAHIAYALIgJB2QgVgKgYgGQgZgFgXgBQgTABgMAFQgNAGgKAJQgJALgFAOQgFAOgCARQAUgLAWgGQAWgIAXABQAaAAAXAIQAXAIASAPQARAPAKAVQAKAWAAAbQAAAlgNAdQgNAegWAVQgXAVgfALQgfAMgjAAQgdAAgYgIgAgHAkIgOAIIgKAMQgFAIAAAJQAAAJAFAIIAKALIAOAIIAQADIAQgDIAPgIIALgLQADgIAAgJQAAgJgDgIIgLgMIgPgIIgQgDg");
	this.shape.setTransform(982.3,1435.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0DiIgjgJIgigNIgfgRIALh4IAZAPIAdANIAfAJIAdADIASgBIAPgFQAHgEAEgHQAFgGAAgLQAAgGgGgGIgPgJIgQgHIgOgCIgKABIgMABIgMADIgIADIABhUIAKABIAJAAIAYgBIAWgHQAKgFAGgJQAIgJgBgNQABgKgGgGQgGgGgHgEIgRgEIgQgBQgYAAgYAIQgXAIgSARIgZhtQAcgWAjgMQAigMAkAAQAfAAAeAKQAeAJAWASQAXATANAaQAOAbAAAjIgDAVIgIAUIgMATIgOAOQAMAGAIAIQAIAKAEAMIAIAYIABAaQAAAngMAdQgNAdgXAUQgWATggAJQggAKgkAAg");
	this.shape_1.setTransform(948.3,1434.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiRDSIAAhtIAhgMIAjgSIAggWQAOgMAMgOQALgPAHgQQAGgRAAgUQAAgLgEgIQgDgKgHgFQgIgGgJgDIgUgCIgSABIgSAGIgRAJIgOALIgbh1QALgLAPgHIAegLIAggIIAggBQAiAAAfAMQAeANAXAWQAWAWANAfQANAeAAAjQAAAYgJAVQgIAVgOATQgPATgRAQIglAdIBeAAIgHB8g");
	this.shape_2.setTransform(916.8,1434.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FED872").s().p("AgWCYIgLgEQgFgCgFgGQgGgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAFgJQAEgJAGgFQAFgFAGgCIAKgDIAJAAIAMABIAJAFIAIAGIAFAHIgBgdIAAg9IAqAAIAAEtIghAAIgDgVIgHAIIgJAIIgLAFQgFACgIAAgAgHgwQgFACgCAEQgDAFgBAIIgCAVIAABWIACAVQABAIADAFQACAEAFACIAHACIAIgBIAFgEIAFgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_3.setTransform(990.7,1376);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FED872").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_4.setTransform(975.1,1379.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FED872").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_5.setTransform(959,1379.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FED872").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_6.setTransform(944.8,1379.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FED872").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgHQAKgGANgHIANgGIAOgGIAAgdIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAEQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAIIgHAJIgGAMQgCAHAAAIQAAAOAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_7.setTransform(929.2,1379.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FED872").s().p("Ag1COIAAkbIBpAAIAAAiIg9AAIAABVIAuAAIAAAhIguAAIAABhIA/AAIAAAig");
	this.shape_8.setTransform(916.2,1376.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FED872").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_9.setTransform(893.6,1383.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FED872").s().p("AgVCWQgKgCgHgEQgIgGgEgJQgFgIAAgNIABgHIABgHIAfAAQgBAPAGAGQAFAGALAAIAIgBQAFgBADgFQADgDADgHQACgHAAgKIAAgkQgGAHgJAGQgIAFgNAAIgJgBIgKgEQgGgCgGgFQgFgGgEgJQgEgJgCgOQgDgOAAgSIAAg8QAAgSADgOQACgNAEgIQAEgJAFgFQAGgFAGgDIALgDIAJAAQAIAAAFABQAHACAFAFIAIAIIAFAJIAEgYIAhAAIAADbQAAATgDAPQgEAQgIALQgIALgMAFQgMAGgQABQgLAAgKgDgAgIh4QgEACgCAFQgDAEgCAJIgBAVIAABKIABAUQACAJADAEQACAFAEACIAIACIAHgCIAHgEIAEgFIADgHIAAh8QgDgGgFgFQgGgFgHAAg");
	this.shape_10.setTransform(877.8,1383.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FED872").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_11.setTransform(864.1,1379.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FED872").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_12.setTransform(849.2,1379.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FED872").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_13.setTransform(833,1379.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FED872").s().p("Ag0COIAAkbIBoAAIAAAiIg+AAIAABVIAwAAIAAAhIgwAAIAABhIA/AAIAAAig");
	this.shape_14.setTransform(818.6,1376.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAABSIieAEIAskEIBwAAIggC1IAmgBIALjhICCAAIgJDcIAXgBIAABPIgaAAIgFCBIiGAMg");
	this.shape_15.setTransform(982.6,1257.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeDRIAHkZIgwAhIgshmIBhhJICGAGIgRGng");
	this.shape_16.setTransform(953.7,1258.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag0DiIgjgJIgigNIgfgRIALh4IAZAPIAdANIAfAJIAdADIASgBIAPgFQAHgEAEgHQAFgGAAgLQAAgGgGgGIgPgJIgQgHIgOgCIgKABIgMABIgMADIgIADIABhUIAKABIAJAAIAXgBIAXgHQAKgFAGgJQAIgJgBgNQAAgKgFgGQgGgGgHgEIgRgEIgQgBQgYAAgYAIQgXAIgSARIgZhtQAcgWAjgMQAigMAkAAQAfAAAeAKQAeAJAWASQAXATANAaQAOAbAAAjIgDAVIgIAUIgMATIgOAOQAMAGAIAIQAIAKAEAMIAHAYIACAaQAAAngMAdQgNAdgXAUQgWATggAJQggAKgkAAg");
	this.shape_17.setTransform(926.7,1257.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FED872").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAFgFAGgCIALgDIAIAAIAMABIAIAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAHgBIAHgEIAEgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_18.setTransform(990.6,1199.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FED872").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgSAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_19.setTransform(975.1,1202.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FED872").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_20.setTransform(958.9,1202.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FED872").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_21.setTransform(944.8,1202.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FED872").s().p("AgzBmQgLgOAAgdIAAitIAqAAIAACqQAAAQAFAFQAEAGAJAAQAGAAAGgEQAGgDAFgHIAAi3IAqAAIAADjIghAAIgEgZQgFAIgFAGQgGAFgGADIgLAEIgNABQgUAAgLgNg");
	this.shape_22.setTransform(928.9,1202.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FED872").s().p("AhDCOIAAkbIArAAIAUABIATADQAKACAJAEQAJAEAHAHQAGAIAEAKQAEALAAAOIAAAOQAAAMgDAJQgEAJgFAIQgFAHgHAFQgHAEgHACIAAABQAVAEALAPQAKARAAAZIAAAOQAAAQgDALQgDALgGAJQgHAHgIAGQgJAFgKADQgKADgLABIgXABgAgZBwIAMAAQAJAAAGgCQAHgDAFgEQAFgFADgHQADgIAAgKIAAgWQAAgKgCgHQgCgIgFgFQgEgGgIgCQgGgDgLAAIgMAAgAgZgTIAIAAQAJAAAHgCQAGgDAGgEQAEgEADgHQADgIAAgJIAAgMQAAgKgCgIQgCgHgEgGQgFgFgHgDQgHgCgLAAIgIAAg");
	this.shape_23.setTransform(912.3,1200);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FED872").s().p("AgWBzQgKgDgIgGQgHgGgEgJQgFgKAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgIIgGgHIgdglIgMgOIgKgPIgGgRQgDgKAAgJQAAgOAFgKQAEgKAIgGQAHgHALgDQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAHIgBAGQAAAJADAGIAKAQIAhAlIAIALIAKAPIAHARQADAIAAALQAAAMgEAJQgEALgHAGQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_24.setTransform(889,1202.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FED872").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgSAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_25.setTransform(874.5,1202.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FED872").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_26.setTransform(862.6,1198.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FED872").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_27.setTransform(852.5,1202.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FED872").s().p("AgNB0QgIgCgHgDQgHgEgGgHQgHgHgEgLQgFgKgCgRQgDgQAAgWIAAgjQAAgWADgRQACgPAFgLQAFgLAGgGQAGgHAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAXIAAAjQAAAVgCARQgDAQgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAbQABALADAGQADAHAEADQAEADAFgBQAFABAEgDQAEgDADgHQACgGABgLIABgbIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_28.setTransform(837.3,1202.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FED872").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_29.setTransform(825.1,1199.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FED872").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgHQAKgGANgHIANgGIAOgGIAAgdIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAIIgHAJIgGAMQgCAHAAAIQAAAOAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_30.setTransform(812.5,1202.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FED872").s().p("AgJCPQgIgBgIgDQgHgEgHgGQgIgHgFgKQgFgLgDgPQgEgPAAgWIAAhjQAAgVAEgQQADgPAFgKQAGgLAHgGQAHgGAIgDQAHgDAIgBIANgBQARAAALAFQAMAEAHAIQAGAJADALQADALAAAMIgBARIgCARIgjAAIAAgPQAAgXgFgMQgGgLgKAAQgFAAgEACQgFACgDAGQgDAFgBAJIgCAXIAACBIACAWQABAJADAFQACAFAFADQAFACAFAAIAIgCQAEgCADgEIAFgKQABgHAAgIIAAgcIAoAAIAAAaQAAAjgQAQQgQAQgdAAg");
	this.shape_31.setTransform(798.1,1200);

	this.instance = new lib.Path_7();
	this.instance.parent = this;
	this.instance.setTransform(739,1424,1,1,0,0,0,63.5,86.3);
	this.instance.shadow = new cjs.Shadow("rgba(129,207,226,0.749)",0,0,30);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#6BC3B0","#66BEB4","#56B5C0","#37A7D2","#1FA0DD"],[0,0.184,0.478,0.839,1],0,-36.1,0,36.2).s().p("Ah5FAQgygrgfhQQgahCAfiJIAjh9IgDA3QACBAAVA0QAVA1AYAXQAMALAHABQgOgmgGgxQgMhiAog7QAog7gFhjIgOhXIAyAcQA2AqANBBQAJAsgJAjQgMArABASQAAAeARAWQAIALAJAGQALgIALgNQAXgbAEgdQADgWgDgqIgDglIAjA1QAjA8AFAnQAJA8gUBpQgUBuggAqQglAvgdARQgjAVg7ADIgHAAQg3AAgwgqg");
	this.shape_32.setTransform(740.8,1250.9);

	this.instance_1 = new lib.Image_2_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(740.9,1250.9,1,1,0,0,0,51.7,66.3);
	this.instance_1.alpha = 0.75;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#60C4D2").s().p("AijG6QhEg8gqhuQgihbAoi+QANg7ATg+IAQgzIgEBLQACBaAdBHQAdBJAfAfQAQAQAKABQgSg0gIhEQgQiHA1hRQA2hSgHiIQgDgrgIgrIgHgiIAVAJQAZAMAWASQBIA5ARBaQAMA9gMAwQgPA8AAAZQAAAoAXAfQALAPAMAIQAOgLAQgSQAfgmAFgnQAEgfgDg5IgEgzIAuBJQAwBTAHA1QALBTgaCRQgcCYgrA6QgxBBgnAYQgvAdhRADIgIAAQhKAAhBg5g");
	this.shape_33.setTransform(739,1227.5);

	this.instance_2 = new lib.Image_0_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(739.2,1227.4,1,1,0,0,0,59.1,80);
	this.instance_2.alpha = 0.75;

	this.instance_3 = new lib.Path_1_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(854.5,913,1,1,0,0,0,220.5,220.4);
	this.instance_3.alpha = 0.629;
	this.instance_3.shadow = new cjs.Shadow("rgba(159,214,200,0.749)",0,0,30);

	this.instance_4 = new lib.Path_2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(599,913,1,1,0,0,0,63.4,86);
	this.instance_4.alpha = 0.629;
	this.instance_4.shadow = new cjs.Shadow("rgba(159,214,200,0.749)",0,0,30);

	this.instance_5 = new lib.Path_3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(886.8,895.4,1,1,0,0,0,222.7,172.7);
	this.instance_5.alpha = 0.629;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FED872").s().p("AgNCPQgIgBgHgDQgJgEgGgFQgIgGgGgKQgFgJgDgOQgDgNgBgTIAAh3QABgSADgOQADgNAGgKQAFgJAIgGQAHgFAIgDQAIgDAHgBIAOgBIANABIAPAEQAIACAIAGQAGAFAGAKQAFAJAEAOQAEANAAATIAAB3QAAATgEANQgEAOgFAJQgGAKgHAGQgHAFgIAEIgPAEIgNABgAgShmQgGAIAAATIAACYQAAASAGAIQAGAIANAAQAMAAAHgIQAFgIABgSIAAiYQgBgTgFgIQgHgJgMAAQgNAAgGAJg");
	this.shape_34.setTransform(921,984.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FED872").s().p("AgNCPQgIgBgHgDQgIgEgIgFQgHgGgFgKQgGgJgDgOQgEgNAAgTIAAh3QAAgSAEgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAHgDAIgBIANgBIAOABIAPAEQAIACAHAGQAHAFAGAKQAFAJAEAOQADANABATIAAB3QgBATgDANQgEAOgFAJQgGAKgHAGQgIAFgHAEIgPAEIgOABgAgShmQgGAIgBATIAACYQABASAGAIQAGAIAMAAQANAAAGgIQAHgIAAgSIAAiYQAAgTgHgIQgGgJgNAAQgMAAgGAJg");
	this.shape_35.setTransform(903.7,984.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FED872").s().p("AgNCPQgIgBgIgDQgIgEgHgFQgHgGgFgKQgGgJgDgOQgDgNAAgTIAAh3QAAgSADgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAIgDAHgBIANgBIAOABIAQAEQAHACAHAGQAIAFAFAKQAFAJAEAOQADANABATIAAB3QgBATgDANQgEAOgFAJQgGAKgHAGQgHAFgIAEIgPAEIgOABgAgShmQgHAIAAATIAACYQAAASAHAIQAGAIAMAAQANAAAGgIQAHgIgBgSIAAiYQABgTgHgIQgGgJgNAAQgMAAgGAJg");
	this.shape_36.setTransform(886.3,984.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FED872").s().p("AgNCPQgIgBgIgDQgHgEgHgFQgIgGgGgKQgFgJgDgOQgEgNABgTIAAh3QgBgSAEgOQADgNAGgKQAFgJAIgGQAHgFAIgDQAHgDAIgBIAOgBIANABIAQAEQAHACAHAGQAIAFAFAKQAGAJADAOQAEANgBATIAAB3QABATgEANQgDAOgGAJQgGAKgHAGQgIAFgHAEIgPAEIgNABgAgShmQgHAIABATIAACYQgBASAHAIQAGAIANAAQAMAAAHgIQAFgIAAgSIAAiYQAAgTgFgIQgHgJgMAAQgNAAgGAJg");
	this.shape_37.setTransform(869,984.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FED872").s().p("AgrCOIAAghIAhAAIAAjAIgjAfIgSgWIA/hDIAgAAIgBABIABgBIAAD6IAhAAIAAAhg");
	this.shape_38.setTransform(853.4,984.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FED872").s().p("AgSBpQgHgIAAgQQAAgSAHgHQAHgIALAAQAMAAAIAIQAGAIAAARQAAAPgGAJQgIAIgMAAQgLAAgHgIgAgSg3QgHgJAAgPQAAgSAHgIQAHgHALAAQAMAAAIAIQAGAIAAARQAAAPgGAIQgIAJgMAAQgLAAgHgIg");
	this.shape_39.setTransform(835.1,987.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FED872").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_40.setTransform(826.7,983.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FED872").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGAMQgCAHAAAIQAAAOAFAHQAFAIAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_41.setTransform(814.1,987.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FED872").s().p("AgNB0QgIgCgHgDQgHgEgGgHQgHgGgEgMQgFgLgCgQQgDgQAAgWIAAgjQAAgXADgPQACgRAFgKQAFgLAGgGQAGgHAIgDQAHgDAHgCIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAXIAAAjQAAAVgCARQgDAQgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAbQABALADAGQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgGABgLIABgbIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_42.setTransform(799.2,987.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FED872").s().p("AgRCPQgHgBgHgDQgHgEgHgGQgHgHgFgKQgGgLgDgPQgDgPAAgWIAAhjQAAgVADgQQAEgPAGgKQAFgLAIgGQAIgGAIgDQAIgDAIgBIAOgBQARAAAMAFQAMAEAHAIQAHAJAEALQADALAAAMIgBARIgDARIgjAAIAAgOQAAgugZAAQgFAAgFACQgFACgEAGQgDAFgCAJIgBAXIAACAIABAWQACAJADAFQADAFAFADQAFACAGAAQAHAAAFgEQAFgEAEgGQADgHACgJIABgTIAAglIgWAAIAAgbIBAAAIAACPIgcAAIgFgbQgIAQgLAHQgKAGgOAAg");
	this.shape_43.setTransform(782.8,984.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FED872").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFACQAFACAFABQAKgBAEgEQAFgGAAgHIgBgHIgDgHIgFgHIgGgHIgdglIgMgNIgKgRIgGgRQgDgJAAgKQAAgNAFgKQAEgJAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAGIgBAIQAAAHADAHIAKAPIAhAmIAIAMIAKANIAHARQADAJAAAKQAAAMgEALQgEAJgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgCg");
	this.shape_44.setTransform(880.6,827.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FED872").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAGQAFAEAEAJQAEAKADAOQACANAAATIAABGQAAASgCAOQgDAOgEAIQgEAKgFAFQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHACIAIgCQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_45.setTransform(865.8,830.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FED872").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_46.setTransform(849.7,827.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FED872").s().p("AgCCPQgIgCgGgHQgGgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_47.setTransform(836.6,824.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FED872").s().p("AggCLQgNgFgHgIQgIgJgDgLQgDgKAAgMIABgQIADgRIAiAAIAAAOIABAUQACAJADAGQADAGAFADQAGADAIAAQALAAAGgHQAHgHAAgNIgBgMIgDgLIgGgLIgKgOIgsg0QgMgPgGgQQgHgPAAgSQAAgOAFgMQAEgMAIgIQAJgJAMgEQAMgFAPAAQASAAANAFQAMAFAIAJQAHAJADAKQADALAAALIgBARIgDARIgiAAIAAgOQAAgWgGgMQgGgMgOAAQgMAAgGAGQgGAHAAALIABALIADAJIAEAIIAFAIIAxA7QAOASAHAQQAIARAAASQAAAPgFAMQgFAMgJAJQgJAIgMAFQgMAEgPAAQgTAAgNgFg");
	this.shape_48.setTransform(823,824.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhcFoIg3gMIg2gQIg2gVIASjEIAmASIAqAPIAsAJIAqAEIAegCIAigJQAPgGAMgLQAMgKAAgSQAAgQgJgMQgKgMgNgHIghgMIglgHIgjgDIgbAAIgtACIgtAIIAUmOIGOgLIALDOIj2gNIgFBXIAsgIIArgDQAtAAAnAPQAnAOAdAbQAcAbARAmQAQAmAAAvQAABAgWAwQgXAvgoAfQgnAfg2APQg1AQg7AAg");
	this.shape_49.setTransform(938,906);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhYFnQgogOgegXQgfgYgXggQgWghgOgmQgPgmgHgqQgHgrABgrQAAg0AHgzQAIgzARgrQAQgtAaglQAagmAlgbQAjgbAvgOQAugQA6AAIArACIAtAGIArAMIAoATIgQDCQgigRgpgJQgpgJgmAAQgfAAgVAJQgWAJgPARQgQARgIAXQgJAYgDAcQAhgTAlgKQAkgLAmAAQAsAAAmANQAnAOAdAYQAbAaASAiQAPAkAAAuQABA8gWAxQgVAxglAkQglAigzATQg0AUg7AAQgwAAgngOgAgMA7IgXAOIgSAVQgGAMAAAPQAAAOAGANIASAUIAXAOIAaAEIAcgEIAZgOIARgUQAGgMAAgPQAAgPgGgMIgRgVIgZgOIgcgEg");
	this.shape_50.setTransform(882.6,906.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhjFeQgxgNgngcQgngbgXgpQgYgpAAg3IAFguIAQgsQAKgUAQgRQAQgRAVgKQghgdgQgmQgQgmAAgsQAAgyAWgmQAWgmAlgaQAkgbAugMQAtgNAtAAIA7AFIA7ARQAcAMAZARQAYASASAXQASAXAKAcQALAcAAAhQgBAsgQAmQgQAmggAdQAvAYAUAnQAVAmAAA1QAAAogLAfQgKAggTAYQgTAYgaASQgbARgeALQgfALgiAGIhEAEQgyAAgwgNgAgeA4IgaAOQgMAIgIAOQgHANAAAQQAAAQAHANQAIAMAMAJIAaAOIAdAFIAcgFIAbgOIASgVQAHgNAAgQQAAgQgHgNIgSgWIgbgOIgcgFgAgfiwIgbAPQgLAJgIANQgHANAAAQQAAAQAHAOQAIANALAIIAbAOIAeAFIAcgFIAbgOQALgIAIgNQAHgOAAgQQAAgQgHgNQgIgNgLgJIgbgPIgcgFg");
	this.shape_51.setTransform(824.4,905.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AjLFVIDinpIkKAPIAAjVIHogJIAACzIhaD9IgjBfIgeBWIgYBBIgMAhg");
	this.shape_52.setTransform(769.8,905.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgxB5IAAgVQAIABAGgBQAHgCAFgEQAEgFADgHQADgHABgKIgti9IAjAAIAUBpIAEAjIACAAIAEgjIAQhpIAiAAIgoDDQgDANgEAKQgDAKgHAHQgFAHgHADQgJAEgLAAQgJAAgJgEg");
	this.shape_53.setTransform(1037.4,614.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgdBdQgGgEgFgGQgFgGgCgIQgDgIABgKQAAgMACgJQADgJAFgHQAGgHAJgGQAHgFAMgFIAKgGIALgEIAAgZIAAgKIgBgIQgCgEgEgCQgDgCgFAAIgGABQgEACgDADQgCADgBAGQgCAFAAAIIAAAJIgbAAIgCgKIAAgJQAAgLAEgIQADgIAHgFQAGgGAJgCQAJgDAKAAQAOAAAJADQAJADAHAGQAFAGACAKQACAJAAAMIAACMIgaAAIgCgQQgGAIgJAFQgIAFgMAAQgJAAgHgDgAALAGIgIADIgGAGIgHAIIgEAKQgBAGAAAHQAAALADAGQAFAHAIAAQAEAAAEgDIAHgFIAAg7g");
	this.shape_54.setTransform(1024.6,611.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgSB9IgJgDQgEgCgEgFQgFgEgDgHQgEgIgCgLQgCgMAAgQIAAg6QAAgQACgLQADgLADgHQAEgHAFgEQAEgEAFgCIAJgDIAGAAIAKABIAHAEIAGAFIAGAGIgBgYIAAgyIAiAAIAAD3IgbAAIgDgRIgFAHIgHAGIgKAFQgEABgHAAgAgGgoQgDACgDAEQgCADgBAHIgBARIAABHIABASQABAGACAEQADAEADABIAGACIAGgBIAFgDIAEgFIADgFIAAhwQgDgGgEgEQgFgEgGAAg");
	this.shape_55.setTransform(1011.8,608.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgLBfQgGgBgGgDQgGgDgFgFQgFgGgEgJQgEgJgCgOQgCgNAAgTIAAgcQAAgSACgNQACgOAEgIQAEgJAFgFQAFgGAHgDQAFgCAGgBIALgBIAMABQAGAAAGADQAFADAFAFQAFAFAEAJQAEAJADANQACANAAATIAAAcQAAATgCANQgDANgEAJQgEAKgFAFQgFAGgFADQgHADgFABIgMABgAgHhDQgDACgCAGQgCAFgCAJIgBAWIAAAuIABAWQACAJACAFQACAGADACQAEADADAAQAFAAADgDQADgCADgGQABgFABgJIABgWIAAguIgBgWQgBgJgBgFQgDgGgDgCQgDgDgFAAQgDAAgEADg");
	this.shape_56.setTransform(998.8,611.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgBB2QgHgCgFgFQgFgGgDgKQgEgJAAgQIAAhzIgOAAIAAgZIARAAIAHgxIAYAAIAAAxIAeAAIAAAZIgeAAIAAB3IABAKIADAGIAFACIAGABIAJgBIAHgEIAAAUIgGAFIgHAEIgIACIgHABQgIgBgFgBg");
	this.shape_57.setTransform(987.8,609.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgSBeQgIgCgHgFQgGgFgDgIQgEgIAAgLIABgMIADgJIAYAAIABARQABAHACAEQADAEAEACQADACAFAAQAIAAADgFQAEgEAAgGIgBgGIgCgFIgEgGIgFgGIgYgeIgKgLIgIgNIgFgPQgCgHAAgIQAAgLADgIQAEgIAGgGQAHgFAIgDQAIgCAJAAQAKAAAIACQAIADAGAFQAGAFADAHQADAHAAAKIgBANIgCAKIgYAAIgBgQQAAgHgCgFQgCgEgDgDQgDgCgGAAQgDAAgDACIgFADIgDAFIAAAGQAAAHADAGIAIAMIAbAfIAHAJIAHAMIAGAOQADAHAAAIQAAAKgDAIQgEAJgGAFQgGAGgJADQgJADgKAAQgKAAgIgCg");
	this.shape_58.setTransform(971.6,611.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgzB+IAAj5IAbAAIADAUIAFgHIAIgHIAJgGQAFgCAHAAIAHABIAIADQAEACAFAEQAEAFAEAHIAFATQACALAAAQIAAA5QAAAPgCALIgFATQgEAHgEAFQgFAEgFACIgIADIgIABQgLAAgGgEQgHgFgEgGIAAAXIAAAzgAgKhfQgEADgDAGIAABwIADAGIAEAEIAEADIAGABIAHgBQADgCACgDQACgEACgHIABgRIAAhHIgBgRQgCgHgCgEQgCgEgDgBIgHgBQgFAAgFAEg");
	this.shape_59.setTransform(959.4,614.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgVBcQgJgFgHgJQgGgKgEgPQgDgPAAgVIAAgiQAAgSADgNQACgNAFgIQAEgJAGgFQAFgFAGgDQAGgDAGAAIAKgBQAKAAAIADQAJACAGAHQAHAHAEALQAEAMAAARIAAALIgBAMIgCALIgCAJIg9AAIAAATIABAVQABAIACAFQACAFAEACQAEADAFAAIAGgCQADgBACgDIAEgIIABgMIAAgGIAdAAIAAAHQAAAbgNAMQgMAMgYAAQgMAAgJgEgAgFhEQgEACgCAFIgDAOIgBAUIAAALIAiAAIAAgEIAAgFIAAgFIAAgFQAAgSgEgJQgFgIgIAAQgEAAgDACg");
	this.shape_60.setTransform(946.1,611.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgBB2QgHgCgFgFQgFgGgDgKQgEgJAAgQIAAhzIgOAAIAAgZIARAAIAHgxIAYAAIAAAxIAeAAIAAAZIgeAAIAAB3IABAKIADAGIAFACIAGABIAJgBIAHgEIAAAUIgGAFIgHAEIgIACIgHABQgIgBgFgBg");
	this.shape_61.setTransform(935.3,609.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgSBeQgIgCgHgFQgGgFgDgIQgEgIAAgLIABgMIADgJIAYAAIABARQABAHACAEQADAEAEACQADACAFAAQAIAAADgFQAEgEAAgGIgBgGIgCgFIgEgGIgFgGIgYgeIgKgLIgIgNIgFgPQgCgHAAgIQAAgLADgIQAEgIAGgGQAHgFAIgDQAIgCAJAAQAKAAAIACQAIADAGAFQAGAFADAHQADAHAAAKIgBANIgCAKIgYAAIgBgQQAAgHgCgFQgCgEgDgDQgDgCgGAAQgDAAgDACIgFADIgDAFIAAAGQAAAHADAGIAIAMIAbAfIAHAJIAHAMIAGAOQADAHAAAIQAAAKgDAIQgEAJgGAFQgGAGgJADQgJADgKAAQgKAAgIgCg");
	this.shape_62.setTransform(925,611.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgXByQgKgDgHgHQgGgGgEgJQgDgKAAgLQAAgNADgOIAcAAIAAATQAAARAFAHQAFAHAKAAQALAAAEgIQAFgIAAgPIAAgtQAAgJgCgFQgBgFgDgDQgCgDgEgBIgGgBQgIAAgFAEQgGAEgEAFIgaAAIAAh2IBkAAIAAAgIhGAAIAAA5QAGgGAIgEQAIgEAJAAQAXAAAKAPQAJAPABAbIAAAoQAAASgFAMQgFAMgHAHQgIAIgKADQgKADgKAAQgNAAgKgEg");
	this.shape_63.setTransform(906.4,609.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgWBzQgMgEgHgIQgIgJgEgNQgDgOAAgUIAAhfQAAgQADgLQACgMAFgHQAFgIAGgFQAHgFAGgCQAHgCAHgBIALgBQAOAAAKAEQAKADAGAHQAGAGADAIQADAIAAAJIgBAKIgDAMIgbAAIAAgHIgBgSQgBgHgDgDQgDgEgEgCQgEgBgFAAQgLAAgGAIQgHAIAAARIAAAtQAGgFAIgEQAHgEALAAQAIAAAJACQAIADAGAGQAHAHAEAKQAEALAAASIAAAWQAAATgEANQgEANgHAIQgHAIgKADQgKAEgNAAQgOAAgKgEgAgFgBIgGACIgGAEIgEAFIAAAzQAAAQAGAHQAFAIALAAQALAAAFgHQAFgIAAgPIAAgjQAAgIgCgGQgBgGgDgDQgDgEgDAAQgEgCgFAAg");
	this.shape_64.setTransform(892.1,609.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgNB2IgOgEQgHgCgFgEQgHgFgDgGQgFgHgCgJQgDgJABgMIAAgOQAAgKABgIQADgIAEgGQAEgGAFgFIALgGIAAgBIgJgGQgEgEgEgFQgEgGgCgHQgCgHgBgKIAAgQQAAgMADgIQADgIAEgGQAFgGAGgEIAMgFIAMgDIALgBIAMABIAMADIAMAFQAFAEAFAGQAEAGADAIQADAIAAAMIAAAQQAAAJgCAIQgDAHgDAFIgIAKIgJAGIAAABIALAGQAGAFADAGQAEAGADAHQABAIAAALIAAAOQAAAMgCAJQgDAJgEAHQgEAGgGAEQgGAFgGACIgOAEIgOABgAgRAQQgGAGABAPIAAAaQAAAJACAGQABAFAEAEQADADAEABIAIABIAIgBQAFgBADgEQAEgDACgFQABgGABgJIAAgaQgBgHgBgGQgBgFgEgEQgCgDgEgCQgFgBgEAAIgDAAQgKAAgGAHgAgPhUQgEAHgBAPIAAATIABANQACAFADADQACAEADABIAIABIADAAIAHgBQADgBADgDQADgEABgFQACgFAAgIIAAgUQAAgOgFgIQgFgHgLAAQgKAAgFAIg");
	this.shape_65.setTransform(877.9,609.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgwB1IA/jKIhDAAIAAgfIBpAAIAAATIg/DWg");
	this.shape_66.setTransform(865,609.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FED872").s().p("AgSB9IgJgDQgFgCgEgFQgEgEgEgHQgDgIgCgLQgCgMAAgQIAAg6QAAgQACgLQACgLAEgHQAEgHAEgEQAFgEAEgCIAJgDIAHAAIAKABIAHAEIAHAFIAEAGIgBgYIAAgyIAjAAIAAD3IgbAAIgDgRIgGAHIgHAGIgJAFQgEABgHAAgAgGgoQgDACgCAEQgDADgBAHIgCARIAABHIACASQABAGADAEQACAEADABIAGACIAGgBIAFgDIAEgFIACgFIAAhwQgCgGgFgEQgEgEgGAAg");
	this.shape_67.setTransform(846.3,608.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FED872").s().p("AgVBcQgJgFgHgJQgGgKgEgPQgDgPAAgVIAAgiQAAgSADgNQACgNAFgIQAEgJAGgFQAFgFAGgDQAGgDAGAAIAKgBQAKAAAIADQAJACAGAHQAHAHAEALQAEAMAAARIAAALIgBAMIgCALIgCAJIg9AAIAAATIABAVQABAIACAFQACAFAEACQAEADAFAAIAGgCQADgBACgDIAEgIIABgMIAAgGIAdAAIAAAHQAAAbgNAMQgMAMgYAAQgMAAgJgEgAgFhEQgEACgCAFIgDAOIgBAUIAAALIAiAAIAAgEIAAgFIAAgFIAAgFQAAgSgEgJQgFgIgIAAQgEAAgDACg");
	this.shape_68.setTransform(833.5,611.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FED872").s().p("AgOBeIgri7IAjAAIATBjIADAoIABAAIAFgoIAShjIAiAAIgsC7g");
	this.shape_69.setTransform(821.2,611.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FED872").s().p("AgVBcQgJgFgHgJQgGgKgEgPQgDgPAAgVIAAgiQAAgSADgNQACgNAFgIQAEgJAGgFQAFgFAGgDQAGgDAGAAIAKgBQAKAAAIADQAJACAGAHQAHAHAEALQAEAMAAARIAAALIgBAMIgCALIgCAJIg9AAIAAATIABAVQABAIACAFQACAFAEACQAEADAFAAIAGgCQADgBACgDIAEgIIABgMIAAgGIAdAAIAAAHQAAAbgNAMQgMAMgYAAQgMAAgJgEgAgFhEQgEACgCAFIgDAOIgBAUIAAALIAiAAIAAgEIAAgFIAAgFIAAgFQAAgSgEgJQgFgIgIAAQgEAAgDACg");
	this.shape_70.setTransform(809,611.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FED872").s().p("AgRCCIAAi8IAiAAIAAC8gAgPhaQgFgGAAgLQAAgGACgEQABgEACgDQADgDAEgBIAIgBQAKAAAGAFQAFAGAAALQAAALgFAGQgGAGgKAAQgJAAgGgGg");
	this.shape_71.setTransform(799.2,608.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FED872").s().p("AARB8IAAiOQAAgMgDgFQgEgFgIAAQgEAAgFAEQgFADgEAGIAACXIgjAAIAAj3IAjAAIAAAsIgCAgQAEgFAEgEIAJgFIAJgDIAJgBQARAAAJALQAJAMAAAXIAACPg");
	this.shape_72.setTransform(788.5,608.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FED872").s().p("AgiBNQgNgUAAgoIAAgiQAAgSADgNQACgNAFgIQADgJAHgFQAFgFAFgDQAGgDAGAAIAKgBQAKAAAHACQAIADAGAFQAGAFADAIQADAIAAAKIgBAMIgCAJIgbAAIAAgHQAAgOgDgIQgEgIgIAAQgDAAgCACQgEACgCAFQgCAFgBAIIgBAUIAAA0IABAVQABAJACAFQACAGADACQADADAEAAIAGgCQACgBACgDIADgIIABgMIAAgGIAeAAIAAAHQAAAbgMAMQgMAMgYAAQgWAAgMgTg");
	this.shape_73.setTransform(775.8,611.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FED872").s().p("AgdBdQgGgEgFgGQgFgGgCgIQgCgIgBgKQABgMACgJQADgJAFgHQAGgHAJgGQAHgFAMgFIAKgGIALgEIAAgZIAAgKIgCgIQgCgEgCgCQgEgCgFAAIgGABQgEACgDADQgCADgBAGQgCAFAAAIIAAAJIgaAAIgDgKIAAgJQAAgLAEgIQADgIAHgFQAGgGAJgCQAJgDAKAAQAOAAAJADQAKADAFAGQAGAGACAKQADAJgBAMIAACMIgaAAIgCgQQgFAIgKAFQgIAFgMAAQgJAAgHgDgAALAGIgIADIgGAGIgHAIIgEAKQgCAGABAHQAAALADAGQAFAHAIAAQAEAAAFgDIAGgFIAAg7g");
	this.shape_74.setTransform(762.9,611.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FED872").s().p("AgVBcQgJgFgHgJQgGgKgEgPQgDgPAAgVIAAgiQAAgSADgNQACgNAFgIQAEgJAGgFQAFgFAGgDQAGgDAGAAIAKgBQAKAAAIADQAJACAGAHQAHAHAEALQAEAMAAARIAAALIgBAMIgCALIgCAJIg9AAIAAATIABAVQABAIACAFQACAFAEACQAEADAFAAIAGgCQADgBACgDIAEgIIABgMIAAgGIAdAAIAAAHQAAAbgNAMQgMAMgYAAQgMAAgJgEgAgFhEQgEACgCAFIgDAOIgBAUIAAALIAiAAIAAgEIAAgFIAAgFIAAgFQAAgSgEgJQgFgIgIAAQgEAAgDACg");
	this.shape_75.setTransform(744.9,611.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FED872").s().p("AgOBeIgqi7IAiAAIASBjIAEAoIABAAIAFgoIAShjIAhAAIgqC7g");
	this.shape_76.setTransform(732.6,611.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FED872").s().p("AgdBdQgHgEgEgGQgFgGgCgIQgCgIAAgKQAAgMACgJQADgJAGgHQAFgHAIgGQAJgFALgFIAKgGIALgEIAAgZIAAgKIgBgIQgCgEgEgCQgDgCgFAAIgGABQgDACgDADQgDADgCAGQgBAFAAAIIAAAJIgbAAIgCgKIAAgJQAAgLADgIQAEgIAHgFQAGgGAJgCQAJgDAKAAQAOAAAJADQAJADAHAGQAFAGACAKQACAJABAMIAACMIgaAAIgDgQQgGAIgJAFQgIAFgMAAQgJAAgHgDgAAKAGIgHADIgGAGIgHAIIgEAKQgCAGAAAHQABALAEAGQAEAHAIAAQAEAAAEgDIAHgFIAAg7g");
	this.shape_77.setTransform(719.8,611.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FED872").s().p("AARB8IAAiOQAAgMgDgFQgEgFgIAAQgEAAgFAEQgFADgEAGIAACXIgjAAIAAj3IAjAAIAAAsIgCAgQAEgFAEgEIAJgFIAJgDIAJgBQARAAAJALQAJAMAAAXIAACPg");
	this.shape_78.setTransform(707,608.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FED872").s().p("AgqBUQgJgMAAgXIAAiPIAjAAIAACMQAAANAEAFQAEAFAHAAQAEAAAFgDQAFgDAEgFIAAiYIAjAAIAAC7IgbAAIgDgUQgFAHgEAEQgFAEgFADIgJADIgKABQgRAAgJgLg");
	this.shape_79.setTransform(687.1,611.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FED872").s().p("AgLBfQgGgBgGgDQgGgDgFgFQgFgGgEgJQgEgJgCgOQgCgNAAgTIAAgcQAAgSACgNQACgOAEgIQAEgJAFgFQAGgGAFgDQAGgCAHgBIAKgBIAMABQAGAAAGADQAFADAGAFQAFAFAEAJQADAJADANQACANAAATIAAAcQAAATgCANQgDANgDAJQgEAKgFAFQgGAGgFADQgHADgGABIgLABgAgHhDQgDACgCAGQgDAFgBAJIgBAWIAAAuIABAWQABAJADAFQACAGADACQADADAEAAQAFAAADgDQADgCADgGQACgFABgJIABgWIAAguIgBgWQgBgJgCgFQgDgGgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_80.setTransform(673.7,611.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FED872").s().p("AgRB1IAAhOIgvibIAkAAIAcBwIABAAIAchwIAkAAIgwCbIAABOg");
	this.shape_81.setTransform(660.7,609.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgcCLQgMgEgIgJQgJgHgEgMQgEgLAAgOQAAgPAEgRIAhAAIAAAWQAAAVAHAJQAFAJAOAAQAMAAAGgKQAGgKAAgTIAAg2QAAgLgCgHQgCgFgDgEQgDgDgFgBIgIgCQgJAAgHAFQgGAGgFAGIgfAAIAAiQIB4AAIAAAmIhUAAIAABGQAGgIALgFQAKgEALAAQAaAAANASQAMARAAAiIAAAxQAAAVgGAPQgFAPgKAIQgJAJgMAEQgMAEgMAAQgQAAgMgEg");
	this.shape_82.setTransform(913.3,522.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgNCPQgIgBgIgDQgHgEgHgFQgIgGgGgKQgFgJgDgOQgEgNABgTIAAh3QgBgSAEgOQADgNAGgKQAFgJAIgGQAHgFAIgDQAHgDAIgBIAOgBIANABIAQAEQAHACAHAGQAIAFAFAKQAGAJADAOQAEANgBATIAAB3QABATgEANQgDAOgGAJQgGAKgHAGQgIAFgHAEIgPAEIgNABgAgShmQgHAIABATIAACYQgBASAHAIQAGAIANAAQAMAAAHgIQAFgIAAgSIAAiYQAAgTgFgIQgHgJgMAAQgNAAgGAJg");
	this.shape_83.setTransform(896,522.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FED872").s().p("AgrC4IAzlvIAkAAIgzFvg");
	this.shape_84.setTransform(882.7,523.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FED872").s().p("AgcCLQgMgEgIgJQgJgHgEgMQgEgLAAgOQAAgPAEgRIAhAAIAAAWQAAAVAHAJQAFAJAOAAQAMAAAGgKQAFgKABgTIAAg2QgBgLgBgHQgCgFgDgEQgDgDgFgBIgIgCQgJAAgHAFQgGAGgFAGIgfAAIAAiQIB4AAIAAAmIhUAAIAABGQAGgIALgFQAKgEALAAQAaAAANASQAMARAAAiIAAAxQAAAVgGAPQgFAPgKAIQgJAJgMAEQgMAEgMAAQgQAAgMgEg");
	this.shape_85.setTransform(869.8,522.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FED872").s().p("AgNCPQgIgBgIgDQgHgEgHgFQgIgGgGgKQgFgJgDgOQgEgNABgTIAAh3QgBgSAEgOQADgNAGgKQAFgJAIgGQAHgFAIgDQAHgDAIgBIAOgBIANABIAQAEQAHACAIAGQAGAFAGAKQAGAJADAOQAEANgBATIAAB3QABATgEANQgDAOgGAJQgFAKgIAGQgIAFgHAEIgPAEIgNABgAgShmQgHAIABATIAACYQgBASAHAIQAGAIANAAQAMAAAHgIQAFgIAAgSIAAiYQAAgTgFgIQgHgJgMAAQgNAAgGAJg");
	this.shape_86.setTransform(852.4,522.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FED872").s().p("AgrC4IAzlvIAkAAIgzFvg");
	this.shape_87.setTransform(839.1,523.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FED872").s().p("Ag7COIBNj1IhSAAIAAgmICBAAIAAAXIhNEEg");
	this.shape_88.setTransform(827.7,522.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FED872").s().p("AgrCOIAAghIAhAAIAAjAIgjAfIgSgWIA/hDIAgAAIAAABIAAgBIAAD6IAgAAIAAAhg");
	this.shape_89.setTransform(813.7,522.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FED872").s().p("AgNCPQgIgBgIgDQgIgEgHgFQgHgGgFgKQgGgJgDgOQgDgNAAgTIAAh3QAAgSADgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAIgDAHgBIANgBIAOABIAQAEQAHACAHAGQAIAFAFAKQAGAJADAOQADANAAATIAAB3QAAATgDANQgDAOgGAJQgFAKgIAGQgHAFgIAEIgPAEIgOABgAgShmQgHAIAAATIAACYQAAASAHAIQAGAIAMAAQANAAAGgIQAHgIgBgSIAAiYQABgTgHgIQgGgJgNAAQgMAAgGAJg");
	this.shape_90.setTransform(798.1,522.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FED872").s().p("AhDCPIAAgZIA/h4IANgdIAIgVIAFgQIABgMIgCgOQgBgGgDgEQgEgEgEgCIgKgBQgOAAgHANQgGALAAAXIAAAQIgiAAIgDgRIgBgRQAAgKAEgMQADgKAIgJQAIgIANgGQAMgFARAAQASAAANAEQANAFAJAIQAIAIAEAMQAEAMAAAPIgCASIgFARIgJAVIgPAZIg3BqIBSAAIAAAig");
	this.shape_91.setTransform(781.4,522.6);

	this.instance_6 = new lib.ClipGroup();
	this.instance_6.parent = this;
	this.instance_6.setTransform(956.6,231.6,1,1,0,0,0,200.1,231.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EE4940").s().p("AgkD+QgRgDgNgIQgMgJgIgPQgHgPAAgWIABgKIADgMIAyAAQAAAYAJALQAKAKATAAIAOgCQAHgCAGgHQAFgHAEgKQADgLAAgTIAAg8QgJAMgPAJQgOAIgXAAIgPAAIgSgHQgJgEgJgJQgJgJgHgQQgHgPgEgXQgFgYAAgfIAAhmQAAgfAFgWQAEgXAHgOQAHgPAJgIQAJgJAKgEIASgFIAQgCQAOAAAKAEQALAEAIAGIANANIAKAPIAGgmIA4AAIAAFyQAAAggHAbQgGAZgNATQgNASgUAKQgVAKgbAAQgTAAgRgEgAgNjLQgHAEgEAIQgFAHgDAOIgCAjIAAB/IACAiQADAOAFAIQAEAIAHADIAOADIAMgCIAKgHIAIgJIAFgKIAAjTQgFgLgJgJQgJgIgNAAg");
	this.shape_92.setTransform(959.8,439.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EE4940").s().p("AgXDEQgNgCgMgGQgMgHgLgLQgKgLgJgUQgHgSgEgcQgFgbAAgmIAAg8QAAgmAFgbQAEgbAIgSQAIgSALgKQALgLAMgGQAMgGAMgCIAXgBIAYABQANACAMAGQAMAEAKAMQAKAKAIATQAIASAGAbQAEAbAAAmIAAA8QAAAlgFAbQgFAcgIASQgIAUgLALQgLAMgLAGQgMAGgMADIgYACgAgPiMQgHAGgFALQgEALgCASIgCAuIAABfIACAtQACASAEAMQAFALAHAFQAHAFAJAAQAKAAAGgFQAHgFAEgLQAEgMACgSIABgtIAAhfIgBguQgCgSgEgLQgEgLgHgGQgGgEgKAAQgJAAgHAEg");
	this.shape_93.setTransform(933.1,433.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EE4940").s().p("AhVDwIAAnfIBJAAIAAGlIBiAAIAAA6g");
	this.shape_94.setTransform(910.7,428.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EE4940").s().p("AhlD5IAAgsQAQACAOgDQANgDAJgJQAKgJAGgPQAFgPACgUIhcmEIBIAAIApDWIALBJIACAAIAIhJIAhjWIBGAAIhSGQQgFAcgIAVQgJAUgMAOQgLAOgRAHQgQAHgXAAQgSAAgTgHg");
	this.shape_95.setTransform(873,439.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EE4940").s().p("AgkD+QgRgDgNgIQgMgJgIgPQgHgPAAgWIABgKIADgMIAyAAQAAAYAJALQAKAKATAAIAOgCQAHgCAGgHQAFgHAEgKQADgLAAgTIAAg8QgJAMgPAJQgOAIgXAAIgPAAIgSgHQgJgEgJgJQgJgJgHgQQgHgPgEgXQgFgYAAgfIAAhmQAAgfAFgWQAEgXAHgOQAHgPAJgIQAJgJAKgEIASgFIAQgCQAOAAAKAEQALAEAIAGIANANIAKAPIAGgmIA4AAIAAFyQAAAggHAbQgGAZgNATQgNASgUAKQgVAKgbAAQgTAAgRgEgAgNjLQgHAEgEAIQgFAHgDAOIgCAjIAAB/IACAiQADAOAFAIQAEAIAHADIAOADIAMgCIAKgHIAIgJIAFgKIAAjTQgFgLgJgJQgJgIgNAAg");
	this.shape_96.setTransform(846.1,439.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EE4940").s().p("AhXDDIAAmBIA0AAIAGAnQAMgVAPgMQAOgLAQABQAfAAAOASQAPATAAAlIAAAMIgCAOIgEAOIgDANIgyAAIAAgkIgBgTIgFgMIgFgGIgIgCQgIgBgGAGQgHAGgFAJIAAE9g");
	this.shape_97.setTransform(823.1,433);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EE4940").s().p("AgtC9QgTgKgNgTQgNgUgHgfQgGgfAAgrIAAhIQAAglAFgZQAFgbAJgSQAJgSAMgKQAMgKALgGQANgFANgCIAVgBQATgBARAHQATAFANAOQAOAOAHAXQAJAXgBAjIAAAYIgCAYIgDAWIgEATIh/AAIAAAoIACAqQABASAGALQAEAJAIAFQAIAFALAAIANgDQAGgCAFgHIAHgQIACgZIAAgNIA8AAIAAAPQAAA3gaAZQgbAagxAAQgZgBgTgIgAgMiMQgHAEgEALQgFAKgCARIgCApIAAAYIBGAAIABgJIAAgKIAAgLIAAgKQAAgmgJgRQgJgQgRAAQgJgBgHAFg");
	this.shape_98.setTransform(797.9,433.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EE4940").s().p("AAjDDIAAkkQABgagJgJQgHgKgPAAQgKAAgLAGQgLAIgIAMIAAE3IhHAAIAAmBIA3AAIAGApIAAAAQAJgNAKgIIAUgPIAUgIIAVgBQAiAAATAYQATAXAAAvIAAEng");
	this.shape_99.setTransform(770.5,433);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EE4940").s().p("AhZDwIAAnfICwAAIAAA5IhoAAIAACQIBRAAIAAA4IhRAAIAACkIBrAAIAAA6g");
	this.shape_100.setTransform(746,428.6);

	this.instance_7 = new lib.ClipGroup_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(859.6,431.6,1,1,0,0,0,265.8,40.9);

	this.instance_8 = new lib.Path_4_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(257.3,998.9,1,1,0,0,0,257.3,460.6);
	this.instance_8.alpha = 0.461;

	this.instance_9 = new lib.Path_5_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(852.7,998.9,1,1,0,0,0,311.2,557.1);
	this.instance_9.alpha = 0.461;

	this.instance_10 = new lib.Image();
	this.instance_10.parent = this;
	this.instance_10.setTransform(479,360,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.instance_6},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_33},{t:this.instance_1},{t:this.shape_32},{t:this.instance},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.backtogotoMenu}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,1229,1694.1), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICBAssets_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110));

	// Layer 2
	this.instance_1 = new lib.Symbol32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76,77.1,1,1,0,0,0,236,260);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:3.3},0).wait(1).to({rotation:6.6,x:76.1},0).wait(1).to({rotation:9.9},0).wait(1).to({rotation:13.2},0).wait(1).to({rotation:16.5,x:76},0).wait(1).to({rotation:19.8},0).wait(1).to({rotation:23.1},0).wait(1).to({rotation:26.4},0).wait(1).to({rotation:29.7,x:76.1},0).wait(1).to({rotation:33,x:76},0).wait(1).to({rotation:36.3},0).wait(1).to({rotation:39.6},0).wait(1).to({rotation:42.9},0).wait(1).to({rotation:46.2},0).wait(1).to({rotation:49.5},0).wait(1).to({rotation:52.8},0).wait(1).to({rotation:56.1},0).wait(1).to({rotation:59.4},0).wait(1).to({rotation:62.8},0).wait(1).to({rotation:66.1},0).wait(1).to({rotation:69.4},0).wait(1).to({rotation:72.7},0).wait(1).to({rotation:76},0).wait(1).to({rotation:79.3},0).wait(1).to({rotation:82.6},0).wait(1).to({rotation:85.9},0).wait(1).to({rotation:89.2},0).wait(1).to({rotation:92.5},0).wait(1).to({rotation:95.8},0).wait(1).to({rotation:99.1},0).wait(1).to({rotation:102.4},0).wait(1).to({rotation:105.7},0).wait(1).to({rotation:109},0).wait(1).to({rotation:112.3},0).wait(1).to({rotation:115.6},0).wait(1).to({rotation:118.9},0).wait(1).to({rotation:122.2},0).wait(1).to({rotation:125.5,y:77},0).wait(1).to({rotation:128.8},0).wait(1).to({rotation:132.1,y:77.1},0).wait(1).to({rotation:135.4,y:77},0).wait(1).to({rotation:138.7,y:77.1},0).wait(1).to({rotation:142,y:77},0).wait(1).to({rotation:145.3,y:77.1},0).wait(1).to({rotation:148.6,y:77},0).wait(1).to({rotation:151.9},0).wait(1).to({rotation:155.2},0).wait(1).to({rotation:158.5},0).wait(1).to({rotation:161.8},0).wait(1).to({rotation:165.1,y:77.1},0).wait(1).to({rotation:168.4},0).wait(1).to({rotation:171.7},0).wait(1).to({rotation:175,y:77},0).wait(1).to({rotation:178.3},0).wait(1).to({rotation:181.7},0).wait(1).to({rotation:185},0).wait(1).to({rotation:188.3},0).wait(1).to({rotation:191.6,y:77.1},0).wait(1).to({rotation:194.9,y:77},0).wait(1).to({rotation:198.2,y:77.1},0).wait(1).to({rotation:201.5},0).wait(1).to({rotation:204.8,y:77},0).wait(1).to({rotation:208.1,y:77.1},0).wait(1).to({rotation:211.4},0).wait(1).to({rotation:214.7,y:77},0).wait(1).to({rotation:218},0).wait(1).to({rotation:221.3,y:77.1},0).wait(1).to({rotation:224.6},0).wait(1).to({rotation:227.9,y:77},0).wait(1).to({rotation:231.2},0).wait(1).to({rotation:234.5,y:77.1},0).wait(1).to({rotation:237.8,x:76.1},0).wait(1).to({rotation:241.1,x:76},0).wait(1).to({rotation:244.4,x:76.1,y:77},0).wait(1).to({rotation:247.7,x:76},0).wait(1).to({rotation:251,y:77.1},0).wait(1).to({rotation:254.3},0).wait(1).to({rotation:257.6,x:76.1},0).wait(1).to({rotation:260.9,y:77},0).wait(1).to({rotation:264.2,x:76},0).wait(1).to({rotation:267.5},0).wait(1).to({rotation:270.8,y:77.1},0).wait(1).to({rotation:274.1,y:77},0).wait(1).to({rotation:277.4,y:77.1},0).wait(1).to({rotation:280.7,y:77},0).wait(1).to({rotation:284,x:76.1},0).wait(1).to({rotation:287.3,y:77.1},0).wait(1).to({rotation:290.6,x:76,y:77},0).wait(1).to({rotation:293.9},0).wait(1).to({rotation:297.2,x:76.1,y:77.1},0).wait(1).to({rotation:300.6,x:76,y:77},0).wait(1).to({rotation:303.9,y:77.1},0).wait(1).to({rotation:307.2},0).wait(1).to({rotation:310.5},0).wait(1).to({rotation:313.8,x:76.1},0).wait(1).to({rotation:317.1},0).wait(1).to({rotation:320.4,x:76,y:77},0).wait(1).to({rotation:323.7,y:77.1},0).wait(1).to({rotation:327},0).wait(1).to({rotation:330.3},0).wait(1).to({rotation:333.6,x:76.1},0).wait(1).to({rotation:336.9},0).wait(1).to({rotation:340.2,x:76},0).wait(1).to({rotation:343.5},0).wait(1).to({rotation:346.8},0).wait(1).to({rotation:350.1,x:76.1},0).wait(1).to({rotation:353.4},0).wait(1).to({rotation:356.7},0).wait(1).to({rotation:360,x:76},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-182.9,472,520);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjykOQAXgeAfgPQBWgtBtA/QBtA+BFCGQBECEgMB+QgMB9hWAtIgVAIQkJkPhjlOg");
	this.shape.setTransform(-170.6,172);

	this.instance = new lib.Path_1_4();
	this.instance.parent = this;
	this.instance.setTransform(4.3,133.8,1,1,0,0,0,172.7,129.4);
	this.instance.alpha = 0.262;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E17B3A").s().p("ACbEcQgKgrgTg9QgehjguhoQgohcg8hjQgWgkgng2QgdgqglgrQBEBIBBBjQA5BZAuBnQAaA5APArQASAwAPA3QAhBzAMBiQgIgxgPg5g");
	this.shape_1.setTransform(-113.8,-73.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E17B3A").s().p("AhmEkQAJhGAPhSQALhEAThSQAkiZAriPQAwidA0iGIgxCSQgZBPgTBEQguCigfCHQghCWgWCWQgNBYgHBBQgIA/gIBZQAHiOAVikg");
	this.shape_2.setTransform(90.2,-97.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai+GBQhlg2gNiUQgNiVBTibQBTidCChIQCBhJBlA1QBFAlAdBYQhGC2h7CiQh4ChikCFIgUgIg");
	this.shape_3.setTransform(139.6,175.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221E1F").s().p("ACgBkQgqgMgogZQgjgWghgiQgcgdgVggQgTA7g8AsQg0AmhNAMQgnAFgfAAQgmAAgegPQgggNgagaQgZgYgTgeQArA/A8AaQAgAOAjgBQAjgBAigFQBLgNAzglQAdgWASgZQAXgfAGgeIADgKIAGAJQAvBLBKAvQAkAXArANQAsAMAqgDQBkgIA9gyQAkgdATglQAVgqACgrQAAAtgTApQgUApgiAdQgiAbgsAQQgsAQgsADIgRABQgjAAglgKg");
	this.shape_4.setTransform(-35.1,201.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBKQgagagEgoQgEgoAVgeQAVgfAhgDQAggEAaAbQAbAaADAoQAEAogVAfQgUAegiADIgIABQgbAAgXgYg");
	this.shape_5.setTransform(-107.1,94.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3F1816").s().p("AgfEnQhlgLg+heQg+hfAOh5QANh6BRhPQBQhOBkALQBlALA+BeQA+BegOB6QgNB6hRBPQhHBFhVAAIgYgCg");
	this.shape_6.setTransform(-115.5,103.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhBBRQgdgiAAgvQAAgvAdghQAbgiAmAAQAnAAAcAiQAbAhAAAvQAAAvgbAiQgcAhgnABQgmgBgbghg");
	this.shape_7.setTransform(71.5,88.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F1816").s().p("AiED9QhdhKgah/Qgbh+A4hoQA3hqBogVQBogWBcBKQBdBLAaB+QAaB+g3BpQg3BphpAWQgXAFgYAAQhNAAhHg6g");
	this.shape_8.setTransform(66.9,100.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9D68E").s().p("ArjWXQlVh2kHjXQkHjXiQkWQiVkhAAk8QAAk7CVkgQCQkXEHjXQEHjXFVh2QFhh6GCAAQGCAAFhB6QFWB2EHDXQEHDXCQEXQCVEgAAE7QAAE8iVEhQiQEWkHDXQkHDXlWB2QlhB6mCAAQmCAAlhh6g");
	this.shape_9.setTransform(-11.2,107.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9D68E").s().p("AnUTVQAsi6AtjsQBbnaAIkAQACg1gIkWQgJkTAHipQAWovC9ggQBngSBnA8QBkA6BPB4QBQB5AqCgQAtCpgHC3QgOGPkxK5QiYFdiVENg");
	this.shape_10.setTransform(104.1,-134.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9D68E").s().p("Ak+gMQg0hNg+iIQhEiXgriOQhwlzCDhLQCJhQDrDtQDODQCyFPQCGD6CAHoQBAD1AlDBIjLBJQpGsliAjAg");
	this.shape_11.setTransform(-140,-110);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E17B3A").s().p("AtaKLQgYgCgWgDIAuAEQAvACArgDQBZgFBWgbQBWgbBMgxQBMgxA8hCQDKjcEElIIDekaQA5hIBCg8QBShJBDgcQA0gUAlAIQAYAFARARQALAKAQAaQA2BdAWBGQAPA1gFAlQgEAYgQARQgPAPgZAFIgWAEIgXABQgcgBgQgFQgxgPgUgnQAVAnAwAOQARAEAbABIAXgCIAWgDQAXgFAPgQQAOgPAEgYQAFgjgQg0QgXhKg1hYQgQgagKgJQgRgPgVgFQgkgIgyAUQhAAchSBJQhAA6g5BJIjdEbQkFFHjMDcQg9BChNAxQhOAxhVAaQhYAbhZAEIgoABQgaAAgYgCg");
	this.shape_12.setTransform(141.9,129.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9D68E").s().p("AugQ4QhZgBhYgPIhGgOIk4noIOznnQAPhaAniDQBNkGB1jHQCikYDYhzQEOiPFVB8QCyBBD5DeQDlDNBZCVQBTCLhCDmQhDDpi0CxQikChkGg3QjTgtijiNQhtheAFhsQACgiANggIAMgYQh6CvigDKQk/GVi9CJQi5CGkWAAIgKAAg");
	this.shape_13.setTransform(147.4,87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-201.2,-263.3,497.5,526.6), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(181.6,181.6,1,1,0,0,0,181.6,181.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:181.5,y:181.5,alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.893},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.821},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.679},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.607},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.536},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.464},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.393},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.321},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.107},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.036},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363.1,363.1);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_13();
	this.instance.parent = this;
	this.instance.setTransform(87.3,233.9,1,1,0,0,0,25.9,51.8);
	this.instance.alpha = 0.262;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E17B3A").s().p("ADrHfQACgSgBgeIgDg4QgFgzgDgUIgNhVQgIgrgMgyQgRhJgIgZQgRgwgWgxQgrhdg9hVQg4hRg7g5QgfgcgZgRQgYgSgXgLQgRgKgQgFIgMgDIAAgBIAMADQAOAEAUAKQAdAQATANQAbATAdAbQA9A3A5BRQA9BUAsBfQAYAvARAxIAPAyIAMAxQAMAzAHAqQAFAaACATIAGAoQADAhACAnIABA5QgBAegDASg");
	this.shape.setTransform(126,195.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9D68E").s().p("AH0L9QiPgKhuhUQkzjvg4keQgJgwgCgvQgMAPgRAOQhgBUh9AaQicAhhhhfQg6g5gfhtQgih5AUh6QAWiOBbhrQBrh8C8g8QExhhEGBVQEWBZBvECQBTDBAVFOQAREhgfBxQgWBQgpBIQgUAkgQATQgjAJgvAAIgogBg");
	this.shape_1.setTransform(74.1,218.5);

	this.instance_1 = new lib.Path_3_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.8,210.2,1,1,0,0,0,19.3,36.4);
	this.instance_1.alpha = 0.262;

	this.instance_2 = new lib.Path_4_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(167.8,235.5,1,1,0,0,0,102.4,76.8);
	this.instance_2.alpha = 0.262;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9D68E").s().p("Am1NQQjLhGibh/Qich/hWilQhYisAAi7QAAi6BYisQBWikCciAQCbh/DLhGQDRhIDkAAQDlAADSBIQDKBGCcB/QCbCABWCkQBYCsAAC6QAAC7hYCsQhWClibB/QicB/jKBGQjSBIjlAAQjkAAjRhIg");
	this.shape_2.setTransform(176.9,219.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9D68E").s().p("AhXGMQi0mdgJjtQgIjbBnicQAvhHA7giQA9gkA8ALQBxATANFLQAEBlgFCiQgFClABAfQAFCYA2EZQAaCMAaBuIi7AdQhYifhajPg");
	this.shape_3.setTransform(108.5,76.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9D68E").s().p("AlgIdQAWhzAmiRQBMkgBPiVQBqjGB6h8QCLiMBRAvQBOAthDDcQg2C2hPB2QgwBGi+ELIi2D9g");
	this.shape_4.setTransform(253.2,90.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_2},{t:this.instance_1},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,289.5,312.2), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_13();
	this.instance.parent = this;
	this.instance.setTransform(87.3,233.9,1,1,0,0,0,25.9,51.8);
	this.instance.alpha = 0.262;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E17B3A").s().p("ADrHfQACgSgBgeIgDg4QgFgzgDgUIgNhVQgIgrgMgyQgRhJgIgZQgRgwgWgxQgrhdg9hVQg4hRg7g5QgfgcgZgRQgYgSgXgLQgRgKgQgFIgMgDIAAgBIAMADQAOAEAUAKQAdAQATANQAbATAdAbQA9A3A5BRQA9BUAsBfQAYAvARAxIAPAyIAMAxQAMAzAHAqQAFAaACATIAGAoQADAhACAnIABA5QgBAegDASg");
	this.shape.setTransform(126,195.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9D68E").s().p("AH0L9QiPgKhuhUQkzjvg4keQgJgwgCgvQgMAPgRAOQhgBUh9AaQicAhhhhfQg6g5gfhtQgih5AUh6QAWiOBbhrQBrh8C8g8QExhhEGBVQEWBZBvECQBTDBAVFOQAREhgfBxQgWBQgpBIQgUAkgQATQgjAJgvAAIgogBg");
	this.shape_1.setTransform(74.1,218.5);

	this.instance_1 = new lib.Path_3_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.8,210.2,1,1,0,0,0,19.3,36.4);
	this.instance_1.alpha = 0.262;

	this.instance_2 = new lib.Path_4_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(167.8,235.5,1,1,0,0,0,102.4,76.8);
	this.instance_2.alpha = 0.262;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9D68E").s().p("Am1NQQjLhGibh/Qich/hWilQhYisAAi7QAAi6BYisQBWikCciAQCbh/DLhGQDRhIDkAAQDlAADSBIQDKBGCcB/QCbCABWCkQBYCsAAC6QAAC7hYCsQhWClibB/QicB/jKBGQjSBIjlAAQjkAAjRhIg");
	this.shape_2.setTransform(176.9,219.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9D68E").s().p("AhXGMQi0mdgJjtQgIjbBnicQAvhHA7giQA9gkA8ALQBxATANFLQAEBlgFCiQgFClABAfQAFCYA2EZQAaCMAaBuIi7AdQhYifhajPg");
	this.shape_3.setTransform(108.5,76.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9D68E").s().p("AlgIdQAWhzAmiRQBMkgBPiVQBqjGB6h8QCLiMBRAvQBOAthDDcQg2C2hPB2QgwBGi+ELIi2D9g");
	this.shape_4.setTransform(253.2,90.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_2},{t:this.instance_1},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,289.5,312.2), null);


(lib.Symbol15copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvoB4QgxAAgjgjQgkgkAAgxQAAgxAkgiQAjgkAxAAIfRAAQAxAAAkAkQAjAiAAAxQAAAxgjAkQgkAjgxAAgAwgg3QgYAXAAAgQAAAhAYAXQAXAYAhAAIfRAAQAhAAAXgYQAYgXAAghQAAgggYgXQgXgYghAAI/RAAQghAAgXAYg");
	this.shape.setTransform(112.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	mask.setTransform(-108.1,11);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#733A44").s().p("Aw3AUIAAgnMAhuAAAIAAAng");
	this.shape_1.setTransform(112.4,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AvQALQgEAAgDgDQgEgDAAgFQAAgEAEgDQADgDAEAAIegAAQAGAAACADQAEADAAAEQAAAFgEADQgCADgGAAg");
	this.shape_2.setTransform(112.1,7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	this.shape_3.setTransform(112.1,12);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.instance = new lib.Path_3_3();
	this.instance.parent = this;
	this.instance.setTransform(112,12,1,1,0,0,0,110,10);
	this.instance.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15copy3, new cjs.Rectangle(0,0,224.2,24), null);


(lib.Symbol15copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvoB4QgxAAgjgjQgkgkAAgxQAAgxAkgiQAjgkAxAAIfRAAQAxAAAkAkQAjAiAAAxQAAAxgjAkQgkAjgxAAgAwgg3QgYAXAAAgQAAAhAYAXQAXAYAhAAIfRAAQAhAAAXgYQAYgXAAghQAAgggYgXQgXgYghAAI/RAAQghAAgXAYg");
	this.shape.setTransform(112.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	mask.setTransform(51,11);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#733A44").s().p("Aw3AUIAAgnMAhuAAAIAAAng");
	this.shape_1.setTransform(112.4,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AvQALQgEAAgDgDQgEgDAAgFQAAgEAEgDQADgDAEAAIegAAQAGAAACADQAEADAAAEQAAAFgEADQgCADgGAAg");
	this.shape_2.setTransform(112.1,7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	this.shape_3.setTransform(112.1,12);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.instance = new lib.Path_3_3();
	this.instance.parent = this;
	this.instance.setTransform(112,12,1,1,0,0,0,110,10);
	this.instance.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15copy2, new cjs.Rectangle(0,0,224.2,24), null);


(lib.Symbol15copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
		this.parent.parent.gotoAndPlay("win");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvoB4QgxAAgjgjQgkgkAAgxQAAgxAkgiQAjgkAxAAIfRAAQAxAAAkAkQAjAiAAAxQAAAxgjAkQgkAjgxAAgAwgg3QgYAXAAAgQAAAhAYAXQAXAYAhAAIfRAAQAhAAAXgYQAYgXAAghQAAgggYgXQgXgYghAAI/RAAQghAAgXAYg");
	this.shape.setTransform(112.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(35));

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:51,y:11}).wait(1).to({graphics:mask_graphics_1,x:46.3,y:11}).wait(1).to({graphics:mask_graphics_2,x:41.7,y:11}).wait(1).to({graphics:mask_graphics_3,x:37,y:11}).wait(1).to({graphics:mask_graphics_4,x:32.3,y:11}).wait(1).to({graphics:mask_graphics_5,x:27.6,y:11}).wait(1).to({graphics:mask_graphics_6,x:22.9,y:11}).wait(1).to({graphics:mask_graphics_7,x:18.3,y:11}).wait(1).to({graphics:mask_graphics_8,x:13.6,y:11}).wait(1).to({graphics:mask_graphics_9,x:8.9,y:11}).wait(1).to({graphics:mask_graphics_10,x:4.2,y:11}).wait(1).to({graphics:mask_graphics_11,x:-0.4,y:11}).wait(1).to({graphics:mask_graphics_12,x:-5.1,y:11}).wait(1).to({graphics:mask_graphics_13,x:-9.8,y:11}).wait(1).to({graphics:mask_graphics_14,x:-14.5,y:11}).wait(1).to({graphics:mask_graphics_15,x:-19.2,y:11}).wait(1).to({graphics:mask_graphics_16,x:-23.8,y:11}).wait(1).to({graphics:mask_graphics_17,x:-28.5,y:11}).wait(1).to({graphics:mask_graphics_18,x:-33.2,y:11}).wait(1).to({graphics:mask_graphics_19,x:-37.9,y:11}).wait(1).to({graphics:mask_graphics_20,x:-42.6,y:11}).wait(1).to({graphics:mask_graphics_21,x:-47.2,y:11}).wait(1).to({graphics:mask_graphics_22,x:-51.9,y:11}).wait(1).to({graphics:mask_graphics_23,x:-56.6,y:11}).wait(1).to({graphics:mask_graphics_24,x:-61.3,y:11}).wait(1).to({graphics:mask_graphics_25,x:-66,y:11}).wait(1).to({graphics:mask_graphics_26,x:-70.6,y:11}).wait(1).to({graphics:mask_graphics_27,x:-75.3,y:11}).wait(1).to({graphics:mask_graphics_28,x:-80,y:11}).wait(1).to({graphics:mask_graphics_29,x:-84.7,y:11}).wait(1).to({graphics:mask_graphics_30,x:-89.4,y:11}).wait(1).to({graphics:mask_graphics_31,x:-94,y:11}).wait(1).to({graphics:mask_graphics_32,x:-98.7,y:11}).wait(1).to({graphics:mask_graphics_33,x:-103.4,y:11}).wait(1).to({graphics:mask_graphics_34,x:-108.1,y:11}).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#733A44").s().p("Aw3AUIAAgnMAhuAAAIAAAng");
	this.shape_1.setTransform(112.4,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AvQALQgEAAgDgDQgEgDAAgFQAAgEAEgDQADgDAEAAIegAAQAGAAACADQAEADAAAEQAAAFgEADQgCADgGAAg");
	this.shape_2.setTransform(112.1,7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	this.shape_3.setTransform(112.1,12);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(35));

	// Layer 1
	this.instance = new lib.Path_3_3();
	this.instance.parent = this;
	this.instance.setTransform(112,12,1,1,0,0,0,110,10);
	this.instance.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.2,24);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvoB4QgxAAgjgjQgkgkAAgxQAAgxAkgiQAjgkAxAAIfRAAQAxAAAkAkQAjAiAAAxQAAAxgjAkQgkAjgxAAgAwgg3QgYAXAAAgQAAAhAYAXQAXAYAhAAIfRAAQAhAAAXgYQAYgXAAghQAAgggYgXQgXgYghAAI/RAAQghAAgXAYg");
	this.shape.setTransform(112.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:51,y:11}).wait(1).to({graphics:mask_graphics_1,x:51,y:11}).wait(1).to({graphics:mask_graphics_2,x:51,y:11}).wait(1).to({graphics:mask_graphics_3,x:51,y:11}).wait(1).to({graphics:mask_graphics_4,x:51,y:11}).wait(1).to({graphics:mask_graphics_5,x:51,y:11}).wait(1).to({graphics:mask_graphics_6,x:51,y:11}).wait(1).to({graphics:mask_graphics_7,x:51,y:11}).wait(1).to({graphics:mask_graphics_8,x:51,y:11}).wait(1).to({graphics:mask_graphics_9,x:51,y:11}).wait(1).to({graphics:mask_graphics_10,x:51,y:11}).wait(1).to({graphics:mask_graphics_11,x:51,y:11}).wait(1).to({graphics:mask_graphics_12,x:51,y:11}).wait(1).to({graphics:mask_graphics_13,x:51,y:11}).wait(1).to({graphics:mask_graphics_14,x:51,y:11}).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#733A44").s().p("Aw3AUIAAgnMAhuAAAIAAAng");
	this.shape_1.setTransform(112.4,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AvQALQgEAAgDgDQgEgDAAgFQAAgEAEgDQADgDAEAAIegAAQAGAAACADQAEADAAAEQAAAFgEADQgCADgGAAg");
	this.shape_2.setTransform(112.1,7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	this.shape_3.setTransform(112.1,12);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(15));

	// Layer 1
	this.instance = new lib.Path_3_3();
	this.instance.parent = this;
	this.instance.setTransform(112,12,1,1,0,0,0,110,10);
	this.instance.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.2,24);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_12();
	this.instance.parent = this;
	this.instance.setTransform(143.3,122.5,1,1,0,0,0,39.1,58.8);
	this.instance.alpha = 0.57;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C86865").s().p("ABEBMIgHgPIgJgRQgGgNgFgFIgLgTIgPgSIgPgRIgOgRIhAg1IAMABIANAEIARAGIASAJIAUAMIATARIASATQAGAIAIAOIAHAKIAGALQADAHAEAQQACAGACAOIACARIgBAag");
	this.shape.setTransform(52.7,93);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C86865").s().p("AhxBVIAJgjIALgbIAQgbIALgNQADgEAUgVIAagVIAagSIAbgOIAZgKQAUgHATgDIAPgCIhcA6IgXATQgPANgIAHQgOAOgHAHIgbAiIgfA1IgMAeg");
	this.shape_1.setTransform(91.2,91.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA9543").s().p("AANAnIgegFIgCAAIgSgEQgPgEgJgEIgVgLQgKgGgIgGQgFgEgHgJQgFgGgCgGIgDgJIAAgDIACADIAFAGIAJAJIAOAJIASAIIArALIAPADIABAAIABAAIBLAJIAUABQAUAAAKgBIAMgCIgKAGQgOAHgQADIgVAEIgXABIgHAAIgTAAg");
	this.shape_2.setTransform(147.8,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AA9543").s().p("AgYA7IgngKIgCgBIgCAAIgIgEIgQgIQgMgFgQgOIgLgLIgJgKQgHgLgEgMIgFgTIgBgQIAFAPIAPAZIARASIALAIQAKAGAQAIIAWAIIACABIAXAGIAQADIAQADIAQACIAQAAIAQAAIAfgCIAbgGQAhgIAVgMIgMALIgQAKQgKAHgMAFIgNAFIgPAFQgPAEgRABIgjACg");
	this.shape_3.setTransform(145.9,22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AA9543").s().p("AgHBPIgXgDQgHgBgmgKIgBgBIgBAAIgogSQgHgDgMgIIgRgMIgPgOIgMgNQgLgRgDgMQgDgJgCgQQABgKABgFIABgGIAAAGIACAPIAIAWQAFAKAMAOQANAMANAJIARAKIASAJIAnAPIAWAGIAVAEIAWADIAUABIAqgBIAogIIAigKIAcgLIALgGIAKgEIASgLIgDAEIgMAKQgJAIgLAHIgbAQQgSAIgRAGIgUAGIgrAIIgXABIgXgBg");
	this.shape_4.setTransform(142.8,34.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AA9543").s().p("AAoBnQgSgBgJgBIg5gMIgFgCIg/gZIgXgNQgYgQgOgOQgQgQgLgSIgJgSIgFgRQgDgOAAgOIACgSIABgGIAAAGIACASIACAMIALAcIAKAQQANARAPALQANALAYAOIAsAVIAYAIIANAFIABAAIAAAAIAEABIA2AMQAhAEAQgBIALAAIAXgCIAfgIIASgGQAPgHAQgJIAWgQIARgRIgDAFIgLAPQgJALgKAJQgQANgPAIIgTAJIgKAEIgXAHIgLACQgQADgJAAIgXABIgDAAg");
	this.shape_5.setTransform(140.2,46);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AA9543").s().p("AgUA2IgegFQgQgEgMgHQgPgJgGgOQgGgMADgNQABgKAGgKQADgGAGgHIAJgKIgGAMIgEAOQgDAJAAAJQAAAJAGAIQAFAJAKAEQAMAFAMACIAbADQAPABAKgCQAPgBAKgEQALgCALgGQAJgFAJgHQALgGAOgQIAHgLIgDANQgGAQgNAOQgQAUgbALQgNAFgQACIgSABIgMAAg");
	this.shape_6.setTransform(38.1,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AA9543").s().p("AgyAyQgUgDgMgGQgNgFgOgLQgMgLgFgMQgFgJgBgNQgBgKACgIIAEgOIAAAOQACAUAKAOQAHAJAJAGQAKAGAOAFQANAEAPACQAUACAKAAQAdAAAcgJQAYgGAZgOQAWgLALgIIAMgIIgJAMQgLAOgRANQgNAKgKAFQgNAIgOAFQgeAMgiAAQgRAAgQgDg");
	this.shape_7.setTransform(36.4,31.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AA9543").s().p("AhGAwQgTgDgNgHQgOgGgMgKQgSgOgHgVIgDgQIAHAOQAEAGAHAHQAGAFAMAIQALAGAMAFQAMADARACQAOABASgBQAQAAASgCQAPgCARgEQAUgEAMgEIAbgLIAZgMQAQgLAQgPIAMgLQgDAFgFAJQgKARgSAQQgMAJgMAIQgPAJgOAGQgSAHgQAEQgPAEgUADQgPACgUAAIgFAAQgOAAgQgCg");
	this.shape_8.setTransform(34.7,40.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AA9543").s().p("AhYA+QgLgBgSgGQgagLgLgPQgDgEgDgHIgBgFIADAEIAHAJQAIAFAIAEQAKAEAMADIAbADIAfAAIAigEIAfgGQAhgJAdgQIAxggQARgPANgPIAKgMQgBAFgFAKQgKATgPARQgLANgKAHQgMAMgOAJQgQAKgQAHQgRAIgSAEIgjAHIgkABQgMAAgVgDg");
	this.shape_9.setTransform(36.3,48.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhAAPQgbgGAAgJQAAgIAbgGQAbgGAlAAQAmAAAbAGQAbAGAAAIQAAAJgbAGQgbAGgmAAQglAAgbgGg");
	this.shape_10.setTransform(39.5,122.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhJAPQgfgGAAgJQAAgIAfgGQAegHArAAQArAAAfAHQAfAGAAAIQAAAJgfAGQgfAGgrAAQgqAAgfgGg");
	this.shape_11.setTransform(125,124.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221E1F").s().p("AhcglIC5gYIhqB7gAhNggIBABRIBWhkg");
	this.shape_12.setTransform(125.1,156.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6E7E7").s().p("AhTgiICngVIhgBvg");
	this.shape_13.setTransform(125,156.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221E1F").s().p("AigAnIglgFIgkgGIghgHIgfgIQgagHgbgKQgagKgNgHQgOgGgLgGIgIgFIAJADIBDARIA2AKQAVAEAqAEIARABIASABIAkACIAlAAIAngCIBPgFICbgPIBIgGIBBgGIBhgHIAcgCIAJAAIgjAJIk1A4IhPAJIhQAFIgdAAQgZAAgagBg");
	this.shape_14.setTransform(87.9,155);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D73A34").s().p("AgKCFQgOgsgEg6QgfgDgggIIgagJIgbgLIAbgKQAngPAygFQADgkAHgkIAIgeIAKglIALAlIAHAeQAIAkACAkQAzAFAnAPIAaAKIgaALQgnAPgzAFQgDA6gOAsIgLAlgAgEgSIgBAKIgLABQgbABgdAGQAYAGAgACIALABIABALQAAAYAEAfQAFgfABgYIAAgLIALgBQAggCAXgGQgdgGgagBIgLgBIAAgKQgBgYgFggQgEAgAAAYg");
	this.shape_15.setTransform(30.3,111.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9AC254").s().p("AgRAUQghgCgjgJIgbgJIAbgIQAjgIAhgDQADgnAHgnIAHggIAHAgQAJAnABAnQAjADAiAIIAcAIQgLAFgRAEQgiAJgjACQgCA+gPAwQgOgwgDg+g");
	this.shape_16.setTransform(30.3,111.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D73A34").s().p("AgKCpQgUg6gFhLQgwgDgugLQgdgHgLgEIgfgLIAfgKQAMgEAcgHQAugLAwgDQADgvALgvQAGgcAFgLIAKggIALAgQAEALAHAcQALAvAEAvQBKAFA7AUIAfAKIgfALQg7AUhKAFQgGBLgUA6IgLAggAgNgXIgBAKIgKABQgwACgxAKQA1AMAsACIAKAAIABALQACAsALA0QALgxACgvIABgLIALAAQAsgCA0gMQgwgKgwgCIgLgBIgBgKQgCgwgLgxQgLA0gCAtg");
	this.shape_17.setTransform(115.1,115);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9AC254").s().p("AgKB9QgMgygCgxQgygDgygLIgpgMIApgKQAygMAygCQACgyAMgyIAKgoIALAoQALAyADAyQAxACAzAMQAZAGAPAEQgPAGgZAGQgzALgxADQgDAxgLAyQgFAZgGAPQgEgPgGgZg");
	this.shape_18.setTransform(115.1,115);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#221E1F").s().p("AgEFCQgigDgdgNQgcgOgZgWIgcgdIgBgBIgBgCIgCgDIgJgNQgPgXgNgiQgJgVgIgnQgGgegDgeQgDgigBgZQgBgUABgoQABgiADgaIAai7IBvBWIAiAbIBCA4IAgAeIA6BCQANAOAOAVIAYAkIAeA7IAWA+QAFAaAAARQAAAcgIAQIAAAAIAAAAQgVAUgZASQgbATgYAMQgeAPgbAIQgaAHgbAAIgJAAgAi6j6IgCA6QgCA3ADA/IADA6QADAfADAZQAEAdAHAcQAHAcAJAZQAOAiALAPIAHALIADAFIAXAaQAWAUAVAMQAYAOAaAFQAyAKA8gVQAdgLAYgPQAagQAUgSQAIgRgBgYQgCgTgHgXIgSgmIgXgkIgMgSQgIgLgFgFIiMigIh6h6QgcgZgfgWg");
	this.shape_19.setTransform(33.6,104.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6E7E7").s().p("AiLDlQhKhdADjnQABhJAJhNIAIhAIBwBaQB/BvBRBrQBKBhAIBJQAFAlgLARQgxAvhDAZQgpAPgkAAQhVAAhBhRg");
	this.shape_20.setTransform(34.3,104.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#221E1F").s().p("AgDFXQgpgDgngKQghgJgqgRQgpgRgegSQglgVgegVQgjgZgagYIgBgBIABgBQALgYAPgaIAfgvIAggtIBJhWIAngoIBAg4IAXgRIAvgfQAOgJAigUIAzgZIA0gWIA0gUIA1gSIA2gRIA2gOIAGgCIABAHQAFA0ABAaQADAjABArQABBagJBDQgFApgJAlQgKArgNAhQgRAsgTAdIgLARIgMARIgcAeIgqAgIgFADIAAAAIgBAAIgBABIgUALQgnARgpAHIgpAFIgRAAIgXgBgAEjk7IgaAIIiAA3IgwAaIgwAcQgfATgOALIgWAPIhrBVIgoAmIgnAmIglApQgRARgUAZIhDBVQBAAqBGAgQAjAQAkAMQAoANAhAGQAmAIAkABQAjABAlgHQAlgIAfgOIARgJIADgCIAAAAIAAAAIAagSIANgLQAYgWAXgiQAQgYASgpQANgdALgqQAGgUALg1QAFgZAHgzQAEgjADgqQACgiAAgrQgBgugCgZQgbAGgUAHg");
	this.shape_21.setTransform(116.2,106);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E6E7E7").s().p("AivEeQhAgbg/gpIgygkQAXgnApg2QBThtBdhQQB+huCzhHQBagjBAgOIAFBPQAEBggKBXQgdEUiQBTQhGAohVAAQhYAAhpgtg");
	this.shape_22.setTransform(115.8,105.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FBE994").s().p("AgLE7QhZgMhMgzQg8goAGhTQAFhNA8hnQBBhwBahQQBUhLAyABQAiABAhBuQAhBuAHCCQAGBrgfBIQgdBHg5AUQglAOgvAAQgXAAgYgDg");
	this.shape_23.setTransform(139.7,31.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FBE994").s().p("AhtD2QgugggShjQgKgyAfhLQAchDAxhDQAxhBAsggQAwgjAVAUQAjAiARCuQAHBGAPAtQAOAqACAdQACAlg6AnQg6Ang/AJQgUADgRAAQgtAAgbgTg");
	this.shape_24.setTransform(35.9,33.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AE443F").s().p("AliKzQijg5h/hnQh+hohGiHQhHiLAAiZQAAiXBHiMQBGiHB+hnQB/hoCjg5QCqg7C4AAQC5AACqA7QCkA5B+BoQB+BnBFCHQBICMAACXQAACZhICLQhFCHh+BoQh+BnikA5QiqA7i5AAQi4AAiqg7g");
	this.shape_25.setTransform(91.2,107);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#83312B").s().p("ADtDoQgRgzhKg+QhJg9iogYQg1gHg4gDIgugBIDbhxIiIiyIAoAQQAwAWAvAZQCTBVBCBoQBCBpADBlQACAxgKAdQADgNgIgXg");
	this.shape_26.setTransform(227.1,56);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#83312B").s().p("AlyGeIBHgLQBmgTBVgcQBBgVAzgbQBDgiAsgqQA1g0AHg/QAFghgJgkQgEgTgGgRIgPgiIgKgSIgBgDIgBgBIgbgyIgohKQgthagUg8QgNgugCghQgDgwAQgeIALgQIAOgNIAcgVQAggTAfgFQAfgFAfAHQAZAFAbAMQAjAQApAcIBBApIgSgKIgwgdQg0gdgagKQgZgKgagFQgegFgcAGQgdAGgbASQgNAJgNAMIgCABIgBACIgDADIgFAGIgHAOQgMAbAGAnQAGAeAQAoQAYA4A0BSIBcCKIAVApQAMAbAFAPQAPAwgCAuQgBAZgFAXQgGAagJATQgQAlgiApQgwA4hOAxQg5AjhGAfQhZAmhuAeIhPATg");
	this.shape_27.setTransform(190,95.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,252.2,182), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_12();
	this.instance.parent = this;
	this.instance.setTransform(143.3,122.5,1,1,0,0,0,39.1,58.8);
	this.instance.alpha = 0.57;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C86865").s().p("ABEBMIgHgPIgJgRQgGgNgFgFIgLgTIgPgSIgPgRIgOgRIhAg1IAMABIANAEIARAGIASAJIAUAMIATARIASATQAGAIAIAOIAHAKIAGALQADAHAEAQQACAGACAOIACARIgBAag");
	this.shape.setTransform(52.7,93);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C86865").s().p("AhxBVIAJgjIALgbIAQgbIALgNQADgEAUgVIAagVIAagSIAbgOIAZgKQAUgHATgDIAPgCIhcA6IgXATQgPANgIAHQgOAOgHAHIgbAiIgfA1IgMAeg");
	this.shape_1.setTransform(91.2,91.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA9543").s().p("AANAnIgegFIgCAAIgSgEQgPgEgJgEIgVgLQgKgGgIgGQgFgEgHgJQgFgGgCgGIgDgJIAAgDIACADIAFAGIAJAJIAOAJIASAIIArALIAPADIABAAIABAAIBLAJIAUABQAUAAAKgBIAMgCIgKAGQgOAHgQADIgVAEIgXABIgHAAIgTAAg");
	this.shape_2.setTransform(147.8,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AA9543").s().p("AgYA7IgngKIgCgBIgCAAIgIgEIgQgIQgMgFgQgOIgLgLIgJgKQgHgLgEgMIgFgTIgBgQIAFAPIAPAZIARASIALAIQAKAGAQAIIAWAIIACABIAXAGIAQADIAQADIAQACIAQAAIAQAAIAfgCIAbgGQAhgIAVgMIgMALIgQAKQgKAHgMAFIgNAFIgPAFQgPAEgRABIgjACg");
	this.shape_3.setTransform(145.9,22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AA9543").s().p("AgHBPIgXgDQgHgBgmgKIgBgBIgBAAIgogSQgHgDgMgIIgRgMIgPgOIgMgNQgLgRgDgMQgDgJgCgQQABgKABgFIABgGIAAAGIACAPIAIAWQAFAKAMAOQANAMANAJIARAKIASAJIAnAPIAWAGIAVAEIAWADIAUABIAqgBIAogIIAigKIAcgLIALgGIAKgEIASgLIgDAEIgMAKQgJAIgLAHIgbAQQgSAIgRAGIgUAGIgrAIIgXABIgXgBg");
	this.shape_4.setTransform(142.8,34.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AA9543").s().p("AAoBnQgSgBgJgBIg5gMIgFgCIg/gZIgXgNQgYgQgOgOQgQgQgLgSIgJgSIgFgRQgDgOAAgOIACgSIABgGIAAAGIACASIACAMIALAcIAKAQQANARAPALQANALAYAOIAsAVIAYAIIANAFIABAAIAAAAIAEABIA2AMQAhAEAQgBIALAAIAXgCIAfgIIASgGQAPgHAQgJIAWgQIARgRIgDAFIgLAPQgJALgKAJQgQANgPAIIgTAJIgKAEIgXAHIgLACQgQADgJAAIgXABIgDAAg");
	this.shape_5.setTransform(140.2,46);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AA9543").s().p("AgUA2IgegFQgQgEgMgHQgPgJgGgOQgGgMADgNQABgKAGgKQADgGAGgHIAJgKIgGAMIgEAOQgDAJAAAJQAAAJAGAIQAFAJAKAEQAMAFAMACIAbADQAPABAKgCQAPgBAKgEQALgCALgGQAJgFAJgHQALgGAOgQIAHgLIgDANQgGAQgNAOQgQAUgbALQgNAFgQACIgSABIgMAAg");
	this.shape_6.setTransform(38.1,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AA9543").s().p("AgyAyQgUgDgMgGQgNgFgOgLQgMgLgFgMQgFgJgBgNQgBgKACgIIAEgOIAAAOQACAUAKAOQAHAJAJAGQAKAGAOAFQANAEAPACQAUACAKAAQAdAAAcgJQAYgGAZgOQAWgLALgIIAMgIIgJAMQgLAOgRANQgNAKgKAFQgNAIgOAFQgeAMgiAAQgRAAgQgDg");
	this.shape_7.setTransform(36.4,31.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AA9543").s().p("AhGAwQgTgDgNgHQgOgGgMgKQgSgOgHgVIgDgQIAHAOQAEAGAHAHQAGAFAMAIQALAGAMAFQAMADARACQAOABASgBQAQAAASgCQAPgCARgEQAUgEAMgEIAbgLIAZgMQAQgLAQgPIAMgLQgDAFgFAJQgKARgSAQQgMAJgMAIQgPAJgOAGQgSAHgQAEQgPAEgUADQgPACgUAAIgFAAQgOAAgQgCg");
	this.shape_8.setTransform(34.7,40.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AA9543").s().p("AhYA+QgLgBgSgGQgagLgLgPQgDgEgDgHIgBgFIADAEIAHAJQAIAFAIAEQAKAEAMADIAbADIAfAAIAigEIAfgGQAhgJAdgQIAxggQARgPANgPIAKgMQgBAFgFAKQgKATgPARQgLANgKAHQgMAMgOAJQgQAKgQAHQgRAIgSAEIgjAHIgkABQgMAAgVgDg");
	this.shape_9.setTransform(36.3,48.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhAAPQgbgGAAgJQAAgIAbgGQAbgGAlAAQAmAAAbAGQAbAGAAAIQAAAJgbAGQgbAGgmAAQglAAgbgGg");
	this.shape_10.setTransform(39.5,122.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhJAPQgfgGAAgJQAAgIAfgGQAegHArAAQArAAAfAHQAfAGAAAIQAAAJgfAGQgfAGgrAAQgqAAgfgGg");
	this.shape_11.setTransform(125,124.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221E1F").s().p("AhcglIC5gYIhqB7gAhNggIBABRIBWhkg");
	this.shape_12.setTransform(125.1,156.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6E7E7").s().p("AhTgiICngVIhgBvg");
	this.shape_13.setTransform(125,156.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221E1F").s().p("AigAnIglgFIgkgGIghgHIgfgIQgagHgbgKQgagKgNgHQgOgGgLgGIgIgFIAJADIBDARIA2AKQAVAEAqAEIARABIASABIAkACIAlAAIAngCIBPgFICbgPIBIgGIBBgGIBhgHIAcgCIAJAAIgjAJIk1A4IhPAJIhQAFIgdAAQgZAAgagBg");
	this.shape_14.setTransform(87.9,155);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D73A34").s().p("AgKCFQgOgsgEg6QgfgDgggIIgagJIgbgLIAbgKQAngPAygFQADgkAHgkIAIgeIAKglIALAlIAHAeQAIAkACAkQAzAFAnAPIAaAKIgaALQgnAPgzAFQgDA6gOAsIgLAlgAgEgSIgBAKIgLABQgbABgdAGQAYAGAgACIALABIABALQAAAYAEAfQAFgfABgYIAAgLIALgBQAggCAXgGQgdgGgagBIgLgBIAAgKQgBgYgFggQgEAgAAAYg");
	this.shape_15.setTransform(30.3,111.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9AC254").s().p("AgRAUQghgCgjgJIgbgJIAbgIQAjgIAhgDQADgnAHgnIAHggIAHAgQAJAnABAnQAjADAiAIIAcAIQgLAFgRAEQgiAJgjACQgCA+gPAwQgOgwgDg+g");
	this.shape_16.setTransform(30.3,111.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D73A34").s().p("AgKCpQgUg6gFhLQgwgDgugLQgdgHgLgEIgfgLIAfgKQAMgEAcgHQAugLAwgDQADgvALgvQAGgcAFgLIAKggIALAgQAEALAHAcQALAvAEAvQBKAFA7AUIAfAKIgfALQg7AUhKAFQgGBLgUA6IgLAggAgNgXIgBAKIgKABQgwACgxAKQA1AMAsACIAKAAIABALQACAsALA0QALgxACgvIABgLIALAAQAsgCA0gMQgwgKgwgCIgLgBIgBgKQgCgwgLgxQgLA0gCAtg");
	this.shape_17.setTransform(115.1,115);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9AC254").s().p("AgKB9QgMgygCgxQgygDgygLIgpgMIApgKQAygMAygCQACgyAMgyIAKgoIALAoQALAyADAyQAxACAzAMQAZAGAPAEQgPAGgZAGQgzALgxADQgDAxgLAyQgFAZgGAPQgEgPgGgZg");
	this.shape_18.setTransform(115.1,115);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#221E1F").s().p("AgEFCQgigDgdgNQgcgOgZgWIgcgdIgBgBIgBgCIgCgDIgJgNQgPgXgNgiQgJgVgIgnQgGgegDgeQgDgigBgZQgBgUABgoQABgiADgaIAai7IBvBWIAiAbIBCA4IAgAeIA6BCQANAOAOAVIAYAkIAeA7IAWA+QAFAaAAARQAAAcgIAQIAAAAIAAAAQgVAUgZASQgbATgYAMQgeAPgbAIQgaAHgbAAIgJAAgAi6j6IgCA6QgCA3ADA/IADA6QADAfADAZQAEAdAHAcQAHAcAJAZQAOAiALAPIAHALIADAFIAXAaQAWAUAVAMQAYAOAaAFQAyAKA8gVQAdgLAYgPQAagQAUgSQAIgRgBgYQgCgTgHgXIgSgmIgXgkIgMgSQgIgLgFgFIiMigIh6h6QgcgZgfgWg");
	this.shape_19.setTransform(33.6,104.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6E7E7").s().p("AiLDlQhKhdADjnQABhJAJhNIAIhAIBwBaQB/BvBRBrQBKBhAIBJQAFAlgLARQgxAvhDAZQgpAPgkAAQhVAAhBhRg");
	this.shape_20.setTransform(34.3,104.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#221E1F").s().p("AgDFXQgpgDgngKQghgJgqgRQgpgRgegSQglgVgegVQgjgZgagYIgBgBIABgBQALgYAPgaIAfgvIAggtIBJhWIAngoIBAg4IAXgRIAvgfQAOgJAigUIAzgZIA0gWIA0gUIA1gSIA2gRIA2gOIAGgCIABAHQAFA0ABAaQADAjABArQABBagJBDQgFApgJAlQgKArgNAhQgRAsgTAdIgLARIgMARIgcAeIgqAgIgFADIAAAAIgBAAIgBABIgUALQgnARgpAHIgpAFIgRAAIgXgBgAEjk7IgaAIIiAA3IgwAaIgwAcQgfATgOALIgWAPIhrBVIgoAmIgnAmIglApQgRARgUAZIhDBVQBAAqBGAgQAjAQAkAMQAoANAhAGQAmAIAkABQAjABAlgHQAlgIAfgOIARgJIADgCIAAAAIAAAAIAagSIANgLQAYgWAXgiQAQgYASgpQANgdALgqQAGgUALg1QAFgZAHgzQAEgjADgqQACgiAAgrQgBgugCgZQgbAGgUAHg");
	this.shape_21.setTransform(116.2,106);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E6E7E7").s().p("AivEeQhAgbg/gpIgygkQAXgnApg2QBThtBdhQQB+huCzhHQBagjBAgOIAFBPQAEBggKBXQgdEUiQBTQhGAohVAAQhYAAhpgtg");
	this.shape_22.setTransform(115.8,105.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FBE994").s().p("AgLE7QhZgMhMgzQg8goAGhTQAFhNA8hnQBBhwBahQQBUhLAyABQAiABAhBuQAhBuAHCCQAGBrgfBIQgdBHg5AUQglAOgvAAQgXAAgYgDg");
	this.shape_23.setTransform(139.7,31.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FBE994").s().p("AhtD2QgugggShjQgKgyAfhLQAchDAxhDQAxhBAsggQAwgjAVAUQAjAiARCuQAHBGAPAtQAOAqACAdQACAlg6AnQg6Ang/AJQgUADgRAAQgtAAgbgTg");
	this.shape_24.setTransform(35.9,33.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AE443F").s().p("AliKzQijg5h/hnQh+hohGiHQhHiLAAiZQAAiXBHiMQBGiHB+hnQB/hoCjg5QCqg7C4AAQC5AACqA7QCkA5B+BoQB+BnBFCHQBICMAACXQAACZhICLQhFCHh+BoQh+BnikA5QiqA7i5AAQi4AAiqg7g");
	this.shape_25.setTransform(91.2,107);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#83312B").s().p("ADtDoQgRgzhKg+QhJg9iogYQg1gHg4gDIgugBIDbhxIiIiyIAoAQQAwAWAvAZQCTBVBCBoQBCBpADBlQACAxgKAdQADgNgIgXg");
	this.shape_26.setTransform(227.1,56);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#83312B").s().p("AlyGeIBHgLQBmgTBVgcQBBgVAzgbQBDgiAsgqQA1g0AHg/QAFghgJgkQgEgTgGgRIgPgiIgKgSIgBgDIgBgBIgbgyIgohKQgthagUg8QgNgugCghQgDgwAQgeIALgQIAOgNIAcgVQAggTAfgFQAfgFAfAHQAZAFAbAMQAjAQApAcIBBApIgSgKIgwgdQg0gdgagKQgZgKgagFQgegFgcAGQgdAGgbASQgNAJgNAMIgCABIgBACIgDADIgFAGIgHAOQgMAbAGAnQAGAeAQAoQAYA4A0BSIBcCKIAVApQAMAbAFAPQAPAwgCAuQgBAZgFAXQgGAagJATQgQAlgiApQgwA4hOAxQg5AjhGAfQhZAmhuAeIhPATg");
	this.shape_27.setTransform(190,95.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,252.2,182), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(241,199,198,0)","rgba(241,199,198,0.694)","rgba(234,170,171,0.522)","rgba(228,137,143,0.314)","rgba(221,96,113,0.071)","rgba(219,81,105,0)"],[0,0.765,0.765,0.835,0.91,0.98,1],0,12.8,0,-12.8).s().p("EgurACAIAAj/MBbjAAAQAwAAAiAiQAiAiAAAwIAAAXQAAAwgiAiQgiAigwAAg");
	this.shape.setTransform(298.8,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(219,82,80,0)","rgba(222,102,93,0.106)","rgba(229,141,125,0.341)","rgba(236,172,158,0.541)","rgba(242,201,188,0.706)","rgba(247,223,214,0.835)","rgba(251,239,234,0.925)","rgba(254,250,248,0.98)","#FFFFFF","rgba(254,249,249,0.98)","rgba(251,239,237,0.922)","rgba(247,222,220,0.827)","rgba(241,199,198,0.694)","rgba(241,199,198,0)","rgba(0,0,0,0)"],[0,0.027,0.094,0.165,0.231,0.302,0.369,0.431,0.498,0.561,0.627,0.694,0.765,0.765,1],0,12.8,0,-12.8).s().p("EgurACAIAAj/MBbjAAAQAwAAAiAiQAiAiAAAwIAAAXQAAAwgiAiQgiAigwAAg");
	this.shape_1.setTransform(298.8,12.8);

	this.instance = new lib.Path_1_5();
	this.instance.parent = this;
	this.instance.setTransform(300.8,12.9,1,1,0,0,0,331,40.5);
	this.instance.shadow = new cjs.Shadow("rgba(237,180,167,1)",0,0,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-32,-29.6,669,89), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(241,199,198,0)","rgba(241,199,198,0.694)","rgba(234,170,171,0.522)","rgba(228,137,143,0.314)","rgba(221,96,113,0.071)","rgba(219,81,105,0)"],[0,0.765,0.765,0.835,0.91,0.98,1],0,-12.8,0,12.8).s().p("Egs3ACAQgwAAgigiQgigiAAgwIAAgXQAAgwAigiQAigiAwAAMBbjAAAIAAD/g");
	this.shape.setTransform(302.9,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(219,82,80,0)","rgba(222,102,93,0.106)","rgba(229,141,125,0.341)","rgba(236,172,158,0.541)","rgba(242,201,188,0.706)","rgba(247,223,214,0.835)","rgba(251,239,234,0.925)","rgba(254,250,248,0.98)","#FFFFFF","rgba(254,249,249,0.98)","rgba(251,239,237,0.922)","rgba(247,222,220,0.827)","rgba(241,199,198,0.694)","rgba(241,199,198,0)","rgba(0,0,0,0)"],[0,0.027,0.094,0.165,0.231,0.302,0.369,0.431,0.498,0.561,0.627,0.694,0.765,0.765,1],0,-12.8,0,12.8).s().p("Egs3ACAQgwAAgigiQgigiAAgwIAAgXQAAgwAigiQAigiAwAAMBbjAAAIAAD/g");
	this.shape_1.setTransform(302.9,12.8);

	this.instance = new lib.Path_1_0();
	this.instance.parent = this;
	this.instance.setTransform(300.8,12.9,1,1,0,0,0,331,40.5);
	this.instance.shadow = new cjs.Shadow("rgba(237,180,167,1)",0,0,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-32,-29.6,669,89), null);


(lib.sunlayer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sun
	this.instance = new lib.Symbol62();
	this.instance.parent = this;
	this.instance.setTransform(131.4,236,1,1,0,0,0,440.8,463.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:668.8,regY:553.8,rotation:1.3,x:360.2,y:329.8},0).wait(1).to({rotation:2.5,x:360.8,y:333.6},0).wait(1).to({rotation:3.8,x:361.3,y:337.3},0).wait(1).to({rotation:5.1,x:361.8,y:341.1},0).wait(1).to({rotation:6.3,x:362.1,y:344.7},0).wait(1).to({rotation:7.6,x:362.4,y:348.2},0).wait(1).to({rotation:8.9,x:362.5,y:351.8},0).wait(1).to({rotation:10.1,y:355.3},0).wait(1).to({rotation:11.4,y:358.7},0).wait(1).to({rotation:12.7,x:362.3,y:362},0).wait(1).to({rotation:13.9,x:362,y:365.2},0).wait(1).to({rotation:15.2,x:361.6,y:368.5},0).wait(1).to({rotation:16.5,x:361.2,y:371.6},0).wait(1).to({rotation:17.7,x:360.5,y:374.7},0).wait(1).to({rotation:19,x:359.9,y:377.7},0).wait(1).to({rotation:20.3,x:359.2,y:380.5},0).wait(1).to({rotation:21.5,x:358.3,y:383.4},0).wait(1).to({rotation:22.8,x:357.4,y:386.1},0).wait(1).to({rotation:24.1,x:356.3,y:388.7},0).wait(1).to({rotation:25.4,x:355.3,y:391.3},0).wait(1).to({rotation:26.6,x:354,y:393.8},0).wait(1).to({rotation:27.9,x:352.8,y:396.2},0).wait(1).to({rotation:29.2,x:351.4,y:398.5},0).wait(1).to({rotation:30.4,x:350,y:400.7},0).wait(1).to({rotation:31.7,x:348.6,y:402.8},0).wait(1).to({rotation:33,x:347,y:404.8},0).wait(1).to({rotation:34.2,x:345.3,y:406.7},0).wait(1).to({rotation:35.5,x:343.6,y:408.5},0).wait(1).to({rotation:36.8,x:341.8,y:410.2},0).wait(1).to({rotation:38,x:340,y:411.9},0).wait(1).to({rotation:39.3,x:338.1,y:413.3},0).wait(1).to({rotation:40.6,x:336.2,y:414.8},0).wait(1).to({rotation:41.8,x:334.2,y:416.1},0).wait(1).to({rotation:43.1,x:332.1,y:417.3},0).wait(1).to({rotation:44.4,x:330,y:418.4},0).wait(1).to({rotation:45.6,x:327.9,y:419.3},0).wait(1).to({rotation:46.9,x:325.7,y:420.2},0).wait(1).to({rotation:48.2,x:323.4,y:420.9},0).wait(1).to({rotation:49.4,x:321.5,y:422.5},0).wait(1).to({rotation:50.7,x:319.5,y:423.9},0).wait(1).to({rotation:52,x:317.5,y:425.2},0).wait(1).to({rotation:53.2,x:315.5,y:426.5},0).wait(1).to({rotation:54.5,x:313.4,y:427.5},0).wait(1).to({rotation:55.8,x:311.3,y:428.5},0).wait(1).to({rotation:57,x:309.2,y:429.3},0).wait(1).to({rotation:58.3,x:307.1,y:430.1},0).wait(1).to({rotation:59.6,x:304.8,y:430.6},0).wait(1).to({rotation:60.8,x:302.6,y:431.2},0).wait(1).to({rotation:62.1,x:300.4,y:431.6},0).wait(1).to({rotation:63.4,x:298.2,y:431.8},0).wait(1).to({rotation:64.6,x:296,y:431.9},0).wait(1).to({rotation:65.9,x:293.7},0).wait(1).to({rotation:67.2,x:291.5,y:431.8},0).wait(1).to({rotation:68.5,x:289.2,y:431.6},0).wait(1).to({rotation:69.7,x:287,y:431.3},0).wait(1).to({rotation:71,x:284.7,y:430.8},0).wait(1).to({rotation:72.3,x:282.5,y:430.2},0).wait(1).to({rotation:73.5,x:280.3,y:429.6},0).wait(1).to({rotation:74.8,x:278.1,y:428.7},0).wait(1).to({rotation:76.1,x:275.9,y:427.8},0).wait(1).to({rotation:77.3,x:273.7,y:426.7},0).wait(1).to({rotation:78.6,x:271.5,y:425.6},0).wait(1).to({rotation:79.9,x:269.3,y:424.3},0).wait(1).to({rotation:81.1,x:267.2,y:422.8},0).wait(1).to({rotation:82.4,x:265.1,y:421.3},0).wait(1).to({rotation:83.7,x:263,y:419.7},0).wait(1).to({rotation:84.9,x:261,y:417.9},0).wait(1).to({rotation:86.2,x:259,y:416},0).wait(1).to({rotation:87.5,x:257,y:414},0).wait(1).to({rotation:88.7,x:255.1,y:411.9},0).wait(1).to({rotation:90,x:253.2,y:409.7},0).wait(1).to({rotation:91.3,x:251.4,y:407.4},0).wait(1).to({rotation:92.5,x:249.6,y:404.9},0).wait(1).to({rotation:93.8,x:247.8,y:402.3},0).wait(1).to({rotation:95.1,x:246.1,y:399.7},0).wait(1).to({rotation:96.3,x:244.5,y:396.9},0).wait(1).to({rotation:97.6,x:242.9,y:394.1},0).wait(1).to({rotation:98.9,x:241.4,y:391.1},0).wait(1).to({rotation:100.1,x:239.9,y:388},0).wait(1).to({rotation:101.4,x:238.4,y:384.8},0).wait(1).to({rotation:102.7,x:237.1,y:381.6},0).wait(1).to({rotation:103.9,x:235.9,y:379.6},0).wait(1).to({rotation:105.2,x:234.6,y:377.5},0).wait(1).to({rotation:106.5,x:233.6,y:375.3},0).wait(1).to({rotation:107.7,x:232.5,y:373},0).wait(1).to({rotation:109,x:231.5,y:370.7},0).wait(1).to({rotation:110.3,x:230.7,y:368.3},0).wait(1).to({rotation:111.5,x:229.9,y:365.7},0).wait(1).to({rotation:112.8,x:229.2,y:363.1},0).wait(1).to({rotation:114.1,x:228.5,y:360.3},0).wait(1).to({rotation:115.4,x:228,y:357.6},0).wait(1).to({rotation:116.6,x:227.5,y:354.6},0).wait(1).to({rotation:117.9,x:227.1,y:351.7},0).wait(1).to({rotation:119.2,x:226.9,y:348.6},0).wait(1).to({rotation:120.4,x:226.7,y:345.5},0).wait(1).to({rotation:121.7,x:226.6,y:342.4},0).wait(1).to({rotation:123,y:339.1},0).wait(1).to({rotation:124.2,x:226.7,y:335.7},0).wait(1).to({rotation:125.5,x:226.9,y:332.3},0).wait(1).to({rotation:126.8,x:227.2,y:328.9},0).wait(1).to({rotation:128,x:227.6,y:325.3},0).wait(1).to({rotation:129.3,x:228.1,y:321.7},0).wait(1).to({rotation:130.6,x:228.7,y:318.1},0).wait(1).to({rotation:131.8,x:229.4,y:314.4},0).wait(1).to({rotation:133.1,x:230.3,y:310.7},0).wait(1).to({rotation:134.4,x:231.2,y:306.8},0).wait(1).to({rotation:135.6,x:232.2,y:303},0).wait(1).to({rotation:136.9,x:233.3,y:299.1},0).wait(1).to({rotation:138.2,x:234.6,y:295.1},0).wait(1).to({rotation:139.4,x:236,y:291.2},0).wait(1).to({rotation:140.7,x:237.5,y:287.1},0).wait(1).to({rotation:142,x:239.1,y:283},0).wait(1).to({rotation:143.2,x:240.8,y:279},0).wait(1).to({rotation:144.5,x:242.7,y:274.8},0).wait(1).to({rotation:145.8,x:244.6,y:270.7},0).wait(1).to({rotation:147,x:246.7,y:266.5},0).wait(1).to({rotation:148.3,x:248.9,y:262.3},0).wait(1).to({rotation:149.6,x:251.2,y:258.1},0).wait(1).to({rotation:150.8,x:253.6,y:253.8},0).wait(1).to({rotation:152.1,x:254.9,y:250.3},0).wait(1).to({rotation:153.4,x:256.5,y:246.9},0).wait(1).to({rotation:154.6,x:258.1,y:243.4},0).wait(1).to({rotation:155.9,x:259.9,y:239.9},0).wait(1).to({rotation:157.2,x:261.7,y:236.5},0).wait(1).to({rotation:158.5,x:263.7,y:233},0).wait(1).to({rotation:159.7,x:265.8,y:229.6},0).wait(1).to({rotation:161,x:268.1,y:226},0).wait(1).to({rotation:162.3,x:270.4,y:222.6},0).wait(1).to({rotation:163.5,x:272.8,y:219.1},0).wait(1).to({rotation:164.8,x:275.5,y:215.7},0).wait(1).to({rotation:166.1,x:278.1,y:212.2},0).wait(1).to({rotation:167.3,x:281,y:208.8},0).wait(1).to({rotation:168.6,x:283.9,y:205.4},0).wait(1).to({rotation:169.9,x:287,y:202},0).wait(1).to({rotation:171.1,x:290.2,y:198.6},0).wait(1).to({rotation:172.4,x:293.5,y:195.3},0).wait(1).to({rotation:173.7,x:296.9,y:192},0).wait(1).to({rotation:174.9,x:300.4,y:188.7},0).wait(1).to({rotation:176.2,x:304.1,y:185.5},0).wait(1).to({rotation:177.5,x:307.8,y:182.2},0).wait(1).to({rotation:178.7,x:311.7,y:179.1},0).wait(1).to({rotation:180,x:315.7,y:175.9},0).wait(1).to({rotation:181.3,x:319.7,y:172.9},0).wait(1).to({rotation:182.5,x:324,y:169.9},0).wait(1).to({rotation:183.8,x:328.3,y:166.9},0).wait(1).to({rotation:185.1,x:332.7,y:163.9},0).wait(1).to({rotation:186.3,x:337.3,y:161.1},0).wait(1).to({rotation:187.6,x:341.9,y:158.3},0).wait(1).to({rotation:188.9,x:346.6,y:155.5},0).wait(1).to({rotation:190.1,x:351.5,y:152.7},0).wait(1).to({rotation:191.4,x:356.4,y:150.1},0).wait(1).to({rotation:192.7,x:361.4,y:147.5},0).wait(1).to({rotation:193.9,x:366.6,y:145},0).wait(1).to({rotation:195.2,x:367.6,y:138.3},0).wait(1).to({rotation:196.5,x:368.6,y:131.8},0).wait(1).to({rotation:197.7,x:369.7,y:125.3},0).wait(1).to({rotation:199,x:370.9,y:118.8},0).wait(1).to({rotation:200.3,x:372.2,y:112.5},0).wait(1).to({rotation:201.5,x:373.7,y:106.2},0).wait(1).to({rotation:202.8,x:375.2,y:100},0).wait(1).to({rotation:204.1,x:376.8,y:93.9},0).wait(1).to({rotation:205.4,x:378.4,y:87.9},0).wait(1).to({rotation:206.6,x:380.1,y:82},0).wait(1).to({rotation:207.9,x:382,y:76.1},0).wait(1).to({rotation:209.2,x:383.9,y:70.4},0).wait(1).to({rotation:210.4,x:385.8,y:64.7},0).wait(1).to({rotation:211.7,x:387.8,y:59.1},0).wait(1).to({rotation:213,x:390,y:53.7},0).wait(1).to({rotation:214.2,x:392.2,y:48.3},0).wait(1).to({rotation:215.5,x:394.5,y:43},0).wait(1).to({rotation:216.8,x:396.8,y:37.9},0).wait(1).to({rotation:218,x:399.2,y:32.8},0).wait(1).to({rotation:219.3,x:401.7,y:27.9},0).wait(1).to({rotation:220.6,x:404.2,y:23},0).wait(1).to({rotation:221.8,x:406.7,y:18.2},0).wait(1).to({rotation:223.1,x:409.3,y:13.6},0).wait(1).to({rotation:224.4,x:412,y:9},0).wait(1).to({rotation:225.6,x:414.7,y:4.6},0).wait(1).to({rotation:226.9,x:417.4,y:0.2},0).wait(1).to({rotation:228.2,x:420.3,y:-3.9},0).wait(1).to({rotation:229.4,x:423.1,y:-8},0).wait(1).to({rotation:230.7,x:426,y:-12},0).wait(1).to({rotation:232,x:427,y:-14.9},0).wait(1).to({rotation:233.2,x:428,y:-17.8},0).wait(1).to({rotation:234.5,x:429.1,y:-20.5},0).wait(1).to({rotation:235.8,x:430.2,y:-23.1},0).wait(1).to({rotation:237,x:431.3,y:-25.5},0).wait(1).to({rotation:238.3,x:432.5,y:-28},0).wait(1).to({rotation:239.6,x:433.7,y:-30.2},0).wait(1).to({rotation:240.8,x:434.9,y:-32.3},0).wait(1).to({rotation:242.1,x:436.1,y:-34.4},0).wait(1).to({rotation:243.4,x:437.3,y:-36.2},0).wait(1).to({rotation:244.6,x:438.5,y:-38},0).wait(1).to({rotation:245.9,x:439.8,y:-39.6},0).wait(1).to({rotation:247.2,x:441,y:-41.1},0).wait(1).to({rotation:248.5,x:442.3,y:-42.6},0).wait(1).to({rotation:249.7,x:443.5,y:-43.9},0).wait(1).to({rotation:251,x:444.8,y:-45},0).wait(1).to({rotation:252.3,x:446,y:-46.1},0).wait(1).to({rotation:253.5,x:447.3,y:-47},0).wait(1).to({rotation:254.8,x:448.4,y:-47.8},0).wait(1).to({rotation:256.1,x:449.7,y:-48.5},0).wait(1).to({rotation:257.3,x:450.9,y:-49.1},0).wait(1).to({rotation:258.6,x:452,y:-49.6},0).wait(1).to({rotation:259.9,x:453.2,y:-49.9},0).wait(1).to({rotation:261.1,x:454.3,y:-50.1},0).wait(1).to({rotation:262.4,x:455.5,y:-50.2},0).wait(1).to({rotation:263.7,x:456.6},0).wait(1).to({rotation:264.9,x:457.6,y:-50.1},0).wait(1).to({rotation:266.2,x:458.6,y:-49.8},0).wait(1).to({rotation:267.5,x:459.6,y:-49.4},0).wait(1).to({rotation:268.7,x:460.5,y:-49},0).wait(1).to({rotation:270,x:461.5,y:-46.8},0).wait(1).to({rotation:271.3,x:462.4,y:-44.5},0).wait(1).to({rotation:272.5,x:463.3,y:-42},0).wait(1).to({rotation:273.8,x:464.1,y:-39.5},0).wait(1).to({rotation:275.1,x:465,y:-36.9},0).wait(1).to({rotation:276.3,x:465.6,y:-34.1},0).wait(1).to({rotation:277.6,x:466.3,y:-31.3},0).wait(1).to({rotation:278.9,x:467,y:-28.4},0).wait(1).to({rotation:280.1,x:467.6,y:-25.3},0).wait(1).to({rotation:281.4,x:468.1,y:-22.2},0).wait(1).to({rotation:282.7,x:468.5,y:-18.9},0).wait(1).to({rotation:283.9,x:468.8,y:-15.5},0).wait(1).to({rotation:285.2,x:469.2,y:-12.1},0).wait(1).to({rotation:286.5,x:469.4,y:-8.5},0).wait(1).to({rotation:287.7,x:469.5,y:-4.9},0).wait(1).to({rotation:289,x:469.6,y:-1.2},0).wait(1).to({rotation:290.3,y:2.6},0).wait(1).to({rotation:291.5,x:469.5,y:6.6},0).wait(1).to({rotation:292.8,x:469.3,y:10.6},0).wait(1).to({rotation:294.1,x:469.1,y:14.7},0).wait(1).to({rotation:295.4,x:468.7,y:18.8},0).wait(1).to({rotation:296.6,x:468.3,y:23.1},0).wait(1).to({rotation:297.9,x:467.8,y:27.5},0).wait(1).to({rotation:299.2,x:467.2,y:31.9},0).wait(1).to({rotation:300.4,x:466.5,y:36.3},0).wait(1).to({rotation:301.7,x:465.7,y:40.9},0).wait(1).to({rotation:303,x:464.8,y:45.6},0).wait(1).to({rotation:304.2,x:463.8,y:50.3},0).wait(1).to({rotation:305.5,x:462.8,y:55.1},0).wait(1).to({rotation:306.8,x:461.6,y:59.9},0).wait(1).to({rotation:308,x:460.3,y:64.8},0).wait(1).to({rotation:309.3,x:458.9,y:69.8},0).wait(1).to({rotation:310.6,x:457.4,y:74.8},0).wait(1).to({rotation:311.8,x:455.8,y:79.9},0).wait(1).to({rotation:313.1,x:455.4,y:85.9},0).wait(1).to({rotation:314.4,x:454.9,y:92.1},0).wait(1).to({rotation:315.6,x:454.3,y:98.3},0).wait(1).to({rotation:316.9,x:453.6,y:104.5},0).wait(1).to({rotation:318.2,x:452.7,y:110.8},0).wait(1).to({rotation:319.4,x:451.8,y:117.1},0).wait(1).to({rotation:320.7,x:450.7,y:123.5},0).wait(1).to({rotation:322,x:449.5,y:129.9},0).wait(1).to({rotation:323.2,x:448.3,y:136.3},0).wait(1).to({rotation:324.5,x:446.9,y:142.8},0).wait(1).to({rotation:325.8,x:445.4,y:149.3},0).wait(1).to({rotation:327,x:443.7,y:155.7},0).wait(1).to({rotation:328.3,x:442,y:162.3},0).wait(1).to({rotation:329.6,x:440,y:168.9},0).wait(1).to({rotation:330.8,x:438.1,y:175.5},0).wait(1).to({rotation:332.1,x:436,y:182.1},0).wait(1).to({rotation:333.4,x:433.8,y:188.8},0).wait(1).to({rotation:334.6,x:431.4,y:195.4},0).wait(1).to({rotation:335.9,x:428.9,y:202},0).wait(1).to({rotation:337.2,x:426.3,y:208.6},0).wait(1).to({rotation:338.5,x:423.6,y:215.3},0).wait(1).to({rotation:339.7,x:420.8,y:221.9},0).wait(1).to({rotation:341,x:417.8,y:228.6},0).wait(1).to({rotation:342.3,x:414.8,y:235.2},0).wait(1).to({rotation:343.5,x:411.6,y:241.8},0).wait(1).to({rotation:344.8,x:408.3,y:248.4},0).wait(1).to({rotation:346.1,x:404.9,y:255},0).wait(1).to({rotation:347.3,x:401.3,y:261.6},0).wait(1).to({rotation:348.6,x:397.7,y:268.2},0).wait(1).to({rotation:349.9,x:393.8,y:274.7},0).wait(1).to({rotation:351.1,x:389.9,y:281.2},0).wait(1).to({rotation:352.4,x:385.9,y:287.7},0).wait(1).to({rotation:353.7,x:381.8,y:294.2},0).wait(1).to({rotation:354.9,x:377.6,y:300.7},0).wait(1).to({rotation:356.2,x:373.2,y:307},0).wait(1).to({rotation:357.5,x:368.7,y:313.4},0).wait(1).to({rotation:358.7,x:364.1,y:319.7},0).wait(1).to({rotation:360,x:359.4,y:326},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.4,-227.8,1337.7,1107.6);


(lib.readyFight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{gotoFight:59});

	// timeline functions:
	this.frame_0 = function() {
		playSound("readyfight2");
	}
	this.frame_59 = function() {
		var canvas = this;
		
		canvas.parent.gotoAndPlay("page2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// fight
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(-360,646.5,1,1,0,0,0,210.6,59.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).wait(1).to({scaleX:1.02,scaleY:1.01,alpha:0.478},0).wait(1).to({scaleX:1.04,scaleY:1.02,alpha:0.777},0).wait(1).to({scaleX:1.06,scaleY:1.04,alpha:0.946},0).wait(1).to({scaleX:1.07,scaleY:1.05,alpha:1},0).wait(1).to({scaleX:1.09,scaleY:1.06},0).wait(1).to({scaleX:1.11,scaleY:1.07},0).wait(1).to({scaleX:1.12,scaleY:1.08},0).wait(1).to({scaleX:1.14,scaleY:1.1},0).wait(1).to({scaleX:1.15,scaleY:1.11},0).wait(1).to({scaleX:1.16,scaleY:1.12},0).wait(1).to({scaleX:1.18,scaleY:1.13},0).wait(1).to({scaleX:1.19,scaleY:1.14},0).wait(1).to({scaleX:1.2,scaleY:1.16},0).wait(1).to({scaleX:1.21,scaleY:1.17},0).wait(1).to({scaleX:1.22,scaleY:1.18},0).wait(1).to({scaleX:1.23,scaleY:1.19},0).wait(1).to({scaleX:1.24,scaleY:1.2},0).wait(1).to({scaleX:1.24,scaleY:1.21},0).wait(1).to({scaleX:1.25,scaleY:1.23},0).wait(1).to({scaleX:1.25,scaleY:1.24},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.24,scaleY:1.21},0).wait(1).to({scaleX:1.23,scaleY:1.18},0).wait(1).to({scaleX:1.2,scaleY:1.14},0).wait(1).to({scaleX:1.17,scaleY:1.11,alpha:0.945},0).wait(1).to({scaleX:1.12,scaleY:1.07,alpha:0.775},0).wait(1).to({scaleX:1.07,scaleY:1.04,alpha:0.475},0).wait(1).to({scaleX:1,scaleY:1,alpha:0},0).wait(1));

	// FlashAICB
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-352.8,647.2,0.99,0.99,0,0,0,224.8,60.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:227.3,regY:61,scaleX:1.02,scaleY:1.02,x:-350.2,y:647.3,alpha:0.473},0).wait(1).to({scaleX:1.04,scaleY:1.06,x:-350.1,alpha:0.732},0).wait(1).to({scaleX:1.07,scaleY:1.09,y:647.4,alpha:0.885},0).wait(1).to({scaleX:1.09,scaleY:1.12,x:-350,alpha:0.966},0).wait(1).to({scaleX:1.11,scaleY:1.14,alpha:0.99},0).wait(1).to({scaleX:1.13,scaleY:1.17,x:-349.9},0).wait(1).to({scaleX:1.15,scaleY:1.19},0).wait(1).to({scaleX:1.17,scaleY:1.22,x:-349.8},0).wait(1).to({scaleX:1.18,scaleY:1.24},0).wait(1).to({scaleX:1.2,scaleY:1.26},0).wait(1).to({scaleX:1.21,scaleY:1.27,x:-349.7},0).wait(1).to({scaleX:1.22,scaleY:1.29},0).wait(1).to({scaleX:1.23,scaleY:1.31,x:-349.6},0).wait(1).to({scaleX:1.24,scaleY:1.32},0).wait(1).to({scaleX:1.25,scaleY:1.33},0).wait(1).to({scaleX:1.26,scaleY:1.34},0).wait(1).to({scaleX:1.26,scaleY:1.35},0).wait(1).to({scaleX:1.27,scaleY:1.36},0).wait(1).to({scaleX:1.27,scaleY:1.37,x:-349.5},0).wait(1).to({scaleX:1.28,scaleY:1.37},0).wait(1).to({scaleY:1.37,x:-349.6},0).wait(1).to({scaleX:1.27,scaleY:1.37},0).wait(1).to({scaleX:1.26,scaleY:1.36},0).wait(1).to({scaleX:1.25,scaleY:1.34},0).wait(1).to({scaleX:1.23,scaleY:1.32,x:-349.7,alpha:0.972},0).wait(1).to({scaleX:1.2,scaleY:1.28,alpha:0.912},0).wait(1).to({scaleX:1.17,scaleY:1.24,x:-349.8,alpha:0.805},0).wait(1).to({scaleX:1.12,scaleY:1.18,x:-349.9,alpha:0.637},0).wait(1).to({scaleX:1.07,scaleY:1.1,x:-350.1,alpha:0.39},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:-350.3,y:647.3,alpha:0},0).to({_off:true},1).wait(29));

	// Layer 3
	this.instance_2 = new lib.Path_9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-372,671.2,1,1,0,0,0,382.2,671.2);
	this.instance_2.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({_off:true},1).wait(4));

	// Ready
	this.instance_3 = new lib.Path_9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-372,671.2,1,1,0,0,0,382.2,671.2);
	this.instance_3.alpha = 0.66;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.22},0).wait(1).to({alpha:0},0).wait(1));

	// Ready
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgHQAHgFAHgDQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape.setTransform(-551.1,772.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVCWQgKgBgIgGQgHgFgEgIQgFgJAAgOIABgFIACgIIAdAAQABAPAFAGQAFAGALAAIAIgBQAFgCADgEQAEgDACgHQABgHAAgKIAAgkQgFAHgJAFQgIAGgNAAIgJgBIgKgDQgGgDgFgFQgGgGgEgJQgEgJgCgNQgDgOAAgTIAAg8QAAgTADgMQACgNAEgKQAEgIAGgFQAFgFAGgCIAKgEIAKgBQAIAAAGADQAGACAFADIAIAIIAGAJIADgWIAhAAIAADaQAAATgEAQQgDAPgIALQgIALgMAGQgMAFgQAAQgLAAgKgCgAgHh4QgFADgCAEQgDAFgCAHIgBAVIAABMIABATQACAJADAEQACAFAFABIAHACIAHgBIAGgEIAFgFIADgGIAAh8QgDgIgFgEQgGgFgHAAg");
	this.shape_1.setTransform(-567.3,775.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAGIgHAKIgGANQgCAGAAAJQAAAMAFAJQAFAHAKABQAGgBAFgCIAIgHIAAhHg");
	this.shape_2.setTransform(-583.6,772.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_3.setTransform(-598.5,769.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgjDAB4QgyAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAyAAMBGHAAAQAyAAAjAjQAjAjAAAxQAAAxgjAkQgjAjgyAAgEgj8gA3QgXAXAAAgQAAAhAXAXQAYAYAhAAMBGHAAAQAiAAAXgYQAXgXAAghQAAgggXgXQgXgYgiAAMhGHAAAQghAAgYAYg");
	this.shape_4.setTransform(-373.3,813.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgimAAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAMBFNAAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape_5.setTransform(-373.1,809.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.459)").s().p("EgjDABkQgpAAgegdQgdgeAAgpQAAgoAdgdQAegeApAAMBGHAAAQAqAAAdAeQAdAdAAAoQAAApgdAeQgdAdgqAAg");
	this.shape_6.setTransform(-373.3,813.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-754.2,0,764.4,1342.4);


(lib.Path_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(153,26.3,1,1,0,0,0,153,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:154},0).wait(1).to({x:155.1},0).wait(1).to({x:156.1},0).wait(1).to({x:157.2},0).wait(1).to({x:158.2},0).wait(1).to({x:159.2},0).wait(1).to({x:160.3},0).wait(1).to({x:161.3},0).wait(1).to({x:162.4},0).wait(1).to({x:163.4},0).wait(1).to({x:164.4},0).wait(1).to({x:165.5},0).wait(1).to({x:166.5},0).wait(1).to({x:167.6},0).wait(1).to({x:168.6},0).wait(1).to({x:169.6},0).wait(1).to({x:170.7},0).wait(1).to({x:171.7},0).wait(1).to({x:172.8},0).wait(1).to({x:173.8},0).wait(1).to({x:174.8},0).wait(1).to({x:175.9},0).wait(1).to({x:176.9},0).wait(1).to({x:178},0).wait(1).to({x:179},0).wait(1).to({x:180},0).wait(1).to({x:181.1},0).wait(1).to({x:182.1},0).wait(1).to({x:183.2},0).wait(1).to({x:184.2},0).wait(1).to({x:185.2},0).wait(1).to({x:186.3},0).wait(1).to({x:187.3},0).wait(1).to({x:188.4},0).wait(1).to({x:189.4},0).wait(1).to({x:190.4},0).wait(1).to({x:191.5},0).wait(1).to({x:192.5},0).wait(1).to({x:193.6},0).wait(1).to({x:194.6},0).wait(1).to({x:195.6},0).wait(1).to({x:196.7},0).wait(1).to({x:197.7},0).wait(1).to({x:198.8},0).wait(1).to({x:199.8},0).wait(1).to({x:200.8},0).wait(1).to({x:201.9},0).wait(1).to({x:202.9},0).wait(1).to({x:204},0).wait(1).to({x:205},0).wait(1).to({x:203.9},0).wait(1).to({x:202.8},0).wait(1).to({x:201.8},0).wait(1).to({x:200.7},0).wait(1).to({x:199.6},0).wait(1).to({x:198.5},0).wait(1).to({x:197.4},0).wait(1).to({x:196.3},0).wait(1).to({x:195.3},0).wait(1).to({x:194.2},0).wait(1).to({x:193.1},0).wait(1).to({x:192},0).wait(1).to({x:190.9},0).wait(1).to({x:189.8},0).wait(1).to({x:188.8},0).wait(1).to({x:187.7},0).wait(1).to({x:186.6},0).wait(1).to({x:185.5},0).wait(1).to({x:184.4},0).wait(1).to({x:183.3},0).wait(1).to({x:182.3},0).wait(1).to({x:181.2},0).wait(1).to({x:180.1},0).wait(1).to({x:179},0).wait(1).to({x:177.9},0).wait(1).to({x:176.8},0).wait(1).to({x:175.8},0).wait(1).to({x:174.7},0).wait(1).to({x:173.6},0).wait(1).to({x:172.5},0).wait(1).to({x:171.4},0).wait(1).to({x:170.3},0).wait(1).to({x:169.3},0).wait(1).to({x:168.2},0).wait(1).to({x:167.1},0).wait(1).to({x:166},0).wait(1).to({x:164.9},0).wait(1).to({x:163.8},0).wait(1).to({x:162.8},0).wait(1).to({x:161.7},0).wait(1).to({x:160.6},0).wait(1).to({x:159.5},0).wait(1).to({x:158.4},0).wait(1).to({x:157.3},0).wait(1).to({x:156.3},0).wait(1).to({x:155.2},0).wait(1).to({x:154.1},0).wait(1).to({x:153},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,306,52.6);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(195.2,33.5,1,1,0,0,0,195.2,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:195.3,x:193.9},0).wait(1).to({x:192.5},0).wait(1).to({x:191.1},0).wait(1).to({x:189.7},0).wait(1).to({x:188.2},0).wait(1).to({x:186.8},0).wait(1).to({x:185.4},0).wait(1).to({x:184},0).wait(1).to({x:182.5},0).wait(1).to({x:181.1},0).wait(1).to({x:179.7},0).wait(1).to({x:178.3},0).wait(1).to({x:176.9},0).wait(1).to({x:175.4},0).wait(1).to({x:174},0).wait(1).to({x:172.6},0).wait(1).to({x:171.2},0).wait(1).to({x:169.7},0).wait(1).to({x:168.3},0).wait(1).to({x:166.9},0).wait(1).to({x:165.5},0).wait(1).to({x:164.1},0).wait(1).to({x:162.6},0).wait(1).to({x:161.2},0).wait(1).to({x:159.8},0).wait(1).to({x:158.4},0).wait(1).to({x:156.9},0).wait(1).to({x:155.5},0).wait(1).to({x:154.1},0).wait(1).to({x:152.7},0).wait(1).to({x:151.3},0).wait(1).to({x:149.8},0).wait(1).to({x:148.4},0).wait(1).to({x:147},0).wait(1).to({x:145.6},0).wait(1).to({x:144.1},0).wait(1).to({x:142.7},0).wait(1).to({x:141.3},0).wait(1).to({x:139.9},0).wait(1).to({x:138.5},0).wait(1).to({x:137},0).wait(1).to({x:135.6},0).wait(1).to({x:134.2},0).wait(1).to({x:132.8},0).wait(1).to({x:131.3},0).wait(1).to({x:132.8},0).wait(1).to({x:134.3},0).wait(1).to({x:135.8},0).wait(1).to({x:137.3},0).wait(1).to({x:138.8},0).wait(1).to({x:140.3},0).wait(1).to({x:141.8},0).wait(1).to({x:143.3},0).wait(1).to({x:144.7},0).wait(1).to({x:146.2},0).wait(1).to({x:147.7},0).wait(1).to({x:149.2},0).wait(1).to({x:150.7},0).wait(1).to({x:152.2},0).wait(1).to({x:153.7},0).wait(1).to({x:155.2},0).wait(1).to({x:156.7},0).wait(1).to({x:158.1},0).wait(1).to({x:159.6},0).wait(1).to({x:161.1},0).wait(1).to({x:162.6},0).wait(1).to({x:164.1},0).wait(1).to({x:165.6},0).wait(1).to({x:167.1},0).wait(1).to({x:168.6},0).wait(1).to({x:170},0).wait(1).to({x:171.5},0).wait(1).to({x:173},0).wait(1).to({x:174.5},0).wait(1).to({x:176},0).wait(1).to({x:177.5},0).wait(1).to({x:179},0).wait(1).to({x:180.5},0).wait(1).to({x:182},0).wait(1).to({x:183.4},0).wait(1).to({x:184.9},0).wait(1).to({x:186.4},0).wait(1).to({x:187.9},0).wait(1).to({x:189.4},0).wait(1).to({x:190.9},0).wait(1).to({x:192.4},0).wait(1).to({x:193.9},0).wait(1).to({x:195.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390.6,67.1);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlIFJQiIiJAAjAQAAjACIiIQCJiIC/AAQDAAACICIQCICIAADAQAADAiICJQiICIjAAAQi/AAiJiIg");
	mask_1.setTransform(46.5,46.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F1F2").s().p("AhBBHQgbgQgPgbIARgKQANAWAWANQAWANAaAAQAnAAAcgcQAcgbAAgnQgBgagNgWIASgKQAQAbAAAfQAAAvgiAiQghAigwAAQgfAAgbgQg");
	this.shape.setTransform(69.9,69);

	this.instance = new lib.Path_1_0_1();
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
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(48.5,44.7,41.3,42.9), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AlIFJQiIiIAAjBQAAi/CIiJQCIiIDAAAQDBAACHCIQCICJAAC/QAADBiICIQiHCIjBAAQjAAAiIiIg");
	mask_3.setTransform(77.3,55.3);

	// Layer 3
	this.instance = new lib.Path_4_2();
	this.instance.parent = this;
	this.instance.setTransform(96.1,79.2,1,1,0,0,0,16.9,13.5);
	this.instance.alpha = 0.289;

	this.instance_1 = new lib.Path_1_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(58.8,79.2,1,1,0,0,0,16.9,13.5);
	this.instance_1.alpha = 0.289;

	this.instance_2 = new lib.Path_2_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(96.1,48.5,1,1,0,0,0,16.9,13.5);
	this.instance_2.alpha = 0.289;

	this.instance_3 = new lib.Path_3_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(58.8,48.5,1,1,0,0,0,16.9,13.5);
	this.instance_3.alpha = 0.289;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#67B9A5").s().p("AmPEzIAAplIMgAAIAAJlg");
	this.shape_8.setTransform(77.5,66.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9DD88").s().p("ArjLkIAA3HIXHAAIAAXHg");
	this.shape_9.setTransform(74,74);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(30.8,8.9,92.9,93), null);


(lib.fire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BB5062","#BD5665","#C3676D","#CE817A","#DFA590","#E6B499"],[0,0.133,0.341,0.6,0.894,1],0,-26,0,26).s().p("AhXDnQgkgggWg5QgTgwAWhiIAahZIgCAnQAAAuAQAlQAPAmARAQQAJAJAFAAQgKgbgEgjQgJhHAdgqQAdgrgEhHIgKg+IAkAUQAmAeAKAvQAGAggGAZQgJAgAAAMQABAVAMAQQAGAIAGAEQAIgGAIgJQARgUACgUQACgQgBgeIgCgaIAYAmQAaArADAcQAHArgOBLQgPBPgXAeQgbAigUANQgZAOgrACIgFAAQgnAAgjgdg");
	this.shape.setTransform(-366,40.4);

	this.instance = new lib.Image_1_1();
	this.instance.parent = this;
	this.instance.setTransform(-365.9,40.4,1,1,0,0,0,45.6,56.1);
	this.instance.alpha = 0.75;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7575B").s().p("Ah1E+QgxgrgehPQgYhCAdiIIAih7IgDA2QACBAAUAzQAVA0AXAXQAMALAHABQgOgmgFgxQgMhhAmg6QAng6gFhiIgNhXIAxAcQA0ApAMBBQAJAsgJAiQgLArAAASQAAAdARAWQAIAMAIAFQALgIALgNQAWgbAEgcQADgWgDgpIgDglIAhA0QAiA8AGAnQAIA7gTBoQgUBtgfAqQgjAvgcARQgiAVg6ACIgGAAQg2AAgugpg");
	this.shape_1.setTransform(-367.3,23.5);

	this.instance_1 = new lib.Image_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-367.2,23.5,1,1,0,0,0,51,66);
	this.instance_1.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]},8).to({state:[]},2).wait(8));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BB5062","#BD5665","#C3676D","#CE817A","#DFA590","#E6B499"],[0,0.133,0.341,0.6,0.894,1],0,-21.2,0,21.2).s().p("AgMDUQgfAAgcgaQgcgagSgvQgKgYAFgwQAdA7AhAEIAxAGIgRguQgLgegCglQgEg0AUgdQAggygDhNQALAQAEAVQAEASgBAMQAAAHgEANQgIAYAAAVQABAfARAYQAKAMALAHIARAKIARgLQAGgEAJgJQAPgQAIgRIACAIQAFAmgNBGQgNBJgTAYQgWAdgQAJQgTAMgjABg");
	this.shape_2.setTransform(-365.7,47.7);

	this.instance_2 = new lib.Image_1_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-365.6,47.8,1,1,0,0,0,42.7,51.5);
	this.instance_2.alpha = 0.75;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7575B").s().p("AhmEUQgogmgahEQgSgvAQhiIAEALQAYA7AcAbQARARASADIAwAGIgRguQgMgjgFgsQgLhXAhgyQAwhLgMh8QAiAhAJAvQAFAagBASQgBAMgGATQgJAiAAAZQABAhARAbQAMAVARALIASAKIAQgLQAwgmAKgwQAKAXADASQAHA2gSBkQgSBmgbAkQggAqgWAOQgcARgyACIgFAAQgtAAgogmg");
	this.shape_3.setTransform(-367,30.5);

	this.instance_3 = new lib.Image_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-367,30.6,1,1,0,0,0,48,61.6);
	this.instance_3.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_3},{t:this.instance_2},{t:this.shape_2}]},6).to({state:[]},2).to({state:[{t:this.instance_3},{t:this.shape_3},{t:this.instance_2},{t:this.shape_2}]},2).to({state:[]},2).wait(6));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BB5062","#BD5665","#C3676D","#CE817A","#DFA590","#E6B499"],[0,0.133,0.341,0.6,0.894,1],0,-14.2,0,14.3).s().p("AgvB+QgUgRgMgfQgKgaAMg2IAOgxIgCAVQABAaAIAUQAJAUAJAJQAFAFADAAQgGgPgCgTQgFgmAQgXQAPgYgCgnIgFgiIATALQAVAQAGAaQADASgDANQgFARAAAIQAAASAOAJQARgNACgSQABgIgBgRIgBgOIAOAVQAOAXACAPQADAYgIApQgIArgNARQgOATgLAGQgOAJgXAAIgCABQgWAAgTgRg");
	this.shape_4.setTransform(-365.9,54.8);

	this.instance_4 = new lib.Image_1_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-365.9,54.9,1,1,0,0,0,38.5,44.4);
	this.instance_4.alpha = 0.75;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7575B").s().p("Ag/CuQgbgXgRgsQgNgkAQhKIAThEIgCAeQABAjALAcQAMAcAMANQAGAGAEAAQgHgUgDgbQgHg1AVggQAWgggDg2IgHgvIAaAPQAcAXAHAjQAFAZgFASQgGAYAAAKQAAAQAJAMQAFAGAEADQAGgEAGgIQAMgOACgQQACgMgBgXIgCgUIASAdQATAhADAVQAEAggKA5QgLA8gRAXQgTAagPAJQgTALgfACIgDAAQgeAAgZgXg");
	this.shape_5.setTransform(-366.7,45.6);

	this.instance_5 = new lib.Image_6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-366.7,45.7,1,1,0,0,0,41.5,49.9);
	this.instance_5.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.shape_5},{t:this.instance_4},{t:this.shape_4}]},4).to({state:[]},2).to({state:[{t:this.instance_5},{t:this.shape_5},{t:this.instance_4},{t:this.shape_4}]},6).to({state:[]},2).wait(4));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#BB5062","#BD5665","#C3676D","#CE817A","#DFA590","#E6B499"],[0,0.133,0.341,0.6,0.894,1],0,-9,0,9.1).s().p("AgdBQQgNgLgIgUQgGgQAHgiIAJgfIAAANQAAARAFAMQAJAVAHABQgDgKgCgMQgDgYAKgOQAKgPgBgZIgDgWIALAHQAOALADAQQACALgCAJQgDAKAAAFQAAAMAJAFQAKgIACgLIgBgZIAJANQAJAPABAKQACAOgFAaQgFAcgIAKQgJAMgHAEQgJAGgOAAIgBABQgOAAgMgLg");
	this.shape_6.setTransform(-366,60.1);

	this.instance_6 = new lib.Image_1_4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-366,60.1,1,1,0,0,0,35.5,39.1);
	this.instance_6.alpha = 0.75;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D7575B").s().p("AgoBuQgRgPgKgbQgJgXAKgvIAMgrIgBATQABAXAHARQAHASAIAIQAEAEACAAQgEgNgCgRQgEghANgVQANgUgBgiIgFgeIAQAKQASAOAFAXQADAPgDAMQgEAPAAAGQAAAQALAHQAPgKACgQQABgIgBgOIgBgNIAMASQALAVACAOQADAUgHAkQgGAmgLAOQgMAQgKAGQgMAIgTAAIgDABQgSAAgQgPg");
	this.shape_7.setTransform(-366.4,54.2);

	this.instance_7 = new lib.Image_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-366.2,54.4,1,1,0,0,0,37.5,42.7);
	this.instance_7.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.shape_7},{t:this.instance_6},{t:this.shape_6}]},2).to({state:[]},2).to({state:[{t:this.instance_7},{t:this.shape_7},{t:this.instance_6},{t:this.shape_6}]},10).to({state:[]},2).wait(2));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#BB5062","#BD5665","#C3676D","#CE817A","#DFA590","#E6B499"],[0,0.133,0.341,0.6,0.894,1],0,-13.1,0,13.1).s().p("AgrB0QgSgQgMgdQgJgYALgxIANgtIgBAUQAAAXAIASQAIATAJAIQAEAFACAAQgEgOgCgSQgFgiAOgWQAOgVgBgkIgFgfIASAKQATAPAEAXQADAQgDANQgDAPAAAHQAAARAMAIQAQgLACgRQAAgIAAgPIgBgNIAMATQANAWACAOQADAVgHAmQgHAogMAPQgNARgLAGQgMAIgVABIgDAAQgUAAgRgPg");
	this.shape_8.setTransform(-366,56);

	this.instance_8 = new lib.Image_1_5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-365.9,56.1,1,1,0,0,0,37.8,43.2);
	this.instance_8.alpha = 0.75;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D7575B").s().p("AgQA4QgLAAgOgQIA2AGQgGAFgFACQgEABgNACgAABgcQgEgNgCgOQAGAHAIAHIAdASIAEgDQgIAtgJANIgCABg");
	this.shape_9.setTransform(-365.8,55.1);

	this.instance_9 = new lib.Image_8();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-365.6,55.2,1,1,0,0,0,34.5,35.8);
	this.instance_9.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.shape_9},{t:this.instance_8},{t:this.shape_8}]}).to({state:[{t:this.instance_9},{t:this.shape_9},{t:this.instance_8},{t:this.shape_8}]},1).to({state:[]},1).to({state:[{t:this.instance_9},{t:this.shape_9},{t:this.instance_8},{t:this.shape_8}]},14).to({state:[{t:this.instance_9},{t:this.shape_9},{t:this.instance_8},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.7,12.9,75.6,86.4);


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


(lib.centerflash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,253,239,0.725)","rgba(255,253,231,0.569)","rgba(249,228,210,0.494)","rgba(235,172,165,0.306)","rgba(219,85,107,0.008)","rgba(219,81,105,0)"],[0,0.337,0.498,0.561,0.69,0.878,0.882],0,0,0,0,0,257).s().p("EgPoAlAQnNjDljlkQlklkjDnNQjKndAAoLQAAoKDKndQDDnNFklkQFjlkHNjDQHejKIKAAQILAAHdDKQHNDDFkFkQFkFkDDHNQDKHdAAIKQAAILjKHdQjDHNlkFkQlkFknNDDQndDKoLAAQoKAAnejKg");
	this.shape.setTransform(257,257);

	this.instance = new lib.Path_1_1_1();
	this.instance.parent = this;
	this.instance.setTransform(257.1,257,1,1,0,0,0,190.8,190.7);
	this.instance.shadow = new cjs.Shadow("rgba(237,180,167,1)",0,0,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.centerflash, new cjs.Rectangle(0,0,514,514), null);


(lib.bloodbar6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvoB4QgyAAgigjQgkgjABgyQgBgxAkgjQAigjAyAAIfQAAQAyAAAkAjQAiAjABAxQgBAygiAjQgkAjgyAAgAwgg4QgXAYgBAgQABAhAXAYQAYAXAgAAIfQAAQAiAAAXgXQAXgYAAghQAAgggXgYQgXgXgiAAI/QAAQggAAgYAXg");
	this.shape.setTransform(112.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfQAAQAqAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgqAAg");
	mask.setTransform(47.1,11);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvPAMQgGAAgCgEQgEgDAAgFIAAAAQAAgEAEgDQACgEAGAAIegAAQAEAAAEAEQADADAAAEIAAAAQAAAFgDADQgEAEgEAAg");
	this.shape_1.setTransform(112.1,7.1);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#733A44").s().p("Aw2AUIAAgnMAhuAAAIAAAng");
	this.shape_2.setTransform(112.4,18);

	this.instance = new lib.Path_3_4();
	this.instance.parent = this;
	this.instance.setTransform(112,12,1,1,0,0,0,110,10);
	this.instance.alpha = 0.66;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfRAAQApAAAdAdQAdAeABAoQgBAqgdAdQgdAdgpAAg");
	this.shape_3.setTransform(112.1,12);

	var maskedShapeInstanceList = [this.shape_2,this.instance,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance},{t:this.shape_2}]}).wait(1));

	// Layer 10
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221E1F").s().p("AvnBkQgpAAgegdQgdgdAAgqQAAgoAdgeQAegdApAAIfPAAQAqAAAdAdQAeAegBAoQABAqgeAdQgdAdgqAAg");
	this.shape_4.setTransform(112.8,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.bloodbar6, new cjs.Rectangle(0,0,224.1,24), null);


(lib.bloodbar5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvoB4QgyAAgigjQgkgjABgyQgBgxAkgjQAigjAyAAIfQAAQAyAAAkAjQAiAjABAxQgBAygiAjQgkAjgyAAgAwgg4QgXAYgBAgQABAhAXAYQAYAXAgAAIfQAAQAiAAAXgXQAXgYAAghQAAgggXgYQgXgXgiAAI/QAAQggAAgYAXg");
	this.shape.setTransform(112.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvoBkQgoAAgegdQgegdABgqQgBgoAegeQAegdAoAAIfQAAQAqAAAdAdQAdAeAAAoQAAAqgdAdQgdAdgqAAg");
	mask.setTransform(73.1,12);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvPAMQgGAAgCgEQgEgDAAgFIAAAAQAAgEAEgDQACgEAGAAIegAAQAEAAAEAEQADADAAAEIAAAAQAAAFgDADQgEAEgEAAg");
	this.shape_1.setTransform(112.1,7.1);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#733A44").s().p("Aw2AUIAAgnMAhuAAAIAAAng");
	this.shape_2.setTransform(112.4,18);

	this.instance = new lib.Path_3_4();
	this.instance.parent = this;
	this.instance.setTransform(112,12,1,1,0,0,0,110,10);
	this.instance.alpha = 0.66;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfRAAQApAAAdAdQAdAeABAoQgBAqgdAdQgdAdgpAAg");
	this.shape_3.setTransform(112.1,12);

	var maskedShapeInstanceList = [this.shape_2,this.instance,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance},{t:this.shape_2}]}).wait(1));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221E1F").s().p("AvnBkQgpAAgegdQgdgdAAgqQAAgoAdgeQAegdApAAIfPAAQAqAAAdAdQAeAegBAoQABAqgeAdQgdAdgqAAg");
	this.shape_4.setTransform(112.8,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.bloodbar5, new cjs.Rectangle(0,0,224.1,24), null);


(lib.bloodbar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
		this.parent.parent.gotoAndPlay("page8");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(7));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvoB4QgyAAgigjQgkgjABgyQgBgxAkgjQAigjAyAAIfQAAQAyAAAkAjQAiAjABAxQgBAygiAjQgkAjgyAAgAwgg4QgXAYgBAgQABAhAXAYQAYAXAgAAIfQAAQAiAAAXgXQAXgYAAghQAAgggXgYQgXgXgiAAI/QAAQggAAgYAXg");
	this.shape.setTransform(112.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvoBuQgoAAgegdQgegdABgqQgBgoAegeQAegdAoAAIfQAAQAqAAAdAdQAdAeAAAoQAAAqgdAdQgdAdgqAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AvnBuQgpAAgegdQgdgdAAgqQAAgoAdgeQAegdApAAIfPAAQAqAAAdAdQAeAegBAoQABAqgeAdQgdAdgqAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AvnBuQgqAAgdgdQgegdAAgqQAAgoAegeQAdgdAqAAIfQAAQApAAAdAdQAdAeAAAoQAAAqgdAdQgdAdgpAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfRAAQApAAAdAdQAdAeABAoQgBAqgdAdQgdAdgpAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfQAAQAqAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgqAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AvnBuQgpAAgegdQgegdABgqQgBgoAegeQAegdApAAIfPAAQAqAAAdAdQAdAeAAAoQAAAqgdAdQgdAdgqAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AvnBuQgpAAgegdQgdgdAAgqQAAgoAdgeQAegdApAAIfPAAQAqAAAdAdQAeAegBAoQABAqgeAdQgdAdgqAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AvnBuQgpAAgegdQgdgdAAgqQAAgoAdgeQAegdApAAIfPAAQAqAAAdAdQAeAegBAoQABAqgeAdQgdAdgqAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AvnBuQgpAAgegdQgdgdAAgqQAAgoAdgeQAegdApAAIfPAAQAqAAAdAdQAeAegBAoQABAqgeAdQgdAdgqAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AvnBuQgqAAgdgdQgegdAAgqQAAgoAegeQAdgdAqAAIfQAAQApAAAdAdQAdAeAAAoQAAAqgdAdQgdAdgpAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfRAAQApAAAdAdQAdAeABAoQgBAqgdAdQgdAdgpAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfQAAQAqAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgqAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfQAAQAqAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgqAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfQAAQAqAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgqAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfQAAQAqAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgqAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfQAAQAqAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgqAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfQAAQAqAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgqAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfQAAQAqAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgqAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:73.1,y:11}).wait(1).to({graphics:mask_graphics_1,x:71.1,y:11}).wait(1).to({graphics:mask_graphics_2,x:69.1,y:11}).wait(1).to({graphics:mask_graphics_3,x:67.1,y:11}).wait(1).to({graphics:mask_graphics_4,x:65.1,y:11}).wait(1).to({graphics:mask_graphics_5,x:63.1,y:11}).wait(1).to({graphics:mask_graphics_6,x:61.1,y:11}).wait(1).to({graphics:mask_graphics_7,x:59.1,y:11}).wait(1).to({graphics:mask_graphics_8,x:57.1,y:11}).wait(1).to({graphics:mask_graphics_9,x:55.1,y:11}).wait(1).to({graphics:mask_graphics_10,x:53.1,y:11}).wait(1).to({graphics:mask_graphics_11,x:51.1,y:11}).wait(1).to({graphics:mask_graphics_12,x:49.1,y:11}).wait(1).to({graphics:mask_graphics_13,x:47.1,y:11}).wait(1).to({graphics:mask_graphics_14,x:47.1,y:11}).wait(1).to({graphics:mask_graphics_15,x:47.1,y:11}).wait(1).to({graphics:mask_graphics_16,x:47.1,y:11}).wait(1).to({graphics:mask_graphics_17,x:47.1,y:11}).wait(1).to({graphics:mask_graphics_18,x:47.1,y:11}).wait(1).to({graphics:mask_graphics_19,x:47.1,y:11}).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvPAMQgGAAgCgEQgEgDAAgFIAAAAQAAgEAEgDQACgEAGAAIegAAQAEAAAEAEQADADAAAEIAAAAQAAAFgDADQgEAEgEAAg");
	this.shape_1.setTransform(112.1,7.1);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(20));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#733A44").s().p("Aw2AUIAAgnMAhuAAAIAAAng");
	this.shape_2.setTransform(112.4,18);

	this.instance = new lib.Path_3_4();
	this.instance.parent = this;
	this.instance.setTransform(112,12,1,1,0,0,0,110,10);
	this.instance.alpha = 0.66;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfRAAQApAAAdAdQAdAeABAoQgBAqgdAdQgdAdgpAAg");
	this.shape_3.setTransform(112.1,12);

	var maskedShapeInstanceList = [this.shape_2,this.instance,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance},{t:this.shape_2}]}).wait(20));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221E1F").s().p("AvnBkQgpAAgegdQgdgdAAgqQAAgoAdgeQAegdApAAIfPAAQAqAAAdAdQAeAegBAoQABAqgeAdQgdAdgqAAg");
	this.shape_4.setTransform(112.8,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.1,24);


(lib.bloodbar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvoB4QgyAAgigjQgkgjABgyQgBgxAkgjQAigjAyAAIfQAAQAyAAAkAjQAiAjABAxQgBAygiAjQgkAjgyAAgAwgg4QgXAYgBAgQABAhAXAYQAYAXAgAAIfQAAQAiAAAXgXQAXgYAAghQAAgggXgYQgXgXgiAAI/QAAQggAAgYAXg");
	this.shape.setTransform(112.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvoBkQgoAAgegdQgegdABgqQgBgoAegeQAegdAoAAIfQAAQAqAAAdAdQAdAeAAAoQAAAqgdAdQgdAdgqAAg");
	mask.setTransform(73.1,12);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvPAMQgGAAgCgEQgEgDAAgFIAAAAQAAgEAEgDQACgEAGAAIegAAQAEAAAEAEQADADAAAEIAAAAQAAAFgDADQgEAEgEAAg");
	this.shape_1.setTransform(112.1,7.1);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#733A44").s().p("Aw2AUIAAgnMAhuAAAIAAAng");
	this.shape_2.setTransform(112.4,18);

	this.instance = new lib.Path_3_4();
	this.instance.parent = this;
	this.instance.setTransform(112,12,1,1,0,0,0,110,10);
	this.instance.alpha = 0.66;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfRAAQApAAAdAdQAdAeABAoQgBAqgdAdQgdAdgpAAg");
	this.shape_3.setTransform(112.1,12);

	var maskedShapeInstanceList = [this.shape_2,this.instance,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance},{t:this.shape_2}]}).wait(1));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221E1F").s().p("AvnBkQgpAAgegdQgdgdAAgqQAAgoAdgeQAegdApAAIfPAAQAqAAAdAdQAeAegBAoQABAqgeAdQgdAdgqAAg");
	this.shape_4.setTransform(112.8,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.bloodbar3, new cjs.Rectangle(0,0,224.1,24), null);


(lib.bloodbar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvoB4QgyAAgigjQgkgjABgyQgBgxAkgjQAigjAyAAIfQAAQAyAAAkAjQAiAjABAxQgBAygiAjQgkAjgyAAgAwgg4QgXAYgBAgQABAhAXAYQAYAXAgAAIfQAAQAiAAAXgXQAXgYAAghQAAgggXgYQgXgXgiAAI/QAAQggAAgYAXg");
	this.shape.setTransform(112.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvoBkQgoAAgegdQgegdABgqQgBgoAegeQAegdAoAAIfQAAQAqAAAdAdQAdAeAAAoQAAAqgdAdQgdAdgqAAg");
	mask.setTransform(73.1,12);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvPAMQgGAAgCgEQgEgDAAgFIAAAAQAAgEAEgDQACgEAGAAIegAAQAEAAAEAEQADADAAAEIAAAAQAAAFgDADQgEAEgEAAg");
	this.shape_1.setTransform(112.1,7.1);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#733A44").s().p("Aw2AUIAAgnMAhuAAAIAAAng");
	this.shape_2.setTransform(112.4,18);

	this.instance = new lib.Path_3_4();
	this.instance.parent = this;
	this.instance.setTransform(112,12,1,1,0,0,0,110,10);
	this.instance.alpha = 0.66;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfRAAQApAAAdAdQAdAeABAoQgBAqgdAdQgdAdgpAAg");
	this.shape_3.setTransform(112.1,12);

	var maskedShapeInstanceList = [this.shape_2,this.instance,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance},{t:this.shape_2}]}).wait(1));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221E1F").s().p("AvnBkQgpAAgegdQgdgdAAgqQAAgoAdgeQAegdApAAIfPAAQAqAAAdAdQAeAegBAoQABAqgeAdQgdAdgqAAg");
	this.shape_4.setTransform(112.8,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.bloodbar2, new cjs.Rectangle(0,0,224.1,24), null);


(lib.bloodbar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvoB4QgyAAgigjQgkgjABgyQgBgxAkgjQAigjAyAAIfQAAQAyAAAkAjQAiAjABAxQgBAygiAjQgkAjgyAAgAwgg4QgXAYgBAgQABAhAXAYQAYAXAgAAIfQAAQAiAAAXgXQAXgYAAghQAAgggXgYQgXgXgiAAI/QAAQggAAgYAXg");
	this.shape.setTransform(112.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(13));

	// Layer 4 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AveBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfRAAQApAAAdAdQAdAeABAoQgBAqgdAdQgdAdgpAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AvoBuQgoAAgegdQgdgdAAgqQAAgoAdgeQAegdAoAAIfQAAQAqAAAdAdQAdAeAAAoQAAAqgdAdQgdAdgqAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AvnBuQgpAAgegdQgdgdAAgqQAAgoAdgeQAegdApAAIfPAAQAqAAAdAdQAeAegBAoQABAqgeAdQgdAdgqAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAdAeABAoQgBAqgdAdQgdAdgpAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfQAAQAqAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgqAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AvnBuQgpAAgegdQgegdABgqQgBgoAegeQAegdApAAIfPAAQAqAAAdAdQAdAeAAAoQAAAqgdAdQgdAdgqAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AvnBuQgqAAgdgdQgegdAAgqQAAgoAegeQAdgdAqAAIfQAAQApAAAdAdQAdAeAAAoQAAAqgdAdQgdAdgpAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AvnBuQgpAAgegdQgegdABgqQgBgoAegeQAegdApAAIfPAAQAqAAAdAdQAdAeAAAoQAAAqgdAdQgdAdgqAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AvnBuQgpAAgegdQgdgdAAgqQAAgoAdgeQAegdApAAIfPAAQAqAAAdAdQAeAegBAoQABAqgeAdQgdAdgqAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAdAeABAoQgBAqgdAdQgdAdgpAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AvoBuQgpAAgdgdQgdgdAAgqQAAgoAdgeQAdgdApAAIfQAAQAqAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgqAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AvnBuQgpAAgegdQgdgdAAgqQAAgoAdgeQAegdApAAIfPAAQAqAAAdAdQAeAegBAoQABAqgeAdQgdAdgqAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:111.1,y:11}).wait(1).to({graphics:mask_graphics_1,x:108.6,y:11}).wait(1).to({graphics:mask_graphics_2,x:105.2,y:11}).wait(1).to({graphics:mask_graphics_3,x:101.8,y:11}).wait(1).to({graphics:mask_graphics_4,x:98.4,y:11}).wait(1).to({graphics:mask_graphics_5,x:95,y:11}).wait(1).to({graphics:mask_graphics_6,x:91.6,y:11}).wait(1).to({graphics:mask_graphics_7,x:88.1,y:11}).wait(1).to({graphics:mask_graphics_8,x:84.7,y:11}).wait(1).to({graphics:mask_graphics_9,x:81.3,y:11}).wait(1).to({graphics:mask_graphics_10,x:77.9,y:11}).wait(1).to({graphics:mask_graphics_11,x:74.5,y:11}).wait(1).to({graphics:mask_graphics_12,x:71.1,y:11}).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvPAMQgGAAgCgEQgEgDAAgFIAAAAQAAgEAEgDQACgEAGAAIegAAQAEAAAEAEQADADAAAEIAAAAQAAAFgDADQgEAEgEAAg");
	this.shape_1.setTransform(112.1,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#733A44").s().p("Aw2AUIAAgnMAhuAAAIAAAng");
	this.shape_2.setTransform(112.4,18);

	this.instance = new lib.Path_3_4();
	this.instance.parent = this;
	this.instance.setTransform(112,12,1,1,0,0,0,110,10);
	this.instance.alpha = 0.66;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfRAAQApAAAdAdQAdAeABAoQgBAqgdAdQgdAdgpAAg");
	this.shape_3.setTransform(112.1,12);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.instance,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1}]}).wait(13));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221E1F").s().p("AvoBkQgpAAgdgdQgdgdgBgqQABgoAdgeQAdgdApAAIfRAAQApAAAdAdQAdAeABAoQgBAqgdAdQgdAdgpAAg");
	this.shape_4.setTransform(112.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.1,24);


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

	this.instance = new lib.ClipGroup_5();
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

	this.instance = new lib.ClipGroup_5();
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

	this.instance = new lib.ClipGroup_0_1();
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

	this.instance = new lib.ClipGroup_0_1();
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


(lib.page9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(43).call(this.frame_43).wait(1));

	// Layer 21 copy 2
	this.instance = new lib.leaf();
	this.instance.parent = this;
	this.instance.setTransform(599.6,682.4,0.999,0.999,-23.8,0,0,31.1,0.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(1).to({regX:47.5,regY:0,scaleX:0.92,scaleY:0.92,rotation:-20.3,x:627.7,y:629.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-16.6,x:646.1,y:585.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-12.9,x:667.4,y:542.3},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-9.1,x:690.9,y:500.5},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-5.4,x:716.5,y:459.8},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:-1.7,x:744.6,y:420.8,alpha:0.5},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:2,x:776.5,y:384.8,alpha:0},0).wait(3).to({_off:true},1).wait(12));

	// Layer 21 copy
	this.instance_1 = new lib.leaf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(355.2,572.3,1,1,2,0,0,29.5,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).wait(1).to({regX:47.5,regY:0,scaleX:0.93,scaleY:0.93,rotation:8,x:419.5,y:528.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:14,x:471.4,y:491.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:20,x:526.6,y:458.3},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:26,x:584.5,y:430},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:32,x:644.5,y:406.6},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:38,x:706.7,y:389.3,alpha:0.5},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:44,x:770.8,y:381.7,alpha:0},0).wait(3).to({_off:true},1).wait(10));

	// Layer 21
	this.instance_2 = new lib.leaf();
	this.instance_2.parent = this;
	this.instance_2.setTransform(370.5,351.5,1,1,34,0,0,42.3,0.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(1).to({regX:47.5,regY:0,scaleX:0.95,scaleY:0.95,rotation:40.6,x:413.7,y:308.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:47.1,x:469.3,y:285.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:53.7,x:529.4,y:278.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:60.3,x:589.8,y:282.6},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:66.9,x:649,y:296.2},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:73.4,x:705.5,y:318.2,alpha:0.5},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:80,x:758.3,y:348.1,alpha:0},0).wait(8).to({_off:true},1).wait(9));

	// Layer 10
	this.instance_3 = new lib.Symbol25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(605.3,1075.4,1,1,0,0,0,375,285.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({alpha:0.22},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.66},0).wait(13).to({alpha:0.495},0).wait(1).to({alpha:0.33},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0},0).wait(25));

	// Layer 9
	this.instance_4 = new lib.Symbol25();
	this.instance_4.parent = this;
	this.instance_4.setTransform(604.1,299.7,1,1,0,0,0,375,285.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.22},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.66},0).wait(13).to({alpha:0.495},0).wait(1).to({alpha:0.33},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0},0).wait(25));

	// Layer 14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_1 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_2 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_3 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_4 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_5 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_6 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_7 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_8 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_9 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_10 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_11 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_12 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_13 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_14 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_15 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_16 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_17 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_18 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_19 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_20 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_21 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_22 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_23 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_24 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_25 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_26 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_27 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_28 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_29 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_30 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_31 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_32 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_33 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_34 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_35 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_36 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_37 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_38 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_39 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_40 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_41 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_42 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_43 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_1,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_2,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_3,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_4,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_5,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_6,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_7,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_8,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_9,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_10,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_11,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_12,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_13,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_14,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_15,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_16,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_17,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_18,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_19,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_20,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_21,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_22,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_23,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_24,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_25,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_26,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_27,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_28,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_29,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_30,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_31,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_32,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_33,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_34,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_35,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_36,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_37,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_38,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_39,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_40,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_41,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_42,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_43,x:490.6,y:396.1}).wait(1));

	// Layer 13
	this.instance_5 = new lib.Symbol26();
	this.instance_5.parent = this;
	this.instance_5.setTransform(750.3,567.3,1,1,0,0,0,47.5,0);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:743.9,alpha:0.333},0).wait(1).to({x:737.5,alpha:0.667},0).wait(1).to({x:731.1,alpha:1},0).wait(1).to({x:724.7},0).wait(1).to({x:718.3},0).wait(1).to({x:711.9},0).wait(1).to({x:705.5},0).wait(1).to({x:699.1},0).wait(1).to({x:692.7},0).wait(1).to({x:686.3},0).wait(1).to({x:679.9},0).wait(1).to({x:673.5},0).wait(1).to({x:667.1},0).wait(1).to({x:660.7},0).wait(1).to({x:654.3},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(25));

	// Layer 14 copy
	this.instance_6 = new lib.Symbol27();
	this.instance_6.parent = this;
	this.instance_6.setTransform(604.2,687.1,1,1,0,0,0,377.1,105);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.58},0).wait(1).to({alpha:0.87},0).wait(13).to({alpha:0.652},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.218},0).wait(1).to({alpha:0},0).wait(25));

	// Layer 3
	this.instance_7 = new lib.fire();
	this.instance_7.parent = this;
	this.instance_7.setTransform(834.3,833,1,1,0,0,0,-365.9,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-367.3,regY:28.4,scaleX:1.61,scaleY:1.61,x:832,y:788.4,alpha:0.667},0).wait(1).to({scaleX:2.23,scaleY:2.23,x:831.2,y:771.6,alpha:0.333},0).wait(1).to({scaleX:2.84,scaleY:2.84,x:830.4,y:754.7,alpha:0},0).wait(41));

	// Layer 18
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape.setTransform(551.4,435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_1.setTransform(535,435.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIANgEIAMgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_2.setTransform(514.6,435);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_3.setTransform(497.8,430.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_4.setTransform(485.4,431.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_5.setTransform(469,431.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_6.setTransform(452.3,435.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_7.setTransform(437.4,432.4);

	this.instance_8 = new lib.Path_11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(494,431.5,1,1,0,0,0,142.9,32.4);
	this.instance_8.alpha = 0.66;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgjDAB4QgyAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAyAAMBGHAAAQAyAAAjAjQAjAjAAAxQAAAxgjAkQgjAjgyAAgEgj8gA3QgXAXAAAgQAAAhAXAXQAYAYAhAAMBGHAAAQAiAAAXgYQAXgXAAghQAAgggXgXQgXgYgiAAMhGHAAAQghAAgYAYg");
	this.shape_8.setTransform(608.6,833.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.instance_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(44));

	// Isolation Mode
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgimAAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAMBFNAAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape_9.setTransform(609.3,829.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(44));

	// Layer 17 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgjDABkQgpAAgegeQgdgcAAgqQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAAqgdAcQgdAegqAAg");
	mask_1.setTransform(608.3,833.6);

	// Layer 16
	this.instance_9 = new lib.Symbol17copy2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(606.4,833.6,1,1,0,0,0,234.4,10);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({x:539.7},0).wait(1).to({x:473},0).wait(1).to({x:406.3},0).wait(1).to({x:339.6},0).wait(1).to({x:272.9},0).wait(1).to({x:206.2},0).wait(1).to({x:139.5},0).wait(37));

	// Layer 15
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,51,51,0.659)").s().p("EgjDABkQgpAAgegdQgdgeAAgpQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAApgdAeQgdAdgqAAg");
	this.shape_10.setTransform(608.3,833.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_11.setTransform(430.8,792.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVCWQgKgCgIgEQgHgFgEgKQgEgIgBgNIABgGIACgIIAdAAQABAPAFAGQAFAGALAAIAIgBQAFgBADgFQAEgDACgHQABgGAAgLIAAgkQgFAHgJAGQgIAFgNAAIgJgBIgKgDQgGgDgFgFQgGgGgEgJQgEgJgCgNQgDgOAAgTIAAg8QAAgTADgMQACgNAEgKQAEgIAGgFQAFgFAGgDIAKgDIAKAAQAIAAAGACQAGABAFAFIAIAHIAGAJIADgWIAhAAIAADaQAAATgEAPQgDAQgIALQgIALgMAGQgMAFgQABQgLgBgKgCgAgHh4QgEACgDAFQgDAFgCAHIgBAWIAABKIABAUQACAJADAEQADAFAEABIAHADIAHgCIAGgEIAFgFIADgGIAAh8QgDgIgFgEQgFgFgIAAg");
	this.shape_12.setTransform(414.6,795.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhHg");
	this.shape_13.setTransform(398.3,792.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_14.setTransform(383.4,789.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(44));

	// Layer 3
	this.instance_10 = new lib.Symbol22();
	this.instance_10.parent = this;
	this.instance_10.setTransform(476.2,608.2,1,1,0,0,0,181.6,181.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(44));

	// Layer 3
	this.instance_11 = new lib.Path_8();
	this.instance_11.parent = this;
	this.instance_11.setTransform(603.9,1021.8,1,1,0,0,0,112.8,112.8);
	this.instance_11.alpha = 0.488;

	this.instance_12 = new lib.Path_8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(388.9,1209.9,1,1,0,0,0,112.8,112.8);
	this.instance_12.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(44));

	// Layer 8
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_15.setTransform(603.9,1021.7);

	this.instance_13 = new lib.ClipGroup_3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(603.9,1021.8,1,1,0,0,0,109.8,109.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah4C5QhuioiXgRQCXgPBuipQB1i0ADj+QAED+B2C0QBtCpCXAPQiXARhtCoQh2C1gED9QgDj9h1i1gAF+AAQAQAAARAAIAAACQgRAAgQgCgAmeAAQARAAAQAAQgQACgRAAgAl9AAIAAAAg");
	this.shape_16.setTransform(547.3,990.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#697E9B").s().p("Amls4IJvAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtkrCvIhMAsQgXANgzALIgvAIg");
	this.shape_17.setTransform(646,1027.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A0BAD3").s().p("Ah4MZIhMgsQksiviuktQitkrAAlcIAAjmQAAhbBBhBQBAhABbAAITfAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtksCvIhMAsQg4AghBAAQhAAAg4ggg");
	this.shape_18.setTransform(603.8,1027.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_19.setTransform(603.9,1021.7);

	this.instance_14 = new lib.ClipGroup_1_0();
	this.instance_14.parent = this;
	this.instance_14.setTransform(601.9,1023.8,1,1,0,0,0,109.8,109.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D3E9EB").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjMQBTjFCYiYQCYiYDFhTQDMhXDeAAQDfAADMBXQDFBTCYCYQCYCYBTDFQBXDMAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjMBXjfAAQjeAAjMhXg");
	this.shape_20.setTransform(603.9,1021.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_21.setTransform(816.1,1209.9);

	this.instance_15 = new lib.ClipGroup_0();
	this.instance_15.parent = this;
	this.instance_15.setTransform(816.2,1209.9,1,1,0,0,0,109.8,109.8);

	this.instance_16 = new lib.ClipGroup_1_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(829,1222.1,1,1,0,0,0,122.6,122);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_22.setTransform(816.1,1209.9);

	this.instance_17 = new lib.ClipGroup_2_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(814.2,1211.9,1,1,0,0,0,109.8,109.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3F4826").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDFBUCYCYQCYCXBTDFQBXDMAADfQAADghXDLQhTDFiYCYQiYCYjFBTQjLBXjggBQjeABjMhXg");
	this.shape_23.setTransform(816.1,1209.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicidhWjKQhYjRgBjlQABjkBYjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBYDRAADkQAADlhYDRQhWDKicCdQicCcjLBWQjRBYjlABQjkgBjShYgAmevXQi/BSiUCUQiVCThRC/QhUDHAADYQAADZBUDGQBRC/CVCUQCUCUC/BSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBQi/QBUjGAAjZQAAjYhUjHQhQi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_24.setTransform(388.8,1209.9);

	this.instance_18 = new lib.ClipGroup_4();
	this.instance_18.parent = this;
	this.instance_18.setTransform(468.3,1158,1,1,0,0,0,191.2,163.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E8976B").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMABjfQgBjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDGBUCXCYQCYCXBTDFQBWDMABDfQgBDghWDLQhTDFiYCYQiXCYjGBTQjLBXjggBQjeABjMhXg");
	this.shape_25.setTransform(388.8,1209.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.instance_18},{t:this.shape_24},{t:this.shape_23},{t:this.instance_17},{t:this.shape_22},{t:this.instance_16},{t:this.instance_15},{t:this.shape_21},{t:this.shape_20},{t:this.instance_14},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_13},{t:this.shape_15}]}).wait(44));

	// Layer 2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(10).p("EA6gAk3Mh0/AAAMAAAgp8QAAmdCfl6QCbltEZkZQEZkaFtiaQF5igGeAAMA1eAAAQGeAAF6CgQFtCaEZEaQEZEZCbFtQCfF6AAGdg");
	this.shape_26.setTransform(604.7,1118.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F9DD89").s().p("Eg6fAk3MAAAgp8QAAmeCgl5QCaltEZkZQEakaFsiaQF6ifGdAAMA1eAAAQGeAAF5CfQFtCaEaEaQEZEZCaFtQCgF5AAGeMAAAAp8g");
	this.shape_27.setTransform(604.7,1118.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26}]}).wait(44));

	// Layer 11
	this.instance_19 = new lib.bloodbar6();
	this.instance_19.parent = this;
	this.instance_19.setTransform(475.4,494.9,1,1,0,0,0,93.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(44));

	// Layer 12
	this.instance_20 = new lib.Symbol15copy2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(796.8,233.4,1,1,0,0,0,112,12);

	this.instance_21 = new lib.Symbol15copy();
	this.instance_21.parent = this;
	this.instance_21.setTransform(796.8,233.4,1,1,0,0,0,112,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).to({state:[{t:this.instance_21}]},29).wait(15));

	// Layer 6
	this.instance_22 = new lib.Symbol21();
	this.instance_22.parent = this;
	this.instance_22.setTransform(459.9,611.2,1,1,0,0,0,144.8,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(44));

	// Layer 7
	this.instance_23 = new lib.Symbol14();
	this.instance_23.parent = this;
	this.instance_23.setTransform(822.2,349.1,1,1,0,0,0,126,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({regX:126.1,x:822.3},0).wait(26).to({x:808.1},0).wait(1).to({x:821.1},0).wait(1).to({x:815.1},0).wait(1).to({x:822.1},0).wait(14));

	// Layer 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_28.setTransform(861.5,169.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_29.setTransform(845.1,169.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA+B0IAAitIgBgNIgDgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAGgFIALgJIANgEIAMgCQANAAAJAHQAJAGAFANQAFgHAFgFIAMgIIANgEIAMgCQATAAAMAPQAKAOABAcIAACug");
	this.shape_30.setTransform(824.7,169.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_31.setTransform(807.8,165.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_32.setTransform(799.3,165);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_33.setTransform(787.6,169.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_34.setTransform(772.8,169.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAFgFAGgCIALgDIAIAAIAMABIAIAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAHgBIAHgEIAEgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_35.setTransform(756.6,165.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_36.setTransform(741.1,169.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_37.setTransform(725.5,166.6);

	this.instance_24 = new lib.Path_10();
	this.instance_24.parent = this;
	this.instance_24.setTransform(793.1,167.7,1,1,0,0,0,142.9,32.4);
	this.instance_24.alpha = 0.66;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C6DA92").s().p("AgUQbQhogDjQgzQjMgxjjhMQofi1ipiUQhihVAPhKQAKg1BMg9IA9guQAhgZAOgQQAngsg4gkQgagQjaAaQlzAtiPAMQs0BEoSivQkihejOk0Qi7kWhrmxQCtEMD3CLQHwEXI0CXQDSA4D/AwQA0AKFrA/QB/AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBuBegCBnQgBAzgYAgIBNgLQBigMBrgHQFYgUE3AyQCeAaCAAkQAaAICJAtQBEAXAqAAQA0ABBKgdQBBgYB3hDQCNhSBLgqQEWibCGAAQB9AABnBBQBGAsATAJQA5AdBDANQB/AZFajUQBOgwCshxQCBhUAjgRQAsgUBRAgQA2AUB0BCQCIBOBAAeQB4A5BfAQQC2AgFvAgQC4AQCTAKQgsCv55CjQoHAzpoArIoCAiQhqAJh+A1Qg0AVitBXQiMBHhdAfQh9Aoh0AAIgTAAg");
	this.shape_38.setTransform(445.4,764.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6FB77F").s().p("AkmAaIARg6ICyEJIiqlUIAghdICkGuIiDnuIBXgrIBJILIgjoCIBrAAIgjIKIBKnZIBAAaIhIFwIBdk+IA9AgIhsEqIB+kBIBAAYIi+FYIi8Aog");
	this.shape_39.setTransform(454,294.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EBA24D").s().p("Ag+gJIBuiSIAPE3g");
	this.shape_40.setTransform(429.1,312.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FAE485").s().p("Ahmh1IC0AdIAZDOg");
	this.shape_41.setTransform(415,320.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CD6C38").s().p("Ag+hmIB9CkIhkApg");
	this.shape_42.setTransform(429.1,321.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F2BC5F").s().p("AiRAsIEjh0IhvCRg");
	this.shape_43.setTransform(419.3,304.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EBA24D").s().p("AhsANIBniPIByEFg");
	this.shape_44.setTransform(423,283.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FAE485").s().p("AhWiFICtAhIhLDqg");
	this.shape_45.setTransform(403.5,295.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CD6C38").s().p("AhGh1IDYB1IkjB1g");
	this.shape_46.setTransform(419.3,296.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F2BC5F").s().p("AiJAnIEThuIhnCPg");
	this.shape_47.setTransform(408.6,277.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CD6C38").s().p("AhTiDIDdCXIkTBvg");
	this.shape_48.setTransform(408.6,268.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FAE485").s().p("Ag2iwIBtBbIg2EGg");
	this.shape_49.setTransform(394.7,264.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EBA24D").s().p("Ag3ASIBvicIgvEVg");
	this.shape_50.setTransform(450.4,303.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CD6C38").s().p("AAOhxIBCB5IifBqg");
	this.shape_51.setTransform(443.4,316.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAE485").s().p("Ag2ibIBtBUIheDjg");
	this.shape_52.setTransform(439.3,312.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F2BC5F").s().p("AhugFIDdhIIhwCbg");
	this.shape_53.setTransform(445,297.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EBA24D").s().p("AhVApIAVjGICWE7g");
	this.shape_54.setTransform(447.4,273.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CD6C38").s().p("Ag8heICrB0IjdBJg");
	this.shape_55.setTransform(445,287.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FAE485").s().p("AhRiCICjBIIgxC9g");
	this.shape_56.setTransform(430.6,283.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F2BC5F").s().p("AhcAbIC5h+IgVDHg");
	this.shape_57.setTransform(431.7,267.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EBA24D").s().p("AhFASIgShtIAQAJQAYATAoAsQA6BDAlAsg");
	this.shape_58.setTransform(432.1,248.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CD6C38").s().p("AhBhkICeBKIi5B+g");
	this.shape_59.setTransform(431.7,260.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FAE485").s().p("AhziSIDnBdIgbDIg");
	this.shape_60.setTransform(413.5,255.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F2BC5F").s().p("AhzgmIDVgQIASBtg");
	this.shape_61.setTransform(413.5,245.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FAE485").s().p("AhwhTIC8AjIAlCEg");
	this.shape_62.setTransform(395,327.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CD6C38").s().p("AhwhBIDhBiIi8Aig");
	this.shape_63.setTransform(413.9,328.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EBA24D").s().p("AhwATIAViIIDMDrg");
	this.shape_64.setTransform(413.9,320.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F2BC5F").s().p("AhoAhIDRhkIgVCHg");
	this.shape_65.setTransform(394.2,315.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FAE485").s().p("AhMilICZCAIgsDMg");
	this.shape_66.setTransform(380.3,302.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CD6C38").s().p("Ag9hlICmBlIjRBmg");
	this.shape_67.setTransform(394.2,308.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EBA24D").s().p("AhTAfIBFikIBiELg");
	this.shape_68.setTransform(396.4,295.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F2BC5F").s().p("AhugtIDdglIhEClg");
	this.shape_69.setTransform(383.7,290.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FAE485").s().p("AgigUQgCg7AEgeIAFgRIA+BbIg9CiQgEg4gEhbg");
	this.shape_70.setTransform(375.4,272.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CD6C38").s().p("AgvhQICeB9IjdAlg");
	this.shape_71.setTransform(383.7,277.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EBA24D").s().p("AhugDIAQiPIDNElg");
	this.shape_72.setTransform(411.3,255.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EBA24D").s().p("AhPAzIBmjjIA5Fhg");
	this.shape_73.setTransform(386.9,264.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F2BC5F").s().p("Ag+gTIB9g0IgQCOg");
	this.shape_74.setTransform(395.5,248.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F2BC5F").s().p("AhSAXICliIIhmDjg");
	this.shape_75.setTransform(380.9,257.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#61B26F").s().p("AgNEEQgSgagqgDQgsgDgxAbIgoAbIASghQAagnApgfQAigZA2AIQAaAEATAIQgQgPgdgPQg8gfhAgCQg3gChPATIhDASIA3gdQBCghAzgRQAzgRBRAXQAoALAdAPQgVgWgmgcQhNg4hWggQhWghhVAUQgbAHgXAKIgSAKIBAgyQBTgxBYAAQBagBBPA9QAnAfAWAeQgOgagFgmQgMhMAng6QAkg3BcgUQAugKAmABQgXAPgdAaQg5AzgWA1QgWA1AjBKQATAlAXAaQgCgYAHghQAOhEApgxQA7hGBZAAQAsAAAgAOQgnAJgsAUQhZApgbA8QgeA/AgBQQAPAnAWAbIkjCAQAAgNgJgOg");
	this.shape_76.setTransform(382.8,226);

	this.instance_25 = new lib.Path_2_3();
	this.instance_25.parent = this;
	this.instance_25.setTransform(435.4,329.8,1,1,0,0,0,47.2,14.5);
	this.instance_25.alpha = 0.262;

	this.instance_26 = new lib.Path_3_6();
	this.instance_26.parent = this;
	this.instance_26.setTransform(811.8,434.7,1,1,0,0,0,81.6,12.8);
	this.instance_26.alpha = 0.262;

	this.instance_27 = new lib.Path_4_4();
	this.instance_27.parent = this;
	this.instance_27.setTransform(467.7,764.8,1,1,0,0,0,108.5,12.8);
	this.instance_27.alpha = 0.262;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A6BD55").s().p("EgsGAO1IBjhbQCEhxCfhtQH9leJTi0QD3hLFShcQEihRBrgiQCvg4CKhDQCUhJC3h5QC2h4G4iHQGgiAHHhSQHahXEYAHQE7AIgpCCQgqCDlvDuQlRDboSECQoED6oUDQQoqDZmMBkQtnDcqABGQj9Aci2AAQlGAAhfhag");
	this.shape_77.setTransform(1002.1,719.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgFQg5gCAJgIIAMgGQAFgEgJgCQgUgGgWgBQgggCiYgDQhwgCmGAFIlwAGQifADg5AHQh6AQk/gEQhdgBgpgIQgagHgNgBIi2ACQisABgkgFQglgFAOgIIAXgHIiYgNIK+gTQH4gLHaABQQQABV1BEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_78.setTransform(299.2,716.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhUgMIg2gLQjfADhjgEQg6gDALgIIAKgGQAFgEgHgCQgVgGgWgBQgfgCiYgDQhxgCmFAFIlwAGQigADg5AIQh6APk/gEQhdgBgpgIQgZgHgNgBIi3ACQisACgkgFQglgFAPgIIAWgIIiYgNQIggQCegDQH3gLHbABQQQABV1BEQKKAfKhBAQFQAgDOAaI08g3g");
	this.shape_79.setTransform(363.5,710.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgEQg6gDALgIIAKgGQAFgEgIgCQgTgGgXgBIi3gFQhxgCmGAFIlvAGQigADg5AIQh6APk/gEQhdgBgpgIQgagHgNgBIi2ACQisACgkgFQgmgFAPgIIAXgIIiYgNQIfgQCfgDQH3gLHbABQQAABWFBEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_80.setTransform(427.3,701.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A6BD55").s().p("ADZPxQmwgjklh+QqFkXnAlzQnwmag7l4QAhgmA8g0QB4hqCJhNQG4j2HBCHQC7A4D8BcQDZBPBRAVQCFAhBugQQB5gQCchQQCchQFNBgQE7BbFHDMQFWDVC5DpQDQEFhADOQhCDSk5CYQkfCLmsA9QkLAmkKAAQiVAAiVgMg");
	this.shape_81.setTransform(237.3,672.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#61763D").s().p("EAl9ADLIiogUIgkAEQgnADhWgIQkqgehqgbQgggIhXgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDggAWgl4gCiIH6gCQJzAGJZAkQUXBNOzBoQG4AwHLA/QC/AZHFBCIiNgDIAUAKQANAJgjABIgEABQgmAAiWgTg");
	this.shape_82.setTransform(1169.8,535.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgJQkjgchxgcQgggIhXgNIhQgMQp5hUimgNQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJZAjQUNBNO9BpQG0AwHPA+IKEBbIiNgCIAUAKQANAJgkABIgDABQgnAAiWgTg");
	this.shape_83.setTransform(1111.4,521.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#61763D").s().p("EAl9ADLIiogUIglAEQgmADhWgJQkkgchwgcQgggIhXgNIhQgMQp5hUimgOQiKgMgfgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJaAjQUFBNPFBoQG2AxHMA+QC8AaHHBBIiMgCIAUAKQANAJgkABIgDABQgmAAiWgTg");
	this.shape_84.setTransform(1053.5,507.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgIQkqgehqgbQghgIhWgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh9gOIhxgOQgMAEgnACQhPADiLgOUgDhgAWgl3gCiIH6gCQJyAGJaAkQUJBMPBBpQG2AwHNA+QCmAXHeBFIiNgDIAUAKQAMAJgjABIgDABQgnAAiWgTg");
	this.shape_85.setTransform(973.5,492.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#61763D").s().p("Eg9wAIFQg6gaAJg+QAEgTAJgVIAJgRIjgg3QK2j4DshKQKejSKJh5QK9iDNDgnQNcgpP4A4QOfAzPqEZQH2CME7CBQuggTvLgOQ+VgcjSAZQjQAaiDg9QgogUgcgYIgUgWQhLAVhcATQi4AohZgFQhSgFAEg4IAGgwQACgbgOgOIgcgaQgOgKgZgDQgtgEjUASQicANoMCPIntCNQg1AQg+AYQh7AwgrAqQhVBTiwA0QiBAmjEAZQiAAPhCgpQgPgJgWgVQgQgQgKAAQgLgBhKAUIihApQihAnhMAAQgiAAgRgIg");
	this.shape_86.setTransform(606.2,322.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#8CAC50").s().p("EgmdApkQxvjbtsmPQtsmQnfoGQnyoYAApMQAApLHyoYQHgoGNrmQQNsmPRvjbQSXjjUGAAQUHAASXDjQRvDbNsGPQNsGQHgIGQHxIYAAJLQAAJMnxIYQnhIGtrGQQtsGPxvDbQyXDj0HAAQ0GAAyXjjg");
	this.shape_87.setTransform(644.1,557.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#917556").s().p("AnmTjQgfgYgJg6QgHgxAHhfQAhkYAMjQQAOkCgxkUQg/kdgUiBQgdi3BKjbQBEjJB6iTQAZgdCcgZQCLgWC+gLQC7gKCCAGQCPAGACAZQAEAvh+AxQhmAokMBEQhyAdhCA0Qg4AqgkBGQgQAfgnBqQgjBeglA9QgsBKgBBQQAAA6AaBiQAoCUAHAnQAYB6gEB6QgMExhVF+QhRFog7AAQgHAAgHgFg");
	this.shape_88.setTransform(575,953);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#74542E").s().p("AMSY+QkPifh2kGQg+iKg0l9QgdjXgzoIQgunggci3Qgukig3gIQjYgjhpHkQgjCjgRDJQgNCRABBQQAECvgzFOQhCGyhqCnQhmCgixAzQg4AQg4ADIgtAAQhbo6gajkQgcj7AFoGQAGpwBHi7QASgwAqiHQAchbAcgtQAmg+BFguQBNgyCLgwQDwhTEmgdQCbgPDXgLQCGgOCjBAQCvBEB0B+QCjCwAtD9QBAFtioIgQhWEWAND7QALDABJDKQAqByBVC+QA/CcgHBmQgPDRg3BWQgbAqgZABQhvgbiHhPg");
	this.shape_89.setTransform(609,973.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#644725").s().p("EgTKAnDQgthJgHhDQgHg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBPDYA2HOQAVCvgPC9QgKCPglDKIhAFeQgjDRgKCsQgKCyA4EGQAfCNBaFCQBQEcAVCBQAhDFguBbQguBdiwAeQiGAWkHgKQk5gRiegEQkUgHinAcQiyAei/CtQiDB2iuDhQjBD7gkAkQg9A/goAAQgZAAgRgag");
	this.shape_90.setTransform(609.1,1026.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#917556").s().p("AHpbTQgvhWggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAdQgnALieBTQiCBEhCgBQhhgCgjh/QgtingZi6QgVieAAh3QAAhYHMASQDmAJDlAaIBiAaQB1AiBjAmQE+B5ARB0QAPBkgPCOQgKBWgjDEQhOG1AAEWQAAE7A2GiQAcDaApENQAFAsAVBrQAVBpAHA+QAWDQhMCkQhJCdhKAGIgGAAQg7AAg2hgg");
	this.shape_91.setTransform(369.8,993.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#74542E").s().p("EAIaAkwQhsgRg1gwQgRgPgJgQIgFgOQgggNgfgnQg+hOAGh+QAFh3hRhgIhNhUQgvg1gcgzQgyhahwoEQh4orgjhcQgYg+hNiRQhwjQgphUQjYmxhhmhQhynmgTk2QgGhlADhfQAFhYAAggQAAhQP7hQQH+goH+gYIgyFhQgzF3AABtQAABXAHITQAFH6gMBUQgNBnAADvQAADwANCDQAFArAcDNQAcDiAPC1QAvI+hPD9QhaEhhqBqQhMBMhpAAQgYAAgbgEg");
	this.shape_92.setTransform(380.8,1039.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#917556").s().p("AkXL0Qg8gGAQmJQAJjNADhVQAEiOgOgeQgNgdghgiIg8g4QhHhGALhJQAFgiAggJQAXgGA6AEQBWAGAbAAQBKAAA9gQQBegZEJiwQB3hPAsgYQBIgpAOAQQAXAajbELQj/E1giBBQgZAygmCVQgWBXguDFQhYFlg8AAIgCAAg");
	this.shape_93.setTransform(854.3,909.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#74542E").s().p("AqpWMQg2gpgZjSQgUimADjOQABhGAsi7IBYljQBunJhCgrQhbg7gwh8Qg1iJAWimQATiSBshqQA2g0AzgYIAWAIQAgAIAuADQCUAJDvgxQDugxE8h2QCeg7BugxIAHBRQABBvgaCXQgPBUg1BHQgqA5hTBEIijB+QhpBUhLBNQiUCbiiIBQgoB+hJEAQg6DMgWA6QhRDTh2DOQh7DUg4AAQgKAAgHgGg");
	this.shape_94.setTransform(865.6,947.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#644725").s().p("EgOJAgiQgkgZgbhIQhAioAYkJQAKhqARmVQAapRAKjIQA3w+BKkEQBNkMCGi8QBDheA0gpIBHAEQBaADBigFQE3gQEOhaQENhZDfhzQBwg5A5gnIgYCyQgjDbgzDKQijKGkGDsQiSCDhYDPQhFCkgxD/QgdCVgwE4QgwEYg8C2Qh8F6kvFAQhhBmh2BkQg+A0hIA5QgTARgUAAQgQAAgRgMg");
	this.shape_95.setTransform(860.3,1003.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg4hih5o0QiDpfgmhlQhFi3ihkjQinkvknnXQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_96.setTransform(363.5,981.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#523821").s().p("EhKDAj2QjIAAi3hOQixhLiJiJQiJiJhLixQhOi3AAjIMAAAgo1QAAjIBOi3QBLixCJiJQCJiJCxhLQC3hODIAAMCUHAAAQDIAAC4BOQCxBLCICJQCJCJBLCxQBOC3AADIMAAAAo1QAADIhOC3QhLCxiJCJQiICJixBLQi4BOjIAAg");
	this.shape_97.setTransform(660.1,880.9);

	this.instance_28 = new lib.Path_14();
	this.instance_28.parent = this;
	this.instance_28.setTransform(978.7,201.8,1,1,0,0,0,195.2,33.5);
	this.instance_28.alpha = 0.77;

	this.instance_29 = new lib.Path_1_9();
	this.instance_29.parent = this;
	this.instance_29.setTransform(330.1,217.6,1,1,0,0,0,153,26.3);
	this.instance_29.alpha = 0.77;

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-304.3,0,304.4).s().p("Eg6lAuQMAAAhdzMB1LAAAMAAABfHg");
	this.shape_98.setTransform(603.8,304.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.instance_29},{t:this.instance_28},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_24},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1446.2,1361.1);


(lib.page8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		//Stage
		
		var canvas = this
		    //VARIABLES
		    //Drag Object Size
		    dragRadius = 100;
		    //Destination Size
		    destHeight = 100;
		    destWidth = 100;
		
		    //Circle Creation
		    
		    var circle3 = new lib.circle3();
			
			
		   
		
		
		    //Drag Object Creation
		    //Placed inside a container to hold both label and shape
		    var dragger = new createjs.Container();
		    dragger.x = 588;
			dragger.y = 1188;
		    dragger.addChild(circle3);
		    dragger.setBounds(100, 100, dragRadius*2, dragRadius*2);
		    //DragRadius * 2 because 2*r = width of the bounding box
			
		
		
		    var box3 = new lib.box3();
			box3.alpha = 0;
		    var destination = new createjs.Container();
		    destination.x = 338;
		    destination.y = 570;
		    destination.setBounds(340, 560, destHeight, destWidth);
		
		    destination.addChild(box3);
		
		    //DRAG FUNCTIONALITY =====================
		    dragger.on("pressmove", function(evt){
		         evt.currentTarget.x = evt.stageX;
		        evt.currentTarget.y = evt.stageY;
		         stage.update(); //much smoother because it refreshes the screen every pixel movement instead of the FPS set on the Ticker
		         if(intersect(evt.currentTarget, destination)){
		           evt.currentTarget.alpha=0.2;
		           box3.alpha = 0;
		
		         }else{
		           evt.currentTarget.alpha=1;
		         }
		
		    });
		
		    //Mouse UP and SNAP====================
		    dragger.on("pressup", function(evt) {
		      if(intersect(evt.currentTarget, destination)){
		        dragger.x = destination.x + destWidth/2;
		        dragger.y = destination.y + destHeight/2;
		        dragger.alpha = 0;
		        stage.update(evt);
				canvas.parent.gotoAndStop(8);
		
		      }else{
					evt.currentTarget.alpha=1;
					dragger.x = 588;
					dragger.y = 1188;
		         }
		    });
		    //Tests if two objects are intersecting
		    //Sees if obj1 passes through the first and last line of its
		    //bounding box in the x and y sectors
		    //Utilizes globalToLocal to get the x and y of obj1 in relation
		    //to obj2
		    //PRE: Must have bounds set for each object
		    //Post: Returns true or false
		    function intersect(obj1, obj2){
		      var objBounds1 = obj1.getBounds().clone();
		      var objBounds2 = obj2.getBounds().clone();
		
		      var pt = obj1.globalToLocal(objBounds2.x, objBounds2.y);
		
		      var h1 = -(objBounds1.height / 2 + objBounds2.height);
		      var h2 = objBounds2.width / 2;
		      var w1 = -(objBounds1.width / 2 + objBounds2.width);
		      var w2 = objBounds2.width / 2;
		
		
		      if(pt.x > w2 || pt.x < w1) return false;
		      if(pt.y > h2 || pt.y < h1) return false;
		
		      return true;
		    }
		
		
		    //Adds the object into stage
		    stage.addChild(destination, dragger);
		    stage.mouseMoveOutside = true;
		    stage.update();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(2).call(this.frame_23).wait(1));

	// Layer 3
	this.instance = new lib.fire();
	this.instance.parent = this;
	this.instance.setTransform(834.3,833,1,1,0,0,0,-365.9,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// Layer 18
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgjDAB4QgyAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAyAAMBGHAAAQAyAAAjAjQAjAjAAAxQAAAxgjAkQgjAjgyAAgEgj8gA3QgXAXAAAgQAAAhAXAXQAYAYAhAAMBGHAAAQAiAAAXgYQAXgXAAghQAAgggXgXQgXgYgiAAMhGHAAAQghAAgYAYg");
	this.shape.setTransform(608.6,833.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	// Isolation Mode
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgimAAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAMBFNAAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape_1.setTransform(609.3,829.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(24));

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgjDABkQgpAAgegeQgdgcAAgqQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAAqgdAcQgdAegqAAg");
	var mask_graphics_23 = new cjs.Graphics().p("EgjDABkQgpAAgegeQgdgcAAgqQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAAqgdAcQgdAegqAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:608.3,y:833.6}).wait(23).to({graphics:mask_graphics_23,x:608.3,y:833.6}).wait(1));

	// Layer 16
	this.instance_1 = new lib.Symbol17copy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(606.4,833.6,1,1,0,0,0,234.4,10);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	// Layer 15
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.659)").s().p("EgjDABkQgpAAgegdQgdgeAAgpQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAApgdAeQgdAdgqAAg");
	this.shape_2.setTransform(608.3,833.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_3.setTransform(430.8,792.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVCWQgKgCgIgEQgHgFgEgKQgEgIgBgNIABgGIACgIIAdAAQABAPAFAGQAFAGALAAIAIgBQAFgBADgFQAEgDACgHQABgGAAgLIAAgkQgFAHgJAGQgIAFgNAAIgJgBIgKgDQgGgDgFgFQgGgGgEgJQgEgJgCgNQgDgOAAgTIAAg8QAAgTADgMQACgNAEgKQAEgIAGgFQAFgFAGgDIAKgDIAKAAQAIAAAGACQAGABAFAFIAIAHIAGAJIADgWIAhAAIAADaQAAATgEAPQgDAQgIALQgIALgMAGQgMAFgQABQgLgBgKgCgAgHh4QgEACgDAFQgDAFgCAHIgBAWIAABKIABAUQACAJADAEQADAFAEABIAHADIAHgCIAGgEIAFgFIADgGIAAh8QgDgIgFgEQgFgFgIAAg");
	this.shape_4.setTransform(414.6,795.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhHg");
	this.shape_5.setTransform(398.3,792.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_6.setTransform(383.4,789.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},23).wait(1));

	// Layer 10
	this.instance_2 = new lib.box3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1612.7,775.3,1,1,0,0,0,166.5,166.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(2));

	// Layer 4
	this.instance_3 = new lib.circle3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-62,1212.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).wait(2));

	// Isolation Mode
	this.instance_4 = new lib.centerflash();
	this.instance_4.parent = this;
	this.instance_4.setTransform(612.8,637.1,0.09,0.09,0,0,0,253.9,253.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(1).to({regX:257,regY:257,scaleX:0.32,scaleY:0.32,x:613.8,y:638},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:614.5,y:638.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:615.2,y:639.5},0).wait(1).to({scaleX:1,scaleY:1,x:615.9,y:640.2},0).wait(2));

	// rightbar
	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1279,636.1,1,1,0,0,0,300.8,12.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).wait(1).to({x:1243.3},0).wait(1).to({x:1207.6},0).wait(1).to({x:1171.9},0).wait(1).to({x:1136.2},0).wait(1).to({x:1100.5},0).wait(1).to({x:1064.8},0).wait(1).to({x:1029.1},0).wait(1).to({x:993.4},0).wait(1).to({x:957.7},0).wait(1).to({x:922},0).wait(6));

	// leftbar
	this.instance_6 = new lib.Symbol8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-72,636.1,1,1,0,0,0,300.8,12.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).wait(1).to({x:-32.4},0).wait(1).to({x:7.1},0).wait(1).to({x:46.7},0).wait(1).to({x:86.2},0).wait(1).to({x:125.8},0).wait(1).to({x:165.3},0).wait(1).to({x:204.9},0).wait(1).to({x:244.4},0).wait(1).to({x:284},0).wait(1).to({x:323.5},0).wait(6));

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSCQQgHgJAAgPQAAgSAHgHQAHgIALAAQAMAAAIAIQAGAIAAARQAAAPgGAIQgIAJgMAAQgLAAgHgIgAgQA5IgGjQIAsAAIgFDQg");
	this.shape_7.setTransform(642.6,373.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgFgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgJAAgHgCg");
	this.shape_8.setTransform(631.4,374.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAGgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_9.setTransform(617.2,377);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAAOIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_10.setTransform(601.2,377.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_11.setTransform(585,377);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgLgCgQQgDgQAAgWIAAgjQAAgXADgPQACgRAFgKQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAXIAAAjQAAAWgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAFgIABIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA2IABAbQABALADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgLIABgbIAAg2IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_12.setTransform(568.7,377.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+CZIAAkuIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAFQAFAGAEAJQAEAJADAOQACANAAATIAABGQAAASgCAOQgDANgEAJQgEAKgFAFQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAcIAAA+gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHABIAIgBQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_13.setTransform(552.9,380.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag+CZIAAkuIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAFQAFAGAEAJQAEAJADAOQACANAAATIAABGQAAASgCAOQgDANgEAJQgEAKgFAFQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAcIAAA+gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHABIAIgBQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_14.setTransform(536.5,380.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgLgCgQQgDgQAAgWIAAgjQAAgXADgPQACgRAFgKQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAXIAAAjQAAAWgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAFgIABIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA2IABAbQABALADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgLIABgbIAAg2IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_15.setTransform(520.1,377.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_16.setTransform(499.3,377);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgzBlQgLgNAAgdIAAitIAqAAIAACqQAAAQAFAFQAEAGAJAAQAGAAAGgDQAGgEAFgHIAAi3IAqAAIAADjIghAAIgEgYQgFAIgFAEQgGAGgGADIgLAEIgNACQgUAAgLgPg");
	this.shape_17.setTransform(483.5,377.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgLgCgQQgDgQAAgWIAAgjQAAgXADgPQACgRAFgKQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAXIAAAjQAAAWgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAFgIABIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA2IABAbQABALADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgLIABgbIAAg2IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_18.setTransform(467.1,377.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_19.setTransform(451.7,380.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWCYIgKgEQgGgCgGgGQgFgFgEgJQgEgJgCgOQgDgOAAgTIAAhIQAAgTADgNQACgNAEgJQAFgJAGgFQAGgFAFgCIAKgDIAJAAIALABIAJAFIAIAGIAHAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgIAIIgMAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAHgBIAHgEIAEgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_20.setTransform(751.4,328.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_21.setTransform(735,332.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgSAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_22.setTransform(719,332.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgHQgHgHgEgLQgFgKgCgRQgDgQAAgWIAAgjQAAgWADgRQACgPAFgLQAFgLAGgGQAGgHAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHAEAGAGQAGAHAFAKQAFALADAQQACAQAAAXIAAAjQAAAVgCARQgDAQgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAbQABALADAGQADAHAEADQAEADAFgBQAFABAEgDQAEgDADgHQACgGABgLIABgbIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_23.setTransform(696.1,332.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgGgGgEgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_24.setTransform(682.8,329.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_25.setTransform(665.5,328.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_26.setTransform(656.9,328.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_27.setTransform(648.4,328.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAYCXIgvhyIgBAAIAAByIgqAAIAAktIAqAAIAACtIABAAIAthjIAoAAIgyBnIA3B8g");
	this.shape_28.setTransform(637.3,328.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWBzQgKgDgIgGQgHgGgEgJQgFgKAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgIIgGgHIgdglIgMgOIgKgPIgGgRQgDgKAAgJQAAgOAFgKQAEgKAIgGQAHgHALgDQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAHIgBAGQAAAJADAGIAKAQIAhAlIAIALIAKAPIAHARQADAIAAALQAAAMgEAJQgEALgHAGQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_29.setTransform(621.6,332.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgSAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_30.setTransform(599.8,332.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgIAAgIgCg");
	this.shape_31.setTransform(586.7,329.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgHIANgGIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHABQgFADgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAIIgHAJIgGAMQgCAHAAAIQAAAOAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_32.setTransform(572.6,332.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgGAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgEgBIgJgCQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIAEAZQAFgIAGgFIALgJIAMgEIAOgCQANAAAIAHQAJAGAFANQAFgHAGgFIALgIIANgEIAMgCQATAAALAPQAMAOAAAcIAACug");
	this.shape_33.setTransform(553,332.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_34.setTransform(536.2,328.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgIAAgIgCg");
	this.shape_35.setTransform(526.4,329.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_36.setTransform(516.3,328.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgzBmQgLgOAAgdIAAitIAqAAIAACqQAAAQAFAFQAEAGAJAAQAGAAAGgEQAGgDAFgHIAAi3IAqAAIAADjIghAAIgEgZQgFAIgFAGQgGAFgGADIgLAEIgNABQgUAAgLgNg");
	this.shape_37.setTransform(503.5,332.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgSAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_38.setTransform(480.2,332.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAVCXIAAisQAAgQgFgGQgEgFgJAAQgGgBgGAFQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgEIALgHIALgEIALgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_39.setTransform(464,328.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_40.setTransform(450.1,329.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_41.setTransform(764.9,287.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgWByQgKgCgIgGQgHgGgEgJQgFgKAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAFAFADQAFABAFABQAKAAAEgGQAFgFAAgHIgBgHIgDgGIgFgHIgGgIIgdgkIgMgPIgKgQIgGgQQgDgKAAgKQAAgNAFgJQAEgLAIgGQAHgHALgDQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgIgCgGQgCgGgEgCQgEgDgGAAQgFAAgDACIgGAFIgDAFIgBAHQAAAIADAIIAKAPIAhAmIAIAKIAKAPIAHARQADAIAAALQAAALgEAKQgEAKgHAHQgIAHgKAEQgLAEgNAAQgMAAgKgDg");
	this.shape_42.setTransform(750.3,287.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgNCOQgHgBgIgDQgHgDgHgGQgHgFgGgLQgFgJgDgPQgEgPAAgUIAAjEIAsAAIAADPIABAWQABAJADAFQADAFAFADQAEABAGABQAGgBAFgBQAFgDADgFQADgFABgJIACgWIAAjPIArAAIAADEQAAAUgEAPQgDAPgFAJQgGALgHAFQgHAGgIADQgHADgIABIgNABg");
	this.shape_43.setTransform(734.3,285.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgSCQQgHgJAAgPQAAgSAHgHQAHgIALAAQANAAAGAIQAHAIAAARQAAAPgHAIQgGAJgNAAQgLAAgHgIgAgQA5IgGjQIAsAAIgFDQg");
	this.shape_44.setTransform(712.3,284.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_45.setTransform(702.3,284);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_46.setTransform(693.7,284);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgzBmQgLgOAAgcIAAivIAqAAIAACrQAAAPAFAHQAEAFAJAAQAGAAAGgEQAGgDAFgHIAAi4IAqAAIAADkIghAAIgEgZQgFAIgFAGQgGAFgGADIgLAEIgNABQgUABgLgOg");
	this.shape_47.setTransform(680.9,287.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgcCYIAAjFIgUAAIAAgeIAUAAIAAgRQAAgSAEgMQAEgLAGgHQAHgHAIgCQAJgDALAAIAGABIAIABIAHACIAHACIAAAeQgHgCgJAAIgIABIgHAFIgEAIIgCAMIAAARIAgAAIAAAeIggAAIAADFg");
	this.shape_48.setTransform(667.8,283.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgWByQgKgCgIgGQgHgGgEgJQgFgKAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAFAFADQAFABAFABQAKAAAEgGQAFgFAAgHIgBgHIgDgGIgFgHIgGgIIgdgkIgMgPIgKgQIgGgQQgDgKAAgKQAAgNAFgJQAEgLAIgGQAHgHALgDQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgIgCgGQgCgGgEgCQgEgDgGAAQgFAAgDACIgGAFIgDAFIgBAHQAAAIADAIIAKAPIAhAmIAIAKIAKAPIAHARQADAIAAALQAAALgEAKQgEAKgHAHQgIAHgKAEQgLAEgNAAQgMAAgKgDg");
	this.shape_49.setTransform(648.1,287.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_50.setTransform(637,283.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_51.setTransform(619.7,287.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_52.setTransform(604,287.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_53.setTransform(589.1,284.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_54.setTransform(565.8,287.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgVCWQgKgCgIgEQgHgGgEgJQgEgIgBgNIABgGIACgIIAeAAQAAAPAFAGQAFAGALAAIAIgBQAFgBADgFQAEgDACgHQABgGAAgLIAAgkQgFAHgJAGQgIAFgNAAIgJgBIgKgDQgGgDgFgFQgGgGgEgJQgEgJgCgNQgDgOAAgTIAAg8QAAgSADgNQACgNAEgKQAEgIAGgFQAFgFAGgDIAKgDIAKAAQAIAAAGACQAGABAFAFIAIAHIAGAJIADgWIAhAAIAADaQAAATgEAPQgDAQgIALQgIALgMAGQgMAFgQABQgLgBgKgCgAgHh4QgEACgDAFQgDAFgCAHIgBAWIAABKIABAUQACAJADAEQADAFAEABIAHADIAHgCIAGgEIAFgFIADgGIAAh8QgDgIgFgEQgFgFgIAAg");
	this.shape_55.setTransform(549.6,291.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_56.setTransform(533.3,287.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_57.setTransform(520.6,287.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_58.setTransform(500.3,287.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgzBmQgLgOAAgcIAAivIAqAAIAACrQAAAPAFAHQAEAFAJAAQAGAAAGgEQAGgDAFgHIAAi4IAqAAIAADkIghAAIgEgZQgFAIgFAGQgGAFgGADIgLAEIgNABQgUABgLgOg");
	this.shape_59.setTransform(484.5,287.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgHgEgLQgFgMgCgQQgDgQAAgXIAAgjQAAgWADgQQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_60.setTransform(468.1,287.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgVCOIAAhfIg5i8IArAAIAjCIIABAAIAiiIIAsAAIg6C8IAABfg");
	this.shape_61.setTransform(452.3,284.9);

	this.instance_7 = new lib.Path_9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(608.9,683.2,1,1,0,0,0,382.2,671.2);
	this.instance_7.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},22).wait(2));

	// Layer 3
	this.instance_8 = new lib.Symbol22();
	this.instance_8.parent = this;
	this.instance_8.setTransform(476.2,608.2,1,1,0,0,0,181.6,181.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24));

	// Layer 3
	this.instance_9 = new lib.Path_8();
	this.instance_9.parent = this;
	this.instance_9.setTransform(603.9,1021.8,1,1,0,0,0,112.8,112.8);
	this.instance_9.alpha = 0.488;

	this.instance_10 = new lib.Path_8();
	this.instance_10.parent = this;
	this.instance_10.setTransform(388.9,1209.9,1,1,0,0,0,112.8,112.8);
	this.instance_10.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).to({state:[{t:this.instance_10},{t:this.instance_9}]},23).wait(1));

	// Layer 8
	this.instance_11 = new lib.Path_8();
	this.instance_11.parent = this;
	this.instance_11.setTransform(816.2,1209.9,1,1,0,0,0,112.8,112.8);
	this.instance_11.alpha = 0.488;

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_62.setTransform(603.9,1021.7);

	this.instance_12 = new lib.ClipGroup_3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(603.9,1021.8,1,1,0,0,0,109.8,109.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ah4C5QhuioiXgRQCXgPBuipQB1i0ADj+QAED+B2C0QBtCpCXAPQiXARhtCoQh2C1gED9QgDj9h1i1gAF+AAQAQAAARAAIAAACQgRAAgQgCgAmeAAQARAAAQAAQgQACgRAAgAl9AAIAAAAg");
	this.shape_63.setTransform(547.3,990.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#697E9B").s().p("Amls4IJvAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtkrCvIhMAsQgXANgzALIgvAIg");
	this.shape_64.setTransform(646,1027.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A0BAD3").s().p("Ah4MZIhMgsQksiviuktQitkrAAlcIAAjmQAAhbBBhBQBAhABbAAITfAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtksCvIhMAsQg4AghBAAQhAAAg4ggg");
	this.shape_65.setTransform(603.8,1027.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_66.setTransform(603.9,1021.7);

	this.instance_13 = new lib.ClipGroup_1_0();
	this.instance_13.parent = this;
	this.instance_13.setTransform(601.9,1023.8,1,1,0,0,0,109.8,109.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D3E9EB").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjMQBTjFCYiYQCYiYDFhTQDMhXDeAAQDfAADMBXQDFBTCYCYQCYCYBTDFQBXDMAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjMBXjfAAQjeAAjMhXg");
	this.shape_67.setTransform(603.9,1021.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_68.setTransform(816.1,1209.9);

	this.instance_14 = new lib.ClipGroup_0();
	this.instance_14.parent = this;
	this.instance_14.setTransform(816.2,1209.9,1,1,0,0,0,109.8,109.8);

	this.instance_15 = new lib.ClipGroup_1_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(829,1222.1,1,1,0,0,0,122.6,122);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_69.setTransform(816.1,1209.9);

	this.instance_16 = new lib.ClipGroup_2_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(814.2,1211.9,1,1,0,0,0,109.8,109.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3F4826").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDFBUCYCYQCYCXBTDFQBXDMAADfQAADghXDLQhTDFiYCYQiYCYjFBTQjLBXjggBQjeABjMhXg");
	this.shape_70.setTransform(816.1,1209.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicidhWjKQhYjRgBjlQABjkBYjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBYDRAADkQAADlhYDRQhWDKicCdQicCcjLBWQjRBYjlABQjkgBjShYgAmevXQi/BSiUCUQiVCThRC/QhUDHAADYQAADZBUDGQBRC/CVCUQCUCUC/BSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBQi/QBUjGAAjZQAAjYhUjHQhQi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_71.setTransform(388.8,1209.9);

	this.instance_17 = new lib.ClipGroup_4();
	this.instance_17.parent = this;
	this.instance_17.setTransform(468.3,1158,1,1,0,0,0,191.2,163.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E8976B").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMABjfQgBjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDGBUCXCYQCYCXBTDFQBWDMABDfQgBDghWDLQhTDFiYCYQiXCYjGBTQjLBXjggBQjeABjMhXg");
	this.shape_72.setTransform(388.8,1209.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Ah4C5QhuioiXgRQCXgPBuipQB1i0ADj+QAED+B2C0QBtCpCXAPQAQAAARAAIAAACQgRAAgQgCQiXARhtCoQh2C1gED9QgDj9h1i1gAmeAAQARAAAQAAQgQACgRAAgAl9AAIAAAAg");
	this.shape_73.setTransform(547.3,990.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.instance_17},{t:this.shape_71},{t:this.shape_70},{t:this.instance_16},{t:this.shape_69},{t:this.instance_15},{t:this.instance_14},{t:this.shape_68},{t:this.shape_67},{t:this.instance_13},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.instance_12},{t:this.shape_62},{t:this.instance_11}]}).to({state:[{t:this.shape_72},{t:this.instance_17},{t:this.shape_71},{t:this.shape_70},{t:this.instance_16},{t:this.shape_69},{t:this.instance_15},{t:this.instance_14},{t:this.shape_68},{t:this.shape_67},{t:this.instance_13},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_73},{t:this.instance_12},{t:this.shape_62}]},23).wait(1));

	// Layer 2
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(10).p("EA6gAk3Mh0/AAAMAAAgp8QAAmdCfl6QCbltEZkZQEZkaFtiaQF5igGeAAMA1eAAAQGeAAF6CgQFtCaEZEaQEZEZCbFtQCfF6AAGdg");
	this.shape_74.setTransform(604.7,1118.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F9DD89").s().p("Eg6fAk3MAAAgp8QAAmeCgl5QCaltEZkZQEakaFsiaQF6ifGdAAMA1eAAAQGeAAF5CfQFtCaEaEaQEZEZCaFtQCgF5AAGeMAAAAp8g");
	this.shape_75.setTransform(604.7,1118.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74}]}).to({state:[{t:this.shape_75},{t:this.shape_74}]},23).wait(1));

	// Layer 11
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_76.setTransform(551.4,435);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_77.setTransform(535,435.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIANgEIAMgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_78.setTransform(514.6,435);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_79.setTransform(497.8,430.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_80.setTransform(485.4,431.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_81.setTransform(469,431.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_82.setTransform(452.3,435.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_83.setTransform(437.4,432.4);

	this.instance_18 = new lib.Path_11();
	this.instance_18.parent = this;
	this.instance_18.setTransform(494,431.5,1,1,0,0,0,142.9,32.4);
	this.instance_18.alpha = 0.66;

	this.instance_19 = new lib.bloodbar6();
	this.instance_19.parent = this;
	this.instance_19.setTransform(475.4,494.9,1,1,0,0,0,93.5,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]}).wait(24));

	// Layer 12
	this.instance_20 = new lib.Symbol15();
	this.instance_20.parent = this;
	this.instance_20.setTransform(796.8,233.4,1,1,0,0,0,112,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({regX:112.1,x:796.9},0).wait(22).to({regX:112,x:796.8},0).wait(1));

	// Layer 6
	this.instance_21 = new lib.Symbol21();
	this.instance_21.parent = this;
	this.instance_21.setTransform(459.9,611.2,1,1,0,0,0,144.8,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(24));

	// Layer 7
	this.instance_22 = new lib.Symbol14();
	this.instance_22.parent = this;
	this.instance_22.setTransform(822.2,349.1,1,1,0,0,0,126,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({regX:126.1,x:822.3},0).wait(22).to({regX:126,x:822.2},0).wait(1));

	// Layer 1
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_84.setTransform(861.5,169.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_85.setTransform(845.1,169.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AA+B0IAAitIgBgNIgDgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAGgFIALgJIANgEIAMgCQANAAAJAHQAJAGAFANQAFgHAFgFIAMgIIANgEIAMgCQATAAAMAPQAKAOABAcIAACug");
	this.shape_86.setTransform(824.7,169.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_87.setTransform(807.8,165.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_88.setTransform(799.3,165);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_89.setTransform(787.6,169.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_90.setTransform(772.8,169.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAFgFAGgCIALgDIAIAAIAMABIAIAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAHgBIAHgEIAEgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_91.setTransform(756.6,165.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_92.setTransform(741.1,169.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_93.setTransform(725.5,166.6);

	this.instance_23 = new lib.Path_10();
	this.instance_23.parent = this;
	this.instance_23.setTransform(793.1,167.7,1,1,0,0,0,142.9,32.4);
	this.instance_23.alpha = 0.66;

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C6DA92").s().p("AgUQbQhogDjQgzQjMgxjjhMQofi1ipiUQhihVAPhKQAKg1BMg9IA9guQAhgZAOgQQAngsg4gkQgagQjaAaQlzAtiPAMQs0BEoSivQkihejOk0Qi7kWhrmxQCtEMD3CLQHwEXI0CXQDSA4D/AwQA0AKFrA/QB/AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBuBegCBnQgBAzgYAgIBNgLQBigMBrgHQFYgUE3AyQCeAaCAAkQAaAICJAtQBEAXAqAAQA0ABBKgdQBBgYB3hDQCNhSBLgqQEWibCGAAQB9AABnBBQBGAsATAJQA5AdBDANQB/AZFajUQBOgwCshxQCBhUAjgRQAsgUBRAgQA2AUB0BCQCIBOBAAeQB4A5BfAQQC2AgFvAgQC4AQCTAKQgsCv55CjQoHAzpoArIoCAiQhqAJh+A1Qg0AVitBXQiMBHhdAfQh9Aoh0AAIgTAAg");
	this.shape_94.setTransform(445.4,764.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6FB77F").s().p("AkmAaIARg6ICyEJIiqlUIAghdICkGuIiDnuIBXgrIBJILIgjoCIBrAAIgjIKIBKnZIBAAaIhIFwIBdk+IA9AgIhsEqIB+kBIBAAYIi+FYIi8Aog");
	this.shape_95.setTransform(454,294.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EBA24D").s().p("Ag+gJIBuiSIAPE3g");
	this.shape_96.setTransform(429.1,312.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FAE485").s().p("Ahmh1IC0AdIAZDOg");
	this.shape_97.setTransform(415,320.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CD6C38").s().p("Ag+hmIB9CkIhkApg");
	this.shape_98.setTransform(429.1,321.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F2BC5F").s().p("AiRAsIEjh0IhvCRg");
	this.shape_99.setTransform(419.3,304.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EBA24D").s().p("AhsANIBniPIByEFg");
	this.shape_100.setTransform(423,283.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FAE485").s().p("AhWiFICtAhIhLDqg");
	this.shape_101.setTransform(403.5,295.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CD6C38").s().p("AhGh1IDYB1IkjB1g");
	this.shape_102.setTransform(419.3,296.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F2BC5F").s().p("AiJAnIEThuIhnCPg");
	this.shape_103.setTransform(408.6,277.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CD6C38").s().p("AhTiDIDdCXIkTBvg");
	this.shape_104.setTransform(408.6,268.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FAE485").s().p("Ag2iwIBtBbIg2EGg");
	this.shape_105.setTransform(394.7,264.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EBA24D").s().p("Ag3ASIBvicIgvEVg");
	this.shape_106.setTransform(450.4,303.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CD6C38").s().p("AAOhxIBCB5IifBqg");
	this.shape_107.setTransform(443.4,316.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FAE485").s().p("Ag2ibIBtBUIheDjg");
	this.shape_108.setTransform(439.3,312.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F2BC5F").s().p("AhugFIDdhIIhwCbg");
	this.shape_109.setTransform(445,297.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EBA24D").s().p("AhVApIAVjGICWE7g");
	this.shape_110.setTransform(447.4,273.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CD6C38").s().p("Ag8heICrB0IjdBJg");
	this.shape_111.setTransform(445,287.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FAE485").s().p("AhRiCICjBIIgxC9g");
	this.shape_112.setTransform(430.6,283.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F2BC5F").s().p("AhcAbIC5h+IgVDHg");
	this.shape_113.setTransform(431.7,267.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EBA24D").s().p("AhFASIgShtIAQAJQAYATAoAsQA6BDAlAsg");
	this.shape_114.setTransform(432.1,248.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#CD6C38").s().p("AhBhkICeBKIi5B+g");
	this.shape_115.setTransform(431.7,260.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FAE485").s().p("AhziSIDnBdIgbDIg");
	this.shape_116.setTransform(413.5,255.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F2BC5F").s().p("AhzgmIDVgQIASBtg");
	this.shape_117.setTransform(413.5,245.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FAE485").s().p("AhwhTIC8AjIAlCEg");
	this.shape_118.setTransform(395,327.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#CD6C38").s().p("AhwhBIDhBiIi8Aig");
	this.shape_119.setTransform(413.9,328.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EBA24D").s().p("AhwATIAViIIDMDrg");
	this.shape_120.setTransform(413.9,320.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F2BC5F").s().p("AhoAhIDRhkIgVCHg");
	this.shape_121.setTransform(394.2,315.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FAE485").s().p("AhMilICZCAIgsDMg");
	this.shape_122.setTransform(380.3,302.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CD6C38").s().p("Ag9hlICmBlIjRBmg");
	this.shape_123.setTransform(394.2,308.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EBA24D").s().p("AhTAfIBFikIBiELg");
	this.shape_124.setTransform(396.4,295.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F2BC5F").s().p("AhugtIDdglIhEClg");
	this.shape_125.setTransform(383.7,290.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FAE485").s().p("AgigUQgCg7AEgeIAFgRIA+BbIg9CiQgEg4gEhbg");
	this.shape_126.setTransform(375.4,272.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#CD6C38").s().p("AgvhQICeB9IjdAlg");
	this.shape_127.setTransform(383.7,277.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#EBA24D").s().p("AhugDIAQiPIDNElg");
	this.shape_128.setTransform(411.3,255.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#EBA24D").s().p("AhPAzIBmjjIA5Fhg");
	this.shape_129.setTransform(386.9,264.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F2BC5F").s().p("Ag+gTIB9g0IgQCOg");
	this.shape_130.setTransform(395.5,248.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F2BC5F").s().p("AhSAXICliIIhmDjg");
	this.shape_131.setTransform(380.9,257.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#61B26F").s().p("AgNEEQgSgagqgDQgsgDgxAbIgoAbIASghQAagnApgfQAigZA2AIQAaAEATAIQgQgPgdgPQg8gfhAgCQg3gChPATIhDASIA3gdQBCghAzgRQAzgRBRAXQAoALAdAPQgVgWgmgcQhNg4hWggQhWghhVAUQgbAHgXAKIgSAKIBAgyQBTgxBYAAQBagBBPA9QAnAfAWAeQgOgagFgmQgMhMAng6QAkg3BcgUQAugKAmABQgXAPgdAaQg5AzgWA1QgWA1AjBKQATAlAXAaQgCgYAHghQAOhEApgxQA7hGBZAAQAsAAAgAOQgnAJgsAUQhZApgbA8QgeA/AgBQQAPAnAWAbIkjCAQAAgNgJgOg");
	this.shape_132.setTransform(382.8,226);

	this.instance_24 = new lib.Path_2_3();
	this.instance_24.parent = this;
	this.instance_24.setTransform(435.4,329.8,1,1,0,0,0,47.2,14.5);
	this.instance_24.alpha = 0.262;

	this.instance_25 = new lib.Path_3_6();
	this.instance_25.parent = this;
	this.instance_25.setTransform(811.8,434.7,1,1,0,0,0,81.6,12.8);
	this.instance_25.alpha = 0.262;

	this.instance_26 = new lib.Path_4_4();
	this.instance_26.parent = this;
	this.instance_26.setTransform(467.7,764.8,1,1,0,0,0,108.5,12.8);
	this.instance_26.alpha = 0.262;

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#A6BD55").s().p("EgsGAO1IBjhbQCEhxCfhtQH9leJTi0QD3hLFShcQEihRBrgiQCvg4CKhDQCUhJC3h5QC2h4G4iHQGgiAHHhSQHahXEYAHQE7AIgpCCQgqCDlvDuQlRDboSECQoED6oUDQQoqDZmMBkQtnDcqABGQj9Aci2AAQlGAAhfhag");
	this.shape_133.setTransform(1002.1,719.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgFQg5gCAJgIIAMgGQAFgEgJgCQgUgGgWgBQgggCiYgDQhwgCmGAFIlwAGQifADg5AHQh6AQk/gEQhdgBgpgIQgagHgNgBIi2ACQisABgkgFQglgFAOgIIAXgHIiYgNIK+gTQH4gLHaABQQQABV1BEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_134.setTransform(299.2,716.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhUgMIg2gLQjfADhjgEQg6gDALgIIAKgGQAFgEgHgCQgVgGgWgBQgfgCiYgDQhxgCmFAFIlwAGQigADg5AIQh6APk/gEQhdgBgpgIQgZgHgNgBIi3ACQisACgkgFQglgFAPgIIAWgIIiYgNQIggQCegDQH3gLHbABQQQABV1BEQKKAfKhBAQFQAgDOAaI08g3g");
	this.shape_135.setTransform(363.5,710.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgEQg6gDALgIIAKgGQAFgEgIgCQgTgGgXgBIi3gFQhxgCmGAFIlvAGQigADg5AIQh6APk/gEQhdgBgpgIQgagHgNgBIi2ACQisACgkgFQgmgFAPgIIAXgIIiYgNQIfgQCfgDQH3gLHbABQQAABWFBEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_136.setTransform(427.3,701.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A6BD55").s().p("ADZPxQmwgjklh+QqFkXnAlzQnwmag7l4QAhgmA8g0QB4hqCJhNQG4j2HBCHQC7A4D8BcQDZBPBRAVQCFAhBugQQB5gQCchQQCchQFNBgQE7BbFHDMQFWDVC5DpQDQEFhADOQhCDSk5CYQkfCLmsA9QkLAmkKAAQiVAAiVgMg");
	this.shape_137.setTransform(237.3,672.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#61763D").s().p("EAl9ADLIiogUIgkAEQgnADhWgIQkqgehqgbQgggIhXgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDggAWgl4gCiIH6gCQJzAGJZAkQUXBNOzBoQG4AwHLA/QC/AZHFBCIiNgDIAUAKQANAJgjABIgEABQgmAAiWgTg");
	this.shape_138.setTransform(1169.8,535.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgJQkjgchxgcQgggIhXgNIhQgMQp5hUimgNQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJZAjQUNBNO9BpQG0AwHPA+IKEBbIiNgCIAUAKQANAJgkABIgDABQgnAAiWgTg");
	this.shape_139.setTransform(1111.4,521.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#61763D").s().p("EAl9ADLIiogUIglAEQgmADhWgJQkkgchwgcQgggIhXgNIhQgMQp5hUimgOQiKgMgfgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJaAjQUFBNPFBoQG2AxHMA+QC8AaHHBBIiMgCIAUAKQANAJgkABIgDABQgmAAiWgTg");
	this.shape_140.setTransform(1053.5,507.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgIQkqgehqgbQghgIhWgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh9gOIhxgOQgMAEgnACQhPADiLgOUgDhgAWgl3gCiIH6gCQJyAGJaAkQUJBMPBBpQG2AwHNA+QCmAXHeBFIiNgDIAUAKQAMAJgjABIgDABQgnAAiWgTg");
	this.shape_141.setTransform(973.5,492.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#61763D").s().p("Eg9wAIFQg6gaAJg+QAEgTAJgVIAJgRIjgg3QK2j4DshKQKejSKJh5QK9iDNDgnQNcgpP4A4QOfAzPqEZQH2CME7CBQuggTvLgOQ+VgcjSAZQjQAaiDg9QgogUgcgYIgUgWQhLAVhcATQi4AohZgFQhSgFAEg4IAGgwQACgbgOgOIgcgaQgOgKgZgDQgtgEjUASQicANoMCPIntCNQg1AQg+AYQh7AwgrAqQhVBTiwA0QiBAmjEAZQiAAPhCgpQgPgJgWgVQgQgQgKAAQgLgBhKAUIihApQihAnhMAAQgiAAgRgIg");
	this.shape_142.setTransform(606.2,322.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#8CAC50").s().p("EgmdApkQxvjbtsmPQtsmQnfoGQnyoYAApMQAApLHyoYQHgoGNrmQQNsmPRvjbQSXjjUGAAQUHAASXDjQRvDbNsGPQNsGQHgIGQHxIYAAJLQAAJMnxIYQnhIGtrGQQtsGPxvDbQyXDj0HAAQ0GAAyXjjg");
	this.shape_143.setTransform(644.1,557.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#917556").s().p("AnmTjQgfgYgJg6QgHgxAHhfQAhkYAMjQQAOkCgxkUQg/kdgUiBQgdi3BKjbQBEjJB6iTQAZgdCcgZQCLgWC+gLQC7gKCCAGQCPAGACAZQAEAvh+AxQhmAokMBEQhyAdhCA0Qg4AqgkBGQgQAfgnBqQgjBeglA9QgsBKgBBQQAAA6AaBiQAoCUAHAnQAYB6gEB6QgMExhVF+QhRFog7AAQgHAAgHgFg");
	this.shape_144.setTransform(575,953);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#74542E").s().p("AMSY+QkPifh2kGQg+iKg0l9QgdjXgzoIQgunggci3Qgukig3gIQjYgjhpHkQgjCjgRDJQgNCRABBQQAECvgzFOQhCGyhqCnQhmCgixAzQg4AQg4ADIgtAAQhbo6gajkQgcj7AFoGQAGpwBHi7QASgwAqiHQAchbAcgtQAmg+BFguQBNgyCLgwQDwhTEmgdQCbgPDXgLQCGgOCjBAQCvBEB0B+QCjCwAtD9QBAFtioIgQhWEWAND7QALDABJDKQAqByBVC+QA/CcgHBmQgPDRg3BWQgbAqgZABQhvgbiHhPg");
	this.shape_145.setTransform(609,973.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#644725").s().p("EgTKAnDQgthJgHhDQgHg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBPDYA2HOQAVCvgPC9QgKCPglDKIhAFeQgjDRgKCsQgKCyA4EGQAfCNBaFCQBQEcAVCBQAhDFguBbQguBdiwAeQiGAWkHgKQk5gRiegEQkUgHinAcQiyAei/CtQiDB2iuDhQjBD7gkAkQg9A/goAAQgZAAgRgag");
	this.shape_146.setTransform(609.1,1026.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#917556").s().p("AHpbTQgvhWggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAdQgnALieBTQiCBEhCgBQhhgCgjh/QgtingZi6QgVieAAh3QAAhYHMASQDmAJDlAaIBiAaQB1AiBjAmQE+B5ARB0QAPBkgPCOQgKBWgjDEQhOG1AAEWQAAE7A2GiQAcDaApENQAFAsAVBrQAVBpAHA+QAWDQhMCkQhJCdhKAGIgGAAQg7AAg2hgg");
	this.shape_147.setTransform(369.8,993.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#74542E").s().p("EAIaAkwQhsgRg1gwQgRgPgJgQIgFgOQgggNgfgnQg+hOAGh+QAFh3hRhgIhNhUQgvg1gcgzQgyhahwoEQh4orgjhcQgYg+hNiRQhwjQgphUQjYmxhhmhQhynmgTk2QgGhlADhfQAFhYAAggQAAhQP7hQQH+goH+gYIgyFhQgzF3AABtQAABXAHITQAFH6gMBUQgNBnAADvQAADwANCDQAFArAcDNQAcDiAPC1QAvI+hPD9QhaEhhqBqQhMBMhpAAQgYAAgbgEg");
	this.shape_148.setTransform(380.8,1039.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#917556").s().p("AkXL0Qg8gGAQmJQAJjNADhVQAEiOgOgeQgNgdghgiIg8g4QhHhGALhJQAFgiAggJQAXgGA6AEQBWAGAbAAQBKAAA9gQQBegZEJiwQB3hPAsgYQBIgpAOAQQAXAajbELQj/E1giBBQgZAygmCVQgWBXguDFQhYFlg8AAIgCAAg");
	this.shape_149.setTransform(854.3,909.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#74542E").s().p("AqpWMQg2gpgZjSQgUimADjOQABhGAsi7IBYljQBunJhCgrQhbg7gwh8Qg1iJAWimQATiSBshqQA2g0AzgYIAWAIQAgAIAuADQCUAJDvgxQDugxE8h2QCeg7BugxIAHBRQABBvgaCXQgPBUg1BHQgqA5hTBEIijB+QhpBUhLBNQiUCbiiIBQgoB+hJEAQg6DMgWA6QhRDTh2DOQh7DUg4AAQgKAAgHgGg");
	this.shape_150.setTransform(865.6,947.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#644725").s().p("EgOJAgiQgkgZgbhIQhAioAYkJQAKhqARmVQAapRAKjIQA3w+BKkEQBNkMCGi8QBDheA0gpIBHAEQBaADBigFQE3gQEOhaQENhZDfhzQBwg5A5gnIgYCyQgjDbgzDKQijKGkGDsQiSCDhYDPQhFCkgxD/QgdCVgwE4QgwEYg8C2Qh8F6kvFAQhhBmh2BkQg+A0hIA5QgTARgUAAQgQAAgRgMg");
	this.shape_151.setTransform(860.3,1003.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg4hih5o0QiDpfgmhlQhFi3ihkjQinkvknnXQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_152.setTransform(363.5,981.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#523821").s().p("EhKDAj2QjIAAi3hOQixhLiJiJQiJiJhLixQhOi3AAjIMAAAgo1QAAjIBOi3QBLixCJiJQCJiJCxhLQC3hODIAAMCUHAAAQDIAAC4BOQCxBLCICJQCJCJBLCxQBOC3AADIMAAAAo1QAADIhOC3QhLCxiJCJQiICJixBLQi4BOjIAAg");
	this.shape_153.setTransform(660.1,880.9);

	this.instance_27 = new lib.Path_14();
	this.instance_27.parent = this;
	this.instance_27.setTransform(978.7,201.8,1,1,0,0,0,195.2,33.5);
	this.instance_27.alpha = 0.77;

	this.instance_28 = new lib.Path_1_9();
	this.instance_28.parent = this;
	this.instance_28.setTransform(330.1,217.6,1,1,0,0,0,153,26.3);
	this.instance_28.alpha = 0.77;

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-304.3,0,304.4).s().p("Eg6lAuQMAAAhdzMB1LAAAMAAABfHg");
	this.shape_154.setTransform(603.8,304.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_154},{t:this.instance_28},{t:this.instance_27},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.instance_23},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]}).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1446.2,1359);


(lib.page7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// Layer 3
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(476.2,608.2,1,1,0,0,0,181.6,181.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// Layer 7
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(600.1,684.2,1,1,0,0,0,414.1,696.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(1).to({regY:696.2,y:684.3,alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(7));

	// Layer 3
	this.instance_2 = new lib.fire();
	this.instance_2.parent = this;
	this.instance_2.setTransform(834.3,833,1,1,0,0,0,-365.9,56.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).wait(5));

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgimAAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAMBFNAAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape.setTransform(609.3,829.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21));

	// Layer 18
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgjDAB4QgyAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAyAAMBGHAAAQAyAAAjAjQAjAjAAAxQAAAxgjAkQgjAjgyAAgEgj8gA3QgXAXAAAgQAAAhAXAXQAYAYAhAAMBGHAAAQAiAAAXgYQAXgXAAghQAAgggXgXQgXgYgiAAMhGHAAAQghAAgYAYg");
	this.shape_1.setTransform(608.6,833.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(21));

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjDABkQgpAAgegeQgdgcAAgqQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAAqgdAcQgdAegqAAg");
	mask.setTransform(608.3,833.6);

	// Layer 16
	this.instance_3 = new lib.Symbol17copy2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(477.7,833.6,1,1,0,0,0,234.4,10);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({x:503.4},0).wait(1).to({x:529.2},0).wait(1).to({x:554.9},0).wait(1).to({x:580.7},0).wait(1).to({x:606.4},0).wait(5));

	// Layer 15
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.659)").s().p("EgjDABkQgpAAgegdQgdgeAAgpQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAApgdAeQgdAdgqAAg");
	this.shape_2.setTransform(608.3,833.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_3.setTransform(430.8,792.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVCWQgKgCgIgEQgHgFgEgKQgEgIgBgNIABgGIACgIIAdAAQABAPAFAGQAFAGALAAIAIgBQAFgBADgFQAEgDACgHQABgGAAgLIAAgkQgFAHgJAGQgIAFgNAAIgJgBIgKgDQgGgDgFgFQgGgGgEgJQgEgJgCgNQgDgOAAgTIAAg8QAAgTADgMQACgNAEgKQAEgIAGgFQAFgFAGgDIAKgDIAKAAQAIAAAGACQAGABAFAFIAIAHIAGAJIADgWIAhAAIAADaQAAATgEAPQgDAQgIALQgIALgMAGQgMAFgQABQgLgBgKgCgAgHh4QgEACgDAFQgDAFgCAHIgBAWIAABKIABAUQACAJADAEQADAFAEABIAHADIAHgCIAGgEIAFgFIADgGIAAh8QgDgIgFgEQgFgFgIAAg");
	this.shape_4.setTransform(414.6,795.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhHg");
	this.shape_5.setTransform(398.3,792.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_6.setTransform(383.4,789.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(21));

	// Layer 3
	this.instance_4 = new lib.Path_8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(603.9,1021.8,1,1,0,0,0,112.8,112.8);
	this.instance_4.alpha = 0.488;

	this.instance_5 = new lib.Path_8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(816.2,1209.9,1,1,0,0,0,112.8,112.8);
	this.instance_5.alpha = 0.488;

	this.instance_6 = new lib.Path_8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(388.9,1209.9,1,1,0,0,0,112.8,112.8);
	this.instance_6.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(21));

	// Layer 8
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_7.setTransform(603.9,1021.7);

	this.instance_7 = new lib.ClipGroup_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(603.9,1021.8,1,1,0,0,0,109.8,109.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah4C5QhuioiXgRQCXgPBuipQB1i0ADj+QAED+B2C0QBtCpCXAPQAQAAARAAIAAACQgRAAgQgCQiXARhtCoQh2C1gED9QgDj9h1i1gAmeAAQARAAAQAAQgQACgRAAgAl9AAIAAAAg");
	this.shape_8.setTransform(547.3,990.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#697E9B").s().p("Amls4IJvAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtkrCvIhMAsQgXANgzALIgvAIg");
	this.shape_9.setTransform(646,1027.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A0BAD3").s().p("Ah4MZIhMgsQksiviuktQitkrAAlcIAAjmQAAhbBBhBQBAhABbAAITfAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtksCvIhMAsQg4AghBAAQhAAAg4ggg");
	this.shape_10.setTransform(603.8,1027.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_11.setTransform(603.9,1021.7);

	this.instance_8 = new lib.ClipGroup_1_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(601.9,1023.8,1,1,0,0,0,109.8,109.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D3E9EB").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjMQBTjFCYiYQCYiYDFhTQDMhXDeAAQDfAADMBXQDFBTCYCYQCYCYBTDFQBXDMAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjMBXjfAAQjeAAjMhXg");
	this.shape_12.setTransform(603.9,1021.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_13.setTransform(816.1,1209.9);

	this.instance_9 = new lib.ClipGroup_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(816.2,1209.9,1,1,0,0,0,109.8,109.8);

	this.instance_10 = new lib.ClipGroup_1_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(829,1222.1,1,1,0,0,0,122.6,122);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_14.setTransform(816.1,1209.9);

	this.instance_11 = new lib.ClipGroup_2_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(814.2,1211.9,1,1,0,0,0,109.8,109.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3F4826").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDFBUCYCYQCYCXBTDFQBXDMAADfQAADghXDLQhTDFiYCYQiYCYjFBTQjLBXjggBQjeABjMhXg");
	this.shape_15.setTransform(816.1,1209.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicidhWjKQhYjRgBjlQABjkBYjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBYDRAADkQAADlhYDRQhWDKicCdQicCcjLBWQjRBYjlABQjkgBjShYgAmevXQi/BSiUCUQiVCThRC/QhUDHAADYQAADZBUDGQBRC/CVCUQCUCUC/BSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBQi/QBUjGAAjZQAAjYhUjHQhQi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_16.setTransform(388.8,1209.9);

	this.instance_12 = new lib.ClipGroup_4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(468.3,1158,1,1,0,0,0,191.2,163.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E8976B").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMABjfQgBjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDGBUCXCYQCYCXBTDFQBWDMABDfQgBDghWDLQhTDFiYCYQiXCYjGBTQjLBXjggBQjeABjMhXg");
	this.shape_17.setTransform(388.8,1209.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.instance_12},{t:this.shape_16},{t:this.shape_15},{t:this.instance_11},{t:this.shape_14},{t:this.instance_10},{t:this.instance_9},{t:this.shape_13},{t:this.shape_12},{t:this.instance_8},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_7},{t:this.shape_7}]}).wait(21));

	// Layer 2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_18.setTransform(551.4,435);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_19.setTransform(535,435.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIANgEIAMgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_20.setTransform(514.6,435);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_21.setTransform(497.8,430.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_22.setTransform(485.4,431.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_23.setTransform(469,431.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_24.setTransform(452.3,435.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_25.setTransform(437.4,432.4);

	this.instance_13 = new lib.Path_11();
	this.instance_13.parent = this;
	this.instance_13.setTransform(494,431.5,1,1,0,0,0,142.9,32.4);
	this.instance_13.alpha = 0.66;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(10).p("EA6gAk3Mh0/AAAMAAAgp8QAAmdCfl6QCbltEZkZQEZkaFtiaQF5igGeAAMA1eAAAQGeAAF6CgQFtCaEZEaQEZEZCbFtQCfF6AAGdg");
	this.shape_26.setTransform(604.7,1118.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F9DD89").s().p("Eg6fAk3MAAAgp8QAAmeCgl5QCaltEZkZQEakaFsiaQF6ifGdAAMA1eAAAQGeAAF5CfQFtCaEaEaQEZEZCaFtQCgF5AAGeMAAAAp8g");
	this.shape_27.setTransform(604.7,1118.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.instance_13},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(21));

	// Layer 11
	this.instance_14 = new lib.bloodbar5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(475.4,494.9,1,1,0,0,0,93.5,12);

	this.instance_15 = new lib.bloodbar4();
	this.instance_15.parent = this;
	this.instance_15.setTransform(475.4,494.9,1,1,0,0,0,93.5,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_15}]},13).wait(8));

	// Layer 12
	this.instance_16 = new lib.Symbol15();
	this.instance_16.parent = this;
	this.instance_16.setTransform(796.8,233.4,1,1,0,0,0,112,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:112.1,x:796.9},0).wait(20));

	// Layer 6
	this.instance_17 = new lib.Symbol21();
	this.instance_17.parent = this;
	this.instance_17.setTransform(459.9,611.2,1,1,0,0,0,144.8,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(21));

	// Layer 7
	this.instance_18 = new lib.Symbol14();
	this.instance_18.parent = this;
	this.instance_18.setTransform(822.2,349.1,1,1,0,0,0,126,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regX:126.1,x:782.8,y:364.9},0).wait(1).to({x:744.9,y:384.2},0).wait(1).to({x:709.2,y:407.4},0).wait(1).to({x:677,y:435.2},0).wait(1).to({x:649.7,y:467.7},0).wait(1).to({x:628.8,y:504.7},0).wait(1).to({x:615.3,y:545},0).wait(1).to({x:609.1,y:587.1},0).wait(1).to({x:616.9,y:545.3},0).wait(1).to({x:630.7,y:505.2},0).wait(1).to({x:650.9,y:467.9},0).wait(1).to({x:677.3,y:434.6},0).wait(1).to({x:708.9,y:406.2},0).wait(1).to({x:744.3,y:382.7},0).wait(1).to({x:782.4,y:363.9},0).wait(1).to({x:822.3,y:349.1},0).wait(5));

	// Layer 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_28.setTransform(861.5,169.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_29.setTransform(845.1,169.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA+B0IAAitIgBgNIgDgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAGgFIALgJIANgEIAMgCQANAAAJAHQAJAGAFANQAFgHAFgFIAMgIIANgEIAMgCQATAAAMAPQAKAOABAcIAACug");
	this.shape_30.setTransform(824.7,169.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_31.setTransform(807.8,165.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_32.setTransform(799.3,165);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_33.setTransform(787.6,169.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_34.setTransform(772.8,169.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAFgFAGgCIALgDIAIAAIAMABIAIAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAHgBIAHgEIAEgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_35.setTransform(756.6,165.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_36.setTransform(741.1,169.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_37.setTransform(725.5,166.6);

	this.instance_19 = new lib.Path_10();
	this.instance_19.parent = this;
	this.instance_19.setTransform(793.1,167.7,1,1,0,0,0,142.9,32.4);
	this.instance_19.alpha = 0.66;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C6DA92").s().p("AgUQbQhogDjQgzQjMgxjjhMQofi1ipiUQhihVAPhKQAKg1BMg9IA9guQAhgZAOgQQAngsg4gkQgagQjaAaQlzAtiPAMQs0BEoSivQkihejOk0Qi7kWhrmxQCtEMD3CLQHwEXI0CXQDSA4D/AwQA0AKFrA/QB/AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBuBegCBnQgBAzgYAgIBNgLQBigMBrgHQFYgUE3AyQCeAaCAAkQAaAICJAtQBEAXAqAAQA0ABBKgdQBBgYB3hDQCNhSBLgqQEWibCGAAQB9AABnBBQBGAsATAJQA5AdBDANQB/AZFajUQBOgwCshxQCBhUAjgRQAsgUBRAgQA2AUB0BCQCIBOBAAeQB4A5BfAQQC2AgFvAgQC4AQCTAKQgsCv55CjQoHAzpoArIoCAiQhqAJh+A1Qg0AVitBXQiMBHhdAfQh9Aoh0AAIgTAAg");
	this.shape_38.setTransform(445.4,764.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6FB77F").s().p("AkmAaIARg6ICyEJIiqlUIAghdICkGuIiDnuIBXgrIBJILIgjoCIBrAAIgjIKIBKnZIBAAaIhIFwIBdk+IA9AgIhsEqIB+kBIBAAYIi+FYIi8Aog");
	this.shape_39.setTransform(454,294.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EBA24D").s().p("Ag+gJIBuiSIAPE3g");
	this.shape_40.setTransform(429.1,312.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FAE485").s().p("Ahmh1IC0AdIAZDOg");
	this.shape_41.setTransform(415,320.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CD6C38").s().p("Ag+hmIB9CkIhkApg");
	this.shape_42.setTransform(429.1,321.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F2BC5F").s().p("AiRAsIEjh0IhvCRg");
	this.shape_43.setTransform(419.3,304.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EBA24D").s().p("AhsANIBniPIByEFg");
	this.shape_44.setTransform(423,283.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FAE485").s().p("AhWiFICtAhIhLDqg");
	this.shape_45.setTransform(403.5,295.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CD6C38").s().p("AhGh1IDYB1IkjB1g");
	this.shape_46.setTransform(419.3,296.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F2BC5F").s().p("AiJAnIEThuIhnCPg");
	this.shape_47.setTransform(408.6,277.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CD6C38").s().p("AhTiDIDdCXIkTBvg");
	this.shape_48.setTransform(408.6,268.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FAE485").s().p("Ag2iwIBtBbIg2EGg");
	this.shape_49.setTransform(394.7,264.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EBA24D").s().p("Ag3ASIBvicIgvEVg");
	this.shape_50.setTransform(450.4,303.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CD6C38").s().p("AAOhxIBCB5IifBqg");
	this.shape_51.setTransform(443.4,316.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAE485").s().p("Ag2ibIBtBUIheDjg");
	this.shape_52.setTransform(439.3,312.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F2BC5F").s().p("AhugFIDdhIIhwCbg");
	this.shape_53.setTransform(445,297.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EBA24D").s().p("AhVApIAVjGICWE7g");
	this.shape_54.setTransform(447.4,273.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CD6C38").s().p("Ag8heICrB0IjdBJg");
	this.shape_55.setTransform(445,287.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FAE485").s().p("AhRiCICjBIIgxC9g");
	this.shape_56.setTransform(430.6,283.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F2BC5F").s().p("AhcAbIC5h+IgVDHg");
	this.shape_57.setTransform(431.7,267.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EBA24D").s().p("AhFASIgShtIAQAJQAYATAoAsQA6BDAlAsg");
	this.shape_58.setTransform(432.1,248.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CD6C38").s().p("AhBhkICeBKIi5B+g");
	this.shape_59.setTransform(431.7,260.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FAE485").s().p("AhziSIDnBdIgbDIg");
	this.shape_60.setTransform(413.5,255.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F2BC5F").s().p("AhzgmIDVgQIASBtg");
	this.shape_61.setTransform(413.5,245.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FAE485").s().p("AhwhTIC8AjIAlCEg");
	this.shape_62.setTransform(395,327.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CD6C38").s().p("AhwhBIDhBiIi8Aig");
	this.shape_63.setTransform(413.9,328.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EBA24D").s().p("AhwATIAViIIDMDrg");
	this.shape_64.setTransform(413.9,320.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F2BC5F").s().p("AhoAhIDRhkIgVCHg");
	this.shape_65.setTransform(394.2,315.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FAE485").s().p("AhMilICZCAIgsDMg");
	this.shape_66.setTransform(380.3,302.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CD6C38").s().p("Ag9hlICmBlIjRBmg");
	this.shape_67.setTransform(394.2,308.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EBA24D").s().p("AhTAfIBFikIBiELg");
	this.shape_68.setTransform(396.4,295.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F2BC5F").s().p("AhugtIDdglIhEClg");
	this.shape_69.setTransform(383.7,290.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FAE485").s().p("AgigUQgCg7AEgeIAFgRIA+BbIg9CiQgEg4gEhbg");
	this.shape_70.setTransform(375.4,272.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CD6C38").s().p("AgvhQICeB9IjdAlg");
	this.shape_71.setTransform(383.7,277.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EBA24D").s().p("AhugDIAQiPIDNElg");
	this.shape_72.setTransform(411.3,255.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EBA24D").s().p("AhPAzIBmjjIA5Fhg");
	this.shape_73.setTransform(386.9,264.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F2BC5F").s().p("Ag+gTIB9g0IgQCOg");
	this.shape_74.setTransform(395.5,248.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F2BC5F").s().p("AhSAXICliIIhmDjg");
	this.shape_75.setTransform(380.9,257.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#61B26F").s().p("AgNEEQgSgagqgDQgsgDgxAbIgoAbIASghQAagnApgfQAigZA2AIQAaAEATAIQgQgPgdgPQg8gfhAgCQg3gChPATIhDASIA3gdQBCghAzgRQAzgRBRAXQAoALAdAPQgVgWgmgcQhNg4hWggQhWghhVAUQgbAHgXAKIgSAKIBAgyQBTgxBYAAQBagBBPA9QAnAfAWAeQgOgagFgmQgMhMAng6QAkg3BcgUQAugKAmABQgXAPgdAaQg5AzgWA1QgWA1AjBKQATAlAXAaQgCgYAHghQAOhEApgxQA7hGBZAAQAsAAAgAOQgnAJgsAUQhZApgbA8QgeA/AgBQQAPAnAWAbIkjCAQAAgNgJgOg");
	this.shape_76.setTransform(382.8,226);

	this.instance_20 = new lib.Path_2_3();
	this.instance_20.parent = this;
	this.instance_20.setTransform(435.4,329.8,1,1,0,0,0,47.2,14.5);
	this.instance_20.alpha = 0.262;

	this.instance_21 = new lib.Path_3_6();
	this.instance_21.parent = this;
	this.instance_21.setTransform(811.8,434.7,1,1,0,0,0,81.6,12.8);
	this.instance_21.alpha = 0.262;

	this.instance_22 = new lib.Path_4_4();
	this.instance_22.parent = this;
	this.instance_22.setTransform(467.7,764.8,1,1,0,0,0,108.5,12.8);
	this.instance_22.alpha = 0.262;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A6BD55").s().p("EgsGAO1IBjhbQCEhxCfhtQH9leJTi0QD3hLFShcQEihRBrgiQCvg4CKhDQCUhJC3h5QC2h4G4iHQGgiAHHhSQHahXEYAHQE7AIgpCCQgqCDlvDuQlRDboSECQoED6oUDQQoqDZmMBkQtnDcqABGQj9Aci2AAQlGAAhfhag");
	this.shape_77.setTransform(1002.1,719.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgFQg5gCAJgIIAMgGQAFgEgJgCQgUgGgWgBQgggCiYgDQhwgCmGAFIlwAGQifADg5AHQh6AQk/gEQhdgBgpgIQgagHgNgBIi2ACQisABgkgFQglgFAOgIIAXgHIiYgNIK+gTQH4gLHaABQQQABV1BEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_78.setTransform(299.2,716.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhUgMIg2gLQjfADhjgEQg6gDALgIIAKgGQAFgEgHgCQgVgGgWgBQgfgCiYgDQhxgCmFAFIlwAGQigADg5AIQh6APk/gEQhdgBgpgIQgZgHgNgBIi3ACQisACgkgFQglgFAPgIIAWgIIiYgNQIggQCegDQH3gLHbABQQQABV1BEQKKAfKhBAQFQAgDOAaI08g3g");
	this.shape_79.setTransform(363.5,710.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgEQg6gDALgIIAKgGQAFgEgIgCQgTgGgXgBIi3gFQhxgCmGAFIlvAGQigADg5AIQh6APk/gEQhdgBgpgIQgagHgNgBIi2ACQisACgkgFQgmgFAPgIIAXgIIiYgNQIfgQCfgDQH3gLHbABQQAABWFBEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_80.setTransform(427.3,701.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A6BD55").s().p("ADZPxQmwgjklh+QqFkXnAlzQnwmag7l4QAhgmA8g0QB4hqCJhNQG4j2HBCHQC7A4D8BcQDZBPBRAVQCFAhBugQQB5gQCchQQCchQFNBgQE7BbFHDMQFWDVC5DpQDQEFhADOQhCDSk5CYQkfCLmsA9QkLAmkKAAQiVAAiVgMg");
	this.shape_81.setTransform(237.3,672.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#61763D").s().p("EAl9ADLIiogUIgkAEQgnADhWgIQkqgehqgbQgggIhXgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDggAWgl4gCiIH6gCQJzAGJZAkQUXBNOzBoQG4AwHLA/QC/AZHFBCIiNgDIAUAKQANAJgjABIgEABQgmAAiWgTg");
	this.shape_82.setTransform(1169.8,535.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgJQkjgchxgcQgggIhXgNIhQgMQp5hUimgNQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJZAjQUNBNO9BpQG0AwHPA+IKEBbIiNgCIAUAKQANAJgkABIgDABQgnAAiWgTg");
	this.shape_83.setTransform(1111.4,521.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#61763D").s().p("EAl9ADLIiogUIglAEQgmADhWgJQkkgchwgcQgggIhXgNIhQgMQp5hUimgOQiKgMgfgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJaAjQUFBNPFBoQG2AxHMA+QC8AaHHBBIiMgCIAUAKQANAJgkABIgDABQgmAAiWgTg");
	this.shape_84.setTransform(1053.5,507.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgIQkqgehqgbQghgIhWgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh9gOIhxgOQgMAEgnACQhPADiLgOUgDhgAWgl3gCiIH6gCQJyAGJaAkQUJBMPBBpQG2AwHNA+QCmAXHeBFIiNgDIAUAKQAMAJgjABIgDABQgnAAiWgTg");
	this.shape_85.setTransform(973.5,492.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#61763D").s().p("Eg9wAIFQg6gaAJg+QAEgTAJgVIAJgRIjgg3QK2j4DshKQKejSKJh5QK9iDNDgnQNcgpP4A4QOfAzPqEZQH2CME7CBQuggTvLgOQ+VgcjSAZQjQAaiDg9QgogUgcgYIgUgWQhLAVhcATQi4AohZgFQhSgFAEg4IAGgwQACgbgOgOIgcgaQgOgKgZgDQgtgEjUASQicANoMCPIntCNQg1AQg+AYQh7AwgrAqQhVBTiwA0QiBAmjEAZQiAAPhCgpQgPgJgWgVQgQgQgKAAQgLgBhKAUIihApQihAnhMAAQgiAAgRgIg");
	this.shape_86.setTransform(606.2,322.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#8CAC50").s().p("EgmdApkQxvjbtsmPQtsmQnfoGQnyoYAApMQAApLHyoYQHgoGNrmQQNsmPRvjbQSXjjUGAAQUHAASXDjQRvDbNsGPQNsGQHgIGQHxIYAAJLQAAJMnxIYQnhIGtrGQQtsGPxvDbQyXDj0HAAQ0GAAyXjjg");
	this.shape_87.setTransform(644.1,557.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#917556").s().p("AnmTjQgfgYgJg6QgHgxAHhfQAhkYAMjQQAOkCgxkUQg/kdgUiBQgdi3BKjbQBEjJB6iTQAZgdCcgZQCLgWC+gLQC7gKCCAGQCPAGACAZQAEAvh+AxQhmAokMBEQhyAdhCA0Qg4AqgkBGQgQAfgnBqQgjBeglA9QgsBKgBBQQAAA6AaBiQAoCUAHAnQAYB6gEB6QgMExhVF+QhRFog7AAQgHAAgHgFg");
	this.shape_88.setTransform(575,953);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#74542E").s().p("AMSY+QkPifh2kGQg+iKg0l9QgdjXgzoIQgunggci3Qgukig3gIQjYgjhpHkQgjCjgRDJQgNCRABBQQAECvgzFOQhCGyhqCnQhmCgixAzQg4AQg4ADIgtAAQhbo6gajkQgcj7AFoGQAGpwBHi7QASgwAqiHQAchbAcgtQAmg+BFguQBNgyCLgwQDwhTEmgdQCbgPDXgLQCGgOCjBAQCvBEB0B+QCjCwAtD9QBAFtioIgQhWEWAND7QALDABJDKQAqByBVC+QA/CcgHBmQgPDRg3BWQgbAqgZABQhvgbiHhPg");
	this.shape_89.setTransform(609,973.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#644725").s().p("EgTKAnDQgthJgHhDQgHg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBPDYA2HOQAVCvgPC9QgKCPglDKIhAFeQgjDRgKCsQgKCyA4EGQAfCNBaFCQBQEcAVCBQAhDFguBbQguBdiwAeQiGAWkHgKQk5gRiegEQkUgHinAcQiyAei/CtQiDB2iuDhQjBD7gkAkQg9A/goAAQgZAAgRgag");
	this.shape_90.setTransform(609.1,1026.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#917556").s().p("AHpbTQgvhWggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAdQgnALieBTQiCBEhCgBQhhgCgjh/QgtingZi6QgVieAAh3QAAhYHMASQDmAJDlAaIBiAaQB1AiBjAmQE+B5ARB0QAPBkgPCOQgKBWgjDEQhOG1AAEWQAAE7A2GiQAcDaApENQAFAsAVBrQAVBpAHA+QAWDQhMCkQhJCdhKAGIgGAAQg7AAg2hgg");
	this.shape_91.setTransform(369.8,993.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#74542E").s().p("EAIaAkwQhsgRg1gwQgRgPgJgQIgFgOQgggNgfgnQg+hOAGh+QAFh3hRhgIhNhUQgvg1gcgzQgyhahwoEQh4orgjhcQgYg+hNiRQhwjQgphUQjYmxhhmhQhynmgTk2QgGhlADhfQAFhYAAggQAAhQP7hQQH+goH+gYIgyFhQgzF3AABtQAABXAHITQAFH6gMBUQgNBnAADvQAADwANCDQAFArAcDNQAcDiAPC1QAvI+hPD9QhaEhhqBqQhMBMhpAAQgYAAgbgEg");
	this.shape_92.setTransform(380.8,1039.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#917556").s().p("AkXL0Qg8gGAQmJQAJjNADhVQAEiOgOgeQgNgdghgiIg8g4QhHhGALhJQAFgiAggJQAXgGA6AEQBWAGAbAAQBKAAA9gQQBegZEJiwQB3hPAsgYQBIgpAOAQQAXAajbELQj/E1giBBQgZAygmCVQgWBXguDFQhYFlg8AAIgCAAg");
	this.shape_93.setTransform(854.3,909.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#74542E").s().p("AqpWMQg2gpgZjSQgUimADjOQABhGAsi7IBYljQBunJhCgrQhbg7gwh8Qg1iJAWimQATiSBshqQA2g0AzgYIAWAIQAgAIAuADQCUAJDvgxQDugxE8h2QCeg7BugxIAHBRQABBvgaCXQgPBUg1BHQgqA5hTBEIijB+QhpBUhLBNQiUCbiiIBQgoB+hJEAQg6DMgWA6QhRDTh2DOQh7DUg4AAQgKAAgHgGg");
	this.shape_94.setTransform(865.6,947.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#644725").s().p("EgOJAgiQgkgZgbhIQhAioAYkJQAKhqARmVQAapRAKjIQA3w+BKkEQBNkMCGi8QBDheA0gpIBHAEQBaADBigFQE3gQEOhaQENhZDfhzQBwg5A5gnIgYCyQgjDbgzDKQijKGkGDsQiSCDhYDPQhFCkgxD/QgdCVgwE4QgwEYg8C2Qh8F6kvFAQhhBmh2BkQg+A0hIA5QgTARgUAAQgQAAgRgMg");
	this.shape_95.setTransform(860.3,1003.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg4hih5o0QiDpfgmhlQhFi3ihkjQinkvknnXQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_96.setTransform(363.5,981.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#523821").s().p("EhKDAj2QjIAAi3hOQixhLiJiJQiJiJhLixQhOi3AAjIMAAAgo1QAAjIBOi3QBLixCJiJQCJiJCxhLQC3hODIAAMCUHAAAQDIAAC4BOQCxBLCICJQCJCJBLCxQBOC3AADIMAAAAo1QAADIhOC3QhLCxiJCJQiICJixBLQi4BOjIAAg");
	this.shape_97.setTransform(660.1,880.9);

	this.instance_23 = new lib.Path_14();
	this.instance_23.parent = this;
	this.instance_23.setTransform(978.7,201.8,1,1,0,0,0,195.2,33.5);
	this.instance_23.alpha = 0.77;

	this.instance_24 = new lib.Path_1_9();
	this.instance_24.parent = this;
	this.instance_24.setTransform(330.1,217.6,1,1,0,0,0,153,26.3);
	this.instance_24.alpha = 0.77;

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-304.3,0,304.4).s().p("Eg6lAuQMAAAhdzMB1LAAAMAAABfHg");
	this.shape_98.setTransform(603.8,304.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.instance_24},{t:this.instance_23},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_19},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1446.2,1359);


(lib.page6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.stop();
		this.parent.gotoAndPlay("page7");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// Isolation Mode
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(492.1,739.3,1,1,0,0,0,84.4,82.5);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.07,scaleY:1.07,y:719.9,alpha:0.071},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:700.6,alpha:0.143},0).wait(1).to({scaleX:1.21,scaleY:1.21,y:681.2,alpha:0.214},0).wait(1).to({scaleX:1.27,scaleY:1.27,y:661.8,alpha:0.285},0).wait(1).to({scaleX:1.34,scaleY:1.34,y:642.4,alpha:0.356},0).wait(1).to({scaleX:1.41,scaleY:1.41,y:623.1,alpha:0.428},0).wait(1).to({scaleX:1.48,scaleY:1.48,y:603.7,alpha:0.499},0).wait(1).to({scaleX:1.55,scaleY:1.55,y:584.3,alpha:0.57},0).wait(1).to({y:565,alpha:0.38},0).wait(1).to({y:545.6,alpha:0.19},0).wait(1).to({y:526.2,alpha:0},0).wait(6));

	// Layer 3
	this.instance_1 = new lib.Symbol22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(476.2,608.2,1,1,0,0,0,181.6,181.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({regY:181.5,y:608.1,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(4));

	// Layer 20
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape.setTransform(551.4,435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_1.setTransform(535,435.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIANgEIAMgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_2.setTransform(514.6,435);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_3.setTransform(497.8,430.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_4.setTransform(485.4,431.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_5.setTransform(469,431.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_6.setTransform(452.3,435.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_7.setTransform(437.4,432.4);

	this.instance_2 = new lib.Path_11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(494,431.5,1,1,0,0,0,142.9,32.4);
	this.instance_2.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(17));

	// Isolation Mode
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgimAAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAMBFNAAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape_8.setTransform(609.3,829.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(17));

	// Layer 18
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgjDAB4QgyAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAyAAMBGHAAAQAyAAAjAjQAjAjAAAxQAAAxgjAkQgjAjgyAAgEgj8gA3QgXAXAAAgQAAAhAXAXQAYAYAhAAMBGHAAAQAiAAAXgYQAXgXAAghQAAgggXgXQgXgYgiAAMhGHAAAQghAAgYAYg");
	this.shape_9.setTransform(608.6,833.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(17));

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjDABkQgpAAgegeQgdgcAAgqQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAAqgdAcQgdAegqAAg");
	mask.setTransform(608.3,833.6);

	// Layer 16
	this.instance_3 = new lib.Symbol17copy2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(477.7,833.6,1,1,0,0,0,234.4,10);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17));

	// Layer 15
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,51,51,0.659)").s().p("EgjDABkQgpAAgegdQgdgeAAgpQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAApgdAeQgdAdgqAAg");
	this.shape_10.setTransform(608.3,833.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_11.setTransform(430.8,792.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVCWQgKgCgIgEQgHgFgEgKQgEgIgBgNIABgGIACgIIAdAAQABAPAFAGQAFAGALAAIAIgBQAFgBADgFQAEgDACgHQABgGAAgLIAAgkQgFAHgJAGQgIAFgNAAIgJgBIgKgDQgGgDgFgFQgGgGgEgJQgEgJgCgNQgDgOAAgTIAAg8QAAgTADgMQACgNAEgKQAEgIAGgFQAFgFAGgDIAKgDIAKAAQAIAAAGACQAGABAFAFIAIAHIAGAJIADgWIAhAAIAADaQAAATgEAPQgDAQgIALQgIALgMAGQgMAFgQABQgLgBgKgCgAgHh4QgEACgDAFQgDAFgCAHIgBAWIAABKIABAUQACAJADAEQADAFAEABIAHADIAHgCIAGgEIAFgFIADgGIAAh8QgDgIgFgEQgFgFgIAAg");
	this.shape_12.setTransform(414.6,795.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhHg");
	this.shape_13.setTransform(398.3,792.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_14.setTransform(383.4,789.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(17));

	// Layer 3
	this.instance_4 = new lib.Path_8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(816.2,1209.9,1,1,0,0,0,112.8,112.8);
	this.instance_4.alpha = 0.488;

	this.instance_5 = new lib.Path_8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(388.9,1209.9,1,1,0,0,0,112.8,112.8);
	this.instance_5.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(17));

	// Layer 8
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_15.setTransform(603.9,1021.7);

	this.instance_6 = new lib.ClipGroup_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(603.9,1021.8,1,1,0,0,0,109.8,109.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah4C5QhuioiXgRQCXgPBuipQB1i0ADj+QAED+B2C0QBtCpCXAPQiXARhtCoQh2C1gED9QgDj9h1i1gAF+AAQAQAAARAAIAAACQgRAAgQgCgAmeAAQARAAAQAAQgQACgRAAgAl9AAIAAAAg");
	this.shape_16.setTransform(547.3,990.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#697E9B").s().p("Amls4IJvAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtkrCvIhMAsQgXANgzALIgvAIg");
	this.shape_17.setTransform(646,1027.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A0BAD3").s().p("Ah4MZIhMgsQksiviuktQitkrAAlcIAAjmQAAhbBBhBQBAhABbAAITfAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtksCvIhMAsQg4AghBAAQhAAAg4ggg");
	this.shape_18.setTransform(603.8,1027.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_19.setTransform(603.9,1021.7);

	this.instance_7 = new lib.ClipGroup_1_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(601.9,1023.8,1,1,0,0,0,109.8,109.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D3E9EB").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjMQBTjFCYiYQCYiYDFhTQDMhXDeAAQDfAADMBXQDFBTCYCYQCYCYBTDFQBXDMAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjMBXjfAAQjeAAjMhXg");
	this.shape_20.setTransform(603.9,1021.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_21.setTransform(816.1,1209.9);

	this.instance_8 = new lib.ClipGroup_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(816.2,1209.9,1,1,0,0,0,109.8,109.8);

	this.instance_9 = new lib.ClipGroup_1_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(829,1222.1,1,1,0,0,0,122.6,122);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_22.setTransform(816.1,1209.9);

	this.instance_10 = new lib.ClipGroup_2_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(814.2,1211.9,1,1,0,0,0,109.8,109.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3F4826").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDFBUCYCYQCYCXBTDFQBXDMAADfQAADghXDLQhTDFiYCYQiYCYjFBTQjLBXjggBQjeABjMhXg");
	this.shape_23.setTransform(816.1,1209.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicidhWjKQhYjRgBjlQABjkBYjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBYDRAADkQAADlhYDRQhWDKicCdQicCcjLBWQjRBYjlABQjkgBjShYgAmevXQi/BSiUCUQiVCThRC/QhUDHAADYQAADZBUDGQBRC/CVCUQCUCUC/BSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBQi/QBUjGAAjZQAAjYhUjHQhQi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_24.setTransform(388.8,1209.9);

	this.instance_11 = new lib.ClipGroup_4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(468.3,1158,1,1,0,0,0,191.2,163.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E8976B").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMABjfQgBjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDGBUCXCYQCYCXBTDFQBWDMABDfQgBDghWDLQhTDFiYCYQiXCYjGBTQjLBXjggBQjeABjMhXg");
	this.shape_25.setTransform(388.8,1209.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.instance_11},{t:this.shape_24},{t:this.shape_23},{t:this.instance_10},{t:this.shape_22},{t:this.instance_9},{t:this.instance_8},{t:this.shape_21},{t:this.shape_20},{t:this.instance_7},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_6},{t:this.shape_15}]}).wait(17));

	// Layer 2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(10).p("EA6gAk3Mh0/AAAMAAAgp8QAAmdCfl6QCbltEZkZQEZkaFtiaQF5igGeAAMA1eAAAQGeAAF6CgQFtCaEZEaQEZEZCbFtQCfF6AAGdg");
	this.shape_26.setTransform(604.7,1118.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F9DD89").s().p("Eg6fAk3MAAAgp8QAAmeCgl5QCaltEZkZQEakaFsiaQF6ifGdAAMA1eAAAQGeAAF5CfQFtCaEaEaQEZEZCaFtQCgF5AAGeMAAAAp8g");
	this.shape_27.setTransform(604.7,1118.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26}]}).wait(17));

	// Layer 7
	this.instance_12 = new lib.Symbol14();
	this.instance_12.parent = this;
	this.instance_12.setTransform(822.2,349.1,1,1,0,0,0,126,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:126.1,x:822.3},0).wait(16));

	// Layer 11
	this.instance_13 = new lib.bloodbar3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(475.4,494.9,1,1,0,0,0,93.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(17));

	// Layer 12
	this.instance_14 = new lib.Symbol15();
	this.instance_14.parent = this;
	this.instance_14.setTransform(796.8,233.4,1,1,0,0,0,112,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:112.1,x:796.9},0).wait(16));

	// Layer 9
	this.instance_15 = new lib.Symbol20();
	this.instance_15.parent = this;
	this.instance_15.setTransform(459.9,611.2,1,1,0,0,0,144.8,156.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(12).to({_off:false},0).wait(1).to({regX:144.7,x:459.8},0).wait(4));

	// Layer 1
	this.instance_16 = new lib.Symbol20();
	this.instance_16.parent = this;
	this.instance_16.setTransform(459.9,611.2,1,1,0,0,0,144.8,156.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_28.setTransform(861.5,169.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_29.setTransform(845.1,169.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA+B0IAAitIgBgNIgDgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAGgFIALgJIANgEIAMgCQANAAAJAHQAJAGAFANQAFgHAFgFIAMgIIANgEIAMgCQATAAAMAPQAKAOABAcIAACug");
	this.shape_30.setTransform(824.7,169.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_31.setTransform(807.8,165.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_32.setTransform(799.3,165);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_33.setTransform(787.6,169.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_34.setTransform(772.8,169.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAFgFAGgCIALgDIAIAAIAMABIAIAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAHgBIAHgEIAEgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_35.setTransform(756.6,165.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_36.setTransform(741.1,169.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_37.setTransform(725.5,166.6);

	this.instance_17 = new lib.Path_10();
	this.instance_17.parent = this;
	this.instance_17.setTransform(793.1,167.7,1,1,0,0,0,142.9,32.4);
	this.instance_17.alpha = 0.66;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C6DA92").s().p("AgUQbQhogDjQgzQjMgxjjhMQofi1ipiUQhihVAPhKQAKg1BMg9IA9guQAhgZAOgQQAngsg4gkQgagQjaAaQlzAtiPAMQs0BEoSivQkihejOk0Qi7kWhrmxQCtEMD3CLQHwEXI0CXQDSA4D/AwQA0AKFrA/QB/AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBuBegCBnQgBAzgYAgIBNgLQBigMBrgHQFYgUE3AyQCeAaCAAkQAaAICJAtQBEAXAqAAQA0ABBKgdQBBgYB3hDQCNhSBLgqQEWibCGAAQB9AABnBBQBGAsATAJQA5AdBDANQB/AZFajUQBOgwCshxQCBhUAjgRQAsgUBRAgQA2AUB0BCQCIBOBAAeQB4A5BfAQQC2AgFvAgQC4AQCTAKQgsCv55CjQoHAzpoArIoCAiQhqAJh+A1Qg0AVitBXQiMBHhdAfQh9Aoh0AAIgTAAg");
	this.shape_38.setTransform(445.4,764.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6FB77F").s().p("AkmAaIARg6ICyEJIiqlUIAghdICkGuIiDnuIBXgrIBJILIgjoCIBrAAIgjIKIBKnZIBAAaIhIFwIBdk+IA9AgIhsEqIB+kBIBAAYIi+FYIi8Aog");
	this.shape_39.setTransform(454,294.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EBA24D").s().p("Ag+gJIBuiSIAPE3g");
	this.shape_40.setTransform(429.1,312.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FAE485").s().p("Ahmh1IC0AdIAZDOg");
	this.shape_41.setTransform(415,320.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CD6C38").s().p("Ag+hmIB9CkIhkApg");
	this.shape_42.setTransform(429.1,321.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F2BC5F").s().p("AiRAsIEjh0IhvCRg");
	this.shape_43.setTransform(419.3,304.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EBA24D").s().p("AhsANIBniPIByEFg");
	this.shape_44.setTransform(423,283.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FAE485").s().p("AhWiFICtAhIhLDqg");
	this.shape_45.setTransform(403.5,295.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CD6C38").s().p("AhGh1IDYB1IkjB1g");
	this.shape_46.setTransform(419.3,296.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F2BC5F").s().p("AiJAnIEThuIhnCPg");
	this.shape_47.setTransform(408.6,277.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CD6C38").s().p("AhTiDIDdCXIkTBvg");
	this.shape_48.setTransform(408.6,268.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FAE485").s().p("Ag2iwIBtBbIg2EGg");
	this.shape_49.setTransform(394.7,264.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EBA24D").s().p("Ag3ASIBvicIgvEVg");
	this.shape_50.setTransform(450.4,303.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CD6C38").s().p("AAOhxIBCB5IifBqg");
	this.shape_51.setTransform(443.4,316.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAE485").s().p("Ag2ibIBtBUIheDjg");
	this.shape_52.setTransform(439.3,312.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F2BC5F").s().p("AhugFIDdhIIhwCbg");
	this.shape_53.setTransform(445,297.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EBA24D").s().p("AhVApIAVjGICWE7g");
	this.shape_54.setTransform(447.4,273.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CD6C38").s().p("Ag8heICrB0IjdBJg");
	this.shape_55.setTransform(445,287.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FAE485").s().p("AhRiCICjBIIgxC9g");
	this.shape_56.setTransform(430.6,283.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F2BC5F").s().p("AhcAbIC5h+IgVDHg");
	this.shape_57.setTransform(431.7,267.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EBA24D").s().p("AhFASIgShtIAQAJQAYATAoAsQA6BDAlAsg");
	this.shape_58.setTransform(432.1,248.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CD6C38").s().p("AhBhkICeBKIi5B+g");
	this.shape_59.setTransform(431.7,260.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FAE485").s().p("AhziSIDnBdIgbDIg");
	this.shape_60.setTransform(413.5,255.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F2BC5F").s().p("AhzgmIDVgQIASBtg");
	this.shape_61.setTransform(413.5,245.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FAE485").s().p("AhwhTIC8AjIAlCEg");
	this.shape_62.setTransform(395,327.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CD6C38").s().p("AhwhBIDhBiIi8Aig");
	this.shape_63.setTransform(413.9,328.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EBA24D").s().p("AhwATIAViIIDMDrg");
	this.shape_64.setTransform(413.9,320.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F2BC5F").s().p("AhoAhIDRhkIgVCHg");
	this.shape_65.setTransform(394.2,315.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FAE485").s().p("AhMilICZCAIgsDMg");
	this.shape_66.setTransform(380.3,302.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CD6C38").s().p("Ag9hlICmBlIjRBmg");
	this.shape_67.setTransform(394.2,308.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EBA24D").s().p("AhTAfIBFikIBiELg");
	this.shape_68.setTransform(396.4,295.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F2BC5F").s().p("AhugtIDdglIhEClg");
	this.shape_69.setTransform(383.7,290.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FAE485").s().p("AgigUQgCg7AEgeIAFgRIA+BbIg9CiQgEg4gEhbg");
	this.shape_70.setTransform(375.4,272.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CD6C38").s().p("AgvhQICeB9IjdAlg");
	this.shape_71.setTransform(383.7,277.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EBA24D").s().p("AhugDIAQiPIDNElg");
	this.shape_72.setTransform(411.3,255.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EBA24D").s().p("AhPAzIBmjjIA5Fhg");
	this.shape_73.setTransform(386.9,264.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F2BC5F").s().p("Ag+gTIB9g0IgQCOg");
	this.shape_74.setTransform(395.5,248.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F2BC5F").s().p("AhSAXICliIIhmDjg");
	this.shape_75.setTransform(380.9,257.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#61B26F").s().p("AgNEEQgSgagqgDQgsgDgxAbIgoAbIASghQAagnApgfQAigZA2AIQAaAEATAIQgQgPgdgPQg8gfhAgCQg3gChPATIhDASIA3gdQBCghAzgRQAzgRBRAXQAoALAdAPQgVgWgmgcQhNg4hWggQhWghhVAUQgbAHgXAKIgSAKIBAgyQBTgxBYAAQBagBBPA9QAnAfAWAeQgOgagFgmQgMhMAng6QAkg3BcgUQAugKAmABQgXAPgdAaQg5AzgWA1QgWA1AjBKQATAlAXAaQgCgYAHghQAOhEApgxQA7hGBZAAQAsAAAgAOQgnAJgsAUQhZApgbA8QgeA/AgBQQAPAnAWAbIkjCAQAAgNgJgOg");
	this.shape_76.setTransform(382.8,226);

	this.instance_18 = new lib.Path_2_3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(435.4,329.8,1,1,0,0,0,47.2,14.5);
	this.instance_18.alpha = 0.262;

	this.instance_19 = new lib.Path_3_6();
	this.instance_19.parent = this;
	this.instance_19.setTransform(811.8,434.7,1,1,0,0,0,81.6,12.8);
	this.instance_19.alpha = 0.262;

	this.instance_20 = new lib.Path_4_4();
	this.instance_20.parent = this;
	this.instance_20.setTransform(467.7,764.8,1,1,0,0,0,108.5,12.8);
	this.instance_20.alpha = 0.262;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A6BD55").s().p("EgsGAO1IBjhbQCEhxCfhtQH9leJTi0QD3hLFShcQEihRBrgiQCvg4CKhDQCUhJC3h5QC2h4G4iHQGgiAHHhSQHahXEYAHQE7AIgpCCQgqCDlvDuQlRDboSECQoED6oUDQQoqDZmMBkQtnDcqABGQj9Aci2AAQlGAAhfhag");
	this.shape_77.setTransform(1002.1,719.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgFQg5gCAJgIIAMgGQAFgEgJgCQgUgGgWgBQgggCiYgDQhwgCmGAFIlwAGQifADg5AHQh6AQk/gEQhdgBgpgIQgagHgNgBIi2ACQisABgkgFQglgFAOgIIAXgHIiYgNIK+gTQH4gLHaABQQQABV1BEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_78.setTransform(299.2,716.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhUgMIg2gLQjfADhjgEQg6gDALgIIAKgGQAFgEgHgCQgVgGgWgBQgfgCiYgDQhxgCmFAFIlwAGQigADg5AIQh6APk/gEQhdgBgpgIQgZgHgNgBIi3ACQisACgkgFQglgFAPgIIAWgIIiYgNQIggQCegDQH3gLHbABQQQABV1BEQKKAfKhBAQFQAgDOAaI08g3g");
	this.shape_79.setTransform(363.5,710.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgEQg6gDALgIIAKgGQAFgEgIgCQgTgGgXgBIi3gFQhxgCmGAFIlvAGQigADg5AIQh6APk/gEQhdgBgpgIQgagHgNgBIi2ACQisACgkgFQgmgFAPgIIAXgIIiYgNQIfgQCfgDQH3gLHbABQQAABWFBEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_80.setTransform(427.3,701.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A6BD55").s().p("ADZPxQmwgjklh+QqFkXnAlzQnwmag7l4QAhgmA8g0QB4hqCJhNQG4j2HBCHQC7A4D8BcQDZBPBRAVQCFAhBugQQB5gQCchQQCchQFNBgQE7BbFHDMQFWDVC5DpQDQEFhADOQhCDSk5CYQkfCLmsA9QkLAmkKAAQiVAAiVgMg");
	this.shape_81.setTransform(237.3,672.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#61763D").s().p("EAl9ADLIiogUIgkAEQgnADhWgIQkqgehqgbQgggIhXgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDggAWgl4gCiIH6gCQJzAGJZAkQUXBNOzBoQG4AwHLA/QC/AZHFBCIiNgDIAUAKQANAJgjABIgEABQgmAAiWgTg");
	this.shape_82.setTransform(1169.8,535.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgJQkjgchxgcQgggIhXgNIhQgMQp5hUimgNQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJZAjQUNBNO9BpQG0AwHPA+IKEBbIiNgCIAUAKQANAJgkABIgDABQgnAAiWgTg");
	this.shape_83.setTransform(1111.4,521.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#61763D").s().p("EAl9ADLIiogUIglAEQgmADhWgJQkkgchwgcQgggIhXgNIhQgMQp5hUimgOQiKgMgfgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJaAjQUFBNPFBoQG2AxHMA+QC8AaHHBBIiMgCIAUAKQANAJgkABIgDABQgmAAiWgTg");
	this.shape_84.setTransform(1053.5,507.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgIQkqgehqgbQghgIhWgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh9gOIhxgOQgMAEgnACQhPADiLgOUgDhgAWgl3gCiIH6gCQJyAGJaAkQUJBMPBBpQG2AwHNA+QCmAXHeBFIiNgDIAUAKQAMAJgjABIgDABQgnAAiWgTg");
	this.shape_85.setTransform(973.5,492.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#61763D").s().p("Eg9wAIFQg6gaAJg+QAEgTAJgVIAJgRIjgg3QK2j4DshKQKejSKJh5QK9iDNDgnQNcgpP4A4QOfAzPqEZQH2CME7CBQuggTvLgOQ+VgcjSAZQjQAaiDg9QgogUgcgYIgUgWQhLAVhcATQi4AohZgFQhSgFAEg4IAGgwQACgbgOgOIgcgaQgOgKgZgDQgtgEjUASQicANoMCPIntCNQg1AQg+AYQh7AwgrAqQhVBTiwA0QiBAmjEAZQiAAPhCgpQgPgJgWgVQgQgQgKAAQgLgBhKAUIihApQihAnhMAAQgiAAgRgIg");
	this.shape_86.setTransform(606.2,322.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#8CAC50").s().p("EgmdApkQxvjbtsmPQtsmQnfoGQnyoYAApMQAApLHyoYQHgoGNrmQQNsmPRvjbQSXjjUGAAQUHAASXDjQRvDbNsGPQNsGQHgIGQHxIYAAJLQAAJMnxIYQnhIGtrGQQtsGPxvDbQyXDj0HAAQ0GAAyXjjg");
	this.shape_87.setTransform(644.1,557.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#917556").s().p("AnmTjQgfgYgJg6QgHgxAHhfQAhkYAMjQQAOkCgxkUQg/kdgUiBQgdi3BKjbQBEjJB6iTQAZgdCcgZQCLgWC+gLQC7gKCCAGQCPAGACAZQAEAvh+AxQhmAokMBEQhyAdhCA0Qg4AqgkBGQgQAfgnBqQgjBeglA9QgsBKgBBQQAAA6AaBiQAoCUAHAnQAYB6gEB6QgMExhVF+QhRFog7AAQgHAAgHgFg");
	this.shape_88.setTransform(575,953);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#74542E").s().p("AMSY+QkPifh2kGQg+iKg0l9QgdjXgzoIQgunggci3Qgukig3gIQjYgjhpHkQgjCjgRDJQgNCRABBQQAECvgzFOQhCGyhqCnQhmCgixAzQg4AQg4ADIgtAAQhbo6gajkQgcj7AFoGQAGpwBHi7QASgwAqiHQAchbAcgtQAmg+BFguQBNgyCLgwQDwhTEmgdQCbgPDXgLQCGgOCjBAQCvBEB0B+QCjCwAtD9QBAFtioIgQhWEWAND7QALDABJDKQAqByBVC+QA/CcgHBmQgPDRg3BWQgbAqgZABQhvgbiHhPg");
	this.shape_89.setTransform(609,973.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#644725").s().p("EgTKAnDQgthJgHhDQgHg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBPDYA2HOQAVCvgPC9QgKCPglDKIhAFeQgjDRgKCsQgKCyA4EGQAfCNBaFCQBQEcAVCBQAhDFguBbQguBdiwAeQiGAWkHgKQk5gRiegEQkUgHinAcQiyAei/CtQiDB2iuDhQjBD7gkAkQg9A/goAAQgZAAgRgag");
	this.shape_90.setTransform(609.1,1026.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#917556").s().p("AHpbTQgvhWggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAdQgnALieBTQiCBEhCgBQhhgCgjh/QgtingZi6QgVieAAh3QAAhYHMASQDmAJDlAaIBiAaQB1AiBjAmQE+B5ARB0QAPBkgPCOQgKBWgjDEQhOG1AAEWQAAE7A2GiQAcDaApENQAFAsAVBrQAVBpAHA+QAWDQhMCkQhJCdhKAGIgGAAQg7AAg2hgg");
	this.shape_91.setTransform(369.8,993.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#74542E").s().p("EAIaAkwQhsgRg1gwQgRgPgJgQIgFgOQgggNgfgnQg+hOAGh+QAFh3hRhgIhNhUQgvg1gcgzQgyhahwoEQh4orgjhcQgYg+hNiRQhwjQgphUQjYmxhhmhQhynmgTk2QgGhlADhfQAFhYAAggQAAhQP7hQQH+goH+gYIgyFhQgzF3AABtQAABXAHITQAFH6gMBUQgNBnAADvQAADwANCDQAFArAcDNQAcDiAPC1QAvI+hPD9QhaEhhqBqQhMBMhpAAQgYAAgbgEg");
	this.shape_92.setTransform(380.8,1039.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#917556").s().p("AkXL0Qg8gGAQmJQAJjNADhVQAEiOgOgeQgNgdghgiIg8g4QhHhGALhJQAFgiAggJQAXgGA6AEQBWAGAbAAQBKAAA9gQQBegZEJiwQB3hPAsgYQBIgpAOAQQAXAajbELQj/E1giBBQgZAygmCVQgWBXguDFQhYFlg8AAIgCAAg");
	this.shape_93.setTransform(854.3,909.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#74542E").s().p("AqpWMQg2gpgZjSQgUimADjOQABhGAsi7IBYljQBunJhCgrQhbg7gwh8Qg1iJAWimQATiSBshqQA2g0AzgYIAWAIQAgAIAuADQCUAJDvgxQDugxE8h2QCeg7BugxIAHBRQABBvgaCXQgPBUg1BHQgqA5hTBEIijB+QhpBUhLBNQiUCbiiIBQgoB+hJEAQg6DMgWA6QhRDTh2DOQh7DUg4AAQgKAAgHgGg");
	this.shape_94.setTransform(865.6,947.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#644725").s().p("EgOJAgiQgkgZgbhIQhAioAYkJQAKhqARmVQAapRAKjIQA3w+BKkEQBNkMCGi8QBDheA0gpIBHAEQBaADBigFQE3gQEOhaQENhZDfhzQBwg5A5gnIgYCyQgjDbgzDKQijKGkGDsQiSCDhYDPQhFCkgxD/QgdCVgwE4QgwEYg8C2Qh8F6kvFAQhhBmh2BkQg+A0hIA5QgTARgUAAQgQAAgRgMg");
	this.shape_95.setTransform(860.3,1003.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg4hih5o0QiDpfgmhlQhFi3ihkjQinkvknnXQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_96.setTransform(363.5,981.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#523821").s().p("EhKDAj2QjIAAi3hOQixhLiJiJQiJiJhLixQhOi3AAjIMAAAgo1QAAjIBOi3QBLixCJiJQCJiJCxhLQC3hODIAAMCUHAAAQDIAAC4BOQCxBLCICJQCJCJBLCxQBOC3AADIMAAAAo1QAADIhOC3QhLCxiJCJQiICJixBLQi4BOjIAAg");
	this.shape_97.setTransform(660.1,880.9);

	this.instance_21 = new lib.Path_14();
	this.instance_21.parent = this;
	this.instance_21.setTransform(978.7,201.8,1,1,0,0,0,195.2,33.5);
	this.instance_21.alpha = 0.77;

	this.instance_22 = new lib.Path_1_9();
	this.instance_22.parent = this;
	this.instance_22.setTransform(330.1,217.6,1,1,0,0,0,153,26.3);
	this.instance_22.alpha = 0.77;

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-304.3,0,304.4).s().p("Eg6lAuQMAAAhdzMB1LAAAMAAABfHg");
	this.shape_98.setTransform(603.8,304.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.instance_22},{t:this.instance_21},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_17},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_16}]}).to({state:[{t:this.shape_98},{t:this.instance_22},{t:this.instance_21},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_17},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},12).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1446.2,1359);


(lib.page5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		//Stage
		var canvas = this
		    //VARIABLES
		    //Drag Object Size
		    dragRadius = 100;
		    //Destination Size
		    destHeight = 100;
		    destWidth = 100;
		
		    //Circle Creation
		    
		    var circle1 = new lib.circle1();
			
			
		   
		
		
		    //Drag Object Creation
		    //Placed inside a container to hold both label and shape
		    var dragger = new createjs.Container();
		    dragger.x = 375;
			dragger.y = 1000;
		    dragger.addChild(circle1);
		    dragger.setBounds(100, 100, dragRadius*2, dragRadius*2);
		    //DragRadius * 2 because 2*r = width of the bounding box
			
		
		
		    var box2 = new lib.box2();
			box2.alpha = 0;
		    var destination = new createjs.Container();
		    destination.x = 338;
		    destination.y = 570;
		    destination.setBounds(340, 560, destHeight, destWidth);
		
		    destination.addChild(box2);
		
		    //DRAG FUNCTIONALITY =====================
		    dragger.on("pressmove", function(evt){
		         evt.currentTarget.x = evt.stageX;
		        evt.currentTarget.y = evt.stageY;
		         stage.update(); //much smoother because it refreshes the screen every pixel movement instead of the FPS set on the Ticker
		         if(intersect(evt.currentTarget, destination)){
		           evt.currentTarget.alpha=0.2;
		           box2.alpha = 0;
		
		         }else{
		           evt.currentTarget.alpha=1;
		         }
		
		    });
		
		    //Mouse UP and SNAP====================
		    dragger.on("pressup", function(evt) {
		      if(intersect(evt.currentTarget, destination)){
		        dragger.x = destination.x + destWidth/2;
		        dragger.y = destination.y + destHeight/2;
		        dragger.alpha = 0;
		        stage.update(evt);
				canvas.parent.gotoAndStop(5);
		
		      }else{
					evt.currentTarget.alpha=1;
					dragger.x = 375;
					dragger.y = 1000;
		         }
		    });
		    //Tests if two objects are intersecting
		    //Sees if obj1 passes through the first and last line of its
		    //bounding box in the x and y sectors
		    //Utilizes globalToLocal to get the x and y of obj1 in relation
		    //to obj2
		    //PRE: Must have bounds set for each object
		    //Post: Returns true or false
		    function intersect(obj1, obj2){
		      var objBounds1 = obj1.getBounds().clone();
		      var objBounds2 = obj2.getBounds().clone();
		
		      var pt = obj1.globalToLocal(objBounds2.x, objBounds2.y);
		
		      var h1 = -(objBounds1.height / 2 + objBounds2.height);
		      var h2 = objBounds2.width / 2;
		      var w1 = -(objBounds1.width / 2 + objBounds2.width);
		      var w2 = objBounds2.width / 2;
		
		
		      if(pt.x > w2 || pt.x < w1) return false;
		      if(pt.y > h2 || pt.y < h1) return false;
		
		      return true;
		    }
		
		
		    //Adds the object into stage
		    stage.addChild(destination, dragger);
		    stage.mouseMoveOutside = true;
		    stage.update();
	}
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(4).call(this.frame_16).wait(1));

	// Isolation Mode
	this.instance = new lib.centerflash();
	this.instance.parent = this;
	this.instance.setTransform(612.8,637.1,0.09,0.09,0,0,0,253.9,253.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({regX:257,regY:257,scaleX:0.32,scaleY:0.32,x:613.8,y:638},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:614.5,y:638.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:615.2,y:639.5},0).wait(1).to({scaleX:1,scaleY:1,x:615.9,y:640.2},0).wait(3));

	// rightbar
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1279,636.1,1,1,0,0,0,300.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:1243.3},0).wait(1).to({x:1207.6},0).wait(1).to({x:1171.9},0).wait(1).to({x:1136.2},0).wait(1).to({x:1100.5},0).wait(1).to({x:1064.8},0).wait(1).to({x:1029.1},0).wait(1).to({x:993.4},0).wait(1).to({x:957.7},0).wait(1).to({x:922},0).wait(7));

	// leftbar
	this.instance_2 = new lib.Symbol8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-72,636.1,1,1,0,0,0,300.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-32.4},0).wait(1).to({x:7.1},0).wait(1).to({x:46.7},0).wait(1).to({x:86.2},0).wait(1).to({x:125.8},0).wait(1).to({x:165.3},0).wait(1).to({x:204.9},0).wait(1).to({x:244.4},0).wait(1).to({x:284},0).wait(1).to({x:323.5},0).wait(7));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSCQQgHgJAAgPQAAgSAHgHQAHgIALAAQANAAAGAIQAHAIAAARQAAAPgHAIQgGAJgNAAQgLAAgHgIgAgQA5IgGjQIAsAAIgFDQg");
	this.shape.setTransform(791.1,225.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_1.setTransform(781,225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_2.setTransform(772.4,225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_3.setTransform(763.9,224.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYCXIgvhxIgBAAIAABxIgqAAIAAktIAqAAIAACtIABAAIAthjIAoAAIgyBnIA3B8g");
	this.shape_4.setTransform(752.8,225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgIIgGgHIgdglIgMgNIgKgQIgGgSQgDgIAAgKQAAgOAFgKQAEgJAIgHQAHgGALgEQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAHIgBAHQAAAHADAHIAKAQIAhAlIAIAMIAKANIAHARQADAKAAAJQAAANgEAKQgEAJgHAHQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_5.setTransform(737.1,228.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_6.setTransform(715.3,228.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_7.setTransform(700.3,228.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_8.setTransform(688.9,224.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgIIgGgHIgdglIgMgNIgKgQIgGgSQgDgIAAgKQAAgOAFgKQAEgJAIgHQAHgGALgEQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAHIgBAHQAAAHADAHIAKAQIAhAlIAIAMIAKANIAHARQADAKAAAJQAAANgEAKQgEAJgHAHQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_9.setTransform(677.7,228.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAGgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_10.setTransform(662.3,228.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_11.setTransform(646.3,228.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcCZIAAjGIgUAAIAAgeIAUAAIAAgQQAAgTAEgMQAEgMAGgGQAHgHAIgCQAJgDALABIAGAAIAIABIAHACIAHADIAAAdQgHgCgJAAIgIACIgHAEIgEAIIgCANIAAAQIAgAAIAAAeIggAAIAADGg");
	this.shape_12.setTransform(634,224.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_13.setTransform(620.8,228.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWCYIgKgEQgGgCgGgGQgFgFgEgJQgEgJgCgOQgDgOAAgTIAAhIQAAgTADgNQACgNAEgJQAFgJAGgFQAFgFAGgCIALgDIAIAAIALABIAJAFIAIAGIAHAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgIAIIgMAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAHgBIAHgEIAEgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_14.setTransform(604.6,225.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_15.setTransform(581.8,228.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJABQgGAAgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgDIALgIIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_16.setTransform(565.6,225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgGgHQgGgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_17.setTransform(551.7,225.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_18.setTransform(531.1,228.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgIIgGgHIgdglIgMgNIgKgQIgGgSQgDgIAAgKQAAgOAFgKQAEgJAIgHQAHgGALgEQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAHIgBAHQAAAHADAHIAKAQIAhAlIAIAMIAKANIAHARQADAKAAAJQAAANgEAKQgEAJgHAHQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_19.setTransform(516.6,228.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNCOQgHgBgIgCQgHgEgHgFQgHgGgGgKQgFgKgDgPQgEgPAAgVIAAjDIAsAAIAADPIABAWQABAIADAGQADAFAFACQAEACAGAAQAGAAAFgCQAFgCADgFQADgGABgIIACgWIAAjPIArAAIAADDQAAAVgEAPQgDAPgFAKQgGAKgHAGQgHAFgIAEQgHACgIABIgNABg");
	this.shape_20.setTransform(500.6,226.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSCQQgHgJAAgPQAAgSAHgHQAHgIALAAQAMAAAIAIQAGAIAAARQAAAPgGAIQgIAJgMAAQgLAAgHgIgAgQA5IgGjQIAsAAIgFDQg");
	this.shape_21.setTransform(478.6,225.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAdByIgXh+IgGgjIAAAAIgFAjIgVB+IgpAAIgljjIAoAAIAQB6IAEAvIABAAIAFgvIAWh6IAjAAIAWB6IAGAvIACAAIACgvIAPh6IAnAAIglDjg");
	this.shape_22.setTransform(461.7,228.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgLgCgQQgDgQAAgWIAAgjQAAgXADgPQACgRAFgKQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAXIAAAjQAAAWgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAFgIABIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA2IABAbQABALADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgLIABgbIAAg2IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_23.setTransform(442.7,228.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAiCOIhDi4IgCAAIACAQIACAVIABAaIAAAlIAABUIgmAAIAAkbIAiAAIBEC9IABAAIgBgPIgBgSIgBgXIgBgdIAAhoIAmAAIAAEbg");
	this.shape_24.setTransform(425.5,225.9);

	this.instance_3 = new lib.Path_9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(608.9,683.2,1,1,0,0,0,382.2,671.2);
	this.instance_3.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).wait(3));

	// Isolation Mode
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("EgimAAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAMBFNAAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape_25.setTransform(609.3,829.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(17));

	// Layer 18
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("EgjDAB4QgyAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAyAAMBGHAAAQAyAAAjAjQAjAjAAAxQAAAxgjAkQgjAjgyAAgEgj8gA3QgXAXAAAgQAAAhAXAXQAYAYAhAAMBGHAAAQAiAAAXgYQAXgXAAghQAAgggXgXQgXgYgiAAMhGHAAAQghAAgYAYg");
	this.shape_26.setTransform(608.6,833.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(17));

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjDABkQgpAAgegeQgdgcAAgqQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAAqgdAcQgdAegqAAg");
	mask.setTransform(608.3,833.6);

	// Layer 16
	this.instance_4 = new lib.Symbol17copy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(477.7,833.6,1,1,0,0,0,234.4,10);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17));

	// Layer 15
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(51,51,51,0.659)").s().p("EgjDABkQgpAAgegdQgdgeAAgpQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAApgdAeQgdAdgqAAg");
	this.shape_27.setTransform(608.3,833.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_28.setTransform(430.8,792.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVCWQgKgCgIgEQgHgFgEgKQgEgIgBgNIABgGIACgIIAdAAQABAPAFAGQAFAGALAAIAIgBQAFgBADgFQAEgDACgHQABgGAAgLIAAgkQgFAHgJAGQgIAFgNAAIgJgBIgKgDQgGgDgFgFQgGgGgEgJQgEgJgCgNQgDgOAAgTIAAg8QAAgTADgMQACgNAEgKQAEgIAGgFQAFgFAGgDIAKgDIAKAAQAIAAAGACQAGABAFAFIAIAHIAGAJIADgWIAhAAIAADaQAAATgEAPQgDAQgIALQgIALgMAGQgMAFgQABQgLgBgKgCgAgHh4QgEACgDAFQgDAFgCAHIgBAWIAABKIABAUQACAJADAEQADAFAEABIAHADIAHgCIAGgEIAFgFIADgGIAAh8QgDgIgFgEQgFgFgIAAg");
	this.shape_29.setTransform(414.6,795.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhHg");
	this.shape_30.setTransform(398.3,792.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_31.setTransform(383.4,789.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]}).wait(17));

	// Layer 3
	this.instance_5 = new lib.Path_8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(816.2,1209.9,1,1,0,0,0,112.8,112.8);
	this.instance_5.alpha = 0.488;

	this.instance_6 = new lib.Path_8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(388.9,1209.9,1,1,0,0,0,112.8,112.8);
	this.instance_6.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(17));

	// Layer 10
	this.instance_7 = new lib.box2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1612.7,775.3,1,1,0,0,0,166.5,166.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).wait(4));

	// Layer 4
	this.circle2 = new lib.circle1();
	this.circle2.parent = this;
	this.circle2.setTransform(56.9,1209.8);
	this.circle2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.circle2).wait(13).to({_off:false},0).wait(4));

	// Layer 8
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_32.setTransform(603.9,1021.7);

	this.instance_8 = new lib.ClipGroup_3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(603.9,1021.8,1,1,0,0,0,109.8,109.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ah4C5QhuioiXgRQCXgPBuipQB1i0ADj+QAED+B2C0QBtCpCXAPQAQAAARAAIAAACQgRAAgQgCQiXARhtCoQh2C1gED9QgDj9h1i1gAmeAAQARAAAQAAQgQACgRAAgAl9AAIAAAAg");
	this.shape_33.setTransform(547.3,990.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#697E9B").s().p("Amls4IJvAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtkrCvIhMAsQgXANgzALIgvAIg");
	this.shape_34.setTransform(646,1027.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A0BAD3").s().p("Ah4MZIhMgsQksiviuktQitkrAAlcIAAjmQAAhbBBhBQBAhABbAAITfAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtksCvIhMAsQg4AghBAAQhAAAg4ggg");
	this.shape_35.setTransform(603.8,1027.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_36.setTransform(603.9,1021.7);

	this.instance_9 = new lib.ClipGroup_1_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(601.9,1023.8,1,1,0,0,0,109.8,109.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D3E9EB").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjMQBTjFCYiYQCYiYDFhTQDMhXDeAAQDfAADMBXQDFBTCYCYQCYCYBTDFQBXDMAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjMBXjfAAQjeAAjMhXg");
	this.shape_37.setTransform(603.9,1021.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_38.setTransform(816.1,1209.9);

	this.instance_10 = new lib.ClipGroup_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(816.2,1209.9,1,1,0,0,0,109.8,109.8);

	this.instance_11 = new lib.ClipGroup_1_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(829,1222.1,1,1,0,0,0,122.6,122);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_39.setTransform(816.1,1209.9);

	this.instance_12 = new lib.ClipGroup_2_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(814.2,1211.9,1,1,0,0,0,109.8,109.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3F4826").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDFBUCYCYQCYCXBTDFQBXDMAADfQAADghXDLQhTDFiYCYQiYCYjFBTQjLBXjggBQjeABjMhXg");
	this.shape_40.setTransform(816.1,1209.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicidhWjKQhYjRgBjlQABjkBYjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBYDRAADkQAADlhYDRQhWDKicCdQicCcjLBWQjRBYjlABQjkgBjShYgAmevXQi/BSiUCUQiVCThRC/QhUDHAADYQAADZBUDGQBRC/CVCUQCUCUC/BSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBQi/QBUjGAAjZQAAjYhUjHQhQi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_41.setTransform(388.8,1209.9);

	this.instance_13 = new lib.ClipGroup_4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(468.3,1158,1,1,0,0,0,191.2,163.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E8976B").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMABjfQgBjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDGBUCXCYQCYCXBTDFQBWDMABDfQgBDghWDLQhTDFiYCYQiXCYjGBTQjLBXjggBQjeABjMhXg");
	this.shape_42.setTransform(388.8,1209.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.instance_13},{t:this.shape_41},{t:this.shape_40},{t:this.instance_12},{t:this.shape_39},{t:this.instance_11},{t:this.instance_10},{t:this.shape_38},{t:this.shape_37},{t:this.instance_9},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_8},{t:this.shape_32}]}).wait(17));

	// Layer 2
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(10).p("EA6gAk3Mh0/AAAMAAAgp8QAAmdCfl6QCbltEZkZQEZkaFtiaQF5igGeAAMA1eAAAQGeAAF6CgQFtCaEZEaQEZEZCbFtQCfF6AAGdg");
	this.shape_43.setTransform(604.7,1118.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F9DD89").s().p("Eg6fAk3MAAAgp8QAAmeCgl5QCaltEZkZQEakaFsiaQF6ifGdAAMA1eAAAQGeAAF5CfQFtCaEaEaQEZEZCaFtQCgF5AAGeMAAAAp8g");
	this.shape_44.setTransform(604.7,1118.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43}]}).wait(17));

	// Layer 7
	this.instance_14 = new lib.Symbol14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(822.2,349.1,1,1,0,0,0,126,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:126.1,x:822.3},0).wait(16));

	// Layer 11
	this.instance_15 = new lib.bloodbar3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(475.4,494.9,1,1,0,0,0,93.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(17));

	// Layer 12
	this.instance_16 = new lib.Symbol15();
	this.instance_16.parent = this;
	this.instance_16.setTransform(796.8,233.4,1,1,0,0,0,112,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:112.1,x:796.9},0).wait(16));

	// Layer 1
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_45.setTransform(861.5,169.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_46.setTransform(845.1,169.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AA+B0IAAitIgBgNIgDgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAGgFIALgJIANgEIAMgCQANAAAJAHQAJAGAFANQAFgHAFgFIAMgIIANgEIAMgCQATAAAMAPQAKAOABAcIAACug");
	this.shape_47.setTransform(824.7,169.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_48.setTransform(807.8,165.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_49.setTransform(799.3,165);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_50.setTransform(787.6,169.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_51.setTransform(772.8,169.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAFgFAGgCIALgDIAIAAIAMABIAIAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAHgBIAHgEIAEgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_52.setTransform(756.6,165.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_53.setTransform(741.1,169.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_54.setTransform(725.5,166.6);

	this.instance_17 = new lib.Path_10();
	this.instance_17.parent = this;
	this.instance_17.setTransform(793.1,167.7,1,1,0,0,0,142.9,32.4);
	this.instance_17.alpha = 0.66;

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_55.setTransform(551.4,435);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_56.setTransform(535,435.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIANgEIAMgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_57.setTransform(514.6,435);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_58.setTransform(497.8,430.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_59.setTransform(485.4,431.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_60.setTransform(469,431.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_61.setTransform(452.3,435.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_62.setTransform(437.4,432.4);

	this.instance_18 = new lib.Path_11();
	this.instance_18.parent = this;
	this.instance_18.setTransform(494,431.5,1,1,0,0,0,142.9,32.4);
	this.instance_18.alpha = 0.66;

	this.instance_19 = new lib.Path_13();
	this.instance_19.parent = this;
	this.instance_19.setTransform(402.3,688.9,1,1,0,0,0,25.9,51.8);
	this.instance_19.alpha = 0.262;

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E17B3A").s().p("ADrHfQACgSgBgeIgDg4QgFgzgDgUIgNhVQgIgrgMgyQgRhJgIgZQgRgwgWgxQgrhdg9hVQg4hRg7g5QgfgcgZgRQgYgSgXgLQgRgKgQgFIgMgDIAAgBIAMADQAOAEAUAKQAdAQATANQAbATAdAbQA9A3A5BRQA9BUAsBfQAYAvARAxIAPAyIAMAxQAMAzAHAqQAFAaACATIAGAoQADAhACAnIABA5QgBAegDASg");
	this.shape_63.setTransform(441,650.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F9D68E").s().p("AH0L9QiPgKhuhUQkzjvg4keQgJgwgCgvQgMAPgRAOQhgBUh9AaQicAhhhhfQg6g5gfhtQgih5AUh6QAWiOBbhrQBrh8C8g8QExhhEGBVQEWBZBvECQBTDBAVFOQAREhgfBxQgWBQgpBIQgUAkgQATQgjAJgvAAIgogBg");
	this.shape_64.setTransform(389.2,673.6);

	this.instance_20 = new lib.Path_3_5();
	this.instance_20.parent = this;
	this.instance_20.setTransform(435.8,665.2,1,1,0,0,0,19.3,36.4);
	this.instance_20.alpha = 0.262;

	this.instance_21 = new lib.Path_4_3();
	this.instance_21.parent = this;
	this.instance_21.setTransform(482.9,690.5,1,1,0,0,0,102.4,76.8);
	this.instance_21.alpha = 0.262;

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F9D68E").s().p("Am1NQQjLhGibh/Qich/hWilQhYisAAi7QAAi6BYisQBWikCciAQCbh/DLhGQDRhIDkAAQDlAADSBIQDKBGCcB/QCbCABWCkQBYCsAAC6QAAC7hYCsQhWClibB/QicB/jKBGQjSBIjlAAQjkAAjRhIg");
	this.shape_65.setTransform(491.9,674.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F9D68E").s().p("AhXGMQi0mdgJjtQgIjbBnicQAvhHA7giQA9gkA8ALQBxATANFLQAEBlgFCiQgFClABAfQAFCYA2EZQAaCMAaBuIi7AdQhYifhajPg");
	this.shape_66.setTransform(423.6,531.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F9D68E").s().p("AlgIdQAWhzAmiRQBMkgBPiVQBqjGB6h8QCLiMBRAvQBOAthDDcQg2C2hPB2QgwBGi+ELIi2D9g");
	this.shape_67.setTransform(568.3,545.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C6DA92").s().p("AgUQbQhogDjQgzQjMgxjjhMQofi1ipiUQhihVAPhKQAKg1BMg9IA9guQAhgZAOgQQAngsg4gkQgagQjaAaQlzAtiPAMQs0BEoSivQkihejOk0Qi7kWhrmxQCtEMD3CLQHwEXI0CXQDSA4D/AwQA0AKFrA/QB/AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBuBegCBnQgBAzgYAgIBNgLQBigMBrgHQFYgUE3AyQCeAaCAAkQAaAICJAtQBEAXAqAAQA0ABBKgdQBBgYB3hDQCNhSBLgqQEWibCGAAQB9AABnBBQBGAsATAJQA5AdBDANQB/AZFajUQBOgwCshxQCBhUAjgRQAsgUBRAgQA2AUB0BCQCIBOBAAeQB4A5BfAQQC2AgFvAgQC4AQCTAKQgsCv55CjQoHAzpoArIoCAiQhqAJh+A1Qg0AVitBXQiMBHhdAfQh9Aoh0AAIgTAAg");
	this.shape_68.setTransform(445.4,764.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6FB77F").s().p("AkmAaIARg6ICyEJIiqlUIAghdICkGuIiDnuIBXgrIBJILIgjoCIBrAAIgjIKIBKnZIBAAaIhIFwIBdk+IA9AgIhsEqIB+kBIBAAYIi+FYIi8Aog");
	this.shape_69.setTransform(454,294.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EBA24D").s().p("Ag+gJIBuiSIAPE3g");
	this.shape_70.setTransform(429.1,312.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FAE485").s().p("Ahmh1IC0AdIAZDOg");
	this.shape_71.setTransform(415,320.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CD6C38").s().p("Ag+hmIB9CkIhkApg");
	this.shape_72.setTransform(429.1,321.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F2BC5F").s().p("AiRAsIEjh0IhvCRg");
	this.shape_73.setTransform(419.3,304.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EBA24D").s().p("AhsANIBniPIByEFg");
	this.shape_74.setTransform(423,283.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FAE485").s().p("AhWiFICtAhIhLDqg");
	this.shape_75.setTransform(403.5,295.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CD6C38").s().p("AhGh1IDYB1IkjB1g");
	this.shape_76.setTransform(419.3,296.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F2BC5F").s().p("AiJAnIEThuIhnCPg");
	this.shape_77.setTransform(408.6,277.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CD6C38").s().p("AhTiDIDdCXIkTBvg");
	this.shape_78.setTransform(408.6,268.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FAE485").s().p("Ag2iwIBtBbIg2EGg");
	this.shape_79.setTransform(394.7,264.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EBA24D").s().p("Ag3ASIBvicIgvEVg");
	this.shape_80.setTransform(450.4,303.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CD6C38").s().p("AAOhxIBCB5IifBqg");
	this.shape_81.setTransform(443.4,316.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FAE485").s().p("Ag2ibIBtBUIheDjg");
	this.shape_82.setTransform(439.3,312.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F2BC5F").s().p("AhugFIDdhIIhwCbg");
	this.shape_83.setTransform(445,297.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EBA24D").s().p("AhVApIAVjGICWE7g");
	this.shape_84.setTransform(447.4,273.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CD6C38").s().p("Ag8heICrB0IjdBJg");
	this.shape_85.setTransform(445,287.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FAE485").s().p("AhRiCICjBIIgxC9g");
	this.shape_86.setTransform(430.6,283.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F2BC5F").s().p("AhcAbIC5h+IgVDHg");
	this.shape_87.setTransform(431.7,267.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EBA24D").s().p("AhFASIgShtIAQAJQAYATAoAsQA6BDAlAsg");
	this.shape_88.setTransform(432.1,248.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CD6C38").s().p("AhBhkICeBKIi5B+g");
	this.shape_89.setTransform(431.7,260.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FAE485").s().p("AhziSIDnBdIgbDIg");
	this.shape_90.setTransform(413.5,255.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F2BC5F").s().p("AhzgmIDVgQIASBtg");
	this.shape_91.setTransform(413.5,245.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FAE485").s().p("AhwhTIC8AjIAlCEg");
	this.shape_92.setTransform(395,327.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CD6C38").s().p("AhwhBIDhBiIi8Aig");
	this.shape_93.setTransform(413.9,328.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EBA24D").s().p("AhwATIAViIIDMDrg");
	this.shape_94.setTransform(413.9,320.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F2BC5F").s().p("AhoAhIDRhkIgVCHg");
	this.shape_95.setTransform(394.2,315.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FAE485").s().p("AhMilICZCAIgsDMg");
	this.shape_96.setTransform(380.3,302.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CD6C38").s().p("Ag9hlICmBlIjRBmg");
	this.shape_97.setTransform(394.2,308.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EBA24D").s().p("AhTAfIBFikIBiELg");
	this.shape_98.setTransform(396.4,295.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F2BC5F").s().p("AhugtIDdglIhEClg");
	this.shape_99.setTransform(383.7,290.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FAE485").s().p("AgigUQgCg7AEgeIAFgRIA+BbIg9CiQgEg4gEhbg");
	this.shape_100.setTransform(375.4,272.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#CD6C38").s().p("AgvhQICeB9IjdAlg");
	this.shape_101.setTransform(383.7,277.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EBA24D").s().p("AhugDIAQiPIDNElg");
	this.shape_102.setTransform(411.3,255.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EBA24D").s().p("AhPAzIBmjjIA5Fhg");
	this.shape_103.setTransform(386.9,264.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F2BC5F").s().p("Ag+gTIB9g0IgQCOg");
	this.shape_104.setTransform(395.5,248.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F2BC5F").s().p("AhSAXICliIIhmDjg");
	this.shape_105.setTransform(380.9,257.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#61B26F").s().p("AgNEEQgSgagqgDQgsgDgxAbIgoAbIASghQAagnApgfQAigZA2AIQAaAEATAIQgQgPgdgPQg8gfhAgCQg3gChPATIhDASIA3gdQBCghAzgRQAzgRBRAXQAoALAdAPQgVgWgmgcQhNg4hWggQhWghhVAUQgbAHgXAKIgSAKIBAgyQBTgxBYAAQBagBBPA9QAnAfAWAeQgOgagFgmQgMhMAng6QAkg3BcgUQAugKAmABQgXAPgdAaQg5AzgWA1QgWA1AjBKQATAlAXAaQgCgYAHghQAOhEApgxQA7hGBZAAQAsAAAgAOQgnAJgsAUQhZApgbA8QgeA/AgBQQAPAnAWAbIkjCAQAAgNgJgOg");
	this.shape_106.setTransform(382.8,226);

	this.instance_22 = new lib.Path_2_3();
	this.instance_22.parent = this;
	this.instance_22.setTransform(435.4,329.8,1,1,0,0,0,47.2,14.5);
	this.instance_22.alpha = 0.262;

	this.instance_23 = new lib.Path_3_6();
	this.instance_23.parent = this;
	this.instance_23.setTransform(811.8,434.7,1,1,0,0,0,81.6,12.8);
	this.instance_23.alpha = 0.262;

	this.instance_24 = new lib.Path_4_4();
	this.instance_24.parent = this;
	this.instance_24.setTransform(467.7,764.8,1,1,0,0,0,108.5,12.8);
	this.instance_24.alpha = 0.262;

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#A6BD55").s().p("EgsGAO1IBjhbQCEhxCfhtQH9leJTi0QD3hLFShcQEihRBrgiQCvg4CKhDQCUhJC3h5QC2h4G4iHQGgiAHHhSQHahXEYAHQE7AIgpCCQgqCDlvDuQlRDboSECQoED6oUDQQoqDZmMBkQtnDcqABGQj9Aci2AAQlGAAhfhag");
	this.shape_107.setTransform(1002.1,719.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgFQg5gCAJgIIAMgGQAFgEgJgCQgUgGgWgBQgggCiYgDQhwgCmGAFIlwAGQifADg5AHQh6AQk/gEQhdgBgpgIQgagHgNgBIi2ACQisABgkgFQglgFAOgIIAXgHIiYgNIK+gTQH4gLHaABQQQABV1BEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_108.setTransform(299.2,716.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhUgMIg2gLQjfADhjgEQg6gDALgIIAKgGQAFgEgHgCQgVgGgWgBQgfgCiYgDQhxgCmFAFIlwAGQigADg5AIQh6APk/gEQhdgBgpgIQgZgHgNgBIi3ACQisACgkgFQglgFAPgIIAWgIIiYgNQIggQCegDQH3gLHbABQQQABV1BEQKKAfKhBAQFQAgDOAaI08g3g");
	this.shape_109.setTransform(363.5,710.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgEQg6gDALgIIAKgGQAFgEgIgCQgTgGgXgBIi3gFQhxgCmGAFIlvAGQigADg5AIQh6APk/gEQhdgBgpgIQgagHgNgBIi2ACQisACgkgFQgmgFAPgIIAXgIIiYgNQIfgQCfgDQH3gLHbABQQAABWFBEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_110.setTransform(427.3,701.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#A6BD55").s().p("ADZPxQmwgjklh+QqFkXnAlzQnwmag7l4QAhgmA8g0QB4hqCJhNQG4j2HBCHQC7A4D8BcQDZBPBRAVQCFAhBugQQB5gQCchQQCchQFNBgQE7BbFHDMQFWDVC5DpQDQEFhADOQhCDSk5CYQkfCLmsA9QkLAmkKAAQiVAAiVgMg");
	this.shape_111.setTransform(237.3,672.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#61763D").s().p("EAl9ADLIiogUIgkAEQgnADhWgIQkqgehqgbQgggIhXgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDggAWgl4gCiIH6gCQJzAGJZAkQUXBNOzBoQG4AwHLA/QC/AZHFBCIiNgDIAUAKQANAJgjABIgEABQgmAAiWgTg");
	this.shape_112.setTransform(1169.8,535.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgJQkjgchxgcQgggIhXgNIhQgMQp5hUimgNQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJZAjQUNBNO9BpQG0AwHPA+IKEBbIiNgCIAUAKQANAJgkABIgDABQgnAAiWgTg");
	this.shape_113.setTransform(1111.4,521.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#61763D").s().p("EAl9ADLIiogUIglAEQgmADhWgJQkkgchwgcQgggIhXgNIhQgMQp5hUimgOQiKgMgfgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJaAjQUFBNPFBoQG2AxHMA+QC8AaHHBBIiMgCIAUAKQANAJgkABIgDABQgmAAiWgTg");
	this.shape_114.setTransform(1053.5,507.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgIQkqgehqgbQghgIhWgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh9gOIhxgOQgMAEgnACQhPADiLgOUgDhgAWgl3gCiIH6gCQJyAGJaAkQUJBMPBBpQG2AwHNA+QCmAXHeBFIiNgDIAUAKQAMAJgjABIgDABQgnAAiWgTg");
	this.shape_115.setTransform(973.5,492.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#61763D").s().p("Eg9wAIFQg6gaAJg+QAEgTAJgVIAJgRIjgg3QK2j4DshKQKejSKJh5QK9iDNDgnQNcgpP4A4QOfAzPqEZQH2CME7CBQuggTvLgOQ+VgcjSAZQjQAaiDg9QgogUgcgYIgUgWQhLAVhcATQi4AohZgFQhSgFAEg4IAGgwQACgbgOgOIgcgaQgOgKgZgDQgtgEjUASQicANoMCPIntCNQg1AQg+AYQh7AwgrAqQhVBTiwA0QiBAmjEAZQiAAPhCgpQgPgJgWgVQgQgQgKAAQgLgBhKAUIihApQihAnhMAAQgiAAgRgIg");
	this.shape_116.setTransform(606.2,322.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#8CAC50").s().p("EgmdApkQxvjbtsmPQtsmQnfoGQnyoYAApMQAApLHyoYQHgoGNrmQQNsmPRvjbQSXjjUGAAQUHAASXDjQRvDbNsGPQNsGQHgIGQHxIYAAJLQAAJMnxIYQnhIGtrGQQtsGPxvDbQyXDj0HAAQ0GAAyXjjg");
	this.shape_117.setTransform(644.1,557.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#917556").s().p("AnmTjQgfgYgJg6QgHgxAHhfQAhkYAMjQQAOkCgxkUQg/kdgUiBQgdi3BKjbQBEjJB6iTQAZgdCcgZQCLgWC+gLQC7gKCCAGQCPAGACAZQAEAvh+AxQhmAokMBEQhyAdhCA0Qg4AqgkBGQgQAfgnBqQgjBeglA9QgsBKgBBQQAAA6AaBiQAoCUAHAnQAYB6gEB6QgMExhVF+QhRFog7AAQgHAAgHgFg");
	this.shape_118.setTransform(575,953);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#74542E").s().p("AMSY+QkPifh2kGQg+iKg0l9QgdjXgzoIQgunggci3Qgukig3gIQjYgjhpHkQgjCjgRDJQgNCRABBQQAECvgzFOQhCGyhqCnQhmCgixAzQg4AQg4ADIgtAAQhbo6gajkQgcj7AFoGQAGpwBHi7QASgwAqiHQAchbAcgtQAmg+BFguQBNgyCLgwQDwhTEmgdQCbgPDXgLQCGgOCjBAQCvBEB0B+QCjCwAtD9QBAFtioIgQhWEWAND7QALDABJDKQAqByBVC+QA/CcgHBmQgPDRg3BWQgbAqgZABQhvgbiHhPg");
	this.shape_119.setTransform(609,973.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#644725").s().p("EgTKAnDQgthJgHhDQgHg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBPDYA2HOQAVCvgPC9QgKCPglDKIhAFeQgjDRgKCsQgKCyA4EGQAfCNBaFCQBQEcAVCBQAhDFguBbQguBdiwAeQiGAWkHgKQk5gRiegEQkUgHinAcQiyAei/CtQiDB2iuDhQjBD7gkAkQg9A/goAAQgZAAgRgag");
	this.shape_120.setTransform(609.1,1026.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#917556").s().p("AHpbTQgvhWggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAdQgnALieBTQiCBEhCgBQhhgCgjh/QgtingZi6QgVieAAh3QAAhYHMASQDmAJDlAaIBiAaQB1AiBjAmQE+B5ARB0QAPBkgPCOQgKBWgjDEQhOG1AAEWQAAE7A2GiQAcDaApENQAFAsAVBrQAVBpAHA+QAWDQhMCkQhJCdhKAGIgGAAQg7AAg2hgg");
	this.shape_121.setTransform(369.8,993.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#74542E").s().p("EAIaAkwQhsgRg1gwQgRgPgJgQIgFgOQgggNgfgnQg+hOAGh+QAFh3hRhgIhNhUQgvg1gcgzQgyhahwoEQh4orgjhcQgYg+hNiRQhwjQgphUQjYmxhhmhQhynmgTk2QgGhlADhfQAFhYAAggQAAhQP7hQQH+goH+gYIgyFhQgzF3AABtQAABXAHITQAFH6gMBUQgNBnAADvQAADwANCDQAFArAcDNQAcDiAPC1QAvI+hPD9QhaEhhqBqQhMBMhpAAQgYAAgbgEg");
	this.shape_122.setTransform(380.8,1039.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#917556").s().p("AkXL0Qg8gGAQmJQAJjNADhVQAEiOgOgeQgNgdghgiIg8g4QhHhGALhJQAFgiAggJQAXgGA6AEQBWAGAbAAQBKAAA9gQQBegZEJiwQB3hPAsgYQBIgpAOAQQAXAajbELQj/E1giBBQgZAygmCVQgWBXguDFQhYFlg8AAIgCAAg");
	this.shape_123.setTransform(854.3,909.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#74542E").s().p("AqpWMQg2gpgZjSQgUimADjOQABhGAsi7IBYljQBunJhCgrQhbg7gwh8Qg1iJAWimQATiSBshqQA2g0AzgYIAWAIQAgAIAuADQCUAJDvgxQDugxE8h2QCeg7BugxIAHBRQABBvgaCXQgPBUg1BHQgqA5hTBEIijB+QhpBUhLBNQiUCbiiIBQgoB+hJEAQg6DMgWA6QhRDTh2DOQh7DUg4AAQgKAAgHgGg");
	this.shape_124.setTransform(865.6,947.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#644725").s().p("EgOJAgiQgkgZgbhIQhAioAYkJQAKhqARmVQAapRAKjIQA3w+BKkEQBNkMCGi8QBDheA0gpIBHAEQBaADBigFQE3gQEOhaQENhZDfhzQBwg5A5gnIgYCyQgjDbgzDKQijKGkGDsQiSCDhYDPQhFCkgxD/QgdCVgwE4QgwEYg8C2Qh8F6kvFAQhhBmh2BkQg+A0hIA5QgTARgUAAQgQAAgRgMg");
	this.shape_125.setTransform(860.3,1003.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg4hih5o0QiDpfgmhlQhFi3ihkjQinkvknnXQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_126.setTransform(363.5,981.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#523821").s().p("EhKDAj2QjIAAi3hOQixhLiJiJQiJiJhLixQhOi3AAjIMAAAgo1QAAjIBOi3QBLixCJiJQCJiJCxhLQC3hODIAAMCUHAAAQDIAAC4BOQCxBLCICJQCJCJBLCxQBOC3AADIMAAAAo1QAADIhOC3QhLCxiJCJQiICJixBLQi4BOjIAAg");
	this.shape_127.setTransform(660.1,880.9);

	this.instance_25 = new lib.Path_14();
	this.instance_25.parent = this;
	this.instance_25.setTransform(978.7,201.8,1,1,0,0,0,195.2,33.5);
	this.instance_25.alpha = 0.77;

	this.instance_26 = new lib.Path_1_9();
	this.instance_26.parent = this;
	this.instance_26.setTransform(330.1,217.6,1,1,0,0,0,153,26.3);
	this.instance_26.alpha = 0.77;

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-304.3,0,304.4).s().p("Eg6lAuQMAAAhdzMB1LAAAMAAABfHg");
	this.shape_128.setTransform(603.8,304.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_128},{t:this.instance_26},{t:this.instance_25},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.instance_21},{t:this.instance_20},{t:this.shape_64},{t:this.shape_63},{t:this.instance_19},{t:this.instance_18},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.instance_17},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-404.8,0,2020,1359);


(lib.page4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		var canvas = this;
		
		canvas.parent.gotoAndPlay("page5");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgimAAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAMBFNAAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape.setTransform(609.3,829.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(17));

	// Layer 18
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgjDAB4QgyAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAyAAMBGHAAAQAyAAAjAjQAjAjAAAxQAAAxgjAkQgjAjgyAAgEgj8gA3QgXAXAAAgQAAAhAXAXQAYAYAhAAMBGHAAAQAiAAAXgYQAXgXAAghQAAgggXgXQgXgYgiAAMhGHAAAQghAAgYAYg");
	this.shape_1.setTransform(608.6,833.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(17));

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjDABkQgpAAgegeQgdgcAAgqQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAAqgdAcQgdAegqAAg");
	mask.setTransform(608.3,833.6);

	// Layer 16
	this.instance = new lib.Symbol17copy3();
	this.instance.parent = this;
	this.instance.setTransform(246.8,833.6,1,1,0,0,0,234.4,10);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({x:275.6},0).wait(1).to({x:304.5},0).wait(1).to({x:333.4},0).wait(1).to({x:362.2},0).wait(1).to({x:391.1},0).wait(1).to({x:420},0).wait(1).to({x:448.8},0).wait(1).to({x:477.7},0).wait(1));

	// Layer 15
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.659)").s().p("EgjDABkQgpAAgegdQgdgeAAgpQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAApgdAeQgdAdgqAAg");
	this.shape_2.setTransform(608.3,833.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_3.setTransform(430.8,792.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVCWQgKgCgIgEQgHgFgEgKQgEgIgBgNIABgGIACgIIAdAAQABAPAFAGQAFAGALAAIAIgBQAFgBADgFQAEgDACgHQABgGAAgLIAAgkQgFAHgJAGQgIAFgNAAIgJgBIgKgDQgGgDgFgFQgGgGgEgJQgEgJgCgNQgDgOAAgTIAAg8QAAgTADgMQACgNAEgKQAEgIAGgFQAFgFAGgDIAKgDIAKAAQAIAAAGACQAGABAFAFIAIAHIAGAJIADgWIAhAAIAADaQAAATgEAPQgDAQgIALQgIALgMAGQgMAFgQABQgLgBgKgCgAgHh4QgEACgDAFQgDAFgCAHIgBAWIAABKIABAUQACAJADAEQADAFAEABIAHADIAHgCIAGgEIAFgFIADgGIAAh8QgDgIgFgEQgFgFgIAAg");
	this.shape_4.setTransform(414.6,795.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhHg");
	this.shape_5.setTransform(398.3,792.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_6.setTransform(383.4,789.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(17));

	// Layer 1
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1059.4,62.3,1,1,25,0,0,176.3,159);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:176.4,regY:159.1,rotation:18.3,x:1014.2,y:88.1,alpha:0.082},0).wait(1).to({rotation:11.5,x:969.9,y:115.3,alpha:0.163},0).wait(1).to({rotation:4.8,x:926.9,y:144.4,alpha:0.245},0).wait(1).to({rotation:-2,x:885.5,y:175.7,alpha:0.327},0).wait(1).to({rotation:-9.4,x:846.2,y:209.8,alpha:0.408},0).wait(1).to({rotation:-16.9,x:810.2,y:247.2,alpha:0.49},0).wait(1).to({rotation:-24.3,x:778.9,y:288.6,alpha:0.392},0).wait(1).to({rotation:-31.7,x:754.6,y:334.4,alpha:0.294},0).wait(1).to({rotation:-39.1,x:740.6,y:384.4,alpha:0.196},0).wait(1).to({rotation:-46.6,x:739.9,y:436.2,alpha:0.098},0).wait(1).to({rotation:-54,x:752.6,y:486.4,alpha:0},0).to({_off:true},1).wait(5));

	// Layer 3
	this.instance_2 = new lib.Path_8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(816.2,1209.9,1,1,0,0,0,112.8,112.8);
	this.instance_2.alpha = 0.488;

	this.instance_3 = new lib.Path_8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(388.9,1209.9,1,1,0,0,0,112.8,112.8);
	this.instance_3.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(17));

	// Layer 8
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_7.setTransform(603.9,1021.7);

	this.instance_4 = new lib.ClipGroup_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(603.9,1021.8,1,1,0,0,0,109.8,109.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah4C5QhuioiXgRQCXgPBuipQB1i0ADj+QAED+B2C0QBtCpCXAPQiXARhtCoQh2C1gED9QgDj9h1i1gAF+AAQAQAAARAAIAAACQgRAAgQgCgAmeAAQARAAAQAAQgQACgRAAgAl9AAIAAAAg");
	this.shape_8.setTransform(547.3,990.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#697E9B").s().p("Amls4IJvAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtkrCvIhMAsQgXANgzALIgvAIg");
	this.shape_9.setTransform(646,1027.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A0BAD3").s().p("Ah4MZIhMgsQksiviuktQitkrAAlcIAAjmQAAhbBBhBQBAhABbAAITfAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtksCvIhMAsQg4AghBAAQhAAAg4ggg");
	this.shape_10.setTransform(603.8,1027.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_11.setTransform(603.9,1021.7);

	this.instance_5 = new lib.ClipGroup_1_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(601.9,1023.8,1,1,0,0,0,109.8,109.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D3E9EB").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjMQBTjFCYiYQCYiYDFhTQDMhXDeAAQDfAADMBXQDFBTCYCYQCYCYBTDFQBXDMAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjMBXjfAAQjeAAjMhXg");
	this.shape_12.setTransform(603.9,1021.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_13.setTransform(816.1,1209.9);

	this.instance_6 = new lib.ClipGroup_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(816.2,1209.9,1,1,0,0,0,109.8,109.8);

	this.instance_7 = new lib.ClipGroup_1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(829,1222.1,1,1,0,0,0,122.6,122);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_14.setTransform(816.1,1209.9);

	this.instance_8 = new lib.ClipGroup_2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(814.2,1211.9,1,1,0,0,0,109.8,109.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3F4826").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDFBUCYCYQCYCXBTDFQBXDMAADfQAADghXDLQhTDFiYCYQiYCYjFBTQjLBXjggBQjeABjMhXg");
	this.shape_15.setTransform(816.1,1209.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicidhWjKQhYjRgBjlQABjkBYjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBYDRAADkQAADlhYDRQhWDKicCdQicCcjLBWQjRBYjlABQjkgBjShYgAmevXQi/BSiUCUQiVCThRC/QhUDHAADYQAADZBUDGQBRC/CVCUQCUCUC/BSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBQi/QBUjGAAjZQAAjYhUjHQhQi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_16.setTransform(388.8,1209.9);

	this.instance_9 = new lib.ClipGroup_4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(468.3,1158,1,1,0,0,0,191.2,163.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E8976B").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMABjfQgBjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDGBUCXCYQCYCXBTDFQBWDMABDfQgBDghWDLQhTDFiYCYQiXCYjGBTQjLBXjggBQjeABjMhXg");
	this.shape_17.setTransform(388.8,1209.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.instance_9},{t:this.shape_16},{t:this.shape_15},{t:this.instance_8},{t:this.shape_14},{t:this.instance_7},{t:this.instance_6},{t:this.shape_13},{t:this.shape_12},{t:this.instance_5},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_4},{t:this.shape_7}]}).wait(17));

	// Layer 2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(10).p("EA6gAk3Mh0/AAAMAAAgp8QAAmdCfl6QCbltEZkZQEZkaFtiaQF5igGeAAMA1eAAAQGeAAF6CgQFtCaEZEaQEZEZCbFtQCfF6AAGdg");
	this.shape_18.setTransform(604.7,1118.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9DD89").s().p("Eg6fAk3MAAAgp8QAAmeCgl5QCaltEZkZQEakaFsiaQF6ifGdAAMA1eAAAQGeAAF5CfQFtCaEaEaQEZEZCaFtQCgF5AAGeMAAAAp8g");
	this.shape_19.setTransform(604.7,1118.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).wait(17));

	// Layer 7
	this.instance_10 = new lib.Symbol14();
	this.instance_10.parent = this;
	this.instance_10.setTransform(822.2,349.1,1,1,0,0,0,126,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:126.1,x:822.3},0).wait(4).to({x:808.1},0).wait(1).to({x:821.1},0).wait(1).to({x:815.1},0).wait(1).to({x:822.1},0).wait(9));

	// Layer 11
	this.instance_11 = new lib.bloodbar3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(475.4,494.9,1,1,0,0,0,93.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(17));

	// Layer 12
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AvoB4QgxAAgjgjQgkgkAAgxQAAgxAkgiQAjgkAxAAIfRAAQAxAAAkAkQAjAiAAAxQAAAxgjAkQgkAjgxAAgAwgg3QgYAXAAAgQAAAhAYAXQAXAYAhAAIfRAAQAhAAAXgYQAYgXAAghQAAgggYgXQgXgYghAAI/RAAQghAAgXAYg");
	this.shape_20.setTransform(796.8,233.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#733A44").s().p("Aw3AUIAAgnMAhuAAAIAAAng");
	this.shape_21.setTransform(797.1,239.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AvQALQgEAAgDgDQgEgDAAgFQAAgEAEgDQADgDAEAAIegAAQAGAAACADQAEADAAAEQAAAFgEADQgCADgGAAg");
	this.shape_22.setTransform(796.8,228.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	this.shape_23.setTransform(796.8,233.4);

	this.instance_12 = new lib.Path_3_3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(796.8,233.4,1,1,0,0,0,110,10);
	this.instance_12.alpha = 0.66;

	this.instance_13 = new lib.Symbol15();
	this.instance_13.parent = this;
	this.instance_13.setTransform(796.8,233.4,1,1,0,0,0,112,12);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},0).wait(1).to({regX:112.1,x:796.9},0).wait(7));

	// Layer 1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_24.setTransform(861.5,169.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_25.setTransform(845.1,169.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA+B0IAAitIgBgNIgDgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAGgFIALgJIANgEIAMgCQANAAAJAHQAJAGAFANQAFgHAFgFIAMgIIANgEIAMgCQATAAAMAPQAKAOABAcIAACug");
	this.shape_26.setTransform(824.7,169.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_27.setTransform(807.8,165.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_28.setTransform(799.3,165);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_29.setTransform(787.6,169.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_30.setTransform(772.8,169.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAFgFAGgCIALgDIAIAAIAMABIAIAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAHgBIAHgEIAEgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_31.setTransform(756.6,165.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_32.setTransform(741.1,169.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_33.setTransform(725.5,166.6);

	this.instance_14 = new lib.Path_10();
	this.instance_14.parent = this;
	this.instance_14.setTransform(793.1,167.7,1,1,0,0,0,142.9,32.4);
	this.instance_14.alpha = 0.66;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_34.setTransform(551.4,435);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_35.setTransform(535,435.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIANgEIAMgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_36.setTransform(514.6,435);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_37.setTransform(497.8,430.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_38.setTransform(485.4,431.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_39.setTransform(469,431.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_40.setTransform(452.3,435.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_41.setTransform(437.4,432.4);

	this.instance_15 = new lib.Path_11();
	this.instance_15.parent = this;
	this.instance_15.setTransform(494,431.5,1,1,0,0,0,142.9,32.4);
	this.instance_15.alpha = 0.66;

	this.instance_16 = new lib.Path_13();
	this.instance_16.parent = this;
	this.instance_16.setTransform(402.3,688.9,1,1,0,0,0,25.9,51.8);
	this.instance_16.alpha = 0.262;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E17B3A").s().p("ADrHfQACgSgBgeIgDg4QgFgzgDgUIgNhVQgIgrgMgyQgRhJgIgZQgRgwgWgxQgrhdg9hVQg4hRg7g5QgfgcgZgRQgYgSgXgLQgRgKgQgFIgMgDIAAgBIAMADQAOAEAUAKQAdAQATANQAbATAdAbQA9A3A5BRQA9BUAsBfQAYAvARAxIAPAyIAMAxQAMAzAHAqQAFAaACATIAGAoQADAhACAnIABA5QgBAegDASg");
	this.shape_42.setTransform(441,650.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F9D68E").s().p("AH0L9QiPgKhuhUQkzjvg4keQgJgwgCgvQgMAPgRAOQhgBUh9AaQicAhhhhfQg6g5gfhtQgih5AUh6QAWiOBbhrQBrh8C8g8QExhhEGBVQEWBZBvECQBTDBAVFOQAREhgfBxQgWBQgpBIQgUAkgQATQgjAJgvAAIgogBg");
	this.shape_43.setTransform(389.2,673.6);

	this.instance_17 = new lib.Path_3_5();
	this.instance_17.parent = this;
	this.instance_17.setTransform(435.8,665.2,1,1,0,0,0,19.3,36.4);
	this.instance_17.alpha = 0.262;

	this.instance_18 = new lib.Path_4_3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(482.9,690.5,1,1,0,0,0,102.4,76.8);
	this.instance_18.alpha = 0.262;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F9D68E").s().p("Am1NQQjLhGibh/Qich/hWilQhYisAAi7QAAi6BYisQBWikCciAQCbh/DLhGQDRhIDkAAQDlAADSBIQDKBGCcB/QCbCABWCkQBYCsAAC6QAAC7hYCsQhWClibB/QicB/jKBGQjSBIjlAAQjkAAjRhIg");
	this.shape_44.setTransform(491.9,674.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F9D68E").s().p("AhXGMQi0mdgJjtQgIjbBnicQAvhHA7giQA9gkA8ALQBxATANFLQAEBlgFCiQgFClABAfQAFCYA2EZQAaCMAaBuIi7AdQhYifhajPg");
	this.shape_45.setTransform(423.6,531.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9D68E").s().p("AlgIdQAWhzAmiRQBMkgBPiVQBqjGB6h8QCLiMBRAvQBOAthDDcQg2C2hPB2QgwBGi+ELIi2D9g");
	this.shape_46.setTransform(568.3,545.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C6DA92").s().p("AgUQbQhogDjQgzQjMgxjjhMQofi1ipiUQhihVAPhKQAKg1BMg9IA9guQAhgZAOgQQAngsg4gkQgagQjaAaQlzAtiPAMQs0BEoSivQkihejOk0Qi7kWhrmxQCtEMD3CLQHwEXI0CXQDSA4D/AwQA0AKFrA/QB/AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBuBegCBnQgBAzgYAgIBNgLQBigMBrgHQFYgUE3AyQCeAaCAAkQAaAICJAtQBEAXAqAAQA0ABBKgdQBBgYB3hDQCNhSBLgqQEWibCGAAQB9AABnBBQBGAsATAJQA5AdBDANQB/AZFajUQBOgwCshxQCBhUAjgRQAsgUBRAgQA2AUB0BCQCIBOBAAeQB4A5BfAQQC2AgFvAgQC4AQCTAKQgsCv55CjQoHAzpoArIoCAiQhqAJh+A1Qg0AVitBXQiMBHhdAfQh9Aoh0AAIgTAAg");
	this.shape_47.setTransform(445.4,764.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6FB77F").s().p("AkmAaIARg6ICyEJIiqlUIAghdICkGuIiDnuIBXgrIBJILIgjoCIBrAAIgjIKIBKnZIBAAaIhIFwIBdk+IA9AgIhsEqIB+kBIBAAYIi+FYIi8Aog");
	this.shape_48.setTransform(454,294.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EBA24D").s().p("Ag+gJIBuiSIAPE3g");
	this.shape_49.setTransform(429.1,312.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FAE485").s().p("Ahmh1IC0AdIAZDOg");
	this.shape_50.setTransform(415,320.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CD6C38").s().p("Ag+hmIB9CkIhkApg");
	this.shape_51.setTransform(429.1,321.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F2BC5F").s().p("AiRAsIEjh0IhvCRg");
	this.shape_52.setTransform(419.3,304.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EBA24D").s().p("AhsANIBniPIByEFg");
	this.shape_53.setTransform(423,283.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FAE485").s().p("AhWiFICtAhIhLDqg");
	this.shape_54.setTransform(403.5,295.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CD6C38").s().p("AhGh1IDYB1IkjB1g");
	this.shape_55.setTransform(419.3,296.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F2BC5F").s().p("AiJAnIEThuIhnCPg");
	this.shape_56.setTransform(408.6,277.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CD6C38").s().p("AhTiDIDdCXIkTBvg");
	this.shape_57.setTransform(408.6,268.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FAE485").s().p("Ag2iwIBtBbIg2EGg");
	this.shape_58.setTransform(394.7,264.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EBA24D").s().p("Ag3ASIBvicIgvEVg");
	this.shape_59.setTransform(450.4,303.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CD6C38").s().p("AAOhxIBCB5IifBqg");
	this.shape_60.setTransform(443.4,316.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FAE485").s().p("Ag2ibIBtBUIheDjg");
	this.shape_61.setTransform(439.3,312.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F2BC5F").s().p("AhugFIDdhIIhwCbg");
	this.shape_62.setTransform(445,297.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EBA24D").s().p("AhVApIAVjGICWE7g");
	this.shape_63.setTransform(447.4,273.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CD6C38").s().p("Ag8heICrB0IjdBJg");
	this.shape_64.setTransform(445,287.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FAE485").s().p("AhRiCICjBIIgxC9g");
	this.shape_65.setTransform(430.6,283.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F2BC5F").s().p("AhcAbIC5h+IgVDHg");
	this.shape_66.setTransform(431.7,267.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EBA24D").s().p("AhFASIgShtIAQAJQAYATAoAsQA6BDAlAsg");
	this.shape_67.setTransform(432.1,248.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CD6C38").s().p("AhBhkICeBKIi5B+g");
	this.shape_68.setTransform(431.7,260.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FAE485").s().p("AhziSIDnBdIgbDIg");
	this.shape_69.setTransform(413.5,255.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F2BC5F").s().p("AhzgmIDVgQIASBtg");
	this.shape_70.setTransform(413.5,245.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FAE485").s().p("AhwhTIC8AjIAlCEg");
	this.shape_71.setTransform(395,327.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CD6C38").s().p("AhwhBIDhBiIi8Aig");
	this.shape_72.setTransform(413.9,328.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EBA24D").s().p("AhwATIAViIIDMDrg");
	this.shape_73.setTransform(413.9,320.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F2BC5F").s().p("AhoAhIDRhkIgVCHg");
	this.shape_74.setTransform(394.2,315.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FAE485").s().p("AhMilICZCAIgsDMg");
	this.shape_75.setTransform(380.3,302.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CD6C38").s().p("Ag9hlICmBlIjRBmg");
	this.shape_76.setTransform(394.2,308.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EBA24D").s().p("AhTAfIBFikIBiELg");
	this.shape_77.setTransform(396.4,295.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F2BC5F").s().p("AhugtIDdglIhEClg");
	this.shape_78.setTransform(383.7,290.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FAE485").s().p("AgigUQgCg7AEgeIAFgRIA+BbIg9CiQgEg4gEhbg");
	this.shape_79.setTransform(375.4,272.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CD6C38").s().p("AgvhQICeB9IjdAlg");
	this.shape_80.setTransform(383.7,277.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EBA24D").s().p("AhugDIAQiPIDNElg");
	this.shape_81.setTransform(411.3,255.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EBA24D").s().p("AhPAzIBmjjIA5Fhg");
	this.shape_82.setTransform(386.9,264.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F2BC5F").s().p("Ag+gTIB9g0IgQCOg");
	this.shape_83.setTransform(395.5,248.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F2BC5F").s().p("AhSAXICliIIhmDjg");
	this.shape_84.setTransform(380.9,257.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#61B26F").s().p("AgNEEQgSgagqgDQgsgDgxAbIgoAbIASghQAagnApgfQAigZA2AIQAaAEATAIQgQgPgdgPQg8gfhAgCQg3gChPATIhDASIA3gdQBCghAzgRQAzgRBRAXQAoALAdAPQgVgWgmgcQhNg4hWggQhWghhVAUQgbAHgXAKIgSAKIBAgyQBTgxBYAAQBagBBPA9QAnAfAWAeQgOgagFgmQgMhMAng6QAkg3BcgUQAugKAmABQgXAPgdAaQg5AzgWA1QgWA1AjBKQATAlAXAaQgCgYAHghQAOhEApgxQA7hGBZAAQAsAAAgAOQgnAJgsAUQhZApgbA8QgeA/AgBQQAPAnAWAbIkjCAQAAgNgJgOg");
	this.shape_85.setTransform(382.8,226);

	this.instance_19 = new lib.Path_2_3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(435.4,329.8,1,1,0,0,0,47.2,14.5);
	this.instance_19.alpha = 0.262;

	this.instance_20 = new lib.Path_3_6();
	this.instance_20.parent = this;
	this.instance_20.setTransform(811.8,434.7,1,1,0,0,0,81.6,12.8);
	this.instance_20.alpha = 0.262;

	this.instance_21 = new lib.Path_4_4();
	this.instance_21.parent = this;
	this.instance_21.setTransform(467.7,764.8,1,1,0,0,0,108.5,12.8);
	this.instance_21.alpha = 0.262;

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#A6BD55").s().p("EgsGAO1IBjhbQCEhxCfhtQH9leJTi0QD3hLFShcQEihRBrgiQCvg4CKhDQCUhJC3h5QC2h4G4iHQGgiAHHhSQHahXEYAHQE7AIgpCCQgqCDlvDuQlRDboSECQoED6oUDQQoqDZmMBkQtnDcqABGQj9Aci2AAQlGAAhfhag");
	this.shape_86.setTransform(1002.1,719.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgFQg5gCAJgIIAMgGQAFgEgJgCQgUgGgWgBQgggCiYgDQhwgCmGAFIlwAGQifADg5AHQh6AQk/gEQhdgBgpgIQgagHgNgBIi2ACQisABgkgFQglgFAOgIIAXgHIiYgNIK+gTQH4gLHaABQQQABV1BEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_87.setTransform(299.2,716.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhUgMIg2gLQjfADhjgEQg6gDALgIIAKgGQAFgEgHgCQgVgGgWgBQgfgCiYgDQhxgCmFAFIlwAGQigADg5AIQh6APk/gEQhdgBgpgIQgZgHgNgBIi3ACQisACgkgFQglgFAPgIIAWgIIiYgNQIggQCegDQH3gLHbABQQQABV1BEQKKAfKhBAQFQAgDOAaI08g3g");
	this.shape_88.setTransform(363.5,710.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgEQg6gDALgIIAKgGQAFgEgIgCQgTgGgXgBIi3gFQhxgCmGAFIlvAGQigADg5AIQh6APk/gEQhdgBgpgIQgagHgNgBIi2ACQisACgkgFQgmgFAPgIIAXgIIiYgNQIfgQCfgDQH3gLHbABQQAABWFBEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_89.setTransform(427.3,701.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#A6BD55").s().p("ADZPxQmwgjklh+QqFkXnAlzQnwmag7l4QAhgmA8g0QB4hqCJhNQG4j2HBCHQC7A4D8BcQDZBPBRAVQCFAhBugQQB5gQCchQQCchQFNBgQE7BbFHDMQFWDVC5DpQDQEFhADOQhCDSk5CYQkfCLmsA9QkLAmkKAAQiVAAiVgMg");
	this.shape_90.setTransform(237.3,672.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#61763D").s().p("EAl9ADLIiogUIgkAEQgnADhWgIQkqgehqgbQgggIhXgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDggAWgl4gCiIH6gCQJzAGJZAkQUXBNOzBoQG4AwHLA/QC/AZHFBCIiNgDIAUAKQANAJgjABIgEABQgmAAiWgTg");
	this.shape_91.setTransform(1169.8,535.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgJQkjgchxgcQgggIhXgNIhQgMQp5hUimgNQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJZAjQUNBNO9BpQG0AwHPA+IKEBbIiNgCIAUAKQANAJgkABIgDABQgnAAiWgTg");
	this.shape_92.setTransform(1111.4,521.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#61763D").s().p("EAl9ADLIiogUIglAEQgmADhWgJQkkgchwgcQgggIhXgNIhQgMQp5hUimgOQiKgMgfgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJaAjQUFBNPFBoQG2AxHMA+QC8AaHHBBIiMgCIAUAKQANAJgkABIgDABQgmAAiWgTg");
	this.shape_93.setTransform(1053.5,507.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgIQkqgehqgbQghgIhWgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh9gOIhxgOQgMAEgnACQhPADiLgOUgDhgAWgl3gCiIH6gCQJyAGJaAkQUJBMPBBpQG2AwHNA+QCmAXHeBFIiNgDIAUAKQAMAJgjABIgDABQgnAAiWgTg");
	this.shape_94.setTransform(973.5,492.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#61763D").s().p("Eg9wAIFQg6gaAJg+QAEgTAJgVIAJgRIjgg3QK2j4DshKQKejSKJh5QK9iDNDgnQNcgpP4A4QOfAzPqEZQH2CME7CBQuggTvLgOQ+VgcjSAZQjQAaiDg9QgogUgcgYIgUgWQhLAVhcATQi4AohZgFQhSgFAEg4IAGgwQACgbgOgOIgcgaQgOgKgZgDQgtgEjUASQicANoMCPIntCNQg1AQg+AYQh7AwgrAqQhVBTiwA0QiBAmjEAZQiAAPhCgpQgPgJgWgVQgQgQgKAAQgLgBhKAUIihApQihAnhMAAQgiAAgRgIg");
	this.shape_95.setTransform(606.2,322.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8CAC50").s().p("EgmdApkQxvjbtsmPQtsmQnfoGQnyoYAApMQAApLHyoYQHgoGNrmQQNsmPRvjbQSXjjUGAAQUHAASXDjQRvDbNsGPQNsGQHgIGQHxIYAAJLQAAJMnxIYQnhIGtrGQQtsGPxvDbQyXDj0HAAQ0GAAyXjjg");
	this.shape_96.setTransform(644.1,557.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#917556").s().p("AnmTjQgfgYgJg6QgHgxAHhfQAhkYAMjQQAOkCgxkUQg/kdgUiBQgdi3BKjbQBEjJB6iTQAZgdCcgZQCLgWC+gLQC7gKCCAGQCPAGACAZQAEAvh+AxQhmAokMBEQhyAdhCA0Qg4AqgkBGQgQAfgnBqQgjBeglA9QgsBKgBBQQAAA6AaBiQAoCUAHAnQAYB6gEB6QgMExhVF+QhRFog7AAQgHAAgHgFg");
	this.shape_97.setTransform(575,953);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#74542E").s().p("AMSY+QkPifh2kGQg+iKg0l9QgdjXgzoIQgunggci3Qgukig3gIQjYgjhpHkQgjCjgRDJQgNCRABBQQAECvgzFOQhCGyhqCnQhmCgixAzQg4AQg4ADIgtAAQhbo6gajkQgcj7AFoGQAGpwBHi7QASgwAqiHQAchbAcgtQAmg+BFguQBNgyCLgwQDwhTEmgdQCbgPDXgLQCGgOCjBAQCvBEB0B+QCjCwAtD9QBAFtioIgQhWEWAND7QALDABJDKQAqByBVC+QA/CcgHBmQgPDRg3BWQgbAqgZABQhvgbiHhPg");
	this.shape_98.setTransform(609,973.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#644725").s().p("EgTKAnDQgthJgHhDQgHg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBPDYA2HOQAVCvgPC9QgKCPglDKIhAFeQgjDRgKCsQgKCyA4EGQAfCNBaFCQBQEcAVCBQAhDFguBbQguBdiwAeQiGAWkHgKQk5gRiegEQkUgHinAcQiyAei/CtQiDB2iuDhQjBD7gkAkQg9A/goAAQgZAAgRgag");
	this.shape_99.setTransform(609.1,1026.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#917556").s().p("AHpbTQgvhWggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAdQgnALieBTQiCBEhCgBQhhgCgjh/QgtingZi6QgVieAAh3QAAhYHMASQDmAJDlAaIBiAaQB1AiBjAmQE+B5ARB0QAPBkgPCOQgKBWgjDEQhOG1AAEWQAAE7A2GiQAcDaApENQAFAsAVBrQAVBpAHA+QAWDQhMCkQhJCdhKAGIgGAAQg7AAg2hgg");
	this.shape_100.setTransform(369.8,993.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#74542E").s().p("EAIaAkwQhsgRg1gwQgRgPgJgQIgFgOQgggNgfgnQg+hOAGh+QAFh3hRhgIhNhUQgvg1gcgzQgyhahwoEQh4orgjhcQgYg+hNiRQhwjQgphUQjYmxhhmhQhynmgTk2QgGhlADhfQAFhYAAggQAAhQP7hQQH+goH+gYIgyFhQgzF3AABtQAABXAHITQAFH6gMBUQgNBnAADvQAADwANCDQAFArAcDNQAcDiAPC1QAvI+hPD9QhaEhhqBqQhMBMhpAAQgYAAgbgEg");
	this.shape_101.setTransform(380.8,1039.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#917556").s().p("AkXL0Qg8gGAQmJQAJjNADhVQAEiOgOgeQgNgdghgiIg8g4QhHhGALhJQAFgiAggJQAXgGA6AEQBWAGAbAAQBKAAA9gQQBegZEJiwQB3hPAsgYQBIgpAOAQQAXAajbELQj/E1giBBQgZAygmCVQgWBXguDFQhYFlg8AAIgCAAg");
	this.shape_102.setTransform(854.3,909.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#74542E").s().p("AqpWMQg2gpgZjSQgUimADjOQABhGAsi7IBYljQBunJhCgrQhbg7gwh8Qg1iJAWimQATiSBshqQA2g0AzgYIAWAIQAgAIAuADQCUAJDvgxQDugxE8h2QCeg7BugxIAHBRQABBvgaCXQgPBUg1BHQgqA5hTBEIijB+QhpBUhLBNQiUCbiiIBQgoB+hJEAQg6DMgWA6QhRDTh2DOQh7DUg4AAQgKAAgHgGg");
	this.shape_103.setTransform(865.6,947.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#644725").s().p("EgOJAgiQgkgZgbhIQhAioAYkJQAKhqARmVQAapRAKjIQA3w+BKkEQBNkMCGi8QBDheA0gpIBHAEQBaADBigFQE3gQEOhaQENhZDfhzQBwg5A5gnIgYCyQgjDbgzDKQijKGkGDsQiSCDhYDPQhFCkgxD/QgdCVgwE4QgwEYg8C2Qh8F6kvFAQhhBmh2BkQg+A0hIA5QgTARgUAAQgQAAgRgMg");
	this.shape_104.setTransform(860.3,1003.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg4hih5o0QiDpfgmhlQhFi3ihkjQinkvknnXQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_105.setTransform(363.5,981.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#523821").s().p("EhKDAj2QjIAAi3hOQixhLiJiJQiJiJhLixQhOi3AAjIMAAAgo1QAAjIBOi3QBLixCJiJQCJiJCxhLQC3hODIAAMCUHAAAQDIAAC4BOQCxBLCICJQCJCJBLCxQBOC3AADIMAAAAo1QAADIhOC3QhLCxiJCJQiICJixBLQi4BOjIAAg");
	this.shape_106.setTransform(660.1,880.9);

	this.instance_22 = new lib.Path_14();
	this.instance_22.parent = this;
	this.instance_22.setTransform(978.7,201.8,1,1,0,0,0,195.2,33.5);
	this.instance_22.alpha = 0.77;

	this.instance_23 = new lib.Path_1_9();
	this.instance_23.parent = this;
	this.instance_23.setTransform(330.1,217.6,1,1,0,0,0,153,26.3);
	this.instance_23.alpha = 0.77;

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-304.3,0,304.4).s().p("Eg6lAuQMAAAhdzMB1LAAAMAAABfHg");
	this.shape_107.setTransform(603.8,304.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.instance_23},{t:this.instance_22},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.instance_18},{t:this.instance_17},{t:this.shape_43},{t:this.shape_42},{t:this.instance_16},{t:this.instance_15},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_14},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-155.4,1446.2,1514.4);


(lib.page3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		//Stage
		var canvas = this
		//VARIABLES
		//Drag Object Size
		dragRadius = 100;
		//Destination Size
		destHeight = 100;
		destWidth = 100;
		
		//Circle Creation
		
		var circle = new lib.circle2();
		
		 
		
		//Drag Object Creation
		//Placed inside a container to hold both label and shape
		var dragger = new createjs.Container();
		dragger.x = 162;
		dragger.y = 1190;
		dragger.addChild(circle);
		dragger.setBounds(100, 100, dragRadius * 2, dragRadius * 2);
		//DragRadius * 2 because 2*r = width of the bounding box
		
		
		
		var box = new lib.box();
		box.alpha = 0;
		var destination = new createjs.Container();
		destination.x = 338;
		destination.y = 570;
		destination.setBounds(340, 560, destHeight, destWidth);
		
		destination.addChild(box);
		
		//DRAG FUNCTIONALITY =====================
		dragger.on("pressmove", function (evt) {
			evt.currentTarget.x = evt.stageX;
			evt.currentTarget.y = evt.stageY;
			stage.update(); //much smoother because it refreshes the screen every pixel movement instead of the FPS set on the Ticker
			if (intersect(evt.currentTarget, destination)) {
				evt.currentTarget.alpha = 0.2;
				box.alpha = 0;
		
			} else {
				evt.currentTarget.alpha = 1;
			}
		
		});
		
		//Mouse UP and SNAP====================
		dragger.on("pressup", function (evt) {
			if (intersect(evt.currentTarget, destination)) {
				dragger.x = destination.x + destWidth / 2;
				dragger.y = destination.y + destHeight / 2;
				dragger.alpha = 0;
				stage.update(evt);
				canvas.parent.gotoAndStop(3);
		
			} else {
				evt.currentTarget.alpha = 1;
				dragger.x = 163;
				dragger.y = 1190;
			}
		});
		//Tests if two objects are intersecting
		//Sees if obj1 passes through the first and last line of its
		//bounding box in the x and y sectors
		//Utilizes globalToLocal to get the x and y of obj1 in relation
		//to obj2
		//PRE: Must have bounds set for each object
		//Post: Returns true or false
		function intersect(obj1, obj2) {
			var objBounds1 = obj1.getBounds().clone();
			var objBounds2 = obj2.getBounds().clone();
		
			var pt = obj1.globalToLocal(objBounds2.x, objBounds2.y);
		
			var h1 = -(objBounds1.height / 2 + objBounds2.height);
			var h2 = objBounds2.width / 2;
			var w1 = -(objBounds1.width / 2 + objBounds2.width);
			var w2 = objBounds2.width / 2;
		
		
			if (pt.x > w2 || pt.x < w1) return false;
			if (pt.y > h2 || pt.y < h1) return false;
		
			return true;
		}
		
		
		//Adds the object into stage
		stage.addChild(destination, dragger);
		stage.mouseMoveOutside = true;
		stage.update();
	}
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1).call(this.frame_15).wait(1));

	// Layer 10
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(1612.7,775.3,1,1,0,0,0,166.5,166.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(2));

	// Layer 4
	this.instance_1 = new lib.circle2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-65.8,1057.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(2));

	// Isolation Mode
	this.instance_2 = new lib.centerflash();
	this.instance_2.parent = this;
	this.instance_2.setTransform(612.8,637.1,0.09,0.09,0,0,0,253.9,253.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(1).to({regX:257,regY:257,scaleX:0.32,scaleY:0.32,x:613.8,y:638},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:614.5,y:638.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:615.2,y:639.5},0).wait(1).to({scaleX:1,scaleY:1,x:615.9,y:640.2},0).wait(2));

	// rightbar
	this.instance_3 = new lib.Symbol7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1279,636.1,1,1,0,0,0,300.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:1243.3},0).wait(1).to({x:1207.6},0).wait(1).to({x:1171.9},0).wait(1).to({x:1136.2},0).wait(1).to({x:1100.5},0).wait(1).to({x:1064.8},0).wait(1).to({x:1029.1},0).wait(1).to({x:993.4},0).wait(1).to({x:957.7},0).wait(1).to({x:922},0).wait(6));

	// leftbar
	this.instance_4 = new lib.Symbol8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-72,636.1,1,1,0,0,0,300.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:-32.4},0).wait(1).to({x:7.1},0).wait(1).to({x:46.7},0).wait(1).to({x:86.2},0).wait(1).to({x:125.8},0).wait(1).to({x:165.3},0).wait(1).to({x:204.9},0).wait(1).to({x:244.4},0).wait(1).to({x:284},0).wait(1).to({x:323.5},0).wait(6));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSCQQgHgJAAgPQAAgSAHgHQAHgIALAAQAMAAAIAIQAGAIAAARQAAAPgGAIQgIAJgMAAQgLAAgHgIgAgQA5IgGjQIAsAAIgFDQg");
	this.shape.setTransform(546.5,314.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgGgGgEgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_1.setTransform(535.3,315.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_2.setTransform(521.1,318);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgKQAFgLAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_3.setTransform(505.1,318.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgEgGQgFgGgKAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_4.setTransform(488.9,318);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_5.setTransform(472.6,318.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIAAIAIAAIAKADQAGADAFAGQAFAFAEAIQAEAKADANQACAOAAAUIAABEQAAATgCANQgDAOgEAKQgEAIgFAGQgGAFgFADIgLADIgJABQgNAAgIgFQgJgGgFgGIABAcIAAA8gAgMh0QgFAEgDAHIAACJIADAGIAFAFIAFAFIAHABIAIgCQAEgCADgFQADgEACgIIABgVIAAhWIgBgWQgCgHgDgFQgDgFgDgCIgJgBQgHAAgFAFg");
	this.shape_6.setTransform(456.8,321.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIAAIAIAAIAKADQAGADAFAGQAFAFAEAIQAEAKADANQACAOAAAUIAABEQAAATgCANQgDAOgEAKQgEAIgFAGQgGAFgFADIgLADIgJABQgNAAgIgFQgJgGgFgGIABAcIAAA8gAgMh0QgFAEgDAHIAACJIADAGIAFAFIAFAFIAHABIAIgCQAEgCADgFQADgEACgIIABgVIAAhWIgBgWQgCgHgDgFQgDgFgDgCIgJgBQgHAAgFAFg");
	this.shape_7.setTransform(440.4,321.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_8.setTransform(424,318.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_9.setTransform(755.1,273.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzBlQgLgNAAgcIAAivIAqAAIAACrQAAAPAFAHQAEAFAJAAQAGAAAGgDQAGgEAFgGIAAi5IAqAAIAADkIghAAIgEgYQgFAHgFAFQgGAGgGADIgLAFIgNABQgUgBgLgOg");
	this.shape_10.setTransform(739.2,273.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgDAHgCIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_11.setTransform(722.9,273.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_12.setTransform(707.4,277.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgDAHgCIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_13.setTransform(685,273.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgFgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_14.setTransform(671.7,270.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgFgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_15.setTransform(653.2,270.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_16.setTransform(643.3,269.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAIAFANQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_17.setTransform(624,273.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFACQAFADAFAAQAKgBAEgFQAFgFAAgHIgBgHIgDgHIgFgHIgGgHIgdgkIgMgOIgKgRIgGgRQgDgIAAgLQAAgNAFgJQAEgKAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAGIgBAIQAAAHADAIIAKAOIAhAnIAIALIAKANIAHARQADAKAAAJQAAAMgEALQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgCg");
	this.shape_18.setTransform(609.5,273.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgzBlQgLgNAAgcIAAivIAqAAIAACrQAAAPAFAHQAEAFAJAAQAGAAAGgDQAGgEAFgGIAAi5IAqAAIAADkIghAAIgEgYQgFAHgFAFQgGAGgGADIgLAFIgNABQgUgBgLgOg");
	this.shape_19.setTransform(594.1,273.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgDAHgCIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_20.setTransform(570.5,273.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgFgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgJAAgHgCg");
	this.shape_21.setTransform(557.2,270.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHACQgFABgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAGIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_22.setTransform(535.9,273.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAIAFANQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_23.setTransform(521.3,273.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_24.setTransform(507.9,273.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHACQgFABgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAGIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_25.setTransform(492.2,273.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgGgHQgGgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_26.setTransform(472.5,270.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJAAQgGABgGAEQgGAEgFAHIAAC4IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgEIALgHIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_27.setTransform(458.3,269.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVCWQgKgBgIgGQgHgFgFgIQgDgJAAgOIAAgFIACgIIAdAAQABAPAFAGQAFAGAMAAIAIgBQAEgCAEgEQADgDABgHQACgGAAgLIAAgkQgFAIgJAEQgIAGgNAAIgJgBIgLgEQgFgCgFgFQgGgFgEgKQgEgJgDgOQgCgNAAgTIAAg8QAAgTACgMQADgNAEgKQAEgIAGgFQAFgFAFgCIALgEIAKgBQAIAAAFADQAHACAFADIAIAIIAGAJIADgWIAhAAIAADaQAAAUgEAPQgEAPgHALQgIALgMAGQgMAFgQAAQgLAAgKgCgAgHh3QgEACgDAEQgDAEgBAJIgCAUIAABMIACATQABAJADAEQADAFAEABIAHACIAIgBIAFgEIAFgFIADgHIAAh7QgDgIgFgEQgGgFgHAAg");
	this.shape_28.setTransform(441.3,277);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_29.setTransform(429.2,269.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_30.setTransform(420.5,269.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_31.setTransform(820.7,228.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJABQgGAAgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgDIALgIIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_32.setTransform(804.5,225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgFgGgEgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgJAAgHgCg");
	this.shape_33.setTransform(790.6,225.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgLgCgQQgDgQAAgWIAAgjQAAgXADgPQACgRAFgKQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAXIAAAjQAAAWgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAFgIABIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA2IABAbQABALADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgLIABgbIAAg2IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_34.setTransform(769.7,228.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgFgGgEgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgJAAgHgCg");
	this.shape_35.setTransform(756.4,225.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgGgHQgGgGgEgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgJAAgHgCg");
	this.shape_36.setTransform(738,225.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_37.setTransform(728,224.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag+CZIAAkuIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAFQAFAFAEAJQAEAKADAOQACANAAATIAABGQAAASgCAOQgDANgEAJQgEAKgFAFQgGAFgFADIgLAEIgJAAQgNAAgIgFQgJgFgFgIIABAcIAAA+gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHABIAIgBQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_38.setTransform(708.4,232.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgLgCgQQgDgQAAgWIAAgjQAAgXADgPQACgRAFgKQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAXIAAAjQAAAWgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAFgIABIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA2IABAbQABALADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgLIABgbIAAg2IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_39.setTransform(692.1,228.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_40.setTransform(678.5,228.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgWCYIgLgEQgFgCgFgGQgGgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAFgJQAEgJAGgFQAFgFAGgCIAKgDIAJAAIAMABIAJAFIAIAGIAFAHIgBgdIAAg9IAqAAIAAEtIghAAIgDgVIgHAIIgJAIIgLAFQgFACgIAAgAgHgwQgEACgDAEQgDAFgBAIIgCAVIAABWIACAVQABAIADAFQADAEAEACIAHACIAIgBIAFgEIAFgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_41.setTransform(662.7,225.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAGgFAFgCIALgDIAIAAIAMABIAIAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgDgVIgHAIIgJAIIgLAFQgFACgIAAgAgIgwQgDACgDAEQgDAFgBAIIgCAVIAABWIACAVQABAIADAFQADAEADACIAIACIAIgBIAGgEIAEgFIADgHIAAiIQgDgHgFgFQgFgFgIAAg");
	this.shape_42.setTransform(639.1,225.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_43.setTransform(622.7,228.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAHAAAJIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgKAIgGQAIgHALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_44.setTransform(605.9,228.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_45.setTransform(587.4,225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_46.setTransform(578.8,225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_47.setTransform(570.3,224.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAYCXIgvhxIgBAAIAABxIgqAAIAAktIAqAAIAACtIABAAIAthjIAoAAIgyBnIA3B8g");
	this.shape_48.setTransform(559.2,225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgIIgGgHIgdglIgMgNIgKgQIgGgSQgDgIAAgKQAAgOAFgKQAEgJAIgHQAHgGALgEQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAHIgBAHQAAAHADAHIAKAQIAhAlIAIAMIAKANIAHARQADAKAAAJQAAANgEAKQgEAJgHAHQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_49.setTransform(543.4,228.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_50.setTransform(521.7,228.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJABQgGAAgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgDIALgIIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_51.setTransform(505.5,225);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgGgGgEgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_52.setTransform(491.6,225.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgVCXQgKgDgHgFQgIgEgEgKQgFgIAAgNIABgHIABgHIAfAAQgBAPAGAGQAFAGALAAIAIgBQAFgBAEgEQACgEADgHQACgGAAgLIAAgkQgGAIgJAEQgIAGgNAAIgJgBIgKgEQgGgCgGgFQgFgGgEgJQgEgJgCgOQgDgOAAgSIAAg8QAAgTADgNQACgMAEgJQAEgJAFgFQAGgFAGgCIALgEIAJgBQAIAAAFACQAHACAFAFIAIAIIAFAJIAEgYIAhAAIAADbQAAATgDAQQgEAPgIALQgIALgMAFQgMAHgQAAQgLgBgKgBgAgIh3QgEACgCAEQgDAEgCAJIgBAUIAABLIABAVQACAHADAFQACAFAEACIAIABIAHgBIAHgEIAEgFIADgHIAAh8QgDgGgFgFQgGgFgHAAg");
	this.shape_53.setTransform(470.1,232.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAHAAAJIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgKAIgGQAIgHALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_54.setTransform(453.8,228.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_55.setTransform(441.1,228.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhECOIAAkbIAtAAIAVABQAKAAAKADQALADAJAHQAJAGAHALQAHALAEARQAEARAAAZIAABRQAAAZgEARQgEARgHALQgHALgJAGQgJAHgLADQgKADgKAAIgVABgAgZBwIALAAQAMAAAGgDQAIgDAFgIQADgHACgNQACgNAAgUIAAhXQAAgUgCgNQgCgNgDgIQgFgHgIgDQgGgDgMAAIgLAAg");
	this.shape_56.setTransform(425.5,225.9);

	this.instance_5 = new lib.Path_9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(608.9,683.2,1,1,0,0,0,382.2,671.2);
	this.instance_5.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).wait(2));

	// Layer 5
	this.instance_6 = new lib.Path_8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(816.2,1209.9,1,1,0,0,0,112.8,112.8);
	this.instance_6.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16));

	// Layer 15
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_57.setTransform(428.6,792.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgVCWQgKgCgIgEQgHgFgEgKQgEgIAAgNIAAgGIACgIIAdAAQABAPAFAGQAFAGAMAAIAIgBQAEgBADgFQAEgDABgHQACgGAAgLIAAgkQgFAHgJAGQgIAFgNAAIgJgBIgLgDQgFgDgFgFQgGgGgEgJQgEgJgCgNQgDgOAAgTIAAg8QAAgTADgMQACgNAEgKQAEgIAGgFQAFgFAFgDIALgDIAKAAQAIAAAGACQAGABAFAFIAIAHIAGAJIADgWIAhAAIAADaQAAATgEAPQgEAQgHALQgIALgMAGQgMAFgQABQgLgBgKgCgAgHh4QgFACgCAFQgDAFgBAHIgCAWIAABKIACAUQABAJADAEQACAFAFABIAHADIAIgCIAFgEIAFgFIADgGIAAh8QgDgIgFgEQgGgFgHAAg");
	this.shape_58.setTransform(412.4,795.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhHg");
	this.shape_59.setTransform(396.2,792.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_60.setTransform(381.3,789.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]}).wait(16));

	// Layer 18
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("EgimAAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAMBFNAAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape_61.setTransform(604.6,830.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("EgjDAB4QgyAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAyAAMBGHAAAQAyAAAjAjQAjAjAAAxQAAAxgjAkQgjAjgyAAgEgj8gA3QgXAXAAAgQAAAhAXAXQAYAYAhAAMBGHAAAQAiAAAXgYQAXgXAAghQAAgggXgXQgXgYgiAAMhGHAAAQghAAgYAYg");
	this.shape_62.setTransform(606.4,833.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61}]}).wait(16));

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjDABkQgpAAgegeQgdgcAAgqQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAAqgdAcQgdAegqAAg");
	mask.setTransform(606.2,833.6);

	// Layer 16
	this.instance_7 = new lib.Symbol17copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(248.6,833.6,1,1,0,0,0,234.4,10);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16));

	// Layer 17
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(51,51,51,0.659)").s().p("EgjDABkQgpAAgegeQgdgcAAgqQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAAqgdAcQgdAegqAAg");
	this.shape_63.setTransform(606.2,833.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(16));

	// Layer 8
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_64.setTransform(603.9,1021.7);

	this.instance_8 = new lib.ClipGroup_3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(603.9,1021.8,1,1,0,0,0,109.8,109.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("Ah4C5QhuioiXgRQCXgPBuipQB1i0ADj+QAED+B2C0QBtCpCXAPQiXARhtCoQh2C1gED9QgDj9h1i1gAF+AAQAQAAARAAIAAACQgRAAgQgCgAmeAAQARAAAQAAQgQACgRAAgAl9AAIAAAAg");
	this.shape_65.setTransform(547.3,990.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#697E9B").s().p("Amls4IJvAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtkrCvIhMAsQgXANgzALIgvAIg");
	this.shape_66.setTransform(646,1027.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A0BAD3").s().p("Ah4MZIhMgsQksiviuktQitkrAAlcIAAjmQAAhbBBhBQBAhABbAAITfAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtksCvIhMAsQg4AghBAAQhAAAg4ggg");
	this.shape_67.setTransform(603.8,1027.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_68.setTransform(603.9,1021.7);

	this.instance_9 = new lib.ClipGroup_1_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(601.9,1023.8,1,1,0,0,0,109.8,109.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D3E9EB").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjMQBTjFCYiYQCYiYDFhTQDMhXDeAAQDfAADMBXQDFBTCYCYQCYCYBTDFQBXDMAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjMBXjfAAQjeAAjMhXg");
	this.shape_69.setTransform(603.9,1021.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_70.setTransform(816.1,1209.9);

	this.instance_10 = new lib.ClipGroup_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(816.2,1209.9,1,1,0,0,0,109.8,109.8);

	this.instance_11 = new lib.ClipGroup_1_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(829,1222.1,1,1,0,0,0,122.6,122);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_71.setTransform(816.1,1209.9);

	this.instance_12 = new lib.ClipGroup_2_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(814.2,1211.9,1,1,0,0,0,109.8,109.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3F4826").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDFBUCYCYQCYCXBTDFQBXDMAADfQAADghXDLQhTDFiYCYQiYCYjFBTQjLBXjggBQjeABjMhXg");
	this.shape_72.setTransform(816.1,1209.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicidhWjKQhYjRgBjlQABjkBYjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBYDRAADkQAADlhYDRQhWDKicCdQicCcjLBWQjRBYjlABQjkgBjShYgAmevXQi/BSiUCUQiVCThRC/QhUDHAADYQAADZBUDGQBRC/CVCUQCUCUC/BSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBQi/QBUjGAAjZQAAjYhUjHQhQi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_73.setTransform(388.8,1209.9);

	this.instance_13 = new lib.ClipGroup_4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(468.3,1158,1,1,0,0,0,191.2,163.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E8976B").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMABjfQgBjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDGBUCXCYQCYCXBTDFQBWDMABDfQgBDghWDLQhTDFiYCYQiXCYjGBTQjLBXjggBQjeABjMhXg");
	this.shape_74.setTransform(388.8,1209.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.instance_13},{t:this.shape_73},{t:this.shape_72},{t:this.instance_12},{t:this.shape_71},{t:this.instance_11},{t:this.instance_10},{t:this.shape_70},{t:this.shape_69},{t:this.instance_9},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.instance_8},{t:this.shape_64}]}).wait(16));

	// Layer 2
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(10).p("EA6gAk3Mh0/AAAMAAAgp8QAAmdCfl6QCbltEZkZQEZkaFtiaQF5igGeAAMA1eAAAQGeAAF6CgQFtCaEZEaQEZEZCbFtQCfF6AAGdg");
	this.shape_75.setTransform(604.7,1118.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F9DD89").s().p("Eg6fAk3MAAAgp8QAAmeCgl5QCaltEZkZQEakaFsiaQF6ifGdAAMA1eAAAQGeAAF5CfQFtCaEaEaQEZEZCaFtQCgF5AAGeMAAAAp8g");
	this.shape_76.setTransform(604.7,1118.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75}]}).wait(16));

	// Layer 6
	this.instance_14 = new lib.bloodbar2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(493.9,494.9,1,1,0,0,0,112,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(16));

	// Layer 1
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AvoB4QgxAAgjgjQgkgkAAgxQAAgxAkgiQAjgkAxAAIfRAAQAxAAAkAkQAjAiAAAxQAAAxgjAkQgkAjgxAAgAwgg3QgYAXAAAgQAAAhAYAXQAXAYAhAAIfRAAQAhAAAXgYQAYgXAAghQAAgggYgXQgXgYghAAI/RAAQghAAgXAYg");
	this.shape_77.setTransform(796.8,233.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#733A44").s().p("Aw3AUIAAgnMAhuAAAIAAAng");
	this.shape_78.setTransform(797.1,239.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AvQALQgEAAgDgDQgEgDAAgFQAAgEAEgDQADgDAEAAIegAAQAGAAACADQAEADAAAEQAAAFgEADQgCADgGAAg");
	this.shape_79.setTransform(796.8,228.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	this.shape_80.setTransform(796.8,233.4);

	this.instance_15 = new lib.Path_3_3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(796.8,233.4,1,1,0,0,0,110,10);
	this.instance_15.alpha = 0.66;

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_81.setTransform(861.5,169.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_82.setTransform(845.1,169.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AA+B0IAAitIgBgNIgDgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAGgFIALgJIANgEIAMgCQANAAAJAHQAJAGAFANQAFgHAFgFIAMgIIANgEIAMgCQATAAAMAPQAKAOABAcIAACug");
	this.shape_83.setTransform(824.7,169.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_84.setTransform(807.8,165.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_85.setTransform(799.3,165);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_86.setTransform(787.6,169.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_87.setTransform(772.8,169.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAFgFAGgCIALgDIAIAAIAMABIAIAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAHgBIAHgEIAEgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_88.setTransform(756.6,165.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_89.setTransform(741.1,169.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_90.setTransform(725.5,166.6);

	this.instance_16 = new lib.Path_10();
	this.instance_16.parent = this;
	this.instance_16.setTransform(793.1,167.7,1,1,0,0,0,142.9,32.4);
	this.instance_16.alpha = 0.66;

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_91.setTransform(551.4,435);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_92.setTransform(535,435.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIANgEIAMgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_93.setTransform(514.6,435);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_94.setTransform(497.8,430.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_95.setTransform(485.4,431.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_96.setTransform(469,431.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_97.setTransform(452.3,435.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_98.setTransform(437.4,432.4);

	this.instance_17 = new lib.Path_11();
	this.instance_17.parent = this;
	this.instance_17.setTransform(494,431.5,1,1,0,0,0,142.9,32.4);
	this.instance_17.alpha = 0.66;

	this.instance_18 = new lib.Path_12();
	this.instance_18.parent = this;
	this.instance_18.setTransform(839.5,380.6,1,1,0,0,0,39.1,58.8);
	this.instance_18.alpha = 0.57;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C86865").s().p("ABEBMIgHgPIgJgRQgGgNgFgFIgLgTIgPgSIgPgRIgOgRIhAg1IAMABIANAEIARAGIASAJIAUAMIATARIASATQAGAIAIAOIAHAKIAGALQADAHAEAQQACAGACAOIACARIgBAag");
	this.shape_99.setTransform(748.8,351.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#C86865").s().p("AhxBVIAJgjIALgbIAQgbIALgNQADgEAUgVIAagVIAagSIAbgOIAZgKQAUgHATgDIAPgCIhcA6IgXATQgPANgIAHQgOAOgHAHIgbAiIgfA1IgMAeg");
	this.shape_100.setTransform(787.4,349.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#AA9543").s().p("AANAnIgegFIgCAAIgSgEQgPgEgJgEIgVgLQgKgGgIgGQgFgEgHgJQgFgGgCgGIgDgJIAAgDIACADIAFAGIAJAJIAOAJIASAIIArALIAPADIABAAIABAAIBLAJIAUABQAUAAAKgBIAMgCIgKAGQgOAHgQADIgVAEIgXABIgHAAIgTAAg");
	this.shape_101.setTransform(843.9,272.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#AA9543").s().p("AgYA7IgngKIgCgBIgCAAIgIgEIgQgIQgMgFgQgOIgLgLIgJgKQgHgLgEgMIgFgTIgBgQIAFAPIAPAZIARASIALAIQAKAGAQAIIAWAIIACABIAXAGIAQADIAQADIAQACIAQAAIAQAAIAfgCIAbgGQAhgIAVgMIgMALIgQAKQgKAHgMAFIgNAFIgPAFQgPAEgRABIgjACg");
	this.shape_102.setTransform(842.1,280.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#AA9543").s().p("AgHBPIgXgDQgHgBgmgKIgBgBIgBAAIgogSQgHgDgMgIIgRgMIgPgOIgMgNQgLgRgDgMQgDgJgCgQQABgKABgFIABgGIAAAGIACAPIAIAWQAFAKAMAOQANAMANAJIARAKIASAJIAnAPIAWAGIAVAEIAWADIAUABIAqgBIAogIIAigKIAcgLIALgGIAKgEIASgLIgDAEIgMAKQgJAIgLAHIgbAQQgSAIgRAGIgUAGIgrAIIgXABIgXgBg");
	this.shape_103.setTransform(839,292.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#AA9543").s().p("AAoBnQgSgBgJgBIg5gMIgFgCIg/gZIgXgNQgYgQgOgOQgQgQgLgSIgJgSIgFgRQgDgOAAgOIACgSIABgGIAAAGIACASIACAMIALAcIAKAQQANARAPALQANALAYAOIAsAVIAYAIIANAFIABAAIAAAAIAEABIA2AMQAhAEAQgBIALAAIAXgCIAfgIIASgGQAPgHAQgJIAWgQIARgRIgDAFIgLAPQgJALgKAJQgQANgPAIIgTAJIgKAEIgXAHIgLACQgQADgJAAIgXABIgDAAg");
	this.shape_104.setTransform(836.3,304.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#AA9543").s().p("AgUA2IgegFQgQgEgMgHQgPgJgGgOQgGgMADgNQABgKAGgKQADgGAGgHIAJgKIgGAMIgEAOQgDAJAAAJQAAAJAGAIQAFAJAKAEQAMAFAMACIAbADQAPABAKgCQAPgBAKgEQALgCALgGQAJgFAJgHQALgGAOgQIAHgLIgDANQgGAQgNAOQgQAUgbALQgNAFgQACIgSABIgMAAg");
	this.shape_105.setTransform(734.3,280);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#AA9543").s().p("AgyAyQgUgDgMgGQgNgFgOgLQgMgLgFgMQgFgJgBgNQgBgKACgIIAEgOIAAAOQACAUAKAOQAHAJAJAGQAKAGAOAFQANAEAPACQAUACAKAAQAdAAAcgJQAYgGAZgOQAWgLALgIIAMgIIgJAMQgLAOgRANQgNAKgKAFQgNAIgOAFQgeAMgiAAQgRAAgQgDg");
	this.shape_106.setTransform(732.6,289.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#AA9543").s().p("AhGAwQgTgDgNgHQgOgGgMgKQgSgOgHgVIgDgQIAHAOQAEAGAHAHQAGAFAMAIQALAGAMAFQAMADARACQAOABASgBQAQAAASgCQAPgCARgEQAUgEAMgEIAbgLIAZgMQAQgLAQgPIAMgLQgDAFgFAJQgKARgSAQQgMAJgMAIQgPAJgOAGQgSAHgQAEQgPAEgUADQgPACgUAAIgFAAQgOAAgQgCg");
	this.shape_107.setTransform(730.9,298.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#AA9543").s().p("AhYA+QgLgBgSgGQgagLgLgPQgDgEgDgHIgBgFIADAEIAHAJQAIAFAIAEQAKAEAMADIAbADIAfAAIAigEIAfgGQAhgJAdgQIAxggQARgPANgPIAKgMQgBAFgFAKQgKATgPARQgLANgKAHQgMAMgOAJQgQAKgQAHQgRAIgSAEIgjAHIgkABQgMAAgVgDg");
	this.shape_108.setTransform(732.4,306.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AhAAPQgbgGAAgJQAAgIAbgGQAbgGAlAAQAmAAAbAGQAbAGAAAIQAAAJgbAGQgbAGgmAAQglAAgbgGg");
	this.shape_109.setTransform(735.6,380.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AhJAPQgfgGAAgJQAAgIAfgGQAegHArAAQArAAAfAHQAfAGAAAIQAAAJgfAGQgfAGgrAAQgqAAgfgGg");
	this.shape_110.setTransform(821.1,382.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#221E1F").s().p("AhcglIC5gYIhqB7gAhNggIBABRIBWhkg");
	this.shape_111.setTransform(821.2,414.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E6E7E7").s().p("AhTgiICngVIhgBvg");
	this.shape_112.setTransform(821.1,414.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#221E1F").s().p("AigAnIglgFIgkgGIghgHIgfgIQgagHgbgKQgagKgNgHQgOgGgLgGIgIgFIAJADIBDARIA2AKQAVAEAqAEIARABIASABIAkACIAlAAIAngCIBPgFICbgPIBIgGIBBgGIBhgHIAcgCIAJAAIgjAJIk1A4IhPAJIhQAFIgdAAQgZAAgagBg");
	this.shape_113.setTransform(784.1,413.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D73A34").s().p("AgKCFQgOgsgEg6QgfgDgggIIgagJIgbgLIAbgKQAngPAygFQADgkAHgkIAIgeIAKglIALAlIAHAeQAIAkACAkQAzAFAnAPIAaAKIgaALQgnAPgzAFQgDA6gOAsIgLAlgAgEgSIgBAKIgLABQgbABgdAGQAYAGAgACIALABIABALQAAAYAEAfQAFgfABgYIAAgLIALgBQAggCAXgGQgdgGgagBIgLgBIAAgKQgBgYgFggQgEAgAAAYg");
	this.shape_114.setTransform(726.5,369.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#9AC254").s().p("AgRAUQghgCgjgJIgbgJIAbgIQAjgIAhgDQADgnAHgnIAHggIAHAgQAJAnABAnQAjADAiAIIAcAIQgLAFgRAEQgiAJgjACQgCA+gPAwQgOgwgDg+g");
	this.shape_115.setTransform(726.5,369.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D73A34").s().p("AgKCpQgUg6gFhLQgwgDgugLQgdgHgLgEIgfgLIAfgKQAMgEAcgHQAugLAwgDQADgvALgvQAGgcAFgLIAKggIALAgQAEALAHAcQALAvAEAvQBKAFA7AUIAfAKIgfALQg7AUhKAFQgGBLgUA6IgLAggAgNgXIgBAKIgKABQgwACgxAKQA1AMAsACIAKAAIABALQACAsALA0QALgxACgvIABgLIALAAQAsgCA0gMQgwgKgwgCIgLgBIgBgKQgCgwgLgxQgLA0gCAtg");
	this.shape_116.setTransform(811.2,373.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#9AC254").s().p("AgKB9QgMgygCgxQgygDgygLIgpgMIApgKQAygMAygCQACgyAMgyIAKgoIALAoQALAyADAyQAxACAzAMQAZAGAPAEQgPAGgZAGQgzALgxADQgDAxgLAyQgFAZgGAPQgEgPgGgZg");
	this.shape_117.setTransform(811.2,373.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#221E1F").s().p("AgEFCQgigDgdgNQgcgOgZgWIgcgdIgBgBIgBgCIgCgDIgJgNQgPgXgNgiQgJgVgIgnQgGgegDgeQgDgigBgZQgBgUABgoQABgiADgaIAai7IBvBWIAiAbIBCA4IAgAeIA6BCQANAOAOAVIAYAkIAeA7IAWA+QAFAaAAARQAAAcgIAQIAAAAIAAAAQgVAUgZASQgbATgYAMQgeAPgbAIQgaAHgbAAIgJAAgAi6j6IgCA6QgCA3ADA/IADA6QADAfADAZQAEAdAHAcQAHAcAJAZQAOAiALAPIAHALIADAFIAXAaQAWAUAVAMQAYAOAaAFQAyAKA8gVQAdgLAYgPQAagQAUgSQAIgRgBgYQgCgTgHgXIgSgmIgXgkIgMgSQgIgLgFgFIiMigIh6h6QgcgZgfgWg");
	this.shape_118.setTransform(729.8,362.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E6E7E7").s().p("AiLDlQhKhdADjnQABhJAJhNIAIhAIBwBaQB/BvBRBrQBKBhAIBJQAFAlgLARQgxAvhDAZQgpAPgkAAQhVAAhBhRg");
	this.shape_119.setTransform(730.4,362.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#221E1F").s().p("AgDFXQgpgDgngKQghgJgqgRQgpgRgegSQglgVgegVQgjgZgagYIgBgBIABgBQALgYAPgaIAfgvIAggtIBJhWIAngoIBAg4IAXgRIAvgfQAOgJAigUIAzgZIA0gWIA0gUIA1gSIA2gRIA2gOIAGgCIABAHQAFA0ABAaQADAjABArQABBagJBDQgFApgJAlQgKArgNAhQgRAsgTAdIgLARIgMARIgcAeIgqAgIgFADIAAAAIgBAAIgBABIgUALQgnARgpAHIgpAFIgRAAIgXgBgAEjk7IgaAIIiAA3IgwAaIgwAcQgfATgOALIgWAPIhrBVIgoAmIgnAmIglApQgRARgUAZIhDBVQBAAqBGAgQAjAQAkAMQAoANAhAGQAmAIAkABQAjABAlgHQAlgIAfgOIARgJIADgCIAAAAIAAAAIAagSIANgLQAYgWAXgiQAQgYASgpQANgdALgqQAGgUALg1QAFgZAHgzQAEgjADgqQACgiAAgrQgBgugCgZQgbAGgUAHg");
	this.shape_120.setTransform(812.3,364.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E6E7E7").s().p("AivEeQhAgbg/gpIgygkQAXgnApg2QBThtBdhQQB+huCzhHQBagjBAgOIAFBPQAEBggKBXQgdEUiQBTQhGAohVAAQhYAAhpgtg");
	this.shape_121.setTransform(811.9,363.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FBE994").s().p("AgLE7QhZgMhMgzQg8goAGhTQAFhNA8hnQBBhwBahQQBUhLAyABQAiABAhBuQAhBuAHCCQAGBrgfBIQgdBHg5AUQglAOgvAAQgXAAgYgDg");
	this.shape_122.setTransform(835.8,289.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FBE994").s().p("AhtD2QgugggShjQgKgyAfhLQAchDAxhDQAxhBAsggQAwgjAVAUQAjAiARCuQAHBGAPAtQAOAqACAdQACAlg6AnQg6Ang/AJQgUADgRAAQgtAAgbgTg");
	this.shape_123.setTransform(732,291.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#AE443F").s().p("AliKzQijg5h/hnQh+hohGiHQhHiLAAiZQAAiXBHiMQBGiHB+hnQB/hoCjg5QCqg7C4AAQC5AACqA7QCkA5B+BoQB+BnBFCHQBICMAACXQAACZhICLQhFCHh+BoQh+BnikA5QiqA7i5AAQi4AAiqg7g");
	this.shape_124.setTransform(787.4,365);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#83312B").s().p("ADtDoQgRgzhKg+QhJg9iogYQg1gHg4gDIgugBIDbhxIiIiyIAoAQQAwAWAvAZQCTBVBCBoQBCBpADBlQACAxgKAdQADgNgIgXg");
	this.shape_125.setTransform(923.3,314);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#83312B").s().p("AlyGeIBHgLQBmgTBVgcQBBgVAzgbQBDgiAsgqQA1g0AHg/QAFghgJgkQgEgTgGgRIgPgiIgKgSIgBgDIgBgBIgbgyIgohKQgthagUg8QgNgugCghQgDgwAQgeIALgQIAOgNIAcgVQAggTAfgFQAfgFAfAHQAZAFAbAMQAjAQApAcIBBApIgSgKIgwgdQg0gdgagKQgZgKgagFQgegFgcAGQgdAGgbASQgNAJgNAMIgCABIgBACIgDADIgFAGIgHAOQgMAbAGAnQAGAeAQAoQAYA4A0BSIBcCKIAVApQAMAbAFAPQAPAwgCAuQgBAZgFAXQgGAagJATQgQAlgiApQgwA4hOAxQg5AjhGAfQhZAmhuAeIhPATg");
	this.shape_126.setTransform(886.2,353.3);

	this.instance_19 = new lib.Path_13();
	this.instance_19.parent = this;
	this.instance_19.setTransform(402.3,688.9,1,1,0,0,0,25.9,51.8);
	this.instance_19.alpha = 0.262;

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#E17B3A").s().p("ADrHfQACgSgBgeIgDg4QgFgzgDgUIgNhVQgIgrgMgyQgRhJgIgZQgRgwgWgxQgrhdg9hVQg4hRg7g5QgfgcgZgRQgYgSgXgLQgRgKgQgFIgMgDIAAgBIAMADQAOAEAUAKQAdAQATANQAbATAdAbQA9A3A5BRQA9BUAsBfQAYAvARAxIAPAyIAMAxQAMAzAHAqQAFAaACATIAGAoQADAhACAnIABA5QgBAegDASg");
	this.shape_127.setTransform(441,650.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F9D68E").s().p("AH0L9QiPgKhuhUQkzjvg4keQgJgwgCgvQgMAPgRAOQhgBUh9AaQicAhhhhfQg6g5gfhtQgih5AUh6QAWiOBbhrQBrh8C8g8QExhhEGBVQEWBZBvECQBTDBAVFOQAREhgfBxQgWBQgpBIQgUAkgQATQgjAJgvAAIgogBg");
	this.shape_128.setTransform(389.2,673.6);

	this.instance_20 = new lib.Path_3_5();
	this.instance_20.parent = this;
	this.instance_20.setTransform(435.8,665.2,1,1,0,0,0,19.3,36.4);
	this.instance_20.alpha = 0.262;

	this.instance_21 = new lib.Path_4_3();
	this.instance_21.parent = this;
	this.instance_21.setTransform(482.9,690.5,1,1,0,0,0,102.4,76.8);
	this.instance_21.alpha = 0.262;

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F9D68E").s().p("Am1NQQjLhGibh/Qich/hWilQhYisAAi7QAAi6BYisQBWikCciAQCbh/DLhGQDRhIDkAAQDlAADSBIQDKBGCcB/QCbCABWCkQBYCsAAC6QAAC7hYCsQhWClibB/QicB/jKBGQjSBIjlAAQjkAAjRhIg");
	this.shape_129.setTransform(491.9,674.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F9D68E").s().p("AhXGMQi0mdgJjtQgIjbBnicQAvhHA7giQA9gkA8ALQBxATANFLQAEBlgFCiQgFClABAfQAFCYA2EZQAaCMAaBuIi7AdQhYifhajPg");
	this.shape_130.setTransform(423.6,531.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F9D68E").s().p("AlgIdQAWhzAmiRQBMkgBPiVQBqjGB6h8QCLiMBRAvQBOAthDDcQg2C2hPB2QgwBGi+ELIi2D9g");
	this.shape_131.setTransform(568.3,545.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C6DA92").s().p("AgUQbQhogDjQgzQjMgxjjhMQofi1ipiUQhihVAPhKQAKg1BMg9IA9guQAhgZAOgQQAngsg4gkQgagQjaAaQlzAtiPAMQs0BEoSivQkihejOk0Qi7kWhrmxQCtEMD3CLQHwEXI0CXQDSA4D/AwQA0AKFrA/QB/AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBuBegCBnQgBAzgYAgIBNgLQBigMBrgHQFYgUE3AyQCeAaCAAkQAaAICJAtQBEAXAqAAQA0ABBKgdQBBgYB3hDQCNhSBLgqQEWibCGAAQB9AABnBBQBGAsATAJQA5AdBDANQB/AZFajUQBOgwCshxQCBhUAjgRQAsgUBRAgQA2AUB0BCQCIBOBAAeQB4A5BfAQQC2AgFvAgQC4AQCTAKQgsCv55CjQoHAzpoArIoCAiQhqAJh+A1Qg0AVitBXQiMBHhdAfQh9Aoh0AAIgTAAg");
	this.shape_132.setTransform(445.4,764.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#6FB77F").s().p("AkmAaIARg6ICyEJIiqlUIAghdICkGuIiDnuIBXgrIBJILIgjoCIBrAAIgjIKIBKnZIBAAaIhIFwIBdk+IA9AgIhsEqIB+kBIBAAYIi+FYIi8Aog");
	this.shape_133.setTransform(454,294.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EBA24D").s().p("Ag+gJIBuiSIAPE3g");
	this.shape_134.setTransform(429.1,312.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FAE485").s().p("Ahmh1IC0AdIAZDOg");
	this.shape_135.setTransform(415,320.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#CD6C38").s().p("Ag+hmIB9CkIhkApg");
	this.shape_136.setTransform(429.1,321.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F2BC5F").s().p("AiRAsIEjh0IhvCRg");
	this.shape_137.setTransform(419.3,304.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EBA24D").s().p("AhsANIBniPIByEFg");
	this.shape_138.setTransform(423,283.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FAE485").s().p("AhWiFICtAhIhLDqg");
	this.shape_139.setTransform(403.5,295.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#CD6C38").s().p("AhGh1IDYB1IkjB1g");
	this.shape_140.setTransform(419.3,296.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F2BC5F").s().p("AiJAnIEThuIhnCPg");
	this.shape_141.setTransform(408.6,277.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CD6C38").s().p("AhTiDIDdCXIkTBvg");
	this.shape_142.setTransform(408.6,268.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FAE485").s().p("Ag2iwIBtBbIg2EGg");
	this.shape_143.setTransform(394.7,264.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#EBA24D").s().p("Ag3ASIBvicIgvEVg");
	this.shape_144.setTransform(450.4,303.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CD6C38").s().p("AAOhxIBCB5IifBqg");
	this.shape_145.setTransform(443.4,316.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FAE485").s().p("Ag2ibIBtBUIheDjg");
	this.shape_146.setTransform(439.3,312.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F2BC5F").s().p("AhugFIDdhIIhwCbg");
	this.shape_147.setTransform(445,297.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EBA24D").s().p("AhVApIAVjGICWE7g");
	this.shape_148.setTransform(447.4,273.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CD6C38").s().p("Ag8heICrB0IjdBJg");
	this.shape_149.setTransform(445,287.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FAE485").s().p("AhRiCICjBIIgxC9g");
	this.shape_150.setTransform(430.6,283.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F2BC5F").s().p("AhcAbIC5h+IgVDHg");
	this.shape_151.setTransform(431.7,267.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#EBA24D").s().p("AhFASIgShtIAQAJQAYATAoAsQA6BDAlAsg");
	this.shape_152.setTransform(432.1,248.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CD6C38").s().p("AhBhkICeBKIi5B+g");
	this.shape_153.setTransform(431.7,260.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FAE485").s().p("AhziSIDnBdIgbDIg");
	this.shape_154.setTransform(413.5,255.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F2BC5F").s().p("AhzgmIDVgQIASBtg");
	this.shape_155.setTransform(413.5,245.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FAE485").s().p("AhwhTIC8AjIAlCEg");
	this.shape_156.setTransform(395,327.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CD6C38").s().p("AhwhBIDhBiIi8Aig");
	this.shape_157.setTransform(413.9,328.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#EBA24D").s().p("AhwATIAViIIDMDrg");
	this.shape_158.setTransform(413.9,320.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F2BC5F").s().p("AhoAhIDRhkIgVCHg");
	this.shape_159.setTransform(394.2,315.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FAE485").s().p("AhMilICZCAIgsDMg");
	this.shape_160.setTransform(380.3,302.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CD6C38").s().p("Ag9hlICmBlIjRBmg");
	this.shape_161.setTransform(394.2,308.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#EBA24D").s().p("AhTAfIBFikIBiELg");
	this.shape_162.setTransform(396.4,295.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F2BC5F").s().p("AhugtIDdglIhEClg");
	this.shape_163.setTransform(383.7,290.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FAE485").s().p("AgigUQgCg7AEgeIAFgRIA+BbIg9CiQgEg4gEhbg");
	this.shape_164.setTransform(375.4,272.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#CD6C38").s().p("AgvhQICeB9IjdAlg");
	this.shape_165.setTransform(383.7,277.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EBA24D").s().p("AhugDIAQiPIDNElg");
	this.shape_166.setTransform(411.3,255.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EBA24D").s().p("AhPAzIBmjjIA5Fhg");
	this.shape_167.setTransform(386.9,264.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F2BC5F").s().p("Ag+gTIB9g0IgQCOg");
	this.shape_168.setTransform(395.5,248.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F2BC5F").s().p("AhSAXICliIIhmDjg");
	this.shape_169.setTransform(380.9,257.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#61B26F").s().p("AgNEEQgSgagqgDQgsgDgxAbIgoAbIASghQAagnApgfQAigZA2AIQAaAEATAIQgQgPgdgPQg8gfhAgCQg3gChPATIhDASIA3gdQBCghAzgRQAzgRBRAXQAoALAdAPQgVgWgmgcQhNg4hWggQhWghhVAUQgbAHgXAKIgSAKIBAgyQBTgxBYAAQBagBBPA9QAnAfAWAeQgOgagFgmQgMhMAng6QAkg3BcgUQAugKAmABQgXAPgdAaQg5AzgWA1QgWA1AjBKQATAlAXAaQgCgYAHghQAOhEApgxQA7hGBZAAQAsAAAgAOQgnAJgsAUQhZApgbA8QgeA/AgBQQAPAnAWAbIkjCAQAAgNgJgOg");
	this.shape_170.setTransform(382.8,226);

	this.instance_22 = new lib.Path_2_3();
	this.instance_22.parent = this;
	this.instance_22.setTransform(435.4,329.8,1,1,0,0,0,47.2,14.5);
	this.instance_22.alpha = 0.262;

	this.instance_23 = new lib.Path_3_6();
	this.instance_23.parent = this;
	this.instance_23.setTransform(811.8,434.7,1,1,0,0,0,81.6,12.8);
	this.instance_23.alpha = 0.262;

	this.instance_24 = new lib.Path_4_4();
	this.instance_24.parent = this;
	this.instance_24.setTransform(467.7,764.8,1,1,0,0,0,108.5,12.8);
	this.instance_24.alpha = 0.262;

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#A6BD55").s().p("EgsGAO1IBjhbQCEhxCfhtQH9leJTi0QD3hLFShcQEihRBrgiQCvg4CKhDQCUhJC3h5QC2h4G4iHQGgiAHHhSQHahXEYAHQE7AIgpCCQgqCDlvDuQlRDboSECQoED6oUDQQoqDZmMBkQtnDcqABGQj9Aci2AAQlGAAhfhag");
	this.shape_171.setTransform(1002.1,719.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgFQg5gCAJgIIAMgGQAFgEgJgCQgUgGgWgBQgggCiYgDQhwgCmGAFIlwAGQifADg5AHQh6AQk/gEQhdgBgpgIQgagHgNgBIi2ACQisABgkgFQglgFAOgIIAXgHIiYgNIK+gTQH4gLHaABQQQABV1BEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_172.setTransform(299.2,716.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhUgMIg2gLQjfADhjgEQg6gDALgIIAKgGQAFgEgHgCQgVgGgWgBQgfgCiYgDQhxgCmFAFIlwAGQigADg5AIQh6APk/gEQhdgBgpgIQgZgHgNgBIi3ACQisACgkgFQglgFAPgIIAWgIIiYgNQIggQCegDQH3gLHbABQQQABV1BEQKKAfKhBAQFQAgDOAaI08g3g");
	this.shape_173.setTransform(363.5,710.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgEQg6gDALgIIAKgGQAFgEgIgCQgTgGgXgBIi3gFQhxgCmGAFIlvAGQigADg5AIQh6APk/gEQhdgBgpgIQgagHgNgBIi2ACQisACgkgFQgmgFAPgIIAXgIIiYgNQIfgQCfgDQH3gLHbABQQAABWFBEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_174.setTransform(427.3,701.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#A6BD55").s().p("ADZPxQmwgjklh+QqFkXnAlzQnwmag7l4QAhgmA8g0QB4hqCJhNQG4j2HBCHQC7A4D8BcQDZBPBRAVQCFAhBugQQB5gQCchQQCchQFNBgQE7BbFHDMQFWDVC5DpQDQEFhADOQhCDSk5CYQkfCLmsA9QkLAmkKAAQiVAAiVgMg");
	this.shape_175.setTransform(237.3,672.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#61763D").s().p("EAl9ADLIiogUIgkAEQgnADhWgIQkqgehqgbQgggIhXgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDggAWgl4gCiIH6gCQJzAGJZAkQUXBNOzBoQG4AwHLA/QC/AZHFBCIiNgDIAUAKQANAJgjABIgEABQgmAAiWgTg");
	this.shape_176.setTransform(1169.8,535.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgJQkjgchxgcQgggIhXgNIhQgMQp5hUimgNQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJZAjQUNBNO9BpQG0AwHPA+IKEBbIiNgCIAUAKQANAJgkABIgDABQgnAAiWgTg");
	this.shape_177.setTransform(1111.4,521.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#61763D").s().p("EAl9ADLIiogUIglAEQgmADhWgJQkkgchwgcQgggIhXgNIhQgMQp5hUimgOQiKgMgfgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJaAjQUFBNPFBoQG2AxHMA+QC8AaHHBBIiMgCIAUAKQANAJgkABIgDABQgmAAiWgTg");
	this.shape_178.setTransform(1053.5,507.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgIQkqgehqgbQghgIhWgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh9gOIhxgOQgMAEgnACQhPADiLgOUgDhgAWgl3gCiIH6gCQJyAGJaAkQUJBMPBBpQG2AwHNA+QCmAXHeBFIiNgDIAUAKQAMAJgjABIgDABQgnAAiWgTg");
	this.shape_179.setTransform(973.5,492.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#61763D").s().p("Eg9wAIFQg6gaAJg+QAEgTAJgVIAJgRIjgg3QK2j4DshKQKejSKJh5QK9iDNDgnQNcgpP4A4QOfAzPqEZQH2CME7CBQuggTvLgOQ+VgcjSAZQjQAaiDg9QgogUgcgYIgUgWQhLAVhcATQi4AohZgFQhSgFAEg4IAGgwQACgbgOgOIgcgaQgOgKgZgDQgtgEjUASQicANoMCPIntCNQg1AQg+AYQh7AwgrAqQhVBTiwA0QiBAmjEAZQiAAPhCgpQgPgJgWgVQgQgQgKAAQgLgBhKAUIihApQihAnhMAAQgiAAgRgIg");
	this.shape_180.setTransform(606.2,322.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#8CAC50").s().p("EgmdApkQxvjbtsmPQtsmQnfoGQnyoYAApMQAApLHyoYQHgoGNrmQQNsmPRvjbQSXjjUGAAQUHAASXDjQRvDbNsGPQNsGQHgIGQHxIYAAJLQAAJMnxIYQnhIGtrGQQtsGPxvDbQyXDj0HAAQ0GAAyXjjg");
	this.shape_181.setTransform(644.1,557.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#917556").s().p("AnmTjQgfgYgJg6QgHgxAHhfQAhkYAMjQQAOkCgxkUQg/kdgUiBQgdi3BKjbQBEjJB6iTQAZgdCcgZQCLgWC+gLQC7gKCCAGQCPAGACAZQAEAvh+AxQhmAokMBEQhyAdhCA0Qg4AqgkBGQgQAfgnBqQgjBeglA9QgsBKgBBQQAAA6AaBiQAoCUAHAnQAYB6gEB6QgMExhVF+QhRFog7AAQgHAAgHgFg");
	this.shape_182.setTransform(575,953);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#74542E").s().p("AMSY+QkPifh2kGQg+iKg0l9QgdjXgzoIQgunggci3Qgukig3gIQjYgjhpHkQgjCjgRDJQgNCRABBQQAECvgzFOQhCGyhqCnQhmCgixAzQg4AQg4ADIgtAAQhbo6gajkQgcj7AFoGQAGpwBHi7QASgwAqiHQAchbAcgtQAmg+BFguQBNgyCLgwQDwhTEmgdQCbgPDXgLQCGgOCjBAQCvBEB0B+QCjCwAtD9QBAFtioIgQhWEWAND7QALDABJDKQAqByBVC+QA/CcgHBmQgPDRg3BWQgbAqgZABQhvgbiHhPg");
	this.shape_183.setTransform(609,973.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#644725").s().p("EgTKAnDQgthJgHhDQgHg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBPDYA2HOQAVCvgPC9QgKCPglDKIhAFeQgjDRgKCsQgKCyA4EGQAfCNBaFCQBQEcAVCBQAhDFguBbQguBdiwAeQiGAWkHgKQk5gRiegEQkUgHinAcQiyAei/CtQiDB2iuDhQjBD7gkAkQg9A/goAAQgZAAgRgag");
	this.shape_184.setTransform(609.1,1026.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#917556").s().p("AHpbTQgvhWggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAdQgnALieBTQiCBEhCgBQhhgCgjh/QgtingZi6QgVieAAh3QAAhYHMASQDmAJDlAaIBiAaQB1AiBjAmQE+B5ARB0QAPBkgPCOQgKBWgjDEQhOG1AAEWQAAE7A2GiQAcDaApENQAFAsAVBrQAVBpAHA+QAWDQhMCkQhJCdhKAGIgGAAQg7AAg2hgg");
	this.shape_185.setTransform(369.8,993.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#74542E").s().p("EAIaAkwQhsgRg1gwQgRgPgJgQIgFgOQgggNgfgnQg+hOAGh+QAFh3hRhgIhNhUQgvg1gcgzQgyhahwoEQh4orgjhcQgYg+hNiRQhwjQgphUQjYmxhhmhQhynmgTk2QgGhlADhfQAFhYAAggQAAhQP7hQQH+goH+gYIgyFhQgzF3AABtQAABXAHITQAFH6gMBUQgNBnAADvQAADwANCDQAFArAcDNQAcDiAPC1QAvI+hPD9QhaEhhqBqQhMBMhpAAQgYAAgbgEg");
	this.shape_186.setTransform(380.8,1039.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#917556").s().p("AkXL0Qg8gGAQmJQAJjNADhVQAEiOgOgeQgNgdghgiIg8g4QhHhGALhJQAFgiAggJQAXgGA6AEQBWAGAbAAQBKAAA9gQQBegZEJiwQB3hPAsgYQBIgpAOAQQAXAajbELQj/E1giBBQgZAygmCVQgWBXguDFQhYFlg8AAIgCAAg");
	this.shape_187.setTransform(854.3,909.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#74542E").s().p("AqpWMQg2gpgZjSQgUimADjOQABhGAsi7IBYljQBunJhCgrQhbg7gwh8Qg1iJAWimQATiSBshqQA2g0AzgYIAWAIQAgAIAuADQCUAJDvgxQDugxE8h2QCeg7BugxIAHBRQABBvgaCXQgPBUg1BHQgqA5hTBEIijB+QhpBUhLBNQiUCbiiIBQgoB+hJEAQg6DMgWA6QhRDTh2DOQh7DUg4AAQgKAAgHgGg");
	this.shape_188.setTransform(865.6,947.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#644725").s().p("EgOJAgiQgkgZgbhIQhAioAYkJQAKhqARmVQAapRAKjIQA3w+BKkEQBNkMCGi8QBDheA0gpIBHAEQBaADBigFQE3gQEOhaQENhZDfhzQBwg5A5gnIgYCyQgjDbgzDKQijKGkGDsQiSCDhYDPQhFCkgxD/QgdCVgwE4QgwEYg8C2Qh8F6kvFAQhhBmh2BkQg+A0hIA5QgTARgUAAQgQAAgRgMg");
	this.shape_189.setTransform(860.3,1003.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg4hih5o0QiDpfgmhlQhFi3ihkjQinkvknnXQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_190.setTransform(363.5,981.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#523821").s().p("EhKDAj2QjIAAi3hOQixhLiJiJQiJiJhLixQhOi3AAjIMAAAgo1QAAjIBOi3QBLixCJiJQCJiJCxhLQC3hODIAAMCUHAAAQDIAAC4BOQCxBLCICJQCJCJBLCxQBOC3AADIMAAAAo1QAADIhOC3QhLCxiJCJQiICJixBLQi4BOjIAAg");
	this.shape_191.setTransform(660.1,880.9);

	this.instance_25 = new lib.Path_14();
	this.instance_25.parent = this;
	this.instance_25.setTransform(978.7,201.8,1,1,0,0,0,195.2,33.5);
	this.instance_25.alpha = 0.77;

	this.instance_26 = new lib.Path_1_9();
	this.instance_26.parent = this;
	this.instance_26.setTransform(330.1,217.6,1,1,0,0,0,153,26.3);
	this.instance_26.alpha = 0.77;

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-304.3,0,304.4).s().p("Eg6lAuQMAAAhdzMB1LAAAMAAABfHg");
	this.shape_192.setTransform(603.8,304.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_192},{t:this.instance_26},{t:this.instance_25},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.instance_21},{t:this.instance_20},{t:this.shape_128},{t:this.shape_127},{t:this.instance_19},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.instance_18},{t:this.instance_17},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.instance_16},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.instance_15},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]}).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-404.8,0,2020,1359);


(lib.page2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		this.stop();
		
		
		var canvas = this
		this.gotoPage3.addEventListener("click",gotoPage3)
		function gotoPage3(){
			canvas.parent.gotoAndPlay("page3");
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(29));

	// Layer 10
	this.gotoPage3 = new lib.Symbol12();
	this.gotoPage3.parent = this;
	this.gotoPage3.setTransform(375.2,669.1,1,1,0,0,0,381.1,675.1);
	this.gotoPage3.alpha = 0;
	this.gotoPage3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gotoPage3).wait(32).to({_off:false},0).wait(1).to({regY:675.2,y:669.2,alpha:0.167},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:1},0).wait(29));

	// Layer 7
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(382.1,684.2,1,1,0,0,0,414.1,696.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(1).to({regY:696.2,y:684.3,alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(41));

	// Layer 9
	this.instance_1 = new lib.Path_8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(586.9,1189.8,1,1,0,0,0,112.8,112.8);
	this.instance_1.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape.setTransform(374.8,1001.7);

	this.instance_2 = new lib.ClipGroup_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(374.9,1001.8,1,1,0,0,0,109.8,109.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah4C5QhuioiXgRQCXgPBuipQB1i0ADj+QAED+B2C0QBtCpCXAPQAQAAARAAIAAACQgRAAgQgCQiXARhtCoQh2C1gED9QgDj9h1i1gAmeAAQARAAAQAAQgQACgRAAgAl9AAIAAAAg");
	this.shape_1.setTransform(318.2,970.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#697E9B").s().p("Amls4IJvAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtkrCvIhMAsQgXANgzALIgvAIg");
	this.shape_2.setTransform(417,1007.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0BAD3").s().p("Ah4MZIhMgsQksiviuktQitkrAAlcIAAjmQAAhbBBhBQBAhABbAAITfAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtksCvIhMAsQg4AghBAAQhAAAg4ggg");
	this.shape_3.setTransform(374.8,1007.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_4.setTransform(374.8,1001.7);

	this.instance_3 = new lib.ClipGroup_1_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(372.9,1003.8,1,1,0,0,0,109.8,109.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D3E9EB").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjMQBTjFCYiYQCYiYDFhTQDMhXDeAAQDfAADMBXQDFBTCYCYQCYCYBTDFQBXDMAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjMBXjfAAQjeAAjMhXg");
	this.shape_5.setTransform(374.8,1001.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_6.setTransform(587.1,1189.9);

	this.instance_4 = new lib.ClipGroup_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(587.1,1189.9,1,1,0,0,0,109.8,109.8);

	this.instance_5 = new lib.ClipGroup_1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(599.9,1202.1,1,1,0,0,0,122.6,122);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_7.setTransform(587.1,1189.9);

	this.instance_6 = new lib.ClipGroup_2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(585.1,1191.9,1,1,0,0,0,109.8,109.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F4826").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDFBUCYCYQCYCXBTDFQBXDMAADfQAADghXDLQhTDFiYCYQiYCYjFBTQjLBXjggBQjeABjMhXg");
	this.shape_8.setTransform(587.1,1189.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicidhWjKQhYjRgBjlQABjkBYjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBYDRAADkQAADlhYDRQhWDKicCdQicCcjLBWQjRBYjlABQjkgBjShYgAmevXQi/BSiUCUQiVCThRC/QhUDHAADYQAADZBUDGQBRC/CVCUQCUCUC/BSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBQi/QBUjGAAjZQAAjYhUjHQhQi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_9.setTransform(159.8,1189.9);

	this.instance_7 = new lib.ClipGroup_4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(239.2,1138,1,1,0,0,0,191.2,163.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E8976B").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMABjfQgBjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDGBUCXCYQCYCXBTDFQBWDMABDfQgBDghWDLQhTDFiYCYQiXCYjGBTQjLBXjggBQjeABjMhXg");
	this.shape_10.setTransform(159.8,1189.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(10).p("EA6gAk3Mh0/AAAMAAAgp8QAAmdCfl6QCbltEZkZQEZkaFtiaQF5igGeAAMA1eAAAQGeAAF6CgQFtCaEZEaQEZEZCbFtQCfF6AAGdg");
	this.shape_11.setTransform(375.6,1098.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9DD89").s().p("Eg6fAk3MAAAgp8QAAmeCgl5QCaltEZkZQEakaFsiaQF6ifGdAAMA1eAAAQGeAAF5CfQFtCaEaEaQEZEZCaFtQCgF5AAGeMAAAAp8g");
	this.shape_12.setTransform(375.6,1098.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah4C5QhuioiXgRQCXgPBuipQB1i0ADj+QAED+B2C0QBtCpCXAPQiXARhtCoQh2C1gED9QgDj9h1i1gAF+AAQAQAAARAAIAAACQgRAAgQgCgAmeAAQARAAAQAAQgQACgRAAgAl9AAIAAAAg");
	this.shape_13.setTransform(318.2,970.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_7},{t:this.shape_9},{t:this.shape_8},{t:this.instance_6},{t:this.shape_7},{t:this.instance_5},{t:this.instance_4},{t:this.shape_6},{t:this.shape_5},{t:this.instance_3},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_7},{t:this.shape_9},{t:this.shape_8},{t:this.instance_6},{t:this.shape_7},{t:this.instance_5},{t:this.instance_4},{t:this.shape_6},{t:this.shape_5},{t:this.instance_3},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_13},{t:this.instance_2},{t:this.shape}]},66).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AvoB4QgxAAgjgjQgkgkAAgxQAAgxAkgiQAjgkAxAAIfRAAQAxAAAkAkQAjAiAAAxQAAAxgjAkQgkAjgxAAgAwgg3QgYAXAAAgQAAAhAYAXQAXAYAhAAIfRAAQAhAAAXgYQAYgXAAghQAAgggYgXQgXgYghAAI/RAAQghAAgXAYg");
	this.shape_14.setTransform(567.8,213.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#733A44").s().p("Aw3AUIAAgnMAhuAAAIAAAng");
	this.shape_15.setTransform(568.1,219.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AvQALQgEAAgDgDQgEgDAAgFQAAgEAEgDQADgDAEAAIegAAQAGAAACADQAEADAAAEQAAAFgEADQgCADgGAAg");
	this.shape_16.setTransform(567.8,208.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	this.shape_17.setTransform(567.8,213.4);

	this.instance_8 = new lib.Path_3_3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(567.7,213.4,1,1,0,0,0,110,10);
	this.instance_8.alpha = 0.66;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_18.setTransform(632.4,149.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgQQACgRAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAHgBALIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgLgCgHQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_19.setTransform(616.1,149.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA+B0IAAitIgBgNIgDgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAGgFIALgJIANgEIAMgCQANAAAJAHQAJAGAFANQAFgHAFgFIAMgIIANgEIAMgCQATAAAMAPQAKAOABAcIAACug");
	this.shape_20.setTransform(595.6,149.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_21.setTransform(578.7,145.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_22.setTransform(570.2,145);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_23.setTransform(558.5,149.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgGAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_24.setTransform(543.7,149.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAGgFAFgCIALgDIAIAAIALABIAJAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAHgBIAHgEIAEgFIADgHIAAiIQgDgHgFgFQgFgFgIAAg");
	this.shape_25.setTransform(527.6,145.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgGAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_26.setTransform(512,149.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_27.setTransform(496.4,146.6);

	this.instance_9 = new lib.Path_10();
	this.instance_9.parent = this;
	this.instance_9.setTransform(564,147.7,1,1,0,0,0,142.9,32.4);
	this.instance_9.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance_8},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.instance_9},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance_8},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},66).wait(1));

	// Layer 4
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AvoB4QgyAAgigjQgkgjABgyQgBgxAkgjQAigjAyAAIfQAAQAyAAAkAjQAiAjABAxQgBAygiAjQgkAjgyAAgAwgg4QgXAYgBAgQABAhAXAYQAYAXAgAAIfQAAQAiAAAXgXQAXgYAAghQAAgggXgYQgXgXgiAAI/QAAQggAAgYAXg");
	this.shape_28.setTransform(264.9,474.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#733A44").s().p("Aw2AUIAAgnMAhuAAAIAAAng");
	this.shape_29.setTransform(265.2,480.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AvPAMQgGAAgCgEQgEgDAAgFIAAAAQAAgEAEgDQACgEAGAAIegAAQAEAAAEAEQADADAAAEIAAAAQAAAFgDADQgEAEgEAAg");
	this.shape_30.setTransform(264.9,470);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgeQgdgdgBgpQABgoAdgdQAdgeApAAIfQAAQAqAAAdAeQAeAdAAAoQAAApgeAdQgdAegqAAg");
	this.shape_31.setTransform(264.9,474.9);

	this.instance_10 = new lib.Path_3_4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(264.9,474.9,1,1,0,0,0,110,10);
	this.instance_10.alpha = 0.66;

	this.instance_11 = new lib.bloodbar();
	this.instance_11.parent = this;
	this.instance_11.setTransform(264.9,474.9,1,1,0,0,0,112,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).to({state:[{t:this.instance_11}]},21).wait(46));

	// Layer 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AvoB4QgyAAgigjQgkgjABgyQgBgxAkgjQAigjAyAAIfQAAQAyAAAkAjQAiAjABAxQgBAygiAjQgkAjgyAAgAwgg4QgXAYgBAgQABAhAXAYQAYAXAgAAIfQAAQAiAAAXgXQAXgYAAghQAAgggXgYQgXgXgiAAI/QAAQggAAgYAXg");
	this.shape_32.setTransform(264.9,474.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#733A44").s().p("Aw2AUIAAgnMAhuAAAIAAAng");
	this.shape_33.setTransform(265.2,480.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AvPAMQgGAAgCgEQgEgDAAgFIAAAAQAAgEAEgDQACgEAGAAIegAAQAEAAAEAEQADADAAAEIAAAAQAAAFgDADQgEAEgEAAg");
	this.shape_34.setTransform(264.9,470);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgeQgdgdgBgpQABgoAdgdQAdgeApAAIfQAAQAqAAAdAeQAeAdAAAoQAAApgeAdQgdAegqAAg");
	this.shape_35.setTransform(264.9,474.9);

	this.instance_12 = new lib.Path_3_4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(264.9,474.9,1,1,0,0,0,110,10);
	this.instance_12.alpha = 0.66;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_36.setTransform(322.3,415);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_37.setTransform(306,415.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIAMgEIANgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_38.setTransform(285.5,415);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_39.setTransform(268.7,410.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_40.setTransform(256.4,411.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_41.setTransform(240,411.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHACQgFABgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAGIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_42.setTransform(223.2,415.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_43.setTransform(208.3,412.4);

	this.instance_13 = new lib.Path_11();
	this.instance_13.parent = this;
	this.instance_13.setTransform(264.9,411.5,1,1,0,0,0,142.9,32.4);
	this.instance_13.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.instance_12},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.instance_13},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},21).to({state:[{t:this.instance_13},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.instance_12},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},45).wait(1));

	// Layer 1
	this.instance_14 = new lib.Path_13();
	this.instance_14.parent = this;
	this.instance_14.setTransform(173.3,668.9,1,1,0,0,0,25.9,51.8);
	this.instance_14.alpha = 0.262;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E17B3A").s().p("ADrHfQACgSgBgeIgDg4QgFgzgDgUIgNhVQgIgrgMgyQgRhJgIgZQgRgwgWgxQgrhdg9hVQg4hRg7g5QgfgcgZgRQgYgSgXgLQgRgKgQgFIgMgDIAAgBIAMADQAOAEAUAKQAdAQATANQAbATAdAbQA9A3A5BRQA9BUAsBfQAYAvARAxIAPAyIAMAxQAMAzAHAqQAFAaACATIAGAoQADAhACAnIABA5QgBAegDASg");
	this.shape_44.setTransform(212,630.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F9D68E").s().p("AH0L9QiPgKhuhUQkzjvg4keQgJgwgCgvQgMAPgRAOQhgBUh9AaQicAhhhhfQg6g5gfhtQgih5AUh6QAWiOBbhrQBrh8C8g8QExhhEGBVQEWBZBvECQBTDBAVFOQAREhgfBxQgWBQgpBIQgUAkgQATQgjAJgvAAIgogBg");
	this.shape_45.setTransform(160.1,653.6);

	this.instance_15 = new lib.Path_3_5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(206.8,645.2,1,1,0,0,0,19.3,36.4);
	this.instance_15.alpha = 0.262;

	this.instance_16 = new lib.Path_4_3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(253.8,670.5,1,1,0,0,0,102.4,76.8);
	this.instance_16.alpha = 0.262;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9D68E").s().p("Am1NQQjLhGibh/Qich/hWilQhYisAAi7QAAi6BYisQBWikCciAQCbh/DLhGQDRhIDkAAQDlAADSBIQDKBGCcB/QCbCABWCkQBYCsAAC6QAAC7hYCsQhWClibB/QicB/jKBGQjSBIjlAAQjkAAjRhIg");
	this.shape_46.setTransform(262.9,654.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9D68E").s().p("AhXGMQi0mdgJjtQgIjbBnicQAvhHA7giQA9gkA8ALQBxATANFLQAEBlgFCiQgFClABAfQAFCYA2EZQAaCMAaBuIi7AdQhYifhajPg");
	this.shape_47.setTransform(194.5,511.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F9D68E").s().p("AlgIdQAWhzAmiRQBMkgBPiVQBqjGB6h8QCLiMBRAvQBOAthDDcQg2C2hPB2QgwBGi+ELIi2D9g");
	this.shape_48.setTransform(339.2,525.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.instance_16},{t:this.instance_15},{t:this.shape_45},{t:this.shape_44},{t:this.instance_14}]}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.instance_16},{t:this.instance_15},{t:this.shape_45},{t:this.shape_44},{t:this.instance_14}]},66).wait(1));

	// Layer 1
	this.instance_17 = new lib.Symbol9();
	this.instance_17.parent = this;
	this.instance_17.setTransform(593,329,1,1,0,0,0,126,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:126.1,x:593.1},0).wait(15).to({x:544.3,y:338.7},0).wait(1).to({x:498.3,y:357.7},0).wait(1).to({x:459.2,y:388.1},0).wait(1).to({x:431.3,y:429.2},0).wait(1).to({x:416.1,y:476.5},0).wait(1).to({x:411.1,y:526},0).wait(1).to({x:424,y:469},0).wait(1).to({x:430.6,y:406.2},0).wait(1).to({x:464.6,y:374.1},0).wait(1).to({x:545.2,y:341},0).wait(1).to({x:593.1,y:329},0).wait(41));

	// Isolation Mode
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("EgimAAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAMBFNAAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape_49.setTransform(377.4,809.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(67));

	// Layer 18
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("EgjDAB4QgyAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAyAAMBGHAAAQAyAAAjAjQAjAjAAAxQAAAxgjAkQgjAjgyAAgEgj8gA3QgXAXAAAgQAAAhAXAXQAYAYAhAAMBGHAAAQAiAAAXgYQAXgXAAghQAAgggXgXQgXgYgiAAMhGHAAAQghAAgYAYg");
	this.shape_50.setTransform(376.6,813.8);
	this.shape_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(22).to({_off:false},0).wait(45));

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_22 = new cjs.Graphics().p("EgjDABkQgpAAgegdQgdgeAAgpQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAApgdAeQgdAdgqAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_graphics_22,x:376.4,y:813.6}).wait(45));

	// Layer 16
	this.instance_18 = new lib.Symbol17();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-99.7,813.6,1,1,0,0,0,234.4,10);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(22).to({_off:false},0).wait(1).to({x:-85.4},0).wait(1).to({x:-71.1},0).wait(1).to({x:-56.7},0).wait(1).to({x:-42.4},0).wait(1).to({x:-28.1},0).wait(1).to({x:-13.8},0).wait(1).to({x:0.5},0).wait(1).to({x:14.8},0).wait(37));

	// Layer 15
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(51,51,51,0.659)").s().p("EgjDABkQgpAAgegdQgdgeAAgpQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAApgdAeQgdAdgqAAg");
	this.shape_51.setTransform(376.4,813.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgHQAHgFAHgDQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_52.setTransform(198.8,772.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgVCWQgKgBgIgGQgHgFgEgIQgFgJAAgOIABgFIABgIIAfAAQgBAPAGAGQAFAGALAAIAIgBQAFgCADgEQAEgDACgHQACgHAAgKIAAgkQgGAHgJAFQgIAGgNAAIgJgBIgKgDQgGgDgGgFQgFgGgEgJQgEgJgCgNQgDgOAAgTIAAg8QAAgTADgMQACgNAEgKQAEgIAFgFQAGgFAGgCIALgEIAJgBQAIAAAGADQAGACAFADIAIAIIAFAJIAEgWIAhAAIAADaQAAATgDAQQgEAPgIALQgIALgMAGQgMAFgQAAQgLAAgKgCgAgIh4QgEADgCAEQgDAFgCAHIgBAVIAABMIABATQACAJADAEQACAFAEABIAIACIAHgBIAHgEIAEgFIADgGIAAh8QgDgIgFgEQgGgFgHAAg");
	this.shape_53.setTransform(182.6,775.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAGIgHAKIgGANQgCAGAAAJQAAAMAFAJQAFAHAKABQAGgBAFgCIAIgHIAAhHg");
	this.shape_54.setTransform(166.4,772.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_55.setTransform(151.5,769.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},22).wait(45));

	// rage
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgHQAHgFAHgDQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_56.setTransform(198.8,772.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgVCWQgKgBgIgGQgHgFgEgIQgFgJAAgOIABgFIABgIIAfAAQgBAPAGAGQAFAGALAAIAIgBQAFgCADgEQAEgDACgHQACgHAAgKIAAgkQgGAHgJAFQgIAGgNAAIgJgBIgKgDQgGgDgGgFQgFgGgEgJQgEgJgCgNQgDgOAAgTIAAg8QAAgTADgMQACgNAEgKQAEgIAFgFQAGgFAGgCIALgEIAJgBQAIAAAGADQAGACAFADIAIAIIAFAJIAEgWIAhAAIAADaQAAATgDAQQgEAPgIALQgIALgMAGQgMAFgQAAQgLAAgKgCgAgIh4QgEADgCAEQgDAFgCAHIgBAVIAABMIABATQACAJADAEQACAFAEABIAIACIAHgBIAHgEIAEgFIADgGIAAh8QgDgIgFgEQgGgFgHAAg");
	this.shape_57.setTransform(182.6,775.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAGIgHAKIgGANQgCAGAAAJQAAAMAFAJQAFAHAKABQAGgBAFgCIAIgHIAAhHg");
	this.shape_58.setTransform(166.4,772.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_59.setTransform(151.5,769.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("EgjDAB4QgyAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAyAAMBGHAAAQAyAAAjAjQAjAjAAAxQAAAxgjAkQgjAjgyAAgEgj8gA3QgXAXAAAgQAAAhAXAXQAYAYAhAAMBGHAAAQAiAAAXgYQAXgXAAghQAAgggXgXQgXgYgiAAMhGHAAAQghAAgYAYg");
	this.shape_60.setTransform(376.6,813.8);

	this.instance_19 = new lib.ClipGroup_2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(375.6,813.8,1,1,0,0,0,233.4,10);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(51,51,51,0.659)").s().p("EgjDABkQgpAAgegdQgdgeAAgpQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAApgdAeQgdAdgqAAg");
	this.shape_61.setTransform(376.4,813.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.instance_19},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]}).to({state:[]},22).wait(45));

	// Layer 5
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C6DA92").s().p("AgUQbQhogDjQgzQjMgxjjhMQofi1ipiUQhihVAPhKQAKg1BMg9IA9guQAhgZAOgQQAngsg4gkQgagQjaAaQlzAtiPAMQs0BEoSivQkihejOk0Qi7kWhrmxQCtEMD3CLQHwEXI0CXQDSA4D/AwQA0AKFrA/QB/AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBuBegCBnQgBAzgYAgIBNgLQBigMBrgHQFYgUE3AyQCeAaCAAkQAaAICJAtQBEAXAqAAQA0ABBKgdQBBgYB3hDQCNhSBLgqQEWibCGAAQB9AABnBBQBGAsATAJQA5AdBDANQB/AZFajUQBOgwCshxQCBhUAjgRQAsgUBRAgQA2AUB0BCQCIBOBAAeQB4A5BfAQQC2AgFvAgQC4AQCTAKQgsCv55CjQoHAzpoArIoCAiQhqAJh+A1Qg0AVitBXQiMBHhdAfQh9Aoh0AAIgTAAg");
	this.shape_62.setTransform(216.4,744.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6FB77F").s().p("AkmAaIARg6ICyEJIiqlUIAghdICkGuIiDnuIBXgrIBJILIgjoCIBrAAIgjIKIBKnZIBAAaIhIFwIBdk+IA9AgIhsEqIB+kBIBAAYIi+FYIi8Aog");
	this.shape_63.setTransform(225,274.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EBA24D").s().p("Ag+gJIBuiSIAPE3g");
	this.shape_64.setTransform(200,292.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FAE485").s().p("Ahmh1IC0AdIAZDOg");
	this.shape_65.setTransform(185.9,300.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CD6C38").s().p("Ag+hmIB9CkIhkApg");
	this.shape_66.setTransform(200,301.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F2BC5F").s().p("AiRAsIEjh0IhvCRg");
	this.shape_67.setTransform(190.2,284.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EBA24D").s().p("AhsANIBniPIByEFg");
	this.shape_68.setTransform(194,263.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FAE485").s().p("AhWiFICtAhIhLDqg");
	this.shape_69.setTransform(174.4,275.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CD6C38").s().p("AhGh1IDYB1IkjB1g");
	this.shape_70.setTransform(190.2,276.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F2BC5F").s().p("AiJAnIEThuIhnCPg");
	this.shape_71.setTransform(179.6,257.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CD6C38").s().p("AhTiDIDdCXIkTBvg");
	this.shape_72.setTransform(179.6,248.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FAE485").s().p("Ag2iwIBtBbIg2EGg");
	this.shape_73.setTransform(165.7,244.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EBA24D").s().p("Ag3ASIBvicIgvEVg");
	this.shape_74.setTransform(221.4,283.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CD6C38").s().p("AAOhxIBCB5IifBqg");
	this.shape_75.setTransform(214.3,296.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FAE485").s().p("Ag2ibIBtBUIheDjg");
	this.shape_76.setTransform(210.3,292.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F2BC5F").s().p("AhugFIDdhIIhwCbg");
	this.shape_77.setTransform(215.9,277.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EBA24D").s().p("AhVApIAVjGICWE7g");
	this.shape_78.setTransform(218.4,253.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CD6C38").s().p("Ag8heICrB0IjdBJg");
	this.shape_79.setTransform(215.9,267.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FAE485").s().p("AhRiCICjBIIgxC9g");
	this.shape_80.setTransform(201.6,263.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F2BC5F").s().p("AhcAbIC5h+IgVDHg");
	this.shape_81.setTransform(202.6,247.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EBA24D").s().p("AhFASIgShtIAQAJQAYATAoAsQA6BDAlAsg");
	this.shape_82.setTransform(203.1,228.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CD6C38").s().p("AhBhkICeBKIi5B+g");
	this.shape_83.setTransform(202.6,240.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FAE485").s().p("AhziSIDnBdIgbDIg");
	this.shape_84.setTransform(184.4,235.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F2BC5F").s().p("AhzgmIDVgQIASBtg");
	this.shape_85.setTransform(184.4,225.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FAE485").s().p("AhwhTIC8AjIAlCEg");
	this.shape_86.setTransform(165.9,307.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CD6C38").s().p("AhwhBIDhBiIi8Aig");
	this.shape_87.setTransform(184.9,308.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EBA24D").s().p("AhwATIAViIIDMDrg");
	this.shape_88.setTransform(184.9,300.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F2BC5F").s().p("AhoAhIDRhkIgVCHg");
	this.shape_89.setTransform(165.1,295.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FAE485").s().p("AhMilICZCAIgsDMg");
	this.shape_90.setTransform(151.3,282.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CD6C38").s().p("Ag9hlICmBlIjRBmg");
	this.shape_91.setTransform(165.1,288.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EBA24D").s().p("AhTAfIBFikIBiELg");
	this.shape_92.setTransform(167.3,275.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F2BC5F").s().p("AhugtIDdglIhEClg");
	this.shape_93.setTransform(154.7,270.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FAE485").s().p("AgigUQgCg7AEgeIAFgRIA+BbIg9CiQgEg4gEhbg");
	this.shape_94.setTransform(146.3,252.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CD6C38").s().p("AgvhQICeB9IjdAlg");
	this.shape_95.setTransform(154.7,257.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EBA24D").s().p("AhugDIAQiPIDNElg");
	this.shape_96.setTransform(182.3,235.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EBA24D").s().p("AhPAzIBmjjIA5Fhg");
	this.shape_97.setTransform(157.8,244.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F2BC5F").s().p("Ag+gTIB9g0IgQCOg");
	this.shape_98.setTransform(166.5,228.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F2BC5F").s().p("AhSAXICliIIhmDjg");
	this.shape_99.setTransform(151.9,237.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#61B26F").s().p("AgNEEQgSgagqgDQgsgDgxAbIgoAbIASghQAagnApgfQAigZA2AIQAaAEATAIQgQgPgdgPQg8gfhAgCQg3gChPATIhDASIA3gdQBCghAzgRQAzgRBRAXQAoALAdAPQgVgWgmgcQhNg4hWggQhWghhVAUQgbAHgXAKIgSAKIBAgyQBTgxBYAAQBagBBPA9QAnAfAWAeQgOgagFgmQgMhMAng6QAkg3BcgUQAugKAmABQgXAPgdAaQg5AzgWA1QgWA1AjBKQATAlAXAaQgCgYAHghQAOhEApgxQA7hGBZAAQAsAAAgAOQgnAJgsAUQhZApgbA8QgeA/AgBQQAPAnAWAbIkjCAQAAgNgJgOg");
	this.shape_100.setTransform(153.8,206);

	this.instance_20 = new lib.Path_2_3();
	this.instance_20.parent = this;
	this.instance_20.setTransform(206.4,309.8,1,1,0,0,0,47.2,14.5);
	this.instance_20.alpha = 0.262;

	this.instance_21 = new lib.Path_3_6();
	this.instance_21.parent = this;
	this.instance_21.setTransform(582.7,414.7,1,1,0,0,0,81.6,12.8);
	this.instance_21.alpha = 0.262;

	this.instance_22 = new lib.Path_4_4();
	this.instance_22.parent = this;
	this.instance_22.setTransform(238.6,744.8,1,1,0,0,0,108.5,12.8);
	this.instance_22.alpha = 0.262;

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#A6BD55").s().p("EgsGAO1IBjhbQCEhxCfhtQH9leJTi0QD3hLFShcQEihRBrgiQCvg4CKhDQCUhJC3h5QC2h4G4iHQGgiAHHhSQHahXEYAHQE7AIgpCCQgqCDlvDuQlRDboSECQoED6oUDQQoqDZmMBkQtnDcqABGQj9Aci2AAQlGAAhfhag");
	this.shape_101.setTransform(773.1,699.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgFQg5gCAJgIIAMgGQAFgEgJgCQgUgGgWgBQgggCiYgDQhwgCmGAFIlwAGQifADg5AHQh6AQk/gEQhdgBgpgIQgagHgNgBIi2ACQisABgkgFQglgFAOgIIAXgHIiYgNIK+gTQH4gLHaABQQQABV1BEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_102.setTransform(70.1,696.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhUgMIg2gLQjfADhjgEQg6gDALgIIAKgGQAFgEgHgCQgVgGgWgBQgfgCiYgDQhxgCmFAFIlwAGQigADg5AIQh6APk/gEQhdgBgpgIQgZgHgNgBIi3ACQisACgkgFQglgFAPgIIAWgIIiYgNQIggQCegDQH3gLHbABQQQABV1BEQKKAfKhBAQFQAgDOAaI08g3g");
	this.shape_103.setTransform(134.4,690.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgEQg6gDALgIIAKgGQAFgEgIgCQgTgGgXgBIi3gFQhxgCmGAFIlvAGQigADg5AIQh6APk/gEQhdgBgpgIQgagHgNgBIi2ACQisACgkgFQgmgFAPgIIAXgIIiYgNQIfgQCfgDQH3gLHbABQQAABWFBEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_104.setTransform(198.3,681.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#A6BD55").s().p("ADZPxQmwgjklh+QqFkXnAlzQnwmag7l4QAhgmA8g0QB4hqCJhNQG4j2HBCHQC7A4D8BcQDZBPBRAVQCFAhBugQQB5gQCchQQCchQFNBgQE7BbFHDMQFWDVC5DpQDQEFhADOQhCDSk5CYQkfCLmsA9QkLAmkKAAQiVAAiVgMg");
	this.shape_105.setTransform(8.2,652.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#61763D").s().p("EAl9ADLIiogUIgkAEQgnADhWgIQkqgehqgbQgggIhXgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDggAWgl4gCiIH6gCQJzAGJZAkQUXBNOzBoQG4AwHLA/QC/AZHFBCIiNgDIAUAKQANAJgjABIgEABQgmAAiWgTg");
	this.shape_106.setTransform(940.7,515.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgJQkjgchxgcQgggIhXgNIhQgMQp5hUimgNQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJZAjQUNBNO9BpQG0AwHPA+IKEBbIiNgCIAUAKQANAJgkABIgDABQgnAAiWgTg");
	this.shape_107.setTransform(882.3,501.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#61763D").s().p("EAl9ADLIiogUIglAEQgmADhWgJQkkgchwgcQgggIhXgNIhQgMQp5hUimgOQiKgMgfgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJaAjQUFBNPFBoQG2AxHMA+QC8AaHHBBIiMgCIAUAKQANAJgkABIgDABQgmAAiWgTg");
	this.shape_108.setTransform(824.5,487.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgIQkqgehqgbQghgIhWgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh9gOIhxgOQgMAEgnACQhPADiLgOUgDhgAWgl3gCiIH6gCQJyAGJaAkQUJBMPBBpQG2AwHNA+QCmAXHeBFIiNgDIAUAKQAMAJgjABIgDABQgnAAiWgTg");
	this.shape_109.setTransform(744.4,472.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#61763D").s().p("Eg9wAIFQg6gaAJg+QAEgTAJgVIAJgRIjgg3QK2j4DshKQKejSKJh5QK9iDNDgnQNcgpP4A4QOfAzPqEZQH2CME7CBQuggTvLgOQ+VgcjSAZQjQAaiDg9QgogUgcgYIgUgWQhLAVhcATQi4AohZgFQhSgFAEg4IAGgwQACgbgOgOIgcgaQgOgKgZgDQgtgEjUASQicANoMCPIntCNQg1AQg+AYQh7AwgrAqQhVBTiwA0QiBAmjEAZQiAAPhCgpQgPgJgWgVQgQgQgKAAQgLgBhKAUIihApQihAnhMAAQgiAAgRgIg");
	this.shape_110.setTransform(377.2,302.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#8CAC50").s().p("EgmdApkQxvjbtsmPQtsmQnfoGQnyoYAApMQAApLHyoYQHgoGNrmQQNsmPRvjbQSXjjUGAAQUHAASXDjQRvDbNsGPQNsGQHgIGQHxIYAAJLQAAJMnxIYQnhIGtrGQQtsGPxvDbQyXDj0HAAQ0GAAyXjjg");
	this.shape_111.setTransform(415.1,537.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#917556").s().p("AnmTjQgfgYgJg6QgHgxAHhfQAhkYAMjQQAOkCgxkUQg/kdgUiBQgdi3BKjbQBEjJB6iTQAZgdCcgZQCLgWC+gLQC7gKCCAGQCPAGACAZQAEAvh+AxQhmAokMBEQhyAdhCA0Qg4AqgkBGQgQAfgnBqQgjBeglA9QgsBKgBBQQAAA6AaBiQAoCUAHAnQAYB6gEB6QgMExhVF+QhRFog7AAQgHAAgHgFg");
	this.shape_112.setTransform(345.9,933);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#74542E").s().p("AMSY+QkPifh2kGQg+iKg0l9QgdjXgzoIQgunggci3Qgukig3gIQjYgjhpHkQgjCjgRDJQgNCRABBQQAECvgzFOQhCGyhqCnQhmCgixAzQg4AQg4ADIgtAAQhbo6gajkQgcj7AFoGQAGpwBHi7QASgwAqiHQAchbAcgtQAmg+BFguQBNgyCLgwQDwhTEmgdQCbgPDXgLQCGgOCjBAQCvBEB0B+QCjCwAtD9QBAFtioIgQhWEWAND7QALDABJDKQAqByBVC+QA/CcgHBmQgPDRg3BWQgbAqgZABQhvgbiHhPg");
	this.shape_113.setTransform(380,953.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#644725").s().p("EgTKAnDQgthJgHhDQgHg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBPDYA2HOQAVCvgPC9QgKCPglDKIhAFeQgjDRgKCsQgKCyA4EGQAfCNBaFCQBQEcAVCBQAhDFguBbQguBdiwAeQiGAWkHgKQk5gRiegEQkUgHinAcQiyAei/CtQiDB2iuDhQjBD7gkAkQg9A/goAAQgZAAgRgag");
	this.shape_114.setTransform(380,1006.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#917556").s().p("AHpbTQgvhWggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAdQgnALieBTQiCBEhCgBQhhgCgjh/QgtingZi6QgVieAAh3QAAhYHMASQDmAJDlAaIBiAaQB1AiBjAmQE+B5ARB0QAPBkgPCOQgKBWgjDEQhOG1AAEWQAAE7A2GiQAcDaApENQAFAsAVBrQAVBpAHA+QAWDQhMCkQhJCdhKAGIgGAAQg7AAg2hgg");
	this.shape_115.setTransform(140.8,973.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#74542E").s().p("EAIaAkwQhsgRg1gwQgRgPgJgQIgFgOQgggNgfgnQg+hOAGh+QAFh3hRhgIhNhUQgvg1gcgzQgyhahwoEQh4orgjhcQgYg+hNiRQhwjQgphUQjYmxhhmhQhynmgTk2QgGhlADhfQAFhYAAggQAAhQP7hQQH+goH+gYIgyFhQgzF3AABtQAABXAHITQAFH6gMBUQgNBnAADvQAADwANCDQAFArAcDNQAcDiAPC1QAvI+hPD9QhaEhhqBqQhMBMhpAAQgYAAgbgEg");
	this.shape_116.setTransform(151.7,1019.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#917556").s().p("AkXL0Qg8gGAQmJQAJjNADhVQAEiOgOgeQgNgdghgiIg8g4QhHhGALhJQAFgiAggJQAXgGA6AEQBWAGAbAAQBKAAA9gQQBegZEJiwQB3hPAsgYQBIgpAOAQQAXAajbELQj/E1giBBQgZAygmCVQgWBXguDFQhYFlg8AAIgCAAg");
	this.shape_117.setTransform(625.3,889.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#74542E").s().p("AqpWMQg2gpgZjSQgUimADjOQABhGAsi7IBYljQBunJhCgrQhbg7gwh8Qg1iJAWimQATiSBshqQA2g0AzgYIAWAIQAgAIAuADQCUAJDvgxQDugxE8h2QCeg7BugxIAHBRQABBvgaCXQgPBUg1BHQgqA5hTBEIijB+QhpBUhLBNQiUCbiiIBQgoB+hJEAQg6DMgWA6QhRDTh2DOQh7DUg4AAQgKAAgHgGg");
	this.shape_118.setTransform(636.5,927.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#644725").s().p("EgOJAgiQgkgZgbhIQhAioAYkJQAKhqARmVQAapRAKjIQA3w+BKkEQBNkMCGi8QBDheA0gpIBHAEQBaADBigFQE3gQEOhaQENhZDfhzQBwg5A5gnIgYCyQgjDbgzDKQijKGkGDsQiSCDhYDPQhFCkgxD/QgdCVgwE4QgwEYg8C2Qh8F6kvFAQhhBmh2BkQg+A0hIA5QgTARgUAAQgQAAgRgMg");
	this.shape_119.setTransform(631.3,983.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg4hih5o0QiDpfgmhlQhFi3ihkjQinkvknnXQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_120.setTransform(134.4,961.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#523821").s().p("EhKDAj2QjIAAi3hOQixhLiJiJQiJiJhLixQhOi3AAjIMAAAgo1QAAjIBOi3QBLixCJiJQCJiJCxhLQC3hODIAAMCUHAAAQDIAAC4BOQCxBLCICJQCJCJBLCxQBOC3AADIMAAAAo1QAADIhOC3QhLCxiJCJQiICJixBLQi4BOjIAAg");
	this.shape_121.setTransform(431,860.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},66).wait(1));

	// Layer 6
	this.instance_23 = new lib.Path_14();
	this.instance_23.parent = this;
	this.instance_23.setTransform(749.7,181.8,1,1,0,0,0,195.2,33.5);
	this.instance_23.alpha = 0.77;

	this.instance_24 = new lib.Path_1_9();
	this.instance_24.parent = this;
	this.instance_24.setTransform(101,197.6,1,1,0,0,0,153,26.3);
	this.instance_24.alpha = 0.77;

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-304.3,0,304.4).s().p("Eg6lAuQMAAAhdzMB1LAAAMAAABfHg");
	this.shape_122.setTransform(374.8,284.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_122},{t:this.instance_24},{t:this.instance_23}]}).to({state:[{t:this.shape_122},{t:this.instance_24},{t:this.instance_23}]},66).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229,-20,1446.1,1359);


(lib.page1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Path_8();
	this.instance.parent = this;
	this.instance.setTransform(586.9,1189.8,1,1,0,0,0,112.8,112.8);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape.setTransform(374.8,1001.7);

	this.instance_1 = new lib.ClipGroup_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(374.9,1001.8,1,1,0,0,0,109.8,109.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah4C5QhuioiXgRQCXgPBuipQB1i0ADj+QAED+B2C0QBtCpCXAPQiXARhtCoQh2C1gED9QgDj9h1i1gAF+AAQAQAAARAAIAAACQgRAAgQgCgAmeAAQARAAAQAAQgQACgRAAgAl9AAIAAAAg");
	this.shape_1.setTransform(318.2,970.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#697E9B").s().p("Amls4IJvAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtkrCvIhMAsQgXANgzALIgvAIg");
	this.shape_2.setTransform(417,1007.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0BAD3").s().p("Ah4MZIhMgsQksiviuktQitkrAAlcIAAjmQAAhbBBhBQBAhABbAAITfAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtksCvIhMAsQg4AghBAAQhAAAg4ggg");
	this.shape_3.setTransform(374.8,1007.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_4.setTransform(374.8,1001.7);

	this.instance_2 = new lib.ClipGroup_1_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(372.9,1003.8,1,1,0,0,0,109.8,109.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D3E9EB").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjMQBTjFCYiYQCYiYDFhTQDMhXDeAAQDfAADMBXQDFBTCYCYQCYCYBTDFQBXDMAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjMBXjfAAQjeAAjMhXg");
	this.shape_5.setTransform(374.8,1001.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_6.setTransform(587.1,1189.9);

	this.instance_3 = new lib.ClipGroup_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(587.1,1189.9,1,1,0,0,0,109.8,109.8);

	this.instance_4 = new lib.ClipGroup_1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(599.9,1202.1,1,1,0,0,0,122.6,122);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_7.setTransform(587.1,1189.9);

	this.instance_5 = new lib.ClipGroup_2_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(585.1,1191.9,1,1,0,0,0,109.8,109.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F4826").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDFBUCYCYQCYCXBTDFQBXDMAADfQAADghXDLQhTDFiYCYQiYCYjFBTQjLBXjggBQjeABjMhXg");
	this.shape_8.setTransform(587.1,1189.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicidhWjKQhYjRgBjlQABjkBYjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBYDRAADkQAADlhYDRQhWDKicCdQicCcjLBWQjRBYjlABQjkgBjShYgAmevXQi/BSiUCUQiVCThRC/QhUDHAADYQAADZBUDGQBRC/CVCUQCUCUC/BSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBQi/QBUjGAAjZQAAjYhUjHQhQi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_9.setTransform(159.8,1189.9);

	this.instance_6 = new lib.ClipGroup_4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(239.2,1138,1,1,0,0,0,191.2,163.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E8976B").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMABjfQgBjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDGBUCXCYQCYCXBTDFQBWDMABDfQgBDghWDLQhTDFiYCYQiXCYjGBTQjLBXjggBQjeABjMhXg");
	this.shape_10.setTransform(159.8,1189.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(10).p("EA6gAk3Mh0/AAAMAAAgp8QAAmdCfl6QCbltEZkZQEZkaFtiaQF5igGeAAMA1eAAAQGeAAF6CgQFtCaEZEaQEZEZCbFtQCfF6AAGdg");
	this.shape_11.setTransform(375.6,1098.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9DD89").s().p("Eg6fAk3MAAAgp8QAAmeCgl5QCaltEZkZQEakaFsiaQF6ifGdAAMA1eAAAQGeAAF5CfQFtCaEaEaQEZEZCaFtQCgF5AAGeMAAAAp8g");
	this.shape_12.setTransform(375.6,1098.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah4C5QhuioiXgRQCXgPBuipQB1i0ADj+QAED+B2C0QBtCpCXAPQAQAAARAAIAAACQgRAAgQgCQiXARhtCoQh2C1gED9QgDj9h1i1gAmeAAQARAAAQAAQgQACgRAAgAl9AAIAAAAg");
	this.shape_13.setTransform(318.2,970.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_6},{t:this.shape_9},{t:this.shape_8},{t:this.instance_5},{t:this.shape_7},{t:this.instance_4},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_6},{t:this.shape_9},{t:this.shape_8},{t:this.instance_5},{t:this.shape_7},{t:this.instance_4},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_13},{t:this.instance_1},{t:this.shape}]},66).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AvoB4QgxAAgjgjQgkgkAAgxQAAgxAkgiQAjgkAxAAIfRAAQAxAAAkAkQAjAiAAAxQAAAxgjAkQgkAjgxAAgAwgg3QgYAXAAAgQAAAhAYAXQAXAYAhAAIfRAAQAhAAAXgYQAYgXAAghQAAgggYgXQgXgYghAAI/RAAQghAAgXAYg");
	this.shape_14.setTransform(567.8,213.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#733A44").s().p("Aw3AUIAAgnMAhuAAAIAAAng");
	this.shape_15.setTransform(568.1,219.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AvQALQgEAAgDgDQgEgDAAgFQAAgEAEgDQADgDAEAAIegAAQAGAAACADQAEADAAAEQAAAFgEADQgCADgGAAg");
	this.shape_16.setTransform(567.8,208.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgdQgegdAAgqQAAgoAegeQAdgdApAAIfRAAQApAAAdAdQAeAeAAAoQAAAqgeAdQgdAdgpAAg");
	this.shape_17.setTransform(567.8,213.4);

	this.instance_7 = new lib.Path_3_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(567.7,213.4,1,1,0,0,0,110,10);
	this.instance_7.alpha = 0.66;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_18.setTransform(632.4,149.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgQQACgRAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAHgBALIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgLgCgHQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_19.setTransform(616.1,149.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA+B0IAAitIgBgNIgDgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAGgFIALgJIANgEIAMgCQANAAAJAHQAJAGAFANQAFgHAFgFIAMgIIANgEIAMgCQATAAAMAPQAKAOABAcIAACug");
	this.shape_20.setTransform(595.6,149.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_21.setTransform(578.7,145.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_22.setTransform(570.2,145);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_23.setTransform(558.5,149.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgGAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_24.setTransform(543.7,149.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAGgFAFgCIALgDIAIAAIALABIAJAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAHgBIAHgEIAEgFIADgHIAAiIQgDgHgFgFQgFgFgIAAg");
	this.shape_25.setTransform(527.6,145.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgGAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_26.setTransform(512,149.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_27.setTransform(496.4,146.6);

	this.instance_8 = new lib.Path_10();
	this.instance_8.parent = this;
	this.instance_8.setTransform(564,147.7,1,1,0,0,0,142.9,32.4);
	this.instance_8.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance_7},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.instance_8},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance_7},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},66).wait(1));

	// Layer 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AvoB4QgyAAgigjQgkgjABgyQgBgxAkgjQAigjAyAAIfQAAQAyAAAkAjQAiAjABAxQgBAygiAjQgkAjgyAAgAwgg4QgXAYgBAgQABAhAXAYQAYAXAgAAIfQAAQAiAAAXgXQAXgYAAghQAAgggXgYQgXgXgiAAI/QAAQggAAgYAXg");
	this.shape_28.setTransform(264.9,474.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#733A44").s().p("Aw2AUIAAgnMAhuAAAIAAAng");
	this.shape_29.setTransform(265.2,480.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AvPAMQgGAAgCgEQgEgDAAgFIAAAAQAAgEAEgDQACgEAGAAIegAAQAEAAAEAEQADADAAAEIAAAAQAAAFgDADQgEAEgEAAg");
	this.shape_30.setTransform(264.9,470);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B35F6A").s().p("AvoBkQgpAAgdgeQgdgdgBgpQABgoAdgdQAdgeApAAIfQAAQAqAAAdAeQAeAdAAAoQAAApgeAdQgdAegqAAg");
	this.shape_31.setTransform(264.9,474.9);

	this.instance_9 = new lib.Path_3_4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(264.9,474.9,1,1,0,0,0,110,10);
	this.instance_9.alpha = 0.66;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_32.setTransform(322.3,415);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_33.setTransform(306,415.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIAMgEIANgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_34.setTransform(285.5,415);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_35.setTransform(268.7,410.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_36.setTransform(256.4,411.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_37.setTransform(240,411.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHACQgFABgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAGIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_38.setTransform(223.2,415.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_39.setTransform(208.3,412.4);

	this.instance_10 = new lib.Path_11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(264.9,411.5,1,1,0,0,0,142.9,32.4);
	this.instance_10.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_9},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).to({state:[{t:this.instance_10},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_9},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},66).wait(1));

	// Layer 1
	this.instance_11 = new lib.Symbol9();
	this.instance_11.parent = this;
	this.instance_11.setTransform(593.1,329.1,1,1,0,0,0,126,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(67));

	// Layer 1
	this.instance_12 = new lib.Path_13();
	this.instance_12.parent = this;
	this.instance_12.setTransform(173.3,668.9,1,1,0,0,0,25.9,51.8);
	this.instance_12.alpha = 0.262;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E17B3A").s().p("ADrHfQACgSgBgeIgDg4QgFgzgDgUIgNhVQgIgrgMgyQgRhJgIgZQgRgwgWgxQgrhdg9hVQg4hRg7g5QgfgcgZgRQgYgSgXgLQgRgKgQgFIgMgDIAAgBIAMADQAOAEAUAKQAdAQATANQAbATAdAbQA9A3A5BRQA9BUAsBfQAYAvARAxIAPAyIAMAxQAMAzAHAqQAFAaACATIAGAoQADAhACAnIABA5QgBAegDASg");
	this.shape_40.setTransform(212,630.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F9D68E").s().p("AH0L9QiPgKhuhUQkzjvg4keQgJgwgCgvQgMAPgRAOQhgBUh9AaQicAhhhhfQg6g5gfhtQgih5AUh6QAWiOBbhrQBrh8C8g8QExhhEGBVQEWBZBvECQBTDBAVFOQAREhgfBxQgWBQgpBIQgUAkgQATQgjAJgvAAIgogBg");
	this.shape_41.setTransform(160.1,653.6);

	this.instance_13 = new lib.Path_3_5();
	this.instance_13.parent = this;
	this.instance_13.setTransform(206.8,645.2,1,1,0,0,0,19.3,36.4);
	this.instance_13.alpha = 0.262;

	this.instance_14 = new lib.Path_4_3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(253.8,670.5,1,1,0,0,0,102.4,76.8);
	this.instance_14.alpha = 0.262;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F9D68E").s().p("Am1NQQjLhGibh/Qich/hWilQhYisAAi7QAAi6BYisQBWikCciAQCbh/DLhGQDRhIDkAAQDlAADSBIQDKBGCcB/QCbCABWCkQBYCsAAC6QAAC7hYCsQhWClibB/QicB/jKBGQjSBIjlAAQjkAAjRhIg");
	this.shape_42.setTransform(262.9,654.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F9D68E").s().p("AhXGMQi0mdgJjtQgIjbBnicQAvhHA7giQA9gkA8ALQBxATANFLQAEBlgFCiQgFClABAfQAFCYA2EZQAaCMAaBuIi7AdQhYifhajPg");
	this.shape_43.setTransform(194.5,511.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F9D68E").s().p("AlgIdQAWhzAmiRQBMkgBPiVQBqjGB6h8QCLiMBRAvQBOAthDDcQg2C2hPB2QgwBGi+ELIi2D9g");
	this.shape_44.setTransform(339.2,525.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.instance_14},{t:this.instance_13},{t:this.shape_41},{t:this.shape_40},{t:this.instance_12}]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.instance_14},{t:this.instance_13},{t:this.shape_41},{t:this.shape_40},{t:this.instance_12}]},66).wait(1));

	// Layer 5
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C6DA92").s().p("AgUQbQhogDjQgzQjMgxjjhMQofi1ipiUQhihVAPhKQAKg1BMg9IA9guQAhgZAOgQQAngsg4gkQgagQjaAaQlzAtiPAMQs0BEoSivQkihejOk0Qi7kWhrmxQCtEMD3CLQHwEXI0CXQDSA4D/AwQA0AKFrA/QB/AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBuBegCBnQgBAzgYAgIBNgLQBigMBrgHQFYgUE3AyQCeAaCAAkQAaAICJAtQBEAXAqAAQA0ABBKgdQBBgYB3hDQCNhSBLgqQEWibCGAAQB9AABnBBQBGAsATAJQA5AdBDANQB/AZFajUQBOgwCshxQCBhUAjgRQAsgUBRAgQA2AUB0BCQCIBOBAAeQB4A5BfAQQC2AgFvAgQC4AQCTAKQgsCv55CjQoHAzpoArIoCAiQhqAJh+A1Qg0AVitBXQiMBHhdAfQh9Aoh0AAIgTAAg");
	this.shape_45.setTransform(216.4,744.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6FB77F").s().p("AkmAaIARg6ICyEJIiqlUIAghdICkGuIiDnuIBXgrIBJILIgjoCIBrAAIgjIKIBKnZIBAAaIhIFwIBdk+IA9AgIhsEqIB+kBIBAAYIi+FYIi8Aog");
	this.shape_46.setTransform(225,274.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EBA24D").s().p("Ag+gJIBuiSIAPE3g");
	this.shape_47.setTransform(200,292.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FAE485").s().p("Ahmh1IC0AdIAZDOg");
	this.shape_48.setTransform(185.9,300.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CD6C38").s().p("Ag+hmIB9CkIhkApg");
	this.shape_49.setTransform(200,301.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F2BC5F").s().p("AiRAsIEjh0IhvCRg");
	this.shape_50.setTransform(190.2,284.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EBA24D").s().p("AhsANIBniPIByEFg");
	this.shape_51.setTransform(194,263.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAE485").s().p("AhWiFICtAhIhLDqg");
	this.shape_52.setTransform(174.4,275.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CD6C38").s().p("AhGh1IDYB1IkjB1g");
	this.shape_53.setTransform(190.2,276.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F2BC5F").s().p("AiJAnIEThuIhnCPg");
	this.shape_54.setTransform(179.6,257.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CD6C38").s().p("AhTiDIDdCXIkTBvg");
	this.shape_55.setTransform(179.6,248.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FAE485").s().p("Ag2iwIBtBbIg2EGg");
	this.shape_56.setTransform(165.7,244.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EBA24D").s().p("Ag3ASIBvicIgvEVg");
	this.shape_57.setTransform(221.4,283.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CD6C38").s().p("AAOhxIBCB5IifBqg");
	this.shape_58.setTransform(214.3,296.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FAE485").s().p("Ag2ibIBtBUIheDjg");
	this.shape_59.setTransform(210.3,292.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F2BC5F").s().p("AhugFIDdhIIhwCbg");
	this.shape_60.setTransform(215.9,277.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EBA24D").s().p("AhVApIAVjGICWE7g");
	this.shape_61.setTransform(218.4,253.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CD6C38").s().p("Ag8heICrB0IjdBJg");
	this.shape_62.setTransform(215.9,267.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FAE485").s().p("AhRiCICjBIIgxC9g");
	this.shape_63.setTransform(201.6,263.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F2BC5F").s().p("AhcAbIC5h+IgVDHg");
	this.shape_64.setTransform(202.6,247.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EBA24D").s().p("AhFASIgShtIAQAJQAYATAoAsQA6BDAlAsg");
	this.shape_65.setTransform(203.1,228.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CD6C38").s().p("AhBhkICeBKIi5B+g");
	this.shape_66.setTransform(202.6,240.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FAE485").s().p("AhziSIDnBdIgbDIg");
	this.shape_67.setTransform(184.4,235.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F2BC5F").s().p("AhzgmIDVgQIASBtg");
	this.shape_68.setTransform(184.4,225.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FAE485").s().p("AhwhTIC8AjIAlCEg");
	this.shape_69.setTransform(165.9,307.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CD6C38").s().p("AhwhBIDhBiIi8Aig");
	this.shape_70.setTransform(184.9,308.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EBA24D").s().p("AhwATIAViIIDMDrg");
	this.shape_71.setTransform(184.9,300.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F2BC5F").s().p("AhoAhIDRhkIgVCHg");
	this.shape_72.setTransform(165.1,295.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FAE485").s().p("AhMilICZCAIgsDMg");
	this.shape_73.setTransform(151.3,282.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CD6C38").s().p("Ag9hlICmBlIjRBmg");
	this.shape_74.setTransform(165.1,288.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EBA24D").s().p("AhTAfIBFikIBiELg");
	this.shape_75.setTransform(167.3,275.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F2BC5F").s().p("AhugtIDdglIhEClg");
	this.shape_76.setTransform(154.7,270.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FAE485").s().p("AgigUQgCg7AEgeIAFgRIA+BbIg9CiQgEg4gEhbg");
	this.shape_77.setTransform(146.3,252.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CD6C38").s().p("AgvhQICeB9IjdAlg");
	this.shape_78.setTransform(154.7,257.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EBA24D").s().p("AhugDIAQiPIDNElg");
	this.shape_79.setTransform(182.3,235.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EBA24D").s().p("AhPAzIBmjjIA5Fhg");
	this.shape_80.setTransform(157.8,244.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F2BC5F").s().p("Ag+gTIB9g0IgQCOg");
	this.shape_81.setTransform(166.5,228.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F2BC5F").s().p("AhSAXICliIIhmDjg");
	this.shape_82.setTransform(151.9,237.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#61B26F").s().p("AgNEEQgSgagqgDQgsgDgxAbIgoAbIASghQAagnApgfQAigZA2AIQAaAEATAIQgQgPgdgPQg8gfhAgCQg3gChPATIhDASIA3gdQBCghAzgRQAzgRBRAXQAoALAdAPQgVgWgmgcQhNg4hWggQhWghhVAUQgbAHgXAKIgSAKIBAgyQBTgxBYAAQBagBBPA9QAnAfAWAeQgOgagFgmQgMhMAng6QAkg3BcgUQAugKAmABQgXAPgdAaQg5AzgWA1QgWA1AjBKQATAlAXAaQgCgYAHghQAOhEApgxQA7hGBZAAQAsAAAgAOQgnAJgsAUQhZApgbA8QgeA/AgBQQAPAnAWAbIkjCAQAAgNgJgOg");
	this.shape_83.setTransform(153.8,206);

	this.instance_15 = new lib.Path_2_3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(206.4,309.8,1,1,0,0,0,47.2,14.5);
	this.instance_15.alpha = 0.262;

	this.instance_16 = new lib.Path_3_6();
	this.instance_16.parent = this;
	this.instance_16.setTransform(582.7,414.7,1,1,0,0,0,81.6,12.8);
	this.instance_16.alpha = 0.262;

	this.instance_17 = new lib.Path_4_4();
	this.instance_17.parent = this;
	this.instance_17.setTransform(238.6,744.8,1,1,0,0,0,108.5,12.8);
	this.instance_17.alpha = 0.262;

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#A6BD55").s().p("EgsGAO1IBjhbQCEhxCfhtQH9leJTi0QD3hLFShcQEihRBrgiQCvg4CKhDQCUhJC3h5QC2h4G4iHQGgiAHHhSQHahXEYAHQE7AIgpCCQgqCDlvDuQlRDboSECQoED6oUDQQoqDZmMBkQtnDcqABGQj9Aci2AAQlGAAhfhag");
	this.shape_84.setTransform(773.1,699.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgFQg5gCAJgIIAMgGQAFgEgJgCQgUgGgWgBQgggCiYgDQhwgCmGAFIlwAGQifADg5AHQh6AQk/gEQhdgBgpgIQgagHgNgBIi2ACQisABgkgFQglgFAOgIIAXgHIiYgNIK+gTQH4gLHaABQQQABV1BEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_85.setTransform(70.1,696.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhUgMIg2gLQjfADhjgEQg6gDALgIIAKgGQAFgEgHgCQgVgGgWgBQgfgCiYgDQhxgCmFAFIlwAGQigADg5AIQh6APk/gEQhdgBgpgIQgZgHgNgBIi3ACQisACgkgFQglgFAPgIIAWgIIiYgNQIggQCegDQH3gLHbABQQQABV1BEQKKAfKhBAQFQAgDOAaI08g3g");
	this.shape_86.setTransform(134.4,690.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgEQg6gDALgIIAKgGQAFgEgIgCQgTgGgXgBIi3gFQhxgCmGAFIlvAGQigADg5AIQh6APk/gEQhdgBgpgIQgagHgNgBIi2ACQisACgkgFQgmgFAPgIIAXgIIiYgNQIfgQCfgDQH3gLHbABQQAABWFBEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_87.setTransform(198.3,681.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#A6BD55").s().p("ADZPxQmwgjklh+QqFkXnAlzQnwmag7l4QAhgmA8g0QB4hqCJhNQG4j2HBCHQC7A4D8BcQDZBPBRAVQCFAhBugQQB5gQCchQQCchQFNBgQE7BbFHDMQFWDVC5DpQDQEFhADOQhCDSk5CYQkfCLmsA9QkLAmkKAAQiVAAiVgMg");
	this.shape_88.setTransform(8.2,652.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#61763D").s().p("EAl9ADLIiogUIgkAEQgnADhWgIQkqgehqgbQgggIhXgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDggAWgl4gCiIH6gCQJzAGJZAkQUXBNOzBoQG4AwHLA/QC/AZHFBCIiNgDIAUAKQANAJgjABIgEABQgmAAiWgTg");
	this.shape_89.setTransform(940.7,515.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgJQkjgchxgcQgggIhXgNIhQgMQp5hUimgNQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJZAjQUNBNO9BpQG0AwHPA+IKEBbIiNgCIAUAKQANAJgkABIgDABQgnAAiWgTg");
	this.shape_90.setTransform(882.3,501.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#61763D").s().p("EAl9ADLIiogUIglAEQgmADhWgJQkkgchwgcQgggIhXgNIhQgMQp5hUimgOQiKgMgfgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJaAjQUFBNPFBoQG2AxHMA+QC8AaHHBBIiMgCIAUAKQANAJgkABIgDABQgmAAiWgTg");
	this.shape_91.setTransform(824.5,487.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgIQkqgehqgbQghgIhWgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh9gOIhxgOQgMAEgnACQhPADiLgOUgDhgAWgl3gCiIH6gCQJyAGJaAkQUJBMPBBpQG2AwHNA+QCmAXHeBFIiNgDIAUAKQAMAJgjABIgDABQgnAAiWgTg");
	this.shape_92.setTransform(744.4,472.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#61763D").s().p("Eg9wAIFQg6gaAJg+QAEgTAJgVIAJgRIjgg3QK2j4DshKQKejSKJh5QK9iDNDgnQNcgpP4A4QOfAzPqEZQH2CME7CBQuggTvLgOQ+VgcjSAZQjQAaiDg9QgogUgcgYIgUgWQhLAVhcATQi4AohZgFQhSgFAEg4IAGgwQACgbgOgOIgcgaQgOgKgZgDQgtgEjUASQicANoMCPIntCNQg1AQg+AYQh7AwgrAqQhVBTiwA0QiBAmjEAZQiAAPhCgpQgPgJgWgVQgQgQgKAAQgLgBhKAUIihApQihAnhMAAQgiAAgRgIg");
	this.shape_93.setTransform(377.2,302.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8CAC50").s().p("EgmdApkQxvjbtsmPQtsmQnfoGQnyoYAApMQAApLHyoYQHgoGNrmQQNsmPRvjbQSXjjUGAAQUHAASXDjQRvDbNsGPQNsGQHgIGQHxIYAAJLQAAJMnxIYQnhIGtrGQQtsGPxvDbQyXDj0HAAQ0GAAyXjjg");
	this.shape_94.setTransform(415.1,537.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#917556").s().p("AnmTjQgfgYgJg6QgHgxAHhfQAhkYAMjQQAOkCgxkUQg/kdgUiBQgdi3BKjbQBEjJB6iTQAZgdCcgZQCLgWC+gLQC7gKCCAGQCPAGACAZQAEAvh+AxQhmAokMBEQhyAdhCA0Qg4AqgkBGQgQAfgnBqQgjBeglA9QgsBKgBBQQAAA6AaBiQAoCUAHAnQAYB6gEB6QgMExhVF+QhRFog7AAQgHAAgHgFg");
	this.shape_95.setTransform(345.9,933);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#74542E").s().p("AMSY+QkPifh2kGQg+iKg0l9QgdjXgzoIQgunggci3Qgukig3gIQjYgjhpHkQgjCjgRDJQgNCRABBQQAECvgzFOQhCGyhqCnQhmCgixAzQg4AQg4ADIgtAAQhbo6gajkQgcj7AFoGQAGpwBHi7QASgwAqiHQAchbAcgtQAmg+BFguQBNgyCLgwQDwhTEmgdQCbgPDXgLQCGgOCjBAQCvBEB0B+QCjCwAtD9QBAFtioIgQhWEWAND7QALDABJDKQAqByBVC+QA/CcgHBmQgPDRg3BWQgbAqgZABQhvgbiHhPg");
	this.shape_96.setTransform(380,953.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#644725").s().p("EgTKAnDQgthJgHhDQgHg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBPDYA2HOQAVCvgPC9QgKCPglDKIhAFeQgjDRgKCsQgKCyA4EGQAfCNBaFCQBQEcAVCBQAhDFguBbQguBdiwAeQiGAWkHgKQk5gRiegEQkUgHinAcQiyAei/CtQiDB2iuDhQjBD7gkAkQg9A/goAAQgZAAgRgag");
	this.shape_97.setTransform(380,1006.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#917556").s().p("AHpbTQgvhWggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAdQgnALieBTQiCBEhCgBQhhgCgjh/QgtingZi6QgVieAAh3QAAhYHMASQDmAJDlAaIBiAaQB1AiBjAmQE+B5ARB0QAPBkgPCOQgKBWgjDEQhOG1AAEWQAAE7A2GiQAcDaApENQAFAsAVBrQAVBpAHA+QAWDQhMCkQhJCdhKAGIgGAAQg7AAg2hgg");
	this.shape_98.setTransform(140.8,973.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#74542E").s().p("EAIaAkwQhsgRg1gwQgRgPgJgQIgFgOQgggNgfgnQg+hOAGh+QAFh3hRhgIhNhUQgvg1gcgzQgyhahwoEQh4orgjhcQgYg+hNiRQhwjQgphUQjYmxhhmhQhynmgTk2QgGhlADhfQAFhYAAggQAAhQP7hQQH+goH+gYIgyFhQgzF3AABtQAABXAHITQAFH6gMBUQgNBnAADvQAADwANCDQAFArAcDNQAcDiAPC1QAvI+hPD9QhaEhhqBqQhMBMhpAAQgYAAgbgEg");
	this.shape_99.setTransform(151.7,1019.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#917556").s().p("AkXL0Qg8gGAQmJQAJjNADhVQAEiOgOgeQgNgdghgiIg8g4QhHhGALhJQAFgiAggJQAXgGA6AEQBWAGAbAAQBKAAA9gQQBegZEJiwQB3hPAsgYQBIgpAOAQQAXAajbELQj/E1giBBQgZAygmCVQgWBXguDFQhYFlg8AAIgCAAg");
	this.shape_100.setTransform(625.3,889.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#74542E").s().p("AqpWMQg2gpgZjSQgUimADjOQABhGAsi7IBYljQBunJhCgrQhbg7gwh8Qg1iJAWimQATiSBshqQA2g0AzgYIAWAIQAgAIAuADQCUAJDvgxQDugxE8h2QCeg7BugxIAHBRQABBvgaCXQgPBUg1BHQgqA5hTBEIijB+QhpBUhLBNQiUCbiiIBQgoB+hJEAQg6DMgWA6QhRDTh2DOQh7DUg4AAQgKAAgHgGg");
	this.shape_101.setTransform(636.5,927.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#644725").s().p("EgOJAgiQgkgZgbhIQhAioAYkJQAKhqARmVQAapRAKjIQA3w+BKkEQBNkMCGi8QBDheA0gpIBHAEQBaADBigFQE3gQEOhaQENhZDfhzQBwg5A5gnIgYCyQgjDbgzDKQijKGkGDsQiSCDhYDPQhFCkgxD/QgdCVgwE4QgwEYg8C2Qh8F6kvFAQhhBmh2BkQg+A0hIA5QgTARgUAAQgQAAgRgMg");
	this.shape_102.setTransform(631.3,983.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg4hih5o0QiDpfgmhlQhFi3ihkjQinkvknnXQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_103.setTransform(134.4,961.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#523821").s().p("EhKDAj2QjIAAi3hOQixhLiJiJQiJiJhLixQhOi3AAjIMAAAgo1QAAjIBOi3QBLixCJiJQCJiJCxhLQC3hODIAAMCUHAAAQDIAAC4BOQCxBLCICJQCJCJBLCxQBOC3AADIMAAAAo1QAADIhOC3QhLCxiJCJQiICJixBLQi4BOjIAAg");
	this.shape_104.setTransform(431,860.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},66).wait(1));

	// Layer 6
	this.instance_18 = new lib.Path_14();
	this.instance_18.parent = this;
	this.instance_18.setTransform(749.7,181.8,1,1,0,0,0,195.2,33.5);
	this.instance_18.alpha = 0.77;

	this.instance_19 = new lib.Path_1_9();
	this.instance_19.parent = this;
	this.instance_19.setTransform(101,197.6,1,1,0,0,0,153,26.3);
	this.instance_19.alpha = 0.77;

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-304.3,0,304.4).s().p("Eg6lAuQMAAAhdzMB1LAAAMAAABfHg");
	this.shape_105.setTransform(374.8,284.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.instance_19},{t:this.instance_18}]}).to({state:[{t:this.shape_105},{t:this.instance_19},{t:this.instance_18}]},66).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229,-20,1446.1,1359);


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
		var canvas = this
		this.energyLog.addEventListener("click",energyLog)
		function energyLog(){
			canvas.parent.parent.parent.gotoAndPlay("energyLog");
			
			
		}
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

	this.energyLog = new lib.Tween19();
	this.energyLog.parent = this;
	this.energyLog.setTransform(-1.2,-457.7);
	this.energyLog._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({_off:true,x:-1.2,y:-457.7,alpha:1},11).wait(1).to({_off:false,x:-2.5,y:1.7,alpha:0},11).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.energyLog).wait(1).to({_off:false},11).wait(1).to({_off:true,x:-2.5,y:1.7,alpha:0},11).wait(2));

	// Layer 5
	this.instance_8 = new lib.Tween20();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1.2,3.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween21();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1.2,-300.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({_off:true,y:-300.3,alpha:1},11).wait(1).to({_off:false,y:3.7,alpha:0},11).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},11).wait(1).to({_off:true,y:3.7,alpha:0},11).wait(2));

	// Layer 4
	this.instance_10 = new lib.Tween16();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-1.2,-2.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween17();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-1.2,-144.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({_off:true,y:-144.2,alpha:1},11).wait(1).to({_off:false,y:-2.2,alpha:0},11).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},11).wait(1).to({_off:true,y:-2.2,alpha:0},11).wait(2));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgHxA6oMAAAh1oIPjAAMAAAB1og");
	var mask_graphics_12 = new cjs.Graphics().p("EgHxA99MAAAh75IPjAAMAAAB75g");
	var mask_graphics_24 = new cjs.Graphics().p("EgHxA99MAAAh75IPjAAMAAAB75g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-0.2,y:-377.7}).wait(11).to({graphics:mask_graphics_12,x:-0.2,y:-394.5}).wait(12).to({graphics:mask_graphics_24,x:-0.2,y:-394.5}).wait(2));

	// Layer 2
	this.instance_12 = new lib.Tween23("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,406,1.054,1.054);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({scaleX:1,y:-407},11).wait(1).to({startPosition:0},0).to({x:-0.1,y:379.2},11).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.8,-53.7,104.4,104.4);


(lib.stagecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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

	this.instance_3 = new lib.Path_1_8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(200.8,66,1,1,0,0,0,40.2,32.4);
	this.instance_3.alpha = 0.66;

	this.instance_4 = new lib.Path_2_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(630.8,66,1,1,0,0,0,40.2,32.4);
	this.instance_4.alpha = 0.66;

	this.instance_5 = new lib.Path_3_7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(571.1,66,1,1,0,0,0,40.2,32.4);
	this.instance_5.alpha = 0.66;

	this.instance_6 = new lib.Path_4_5();
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

	this.text = new cjs.Text("300", "34px 'Fjalla One'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 50;
	this.text.parent = this;
	this.text.setTransform(682.8,160);

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

	this.instance_7 = new lib.Path_5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(640,181.1,1,1,0,0,0,79,19.9);
	this.instance_7.alpha = 0.66;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAOCOIAAgzIhdAAIAAgXIBSjRIAzAAIAADGIAaAAIAAAiIgaAAIAAAzgAgjA5IAxAAIAAgqIAEhqIgFAAg");
	this.shape_34.setTransform(412.5,931.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgSAYQgHgIAAgQQAAgRAHgHQAHgIALAAQANABAGAHQAHAJAAAPQAAAPgHAJQgGAJgNAAQgLAAgHgJg");
	this.shape_35.setTransform(391.7,942.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_36.setTransform(380.3,934.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgyCOIAAkbIArAAIAAD5IA6AAIAAAig");
	this.shape_37.setTransform(367.7,931.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_38.setTransform(448.3,884.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_39.setTransform(432,884.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIAMgEIANgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_40.setTransform(411.5,884.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_41.setTransform(394.7,880.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_42.setTransform(382.4,881.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_43.setTransform(366,881.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgKAIgHQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_44.setTransform(349.2,884.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_45.setTransform(334.3,882);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D0D2D3").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAFQAFAFAEAKQAEAJADAOQACANAAATIAABGQAAASgCAOQgDANgEAJQgEAKgFAFQgGAFgFADIgLAEIgJAAQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHABIAIgBQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_46.setTransform(439.2,1003.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D0D2D3").s().p("AgNCOQgHgBgIgCQgHgEgHgFQgHgGgGgKQgFgKgDgPQgEgPAAgVIAAjDIAsAAIAADPIABAWQABAIADAGQADAFAFACQAEACAGAAQAGAAAFgCQAFgCADgFQADgGABgIIACgWIAAjPIArAAIAADDQAAAVgEAPQgDAPgFAKQgGAKgHAGQgHAFgIAEQgHACgIABIgNABg");
	this.shape_47.setTransform(421.7,996.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D0D2D3").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_48.setTransform(401.1,995.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D0D2D3").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAAOIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_49.setTransform(389.2,999.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D0D2D3").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_50.setTransform(374.2,999.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D0D2D3").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAAOIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_51.setTransform(359.4,999.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D0D2D3").s().p("AgyCOIAAkbIArAAIAAD5IA6AAIAAAig");
	this.shape_52.setTransform(346.3,996.8);

	this.instance_8 = new lib.Path_1_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(391.9,996.8,1,1,0,0,0,98.5,33.9);
	this.instance_8.alpha = 0.68;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_7},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.text},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 16
	this.menu_pine = new lib.menu();
	this.menu_pine.parent = this;
	this.menu_pine.setTransform(95,1242.4);

	this.timeline.addTween(cjs.Tween.get(this.menu_pine).wait(1));

	// btnLayer
	this.arenaBtn = new lib.arena();
	this.arenaBtn.parent = this;
	this.arenaBtn.setTransform(533,1240.4,1,1,0,0,0,52.2,54.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BD4440").s().p("ABfERQgJgCgEgIQgFgIACgJIAeh1QADgJgFgIQgFgIgJgCIjtg7QgIgCgGgHQgFgIAAgIIAhiKIDJiZIAAABIhJEvICVAmQAJADAFAHQAFAIgDAJIgoChQgCAJgJAFQgFADgGAAIgGgBg");
	this.shape_53.setTransform(673.8,1249.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BD4440").s().p("AAABbIh0hIQgEgBADgIQAFgKAAgHIgBgIIALgIIBXAzQAIAGAIgDQAJgCAFgIIA/hmQAFgJAJgCQAJgCAIAFQAIAFACAIQACAKgFAHIhWCNQgFAJgJACIgFABQgGAAgFgDg");
	this.shape_54.setTransform(693.2,1222.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EF5046").s().p("AhfBhQgpgpAAg4QAAg4ApgoQAognA3AAQA4AAAoAnQApAoAAA4QAAA5gpAoQgoAng4ABQg3gBgogng");
	this.shape_55.setTransform(676.2,1200);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EF5046").s().p("AgzCBIA3jnIhfgFQgKgBgGAHQgHAGgBAJIgGB4QgBAKgGAGQgHAGgKgBQgJAAgGgHQgGgHAAgJIAJilQABgJAGgGQAHgHAJABICiAIQACAAA7ANIA7ANQAHACAGAGQAIAJgDANIg8D2g");
	this.shape_56.setTransform(664.3,1230.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EF5046").s().p("AAABbIh0hIQgEgBADgIQAFgKAAgHQAAgIgDgLQgDgGAEABIBjA7QAIAGAIgDQAJgCAFgIIA/hmQAFgJAJgCQAJgCAIAFQAIAFACAIQACAKgFAHIhWCNQgFAJgJACIgFABQgGAAgFgDg");
	this.shape_57.setTransform(693.2,1222.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BD4440").s().p("AAeBZIiUhMQgIgEgDgJQgDgIAEgIQAEgJAJgCQAJgDAIAEIBsA2QAIAEAJgDQAJgCAFgJIAag1QAbg3ACAAQACAAAEAGQAFAIAFADIANAHQAGADAAACQAAACgeA7IgeA6IgKAVQgFAIgJADIgHABQgFAAgFgCg");
	this.shape_58.setTransform(646.2,1261.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFDD7B").s().p("AlHFIQiJiHAAjBQAAi/CJiJQCHiIDAAAQDAAACJCIQCICJAAC/QAADBiICHQiJCIjAAAQjAAAiHiIg");
	this.shape_59.setTransform(669.1,1242.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AlxFxQiYiZAAjYQAAjYCYiYQCZiZDYAAQDZAACYCZQCZCYAADYQAADYiZCZQiYCZjZABQjYgBiZiZg");
	this.shape_60.setTransform(669.1,1242.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BD4440").s().p("AiEBSIEJkfIgGAZQgLAjgUAxQgfBIhBB6QgiA9gbAvg");
	this.shape_61.setTransform(404.7,1220.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EF5046").s().p("AhiCKQhjjAAAhDQAAhRA6g5QA6g5BRAAQBSAAA6A5QA6A5AABRQAABDhjDAQgxBggyBTQgwhTgyhggAhYjFQglAkAAA0QAAAzAlAlQAlAkAzAAQA1AAAlgkQAlglAAgzQAAg0glgkQglglg1AAQgzAAglAlg");
	this.shape_62.setTransform(398.4,1209.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhaBbQglgmAAg1QAAg0AlgmQAmglA0AAQA1AAAlAlQAmAmAAA0QAAA1gmAmQglAlg1AAQg0AAgmglg");
	this.shape_63.setTransform(398.5,1198.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3EBCA4").s().p("AiaBLIiphLICphKIE1AAICpBKIipBLg");
	this.shape_64.setTransform(398.5,1240.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhkAZIhIAtIh6i1IJNAAIh6C1IhJguIhkBYg");
	this.shape_65.setTransform(398.5,1254);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3EBCA4").s().p("AiJAMIgTAcIitj4IKTAAIitD4IgTgcIiKDFg");
	this.shape_66.setTransform(398.5,1261.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFDD7B").s().p("AlHFIQiIiHAAjBQAAi/CIiJQCIiIC/AAQDAAACJCIQCHCJAAC/QAADBiHCHQiJCIjAAAQi/AAiIiIg");
	this.shape_67.setTransform(398.5,1242.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AlxFxQiZiZAAjYQAAjYCZiYQCaiZDXAAQDZAACYCZQCaCYgBDYQABDYiaCZQiYCZjZABQjXgBiaiZg");
	this.shape_68.setTransform(398.5,1242.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.arenaBtn}]}).wait(1));

	// barLayer
	this.instance_9 = new lib.Symbol13_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(667.5,955.3,1,1,0,0,0,19.9,242.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Layer 18
	this.instance_10 = new lib.clouds_group_pine();
	this.instance_10.parent = this;
	this.instance_10.setTransform(456.4,180.7,1,1,0,0,0,456.4,180.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Layer 4
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6FB77F").s().p("ArnDEICGhJIHxCPInjjDIB4hMIHRDgInFkeICGhKIIaF9InjnKIEBhUIE0H6IjgohIDwgbIBAIxIBAoQICTA9IiSHCIDemBIBWApIkiGqIniBvg");
	this.shape_69.setTransform(115.1,574.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6FB77F").s().p("AmnBRIAhgrIDWCCIjBi0IA7hFICrDwIhzkiICAgxIAeFDIAXlIICXgbIh7FeICrlHIBXABIiZEDICvjoIBRAGIjBDdIDWjIIBXAAIk8EQIkQBLg");
	this.shape_70.setTransform(226.6,720.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CCCCCC").s().p("AjuAGQAJg0A2hPIA1hEICigZIA2AiQA7AoAWAfQAWAfAjBxQARA4ANAzIoLBRQAIiAAPhVg");
	this.shape_71.setTransform(206.7,722.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E6E6E5").s().p("Ak2CiQAPiAAOgcQAMgcAsh9IAph3IAvgHQA4gHAzgCQCfgGAnAzQAmAzA/C+QAfBfAXBVIqGBkQAGg6AHhAg");
	this.shape_72.setTransform(206,716.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CCCCCC").s().p("AjnEvQgEjDAIhAQAJg/Awi4IAvisQgCgUAFgXQAJgvAjgQQAjgPAeAwQAOAYAIAcIgFBmQgCBtAPAkQAPAlAyA/QAdAkBCBOQApAyAKCbQAGBNgDBEInLBGQgDhUgChig");
	this.shape_73.setTransform(166.9,692.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E6E6E5").s().p("AlFFbQAAi+AWhlQAKgsAKhmQAMh6AIgxQAfjNBSglQBTglBhBFQAxAiAhAqIgDCQQAGCVAuAbQAvAbAlA/QATAgAKAaIA1FYIqJBkQgEhLABhfg");
	this.shape_74.setTransform(167,691.2);

	this.instance_11 = new lib.Path();
	this.instance_11.parent = this;
	this.instance_11.setTransform(202.7,740.5,1,1,0,0,0,45.8,10.8);
	this.instance_11.alpha = 0.41;

	this.instance_12 = new lib.Path_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150.7,740.4,1,1,0,0,0,45.8,10.8);
	this.instance_12.alpha = 0.41;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6FB77F").s().p("AmnBRIAigrIDVCCIjBi0IA7hFICsDwIh0kiIB/gxIAfFDIAXlIICXgaIh7FeICrlIIBXABIiZEDICvjoIBRAGIjBDdIDWjHIBWAAIk7EQIkQBJg");
	this.shape_75.setTransform(157.5,911.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EBA24D").s().p("AhDgWICHiSIgTFRg");
	this.shape_76.setTransform(139.8,914.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FAE485").s().p("AhhiJIC/AzIAEDgg");
	this.shape_77.setTransform(123.6,920.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CD6C38").s().p("Ag6hvIB0C/IhwAhg");
	this.shape_78.setTransform(138.9,923);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F2BC5F").s().p("AijAVIFHhdIiICRg");
	this.shape_79.setTransform(130.2,904.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EBA24D").s().p("AhugCIB+iQIBfElg");
	this.shape_80.setTransform(135.6,882.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FAE485").s().p("AhbiVIC3A3IhqD0g");
	this.shape_81.setTransform(115.3,891.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CD6C38").s().p("Ag4h6IDcCWIlHBfg");
	this.shape_82.setTransform(130.2,894.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F2BC5F").s().p("AiaARIE1hYIh/CPg");
	this.shape_83.setTransform(121.7,874.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CD6C38").s().p("AhCiKIDdC8Ik1BZg");
	this.shape_84.setTransform(121.7,862.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FAE485").s().p("Ag1jCIBrBwIhXEVg");
	this.shape_85.setTransform(109.5,857.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EBA24D").s().p("AhEAJICJicIhQEmg");
	this.shape_86.setTransform(164.4,906.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CD6C38").s().p("AAjh1IA5CJIi3Big");
	this.shape_87.setTransform(154,919.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FAE485").s().p("AgsioIBsBmIh/Drg");
	this.shape_88.setTransform(151.1,914.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F2BC5F").s().p("Ah7gXID3g2IiKCbg");
	this.shape_89.setTransform(159,899.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EBA24D").s().p("AhWAiIAtjUICAFlg");
	this.shape_90.setTransform(162.7,873.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CD6C38").s().p("AgwhjICsCQIj3A2g");
	this.shape_91.setTransform(159,887.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FAE485").s().p("AhTiSICnBfIhKDGg");
	this.shape_92.setTransform(145.6,882.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F2BC5F").s().p("AhqALIDVh0IgtDTg");
	this.shape_93.setTransform(147.9,866.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EBA24D").s().p("AhNALIgHh3IAQAMQAYAWAmA1QA4BPAjAzg");
	this.shape_94.setTransform(150.1,845.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CD6C38").s().p("Ag3hqICiBhIjVB0g");
	this.shape_95.setTransform(147.9,856.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FAE485").s().p("Ah3ipIDvB+IgzDWg");
	this.shape_96.setTransform(130.3,850.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F2BC5F").s().p("Ah3g+IDoAGIAHB3g");
	this.shape_97.setTransform(130.3,839.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FAE485").s().p("AhwhmIDIA7IAZCSg");
	this.shape_98.setTransform(101.3,925.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#CD6C38").s().p("Ah0hJIDpCDIjPAQg");
	this.shape_99.setTransform(121.7,928.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EBA24D").s().p("Ah0AHIAmiQIDDETg");
	this.shape_100.setTransform(121.7,920.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F2BC5F").s().p("Ah2ANIDthVIgmCQg");
	this.shape_101.setTransform(101.9,913.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FAE485").s().p("AhLi5ICXCdIhGDWg");
	this.shape_102.setTransform(89.4,896.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CD6C38").s().p("AgxhrICoCAIjtBWg");
	this.shape_103.setTransform(101.9,904.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EBA24D").s().p("AhUAVIBbiqIBOErg");
	this.shape_104.setTransform(105.4,891.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F2BC5F").s().p("Ah5hGIDzgPIhcCrg");
	this.shape_105.setTransform(94,885.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FAE485").s().p("AgigWQAEhBAIgfIAIgSIA5BpIhVCoQACg9AGhig");
	this.shape_106.setTransform(86.1,864.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CD6C38").s().p("AgjhUICdCaIjzAOg");
	this.shape_107.setTransform(94,869.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EBA24D").s().p("AhugRIAhiYIC8FUg");
	this.shape_108.setTransform(126.1,850.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EBA24D").s().p("AhOApICIjrIAVGFg");
	this.shape_109.setTransform(98.3,857.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F2BC5F").s().p("AhGgjICNgoIghCXg");
	this.shape_110.setTransform(111.2,841.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F2BC5F").s().p("AhgANIDBiCIiHDrg");
	this.shape_111.setTransform(94.3,849.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#61B26F").s().p("Ag3ELQgQgfgugIQgugIg4AYIguAZQAGgOAQgTQAhgnAwgdQAngXA4AOQAdAHAUALQgQgSgfgTQg8gohEgKQg8gIhWALIhLANIA/gaQBLgcA5gNQA4gNBVAiQApARAgATQgVgagngiQhMhFhagtQhZgsheAMQgdAEgbAJIgUAIIAUgPQAagRAdgOQBegsBgAJQBgAKBQBKQAnAmATAjQgKgegDgqQgEhTAvg6QAvg4BkgLQAzgGApAGIg8AmQhEAxgeA3QgeA2AfBVQAQApAVAfQACgaAKgjQAXhIAxgwQBIhGBgALQAwAFAhATQgrAEgyARQhkAigkA+QgnBBAYBZQANAtAUAfIlIBqQABgOgIgQg");
	this.shape_112.setTransform(100.6,816.2);

	this.instance_13 = new lib.Path_90();
	this.instance_13.parent = this;
	this.instance_13.setTransform(135.5,934.3,1,1,0,0,0,51.2,13.2);
	this.instance_13.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.instance_12},{t:this.instance_11},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]}).wait(1));

	// Layer 3
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#386741").s().p("AhmB4QABgJgBgMQgBgXgLgOQgKgOgPgJIgMgHIATABQAWACASAFQARAEANANQAHAHADAGQADgHABgKQADgUgHgRQgHgRgMgOIgJgMIAaARQAbARAGAJQAKAMACAHQAJgvgJggQgGgTgLgbIgKgXIAOALQAQAQAIATQANAfACARQAEgrATgbQALgRAVgNIASgKIgNAvQgNAyABAUQABASAMAbQAGANAGAJQAKgdANgKQAJgHAQgIIAOgFIgNARQgOAWgDAUIgKBLg");
	this.shape_113.setTransform(174.9,465.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F1B64D").s().p("AQLN+QhohBhZhVQhVhSguhNQhUiMnfkuQm+kZkdh0QlTiJl/igQncjIhrg2Qg8gegZgsQgagsAXgkQAYgnBMgNQBWgPCKAWQCQAYCCA0QBXAiCMBLQCkBXBQAkQCaBGCqAwQClAvFDBEQC8AoGcBTQMICeDbBdQETB1CNCjQA8BGAKA1QAKA2gsATQhCAciygRQjYgUhRAJQg+AHAiBcQAMAgBZCoQBKCKAJBFQAOBjhhATQgnAHgqAAQinAAjJh8g");
	this.shape_114.setTransform(238.5,916.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F6D1A3").s().p("AnkIqQhBgpgug4Qgug4gPg4QgchlBbh0QBKheCjh0QCth7FkjGQGXjhBNALQAiAFiiBtQlODhgoAdQomGLCVCeICSCWQA1A3AHAUQAIAWgiAPQgNAGhnAfQgxAPgxAAQhmAAhmhAg");
	this.shape_115.setTransform(46.3,723.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F1B64D").s().p("Av8MyQkZh1gci2QgbivDOkNQCwjkKCkhQFuimKGjpQCvg/D8gHQB0gEA7ARQBDASgWAnQgSAikFCfIotFUQscHzgVDEQgMBvAkA9QAZAqA6AbQBGAgAHAHQAdAagUA4QgYBAhYAqQhWAph/AMQg2AFg1AAQjlAAjihfg");
	this.shape_116.setTransform(91.7,707.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F6D1A3").s().p("AjoGLQgmgZg1hLQg4hQgngfQhCg1higDQhZgChnANQhkAPglACQg9AFgfgUQgkgWgShCQggh3CbgaQA7gKBogBIC9ACQBVABAwgzQAcgdAjhRQAjhRAegfQAygyBYgBQBYgBBLAeQAyAUBBAuQBLA0AaANQA5AdA8gCQBSgDDPgkQDHgkBwAAQBHAAAqBSQAlBLAABrQAABqgmBIQgpBRhHgDQhAgDgvgoQgKgJhAhLQgvg2gzgYQhIgghtAGQhsAGhIBAQgwArg4BjQg+BuggAlQg+BHhZAOQgZAEgWAAQg9AAgsgeg");
	this.shape_117.setTransform(458.4,1104.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F1B64D").s().p("AlDKZQg9hCg1iTIgph4QgXhEgSgnQgyhshDgJQhGgKgfAtQgQAYgUBVQgUBRgcAkQgsA4hbAGQhfAGhQiWQhHiGgijKQghjHAXiSQAYifBTgKQAvgGA4AhQAXANBRA+QBFA1AyAWQBIAgBKgHQBJgGARg2QAGgVAAhgQgBhRAcgqQApg9BwgRQBxgSBjAqQBFAeBVBJQBtBgAUANQBIAxBEgHQBFgGBEgZQAfgMBWgnQCXhHCKgGQC0gHCLC7QB9CoAYDZQAJBZgkBGQgbAyg+A5QhZBQgKALQgwA3gHA7QgSCYgzBPQg8BehxADQg0ABgah7QgGgdgej2QgYi+gkheQg1iEhggNQhfgNg4B3QgdA/g0DWQgwDKgyBZQhLCLh+ANQgQABgQAAQhrAAhJhQg");
	this.shape_118.setTransform(465.3,1115.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F6D1A3").s().p("AjpEVQg0grAlhmQA4h5ANg6QAIgkACgxIADhLQAGhNAvgXQAkgSARApQALAbAJBMQAJBWAIAdQAPA4AfAEQAgAFAHgXQAEgNgDgqQgEgpAIgTQALgdAngEQApgFAkAzQAfAuAUBMQATBHABBDQABBFgUAcQgoA6i8ATQg0AGgrAAQhvAAgtglg");
	this.shape_119.setTransform(258.8,544);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F1B64D").s().p("AmqLbQhlgOgbgcQgsguBDi5IA5iWQAghUAGgtQAFgmgBhcQAAhqACgqQAMiuBcgGQAygDAdAyQAQAbAaBXQAYBRAYAiQAkA0A9AAQB5ABAmiaQAYhjgHjGQgGieALg9QANhSA0gfQAqgZAbBXQAPAyAWB4IAcCAQAOAyATADQAKABgCgqIgHhhQgHiRAvgMQAygMAOCMIAJCCQAGBTAIAtQAOBNA0DyQAoDYgWA6QgaBDg2AEQgyAEgpgxQgQgUgGhQIgIigQgMjag4gRQhBgUgPBMQgHAhAEBmQAAAOANBRQANBVAEA7QAMDHhPBcQhZBnknASQgrACgoAAQhIAAg/gIg");
	this.shape_120.setTransform(275.5,508.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#61B26F").s().p("AinC9QAFgJAAgNQAAgagdgTQgdgSgugBIgpADIAbgQQAjgRArgFQAigFAjAbQARANAKAOQgGgRgOgXQgcgtgrgbQgmgWhAgSIg3gNIA0ABQA8ACAsAIQArAIAuAwQAYAYAOAWQgFgYgPgjQgchFgvg5Qgug5hFgUIg7gIIBDgJQBPgDA/AjQA/AkAdBKQAPAlACAeQACgYAMgdQAYg6A1gZQAygYBKAWQAkALAbAQQgYABgfAHQg/ANgnAdQgmAcgIBCQgDAiAEAbQAJgRAUgWQAngqAzgRQBIgaA+AjQAgAQAQAXQgfgJgogDQhQgGgtAfQgyAigNBEQgGAiADAbg");
	this.shape_121.setTransform(179.1,458.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#386741").s().p("AgECKQgVgMgRABQgRABgQAGIgMAGQASgYAWgTQAOgMASgDQAJgCAGABQgEgGgHgHQgPgOgSgEQgSgDgTAAIgPABIAdgMQAfgMAKAAQAQgBAGACQgIgJgNgKQgZgTgTgGQgUgGgcgGIgZgFIASgFQAVgFAVAEQAiAHAPAIQgJgHgJgLQgUgVgHgUQgHgTAAgYIADgVIAeAmQAiAnARAKQAaARAsACQgSgZgBgRQgBgLACgRIADgPIAIAVQAKAYAPAOQAXAWAhAcIiDCrIgQgNg");
	this.shape_122.setTransform(135,366.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#61B26F").s().p("AgGEOQAEgnAQgoQAOggAogPQAVgIARgCQgSgEgaABQg1ABgtAYQgoAUgwAtQgYAXgPASQAqhLAwg1QAcghBAgPQAigHAagBQgXgIgmgFQhLgMhIALQhJAKgzAxQgaAYgMAWQAHgbAUgjQAmhFA/gkQA+gjBOANQAmAHAcANQgUgNgSgaQglgzAGg6QAFg4A4gzIA3gpIgVAzQgUA9AEAwQAFAwA1AoQAbAVAaAKQgKgRgIgcQgQg3AKg1QAOhMA+gjQAUgLAWgFQALgDAHgBIgwA3QguBBAEA3QAEA8AzAuQAaAWAZALIicDTQgFgJgLgGQgXgNgfAPQgfAOgYAoQgLAUgGARQgBgMABgUg");
	this.shape_123.setTransform(121.3,361.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F6D1A3").s().p("AkTEZQgMg3gOieQgTjWBAiOQAdhABBgGQAggDBIARQAjAIBKgQQApgIBHgQQAwgIAbAQQAgATAUA9QA1CmhyAyQgzAXg5hKIgrg2QgYgagVACQgsADgvB6QgrBvAABNQAABPgbBOQgeBbgwASQgGACgGAAQglAAgUhjg");
	this.shape_124.setTransform(286.3,406.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F1B64D").s().p("AhSJCQgohqgYh+QgNhJgNkyIgKkkIkQh9IktgoIDniaIEggmQE2gkBwADQBwADDwBRQB5ApBhAoIhlCnIhaA6IAMCUQAMCfgBAuQgDBIgoB7QgsCLgpAEQgoAFg3iAQgrhngRhRQgGgcgTgTQgTgSgXgBQg4gDgHBfQgDAjgEB4QgFB7gLBUQggEDhfAKIgDAAQgzAAg1iKg");
	this.shape_125.setTransform(265.6,400.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D76837").s().p("EAYJBJWQgjhngPiCIgIhsQgeg9g8g+Qh5h9iYgIQhRgEgkA8QgXAogMBiQgNBrgNAhQgaBBhCACQg+ACgYkZQgVmhgVkOQgmnzhVljQhyngjUkrQjMkgqhlxQj9iKl/i6Iqck/QspmFlHjmQnVlKBZkAQCknXVgowQGuivHzijQD6hRCjgvIDE0MIgPsrIhnkQImLggIEJjvIHFhsIBShzII8AkIAMCZIF/CXIi/FMIAYTOIC1MhQi4BHkPB0QoeDom0DjQpkE/k3EGQmGFJBoDfQCaFNLfEtQHgDFMRDHQNqDdKWGUQIQFDFxGpQEIEvCdFEQBPCiAaBlIATBkQAUB5gBBpQgBFSjGA3QhnAcgtCGQgSA0ghDWQgaCngxBCQhFBeiVgeQhbgRgthkQgcg8gYiQQgZiOgXgwQgnhThSAHQhQAHghDBQgMBHgLB+IgSDkQgaEkgzCTQhKDRiVAfQgpAJgmAAQjVAAhgkXg");
	this.shape_126.setTransform(262.5,804.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FAE485").s().p("AjCj2IGFBdIlJGQg");
	this.shape_127.setTransform(341.6,487.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F2BC5F").s().p("AkFAYIILiLIiHDng");
	this.shape_128.setTransform(348.4,460.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CD6C38").s().p("AgTjIIFxDoIq7Cpg");
	this.shape_129.setTransform(363.1,492.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FAE485").s().p("Ai9jSIF7BbIj+FKg");
	this.shape_130.setTransform(328.6,442.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EBA24D").s().p("Ai4AAICHjoIDqHRg");
	this.shape_131.setTransform(379.6,472.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#CD6C38").s().p("AgHikIENC9IoLCNg");
	this.shape_132.setTransform(348.4,446.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F2BC5F").s().p("AjxANIHkh0IhqDPg");
	this.shape_133.setTransform(333.9,419.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FAE485").s().p("AiWioIEtB2IiTDbg");
	this.shape_134.setTransform(309.2,404.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EBA24D").s().p("AiGAJIBpjPICkGNg");
	this.shape_135.setTransform(361.1,429.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#CD6C38").s().p("AhehtIFRBnInkB0g");
	this.shape_136.setTransform(333.9,410);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EBA24D").s().p("AiogFIB6hbIDXDBg");
	this.shape_137.setTransform(341.2,399.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F2BC5F").s().p("AjTg6IGnAbIh5Bag");
	this.shape_138.setTransform(315.3,393.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FAE485").s().p("AjnlPIHPDJImLHWg");
	this.shape_139.setTransform(351.3,546.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F2BC5F").s().p("AldgPIK7ipIjsFxg");
	this.shape_140.setTransform(363.1,514.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#CD6C38").s().p("AgijqIHRD1Qg/AZhaAfQixA9h6AeQh8AeibAbIiCAUg");
	this.shape_141.setTransform(378,556.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EBA24D").s().p("AjoA+IDslxIDlJng");
	this.shape_142.setTransform(397.8,526.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FAE485").s().p("AiugkIFeh3IiHE3g");
	this.shape_143.setTransform(354.1,393.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F2BC5F").s().p("ACCj3IAuF3IleB3g");
	this.shape_144.setTransform(354.1,365.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CD6C38").s().p("AgxknIFxC+QgVAegoAqQhQBTheA7QhcA8imBFIiSA6g");
	this.shape_145.setTransform(453.1,527.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FAE485").s().p("Aj5kzIHzAZIkNJOg");
	this.shape_146.setTransform(423.1,526.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EBA24D").s().p("Ai4BAIBsk9IA3BiQA+ByAsBQQAsBRAhBMQAPAlAIAVg");
	this.shape_147.setTransform(466.6,491.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F2BC5F").s().p("AkvCGIJfkkIhsE9g");
	this.shape_148.setTransform(428.5,482.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FAE485").s().p("AjojoIHRAAIjmHRg");
	this.shape_149.setTransform(397.9,472.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#CD6C38").s().p("AhJjoIF5CsIpfElg");
	this.shape_150.setTransform(428.5,472.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#EBA24D").s().p("Ai8A3IBQkZIBABZQBDBhAYAoQAnBBBnCig");
	this.shape_151.setTransform(440,443.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F2BC5F").s().p("AkQCNIIhkZIhREZg");
	this.shape_152.setTransform(401.9,435.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FAE485").s().p("AijjGIFHAAIijGNg");
	this.shape_153.setTransform(374.5,429.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CD6C38").s().p("AhtjGIF+B1IohEYg");
	this.shape_154.setTransform(401.9,429.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EBA24D").s().p("Ai+BNIBckOIA2BIQA+BUAuA5QBJBfA2BPg");
	this.shape_155.setTransform(410,401.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#F2BC5F").s().p("AjRCIIGjkPIhcEPg");
	this.shape_156.setTransform(379.1,395.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CD6C38").s().p("AhKibIEcApImjEOg");
	this.shape_157.setTransform(379.1,393.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#EBA24D").s().p("Ah2CnIgul2IA0A/QA9BJAoA2QA9BWBzCLg");
	this.shape_158.setTransform(383.6,361.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CD6C38").s().p("AEyDjQjKAAihgRQihgRiQgiIhwgfIHzliIHCHCQg8ADhVAAIgYAAg");
	this.shape_159.setTransform(172.6,568.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EBA24D").s().p("AjgiBIHBjAIAAKDg");
	this.shape_160.setTransform(197.6,558.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#386741").s().p("AidgpIARgNQARgPAFgRQAFgQgBgSIgCgNIAKAPQAMATAGARQAHARgCASQgBAJgDAFIAQgGQASgKAJgQQAPgaADgXIACAfQACAhgDAKQgEAQgEAGIAYgPQAbgRALgRQAUgbATglIAAASQgCAXgLASQgKASgLAOIgIAJIAXgLQAagMAVgBQAUgBAXAIQAMAEAHAFQhUAegYAUQgQANgNAZIgLAXIARgEQASgEALACQAQAFAYANIgXABQgaACgRAKIhBAmg");
	this.shape_161.setTransform(448.1,432.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FAE485").s().p("Ah7kzIF1EEInzFjg");
	this.shape_162.setTransform(150.1,550.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F2BC5F").s().p("AmbiBIM3BEInBC/g");
	this.shape_163.setTransform(178.9,532.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#CD6C38").s().p("AmbBHIHtjRIFKEVg");
	this.shape_164.setTransform(178.9,512.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EBA24D").s().p("AjEg8IGKicIhCGwg");
	this.shape_165.setTransform(206.9,504.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FAE485").s().p("AhXjXIFODeIntDRg");
	this.shape_166.setTransform(162.4,498.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F2BC5F").s().p("AlshvILZBEImKCbg");
	this.shape_167.setTransform(190.1,487.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#CD6C38").s().p("AlsBmIGtkPIEsFTg");
	this.shape_168.setTransform(190.1,466.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#EBA24D").s().p("AjGheIGMiWIhgHpg");
	this.shape_169.setTransform(216.5,458.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FAE485").s().p("Agmj8ID9DqImtEPg");
	this.shape_170.setTransform(175.1,451.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#F2BC5F").s().p("AlFh0IKKBVImMCUg");
	this.shape_171.setTransform(203.8,437.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FAE485").s().p("ABckKICEGEIm/CRg");
	this.shape_172.setTransform(193.6,399.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FAE485").s().p("AiMDIQAdhgAmhjIBKjIIAehRICEFGIlFDjQAHgcAPgxg");
	this.shape_173.setTransform(76.2,526.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#61B26F").s().p("ACsEcQguhCg1gPQg5gRg8AhIgyAkIiRjaIAUgKQAUgRgEghQgEgjgdgjIgcgeIAeAKQAkASAfAdQAZAYACAqQAAAWgFAQQAKgOAJgYQARgzgHgyQgGgtgag9IgZgzIAgAqQAlAwAUAnQAWAmgIBCQgEAhgIAZIAhg0QAkhDAOhIQAOhHgbhCIgegzIAwAuQA0A8AMBGQANBHgnBGQgMAWgQASIgNAPIAxgXQA+gQA0AXQAzAZAdBGQAOAjAFAfQgQgSgYgTQgzgogugNQgvgLg5AkIguAnIAwgCQA6AEAuAcQBCAnAMBHQAGAigHAcQgMgegXghg");
	this.shape_174.setTransform(455.3,422.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#CD6C38").s().p("ADZDfQiDglh2gyQh3gxhjg7IhKgxIFEjjIFFHxQgqgIhCgSg");
	this.shape_175.setTransform(92.5,556.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EBA24D").s().p("Ajhi9IHDh2Ih/Jng");
	this.shape_176.setTransform(115.1,550.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F2BC5F").s().p("AklijIJLDRInDB2g");
	this.shape_177.setTransform(108.3,515.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FAE485").s().p("AgwAVQAmhjAjhRIAdg/IBKEBIj/C8QATgsA8ieg");
	this.shape_178.setTransform(92.1,476.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#CD6C38").s().p("AkjgKID/i8IFIGNg");
	this.shape_179.setTransform(108.5,499.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EBA24D").s().p("Ajyi0IHmgjIifGvg");
	this.shape_180.setTransform(129.2,498.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F2BC5F").s().p("AkXiCIIvDgInyAlg");
	this.shape_181.setTransform(125.6,467.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FAE485").s().p("AgbgIIBwjmIA8D5IkhDkQAqhgBLiXg");
	this.shape_182.setTransform(112.1,430.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#CD6C38").s().p("AkXABIEhjiIEOHDg");
	this.shape_183.setTransform(125.6,453.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EBA24D").s().p("AjejGIG9g2IiwH5g");
	this.shape_184.setTransform(148.9,451.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#F2BC5F").s().p("Aj8h8IH5DDIm9A2g");
	this.shape_185.setTransform(145.9,418.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FAE485").s().p("AgbgJQA0hOA4hKIAvg7IArDxIlVDIQBGh8BJhqg");
	this.shape_186.setTransform(137.7,384.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#CD6C38").s().p("Aj8AFIFVjHICkGFg");
	this.shape_187.setTransform(145.9,406.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EBA24D").s().p("Ajvh7IHfiPIk7IVg");
	this.shape_188.setTransform(178.8,399.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F2BC5F").s().p("AkEh4IIJBjIneCOg");
	this.shape_189.setTransform(176.7,374.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#ECA342").s().p("AovCDIoLhkIFfmAIJcilIMJAqIGxEgIkxHuIt7g4Ik6ENg");
	this.shape_190.setTransform(258.8,359.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EBA24D").s().p("AicAUIE5kMIhuHxg");
	this.shape_191.setTransform(231.6,409.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#CD6C38").s().p("AlFAeIG/iQIDLDlg");
	this.shape_192.setTransform(203.8,422.8);

	this.instance_14 = new lib.Path_91();
	this.instance_14.parent = this;
	this.instance_14.setTransform(315.6,560,1,1,0,0,0,225.6,45);
	this.instance_14.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]}).wait(1));

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

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgmA0Qgngzg3gBQA3AAAngzQAmgzAAhHQABBHAnAzQAmAzA3AAQg3ABgmAzQgnAzgBBHQAAhHgmgzg");
	this.shape_193.setTransform(251.1,287.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#6FB77F").s().p("AjmD+Ig2lbIAsgsIAeE+IAMl9IBJhDIg8HJIB2nxIBgADIi2HwIDUnWIBfAzIkWG7IEhl9IAtA1IjuEjIDojtIAmA5IjsDUIDpipIAtA0IlJDWg");
	this.shape_194.setTransform(642.5,572.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#EBA24D").s().p("Ah5hsIDzhGIjzFkg");
	this.shape_195.setTransform(595.4,576.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FAE485").s().p("AhXjXICvC4IiRD3g");
	this.shape_196.setTransform(574.4,568.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#CD6C38").s().p("AhIBoICRj3IAAEfg");
	this.shape_197.setTransform(575.9,580.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F2BC5F").s().p("AjRhbIGjBxIjzBGg");
	this.shape_198.setTransform(586.6,556.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#EBA24D").s().p("Ahzh1IDohKIhdF/g");
	this.shape_199.setTransform(605.2,539.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FAE485").s().p("AgXi8ICjC2IkXDEg");
	this.shape_200.setTransform(579.6,528.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#CD6C38").s().p("AjRAqIEWjEICNE1g");
	this.shape_201.setTransform(586.6,543.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#F2BC5F").s().p("AjFhaIGMBrIjoBKg");
	this.shape_202.setTransform(597,518.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#CD6C38").s().p("AjFBFIEWj1IB2Fhg");
	this.shape_203.setTransform(597,502.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FAE485").s().p("ABfjaIAtDBIkXD1g");
	this.shape_204.setTransform(591.1,487.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EBA24D").s().p("Ahwg2ID+hPIkbELg");
	this.shape_205.setTransform(624,582.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#CD6C38").s().p("AiSBOIEmirIgeC7g");
	this.shape_206.setTransform(598,586.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FAE485").s().p("ABhiyIAzC4IkmCsg");
	this.shape_207.setTransform(598,576.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#F2BC5F").s().p("AiYhbIExBoIj+BPg");
	this.shape_208.setTransform(622.9,568);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EBA24D").s().p("AhegiIC9jLIhgHbg");
	this.shape_209.setTransform(638.5,545.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#CD6C38").s().p("AiYAfIDUinIBdERg");
	this.shape_210.setTransform(622.9,555.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FAE485").s().p("AgNi/IB3DYIjUCng");
	this.shape_211.setTransform(618.3,539.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#F2BC5F").s().p("AiahrIE1AOIi9DKg");
	this.shape_212.setTransform(632.4,531.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#EBA24D").s().p("Ag3gnIBHiHIAJAXQALAoAHBTQAKB8ADBPg");
	this.shape_213.setTransform(642.3,504.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#CD6C38").s().p("AiaBdIDFjHIBwDVg");
	this.shape_214.setTransform(632.4,511);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FAE485").s().p("AhOj4ICxEpIjFDIg");
	this.shape_215.setTransform(626.8,495.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#F2BC5F").s().p("Ah8iUID5CiIhICHg");
	this.shape_216.setTransform(631.4,485.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FAE485").s().p("AhZi7ICzDFIhGCyg");
	this.shape_217.setTransform(542.9,559.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#CD6C38").s().p("Ah2AdIBGixICnEpg");
	this.shape_218.setTransform(556.8,575.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#EBA24D").s().p("AhThSICIiFIAfGvg");
	this.shape_219.setTransform(560.3,568.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#F2BC5F").s().p("AiehiIE8BBIiJCEg");
	this.shape_220.setTransform(549.8,550.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FAE485").s().p("AAwjlIA9EOIjZC9g");
	this.shape_221.setTransform(544.8,517.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#CD6C38").s().p("AieA+IDai7IBiD8g");
	this.shape_222.setTransform(549.8,534.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#EBA24D").s().p("Ahqg+IDVh+IhzF6g");
	this.shape_223.setTransform(566.5,528.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#F2BC5F").s().p("AiJiGIETCQIjVB+g");
	this.shape_224.setTransform(563.4,508.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FAE485").s().p("AhLBeIBUh5QAwhFAdgcQAPgPAFgBIgGCZIjNCAg");
	this.shape_225.setTransform(560.2,480.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#CD6C38").s().p("AiJgIIDNh/IBGEPg");
	this.shape_226.setTransform(563.4,495.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#EBA24D").s().p("AhEhnICJiRIgUHxg");
	this.shape_227.setTransform(612,495.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#EBA24D").s().p("AiXg0IEvimIjpG2g");
	this.shape_228.setTransform(585.4,487.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#F2BC5F").s().p("AhahgIC1AyIiICPg");
	this.shape_229.setTransform(609.7,475.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#F2BC5F").s().p("AiRhFIEpgNIkvClg");
	this.shape_230.setTransform(585.4,473.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#61B26F").s().p("Ak0E0QALgOABgWQADgtgsgnQgtgnhNgLIhEgEIAvgVQA+gVBIAAQA6ABA0A0QAaAbAPAaQgGgegUgqQgohUhEg2Qg8gxhmgtIhZgjIBVANQBkATBGAXQBHAYBGBcQAjAuAUAqQgFgqgThAQglh+hEhsQhEhshvgxQgigPgjgIIgcgEIAggDQAogCApAEQCEAOBiBLQBjBKAlCFQASBDgBAzIAGgZQAKggAQgdQAyheBbgfQBXgeB2A3QA7AbApAhQgngDg1AEQhqAJhFAoQhEAngWBwQgLA5ACAwIA3g7QBIhABWgUQB8gcBhBKQAxAlAYArQgygXhBgPQiEgdhQArQhXAvggByQgQA5ABAvg");
	this.shape_231.setTransform(616.9,438.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#67A7A7").s().p("AhBApQgfgIgDgSQgDgQAcgSQAbgRApgGQApgHAfAJQAfAIADASQADAQgbASQgcARgpAGQgRADgRAAQgUAAgSgFg");
	this.shape_232.setTransform(238.9,869.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#67A7A7").s().p("AhBApQgfgIgDgSQgDgQAcgSQAbgRApgGQApgHAfAJQAfAIADASQADAQgbASQgcARgpAGQgRADgQAAQgVAAgSgFg");
	this.shape_233.setTransform(46.7,789.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#61763D").s().p("AhBApQgfgIgDgSQgDgRAcgRQAbgRApgGQApgHAfAJQAfAIADARQADARgcARQgbARgpAHQgSADgQAAQgVAAgRgFg");
	this.shape_234.setTransform(109.2,732.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#67A7A7").s().p("AgqASQgTgFgBgIQgBgIASgHQASgIAagCQAZgCAUAFQATAEAAAJQABAHgSAIQgSAIgaACIgPAAQgQAAgNgDg");
	this.shape_235.setTransform(273.9,783.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#61763D").s().p("AgCAoQgtgEgfgPQgegOABgPQACgRAggJQAhgJAsAEQAsAEAfAOQAfAPgCAQQgBAQghAJQgXAGgcAAIgZgBg");
	this.shape_236.setTransform(520.1,932.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#67A7A7").s().p("AgDAoQhZgIg+gRQg+gRABgQQACgRBAgGQBBgGBYAIQBZAIA+ARQA+ARgBAQQgCARhAAGQgbACggAAQgrAAgzgEg");
	this.shape_237.setTransform(483.4,728.9);

	this.instance_17 = new lib.Path_92();
	this.instance_17.parent = this;
	this.instance_17.setTransform(575.2,587.7,1,1,0,0,0,52.1,15.2);
	this.instance_17.alpha = 0.66;

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#61763D").s().p("AgGBLQiogPh1ggQh1ggADgfQADgfB5gMQB4gLCoAPQCoAPB1AgQB1AggDAfQgCAfh5AMQg1AFg9AAQhQAAhfgJg");
	this.shape_238.setTransform(616.9,861.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#67A7A7").s().p("AiIA0Qg9gDgCgSQgDgSA5gUQA4gWBTgNQBSgNA9AEQA9ADACASQADASg5AVQg4AWhTAMQg/AKgzAAIgdgBg");
	this.shape_239.setTransform(63.8,699.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#61763D").s().p("EAyuAUNQl8gwjUk5QhChigphwIgchdQiLAaipAKQlTAUichPQhVgrgahNQgUg8AMhiQAUhyAHg4QANhigUg8QgghigJgQQgVgugtgbQgwgdhqgdQhcgYjUgsQkZg6vOCoQkxA1lSBFIkUA6QhkAWh2AtQjrBdhaB8QixD2lIBGQjzAzlhgsQjpgchnjDQgWgsghheQgYhCgQgKQgTgKiMAVQjmAjhEAHQmuAvhbiBQhdiFAljcQAMhFAYhFIAUg3Il7ljQLgjyPIiCQQtiOUrAAQTlAAUPDxQT4DtQtGoIB7MbQivDzj6DpQnHGmljAAQglAAgkgFg");
	this.shape_240.setTransform(398.2,628);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#917556").s().p("AkJLQQg5gGAOl2QAKjDAChRQAEiHgNgcQgNgdgfgfIg5g2QhEhDAKhFQAFggAegJQAWgGA3AEQBTAGAZAAQBGAAA7gQQBagYD7inQByhLAqgXQBEgmAOAPQAWAZjRD9QjyEnghA+QgYAvgkCNQgVBTgsC8QhTFUg5AAIgCAAg");
	this.shape_241.setTransform(667.2,1197.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#74542E").s().p("AqIVIQg0gngXjIQgTidADjFQABhDAqiyIBTlSQBpmzg/goQhXg5gth1QgziCAVifQASiKBnhlQAhggAkgYIAfgRIAVAHQAeAIAsADQCNAJDjgvQDjgvEthwQCWg4BpgvIAGBNQACBqgZCQQgOBQgyBDQgpA3hPBAQgvAmhsBSQhkBQhHBKQiNCTiaHoQgnB4hFDzQg3DDgVA3QhNDJhxDDQh0DKg2AAQgJAAgHgFg");
	this.shape_242.setTransform(677.9,1233.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#644725").s().p("Atde+QgjgYgahFQg8ifAXj9QAJhlAQmBQAZozAKjAQA0wJBGj4QBJj/CAizQAog4ApgqIAggeIBEADQBWADBdgFQEogPEAhVQEBhVDUhtQBCgiA2ghIApgZIgXCpQghDRgxDAQibJnj6DhQiKB8hUDFQhCCdgvDyQgbCOguEpQguEKg4CuQh3FnkfExQhdBhhxBfIh/BoQgSAQgTAAQgPAAgQgLg");
	this.shape_243.setTransform(673,1286.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#917556").s().p("AobVsQgjgagKhAQgIg3AJhqQAkk2ANjnQAQkeg3kzQgOhOgjihQgfiQgMhMQggjLBSj0QBMjfCHijQAbggCugcQCagYDTgMQDPgMCRAHQCfAHACAbQAEA1iMA2QhwAskqBMQh/AhhJA4Qg/AwgnBNQgSAigsB2QgnBpgoBDQgxBTgBBYQgBBBAdBtQAtCkAIArQAbCHgFCIQgNFThfGoQgsDGgrBpQgnBfgfAAQgHAAgGgFg");
	this.shape_244.setTransform(375.3,1285.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#74542E").s().p("ANnbuQksixiDkiQhFiag6mnQggjug4pCQgzoUggjLQgylBg9gKQjwgmh0IYQgnC1gUDfQgOCiACBYQACDFg3FwQhKHih1C5QhxCyjFA4Qg9ASg/ADIgyAAQhlp4gdj9QgLhpgIjoQgJkCADkDQAGq1BPjPQAUg1AviWQAfhlAfgyQAphFBOgzQBVg4Cbg1QEKhcFFggQCtgRDugMQCVgQC1BHQDCBMCCCMQC0DDAyEYQBIGWi7JcQhgE1APEWQAMDVBRDgQAuB/BfDTQBGCtgIByQgQDng9BfQgfAwgbABQh8geiWhYg");
	this.shape_245.setTransform(413.2,1309.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#644725").s().p("EgTKAnDQgthJgIhDQgGg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBODYA3HOQAUCvgOC9QgLCPgkDKIhBFeQgjDRgJCsQgKCyA4EGQAeCOBbFBQBPEcAWCAQAgDGgtBbQgvBdivAdQiGAXkHgKQk5gRiegEQkUgIinAdQiyAei/CtQiDB2iuDhQjCD7gjAkQg9A/gnAAQgaAAgRgag");
	this.shape_246.setTransform(423.9,1368.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#C6DA92").s().p("AgUQbQhogDjPgzQjMgxjkhMQofi1ipiUQhhhVAOhKQALg2BLg8IA9guQAigZANgQQAngsg4gkQgagQjaAaQlyAtiQAMQs0BEoSivQkihejOk0Qi7kVhsmyQCvEND2CKQHxEXI0CXQDRA4D/AwQA1AKFrA/QB+AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBvBegDBnQgBAzgXAgIBMgLQBigMBsgHQFXgUE3AyQCeAaCAAkQAaAICKAtQBEAXApAAQA0ABBLgdQBBgYB2hDQCNhSBLgqQEXibCFAAQB9AABoBBQBEAsAUAJQA5AdBDANQB/AZFajUQBNgwCthxQCBhUAkgRQAsgUBRAgQA1AUB1BCQCIBOBAAeQB3A5BgAQQC1AgFwAgQC3AQCTAKQgsCv55CjQoFAzpqArIoCAhQhpAJiAA1QgzAWitBXQiMBHhdAfQh8Aoh1AAIgTAAg");
	this.shape_247.setTransform(183.7,1053.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#C6DA92").s().p("AqlC0QhEgEgJi0QgCg4ADhDIAEg4IAPAeQAWAlAgAfQBnBjCoAMQCNALF1gyQF0gzEXhDQhmBMiQA9QjaBgmtAyQkOAgirAAQg3AAgsgEg");
	this.shape_248.setTransform(686.7,1099);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#A6BD55").s().p("AusUYQhngDjQgzQjMgxjjhMQofi2ipiTQhihVAOhKQALg2BMg8IA9guQAhgZAOgQQAmgsg3gkQgZgQjcAdQlqAxiaANQs1BKoOi9QmuiajTodQhKi8hCkfQhCk5gjiIQAoA9CeCeQCdCdC+CqQHfGqCLAaQBLAOAwhqQARgnAXhLIAqiGQA5itBPhZQBuh8CygLQDLgMCDCDQBVBUBmDZQA8B/AVAoQAxBcAwA8QB7CaC3AWQC1AWBxiXQBLhkBVj/QBgkhA1hgQBoi9CeghQE4hBIRFuQCwB6DFCnIDjDJQBLBEBHBpQAxBJBGCDQBXCgAeAyQBFB0BFBOQA6A3DXhZQCVg+E2irQF+jTBngzQD6h8BkACQB+ACCsCmQAtAsBSBVQBEBDAmAWQBhA6GyhDIFXg2QC6gbBcABQBvACCMAnQBAATCwA+QCQAzBPAQQB1AXBTgXQCagpFPlTQCoiqCJiiQgCAGgQCpQgaDLgxCsQiZIslIBrQvFE8kJjOQhOg9gQhvIgIhBQgCgZgMADQoHCP3BCoQnKA0n2AxImYAmQhpAJh/A1QgzAWitBXQiNBHhdAeQh8Aph2AAIgTAAg");
	this.shape_249.setTransform(274.6,1026.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#2B4C43").s().p("AjZKrQgLvzBmnsQBnnqBfjBQAeg8AagXIAUgLIBHFsIgVAcQgbAngbAzQhXCjg5DcQh4HagtPPQgXHoACGJQgamYgFn7g");
	this.shape_250.setTransform(598.8,1239);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#8CAC50").s().p("EgllAzeQhogDjQgzQjMgxjjhMQogi2ioiTQhihVAPhKQALg1BMg9IA8guQAigZAOgQQAmgsg3gkQgagQjaAaQl2AtiMAMQs0BEoSivQmpiMjwpHQjPn3gproQgkqYBmptQBlpgCwjlQDkkpGbj7QHLkZKQjKUAYDgHcAmCAAAQUeAAVHEHQUxEDRAHLQRkHZJ4JOQKmJ4AAKbQAAEk5KNxQslG5slF+IAbA/QAYBOgOBRQgtEBmcC1QjaBgmvAyQljApi5gNQhEgFgIi0QgDg4AEhDIAEg4QgsCv56CjQoFAzppArIoCAhQhqAJh+A1Qg0AWisBXQiNBHhdAeQh9Aph1AAIgTAAg");
	this.shape_251.setTransform(424,827.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#917556").s().p("AHpbSQgvhVggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAcQgnAMieBTQiCBEhCgBQhggCgjh/QguingZi6QgVieAAh3QAAhYHMASQDmAIDlAaIBiAbQB1AhBjAmQE+B6ARB0QAPBkgPCOQgJBWgjDEQhOG1AAEWQAAE7A1GhQAcDbApENQAFAsAVBrQAVBqAHA9QAXDQhNCjQhJCdhKAHIgGAAQg7AAg2hhg");
	this.shape_252.setTransform(159.7,1357.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#74542E").s().p("EAJMAoKQh2gSg6g1QgSgQgKgSIgGgPQgjgPghgqQhEhVAGiKQAGiChZhpIhUhbQg0g6geg4Qg3hih6o0QiDpegnhmQgZhDhVifQh7jkgthbQjrnZhqnHQh8oTgVlTQgHhuAEhoQAFhgAAgjQAAhYRahXQItgsItgbIg3GDQg3GaAAB2QAABfAIJEQAFIpgNBcQgPBxAAEFQAAEHAPCOQAFAwAeDgQAgD2AQDHQAzJzhXEUQhiE7hzB1QhTBThzAAQgbAAgdgFg");
	this.shape_253.setTransform(166.8,1383.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg3hih6o0QiDpegmhmQhGi4igkiQiokwkmnWQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_254.setTransform(153.3,1345.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#523821").s().p("Egc5A/GQkihKjKlEQiikDh2m/Qg7jehpoeQhSmsg8iNQhJivjYhrQiThJkphGQlnhVhkgjQjrhShfiCQi0j1hknkQgciFgpkEQgnj0gWhmQgfiNhuhRQhWg/irgvQjPgxhwggQjFg4iIhSQkNiij3tMQhOkHhBksIgzj4MDMhgQwICWV+QlNJomLKfQsVU+k5EPQiqCUj5B4QixBVkuBrQmgCThRAgQkYBujDB3QlsDelWHaQgwBCjUE5QiUDahgBwQhxCDjnA5QioAqk1APIkGALQidAHhqAKQkpAai6BJQi3BHjWDqQhBBIh3CPQh/Cag7BDQjiD9jCBkQijBUixAAQhjAAhogbg");
	this.shape_255.setTransform(419.6,1258.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-339,0,339).s().p("Eg6xAzhMAAAhoeMB1jAAAMAAABp7g");
	this.shape_256.setTransform(375.8,339.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.instance_17},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.instance_16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stagecopy, new cjs.Rectangle(-309.4,-227.8,1413.1,1893), null);


(lib._stage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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

	this.instance_3 = new lib.Path_1_8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(200.8,66,1,1,0,0,0,40.2,32.4);
	this.instance_3.alpha = 0.66;

	this.instance_4 = new lib.Path_2_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(630.8,66,1,1,0,0,0,40.2,32.4);
	this.instance_4.alpha = 0.66;

	this.instance_5 = new lib.Path_3_7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(571.1,66,1,1,0,0,0,40.2,32.4);
	this.instance_5.alpha = 0.66;

	this.instance_6 = new lib.Path_4_5();
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

	this.instance_7 = new lib.Symbol33();
	this.instance_7.parent = this;
	this.instance_7.setTransform(674.1,181.4,1,1,0,0,0,10.8,23.4);

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

	this.instance_8 = new lib.Path_5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(640,181.1,1,1,0,0,0,79,19.9);
	this.instance_8.alpha = 0.66;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAOCOIAAgzIhdAAIAAgXIBSjRIAzAAIAADGIAaAAIAAAiIgaAAIAAAzgAgjA5IAxAAIAAgqIAEhqIgFAAg");
	this.shape_34.setTransform(412.5,931.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgSAYQgHgIAAgQQAAgRAHgHQAHgIALAAQANABAGAHQAHAJAAAPQAAAPgHAJQgGAJgNAAQgLAAgHgJg");
	this.shape_35.setTransform(391.7,942.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_36.setTransform(380.3,934.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgyCOIAAkbIArAAIAAD5IA6AAIAAAig");
	this.shape_37.setTransform(367.7,931.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_38.setTransform(448.3,884.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_39.setTransform(432,884.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIAMgEIANgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_40.setTransform(411.5,884.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_41.setTransform(394.7,880.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_42.setTransform(382.4,881.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_43.setTransform(366,881.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgKAIgHQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_44.setTransform(349.2,884.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_45.setTransform(334.3,882);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D0D2D3").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAFQAFAFAEAKQAEAJADAOQACANAAATIAABGQAAASgCAOQgDANgEAJQgEAKgFAFQgGAFgFADIgLAEIgJAAQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHABIAIgBQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_46.setTransform(439.2,1003.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D0D2D3").s().p("AgNCOQgHgBgIgCQgHgEgHgFQgHgGgGgKQgFgKgDgPQgEgPAAgVIAAjDIAsAAIAADPIABAWQABAIADAGQADAFAFACQAEACAGAAQAGAAAFgCQAFgCADgFQADgGABgIIACgWIAAjPIArAAIAADDQAAAVgEAPQgDAPgFAKQgGAKgHAGQgHAFgIAEQgHACgIABIgNABg");
	this.shape_47.setTransform(421.7,996.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D0D2D3").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_48.setTransform(401.1,995.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D0D2D3").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAAOIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_49.setTransform(389.2,999.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D0D2D3").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_50.setTransform(374.2,999.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D0D2D3").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAAOIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_51.setTransform(359.4,999.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D0D2D3").s().p("AgyCOIAAkbIArAAIAAD5IA6AAIAAAig");
	this.shape_52.setTransform(346.3,996.8);

	this.instance_9 = new lib.Path_1_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(391.9,996.8,1,1,0,0,0,98.5,33.9);
	this.instance_9.alpha = 0.68;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_7},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 16
	this.menu_pine = new lib.menu();
	this.menu_pine.parent = this;
	this.menu_pine.setTransform(95,1242.4);

	this.timeline.addTween(cjs.Tween.get(this.menu_pine).wait(1));

	// btnLayer
	this.arenaBtn = new lib.arena();
	this.arenaBtn.parent = this;
	this.arenaBtn.setTransform(533,1240.4,1,1,0,0,0,52.2,54.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BD4440").s().p("ABfERQgJgCgEgIQgFgIACgJIAeh1QADgJgFgIQgFgIgJgCIjtg7QgIgCgGgHQgFgIAAgIIAhiKIDJiZIAAABIhJEvICVAmQAJADAFAHQAFAIgDAJIgoChQgCAJgJAFQgFADgGAAIgGgBg");
	this.shape_53.setTransform(673.8,1249.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BD4440").s().p("AAABbIh0hIQgEgBADgIQAFgKAAgHIgBgIIALgIIBXAzQAIAGAIgDQAJgCAFgIIA/hmQAFgJAJgCQAJgCAIAFQAIAFACAIQACAKgFAHIhWCNQgFAJgJACIgFABQgGAAgFgDg");
	this.shape_54.setTransform(693.2,1222.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EF5046").s().p("AhfBhQgpgpAAg4QAAg4ApgoQAognA3AAQA4AAAoAnQApAoAAA4QAAA5gpAoQgoAng4ABQg3gBgogng");
	this.shape_55.setTransform(676.2,1200);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EF5046").s().p("AgzCBIA3jnIhfgFQgKgBgGAHQgHAGgBAJIgGB4QgBAKgGAGQgHAGgKgBQgJAAgGgHQgGgHAAgJIAJilQABgJAGgGQAHgHAJABICiAIQACAAA7ANIA7ANQAHACAGAGQAIAJgDANIg8D2g");
	this.shape_56.setTransform(664.3,1230.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EF5046").s().p("AAABbIh0hIQgEgBADgIQAFgKAAgHQAAgIgDgLQgDgGAEABIBjA7QAIAGAIgDQAJgCAFgIIA/hmQAFgJAJgCQAJgCAIAFQAIAFACAIQACAKgFAHIhWCNQgFAJgJACIgFABQgGAAgFgDg");
	this.shape_57.setTransform(693.2,1222.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BD4440").s().p("AAeBZIiUhMQgIgEgDgJQgDgIAEgIQAEgJAJgCQAJgDAIAEIBsA2QAIAEAJgDQAJgCAFgJIAag1QAbg3ACAAQACAAAEAGQAFAIAFADIANAHQAGADAAACQAAACgeA7IgeA6IgKAVQgFAIgJADIgHABQgFAAgFgCg");
	this.shape_58.setTransform(646.2,1261.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFDD7B").s().p("AlHFIQiJiHAAjBQAAi/CJiJQCHiIDAAAQDAAACJCIQCICJAAC/QAADBiICHQiJCIjAAAQjAAAiHiIg");
	this.shape_59.setTransform(669.1,1242.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AlxFxQiYiZAAjYQAAjYCYiYQCZiZDYAAQDZAACYCZQCZCYAADYQAADYiZCZQiYCZjZABQjYgBiZiZg");
	this.shape_60.setTransform(669.1,1242.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BD4440").s().p("AiEBSIEJkfIgGAZQgLAjgUAxQgfBIhBB6QgiA9gbAvg");
	this.shape_61.setTransform(404.7,1220.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EF5046").s().p("AhiCKQhjjAAAhDQAAhRA6g5QA6g5BRAAQBSAAA6A5QA6A5AABRQAABDhjDAQgxBggyBTQgwhTgyhggAhYjFQglAkAAA0QAAAzAlAlQAlAkAzAAQA1AAAlgkQAlglAAgzQAAg0glgkQglglg1AAQgzAAglAlg");
	this.shape_62.setTransform(398.4,1209.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhaBbQglgmAAg1QAAg0AlgmQAmglA0AAQA1AAAlAlQAmAmAAA0QAAA1gmAmQglAlg1AAQg0AAgmglg");
	this.shape_63.setTransform(398.5,1198.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3EBCA4").s().p("AiaBLIiphLICphKIE1AAICpBKIipBLg");
	this.shape_64.setTransform(398.5,1240.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhkAZIhIAtIh6i1IJNAAIh6C1IhJguIhkBYg");
	this.shape_65.setTransform(398.5,1254);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3EBCA4").s().p("AiJAMIgTAcIitj4IKTAAIitD4IgTgcIiKDFg");
	this.shape_66.setTransform(398.5,1261.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFDD7B").s().p("AlHFIQiIiHAAjBQAAi/CIiJQCIiIC/AAQDAAACJCIQCHCJAAC/QAADBiHCHQiJCIjAAAQi/AAiIiIg");
	this.shape_67.setTransform(398.5,1242.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AlxFxQiZiZAAjYQAAjYCZiYQCaiZDXAAQDZAACYCZQCaCYgBDYQABDYiaCZQiYCZjZABQjXgBiaiZg");
	this.shape_68.setTransform(398.5,1242.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.arenaBtn}]}).wait(1));

	// barLayer
	this.instance_10 = new lib.Symbol13_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(667.5,955.3,1,1,0,0,0,19.9,242.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Layer 18
	this.instance_11 = new lib.clouds_group_pine();
	this.instance_11.parent = this;
	this.instance_11.setTransform(456.4,180.7,1,1,0,0,0,456.4,180.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Layer 4
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6FB77F").s().p("ArnDEICGhJIHxCPInjjDIB4hMIHRDgInFkeICGhKIIaF9InjnKIEBhUIE0H6IjgohIDwgbIBAIxIBAoQICTA9IiSHCIDemBIBWApIkiGqIniBvg");
	this.shape_69.setTransform(115.1,574.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6FB77F").s().p("AmnBRIAhgrIDWCCIjBi0IA7hFICrDwIhzkiICAgxIAeFDIAXlIICXgbIh7FeICrlHIBXABIiZEDICvjoIBRAGIjBDdIDWjIIBXAAIk8EQIkQBLg");
	this.shape_70.setTransform(226.6,720.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CCCCCC").s().p("AjuAGQAJg0A2hPIA1hEICigZIA2AiQA7AoAWAfQAWAfAjBxQARA4ANAzIoLBRQAIiAAPhVg");
	this.shape_71.setTransform(206.7,722.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E6E6E5").s().p("Ak2CiQAPiAAOgcQAMgcAsh9IAph3IAvgHQA4gHAzgCQCfgGAnAzQAmAzA/C+QAfBfAXBVIqGBkQAGg6AHhAg");
	this.shape_72.setTransform(206,716.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CCCCCC").s().p("AjnEvQgEjDAIhAQAJg/Awi4IAvisQgCgUAFgXQAJgvAjgQQAjgPAeAwQAOAYAIAcIgFBmQgCBtAPAkQAPAlAyA/QAdAkBCBOQApAyAKCbQAGBNgDBEInLBGQgDhUgChig");
	this.shape_73.setTransform(166.9,692.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E6E6E5").s().p("AlFFbQAAi+AWhlQAKgsAKhmQAMh6AIgxQAfjNBSglQBTglBhBFQAxAiAhAqIgDCQQAGCVAuAbQAvAbAlA/QATAgAKAaIA1FYIqJBkQgEhLABhfg");
	this.shape_74.setTransform(167,691.2);

	this.instance_12 = new lib.Path();
	this.instance_12.parent = this;
	this.instance_12.setTransform(202.7,740.5,1,1,0,0,0,45.8,10.8);
	this.instance_12.alpha = 0.41;

	this.instance_13 = new lib.Path_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150.7,740.4,1,1,0,0,0,45.8,10.8);
	this.instance_13.alpha = 0.41;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6FB77F").s().p("AmnBRIAigrIDVCCIjBi0IA7hFICsDwIh0kiIB/gxIAfFDIAXlIICXgaIh7FeICrlIIBXABIiZEDICvjoIBRAGIjBDdIDWjHIBWAAIk7EQIkQBJg");
	this.shape_75.setTransform(157.5,911.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EBA24D").s().p("AhDgWICHiSIgTFRg");
	this.shape_76.setTransform(139.8,914.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FAE485").s().p("AhhiJIC/AzIAEDgg");
	this.shape_77.setTransform(123.6,920.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CD6C38").s().p("Ag6hvIB0C/IhwAhg");
	this.shape_78.setTransform(138.9,923);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F2BC5F").s().p("AijAVIFHhdIiICRg");
	this.shape_79.setTransform(130.2,904.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EBA24D").s().p("AhugCIB+iQIBfElg");
	this.shape_80.setTransform(135.6,882.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FAE485").s().p("AhbiVIC3A3IhqD0g");
	this.shape_81.setTransform(115.3,891.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CD6C38").s().p("Ag4h6IDcCWIlHBfg");
	this.shape_82.setTransform(130.2,894.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F2BC5F").s().p("AiaARIE1hYIh/CPg");
	this.shape_83.setTransform(121.7,874.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CD6C38").s().p("AhCiKIDdC8Ik1BZg");
	this.shape_84.setTransform(121.7,862.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FAE485").s().p("Ag1jCIBrBwIhXEVg");
	this.shape_85.setTransform(109.5,857.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EBA24D").s().p("AhEAJICJicIhQEmg");
	this.shape_86.setTransform(164.4,906.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CD6C38").s().p("AAjh1IA5CJIi3Big");
	this.shape_87.setTransform(154,919.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FAE485").s().p("AgsioIBsBmIh/Drg");
	this.shape_88.setTransform(151.1,914.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F2BC5F").s().p("Ah7gXID3g2IiKCbg");
	this.shape_89.setTransform(159,899.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EBA24D").s().p("AhWAiIAtjUICAFlg");
	this.shape_90.setTransform(162.7,873.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CD6C38").s().p("AgwhjICsCQIj3A2g");
	this.shape_91.setTransform(159,887.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FAE485").s().p("AhTiSICnBfIhKDGg");
	this.shape_92.setTransform(145.6,882.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F2BC5F").s().p("AhqALIDVh0IgtDTg");
	this.shape_93.setTransform(147.9,866.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EBA24D").s().p("AhNALIgHh3IAQAMQAYAWAmA1QA4BPAjAzg");
	this.shape_94.setTransform(150.1,845.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CD6C38").s().p("Ag3hqICiBhIjVB0g");
	this.shape_95.setTransform(147.9,856.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FAE485").s().p("Ah3ipIDvB+IgzDWg");
	this.shape_96.setTransform(130.3,850.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F2BC5F").s().p("Ah3g+IDoAGIAHB3g");
	this.shape_97.setTransform(130.3,839.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FAE485").s().p("AhwhmIDIA7IAZCSg");
	this.shape_98.setTransform(101.3,925.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#CD6C38").s().p("Ah0hJIDpCDIjPAQg");
	this.shape_99.setTransform(121.7,928.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EBA24D").s().p("Ah0AHIAmiQIDDETg");
	this.shape_100.setTransform(121.7,920.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F2BC5F").s().p("Ah2ANIDthVIgmCQg");
	this.shape_101.setTransform(101.9,913.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FAE485").s().p("AhLi5ICXCdIhGDWg");
	this.shape_102.setTransform(89.4,896.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CD6C38").s().p("AgxhrICoCAIjtBWg");
	this.shape_103.setTransform(101.9,904.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EBA24D").s().p("AhUAVIBbiqIBOErg");
	this.shape_104.setTransform(105.4,891.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F2BC5F").s().p("Ah5hGIDzgPIhcCrg");
	this.shape_105.setTransform(94,885.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FAE485").s().p("AgigWQAEhBAIgfIAIgSIA5BpIhVCoQACg9AGhig");
	this.shape_106.setTransform(86.1,864.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CD6C38").s().p("AgjhUICdCaIjzAOg");
	this.shape_107.setTransform(94,869.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EBA24D").s().p("AhugRIAhiYIC8FUg");
	this.shape_108.setTransform(126.1,850.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EBA24D").s().p("AhOApICIjrIAVGFg");
	this.shape_109.setTransform(98.3,857.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F2BC5F").s().p("AhGgjICNgoIghCXg");
	this.shape_110.setTransform(111.2,841.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F2BC5F").s().p("AhgANIDBiCIiHDrg");
	this.shape_111.setTransform(94.3,849.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#61B26F").s().p("Ag3ELQgQgfgugIQgugIg4AYIguAZQAGgOAQgTQAhgnAwgdQAngXA4AOQAdAHAUALQgQgSgfgTQg8gohEgKQg8gIhWALIhLANIA/gaQBLgcA5gNQA4gNBVAiQApARAgATQgVgagngiQhMhFhagtQhZgsheAMQgdAEgbAJIgUAIIAUgPQAagRAdgOQBegsBgAJQBgAKBQBKQAnAmATAjQgKgegDgqQgEhTAvg6QAvg4BkgLQAzgGApAGIg8AmQhEAxgeA3QgeA2AfBVQAQApAVAfQACgaAKgjQAXhIAxgwQBIhGBgALQAwAFAhATQgrAEgyARQhkAigkA+QgnBBAYBZQANAtAUAfIlIBqQABgOgIgQg");
	this.shape_112.setTransform(100.6,816.2);

	this.instance_14 = new lib.Path_90();
	this.instance_14.parent = this;
	this.instance_14.setTransform(135.5,934.3,1,1,0,0,0,51.2,13.2);
	this.instance_14.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.instance_13},{t:this.instance_12},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]}).wait(1));

	// Layer 3
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#386741").s().p("AhmB4QABgJgBgMQgBgXgLgOQgKgOgPgJIgMgHIATABQAWACASAFQARAEANANQAHAHADAGQADgHABgKQADgUgHgRQgHgRgMgOIgJgMIAaARQAbARAGAJQAKAMACAHQAJgvgJggQgGgTgLgbIgKgXIAOALQAQAQAIATQANAfACARQAEgrATgbQALgRAVgNIASgKIgNAvQgNAyABAUQABASAMAbQAGANAGAJQAKgdANgKQAJgHAQgIIAOgFIgNARQgOAWgDAUIgKBLg");
	this.shape_113.setTransform(174.9,465.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F1B64D").s().p("AQLN+QhohBhZhVQhVhSguhNQhUiMnfkuQm+kZkdh0QlTiJl/igQncjIhrg2Qg8gegZgsQgagsAXgkQAYgnBMgNQBWgPCKAWQCQAYCCA0QBXAiCMBLQCkBXBQAkQCaBGCqAwQClAvFDBEQC8AoGcBTQMICeDbBdQETB1CNCjQA8BGAKA1QAKA2gsATQhCAciygRQjYgUhRAJQg+AHAiBcQAMAgBZCoQBKCKAJBFQAOBjhhATQgnAHgqAAQinAAjJh8g");
	this.shape_114.setTransform(238.5,916.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F6D1A3").s().p("AnkIqQhBgpgug4Qgug4gPg4QgchlBbh0QBKheCjh0QCth7FkjGQGXjhBNALQAiAFiiBtQlODhgoAdQomGLCVCeICSCWQA1A3AHAUQAIAWgiAPQgNAGhnAfQgxAPgxAAQhmAAhmhAg");
	this.shape_115.setTransform(46.3,723.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F1B64D").s().p("Av8MyQkZh1gci2QgbivDOkNQCwjkKCkhQFuimKGjpQCvg/D8gHQB0gEA7ARQBDASgWAnQgSAikFCfIotFUQscHzgVDEQgMBvAkA9QAZAqA6AbQBGAgAHAHQAdAagUA4QgYBAhYAqQhWAph/AMQg2AFg1AAQjlAAjihfg");
	this.shape_116.setTransform(91.7,707.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F6D1A3").s().p("AjoGLQgmgZg1hLQg4hQgngfQhCg1higDQhZgChnANQhkAPglACQg9AFgfgUQgkgWgShCQggh3CbgaQA7gKBogBIC9ACQBVABAwgzQAcgdAjhRQAjhRAegfQAygyBYgBQBYgBBLAeQAyAUBBAuQBLA0AaANQA5AdA8gCQBSgDDPgkQDHgkBwAAQBHAAAqBSQAlBLAABrQAABqgmBIQgpBRhHgDQhAgDgvgoQgKgJhAhLQgvg2gzgYQhIgghtAGQhsAGhIBAQgwArg4BjQg+BuggAlQg+BHhZAOQgZAEgWAAQg9AAgsgeg");
	this.shape_117.setTransform(458.4,1104.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F1B64D").s().p("AlDKZQg9hCg1iTIgph4QgXhEgSgnQgyhshDgJQhGgKgfAtQgQAYgUBVQgUBRgcAkQgsA4hbAGQhfAGhQiWQhHiGgijKQghjHAXiSQAYifBTgKQAvgGA4AhQAXANBRA+QBFA1AyAWQBIAgBKgHQBJgGARg2QAGgVAAhgQgBhRAcgqQApg9BwgRQBxgSBjAqQBFAeBVBJQBtBgAUANQBIAxBEgHQBFgGBEgZQAfgMBWgnQCXhHCKgGQC0gHCLC7QB9CoAYDZQAJBZgkBGQgbAyg+A5QhZBQgKALQgwA3gHA7QgSCYgzBPQg8BehxADQg0ABgah7QgGgdgej2QgYi+gkheQg1iEhggNQhfgNg4B3QgdA/g0DWQgwDKgyBZQhLCLh+ANQgQABgQAAQhrAAhJhQg");
	this.shape_118.setTransform(465.3,1115.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F6D1A3").s().p("AjpEVQg0grAlhmQA4h5ANg6QAIgkACgxIADhLQAGhNAvgXQAkgSARApQALAbAJBMQAJBWAIAdQAPA4AfAEQAgAFAHgXQAEgNgDgqQgEgpAIgTQALgdAngEQApgFAkAzQAfAuAUBMQATBHABBDQABBFgUAcQgoA6i8ATQg0AGgrAAQhvAAgtglg");
	this.shape_119.setTransform(258.8,544);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F1B64D").s().p("AmqLbQhlgOgbgcQgsguBDi5IA5iWQAghUAGgtQAFgmgBhcQAAhqACgqQAMiuBcgGQAygDAdAyQAQAbAaBXQAYBRAYAiQAkA0A9AAQB5ABAmiaQAYhjgHjGQgGieALg9QANhSA0gfQAqgZAbBXQAPAyAWB4IAcCAQAOAyATADQAKABgCgqIgHhhQgHiRAvgMQAygMAOCMIAJCCQAGBTAIAtQAOBNA0DyQAoDYgWA6QgaBDg2AEQgyAEgpgxQgQgUgGhQIgIigQgMjag4gRQhBgUgPBMQgHAhAEBmQAAAOANBRQANBVAEA7QAMDHhPBcQhZBnknASQgrACgoAAQhIAAg/gIg");
	this.shape_120.setTransform(275.5,508.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#61B26F").s().p("AinC9QAFgJAAgNQAAgagdgTQgdgSgugBIgpADIAbgQQAjgRArgFQAigFAjAbQARANAKAOQgGgRgOgXQgcgtgrgbQgmgWhAgSIg3gNIA0ABQA8ACAsAIQArAIAuAwQAYAYAOAWQgFgYgPgjQgchFgvg5Qgug5hFgUIg7gIIBDgJQBPgDA/AjQA/AkAdBKQAPAlACAeQACgYAMgdQAYg6A1gZQAygYBKAWQAkALAbAQQgYABgfAHQg/ANgnAdQgmAcgIBCQgDAiAEAbQAJgRAUgWQAngqAzgRQBIgaA+AjQAgAQAQAXQgfgJgogDQhQgGgtAfQgyAigNBEQgGAiADAbg");
	this.shape_121.setTransform(179.1,458.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#386741").s().p("AgECKQgVgMgRABQgRABgQAGIgMAGQASgYAWgTQAOgMASgDQAJgCAGABQgEgGgHgHQgPgOgSgEQgSgDgTAAIgPABIAdgMQAfgMAKAAQAQgBAGACQgIgJgNgKQgZgTgTgGQgUgGgcgGIgZgFIASgFQAVgFAVAEQAiAHAPAIQgJgHgJgLQgUgVgHgUQgHgTAAgYIADgVIAeAmQAiAnARAKQAaARAsACQgSgZgBgRQgBgLACgRIADgPIAIAVQAKAYAPAOQAXAWAhAcIiDCrIgQgNg");
	this.shape_122.setTransform(135,366.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#61B26F").s().p("AgGEOQAEgnAQgoQAOggAogPQAVgIARgCQgSgEgaABQg1ABgtAYQgoAUgwAtQgYAXgPASQAqhLAwg1QAcghBAgPQAigHAagBQgXgIgmgFQhLgMhIALQhJAKgzAxQgaAYgMAWQAHgbAUgjQAmhFA/gkQA+gjBOANQAmAHAcANQgUgNgSgaQglgzAGg6QAFg4A4gzIA3gpIgVAzQgUA9AEAwQAFAwA1AoQAbAVAaAKQgKgRgIgcQgQg3AKg1QAOhMA+gjQAUgLAWgFQALgDAHgBIgwA3QguBBAEA3QAEA8AzAuQAaAWAZALIicDTQgFgJgLgGQgXgNgfAPQgfAOgYAoQgLAUgGARQgBgMABgUg");
	this.shape_123.setTransform(121.3,361.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F6D1A3").s().p("AkTEZQgMg3gOieQgTjWBAiOQAdhABBgGQAggDBIARQAjAIBKgQQApgIBHgQQAwgIAbAQQAgATAUA9QA1CmhyAyQgzAXg5hKIgrg2QgYgagVACQgsADgvB6QgrBvAABNQAABPgbBOQgeBbgwASQgGACgGAAQglAAgUhjg");
	this.shape_124.setTransform(286.3,406.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F1B64D").s().p("AhSJCQgohqgYh+QgNhJgNkyIgKkkIkQh9IktgoIDniaIEggmQE2gkBwADQBwADDwBRQB5ApBhAoIhlCnIhaA6IAMCUQAMCfgBAuQgDBIgoB7QgsCLgpAEQgoAFg3iAQgrhngRhRQgGgcgTgTQgTgSgXgBQg4gDgHBfQgDAjgEB4QgFB7gLBUQggEDhfAKIgDAAQgzAAg1iKg");
	this.shape_125.setTransform(265.6,400.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D76837").s().p("EAYJBJWQgjhngPiCIgIhsQgeg9g8g+Qh5h9iYgIQhRgEgkA8QgXAogMBiQgNBrgNAhQgaBBhCACQg+ACgYkZQgVmhgVkOQgmnzhVljQhyngjUkrQjMkgqhlxQj9iKl/i6Iqck/QspmFlHjmQnVlKBZkAQCknXVgowQGuivHzijQD6hRCjgvIDE0MIgPsrIhnkQImLggIEJjvIHFhsIBShzII8AkIAMCZIF/CXIi/FMIAYTOIC1MhQi4BHkPB0QoeDom0DjQpkE/k3EGQmGFJBoDfQCaFNLfEtQHgDFMRDHQNqDdKWGUQIQFDFxGpQEIEvCdFEQBPCiAaBlIATBkQAUB5gBBpQgBFSjGA3QhnAcgtCGQgSA0ghDWQgaCngxBCQhFBeiVgeQhbgRgthkQgcg8gYiQQgZiOgXgwQgnhThSAHQhQAHghDBQgMBHgLB+IgSDkQgaEkgzCTQhKDRiVAfQgpAJgmAAQjVAAhgkXg");
	this.shape_126.setTransform(262.5,804.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FAE485").s().p("AjCj2IGFBdIlJGQg");
	this.shape_127.setTransform(341.6,487.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F2BC5F").s().p("AkFAYIILiLIiHDng");
	this.shape_128.setTransform(348.4,460.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CD6C38").s().p("AgTjIIFxDoIq7Cpg");
	this.shape_129.setTransform(363.1,492.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FAE485").s().p("Ai9jSIF7BbIj+FKg");
	this.shape_130.setTransform(328.6,442.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EBA24D").s().p("Ai4AAICHjoIDqHRg");
	this.shape_131.setTransform(379.6,472.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#CD6C38").s().p("AgHikIENC9IoLCNg");
	this.shape_132.setTransform(348.4,446.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F2BC5F").s().p("AjxANIHkh0IhqDPg");
	this.shape_133.setTransform(333.9,419.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FAE485").s().p("AiWioIEtB2IiTDbg");
	this.shape_134.setTransform(309.2,404.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EBA24D").s().p("AiGAJIBpjPICkGNg");
	this.shape_135.setTransform(361.1,429.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#CD6C38").s().p("AhehtIFRBnInkB0g");
	this.shape_136.setTransform(333.9,410);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EBA24D").s().p("AiogFIB6hbIDXDBg");
	this.shape_137.setTransform(341.2,399.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F2BC5F").s().p("AjTg6IGnAbIh5Bag");
	this.shape_138.setTransform(315.3,393.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FAE485").s().p("AjnlPIHPDJImLHWg");
	this.shape_139.setTransform(351.3,546.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F2BC5F").s().p("AldgPIK7ipIjsFxg");
	this.shape_140.setTransform(363.1,514.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#CD6C38").s().p("AgijqIHRD1Qg/AZhaAfQixA9h6AeQh8AeibAbIiCAUg");
	this.shape_141.setTransform(378,556.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EBA24D").s().p("AjoA+IDslxIDlJng");
	this.shape_142.setTransform(397.8,526.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FAE485").s().p("AiugkIFeh3IiHE3g");
	this.shape_143.setTransform(354.1,393.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F2BC5F").s().p("ACCj3IAuF3IleB3g");
	this.shape_144.setTransform(354.1,365.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CD6C38").s().p("AgxknIFxC+QgVAegoAqQhQBTheA7QhcA8imBFIiSA6g");
	this.shape_145.setTransform(453.1,527.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FAE485").s().p("Aj5kzIHzAZIkNJOg");
	this.shape_146.setTransform(423.1,526.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EBA24D").s().p("Ai4BAIBsk9IA3BiQA+ByAsBQQAsBRAhBMQAPAlAIAVg");
	this.shape_147.setTransform(466.6,491.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F2BC5F").s().p("AkvCGIJfkkIhsE9g");
	this.shape_148.setTransform(428.5,482.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FAE485").s().p("AjojoIHRAAIjmHRg");
	this.shape_149.setTransform(397.9,472.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#CD6C38").s().p("AhJjoIF5CsIpfElg");
	this.shape_150.setTransform(428.5,472.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#EBA24D").s().p("Ai8A3IBQkZIBABZQBDBhAYAoQAnBBBnCig");
	this.shape_151.setTransform(440,443.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F2BC5F").s().p("AkQCNIIhkZIhREZg");
	this.shape_152.setTransform(401.9,435.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FAE485").s().p("AijjGIFHAAIijGNg");
	this.shape_153.setTransform(374.5,429.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CD6C38").s().p("AhtjGIF+B1IohEYg");
	this.shape_154.setTransform(401.9,429.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EBA24D").s().p("Ai+BNIBckOIA2BIQA+BUAuA5QBJBfA2BPg");
	this.shape_155.setTransform(410,401.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#F2BC5F").s().p("AjRCIIGjkPIhcEPg");
	this.shape_156.setTransform(379.1,395.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CD6C38").s().p("AhKibIEcApImjEOg");
	this.shape_157.setTransform(379.1,393.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#EBA24D").s().p("Ah2CnIgul2IA0A/QA9BJAoA2QA9BWBzCLg");
	this.shape_158.setTransform(383.6,361.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CD6C38").s().p("AEyDjQjKAAihgRQihgRiQgiIhwgfIHzliIHCHCQg8ADhVAAIgYAAg");
	this.shape_159.setTransform(172.6,568.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EBA24D").s().p("AjgiBIHBjAIAAKDg");
	this.shape_160.setTransform(197.6,558.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#386741").s().p("AidgpIARgNQARgPAFgRQAFgQgBgSIgCgNIAKAPQAMATAGARQAHARgCASQgBAJgDAFIAQgGQASgKAJgQQAPgaADgXIACAfQACAhgDAKQgEAQgEAGIAYgPQAbgRALgRQAUgbATglIAAASQgCAXgLASQgKASgLAOIgIAJIAXgLQAagMAVgBQAUgBAXAIQAMAEAHAFQhUAegYAUQgQANgNAZIgLAXIARgEQASgEALACQAQAFAYANIgXABQgaACgRAKIhBAmg");
	this.shape_161.setTransform(448.1,432.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FAE485").s().p("Ah7kzIF1EEInzFjg");
	this.shape_162.setTransform(150.1,550.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F2BC5F").s().p("AmbiBIM3BEInBC/g");
	this.shape_163.setTransform(178.9,532.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#CD6C38").s().p("AmbBHIHtjRIFKEVg");
	this.shape_164.setTransform(178.9,512.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EBA24D").s().p("AjEg8IGKicIhCGwg");
	this.shape_165.setTransform(206.9,504.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FAE485").s().p("AhXjXIFODeIntDRg");
	this.shape_166.setTransform(162.4,498.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F2BC5F").s().p("AlshvILZBEImKCbg");
	this.shape_167.setTransform(190.1,487.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#CD6C38").s().p("AlsBmIGtkPIEsFTg");
	this.shape_168.setTransform(190.1,466.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#EBA24D").s().p("AjGheIGMiWIhgHpg");
	this.shape_169.setTransform(216.5,458.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FAE485").s().p("Agmj8ID9DqImtEPg");
	this.shape_170.setTransform(175.1,451.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#F2BC5F").s().p("AlFh0IKKBVImMCUg");
	this.shape_171.setTransform(203.8,437.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FAE485").s().p("ABckKICEGEIm/CRg");
	this.shape_172.setTransform(193.6,399.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FAE485").s().p("AiMDIQAdhgAmhjIBKjIIAehRICEFGIlFDjQAHgcAPgxg");
	this.shape_173.setTransform(76.2,526.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#61B26F").s().p("ACsEcQguhCg1gPQg5gRg8AhIgyAkIiRjaIAUgKQAUgRgEghQgEgjgdgjIgcgeIAeAKQAkASAfAdQAZAYACAqQAAAWgFAQQAKgOAJgYQARgzgHgyQgGgtgag9IgZgzIAgAqQAlAwAUAnQAWAmgIBCQgEAhgIAZIAhg0QAkhDAOhIQAOhHgbhCIgegzIAwAuQA0A8AMBGQANBHgnBGQgMAWgQASIgNAPIAxgXQA+gQA0AXQAzAZAdBGQAOAjAFAfQgQgSgYgTQgzgogugNQgvgLg5AkIguAnIAwgCQA6AEAuAcQBCAnAMBHQAGAigHAcQgMgegXghg");
	this.shape_174.setTransform(455.3,422.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#CD6C38").s().p("ADZDfQiDglh2gyQh3gxhjg7IhKgxIFEjjIFFHxQgqgIhCgSg");
	this.shape_175.setTransform(92.5,556.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EBA24D").s().p("Ajhi9IHDh2Ih/Jng");
	this.shape_176.setTransform(115.1,550.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F2BC5F").s().p("AklijIJLDRInDB2g");
	this.shape_177.setTransform(108.3,515.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FAE485").s().p("AgwAVQAmhjAjhRIAdg/IBKEBIj/C8QATgsA8ieg");
	this.shape_178.setTransform(92.1,476.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#CD6C38").s().p("AkjgKID/i8IFIGNg");
	this.shape_179.setTransform(108.5,499.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EBA24D").s().p("Ajyi0IHmgjIifGvg");
	this.shape_180.setTransform(129.2,498.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F2BC5F").s().p("AkXiCIIvDgInyAlg");
	this.shape_181.setTransform(125.6,467.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FAE485").s().p("AgbgIIBwjmIA8D5IkhDkQAqhgBLiXg");
	this.shape_182.setTransform(112.1,430.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#CD6C38").s().p("AkXABIEhjiIEOHDg");
	this.shape_183.setTransform(125.6,453.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EBA24D").s().p("AjejGIG9g2IiwH5g");
	this.shape_184.setTransform(148.9,451.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#F2BC5F").s().p("Aj8h8IH5DDIm9A2g");
	this.shape_185.setTransform(145.9,418.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FAE485").s().p("AgbgJQA0hOA4hKIAvg7IArDxIlVDIQBGh8BJhqg");
	this.shape_186.setTransform(137.7,384.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#CD6C38").s().p("Aj8AFIFVjHICkGFg");
	this.shape_187.setTransform(145.9,406.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EBA24D").s().p("Ajvh7IHfiPIk7IVg");
	this.shape_188.setTransform(178.8,399.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F2BC5F").s().p("AkEh4IIJBjIneCOg");
	this.shape_189.setTransform(176.7,374.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#ECA342").s().p("AovCDIoLhkIFfmAIJcilIMJAqIGxEgIkxHuIt7g4Ik6ENg");
	this.shape_190.setTransform(258.8,359.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EBA24D").s().p("AicAUIE5kMIhuHxg");
	this.shape_191.setTransform(231.6,409.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#CD6C38").s().p("AlFAeIG/iQIDLDlg");
	this.shape_192.setTransform(203.8,422.8);

	this.instance_15 = new lib.Path_91();
	this.instance_15.parent = this;
	this.instance_15.setTransform(315.6,560,1,1,0,0,0,225.6,45);
	this.instance_15.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]}).wait(1));

	// Layer 15
	this.instance_16 = new lib.sunlayer();
	this.instance_16.parent = this;
	this.instance_16.setTransform(359.4,325.9,1,1,0,0,0,359.4,325.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// FlashAICB
	this.instance_17 = new lib.Path_6();
	this.instance_17.parent = this;
	this.instance_17.setTransform(315.7,996.8,1,1,0,0,0,20.6,32.4);
	this.instance_17.alpha = 0.68;

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgmA0Qgngzg3gBQA3AAAngzQAmgzAAhHQABBHAnAzQAmAzA3AAQg3ABgmAzQgnAzgBBHQAAhHgmgzg");
	this.shape_193.setTransform(251.1,287.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#6FB77F").s().p("AjmD+Ig2lbIAsgsIAeE+IAMl9IBJhDIg8HJIB2nxIBgADIi2HwIDUnWIBfAzIkWG7IEhl9IAtA1IjuEjIDojtIAmA5IjsDUIDpipIAtA0IlJDWg");
	this.shape_194.setTransform(642.5,572.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#EBA24D").s().p("Ah5hsIDzhGIjzFkg");
	this.shape_195.setTransform(595.4,576.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FAE485").s().p("AhXjXICvC4IiRD3g");
	this.shape_196.setTransform(574.4,568.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#CD6C38").s().p("AhIBoICRj3IAAEfg");
	this.shape_197.setTransform(575.9,580.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F2BC5F").s().p("AjRhbIGjBxIjzBGg");
	this.shape_198.setTransform(586.6,556.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#EBA24D").s().p("Ahzh1IDohKIhdF/g");
	this.shape_199.setTransform(605.2,539.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FAE485").s().p("AgXi8ICjC2IkXDEg");
	this.shape_200.setTransform(579.6,528.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#CD6C38").s().p("AjRAqIEWjEICNE1g");
	this.shape_201.setTransform(586.6,543.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#F2BC5F").s().p("AjFhaIGMBrIjoBKg");
	this.shape_202.setTransform(597,518.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#CD6C38").s().p("AjFBFIEWj1IB2Fhg");
	this.shape_203.setTransform(597,502.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FAE485").s().p("ABfjaIAtDBIkXD1g");
	this.shape_204.setTransform(591.1,487.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EBA24D").s().p("Ahwg2ID+hPIkbELg");
	this.shape_205.setTransform(624,582.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#CD6C38").s().p("AiSBOIEmirIgeC7g");
	this.shape_206.setTransform(598,586.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FAE485").s().p("ABhiyIAzC4IkmCsg");
	this.shape_207.setTransform(598,576.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#F2BC5F").s().p("AiYhbIExBoIj+BPg");
	this.shape_208.setTransform(622.9,568);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EBA24D").s().p("AhegiIC9jLIhgHbg");
	this.shape_209.setTransform(638.5,545.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#CD6C38").s().p("AiYAfIDUinIBdERg");
	this.shape_210.setTransform(622.9,555.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FAE485").s().p("AgNi/IB3DYIjUCng");
	this.shape_211.setTransform(618.3,539.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#F2BC5F").s().p("AiahrIE1AOIi9DKg");
	this.shape_212.setTransform(632.4,531.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#EBA24D").s().p("Ag3gnIBHiHIAJAXQALAoAHBTQAKB8ADBPg");
	this.shape_213.setTransform(642.3,504.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#CD6C38").s().p("AiaBdIDFjHIBwDVg");
	this.shape_214.setTransform(632.4,511);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FAE485").s().p("AhOj4ICxEpIjFDIg");
	this.shape_215.setTransform(626.8,495.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#F2BC5F").s().p("Ah8iUID5CiIhICHg");
	this.shape_216.setTransform(631.4,485.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FAE485").s().p("AhZi7ICzDFIhGCyg");
	this.shape_217.setTransform(542.9,559.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#CD6C38").s().p("Ah2AdIBGixICnEpg");
	this.shape_218.setTransform(556.8,575.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#EBA24D").s().p("AhThSICIiFIAfGvg");
	this.shape_219.setTransform(560.3,568.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#F2BC5F").s().p("AiehiIE8BBIiJCEg");
	this.shape_220.setTransform(549.8,550.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FAE485").s().p("AAwjlIA9EOIjZC9g");
	this.shape_221.setTransform(544.8,517.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#CD6C38").s().p("AieA+IDai7IBiD8g");
	this.shape_222.setTransform(549.8,534.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#EBA24D").s().p("Ahqg+IDVh+IhzF6g");
	this.shape_223.setTransform(566.5,528.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#F2BC5F").s().p("AiJiGIETCQIjVB+g");
	this.shape_224.setTransform(563.4,508.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FAE485").s().p("AhLBeIBUh5QAwhFAdgcQAPgPAFgBIgGCZIjNCAg");
	this.shape_225.setTransform(560.2,480.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#CD6C38").s().p("AiJgIIDNh/IBGEPg");
	this.shape_226.setTransform(563.4,495.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#EBA24D").s().p("AhEhnICJiRIgUHxg");
	this.shape_227.setTransform(612,495.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#EBA24D").s().p("AiXg0IEvimIjpG2g");
	this.shape_228.setTransform(585.4,487.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#F2BC5F").s().p("AhahgIC1AyIiICPg");
	this.shape_229.setTransform(609.7,475.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#F2BC5F").s().p("AiRhFIEpgNIkvClg");
	this.shape_230.setTransform(585.4,473.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#61B26F").s().p("Ak0E0QALgOABgWQADgtgsgnQgtgnhNgLIhEgEIAvgVQA+gVBIAAQA6ABA0A0QAaAbAPAaQgGgegUgqQgohUhEg2Qg8gxhmgtIhZgjIBVANQBkATBGAXQBHAYBGBcQAjAuAUAqQgFgqgThAQglh+hEhsQhEhshvgxQgigPgjgIIgcgEIAggDQAogCApAEQCEAOBiBLQBjBKAlCFQASBDgBAzIAGgZQAKggAQgdQAyheBbgfQBXgeB2A3QA7AbApAhQgngDg1AEQhqAJhFAoQhEAngWBwQgLA5ACAwIA3g7QBIhABWgUQB8gcBhBKQAxAlAYArQgygXhBgPQiEgdhQArQhXAvggByQgQA5ABAvg");
	this.shape_231.setTransform(616.9,438.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#67A7A7").s().p("AhBApQgfgIgDgSQgDgQAcgSQAbgRApgGQApgHAfAJQAfAIADASQADAQgbASQgcARgpAGQgRADgRAAQgUAAgSgFg");
	this.shape_232.setTransform(238.9,869.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#67A7A7").s().p("AhBApQgfgIgDgSQgDgQAcgSQAbgRApgGQApgHAfAJQAfAIADASQADAQgbASQgcARgpAGQgRADgQAAQgVAAgSgFg");
	this.shape_233.setTransform(46.7,789.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#61763D").s().p("AhBApQgfgIgDgSQgDgRAcgRQAbgRApgGQApgHAfAJQAfAIADARQADARgcARQgbARgpAHQgSADgQAAQgVAAgRgFg");
	this.shape_234.setTransform(109.2,732.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#67A7A7").s().p("AgqASQgTgFgBgIQgBgIASgHQASgIAagCQAZgCAUAFQATAEAAAJQABAHgSAIQgSAIgaACIgPAAQgQAAgNgDg");
	this.shape_235.setTransform(273.9,783.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#61763D").s().p("AgCAoQgtgEgfgPQgegOABgPQACgRAggJQAhgJAsAEQAsAEAfAOQAfAPgCAQQgBAQghAJQgXAGgcAAIgZgBg");
	this.shape_236.setTransform(520.1,932.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#67A7A7").s().p("AgDAoQhZgIg+gRQg+gRABgQQACgRBAgGQBBgGBYAIQBZAIA+ARQA+ARgBAQQgCARhAAGQgbACggAAQgrAAgzgEg");
	this.shape_237.setTransform(483.4,728.9);

	this.instance_18 = new lib.Path_92();
	this.instance_18.parent = this;
	this.instance_18.setTransform(575.2,587.7,1,1,0,0,0,52.1,15.2);
	this.instance_18.alpha = 0.66;

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#61763D").s().p("AgGBLQiogPh1ggQh1ggADgfQADgfB5gMQB4gLCoAPQCoAPB1AgQB1AggDAfQgCAfh5AMQg1AFg9AAQhQAAhfgJg");
	this.shape_238.setTransform(616.9,861.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#67A7A7").s().p("AiIA0Qg9gDgCgSQgDgSA5gUQA4gWBTgNQBSgNA9AEQA9ADACASQADASg5AVQg4AWhTAMQg/AKgzAAIgdgBg");
	this.shape_239.setTransform(63.8,699.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#61763D").s().p("EAyuAUNQl8gwjUk5QhChigphwIgchdQiLAaipAKQlTAUichPQhVgrgahNQgUg8AMhiQAUhyAHg4QANhigUg8QgghigJgQQgVgugtgbQgwgdhqgdQhcgYjUgsQkZg6vOCoQkxA1lSBFIkUA6QhkAWh2AtQjrBdhaB8QixD2lIBGQjzAzlhgsQjpgchnjDQgWgsghheQgYhCgQgKQgTgKiMAVQjmAjhEAHQmuAvhbiBQhdiFAljcQAMhFAYhFIAUg3Il7ljQLgjyPIiCQQtiOUrAAQTlAAUPDxQT4DtQtGoIB7MbQivDzj6DpQnHGmljAAQglAAgkgFg");
	this.shape_240.setTransform(398.2,628);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#917556").s().p("AkJLQQg5gGAOl2QAKjDAChRQAEiHgNgcQgNgdgfgfIg5g2QhEhDAKhFQAFggAegJQAWgGA3AEQBTAGAZAAQBGAAA7gQQBagYD7inQByhLAqgXQBEgmAOAPQAWAZjRD9QjyEnghA+QgYAvgkCNQgVBTgsC8QhTFUg5AAIgCAAg");
	this.shape_241.setTransform(667.2,1197.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#74542E").s().p("AqIVIQg0gngXjIQgTidADjFQABhDAqiyIBTlSQBpmzg/goQhXg5gth1QgziCAVifQASiKBnhlQAhggAkgYIAfgRIAVAHQAeAIAsADQCNAJDjgvQDjgvEthwQCWg4BpgvIAGBNQACBqgZCQQgOBQgyBDQgpA3hPBAQgvAmhsBSQhkBQhHBKQiNCTiaHoQgnB4hFDzQg3DDgVA3QhNDJhxDDQh0DKg2AAQgJAAgHgFg");
	this.shape_242.setTransform(677.9,1233.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#644725").s().p("Atde+QgjgYgahFQg8ifAXj9QAJhlAQmBQAZozAKjAQA0wJBGj4QBJj/CAizQAog4ApgqIAggeIBEADQBWADBdgFQEogPEAhVQEBhVDUhtQBCgiA2ghIApgZIgXCpQghDRgxDAQibJnj6DhQiKB8hUDFQhCCdgvDyQgbCOguEpQguEKg4CuQh3FnkfExQhdBhhxBfIh/BoQgSAQgTAAQgPAAgQgLg");
	this.shape_243.setTransform(673,1286.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#917556").s().p("AobVsQgjgagKhAQgIg3AJhqQAkk2ANjnQAQkeg3kzQgOhOgjihQgfiQgMhMQggjLBSj0QBMjfCHijQAbggCugcQCagYDTgMQDPgMCRAHQCfAHACAbQAEA1iMA2QhwAskqBMQh/AhhJA4Qg/AwgnBNQgSAigsB2QgnBpgoBDQgxBTgBBYQgBBBAdBtQAtCkAIArQAbCHgFCIQgNFThfGoQgsDGgrBpQgnBfgfAAQgHAAgGgFg");
	this.shape_244.setTransform(375.3,1285.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#74542E").s().p("ANnbuQksixiDkiQhFiag6mnQggjug4pCQgzoUggjLQgylBg9gKQjwgmh0IYQgnC1gUDfQgOCiACBYQACDFg3FwQhKHih1C5QhxCyjFA4Qg9ASg/ADIgyAAQhlp4gdj9QgLhpgIjoQgJkCADkDQAGq1BPjPQAUg1AviWQAfhlAfgyQAphFBOgzQBVg4Cbg1QEKhcFFggQCtgRDugMQCVgQC1BHQDCBMCCCMQC0DDAyEYQBIGWi7JcQhgE1APEWQAMDVBRDgQAuB/BfDTQBGCtgIByQgQDng9BfQgfAwgbABQh8geiWhYg");
	this.shape_245.setTransform(413.2,1309.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#644725").s().p("EgTKAnDQgthJgIhDQgGg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBODYA3HOQAUCvgOC9QgLCPgkDKIhBFeQgjDRgJCsQgKCyA4EGQAeCOBbFBQBPEcAWCAQAgDGgtBbQgvBdivAdQiGAXkHgKQk5gRiegEQkUgIinAdQiyAei/CtQiDB2iuDhQjCD7gjAkQg9A/gnAAQgaAAgRgag");
	this.shape_246.setTransform(423.9,1368.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#C6DA92").s().p("AgUQbQhogDjPgzQjMgxjkhMQofi1ipiUQhhhVAOhKQALg2BLg8IA9guQAigZANgQQAngsg4gkQgagQjaAaQlyAtiQAMQs0BEoSivQkihejOk0Qi7kVhsmyQCvEND2CKQHxEXI0CXQDRA4D/AwQA1AKFrA/QB+AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBvBegDBnQgBAzgXAgIBMgLQBigMBsgHQFXgUE3AyQCeAaCAAkQAaAICKAtQBEAXApAAQA0ABBLgdQBBgYB2hDQCNhSBLgqQEXibCFAAQB9AABoBBQBEAsAUAJQA5AdBDANQB/AZFajUQBNgwCthxQCBhUAkgRQAsgUBRAgQA1AUB1BCQCIBOBAAeQB3A5BgAQQC1AgFwAgQC3AQCTAKQgsCv55CjQoFAzpqArIoCAhQhpAJiAA1QgzAWitBXQiMBHhdAfQh8Aoh1AAIgTAAg");
	this.shape_247.setTransform(183.7,1053.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#C6DA92").s().p("AqlC0QhEgEgJi0QgCg4ADhDIAEg4IAPAeQAWAlAgAfQBnBjCoAMQCNALF1gyQF0gzEXhDQhmBMiQA9QjaBgmtAyQkOAgirAAQg3AAgsgEg");
	this.shape_248.setTransform(686.7,1099);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#A6BD55").s().p("AusUYQhngDjQgzQjMgxjjhMQofi2ipiTQhihVAOhKQALg2BMg8IA9guQAhgZAOgQQAmgsg3gkQgZgQjcAdQlqAxiaANQs1BKoOi9QmuiajTodQhKi8hCkfQhCk5gjiIQAoA9CeCeQCdCdC+CqQHfGqCLAaQBLAOAwhqQARgnAXhLIAqiGQA5itBPhZQBuh8CygLQDLgMCDCDQBVBUBmDZQA8B/AVAoQAxBcAwA8QB7CaC3AWQC1AWBxiXQBLhkBVj/QBgkhA1hgQBoi9CeghQE4hBIRFuQCwB6DFCnIDjDJQBLBEBHBpQAxBJBGCDQBXCgAeAyQBFB0BFBOQA6A3DXhZQCVg+E2irQF+jTBngzQD6h8BkACQB+ACCsCmQAtAsBSBVQBEBDAmAWQBhA6GyhDIFXg2QC6gbBcABQBvACCMAnQBAATCwA+QCQAzBPAQQB1AXBTgXQCagpFPlTQCoiqCJiiQgCAGgQCpQgaDLgxCsQiZIslIBrQvFE8kJjOQhOg9gQhvIgIhBQgCgZgMADQoHCP3BCoQnKA0n2AxImYAmQhpAJh/A1QgzAWitBXQiNBHhdAeQh8Aph2AAIgTAAg");
	this.shape_249.setTransform(274.6,1026.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#2B4C43").s().p("AjZKrQgLvzBmnsQBnnqBfjBQAeg8AagXIAUgLIBHFsIgVAcQgbAngbAzQhXCjg5DcQh4HagtPPQgXHoACGJQgamYgFn7g");
	this.shape_250.setTransform(598.8,1239);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#8CAC50").s().p("EgllAzeQhogDjQgzQjMgxjjhMQogi2ioiTQhihVAPhKQALg1BMg9IA8guQAigZAOgQQAmgsg3gkQgagQjaAaQl2AtiMAMQs0BEoSivQmpiMjwpHQjPn3gproQgkqYBmptQBlpgCwjlQDkkpGbj7QHLkZKQjKUAYDgHcAmCAAAQUeAAVHEHQUxEDRAHLQRkHZJ4JOQKmJ4AAKbQAAEk5KNxQslG5slF+IAbA/QAYBOgOBRQgtEBmcC1QjaBgmvAyQljApi5gNQhEgFgIi0QgDg4AEhDIAEg4QgsCv56CjQoFAzppArIoCAhQhqAJh+A1Qg0AWisBXQiNBHhdAeQh9Aph1AAIgTAAg");
	this.shape_251.setTransform(424,827.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#917556").s().p("AHpbSQgvhVggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAcQgnAMieBTQiCBEhCgBQhggCgjh/QguingZi6QgVieAAh3QAAhYHMASQDmAIDlAaIBiAbQB1AhBjAmQE+B6ARB0QAPBkgPCOQgJBWgjDEQhOG1AAEWQAAE7A1GhQAcDbApENQAFAsAVBrQAVBqAHA9QAXDQhNCjQhJCdhKAHIgGAAQg7AAg2hhg");
	this.shape_252.setTransform(159.7,1357.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#74542E").s().p("EAJMAoKQh2gSg6g1QgSgQgKgSIgGgPQgjgPghgqQhEhVAGiKQAGiChZhpIhUhbQg0g6geg4Qg3hih6o0QiDpegnhmQgZhDhVifQh7jkgthbQjrnZhqnHQh8oTgVlTQgHhuAEhoQAFhgAAgjQAAhYRahXQItgsItgbIg3GDQg3GaAAB2QAABfAIJEQAFIpgNBcQgPBxAAEFQAAEHAPCOQAFAwAeDgQAgD2AQDHQAzJzhXEUQhiE7hzB1QhTBThzAAQgbAAgdgFg");
	this.shape_253.setTransform(166.8,1383.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg3hih6o0QiDpegmhmQhGi4igkiQiokwkmnWQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_254.setTransform(153.3,1345.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#523821").s().p("Egc5A/GQkihKjKlEQiikDh2m/Qg7jehpoeQhSmsg8iNQhJivjYhrQiThJkphGQlnhVhkgjQjrhShfiCQi0j1hknkQgciFgpkEQgnj0gWhmQgfiNhuhRQhWg/irgvQjPgxhwggQjFg4iIhSQkNiij3tMQhOkHhBksIgzj4MDMhgQwICWV+QlNJomLKfQsVU+k5EPQiqCUj5B4QixBVkuBrQmgCThRAgQkYBujDB3QlsDelWHaQgwBCjUE5QiUDahgBwQhxCDjnA5QioAqk1APIkGALQidAHhqAKQkpAai6BJQi3BHjWDqQhBBIh3CPQh/Cag7BDQjiD9jCBkQijBUixAAQhjAAhogbg");
	this.shape_255.setTransform(419.6,1258.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-339,0,339).s().p("Eg6xAzhMAAAhoeMB1jAAAMAAABp7g");
	this.shape_256.setTransform(375.8,339.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.instance_18},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.instance_17}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._stage, new cjs.Rectangle(-309.4,-227.8,1413.1,1893), null);


(lib.win = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{finalStep:21});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
		
		
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		var canvas = this
		this.gotoLastpage.addEventListener("click",gotoLastpage)
		function gotoLastpage(){
			canvas.gotoAndPlay("finalStep");
			
			createjs.Sound.stop();
			
		}
	}
	this.frame_28 = function() {
		playSound("projectBGM20173172010",-1);
	}
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(8).call(this.frame_28).wait(6).call(this.frame_34).wait(4));

	// Layer 3
	this.instance = new lib.Symbol31();
	this.instance.parent = this;
	this.instance.setTransform(1009.2,588.7,2.58,2.579,0,0,0,68.9,78.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(1).to({regX:76,regY:77,scaleX:2.26,scaleY:2.26,x:980.5,y:606.1,alpha:0.2},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:933.6,y:626.6,alpha:0.4},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:886.6,y:647.2,alpha:0.6},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:839.6,y:667.7,alpha:0.8},0).wait(1).to({scaleX:1,scaleY:1,x:792.7,y:688.3,alpha:1},0).wait(3).to({_off:true},1).wait(17));

	// Layer 21
	this.instance_1 = new lib.Symbol30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.6,630.7,3.713,3.712,0,0,0,152.8,53.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(1).to({regX:153.6,regY:49.3,scaleX:3.17,scaleY:3.17,x:197.9,y:630.6,alpha:0.2},0).wait(1).to({scaleX:2.63,scaleY:2.63,x:281.2,y:647.2,alpha:0.4},0).wait(1).to({scaleX:2.09,scaleY:2.09,x:364.5,y:663.8,alpha:0.6},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:447.8,y:680.5,alpha:0.8},0).wait(1).to({scaleX:1,scaleY:1,x:531.1,y:697.1,alpha:1},0).wait(1).to({y:697},0).wait(3).to({scaleX:0.95,scaleY:0.95,x:525.1,y:640},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:523.1,y:582.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:526.4,y:525.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:536,y:468.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:553.3,y:414.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:579.4,y:363},0).wait(1).to({scaleX:0.68,scaleY:0.67,x:614.5,y:317.6},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:657.4,y:279.6},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:706.4,y:249.6},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:759.3,y:227.2},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:814.6,y:211.3},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:871.1,y:201,alpha:0},0).to({_off:true},1).wait(5));

	// Layer 3
	this.instance_2 = new lib.Symbol29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(606.8,623.5,1,1,0,0,0,291.7,59.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(1).to({regX:291.6,x:606.7,y:596.9,alpha:0.333},0).wait(1).to({y:570.2,alpha:0.667},0).wait(1).to({y:543.6,alpha:1},0).wait(1).to({y:517},0).wait(1).to({y:490.3},0).wait(1).to({y:463.7},0).wait(1).to({y:437.1},0).wait(1).to({y:410.4},0).wait(3).to({_off:true},1).wait(17));

	// Layer 4
	this.gotoLastpage = new lib.Path_9();
	this.gotoLastpage.parent = this;
	this.gotoLastpage.setTransform(605.3,687.2,1,1,0,0,0,382.2,671.2);
	this.gotoLastpage.alpha = 0;
	this.gotoLastpage._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gotoLastpage).wait(6).to({_off:false},0).wait(1).to({alpha:0.132},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.396},0).wait(1).to({alpha:0.528},0).wait(1).to({alpha:0.66},0).wait(10).to({alpha:0.55},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.33},0).wait(1).to({alpha:0.22},0).wait(1).to({alpha:0.11},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(11));

	// Layer 10
	this.instance_3 = new lib.Symbol25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(605.3,1075.4,1,1,0,0,0,375,285.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:true},1).wait(17));

	// Layer 9
	this.instance_4 = new lib.Symbol25();
	this.instance_4.parent = this;
	this.instance_4.setTransform(604.1,299.7,1,1,0,0,0,375,285.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:true},1).wait(17));

	// Layer 14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_1 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_2 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_3 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_4 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_5 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_6 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_7 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_8 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_9 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_10 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_11 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_12 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_13 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_14 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_15 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_16 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_17 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_18 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_19 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");
	var mask_graphics_20 = new cjs.Graphics().p("EgpLA95MAAAgg1MB11AAAMAAAAg1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_1,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_2,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_3,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_4,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_5,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_6,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_7,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_8,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_9,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_10,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_11,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_12,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_13,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_14,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_15,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_16,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_17,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_18,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_19,x:490.6,y:396.1}).wait(1).to({graphics:mask_graphics_20,x:490.6,y:396.1}).wait(18));

	// Layer 13
	this.instance_5 = new lib.Symbol26();
	this.instance_5.parent = this;
	this.instance_5.setTransform(654.3,567.3,1,1,0,0,0,47.5,0);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:true},1).wait(17));

	// Layer 14 copy
	this.instance_6 = new lib.Symbol27();
	this.instance_6.parent = this;
	this.instance_6.setTransform(604.2,687.1,1,1,0,0,0,377.1,105);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({_off:true},1).wait(17));

	// Layer 3
	this.instance_7 = new lib.fire();
	this.instance_7.parent = this;
	this.instance_7.setTransform(834.3,833.5,2.84,2.84,0,0,0,-365.9,56.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-367.3,regY:28.4,x:830.4,y:754.8},0).wait(19).to({_off:true},1).wait(17));

	// Layer 24
	this.instance_8 = new lib._stage();
	this.instance_8.parent = this;
	this.instance_8.setTransform(626.3,738.8,1,1,0,0,0,397.1,718.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21).to({_off:false},0).wait(17));

	// Layer 18
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgjDAB4QgyAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAyAAMBGHAAAQAyAAAjAjQAjAjAAAxQAAAxgjAkQgjAjgyAAgEgj8gA3QgXAXAAAgQAAAhAXAXQAYAYAhAAMBGHAAAQAiAAAXgYQAXgXAAghQAAgggXgXQgXgYgiAAMhGHAAAQghAAgYAYg");
	this.shape.setTransform(608.6,833.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},21).wait(17));

	// Isolation Mode
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgimAAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAMBFNAAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape_1.setTransform(609.3,829.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},21).wait(17));

	// Layer 17 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgjDABkQgpAAgegeQgdgcAAgqQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAAqgdAcQgdAegqAAg");
	mask_1.setTransform(608.3,833.6);

	// Layer 16
	this.instance_9 = new lib.Symbol17copy2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(139.5,833.6,1,1,0,0,0,234.4,10);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({_off:true},1).wait(17));

	// Layer 15
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.659)").s().p("EgjDABkQgpAAgegdQgdgeAAgpQAAgoAdgeQAegdApAAMBGHAAAQAqAAAdAdQAdAeAAAoQAAApgdAeQgdAdgqAAg");
	this.shape_2.setTransform(608.3,833.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_3.setTransform(430.8,792.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVCWQgKgCgIgEQgHgFgEgKQgEgIgBgNIABgGIACgIIAdAAQABAPAFAGQAFAGALAAIAIgBQAFgBADgFQAEgDACgHQABgGAAgLIAAgkQgFAHgJAGQgIAFgNAAIgJgBIgKgDQgGgDgFgFQgGgGgEgJQgEgJgCgNQgDgOAAgTIAAg8QAAgTADgMQACgNAEgKQAEgIAGgFQAFgFAGgDIAKgDIAKAAQAIAAAGACQAGABAFAFIAIAHIAGAJIADgWIAhAAIAADaQAAATgEAPQgDAQgIALQgIALgMAGQgMAFgQABQgLgBgKgCgAgHh4QgEACgDAFQgDAFgCAHIgBAWIAABKIABAUQACAJADAEQADAFAEABIAHADIAHgCIAGgEIAFgFIADgGIAAh8QgDgIgFgEQgFgFgIAAg");
	this.shape_4.setTransform(414.6,795.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhHg");
	this.shape_5.setTransform(398.3,792.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_6.setTransform(383.4,789.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},21).wait(17));

	// Layer 3
	this.instance_10 = new lib.Symbol22();
	this.instance_10.parent = this;
	this.instance_10.setTransform(476.2,608.2,1,1,0,0,0,181.6,181.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},21).wait(17));

	// Layer 3
	this.instance_11 = new lib.Path_8();
	this.instance_11.parent = this;
	this.instance_11.setTransform(603.9,1021.8,1,1,0,0,0,112.8,112.8);
	this.instance_11.alpha = 0.488;

	this.instance_12 = new lib.Path_8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(388.9,1209.9,1,1,0,0,0,112.8,112.8);
	this.instance_12.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).to({state:[]},21).wait(17));

	// Layer 8
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_7.setTransform(603.9,1021.7);

	this.instance_13 = new lib.ClipGroup_3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(603.9,1021.8,1,1,0,0,0,109.8,109.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah4C5QhuioiXgRQCXgPBuipQB1i0ADj+QAED+B2C0QBtCpCXAPQAQAAARAAIAAACQgRAAgQgCQiXARhtCoQh2C1gED9QgDj9h1i1gAmeAAQARAAAQAAQgQACgRAAgAl9AAIAAAAg");
	this.shape_8.setTransform(547.3,990.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#697E9B").s().p("Amls4IJvAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtkrCvIhMAsQgXANgzALIgvAIg");
	this.shape_9.setTransform(646,1027.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A0BAD3").s().p("Ah4MZIhMgsQksiviuktQitkrAAlcIAAjmQAAhbBBhBQBAhABbAAITfAAQBbAABABAQBBBBAABbIAADmQAAFciuErQitEtksCvIhMAsQg4AghBAAQhAAAg4ggg");
	this.shape_10.setTransform(603.8,1027.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicichWjKQhZjSAAjlQAAjkBZjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDSQhWDKicCcQicCcjLBWQjRBZjlAAQjkAAjShZgAmevXQjABRiUCUQiUCUhRDAQhUDGAADYQAADZBUDGQBRDACUCUQCUCUDABRQDGBUDYAAQDZAADGhUQDAhRCUiUQCUiUBRjAQBUjGAAjZQAAjYhUjGQhRjAiUiUQiUiUjAhRQjGhUjZAAQjYAAjGBUg");
	this.shape_11.setTransform(603.9,1021.7);

	this.instance_14 = new lib.ClipGroup_1_0();
	this.instance_14.parent = this;
	this.instance_14.setTransform(601.9,1023.8,1,1,0,0,0,109.8,109.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D3E9EB").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjeBXjMQBTjFCYiYQCYiYDFhTQDMhXDeAAQDfAADMBXQDFBTCYCYQCYCYBTDFQBXDMAADeQAADghXDLQhTDFiYCYQiYCYjFBTQjMBXjfAAQjeAAjMhXg");
	this.shape_12.setTransform(603.9,1021.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_13.setTransform(816.1,1209.9);

	this.instance_15 = new lib.ClipGroup_0();
	this.instance_15.parent = this;
	this.instance_15.setTransform(816.2,1209.9,1,1,0,0,0,109.8,109.8);

	this.instance_16 = new lib.ClipGroup_1_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(829,1222.1,1,1,0,0,0,122.6,122);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Am1QPQjLhWicicQicidhWjKQhZjRAAjlQAAjkBZjRQBWjLCcicQCcicDLhWQDRhZDkAAQDlAADSBZQDKBWCcCcQCcCcBWDLQBZDRAADkQAADlhZDRQhWDKicCdQicCcjKBWQjSBYjlABQjkgBjRhYgAmevXQjABSiUCUQiUCThRC/QhUDHAADYQAADZBUDGQBSC/CTCUQCUCUDABSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBRi/QBUjGAAjZQAAjYhUjHQhRi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_14.setTransform(816.1,1209.9);

	this.instance_17 = new lib.ClipGroup_2_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(814.2,1211.9,1,1,0,0,0,109.8,109.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3F4826").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMAAjfQAAjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDFBUCYCYQCYCXBTDFQBXDMAADfQAADghXDLQhTDFiYCYQiYCYjFBTQjLBXjggBQjeABjMhXg");
	this.shape_15.setTransform(816.1,1209.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Am2QPQjKhWicicQicidhWjKQhYjRgBjlQABjkBYjRQBWjLCcicQCcicDKhWQDShZDkAAQDlAADRBZQDLBWCcCcQCcCcBWDLQBYDRAADkQAADlhYDRQhWDKicCdQicCcjLBWQjRBYjlABQjkgBjShYgAmevXQi/BSiUCUQiVCThRC/QhUDHAADYQAADZBUDGQBRC/CVCUQCUCUC/BSQDGBTDYAAQDZAADGhTQDAhSCUiUQCUiUBQi/QBUjGAAjZQAAjYhUjHQhQi/iUiTQiUiUjAhSQjGhTjZAAQjYAAjGBTg");
	this.shape_16.setTransform(388.8,1209.9);

	this.instance_18 = new lib.ClipGroup_4();
	this.instance_18.parent = this;
	this.instance_18.setTransform(468.3,1158,1,1,0,0,0,191.2,163.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E8976B").s().p("AmqPzQjFhTiYiYQiYiYhTjFQhXjMABjfQgBjfBXjMQBTjFCYiXQCYiYDFhUQDMhVDeAAQDgAADLBVQDGBUCXCYQCYCXBTDFQBWDMABDfQgBDghWDLQhTDFiYCYQiXCYjGBTQjLBXjggBQjeABjMhXg");
	this.shape_17.setTransform(388.8,1209.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.instance_18},{t:this.shape_16},{t:this.shape_15},{t:this.instance_17},{t:this.shape_14},{t:this.instance_16},{t:this.instance_15},{t:this.shape_13},{t:this.shape_12},{t:this.instance_14},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_13},{t:this.shape_7}]}).to({state:[]},21).wait(17));

	// Layer 2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(10).p("EA6gAk3Mh0/AAAMAAAgp8QAAmdCfl6QCbltEZkZQEZkaFtiaQF5igGeAAMA1eAAAQGeAAF6CgQFtCaEZEaQEZEZCbFtQCfF6AAGdg");
	this.shape_18.setTransform(604.7,1118.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9DD89").s().p("Eg6fAk3MAAAgp8QAAmeCgl5QCaltEZkZQEakaFsiaQF6ifGdAAMA1eAAAQGeAAF5CfQFtCaEaEaQEZEZCaFtQCgF5AAGeMAAAAp8g");
	this.shape_19.setTransform(604.7,1118.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).to({state:[]},21).wait(17));

	// Layer 11
	this.instance_19 = new lib.bloodbar6();
	this.instance_19.parent = this;
	this.instance_19.setTransform(475.4,494.9,1,1,0,0,0,93.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},21).wait(17));

	// Layer 12
	this.instance_20 = new lib.Symbol15copy3();
	this.instance_20.parent = this;
	this.instance_20.setTransform(796.8,233.4,1,1,0,0,0,112,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},21).wait(17));

	// Layer 6
	this.instance_21 = new lib.Symbol21();
	this.instance_21.parent = this;
	this.instance_21.setTransform(459.9,611.2,1,1,0,0,0,144.8,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:true},21).wait(17));

	// Layer 7
	this.instance_22 = new lib.Symbol14();
	this.instance_22.parent = this;
	this.instance_22.setTransform(822,349.1,1,1,0,0,0,126,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({regX:126.1,x:845.2,alpha:0.857},0).wait(1).to({x:868.4,alpha:0.714},0).wait(1).to({x:891.5,alpha:0.571},0).wait(1).to({x:914.7,alpha:0.429},0).wait(1).to({x:937.8,alpha:0.286},0).wait(1).to({x:961,alpha:0.143},0).wait(1).to({x:984.1,alpha:0},0).wait(13).to({_off:true},1).wait(17));

	// Layer 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_20.setTransform(861.5,169.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_21.setTransform(845.1,169.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA+B0IAAitIgBgNIgDgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAGgFIALgJIANgEIAMgCQANAAAJAHQAJAGAFANQAFgHAFgFIAMgIIANgEIAMgCQATAAAMAPQAKAOABAcIAACug");
	this.shape_22.setTransform(824.7,169.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_23.setTransform(807.8,165.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_24.setTransform(799.3,165);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_25.setTransform(787.6,169.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_26.setTransform(772.8,169.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAFgFAGgCIALgDIAIAAIAMABIAIAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAHgBIAHgEIAEgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_27.setTransform(756.6,165.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_28.setTransform(741.1,169.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_29.setTransform(725.5,166.6);

	this.instance_23 = new lib.Path_10();
	this.instance_23.parent = this;
	this.instance_23.setTransform(793.1,167.7,1,1,0,0,0,142.9,32.4);
	this.instance_23.alpha = 0.66;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_30.setTransform(551.4,435);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_31.setTransform(535,435.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIANgEIAMgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_32.setTransform(514.6,435);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_33.setTransform(497.8,430.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_34.setTransform(485.4,431.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_35.setTransform(469,431.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_36.setTransform(452.3,435.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_37.setTransform(437.4,432.4);

	this.instance_24 = new lib.Path_11();
	this.instance_24.parent = this;
	this.instance_24.setTransform(494,431.5,1,1,0,0,0,142.9,32.4);
	this.instance_24.alpha = 0.66;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C6DA92").s().p("AgUQbQhogDjQgzQjMgxjjhMQofi1ipiUQhihVAPhKQAKg1BMg9IA9guQAhgZAOgQQAngsg4gkQgagQjaAaQlzAtiPAMQs0BEoSivQkihejOk0Qi7kWhrmxQCtEMD3CLQHwEXI0CXQDSA4D/AwQA0AKFrA/QB/AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBuBegCBnQgBAzgYAgIBNgLQBigMBrgHQFYgUE3AyQCeAaCAAkQAaAICJAtQBEAXAqAAQA0ABBKgdQBBgYB3hDQCNhSBLgqQEWibCGAAQB9AABnBBQBGAsATAJQA5AdBDANQB/AZFajUQBOgwCshxQCBhUAjgRQAsgUBRAgQA2AUB0BCQCIBOBAAeQB4A5BfAQQC2AgFvAgQC4AQCTAKQgsCv55CjQoHAzpoArIoCAiQhqAJh+A1Qg0AVitBXQiMBHhdAfQh9Aoh0AAIgTAAg");
	this.shape_38.setTransform(445.4,764.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6FB77F").s().p("AkmAaIARg6ICyEJIiqlUIAghdICkGuIiDnuIBXgrIBJILIgjoCIBrAAIgjIKIBKnZIBAAaIhIFwIBdk+IA9AgIhsEqIB+kBIBAAYIi+FYIi8Aog");
	this.shape_39.setTransform(454,294.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EBA24D").s().p("Ag+gJIBuiSIAPE3g");
	this.shape_40.setTransform(429.1,312.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FAE485").s().p("Ahmh1IC0AdIAZDOg");
	this.shape_41.setTransform(415,320.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CD6C38").s().p("Ag+hmIB9CkIhkApg");
	this.shape_42.setTransform(429.1,321.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F2BC5F").s().p("AiRAsIEjh0IhvCRg");
	this.shape_43.setTransform(419.3,304.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EBA24D").s().p("AhsANIBniPIByEFg");
	this.shape_44.setTransform(423,283.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FAE485").s().p("AhWiFICtAhIhLDqg");
	this.shape_45.setTransform(403.5,295.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CD6C38").s().p("AhGh1IDYB1IkjB1g");
	this.shape_46.setTransform(419.3,296.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F2BC5F").s().p("AiJAnIEThuIhnCPg");
	this.shape_47.setTransform(408.6,277.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CD6C38").s().p("AhTiDIDdCXIkTBvg");
	this.shape_48.setTransform(408.6,268.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FAE485").s().p("Ag2iwIBtBbIg2EGg");
	this.shape_49.setTransform(394.7,264.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EBA24D").s().p("Ag3ASIBvicIgvEVg");
	this.shape_50.setTransform(450.4,303.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CD6C38").s().p("AAOhxIBCB5IifBqg");
	this.shape_51.setTransform(443.4,316.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAE485").s().p("Ag2ibIBtBUIheDjg");
	this.shape_52.setTransform(439.3,312.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F2BC5F").s().p("AhugFIDdhIIhwCbg");
	this.shape_53.setTransform(445,297.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EBA24D").s().p("AhVApIAVjGICWE7g");
	this.shape_54.setTransform(447.4,273.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CD6C38").s().p("Ag8heICrB0IjdBJg");
	this.shape_55.setTransform(445,287.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FAE485").s().p("AhRiCICjBIIgxC9g");
	this.shape_56.setTransform(430.6,283.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F2BC5F").s().p("AhcAbIC5h+IgVDHg");
	this.shape_57.setTransform(431.7,267.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EBA24D").s().p("AhFASIgShtIAQAJQAYATAoAsQA6BDAlAsg");
	this.shape_58.setTransform(432.1,248.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CD6C38").s().p("AhBhkICeBKIi5B+g");
	this.shape_59.setTransform(431.7,260.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FAE485").s().p("AhziSIDnBdIgbDIg");
	this.shape_60.setTransform(413.5,255.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F2BC5F").s().p("AhzgmIDVgQIASBtg");
	this.shape_61.setTransform(413.5,245.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FAE485").s().p("AhwhTIC8AjIAlCEg");
	this.shape_62.setTransform(395,327.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CD6C38").s().p("AhwhBIDhBiIi8Aig");
	this.shape_63.setTransform(413.9,328.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EBA24D").s().p("AhwATIAViIIDMDrg");
	this.shape_64.setTransform(413.9,320.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F2BC5F").s().p("AhoAhIDRhkIgVCHg");
	this.shape_65.setTransform(394.2,315.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FAE485").s().p("AhMilICZCAIgsDMg");
	this.shape_66.setTransform(380.3,302.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CD6C38").s().p("Ag9hlICmBlIjRBmg");
	this.shape_67.setTransform(394.2,308.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EBA24D").s().p("AhTAfIBFikIBiELg");
	this.shape_68.setTransform(396.4,295.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F2BC5F").s().p("AhugtIDdglIhEClg");
	this.shape_69.setTransform(383.7,290.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FAE485").s().p("AgigUQgCg7AEgeIAFgRIA+BbIg9CiQgEg4gEhbg");
	this.shape_70.setTransform(375.4,272.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CD6C38").s().p("AgvhQICeB9IjdAlg");
	this.shape_71.setTransform(383.7,277.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EBA24D").s().p("AhugDIAQiPIDNElg");
	this.shape_72.setTransform(411.3,255.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EBA24D").s().p("AhPAzIBmjjIA5Fhg");
	this.shape_73.setTransform(386.9,264.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F2BC5F").s().p("Ag+gTIB9g0IgQCOg");
	this.shape_74.setTransform(395.5,248.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F2BC5F").s().p("AhSAXICliIIhmDjg");
	this.shape_75.setTransform(380.9,257.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#61B26F").s().p("AgNEEQgSgagqgDQgsgDgxAbIgoAbIASghQAagnApgfQAigZA2AIQAaAEATAIQgQgPgdgPQg8gfhAgCQg3gChPATIhDASIA3gdQBCghAzgRQAzgRBRAXQAoALAdAPQgVgWgmgcQhNg4hWggQhWghhVAUQgbAHgXAKIgSAKIBAgyQBTgxBYAAQBagBBPA9QAnAfAWAeQgOgagFgmQgMhMAng6QAkg3BcgUQAugKAmABQgXAPgdAaQg5AzgWA1QgWA1AjBKQATAlAXAaQgCgYAHghQAOhEApgxQA7hGBZAAQAsAAAgAOQgnAJgsAUQhZApgbA8QgeA/AgBQQAPAnAWAbIkjCAQAAgNgJgOg");
	this.shape_76.setTransform(382.8,226);

	this.instance_25 = new lib.Path_2_3();
	this.instance_25.parent = this;
	this.instance_25.setTransform(435.4,329.8,1,1,0,0,0,47.2,14.5);
	this.instance_25.alpha = 0.262;

	this.instance_26 = new lib.Path_3_6();
	this.instance_26.parent = this;
	this.instance_26.setTransform(811.8,434.7,1,1,0,0,0,81.6,12.8);
	this.instance_26.alpha = 0.262;

	this.instance_27 = new lib.Path_4_4();
	this.instance_27.parent = this;
	this.instance_27.setTransform(467.7,764.8,1,1,0,0,0,108.5,12.8);
	this.instance_27.alpha = 0.262;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A6BD55").s().p("EgsGAO1IBjhbQCEhxCfhtQH9leJTi0QD3hLFShcQEihRBrgiQCvg4CKhDQCUhJC3h5QC2h4G4iHQGgiAHHhSQHahXEYAHQE7AIgpCCQgqCDlvDuQlRDboSECQoED6oUDQQoqDZmMBkQtnDcqABGQj9Aci2AAQlGAAhfhag");
	this.shape_77.setTransform(1002.1,719.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgFQg5gCAJgIIAMgGQAFgEgJgCQgUgGgWgBQgggCiYgDQhwgCmGAFIlwAGQifADg5AHQh6AQk/gEQhdgBgpgIQgagHgNgBIi2ACQisABgkgFQglgFAOgIIAXgHIiYgNIK+gTQH4gLHaABQQQABV1BEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_78.setTransform(299.2,716.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhUgMIg2gLQjfADhjgEQg6gDALgIIAKgGQAFgEgHgCQgVgGgWgBQgfgCiYgDQhxgCmFAFIlwAGQigADg5AIQh6APk/gEQhdgBgpgIQgZgHgNgBIi3ACQisACgkgFQglgFAPgIIAWgIIiYgNQIggQCegDQH3gLHbABQQQABV1BEQKKAfKhBAQFQAgDOAaI08g3g");
	this.shape_79.setTransform(363.5,710.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#61763D").s().p("AZzA5Q1bg3iYgCQiXgBhVgMIg2gLQjeADhjgEQg6gDALgIIAKgGQAFgEgIgCQgTgGgXgBIi3gFQhxgCmGAFIlvAGQigADg5AIQh6APk/gEQhdgBgpgIQgagHgNgBIi2ACQisACgkgFQgmgFAPgIIAXgIIiYgNQIfgQCfgDQH3gLHbABQQAABWFBEQKKAfKhBAQFQAgDPAaI09g3g");
	this.shape_80.setTransform(427.3,701.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A6BD55").s().p("ADZPxQmwgjklh+QqFkXnAlzQnwmag7l4QAhgmA8g0QB4hqCJhNQG4j2HBCHQC7A4D8BcQDZBPBRAVQCFAhBugQQB5gQCchQQCchQFNBgQE7BbFHDMQFWDVC5DpQDQEFhADOQhCDSk5CYQkfCLmsA9QkLAmkKAAQiVAAiVgMg");
	this.shape_81.setTransform(237.3,672.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#61763D").s().p("EAl9ADLIiogUIgkAEQgnADhWgIQkqgehqgbQgggIhXgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDggAWgl4gCiIH6gCQJzAGJZAkQUXBNOzBoQG4AwHLA/QC/AZHFBCIiNgDIAUAKQANAJgjABIgEABQgmAAiWgTg");
	this.shape_82.setTransform(1169.8,535.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgJQkjgchxgcQgggIhXgNIhQgMQp5hUimgNQiNgNgcgBQgVgBgTADQgIACAEAEIAKAHQAIAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJZAjQUNBNO9BpQG0AwHPA+IKEBbIiNgCIAUAKQANAJgkABIgDABQgnAAiWgTg");
	this.shape_83.setTransform(1111.4,521.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#61763D").s().p("EAl9ADLIiogUIglAEQgmADhWgJQkkgchwgcQgggIhXgNIhQgMQp5hUimgOQiKgMgfgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh8gOIhygOQgLAEgoACQhPADiLgOUgDhgAWgl3gCiIH6gCQJzAGJaAjQUFBNPFBoQG2AxHMA+QC8AaHHBBIiMgCIAUAKQANAJgkABIgDABQgmAAiWgTg");
	this.shape_84.setTransform(1053.5,507.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#61763D").s().p("EAl8ADLIingUIglAEQgmADhWgIQkqgehqgbQghgIhWgNIhQgLQp5hUimgOQiNgNgcgBQgVgBgTADQgIACAEAEIAJAHQAJAIg1gDQg6gDh9gOIhxgOQgMAEgnACQhPADiLgOUgDhgAWgl3gCiIH6gCQJyAGJaAkQUJBMPBBpQG2AwHNA+QCmAXHeBFIiNgDIAUAKQAMAJgjABIgDABQgnAAiWgTg");
	this.shape_85.setTransform(973.5,492.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#61763D").s().p("Eg9wAIFQg6gaAJg+QAEgTAJgVIAJgRIjgg3QK2j4DshKQKejSKJh5QK9iDNDgnQNcgpP4A4QOfAzPqEZQH2CME7CBQuggTvLgOQ+VgcjSAZQjQAaiDg9QgogUgcgYIgUgWQhLAVhcATQi4AohZgFQhSgFAEg4IAGgwQACgbgOgOIgcgaQgOgKgZgDQgtgEjUASQicANoMCPIntCNQg1AQg+AYQh7AwgrAqQhVBTiwA0QiBAmjEAZQiAAPhCgpQgPgJgWgVQgQgQgKAAQgLgBhKAUIihApQihAnhMAAQgiAAgRgIg");
	this.shape_86.setTransform(606.2,322.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#8CAC50").s().p("EgmdApkQxvjbtsmPQtsmQnfoGQnyoYAApMQAApLHyoYQHgoGNrmQQNsmPRvjbQSXjjUGAAQUHAASXDjQRvDbNsGPQNsGQHgIGQHxIYAAJLQAAJMnxIYQnhIGtrGQQtsGPxvDbQyXDj0HAAQ0GAAyXjjg");
	this.shape_87.setTransform(644.1,557.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#917556").s().p("AnmTjQgfgYgJg6QgHgxAHhfQAhkYAMjQQAOkCgxkUQg/kdgUiBQgdi3BKjbQBEjJB6iTQAZgdCcgZQCLgWC+gLQC7gKCCAGQCPAGACAZQAEAvh+AxQhmAokMBEQhyAdhCA0Qg4AqgkBGQgQAfgnBqQgjBeglA9QgsBKgBBQQAAA6AaBiQAoCUAHAnQAYB6gEB6QgMExhVF+QhRFog7AAQgHAAgHgFg");
	this.shape_88.setTransform(575,953);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#74542E").s().p("AMSY+QkPifh2kGQg+iKg0l9QgdjXgzoIQgunggci3Qgukig3gIQjYgjhpHkQgjCjgRDJQgNCRABBQQAECvgzFOQhCGyhqCnQhmCgixAzQg4AQg4ADIgtAAQhbo6gajkQgcj7AFoGQAGpwBHi7QASgwAqiHQAchbAcgtQAmg+BFguQBNgyCLgwQDwhTEmgdQCbgPDXgLQCGgOCjBAQCvBEB0B+QCjCwAtD9QBAFtioIgQhWEWAND7QALDABJDKQAqByBVC+QA/CcgHBmQgPDRg3BWQgbAqgZABQhvgbiHhPg");
	this.shape_89.setTransform(609,973.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#644725").s().p("EgTKAnDQgthJgHhDQgHg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBPDYA2HOQAVCvgPC9QgKCPglDKIhAFeQgjDRgKCsQgKCyA4EGQAfCNBaFCQBQEcAVCBQAhDFguBbQguBdiwAeQiGAWkHgKQk5gRiegEQkUgHinAcQiyAei/CtQiDB2iuDhQjBD7gkAkQg9A/goAAQgZAAgRgag");
	this.shape_90.setTransform(609.1,1026.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#917556").s().p("AHpbTQgvhWggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAdQgnALieBTQiCBEhCgBQhhgCgjh/QgtingZi6QgVieAAh3QAAhYHMASQDmAJDlAaIBiAaQB1AiBjAmQE+B5ARB0QAPBkgPCOQgKBWgjDEQhOG1AAEWQAAE7A2GiQAcDaApENQAFAsAVBrQAVBpAHA+QAWDQhMCkQhJCdhKAGIgGAAQg7AAg2hgg");
	this.shape_91.setTransform(369.8,993.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#74542E").s().p("EAIaAkwQhsgRg1gwQgRgPgJgQIgFgOQgggNgfgnQg+hOAGh+QAFh3hRhgIhNhUQgvg1gcgzQgyhahwoEQh4orgjhcQgYg+hNiRQhwjQgphUQjYmxhhmhQhynmgTk2QgGhlADhfQAFhYAAggQAAhQP7hQQH+goH+gYIgyFhQgzF3AABtQAABXAHITQAFH6gMBUQgNBnAADvQAADwANCDQAFArAcDNQAcDiAPC1QAvI+hPD9QhaEhhqBqQhMBMhpAAQgYAAgbgEg");
	this.shape_92.setTransform(380.8,1039.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#917556").s().p("AkXL0Qg8gGAQmJQAJjNADhVQAEiOgOgeQgNgdghgiIg8g4QhHhGALhJQAFgiAggJQAXgGA6AEQBWAGAbAAQBKAAA9gQQBegZEJiwQB3hPAsgYQBIgpAOAQQAXAajbELQj/E1giBBQgZAygmCVQgWBXguDFQhYFlg8AAIgCAAg");
	this.shape_93.setTransform(854.3,909.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#74542E").s().p("AqpWMQg2gpgZjSQgUimADjOQABhGAsi7IBYljQBunJhCgrQhbg7gwh8Qg1iJAWimQATiSBshqQA2g0AzgYIAWAIQAgAIAuADQCUAJDvgxQDugxE8h2QCeg7BugxIAHBRQABBvgaCXQgPBUg1BHQgqA5hTBEIijB+QhpBUhLBNQiUCbiiIBQgoB+hJEAQg6DMgWA6QhRDTh2DOQh7DUg4AAQgKAAgHgGg");
	this.shape_94.setTransform(865.6,947.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#644725").s().p("EgOJAgiQgkgZgbhIQhAioAYkJQAKhqARmVQAapRAKjIQA3w+BKkEQBNkMCGi8QBDheA0gpIBHAEQBaADBigFQE3gQEOhaQENhZDfhzQBwg5A5gnIgYCyQgjDbgzDKQijKGkGDsQiSCDhYDPQhFCkgxD/QgdCVgwE4QgwEYg8C2Qh8F6kvFAQhhBmh2BkQg+A0hIA5QgTARgUAAQgQAAgRgMg");
	this.shape_95.setTransform(860.3,1003.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg4hih5o0QiDpfgmhlQhFi3ihkjQinkvknnXQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_96.setTransform(363.5,981.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#523821").s().p("EhKDAj2QjIAAi3hOQixhLiJiJQiJiJhLixQhOi3AAjIMAAAgo1QAAjIBOi3QBLixCJiJQCJiJCxhLQC3hODIAAMCUHAAAQDIAAC4BOQCxBLCICJQCJCJBLCxQBOC3AADIMAAAAo1QAADIhOC3QhLCxiJCJQiICJixBLQi4BOjIAAg");
	this.shape_97.setTransform(660.1,880.9);

	this.instance_28 = new lib.Path_14();
	this.instance_28.parent = this;
	this.instance_28.setTransform(978.7,201.8,1,1,0,0,0,195.2,33.5);
	this.instance_28.alpha = 0.77;

	this.instance_29 = new lib.Path_1_9();
	this.instance_29.parent = this;
	this.instance_29.setTransform(330.1,217.6,1,1,0,0,0,153,26.3);
	this.instance_29.alpha = 0.77;

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-304.3,0,304.4).s().p("Eg6lAuQMAAAhdzMB1LAAAMAAABfHg");
	this.shape_98.setTransform(603.8,304.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.instance_29},{t:this.instance_28},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_24},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_23},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).to({state:[]},21).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1446.2,1361.1);


// stage content:
(lib.arena414 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fight:0,page1:0,page2:1,page3:2,page4:3,page5:4,page6:5,page7:6,page8:7,win:9,energyLog:10,page12:11});

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
		playSound("fight",-1);
		this.stop();
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
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1));

	// Layer 2
	this.page1 = new lib.readyFight();
	this.page1.parent = this;
	this.page1.setTransform(750,0);

	this.timeline.addTween(cjs.Tween.get(this.page1).to({_off:true},1).wait(11));

	// Layer 1
	this.instance = new lib.page1();
	this.instance.parent = this;

	this.instance_1 = new lib.page2();
	this.instance_1.parent = this;

	this.instance_2 = new lib.page3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(494.1,659.5,1,1,0,0,0,723.1,679.5);

	this.instance_3 = new lib.page4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(374.5,659.5,1,1,0,0,0,603.5,679.5);

	this.instance_4 = new lib.page5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(374.5,659.5,1,1,0,0,0,603.5,679.5);

	this.instance_5 = new lib.page6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(374.5,659.5,1,1,0,0,0,603.5,679.5);

	this.instance_6 = new lib.page7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-229,-20);

	this.instance_7 = new lib.page8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-229,-20);

	this.instance_8 = new lib.page9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-229,-20);

	this.pageWin = new lib.win();
	this.pageWin.parent = this;
	this.pageWin.setTransform(-229,-20);

	this.instance_9 = new lib.Symbol34();
	this.instance_9.parent = this;
	this.instance_9.setTransform(137.6,487.1,1,1,0,0,0,614.5,847.1);

	this.instance_10 = new lib.stagecopy();
	this.instance_10.parent = this;
	this.instance_10.setTransform(397.1,719.7,1,1,0,0,0,397.1,718.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.pageWin}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(146,647,1446.1,1362.4);
// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/task2_part2_atlas_.png", id:"task2_part2_atlas_"},
		{src:"sounds/fight.mp3", id:"fight"},
		{src:"sounds/projectBGM20173172010.mp3", id:"projectBGM20173172010"},
		{src:"sounds/readyfight2.mp3", id:"readyfight2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;