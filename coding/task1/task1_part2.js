(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"task1_part2_atlas_", frames: [[2085,0,750,1334],[0,0,2083,3706],[2085,1800,319,62],[2085,1736,319,62],[2085,1336,382,398]]}
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



(lib.blur_layer = function() {
	this.spriteSheet = ss["task1_part2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.mappage_bg01 = function() {
	this.spriteSheet = ss["task1_part2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.PineappleVolcano = function() {
	this.spriteSheet = ss["task1_part2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.WhirlpoolForest = function() {
	this.spriteSheet = ss["task1_part2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.whirlpool = function() {
	this.spriteSheet = ss["task1_part2_atlas_"];
	this.gotoAndStop(4);
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


(lib.whirpool = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD5D4F").s().p("AgtQgItFttQgeggARgoQARgoAsAAIGEgBQAcgBATgTQAUgTAAgbIgCvvQgBgbAUgUQATgUAcABIJygCQAbAAAUAUQATASABAcIABPvQAAAbAUATQAUAUAcgBIGEAAQAsgBARApQARAogeAhItANvQgVAVgcAAQgbAAgUgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-107.6,180.5,215.2);


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD5D4F").s().p("AgtQgItFttQgeggARgoQARgoAsAAIGEgBQAcgBATgTQAUgTAAgbIgCvvQgBgbAUgUQATgUAcABIJygCQAbAAAUAUQATASABAcIABPvQAAAbAUATQAUAUAcgBIGEAAQAsgBARApQARAogeAhItANvQgVAVgcAAQgbAAgUgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-107.6,180.5,215.2);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blur_layer();
	this.instance.parent = this;
	this.instance.setTransform(-375,-667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-667,750,1334);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blur_layer();
	this.instance.parent = this;
	this.instance.setTransform(-375,-667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-667,750,1334);


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


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC5B4E").s().p("AgtQfItFtrQgeghARgnQARgpAsgBIGEgBQAcABATgUQAUgTAAgbIgDvvQAAgcAUgTQATgTAcgBIJygBQAbAAAUATQATAUAAAcIADPuQAAAbATAUQAUATAcAAIGEgBQAsAAARAoQARAogeAgItBNwQgTAVgdAAQgbAAgUgVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-107.6,180.5,215.2);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(250,250,232,0.145)","rgba(245,241,190,0.404)","rgba(241,234,157,0.616)","rgba(239,229,132,0.78)","rgba(237,226,116,0.902)","rgba(236,224,108,0.973)","#FBE663"],[0,0.09,0.267,0.435,0.6,0.749,0.89,1],-12.2,-121.3,133.7,284.1).s().p("AzF8dIR2ntMAUVBG1IiWBgg");
	this.shape.setTransform(42.1,263.5,1,1,171.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(250,250,232,0.145)","rgba(245,241,190,0.404)","rgba(241,234,157,0.616)","rgba(239,229,132,0.78)","rgba(237,226,116,0.902)","rgba(236,224,108,0.973)","#FBE663"],[0,0.09,0.267,0.435,0.6,0.749,0.89,1],-12.2,-121.3,133.7,284.1).s().p("AzF8dIR2ntMAUVBG1IiWBgg");
	this.shape_1.setTransform(-99,-193.4,1,1,36.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(250,250,232,0.145)","rgba(245,241,190,0.404)","rgba(241,234,157,0.616)","rgba(239,229,132,0.78)","rgba(237,226,116,0.902)","rgba(236,224,108,0.973)","#FBE663"],[0,0.09,0.267,0.435,0.6,0.749,0.89,1],-12.2,-121.3,133.7,284.1).s().p("AzF8dIR2ntMAUVBG1IiWBgg");
	this.shape_2.setTransform(-253.7,227.5,1,1,-141.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(250,250,232,0.145)","rgba(245,241,190,0.404)","rgba(241,234,157,0.616)","rgba(239,229,132,0.78)","rgba(237,226,116,0.902)","rgba(236,224,108,0.973)","#FBE663"],[0,0.09,0.267,0.435,0.6,0.749,0.89,1],-12.2,-121.3,133.7,284.1).s().p("AzF8dIR2ntMAUVBG1IiWBgg");
	this.shape_3.setTransform(175.2,-102.4,1,1,92.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(250,250,232,0.145)","rgba(245,241,190,0.404)","rgba(241,234,157,0.616)","rgba(239,229,132,0.78)","rgba(237,226,116,0.902)","rgba(236,224,108,0.973)","#FBE663"],[0,0.09,0.267,0.435,0.6,0.749,0.89,1],-12.2,-121.3,133.7,284.1).s().p("AzF8dIR2ntMAUVBG1IiWBgg");
	this.shape_4.setTransform(-267.7,-261.4,1,1,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-406.8,-491.1,813.8,982.4);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(18));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(250,250,232,0.145)","rgba(245,241,190,0.404)","rgba(241,234,157,0.616)","rgba(239,229,132,0.78)","rgba(237,226,116,0.902)","rgba(236,224,108,0.973)","#FBE663"],[0,0.09,0.267,0.435,0.6,0.749,0.89,1],-12.2,-121.3,133.7,284.1).s().p("AzF8dIR2ntMAUVBG1IiWBgg");
	this.shape.setTransform(16.5,317.1,1,1,171.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15).to({_off:false},0).wait(35));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(250,250,232,0.145)","rgba(245,241,190,0.404)","rgba(241,234,157,0.616)","rgba(239,229,132,0.78)","rgba(237,226,116,0.902)","rgba(236,224,108,0.973)","#FBE663"],[0,0.09,0.267,0.435,0.6,0.749,0.89,1],-12.2,-121.3,133.7,284.1).s().p("AzF8dIR2ntMAUVBG1IiWBgg");
	this.shape_1.setTransform(174.7,-98.6,1,1,92.6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(11).to({_off:false},0).wait(21).to({_off:true},17).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(250,250,232,0.145)","rgba(245,241,190,0.404)","rgba(241,234,157,0.616)","rgba(239,229,132,0.78)","rgba(237,226,116,0.902)","rgba(236,224,108,0.973)","#FBE663"],[0,0.09,0.267,0.435,0.6,0.749,0.89,1],-12.2,-121.3,133.7,284.1).s().p("AzF8dIR2ntMAUVBG1IiWBgg");
	this.shape_2.setTransform(-77.1,-193.5,1,1,36.2);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(7).to({_off:false},0).wait(25).to({_off:true},17).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(250,250,232,0.145)","rgba(245,241,190,0.404)","rgba(241,234,157,0.616)","rgba(239,229,132,0.78)","rgba(237,226,116,0.902)","rgba(236,224,108,0.973)","#FBE663"],[0,0.09,0.267,0.435,0.6,0.749,0.89,1],-12.2,-121.3,133.7,284.1).s().p("AzF8dIR2ntMAUVBG1IiWBgg");
	this.shape_3.setTransform(-270.3,-260.7,1,1,-5.5);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).wait(29).to({_off:true},17).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(250,250,232,0.145)","rgba(245,241,190,0.404)","rgba(241,234,157,0.616)","rgba(239,229,132,0.78)","rgba(237,226,116,0.902)","rgba(236,224,108,0.973)","#FBE663"],[0,0.09,0.267,0.435,0.6,0.749,0.89,1],-12.2,-121.3,133.7,284.1).s().p("AzF8dIR2ntMAUVBG1IiWBgg");
	this.shape_4.setTransform(-253.7,227.5,1,1,-141.4);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1).to({_off:false},0).wait(31).to({_off:true},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AFOCtIkYlZIlmhjIgEmSIjSivIEICLIARF9IFkAjIEPHLICBJpIjQBCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,-84.9,103.9,169.9);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("Au3B8IARjZIJqEWIGoiAIDlkmIF1CUIDyh/IjkC/IloiBIioE8IoPBMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.2,-23.8,190.4,47.7);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AqWNVIFRmrIIRl8IkjnJIJ3g+IhBoMIC4JKIpSC+IE2DyImdIlInQGsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.3,-99.7,132.6,199.5);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF5046").s().p("AGBQNIxwmiQgpgPgDgrQgCgsAngUIFcisQAYgMAJgaQAJgagMgZIm+uGQgMgYAJgbQAJgaAYgMIIykWQAZgMAaAJQAaAJAMAZIG9OGQANAZAaAJQAaAJAZgNIFcisQAngTAiAdQAhAcgNAqIlnSEQgJAbgaANQgOAHgPAAQgMAAgLgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.4,-104.1,166.9,208.2);


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


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABtDHIhthsIhsBsQgLAMgQAAQgQAAgMgMIgkgkQgLgLAAgQQAAgQALgLIBthtIhthsQgLgLAAgQQAAgQALgLIAkglQAMgLAQAAQAQAAALALIBsBtIBthtQALgLAQAAQAQAAALALIAkAlQAMALAAAQQAAAQgMALIhtBsIBtBtQAMALAAAQQAAAQgMALIgkAkQgLAMgQAAQgQAAgLgMg");
	this.shape.setTransform(36.7,36.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(6).p("AEDEDQhrBriYAAQiWAAhshrQhrhrAAiYQAAiXBrhrQBshrCWAAQCYAABrBrQBrBrAACXQAACYhrBrg");
	this.shape_1.setTransform(36.7,36.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9DD89").s().p("AkCEDQhrhrgBiYQABiXBrhrQBrhrCXAAQCYAABrBrQBsBrAACXQAACYhsBrQhrBriYAAQiXAAhrhrg");
	this.shape_2.setTransform(36.7,36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(-3,-3,79.3,79.3), null);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221E1F").s().p("Eg6yBoOMAAAjQbMB1lAAAMAAADQbg");
	this.shape.setTransform(376.3,667);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol53, new cjs.Rectangle(0,0,752.6,1334), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AE4C45").s().p("AiZBeIEzlMQgFAkgmBbQgjBThNCNQgmBHggA2g");
	this.shape.setTransform(30.2,49.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC5C4E").s().p("AhyCgQhzjeAAhOQAAheBDhCQBEhDBeAAQBgAABCBDQBEBCAABeQAABOhzDeQg5Bwg6BgQg5hgg5hwgAhnjkQgrAqAAA8QAAA7ArArQArApA8AAQA8AAAsgpQAqgrAAg7QAAg8gqgqQgsgrg8AAQg8AAgrArg");
	this.shape_1.setTransform(23,36.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhvBwQgugvAAhBQAAhBAugtQAvgvBAAAQBBAAAvAvQAuAtAABBQAABBguAvQgvAuhBAAQhAAAgvgug");
	this.shape_2.setTransform(23,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol52, new cjs.Rectangle(0,0,46,73.6), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD5D4F").s().p("AJyKkIuXgVQgigBgMgfQgNgfAYgYIDQjRQAPgPAAgVQAAgVgPgOIoeobQgPgPAAgVQAAgVAOgPIFQlRQAPgPAVAAQAVAAAPAPIIdIbQAPAPAVAAQAVAAAPgPIDQjRQAXgXAfAMQAgAMAAAhIAaOYQABAVgQAQQgPAPgUAAIgCAAg");
	this.shape.setTransform(67.8,67.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(0,0,135.6,135.2), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221E1F").s().p("Eg7XBotMAAAjRZMB2vAAAMAAADRZgEAsyBRkQjQAKiRCXQiRCXAADSQgBDZCaCZQCYCZDZAAQDZAACZiZQCYiZABjZQAAijhdiFQhaiDiTg6QgRgigggUQgigVgmAAQg3AAgpAmg");
	this.shape.setTransform(380,670.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,760,1340.2), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABtDHIhthtIhsBtQgLAMgQAAQgQAAgLgMIgkgkQgMgLAAgQQAAgPAMgMIBshtIhshsQgMgLAAgQQAAgQAMgLIAkglQALgLAQAAQAQAAALALIBsBtIBthtQAMgLAPAAQAQAAALALIAkAlQAMALAAAQQAAAQgMALIhtBsIBtBtQAMAMAAAPQAAAQgMALIgkAkQgLAMgQAAQgPAAgMgMg");
	this.shape.setTransform(36.7,36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(6).p("AEDEDQhrBsiYAAQiXAAhrhsQhshrAAiYQAAiXBshrQBrhsCXAAQCYAABrBsQBsBrAACXQAACYhsBrg");
	this.shape_1.setTransform(36.7,36.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9DD89").s().p("AkCEDQhshrAAiYQAAiXBshrQBrhsCXAAQCYAABrBsQBrBrABCXQgBCYhrBrQhrBriYABQiXgBhrhrg");
	this.shape_2.setTransform(36.7,36.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(-3,-3,79.3,79.3), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{rabbimon:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.text = new cjs.Text("Walki-egg\nLv. 0", "34px 'Fjalla One'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 50;
	this.text.parent = this;
	this.text.setTransform(70.8,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"Rabbimon\nLv. 1",lineWidth:132},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141.6,96.3);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB706B").s().p("AiiH1QjQhDhjjDQhjjDBEjOQBEjQDChjQDDhjDOBEQDQBDBjDDQBiDDhDDOQhEDPjCBkQh0A6h4AAQhRAAhUgbg");
	this.shape.setTransform(627.2,394.4,1.199,1.199);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(246,203,132,0.698)","rgba(248,214,158,0.541)","rgba(252,236,210,0.247)","rgba(254,250,242,0.067)","rgba(255,255,255,0)"],[0,0.188,0.565,0.847,1],-36.7,110.3,-23.3,58.5).s().p("ArUfAMANeg+/IJLCZMgSyA9mg");
	this.shape_1.setTransform(708,110.9,1.199,1.199);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(246,203,132,0.698)","rgba(248,214,158,0.541)","rgba(252,236,210,0.247)","rgba(254,250,242,0.067)","rgba(255,255,255,0)"],[0,0.188,0.565,0.847,1],36.8,-110.3,23.3,-58.4).s().p("ArUdnMASyg9mID3BAMgNeA+/g");
	this.shape_2.setTransform(542.7,676.8,1.199,1.199);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(246,203,132,0.698)","rgba(248,214,158,0.541)","rgba(252,236,210,0.247)","rgba(254,250,242,0.067)","rgba(255,255,255,0)"],[0,0.188,0.565,0.847,1],-110.3,-36.7,-58.4,-23.3).s().p("A//ndIBAj3MA+/ANdIiZJMg");
	this.shape_3.setTransform(910.4,476.4,1.199,1.199);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(246,203,132,0.698)","rgba(248,214,158,0.541)","rgba(252,236,210,0.247)","rgba(254,250,242,0.067)","rgba(255,255,255,0)"],[0,0.188,0.565,0.847,1],203.5,61.1,151.6,47.6).s().p("EhDSgLTICapMMCEKAlIIhAD3g");
	this.shape_4.setTransform(73.8,240.8,1.199,1.199);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(246,203,132,0.698)","rgba(248,214,158,0.541)","rgba(252,236,210,0.247)","rgba(254,250,242,0.067)","rgba(255,255,255,0)"],[0,0.188,0.565,0.847,1],-100.8,64.1,-54.6,36.9).s().p("A9bPzMA2DgjBIE0ILMg42AeSg");
	this.shape_5.setTransform(882,238.4,1.199,1.199);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(246,203,132,0.698)","rgba(248,214,158,0.541)","rgba(252,236,210,0.247)","rgba(254,250,242,0.067)","rgba(255,255,255,0)"],[0,0.188,0.565,0.847,1],170.3,-104.8,124.1,-77.6).s().p("Eg3tAagMBtag9KICBDbMhqoBB6g");
	this.shape_6.setTransform(170.8,669,1.199,1.199);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(246,203,132,0.698)","rgba(248,214,158,0.541)","rgba(252,236,210,0.247)","rgba(254,250,242,0.067)","rgba(255,255,255,0)"],[0,0.188,0.565,0.847,1],-64,-100.8,-36.8,-54.6).s().p("AzN7aIDbiBMAjAA2EIoKEzg");
	this.shape_7.setTransform(786.1,655.3,1.199,1.199);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(246,203,132,0.698)","rgba(248,214,158,0.541)","rgba(252,236,210,0.247)","rgba(254,250,242,0.067)","rgba(255,255,255,0)"],[0,0.188,0.565,0.847,1],113.8,184.1,81.3,128.7).s().p("EglGg1dIJzlwMBAaB0AIkICbg");
	this.shape_8.setTransform(384.5,-7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#12CDFF","#BFC792","#FFC56A"],[0,0.675,0.918],0,-337.1,0,337.2).s().p("Eg6lA0sMAAAhpXMB1LAAAMAAABpXg");
	this.shape_9.setTransform(375,337.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-442.4,-386,1598.2,1321), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("AMXlDI4sAAIizFDICzFEIYsAAICylEg");
	this.shape.setTransform(96.9,32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AsWFEIiylEICylDIYtAAICyFDIiyFEg");
	this.shape_1.setTransform(96.9,32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-1.6,-1.5,197.1,67.9), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("AMXlDI4sAAIizFDICzFEIYsAAICylEg");
	this.shape.setTransform(96.9,32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AsWFEIiylEICylDIYtAAICyFDIiyFEg");
	this.shape_1.setTransform(96.9,32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-1.6,-1.5,197.1,67.9), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("AMXlDI4sAAIizFDICzFEIYsAAICylEg");
	this.shape.setTransform(96.9,32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AsWFEIiylEICylDIYtAAICyFDIiyFEg");
	this.shape_1.setTransform(96.9,32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-1.6,-1.5,197.1,67.9), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("AMXlDI4sAAIizFDICzFEIYsAAICylEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AsWFEIiylEICylDIYtAAICyFDIiyFEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-33.9,197.1,67.9);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD067").s().p("AjCTdMAAAgkvQAAhBA9gmQA3gjBOAAQBPAAA3AjQA9AmAABBMAAAAkvg");
	this.shape.setTransform(0,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-19.5,-248.9,39,249), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.3).s().p("AhdBdQgngmAAg3QAAg2AngnQAngmA2gBQA3ABAmAmQAnAnAAA2QAAA3gnAmQgmAog3AAQg2AAgngog");
	this.shape.setTransform(13.3,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,26.5,26.5), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.3).s().p("AhcBeQgngnAAg3QAAg1AngnQAngnA1AAQA3AAAnAnQAnAnAAA1QAAA3gnAnQgnAmg3AAQg2AAgmgmg");
	this.shape.setTransform(13.3,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,26.5,26.5), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.3).s().p("AhcBeQgognAAg3QAAg2AognQAmgmA2AAQA3AAAmAmQAnAnABA2QgBA3gnAnQgmAmg3AAQg2AAgmgmg");
	this.shape.setTransform(13.3,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,26.5,26.5), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.3).s().p("AhdBeQgmgnAAg3QAAg2AmgnQAngmA2AAQA3AAAmAmQAnAoAAA1QAAA3gnAnQgmAng3gBQg2ABgngng");
	this.shape.setTransform(13.2,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,26.5,26.5), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.3).s().p("AhdBeQgngnABg3QgBg2AngnQAognA1ABQA3gBAnAnQAnAngBA2QABA3gnAnQgnAmg3AAQg1AAgogmg");
	this.shape.setTransform(13.3,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,26.5,26.5), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmA0Qgngzg3gBQA3AAAngzQAmgyAAhIQABBIAmAyQAnAzA3AAQg3ABgnAzQgmAygBBIQAAhIgmgyg");
	this.shape.setTransform(13.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,26.6,34.7), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnA1Qgmg0g3gBQA3AAAmgzQAngzAAhHQABBHAmAzQAnAzA3AAQg3ABgnA0QgmAygBBHQAAhHgngyg");
	this.shape.setTransform(13.3,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAoQgdgngpgBQApAAAdgmQAdgmAAg2QABA2AcAmQAeAmApAAQgpABgeAnQgcAmgBA1QAAg1gdgmg");
	this.shape_1.setTransform(78.6,163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,88.6,176.1), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnA0Qgmgzg3gBQA3AAAmgzQAngyAAhIQABBIAnAyQAmAzA3AAQg3ABgmAzQgnAygBBIQAAhIgngyg");
	this.shape.setTransform(13.3,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAjQgagjglAAQAlAAAagjQAagiAAgxQABAxAaAiQAaAjAlAAQglAAgaAjQgaAjgBAxQAAgxgagjg");
	this.shape_1.setTransform(289.7,233.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,298.7,245.8), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAoQgegogqAAQAqAAAegnQAcgmAAg2QABA2AdAmQAeAnApAAQgpAAgeAoQgdAmgBA2QAAg2gcgmg");
	this.shape.setTransform(10.1,170.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA0Qgmg0g3AAQA3AAAmg0QAngyAAhHQABBHAmAyQAnA0A3AAQg3AAgnA0QgmAzgBBHQAAhHgngzg");
	this.shape_1.setTransform(424,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,437.3,183.4), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ar/CLQAIgrBFgXQA4gSBmgHQAlgDAWgeQAOgRAZguQA7haChABQCeAABsBfIBMBCQArAgAsAEQBJAHB3gYQB2gWA2AFQBGAJBCA0QAiAbATAZg");
	this.shape.setTransform(76.8,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,153.6,27.7), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ax1DOQAMhABngiQBTgbCXgLQA3gEAigsQAUgaAlhEQApg9A+gfQBTgqCNABQCMABBpArQBMAfBLBCIBxBjQA/AwBCAGQBsAJCygiQCvghBQAJQBpALBjBPQAxAnAdAlg");
	this.shape.setTransform(114.2,20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,228.4,41.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.whirlpool();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,382,398), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9EFQQAShoCqg4QCGgsD3gRQBZgHA4hIQAggrA9hvQBChkBlgyQCIhDDlAAQDlABCsBHQB8A0B6BqQATARBMBFQA2AyAkAaQBmBOBsAKQByAKCAgOQBTgJCNgbQCUgdA+gIQBzgOBaAKQCrATChCAQBQBBAvA8g");
	this.shape.setTransform(186.1,33.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,372.2,67.2), null);


(lib.page1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.page1, null, null);


(lib.menu_mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(65,65,65,0.008)").s().p("AlwFxQiaiZABjYQgBjYCaiYQCYiZDYAAQDYAACaCZQCYCYABDYQgBDYiYCZQiaCZjYABQjYgBiYiZg");
	this.shape.setTransform(52.2,52.2,0.999,0.999,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.menu_mask, new cjs.Rectangle(0,0,104.4,104.4), null);


(lib.map_arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD5D4F").s().p("AkPMjQgPgPAAgVIgCr9QAAgUgPgPQgPgPgVABIkmAAQgiAAgNgeQgNgfAXgYIJ4qdQAPgQAWAAQAVAAAPAQIJ8KaQAXAYgNAfQgNAegiAAIknABQgVAAgOAPQgPAPAAAUIACL9QAAAVgPAPQgPAOgVAAInbACQgVAAgPgPg");
	this.shape.setTransform(68.6,81.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.map_arrow, new cjs.Rectangle(0,0,137.1,163.6), null);


(lib.map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD4440").s().p("AiEBSIEJkfIgGAZQgLAjgUAxQgfBIhBB6QgiA9gbAvg");
	this.shape.setTransform(6.2,-15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF5046").s().p("AhiCKQhjjAAAhDQAAhRA6g5QA6g5BRAAQBSAAA6A5QA6A5AABRQAABDhjDAQgxBggyBTQgwhTgyhggAhYjFQglAkAAA0QAAAzAlAlQAlAkAzAAQA1AAAlgkQAlglAAgzQAAg0glgkQglglg1AAQgzAAglAlg");
	this.shape_1.setTransform(0,-26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaBbQglgmAAg1QAAg0AlgmQAmglA0AAQA1AAAlAlQAmAmAAA0QAAA1gmAmQglAlg1AAQg0AAgmglg");
	this.shape_2.setTransform(0,-37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3EBCA4").s().p("AiaBLIiphLICphKIE1AAICpBKIipBLg");
	this.shape_3.setTransform(0,4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhkAZIhIAtIh6i1IJNAAIh6C1IhJguIhkBYg");
	this.shape_4.setTransform(0,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3EBCA4").s().p("AiJAMIgTAcIitj4IKTAAIitD4IgTgcIiKDFg");
	this.shape_5.setTransform(0,25.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFDD7B").s().p("AlHFIQiIiHAAjBQAAi/CIiJQCIiIC/AAQDAAACJCIQCHCJAAC/QAADBiHCHQiJCIjAAAQi/AAiIiIg");
	this.shape_6.setTransform(0,6.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlxFxQiZiZAAjYQAAjYCZiYQCaiZDXAAQDZAACYCZQCaCYgBDYQABDYiaCZQiYCZjZABQjXgBiaiZg");
	this.shape_7.setTransform(0,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.2,-58.4,104.5,117);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlwGGQiZiZgBjZQABhXAchSQAchQAzhDIAAjMIgcAAQgJAAgHgGQgFgGgBgJQABgIAFgHQAHgGAJAAIElAAQAJAAAGAGQAHAHAAAIQAAAJgHAGQgGAGgJAAIgWAAQABASACAJQBSgcBWAAQDZAACYCZQCZCZAADXQAADZiZCZQiYCZjZAAQjXAAiZiZg");
	this.shape.setTransform(52.3,54.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,104.5,108.6), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221E1F").s().p("ArtPGQEDAXDSguQEIg4CoihQEtkeApsDQAUmCgplMQCCD2BJEgQBKEjAAELQAAIQkqEAQkCDenLAAQkUAAjQhTg");
	this.shape.setTransform(75,105);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,150,209.9), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221E1F").s().p("ArtPGQEDAXDSguQEIg4CoihQEtkeApsDQAUmCgplMQCCD2BJEgQBKEjAAELQAAIQkqEAQkCDenLAAQkUAAjQhTg");
	this.shape.setTransform(75,105);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,150,209.9), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221E1F").s().p("ArtPGQEDAXDSguQEIg4CoihQEtkeApsDQAUmCgplMQCCD2BJEgQBKEjAAELQAAIQkqEAQkCDenLAAQkUAAjQhTg");
	this.shape.setTransform(75,105);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,150,209.9), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221E1F").s().p("ArtPGQEDAXDSguQEIg4CoihQEtkeApsDQAUmCgplMQCCD2BJEgQBKEjAAELQAAIQkqEAQkCDenLAAQkUAAjQhTg");
	this.shape.setTransform(75,105);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,150,209.9), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221E1F").s().p("ArtPGQEDAXDSguQEIg4CoihQEtkeApsDQAUmCgplMQCCD2BJEgQBKEjAAELQAAIQkqEAQkCDenLAAQkUAAjQhTg");
	this.shape.setTransform(75,105);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,150,209.9), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221E1F").s().p("ArtPGQEDAXDSguQEIg4CoihQEtkeApsDQAUmCgplMQCCD2BJEgQBKEjAAELQAAIQkqEAQkCDenLAAQkUAAjQhTg");
	this.shape.setTransform(75,105);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,150,209.9), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221E1F").s().p("ArtPGQEDAXDSguQEIg4CoihQEtkeApsDQAUmCgplMQCCD2BJEgQBKEjAAELQAAIQkqEAQkCDenLAAQkUAAjQhTg");
	this.shape_1.setTransform(75,105);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,150,209.9), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADeI9IojoGQgYgWAAghQAAgfAYgXIIjoGQAlghAtATQAtAUABAxIAAC6QAAAtgiAhIjUDHQgXAXAAAfQAAAhAXAWIDUDIQAiAfAAAvIAAC4QgBAygtAUQgRAHgPAAQgbAAgXgVg");
	this.shape_1.setTransform(35,59.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,69.9,118.8), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkvJLQgugUAAgyIAAi4QABgvAhgfIDTjIQAYgWAAghQAAgfgYgXIjTjHQghghgBgtIAAi6QAAgxAugUQAtgTAlAhIIjIGQAXAXABAfQgBAhgXAWIojIGQgXAVgbAAQgPAAgRgHg");
	this.shape_2.setTransform(35,59.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,69.9,118.8), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADeI9IojoGQgYgWAAghQAAgfAYgXIIjoGQAlghAtATQAtAUABAxIAAC6QAAAtgiAhIjUDHQgXAXAAAfQAAAhAXAWIDUDIQAiAfAAAvIAAC4QgBAygtAUQgRAHgPAAQgbAAgXgVg");
	this.shape_2.setTransform(35,59.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,69.9,118.8), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkvJLQgugUAAgyIAAi4QABgvAhgfIDTjIQAYgWAAghQAAgfgYgXIjTjHQghghgBgtIAAi6QAAgxAugUQAtgTAlAhIIjIGQAXAXABAfQgBAhgXAWIojIGQgXAVgbAAQgPAAgRgHg");
	this.shape_3.setTransform(35,59.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,69.9,118.8), null);


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


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414142").s().p("Ak5BsQiKgDgFgjQgFgiCCgsQCCgtC9gdQC9gdCJAEQCKADAFAjQAGAiiDAsQiCAti9AdQimAah/AAIghgBg");
	this.shape_3.setTransform(45.8,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0.1,0,91.5,21.8), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414142").s().p("Ak5BsQiKgDgFgjQgFgiCCgsQCCgsC9geQC9gdCJAEQCKADAFAjQAGAiiDAsQiCAti9AdQimAah/AAIghgBg");
	this.shape_4.setTransform(45.8,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0.1,0,91.5,21.8), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ax1DOQAMhABngiQBTgbCXgKQA3gEAigtQAUgZAlhFQApg9A9gfQBUgqCNABQCNABBoArQBMAgBLBBQAqAjBIBAQA+AwBDAGQBrAJCyghQCvgiBRAJQBoALBjBPQAyAnAcAlg");
	this.shape_1.setTransform(114.2,20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,228.5,41.2), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ar/CLQAIgrBGgYQA3gRBmgIQAlgCAXgeQANgRAZguQA7haChABQCeAABsBeIBMBDQArAgAsAEQBIAGB4gXQB2gWA2AFQBGAJBDA0QAhAbATAZg");
	this.shape_1.setTransform(76.8,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,153.7,27.7), null);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("A2xEHQAPhRCEgsQBpgiDBgOQBHgGArg4QAaghAvhXQA0hOBPgoQBqg0C0AAQC0ABCGA3QBhApBgBTQA0AtBcBSQBQA9BVAHQCJANDkgsQDfgrBnALQCFAPB/BlQA/AyAkAvg");
	this.shape_4.setTransform(145.8,26.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,291.7,52.6), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A9EFQQAShoCpg3QCGgsD4gSQBZgHA4hJQAhgqA7huQBDhlBkgyQCIhDDlABQDmAACrBHQB9A0B6BqIBfBWQA3AyAiAbQBnBNBsAKQBxAKCBgOQBSgJCOgbQCTgdA/gHQBzgOBaAJQCrAUChCAQBQBAAvA8g");
	this.shape_5.setTransform(186.1,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,372.2,67.1), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221E1F").s().p("ApfDHQhMAAg1g1Qg1g0AAhMIAAgjQAAhLA1g1QA1g2BMAAIV1AAIAAGOg");
	this.shape_1.setTransform(79,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,158,39.9), null);


(lib.Path_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3).p("AMXlDI4sAAIizFDICzFEIYsAAICylEg");
	this.shape_5.setTransform(98.6,33.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221E1F").s().p("AsWFEIiylEICylDIYtAAICyFDIiyFEg");
	this.shape_6.setTransform(98.6,33.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(0,0,197.2,67.9), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DC5435").s().p("AgaFEIizlEICzlDIA1AAICzFDIizFEg");
	this.shape_6.setTransform(20.6,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,41.1,64.9), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E5F5F").s().p("AibgOQBKgPBBgoQA+gmAvg6IA/CDIh9AiIiECmg");
	this.shape_7.setTransform(15.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,31.2,33.2), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221E1F").s().p("Eg6yBoOMAAAjQbMB1kAAAMAAADQbgEgophBMIAtAAQhSAvg0A6Qg3A/gIBCIAaCSQAhCaAlApQATAVAoALQAYAIAzALQBgAZAVBPQATBMgMAzQgPBEAFA5QAKBrA4B9QA+COBwCTQCHCxBSBRQBoBnBDAAQBaAAB5iDQAkgnA6hKQA6hJAWgYQAxg1B2g6QB4g7ApgtQA/hCBFi7QBPjbgYiLQgMhFghgkQgagdgwgMQADghgEgjQgIg/gbgpQgMgTgngaIgRgRIAqAAIg6g6IAmAAIg0g7Ig0A7IAmAAIgaAaQgmgUgxgUIAAohIgBgFIgBgXIAAgEIgHgsIAAgBIgGgTIAAgBQgUhBgugdQgrgbhIAAQh3AAgyBPQgaArgCA0IAAgQIAJguQgEANgFASIAAg3QAAh1gfhEQgihHhHgaQgugShEAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQABABAAAAQjqACgBEVIAAFqQgegIgkAAIgeABIgXgWIA/AAIhVhgIhVBgIA+AAIgkAkQhCAPg9AYIgwg2g");
	this.shape.setTransform(376.3,667);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,752.5,1334), null);


(lib.Path_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261E16").s().p("AnzBSQjPghAAgxQAAgvDPgiQDPgiEkgBQEkABDQAiQDPAiAAAvQAAAxjPAhQjPAjklAAQkkAAjPgjg");
	this.shape.setTransform(70.7,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12_1, new cjs.Rectangle(0,0,141.4,23.3), null);


(lib.Path_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261E16").s().p("AhoAWQgsgJAAgNQAAgMAsgJQArgJA9AAQA9AAAsAJQAsAJAAAMQAAANgsAJQgrAJg+AAQg9AAgrgJg");
	this.shape.setTransform(14.9,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,29.8,6.3), null);


(lib.Path_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261E16").s().p("AieAeQhCgMAAgSQAAgQBCgNQBCgNBcAAQBdAABCANQBCANAAAQQAAAShCAMQhCAMhdAAQhcAAhCgMg");
	this.shape.setTransform(22.5,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_1, new cjs.Rectangle(0,0,44.9,8.5), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#261E16").s().p("AiTAeQg9gNAAgRQAAgRA9gMQA+gMBVAAQBWAAA+AMQA9AMAAARQAAARg9ANQg+AMhWAAQhWAAg9gMg");
	this.shape_8.setTransform(20.9,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,41.8,8.5), null);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261D16").s().p("AlzA9QibgZAAgkQAAgjCbgZQCagaDZAAQDaAACbAaQCZAZAAAjQAAAkiZAZQibAajaAAQjZAAiagag");
	this.shape.setTransform(52.7,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,105.3,17.4), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261D16").s().p("AiIAcQg5gMAAgQQAAgPA5gMQA5gLBPAAQBRAAA4ALQA4AMABAPQgBAQg4AMQg5ALhQAAQhPAAg5gLg");
	this.shape.setTransform(19.4,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,38.7,7.9), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261D16").s().p("AgrAQQgTgGAAgKQAAgJATgGQASgIAZAAQAaAAASAIQATAGAAAJQAAAKgTAGQgSAIgagBQgZABgSgIg");
	this.shape.setTransform(6.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,12.6,4.7), null);


(lib.Path_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261D16").s().p("AgrARQgTgHAAgKQAAgJATgHQASgHAZAAQAaAAASAHQATAHAAAJQAAAKgTAHQgSAHgaAAQgZAAgSgHg");
	this.shape.setTransform(6.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13_1, new cjs.Rectangle(0,0,12.6,4.8), null);


(lib.Path_12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#261D16").s().p("AgRALQgHgEAAgHQAAgFAHgFQAHgEAKAAQAKAAAIAEQAHAFAAAFQAAAHgHAEQgIAEgKAAQgKAAgHgEg");
	this.shape_1.setTransform(2.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12_2, new cjs.Rectangle(0,0,5.1,3.1), null);


(lib.Path_11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#261D16").s().p("AgXANQgKgFAAgIQAAgHAKgFQAKgFANAAQAOAAAKAFQAKAFAAAHQAAAIgKAFQgKAFgOAAQgNAAgKgFg");
	this.shape_1.setTransform(3.4,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_2, new cjs.Rectangle(0,0,6.8,3.6), null);


(lib.Path_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261D16").s().p("Ag6APQgYgGAAgJQAAgHAYgHQAZgGAhAAQAiAAAZAGQAYAHAAAHQAAAJgYAGQgZAGgiAAQghAAgZgGg");
	this.shape.setTransform(8.3,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0,0,16.6,4.2), null);


(lib.Path_9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#261D16").s().p("AgdAHQgMgDAAgEQAAgDAMgEQANgCAQgBQARABANACQAMAEgBADQABAEgMADQgNADgRAAQgQAAgNgDg");
	this.shape_1.setTransform(4.2,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_2, new cjs.Rectangle(0,0,8.3,2.1), null);


(lib.Path_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261D16").s().p("AgTAHQgJgCAAgFQAAgDAJgEQAIgCALgBQAMABAIACQAJAEAAADQAAAFgJACQgIADgMAAQgLAAgIgDg");
	this.shape.setTransform(2.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(0,0,5.8,2.1), null);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261D16").s().p("AgXANQgKgFAAgIQAAgHAKgGQAKgFANAAQAOAAAKAFQAKAGAAAHQAAAIgKAFQgKAGgOAAQgNAAgKgGg");
	this.shape.setTransform(3.4,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,6.8,3.8), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#261D16").s().p("AiSAcQg9gMAAgQQAAgPA9gMQA8gLBWAAQBWAAA9ALQA9AMAAAPQAAAQg9AMQg9ALhWAAQhVAAg9gLg");
	this.shape_9.setTransform(20.8,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,41.7,7.9), null);


(lib.Path_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D5C2A0").s().p("AGXRqQkpgJlti3Qhyg6hshEIhUg4QmbCSjeisQhGg1gqhPIgchFQiVADiigiQlFhFhCi5Qhbj+BQjjQBdkLEyhtQEUhjDyBRQB5ApBBA8QAHhzBPh/QCfj9Fpg3QFlg3D6CaQB9BNA1BXIAzhEQBDhQBQg4QD/i1EeB4QEeB5BVD6QAqB9gPBlIBNAMQBbAUBOAsQD3CNAIFBQAIE5mZDDQiAA9iaAqIiBAeQhfBxicBuQksDWkjAAIgYgBg");
	this.shape_7.setTransform(216.4,121);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(7.9,8,417.1,226.2), null);


(lib.Path_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D5C2A0").s().p("AqYJWQhAgtg4g3IgsguQiGgWiGhAQkLh/AGjMQAFjRChhbQBRguBPgEQgJhCAbhSQA4ijC6hOQC6hPCmB2QBTA7AuBLIAbgjQAmgpAzgfQCjhlDoAkQDsAkBmClQA0BSAEBMIAggXQApgaAxgRQCeg1C0BAQDHBHA9CvQAzCUg7CkQgrB5jTAtQhCANhLAFIg+ACQgTBLhIA4QiRBwkMhfQhQA6h3A8QjtB4jCAFIgQABQi+AAjCiLg");
	this.shape_8.setTransform(143.8,81.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_7, new cjs.Rectangle(8,7.9,271.7,147.3), null);


(lib.Path_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D5C2A0").s().p("AEZMNQjNgGj8h/QhPgohKgvIg6gnQkcBmiZh3Qgwglgeg3IgTgvQhnAChwgYQjggvguiAQg+ivA2idQBBi5DThLQC/hECnA4QBTAcAuAqQAFhQA2hYQBtiuD6gmQD2gmCtBqQBWA1AlA9IAkgwQAug3A3gnQCwh9DFBUQDFBTA7CtQAdBWgKBGIA1AIQA/AOA2AfQCqBhAGDdQAGDZkbCGQhYAqhrAdIhZAVQhBBOhsBMQjPCTjJAAIgRAAg");
	this.shape_9.setTransform(151.9,86);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_8, new cjs.Rectangle(7.9,8,288.1,156.2), null);


(lib.Path_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D7C4A2").s().p("AyvQ2QhzhRhlhjIhPhSQjzgpjwhzQnhjlAJlwQAKl5EiimQBbgzBsgYQA2gNAkgBQgSh3AyiTQBkkmFPiOQFQiNEsDUQCWBqBSCHIAyg/QBEhKBcg4QEli1GkBAQGpBBC5EpQA6BdAcBpQANA1ACAiIA5gqQBKgvBZgeQEchfFEB0QFoCABtE6QBdELhqEqQhODal9BQQh3AaiHAIIhvADQgJAigZAuQgxBdhSA/QkFDKnjisQiRBqjXBsQmsDYldAKIgcAAQlWAAlgj6g");
	this.shape_10.setTransform(253,140.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_9, new cjs.Rectangle(8.1,7.9,490,265.7), null);


(lib.Path_1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D7C4A2").s().p("AHlVDQligKmzjbQiIhFiAhQIhlhEQnpCvkJjNQhThAgyheIgihSQiyAEjBgpQmDhShPjdQhskuBfkPQBvk/FtiCQFJh1EgBhQCQAwBPBIQACgjAOg1QAbhrA7heQC9kuGuhBQGqhBEqC3QCVBbBABpIA9hSQBPhfBfhDQEwjYFVCQQFUCQBlEqQAzCVgSB4IBbAOQBuAZBcA0QEmCoAKF/QAKF1noDpQiZBIi4AyIiZAjQhyCHi5CEQlkD+lcAAIgdgBg");
	this.shape_11.setTransform(256.3,142.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_10, new cjs.Rectangle(7.8,7.9,497.1,269.6), null);


(lib.Path_1_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D7C4A2").s().p("AyvQ2QhyhRhmhjIhPhSQjygpjxhzQnhjlAJlwQAKl5EjimQBagzBsgYQA2gNAkgBQgRh3AxiTQBkkmFQiOQFPiNEsDUQCWBqBTCHIAxg/QBEhKBcg4QEmi1GkBAQGoBBC6EpQA6BdAbBpQAOA1ACAiIA4gqQBKgvBZgeQEchfFFB0QFnCABuE6QBdELhrEqQhNDal9BQQh3AaiHAIIhwADQgIAigZAuQgyBdhRA/QkGDKniisQiRBqjXBsQmtDYldAKIgcAAQlXAAlfj6g");
	this.shape_12.setTransform(253,140.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_11, new cjs.Rectangle(8,7.9,490,265.7), null);


(lib.Path_1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D7C4A2").s().p("AKqdnQnygPplk0Qi/hgi0hyIiOhfQqxD2l1kgQh0hahHiFQgWgpgPgpIgLggQj5AFkQg6Qoghyhvk4QhGjDgIjKQgIjaBDi/QCcnAIBi3QHPilGWCIQB+AqBqBEQA1AiAcAZQADgxAThLQAniWBTiFQEJmoJehcQJXhbGjEBQCDBQBhBqQAxA1AWAlIBWhzQBwiGCGhfQGskvHfDKQHfDKCOGkQAsCDAGCJQACBFgGAqIAjAEQAtAFAwALQCaAiCCBKQGeDsAOIbQAOINqvFHQjWBmkDBGIjYAyQigC9kFC6Qn2FlnpAAIgngBg");
	this.shape_13.setTransform(357.4,197.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_12, new cjs.Rectangle(8,7.9,699,379.2), null);


(lib.Path_1_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D7C4A2").s().p("AyvQ2QhzhRhlhjIhPhSQjzgpjwhzQnhjlAJlwQAKl5EjimQBagzBsgYQA2gNAkgBQgRh3AxiTQBkkmFQiOQFPiNEsDUQCWBqBSCHIAyg/QBEhKBcg4QEmi1GkBAQGoBBC6EpQA6BdAbBqQAOA0ACAiIA4gpQBKgwBZgdQEchgFFB0QFnCABuE7QBdELhrEpQhNDal9BRQh3AZiHAIIhwADQgIAigZAvQgyBdhSA/QkFDJnjisQiRBqjXBsQmsDYldAKIgcAAQlXAAlfj6g");
	this.shape_14.setTransform(253,140.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_13, new cjs.Rectangle(8,7.9,490,265.7), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221E1F").s().p("Eg6mBoOMAAAjQbMB1NAAAMAAADQbgEAB0BQyQg3AugMBGQiRA7hZCCQhcCFAACjQAADYCZCZQCYCZDZAAQDYAACZiZQCZiZAAjYQAAijhbiFQhaiCiSg7QgMhGg3guQg3gvhJABQhKgBg3Avg");
	this.shape_1.setTransform(375.1,667);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,750.2,1334), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E5E5E").s().p("AipCHIAAkNIFTAAIAAENg");
	this.shape_1.setTransform(17,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,33.9,26.9), null);


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


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E5E5E").s().p("Ag2A6QgVgNgNgWIAagPQAJAPAOAJQAQAJASAAQAaAAATgTQATgTAAgaQAAgRgJgPIAagQQANAWAAAaQAAAngcAcQgbAcgnAAQgaAAgXgOg");
	this.shape.setTransform(8.9,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,17.8,14.3), null);


(lib.Path_1_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5E5E5E").s().p("AipCHIAAkNIFTAAIAAENg");
	this.shape_15.setTransform(17,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_14, new cjs.Rectangle(0,0,33.9,26.9), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E5E5E").s().p("AibgOQBKgPBBgnQA/gnAvg6IA+CCQgtBHhCA0QhBA0hRAag");
	this.shape_1.setTransform(15.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,31.1,33.2), null);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(3).p("AMXlDI4sAAIizFDICzFEIYsAAICylEg");
	this.shape_10.setTransform(98.6,33.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D4D4D").s().p("AsWFEIiylEICylDIYtAAICyFDIiyFEg");
	this.shape_11.setTransform(98.6,33.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,197.2,67.9), null);


(lib.Path_1_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#080405").s().p("Ap0KVQjvhnici2QCeCRDWBQQDeBSD1AAQDkAADShJQDKhGCch/QCciABVikQBZirAAi7QAAiRg3iKQg0iEhjhzQCJB9BKCbQBNCgAACuQAAC7hZCrQhVClicCAQicB/jKBGQjSBIjkABQkYAAj2hrg");
	this.shape_16.setTransform(102.4,76.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_15, new cjs.Rectangle(0,0,204.8,153.5), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8D58D").s().p("AsRXPQjKhGiciAQich/hWilQhYirAAi8QAAj1CUjTQCPjMD2h8QklmWhGhpQhPh2g3i2QhCjcBNgsQBSgvCLCMQB7B7BqDHQA7BvA6DBQApCIAjCbQDPhGDhAAQDlAADQBIQBJlmAGiyQABgegFinQgFiiAEhlQANlMBwgTQA+gKA9AjQA7AjAvBHQBnCcgIDbQgHC/h6E6QhQDLhyDeQB4BEBeBYQBdhpBzgjQCGgqCgA6QBpAnCUCCQCIB6A0BZQAxBSgnCIQgoCLhqBpQhhBficghQh9gahhhUQgugogMgvIABATQAAC8hZCrQhVClicB/QicCAjKBGQjRBIjlAAQjlAAjRhIgAMGItIACAUQACgRAHgPIAGgMg");
	this.shape_2.setTransform(155.4,163.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(8,8,294.9,311.9), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F20").s().p("Eg6mBoOMAAAjQbMB1NAAAMAAADQbgEgN0AzgICyFEIYtAAICylEIiylEI4tAAg");
	this.shape_3.setTransform(375.1,667);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,750.2,1334), null);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB2EE").s().p("Ay+HgQgohzEJh3QCEg7CMglQgehWBrhXQBphYDjhQQBqglAQgLQALgIgigCQg0gDgUgHQgmgOANgjQAPgmBugwQBjgrCOgnQCMglBzgPQB6gQAmASQBFAhhgB1QgjArgtAnIgTAQIgdAOQguAZAdgKQARgGAdgXQAmgRAvgRQDShHDBAZQEXAjBIAzQBiBGjKCCQi5B2jUA0QhAARg7AHQAwgDAkADQB5ALhGBOQgpAtiAA4Qh4A2iGAlQiMAmhLgEQhUgEAhg9QA8hsgHAHIgSAcQhTBFh1A7QjqB3iiguQiiguA4hEQAJgLAPgLQhyA+h4AvQidBAhYAAQhSAAgUg5g");
	this.shape.setTransform(122,53.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,244.1,107.4), null);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3996B").s().p("AtSFSQgchRC5hUQBdgpBigaQgVg8BLg9QBKg9Cfg4QBKgaALgIQAIgFgYgCQhRgFANgkQAVg2DrhAQDqg/A5AcQAwAXhDBSQgjArgdAXQAYgLAegKQCTgyCHARQDEAZAyAkQBFAxiNBbQiCBSiUAlQguALgrAGIghADIBegDQBVAHgyA3QgcAfhaAoQhUAmhdAZQhjAbg0gDQg6gDAWgqQAqhMgEAFIgNAUQg6AwhSApQikBThyggQhxggAngwQAHgIALgIQhRAshUAiQhuAsg9AAQg6AAgOgng");
	this.shape.setTransform(85.4,37.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,-0.2,171,75.4), null);


(lib.Path_10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404041").s().p("AgGBUQjAgSiEgkQiFgjADgjQADgjCKgMQCJgNC+ARQC/ASCEAkQCFAjgDAjQgDAjiJAMQg6AGhEAAQhcAAhtgKg");
	this.shape_1.setTransform(46.1,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_2, new cjs.Rectangle(0,0,92.2,18.8), null);


(lib.Path_9_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#404041").s().p("AgIBpQkBgYiyguQiyguADgsQAEgqC4gPQC4gPD/AYQEAAWCzAvQCyAugEArQgDAri4APQhHAGhSAAQiCAAicgOg");
	this.shape_2.setTransform(61.9,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_3, new cjs.Rectangle(0,0,123.7,23.7), null);


(lib.Path_17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404041").s().p("Ak5BsQiKgDgFgjQgFgiCCgsQCCgsC9geQC9gdCJAEQCKADAFAjQAGAiiDAsQiCAti9AdQimAah/AAIghgBg");
	this.shape.setTransform(45.7,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17_1, new cjs.Rectangle(0,0,91.5,21.8), null);


(lib.Path_16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404041").s().p("Ak5BtQiKgFgFgiQgFgiCCgsQCCgsC9geQC9gdCJAEQCKADAFAjQAGAiiDAsQiCAsi9AeQioAaiAAAIgeAAg");
	this.shape_1.setTransform(45.7,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16_1, new cjs.Rectangle(0,0,91.5,21.8), null);


(lib.Path_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("ApfDHQhMAAg1g1Qg1g1AAhLIAAgjQAAhMA1g0QA1g1BMgBIV1AAIAAGOg");
	this.shape_2.setTransform(79,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_2, new cjs.Rectangle(0,0,158,39.9), null);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("A1FFEIkwlEIEwlDMAqKAAAIExFDIkxFEg");
	this.shape_2.setTransform(165.4,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0,330.8,64.8), null);


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


(lib.Path_1_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AhhFEIkwlEIEwlDIHzAAIkwFDIEwFEg");
	this.shape_17.setTransform(40.2,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_16, new cjs.Rectangle(0,0,80.5,64.8), null);


(lib.Path_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AhhFEIkxlEIExlDIHzAAIkwFDIEwFEg");
	this.shape_2.setTransform(40.3,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_2, new cjs.Rectangle(0,0,80.5,64.8), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("ArtPHQEDAWDTguQEHg5CpigQEskeApsDQAUmCgolLQCBD1BJEgQBKEjAAELQAAIQkqEAQkCDenLAAQkVAAjPhSg");
	this.shape_12.setTransform(75,104.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,150,209.9), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("Eg82BqHMAAAjUNMB5tAAAMAAADUNgEAq9AH7Qg5A6AABRMAAABIRQiPA8hXCBQhaCEAACgQAADZCZCZQCZCZDZAAQDYAACZiZQCZiZAAjZQAAiihciGQhaiDiTg6IgGgKMAAAhIDQAAhRg5g6Qg5g5hRAAQhQAAg6A5g");
	this.shape_4.setTransform(389.5,679.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,779,1358.2), null);


(lib.exp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(3).p("AMXlDI4sAAIizFDICzFEIYsAAICylEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AsWFEIiylEICylDIYtAAICyFDIiyFEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.exp, new cjs.Rectangle(-98.5,-33.9,197.1,67.9), null);


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


(lib.cloud1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2xEHQAPhRCEgsQBqgiDBgOQBGgFArg5QAaghAvhXQA0hOBPgoQBqg0C0AAQC0ABCGA3QBhApBgBTQA1AtBbBSQBRA9BVAHQCJANDjgsQDggrBmALQCFAPB+BlQA/AyAlAvg");
	this.shape.setTransform(145.8,26.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud1, new cjs.Rectangle(0,0,291.6,52.6), null);


(lib.charge_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD4440").s().p("ABfERQgJgCgEgIQgFgIACgJIAeh1QADgJgFgIQgFgIgJgCIjtg7QgIgCgGgHQgFgIAAgIIAhiKIDJiZIAAABIhJEvICVAmQAJADAFAHQAFAIgDAJIgoChQgCAJgJAFQgFADgGAAIgGgBg");
	this.shape.setTransform(4.7,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD4440").s().p("AAABbIh0hIQgEgBADgIQAFgKAAgHIgBgIIALgIIBXAzQAIAGAIgDQAJgCAFgIIA/hmQAFgJAJgCQAJgCAIAFQAIAFACAIQACAKgFAHIhWCNQgFAJgJACIgFABQgGAAgFgDg");
	this.shape_1.setTransform(24.2,-17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF5046").s().p("AhfBhQgpgpAAg4QAAg4ApgoQAognA3AAQA4AAAoAnQApAoAAA4QAAA5gpAoQgoAng4ABQg3gBgogng");
	this.shape_2.setTransform(7.2,-40.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF5046").s().p("AgzCBIA3jnIhfgFQgKgBgGAHQgHAGgBAJIgGB4QgBAKgGAGQgHAGgKgBQgJAAgGgHQgGgHAAgJIAJilQABgJAGgGQAHgHAJABICiAIQACAAA7ANIA7ANQAHACAGAGQAIAJgDANIg8D2g");
	this.shape_3.setTransform(-4.8,-9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EF5046").s().p("AAABbIh0hIQgEgBADgIQAFgKAAgHQAAgIgDgLQgDgGAEABIBjA7QAIAGAIgDQAJgCAFgIIA/hmQAFgJAJgCQAJgCAIAFQAIAFACAIQACAKgFAHIhWCNQgFAJgJACIgFABQgGAAgFgDg");
	this.shape_4.setTransform(24.2,-17.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BD4440").s().p("AAeBZIiUhMQgIgEgDgJQgDgIAEgIQAEgJAJgCQAJgDAIAEIBsA2QAIAEAJgDQAJgCAFgJIAag1QAbg3ACAAQACAAAEAGQAFAIAFADIANAHQAGADAAACQAAACgeA7IgeA6IgKAVQgFAIgJADIgHABQgFAAgFgCg");
	this.shape_5.setTransform(-22.8,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFDD7B").s().p("AlHFIQiJiHAAjBQAAi/CJiJQCHiIDAAAQDAAACJCIQCICJAAC/QAADBiICHQiJCIjAAAQjAAAiHiIg");
	this.shape_6.setTransform(0,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlxFxQiYiZAAjYQAAjYCYiYQCZiZDYAAQDZAACYCZQCZCYAADYQAADYiZCZQiYCZjZABQjYgBiZiZg");
	this.shape_7.setTransform(0,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.2,-54.1,104.5,108.3);


(lib.backTomap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABlEDIj3jqQgLgKAAgPQAAgOALgKID3jqQAPgPAWAJQAUAJAAAWIAABUQAAAVgPAOIhgBaQgLAKABAOQgBAPALAKIBgBaQAPAOAAAVIAABUQAAAWgUAJQgIAEgHAAQgMAAgKgKg");
	this.shape.setTransform(47.3,52.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8DC89").s().p("AlHFJQiJiIAAjBQAAi/CJiJQCHiIDAAAQDAAACJCIQCICJAAC/QAADBiICIQiJCIjAAAQjAAAiHiIg");
	this.shape_1.setTransform(52.3,52.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlwFxQiZiYgBjZQABjXCZiZQCZiZDXgBQDZABCYCZQCZCZAADXQAADZiZCYQiYCZjZAAQjXAAiZiZg");
	this.shape_2.setTransform(52.3,52.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backTomap, new cjs.Rectangle(0,0,104.5,104.5), null);


(lib.backBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABlEDIj3jqQgLgKAAgPQAAgOALgKID3jqQAPgPAWAJQAUAJAAAWIAABUQAAAVgPAOIhgBaQgLAKABAOQgBAPALAKIBgBaQAPAOAAAVIAABUQAAAWgUAJQgIAEgHAAQgMAAgKgKg");
	this.shape.setTransform(47.3,52.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8DC89").s().p("AlHFJQiJiIAAjBQAAi/CJiJQCHiIDAAAQDAAACJCIQCICJAAC/QAADBiICIQiJCIjAAAQjAAAiHiIg");
	this.shape_1.setTransform(52.3,52.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlwFxQiZiYgBjZQABjXCZiZQCZiZDXgBQDZABCYCZQCZCZAADXQAADZiZCYQiYCZjZAAQjXAAiZiZg");
	this.shape_2.setTransform(52.3,52.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backBtn, new cjs.Rectangle(0,0,104.5,104.5), null);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiPigQAOgRASgKQAzgaBAAlQBBAmAoBOQApBOgHBLQgHBKg0AbIgMAFQidihg6jGg");
	this.shape.setTransform(-129.3,102);

	this.instance = new lib.Path_1_15();
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

	this.instance_1 = new lib.CompoundPath_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,-0.2,1,1,0,0,0,155.5,163.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.4,-165.1,330,347);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var canvas = this
		this.close_newmon.addEventListener("click",close_blur)
		function close_blur(){
			canvas.parent.parent.blur_layer.visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Symbol37();
	this.instance.parent = this;
	this.instance.setTransform(227.7,-112.9,1,1,0,0,0,36.6,36.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD5D4F").s().p("AAVB0IAAitQAAgPgEgGQgFgGgKAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape.setTransform(81.1,-42.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD5D4F").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgWADgQQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFAAQAFAAAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_1.setTransform(64.7,-42.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DD5D4F").s().p("AA+B0IAAitIgBgNIgDgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgpAAIAAjkIAgAAIAEAZQAFgIAGgFIALgJIAMgEIAOgCQAMAAAJAHQAKAGAEANQAFgHAFgFIAMgIIANgEIAMgCQATAAAMAPQAKAOABAcIAACug");
	this.shape_2.setTransform(44.3,-42.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DD5D4F").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_3.setTransform(27.5,-47);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DD5D4F").s().p("AAYCXIgvhyIgBAAIAAByIgqAAIAAktIAqAAIAACtIABAAIAthkIAoAAIgyBoIA3B8g");
	this.shape_4.setTransform(16.4,-46.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DD5D4F").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_5.setTransform(3.2,-46.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DD5D4F").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFADgDAEQgDADgCAHQgCAGAAALIAAAJIggAAIgCgLIgBgMQAAgMAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGAAAFgCIAIgHIAAhIg");
	this.shape_6.setTransform(-9.4,-42.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DD5D4F").s().p("AAiCOIgYiJIgIg6IgCAAIgHA6IgZCJIgqAAIgqkbIAqAAIATCrIACAoIAEAAIAEgtIAeimIAiAAIAdCmIAEAtIAEAAIACgoIARirIApAAIgnEbg");
	this.shape_7.setTransform(-28.7,-45.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DD5D4F").s().p("AAdByIgXh+IgGgjIAAAAIgFAjIgVB+IgpAAIgljjIAoAAIAQB6IAEAvIABAAIAFgvIAWh6IAjAAIAWB6IAGAvIACAAIACgvIAPh6IAnAAIglDjg");
	this.shape_8.setTransform(-59.3,-42.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DD5D4F").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgGAHgDQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_9.setTransform(-78,-42.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DD5D4F").s().p("AAiCOIhDi4IgBAAIABAQIABAVIABAaIABAlIAABUIgnAAIAAkbIAjAAIBFC9IABAAIgCgPIgCgSIgBgXIAAgdIAAhoIAnAAIAAEbg");
	this.shape_10.setTransform(-95.1,-45.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#595A5C").s().p("AgSCQQgHgJAAgPQAAgSAHgHQAHgIALAAQAMAAAIAIQAGAIAAARQAAAPgGAIQgIAJgMAAQgLAAgHgIgAgQA5IgGjQIAsAAIgFDQg");
	this.shape_11.setTransform(-58.3,135);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#595A5C").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_12.setTransform(-72.5,138.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#595A5C").s().p("AgNB0QgIgCgHgDQgHgEgGgGQgHgIgEgLQgFgKgCgRQgDgQAAgWIAAgjQAAgWADgRQACgPAFgLQAFgLAGgGQAGgHAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHAEAGAGQAGAHAFAKQAFALADAQQACAQAAAXIAAAjQAAAVgCARQgDAQgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAbQABALADAGQADAHAEADQAEADAFgBQAFABAEgDQAEgDADgHQACgGABgLIABgbIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_13.setTransform(-88.8,138.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#595A5C").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_14.setTransform(-100.9,134.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#595A5C").s().p("AgCCPQgIgCgHgHQgFgGgEgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgJAAgHgCg");
	this.shape_15.setTransform(-110.7,135.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#595A5C").s().p("AgqBdQgQgYAAgwIAAgrQABgVADgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAHgDAHgBIAMgBQAMAAAJADQAJADAIAGQAGAHAFAJQADAKAAAMIgBAOIgBALIgiAAIAAgIQAAgQgEgLQgEgJgKAAQgEAAgEADQgDACgCAFQgEAHgBAJIgBAZIAAA/IABAaQABALACAGQADAHAEADQAEACAFAAIAGgBQADgCADgDIADgKIACgPIAAgHIAkAAIAAAJQAAAggOAPQgPAPgcAAQgcAAgPgYg");
	this.shape_16.setTransform(-123.5,138.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#595A5C").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAPQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_17.setTransform(-138.5,138.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#595A5C").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_18.setTransform(-150.5,134.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#595A5C").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_19.setTransform(-159.1,134.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#595A5C").s().p("AgNB0QgIgCgHgDQgHgEgGgGQgHgIgEgLQgFgKgCgRQgDgQAAgWIAAgjQAAgWADgRQACgPAFgLQAFgLAGgGQAGgHAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHAEAGAGQAGAHAFAKQAFALADAQQACAQAAAXIAAAjQAAAVgCARQgDAQgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAbQABALADAGQADAHAEADQAEADAFgBQAFABAEgDQAEgDADgHQACgGABgLIABgbIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_20.setTransform(-171.3,138.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#595A5C").s().p("AgqBdQgPgYAAgwIAAgrQAAgVADgQQADgPAFgLQAGgKAGgHQAHgFAHgEQAHgDAHgBIAMgBQALAAAKADQAJADAIAGQAGAHAEAJQAEAKABAMIgCAOIgCALIghAAIAAgIQAAgQgEgLQgEgJgJAAQgFAAgDADQgFACgBAFQgDAHgCAJIgBAZIAAA/IABAaQABALADAGQACAHAEADQAEACAGAAIAFgBQAEgCACgDIADgKIACgPIAAgHIAkAAIAAAJQAAAggOAPQgPAPgcAAQgcAAgPgYg");
	this.shape_21.setTransform(-186.2,138.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#595A5C").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_22.setTransform(130.6,81.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#595A5C").s().p("AgzBlQgLgNAAgcIAAivIAqAAIAACrQAAAPAFAHQAEAFAJAAQAGAAAGgDQAGgEAFgGIAAi5IAqAAIAADkIghAAIgEgYQgFAHgFAFQgGAGgGADIgLAFIgNABQgUgBgLgOg");
	this.shape_23.setTransform(114.7,81.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#595A5C").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgCIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_24.setTransform(98.4,81.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#595A5C").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_25.setTransform(82.9,85.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#595A5C").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgCIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_26.setTransform(60.5,81.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#595A5C").s().p("AgCCPQgIgCgHgHQgFgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_27.setTransform(47.2,78.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#595A5C").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAGgFAFgCIALgDIAIAAIAMABIAIAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgDgVIgHAIIgJAIIgLAFQgFACgIAAgAgIgwQgDACgDAEQgDAFgBAIIgCAVIAABWIACAVQABAIADAFQADAEADACIAIACIAIgBIAGgEIAEgFIADgHIAAiIQgDgHgFgFQgFgFgIAAg");
	this.shape_28.setTransform(25.7,78.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#595A5C").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFANQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_29.setTransform(10.2,81.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#595A5C").s().p("AgWCYIgLgEQgFgCgFgGQgGgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAFgJQAEgJAGgFQAFgFAGgCIAKgDIAJAAIAMABIAJAFIAIAGIAFAHIgBgdIAAg9IAqAAIAAEtIghAAIgDgVIgHAIIgJAIIgLAFQgFACgIAAgAgHgwQgEACgDAEQgDAFgBAIIgCAVIAABWIACAVQABAIADAFQADAEAEACIAHACIAIgBIAFgEIAFgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_30.setTransform(-6,78.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#595A5C").s().p("AgWCYIgKgEQgGgCgFgGQgGgFgEgJQgEgJgCgOQgDgOAAgTIAAhIQAAgTADgNQACgNAFgJQAEgJAGgFQAGgFAFgCIAKgDIAJAAIALABIAKAFIAHAGIAGAHIgBgdIAAg9IAqAAIAAEtIghAAIgDgVIgHAIIgIAIIgMAFQgFACgIAAgAgHgwQgEACgDAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQADAEAEACIAHACIAHgBIAGgEIAFgFIADgHIAAiIQgDgHgFgFQgFgFgIAAg");
	this.shape_31.setTransform(-22.4,78.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#595A5C").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHACQgFABgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAPIAACrIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAGIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_32.setTransform(-38.6,81.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#595A5C").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFACQAFADAFAAQAKgBAEgFQAFgFAAgHIgBgHIgDgHIgFgHIgGgHIgdgkIgMgOIgKgRIgGgRQgDgIAAgLQAAgNAFgJQAEgKAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAGIgBAIQAAAHADAIIAKAOIAhAnIAIALIAKANIAHARQADAKAAAJQAAAMgEALQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgCg");
	this.shape_33.setTransform(-59.7,81.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#595A5C").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_34.setTransform(-70.8,77.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#595A5C").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_35.setTransform(-88.2,81.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#595A5C").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFANQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_36.setTransform(-103.1,81.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#595A5C").s().p("AgCCPQgIgCgHgHQgFgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_37.setTransform(-116.3,78.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#595A5C").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFACQAFADAFAAQAKgBAEgFQAFgFAAgHIgBgHIgDgHIgFgHIgGgHIgdgkIgMgOIgKgRIgGgRQgDgIAAgLQAAgNAFgJQAEgKAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAGIgBAIQAAAHADAIIAKAOIAhAnIAIALIAKANIAHARQADAKAAAJQAAAMgEALQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgCg");
	this.shape_38.setTransform(-128.9,81.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#595A5C").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_39.setTransform(-144.2,81.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#595A5C").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgCIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_40.setTransform(-160.6,81.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#595A5C").s().p("AA/B0IAAitIgBgNIgEgIQgCgDgEgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIAMgEIAOgCQANAAAIAHQAJAGAFANQAFgHAGgFIALgIIAMgEIANgCQATAAALAPQALAOAAAcIAACug");
	this.shape_41.setTransform(-181,81.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#595A5C").s().p("AAdByIgXh+IgGgjIAAAAIgFAjIgVB+IgpAAIgljjIAoAAIAQB6IAEAvIABAAIAFgvIAWh6IAjAAIAWB6IAGAvIACAAIACgvIAPh6IAnAAIglDjg");
	this.shape_42.setTransform(102.9,25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#595A5C").s().p("AgaBvQgLgFgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAIQAIAJAFAOQAFANAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_43.setTransform(84.2,25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#595A5C").s().p("AAVB0IAAitQAAgPgEgGQgFgGgKAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_44.setTransform(68,24.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#595A5C").s().p("AAiCOIgIgzIgzAAIgHAzIgsAAIA0kbIAxAAIA0EbgAAVA7IgUiNIgBAAIgUCNIApAAg");
	this.shape_45.setTransform(44.3,22.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#595A5C").s().p("AgSCQQgHgJAAgPQAAgSAHgHQAHgIALAAQAMAAAIAIQAGAIAAARQAAAPgGAIQgIAJgMAAQgLAAgHgIgAgQA5IgGjQIAtAAIgGDQg");
	this.shape_46.setTransform(23.3,21.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#595A5C").s().p("AgWByQgKgCgIgGQgHgGgEgJQgFgKAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAFAFADQAFABAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgHIgGgIIgdglIgMgOIgKgPIgGgRQgDgKAAgJQAAgOAFgKQAEgKAIgGQAHgHALgDQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgJgCgFQgCgGgEgCQgEgDgGAAQgFAAgDACIgGAFIgDAGIgBAGQAAAIADAHIAKAQIAhAlIAIALIAKAPIAHARQADAIAAALQAAALgEAKQgEALgHAGQgIAIgKADQgLAEgNAAQgMAAgKgDg");
	this.shape_47.setTransform(10.7,25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#595A5C").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_48.setTransform(-4.6,24.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#595A5C").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgLgCgRQgDgQAAgWIAAgjQAAgWADgRQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHAEAGAGQAGAHAFAKQAFALADAQQACAQAAAXIAAAjQAAAWgCAQQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAbQABALADAGQADAHAEADQAEADAFgBQAFABAEgDQAEgDADgHQACgGABgLIABgbIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_49.setTransform(-21,25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#595A5C").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_50.setTransform(-33,20.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#595A5C").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgIAAgIgCg");
	this.shape_51.setTransform(-42.9,22.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#595A5C").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_52.setTransform(-56.9,25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#595A5C").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_53.setTransform(-68.2,21.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#595A5C").s().p("AgzBmQgLgOAAgdIAAitIAqAAIAACqQAAAQAFAFQAEAGAJAAQAGAAAGgEQAGgDAFgHIAAi3IAqAAIAADjIghAAIgEgZQgFAIgFAGQgGAFgGADIgLAEIgNABQgUABgLgOg");
	this.shape_54.setTransform(-81,25.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#595A5C").s().p("AgCCPQgIgCgGgHQgGgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_55.setTransform(-94.9,22.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#595A5C").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgeIAAgNIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_56.setTransform(-109,25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#595A5C").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_57.setTransform(-121.7,24.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#595A5C").s().p("AgVCWQgKgCgHgEQgIgGgFgJQgEgIAAgNIABgGIABgIIAfAAQgBAPAGAGQAFAGALAAIAIgBQAFgCAEgEQACgDACgHQADgHAAgKIAAgkQgGAHgJAGQgIAFgNAAIgJgBIgLgDQgFgDgGgFQgFgFgEgKQgEgJgDgNQgCgPAAgSIAAg8QAAgSACgNQADgOAEgIQAEgJAFgFQAGgFAFgDIAMgDIAJAAQAIAAAFACQAHABAFAFIAIAIIAFAJIAEgXIAhAAIAADaQAAATgDAPQgFAQgHALQgIALgMAGQgMAFgQABQgLAAgKgDgAgIh4QgEACgCAFQgDAFgCAHIgBAWIAABKIABAUQACAJADAEQACAFAEACIAIACIAHgCIAHgEIAEgFIADgGIAAh8QgDgHgFgFQgGgFgHAAg");
	this.shape_58.setTransform(-137.5,28.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#595A5C").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_59.setTransform(-153.9,24.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#595A5C").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgLgCgRQgDgQAAgWIAAgjQAAgWADgRQACgPAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgBIAOgCIAOABQAHABAHADQAHAEAGAGQAGAHAFAKQAFALADAQQACAQAAAXIAAAjQAAAWgCAQQgDAQgFALQgFALgGAHQgHAHgHAEQgGADgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAbQABALADAGQADAHAEADQAEADAFgBQAFABAEgDQAEgDADgHQACgGABgLIABgbIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_60.setTransform(-170.3,25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#595A5C").s().p("AgJCPQgIgBgIgDQgHgEgHgGQgIgHgFgKQgFgLgDgPQgEgPAAgWIAAhjQAAgVAEgQQADgPAFgKQAGgLAHgGQAHgGAIgDQAHgDAIgBIANgBQARAAALAFQAMAEAHAIQAGAJADALQADALAAAMIgBARIgCARIgjAAIAAgPQAAgXgFgMQgGgLgKAAQgFAAgEACQgFACgDAGQgDAFgBAJIgCAXIAACBIACAWQABAJADAFQACAFAFADQAFACAFAAIAIgCQAEgCADgEIAFgKQABgHAAgIIAAgcIAoAAIAAAaQAAAjgQAQQgQAQgdAAg");
	this.shape_61.setTransform(-185.5,22.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAHBHIiNhPICNjnIgHCmICHBBIiAD4g");
	this.shape_62.setTransform(-10.3,-124.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#AF4C45").s().p("AjmCvIHGlnQAGAfAAAbQAACAhsBcQhsBbiYAAQgvAAgtgKg");
	this.shape_63.setTransform(3.7,-111.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DD5D4F").s().p("AkDGkQhshcAAiBQAAhEAhg9QAgg7A5grQhjiGgrhoQhFilBigpQBcgmA0CeQAiBqAMCtQBRgjBYAAQBXAABOAhQAEi2AfhxQAwiyBqA3QBlA0hAClQgqBthoCKQA7ArAgA7QAiA+AABEQAACBhsBcQhtBbiZAAQiYAAhshbg");
	this.shape_64.setTransform(-10.4,-144.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(6).p("Afa0vI4QAAQAGgkAAgjQAAjAiIiIQiIiJjAAAQjAAAiICJQiICIAADAQAAAnAFAgI4PAAQjXAAiYCZQiYCYAADXMAAAAhnQAADXCYCZQCYCYDXAAMA+0AAAQDYAACYiYQCYiZAAjXMAAAghnQAAjXiYiYQiYiZjYAAg");
	this.shape_65.setTransform(-11.3,9.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F9DD89").s().p("A/adHQjXABiYiZQiYiYAAjXMAAAghnQAAjYCYiXQCYiZDXAAIYPAAQgFgfAAgoQAAjBCIiIQCIiIDAAAQDAAACICIQCICIAADBQAAAjgGAkIYQAAQDYAACYCZQCYCYAADXMAAAAhnQAADXiYCYQiYCZjYgBg");
	this.shape_66.setTransform(-11.3,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.3,-195.4,534.7,394);


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

	this.instance = new lib.Path_0_1();
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

	this.instance = new lib.Path_0_1();
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


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E432B").s().p("AgagRIA2giIgjBng");
	this.shape.setTransform(191.9,95.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#846446").s().p("AgbgyIA3AgIgTBFg");
	this.shape_1.setTransform(186.4,95.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#573F2D").s().p("AgSAjIAShFIATBFg");
	this.shape_2.setTransform(189.2,97);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B38E71").s().p("Ag2gPIBtgBIg3Ahg");
	this.shape_3.setTransform(189.1,91.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E432B").s().p("AgbgQIAzghIAEBjg");
	this.shape_4.setTransform(191.9,85.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#846446").s().p("AgYgxIAzAhIg2BCg");
	this.shape_5.setTransform(186.4,85.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#573F2D").s().p("AAAghIA3BCIhtABg");
	this.shape_6.setTransform(189.1,86.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B38E71").s().p("AgzgPIBngBIg0Ahg");
	this.shape_7.setTransform(189.1,81.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#573F2D").s().p("AAAgmIA0BNIhnAAg");
	this.shape_8.setTransform(189.1,76.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#846446").s().p("AACg8IAYAsIgzBOg");
	this.shape_9.setTransform(186.5,74);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E432B").s().p("AgcgFIA4gkIgyBTg");
	this.shape_10.setTransform(200,94.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#573F2D").s().p("AAbgeIAGAvIhBAOg");
	this.shape_11.setTransform(194.4,97.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#846446").s().p("AAGgzIAYAqIg7A9g");
	this.shape_12.setTransform(194.1,95.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B38E71").s().p("AgogUIBRAGIg4Ajg");
	this.shape_13.setTransform(198.7,92.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E432B").s().p("AgTABIAfg9IAIB5g");
	this.shape_14.setTransform(200.8,84.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#573F2D").s().p("AgoAZIAog2IApA7g");
	this.shape_15.setTransform(198.7,87.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#846446").s().p("AgVgxIArAtIgnA2g");
	this.shape_16.setTransform(196.5,85.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B38E71").s().p("AglgNIBLgRIggA9g");
	this.shape_17.setTransform(198.2,81.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5E432B").s().p("AgUgDIAIglIAFAFQAFAJAGATIARAwg");
	this.shape_18.setTransform(199.9,74.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#573F2D").s().p("AgCgeIAoAsIhLARg");
	this.shape_19.setTransform(198.2,77);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#846446").s().p("Agfg8IA/A8IgiA9g");
	this.shape_20.setTransform(194.6,74);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B38E71").s().p("AgjgdIBHAXIgIAkg");
	this.shape_21.setTransform(195.1,70.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#846446").s().p("AgcgpIA5AkIgGAvg");
	this.shape_22.setTransform(178.3,94.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#573F2D").s().p("AggARIAFgvIA8A9g");
	this.shape_23.setTransform(184,97.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5E432B").s().p("AgdgJIAYgpIAkBlg");
	this.shape_24.setTransform(184.2,95.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B38E71").s().p("AgogOIBRgGIgZApg");
	this.shape_25.setTransform(179.5,92.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#846446").s().p("AgMg8IAgA9IgnA8g");
	this.shape_26.setTransform(177.5,84.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#573F2D").s().p("AAAgdIApA2IhRAFg");
	this.shape_27.setTransform(179.5,87.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5E432B").s().p("AgVgEIArgtIgDBjg");
	this.shape_28.setTransform(181.7,85.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B38E71").s().p("AglgeIBLARIgrAsg");
	this.shape_29.setTransform(180.1,81.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#846446").s().p("AgDgHQAGgTAFgJIAEgGIAJAnIgpAsIARgxg");
	this.shape_30.setTransform(178.3,74.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#573F2D").s().p("AglAOIAogsIAjA9g");
	this.shape_31.setTransform(180.1,77.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5E432B").s().p("AgZgQIAXgsIAcB5g");
	this.shape_32.setTransform(191.7,74);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5E432B").s().p("AgfAAIA+g8IgcB6g");
	this.shape_33.setTransform(183.6,74);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B38E71").s().p("AgXgVIAvAAIgYArg");
	this.shape_34.setTransform(189.1,70.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B38E71").s().p("AgjgHIBHgWIg+A8g");
	this.shape_35.setTransform(183.1,70.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#452717").s().p("AgzBKQgCgLgOgGQgNgHgUADIgRADIAKgIQAOgKARgEQAPgEAQAKQAIAEAGAGQgEgHgIgJQgPgSgUgJQgSgHgcgEIgYgDIAWgCQAZgCATABQATABAXARQALAJAIAJQgEgKgJgOQgRgcgYgWQgYgWgegEIgZAAIAbgIQAhgFAdALQAdAMASAeQAJAPADANQgBgLADgNQAFgaAUgOQATgNAhAGQAQACANAGQgKACgNAEQgZAJgOAPQgOAOACAcQABAPAEALIAJgSQANgUAUgKQAcgPAdAMQAPAFAIAJQgNgCgSABQgiABgQAPQgSARAAAeQgBAPAEAMIhvADQACgEgBgGg");
	this.shape_36.setTransform(188.6,61.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CBAC8A").s().p("Ag/AvQAGgeAHgTQAEgNAQgQIAPgPIAnAAIAMAKQAMAMAEAIQAHANAFAyg");
	this.shape_37.setTransform(178.9,167.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9E8167").s().p("AhOBAQANg4AHgJQAHgJAag1IAlADQAmAEAIAOQALAVAKBVg");
	this.shape_38.setTransform(178.8,165.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CBAC8A").s().p("AhpBsIAJgxQALg0AIgJQAMgRAZgHIARgmQATgnAKgEQAMgFAWAIQATAHAFAHQAEAGATBhIATBhg");
	this.shape_39.setTransform(193.4,158.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9E8167").s().p("AiACEQAFgdAGggQANg/AJgLQAQgUAegIQAJgXAMgYQAXgvAMgFQAPgGAaAKQAYAIAGAJQAEAGAYB3IAXB2g");
	this.shape_40.setTransform(192.7,156.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CBAC8A").s().p("AhRA7QAJgmAIgYQAGgRAUgUIATgSIAyAAIAPAMQAQAPAFALQAJARAGA+g");
	this.shape_41.setTransform(55.1,131);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9E8167").s().p("AhkBRQARhHAJgLQAFgIAUgkIASgjIAuADQAyAGAJARQAOAbANBsg");
	this.shape_42.setTransform(54.9,128.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CBAC8A").s().p("AhKCQQALhoAJgeQAGgSAXg2IAXgzQAAgGACgHQAFgNALgDQAMgEAGAQQAEAJABAIIgGAfQgGAhADAMQADAMAMAWIAXAmQAKARgEAwQgCAYgEAUg");
	this.shape_43.setTransform(43.6,120);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9E8167").s().p("AhlCYQAKhcASgvQARg9AKgiQAUg9AagHQAagHAbAZQANANAJAOIgIAsQgFAuANAKQAMAKAIAVQAFALACAIIAABrg");
	this.shape_44.setTransform(43.2,119.2);

	this.instance = new lib.Path_13();
	this.instance.parent = this;
	this.instance.setTransform(50,135.6,1,1,0,0,0,20.9,4.2);
	this.instance.alpha = 0.512;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#754A36").s().p("Ai5AhQgCgCAAgEQgBgDACgDQACgCAEAAIA4gSQBDgSA6gGQBrgMBHACQAEgBACADQADACAAADQABADgDADQgCACgDABQg7gDh3ANQhEAHhAASIgyARIgBAAQgDAAgCgCg");
	this.shape_45.setTransform(95.5,83.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#754A36").s().p("AivBBQgDgCgBgDQgDgIAIgDIA0gbQA+gfA5gRQBAgVA9gKQAfgGARgBQAEgBADABQADACAAAEQABACgBAEQgCADgDAAQgPABgdAFQg6ALhIAVQhBAUg7AeIguAaIgDAAIgDAAg");
	this.shape_46.setTransform(77.8,85.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#754A36").s().p("AgFDFQgCgCAAgEIAAl+QAAgHAHAAQAIAAAAAHIAAF+QAAAEgCACQgDACgDABQgDgBgCgCg");
	this.shape_47.setTransform(118.8,56.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#754A36").s().p("AgCAtQgFAAAAgFIAAhPQAAgFAFAAIAFAAQAFAAAAAFIAABPQAAAFgFAAg");
	this.shape_48.setTransform(118.8,162.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#754A36").s().p("AgHB1IAAjpQAAgDACgDQACgDADAAQADAAADADQACADAAADIAADpQAAAIgIAAQgHAAAAgIg");
	this.shape_49.setTransform(118.8,181.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#754A36").s().p("AgHB2IAAjqQAAgDADgDQACgCACAAQAEAAACACQACADAAADIAADqQAAAHgIAAQgHAAAAgHg");
	this.shape_50.setTransform(115.5,170.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#754A36").s().p("AgHB2IAAjqQAAgDACgDQACgCADgBQADABADACQACADAAADIAADqQAAAIgIAAQgHAAAAgIg");
	this.shape_51.setTransform(118.8,22.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#754A36").s().p("AgHDpIAAnRQAAgDADgCQACgDACAAQAEAAACADQACACAAADIAAHRQAAAIgIAAQgHAAAAgIg");
	this.shape_52.setTransform(115.5,34);

	this.instance_1 = new lib.Path_9_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189.3,171.8,1,1,0,0,0,22.4,4.2);
	this.instance_1.alpha = 0.512;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#452717").s().p("ADdPEQgFgCAAgaQgGhqgEhXQgGiqAQglQAHgSAbgMQAjgNARgKQBFglAAhrQAAg7h/gcQg8gNjZgWQjCgThVgbQh/gqAAhRQAAhmCHhPQBeg3CFgeQAwgOCAgIQBdgFADgYQAGg8AEkZQAEkVgEgVIlHg3IHtAAIg8A3QgMHzAACVQAAA6glAMQgJAChQADIhxAEQhBAGhCAVQksBXAUB9QANBOD5AUQBEAGCLAIQB1AJA3AQQBbAbAiAuQAZAhAAA4QAAA4gNAfQgNAdgjAgQgNALguAeQgXAPAAASIAAFPQAAAOgGAGQgGAIgQAAQgNAAgFgIIgCgIQAAAigNAAQgJAEgEAAIgCAAg");
	this.shape_53.setTransform(91.8,101.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#573F2D").s().p("Ai+BSIC+ijIC/Cjg");
	this.shape_54.setTransform(105.9,74.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#5E432B").s().p("AhegbICphtIAVERg");
	this.shape_55.setTransform(115.5,69.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#846446").s().p("AhKiIICpBtIi9Ckg");
	this.shape_56.setTransform(96.4,69.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B38E71").s().p("Aipg1IFTAAIiqBsg");
	this.shape_57.setTransform(105.9,60.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#573F2D").s().p("AipBIICpiOICqCOg");
	this.shape_58.setTransform(105.9,48.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5E432B").s().p("AhUgQICVhtIAUD7g");
	this.shape_59.setTransform(114.4,42.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#846446").s().p("Ag/h9ICUBtIipCOg");
	this.shape_60.setTransform(97.4,42.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B38E71").s().p("AiUg1IEpAAIiVBsg");
	this.shape_61.setTransform(105.9,35.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#573F2D").s().p("AiUBHICUiNICVCNg");
	this.shape_62.setTransform(105.9,23.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5E432B").s().p("AhKgPICAhtIAVD6g");
	this.shape_63.setTransform(113.4,17.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#846446").s().p("Ag1h8ICABtIiVCNg");
	this.shape_64.setTransform(98.5,17.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B38E71").s().p("Ah/g1ID/AAIiABsg");
	this.shape_65.setTransform(105.9,10.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#846446").s().p("AhyiIIDlBgIjQCxg");
	this.shape_66.setTransform(134.4,69.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B38E71").s().p("AiggvIFBAAIhcBfg");
	this.shape_67.setTransform(139.1,60.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#573F2D").s().p("AjCBZIDRixIC0Cxg");
	this.shape_68.setTransform(144.5,73.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5E432B").s().p("AhZgoIBbhgIBYERg");
	this.shape_69.setTransform(155,69.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#846446").s().p("AhXh9ICvBgIibCbg");
	this.shape_70.setTransform(129.7,42.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B38E71").s().p("AiCgvIEFAAIhWBfg");
	this.shape_71.setTransform(134,35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#573F2D").s().p("AigBOICcibIClCbg");
	this.shape_72.setTransform(139.1,47.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5E432B").s().p("AhSgdIBUhgIBRD7g");
	this.shape_73.setTransform(146.9,42.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#846446").s().p("AhDh9ICHBgIhyCbg");
	this.shape_74.setTransform(125.5,17.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B38E71").s().p("AhlgvIDLAAIhEBfg");
	this.shape_75.setTransform(128.9,9.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#573F2D").s().p("AiCBOIByibICTCbg");
	this.shape_76.setTransform(134,22.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5E432B").s().p("AhJgdIBDhgIBQD7g");
	this.shape_77.setTransform(139.7,17.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#5E432B").s().p("AhygoIDlhgIgVERg");
	this.shape_78.setTransform(77.4,69.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B38E71").s().p("AiggvIFBAAIjlBfg");
	this.shape_79.setTransform(72.8,60.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#573F2D").s().p("AjCBZIC0ixIDRCxg");
	this.shape_80.setTransform(67.4,73.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#846446").s().p("AgBiIIBbBgIizCxg");
	this.shape_81.setTransform(56.9,69.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5E432B").s().p("AhYgdICwhgIgUD7g");
	this.shape_82.setTransform(82.2,42.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B38E71").s().p("AiCgvIEFAAIiwBfg");
	this.shape_83.setTransform(77.9,35);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#573F2D").s().p("AigBOIClibICcCbg");
	this.shape_84.setTransform(72.8,47.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#846446").s().p("AgBh9IBUBgIilCbg");
	this.shape_85.setTransform(65,42.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#5E432B").s().p("AhCgdICGhgIgVD7g");
	this.shape_86.setTransform(86.3,17.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B38E71").s().p("AhkgvIDJAAIiGBfg");
	this.shape_87.setTransform(82.9,9.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#573F2D").s().p("AiCBOICTibIByCbg");
	this.shape_88.setTransform(77.9,22.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#846446").s().p("AAHh9IBDBgIiTCbg");
	this.shape_89.setTransform(72.1,17.7);

	this.instance_2 = new lib.Path_11_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(189.2,100.1,1,1,0,0,0,14.8,3.1);
	this.instance_2.alpha = 0.512;

	this.instance_3 = new lib.Path_12_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(105.9,80.7,1,1,0,0,0,70.7,11.7);
	this.instance_3.alpha = 0.512;

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#654D33").s().p("AOCLoQhXgHjEhcIkBiCQg3gbhlhHQhrhLgsgYQhNgqjvgRQj4gRgrAsQgVAVggBGQgVAtgrAAQgvAAg1giQg1gngRgLQgMgHgdgBQgXgBgXgYQgkglAHgoIAHggQADgUgGgSQgLghhGg1QhqhPgHgHQg5g0gZgoQgvhKAEhbQADg7BBhMQBFhQB0hGQEcisF7gOQFygOG7CCQCsAyB4A3QBzA0AIAdQAHAXAsAcIBkA3QCaBWA5BjQBIB8gwDbQgTBaghBAQgiBCghAIQgdAGgbA2QgGANgoBjQgdBKgaAhQgiArgqAAIgGAAg");
	this.shape_90.setTransform(127.5,127.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3C2E1D").s().p("AGqF2QlkkCgfgVQgtgfjVAAQjUAAg+AfQgbANgNAmQgHATgJA3QgIAygLAYQgQAlggAOQg1AXhMhwIg3hRQgegngWAAQg5AAgcgPQgkgUgMg1QgShRABg8QABgigZgpQgPgZghgfIg+g3QhQhLgWhRQgWhWgLg7IgHgqMAlDAEQQAXAGAegaQASgPAfghQAagXAPAKQAUAMAMBFQAXCGgXBoQgNA6g8CKQgkBTgFACQgOAFgSAZQhUCOg9BhQh1C5gqAAQgrAAldj5g");
	this.shape_91.setTransform(128,163);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#452717").s().p("AAiBeQgJgXgPgKQgPgJgVAGIgSAHIgahOIAHgBQAHgDACgMQABgKgGgNIgGgMIAIAGQAKAIAHALQAGAKgDANQgCAHgDAFQARgQADgaQACgOgDgVIgDgRIAGAPQAHARADAOQAGAWgSAcQAXgTARghQAKgVgDgWIgGgSIAMASQALAWgCAXQgCAWgSATIgRANIARgDQAUAAAOALQAOALADAYQABAMgBAKQgNgagVgMQgNgHgUAGIgRAJIAOADQARAFAMANQARAQgCAXQgBALgEAIQgCgKgEgMg");
	this.shape_92.setTransform(155.6,38.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#452717").s().p("AgaBNQAJgRAZgNQANgHALgDQgLgBgQACQggAEgeAMQgeANgRAZIgLAXQAAgMAFgQQAJggAWgWQAYgVAigDQARgCANACQgKgDgKgIQgVgQgEgYQgDgXASgbQAKgOAKgJQgDAKgCANQgCAbAIATQAFATAcAKQANAFAMACQgGgGgHgKQgMgVgBgWQgDggAYgWQALgKALgEQgHALgHAQQgMAfAGAWQAJAYAaANQAOAGAMACIgsBlQgDgDgGgBQgLgDgLAKQgMAJgGATIgEARQgHgTAFgcQACgPAQgKQAHgGAIgCQgJAAgLADQgWAHgQAOQgPANgPAXIgNAVQAKgjAPgag");
	this.shape_93.setTransform(60.4,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.instance_3},{t:this.instance_2},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.instance_1},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol65, new cjs.Rectangle(0,0,255.9,225.3), null);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CAAB89").s().p("Ag6ArQAFgbAGgSQAFgMAOgPIAOgNIAkAAIALAJQAMALAEAHQAGANAEAtg");
	this.shape.setTransform(169.2,170,1.129,1.129);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C8166").s().p("AhIA7QAMgzAGgIQAGgKAZgwIAiACQAkAEAGANQALAUAKBOg");
	this.shape_1.setTransform(169.1,168.2,1.129,1.129);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CAAB89").s().p("AhhBkIAIguQALgwAGgIQAMgQAXgGIAQgjQASgkAJgEQALgFAUAIQASAGAEAHQAEAEASBbIARBag");
	this.shape_2.setTransform(184.4,161.1,1.129,1.129);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9C8166").s().p("Ah2B6QAQhsAOgRQAOgTAdgHQAIgVALgWQAVgsAMgFQANgFAYAJQAXAIAFAIQAFAFAVBuIAVBug");
	this.shape_3.setTransform(183.6,158.6,1.129,1.129);

	this.instance = new lib.Path_17();
	this.instance.parent = this;
	this.instance.setTransform(180.9,175.5,1.129,1.129,0,0,0,21.7,4.6);
	this.instance.alpha = 0.512;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CAAB89").s().p("AhLA3QAIgjAIgXQAFgPATgTIARgRIAuAAIAPAMQAOAOAFAKQAIAPAGA6g");
	this.shape_4.setTransform(83.5,190.2,1.129,1.129);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9C8166").s().p("AhcBLQAPhCAIgLQAFgGASgiIARggIAqACQAuAFAJARQAOAZALBkg");
	this.shape_5.setTransform(83.3,188,1.129,1.129);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CAAB89").s().p("AhFCGQALhhAIgcQAGgRAVgyIAVguIACgMQAFgNAKgDQALgDAGAPQADAIABAIIgGAcQgFAfADALQACALAMAUIAVAkQAJAQgDAsQgCAWgEATg");
	this.shape_6.setTransform(71.4,178.7,1.129,1.129);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9C8166").s().p("AhdCNQAJhVARgsIAZhYQARg4AZgHQAYgHAaAYQAMAMAHANIgIApQgEAqAMAKQASAOAHAgIAABjg");
	this.shape_7.setTransform(71,177.9,1.129,1.129);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#563B20").s().p("AgRCpIAAhVIhuAAIBVhVIg8AAIBThUIg2AAIBJhTIBKBTIg2AAIBTBUIg8AAIBVBVIhuAAIAABVg");
	this.shape_8.setTransform(79.7,129.5,1.129,1.129);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C2D1D").s().p("AgRCpIAAhVIhuAAIBVhVIg8AAIBThUIg2AAIBJhTIBKBTIg2AAIBTBUIg8AAIBVBVIhuAAIAABVg");
	this.shape_9.setTransform(60.3,134,1.129,1.129);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B48258").s().p("AgMB2IAAg7IhMAAIA7g7IgqAAIA6g7IgmAAIAzg6IA0A6IgmAAIA6A7IgqAAIA7A7IhMAAIAAA7g");
	this.shape_10.setTransform(182.9,118.4,1.129,1.129);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B48258").s().p("AgUDCIAAhiIh+AAIBihhIhFAAIBghhIg/AAIBUhfIBVBfIg+AAIBgBhIhGAAIBiBhIh+AAIAABig");
	this.shape_11.setTransform(53.4,80.4,1.129,1.129);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CAAB89").s().p("AgUDDIAAhhIh/AAIBjhjIhGAAIBghhIg/AAIBVhgIBWBgIg/AAIBgBhIhGAAIBjBjIh/AAIAABhg");
	this.shape_12.setTransform(26.9,93.7,1.129,1.129);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.8)"],[0.325,1],-6.1,22.3,7.1,-18.4).s().p("AhjBrQAWhwAnhEQAfg2ApglQAcgaAcgOQAFgCAGABQAGACAEAFQAGAKgHAJQgzBBgKA2QgHAoAJBAQAFAfAGAYIivBsQADgrALg5g");
	this.shape_13.setTransform(96.9,119,1.129,1.129);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.8)"],[0.325,1],22.7,4,-17.7,-4.8).s().p("ABzBaQhygLhHggQhggsgvhHQgDgFABgGQABgGAFgEQAJgHAKAGQBDAsA6AFQAoAEA+gQQAggIAXgJIB8CkIgOAAQgmAAgxgEg");
	this.shape_14.setTransform(149.2,109.8,1.129,1.129);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.8)"],[0.325,1],-21.6,-8,14.8,7.7).s().p("ACoB/Qg6g4g3gQQgngLhAAEIg5AGIhai5IBiAYQBtAgBBAtQAyAjAiAtQAWAeAMAeQACAFgCAGQgDAGgFADQgFACgDAAQgGAAgFgFg");
	this.shape_15.setTransform(88,66.7,1.129,1.129);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.8)"],[0.325,1],7.9,-21.7,-7.9,16).s().p("Ah2DEQgGgCgDgGQgGgKAJgJQA4g9AOg1QALgngEg/IgHg5IC4hcQgGArgQA3QggBugsBAQgiAzgtAiQgeAXgdAMIgGABIgGgBg");
	this.shape_16.setTransform(138.5,52.9,1.129,1.129);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["rgba(20,17,18,0)","rgba(34,26,31,0.071)","rgba(72,51,63,0.267)","rgba(132,90,117,0.58)","rgba(202,136,179,0.949)"],[0.192,0.282,0.455,0.694,0.949],2,0.9,0,2,0.9,26.7).s().p("AAaDPQhVgBg7g+Qg8g9ABhVQAChWA9g8QAqgoA3gNQA2gMA1AQQgsgHgrANQgrAOghAgQg6A3gBBQQgBBPA3A5QA0A2BJAFQBJAEA6gtIgEAFQg9A6hUAAIgDAAg");
	this.shape_17.setTransform(106.2,89.7,1.129,1.129);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(20,17,18,0)","rgba(35,27,22,0.063)","rgba(72,55,35,0.227)","rgba(133,99,55,0.49)","rgba(217,159,84,0.855)","rgba(238,174,91,0.949)"],[0.192,0.271,0.424,0.631,0.886,0.949],-0.8,-0.1,0,-0.8,-0.1,32.2).s().p("Ah8DlQg+gbgng2QAmAnAyASQA1ATA3gHQBfgMA7hMQA7hNgMheQgLhZhEg7QhEg6hXACIAIgBQBmgNBRBAQBSA/ANBnQANBlg/BTQhABShnANQgPACgQAAQg0AAgwgWg");
	this.shape_18.setTransform(118.6,90.8,1.129,1.129);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(20,17,18,0)","rgba(29,25,33,0.094)","rgba(53,46,71,0.349)","rgba(92,79,133,0.757)","rgba(110,95,162,0.949)"],[0.192,0.306,0.522,0.82,0.949],0.4,0,0,0.4,0,12.7).s().p("AgcBdQgagHgTgUQgSgUgGgZQAIAUAPAOQAQAPAWAGQAkALAggTQAigSAKglQAKghgPgfQgQgggggNIADAAQAnAMAUAkQAUAjgMAnQgLAngkAUQgWAMgYAAQgNAAgPgEg");
	this.shape_19.setTransform(114.4,88.7,1.129,1.129);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(20,17,18,0)","rgba(31,31,33,0.063)","rgba(58,67,72,0.235)","rgba(102,126,136,0.514)","rgba(163,206,222,0.894)","rgba(172,218,235,0.949)"],[0.192,0.275,0.431,0.647,0.914,0.949],0.5,0.1,0,0.5,0.1,16.4).s().p("Ag/BmQgqgfgIg1QgHgzAggqQAfgrA1gHQAigFAgANQAgANAVAcQgUgUgagJQgbgJgcAEQgwAHgdAoQgeAnAHAwQAHAtAjAdQAjAdAsgBIgEAAIgTACQgoAAgjgag");
	this.shape_20.setTransform(110.5,86.5,1.129,1.129);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(20,17,18,0)","rgba(32,32,24,0.075)","rgba(63,71,40,0.278)","rgba(112,133,67,0.604)","rgba(165,199,95,0.949)"],[0.192,0.286,0.467,0.714,0.949],0.8,-1.2,0,0.8,-1.2,22.2).s().p("AhwBuQgkgggPgtQgOgrAKgtQgDAlAOAiQAOAjAdAaQAyArBBgEQBCgFAsgyQApgugBg9QgBg9gqgtIAEAEQA2AvAFBHQAFBGgvA2QgvA1hHAFIgNABQg/AAgwgrg");
	this.shape_21.setTransform(113.8,91.2,1.129,1.129);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(20,17,18,0)","rgba(34,22,20,0.063)","rgba(70,34,25,0.235)","rgba(129,55,35,0.518)","rgba(209,85,51,0.898)","rgba(220,89,53,0.949)"],[0.192,0.275,0.431,0.647,0.914,0.949],-1.4,1.5,0,-1.4,1.5,37.7).s().p("AiqEHQhihHgUh4QgTh3BHhiQBHhiB3gUQB3gTBiBHQBCAvAgBLQAfBIgJBNQgBg+gdg4Qgeg6g1gnQhchBhuASQhvAShCBbQg9BVALBnQAMBoBNBFg");
	this.shape_22.setTransform(113.5,84.2,1.129,1.129);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#261D16").s().p("AjEDFQhRhSAAhzQAAhyBRhSQBRhRBzgBQBzABBSBRQBRBSAAByQAABzhRBSQhSBRhzAAQhzAAhRhRg");
	this.shape_23.setTransform(113.8,87,1.129,1.129);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#634B36").s().p("AgfHrIAAt2QAAgzgngrQBGAMAiA2QAmA6AABxIAALng");
	this.shape_24.setTransform(160.4,80,1.129,1.129);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#634B36").s().p("ABnBoQgXhkgsg3Qgrg4hFgyQg5gkAEAAQCCAAA7BJQA6BHAACbIAABSQABgcALgeIgMBAQgDgngMgzg");
	this.shape_25.setTransform(110.5,21.9,1.129,1.129);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#83674A").s().p("Am2JXIAAuWQAAkXDuAAQCCAAA7BJQA5BHAACcIAABRIADgVQAFghAPgbQAwhYB9AAQBjAAAuA0QA0A5AACGIAALmg");
	this.shape_26.setTransform(118.9,67.7,1.129,1.129);

	this.instance_1 = new lib.Path_7_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.7,149.5,1.129,1.129,0,0,0,3.9,2.6);
	this.instance_1.alpha = 0.512;

	this.instance_2 = new lib.Path_8_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(118.7,234.4,1.129,1.129,0,0,0,3.8,1.7);
	this.instance_2.alpha = 0.512;

	this.instance_3 = new lib.Path_9_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(83.7,155.8,1.129,1.129,0,0,0,4.9,2);
	this.instance_3.alpha = 0.512;

	this.instance_4 = new lib.Path_10_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(84.6,218.4,1.129,1.129,0,0,0,9.2,2.6);
	this.instance_4.alpha = 0.512;

	this.instance_5 = new lib.Path_11_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(61.4,153.8,1.129,1.129,0,0,0,4.2,2.4);
	this.instance_5.alpha = 0.512;

	this.instance_6 = new lib.Path_12_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(183.6,133.1,1.129,1.129,0,0,0,3.1,2.2);
	this.instance_6.alpha = 0.512;

	this.instance_7 = new lib.Path_13_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(54.5,103,1.129,1.129,0,0,0,7.2,3.1);
	this.instance_7.alpha = 0.512;

	this.instance_8 = new lib.Path_14();
	this.instance_8.parent = this;
	this.instance_8.setTransform(27.7,116.4,1.129,1.129,0,0,0,7,3.1);
	this.instance_8.alpha = 0.512;

	this.instance_9 = new lib.Path_15();
	this.instance_9.parent = this;
	this.instance_9.setTransform(78.9,196,1.129,1.129,0,0,0,20.2,4.6);
	this.instance_9.alpha = 0.512;

	this.instance_10 = new lib.Path_16();
	this.instance_10.parent = this;
	this.instance_10.setTransform(118.6,136.8,1.129,1.129,0,0,0,53.1,9.7);
	this.instance_10.alpha = 0.512;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#654D33").s().p("AgfNZQhWgfhDhOQhDhNh9jeIiCjtQgJgQASiHQASiJgbg0Qgagzh+gsQhQgdgQgHQgygVgYgXQgsgugkhkIgbhcQARiFC1hmQCqhfC0AAQBLAAA0AiQAaARA1A7QAxA1AsAYQBCAkBjAEQDNAHDxBeQDYBUAqA/QAdAtAGBGQADAigDAaIARADQAVAGASAOQA4AvAIB0QAIB6hrDEQhYCjhAA3QglAgiGA2Ih/AwIguBDQg5BIg0AaQg0AahLAaIhAAUQgdAAgrgPg");
	this.shape_27.setTransform(105.7,170.2,1.129,1.129);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3C2D1D").s().p("AiJLHQhRhQiIiyQhwiSg+iOQg4h+gJhqQgFg4APhEQALg0gThLQgVhPhggZQgzgMgYgHQgogMgTgVQglgpghiZIgaiSIYOESQAnAUA9AIIBgANQAyALAcAdQAjAkAMBIQAYCLhQDaQhEC7g+BCQgqAsh3A7Qh3A6gxA2QgWAXg6BKQg7BKgjAmQh5CEhaAAQhBAAhphog");
	this.shape_28.setTransform(106,201,1.129,1.129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol64, new cjs.Rectangle(0,0,212,293), null);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween32("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(147.5,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:142.1},7).to({y:156.1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,330,347);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7A58E").s().p("AyuHxQhzhRhlhjIhPhSQjzgpjwhzQnhjkAJlwQAEh+AjhnQBTBGAlBhQAyCDBNA/QBCA3BoARQA7AKChAEQCnAFBtAQQCCAUCIAyQBOAdCVBAQCJA4ByAZQCZAiC1AAQDPAADRgwQB1gcDLg+QCugwCCADQCrAEC/BUQCfBGBzgYQBSgSBmhTQCKhxAtgaQB6hGCYAAQEGAAEfkjQAKCyhACzQhNDal9BQQh3AZiHAIIhwADQgIAigZAvQgyBdhSA/QkFDJnjisQiRBqjXBsQmsDYldAKIgcAAQlXAAlfj6g");
	this.shape.setTransform(244.9,190.9);

	this.instance = new lib.Path_1_13();
	this.instance.parent = this;
	this.instance.setTransform(245,132.9,1,1,0,0,0,253,140.8);
	this.instance.shadow = new cjs.Shadow("rgba(34,30,31,0.749)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol51, new cjs.Rectangle(-9,-9,526,301), null);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6A48C").s().p("AqYEUQg/gtg5g3IgrguQiHgWiFhAQkLh+AFjMQAChEAUg7QAuAmAUA2QAcBJArAjQAkAeA6AKQAhAGBZACQBcADA9AJQBIALBLAbQAsAQBSAkQCfA/CmAAQBzAABzgaQBBgQBxgiQBggaBIABQBfADBqAuQBYAnBAgOQAtgJA4guQBNg/AZgOQBEgnBUAAQCSAACeiiQAGBjgjBjQgrB5jUAsQhBANhMAFIg9ACQgTBLhJA4QiQBwkMhfQhRA6h3A8QjtB4jBAFIgQAAQi+AAjDiKg");
	this.shape.setTransform(135.8,105.9);

	this.instance = new lib.Path_1_7();
	this.instance.parent = this;
	this.instance.setTransform(135.8,73.6,1,1,0,0,0,143.8,81.5);
	this.instance.shadow = new cjs.Shadow("rgba(33,31,31,0.749)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(-9,-9,307,183), null);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6A48C").s().p("AEZG3QjOgGj7h/QhPgnhKgvIg7gnQkbBliah3Qgwglgdg3IgUgvQhnAChwgXQjggvgtiAQgmhnAGhrQCpCsCaAAQBZAABIApQAbAPBRBDQA8AwAwALQBDAOBegpQBwgyBlgCQBMgCBmAcIC8A1QB7AcB6AAQCvAACphDICFg3QBQgdBMgMQBAgJBigDQBfgDAjgFQA9gLAnggQAtglAehNQAWg6AwgoQAVA7ACBMQAFDYkaCGQhZAqhqAdIhZAUQhCBOhsBNQjOCSjJAAIgRAAg");
	this.shape.setTransform(158.9,123.8,1.103,1.103);

	this.instance = new lib.Path_1_8();
	this.instance.parent = this;
	this.instance.setTransform(160.4,87.8,1.103,1.103,0,0,0,153.3,87.5);
	this.instance.shadow = new cjs.Shadow("rgba(33,31,31,0.749)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(-9,-9,353,208), null);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7A58E").s().p("AyvHxQhyhRhmhjIhOhSQjzgpjwhzQnijkAKlwQADh/AkhmQBSBGAlBhQAzCDBMA/QBCA3BpARQA6AKCiAEQCnAFBtAQQCCAUCHAyQBPAdCVBAQCJA3BxAaQCaAiC0AAQDQAADQgwQB2gcDLg+QCugwCCADQCqAEDABUQCfBGBzgZQBSgRBlhTQCKhxAtgaQB7hGCYAAQEGAAEfkjQAJCzg/CyQhODal9BPQh3AaiHAIIhvADQgJAigZAuQgxBdhSA/QkFDKnjisQiRBqjXBsQmtDYldAKIgbAAQlXAAlgj6g");
	this.shape.setTransform(246.4,192.1,1.006,1.006);

	this.instance = new lib.Path_1_11();
	this.instance.parent = this;
	this.instance.setTransform(247.8,134.5,1.006,1.006,0,0,0,254.3,141.6);
	this.instance.shadow = new cjs.Shadow("rgba(34,30,31,0.749)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(-9,-9,528,303), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7A58E").s().p("AyuHxQhzhRhlhjIhPhSQjzgpjwhzQnhjkAJlwQADh7AkhqQBSBGAlBhQAzCDBMA/QBCA3BpARQA6AKCiAEQCnAFBtAQQCCAUCHAyQBPAdCVBAQCJA3BxAaQCaAiC0AAQDQAADQgwQB2gcDLg+QCugwCCADQCqAEDABUQCfBGBzgZQBSgRBlhTQCKhxAtgaQB7hGCYAAQEGAAEfkjQAJC0g/CxQhODal9BPQh3AaiHAIIhvADQgJAigZAuQgxBdhSA/QkFDKnjisQiRBqjXBsQmsDYldAKIgcAAQlWAAlgj6g");
	this.shape.setTransform(253.9,197.9,1.037,1.037);

	this.instance = new lib.Path_1_9();
	this.instance.parent = this;
	this.instance.setTransform(252,139.8,1.037,1.037,0,0,0,251.1,142.7);
	this.instance.shadow = new cjs.Shadow("rgba(34,30,31,0.749)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(-9,-9,543,311), null);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7A58E").s().p("AHkL2QligLmzjbQiIhEiAhRIhlhDQnpCukJjNQhThAgyheIgihRQiyADjBgpQmDhQhPjeQhAi0AKi2QCDCFCABKQCaBZCQAAQCaAAB8BHQAuAaCMBzQBnBUBTASQB1AZChhHQDChVCugFQCDgDCxAwIFFBcQDTAxDTAAQC3AACcgjQBzgaCLg4IDnhfQCJgyCEgUQBugQCqgFQCkgFA7gKQBqgRBDg4QBNhAA0iFQAmhiBThHQAkBqADB/QAKF1noDnQiZBJi4AxIiZAkQhyCGi5CEQllD+lbAAIgdAAg");
	this.shape.setTransform(274.5,213.9,1.104,1.104);

	this.instance = new lib.Path_1_10();
	this.instance.parent = this;
	this.instance.setTransform(274.8,149.3,1.104,1.104,0,0,0,256.7,143.1);
	this.instance.shadow = new cjs.Shadow("rgba(34,30,31,0.749)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(-9,-9,584,333), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6A48C").s().p("AGWJ8QkpgJlti4Qhyg5hshEIhUg5QmbCTjeisQhGg2gqhPIgchEQiVADiigjQlFhDhCi6Qg2iWAIiaQBuBwBrA+QCCBKB4AAQCCAABoA8QAnAWB1BgQBWBHBGAPQBiAVCHg8QCjhHCSgEQBugCCUAoIERBNQCxApCxAAQCZAACDgdQBhgWB1gvIDBhQQBzgqBvgRQBcgNCPgEQCJgEAygIQBZgPA4gvQBBg1ArhwQAghSBGg8QAeBYADBrQAIE5mZDCQiAA9iaAqIiBAdQhfBxicBvQkrDVkkAAIgYAAg");
	this.shape.setTransform(208.6,162.5);

	this.instance = new lib.Path_1_6();
	this.instance.parent = this;
	this.instance.setTransform(208.5,113.1,1,1,0,0,0,216.3,121);
	this.instance.shadow = new cjs.Shadow("rgba(33,31,31,0.749)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(-9,-9,453,262), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7A58E").s().p("AKpQqQnygPpkk0QjAhgi0hyIiOhfQqwD2l1kgQh1hahHiFQgWgpgPgpIgKggQj6AFkQg6Qoghxhvk4Qhaj9AOkAQC4C6C0BoQDZB9DKAAQDZAACvBkQBBAlBKA8QArAiBQBEQCQB2B1AZQCkAjDjhkQERh4D0gFQC5gED4BDIDbBAQCNApBiAYQEqBFEnAAQECAADbgxQCigkDEhQIFFiFQDBhHC6gcQCbgXDugHQDmgGBUgOQCVgZBehOQBthaBIi7QA2iLB1hkQAzCWAECyQAOINquFGQjXBmkDBGIjYAyQifC9kGC6Qn1FlnpAAIgogBg");
	this.shape.setTransform(787.8,1022.8);

	this.instance = new lib.Path_1_12();
	this.instance.parent = this;
	this.instance.setTransform(787.7,939.9,1,1,0,0,0,357.4,197.4);
	this.instance.shadow = new cjs.Shadow("rgba(34,30,31,0.749)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(429.3,741.3,735,415), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween30("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(90.3,107.6);

	this.instance_1 = new lib.Tween31("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.3,107.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_1}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:143.8},7).to({_off:true,y:107.6},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.5,215.2);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{newmon:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_60 = function() {
		this.stop();
		var canvas = this
		this.close_newmon.addEventListener("click",close_blur)
		function close_blur(){
			canvas.parent.blur_layer.visible = false;
			canvas.parent.gotoMap.gotoAndPlay("show_map_guide");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60).call(this.frame_60).wait(1));

	// Layer 7
	this.close_newmon = new lib.Symbol37();
	this.close_newmon.parent = this;
	this.close_newmon.setTransform(623.5,445.5,1,1,0,0,0,36.6,36.6);
	this.close_newmon._off = true;

	this.timeline.addTween(cjs.Tween.get(this.close_newmon).wait(60).to({_off:false},0).wait(1));

	// Layer 1
	this.instance = new lib.Tween27("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(395.9,558.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({startPosition:0},35).to({alpha:1,mode:"independent"},24).wait(1));

	// Layer 1
	this.instance_1 = new lib.Tween28("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(375,667);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween29("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(372.1,666.7,1.007,1.007,0,0,0,0.1,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},35).to({state:[{t:this.instance_2}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:373},35).to({_off:true,regX:0.1,regY:-1.1,scaleX:1.01,scaleY:1.01,x:372.1,y:666.7,alpha:1},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(90.2,107.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:66.6},13).to({y:107.6},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.5,215.2);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hatchTolevel:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJAAQgGABgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgEIALgHIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape.setTransform(29.7,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBeQgPgYAAgxIAAgqQgBgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAHgEAHgBIAMgBQALAAAKAEQAJACAHAHQAIAGADAJQAFAKAAANIgBANIgDAMIghAAIAAgIQAAgSgEgJQgEgKgJAAQgFAAgDADQgFACgCAGQgCAFgBAKIgCAZIAAA/IABAaQABALADAGQACAGAEADQAEADAGABIAGgCQACgBADgEIAEgKIABgPIAAgHIAkAAIAAAIQAAAigOAOQgOAPgdAAQgcAAgPgXg");
	this.shape_1.setTransform(14.2,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgGgHQgGgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_2.setTransform(1.4,-1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFABgDAEQgDAEgCAHQgCAHAAAJIAAALIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_3.setTransform(-12.7,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZCOIAAiDIgyAAIAACDIgqAAIAAkbIAqAAIAAB3IAyAAIAAh3IAsAAIAAEbg");
	this.shape_4.setTransform(-29,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_5.setTransform(33.6,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_6.setTransform(18.6,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_7.setTransform(7.1,-2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_8.setTransform(-5.1,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_9.setTransform(-20.2,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("Ag0COIAAkbIBoAAIAAAiIg9AAIAABVIAuAAIAAAhIguAAIAABhIA/AAIAAAig");
	this.shape_10.setTransform(-33.4,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},8).wait(1));

	// Isolation Mode
	this.instance = new lib.Path_18();
	this.instance.parent = this;
	this.instance.setTransform(-2,-1.4,0.871,1,0,0,0,98.5,33.9);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.4,-35.3,226.8,67.9);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTCYQgHgIAAgRQAAgTAHgHQAIgJALAAQANABAHAIQAIAJgBARQABAQgIAJQgHAIgNABQgLAAgIgJgAgRA8IgHjbIAwAAIgGDbg");
	this.shape.setTransform(335.2,674.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWCfQgKgCgJgFQgIgFgEgKQgEgJgBgOIABgGIABgIIAgAAQAAAPAGAHQAFAGANAAIAJgBQAEgCADgDQADgEADgIQACgHAAgLIAAgmQgGAIgJAGQgJAFgNAAIgKgBIgLgDQgHgDgFgGQgGgGgEgJQgFgKgCgOQgDgPAAgTIAAhAQAAgUADgOQACgNAFgKQAEgJAGgFQAGgGAGgCIALgEIAKAAQAJAAAGACQAHACAEAEIAJAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgJALgMAGQgNAGgRAAQgMAAgKgCgAgIh+QgEABgDAFQgDAFgCAJIgBAWIAABPIABAVQACAJADAFQADAFAFACIAIACIAIgCIAFgEIAFgFIADgHIAAiDQgDgIgGgFQgFgFgIAAg");
	this.shape_1.setTransform(320.1,681.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWCfQgKgCgJgFQgHgFgFgKQgEgJgBgOIABgGIABgIIAgAAQAAAPAGAHQAGAGAMAAIAJgBQAEgCAEgDQACgEADgIQACgHAAgLIAAgmQgGAIgJAGQgJAFgOAAIgJgBIgLgDQgHgDgFgGQgFgGgFgJQgEgKgDgOQgDgPAAgTIAAhAQAAgUADgOQADgNAEgKQAEgJAHgFQAFgGAGgCIALgEIAKAAQAJAAAGACQAHACAEAEIAJAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgJALgMAGQgNAGgRAAQgMAAgKgCgAgIh+QgEABgDAFQgDAFgCAJIgBAWIAABPIABAVQACAJADAFQADAFAFACIAIACIAIgCIAFgEIAFgFIADgHIAAiDQgDgIgGgFQgFgFgIAAg");
	this.shape_2.setTransform(302.6,681.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcB2QgMgGgIgMQgIgMgEgTQgFgUAAgbIAAgtQABgXADgQQAEgQAFgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIANgBQANAAALAEQAKAEAJAIQAJAJAEAPQAGAOAAAWIgBAPIgBAPIgCAOIgDAMIhPAAIAAAYIABAbQACALADAGQACAHAGADQAEADAHAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgNgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQABgYgGgLQgFgKgMAAQgFAAgEADg");
	this.shape_3.setTransform(286.2,678);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2B7IAAjxIAhAAIADAYQAHgNAKgIQAJgGAKAAQATAAAJAMQAJALAAAYIAAAHIgCAJIgBAJIgCAHIggAAIAAgWIgBgMIgCgHIgEgFIgEgBQgFAAgEAEQgFADgDAGIAADHg");
	this.shape_4.setTransform(264.3,677.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcB2QgLgGgJgMQgIgMgEgTQgFgUAAgbIAAgtQAAgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIANgBQANAAALAEQAKAEAJAIQAJAJAEAPQAGAOAAAWIgBAPIgBAPIgCAOIgDAMIhPAAIAAAYIABAbQACALADAGQACAHAGADQAEADAHAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgQAAgMgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQABgYgGgLQgFgKgMAAQgEAAgFADg");
	this.shape_5.setTransform(248.5,678);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgNQgEgMAAgTIAAiVIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGAEIAIABIALgCIAKgFIAAAZIgIAIIgKAEIgJADIgKABQgJAAgIgDg");
	this.shape_6.setTransform(234.5,675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIABgQIAEgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAGAAQALAAAEgGQAEgGAAgHIgBgHIgCgHIgFgIIgHgIIgfgmIgMgPIgLgRIgHgSQgCgKgBgKQAAgOAGgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAAKAEQALADAHAGQAIAGAEAKQAFAJgBANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgGAAQgFAAgEACIgHAFIgCAGIgBAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgMAAgMgDg");
	this.shape_7.setTransform(221.3,678);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWB7IAAi4QAAgQgFgFQgFgHgJAAQgGAAgGAFQgHAEgFAHIAADEIgtAAIAAjxIAiAAIAFAaQAFgJAGgFIAMgJIANgFIANgBQAVAAAMAOQALAPAAAeIAAC5g");
	this.shape_8.setTransform(205,677.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgHgEgHgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAHAEQAIADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgIAEgHACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAGAAAFgDQAEgEACgHQADgHABgLIACgdIAAg6IgCgdQgBgMgDgHQgCgHgEgDQgFgDgGAAQgEAAgFADg");
	this.shape_9.setTransform(187.7,678);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABCB7IAAi4IgBgMIgEgJQgCgEgEgCIgJgBQgGAAgHAFQgGAEgFAIIAAADIAAAEIAAC8IgsAAIAAi4IgBgMIgDgJQgDgEgEgCIgJgBQgGAAgGAFQgHAEgEAHIAADEIgsAAIAAjxIAiAAIAEAaQAFgJAGgFIANgJIAMgFIAOgBQAOAAAJAGQAKAIAFANQAFgIAGgFIAMgJIANgEIANgBQAWAAALAOQALAPAAAeIAAC5g");
	this.shape_10.setTransform(166,677.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGAEIAIABIALgCIAKgFIAAAZIgIAIIgKAEIgJADIgKABQgJAAgIgDg");
	this.shape_11.setTransform(597.6,617.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXB5QgLgDgIgGQgIgGgFgKQgEgKAAgPIACgQIACgLIAgAAIABAWQABAIADAGQADAFAFACQAFADAGAAQAKAAAFgGQAFgGAAgHIgCgHIgDgHIgEgIIgGgIIgggmIgMgPIgKgRIgIgSQgCgKAAgKQAAgOAEgLQAFgKAJgHQAHgHALgDQALgEALAAQANAAALAEQAKADAIAGQAHAGAEAKQAFAJAAANIgCAQIgDAOIgfAAIgBgVQgBgJgCgGQgCgGgEgDQgFgDgHAAQgEAAgEACIgGAFIgEAGIgBAIQAAAIAFAHIAKAQIAjApIAJALIAJAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgOAAQgMAAgKgDg");
	this.shape_12.setTransform(584.4,620.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag2B7IAAjxIAhAAIADAYQAHgNAKgIQAJgGAKgBQATAAAJANQAJALAAAYIAAAHIgCAIIgCAJIgBAIIggAAIAAgWIgBgMIgCgHIgEgFIgFgBQgEAAgEADQgFAEgDAGIAADHg");
	this.shape_13.setTransform(571,620.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgHAAgPQAAgHACgGQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAIgNgBQgLABgIgIg");
	this.shape_14.setTransform(558.7,616.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdChIAAjRIgWAAIAAggIAWAAIAAgRQAAgUADgMQAEgNAHgHQAIgHAIgCQAKgCALAAIAHAAIAIABIAHACIAIACIAAAgQgIgCgJAAIgJABIgHAFIgEAJIgCANIAAARIAhAAIAAAgIghAAIAADRg");
	this.shape_15.setTransform(549.2,616.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag2B7IAAjxIAgAAIAEAYQAIgNAKgIQAIgGAKgBQATAAAJANQAJALAAAYIAAAHIgBAIIgCAJIgDAIIgeAAIAAgWIgBgMIgDgHIgEgFIgEgBQgGAAgDADQgEAEgDAGIAADHg");
	this.shape_16.setTransform(529.5,620.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag1BrQgNgOAAgeIAAi4IAtAAIAAC0QAAAQAFAGQAFAHAJAAQAGAAAHgEQAGgEAFgGIAAjDIAsAAIAADxIgiAAIgEgaQgGAIgFAFQgGAGgHADIgLAFIgOABQgWAAgKgPg");
	this.shape_17.setTransform(512.8,620.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgHgEgHgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAHAEQAIADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgIAEgHACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAGAAAFgDQAEgEADgHQACgHABgLIACgdIAAg6IgCgdQgBgMgCgHQgDgHgEgDQgFgDgGAAQgEAAgFADg");
	this.shape_18.setTransform(495.5,620.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag/CcIAAgcQAKACAIgCQAJgCAHgGQAFgGAEgIQAEgKAAgNIg6jyIAuAAIAZCGIAHAtIABAAIAFgtIAViGIAsAAIgzD6QgEASgFANQgFANgHAIQgIAJgKAEQgLAEgNAAQgMAAgMgEg");
	this.shape_19.setTransform(479.2,624.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgHgEgHgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAHAEQAIADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgIAEgHACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAGAAAFgDQAEgEACgHQADgHABgLIACgdIAAg6IgCgdQgBgMgDgHQgCgHgEgDQgFgDgGAAQgEAAgFADg");
	this.shape_20.setTransform(455.5,620.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGAEIAIABIALgCIAKgFIAAAZIgIAIIgKAEIgJADIgKABQgJAAgIgDg");
	this.shape_21.setTransform(441.3,617.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag/CcIAAgcQAKACAJgCQAIgCAGgGQAGgGAEgIQADgKABgNIg6jyIAuAAIAZCGIAGAtIACAAIAFgtIAViGIArAAIgzD6QgDASgFANQgFANgHAIQgIAJgKAEQgKAEgPAAQgLAAgMgEg");
	this.shape_22.setTransform(419.6,624.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWCfQgLgCgIgFQgHgFgFgKQgFgJABgOIAAgGIACgIIAfAAQAAAPAGAHQAGAGAMAAIAIgBQAFgCAEgDQADgEACgIQACgHAAgLIAAgmQgGAIgKAGQgIAFgOAAIgJgBIgMgDQgFgDgGgGQgFgGgFgJQgEgKgDgOQgDgPAAgTIAAhAQAAgUADgOQADgNAEgKQAFgJAGgFQAFgGAGgCIALgEIALAAQAIAAAGACQAGACAGAEIAIAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgIALgNAGQgNAGgRAAQgLAAgLgCgAgIh+QgEABgDAFQgDAFgBAJIgCAWIAABPIACAVQABAJADAFQADAFAEACIAIACIAIgCIAHgEIAEgFIAEgHIAAiDQgEgIgFgFQgGgFgIAAg");
	this.shape_23.setTransform(402.8,624.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag2B7IAAjxIAhAAIADAYQAIgNAJgIQAJgGAKgBQATAAAJANQAJALAAAYIAAAHIgCAIIgCAJIgCAIIgeAAIAAgWIgCgMIgCgHIgEgFIgFgBQgEAAgEADQgEAEgEAGIAADHg");
	this.shape_24.setTransform(388.4,620.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAFgLAIgGQAHgHAIgDQAIgEAHgBIANgBQAMAAALAEQAMAEAIAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQABALACAGQADAHAFADQAFADAHAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQAAgYgGgLQgFgKgMAAQgFAAgEADg");
	this.shape_25.setTransform(372.6,620.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAWB7IAAi4QAAgQgFgFQgFgHgJAAQgGAAgHAFQgGAEgFAIIAADDIgsAAIAAjxIAiAAIADAaQAGgJAGgFIANgJIAMgFIAOgCQAUAAAMAPQAMAPAAAeIAAC5g");
	this.shape_26.setTransform(355.4,620.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIAOgBQALAAALAEQALAEAJAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQAAALADAGQAEAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgFAAgEADg");
	this.shape_27.setTransform(338.5,620.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIAOgBQALAAALAEQALAEAJAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQAAALADAGQAEAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgFAAgEADg");
	this.shape_28.setTransform(314.6,620.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWCfQgKgCgIgFQgJgFgEgKQgEgJAAgOIAAgGIABgIIAgAAQAAAPAGAHQAFAGANAAIAIgBQAFgCADgDQADgEADgIQACgHAAgLIAAgmQgGAIgKAGQgIAFgNAAIgKgBIgMgDQgGgDgFgGQgGgGgEgJQgFgKgCgOQgDgPAAgTIAAhAQAAgUADgOQACgNAFgKQAFgJAFgFQAGgGAGgCIAMgEIAKAAQAIAAAGACQAHACAFAEIAIAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgJALgMAGQgNAGgRAAQgMAAgKgCgAgIh+QgEABgDAFQgDAFgCAJIgBAWIAABPIABAVQACAJADAFQADAFAEACIAIACIAIgCIAGgEIAFgFIAEgHIAAiDQgEgIgFgFQgGgFgIAAg");
	this.shape_29.setTransform(297.4,624.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag2B7IAAjxIAgAAIAEAYQAIgNAKgIQAIgGAKgBQATAAAJANQAJALAAAYIAAAHIgBAIIgCAJIgDAIIgeAAIAAgWIgBgMIgDgHIgEgFIgEgBQgGAAgDADQgEAEgDAGIAADHg");
	this.shape_30.setTransform(282.9,620.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_31.setTransform(266.3,620.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_32.setTransform(249.9,616.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgtBjQgQgZAAg0IAAgtQAAgXAEgQQADgQAGgMQAFgLAHgGQAHgHAIgDQAHgEAIgBIAMgBQANAAAKAEQAKADAHAHQAIAGAEAKQAEAKAAAOIgBAOIgCAMIgkAAIAAgIQAAgTgEgKQgEgKgKAAQgFAAgEADQgEACgCAGQgDAGgBALIgCAaIAABDIABAbQABALADAHQADAHAEADQAEAEAGAAIAGgCQAEgCACgEIAEgKIABgQIAAgHIAnAAIAAAJQAAAigPAQQgQAQgeAAQgeAAgQgZg");
	this.shape_33.setTransform(233.5,620.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIABgQIAEgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAHAAQAKAAAEgGQAEgGAAgHIAAgHIgDgHIgFgIIgHgIIgfgmIgMgPIgLgRIgHgSQgCgKgBgKQAAgOAGgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAAKAEQALADAHAGQAIAGAEAKQAEAJAAANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgGAAQgGAAgDACIgHAFIgCAGIgBAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgMAAgMgDg");
	this.shape_34.setTransform(210.8,620.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgHAAgPQAAgHACgGQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAIgNgBQgLABgIgIg");
	this.shape_35.setTransform(199,616.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgHgEgHgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgIAEgHACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgEAAgFADg");
	this.shape_36.setTransform(178.4,620.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgXCgIgMgDQgFgDgGgGQgGgFgEgKQgEgKgDgOQgDgPAAgUIAAhMQAAgVADgOQADgOAFgJQAFgJAGgFQAFgFAGgDIALgDIAJAAIANABIAJAFIAJAHIAGAHIgCgfIAAhAIAtAAIAAE+IgjAAIgEgWIgHAJIgJAIIgMAGQgGACgIAAgAgIgzQgEABgDAFQgDAFgBAJIgCAWIAABbIACAXQABAIADAFQADAFAEACIAIACIAJgCIAGgEIAEgFIADgHIAAiQQgDgIgGgFQgFgFgIAAg");
	this.shape_37.setTransform(161.1,617);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgHgEgHgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgIAEgHACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgEAAgFADg");
	this.shape_38.setTransform(641.4,563.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIACIALgCIAKgEIAAAYIgIAHIgKAFIgJADIgKABQgJAAgIgDg");
	this.shape_39.setTransform(627.3,560.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXCgIgMgDQgFgDgGgGQgFgFgFgKQgEgKgDgOQgDgPAAgUIAAhMQAAgVADgOQADgOAFgJQAFgJAFgFQAHgFAGgDIALgDIAJAAIALABIAKAFIAIAHIAHAHIgBgfIAAhAIAsAAIAAE+IgjAAIgEgWIgGAJIgJAIIgNAGQgGACgHAAgAgIgzQgEABgDAFQgDAFgCAJIgBAWIAABbIABAXQACAIADAFQADAFAEACIAIACIAIgCIAHgEIAEgFIAEgHIAAiQQgEgIgFgFQgGgFgIAAg");
	this.shape_40.setTransform(604.6,559.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIAOgBQALAAALAEQALAEAJAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQABALACAGQAEAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgFAAgEADg");
	this.shape_41.setTransform(588.2,563.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIAOgBQALAAALAEQALAEAJAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQAAALADAGQAEAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgFAAgEADg");
	this.shape_42.setTransform(572,563.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAWB7IAAi4QAAgQgFgFQgEgHgKAAQgGAAgHAEQgGAFgFAIIAADDIgtAAIAAjxIAjAAIADAaQAGgJAGgFIAMgJIANgFIANgCQAWAAALAPQAMAPAAAeIAAC5g");
	this.shape_43.setTransform(554.9,563.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag1BrQgMgOgBgeIAAi4IAtAAIAAC1QAAAQAFAFQAFAHAJAAQAGAAAHgEQAGgDAFgIIAAjCIAtAAIAADxIgjAAIgEgaQgGAIgFAFQgGAGgHADIgLAFIgOACQgWgBgKgPg");
	this.shape_44.setTransform(529.3,563.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgIgEgGgIQgGgHgFgLQgGgMgCgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAHgGQAGgHAIgEQAHgDAIgBIAOgCIAQABQAHABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAFADAEAAQAGAAAFgDQAEgEADgHQACgHABgLIABgdIAAg6IgBgdQgBgMgCgHQgDgHgEgDQgFgDgGAAQgEAAgFADg");
	this.shape_45.setTransform(512.1,563.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Ag/CcIAAgcQAKACAIgCQAJgCAHgGQAFgGAEgIQAEgKAAgNIg5jyIAtAAIAaCGIAGAtIABAAIAFgtIAViGIAsAAIgzD6QgEARgFANQgFAOgHAIQgHAIgLAFQgLAEgNAAQgMAAgMgEg");
	this.shape_46.setTransform(495.7,567.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgWCfQgKgCgIgFQgJgFgEgKQgEgJgBgOIABgGIABgIIAgAAQAAAPAGAHQAFAGANAAIAJgBQAEgCADgDQADgEADgIQACgHAAgLIAAgmQgGAIgJAGQgJAFgOAAIgJgBIgLgDQgHgDgFgGQgGgGgEgJQgFgKgCgOQgDgPAAgTIAAhAQAAgUADgOQACgNAFgKQAEgJAGgFQAGgGAGgCIALgEIAKAAQAJAAAGACQAHACAEAEIAJAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgJALgMAGQgNAGgRAAQgMAAgKgCgAgIh+QgEABgDAFQgDAFgCAJIgBAWIAABPIABAVQACAJADAFQADAFAFACIAIACIAIgCIAFgEIAFgFIADgHIAAiDQgDgIgGgFQgFgFgIAAg");
	this.shape_47.setTransform(471.3,567.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAWB7IAAi4QAAgQgFgFQgFgHgJAAQgGAAgGAEQgHAFgFAIIAADDIgtAAIAAjxIAiAAIAFAaQAFgJAGgFIAMgJIANgFIANgCQAWAAALAPQALAPAAAeIAAC5g");
	this.shape_48.setTransform(453.9,563.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgOQAAgIACgFQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAIgNgBQgLABgIgIg");
	this.shape_49.setTransform(440.5,558.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_50.setTransform(426.8,559.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIACIALgCIAKgEIAAAYIgIAHIgKAFIgJADIgKABQgJAAgIgDg");
	this.shape_51.setTransform(412.1,560.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIACIALgCIAKgEIAAAYIgIAHIgKAFIgJADIgKABQgJAAgIgDg");
	this.shape_52.setTransform(392.6,560.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIABgQIAEgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAGAAQALAAAEgGQAFgGgBgHIgBgHIgCgHIgFgIIgGgIIgggmIgMgPIgLgRIgHgSQgDgKAAgKQABgOAFgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAALAEQAKADAIAGQAHAGAEAKQAFAJgBANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgCgGgFgDQgEgDgGAAQgFAAgEACIgHAFIgCAGIgBAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgMAAgMgDg");
	this.shape_53.setTransform(379.3,563.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("Ag2B7IAAjxIAhAAIADAYQAHgNALgIQAIgGAKgBQATAAAJANQAJALAAAYIAAAHIgBAIIgCAJIgCAIIggAAIAAgWIgBgMIgCgHIgEgFIgEgBQgFAAgEADQgEAEgDAGIAADHg");
	this.shape_54.setTransform(365.9,563.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgOQAAgIACgFQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAIgNgBQgLABgIgIg");
	this.shape_55.setTransform(353.6,558.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgeChIAAjRIgVAAIAAggIAVAAIAAgRQABgUAEgMQAEgNAGgHQAIgHAIgCQAKgCALAAIAHAAIAIABIAIACIAHACIAAAgQgIgCgJAAIgIABIgIAFIgEAJIgCANIAAARIAhAAIAAAgIghAAIAADRg");
	this.shape_56.setTransform(344.1,559.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgbB2QgNgGgIgMQgIgMgEgTQgEgUAAgbIAAgtQAAgXADgQQAEgQAFgMQAFgLAIgGQAHgHAIgDQAIgEAHgBIANgBQAMAAAMAEQALAEAIAIQAIAJAGAPQAEAOAAAWIAAAPIgBAPIgCAOIgDAMIhPAAIAAAYIACAbQABALACAGQAEAHAEADQAFADAHAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgMgGgAgHhXQgEACgDAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQAAgYgGgLQgGgKgLAAQgEAAgFADg");
	this.shape_57.setTransform(322.5,563.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_58.setTransform(305.3,559.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgWCWIAAkHIgwAAIAAgkICNAAIAAAkIgwAAIAAEHg");
	this.shape_59.setTransform(288.8,560.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgTAaQgHgJAAgQQAAgSAHgIQAIgJALABQANAAAHAJQAIAIgBARQABAQgIAIQgHAJgNAAQgLAAgIgIg");
	this.shape_60.setTransform(269.1,572.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgWCfQgLgCgIgFQgHgFgFgKQgFgJABgOIAAgGIACgIIAfAAQAAAPAGAHQAGAGAMAAIAIgBQAFgCAEgDQADgEACgIQACgHAAgLIAAgmQgGAIgKAGQgIAFgOAAIgJgBIgMgDQgFgDgGgGQgFgGgFgJQgEgKgDgOQgDgPAAgTIAAhAQAAgUADgOQADgNAEgKQAFgJAGgFQAFgGAGgCIALgEIALAAQAIAAAGACQAGACAGAEIAIAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgIALgNAGQgNAGgRAAQgLAAgLgCgAgIh+QgEABgDAFQgDAFgBAJIgCAWIAABPIACAVQABAJADAFQADAFAEACIAIACIAIgCIAHgEIAEgFIAEgHIAAiDQgEgIgFgFQgGgFgIAAg");
	this.shape_61.setTransform(255.7,567.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAWB7IAAi4QAAgQgFgFQgFgHgJAAQgGAAgHAEQgGAFgFAIIAADDIgsAAIAAjxIAiAAIADAaQAGgJAGgFIANgJIAMgFIAOgCQAUAAAMAPQAMAPAAAeIAAC5g");
	this.shape_62.setTransform(238.3,563.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgOQAAgIACgFQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAIgNgBQgLABgIgIg");
	this.shape_63.setTransform(224.9,558.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAWB7IAAi4QAAgQgFgFQgFgHgJAAQgGAAgGAEQgHAFgFAIIAADDIgtAAIAAjxIAiAAIAFAaQAFgJAGgFIAMgJIANgFIANgCQAVAAAMAPQALAPAAAeIAAC5g");
	this.shape_64.setTransform(211.3,563.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAWB7IAAi4QAAgQgFgFQgFgHgJAAQgGAAgGAEQgHAFgFAIIAADDIgtAAIAAjxIAiAAIAFAaQAFgJAGgFIAMgJIANgFIANgCQAWAAALAPQALAPAAAeIAAC5g");
	this.shape_65.setTransform(193.4,563.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("Ag1BrQgMgOAAgeIAAi4IAsAAIAAC1QAAAQAFAFQAFAHAKAAQAFAAAGgEQAHgDAFgIIAAjCIAsAAIAADxIghAAIgFgaQgFAIgGAFQgGAGgHADIgMAFIgNACQgWgBgKgPg");
	this.shape_66.setTransform(175.5,563.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("Ag2B7IAAjxIAhAAIADAYQAHgNAKgIQAJgGAKgBQATAAAJANQAJALAAAYIAAAHIgCAIIgCAJIgBAIIggAAIAAgWIgBgMIgCgHIgEgFIgFgBQgEAAgEADQgFAEgDAGIAADHg");
	this.shape_67.setTransform(160.5,563.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Ag2B6IAAjwIAhAAIADAYQAHgNAKgIQAJgHAKAAQATABAJAMQAJALAAAXIAAAIIgCAIIgCAJIgBAIIggAAIAAgWIgBgMIgCgIIgEgEIgFgBQgEAAgEADQgFAEgDAGIAADGg");
	this.shape_68.setTransform(594.7,506.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgOB7QgJgCgHgDQgIgEgGgIQgHgHgFgLQgEgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAPABQAIABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAEADAFAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgFAAgEADg");
	this.shape_69.setTransform(578.6,506.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgWCfQgLgCgIgFQgHgFgFgKQgFgJABgOIAAgGIACgIIAfAAQAAAPAGAHQAGAGAMAAIAIgBQAFgCAEgDQADgEACgIQACgHAAgLIAAgmQgGAIgKAGQgIAFgOAAIgJgBIgMgDQgFgDgGgGQgGgGgEgJQgEgKgDgOQgDgPAAgTIAAhAQAAgUADgOQADgNAEgKQAFgJAGgFQAFgGAGgCIALgEIALAAQAIAAAGACQAGACAGAEIAIAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgIALgNAGQgNAGgRAAQgLAAgLgCgAgIh+QgEABgDAFQgDAFgBAJIgCAWIAABPIACAVQABAJADAFQADAFAEACIAIACIAIgCIAHgEIAEgFIAEgHIAAiDQgEgIgFgFQgGgFgIAAg");
	this.shape_70.setTransform(553.6,510);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAWB6IAAi3QAAgPgFgGQgFgHgJAAQgGAAgHAEQgGAFgFAIIAADCIgsAAIAAjwIAiAAIADAZQAGgIAGgFIANgJIAMgFIAOgCQAUABAMAPQAMAOAAAeIAAC4g");
	this.shape_71.setTransform(536.2,506.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgOQAAgIACgFQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_72.setTransform(522.8,501.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAaCgIgyh4IgCAAIAAB4IgsAAIAAk/IAsAAIAAC3IACAAIAvhpIArAAIg2BtIA7CEg");
	this.shape_73.setTransform(511,502.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_74.setTransform(497,502.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_75.setTransform(483.6,506.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAgB5IgZiGIgHgkIAAAAIgFAkIgWCGIgsAAIgnjxIAqAAIARCCIAFAxIABAAIAGgxIAWiCIAlAAIAYCCIAHAxIABAAIADgxIAPiCIApAAIgnDxg");
	this.shape_76.setTransform(464.5,506.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgcB2QgLgGgJgMQgIgMgEgTQgFgUAAgbIAAgtQAAgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIANgBQANAAALAEQAKAEAJAIQAJAJAEAPQAGAOAAAWIgBAPIgBAPIgCAOIgDAMIhPAAIAAAYIABAbQABALAEAGQACAHAGADQAEADAHAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgQAAgMgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQABgYgGgLQgFgKgMAAQgEAAgFADg");
	this.shape_77.setTransform(437.1,506.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("Ag2B6IAAjwIAhAAIADAYQAHgNAKgIQAJgHAKAAQATABAJAMQAJALAAAXIAAAIIgCAIIgCAJIgBAIIggAAIAAgWIgBgMIgCgIIgEgEIgFgBQgEAAgEADQgFAEgDAGIAADGg");
	this.shape_78.setTransform(422.8,506.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_79.setTransform(406.2,506.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ag2BrQgMgOABgeIAAi4IAsAAIAAC1QAAAQAFAFQAFAHAKAAQAFAAAGgEQAHgDAFgIIAAjCIAtAAIAADwIgiAAIgFgZQgGAIgFAFQgGAGgGADIgNAFIgNACQgVgBgMgPg");
	this.shape_80.setTransform(382.2,506.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgOB7QgJgCgHgDQgIgEgGgIQgGgHgGgLQgEgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAHgGQAGgHAIgEQAHgDAIgBIAPgCIAOABQAIABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgIAEgHACIgOABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAEADAGAAQAGAAAEgDQAEgEACgHQADgHACgLIAAgdIAAg6IAAgdQgCgMgDgHQgCgHgEgDQgEgDgGAAQgGAAgEADg");
	this.shape_81.setTransform(365,506.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("Ag/CcIAAgcQAKACAJgCQAIgCAGgGQAGgGAEgIQADgKABgNIg5jyIAtAAIAZCGIAGAtIACAAIAFgtIAViGIArAAIgzD6QgDASgFAMQgFAOgIAIQgGAIgLAFQgLAEgOAAQgLAAgMgEg");
	this.shape_82.setTransform(348.6,510.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAWB6IAAi3QAAgPgFgGQgFgHgJAAQgGAAgHAEQgGAFgFAIIAADCIgsAAIAAjwIAiAAIADAZQAGgIAGgFIANgJIAMgFIAOgCQAUABAMAPQAMAOAAAeIAAC4g");
	this.shape_83.setTransform(324.3,506.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAFgLAIgGQAHgHAIgDQAIgEAHgBIANgBQAMAAALAEQAMAEAIAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQABALACAGQADAHAFADQAFADAHAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQAAgYgGgLQgFgKgMAAQgFAAgEADg");
	this.shape_84.setTransform(307.3,506.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_85.setTransform(290.1,502.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAfB5IgYiGIgGgkIgBAAIgFAkIgWCGIgrAAIgpjxIArAAIARCCIAFAxIABAAIAFgxIAYiCIAkAAIAYCCIAGAxIACAAIADgxIAPiCIApAAIgmDxg");
	this.shape_86.setTransform(269.4,506.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Ag/CcIAAgcQAKACAIgCQAJgCAGgGQAGgGAEgIQAEgKAAgNIg6jyIAuAAIAZCGIAHAtIABAAIAFgtIAViGIAsAAIg0D6QgDASgFAMQgFAOgHAIQgIAIgKAFQgLAEgNAAQgMAAgMgEg");
	this.shape_87.setTransform(242,510.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgWCfQgKgCgJgFQgHgFgFgKQgEgJgBgOIABgGIABgIIAgAAQAAAPAGAHQAGAGAMAAIAJgBQAEgCAEgDQACgEADgIQACgHAAgLIAAgmQgGAIgJAGQgJAFgOAAIgJgBIgLgDQgHgDgFgGQgFgGgFgJQgEgKgDgOQgDgPAAgTIAAhAQAAgUADgOQADgNAEgKQAEgJAHgFQAFgGAGgCIALgEIAKAAQAJAAAGACQAHACAEAEIAJAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgJALgMAGQgNAGgRAAQgMAAgKgCgAgIh+QgEABgDAFQgDAFgCAJIgBAWIAABPIABAVQACAJADAFQADAFAFACIAIACIAIgCIAFgEIAFgFIADgHIAAiDQgDgIgGgFQgFgFgIAAg");
	this.shape_88.setTransform(225.2,510);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("Ag2B6IAAjwIAhAAIADAYQAHgNAKgIQAJgHAKAAQATABAJAMQAJALAAAXIAAAIIgCAIIgBAJIgCAIIggAAIAAgWIgBgMIgCgIIgEgEIgEgBQgFAAgEADQgFAEgDAGIAADGg");
	this.shape_89.setTransform(210.8,506.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgcB2QgLgGgJgMQgIgMgEgTQgFgUAAgbIAAgtQAAgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIANgBQANAAALAEQAKAEAJAIQAJAJAEAPQAGAOAAAWIgBAPIgBAPIgCAOIgDAMIhPAAIAAAYIABAbQACALADAGQACAHAGADQAEADAHAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgQAAgMgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQABgYgGgLQgFgKgMAAQgEAAgFADg");
	this.shape_90.setTransform(195,506.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAWB6IAAi3QAAgPgFgGQgEgHgKAAQgGAAgGAEQgHAFgFAIIAADCIgsAAIAAjwIAhAAIAFAZQAFgIAGgFIANgJIAMgFIAOgCQAUABAMAPQAMAOgBAeIAAC4g");
	this.shape_91.setTransform(177.8,506.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgbB2QgNgGgIgMQgIgMgEgTQgEgUgBgbIAAgtQAAgXAEgQQAEgQAFgMQAGgLAHgGQAHgHAIgDQAIgEAHgBIANgBQAMAAAMAEQALAEAIAIQAJAJAEAPQAGAOgBAWIAAAPIgBAPIgCAOIgDAMIhPAAIAAAYIACAbQABALADAGQADAHAFADQAEADAHAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgQAAgLgGgAgHhXQgEACgDAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQABgYgGgLQgFgKgMAAQgEAAgFADg");
	this.shape_92.setTransform(160.9,506.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgcB2QgMgGgIgMQgIgMgEgTQgFgUAAgbIAAgtQABgXADgQQADgQAGgMQAFgLAIgGQAHgHAIgDQAHgEAIgBIANgBQANAAALAEQAKAEAJAIQAJAJAEAPQAGAOAAAWIgBAPIgBAPIgCAOIgDAMIhPAAIAAAYIABAbQACALADAGQACAHAGADQAEADAHAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgNgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQABgYgGgLQgFgKgMAAQgFAAgEADg");
	this.shape_93.setTransform(641.7,449);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("Ag2B6IAAjxIAhAAIADAZQAHgOAKgGQAJgIAKAAQATABAJALQAJAMAAAXIAAAIIgCAIIgBAJIgCAJIggAAIAAgXIgBgMIgCgIIgEgDIgEgCQgGAAgDADQgFAEgDAGIAADGg");
	this.shape_94.setTransform(627.5,448.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgOB7QgIgCgIgDQgIgEgGgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAPABQAIABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgEAAgFADg");
	this.shape_95.setTransform(611.4,449);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgCCYQgJgDgGgHQgHgHgEgMQgEgMAAgVIAAiVIgTAAIAAgfIAXAAIAJg/IAfAAIAAA/IAmAAIAAAfIgmAAIAACaIABANIAEAHIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgCg");
	this.shape_96.setTransform(597.2,446);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIABgQIAEgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAGAAQALAAAEgGQAEgGAAgHIgBgHIgCgHIgFgIIgHgIIgfgmIgMgPIgLgRIgHgSQgDgKAAgKQAAgOAGgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAAKAEQALADAHAGQAIAGAEAKQAFAJgBANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgGAAQgFAAgEACIgHAFIgCAGIgBAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgMAAgMgDg");
	this.shape_97.setTransform(584,449);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_98.setTransform(564.4,445.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_99.setTransform(555.2,445.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgGADgDQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_100.setTransform(546.2,444.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAfB5IgZiFIgFglIgBAAIgFAlIgXCFIgqAAIgpjxIArAAIASCCIADAxIACAAIAFgxIAYiCIAkAAIAYCCIAGAxIACAAIADgxIAPiCIApAAIgmDxg");
	this.shape_101.setTransform(529.8,449);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgCCYQgJgDgGgHQgHgHgEgMQgEgMAAgVIAAiVIgTAAIAAgfIAXAAIAJg/IAfAAIAAA/IAmAAIAAAfIgmAAIAACaIABANIAEAHIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgCg");
	this.shape_102.setTransform(504.6,446);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgGADgDQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_103.setTransform(494,444.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgeA7IARh2IAtAAIgaB2g");
	this.shape_104.setTransform(476.8,460.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("Ag2B6IAAjxIAgAAIAEAZQAIgOAJgGQAJgIAKAAQATABAJALQAJAMAAAXIAAAIIgCAIIgCAJIgBAJIgfAAIAAgXIgCgMIgCgIIgEgDIgFgCQgEAAgEADQgEAEgEAGIAADGg");
	this.shape_105.setTransform(466.7,448.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_106.setTransform(450.1,449);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAACfIgLgGIgJgIIgHgJIgEAWIgjAAIAAk+IAtAAIAABAIgCAgIAHgIIAJgHIAKgFIAOgBIAJAAIAKAEQAGADAFAFQAGAGAEAJQAEAKADAOQADAPAAATIAABKQAAAUgDAPQgDAOgEAKQgEAKgGAFQgGAGgFADIgMADIgJABQgJAAgGgCgAgNgwQgFAFgDAGIAACSIADAHIAFAFIAGAEIAHACIAJgCQAEgCADgFQADgFABgIIACgXIAAhbIgCgWQgBgJgDgFQgDgFgEgBIgJgCQgHAAgGAFg");
	this.shape_107.setTransform(434.3,445.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("Ag/CcIAAgbQAKABAIgCQAJgCAHgGQAFgFAEgKQAEgJAAgMIg5jzIAtAAIAaCGIAGAtIABAAIAFgtIAViGIArAAIgyD6QgEASgFAMQgFANgIAJQgGAIgLAFQgKAEgOAAQgMAAgMgEg");
	this.shape_108.setTransform(409.7,452.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgWCfQgLgCgHgFQgJgFgEgKQgEgJgBgOIABgGIABgIIAgAAQAAAPAGAHQAFAGANAAIAIgBQAFgCADgDQAEgEACgIQACgHAAgLIAAgmQgGAIgKAGQgIAFgNAAIgKgBIgLgDQgHgDgFgGQgGgGgEgJQgFgKgCgOQgDgPAAgTIAAhAQAAgUADgOQACgNAFgKQAFgJAFgFQAGgGAGgCIAMgEIAJAAQAJAAAGACQAHACAEAEIAJAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgJALgMAGQgNAGgRAAQgLAAgLgCgAgIh+QgEABgDAFQgDAFgCAJIgBAWIAABPIABAVQACAJADAFQADAFAFACIAIACIAHgCIAGgEIAFgFIAEgHIAAiDQgEgIgGgFQgFgFgIAAg");
	this.shape_109.setTransform(392.9,452.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("Ag2B6IAAjxIAgAAIAEAZQAIgOAKgGQAIgIAKAAQATABAJALQAJAMAAAXIAAAIIgBAIIgCAJIgDAJIgeAAIAAgXIgBgMIgDgIIgEgDIgEgCQgGAAgDADQgEAEgDAGIAADGg");
	this.shape_110.setTransform(378.4,448.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgcB2QgMgGgIgMQgIgMgEgTQgFgUAAgbIAAgtQABgXADgQQAEgQAFgMQAFgLAIgGQAHgHAIgDQAIgEAHgBIAOgBQAMAAAKAEQALAEAJAIQAJAJAEAPQAFAOABAWIgBAPIgCAPIgBAOIgDAMIhPAAIAAAYIABAbQABALAEAGQACAHAGADQAFADAGAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgNgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQAAgYgFgLQgFgKgMAAQgFAAgEADg");
	this.shape_111.setTransform(362.6,449);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgQgFgHQgFgGgJAAQgGAAgGAEQgHAFgFAIIAADCIgtAAIAAjxIAiAAIAFAaQAFgIAGgFIAMgJIANgFIANgCQAWABALAPQALAPAAAdIAAC4g");
	this.shape_112.setTransform(345.5,448.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgcB2QgMgGgIgMQgIgMgEgTQgFgUAAgbIAAgtQABgXADgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIANgBQANAAALAEQAKAEAJAIQAJAJAEAPQAGAOAAAWIgBAPIgBAPIgCAOIgDAMIhPAAIAAAYIABAbQACALADAGQACAHAGADQAEADAHAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgNgGgAgHhXQgFACgCAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQABgYgGgLQgFgKgMAAQgFAAgEADg");
	this.shape_113.setTransform(328.5,449);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("Ag2B6IAAjxIAhAAIADAZQAHgOAKgGQAJgIAKAAQATABAJALQAJAMAAAXIAAAIIgCAIIgBAJIgCAJIggAAIAAgXIgBgMIgCgIIgEgDIgEgCQgGAAgDADQgFAEgDAGIAADGg");
	this.shape_114.setTransform(306.6,448.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("Ag2BrQgLgOAAgeIAAi5IAsAAIAAC2QAAAQAFAFQAFAHAKAAQAFAAAGgEQAHgDAFgIIAAjDIAsAAIAADxIghAAIgFgaQgGAJgFAFQgGAGgGADIgNAFIgNACQgVAAgMgQg");
	this.shape_115.setTransform(289.9,449.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgOB7QgJgCgHgDQgIgEgGgIQgHgHgFgLQgEgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAPABQAIABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAEADAFAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgFAAgEADg");
	this.shape_116.setTransform(272.6,449);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("Ag/CcIAAgbQAKABAJgCQAIgCAGgGQAGgFAEgKQADgJABgMIg6jzIAuAAIAZCGIAGAtIACAAIAFgtIAViGIArAAIgzD6QgDASgFAMQgFANgHAJQgIAIgKAFQgKAEgPAAQgLAAgMgEg");
	this.shape_117.setTransform(256.3,452.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgXB5QgLgDgIgGQgIgGgFgKQgEgKAAgPIABgQIADgLIAgAAIABAWQABAIADAGQADAFAFACQAFADAHAAQAKAAAEgGQAEgGABgHIgBgHIgEgHIgEgIIgHgIIgfgmIgMgPIgLgRIgHgSQgCgKgBgKQAAgOAGgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAAKAEQALADAHAGQAIAGAEAKQAEAJAAANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgDgDQgFgDgGAAQgGAAgDACIgGAFIgDAGIgCAIQABAIAEAHIAKAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgOAAQgLAAgLgDg");
	this.shape_118.setTransform(233.7,449);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgGADgDQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_119.setTransform(221.8,444.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgXB5QgLgDgIgGQgIgGgFgKQgEgKAAgPIACgQIACgLIAgAAIABAWQABAIADAGQADAFAFACQAFADAGAAQAKAAAFgGQAFgGAAgHIgCgHIgDgHIgEgIIgGgIIgggmIgMgPIgKgRIgIgSQgCgKAAgKQAAgOAEgLQAFgKAJgHQAHgHALgDQALgEALAAQANAAALAEQAKADAIAGQAHAGAEAKQAFAJAAANIgCAQIgDAOIgfAAIgBgVQgBgJgCgGQgCgGgEgDQgFgDgHAAQgEAAgEACIgGAFIgEAGIgBAIQAAAIAFAHIAKAQIAjApIAJALIAJAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgOAAQgMAAgKgDg");
	this.shape_120.setTransform(202.3,449);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgGADgDQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_121.setTransform(190.5,444.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_122.setTransform(176.8,445.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgVCWIAAkIIgxAAIAAgjICNAAIAAAjIgwAAIAAEIg");
	this.shape_123.setTransform(160.3,446.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgTAaQgIgJAAgRQAAgRAIgIQAHgJAMAAQANABAIAIQAGAJAAAQQAAAQgGAJQgIAKgNAAQgMgBgHgIg");
	this.shape_124.setTransform(642.4,400.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIAOgBQALAAALAEQALAEAJAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQAAALADAGQAEAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgFAAgEADg");
	this.shape_125.setTransform(630.1,391.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIABgQIAEgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAGAAQALAAAEgGQAFgGgBgHIgBgHIgCgHIgFgIIgGgIIgggmIgMgPIgLgRIgHgSQgDgKAAgKQABgOAFgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAALAEQAKADAIAGQAHAGAEAKQAFAJgBANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgGAAQgFAAgEACIgHAFIgCAGIgBAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgMAAgMgDg");
	this.shape_126.setTransform(614.7,391.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("Ag2B6IAAjxIAhAAIADAZQAHgOALgGQAIgIAKABQATgBAJAMQAJAMAAAXIAAAIIgCAIIgBAJIgCAJIggAAIAAgXIAAgMIgDgIIgEgDIgEgCQgGAAgDADQgEAEgDAGIAADGg");
	this.shape_127.setTransform(601.3,391.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgcB2QgMgGgIgMQgIgMgEgTQgFgUAAgbIAAgtQABgXADgQQADgQAGgMQAFgLAIgGQAHgHAIgDQAHgEAIgBIANgBQANAAALAEQAKAEAJAIQAJAJAEAPQAGAOAAAWIgBAPIgBAPIgCAOIgDAMIhPAAIAAAYIABAbQACALADAGQACAHAGADQAEADAHAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgNgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQABgYgGgLQgFgKgMAAQgFAAgEADg");
	this.shape_128.setTransform(585.5,391.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgSB5Ig3jxIAsAAIAYB/IAFA0IABAAIAHg0IAXh/IArAAIg3Dxg");
	this.shape_129.setTransform(569.6,391.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgFADgEQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_130.setTransform(557.4,387.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgQgFgHQgFgGgJAAQgGAAgGAEQgHAFgFAHIAADDIgtAAIAAjxIAiAAIAFAaQAFgIAGgFIAMgJIANgFIANgBQAVAAAMAPQALAPAAAdIAAC4g");
	this.shape_131.setTransform(543.8,391.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("Ag1BsQgNgPAAgeIAAi5IAtAAIAAC2QAAAQAFAFQAFAHAKAAQAFAAAHgEQAGgDAFgIIAAjDIAsAAIAADxIgiAAIgEgaQgFAJgGAGQgGAFgHAEIgLAEIgOACQgWAAgKgPg");
	this.shape_132.setTransform(525.9,391.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgXB5QgLgDgIgGQgIgGgFgKQgEgKAAgPIACgQIACgLIAgAAIABAWQABAIADAGQADAFAFACQAFADAHAAQAJAAAFgGQAFgGAAgHIgBgHIgEgHIgEgIIgHgIIgfgmIgMgPIgKgRIgIgSQgDgKABgKQAAgOAEgLQAFgKAJgHQAIgHAKgDQALgEALAAQANAAALAEQAKADAHAGQAIAGAEAKQAEAJABANIgCAQIgDAOIgfAAIgBgVQgBgJgCgGQgCgGgEgDQgFgDgHAAQgFAAgDACIgGAFIgEAGIgBAIQAAAIAFAHIAKAQIAjApIAJALIAJAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgOAAQgMAAgKgDg");
	this.shape_133.setTransform(502.1,391.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgXCgIgMgDQgFgDgGgGQgFgFgFgKQgEgKgDgOQgDgPAAgUIAAhMQAAgVADgOQADgOAFgJQAFgJAFgFQAHgFAGgDIALgDIAJAAIALABIAKAFIAIAHIAHAHIgBgfIAAhAIAsAAIAAE+IgjAAIgEgWIgGAJIgJAIIgNAGQgGACgHAAgAgIgzQgEABgDAFQgDAFgCAJIgBAWIAABbIABAXQACAIADAFQADAFAEACIAIACIAIgCIAHgEIAEgFIAEgHIAAiQQgEgIgFgFQgGgFgIAAg");
	this.shape_134.setTransform(485.8,388);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgQgFgHQgEgGgKAAQgGAAgHAEQgGAFgFAHIAADDIgtAAIAAjxIAjAAIADAaQAGgIAGgFIAMgJIANgFIANgBQAWAAALAPQAMAPAAAdIAAC4g");
	this.shape_135.setTransform(468.5,391.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_136.setTransform(450.7,391.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_137.setTransform(438.7,387.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgXB5QgLgDgIgGQgIgGgFgKQgEgKAAgPIACgQIACgLIAgAAIABAWQABAIADAGQADAFAFACQAFADAHAAQAJAAAFgGQAFgGAAgHIgBgHIgEgHIgEgIIgGgIIgggmIgMgPIgKgRIgIgSQgDgKABgKQAAgOAEgLQAFgKAJgHQAIgHAKgDQALgEALAAQANAAAKAEQALADAIAGQAHAGAEAKQAEAJABANIgCAQIgDAOIgfAAIgBgVQgBgJgCgGQgCgGgEgDQgFgDgHAAQgFAAgDACIgGAFIgEAGIgBAIQAAAIAFAHIAKAQIAjApIAJALIAJAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgOAAQgMAAgKgDg");
	this.shape_138.setTransform(427,391.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgFADgEQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_139.setTransform(415.1,387.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgWCfQgLgCgHgFQgJgFgEgKQgEgJgBgOIABgGIABgIIAgAAQAAAPAGAHQAFAGANAAIAIgBQAFgCADgDQAEgEACgIQACgHAAgLIAAgmQgGAIgKAGQgIAFgNAAIgKgBIgLgDQgHgDgFgGQgGgGgEgJQgFgKgCgOQgDgPAAgTIAAhAQAAgUADgOQACgNAFgKQAFgJAFgFQAGgGAGgCIAMgEIAJAAQAJAAAGACQAHACAFAEIAIAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgJALgMAGQgNAGgRAAQgLAAgLgCgAgIh+QgEABgDAFQgDAFgCAJIgBAWIAABPIABAVQACAJADAFQADAFAFACIAIACIAHgCIAGgEIAFgFIAEgHIAAiDQgEgIgFgFQgGgFgIAAg");
	this.shape_140.setTransform(393.8,395.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgQgFgHQgFgGgJAAQgGAAgGAEQgHAFgFAHIAADDIgtAAIAAjxIAiAAIAFAaQAFgIAGgFIAMgJIANgFIANgBQAVAAAMAPQALAPAAAdIAAC4g");
	this.shape_141.setTransform(376.4,391.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgFADgEQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_142.setTransform(363,387.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("Ag/CcIAAgbQAKABAJgCQAIgCAGgGQAGgFAEgKQADgJABgMIg6jzIAuAAIAZCGIAGAtIACAAIAFgtIAViGIArAAIgzD6QgDARgFANQgFANgIAJQgHAJgKAEQgKAEgPAAQgLAAgMgEg");
	this.shape_143.setTransform(350.3,395.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_144.setTransform(338,387.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgdChIAAjRIgWAAIAAggIAWAAIAAgRQAAgUADgMQAEgNAHgHQAHgHAJgCQAKgCALAAIAHAAIAIABIAIACIAHACIAAAgQgIgCgJAAIgJABIgHAFIgEAJIgCANIAAARIAhAAIAAAgIghAAIAADRg");
	this.shape_145.setTransform(328.6,387.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgOB7QgJgCgHgDQgHgEgHgIQgGgHgGgLQgFgMgCgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAHgGQAGgHAIgEQAHgDAIgBIAPgCIAOABQAIABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgIAEgHACIgOABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAEADAGAAQAFAAAFgDQAEgEADgHQACgHABgLIABgdIAAg6IgBgdQgBgMgCgHQgDgHgEgDQgFgDgFAAQgGAAgEADg");
	this.shape_146.setTransform(306.7,391.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgCCYQgJgDgGgHQgHgHgEgMQgEgNAAgUIAAiVIgTAAIAAgfIAXAAIAJg/IAfAAIAAA/IAmAAIAAAfIgmAAIAACZIABAOIAEAHIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgCg");
	this.shape_147.setTransform(292.5,388.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgcB2QgMgGgIgMQgIgMgEgTQgFgUAAgbIAAgtQABgXADgQQAEgQAFgMQAFgLAIgGQAHgHAIgDQAIgEAHgBIAOgBQAMAAAKAEQALAEAJAIQAJAJAEAPQAFAOABAWIgBAPIgCAPIgBAOIgDAMIhPAAIAAAYIABAbQABALAEAGQACAHAGADQAFADAGAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgNgGgAgHhXQgFACgCAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQAAgYgFgLQgFgKgMAAQgFAAgEADg");
	this.shape_148.setTransform(270.8,391.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("ABCB6IAAi2IgBgOIgEgJQgCgDgEgBIgJgCQgGAAgHAEQgGAFgFAIIAAADIAAADIAAC8IgsAAIAAi2IgBgOIgDgJQgDgDgEgBIgJgCQgGAAgGAEQgHAFgEAHIAADDIgsAAIAAjxIAiAAIAEAaQAFgIAGgFIANgJIAMgFIAOgBQAOgBAJAIQAKAGAFAOQAFgIAGgFIAMgIIANgFIANgBQAWAAALAPQALAPAAAdIAAC4g");
	this.shape_149.setTransform(249.3,391.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgOB7QgJgCgHgDQgIgEgGgIQgHgHgFgLQgEgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAPABQAIABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAEADAFAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgFAAgEADg");
	this.shape_150.setTransform(227.6,391.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgtBjQgQgZAAg0IAAgtQAAgXAEgQQADgQAGgMQAFgLAHgGQAHgHAIgDQAHgEAIgBIAMgBQANAAAKAEQAKADAHAHQAIAGAEAKQAEAKAAAOIgBAOIgCAMIgkAAIAAgIQAAgTgEgKQgEgKgKAAQgFAAgEADQgEACgCAGQgDAGgBALIgCAaIAABDIABAbQABALADAHQADAHAEADQAEAEAGAAIAGgCQAEgCACgEIAEgKIABgQIAAgHIAnAAIAAAJQAAAigPAQQgQAQgeAAQgeAAgQgZg");
	this.shape_151.setTransform(211.8,391.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_152.setTransform(199.4,387.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIAOgBQALAAALAEQALAEAJAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQABALACAGQAEAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgFAAgEADg");
	this.shape_153.setTransform(186.8,391.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAjCWIgZiQIgIg+IgCAAIgIA+IgaCQIguAAIgrkrIAsAAIAUC0IADAqIAEAAIAEgvIAgivIAkAAIAfCvIADAvIAFAAIACgqIATi0IAsAAIgrErg");
	this.shape_154.setTransform(165.7,388.9);

	this.instance = new lib.CompoundPath_4();
	this.instance.parent = this;
	this.instance.setTransform(389.4,679.1,1,1,0,0,0,389.4,679.1);
	this.instance.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,779,1358.2), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAaQgHgJgBgQQABgSAHgIQAIgJALABQANAAAHAJQAIAIgBARQABAQgIAIQgHAJgNAAQgMABgHgJg");
	this.shape.setTransform(596.9,953.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIABgQIAEgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAHAAQAKAAAEgGQAEgGAAgHIAAgHIgDgHIgFgIIgHgIIgfgmIgMgPIgLgRIgHgSQgCgKgBgKQAAgOAGgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAAKAEQALADAHAGQAIAGAEAKQAFAJgBANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgGAAQgFAAgEACIgHAFIgCAGIgBAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgMAAgMgDg");
	this.shape_1.setTransform(585.3,944.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXCgIgLgDQgHgDgFgGQgFgFgFgKQgEgKgDgOQgDgPAAgUIAAhMQAAgVADgOQADgOAFgJQAEgJAHgFQAGgFAFgDIALgDIAJAAIANABIAJAFIAJAHIAGAHIgCgfIAAhAIAtAAIAAE+IgjAAIgDgWIgIAJIgJAIIgLAGQgHACgIAAgAgIgzQgEABgDAFQgDAFgCAJIgBAWIAABbIABAXQACAIADAFQADAFAFACIAIACIAIgCIAFgEIAFgFIADgHIAAiQQgDgIgGgFQgFgFgIAAg");
	this.shape_2.setTransform(569,940.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BrQgMgOAAgeIAAi4IAsAAIAAC1QAAAQAFAFQAFAHAKAAQAFAAAGgEQAHgDAFgIIAAjCIAsAAIAADxIghAAIgFgaQgFAIgGAFQgGAGgHADIgMAFIgNACQgWgBgKgPg");
	this.shape_3.setTransform(551.7,944.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOB7QgIgCgIgDQgIgEgGgIQgHgHgFgLQgEgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgEAAgFADg");
	this.shape_4.setTransform(534.4,944.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_5.setTransform(521.5,940.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtBjQgQgZAAg0IAAgtQAAgXAEgQQADgQAGgMQAFgLAHgGQAHgHAIgDQAHgEAIgBIAMgBQANAAAKAEQAKADAHAHQAIAGAEAKQAEAKAAAOIgBAOIgCAMIgkAAIAAgIQAAgTgEgKQgEgKgKAAQgFAAgEADQgEACgCAGQgDAGgBALIgCAaIAABDIABAbQABALADAHQADAHAEADQAEAEAGAAIAGgCQAEgCACgEIAEgKIABgQIAAgHIAnAAIAAAJQAAAigPAQQgQAQgeAAQgeAAgQgZg");
	this.shape_6.setTransform(509.4,944.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXCgIgMgDQgGgDgFgGQgGgFgEgKQgFgKgCgOQgDgPAAgUIAAhMQAAgVADgOQADgOAFgJQAFgJAFgFQAGgFAHgDIALgDIAJAAIALABIAKAFIAIAHIAHAHIgBgfIAAhAIAsAAIAAE+IgjAAIgDgWIgHAJIgJAIIgNAGQgGACgHAAgAgIgzQgEABgDAFQgDAFgCAJIgBAWIAABbIABAXQACAIADAFQADAFAEACIAIACIAIgCIAGgEIAFgFIAEgHIAAiQQgEgIgFgFQgGgFgIAAg");
	this.shape_7.setTransform(485,940.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWB7IAAi4QAAgQgFgFQgEgHgKAAQgGAAgHAEQgGAFgFAIIAADDIgtAAIAAjxIAiAAIAEAaQAGgJAGgFIAMgJIANgFIANgCQAWAAALAPQALAPAAAeIAAC5g");
	this.shape_8.setTransform(467.7,944.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_9.setTransform(449.9,944.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIACgQIADgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAGAAQALAAAEgGQAFgGgBgHIgBgHIgDgHIgEgIIgGgIIgggmIgMgPIgKgRIgIgSQgCgKAAgKQAAgOAEgLQAFgKAJgHQAHgHALgDQALgEALAAQANAAALAEQAKADAIAGQAHAGAEAKQAFAJAAANIgCAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgHAAQgEAAgEACIgHAFIgDAGIgBAIQAAAIAEAHIALAQIAjApIAJALIAJAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgNAAgLgDg");
	this.shape_10.setTransform(427.7,944.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIACIALgCIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgDg");
	this.shape_11.setTransform(414.5,941.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIABgQIAEgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAGAAQALAAAEgGQAEgGAAgHIgBgHIgCgHIgFgIIgHgIIgfgmIgMgPIgLgRIgHgSQgCgKgBgKQAAgOAGgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAAKAEQALADAHAGQAIAGAEAKQAFAJgBANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgGAAQgFAAgEACIgHAFIgCAGIgBAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgMAAgMgDg");
	this.shape_12.setTransform(401.3,944.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgOQAAgHACgGQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAIgNgBQgLABgIgIg");
	this.shape_13.setTransform(389.4,940.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABCB7IAAi4IgBgMIgEgJQgDgEgDgCIgKgBQgFAAgHAEQgGAFgFAIIAAADIAAAEIAAC8IgrAAIAAi4IgBgMIgFgJQgCgEgEgCIgJgBQgGAAgGAEQgGAFgFAIIAADDIgsAAIAAjxIAiAAIADAaQAGgJAGgFIANgJIAMgFIAOgCQAOABAJAGQAKAIAFANQAFgIAGgFIANgJIAMgEIAOgCQAUAAAMAPQAMAPgBAeIAAC5g");
	this.shape_14.setTransform(371.4,944.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAWB7IAAi4QAAgQgFgFQgFgHgJAAQgGAAgHAEQgGAFgFAIIAADDIgtAAIAAjxIAjAAIADAaQAGgJAGgFIANgJIAMgFIAOgCQAUAAAMAPQAMAPAAAeIAAC5g");
	this.shape_15.setTransform(341.5,944.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgOQAAgHACgGQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAIgNgBQgLABgIgIg");
	this.shape_16.setTransform(328,940.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXCgIgLgDQgHgDgFgGQgGgFgEgKQgEgKgDgOQgDgPAAgUIAAhMQAAgVADgOQADgOAFgJQAEgJAHgFQAGgFAFgDIALgDIAJAAIANABIAJAFIAJAHIAGAHIgCgfIAAhAIAtAAIAAE+IgjAAIgDgWIgIAJIgJAIIgLAGQgHACgIAAgAgIgzQgEABgDAFQgDAFgBAJIgCAWIAABbIACAXQABAIADAFQADAFAFACIAIACIAIgCIAFgEIAFgFIADgHIAAiQQgDgIgGgFQgFgFgIAAg");
	this.shape_17.setTransform(306.8,940.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcB2QgLgGgJgMQgIgMgEgTQgFgUAAgbIAAgtQAAgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIANgBQANAAALAEQAKAEAJAIQAJAJAEAPQAGAOAAAWIgBAPIgBAPIgCAOIgDAMIhPAAIAAAYIABAbQACALADAGQACAHAGADQAEADAHAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgQAAgMgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQABgYgGgLQgFgKgMAAQgEAAgFADg");
	this.shape_18.setTransform(290.4,944.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXCgIgMgDQgFgDgGgGQgFgFgFgKQgEgKgDgOQgDgPAAgUIAAhMQAAgVADgOQADgOAFgJQAFgJAFgFQAGgFAGgDIAMgDIAJAAIAMABIAJAFIAIAHIAHAHIgBgfIAAhAIAsAAIAAE+IgjAAIgEgWIgHAJIgJAIIgMAGQgFACgJAAgAgIgzQgEABgDAFQgDAFgBAJIgCAWIAABbIACAXQABAIADAFQADAFAEACIAIACIAIgCIAHgEIAEgFIAEgHIAAiQQgEgIgFgFQgGgFgIAAg");
	this.shape_19.setTransform(273.2,940.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWB7IAAi4QAAgQgFgFQgFgHgJAAQgGAAgHAEQgGAFgFAIIAADDIgsAAIAAjxIAiAAIADAaQAGgJAGgFIANgJIAMgFIAOgCQAUAAAMAPQAMAPAAAeIAAC5g");
	this.shape_20.setTransform(255.9,944.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag2BrQgMgOABgeIAAi4IAsAAIAAC1QAAAQAFAFQAFAHAJAAQAGAAAHgEQAGgDAFgIIAAjCIAtAAIAADxIgjAAIgEgaQgFAIgGAFQgGAGgGADIgNAFIgNACQgVgBgMgPg");
	this.shape_21.setTransform(238,944.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPB7QgIgCgHgDQgHgEgHgIQgGgHgGgLQgFgMgCgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAHgGQAGgHAIgEQAHgDAIgBIAPgCIAOABQAIABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgIAEgHACIgOABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAEADAGAAQAFAAAFgDQAEgEADgHQACgHABgLIABgdIAAg6IgBgdQgBgMgCgHQgDgHgEgDQgFgDgFAAQgGAAgEADg");
	this.shape_22.setTransform(220.7,944.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag2B7IAAjxIAgAAIAEAYQAIgNAKgIQAIgGAKgBQATAAAJANQAJALAAAYIAAAHIgBAIIgDAJIgCAIIgeAAIAAgWIgBgMIgDgHIgEgFIgFgBQgFAAgDADQgEAEgDAGIAADHg");
	this.shape_23.setTransform(206.3,944.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_24.setTransform(189.5,940.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXB5QgLgDgIgGQgIgGgFgKQgEgKAAgPIABgQIADgLIAgAAIABAWQABAIADAGQADAFAFACQAFADAHAAQAKAAAEgGQAEgGABgHIgBgHIgEgHIgEgIIgHgIIgfgmIgMgPIgLgRIgHgSQgCgKgBgKQAAgOAGgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAAKAEQALADAHAGQAIAGAEAKQAEAJAAANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgDgDQgFgDgGAAQgGAAgDACIgGAFIgDAGIgCAIQABAIAEAHIAKAQIAiApIAKALIAJAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgOAAQgLAAgLgDg");
	this.shape_25.setTransform(173.4,944.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbB2QgNgGgIgMQgIgMgEgTQgEgUAAgbIAAgtQAAgXADgQQAEgQAFgMQAFgLAIgGQAHgHAIgDQAIgEAHgBIANgBQAMAAAMAEQALAEAIAIQAIAJAGAPQAEAOAAAWIAAAPIgBAPIgCAOIgDAMIhPAAIAAAYIACAbQABALACAGQAEAHAEADQAFADAHAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgMgGgAgHhXQgEACgDAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQAAgYgGgLQgGgKgLAAQgEAAgFADg");
	this.shape_26.setTransform(535.4,887.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag2B6IAAjwIAgAAIAEAYQAIgNAJgHQAJgIAKAAQATABAJAMQAJALAAAXIAAAIIgCAIIgCAJIgCAIIgeAAIAAgWIgCgMIgCgIIgEgEIgFgBQgEAAgEADQgEAEgEAGIAADGg");
	this.shape_27.setTransform(521.1,887.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_28.setTransform(504.5,887.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAFgLAIgGQAHgHAIgDQAHgEAIgBIANgBQAMAAALAEQAMAEAIAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQABALACAGQADAHAFADQAFADAHAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQAAgYgGgLQgGgKgLAAQgFAAgEADg");
	this.shape_29.setTransform(481.5,887.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIABgQIAEgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAGAAQALAAAEgGQAEgGAAgHIgBgHIgCgHIgFgIIgHgIIgfgmIgMgPIgLgRIgHgSQgCgKgBgKQAAgOAGgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAAKAEQALADAHAGQAIAGAEAKQAFAJgBANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgGAAQgFAAgEACIgHAFIgCAGIgBAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgMAAgMgDg");
	this.shape_30.setTransform(466.1,887.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag2B6IAAjwIAgAAIAEAYQAIgNAKgHQAIgIAKAAQATABAJAMQAJALAAAXIAAAIIgBAIIgCAJIgDAIIgeAAIAAgWIgBgMIgDgIIgEgEIgEgBQgGAAgDADQgEAEgDAGIAADGg");
	this.shape_31.setTransform(452.7,887.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgcB2QgMgGgIgMQgIgMgEgTQgFgUAAgbIAAgtQABgXADgQQAEgQAFgMQAFgLAIgGQAHgHAIgDQAIgEAHgBIAOgBQAMAAAKAEQALAEAJAIQAJAJAEAPQAFAOABAWIgBAPIgCAPIgBAOIgDAMIhPAAIAAAYIABAbQABALAEAGQACAHAGADQAFADAGAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgNgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQAAgYgFgLQgFgKgMAAQgFAAgEADg");
	this.shape_32.setTransform(436.9,887.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgSB5Ig3jxIAsAAIAYB/IAFA0IABAAIAHg0IAXh/IArAAIg3Dxg");
	this.shape_33.setTransform(421,887.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAPQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_34.setTransform(408.8,882.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAWB6IAAi3QAAgPgFgGQgEgHgKAAQgGAAgHAEQgGAFgFAIIAADCIgtAAIAAjwIAiAAIAEAZQAGgIAGgFIAMgJIANgFIANgCQAWABALAPQALAOABAeIAAC4g");
	this.shape_35.setTransform(395.2,887.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag1BrQgNgOAAgeIAAi4IAtAAIAAC1QAAAQAFAFQAFAHAJAAQAGAAAHgEQAGgDAFgIIAAjCIAsAAIAADwIgiAAIgEgZQgFAIgGAFQgGAGgHADIgLAFIgOACQgWgBgKgPg");
	this.shape_36.setTransform(377.3,887.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgXB5QgLgDgIgGQgIgGgFgKQgEgKAAgPIACgQIACgLIAgAAIABAWQABAIADAGQADAFAFACQAFADAGAAQAKAAAFgGQAFgGAAgHIgCgHIgDgHIgEgIIgGgIIgggmIgMgPIgKgRIgIgSQgCgKAAgKQAAgOAEgLQAFgKAJgHQAHgHALgDQALgEALAAQANAAALAEQAKADAIAGQAHAGAEAKQAFAJAAANIgCAQIgDAOIgfAAIgBgVQgBgJgCgGQgCgGgEgDQgFgDgHAAQgEAAgEACIgGAFIgEAGIgBAIQAAAIAFAHIAKAQIAjApIAJALIAJAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgOAAQgMAAgKgDg");
	this.shape_37.setTransform(353.5,887.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAPQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_38.setTransform(341.7,882.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_39.setTransform(328,883.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgDg");
	this.shape_40.setTransform(313.3,884.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAWB6IAAi3QAAgPgFgGQgFgHgJAAQgGAAgHAEQgGAFgFAIIAADCIgtAAIAAjwIAjAAIADAZQAGgIAGgFIANgJIAMgFIAOgCQAUABAMAPQAMAOAAAeIAAC4g");
	this.shape_41.setTransform(290.6,887.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAPQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_42.setTransform(277.2,882.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgXB5QgLgDgIgGQgIgGgFgKQgEgKAAgPIACgQIACgLIAgAAIABAWQABAIADAGQADAFAFACQAFADAGAAQAKAAAFgGQAFgGAAgHIgCgHIgDgHIgEgIIgGgIIgggmIgMgPIgKgRIgIgSQgCgKAAgKQAAgOAEgLQAFgKAJgHQAHgHALgDQALgEALAAQANAAALAEQAKADAIAGQAHAGAEAKQAFAJAAANIgCAQIgDAOIgfAAIgBgVQgBgJgCgGQgCgGgEgDQgFgDgHAAQgEAAgEACIgGAFIgEAGIgBAIQAAAIAFAHIAKAQIAjApIAJALIAJAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgOAAQgMAAgKgDg");
	this.shape_43.setTransform(257.7,887.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgXCgIgMgDQgFgDgGgGQgFgFgFgKQgEgKgDgOQgDgPAAgUIAAhMQAAgVADgOQADgOAFgJQAFgJAFgFQAHgFAFgDIAMgDIAJAAIALABIAKAFIAIAHIAHAHIgBgfIAAhAIAsAAIAAE+IgjAAIgEgWIgGAJIgJAIIgNAGQgFACgIAAgAgIgzQgEABgDAFQgDAFgBAJIgCAWIAABbIACAXQABAIADAFQADAFAEACIAIACIAIgCIAHgEIAEgFIAEgHIAAiQQgEgIgFgFQgGgFgIAAg");
	this.shape_44.setTransform(241.4,883.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAWB6IAAi3QAAgPgFgGQgFgHgJAAQgGAAgHAEQgGAFgFAIIAADCIgtAAIAAjwIAjAAIADAZQAGgIAGgFIANgJIAMgFIAOgCQAUABAMAPQAMAOAAAeIAAC4g");
	this.shape_45.setTransform(224,887.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_46.setTransform(206.3,887.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_47.setTransform(194.3,883.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgXB5QgLgDgIgGQgIgGgFgKQgEgKAAgPIACgQIACgLIAgAAIABAWQABAIADAGQADAFAFACQAFADAGAAQAKAAAFgGQAFgGAAgHIgCgHIgDgHIgEgIIgGgIIgggmIgMgPIgKgRIgIgSQgCgKAAgKQAAgOAEgLQAFgKAJgHQAHgHALgDQALgEALAAQANAAALAEQAKADAIAGQAHAGAEAKQAFAJAAANIgCAQIgDAOIgfAAIgBgVQgBgJgCgGQgCgGgEgDQgFgDgHAAQgEAAgEACIgGAFIgEAGIgBAIQAAAIAFAHIAKAQIAjApIAJALIAJAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgOAAQgMAAgKgDg");
	this.shape_48.setTransform(182.5,887.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAPQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_49.setTransform(170.7,882.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgWCfQgLgCgIgFQgHgFgFgKQgFgJABgOIAAgGIACgIIAfAAQAAAPAGAHQAGAGAMAAIAIgBQAFgCAEgDQACgEADgIQACgHAAgLIAAgmQgGAIgKAGQgIAFgOAAIgJgBIgMgDQgFgDgGgGQgFgGgFgJQgEgKgDgOQgDgPAAgTIAAhAQAAgUADgOQADgNAEgKQAFgJAGgFQAFgGAGgCIALgEIALAAQAIAAAGACQAGACAGAEIAIAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgIALgNAGQgNAGgRAAQgLAAgLgCgAgIh+QgEABgDAFQgDAFgBAJIgCAWIAABPIACAVQABAJADAFQADAFAEACIAIACIAIgCIAHgEIAEgFIAEgHIAAiDQgEgIgFgFQgGgFgIAAg");
	this.shape_50.setTransform(575.2,833.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgQgFgHQgFgGgJAAQgGAAgHAEQgGAFgFAIIAADCIgsAAIAAjxIAiAAIADAaQAGgIAGgFIANgJIAMgFIAOgCQAUABAMAPQAMAPAAAdIAAC4g");
	this.shape_51.setTransform(557.8,830);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgFADgEQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_52.setTransform(544.4,825.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Ag/CcIAAgcQAKACAIgCQAJgCAHgGQAFgFAEgKQAEgJAAgNIg6jyIAuAAIAaCGIAGAtIABAAIAFgtIAViGIAsAAIgzD6QgEASgFAMQgFANgHAJQgHAIgLAFQgLAEgNAAQgMAAgMgEg");
	this.shape_53.setTransform(531.7,834.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_54.setTransform(519.4,826.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgeChIAAjRIgUAAIAAggIAUAAIAAgRQAAgUAFgMQADgNAIgHQAGgHAKgCQAJgCALAAIAHAAIAIABIAIACIAGACIAAAgQgHgCgJAAIgIABIgHAFIgFAJIgCANIAAARIAiAAIAAAgIgiAAIAADRg");
	this.shape_55.setTransform(510,826.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgcB2QgLgGgJgMQgIgMgEgTQgFgUAAgbIAAgtQAAgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIANgBQANAAALAEQAKAEAJAIQAJAJAEAPQAGAOAAAWIgBAPIgBAPIgCAOIgDAMIhPAAIAAAYIABAbQACALADAGQACAHAGADQAEADAHAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgQAAgMgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQABgYgGgLQgFgKgMAAQgEAAgFADg");
	this.shape_56.setTransform(488.4,830.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_57.setTransform(471.2,826.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgWCWIAAkIIgwAAIAAgjICNAAIAAAjIgwAAIAAEIg");
	this.shape_58.setTransform(454.6,827.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgTAaQgIgJABgRQgBgRAIgIQAIgJALAAQANABAHAIQAHAJABAQQgBARgHAIQgHAKgNgBQgLAAgIgIg");
	this.shape_59.setTransform(434.9,839.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgcB2QgMgGgIgMQgIgMgEgTQgFgUAAgbIAAgtQABgXADgQQAEgQAFgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIANgBQANAAALAEQAKAEAJAIQAJAJAEAPQAGAOAAAWIgBAPIgBAPIgCAOIgDAMIhPAAIAAAYIABAbQACALADAGQACAHAGADQAEADAHAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgNgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQABgYgGgLQgFgKgMAAQgFAAgEADg");
	this.shape_60.setTransform(422.6,830.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgXB5QgLgDgIgGQgIgGgFgKQgEgKAAgPIACgQIACgLIAgAAIABAWQABAIADAGQADAFAFACQAFADAHAAQAJAAAFgGQAFgGAAgHIgBgHIgEgHIgEgIIgHgIIgfgmIgMgPIgKgRIgIgSQgDgKABgKQAAgOAEgLQAFgKAJgHQAIgHAKgDQALgEALAAQANAAALAEQAKADAHAGQAIAGAEAKQAEAJABANIgCAQIgDAOIgfAAIgBgVQgBgJgCgGQgCgGgEgDQgFgDgHAAQgFAAgDACIgGAFIgEAGIgBAIQAAAIAFAHIAKAQIAjApIAJALIAJAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgOAAQgMAAgKgDg");
	this.shape_61.setTransform(407.2,830.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Ag2B6IAAjxIAgAAIAEAZQAIgOAJgGQAJgIAKAAQATABAJALQAJAMAAAXIAAAIIgCAIIgCAJIgCAIIgeAAIAAgWIgCgMIgCgIIgEgDIgFgCQgEAAgEADQgEAEgEAGIAADGg");
	this.shape_62.setTransform(393.8,830);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAFgLAIgGQAHgHAIgDQAHgEAIgBIANgBQAMAAALAEQAMAEAIAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQABALACAGQADAHAFADQAFADAHAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQAAgYgGgLQgGgKgLAAQgFAAgEADg");
	this.shape_63.setTransform(378,830.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgSB5Ig3jxIAsAAIAYB/IAFA0IABAAIAHg0IAXh/IArAAIg3Dxg");
	this.shape_64.setTransform(362.1,830.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgFADgEQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_65.setTransform(349.9,825.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgQgFgHQgFgGgJAAQgGAAgGAEQgHAFgFAIIAADCIgsAAIAAjxIAiAAIADAaQAGgIAGgFIANgJIAMgFIAOgCQAUABAMAPQAMAPAAAdIAAC4g");
	this.shape_66.setTransform(336.3,830);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("Ag2BrQgMgOABgeIAAi5IAsAAIAAC2QAAAQAFAFQAFAHAJAAQAGAAAGgEQAHgDAFgIIAAjDIAtAAIAADxIgiAAIgFgaQgGAJgFAFQgGAGgGAEIgNAEIgNACQgVAAgMgQg");
	this.shape_67.setTransform(318.4,830.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgQgFgHQgFgGgJAAQgGAAgHAEQgGAFgFAIIAADCIgtAAIAAjxIAjAAIADAaQAGgIAGgFIANgJIAMgFIAOgCQAUABAMAPQAMAPAAAdIAAC4g");
	this.shape_68.setTransform(292.9,830);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgPB7QgIgCgHgDQgHgEgHgIQgGgHgGgLQgFgMgCgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAHgGQAGgHAIgEQAHgDAIgBIAPgCIAOABQAIABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgIAEgHACIgOABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAEADAGAAQAFAAAFgDQAEgEADgHQACgHABgLIABgdIAAg6IgBgdQgBgMgCgHQgDgHgEgDQgFgDgFAAQgGAAgEADg");
	this.shape_69.setTransform(275.6,830.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("ABCB6IAAi2IgBgOIgEgJQgDgDgDgBIgJgCQgHAAgGAEQgGAFgFAIIAAADIAAADIAAC8IgsAAIAAi2IAAgOIgEgJQgDgDgDgBIgKgCQgGAAgGAEQgGAFgFAIIAADCIgtAAIAAjxIAjAAIAEAaQAFgIAGgFIAMgJIAOgFIANgCQAOAAAJAIQAKAGAFAOQAFgIAGgFIAMgIIANgFIANgCQAWABALAPQAMAPAAAdIAAC4g");
	this.shape_70.setTransform(253.9,830);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgFADgEQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_71.setTransform(236.1,825.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAaCgIgyh4IgCAAIAAB4IgsAAIAAk/IAsAAIAAC3IACAAIAvhpIArAAIg2BtIA7CEg");
	this.shape_72.setTransform(224.3,826.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_73.setTransform(210.3,826.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_74.setTransform(196.9,830.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAfB5IgZiFIgFglIgBAAIgFAlIgXCFIgqAAIgpjxIArAAIASCCIADAxIACAAIAFgxIAYiCIAkAAIAYCCIAGAxIACAAIADgxIAPiCIAqAAIgnDxg");
	this.shape_75.setTransform(177.8,830.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgQgFgHQgFgGgJAAQgGAAgHAEQgGAFgFAHIAADDIgsAAIAAjxIAiAAIADAaQAGgIAGgFIANgJIAMgFIAOgCQAUABAMAPQAMAPAAAdIAAC4g");
	this.shape_76.setTransform(495.3,772.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgFADgEQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_77.setTransform(481.8,768.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgQgFgHQgFgGgJAAQgGAAgGAEQgHAFgFAHIAADDIgtAAIAAjxIAiAAIAFAaQAFgIAGgFIAMgJIANgFIANgCQAVABAMAPQALAPAAAdIAAC4g");
	this.shape_78.setTransform(460.6,772.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgHgEgHgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAHAEQAIADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgIAEgHACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAGAAAFgDQAEgEACgHQADgHABgLIACgdIAAg6IgCgdQgBgMgDgHQgCgHgEgDQgFgDgGAAQgEAAgFADg");
	this.shape_79.setTransform(443.3,772.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgFADgEQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_80.setTransform(430.5,768.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgCCYQgJgDgGgHQgHgHgEgMQgEgNAAgTIAAiWIgTAAIAAgfIAXAAIAJg/IAfAAIAAA/IAmAAIAAAfIgmAAIAACZIABAOIAEAHIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgCg");
	this.shape_81.setTransform(420,769.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgFADgEQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_82.setTransform(409.5,768.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgXB5QgLgDgIgGQgIgGgFgKQgEgKAAgPIACgQIACgLIAgAAIABAWQABAIADAGQADAFAFACQAFADAGAAQAKAAAFgGQAFgGAAgHIgCgHIgDgHIgEgIIgGgIIgggmIgMgPIgKgRIgIgSQgCgKAAgKQAAgOAEgLQAFgKAJgHQAHgHALgDQALgEALAAQANAAALAEQAKADAIAGQAHAGAEAKQAFAJAAANIgCAQIgDAOIgfAAIgBgVQgBgJgCgGQgCgGgEgDQgFgDgHAAQgEAAgEACIgGAFIgEAGIgBAIQAAAIAFAHIAKAQIAjApIAJALIAJAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgOAAQgMAAgKgDg");
	this.shape_83.setTransform(397.6,772.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgOB7QgJgCgHgDQgIgEgGgIQgHgHgFgLQgEgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAPABQAIABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAEADAFAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgFAAgEADg");
	this.shape_84.setTransform(382,772.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AhCChIAAk/IAjAAIADAaIAIgKIAJgJIAMgHQAHgCAIAAIAJAAIALAEQAFADAHAFQAFAGAEAJQAEAKADAOQADAPAAAUIAABKQAAATgDAPQgDAOgEAKQgFAJgFAGQgFAGgHACIgLAEIgJABQgPAAgIgGQgJgFgGgIIACAeIAABAgAgNh7QgFAFgDAHIAACRIADAHIAFAFIAFAEIAIACIAIgCQAFgCADgFQACgFADgIIABgXIAAhbIgBgWQgDgJgCgFQgDgFgEgBIgJgCQgHAAgGAFg");
	this.shape_85.setTransform(365.2,776.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("Ag2B6IAAjxIAhAAIADAZQAHgOALgGQAIgIAKAAQATAAAJAMQAJAMAAAXIAAAIIgBAIIgCAKIgCAIIggAAIAAgXIAAgMIgDgIIgEgDIgEgCQgFAAgEADQgEAEgDAGIAADGg");
	this.shape_86.setTransform(342.5,772.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Ag1BsQgMgPAAgeIAAi5IAsAAIAAC2QAAAQAFAGQAFAGAKAAQAFAAAGgEQAHgDAFgIIAAjDIAsAAIAADxIghAAIgFgaQgFAJgGAGQgGAFgHAEIgMAEIgNACQgWAAgKgPg");
	this.shape_87.setTransform(325.8,773.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgOB7QgIgCgIgDQgIgEgGgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAPABQAIABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgEAAgFADg");
	this.shape_88.setTransform(308.5,772.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("Ag/CcIAAgbQAKABAJgCQAIgCAGgGQAGgFAEgKQADgJABgMIg6jzIAuAAIAZCGIAHAtIABAAIAFgtIAViGIAsAAIg0D6QgDARgFANQgFANgHAJQgIAJgKAEQgKAEgPAAQgLAAgMgEg");
	this.shape_89.setTransform(292.2,776.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgXB5QgLgDgIgGQgIgGgFgKQgEgKAAgPIABgQIADgLIAgAAIABAWQABAIADAGQADAFAFACQAFADAHAAQAJAAAFgGQAEgGABgHIgBgHIgEgHIgEgIIgHgIIgfgmIgMgPIgKgRIgIgSQgDgKABgKQAAgOAEgLQAFgKAJgHQAHgHALgDQALgEALAAQANAAAKAEQALADAHAGQAIAGAEAKQAEAJABANIgCAQIgDAOIgfAAIgBgVQgBgJgCgGQgCgGgEgDQgFgDgGAAQgGAAgDACIgGAFIgEAGIgBAIQAAAIAFAHIAKAQIAjApIAJALIAJAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgOAAQgMAAgKgDg");
	this.shape_90.setTransform(269.6,772.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgFADgEQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_91.setTransform(257.7,768.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgcB2QgMgGgIgMQgIgMgFgTQgEgUAAgbIAAgtQABgXADgQQADgQAGgMQAFgLAIgGQAHgHAIgDQAIgEAHgBIAOgBQAMAAAKAEQALAEAJAIQAJAJAEAPQAFAOABAWIgBAPIgCAPIgBAOIgCAMIhQAAIAAAYIABAbQABALAEAGQADAHAEADQAGADAGAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgNgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQAAgYgFgLQgGgKgLAAQgEAAgFADg");
	this.shape_92.setTransform(237.4,772.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("Ag2B6IAAjxIAgAAIAEAZQAIgOAKgGQAIgIAKAAQATAAAJAMQAJAMAAAXIAAAIIgBAIIgCAKIgDAIIgfAAIAAgXIAAgMIgDgIIgEgDIgEgCQgGAAgDADQgEAEgDAGIAADGg");
	this.shape_93.setTransform(223.2,772.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgcB2QgMgGgIgMQgIgMgEgTQgFgUAAgbIAAgtQABgXADgQQAEgQAFgMQAFgLAIgGQAHgHAIgDQAIgEAHgBIAOgBQAMAAAKAEQALAEAJAIQAJAJAEAPQAFAOABAWIgBAPIgCAPIgBAOIgCAMIhQAAIAAAYIABAbQABALAEAGQACAHAGADQAFADAGAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgNgGgAgHhXQgFACgCAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQAAgYgFgLQgFgKgMAAQgFAAgEADg");
	this.shape_94.setTransform(207.4,772.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_95.setTransform(190.2,769);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgVCWIAAkIIgxAAIAAgjICNAAIAAAjIgwAAIAAEIg");
	this.shape_96.setTransform(173.6,770);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(29));

	// Isolation Mode
	this.instance = new lib.map_arrow();
	this.instance.parent = this;
	this.instance.setTransform(256.5,605.9,1,1,0,0,0,68.5,81.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:68.6,x:256.6,y:609.2},0).wait(1).to({y:612.5},0).wait(1).to({y:615.8},0).wait(1).to({y:619.1},0).wait(1).to({y:622.3},0).wait(1).to({y:625.6},0).wait(1).to({y:628.9},0).wait(1).to({y:632.2},0).wait(1).to({y:635.5},0).wait(1).to({y:638.8},0).wait(1).to({y:642.1},0).wait(1).to({y:645.4},0).wait(1).to({y:648.7},0).wait(1).to({y:652},0).wait(1).to({y:648.7},0).wait(1).to({y:645.4},0).wait(1).to({y:642.1},0).wait(1).to({y:638.8},0).wait(1).to({y:635.5},0).wait(1).to({y:632.2},0).wait(1).to({y:628.9},0).wait(1).to({y:625.6},0).wait(1).to({y:622.3},0).wait(1).to({y:619.1},0).wait(1).to({y:615.8},0).wait(1).to({y:612.5},0).wait(1).to({y:609.2},0).wait(1).to({y:605.9},0).wait(1));

	// Layer 4
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgeCAQgNgGgJgOQgJgNgEgVQgFgVAAgdIAAgxQAAgZAEgRQAEgSAGgMQAGgMAIgHQAHgHAJgEQAIgEAJgBIAOgBQANAAAMAEQAMAEAJAJQAJAKAFAPQAGAQAAAYIgBAQIgBAQIgCAPIgCANIhWAAIAAAbIABAdQABALADAIQADAHAGADQAFADAIAAIAIgCQAEgCAEgEIAEgLIACgRIAAgIIApAAIAAAKQAAAlgSARQgSARghAAQgRAAgNgGgAgIhfQgEADgDAHQgDAHgCALIgBAdIAAAQIAvAAIAAgGIABgHIAAgIIAAgGQAAgagGgLQgHgMgMAAQgFAAgFADg");
	this.shape_97.setTransform(649.6,1146.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("Ag6B0QgNgPAAghIAAjHIAxAAIAADDQAAASAEAGQAGAHALAAQAFAAAHgEQAHgEAGgHIAAjTIAwAAIAAEFIglAAIgEgcIgBAAQgFAIgHAGQgGAHgHADIgOAFIgOACQgXgBgMgQg");
	this.shape_98.setTransform(631.1,1146.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAYCFIAAjGQAAgSgFgGQgGgHgKAAQgGAAgIAEQgGAFgGAJIAADTIgwAAIAAkFIAlAAIAEAcQAGgJAHgGIANgKIAOgFIAOgCQAXAAAMARQANAQAAAgIAADIg");
	this.shape_99.setTransform(611.7,1146.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgYC1IAAkFIAvAAIAAEFgAgUh+QgIgIAAgPQAAgJACgGQACgGAEgDQADgEAGgBIALgCQAOAAAIAHQAHAIAAAQQAAAOgHAJQgIAIgOAAQgNAAgHgIg");
	this.shape_100.setTransform(597.1,1141.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgCCkQgKgDgHgHQgHgIgEgNQgEgNgBgWIAAiiIgUAAIAAghIAZAAIAJhFIAiAAIAABFIApAAIAAAhIgpAAIAACnIABANIAEAIIAHAFIAIAAIANgBIAKgGIAAAbIgJAJIgKAFIgLADIgKABQgKgBgIgCg");
	this.shape_101.setTransform(585.8,1143);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAYCFIAAjGQAAgSgGgGQgEgHgLAAQgHAAgHAEQgGAFgGAJIAADTIgwAAIAAkFIAlAAIAFAcQAFgJAGgGIAOgKIANgFIAPgCQAXAAANARQAMAQAAAgIAADIg");
	this.shape_102.setTransform(569.5,1146.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgPCFQgKgCgHgEQgIgEgIgIQgHgIgFgMQgFgNgDgTQgDgSgBgaIAAgoQABgaADgSQADgSAFgNQAGgMAHgHQAHgIAIgEQAIgEAJgBIAQgBIAPABQAJABAIAEQAIAEAIAHQAGAHAGANQAFAMADATQADASABAaIAAAoQgBAZgDATQgDASgGANQgFANgHAIQgHAHgJAFQgIAEgIACIgPABgAgKheQgEADgEAIQgCAHgCANIgBAfIAABAIABAfQACAMACAIQAEAHAEAEQAFADAGAAQAGAAAFgDQAEgEADgHQACgIACgMIABgfIAAhAIgBgfQgCgNgCgHQgDgIgEgDQgFgEgGAAQgGAAgFAEg");
	this.shape_103.setTransform(550.8,1146.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgxBrQgRgbAAg4IAAgxQAAgZADgRQAEgSAGgMQAGgMAIgHQAHgHAJgEQAIgEAIgBIANgBQAOAAALAEQALADAIAHQAIAHAEALQAFALAAAPIgBAPIgCANIgnAAIAAgJQAAgUgEgLQgGgLgKAAQgFAAgEADQgFADgDAGQgDAHgBALIgCAcIAABKIACAdQABAMADAIQACAHAGAEQAEADAGAAIAHgCIAHgGIADgLIACgRIAAgIIAqAAIAAAKQAAAlgRARQgQARghAAQggAAgSgbg");
	this.shape_104.setTransform(533.7,1146.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgaCuIgLgEQgHgDgGgGQgGgGgFgLQgEgKgEgQQgDgQAAgWIAAhSQABgWADgPQADgQAFgKQAFgKAHgFQAGgGAGgDIAMgDIAKAAIAOACIAKAFIAJAHIAHAIIAAgBIgBghIAAhGIAvAAIAAFaIglAAIgFgZIgGAKIgKAJIgOAHQgGACgJAAgAgJg3QgEACgDAFQgEAFgBAJIgCAYIAABkIACAYQABAJAEAFQADAFAEADIAJABIAJgBIAHgEIAFgGIAEgHIAAidQgEgIgGgGQgGgFgJAAg");
	this.shape_105.setTransform(507.2,1142.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAYCFIAAjGQAAgSgGgGQgEgHgLAAQgHAAgGAEQgIAFgFAJIAADTIgwAAIAAkFIAlAAIAFAcQAFgJAGgGIAOgKIANgFIAPgCQAXAAANARQAMAQAAAgIAADIg");
	this.shape_106.setTransform(488.4,1146.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgoCBQgKgFgGgIQgHgIgDgMQgDgLAAgOQAAgQAEgNQAEgMAHgKQAIgKALgJQAMgHAPgHIAPgIIAQgGIAAgjIAAgOIgDgLQgCgFgFgDQgEgDgIAAIgJACQgFACgDAFQgEAEgCAIQgCAHAAAMIAAALIglAAIgDgNIgBgNQAAgPAGgLQAFgLAJgIQAJgHAMgEQANgEAOAAQATAAANAEQANAFAIAIQAIAJADANQADANAAARIAADDIgkAAIgDgWQgIALgNAHQgMAHgRAAQgMAAgJgFgAAPAIIgLAFIgJAIIgIALIgHAOQgCAIAAAKQAAAPAGAJQAGAJAMAAQAGAAAGgDIAJgIIAAhSg");
	this.shape_107.setTransform(469.2,1146.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AhICvIAAlaIAmAAIAFAcIAHgLIALgKIAMgHQAHgDAKAAIAJABIAMAEQAGADAGAGQAGAGAFAKQAFALADAPQACAQAAAWIAABQQAAAVgCAQQgDAPgFALQgFAKgGAGQgGAGgHADIgMAEIgKABQgPAAgKgGQgKgGgGgIIABAgIAABGgAgOiFQgGAFgEAHIAACeIAEAHIAFAGIAHAEIAIACIAJgCQAEgCAEgFQADgFACgKIACgYIAAhjIgCgYQgCgJgDgGQgDgFgFgCIgJgCQgJAAgFAGg");
	this.shape_108.setTransform(443.8,1150.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgoCBQgKgFgGgIQgHgIgDgMQgDgLAAgOQAAgQAEgNQAEgMAHgKQAIgKALgJQAMgHAPgHIAPgIIAQgGIAAgjIAAgOIgDgLQgCgFgFgDQgEgDgIAAIgJACQgFACgDAFQgEAEgCAIQgCAHAAAMIAAALIglAAIgDgNIgBgNQAAgPAGgLQAFgLAJgIQAJgHAMgEQANgEAOAAQATAAANAEQANAFAIAIQAIAJADANQADANAAARIAADDIgkAAIgDgWQgIALgNAHQgMAHgRAAQgMAAgJgFgAAPAIIgLAFIgJAIIgIALIgHAOQgCAIAAAKQAAAPAGAJQAGAJAMAAQAGAAAGgDIAJgIIAAhSg");
	this.shape_109.setTransform(424.5,1146.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgXCjIAAkeIg1AAIAAgnICZAAIAAAnIg1AAIAAEeg");
	this.shape_110.setTransform(408.3,1143.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]}).wait(29));

	// Layer 1
	this.instance_1 = new lib.CompoundPath();
	this.instance_1.parent = this;
	this.instance_1.setTransform(417.2,739.7,1.108,1.108,0,0,0,376.4,667.4);
	this.instance_1.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,834,1478.5);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shanguang6 = new lib.Symbol20();
	this.shanguang6.parent = this;
	this.shanguang6.setTransform(13.2,13.2,1,1,0,0,0,13.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shanguang6).wait(1).to({y:6.1,alpha:0.982},0).wait(1).to({y:-1.1,alpha:0.964},0).wait(1).to({y:-8.2,alpha:0.946},0).wait(1).to({y:-15.4,alpha:0.929},0).wait(1).to({y:-22.6,alpha:0.911},0).wait(1).to({y:-29.7,alpha:0.893},0).wait(1).to({y:-36.9,alpha:0.875},0).wait(1).to({y:-44.1,alpha:0.857},0).wait(1).to({y:-51.2,alpha:0.839},0).wait(1).to({y:-58.4,alpha:0.821},0).wait(1).to({y:-65.5,alpha:0.804},0).wait(1).to({y:-72.7,alpha:0.786},0).wait(1).to({y:-79.9,alpha:0.768},0).wait(1).to({y:-87,alpha:0.75},0).wait(1).to({y:-94.2,alpha:0.732},0).wait(1).to({y:-101.4,alpha:0.714},0).wait(1).to({y:-108.5,alpha:0.696},0).wait(1).to({y:-115.7,alpha:0.679},0).wait(1).to({y:-122.8,alpha:0.661},0).wait(1).to({y:-130,alpha:0.643},0).wait(1).to({y:-137.2,alpha:0.625},0).wait(1).to({y:-144.3,alpha:0.607},0).wait(1).to({y:-151.5,alpha:0.589},0).wait(1).to({y:-158.7,alpha:0.571},0).wait(1).to({y:-165.8,alpha:0.554},0).wait(1).to({y:-173,alpha:0.536},0).wait(1).to({y:-180.1,alpha:0.518},0).wait(1).to({y:-187.3,alpha:0.5},0).wait(1).to({y:-194.5,alpha:0.482},0).wait(1).to({y:-201.6,alpha:0.464},0).wait(1).to({y:-208.8,alpha:0.446},0).wait(1).to({y:-216,alpha:0.429},0).wait(1).to({y:-223.1,alpha:0.411},0).wait(1).to({y:-230.3,alpha:0.393},0).wait(1).to({y:-237.4,alpha:0.375},0).wait(1).to({y:-244.6,alpha:0.357},0).wait(1).to({y:-251.8,alpha:0.339},0).wait(1).to({y:-258.9,alpha:0.321},0).wait(1).to({y:-266.1,alpha:0.304},0).wait(1).to({y:-273.3,alpha:0.286},0).wait(1).to({y:-280.4,alpha:0.268},0).wait(1).to({y:-287.6,alpha:0.25},0).wait(1).to({y:-294.7,alpha:0.232},0).wait(1).to({y:-301.9,alpha:0.214},0).wait(1).to({y:-309.1,alpha:0.196},0).wait(1).to({y:-316.2,alpha:0.179},0).wait(1).to({y:-323.4,alpha:0.161},0).wait(1).to({y:-330.6,alpha:0.143},0).wait(1).to({y:-337.7,alpha:0.125},0).wait(1).to({y:-344.9,alpha:0.107},0).wait(1).to({y:-352,alpha:0.089},0).wait(1).to({y:-359.2,alpha:0.071},0).wait(1).to({y:-366.4,alpha:0.054},0).wait(1).to({y:-373.5,alpha:0.036},0).wait(1).to({y:-380.7,alpha:0.018},0).wait(1).to({y:-387.9,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.5,26.5);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(13.2,13.2,1,1,0,0,0,13.2,13.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({y:4,alpha:0.975},0).wait(1).to({y:-5.3,alpha:0.95},0).wait(1).to({y:-14.6,alpha:0.925},0).wait(1).to({y:-23.9,alpha:0.9},0).wait(1).to({y:-33.1,alpha:0.875},0).wait(1).to({y:-42.4,alpha:0.85},0).wait(1).to({y:-51.7,alpha:0.825},0).wait(1).to({y:-61,alpha:0.8},0).wait(1).to({y:-70.2,alpha:0.775},0).wait(1).to({y:-79.5,alpha:0.75},0).wait(1).to({y:-88.8,alpha:0.725},0).wait(1).to({y:-98.1,alpha:0.7},0).wait(1).to({y:-107.4,alpha:0.675},0).wait(1).to({y:-116.6,alpha:0.65},0).wait(1).to({y:-125.9,alpha:0.625},0).wait(1).to({y:-135.2,alpha:0.6},0).wait(1).to({y:-144.5,alpha:0.575},0).wait(1).to({y:-153.7,alpha:0.55},0).wait(1).to({y:-163,alpha:0.525},0).wait(1).to({y:-172.3,alpha:0.5},0).wait(1).to({y:-181.6,alpha:0.475},0).wait(1).to({y:-190.9,alpha:0.45},0).wait(1).to({y:-200.1,alpha:0.425},0).wait(1).to({y:-209.4,alpha:0.4},0).wait(1).to({y:-218.7,alpha:0.375},0).wait(1).to({y:-228,alpha:0.35},0).wait(1).to({y:-237.2,alpha:0.325},0).wait(1).to({y:-246.5,alpha:0.3},0).wait(1).to({y:-255.8,alpha:0.275},0).wait(1).to({y:-265.1,alpha:0.25},0).wait(1).to({y:-274.4,alpha:0.225},0).wait(1).to({y:-283.6,alpha:0.2},0).wait(1).to({y:-292.9,alpha:0.175},0).wait(1).to({y:-302.2,alpha:0.15},0).wait(1).to({y:-311.5,alpha:0.125},0).wait(1).to({y:-320.7,alpha:0.1},0).wait(1).to({y:-330,alpha:0.075},0).wait(1).to({y:-339.3,alpha:0.05},0).wait(1).to({y:-348.6,alpha:0.025},0).wait(1).to({y:-357.9,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(13.2,13.2,1,1,0,0,0,13.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:3.9,alpha:0.971},0).wait(1).to({y:-5.4,alpha:0.943},0).wait(1).to({y:-14.8,alpha:0.914},0).wait(1).to({y:-24.1,alpha:0.886},0).wait(1).to({y:-33.5,alpha:0.857},0).wait(1).to({y:-42.8,alpha:0.829},0).wait(1).to({y:-52.2,alpha:0.8},0).wait(1).to({y:-61.5,alpha:0.771},0).wait(1).to({y:-70.9,alpha:0.743},0).wait(1).to({y:-80.2,alpha:0.714},0).wait(1).to({y:-89.6,alpha:0.686},0).wait(1).to({y:-98.9,alpha:0.657},0).wait(1).to({y:-108.2,alpha:0.629},0).wait(1).to({y:-117.6,alpha:0.6},0).wait(1).to({y:-126.9,alpha:0.571},0).wait(1).to({y:-136.3,alpha:0.543},0).wait(1).to({y:-145.6,alpha:0.514},0).wait(1).to({y:-155,alpha:0.486},0).wait(1).to({y:-164.3,alpha:0.457},0).wait(1).to({y:-173.7,alpha:0.429},0).wait(1).to({y:-183,alpha:0.4},0).wait(1).to({y:-192.4,alpha:0.371},0).wait(1).to({y:-201.7,alpha:0.343},0).wait(1).to({y:-211,alpha:0.314},0).wait(1).to({y:-220.4,alpha:0.286},0).wait(1).to({y:-229.7,alpha:0.257},0).wait(1).to({y:-239.1,alpha:0.229},0).wait(1).to({y:-248.4,alpha:0.2},0).wait(1).to({y:-257.8,alpha:0.171},0).wait(1).to({y:-267.1,alpha:0.143},0).wait(1).to({y:-276.5,alpha:0.114},0).wait(1).to({y:-285.8,alpha:0.086},0).wait(1).to({y:-295.2,alpha:0.057},0).wait(1).to({y:-304.5,alpha:0.029},0).wait(1).to({y:-313.9,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.5,26.5);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(13.2,13.2,1,1,0,0,0,13.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:8.1,alpha:0.973},0).wait(1).to({y:3,alpha:0.946},0).wait(1).to({y:-2.1,alpha:0.919},0).wait(1).to({y:-7.2,alpha:0.892},0).wait(1).to({y:-12.3,alpha:0.865},0).wait(1).to({y:-17.4,alpha:0.838},0).wait(1).to({y:-22.5,alpha:0.811},0).wait(1).to({y:-27.6,alpha:0.784},0).wait(1).to({y:-32.7,alpha:0.757},0).wait(1).to({y:-37.8,alpha:0.73},0).wait(1).to({y:-43,alpha:0.703},0).wait(1).to({y:-48.1,alpha:0.676},0).wait(1).to({y:-53.2,alpha:0.649},0).wait(1).to({y:-58.3,alpha:0.622},0).wait(1).to({y:-63.4,alpha:0.595},0).wait(1).to({y:-68.5,alpha:0.568},0).wait(1).to({y:-73.6,alpha:0.541},0).wait(1).to({y:-78.7,alpha:0.514},0).wait(1).to({y:-83.8,alpha:0.486},0).wait(1).to({y:-88.9,alpha:0.459},0).wait(1).to({y:-94,alpha:0.432},0).wait(1).to({y:-99.2,alpha:0.405},0).wait(1).to({y:-104.3,alpha:0.378},0).wait(1).to({y:-109.4,alpha:0.351},0).wait(1).to({y:-114.5,alpha:0.324},0).wait(1).to({y:-119.6,alpha:0.297},0).wait(1).to({y:-124.7,alpha:0.27},0).wait(1).to({y:-129.8,alpha:0.243},0).wait(1).to({y:-134.9,alpha:0.216},0).wait(1).to({y:-140,alpha:0.189},0).wait(1).to({y:-145.1,alpha:0.162},0).wait(1).to({y:-150.3,alpha:0.135},0).wait(1).to({y:-155.4,alpha:0.108},0).wait(1).to({y:-160.5,alpha:0.081},0).wait(1).to({y:-165.6,alpha:0.054},0).wait(1).to({y:-170.7,alpha:0.027},0).wait(1).to({y:-175.8,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.5,26.5);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bling3 = new lib.Symbol10();
	this.bling3.parent = this;
	this.bling3.setTransform(44.3,88,1,1,0,0,0,44.3,88);
	this.bling3.alpha = 0;
	this.bling3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bling3).wait(8).to({_off:false},0).wait(1).to({regY:88.1,y:88.1,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(191,199,1,1,0,0,0,191,199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.1,y:199.1},0).wait(1).to({rotation:6.3},0).wait(1).to({rotation:9.4},0).wait(1).to({rotation:12.5,y:199},0).wait(1).to({rotation:15.7},0).wait(1).to({rotation:18.8},0).wait(1).to({rotation:21.9},0).wait(1).to({rotation:25,y:199.1},0).wait(1).to({rotation:28.2,y:199},0).wait(1).to({rotation:31.3,y:199.1},0).wait(1).to({rotation:34.4},0).wait(1).to({rotation:37.6},0).wait(1).to({rotation:40.7},0).wait(1).to({rotation:43.8,y:199},0).wait(1).to({rotation:47,y:199.1},0).wait(1).to({rotation:50.1},0).wait(1).to({rotation:53.2,y:199},0).wait(1).to({rotation:56.3},0).wait(1).to({rotation:59.5,y:199.1},0).wait(1).to({rotation:62.6},0).wait(1).to({rotation:65.7},0).wait(1).to({rotation:68.9},0).wait(1).to({rotation:72},0).wait(1).to({rotation:75.1,y:199},0).wait(1).to({rotation:78.3,y:199.1},0).wait(1).to({rotation:81.4},0).wait(1).to({rotation:84.5},0).wait(1).to({rotation:87.7,y:199},0).wait(1).to({rotation:90.8},0).wait(1).to({rotation:93.9},0).wait(1).to({rotation:97},0).wait(1).to({rotation:100.2},0).wait(1).to({rotation:103.3},0).wait(1).to({rotation:106.4},0).wait(1).to({rotation:109.6},0).wait(1).to({rotation:112.7},0).wait(1).to({rotation:115.8},0).wait(1).to({rotation:119},0).wait(1).to({rotation:122.1},0).wait(1).to({rotation:125.2},0).wait(1).to({rotation:128.3},0).wait(1).to({rotation:131.5},0).wait(1).to({rotation:134.6},0).wait(1).to({rotation:137.7},0).wait(1).to({rotation:140.9},0).wait(1).to({rotation:144},0).wait(1).to({rotation:147.1},0).wait(1).to({rotation:150.3},0).wait(1).to({rotation:153.4},0).wait(1).to({rotation:156.5},0).wait(1).to({rotation:159.7},0).wait(1).to({rotation:162.8},0).wait(1).to({rotation:165.9},0).wait(1).to({rotation:169},0).wait(1).to({rotation:172.2},0).wait(1).to({rotation:175.3},0).wait(1).to({rotation:178.4},0).wait(1).to({rotation:181.6},0).wait(1).to({rotation:184.7},0).wait(1).to({rotation:187.8},0).wait(1).to({rotation:191},0).wait(1).to({rotation:194.1},0).wait(1).to({rotation:197.2},0).wait(1).to({rotation:200.3},0).wait(1).to({rotation:203.5},0).wait(1).to({rotation:206.6},0).wait(1).to({rotation:209.7},0).wait(1).to({rotation:212.9},0).wait(1).to({rotation:216},0).wait(1).to({rotation:219.1},0).wait(1).to({rotation:222.3},0).wait(1).to({rotation:225.4},0).wait(1).to({rotation:228.5},0).wait(1).to({rotation:231.7},0).wait(1).to({rotation:234.8},0).wait(1).to({rotation:237.9},0).wait(1).to({rotation:241},0).wait(1).to({rotation:244.2},0).wait(1).to({rotation:247.3},0).wait(1).to({rotation:250.4},0).wait(1).to({rotation:253.6},0).wait(1).to({rotation:256.7},0).wait(1).to({rotation:259.8},0).wait(1).to({rotation:263},0).wait(1).to({rotation:266.1},0).wait(1).to({rotation:269.2,x:191.1},0).wait(1).to({rotation:272.3,x:191},0).wait(1).to({rotation:275.5,x:191.1},0).wait(1).to({rotation:278.6},0).wait(1).to({rotation:281.7},0).wait(1).to({rotation:284.9,x:191},0).wait(1).to({rotation:288},0).wait(1).to({rotation:291.1},0).wait(1).to({rotation:294.3},0).wait(1).to({rotation:297.4},0).wait(1).to({rotation:300.5,x:191.1},0).wait(1).to({rotation:303.7},0).wait(1).to({rotation:306.8},0).wait(1).to({rotation:309.9},0).wait(1).to({rotation:313,x:191},0).wait(1).to({rotation:316.2,x:191.1},0).wait(1).to({rotation:319.3,x:191},0).wait(1).to({rotation:322.4},0).wait(1).to({rotation:325.6,x:191.1},0).wait(1).to({rotation:328.7},0).wait(1).to({rotation:331.8,x:191},0).wait(1).to({rotation:335,x:191.1},0).wait(1).to({rotation:338.1,x:191},0).wait(1).to({rotation:341.2},0).wait(1).to({rotation:344.3},0).wait(1).to({rotation:347.5},0).wait(1).to({rotation:350.6},0).wait(1).to({rotation:353.7},0).wait(1).to({rotation:356.9},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,382,398);


(lib.sunlayer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sun
	this.instance = new lib.Symbol62();
	this.instance.parent = this;
	this.instance.setTransform(131.4,236,1,1,0,0,0,440.8,463.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:668.8,regY:553.8,rotation:1.3,x:360.2,y:329.8},0).wait(1).to({rotation:2.5,x:360.8,y:333.6},0).wait(1).to({rotation:3.8,x:361.3,y:337.3},0).wait(1).to({rotation:5.1,x:361.8,y:341.1},0).wait(1).to({rotation:6.3,x:362.1,y:344.7},0).wait(1).to({rotation:7.6,x:362.4,y:348.2},0).wait(1).to({rotation:8.9,x:362.5,y:351.8},0).wait(1).to({rotation:10.1,y:355.3},0).wait(1).to({rotation:11.4,y:358.7},0).wait(1).to({rotation:12.7,x:362.3,y:362},0).wait(1).to({rotation:13.9,x:362,y:365.2},0).wait(1).to({rotation:15.2,x:361.6,y:368.5},0).wait(1).to({rotation:16.5,x:361.2,y:371.6},0).wait(1).to({rotation:17.7,x:360.5,y:374.7},0).wait(1).to({rotation:19,x:359.9,y:377.7},0).wait(1).to({rotation:20.3,x:359.2,y:380.5},0).wait(1).to({rotation:21.5,x:358.3,y:383.4},0).wait(1).to({rotation:22.8,x:357.4,y:386.1},0).wait(1).to({rotation:24.1,x:356.3,y:388.7},0).wait(1).to({rotation:25.4,x:355.3,y:391.3},0).wait(1).to({rotation:26.6,x:354,y:393.8},0).wait(1).to({rotation:27.9,x:352.8,y:396.2},0).wait(1).to({rotation:29.2,x:351.4,y:398.5},0).wait(1).to({rotation:30.4,x:350,y:400.7},0).wait(1).to({rotation:31.7,x:348.6,y:402.8},0).wait(1).to({rotation:33,x:347,y:404.8},0).wait(1).to({rotation:34.2,x:345.3,y:406.7},0).wait(1).to({rotation:35.5,x:343.6,y:408.5},0).wait(1).to({rotation:36.8,x:341.8,y:410.2},0).wait(1).to({rotation:38,x:340,y:411.9},0).wait(1).to({rotation:39.3,x:338.1,y:413.3},0).wait(1).to({rotation:40.6,x:336.2,y:414.8},0).wait(1).to({rotation:41.8,x:334.2,y:416.1},0).wait(1).to({rotation:43.1,x:332.1,y:417.3},0).wait(1).to({rotation:44.4,x:330,y:418.4},0).wait(1).to({rotation:45.6,x:327.9,y:419.3},0).wait(1).to({rotation:46.9,x:325.7,y:420.2},0).wait(1).to({rotation:48.2,x:323.4,y:420.9},0).wait(1).to({rotation:49.4,x:321.5,y:422.5},0).wait(1).to({rotation:50.7,x:319.5,y:423.9},0).wait(1).to({rotation:52,x:317.5,y:425.2},0).wait(1).to({rotation:53.2,x:315.5,y:426.5},0).wait(1).to({rotation:54.5,x:313.4,y:427.5},0).wait(1).to({rotation:55.8,x:311.3,y:428.5},0).wait(1).to({rotation:57,x:309.2,y:429.3},0).wait(1).to({rotation:58.3,x:307.1,y:430.1},0).wait(1).to({rotation:59.6,x:304.8,y:430.6},0).wait(1).to({rotation:60.8,x:302.6,y:431.2},0).wait(1).to({rotation:62.1,x:300.4,y:431.6},0).wait(1).to({rotation:63.4,x:298.2,y:431.8},0).wait(1).to({rotation:64.6,x:296,y:431.9},0).wait(1).to({rotation:65.9,x:293.7},0).wait(1).to({rotation:67.2,x:291.5,y:431.8},0).wait(1).to({rotation:68.5,x:289.2,y:431.6},0).wait(1).to({rotation:69.7,x:287,y:431.3},0).wait(1).to({rotation:71,x:284.7,y:430.8},0).wait(1).to({rotation:72.3,x:282.5,y:430.2},0).wait(1).to({rotation:73.5,x:280.3,y:429.6},0).wait(1).to({rotation:74.8,x:278.1,y:428.7},0).wait(1).to({rotation:76.1,x:275.9,y:427.8},0).wait(1).to({rotation:77.3,x:273.7,y:426.7},0).wait(1).to({rotation:78.6,x:271.5,y:425.6},0).wait(1).to({rotation:79.9,x:269.3,y:424.3},0).wait(1).to({rotation:81.1,x:267.2,y:422.8},0).wait(1).to({rotation:82.4,x:265.1,y:421.3},0).wait(1).to({rotation:83.7,x:263,y:419.7},0).wait(1).to({rotation:84.9,x:261,y:417.9},0).wait(1).to({rotation:86.2,x:259,y:416},0).wait(1).to({rotation:87.5,x:257,y:414},0).wait(1).to({rotation:88.7,x:255.1,y:411.9},0).wait(1).to({rotation:90,x:253.2,y:409.7},0).wait(1).to({rotation:91.3,x:251.4,y:407.4},0).wait(1).to({rotation:92.5,x:249.6,y:404.9},0).wait(1).to({rotation:93.8,x:247.8,y:402.3},0).wait(1).to({rotation:95.1,x:246.1,y:399.7},0).wait(1).to({rotation:96.3,x:244.5,y:396.9},0).wait(1).to({rotation:97.6,x:242.9,y:394.1},0).wait(1).to({rotation:98.9,x:241.4,y:391.1},0).wait(1).to({rotation:100.1,x:239.9,y:388},0).wait(1).to({rotation:101.4,x:238.4,y:384.8},0).wait(1).to({rotation:102.7,x:237.1,y:381.6},0).wait(1).to({rotation:103.9,x:235.9,y:379.6},0).wait(1).to({rotation:105.2,x:234.6,y:377.5},0).wait(1).to({rotation:106.5,x:233.6,y:375.3},0).wait(1).to({rotation:107.7,x:232.5,y:373},0).wait(1).to({rotation:109,x:231.5,y:370.7},0).wait(1).to({rotation:110.3,x:230.7,y:368.3},0).wait(1).to({rotation:111.5,x:229.9,y:365.7},0).wait(1).to({rotation:112.8,x:229.2,y:363.1},0).wait(1).to({rotation:114.1,x:228.5,y:360.3},0).wait(1).to({rotation:115.4,x:228,y:357.6},0).wait(1).to({rotation:116.6,x:227.5,y:354.6},0).wait(1).to({rotation:117.9,x:227.1,y:351.7},0).wait(1).to({rotation:119.2,x:226.9,y:348.6},0).wait(1).to({rotation:120.4,x:226.7,y:345.5},0).wait(1).to({rotation:121.7,x:226.6,y:342.4},0).wait(1).to({rotation:123,y:339.1},0).wait(1).to({rotation:124.2,x:226.7,y:335.7},0).wait(1).to({rotation:125.5,x:226.9,y:332.3},0).wait(1).to({rotation:126.8,x:227.2,y:328.9},0).wait(1).to({rotation:128,x:227.6,y:325.3},0).wait(1).to({rotation:129.3,x:228.1,y:321.7},0).wait(1).to({rotation:130.6,x:228.7,y:318.1},0).wait(1).to({rotation:131.8,x:229.4,y:314.4},0).wait(1).to({rotation:133.1,x:230.3,y:310.7},0).wait(1).to({rotation:134.4,x:231.2,y:306.8},0).wait(1).to({rotation:135.6,x:232.2,y:303},0).wait(1).to({rotation:136.9,x:233.3,y:299.1},0).wait(1).to({rotation:138.2,x:234.6,y:295.1},0).wait(1).to({rotation:139.4,x:236,y:291.2},0).wait(1).to({rotation:140.7,x:237.5,y:287.1},0).wait(1).to({rotation:142,x:239.1,y:283},0).wait(1).to({rotation:143.2,x:240.8,y:279},0).wait(1).to({rotation:144.5,x:242.7,y:274.8},0).wait(1).to({rotation:145.8,x:244.6,y:270.7},0).wait(1).to({rotation:147,x:246.7,y:266.5},0).wait(1).to({rotation:148.3,x:248.9,y:262.3},0).wait(1).to({rotation:149.6,x:251.2,y:258.1},0).wait(1).to({rotation:150.8,x:253.6,y:253.8},0).wait(1).to({rotation:152.1,x:254.9,y:250.3},0).wait(1).to({rotation:153.4,x:256.5,y:246.9},0).wait(1).to({rotation:154.6,x:258.1,y:243.4},0).wait(1).to({rotation:155.9,x:259.9,y:239.9},0).wait(1).to({rotation:157.2,x:261.7,y:236.5},0).wait(1).to({rotation:158.5,x:263.7,y:233},0).wait(1).to({rotation:159.7,x:265.8,y:229.6},0).wait(1).to({rotation:161,x:268.1,y:226},0).wait(1).to({rotation:162.3,x:270.4,y:222.6},0).wait(1).to({rotation:163.5,x:272.8,y:219.1},0).wait(1).to({rotation:164.8,x:275.5,y:215.7},0).wait(1).to({rotation:166.1,x:278.1,y:212.2},0).wait(1).to({rotation:167.3,x:281,y:208.8},0).wait(1).to({rotation:168.6,x:283.9,y:205.4},0).wait(1).to({rotation:169.9,x:287,y:202},0).wait(1).to({rotation:171.1,x:290.2,y:198.6},0).wait(1).to({rotation:172.4,x:293.5,y:195.3},0).wait(1).to({rotation:173.7,x:296.9,y:192},0).wait(1).to({rotation:174.9,x:300.4,y:188.7},0).wait(1).to({rotation:176.2,x:304.1,y:185.5},0).wait(1).to({rotation:177.5,x:307.8,y:182.2},0).wait(1).to({rotation:178.7,x:311.7,y:179.1},0).wait(1).to({rotation:180,x:315.7,y:175.9},0).wait(1).to({rotation:181.3,x:319.7,y:172.9},0).wait(1).to({rotation:182.5,x:324,y:169.9},0).wait(1).to({rotation:183.8,x:328.3,y:166.9},0).wait(1).to({rotation:185.1,x:332.7,y:163.9},0).wait(1).to({rotation:186.3,x:337.3,y:161.1},0).wait(1).to({rotation:187.6,x:341.9,y:158.3},0).wait(1).to({rotation:188.9,x:346.6,y:155.5},0).wait(1).to({rotation:190.1,x:351.5,y:152.7},0).wait(1).to({rotation:191.4,x:356.4,y:150.1},0).wait(1).to({rotation:192.7,x:361.4,y:147.5},0).wait(1).to({rotation:193.9,x:366.6,y:145},0).wait(1).to({rotation:195.2,x:367.6,y:138.3},0).wait(1).to({rotation:196.5,x:368.6,y:131.8},0).wait(1).to({rotation:197.7,x:369.7,y:125.3},0).wait(1).to({rotation:199,x:370.9,y:118.8},0).wait(1).to({rotation:200.3,x:372.2,y:112.5},0).wait(1).to({rotation:201.5,x:373.7,y:106.2},0).wait(1).to({rotation:202.8,x:375.2,y:100},0).wait(1).to({rotation:204.1,x:376.8,y:93.9},0).wait(1).to({rotation:205.4,x:378.4,y:87.9},0).wait(1).to({rotation:206.6,x:380.1,y:82},0).wait(1).to({rotation:207.9,x:382,y:76.1},0).wait(1).to({rotation:209.2,x:383.9,y:70.4},0).wait(1).to({rotation:210.4,x:385.8,y:64.7},0).wait(1).to({rotation:211.7,x:387.8,y:59.1},0).wait(1).to({rotation:213,x:390,y:53.7},0).wait(1).to({rotation:214.2,x:392.2,y:48.3},0).wait(1).to({rotation:215.5,x:394.5,y:43},0).wait(1).to({rotation:216.8,x:396.8,y:37.9},0).wait(1).to({rotation:218,x:399.2,y:32.8},0).wait(1).to({rotation:219.3,x:401.7,y:27.9},0).wait(1).to({rotation:220.6,x:404.2,y:23},0).wait(1).to({rotation:221.8,x:406.7,y:18.2},0).wait(1).to({rotation:223.1,x:409.3,y:13.6},0).wait(1).to({rotation:224.4,x:412,y:9},0).wait(1).to({rotation:225.6,x:414.7,y:4.6},0).wait(1).to({rotation:226.9,x:417.4,y:0.2},0).wait(1).to({rotation:228.2,x:420.3,y:-3.9},0).wait(1).to({rotation:229.4,x:423.1,y:-8},0).wait(1).to({rotation:230.7,x:426,y:-12},0).wait(1).to({rotation:232,x:427,y:-14.9},0).wait(1).to({rotation:233.2,x:428,y:-17.8},0).wait(1).to({rotation:234.5,x:429.1,y:-20.5},0).wait(1).to({rotation:235.8,x:430.2,y:-23.1},0).wait(1).to({rotation:237,x:431.3,y:-25.5},0).wait(1).to({rotation:238.3,x:432.5,y:-28},0).wait(1).to({rotation:239.6,x:433.7,y:-30.2},0).wait(1).to({rotation:240.8,x:434.9,y:-32.3},0).wait(1).to({rotation:242.1,x:436.1,y:-34.4},0).wait(1).to({rotation:243.4,x:437.3,y:-36.2},0).wait(1).to({rotation:244.6,x:438.5,y:-38},0).wait(1).to({rotation:245.9,x:439.8,y:-39.6},0).wait(1).to({rotation:247.2,x:441,y:-41.1},0).wait(1).to({rotation:248.5,x:442.3,y:-42.6},0).wait(1).to({rotation:249.7,x:443.5,y:-43.9},0).wait(1).to({rotation:251,x:444.8,y:-45},0).wait(1).to({rotation:252.3,x:446,y:-46.1},0).wait(1).to({rotation:253.5,x:447.3,y:-47},0).wait(1).to({rotation:254.8,x:448.4,y:-47.8},0).wait(1).to({rotation:256.1,x:449.7,y:-48.5},0).wait(1).to({rotation:257.3,x:450.9,y:-49.1},0).wait(1).to({rotation:258.6,x:452,y:-49.6},0).wait(1).to({rotation:259.9,x:453.2,y:-49.9},0).wait(1).to({rotation:261.1,x:454.3,y:-50.1},0).wait(1).to({rotation:262.4,x:455.5,y:-50.2},0).wait(1).to({rotation:263.7,x:456.6},0).wait(1).to({rotation:264.9,x:457.6,y:-50.1},0).wait(1).to({rotation:266.2,x:458.6,y:-49.8},0).wait(1).to({rotation:267.5,x:459.6,y:-49.4},0).wait(1).to({rotation:268.7,x:460.5,y:-49},0).wait(1).to({rotation:270,x:461.5,y:-46.8},0).wait(1).to({rotation:271.3,x:462.4,y:-44.5},0).wait(1).to({rotation:272.5,x:463.3,y:-42},0).wait(1).to({rotation:273.8,x:464.1,y:-39.5},0).wait(1).to({rotation:275.1,x:465,y:-36.9},0).wait(1).to({rotation:276.3,x:465.6,y:-34.1},0).wait(1).to({rotation:277.6,x:466.3,y:-31.3},0).wait(1).to({rotation:278.9,x:467,y:-28.4},0).wait(1).to({rotation:280.1,x:467.6,y:-25.3},0).wait(1).to({rotation:281.4,x:468.1,y:-22.2},0).wait(1).to({rotation:282.7,x:468.5,y:-18.9},0).wait(1).to({rotation:283.9,x:468.8,y:-15.5},0).wait(1).to({rotation:285.2,x:469.2,y:-12.1},0).wait(1).to({rotation:286.5,x:469.4,y:-8.5},0).wait(1).to({rotation:287.7,x:469.5,y:-4.9},0).wait(1).to({rotation:289,x:469.6,y:-1.2},0).wait(1).to({rotation:290.3,y:2.6},0).wait(1).to({rotation:291.5,x:469.5,y:6.6},0).wait(1).to({rotation:292.8,x:469.3,y:10.6},0).wait(1).to({rotation:294.1,x:469.1,y:14.7},0).wait(1).to({rotation:295.4,x:468.7,y:18.8},0).wait(1).to({rotation:296.6,x:468.3,y:23.1},0).wait(1).to({rotation:297.9,x:467.8,y:27.5},0).wait(1).to({rotation:299.2,x:467.2,y:31.9},0).wait(1).to({rotation:300.4,x:466.5,y:36.3},0).wait(1).to({rotation:301.7,x:465.7,y:40.9},0).wait(1).to({rotation:303,x:464.8,y:45.6},0).wait(1).to({rotation:304.2,x:463.8,y:50.3},0).wait(1).to({rotation:305.5,x:462.8,y:55.1},0).wait(1).to({rotation:306.8,x:461.6,y:59.9},0).wait(1).to({rotation:308,x:460.3,y:64.8},0).wait(1).to({rotation:309.3,x:458.9,y:69.8},0).wait(1).to({rotation:310.6,x:457.4,y:74.8},0).wait(1).to({rotation:311.8,x:455.8,y:79.9},0).wait(1).to({rotation:313.1,x:455.4,y:85.9},0).wait(1).to({rotation:314.4,x:454.9,y:92.1},0).wait(1).to({rotation:315.6,x:454.3,y:98.3},0).wait(1).to({rotation:316.9,x:453.6,y:104.5},0).wait(1).to({rotation:318.2,x:452.7,y:110.8},0).wait(1).to({rotation:319.4,x:451.8,y:117.1},0).wait(1).to({rotation:320.7,x:450.7,y:123.5},0).wait(1).to({rotation:322,x:449.5,y:129.9},0).wait(1).to({rotation:323.2,x:448.3,y:136.3},0).wait(1).to({rotation:324.5,x:446.9,y:142.8},0).wait(1).to({rotation:325.8,x:445.4,y:149.3},0).wait(1).to({rotation:327,x:443.7,y:155.7},0).wait(1).to({rotation:328.3,x:442,y:162.3},0).wait(1).to({rotation:329.6,x:440,y:168.9},0).wait(1).to({rotation:330.8,x:438.1,y:175.5},0).wait(1).to({rotation:332.1,x:436,y:182.1},0).wait(1).to({rotation:333.4,x:433.8,y:188.8},0).wait(1).to({rotation:334.6,x:431.4,y:195.4},0).wait(1).to({rotation:335.9,x:428.9,y:202},0).wait(1).to({rotation:337.2,x:426.3,y:208.6},0).wait(1).to({rotation:338.5,x:423.6,y:215.3},0).wait(1).to({rotation:339.7,x:420.8,y:221.9},0).wait(1).to({rotation:341,x:417.8,y:228.6},0).wait(1).to({rotation:342.3,x:414.8,y:235.2},0).wait(1).to({rotation:343.5,x:411.6,y:241.8},0).wait(1).to({rotation:344.8,x:408.3,y:248.4},0).wait(1).to({rotation:346.1,x:404.9,y:255},0).wait(1).to({rotation:347.3,x:401.3,y:261.6},0).wait(1).to({rotation:348.6,x:397.7,y:268.2},0).wait(1).to({rotation:349.9,x:393.8,y:274.7},0).wait(1).to({rotation:351.1,x:389.9,y:281.2},0).wait(1).to({rotation:352.4,x:385.9,y:287.7},0).wait(1).to({rotation:353.7,x:381.8,y:294.2},0).wait(1).to({rotation:354.9,x:377.6,y:300.7},0).wait(1).to({rotation:356.2,x:373.2,y:307},0).wait(1).to({rotation:357.5,x:368.7,y:313.4},0).wait(1).to({rotation:358.7,x:364.1,y:319.7},0).wait(1).to({rotation:360,x:359.4,y:326},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.4,-227.8,1337.7,1107.6);


(lib.steps_arena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.1,1,1,0,0,0,52.2,54.2);
	this.instance.alpha = 0.602;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF5046").s().p("Ag0BxIgSgLIAKgYIAJAHIAKAGIAKAFQANAFAPAAQAYAAAKgNQAJgKAAgLQAAgKgCgGQgFgLgLgJIgNgHIgcgPQgQgIgIgIQgJgIgEgHQgJgQAAgZQAAgZASgSQASgSAdAAQARAAAPAEQAPAFAJAHIgHAYQgVgQgaAAQgRAAgIALQgKALAAARQAAAIACAHQAFALANAKIAPAIIAcAOIAMAHIAMAJQARASAAAcQABAcgUATQgSATgfAAQghAAgWgMg");
	this.shape.setTransform(11.3,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF5046").s().p("AgMB6IhcjzIAfAAIBKDIIBKjIIAeAAIhcDzg");
	this.shape_1.setTransform(-9.2,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkWCrQhRg8gvhYQgyhagHhnIOeAAQgGBngxBaQgwBYhQA8g");
	this.shape_2.setTransform(0,22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3EBCA4").s().p("AjoDJQhpg+g/hpQg/hrgBh/IOhAAQAAB/hABrQg+BphpA+g");
	this.shape_3.setTransform(0,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAtQgEgFgBgGIAAhDQABgGAEgEQAEgFAFAAQAGAAAFAFQADAEAAAGIAABDQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_4.setTransform(-2.9,-34.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAsQgFgEAAgHIAAhCQAAgGAFgEQAEgFAFAAQAGAAAEAFQAEAEAAAGIAABCQAAAHgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_5.setTransform(4.4,-33.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAsQgFgEAAgGIAAhDQAAgGAFgEQAEgFAFABQAGgBAEAFQAEAEABAGIAABDQgBAGgEAEQgEAEgGABQgFgBgEgEg");
	this.shape_6.setTransform(11.7,-32.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAsQgFgEAAgGIAAhDQAAgGAFgEQAEgFAFABQAGgBAEAFQAEAEABAGIAABDQgBAGgEAEQgEAEgGABQgFgBgEgEg");
	this.shape_7.setTransform(19,-32.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiSAVQgJAAgGgGQgGgHAAgIQAAgIAGgGQAGgGAJAAIElAAQAJAAAGAGQAGAGAAAIQAAAIgGAHQgGAGgJAAg");
	this.shape_8.setTransform(-29.6,-52.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BD4440").s().p("AjABnIEejNQA0ARAZAwQAWArAABAIAAAhg");
	this.shape_9.setTransform(22.2,-23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EF5046").s().p("AltDDIAAmFIDzADIAGA4QAPA7ArAUQBSAmEgAAQAcAAAaAIIkfDNg");
	this.shape_10.setTransform(-4.9,-32.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlzAZQgRAAgOgNQgMgMAAgQIAAgIIM9AAIAAAIQAAAQgMAMQgNANgSAAg");
	this.shape_11.setTransform(0,-10.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFDD7B").s().p("AlIFIQiIiHAAjBQAAi/CIiJQCJiIC/AAQDBAACHCIQCJCJAAC/QAADBiJCHQiHCIjBAAQi/AAiJiIg");
	this.shape_12.setTransform(0,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AlwFxQiZiZAAjYQAAjYCZiYQCYiZDYAAQDZAACZCZQCYCYAADYQAADYiYCZQiZCZjZABQjYgBiYiZg");
	this.shape_13.setTransform(0,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.2,-54.3,104.5,108.6);


(lib.shanguang1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(13.2,13.2,1,1,0,0,0,13.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:8.4,alpha:0.964},0).wait(1).to({y:3.5,alpha:0.929},0).wait(1).to({y:-1.3,alpha:0.893},0).wait(1).to({y:-6.2,alpha:0.857},0).wait(1).to({y:-11,alpha:0.821},0).wait(1).to({y:-15.9,alpha:0.786},0).wait(1).to({y:-20.8,alpha:0.75},0).wait(1).to({y:-25.6,alpha:0.714},0).wait(1).to({y:-30.5,alpha:0.679},0).wait(1).to({y:-35.3,alpha:0.643},0).wait(1).to({y:-40.2,alpha:0.607},0).wait(1).to({y:-45.1,alpha:0.571},0).wait(1).to({y:-49.9,alpha:0.536},0).wait(1).to({y:-54.8,alpha:0.5},0).wait(1).to({y:-59.6,alpha:0.464},0).wait(1).to({y:-64.5,alpha:0.429},0).wait(1).to({y:-69.4,alpha:0.393},0).wait(1).to({y:-74.2,alpha:0.357},0).wait(1).to({y:-79.1,alpha:0.321},0).wait(1).to({y:-83.9,alpha:0.286},0).wait(1).to({y:-88.8,alpha:0.25},0).wait(1).to({y:-93.6,alpha:0.214},0).wait(1).to({y:-98.5,alpha:0.179},0).wait(1).to({y:-103.4,alpha:0.143},0).wait(1).to({y:-108.2,alpha:0.107},0).wait(1).to({y:-113.1,alpha:0.071},0).wait(1).to({y:-117.9,alpha:0.036},0).wait(1).to({y:-122.8,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.5,26.5);


(lib.real_arrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(64,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:72,y:104.1},7).to({x:64,y:81},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-23.1,166.9,208.2);


(lib.map_bar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{energy_empty:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// Layer 1
	this.motion_energy_2 = new lib.Symbol21();
	this.motion_energy_2.parent = this;
	this.motion_energy_2.setTransform(0,-127.9,1,0.522,0,0,0,0,-244.6);

	this.timeline.addTween(cjs.Tween.get(this.motion_energy_2).wait(1).to({regY:-124.5,scaleX:1,scaleY:0.5,y:-62.3},0).wait(1).to({scaleY:0.48,y:-59.7},0).wait(1).to({scaleY:0.46,y:-57},0).wait(1).to({scaleY:0.44,y:-54.3},0).wait(1).to({scaleY:0.41,y:-51.6},0).wait(1).to({scaleY:0.39,y:-48.9},0).wait(1).to({scaleY:0.37,y:-46.2},0).wait(1).to({scaleY:0.35,y:-43.5},0).wait(1).to({scaleY:0.33,y:-40.8},0).wait(1).to({scaleY:0.31,y:-38.1},0).wait(1).to({scaleY:0.28,y:-35.4},0).wait(1).to({scaleY:0.26,y:-32.7},0).wait(1).to({scaleY:0.24,y:-30.1},0).wait(1).to({scaleY:0.22,y:-27.3},0).wait(1).to({scaleY:0.2,y:-24.6},0).wait(1).to({scaleY:0.18,y:-22},0).wait(1).to({scaleY:0.16,y:-19.3},0).wait(1).to({scaleY:0.13,y:-16.6},0).wait(1).to({scaleY:0.11,y:-13.9},0).wait(1).to({scaleY:0.09,y:-11.2},0).wait(1).to({scaleY:0.07,y:-8.5},0).wait(1).to({scaleY:0.05,y:-5.8},0).wait(1).to({scaleY:0.03,y:-3.2},0).wait(1).to({scaleY:0,y:-0.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-130.2,39,129.9);


(lib.map_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{energy_stop:0,energymove:17,"energy_empty":41});

	// timeline functions:
	this.frame_16 = function() {
		this.gotoAndPlay("energy_stop");
	}
	this.frame_40 = function() {
		this.stop();
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(24).call(this.frame_40).wait(24).call(this.frame_64).wait(1));

	// Layer 1
	this.motion_energy = new lib.Symbol21();
	this.motion_energy.parent = this;
	this.motion_energy.setTransform(0,-248.9,1,1,0,0,0,0,-248.9);

	this.timeline.addTween(cjs.Tween.get(this.motion_energy).wait(1).to({regY:-124.5,y:-124.5},0).wait(16).to({regY:-244.7,y:-245.2},0).wait(1).to({regY:-124.5,scaleY:0.98,y:-122.3},0).wait(1).to({scaleY:0.96,y:-119.7},0).wait(1).to({scaleY:0.94,y:-117.2},0).wait(1).to({scaleY:0.92,y:-114.6},0).wait(1).to({scaleY:0.9,y:-112},0).wait(1).to({scaleY:0.88,y:-109.3},0).wait(1).to({scaleY:0.85,y:-106.7},0).wait(1).to({scaleY:0.83,y:-104.2},0).wait(1).to({scaleY:0.81,y:-101.6},0).wait(1).to({scaleY:0.79,y:-99},0).wait(1).to({scaleY:0.77,y:-96.3},0).wait(1).to({scaleY:0.75,y:-93.8},0).wait(1).to({scaleY:0.73,y:-91.2},0).wait(1).to({scaleY:0.71,y:-88.6},0).wait(1).to({scaleY:0.69,y:-86},0).wait(1).to({scaleY:0.67,y:-83.4},0).wait(1).to({scaleY:0.65,y:-80.8},0).wait(1).to({scaleY:0.63,y:-78.2},0).wait(1).to({scaleY:0.61,y:-75.6},0).wait(1).to({scaleY:0.58,y:-73},0).wait(1).to({scaleY:0.56,y:-70.4},0).wait(1).to({scaleY:0.54,y:-67.8},0).wait(1).to({scaleY:0.52,y:-65.2},0).wait(1).to({scaleX:1,scaleY:0.5,y:-62.3},0).wait(1).to({scaleY:0.48,y:-59.6},0).wait(1).to({scaleY:0.46,y:-56.9},0).wait(1).to({scaleY:0.44,y:-54.2},0).wait(1).to({scaleY:0.41,y:-51.5},0).wait(1).to({scaleY:0.39,y:-48.8},0).wait(1).to({scaleY:0.37,y:-46.1},0).wait(1).to({scaleY:0.35,y:-43.4},0).wait(1).to({scaleY:0.33,y:-40.8},0).wait(1).to({scaleY:0.31,y:-38.1},0).wait(1).to({scaleY:0.28,y:-35.4},0).wait(1).to({scaleY:0.26,y:-32.7},0).wait(1).to({scaleY:0.24,y:-30},0).wait(1).to({scaleY:0.22,y:-27.3},0).wait(1).to({scaleY:0.2,y:-24.6},0).wait(1).to({scaleY:0.18,y:-22},0).wait(1).to({scaleY:0.16,y:-19.3},0).wait(1).to({scaleY:0.13,y:-16.6},0).wait(1).to({scaleY:0.11,y:-13.9},0).wait(1).to({scaleY:0.09,y:-11.2},0).wait(1).to({scaleY:0.07,y:-8.5},0).wait(1).to({scaleY:0.05,y:-5.8},0).wait(1).to({scaleY:0.03,y:-3.2},0).wait(1).to({scaleY:0,y:-0.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-248.9,39,249);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoriRIO/rtIEYJyIiYMbIy/Fwg");
	mask.setTransform(68.4,89.5);

	// Layer 3
	this.instance = new lib.Path_6();
	this.instance.parent = this;
	this.instance.setTransform(165.8,201.9,1,1,0,0,0,75,105);
	this.instance.alpha = 0.059;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7D94B").s().p("AiZDzIk0CiQAShEAXhDIELiNIEMCOIgzkrIDbjUIktgtIgwhhQAZgdAegeIAvBiIGrA+Ik1EsIBJGog");
	this.shape.setTransform(93,102.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7D94B").s().p("ABLGCIl8DIIBImoIk0krIGqg+IC+mCIC/GCIDiAgQAdBaAUBVIieCaIBJGogAFZGeIg0krIDajUIktgsIiHkQIiGEQIktAsIDaDUIgzErIEMiNIEOCNg");
	this.shape_1.setTransform(181.2,156.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7D94B").s().p("AFwJKIl7jIIifBUQgvgYg1glIEDiIIEMCOIgzktIDajTIkugsIiFkQIiHEQIktAsIDaDTIgxEiQglgagjghIAei3IkUkNIgHgiIGRg7IC/mBIC+GBIGpA+Ik0EsIBJGog");
	this.shape_2.setTransform(101.1,248.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221E1F").p("AP4FcQAAIQkqEAQkDDenLAAQnLAAkCjeQkqkAAAoQQAAkYBQktQBPksCLj6QCQkFCyiUQDCihDJAAQDKAADBChQCyCUCREFQCLD6BPEsQBQEtAAEYg");
	this.shape_3.setTransform(139.2,170.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArNRsQkqkAAAoQQAAkYBQktQBPksCLj6QCQkFCyiUQDCihDJAAQDKAADBChQCyCUCREFQCLD6BPEsQBQEtAAEYQAAIQkqEAQkDDenLAAQnLAAkCjeg");
	this.shape_4.setTransform(139.2,170.6);

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(36.7,34.2,100.2,144.8), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ar5HiIBElhIhzj+ID/sHIVSL0IuhQVg");
	mask.setTransform(169.1,90.1);

	// Layer 3
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(128.7,242.2,1,1,0,0,0,75,105);
	this.instance.alpha = 0.059;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7D94B").s().p("AiZDyIk1CiQAUhDAWhEIELiMIEMCOIgykrIDajVIktgsIgwhgQAZgeAegeIAwBiIGqA+Ik0ErIBIGog");
	this.shape.setTransform(55.8,143.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7D94B").s().p("ABLGCIl8DIIBJmoIk1krIGrg/IC9mBIC/GBIDiAiQAcBZAWBUIifCbIBJGogAFZGeIg0ksIDajTIktgrIiHkSIiGESIktArIDaDTIgzEsIEMiNIEOCNg");
	this.shape_1.setTransform(144,196.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7D94B").s().p("AFwJKIl7jIIigBTQgugXg1gkIEDiJIENCNIg0krIDajUIktgsIiGkQIiHEQIktAsIDaDUIgxEhQglgagkgiIAfi2IkUkNIgHgiIGSg6IC+mCIC+GCIGpA+Ik0ErIBIGog");
	this.shape_2.setTransform(64,288.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221E1F").p("AP4FcQAAIQkqEAQkDDenLAAQnLAAkCjeQkqkAAAoQQAAkYBQktQBPksCLj6QCQkFCyiUQDCihDJAAQDKAADBChQCyCUCREFQCLD6BPEsQBQEtAAEYg");
	this.shape_3.setTransform(102.1,211);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArNRsQkqkAAAoQQAAkYBQktQBPksCLj6QCQkFCyiUQDCihDJAAQDKAADBChQCyCUCREFQCLD6BPEsQBQEtAAEYQAAIQkqEAQkDDenLAAQnLAAkCjeg");
	this.shape_4.setTransform(102.1,211);

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(88.3,74.6,116.4,105.6), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqBJ3IGAvpIGanPIHpMDIijOAg");
	mask.setTransform(182.8,142.2);

	// Layer 3
	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(128.7,167.2,1,1,0,0,0,75,105);
	this.instance.alpha = 0.059;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7D94B").s().p("AiZDyIk1CiQAUhDAWhEIELiLIEMCNIgykrIDajVIktgsIgwhgQAZgeAegeIAwBiIGqA+Ik0ErIBIGog");
	this.shape.setTransform(55.8,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7D94B").s().p("ABLGCIl8DIIBJmoIk1krIGrg/IC9mBIC/GBIDiAiQAcBZAWBUIifCbIBJGogAFZGeIg0ksIDajTIktgrIiHkSIiGESIktArIDaDTIgzEsIEMiNIEOCNg");
	this.shape_1.setTransform(144,121.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7D94B").s().p("AFwJKIl7jIIigBTQgugXg1gkIEDiJIENCNIg0krIDajUIktgsIiGkRIiHERIktAsIDaDUIgxEhQglgagkgiIAfi2IkUkNIgHgiIGSg6IC+mCIC+GCIGpA+Ik0ErIBIGog");
	this.shape_2.setTransform(64,213.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221E1F").p("AP4FcQAAIQkqEAQkDDenLAAQnLAAkCjeQkqkAAAoQQAAkYBQktQBPksCLj6QCQkFCyiUQDCihDJAAQDKAADBChQCyCUCREFQCLD6BPEsQBQEtAAEYg");
	this.shape_3.setTransform(102.1,135.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArNRsQkqkAAAoQQAAkYBQktQBPksCLj6QCQkFCyiUQDCihDJAAQDKAADBChQCyCUCREFQCLD6BPEsQBQEtAAEYQAAIQkqEAQkDDenLAAQnLAAkCjeg");
	this.shape_4.setTransform(102.1,135.9);

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(118.6,58.8,86.1,166.8), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxuFkIKjsqIKIhSIMACLICxOmg");
	mask.setTransform(113.5,259);

	// Layer 3
	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(142.4,167.2,1,1,0,0,0,75,105);
	this.instance.alpha = 0.059;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7D94B").s().p("AiZDyIk0CiQAShDAXhEIELiLIEMCNIgzkrIDbjVIktgsIgwhgQAZgeAegeIAvBiIGrA+Ik1ErIBJGog");
	this.shape.setTransform(69.6,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7D94B").s().p("ABLGCIl8DIIBImoIk0krIGqg/IC+mBIC/GBIDjAiQAcBZAUBUIieCbIBJGogAFZGeIg0ksIDajTIktgrIiHkSIiGESIktArIDaDTIgzEsIEMiNIEOCNg");
	this.shape_1.setTransform(157.8,121.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7D94B").s().p("AFwJKIl7jIIifBTQgvgXg1gkIEDiJIEMCNIgzkrIDajUIkugsIiFkRIiHERIktAsIDaDUIgxEhQglgagjgiIAei2IkUkNIgHgiIGRg6IC/mCIC+GCIGpA+Ik0ErIBJGog");
	this.shape_2.setTransform(77.7,213.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221E1F").p("AP4FcQAAIQkqEAQkDDenLAAQnLAAkCjeQkqkAAAoQQAAkYBQktQBPksCLj6QCQkFCyiUQDCihDJAAQDKAADBChQCyCUCREFQCLD6BPEsQBQEtAAEYg");
	this.shape_3.setTransform(115.8,135.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArNRsQkqkAAAoQQAAkYBQktQBPksCLj6QCQkFCyiUQDCihDJAAQDKAADBChQCyCUCREFQCLD6BPEsQBQEtAAEYQAAIQkqEAQkDDenLAAQnLAAkCjeg");
	this.shape_4.setTransform(115.8,135.9);

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(13.3,205.3,205.2,67.1), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqRkaIIBjnIMijzIk1QjIl5HGg");
	mask.setTransform(65.8,183.2);

	// Layer 3
	this.instance = new lib.Path_3();
	this.instance.parent = this;
	this.instance.setTransform(175.8,167.2,1,1,0,0,0,75,105);
	this.instance.alpha = 0.059;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7D94B").s().p("AiZDyIk1CiQAUhDAWhEIELiLIENCNIg0krIDajVIksgsIgwhgQAZgeAegeIAwBiIGpA+Ik0ErIBJGog");
	this.shape.setTransform(102.9,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7D94B").s().p("ABLGCIl8DIIBJmoIk0krIGqg/IC9mBIC+GBIDkAiQAbBZAWBUIifCbIBJGogAFYGeIgzksIDajTIkugrIiGkSIiGESIktArIDaDTIg0EsIENiNIENCNg");
	this.shape_1.setTransform(191.1,121.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7D94B").s().p("AFwJKIl7jIIigBTQgugXg2gkIEEiJIENCNIg0krIDajUIkugsIiFkRIiHERIktAsIDaDUIgyEhQgjgaglgiIAgi2IkVkNIgHgiIGSg6IC+mCIC9GCIGqA+Ik0ErIBIGog");
	this.shape_2.setTransform(111.1,213.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221E1F").p("AP4FcQAAIQkqEAQkDDenLAAQnLAAkCjeQkqkAAAoQQAAkYBQktQBPksCLj6QCQkFCyiUQDCihDJAAQDKAADBChQCyCUCREFQCLD6BPEsQBQEtAAEYg");
	this.shape_3.setTransform(149.2,135.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArNRsQkqkAAAoQQAAkYBQktQBPksCLj6QCQkFCyiUQDCihDJAAQDKAADBChQCyCUCREFQCLD6BPEsQBQEtAAEYQAAIQkqEAQkDDenLAAQnLAAkCjeg");
	this.shape_4.setTransform(149.2,135.9);

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(46.6,107.5,85,151.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlpkLIBUm6IJ/GjIl+Pog");
	mask.setTransform(120.8,134.3);

	// Layer 3
	this.instance = new lib.Path_4();
	this.instance.parent = this;
	this.instance.setTransform(128.7,167.2,1,1,0,0,0,75,105);
	this.instance.alpha = 0.059;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7D94B").s().p("AiZDyIk1CiQAUhDAWhEIELiLIEMCNIgykrIDajVIktgsIgwhgQAZgeAegeIAwBiIGqA+Ik0ErIBIGog");
	this.shape.setTransform(55.8,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7D94B").s().p("ABLGCIl8DIIBJmoIk1krIGrg/IC9mBIC/GBIDiAiQAcBZAWBUIifCbIBJGogAFZGeIg0ksIDajTIktgrIiHkSIiGESIktArIDaDTIgzEsIEMiNIEOCNg");
	this.shape_1.setTransform(144,121.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7D94B").s().p("AFwJKIl7jIIigBTQgugXg1gkIEDiJIENCNIg0krIDajUIktgsIiGkRIiHERIktAsIDaDUIgxEhQglgagkgiIAfi2IkUkNIgHgiIGSg6IC+mCIC+GCIGpA+Ik0ErIBIGog");
	this.shape_2.setTransform(64,213.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221E1F").p("AP4FcQAAIQkqEAQkDDenLAAQnLAAkCjeQkqkAAAoQQAAkYBQktQBPksCLj6QCQkFCyiUQDCihDJAAQDKAADBChQCyCUCREFQCLD6BPEsQBQEtAAEYg");
	this.shape_3.setTransform(102.1,135.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArNRsQkqkAAAoQQAAkYBQktQBPksCLj6QCQkFCyiUQDCihDJAAQDKAADBChQCyCUCREFQCLD6BPEsQBQEtAAEYQAAIQkqEAQkDDenLAAQnLAAkCjeg");
	this.shape_4.setTransform(102.1,135.9);

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(84.5,63.3,72.5,142), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgPoRIFUPRIqJBSg");
	mask.setTransform(86.1,160.5);

	// Layer 3
	this.instance = new lib.Path_5();
	this.instance.parent = this;
	this.instance.setTransform(128.7,167.2,1,1,0,0,0,75,105);
	this.instance.alpha = 0.059;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7D94B").s().p("AiZDyIk1CiQAUhDAWhEIELiLIEMCNIgykrIDajVIktgsIgwhgQAZgeAegeIAwBiIGqA+Ik0ErIBIGog");
	this.shape.setTransform(55.8,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7D94B").s().p("ABLGCIl8DIIBJmoIk1krIGrg/IC9mBIC/GBIDiAiQAcBZAWBUIifCbIBJGogAFZGeIg0ksIDajTIktgrIiHkSIiGESIktArIDaDTIgzEsIEMiNIEOCNg");
	this.shape_1.setTransform(144,121.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7D94B").s().p("AFwJKIl7jIIigBTQgugXg1gkIEDiJIENCNIg0krIDajUIktgsIiGkRIiHERIktAsIDaDUIgxEhQglgagkgiIAfi2IkUkNIgHgiIGSg6IC+mCIC+GCIGpA+Ik0ErIBIGog");
	this.shape_2.setTransform(64,213.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221E1F").p("AP4FcQAAIQkqEAQkDDenLAAQnLAAkCjeQkqkAAAoQQAAkYBQktQBPksCLj6QCQkFCyiUQDCihDJAAQDKAADBChQCyCUCREFQCLD6BPEsQBQEtAAEYg");
	this.shape_3.setTransform(102.1,135.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArNRsQkqkAAAoQQAAkYBQktQBPksCLj6QCQkFCyiUQDCihDJAAQDKAADBChQCyCUCREFQCLD6BPEsQBQEtAAEYQAAIQkqEAQkDDenLAAQnLAAkCjeg");
	this.shape_4.setTransform(102.1,135.9);

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(53.7,107.5,64.9,106), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var canvas = this
		this.close_achievement.addEventListener("click",close_achieve)
		function close_achieve(){
			canvas.parent.gotoAndPlay("closeTheachievement");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.close_achievement = new lib.Symbol54();
	this.close_achievement.parent = this;
	this.close_achievement.setTransform(613.9,396.7,1,1,0,0,0,36.6,36.6);

	this.timeline.addTween(cjs.Tween.get(this.close_achievement).wait(1));

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DD5D4F").s().p("AgSAYQgHgIAAgQQAAgRAHgHQAHgIALAAQAMABAHAHQAHAJAAAPQAAAQgHAIQgHAJgMAAQgLAAgHgJg");
	this.shape_13.setTransform(470.8,617.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DD5D4F").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAGQAFAEAEAJQAEAKADAOQACANAAATIAABGQAAASgCAOQgDAOgEAIQgEAKgFAFQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHACIAIgCQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_14.setTransform(458.7,612.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DD5D4F").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_15.setTransform(442.7,609);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DD5D4F").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgIAAgIgCg");
	this.shape_16.setTransform(429.5,606.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DD5D4F").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFACQAFACAFABQAKgBAEgEQAFgGAAgHIgBgHIgDgHIgFgHIgGgHIgdglIgMgNIgKgRIgGgRQgDgJAAgKQAAgNAFgKQAEgJAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAGIgBAIQAAAHADAHIAKAPIAhAmIAIAMIAKANIAHARQADAJAAAKQAAAMgEALQgEAJgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgCg");
	this.shape_17.setTransform(416.9,609);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DD5D4F").s().p("AgCCPQgIgCgHgHQgFgGgEgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgJAAgHgCg");
	this.shape_18.setTransform(397.3,606.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DD5D4F").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFACQAFACAFABQAKgBAEgEQAFgGAAgHIgBgHIgDgHIgFgHIgGgHIgdglIgMgNIgKgRIgGgRQgDgJAAgKQAAgNAFgKQAEgJAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAGIgBAIQAAAHADAHIAKAPIAhAmIAIAMIAKANIAHARQADAJAAAKQAAAMgEALQgEAJgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgCg");
	this.shape_19.setTransform(384.7,609);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DD5D4F").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_20.setTransform(372.1,608.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DD5D4F").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_21.setTransform(360.6,604.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DD5D4F").s().p("AgcCZIAAjGIgUAAIAAgeIAUAAIAAgQQAAgTAEgMQAEgMAGgGQAHgHAIgCQAJgCALAAIAGAAIAIABIAHACIAHADIAAAdQgHgCgJAAIgIACIgHAEIgEAIIgCANIAAAQIAgAAIAAAeIggAAIAADGg");
	this.shape_22.setTransform(351.6,605.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DD5D4F").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_23.setTransform(331.1,609);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DD5D4F").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJAAQgGABgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgEIALgHIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_24.setTransform(314.9,605.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DD5D4F").s().p("AgUCOIAAj5IguAAIAAgiICFAAIAAAiIguAAIAAD5g");
	this.shape_25.setTransform(299.3,606.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DD5D4F").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgIAAgIgCg");
	this.shape_26.setTransform(493,451.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DD5D4F").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIAEAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_27.setTransform(478.8,454.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DD5D4F").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_28.setTransform(462.7,454.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DD5D4F").s().p("AA+B0IAAitIAAgNIgEgIQgCgDgEgBIgJgCQgGAAgFAFQgHAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgDgBIgJgCQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIAEAZQAFgIAGgFIALgJIAMgEIAOgCQANAAAIAHQAJAGAFANQAFgHAFgFIAMgIIANgEIAMgCQAUAAAKAPQAMAOAAAcIAACug");
	this.shape_29.setTransform(442.4,454.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DD5D4F").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_30.setTransform(422.2,454.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DD5D4F").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_31.setTransform(407.2,454.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DD5D4F").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_32.setTransform(392.4,454.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DD5D4F").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_33.setTransform(380.5,450.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DD5D4F").s().p("AAVCXIAAitQAAgPgFgGQgEgFgJgBQgGAAgGAFQgGAEgFAHIAAC4IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgFIALgGIALgEIALgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_34.setTransform(367.6,450.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DD5D4F").s().p("AgqBeQgQgYAAgxIAAgrQABgVADgPQADgQAFgLQAFgKAHgHQAHgFAHgEQAHgDAHgBIAMgBQALAAAKAEQAJACAIAHQAGAGAFAKQADAJAAAMIgBAPIgBALIgiAAIAAgJQAAgQgEgKQgEgKgKAAQgEAAgEACQgDADgCAFQgEAHgBAJIgBAZIAABAIABAZQABALACAGQADAGAEAEQAEADAFAAIAGgCQADgCADgDIADgKIACgPIAAgHIAkAAIAAAJQAAAggOAPQgPAPgcAAQgcAAgPgXg");
	this.shape_35.setTransform(352.1,454.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DD5D4F").s().p("AAiCOIgIgzIgzAAIgHAzIgsAAIA0kbIAxAAIA0EbgAAVA7IgUiNIgBAAIgUCNIApAAg");
	this.shape_36.setTransform(336.7,451.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DD5D4F").s().p("AAdByIgXh+IgGgjIAAAAIgFAjIgVB+IgpAAIgljjIAoAAIAQB6IAEAvIABAAIAFgvIAWh6IAjAAIAWB6IAGAvIACAAIACgvIAPh6IAnAAIglDjg");
	this.shape_37.setTransform(310.3,454.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DD5D4F").s().p("AgaBwQgLgGgIgMQgIgLgEgSQgEgTAAgZIAAgrQAAgVAEgPQADgQAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFAOQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAXIABAaQABAKADAGQACAGAFADQAFACAGABIAHgCQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_38.setTransform(291.6,454.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DD5D4F").s().p("AAiCOIhDi4IgCAAIACAQIABAVIACAaIAAAlIAABUIgnAAIAAkbIAjAAIBFC9IABAAIgCgPIgBgSIgBgXIgBgdIAAhoIAnAAIAAEbg");
	this.shape_39.setTransform(274.6,451.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#595A5C").s().p("AgSAYQgHgIAAgQQAAgRAHgHQAHgIALAAQAMABAIAHQAGAJAAAPQAAAPgGAJQgIAJgMAAQgLAAgHgJg");
	this.shape_40.setTransform(547.3,672.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#595A5C").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAGgFAFgCIALgDIAIAAIALABIAJAFIAIAGIAHAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgEACgCAEQgDAFgCAIIgBAVIAABWIABAVQACAIADAFQACAEAEACIAIACIAIgBIAGgEIAEgFIADgHIAAiIQgDgHgFgFQgGgFgHAAg");
	this.shape_41.setTransform(534.8,660.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#595A5C").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIAEAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_42.setTransform(518.4,663.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#595A5C").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAHAAAJIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgKAIgGQAIgHALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_43.setTransform(501.6,663.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#595A5C").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_44.setTransform(490.3,660.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#595A5C").s().p("AgWBzQgKgDgIgGQgHgGgEgKQgFgJAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgHIgFgHIgGgHIgdglIgMgNIgKgQIgGgRQgDgKAAgJQAAgOAFgKQAEgJAIgHQAHgGALgEQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgIgCgGQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAHIgBAHQAAAHADAHIAKAPIAhAmIAIAMIAKANIAHASQADAIAAAKQAAANgEAKQgEAJgHAHQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_45.setTransform(479.2,663.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#595A5C").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_46.setTransform(468.1,659.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#595A5C").s().p("AgVCXQgKgDgHgEQgIgFgFgKQgEgIABgOIAAgGIABgHIAfAAQgBAPAGAGQAFAGAMAAIAHgBQAFgBAEgEQACgEACgHQADgGAAgLIAAgkQgGAIgJAEQgIAGgNAAIgJgBIgLgEQgFgCgGgFQgFgGgEgJQgEgJgDgOQgCgOAAgSIAAg8QAAgTACgNQADgMAEgJQAEgJAFgFQAGgFAFgCIAMgEIAJgBQAIAAAFACQAHACAFAFIAIAIIAFAJIAEgYIAhAAIAADbQAAATgDAQQgFAPgHALQgIALgMAFQgMAHgQgBQgLAAgKgBgAgIh3QgEACgCAEQgDAEgCAJIgBAUIAABLIABAVQACAHADAFQACAFAEACIAIABIAHgBIAHgEIAEgFIADgHIAAh8QgDgGgFgFQgFgFgIAAg");
	this.shape_47.setTransform(447.9,667.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#595A5C").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIAEAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_48.setTransform(431.5,663.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#595A5C").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_49.setTransform(418.9,659.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#595A5C").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_50.setTransform(406.9,667.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#595A5C").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_51.setTransform(395.3,660.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#595A5C").s().p("AgcCZIAAjGIgUAAIAAgeIAUAAIAAgQQAAgTAEgMQAEgMAGgGQAHgHAIgCQAJgDALABIAGAAIAIABIAHACIAHADIAAAdQgHgCgJAAIgIACIgHAEIgEAIIgCANIAAAQIAgAAIAAAeIggAAIAADGg");
	this.shape_52.setTransform(386.4,660);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#595A5C").s().p("AAdByIgXh+IgGgjIAAAAIgFAjIgVB+IgpAAIgljjIAoAAIAQB6IAEAvIABAAIAFgvIAWh6IAjAAIAWB6IAGAvIACAAIACgvIAPh6IAnAAIglDjg");
	this.shape_53.setTransform(362.4,663.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#595A5C").s().p("AgaBvQgLgFgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgQQADgPAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAAOIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFACAGAAIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_54.setTransform(343.7,663.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#595A5C").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_55.setTransform(327.6,663.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#595A5C").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAHAAAJIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgKAIgGQAIgHALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_56.setTransform(303.6,663.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#595A5C").s().p("AgWCYIgLgEQgFgCgGgGQgFgFgEgJQgEgJgDgOQgCgOAAgTIAAhIQAAgTACgNQADgNAEgJQAFgJAGgFQAGgFAFgCIALgDIAIAAIAMABIAIAFIAJAGIAGAHIgCgdIAAg9IAqAAIAAEtIghAAIgEgVIgGAIIgJAIIgLAFQgFACgIAAgAgIgwQgDACgDAEQgDAFgBAIIgCAVIAABWIACAVQABAIADAFQADAEADACIAIACIAIgBIAGgEIAEgFIADgHIAAiIQgDgHgFgFQgFgFgIAAg");
	this.shape_57.setTransform(280.9,660.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#595A5C").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_58.setTransform(264.5,663.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#595A5C").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_59.setTransform(251.8,659.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#595A5C").s().p("Ag1COIAAkbIBrAAIAAAiIhAAAIAABVIAyAAIAAAhIgyAAIAACDg");
	this.shape_60.setTransform(241.5,661.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ah+CAQg1g1AAhLQAAhKA1g1QA1g1BJAAQBLAAA0A1QA1A1AABKQAABLg1A1Qg0A1hLAAQhJAAg1g1g");
	this.shape_61.setTransform(384.5,528.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUg");
	this.shape_62.setTransform(405.4,508.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgvAwQgTgUgBgcQABgbATgUQAUgUAbAAQAcAAAUAUQATAUAAAbQAAAcgTAUQgUAUgcAAQgbAAgUgUg");
	this.shape_63.setTransform(384.5,501.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUg");
	this.shape_64.setTransform(363.6,508.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DD5D4F").s().p("AkXEYQh0h0AAikQAAijB0h0QB0h0CjAAQCkAAB0B0QB0B0AACjQAACkh0B0Qh0B0ikAAQijAAh0h0g");
	this.shape_65.setTransform(384,519.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("Ak6E7QiDiCAAi5QAAi4CDiCQCCiDC4AAQC5AACCCDQCDCCAAC4QAAC5iDCCQiCCDi5AAQi4AAiCiDg");
	this.shape_66.setTransform(384,519.7);

	this.instance = new lib.Path_12();
	this.instance.parent = this;
	this.instance.setTransform(408.2,404.6,1,1,0,0,0,15.6,16.6);
	this.instance.alpha = 0.289;

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F2F2F2").s().p("AgcgEIAgggIAZBJg");
	this.shape_67.setTransform(395.2,376.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#AF4C45").s().p("Ai5CqICYiRIA6AqIgZhJIC1irQAEAeAAAZQABB7hZBZQhYBZh8gBQgiABgkgJg");
	this.shape_68.setTransform(395.7,373.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F2F2F2").s().p("AjsDRIAvgtQAjAJAiAAQB9AABXhZQBZhXAAh9QAAgZgFgeIAvgtQAOAxAAAzQAACThoBpQhqBpiTAAQg7AAg5gUg");
	this.shape_69.setTransform(396.1,373.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AF4C45").s().p("AkZDyIAogmQA5ATA8AAQCTAABphpQBohoAAiUQAAgygOgyIAogmQAYBCAABIQAACoh3B3Qh3B4ioAAQhSAAhLgfg");
	this.shape_70.setTransform(396.6,374.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AhWAzIiMhlICtAAIA1ilIA2ClICtAAIiMBlIAdBbIgiAgIhSg8IiMBmg");
	this.shape_71.setTransform(384.1,358.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#DD5D4F").s().p("AjoDBQhChTAAhqQAAh8BYhYQBZhYB8AAQBtgBBVBIQBTBFATBqIi0CqIgehaICNhlIiuAAIg1imIg1CmIiuAAICNBlIg2ClICMhmIBSA8IiXCRQhlgYhBhRg");
	this.shape_72.setTransform(383.8,360.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AkaDbQhEhdAAh0QAAiUBphoQBphpCTAAQB5AABgBJQBeBIAhBxIgvAtQgUhqhThGQhUhHhuAAQh8AAhYBYQhZBZAAB8QAABqBDBTQBBBQBlAYIgvAtQhrglhDhcg");
	this.shape_73.setTransform(383.3,359.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#DD5D4F").s().p("AlED0QhHhnAAh+QAAioB4h3QB3h3CoAAQCDAABqBMQBoBKArB3IgoAnQghhxhehIQhghJh5AAQiTAAhpBoQhpBpAACTQAAB1BEBdQBDBcBrAlIgpAmQhwgvhEhlg");
	this.shape_74.setTransform(382.8,359.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#69BAA6").s().p("AibgOQBKgPBBgnQA+gnAvg6IA/CCIh9AjIiECmg");
	this.shape_75.setTransform(408.1,404.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#69BAA6").s().p("AgeAAIh8gjIA+iCQAuA6A/AnQBAAnBKAPIg1C0g");
	this.shape_76.setTransform(360,404.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAAByIiMBmIA2ilIiMhlICtAAIA1ilIA2ClICtAAIiMBlIA2Clg");
	this.shape_77.setTransform(384.1,358.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#DD5D4F").s().p("AjUDVQhZhYAAh9QAAh8BZhYQBYhZB8AAQB9AABYBZQBZBYAAB8QAAB9hZBYQhYBZh9AAQh8AAhYhZg");
	this.shape_78.setTransform(384,360.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("Aj8D9QhphpAAiUQAAiTBphpQBphpCTAAQCUAABpBpQBpBpAACTQAACUhpBpQhpBpiUAAQiTAAhphpg");
	this.shape_79.setTransform(384,360.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#DD5D4F").s().p("AkfEgQh4h3AAipQAAioB4h3QB3h4CoAAQCpAAB3B4QB4B3AACoQAACph4B3Qh3B4ipAAQioAAh3h4g");
	this.shape_80.setTransform(384,360.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(6).p("Afbz8I4AAAQAehOAAhVQAAjBiIiIQiIiIjBAAQi/AAiICIQiICIAADBQAABUAdBPI5QAAQjXAAiYCYQiYCYAADYMAAAAheQAADXCYCYQCYCYDXAAMA+1AAAQDXAACYiYQCYiYAAjXMAAAgheQAAjXiYiZQiYiYjXAAg");
	this.shape_81.setTransform(380,520.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F9DD89").s().p("A/adxQjXAAiYiYQiYiYAAjXMAAAgheQAAjYCYiYQCYiYDXAAIZQAAQgdhPAAhUQAAjBCIiIQCIiIC/AAQDBAACICIQCICIAADBQAABVgeBOIYAAAQDXAACYCYQCYCZAADXMAAAAheQAADXiYCYQiYCYjXAAg");
	this.shape_82.setTransform(380,520.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.instance},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(376.2,667,1,1,0,0,0,376.2,667);
	this.instance_1.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,752.6,1334), null);


(lib.CompoundPath_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeCAQgNgGgJgOQgJgNgEgVQgFgVAAgdIAAgxQAAgZAEgRQAEgSAGgMQAGgMAIgHQAHgHAJgEQAIgEAJgBIAOgBQANAAAMAEQAMAEAJAJQAJAKAFAPQAGAQAAAYIgBAQIgBAQIgCAPIgCANIhWAAIAAAbIABAdQABALADAIQADAHAGADQAFADAIAAIAIgCQAEgCAEgEIAEgLIACgRIAAgIIApAAIAAAKQAAAlgSARQgSARghAAQgRAAgNgGgAgIhfQgEADgDAHQgDAHgCALIgBAdIAAAQIAvAAIAAgGIABgHIAAgIIAAgGQAAgagGgLQgHgMgMAAQgFAAgFADg");
	this.shape_5.setTransform(415.9,1093);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7B1QgMgRAAggIAAjHIAwAAIAADEQABARAFAGQAFAHALAAQAGAAAGgEQAHgEAGgHIAAjTIAwAAIAAEEIglAAIgFgbIAAAAQgGAJgGAGQgHAFgGAEIgNAFIgPABQgXAAgNgPg");
	this.shape_6.setTransform(397.3,1093.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYCFIAAjGQAAgSgGgGQgEgHgLAAQgGAAgIAEQgGAFgGAJIAADTIgwAAIAAkFIAlAAIAFAcQAFgJAGgGIAOgKIANgFIAPgCQAXAAANARQAMAQAAAgIAADIg");
	this.shape_7.setTransform(377.9,1092.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYC1IAAkFIAvAAIAAEFgAgUh+QgIgIAAgPQAAgJACgGQACgGAEgDQADgEAGgBIALgCQAOAAAIAHQAHAIAAAQQAAAOgHAJQgIAIgOAAQgNAAgHgIg");
	this.shape_8.setTransform(363.4,1088);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCCkQgKgDgHgHQgHgIgEgNQgFgNAAgWIAAihIgUAAIAAgiIAZAAIAJhFIAiAAIAABFIApAAIAAAiIgpAAIAAClIABAPIAEAIIAHADIAIABIANgBIAKgGIAAAbIgJAJIgKAFIgLADIgKAAQgKAAgIgCg");
	this.shape_9.setTransform(352.1,1089.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAYCFIAAjGQAAgSgGgGQgEgHgLAAQgHAAgGAEQgIAFgFAJIAADTIgwAAIAAkFIAlAAIAFAcQAFgJAGgGIAOgKIANgFIAPgCQAXAAANARQAMAQAAAgIAADIg");
	this.shape_10.setTransform(335.8,1092.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQCFQgIgCgIgEQgJgEgGgIQgIgIgFgMQgFgNgDgTQgEgSAAgaIAAgoQAAgaAEgSQADgSAFgNQAFgMAIgHQAHgIAIgEQAIgEAJgBIAPgBIAQABQAJABAIAEQAIAEAIAHQAGAHAGANQAFAMADATQADASAAAaIAAAoQAAAZgDATQgDASgFANQgGANgHAIQgIAHgHAFQgJAEgIACIgQABgAgKheQgFADgDAIQgDAHgBANIgBAfIAABAIABAfQABAMADAIQADAHAFAEQAFADAFAAQAHAAAFgDQAEgEADgHQACgIACgMIABgfIAAhAIgBgfQgCgNgCgHQgDgIgEgDQgFgEgHAAQgFAAgFAEg");
	this.shape_11.setTransform(317.1,1093);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgwBrQgSgbAAg4IAAgxQAAgZADgRQAEgSAGgMQAGgMAIgHQAIgHAIgEQAIgEAIgBIAOgBQANAAALAEQALADAIAHQAIAHAEALQAFALAAAPIgBAPIgDANIgmAAIAAgJQAAgUgEgLQgGgLgKAAQgFAAgEADQgEADgDAGQgDAHgCALIgCAcIAABKIACAdQABAMADAIQADAHAFAEQAEADAGAAIAIgCIAFgGIAFgLIABgRIAAgIIAqAAIAAAKQAAAlgRARQgRARggAAQghAAgQgbg");
	this.shape_12.setTransform(300,1093);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZCuIgMgEQgHgDgGgGQgGgGgFgLQgEgKgEgQQgCgQAAgWIAAhSQgBgWAEgPQADgQAFgKQAFgKAGgFQAHgGAHgDIALgDIAKAAIAOACIAKAFIAJAHIAHAIIAAgBIgBghIAAhGIAwAAIAAFaIgmAAIgFgZIgHAKIgKAJIgMAHQgHACgJAAgAgIg3QgFACgDAFQgEAFgBAJIgCAYIAABkIACAYQABAJAEAFQADAFAFADIAJABIAIgBIAHgEIAFgGIAEgHIAAidQgEgIgGgGQgGgFgJAAg");
	this.shape_13.setTransform(273.5,1088.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAYCFIAAjGQAAgSgGgGQgEgHgLAAQgHAAgGAEQgIAFgFAJIAADTIgwAAIAAkFIAlAAIAFAcQAFgJAHgGIANgKIAOgFIAOgCQAXAAANARQAMAQAAAgIAADIg");
	this.shape_14.setTransform(254.7,1092.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoCBQgKgFgGgIQgHgIgDgMQgDgLAAgOQAAgQAEgNQAEgMAHgKQAIgKALgJQAMgHAPgHIAPgIIAQgGIAAgjIAAgOIgDgLQgCgFgFgDQgEgDgIAAIgJACQgFACgDAFQgEAEgCAIQgCAHAAAMIAAALIglAAIgDgNIgBgNQAAgPAGgLQAFgLAJgIQAJgHAMgEQANgEAOAAQATAAANAEQANAFAIAIQAIAJADANQADANAAARIAADDIgkAAIgDgWQgIALgNAHQgMAHgRAAQgMAAgJgFgAAPAIIgLAFIgJAIIgIALIgHAOQgCAIAAAKQAAAPAGAJQAGAJAMAAQAGAAAGgDIAJgIIAAhSg");
	this.shape_15.setTransform(235.5,1093);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhHCvIAAlaIAlAAIAEAcIAIgLIAKgKIANgHQAIgDAJAAIAKABIALAEQAGADAGAGQAGAGAFAKQAFALADAPQADAQAAAWIAABQQAAAVgDAQQgEAPgEALQgFAKgGAGQgGAGgHADIgLAEIgLABQgPAAgJgGQgKgGgHgIIABAgIAABGgAgOiFQgGAFgEAHIAACeIAEAHIAFAGIAHAEIAIACIAKgCQADgCAEgFQADgFACgKIACgYIAAhjIgCgYQgCgJgDgGQgDgFgEgCIgKgCQgIAAgGAGg");
	this.shape_16.setTransform(210,1097.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoCBQgKgFgGgIQgHgIgDgMQgDgLAAgOQAAgQAEgNQAEgMAHgKQAIgKALgJQAMgHAPgHIAPgIIAQgGIAAgjIAAgOIgDgLQgCgFgFgDQgEgDgIAAIgJACQgFACgDAFQgEAEgCAIQgCAHAAAMIAAALIglAAIgDgNIgBgNQAAgPAGgLQAFgLAJgIQAJgHAMgEQANgEAOAAQATAAANAEQANAFAIAIQAIAJADANQADANAAARIAADDIgkAAIgDgWQgIALgNAHQgMAHgRAAQgMAAgJgFgAAPAIIgLAFIgJAIIgIALIgHAOQgCAIAAAKQAAAPAGAJQAGAJAMAAQAGAAAGgDIAJgIIAAhSg");
	this.shape_17.setTransform(190.8,1093);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXCjIAAkeIg1AAIAAgnICZAAIAAAnIg1AAIAAEeg");
	this.shape_18.setTransform(174.5,1089.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(30));

	// Layer 5
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(528,1071.6,1,1,0,0,0,67.8,67.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:524.6,y:1068.2},0).wait(1).to({x:521.3,y:1064.9},0).wait(1).to({x:518,y:1061.6},0).wait(1).to({x:514.6,y:1058.2},0).wait(1).to({x:511.3,y:1054.9},0).wait(1).to({x:508,y:1051.6},0).wait(1).to({x:504.6,y:1048.2},0).wait(1).to({x:501.3,y:1044.9},0).wait(1).to({x:498,y:1041.6},0).wait(1).to({x:494.6,y:1038.2},0).wait(1).to({x:491.3,y:1034.9},0).wait(1).to({x:488,y:1031.6},0).wait(1).to({x:484.6,y:1028.2},0).wait(1).to({x:481.3,y:1024.9},0).wait(1).to({x:478,y:1021.6},0).wait(1).to({x:481.5,y:1025.1},0).wait(1).to({x:485.1,y:1028.7},0).wait(1).to({x:488.7,y:1032.3},0).wait(1).to({x:492.2,y:1035.8},0).wait(1).to({x:495.8,y:1039.4},0).wait(1).to({x:499.4,y:1043},0).wait(1).to({x:503,y:1046.6},0).wait(1).to({x:506.5,y:1050.1},0).wait(1).to({x:510.1,y:1053.7},0).wait(1).to({x:513.7,y:1057.3},0).wait(1).to({x:517.2,y:1060.8},0).wait(1).to({x:520.8,y:1064.4},0).wait(1).to({x:524.4,y:1068},0).wait(1).to({x:528,y:1071.6},0).wait(1));

	// Isolation Mode
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAaQgIgJAAgQQAAgSAIgIQAHgIAMAAQANgBAIAKQAGAIAAARQAAAQgGAIQgIAJgNAAQgMABgHgJg");
	this.shape_19.setTransform(360.7,618.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXCgIgLgDQgHgDgFgGQgGgFgEgKQgFgKgCgOQgDgPAAgUIAAhMQAAgVADgOQADgOAFgJQAEgJAGgFQAGgFAHgDIAKgDIAJAAIAMABIAKAFIAIAHIAHAHIgCgfIAAhAIAtAAIAAE+IgjAAIgDgWIgHAJIgJAIIgMAGQgHACgHAAgAgIgzQgEABgDAFQgDAFgCAJIgBAWIAABbIABAXQACAIADAFQADAFAFACIAIACIAHgCIAGgEIAFgFIADgHIAAiQQgDgIgFgFQgGgFgIAAg");
	this.shape_20.setTransform(347.4,606.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag2B7IAAjxIAgAAIAEAYQAIgNAKgIQAIgGAKgBQATAAAJANQAJALAAAYIAAAHIgBAIIgCAJIgDAIIgfAAIAAgWIAAgMIgDgHIgEgFIgEgBQgGAAgDADQgEAEgDAGIAADHg");
	this.shape_21.setTransform(333,609.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_22.setTransform(316.4,609.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAfB5IgZiGIgFglIgBAAIgFAlIgWCGIgrAAIgpjxIArAAIARCCIAEAxIACAAIAFgxIAYiCIAkAAIAYCCIAGAxIACAAIADgxIAPiCIApAAIgmDxg");
	this.shape_23.setTransform(297.2,610);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag2B7IAAjxIAgAAIAEAYQAIgNAKgIQAIgGAKgBQATAAAJANQAJALAAAYIAAAHIgBAIIgCAJIgDAIIgeAAIAAgWIgBgMIgDgHIgEgFIgEgBQgGAAgDADQgEAEgDAGIAADHg");
	this.shape_24.setTransform(279.4,609.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgHgEgHgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAHAEQAIADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgIAEgHACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAGAAAFgDQAEgEACgHQADgHABgLIACgdIAAg6IgCgdQgBgMgDgHQgCgHgEgDQgFgDgGAAQgEAAgFADg");
	this.shape_25.setTransform(263.3,609.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgdChIAAjRIgVAAIAAggIAVAAIAAgRQgBgUAEgMQAFgNAHgHQAGgHAKgCQAJgCALAAIAHAAIAIABIAHACIAHACIAAAgQgHgCgJAAIgJABIgGAFIgFAJIgCANIAAARIAiAAIAAAgIgiAAIAADRg");
	this.shape_26.setTransform(250.1,605.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgHgEgHgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAHAEQAIADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgIAEgHACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAGAAAFgDQAEgEACgHQADgHABgLIACgdIAAg6IgCgdQgBgMgDgHQgCgHgEgDQgFgDgGAAQgEAAgFADg");
	this.shape_27.setTransform(228.2,609.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWCfQgKgCgJgFQgHgFgFgKQgEgJgBgOIABgGIABgIIAgAAQAAAPAGAHQAGAGAMAAIAJgBQAEgCAEgDQACgEADgIQACgHAAgLIAAgmQgGAIgJAGQgJAFgOAAIgJgBIgLgDQgHgDgFgGQgFgGgFgJQgEgKgDgOQgDgPAAgTIAAhAQAAgUADgOQADgNAEgKQAEgJAHgFQAFgGAGgCIALgEIAKAAQAJAAAGACQAHACAEAEIAJAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgJALgMAGQgNAGgRAAQgMAAgKgCgAgIh+QgEABgDAFQgDAFgCAJIgBAWIAABPIABAVQACAJADAFQADAFAFACIAIACIAIgCIAFgEIAFgFIADgHIAAiDQgDgIgGgFQgFgFgIAAg");
	this.shape_28.setTransform(210.8,613.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgHgEgHgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgIAEgHACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgEAAgFADg");
	this.shape_29.setTransform(186.5,609.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGAEIAIABIALgCIAKgFIAAAZIgIAIIgKAEIgJADIgKABQgJAAgIgDg");
	this.shape_30.setTransform(172.3,607);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag/CcIAAgcQAKACAJgCQAIgCAHgGQAFgGAEgIQADgKABgNIg5jyIAtAAIAaCGIAFAtIACAAIAFgtIAViGIArAAIgyD6QgEARgFANQgFAOgIAIQgHAIgKAFQgLAEgOAAQgLAAgMgEg");
	this.shape_31.setTransform(607.9,556.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_32.setTransform(591.4,552.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAgB5IgaiGIgGglIAAAAIgFAlIgXCGIgrAAIgnjxIAqAAIASCCIAEAxIABAAIAGgxIAWiCIAlAAIAYCCIAHAxIABAAIADgxIAPiCIAqAAIgoDxg");
	this.shape_33.setTransform(572.2,552.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag/CcIAAgcQAKACAJgCQAIgCAGgGQAGgGAEgIQADgKABgNIg5jyIAtAAIAZCGIAGAtIACAAIAFgtIAViGIArAAIgzD6QgDARgFANQgFAOgIAIQgHAIgKAFQgLAEgOAAQgLAAgMgEg");
	this.shape_34.setTransform(544.8,556.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_35.setTransform(532.5,548.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAWB7IAAi4QAAgQgFgFQgEgHgKAAQgGAAgHAEQgGAFgFAIIAADDIgtAAIAAjxIAjAAIADAaQAGgJAGgFIAMgJIANgFIANgCQAWAAALAPQALAPAAAeIAAC5g");
	this.shape_36.setTransform(519,552.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgIgEgGgIQgGgHgFgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAHgGQAGgHAIgEQAHgDAIgBIAPgCIAPABQAHABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgHAEgIACIgOABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAFADAFAAQAFAAAFgDQAEgEADgHQACgHABgLIABgdIAAg6IgBgdQgBgMgCgHQgDgHgEgDQgFgDgFAAQgFAAgFADg");
	this.shape_37.setTransform(501.7,552.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgcB2QgMgGgIgMQgIgMgFgTQgDgUgBgbIAAgtQABgXADgQQADgQAGgMQAFgLAIgGQAHgHAIgDQAIgEAHgBIAOgBQAMAAAKAEQALAEAJAIQAJAJAFAPQAEAOABAWIgBAPIgCAPIgBAOIgCAMIhQAAIAAAYIABAbQABALAEAGQADAHAEADQAGADAGAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgNgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQAAgYgFgLQgGgKgLAAQgEAAgFADg");
	this.shape_38.setTransform(477.7,552.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_39.setTransform(460.5,548.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIACIALgCIAKgEIAAAYIgIAHIgKAFIgJADIgKABQgJAAgIgDg");
	this.shape_40.setTransform(445.8,549.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIACgQIADgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAGAAQALAAAEgGQAFgGgBgHIgBgHIgCgHIgFgIIgGgIIgggmIgMgPIgKgRIgIgSQgDgKAAgKQABgOAEgLQAFgKAIgHQAIgHALgDQALgEALAAQANAAALAEQAKADAIAGQAHAGAEAKQAFAJgBANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgHAAQgEAAgEACIgHAFIgDAGIAAAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgNAAgLgDg");
	this.shape_41.setTransform(424.9,552.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgOQAAgHACgGQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAIgNgBQgLABgIgIg");
	this.shape_42.setTransform(413,548.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIABgQIAEgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAHAAQAKAAAEgGQAEgGAAgHIAAgHIgDgHIgFgIIgHgIIgfgmIgMgPIgLgRIgHgSQgCgKgBgKQAAgOAGgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAAKAEQALADAHAGQAIAGAEAKQAEAJAAANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgGAAQgGAAgDACIgHAFIgCAGIgBAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgMAAgMgDg");
	this.shape_43.setTransform(393.5,552.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgXCgIgLgDQgHgDgFgGQgGgFgEgKQgFgKgCgOQgDgPAAgUIAAhMQAAgVADgOQADgOAFgJQAEgJAHgFQAFgFAHgDIAKgDIAJAAIAMABIAKAFIAJAHIAGAHIgCgfIAAhAIAtAAIAAE+IgjAAIgDgWIgHAJIgKAIIgLAGQgGACgIAAgAgIgzQgEABgDAFQgDAFgCAJIgBAWIAABbIABAXQACAIADAFQADAFAFACIAIACIAIgCIAFgEIAFgFIADgHIAAiQQgDgIgGgFQgFgFgIAAg");
	this.shape_44.setTransform(377.2,549);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag1BrQgNgOAAgeIAAi4IAtAAIAAC1QAAAQAFAFQAFAHAKAAQAFAAAGgEQAHgDAFgIIAAjCIAsAAIAADxIgiAAIgEgaQgFAIgGAFQgGAGgHADIgLAFIgOACQgWgBgKgPg");
	this.shape_45.setTransform(359.9,552.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgHgEgHgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgIAEgHACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgEAAgFADg");
	this.shape_46.setTransform(342.6,552.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_47.setTransform(329.7,548.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgtBjQgQgZAAg0IAAgtQAAgXAEgQQADgQAGgMQAFgLAHgGQAHgHAIgDQAHgEAIgBIAMgBQANAAAKAEQAKADAHAHQAIAGAEAKQAEAKAAAOIgBAOIgCAMIgkAAIAAgIQAAgTgEgKQgEgKgKAAQgFAAgEADQgEACgCAGQgDAGgBALIgCAaIAABDIABAbQABALADAHQADAHAEADQAEAEAGAAIAGgCQAEgCACgEIAEgKIABgQIAAgHIAnAAIAAAJQAAAigPAQQgQAQgeAAQgeAAgQgZg");
	this.shape_48.setTransform(317.6,552.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgXCgIgMgDQgFgDgGgGQgFgFgFgKQgEgKgDgOQgDgPAAgUIAAhMQAAgVADgOQADgOAFgJQAFgJAFgFQAHgFAGgDIALgDIAJAAIALABIAKAFIAIAHIAHAHIgBgfIAAhAIAsAAIAAE+IgjAAIgEgWIgGAJIgJAIIgNAGQgGACgHAAgAgIgzQgEABgDAFQgDAFgCAJIgBAWIAABbIABAXQACAIADAFQADAFAEACIAIACIAIgCIAHgEIAEgFIAEgHIAAiQQgEgIgFgFQgGgFgIAAg");
	this.shape_49.setTransform(293.2,549);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAWB7IAAi4QAAgQgFgFQgEgHgKAAQgGAAgHAEQgGAFgFAIIAADDIgtAAIAAjxIAjAAIADAaQAGgJAGgFIAMgJIANgFIAOgCQAVAAALAPQAMAPAAAeIAAC5g");
	this.shape_50.setTransform(275.9,552.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_51.setTransform(258.1,552.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIACgQIADgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAGAAQALAAAEgGQAFgGgBgHIgBgHIgCgHIgFgIIgGgIIgggmIgMgPIgKgRIgIgSQgDgKAAgKQABgOAEgLQAFgKAIgHQAIgHALgDQALgEALAAQANAAALAEQAKADAIAGQAHAGAEAKQAFAJgBANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgHAAQgEAAgEACIgHAFIgCAGIgBAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgNAAgLgDg");
	this.shape_52.setTransform(235.9,552.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIACIALgCIAKgEIAAAYIgIAHIgKAFIgJADIgKABQgJAAgIgDg");
	this.shape_53.setTransform(222.7,549.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgXB5QgLgDgIgGQgIgGgEgKQgFgKAAgPIABgQIAEgLIAfAAIABAWQABAIADAGQADAFAGACQAEADAHAAQAKAAAEgGQAEgGABgHIgBgHIgDgHIgFgIIgHgIIgfgmIgMgPIgLgRIgHgSQgCgKgBgKQAAgOAGgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAAKAEQALADAHAGQAIAGAEAKQAEAJAAANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgGAAQgGAAgDACIgHAFIgCAGIgBAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgMAAgLgDg");
	this.shape_54.setTransform(209.5,552.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgOQAAgHACgGQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAIgNgBQgLABgIgIg");
	this.shape_55.setTransform(197.6,548.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("ABCB7IAAi4IgBgMIgEgJQgDgEgDgCIgKgBQgFAAgHAEQgGAFgFAIIAAADIAAAEIAAC8IgrAAIAAi4IgCgMIgEgJQgCgEgEgCIgJgBQgGAAgGAEQgGAFgFAIIAADDIgsAAIAAjxIAiAAIADAaQAGgJAGgFIANgJIAMgFIAOgCQAOABAJAGQAKAIAFANQAFgIAGgFIANgJIAMgEIANgCQAWAAALAPQALAPAAAeIAAC5g");
	this.shape_56.setTransform(179.6,552.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag/CcIAAgcQAKACAJgCQAIgCAHgGQAFgGAEgIQADgKABgNIg5jyIAtAAIAaCGIAFAtIACAAIAFgtIAViGIArAAIgyD6QgEASgFAMQgFAOgIAIQgGAIgLAFQgKAEgOAAQgMAAgMgEg");
	this.shape_57.setTransform(603.1,499.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_58.setTransform(586.5,495.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAgB5IgaiFIgGglIAAAAIgFAlIgXCFIgrAAIgnjxIAqAAIASCCIADAxIACAAIAGgxIAWiCIAlAAIAYCCIAGAxIACAAIADgxIAPiCIAqAAIgoDxg");
	this.shape_59.setTransform(567.4,495.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_60.setTransform(546.8,495.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAgB5IgaiFIgGglIAAAAIgFAlIgXCFIgrAAIgnjxIAqAAIASCCIADAxIACAAIAGgxIAWiCIAlAAIAYCCIAHAxIABAAIADgxIAPiCIAqAAIgoDxg");
	this.shape_61.setTransform(520,495.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgOB7QgJgCgHgDQgIgEgGgIQgGgHgGgLQgEgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAHgGQAGgHAIgEQAHgDAIgBIAPgCIAOABQAIABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgIAEgHACIgOABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAEADAGAAQAGAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgGAAQgGAAgEADg");
	this.shape_62.setTransform(500,495.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_63.setTransform(487,491.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAACfIgLgGIgJgIIgHgJIgEAWIgjAAIAAk+IAtAAIAABAIgCAgIAHgIIAJgHIAKgFIAOgBIAJAAIAKAEQAGADAFAFQAGAGAEAJQAEAKADAOQADAPAAATIAABKQAAAUgDAPQgDAOgEAKQgEAKgGAFQgGAGgFADIgMADIgJABQgJAAgGgCgAgNgwQgFAFgDAGIAACSIADAHIAFAFIAGAEIAHACIAJgCQAEgCADgFQADgFABgIIACgXIAAhbIgCgWQgBgJgDgFQgDgFgEgBIgJgCQgHAAgGAFg");
	this.shape_64.setTransform(474.1,491.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgHgEgHgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgIAEgHACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAGAAAFgDQAEgEACgHQADgHABgLIACgdIAAg6IgCgdQgBgMgDgHQgCgHgEgDQgFgDgGAAQgEAAgFADg");
	this.shape_65.setTransform(449.2,495.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgCCYQgJgDgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgCg");
	this.shape_66.setTransform(435,492.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("Ag/CcIAAgcQAKACAJgCQAIgCAGgGQAGgGAEgIQADgKABgNIg6jyIAuAAIAZCGIAGAtIACAAIAFgtIAViGIArAAIgzD6QgDASgFAMQgFAOgIAIQgHAIgKAFQgKAEgPAAQgLAAgMgEg");
	this.shape_67.setTransform(413.3,499.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgWCfQgLgCgIgFQgHgFgFgKQgFgJABgOIAAgGIACgIIAfAAQAAAPAGAHQAFAGANAAIAJgBQAEgCAEgDQADgEACgIQACgHAAgLIAAgmQgGAIgJAGQgJAFgOAAIgJgBIgMgDQgFgDgGgGQgFgGgFgJQgEgKgDgOQgDgPAAgTIAAhAQAAgUADgOQADgNAEgKQAFgJAGgFQAFgGAGgCIALgEIALAAQAIAAAGACQAGACAGAEIAIAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgIALgNAGQgNAGgRAAQgLAAgLgCgAgIh+QgEABgDAFQgDAFgBAJIgCAWIAABPIACAVQABAJADAFQADAFAEACIAIACIAJgCIAGgEIAEgFIAEgHIAAiDQgEgIgFgFQgGgFgIAAg");
	this.shape_68.setTransform(396.5,499.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Ag2B6IAAjwIAgAAIAEAYQAIgNAJgIQAJgHAKAAQATABAJAMQAJALAAAXIAAAIIgCAIIgCAJIgCAIIgeAAIAAgWIgCgMIgCgIIgEgEIgFgBQgEAAgEADQgEAEgEAGIAADGg");
	this.shape_69.setTransform(382.1,495.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAFgLAIgGQAHgHAIgDQAHgEAIgBIANgBQAMAAAMAEQALAEAIAIQAIAJAGAPQAEAOAAAWIAAAPIgBAPIgCAOIgCAMIhQAAIAAAYIACAbQABALACAGQADAHAFADQAFADAHAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQAAgYgGgLQgFgKgMAAQgFAAgEADg");
	this.shape_70.setTransform(366.3,495.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAWB6IAAi3QAAgPgFgGQgFgHgJAAQgGAAgHAEQgGAFgFAIIAADCIgtAAIAAjwIAjAAIADAZQAGgIAGgFIANgJIAMgFIAOgCQAUABAMAPQAMAOAAAeIAAC4g");
	this.shape_71.setTransform(349.1,495.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIAOgBQALAAALAEQALAEAJAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQAAALADAGQAEAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgFAAgEADg");
	this.shape_72.setTransform(332.2,495.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Ag2B6IAAjwIAgAAIAEAYQAIgNAKgIQAIgHAKAAQATABAJAMQAJALAAAXIAAAIIgBAIIgDAJIgCAIIgeAAIAAgWIgBgMIgDgIIgEgEIgFgBQgFAAgDADQgEAEgDAGIAADGg");
	this.shape_73.setTransform(310.3,495.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ag1BrQgMgOgBgeIAAi4IAtAAIAAC1QAAAQAFAFQAFAHAJAAQAGAAAHgEQAGgDAFgIIAAjCIAsAAIAADwIgiAAIgEgZQgGAIgFAFQgGAGgHADIgLAFIgOACQgWgBgKgPg");
	this.shape_74.setTransform(293.5,495.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgIgEgGgIQgGgHgFgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAFADAEAAQAGAAAFgDQAEgEADgHQACgHABgLIABgdIAAg6IgBgdQgBgMgCgHQgDgHgEgDQgFgDgGAAQgEAAgFADg");
	this.shape_75.setTransform(276.3,495.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("Ag/CcIAAgcQAKACAIgCQAJgCAHgGQAFgGAEgIQAEgKAAgNIg6jyIAuAAIAaCGIAGAtIABAAIAFgtIAViGIAsAAIgzD6QgEASgFAMQgFAOgHAIQgHAIgLAFQgLAEgNAAQgMAAgMgEg");
	this.shape_76.setTransform(259.9,499.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgWCfQgKgCgIgFQgJgFgEgKQgEgJgBgOIABgGIABgIIAgAAQAAAPAGAHQAFAGANAAIAJgBQAEgCADgDQADgEADgIQACgHAAgLIAAgmQgGAIgJAGQgJAFgNAAIgKgBIgLgDQgHgDgFgGQgGgGgEgJQgFgKgCgOQgDgPAAgTIAAhAQAAgUADgOQACgNAFgKQAEgJAGgFQAGgGAGgCIALgEIAKAAQAJAAAGACQAHACAEAEIAJAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgJALgMAGQgNAGgRAAQgMAAgKgCgAgIh+QgEABgDAFQgDAFgCAJIgBAWIAABPIABAVQACAJADAFQADAFAFACIAIACIAIgCIAFgEIAFgFIADgHIAAiDQgDgIgGgFQgFgFgIAAg");
	this.shape_77.setTransform(235.5,499.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAWB6IAAi3QAAgPgFgGQgFgHgJAAQgGAAgGAEQgHAFgFAIIAADCIgtAAIAAjwIAiAAIAFAZQAFgIAGgFIAMgJIANgFIANgCQAWABALAPQALAOAAAeIAAC4g");
	this.shape_78.setTransform(218.1,495.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgOQAAgIACgFQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_79.setTransform(204.7,490.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIABgQIAEgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAHAAQAKAAAEgGQAEgGAAgHIAAgHIgDgHIgFgIIgHgIIgfgmIgMgPIgLgRIgHgSQgCgKgBgKQAAgOAGgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAAKAEQALADAHAGQAIAGAEAKQAEAJAAANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgGAAQgGAAgDACIgHAFIgCAGIgBAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgMAAgMgDg");
	this.shape_80.setTransform(192.8,495.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgNCXQgIgBgIgEQgIgDgIgGQgHgGgFgLQgGgKgEgQQgEgPAAgXIAAjOIAvAAIAADbIABAXQABAJADAGQADAFAFADQAFACAGAAQAGAAAGgCQAFgDADgFQADgGACgJIABgXIAAjbIAtAAIAADOQABAWgEAQQgDAQgGAKQgGALgIAGQgHAGgIADQgIAEgIABIgOAAg");
	this.shape_81.setTransform(175.9,492.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},29).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(380,670.1,1,1,0,0,0,380,670.1);
	this.instance_1.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,760,1340.2);


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


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
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

	this.instance_2 = new lib.Path_1_14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(58.8,79.2,1,1,0,0,0,16.9,13.5);
	this.instance_2.alpha = 0.289;

	this.instance_3 = new lib.Path_2_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(96.1,48.5,1,1,0,0,0,16.9,13.5);
	this.instance_3.alpha = 0.289;

	this.instance_4 = new lib.Path_3_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(58.8,48.5,1,1,0,0,0,16.9,13.5);
	this.instance_4.alpha = 0.289;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67B9A5").s().p("AmPEzIAAplIMgAAIAAJlg");
	this.shape_5.setTransform(77.5,66.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9DD88").s().p("ArjLkIAA3HIXHAAIAAXHg");
	this.shape_6.setTransform(74,74);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(30.8,8.9,92.9,93), null);


(lib.Path_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(114.2,20.6,1,1,0,0,0,114.2,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:113.8},0).wait(1).to({x:113.4},0).wait(1).to({x:113},0).wait(1).to({x:112.6},0).wait(1).to({x:112.1},0).wait(1).to({x:111.7},0).wait(1).to({x:111.3},0).wait(1).to({x:110.9},0).wait(1).to({x:110.5},0).wait(1).to({x:110},0).wait(1).to({x:109.6},0).wait(1).to({x:109.2},0).wait(1).to({x:108.8},0).wait(1).to({x:108.4},0).wait(1).to({x:107.9},0).wait(1).to({x:107.5},0).wait(1).to({x:107.1},0).wait(1).to({x:106.7},0).wait(1).to({x:106.3},0).wait(1).to({x:105.8},0).wait(1).to({x:105.4},0).wait(1).to({x:105},0).wait(1).to({x:104.6},0).wait(1).to({x:104.2},0).wait(1).to({x:103.7},0).wait(1).to({x:103.3},0).wait(1).to({x:102.9},0).wait(1).to({x:102.5},0).wait(1).to({x:102.1},0).wait(1).to({x:101.6},0).wait(1).to({x:101.2},0).wait(1).to({x:100.8},0).wait(1).to({x:100.4},0).wait(1).to({x:100},0).wait(1).to({x:99.5},0).wait(1).to({x:99.1},0).wait(1).to({x:98.7},0).wait(1).to({x:98.3},0).wait(1).to({x:97.9},0).wait(1).to({x:97.4},0).wait(1).to({x:97},0).wait(1).to({x:96.6},0).wait(1).to({x:96.2},0).wait(1).to({x:95.8},0).wait(1).to({x:95.3},0).wait(1).to({x:94.9},0).wait(1).to({x:94.5},0).wait(1).to({x:94.1},0).wait(1).to({x:93.7},0).wait(1).to({x:93.2},0).wait(1).to({x:92.8},0).wait(1).to({x:92.4},0).wait(1).to({x:92},0).wait(1).to({x:91.6},0).wait(1).to({x:91.1},0).wait(1).to({x:90.7},0).wait(1).to({x:90.3},0).wait(1).to({x:89.9},0).wait(1).to({x:89.5},0).wait(1).to({x:89},0).wait(1).to({x:88.6},0).wait(1).to({x:88.2},0).wait(1).to({x:87.8},0).wait(1).to({x:87.4},0).wait(1).to({x:86.9},0).wait(1).to({x:86.5},0).wait(1).to({x:86.1},0).wait(1).to({x:85.7},0).wait(1).to({x:85.3},0).wait(1).to({x:84.8},0).wait(1).to({x:84.4},0).wait(1).to({x:84},0).wait(1).to({x:83.6},0).wait(1).to({x:83.2},0).wait(1).to({x:82.7},0).wait(1).to({x:82.3},0).wait(1).to({x:81.9},0).wait(1).to({x:81.5},0).wait(1).to({x:81.1},0).wait(1).to({x:80.6},0).wait(1).to({x:80.2},0).wait(1).to({x:79.8},0).wait(1).to({x:79.4},0).wait(1).to({x:79},0).wait(1).to({x:78.5},0).wait(1).to({x:78.1},0).wait(1).to({x:77.7},0).wait(1).to({x:77.3},0).wait(1).to({x:76.9},0).wait(1).to({x:76.4},0).wait(1).to({x:76},0).wait(1).to({x:75.6},0).wait(1).to({x:75.2},0).wait(1).to({x:74.8},0).wait(1).to({x:74.3},0).wait(1).to({x:73.9},0).wait(1).to({x:73.5},0).wait(1).to({x:73.1},0).wait(1).to({x:72.7},0).wait(1).to({x:72.2},0).wait(1).to({x:72.7},0).wait(1).to({x:73.2},0).wait(1).to({x:73.7},0).wait(1).to({x:74.2},0).wait(1).to({x:74.7},0).wait(1).to({x:75.2},0).wait(1).to({x:75.7},0).wait(1).to({x:76.2},0).wait(1).to({x:76.7},0).wait(1).to({x:77.2},0).wait(1).to({x:77.7},0).wait(1).to({x:78.2},0).wait(1).to({x:78.7},0).wait(1).to({x:79.2},0).wait(1).to({x:79.7},0).wait(1).to({x:80.2},0).wait(1).to({x:80.7},0).wait(1).to({x:81.2},0).wait(1).to({x:81.7},0).wait(1).to({x:82.2},0).wait(1).to({x:82.7},0).wait(1).to({x:83.2},0).wait(1).to({x:83.7},0).wait(1).to({x:84.2},0).wait(1).to({x:84.7},0).wait(1).to({x:85.2},0).wait(1).to({x:85.7},0).wait(1).to({x:86.2},0).wait(1).to({x:86.7},0).wait(1).to({x:87.2},0).wait(1).to({x:87.7},0).wait(1).to({x:88.2},0).wait(1).to({x:88.7},0).wait(1).to({x:89.2},0).wait(1).to({x:89.7},0).wait(1).to({x:90.2},0).wait(1).to({x:90.7},0).wait(1).to({x:91.2},0).wait(1).to({x:91.7},0).wait(1).to({x:92.2},0).wait(1).to({x:92.7},0).wait(1).to({x:93.2},0).wait(1).to({x:93.7},0).wait(1).to({x:94.2},0).wait(1).to({x:94.7},0).wait(1).to({x:95.2},0).wait(1).to({x:95.7},0).wait(1).to({x:96.2},0).wait(1).to({x:96.7},0).wait(1).to({x:97.2},0).wait(1).to({x:97.7},0).wait(1).to({x:98.2},0).wait(1).to({x:98.7},0).wait(1).to({x:99.2},0).wait(1).to({x:99.7},0).wait(1).to({x:100.2},0).wait(1).to({x:100.7},0).wait(1).to({x:101.2},0).wait(1).to({x:101.7},0).wait(1).to({x:102.2},0).wait(1).to({x:102.7},0).wait(1).to({x:103.2},0).wait(1).to({x:103.7},0).wait(1).to({x:104.2},0).wait(1).to({x:104.7},0).wait(1).to({x:105.2},0).wait(1).to({x:105.7},0).wait(1).to({x:106.2},0).wait(1).to({x:106.7},0).wait(1).to({x:107.2},0).wait(1).to({x:107.7},0).wait(1).to({x:108.2},0).wait(1).to({x:108.7},0).wait(1).to({x:109.2},0).wait(1).to({x:109.7},0).wait(1).to({x:110.2},0).wait(1).to({x:110.7},0).wait(1).to({x:111.2},0).wait(1).to({x:111.7},0).wait(1).to({x:112.2},0).wait(1).to({x:112.7},0).wait(1).to({x:113.2},0).wait(1).to({x:113.7},0).wait(1).to({x:114.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228.4,41.2);


(lib.Path_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(76.8,13.8,1,1,0,0,0,76.8,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:76.2},0).wait(1).to({x:75.6},0).wait(1).to({x:75},0).wait(1).to({x:74.4},0).wait(1).to({x:73.8},0).wait(1).to({x:73.1},0).wait(1).to({x:72.5},0).wait(1).to({x:71.9},0).wait(1).to({x:71.3},0).wait(1).to({x:70.7},0).wait(1).to({x:70.1},0).wait(1).to({x:69.4},0).wait(1).to({x:68.8},0).wait(1).to({x:68.2},0).wait(1).to({x:67.6},0).wait(1).to({x:67},0).wait(1).to({x:66.3},0).wait(1).to({x:65.7},0).wait(1).to({x:65.1},0).wait(1).to({x:64.5},0).wait(1).to({x:63.9},0).wait(1).to({x:63.3},0).wait(1).to({x:62.6},0).wait(1).to({x:62},0).wait(1).to({x:61.4},0).wait(1).to({x:60.8},0).wait(1).to({x:60.2},0).wait(1).to({x:59.5},0).wait(1).to({x:58.9},0).wait(1).to({x:58.3},0).wait(1).to({x:57.7},0).wait(1).to({x:57.1},0).wait(1).to({x:56.5},0).wait(1).to({x:55.8},0).wait(1).to({x:55.2},0).wait(1).to({x:54.6},0).wait(1).to({x:54},0).wait(1).to({x:53.4},0).wait(1).to({x:52.8},0).wait(1).to({x:52.1},0).wait(1).to({x:51.5},0).wait(1).to({x:50.9},0).wait(1).to({x:50.3},0).wait(1).to({x:49.7},0).wait(1).to({x:49},0).wait(1).to({x:48.4},0).wait(1).to({x:47.8},0).wait(1).to({x:47.2},0).wait(1).to({x:46.6},0).wait(1).to({x:46},0).wait(1).to({x:45.3},0).wait(1).to({x:44.7},0).wait(1).to({x:44.1},0).wait(1).to({x:43.5},0).wait(1).to({x:42.9},0).wait(1).to({x:42.2},0).wait(1).to({x:41.6},0).wait(1).to({x:41},0).wait(1).to({x:40.4},0).wait(1).to({x:39.8},0).wait(1).to({x:39.2},0).wait(1).to({x:38.5},0).wait(1).to({x:37.9},0).wait(1).to({x:37.3},0).wait(1).to({x:36.7},0).wait(1).to({x:36.1},0).wait(1).to({x:35.5},0).wait(1).to({x:34.8},0).wait(1).to({x:34.2},0).wait(1).to({x:33.6},0).wait(1).to({x:33},0).wait(1).to({x:32.4},0).wait(1).to({x:31.7},0).wait(1).to({x:31.1},0).wait(1).to({x:30.5},0).wait(1).to({x:29.9},0).wait(1).to({x:29.3},0).wait(1).to({x:28.7},0).wait(1).to({x:28},0).wait(1).to({x:27.4},0).wait(1).to({x:26.8},0).wait(1).to({x:26.2},0).wait(1).to({x:25.6},0).wait(1).to({x:24.9},0).wait(1).to({x:24.3},0).wait(1).to({x:23.7},0).wait(1).to({x:23.1},0).wait(1).to({x:22.5},0).wait(1).to({x:21.9},0).wait(1).to({x:21.2},0).wait(1).to({x:20.6},0).wait(1).to({x:20},0).wait(1).to({x:19.4},0).wait(1).to({x:18.8},0).wait(1).to({x:18.2},0).wait(1).to({x:17.5},0).wait(1).to({x:16.9},0).wait(1).to({x:16.3},0).wait(1).to({x:15.7},0).wait(1).to({x:15.1},0).wait(1).to({x:14.4},0).wait(1).to({x:13.8},0).wait(1).to({x:13.2},0).wait(1).to({x:12.6},0).wait(1).to({x:12},0).wait(1).to({x:11.4},0).wait(1).to({x:10.7},0).wait(1).to({x:10.1},0).wait(1).to({x:9.5},0).wait(1).to({x:8.9},0).wait(1).to({x:8.3},0).wait(1).to({x:7.6},0).wait(1).to({x:7},0).wait(1).to({x:6.4},0).wait(1).to({x:5.8},0).wait(1).to({x:5.2},0).wait(1).to({x:4.6},0).wait(1).to({x:3.9},0).wait(1).to({x:3.3},0).wait(1).to({x:2.7},0).wait(1).to({x:2.1},0).wait(1).to({x:1.5},0).wait(1).to({x:0.8},0).wait(1).to({x:1.6},0).wait(1).to({x:2.3},0).wait(1).to({x:3},0).wait(1).to({x:3.7},0).wait(1).to({x:4.4},0).wait(1).to({x:5.2},0).wait(1).to({x:5.9},0).wait(1).to({x:6.6},0).wait(1).to({x:7.3},0).wait(1).to({x:8},0).wait(1).to({x:8.7},0).wait(1).to({x:9.5},0).wait(1).to({x:10.2},0).wait(1).to({x:10.9},0).wait(1).to({x:11.6},0).wait(1).to({x:12.3},0).wait(1).to({x:13},0).wait(1).to({x:13.8},0).wait(1).to({x:14.5},0).wait(1).to({x:15.2},0).wait(1).to({x:15.9},0).wait(1).to({x:16.6},0).wait(1).to({x:17.3},0).wait(1).to({x:18.1},0).wait(1).to({x:18.8},0).wait(1).to({x:19.5},0).wait(1).to({x:20.2},0).wait(1).to({x:20.9},0).wait(1).to({x:21.6},0).wait(1).to({x:22.4},0).wait(1).to({x:23.1},0).wait(1).to({x:23.8},0).wait(1).to({x:24.5},0).wait(1).to({x:25.2},0).wait(1).to({x:25.9},0).wait(1).to({x:26.7},0).wait(1).to({x:27.4},0).wait(1).to({x:28.1},0).wait(1).to({x:28.8},0).wait(1).to({x:29.5},0).wait(1).to({x:30.2},0).wait(1).to({x:31},0).wait(1).to({x:31.7},0).wait(1).to({x:32.4},0).wait(1).to({x:33.1},0).wait(1).to({x:33.8},0).wait(1).to({x:34.5},0).wait(1).to({x:35.3},0).wait(1).to({x:36},0).wait(1).to({x:36.7},0).wait(1).to({x:37.4},0).wait(1).to({x:38.1},0).wait(1).to({x:38.8},0).wait(1).to({x:39.6},0).wait(1).to({x:40.3},0).wait(1).to({x:41},0).wait(1).to({x:41.7},0).wait(1).to({x:42.4},0).wait(1).to({x:43.2},0).wait(1).to({x:43.9},0).wait(1).to({x:44.6},0).wait(1).to({x:45.3},0).wait(1).to({x:46},0).wait(1).to({x:46.7},0).wait(1).to({x:47.5},0).wait(1).to({x:48.2},0).wait(1).to({x:48.9},0).wait(1).to({x:49.6},0).wait(1).to({x:50.3},0).wait(1).to({x:51},0).wait(1).to({x:51.8},0).wait(1).to({x:52.5},0).wait(1).to({x:53.2},0).wait(1).to({x:53.9},0).wait(1).to({x:54.6},0).wait(1).to({x:55.3},0).wait(1).to({x:56.1},0).wait(1).to({x:56.8},0).wait(1).to({x:57.5},0).wait(1).to({x:58.2},0).wait(1).to({x:58.9},0).wait(1).to({x:59.6},0).wait(1).to({x:60.4},0).wait(1).to({x:61.1},0).wait(1).to({x:61.8},0).wait(1).to({x:62.5},0).wait(1).to({x:63.2},0).wait(1).to({x:63.9},0).wait(1).to({x:64.7},0).wait(1).to({x:65.4},0).wait(1).to({x:66.1},0).wait(1).to({x:66.8},0).wait(1).to({x:67.5},0).wait(1).to({x:68.2},0).wait(1).to({x:69},0).wait(1).to({x:69.7},0).wait(1).to({x:70.4},0).wait(1).to({x:71.1},0).wait(1).to({x:71.8},0).wait(1).to({x:72.5},0).wait(1).to({x:73.3},0).wait(1).to({x:74},0).wait(1).to({x:74.7},0).wait(1).to({x:75.4},0).wait(1).to({x:76.1},0).wait(1).to({x:76.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153.6,27.7);


(lib.Path_1_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud1();
	this.instance.parent = this;
	this.instance.setTransform(145.1,26.3,1,1,0,0,0,145.8,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:147.9},0).wait(1).to({x:150.7},0).wait(1).to({x:153.5},0).wait(1).to({x:156.3},0).wait(1).to({x:159.1},0).wait(1).to({x:161.9},0).wait(1).to({x:164.7},0).wait(1).to({x:167.5},0).wait(1).to({x:170.3},0).wait(1).to({x:173.1},0).wait(1).to({x:175.9},0).wait(1).to({x:178.7},0).wait(1).to({x:181.5},0).wait(1).to({x:184.3},0).wait(1).to({x:187.1},0).wait(1).to({x:189.9},0).wait(1).to({x:192.7},0).wait(1).to({x:195.5},0).wait(1).to({x:198.3},0).wait(1).to({x:201.1},0).wait(1).to({x:203.9},0).wait(1).to({x:206.7},0).wait(1).to({x:209.5},0).wait(1).to({x:212.3},0).wait(1).to({x:215.1},0).wait(1).to({x:217.9},0).wait(1).to({x:220.7},0).wait(1).to({x:223.5},0).wait(1).to({x:226.3},0).wait(1).to({x:229.1},0).wait(1).to({x:231.9},0).wait(1).to({x:234.7},0).wait(1).to({x:237.5},0).wait(1).to({x:240.3},0).wait(1).to({x:243.1},0).wait(1).to({x:246},0).wait(1).to({x:248.8},0).wait(1).to({x:251.6},0).wait(1).to({x:254.4},0).wait(1).to({x:257.2},0).wait(1).to({x:260},0).wait(1).to({x:262.8},0).wait(1).to({x:265.6},0).wait(1).to({x:268.4},0).wait(1).to({x:271.2},0).wait(1).to({x:274},0).wait(1).to({x:276.8},0).wait(1).to({x:279.6},0).wait(1).to({x:282.4},0).wait(1).to({x:285.2},0).wait(1).to({x:288},0).wait(1).to({x:290.8},0).wait(1).to({x:293.6},0).wait(1).to({x:296.4},0).wait(1).to({x:299.2},0).wait(1).to({x:302},0).wait(1).to({x:304.8},0).wait(1).to({x:307.6},0).wait(1).to({x:310.4},0).wait(1).to({x:313.2},0).wait(1).to({x:316},0).wait(1).to({x:318.8},0).wait(1).to({x:321.6},0).wait(1).to({x:324.4},0).wait(1).to({x:327.2},0).wait(1).to({x:330},0).wait(1).to({x:332.8},0).wait(1).to({x:335.6},0).wait(1).to({x:338.4},0).wait(1).to({x:341.2},0).wait(1).to({x:344.1},0).wait(1).to({x:346.9},0).wait(1).to({x:349.7},0).wait(1).to({x:352.5},0).wait(1).to({x:355.3},0).wait(1).to({x:358.1},0).wait(1).to({x:360.9},0).wait(1).to({x:363.7},0).wait(1).to({x:366.5},0).wait(1).to({x:369.3},0).wait(1).to({x:372.1},0).wait(1).to({x:374.9},0).wait(1).to({x:377.7},0).wait(1).to({x:380.5},0).wait(1).to({x:383.3},0).wait(1).to({x:386.1},0).wait(1).to({x:388.9},0).wait(1).to({x:391.7},0).wait(1).to({x:394.5},0).wait(1).to({x:397.3},0).wait(1).to({x:400.1},0).wait(1).to({x:402.9},0).wait(1).to({x:405.7},0).wait(1).to({x:408.5},0).wait(1).to({x:411.3},0).wait(1).to({x:414.1},0).wait(1).to({x:416.9},0).wait(1).to({x:419.7},0).wait(1).to({x:422.5},0).wait(1).to({x:425.3},0).wait(1).to({x:428.1},0).wait(1).to({x:430.9},0).wait(1).to({x:433.7},0).wait(1).to({x:436.5},0).wait(1).to({x:439.3},0).wait(1).to({x:442.1},0).wait(1).to({x:445},0).wait(1).to({x:447.8},0).wait(1).to({x:450.6},0).wait(1).to({x:453.4},0).wait(1).to({x:456.2},0).wait(1).to({x:459},0).wait(1).to({x:461.8},0).wait(1).to({x:464.6},0).wait(1).to({x:467.4},0).wait(1).to({x:470.2},0).wait(1).to({x:473},0).wait(1).to({x:475.8},0).wait(1).to({x:478.6},0).wait(1).to({x:481.4},0).wait(1).to({x:484.2},0).wait(1).to({x:487},0).wait(1).to({x:489.8},0).wait(1).to({x:492.6},0).wait(1).to({x:495.4},0).wait(1).to({x:498.2},0).wait(1).to({x:501},0).wait(1).to({x:503.8},0).wait(1).to({x:506.6},0).wait(1).to({x:509.4},0).wait(1).to({x:512.2},0).wait(1).to({x:515},0).wait(1).to({x:517.8},0).wait(1).to({x:520.6},0).wait(1).to({x:523.4},0).wait(1).to({x:526.2},0).wait(1).to({x:529},0).wait(1).to({x:531.8},0).wait(1).to({x:534.6},0).wait(1).to({x:537.4},0).wait(1).to({x:540.2},0).wait(1).to({x:543.1},0).wait(1).to({x:540.3},0).wait(1).to({x:537.5},0).wait(1).to({x:534.7},0).wait(1).to({x:531.9},0).wait(1).to({x:529.1},0).wait(1).to({x:526.4},0).wait(1).to({x:523.6},0).wait(1).to({x:520.8},0).wait(1).to({x:518},0).wait(1).to({x:515.2},0).wait(1).to({x:512.4},0).wait(1).to({x:509.7},0).wait(1).to({x:506.9},0).wait(1).to({x:504.1},0).wait(1).to({x:501.3},0).wait(1).to({x:498.5},0).wait(1).to({x:495.7},0).wait(1).to({x:493},0).wait(1).to({x:490.2},0).wait(1).to({x:487.4},0).wait(1).to({x:484.6},0).wait(1).to({x:481.8},0).wait(1).to({x:479},0).wait(1).to({x:476.3},0).wait(1).to({x:473.5},0).wait(1).to({x:470.7},0).wait(1).to({x:467.9},0).wait(1).to({x:465.1},0).wait(1).to({x:462.3},0).wait(1).to({x:459.6},0).wait(1).to({x:456.8},0).wait(1).to({x:454},0).wait(1).to({x:451.2},0).wait(1).to({x:448.4},0).wait(1).to({x:445.6},0).wait(1).to({x:442.9},0).wait(1).to({x:440.1},0).wait(1).to({x:437.3},0).wait(1).to({x:434.5},0).wait(1).to({x:431.7},0).wait(1).to({x:428.9},0).wait(1).to({x:426.2},0).wait(1).to({x:423.4},0).wait(1).to({x:420.6},0).wait(1).to({x:417.8},0).wait(1).to({x:415},0).wait(1).to({x:412.2},0).wait(1).to({x:409.5},0).wait(1).to({x:406.7},0).wait(1).to({x:403.9},0).wait(1).to({x:401.1},0).wait(1).to({x:398.3},0).wait(1).to({x:395.5},0).wait(1).to({x:392.8},0).wait(1).to({x:390},0).wait(1).to({x:387.2},0).wait(1).to({x:384.4},0).wait(1).to({x:381.6},0).wait(1).to({x:378.8},0).wait(1).to({x:376.1},0).wait(1).to({x:373.3},0).wait(1).to({x:370.5},0).wait(1).to({x:367.7},0).wait(1).to({x:364.9},0).wait(1).to({x:362.1},0).wait(1).to({x:359.4},0).wait(1).to({x:356.6},0).wait(1).to({x:353.8},0).wait(1).to({x:351},0).wait(1).to({x:348.2},0).wait(1).to({x:345.4},0).wait(1).to({x:342.7},0).wait(1).to({x:339.9},0).wait(1).to({x:337.1},0).wait(1).to({x:334.3},0).wait(1).to({x:331.5},0).wait(1).to({x:328.7},0).wait(1).to({x:326},0).wait(1).to({x:323.2},0).wait(1).to({x:320.4},0).wait(1).to({x:317.6},0).wait(1).to({x:314.8},0).wait(1).to({x:312},0).wait(1).to({x:309.3},0).wait(1).to({x:306.5},0).wait(1).to({x:303.7},0).wait(1).to({x:300.9},0).wait(1).to({x:298.1},0).wait(1).to({x:295.3},0).wait(1).to({x:292.6},0).wait(1).to({x:289.8},0).wait(1).to({x:287},0).wait(1).to({x:284.2},0).wait(1).to({x:281.4},0).wait(1).to({x:278.6},0).wait(1).to({x:275.9},0).wait(1).to({x:273.1},0).wait(1).to({x:270.3},0).wait(1).to({x:267.5},0).wait(1).to({x:264.7},0).wait(1).to({x:261.9},0).wait(1).to({x:259.2},0).wait(1).to({x:256.4},0).wait(1).to({x:253.6},0).wait(1).to({x:250.8},0).wait(1).to({x:248},0).wait(1).to({x:245.2},0).wait(1).to({x:242.5},0).wait(1).to({x:239.7},0).wait(1).to({x:236.9},0).wait(1).to({x:234.1},0).wait(1).to({x:231.3},0).wait(1).to({x:228.5},0).wait(1).to({x:225.8},0).wait(1).to({x:223},0).wait(1).to({x:220.2},0).wait(1).to({x:217.4},0).wait(1).to({x:214.6},0).wait(1).to({x:211.8},0).wait(1).to({x:209.1},0).wait(1).to({x:206.3},0).wait(1).to({x:203.5},0).wait(1).to({x:200.7},0).wait(1).to({x:197.9},0).wait(1).to({x:195.1},0).wait(1).to({x:192.4},0).wait(1).to({x:189.6},0).wait(1).to({x:186.8},0).wait(1).to({x:184},0).wait(1).to({x:181.2},0).wait(1).to({x:178.4},0).wait(1).to({x:175.7},0).wait(1).to({x:172.9},0).wait(1).to({x:170.1},0).wait(1).to({x:167.3},0).wait(1).to({x:164.5},0).wait(1).to({x:161.7},0).wait(1).to({x:159},0).wait(1).to({x:156.2},0).wait(1).to({x:153.4},0).wait(1).to({x:150.6},0).wait(1).to({x:147.8},0).wait(1).to({x:145.1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,0,291.6,52.6);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.1,33,1,1,0,0,0,186.1,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:33.6,x:50.7,y:33.2},0).wait(1).to({x:46.4},0).wait(1).to({x:42},0).wait(1).to({x:37.7},0).wait(1).to({x:33.3},0).wait(1).to({x:28.9},0).wait(1).to({x:24.6},0).wait(1).to({x:20.2},0).wait(1).to({x:15.8},0).wait(1).to({x:11.5},0).wait(1).to({x:7.1},0).wait(1).to({x:2.8},0).wait(1).to({x:-1.6},0).wait(1).to({x:-6},0).wait(1).to({x:-10.3},0).wait(1).to({x:-14.7},0).wait(1).to({x:-19.1},0).wait(1).to({x:-23.4},0).wait(1).to({x:-27.8},0).wait(1).to({x:-32.1},0).wait(1).to({x:-36.5},0).wait(1).to({x:-40.9},0).wait(1).to({x:-45.2},0).wait(1).to({x:-49.6},0).wait(1).to({x:-54},0).wait(1).to({x:-58.3,y:33.3},0).wait(1).to({x:-62.7},0).wait(1).to({x:-67},0).wait(1).to({x:-71.4},0).wait(1).to({x:-75.8},0).wait(1).to({x:-80.1},0).wait(1).to({x:-84.5},0).wait(1).to({x:-88.9},0).wait(1).to({x:-93.2},0).wait(1).to({x:-97.6},0).wait(1).to({x:-101.9},0).wait(1).to({x:-106.3},0).wait(1).to({x:-110.7},0).wait(1).to({x:-115},0).wait(1).to({x:-119.4},0).wait(1).to({x:-123.8},0).wait(1).to({x:-128.1},0).wait(1).to({x:-132.5},0).wait(1).to({x:-136.8},0).wait(1).to({x:-141.2},0).wait(1).to({x:-145.6},0).wait(1).to({x:-149.9},0).wait(1).to({x:-154.3},0).wait(1).to({x:-158.6},0).wait(1).to({x:-163},0).wait(1).to({x:-167.4,y:33.4},0).wait(1).to({x:-171.7},0).wait(1).to({x:-176.1},0).wait(1).to({x:-180.5},0).wait(1).to({x:-184.8},0).wait(1).to({x:-189.2},0).wait(1).to({x:-193.5},0).wait(1).to({x:-197.9},0).wait(1).to({x:-202.3},0).wait(1).to({x:-206.6},0).wait(1).to({x:-211},0).wait(1).to({x:-215.4},0).wait(1).to({x:-219.7},0).wait(1).to({x:-224.1},0).wait(1).to({x:-228.4},0).wait(1).to({x:-232.8},0).wait(1).to({x:-237.2},0).wait(1).to({x:-241.5},0).wait(1).to({x:-245.9},0).wait(1).to({x:-250.3},0).wait(1).to({x:-254.6},0).wait(1).to({x:-259},0).wait(1).to({x:-263.3},0).wait(1).to({x:-267.7},0).wait(1).to({x:-272.1},0).wait(1).to({x:-276.4},0).wait(1).to({x:-280.8,y:33.5},0).wait(1).to({x:-285.2},0).wait(1).to({x:-289.5},0).wait(1).to({x:-293.9},0).wait(1).to({x:-298.2},0).wait(1).to({x:-302.6},0).wait(1).to({x:-307},0).wait(1).to({x:-311.3},0).wait(1).to({x:-315.7},0).wait(1).to({x:-320},0).wait(1).to({x:-324.4},0).wait(1).to({x:-328.8},0).wait(1).to({x:-333.1},0).wait(1).to({x:-337.5},0).wait(1).to({x:-341.9},0).wait(1).to({x:-346.2},0).wait(1).to({x:-350.6},0).wait(1).to({x:-354.9},0).wait(1).to({x:-359.3},0).wait(1).to({x:-363.7},0).wait(1).to({x:-368},0).wait(1).to({x:-372.4},0).wait(1).to({x:-376.8},0).wait(1).to({x:-381.1},0).wait(1).to({x:-385.5},0).wait(1).to({x:-389.8,y:33.6},0).wait(1).to({x:-394.2},0).wait(1).to({x:-398.6},0).wait(1).to({x:-402.9},0).wait(1).to({x:-407.3},0).wait(1).to({x:-411.7},0).wait(1).to({x:-416},0).wait(1).to({x:-420.4},0).wait(1).to({x:-424.7},0).wait(1).to({x:-429.1},0).wait(1).to({x:-433.5},0).wait(1).to({x:-437.8},0).wait(1).to({x:-442.2},0).wait(1).to({x:-446.6},0).wait(1).to({x:-450.9},0).wait(1).to({x:-455.3},0).wait(1).to({x:-459.6},0).wait(1).to({x:-464},0).wait(1).to({x:-468.4},0).wait(1).to({x:-472.7},0).wait(1).to({x:-477.1},0).wait(1).to({x:-481.5},0).wait(1).to({x:-485.8},0).wait(1).to({x:-490.2},0).wait(1).to({x:-494.5},0).wait(1).to({x:-498.9},0).wait(1).to({x:-494.4},0).wait(1).to({x:-489.9},0).wait(1).to({x:-485.4},0).wait(1).to({x:-480.9},0).wait(1).to({x:-476.4},0).wait(1).to({x:-471.9},0).wait(1).to({x:-467.4},0).wait(1).to({x:-462.9},0).wait(1).to({x:-458.4},0).wait(1).to({x:-453.9},0).wait(1).to({x:-449.4},0).wait(1).to({x:-444.9},0).wait(1).to({x:-440.3},0).wait(1).to({x:-435.8},0).wait(1).to({x:-431.3},0).wait(1).to({x:-426.8},0).wait(1).to({x:-422.3},0).wait(1).to({x:-417.8},0).wait(1).to({x:-413.3},0).wait(1).to({x:-408.8},0).wait(1).to({x:-404.3},0).wait(1).to({x:-399.8},0).wait(1).to({x:-395.3},0).wait(1).to({x:-390.8},0).wait(1).to({x:-386.3,y:33.5},0).wait(1).to({x:-381.8},0).wait(1).to({x:-377.3},0).wait(1).to({x:-372.8},0).wait(1).to({x:-368.3},0).wait(1).to({x:-363.8},0).wait(1).to({x:-359.3},0).wait(1).to({x:-354.8},0).wait(1).to({x:-350.3},0).wait(1).to({x:-345.8},0).wait(1).to({x:-341.3},0).wait(1).to({x:-336.8},0).wait(1).to({x:-332.2},0).wait(1).to({x:-327.7},0).wait(1).to({x:-323.2},0).wait(1).to({x:-318.7},0).wait(1).to({x:-314.2},0).wait(1).to({x:-309.7},0).wait(1).to({x:-305.2},0).wait(1).to({x:-300.7},0).wait(1).to({x:-296.2},0).wait(1).to({x:-291.7},0).wait(1).to({x:-287.2},0).wait(1).to({x:-282.7},0).wait(1).to({x:-278.2},0).wait(1).to({x:-273.7,y:33.4},0).wait(1).to({x:-269.2},0).wait(1).to({x:-264.7},0).wait(1).to({x:-260.2},0).wait(1).to({x:-255.7},0).wait(1).to({x:-251.2},0).wait(1).to({x:-246.7},0).wait(1).to({x:-242.2},0).wait(1).to({x:-237.7},0).wait(1).to({x:-233.2},0).wait(1).to({x:-228.7},0).wait(1).to({x:-224.2},0).wait(1).to({x:-219.7},0).wait(1).to({x:-215.1},0).wait(1).to({x:-210.6},0).wait(1).to({x:-206.1},0).wait(1).to({x:-201.6},0).wait(1).to({x:-197.1},0).wait(1).to({x:-192.6},0).wait(1).to({x:-188.1},0).wait(1).to({x:-183.6},0).wait(1).to({x:-179.1},0).wait(1).to({x:-174.6},0).wait(1).to({x:-170.1},0).wait(1).to({x:-165.6,y:33.3},0).wait(1).to({x:-161.1},0).wait(1).to({x:-156.6},0).wait(1).to({x:-152.1},0).wait(1).to({x:-147.6},0).wait(1).to({x:-143.1},0).wait(1).to({x:-138.6},0).wait(1).to({x:-134.1},0).wait(1).to({x:-129.6},0).wait(1).to({x:-125.1},0).wait(1).to({x:-120.6},0).wait(1).to({x:-116.1},0).wait(1).to({x:-111.6},0).wait(1).to({x:-107},0).wait(1).to({x:-102.5},0).wait(1).to({x:-98},0).wait(1).to({x:-93.5},0).wait(1).to({x:-89},0).wait(1).to({x:-84.5},0).wait(1).to({x:-80},0).wait(1).to({x:-75.5},0).wait(1).to({x:-71},0).wait(1).to({x:-66.5},0).wait(1).to({x:-62},0).wait(1).to({x:-57.5},0).wait(1).to({x:-53,y:33.2},0).wait(1).to({x:-48.5},0).wait(1).to({x:-44},0).wait(1).to({x:-39.5},0).wait(1).to({x:-35},0).wait(1).to({x:-30.5},0).wait(1).to({x:-26},0).wait(1).to({x:-21.5},0).wait(1).to({x:-17},0).wait(1).to({x:-12.5},0).wait(1).to({x:-8},0).wait(1).to({x:-3.5},0).wait(1).to({x:1.1},0).wait(1).to({x:5.6},0).wait(1).to({x:10.1},0).wait(1).to({x:14.6},0).wait(1).to({x:19.1},0).wait(1).to({x:23.6},0).wait(1).to({x:28.1},0).wait(1).to({x:32.6},0).wait(1).to({x:37.1},0).wait(1).to({x:41.6},0).wait(1).to({x:46.1},0).wait(1).to({x:50.6},0).wait(1).to({x:55.1,y:33.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-0.5,372.2,67.2);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{exp_noaction:0,exp_grow:18,xp_empty:40});

	// timeline functions:
	this.frame_16 = function() {
		this.gotoAndPlay("exp_noaction");
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_50 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(23).call(this.frame_39).wait(11).call(this.frame_50).wait(1));

	// Layer 1
	this.instance_3 = new lib.Symbol23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(98.6,33.9);
	this.instance_3.alpha = 0.488;

	this.instance_4 = new lib.Symbol27();
	this.instance_4.parent = this;
	this.instance_4.setTransform(98.6,33.9,1,1,0,0,0,96.9,32.4);
	this.instance_4.alpha = 0.488;

	this.instance_5 = new lib.Symbol26();
	this.instance_5.parent = this;
	this.instance_5.setTransform(98.6,33.9,1,1,0,0,0,96.9,32.4);
	this.instance_5.alpha = 0.488;

	this.instance_6 = new lib.Symbol25();
	this.instance_6.parent = this;
	this.instance_6.setTransform(98.6,33.9,1,1,0,0,0,96.9,32.4);
	this.instance_6.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},16).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},21).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},10).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsKFQIiylFICylDIYsAAICzFDIizFFg");
	var mask_graphics_40 = new cjs.Graphics().p("AsKFQIiylFICylDIYsAAICzFDIizFFg");
	var mask_graphics_50 = new cjs.Graphics().p("AsKFQIiylFICylDIYsAAICzFDIizFFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:98.1,y:33.6}).wait(40).to({graphics:mask_graphics_40,x:98.1,y:33.6}).wait(10).to({graphics:mask_graphics_50,x:98.1,y:33.6}).wait(1));

	// Layer 3
	this.instance_7 = new lib.exp();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-97.5,32.4);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({x:-88.1,y:32.5},0).wait(1).to({x:-79.2,y:32.6},0).wait(1).to({x:-70.3,y:32.7},0).wait(1).to({x:-61.4,y:32.8},0).wait(1).to({x:-52.5,y:32.9},0).wait(1).to({x:-43.5,y:33},0).wait(1).to({x:-34.6,y:33.1},0).wait(1).to({x:-25.7,y:33.2},0).wait(1).to({x:-16.8,y:33.4},0).wait(1).to({x:-7.9,y:33.5},0).wait(1).to({x:1.1,y:33.6},0).wait(1).to({x:10,y:33.7},0).wait(1).to({x:18.9,y:33.8},0).wait(1).to({x:27.8,y:33.9},0).wait(1).to({x:36.7,y:34},0).wait(1).to({x:45.7,y:34.1},0).wait(1).to({x:54.6,y:34.2},0).wait(1).to({x:63.5,y:34.3},0).wait(1).to({x:72.4,y:34.4},0).wait(1).to({x:81.3,y:34.5},0).wait(1).to({x:90.3,y:34.6},0).wait(1).to({x:99.2,y:34.7},0).wait(1).to({alpha:0.488},0).wait(1).to({alpha:0.442},0).wait(1).to({alpha:0.394},0).wait(1).to({alpha:0.346},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.202},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.058},0).wait(1).to({alpha:0.01},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,197.1,67.9);


(lib.clouds_group2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 2
	this.instance = new lib.Symbol51();
	this.instance.parent = this;
	this.instance.setTransform(269.5,962.9,1,1,0,0,0,245,132.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:248.5,regY:136.3,x:272.5,y:966.4},0).wait(1).to({x:272},0).wait(1).to({x:271.5},0).wait(1).to({x:271},0).wait(1).to({x:270.5},0).wait(1).to({x:270},0).wait(1).to({x:269.5},0).wait(1).to({x:269},0).wait(1).to({x:268.5},0).wait(1).to({x:268},0).wait(1).to({x:267.5},0).wait(1).to({x:267},0).wait(1).to({x:266.5},0).wait(1).to({x:266},0).wait(1).to({x:265.5},0).wait(1).to({x:265},0).wait(1).to({x:264.5},0).wait(1).to({x:264},0).wait(1).to({x:263.5},0).wait(1).to({x:263},0).wait(1).to({x:262.5},0).wait(1).to({x:262},0).wait(1).to({x:261.5},0).wait(1).to({x:261},0).wait(1).to({x:261.5},0).wait(1).to({x:262},0).wait(1).to({x:262.4},0).wait(1).to({x:262.9},0).wait(1).to({x:263.4},0).wait(1).to({x:263.9},0).wait(1).to({x:264.4},0).wait(1).to({x:264.8},0).wait(1).to({x:265.3},0).wait(1).to({x:265.8},0).wait(1).to({x:266.3},0).wait(1).to({x:266.8},0).wait(1).to({x:267.2},0).wait(1).to({x:267.7},0).wait(1).to({x:268.2},0).wait(1).to({x:268.7},0).wait(1).to({x:269.2},0).wait(1).to({x:269.6},0).wait(1).to({x:270.1},0).wait(1).to({x:270.6},0).wait(1).to({x:271.1},0).wait(1).to({x:271.6},0).wait(1).to({x:272},0).wait(1).to({x:272.5},0).wait(1).to({x:273},0).wait(1));

	// Layer 8
	this.instance_1 = new lib.Symbol50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(135.8,121.4,1,1,0,0,0,135.8,73.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:139.3,regY:77.2,x:139.3,y:124.9},0).wait(49));

	// Layer 7
	this.instance_2 = new lib.Symbol49();
	this.instance_2.parent = this;
	this.instance_2.setTransform(833.1,86.1,1,1,0,0,0,158.8,86.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:162.7,regY:90,x:837,y:90},0).wait(49));

	// Layer 3
	this.instance_3 = new lib.Symbol48();
	this.instance_3.parent = this;
	this.instance_3.setTransform(497.5,749,1,1,0,0,0,246.5,133.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:250,regY:137.1,x:494,y:752.5},0).wait(1).to({x:487},0).wait(1).to({x:479.9},0).wait(1).to({x:472.9},0).wait(1).to({x:465.9},0).wait(1).to({x:458.9},0).wait(1).to({x:451.8},0).wait(1).to({x:444.8},0).wait(1).to({x:437.8},0).wait(1).to({x:430.8},0).wait(1).to({x:423.8},0).wait(1).to({x:416.7},0).wait(1).to({x:409.7},0).wait(1).to({x:402.7},0).wait(1).to({x:395.7},0).wait(1).to({x:388.6},0).wait(1).to({x:381.6},0).wait(1).to({x:374.6},0).wait(1).to({x:367.6},0).wait(1).to({x:360.6},0).wait(1).to({x:353.5},0).wait(1).to({x:346.5},0).wait(1).to({x:339.5},0).wait(1).to({x:332.5},0).wait(1).to({x:325.4},0).wait(1).to({x:318.4},0).wait(1).to({x:311.4},0).wait(1).to({x:304.4},0).wait(1).to({x:297.3},0).wait(1).to({x:290.3},0).wait(1).to({x:283.3},0).wait(1).to({x:276.3},0).wait(1).to({x:269.3},0).wait(1).to({x:262.2},0).wait(1).to({x:255.2},0).wait(1).to({x:248.2},0).wait(1).to({x:241.2},0).wait(1).to({x:234.2},0).wait(1).to({x:227.2},0).wait(1).to({x:220.2},0).wait(1).to({x:213.1},0).wait(1).to({x:206.1},0).wait(1).to({x:199.1},0).wait(1).to({x:192.1},0).wait(1).to({x:185},0).wait(1).to({x:178},0).wait(1).to({x:171},0).wait(1).to({x:164},0).wait(1).to({x:156.9},0).wait(1));

	// Layer 5
	this.instance_4 = new lib.Symbol47();
	this.instance_4.parent = this;
	this.instance_4.setTransform(369.4,505.2,1,1,0,0,0,254,137.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:257.6,regY:141.3,x:366.1,y:508.8},0).wait(1).to({x:359.2},0).wait(1).to({x:352.3},0).wait(1).to({x:345.4},0).wait(1).to({x:338.5},0).wait(1).to({x:331.6},0).wait(1).to({x:324.7},0).wait(1).to({x:317.8},0).wait(1).to({x:310.9},0).wait(1).to({x:304},0).wait(1).to({x:297.1},0).wait(1).to({x:290.2},0).wait(1).to({x:283.3},0).wait(1).to({x:276.4},0).wait(1).to({x:269.5},0).wait(1).to({x:262.6},0).wait(1).to({x:255.7},0).wait(1).to({x:248.8},0).wait(1).to({x:241.9},0).wait(1).to({x:235},0).wait(1).to({x:228.2},0).wait(1).to({x:221.2},0).wait(1).to({x:214.3},0).wait(1).to({x:207.5},0).wait(1).to({x:200.6},0).wait(1).to({x:193.6},0).wait(1).to({x:186.8},0).wait(1).to({x:179.9},0).wait(1).to({x:172.9},0).wait(1).to({x:166},0).wait(1).to({x:159.1},0).wait(1).to({x:152.3},0).wait(1).to({x:145.4},0).wait(1).to({x:138.4},0).wait(1).to({x:131.5},0).wait(1).to({x:124.6},0).wait(1).to({x:117.7},0).wait(1).to({x:110.8},0).wait(1).to({x:104},0).wait(1).to({x:97},0).wait(1).to({x:90.1},0).wait(1).to({x:83.3},0).wait(1).to({x:76.3},0).wait(1).to({x:69.4},0).wait(1).to({x:62.5},0).wait(1).to({x:55.6},0).wait(1).to({x:48.8},0).wait(1).to({x:41.9},0).wait(1).to({x:34.9},0).wait(1));

	// Layer 4
	this.instance_5 = new lib.Symbol46();
	this.instance_5.parent = this;
	this.instance_5.setTransform(788.9,586.3,1,1,0,0,0,274.4,148.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:278.3,regY:152.7,x:797.7,y:590.2},0).wait(1).to({x:802.6},0).wait(1).to({x:807.5},0).wait(1).to({x:812.4},0).wait(1).to({x:817.3},0).wait(1).to({x:822.2},0).wait(1).to({x:827.1},0).wait(1).to({x:832},0).wait(1).to({x:836.9},0).wait(1).to({x:841.8},0).wait(1).to({x:846.7},0).wait(1).to({x:851.6},0).wait(1).to({x:856.5},0).wait(1).to({x:861.4},0).wait(1).to({x:866.3},0).wait(1).to({x:871.2},0).wait(1).to({x:876.1},0).wait(1).to({x:881},0).wait(1).to({x:885.9},0).wait(1).to({x:890.8},0).wait(1).to({x:895.7},0).wait(1).to({x:900.6},0).wait(1).to({x:905.5},0).wait(1).to({x:910.4},0).wait(1).to({x:915.3},0).wait(1).to({x:920.2},0).wait(1).to({x:925.1},0).wait(1).to({x:930},0).wait(1).to({x:934.9},0).wait(1).to({x:939.8},0).wait(1).to({x:944.7},0).wait(1).to({x:949.6},0).wait(1).to({x:954.5},0).wait(1).to({x:959.4},0).wait(1).to({x:964.3},0).wait(1).to({x:969.2},0).wait(1).to({x:974.1},0).wait(1).to({x:979},0).wait(1).to({x:983.9},0).wait(1).to({x:988.8},0).wait(1).to({x:993.7},0).wait(1).to({x:998.6},0).wait(1).to({x:1003.5},0).wait(1).to({x:1008.4},0).wait(1).to({x:1013.3},0).wait(1).to({x:1018.2},0).wait(1).to({x:1023.1},0).wait(1).to({x:1028},0).wait(1).to({x:1032.9},0).wait(1));

	// Layer 6
	this.instance_6 = new lib.Symbol45();
	this.instance_6.parent = this;
	this.instance_6.setTransform(723,397,1,1,0,0,0,208.5,113);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:212,regY:116.6,x:732.7,y:400.6},0).wait(1).to({x:738.9},0).wait(1).to({x:745.1},0).wait(1).to({x:751.3},0).wait(1).to({x:757.5},0).wait(1).to({x:763.7},0).wait(1).to({x:769.9},0).wait(1).to({x:776.1},0).wait(1).to({x:782.4},0).wait(1).to({x:788.6},0).wait(1).to({x:794.8},0).wait(1).to({x:801},0).wait(1).to({x:807.2},0).wait(1).to({x:813.4},0).wait(1).to({x:819.6},0).wait(1).to({x:825.8},0).wait(1).to({x:832},0).wait(1).to({x:838.2},0).wait(1).to({x:844.4},0).wait(1).to({x:850.6},0).wait(1).to({x:856.8},0).wait(1).to({x:863},0).wait(1).to({x:869.2},0).wait(1).to({x:875.4},0).wait(1).to({x:881.6},0).wait(1).to({x:887.9},0).wait(1).to({x:894.1},0).wait(1).to({x:900.3},0).wait(1).to({x:906.5},0).wait(1).to({x:912.7},0).wait(1).to({x:918.9},0).wait(1).to({x:925.1},0).wait(1).to({x:931.3},0).wait(1).to({x:937.5},0).wait(1).to({x:943.7},0).wait(1).to({x:949.9},0).wait(1).to({x:956.1},0).wait(1).to({x:962.3},0).wait(1).to({x:968.5},0).wait(1).to({x:974.7},0).wait(1).to({x:981},0).wait(1).to({x:987.2},0).wait(1).to({x:993.4},0).wait(1).to({x:999.6},0).wait(1).to({x:1005.8},0).wait(1).to({x:1012},0).wait(1).to({x:1018.2},0).wait(1).to({x:1024.4},0).wait(1).to({x:1030.6},0).wait(1));

	// Layer 1
	this.instance_7 = new lib.Symbol44();
	this.instance_7.parent = this;
	this.instance_7.setTransform(568.6,612.4,1,1,0,0,0,568.6,564.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:791.2,regY:943.4,x:792,y:991.1},0).wait(1).to({x:792.8},0).wait(1).to({x:793.6},0).wait(1).to({x:794.4},0).wait(1).to({x:795.3},0).wait(1).to({x:796.1},0).wait(1).to({x:796.9},0).wait(1).to({x:797.7},0).wait(1).to({x:798.5},0).wait(1).to({x:799.3},0).wait(1).to({x:800.1},0).wait(1).to({x:800.9},0).wait(1).to({x:801.7},0).wait(1).to({x:802.5},0).wait(1).to({x:803.4},0).wait(1).to({x:804.2},0).wait(1).to({x:805},0).wait(1).to({x:805.8},0).wait(1).to({x:806.6},0).wait(1).to({x:807.4},0).wait(1).to({x:808.2},0).wait(1).to({x:809},0).wait(1).to({x:809.8},0).wait(1).to({x:810.7},0).wait(1).to({x:809.9},0).wait(1).to({x:809.1},0).wait(1).to({x:808.3},0).wait(1).to({x:807.5},0).wait(1).to({x:806.8},0).wait(1).to({x:806},0).wait(1).to({x:805.2},0).wait(1).to({x:804.4},0).wait(1).to({x:803.6},0).wait(1).to({x:802.9},0).wait(1).to({x:802.1},0).wait(1).to({x:801.3},0).wait(1).to({x:800.5},0).wait(1).to({x:799.8},0).wait(1).to({x:799},0).wait(1).to({x:798.2},0).wait(1).to({x:797.4},0).wait(1).to({x:796.6},0).wait(1).to({x:795.9},0).wait(1).to({x:795.1},0).wait(1).to({x:794.3},0).wait(1).to({x:793.5},0).wait(1).to({x:792.8},0).wait(1).to({x:792},0).wait(1).to({x:791.2},0).wait(1));

	// Layer 10
	this.instance_8 = new lib.Symbol51();
	this.instance_8.parent = this;
	this.instance_8.setTransform(429.3,1185.2,1,1,0,0,0,245,132.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:248.5,regY:136.3,x:434.7,y:1188.7},0).wait(1).to({x:436.6},0).wait(1).to({x:438.6},0).wait(1).to({x:440.5},0).wait(1).to({x:442.4},0).wait(1).to({x:444.3},0).wait(1).to({x:446.2},0).wait(1).to({x:448.1},0).wait(1).to({x:450.1},0).wait(1).to({x:452},0).wait(1).to({x:453.9},0).wait(1).to({x:455.8},0).wait(1).to({x:457.7},0).wait(1).to({x:459.6},0).wait(1).to({x:461.6},0).wait(1).to({x:463.5},0).wait(1).to({x:465.4},0).wait(1).to({x:467.3},0).wait(1).to({x:469.2},0).wait(1).to({x:471.1},0).wait(1).to({x:473.1},0).wait(1).to({x:475},0).wait(1).to({x:476.9},0).wait(1).to({x:478.8},0).wait(1).to({x:477},0).wait(1).to({x:475.1},0).wait(1).to({x:473.3},0).wait(1).to({x:471.4},0).wait(1).to({x:469.6},0).wait(1).to({x:467.8},0).wait(1).to({x:465.9},0).wait(1).to({x:464.1},0).wait(1).to({x:462.2},0).wait(1).to({x:460.4},0).wait(1).to({x:458.6},0).wait(1).to({x:456.7},0).wait(1).to({x:454.9},0).wait(1).to({x:453},0).wait(1).to({x:451.2},0).wait(1).to({x:449.4},0).wait(1).to({x:447.5},0).wait(1).to({x:445.7},0).wait(1).to({x:443.8},0).wait(1).to({x:442},0).wait(1).to({x:440.2},0).wait(1).to({x:438.3},0).wait(1).to({x:436.5},0).wait(1).to({x:434.6},0).wait(1).to({x:432.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,1173.3,1354.4);


(lib.clouds_group_pine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.Path_3_1();
	this.instance.parent = this;
	this.instance.setTransform(237.7,88.4,1,1,0,0,0,114.2,20.6);
	this.instance.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:237.9},0).wait(1).to({x:238.2},0).wait(1).to({x:238.5},0).wait(1).to({x:238.8},0).wait(1).to({x:239.1},0).wait(1).to({x:239.3},0).wait(1).to({x:239.6},0).wait(1).to({x:239.9},0).wait(1).to({x:240.2},0).wait(1).to({x:240.5},0).wait(1).to({x:240.7},0).wait(1).to({x:241},0).wait(1).to({x:241.3},0).wait(1).to({x:241.6},0).wait(1).to({x:241.9},0).wait(1).to({x:242.2},0).wait(1).to({x:242.4},0).wait(1).to({x:242.7},0).wait(1).to({x:243},0).wait(1).to({x:243.3},0).wait(1).to({x:243.6},0).wait(1).to({x:243.8},0).wait(1).to({x:244.1},0).wait(1).to({x:244.4},0).wait(1).to({x:244.7},0).wait(1).to({x:245},0).wait(1).to({x:245.3},0).wait(1).to({x:245.5},0).wait(1).to({x:245.8},0).wait(1).to({x:246.1},0).wait(1).to({x:246.4},0).wait(1).to({x:246.7},0).wait(1).to({x:246.9},0).wait(1).to({x:247.2},0).wait(1).to({x:247.5},0).wait(1).to({x:247.8},0).wait(1).to({x:248.1},0).wait(1).to({x:248.4},0).wait(1).to({x:248.6},0).wait(1).to({x:248.9},0).wait(1).to({x:249.2},0).wait(1).to({x:248.8},0).wait(1).to({x:248.3},0).wait(1).to({x:247.9},0).wait(1).to({x:247.4},0).wait(1).to({x:247},0).wait(1).to({x:246.5},0).wait(1).to({x:246.1},0).wait(1).to({x:245.6},0).wait(1).to({x:245.2},0).wait(1).to({x:244.8},0).wait(1).to({x:244.3},0).wait(1).to({x:243.9},0).wait(1).to({x:243.4},0).wait(1).to({x:243},0).wait(1).to({x:242.5},0).wait(1).to({x:242.1},0).wait(1).to({x:241.6},0).wait(1).to({x:241.2},0).wait(1).to({x:240.8},0).wait(1).to({x:240.3},0).wait(1).to({x:239.9},0).wait(1).to({x:239.4},0).wait(1).to({x:239},0).wait(1).to({x:238.5},0).wait(1).to({x:238.1},0).wait(1).to({x:237.7},0).wait(1));

	// Layer 12
	this.instance_1 = new lib.Path_10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(752,253.8,1,1,0,0,0,186.1,33.5);
	this.instance_1.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:751.3},0).wait(1).to({x:750.7},0).wait(1).to({x:750.1},0).wait(1).to({x:749.5},0).wait(1).to({x:748.9},0).wait(1).to({x:748.3},0).wait(1).to({x:747.7},0).wait(1).to({x:747.1},0).wait(1).to({x:746.5},0).wait(1).to({x:745.9},0).wait(1).to({x:745.3},0).wait(1).to({x:744.7},0).wait(1).to({x:744},0).wait(1).to({x:743.4},0).wait(1).to({x:742.8},0).wait(1).to({x:742.2},0).wait(1).to({x:741.6},0).wait(1).to({x:741},0).wait(1).to({x:740.4},0).wait(1).to({x:739.8},0).wait(1).to({x:739.2},0).wait(1).to({x:738.6},0).wait(1).to({x:738},0).wait(1).to({x:737.4},0).wait(1).to({x:736.7},0).wait(1).to({x:736.1},0).wait(1).to({x:735.5},0).wait(1).to({x:734.9},0).wait(1).to({x:734.3},0).wait(1).to({x:733.7},0).wait(1).to({x:733.1},0).wait(1).to({x:733.6},0).wait(1).to({x:734.1},0).wait(1).to({x:734.7},0).wait(1).to({x:735.2},0).wait(1).to({x:735.7},0).wait(1).to({x:736.2},0).wait(1).to({x:736.8},0).wait(1).to({x:737.3},0).wait(1).to({x:737.8},0).wait(1).to({x:738.3},0).wait(1).to({x:738.9},0).wait(1).to({x:739.4},0).wait(1).to({x:739.9},0).wait(1).to({x:740.4},0).wait(1).to({x:741},0).wait(1).to({x:741.5},0).wait(1).to({x:742},0).wait(1).to({x:742.5},0).wait(1).to({x:743},0).wait(1).to({x:743.6},0).wait(1).to({x:744.1},0).wait(1).to({x:744.6},0).wait(1).to({x:745.1},0).wait(1).to({x:745.7},0).wait(1).to({x:746.2},0).wait(1).to({x:746.7},0).wait(1).to({x:747.2},0).wait(1).to({x:747.8},0).wait(1).to({x:748.3},0).wait(1).to({x:748.8},0).wait(1).to({x:749.3},0).wait(1).to({x:749.9},0).wait(1).to({x:750.4},0).wait(1).to({x:750.9},0).wait(1).to({x:751.4},0).wait(1).to({x:752},0).wait(1));

	// Layer 13
	this.instance_2 = new lib.Path_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(490.2,144.4,1,1,0,0,0,76.8,13.8);
	this.instance_2.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:490.4},0).wait(1).to({x:490.7},0).wait(1).to({x:491},0).wait(1).to({x:491.3},0).wait(1).to({x:491.6},0).wait(1).to({x:491.9},0).wait(1).to({x:492.2},0).wait(1).to({x:492.5},0).wait(1).to({x:492.7},0).wait(1).to({x:493},0).wait(1).to({x:493.3},0).wait(1).to({x:493.6},0).wait(1).to({x:493.9},0).wait(1).to({x:494.2},0).wait(1).to({x:494.5},0).wait(1).to({x:494.8},0).wait(1).to({x:495},0).wait(1).to({x:495.3},0).wait(1).to({x:495.6},0).wait(1).to({x:495.9},0).wait(1).to({x:496.2},0).wait(1).to({x:496.5},0).wait(1).to({x:496.8},0).wait(1).to({x:497.1},0).wait(1).to({x:497.3},0).wait(1).to({x:497.6},0).wait(1).to({x:497.9},0).wait(1).to({x:498.2},0).wait(1).to({x:498.5},0).wait(1).to({x:498.8},0).wait(1).to({x:499.1},0).wait(1).to({x:499.4},0).wait(1).to({x:499.6},0).wait(1).to({x:499.9},0).wait(1).to({x:500.2},0).wait(1).to({x:500.5},0).wait(1).to({x:500.8},0).wait(1).to({x:500.4},0).wait(1).to({x:500.1},0).wait(1).to({x:499.7},0).wait(1).to({x:499.4},0).wait(1).to({x:499},0).wait(1).to({x:498.7},0).wait(1).to({x:498.3},0).wait(1).to({x:498},0).wait(1).to({x:497.6},0).wait(1).to({x:497.3},0).wait(1).to({x:496.9},0).wait(1).to({x:496.5},0).wait(1).to({x:496.2},0).wait(1).to({x:495.8},0).wait(1).to({x:495.5},0).wait(1).to({x:495.1},0).wait(1).to({x:494.8},0).wait(1).to({x:494.4},0).wait(1).to({x:494.1},0).wait(1).to({x:493.7},0).wait(1).to({x:493.3},0).wait(1).to({x:493},0).wait(1).to({x:492.6},0).wait(1).to({x:492.3},0).wait(1).to({x:491.9},0).wait(1).to({x:491.6},0).wait(1).to({x:491.2},0).wait(1).to({x:490.9},0).wait(1).to({x:490.5},0).wait(1).to({x:490.2},0).wait(1));

	// Layer 14
	this.instance_3 = new lib.Path_1_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120.6,267.4,1,1,0,0,0,145.8,26.3);
	this.instance_3.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:121.2},0).wait(1).to({x:121.8},0).wait(1).to({x:122.4},0).wait(1).to({x:123.1},0).wait(1).to({x:123.7},0).wait(1).to({x:124.3},0).wait(1).to({x:124.9},0).wait(1).to({x:125.5},0).wait(1).to({x:126.1},0).wait(1).to({x:126.7},0).wait(1).to({x:127.3},0).wait(1).to({x:128},0).wait(1).to({x:128.6},0).wait(1).to({x:129.2},0).wait(1).to({x:129.8},0).wait(1).to({x:130.4},0).wait(1).to({x:131},0).wait(1).to({x:131.6},0).wait(1).to({x:132.3},0).wait(1).to({x:132.9},0).wait(1).to({x:133.5},0).wait(1).to({x:134.1},0).wait(1).to({x:134.7},0).wait(1).to({x:135.3},0).wait(1).to({x:135.9},0).wait(1).to({x:136.6},0).wait(1).to({x:137.2},0).wait(1).to({x:137.8},0).wait(1).to({x:138.4},0).wait(1).to({x:139},0).wait(1).to({x:139.6},0).wait(1).to({x:140.2},0).wait(1).to({x:140.8},0).wait(1).to({x:140.3},0).wait(1).to({x:139.7},0).wait(1).to({x:139.1},0).wait(1).to({x:138.5},0).wait(1).to({x:137.9},0).wait(1).to({x:137.3},0).wait(1).to({x:136.7},0).wait(1).to({x:136.1},0).wait(1).to({x:135.5},0).wait(1).to({x:134.9},0).wait(1).to({x:134.3},0).wait(1).to({x:133.7},0).wait(1).to({x:133.1},0).wait(1).to({x:132.5},0).wait(1).to({x:131.9},0).wait(1).to({x:131.3},0).wait(1).to({x:130.7},0).wait(1).to({x:130.1},0).wait(1).to({x:129.5},0).wait(1).to({x:128.9},0).wait(1).to({x:128.3},0).wait(1).to({x:127.7},0).wait(1).to({x:127.2},0).wait(1).to({x:126.6},0).wait(1).to({x:126},0).wait(1).to({x:125.4},0).wait(1).to({x:124.8},0).wait(1).to({x:124.2},0).wait(1).to({x:123.6},0).wait(1).to({x:123},0).wait(1).to({x:122.4},0).wait(1).to({x:121.8},0).wait(1).to({x:121.2},0).wait(1).to({x:120.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,67.8,963.3,225.9);


(lib.clouds_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol51();
	this.instance.parent = this;
	this.instance.setTransform(269.5,962.9,1,1,0,0,0,245,132.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:248.5,regY:136.3,x:273.1,y:966.4},0).wait(1).to({x:273.3},0).wait(1).to({x:273.4},0).wait(1).to({x:273.5},0).wait(1).to({x:273.7},0).wait(1).to({x:273.8},0).wait(1).to({x:273.9},0).wait(1).to({x:274.1},0).wait(1).to({x:274.2},0).wait(1).to({x:274.3},0).wait(1).to({x:274.5},0).wait(1).to({x:274.6},0).wait(1).to({x:274.7},0).wait(1).to({x:274.9},0).wait(1).to({x:275},0).wait(1).to({x:275.1},0).wait(1).to({x:275.3},0).wait(1).to({x:275.4},0).wait(1).to({x:275.5},0).wait(1).to({x:275.7},0).wait(1).to({x:275.8},0).wait(1).to({x:276},0).wait(1).to({x:276.1},0).wait(1).to({x:276.2},0).wait(1).to({x:276.4},0).wait(1).to({x:276.5},0).wait(1).to({x:276.6},0).wait(1).to({x:276.8},0).wait(1).to({x:276.9},0).wait(1).to({x:277},0).wait(1).to({x:277.2},0).wait(1).to({x:277.3},0).wait(1).to({x:277.4},0).wait(1).to({x:277.6},0).wait(1).to({x:277.7},0).wait(1).to({x:277.8},0).wait(1).to({x:278},0).wait(1).to({x:278.1},0).wait(1).to({x:278.2},0).wait(1).to({x:278.4},0).wait(1).to({x:278.5},0).wait(1).to({x:278.4},0).wait(1).to({x:278.2},0).wait(1).to({x:278.1},0).wait(1).to({x:278},0).wait(1).to({x:277.9},0).wait(1).to({x:277.7},0).wait(1).to({x:277.6},0).wait(1).to({x:277.5},0).wait(1).to({x:277.3},0).wait(1).to({x:277.2},0).wait(1).to({x:277.1},0).wait(1).to({x:277},0).wait(1).to({x:276.8},0).wait(1).to({x:276.7},0).wait(1).to({x:276.6},0).wait(1).to({x:276.5},0).wait(1).to({x:276.3},0).wait(1).to({x:276.2},0).wait(1).to({x:276.1},0).wait(1).to({x:275.9},0).wait(1).to({x:275.8},0).wait(1).to({x:275.7},0).wait(1).to({x:275.6},0).wait(1).to({x:275.4},0).wait(1).to({x:275.3},0).wait(1).to({x:275.2},0).wait(1).to({x:275},0).wait(1).to({x:274.9},0).wait(1).to({x:274.8},0).wait(1).to({x:274.7},0).wait(1).to({x:274.5},0).wait(1).to({x:274.4},0).wait(1).to({x:274.3},0).wait(1).to({x:274.2},0).wait(1).to({x:274},0).wait(1).to({x:273.9},0).wait(1).to({x:273.8},0).wait(1).to({x:273.6},0).wait(1).to({x:273.5},0).wait(1).to({x:273.4},0).wait(1).to({x:273.3},0).wait(1).to({x:273.1},0).wait(1).to({x:273},0).wait(1));

	// Layer 8
	this.instance_1 = new lib.Symbol50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(135.8,121.4,1,1,0,0,0,135.8,73.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:139.3,regY:77.2,x:140,y:124.9},0).wait(1).to({x:140.8},0).wait(1).to({x:141.5},0).wait(1).to({x:142.2},0).wait(1).to({x:143},0).wait(1).to({x:143.7},0).wait(1).to({x:144.4},0).wait(1).to({x:145.2},0).wait(1).to({x:145.9},0).wait(1).to({x:146.6},0).wait(1).to({x:147.3},0).wait(1).to({x:148.1},0).wait(1).to({x:148.8},0).wait(1).to({x:149.5},0).wait(1).to({x:150.3},0).wait(1).to({x:151},0).wait(1).to({x:151.7},0).wait(1).to({x:152.5},0).wait(1).to({x:153.2},0).wait(1).to({x:153.9},0).wait(1).to({x:154.7},0).wait(1).to({x:155.4},0).wait(1).to({x:156.1},0).wait(1).to({x:156.9},0).wait(1).to({x:157.6},0).wait(1).to({x:158.3},0).wait(1).to({x:159.1},0).wait(1).to({x:159.8},0).wait(1).to({x:160.5},0).wait(1).to({x:161.3},0).wait(1).to({x:162},0).wait(1).to({x:162.7},0).wait(1).to({x:163.4},0).wait(1).to({x:164.2},0).wait(1).to({x:164.9},0).wait(1).to({x:165.6},0).wait(1).to({x:166.4},0).wait(1).to({x:167.1},0).wait(1).to({x:167.8},0).wait(1).to({x:168.6},0).wait(1).to({x:169.3},0).wait(1).to({x:168.6},0).wait(1).to({x:167.9},0).wait(1).to({x:167.2},0).wait(1).to({x:166.5},0).wait(1).to({x:165.8},0).wait(1).to({x:165.1},0).wait(1).to({x:164.4},0).wait(1).to({x:163.7},0).wait(1).to({x:163},0).wait(1).to({x:162.3},0).wait(1).to({x:161.6},0).wait(1).to({x:160.9},0).wait(1).to({x:160.2},0).wait(1).to({x:159.5},0).wait(1).to({x:158.8},0).wait(1).to({x:158.1},0).wait(1).to({x:157.4},0).wait(1).to({x:156.7},0).wait(1).to({x:156},0).wait(1).to({x:155.3},0).wait(1).to({x:154.6},0).wait(1).to({x:154},0).wait(1).to({x:153.3},0).wait(1).to({x:152.6},0).wait(1).to({x:151.9},0).wait(1).to({x:151.2},0).wait(1).to({x:150.5},0).wait(1).to({x:149.8},0).wait(1).to({x:149.1},0).wait(1).to({x:148.4},0).wait(1).to({x:147.7},0).wait(1).to({x:147},0).wait(1).to({x:146.3},0).wait(1).to({x:145.6},0).wait(1).to({x:144.9},0).wait(1).to({x:144.2},0).wait(1).to({x:143.5},0).wait(1).to({x:142.8},0).wait(1).to({x:142.1},0).wait(1).to({x:141.4},0).wait(1).to({x:140.7},0).wait(1).to({x:140},0).wait(1).to({x:139.3},0).wait(1));

	// Layer 7
	this.instance_2 = new lib.Symbol49();
	this.instance_2.parent = this;
	this.instance_2.setTransform(833.1,86.1,1,1,0,0,0,158.8,86.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:162.7,regY:90,x:836.7,y:90},0).wait(1).to({x:836.4},0).wait(1).to({x:836.1},0).wait(1).to({x:835.8},0).wait(1).to({x:835.5},0).wait(1).to({x:835.2},0).wait(1).to({x:834.9},0).wait(1).to({x:834.6},0).wait(1).to({x:834.3},0).wait(1).to({x:834},0).wait(1).to({x:833.7},0).wait(1).to({x:833.4},0).wait(1).to({x:833.1},0).wait(1).to({x:832.8},0).wait(1).to({x:832.5},0).wait(1).to({x:832.2},0).wait(1).to({x:831.9},0).wait(1).to({x:831.6},0).wait(1).to({x:831.3},0).wait(1).to({x:831},0).wait(1).to({x:830.7},0).wait(1).to({x:830.4},0).wait(1).to({x:830.1},0).wait(1).to({x:829.8},0).wait(1).to({x:829.5},0).wait(1).to({x:829.2},0).wait(1).to({x:828.9},0).wait(1).to({x:828.6},0).wait(1).to({x:828.3},0).wait(1).to({x:828},0).wait(1).to({x:827.7},0).wait(1).to({x:827.4},0).wait(1).to({x:827.1},0).wait(1).to({x:826.8},0).wait(1).to({x:826.5},0).wait(1).to({x:826.2},0).wait(1).to({x:825.9},0).wait(1).to({x:825.6},0).wait(1).to({x:825.3},0).wait(1).to({x:825},0).wait(1).to({x:824.7},0).wait(1).to({x:825},0).wait(1).to({x:825.3},0).wait(1).to({x:825.6},0).wait(1).to({x:825.8},0).wait(1).to({x:826.1},0).wait(1).to({x:826.4},0).wait(1).to({x:826.7},0).wait(1).to({x:827},0).wait(1).to({x:827.3},0).wait(1).to({x:827.6},0).wait(1).to({x:827.8},0).wait(1).to({x:828.1},0).wait(1).to({x:828.4},0).wait(1).to({x:828.7},0).wait(1).to({x:829},0).wait(1).to({x:829.3},0).wait(1).to({x:829.6},0).wait(1).to({x:829.8},0).wait(1).to({x:830.1},0).wait(1).to({x:830.4},0).wait(1).to({x:830.7},0).wait(1).to({x:831},0).wait(1).to({x:831.3},0).wait(1).to({x:831.6},0).wait(1).to({x:831.9},0).wait(1).to({x:832.1},0).wait(1).to({x:832.4},0).wait(1).to({x:832.7},0).wait(1).to({x:833},0).wait(1).to({x:833.3},0).wait(1).to({x:833.6},0).wait(1).to({x:833.9},0).wait(1).to({x:834.1},0).wait(1).to({x:834.4},0).wait(1).to({x:834.7},0).wait(1).to({x:835},0).wait(1).to({x:835.3},0).wait(1).to({x:835.6},0).wait(1).to({x:835.9},0).wait(1).to({x:836.1},0).wait(1).to({x:836.4},0).wait(1).to({x:836.7},0).wait(1).to({x:837},0).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol48();
	this.instance_3.parent = this;
	this.instance_3.setTransform(497.5,749,1,1,0,0,0,246.5,133.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:250,regY:137.1,x:500.8,y:752.5},0).wait(1).to({x:500.6},0).wait(1).to({x:500.4},0).wait(1).to({x:500.2},0).wait(1).to({x:500},0).wait(1).to({x:499.8},0).wait(1).to({x:499.6},0).wait(1).to({x:499.4},0).wait(1).to({x:499.2},0).wait(1).to({x:499},0).wait(1).to({x:498.9},0).wait(1).to({x:498.7},0).wait(1).to({x:498.5},0).wait(1).to({x:498.3},0).wait(1).to({x:498.1},0).wait(1).to({x:497.9},0).wait(1).to({x:497.7},0).wait(1).to({x:497.5},0).wait(1).to({x:497.3},0).wait(1).to({x:497.1},0).wait(1).to({x:496.9},0).wait(1).to({x:496.7},0).wait(1).to({x:496.5},0).wait(1).to({x:496.3},0).wait(1).to({x:496.1},0).wait(1).to({x:495.9},0).wait(1).to({x:495.7},0).wait(1).to({x:495.5},0).wait(1).to({x:495.3},0).wait(1).to({x:495.1},0).wait(1).to({x:495},0).wait(1).to({x:494.8},0).wait(1).to({x:494.6},0).wait(1).to({x:494.4},0).wait(1).to({x:494.2},0).wait(1).to({x:494},0).wait(1).to({x:493.8},0).wait(1).to({x:493.6},0).wait(1).to({x:493.4},0).wait(1).to({x:493.2},0).wait(1).to({x:493},0).wait(1).to({x:493.2},0).wait(1).to({x:493.4},0).wait(1).to({x:493.6},0).wait(1).to({x:493.7},0).wait(1).to({x:493.9},0).wait(1).to({x:494.1},0).wait(1).to({x:494.3},0).wait(1).to({x:494.5},0).wait(1).to({x:494.7},0).wait(1).to({x:494.9},0).wait(1).to({x:495},0).wait(1).to({x:495.2},0).wait(1).to({x:495.4},0).wait(1).to({x:495.6},0).wait(1).to({x:495.8},0).wait(1).to({x:496},0).wait(1).to({x:496.2},0).wait(1).to({x:496.3},0).wait(1).to({x:496.5},0).wait(1).to({x:496.7},0).wait(1).to({x:496.9},0).wait(1).to({x:497.1},0).wait(1).to({x:497.3},0).wait(1).to({x:497.5},0).wait(1).to({x:497.7},0).wait(1).to({x:497.8},0).wait(1).to({x:498},0).wait(1).to({x:498.2},0).wait(1).to({x:498.4},0).wait(1).to({x:498.6},0).wait(1).to({x:498.8},0).wait(1).to({x:499},0).wait(1).to({x:499.1},0).wait(1).to({x:499.3},0).wait(1).to({x:499.5},0).wait(1).to({x:499.7},0).wait(1).to({x:499.9},0).wait(1).to({x:500.1},0).wait(1).to({x:500.3},0).wait(1).to({x:500.4},0).wait(1).to({x:500.6},0).wait(1).to({x:500.8},0).wait(1).to({x:501},0).wait(1));

	// Layer 5
	this.instance_4 = new lib.Symbol47();
	this.instance_4.parent = this;
	this.instance_4.setTransform(369.4,505.2,1,1,0,0,0,254,137.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:257.6,regY:141.3,x:373,y:508.8},0).wait(1).to({x:372.9},0).wait(3).to({x:372.8},0).wait(3).to({x:372.7},0).wait(3).to({x:372.6},0).wait(3).to({x:372.5},0).wait(3).to({x:372.4},0).wait(3).to({x:372.3},0).wait(2).to({x:372.2},0).wait(3).to({x:372.1},0).wait(3).to({x:372},0).wait(3).to({x:371.9},0).wait(3).to({x:371.8},0).wait(3).to({x:371.7},0).wait(3).to({x:371.6},0).wait(3).to({x:371.7},0).wait(3).to({x:371.8},0).wait(3).to({x:371.9},0).wait(3).to({x:372},0).wait(3).to({x:372.1},0).wait(3).to({x:372.2},0).wait(3).to({x:372.3},0).wait(4).to({x:372.4},0).wait(3).to({x:372.5},0).wait(3).to({x:372.6},0).wait(3).to({x:372.7},0).wait(3).to({x:372.8},0).wait(3).to({x:372.9},0).wait(3).to({x:373},0).wait(2));

	// Layer 4
	this.instance_5 = new lib.Symbol46();
	this.instance_5.parent = this;
	this.instance_5.setTransform(788.9,586.3,1,1,0,0,0,274.4,148.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:278.3,regY:152.7,x:793,y:590.2},0).wait(1).to({x:793.2},0).wait(1).to({x:793.3},0).wait(1).to({x:793.5},0).wait(1).to({x:793.7},0).wait(1).to({x:793.9},0).wait(1).to({x:794.1},0).wait(1).to({x:794.3},0).wait(1).to({x:794.4},0).wait(1).to({x:794.6},0).wait(1).to({x:794.8},0).wait(1).to({x:795},0).wait(1).to({x:795.2},0).wait(1).to({x:795.4},0).wait(1).to({x:795.5},0).wait(1).to({x:795.7},0).wait(1).to({x:795.9},0).wait(1).to({x:796.1},0).wait(1).to({x:796.3},0).wait(1).to({x:796.5},0).wait(1).to({x:796.6},0).wait(1).to({x:796.8},0).wait(1).to({x:797},0).wait(1).to({x:797.2},0).wait(1).to({x:797.4},0).wait(1).to({x:797.6},0).wait(1).to({x:797.7},0).wait(1).to({x:797.9},0).wait(1).to({x:798.1},0).wait(1).to({x:798.3},0).wait(1).to({x:798.5},0).wait(1).to({x:798.7},0).wait(1).to({x:798.8},0).wait(1).to({x:799},0).wait(1).to({x:799.2},0).wait(1).to({x:799.4},0).wait(1).to({x:799.6},0).wait(1).to({x:799.8},0).wait(1).to({x:799.9},0).wait(1).to({x:800.1},0).wait(1).to({x:800.3},0).wait(1).to({x:800.1},0).wait(1).to({x:800},0).wait(1).to({x:799.8},0).wait(1).to({x:799.6},0).wait(1).to({x:799.4},0).wait(1).to({x:799.3},0).wait(1).to({x:799.1},0).wait(1).to({x:798.9},0).wait(1).to({x:798.7},0).wait(1).to({x:798.6},0).wait(1).to({x:798.4},0).wait(1).to({x:798.2},0).wait(1).to({x:798},0).wait(1).to({x:797.9},0).wait(1).to({x:797.7},0).wait(1).to({x:797.5},0).wait(1).to({x:797.3},0).wait(1).to({x:797.2},0).wait(1).to({x:797},0).wait(1).to({x:796.8},0).wait(1).to({x:796.6},0).wait(1).to({x:796.5},0).wait(1).to({x:796.3},0).wait(1).to({x:796.1},0).wait(1).to({x:795.9},0).wait(1).to({x:795.8},0).wait(1).to({x:795.6},0).wait(1).to({x:795.4},0).wait(1).to({x:795.2},0).wait(1).to({x:795.1},0).wait(1).to({x:794.9},0).wait(1).to({x:794.7},0).wait(1).to({x:794.5},0).wait(1).to({x:794.4},0).wait(1).to({x:794.2},0).wait(1).to({x:794},0).wait(1).to({x:793.8},0).wait(1).to({x:793.7},0).wait(1).to({x:793.5},0).wait(1).to({x:793.3},0).wait(1).to({x:793.1},0).wait(1).to({x:793},0).wait(1).to({x:792.8},0).wait(1));

	// Layer 6
	this.instance_6 = new lib.Symbol45();
	this.instance_6.parent = this;
	this.instance_6.setTransform(723,397,1,1,0,0,0,208.5,113);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:212,regY:116.6,x:726.7,y:400.6},0).wait(1).to({x:726.8},0).wait(1).to({x:727},0).wait(1).to({x:727.1},0).wait(1).to({x:727.3},0).wait(1).to({x:727.5},0).wait(1).to({x:727.6},0).wait(1).to({x:727.8},0).wait(1).to({x:727.9},0).wait(1).to({x:728.1},0).wait(1).to({x:728.2},0).wait(1).to({x:728.4},0).wait(1).to({x:728.6},0).wait(1).to({x:728.7},0).wait(1).to({x:728.9},0).wait(1).to({x:729},0).wait(1).to({x:729.2},0).wait(1).to({x:729.4},0).wait(1).to({x:729.5},0).wait(1).to({x:729.7},0).wait(1).to({x:729.8},0).wait(1).to({x:730},0).wait(1).to({x:730.1},0).wait(1).to({x:730.3},0).wait(1).to({x:730.5},0).wait(1).to({x:730.6},0).wait(1).to({x:730.8},0).wait(1).to({x:730.9},0).wait(1).to({x:731.1},0).wait(1).to({x:731.3},0).wait(1).to({x:731.4},0).wait(1).to({x:731.6},0).wait(1).to({x:731.7},0).wait(1).to({x:731.9},0).wait(1).to({x:732},0).wait(1).to({x:732.2},0).wait(1).to({x:732.4},0).wait(1).to({x:732.5},0).wait(1).to({x:732.7},0).wait(1).to({x:732.8},0).wait(1).to({x:733},0).wait(1).to({x:732.8},0).wait(1).to({x:732.7},0).wait(1).to({x:732.5},0).wait(1).to({x:732.4},0).wait(1).to({x:732.2},0).wait(1).to({x:732.1},0).wait(1).to({x:731.9},0).wait(1).to({x:731.8},0).wait(1).to({x:731.6},0).wait(1).to({x:731.5},0).wait(1).to({x:731.3},0).wait(1).to({x:731.2},0).wait(1).to({x:731},0).wait(1).to({x:730.9},0).wait(1).to({x:730.7},0).wait(1).to({x:730.6},0).wait(1).to({x:730.4},0).wait(1).to({x:730.3},0).wait(1).to({x:730.1},0).wait(1).to({x:730},0).wait(1).to({x:729.8},0).wait(1).to({x:729.7},0).wait(1).to({x:729.5},0).wait(1).to({x:729.4},0).wait(1).to({x:729.2},0).wait(1).to({x:729.1},0).wait(1).to({x:728.9},0).wait(1).to({x:728.8},0).wait(1).to({x:728.6},0).wait(1).to({x:728.5},0).wait(1).to({x:728.3},0).wait(1).to({x:728.2},0).wait(1).to({x:728},0).wait(1).to({x:727.9},0).wait(1).to({x:727.7},0).wait(1).to({x:727.6},0).wait(1).to({x:727.4},0).wait(1).to({x:727.3},0).wait(1).to({x:727.1},0).wait(1).to({x:727},0).wait(1).to({x:726.8},0).wait(1).to({x:726.7},0).wait(1).to({x:726.5},0).wait(1));

	// Layer 10
	this.instance_7 = new lib.Symbol51();
	this.instance_7.parent = this;
	this.instance_7.setTransform(429.3,1185.2,1,1,0,0,0,245,132.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:248.5,regY:136.3,x:433.3,y:1188.7},0).wait(1).to({x:433.7},0).wait(1).to({x:434.2},0).wait(1).to({x:434.6},0).wait(1).to({x:435.1},0).wait(1).to({x:435.5},0).wait(1).to({x:436},0).wait(1).to({x:436.4},0).wait(1).to({x:436.9},0).wait(1).to({x:437.4},0).wait(1).to({x:437.8},0).wait(1).to({x:438.3},0).wait(1).to({x:438.7},0).wait(1).to({x:439.2},0).wait(1).to({x:439.6},0).wait(1).to({x:440.1},0).wait(1).to({x:440.6},0).wait(1).to({x:441},0).wait(1).to({x:441.5},0).wait(1).to({x:441.9},0).wait(1).to({x:442.4},0).wait(1).to({x:442.8},0).wait(1).to({x:443.3},0).wait(1).to({x:443.7},0).wait(1).to({x:444.2},0).wait(1).to({x:444.7},0).wait(1).to({x:445.1},0).wait(1).to({x:445.6},0).wait(1).to({x:446},0).wait(1).to({x:446.5},0).wait(1).to({x:446.9},0).wait(1).to({x:447.4},0).wait(1).to({x:447.9},0).wait(1).to({x:448.3},0).wait(1).to({x:448.8},0).wait(1).to({x:449.2},0).wait(1).to({x:449.7},0).wait(1).to({x:450.1},0).wait(1).to({x:450.6},0).wait(1).to({x:451},0).wait(1).to({x:451.5},0).wait(1).to({x:451.1},0).wait(1).to({x:450.6},0).wait(1).to({x:450.2},0).wait(1).to({x:449.8},0).wait(1).to({x:449.3},0).wait(1).to({x:448.9},0).wait(1).to({x:448.5},0).wait(1).to({x:448},0).wait(1).to({x:447.6},0).wait(1).to({x:447.2},0).wait(1).to({x:446.7},0).wait(1).to({x:446.3},0).wait(1).to({x:445.8},0).wait(1).to({x:445.4},0).wait(1).to({x:445},0).wait(1).to({x:444.5},0).wait(1).to({x:444.1},0).wait(1).to({x:443.7},0).wait(1).to({x:443.2},0).wait(1).to({x:442.8},0).wait(1).to({x:442.4},0).wait(1).to({x:441.9},0).wait(1).to({x:441.5},0).wait(1).to({x:441.1},0).wait(1).to({x:440.6},0).wait(1).to({x:440.2},0).wait(1).to({x:439.8},0).wait(1).to({x:439.3},0).wait(1).to({x:438.9},0).wait(1).to({x:438.5},0).wait(1).to({x:438},0).wait(1).to({x:437.6},0).wait(1).to({x:437.1},0).wait(1).to({x:436.7},0).wait(1).to({x:436.3},0).wait(1).to({x:435.8},0).wait(1).to({x:435.4},0).wait(1).to({x:435},0).wait(1).to({x:434.5},0).wait(1).to({x:434.1},0).wait(1).to({x:433.7},0).wait(1).to({x:433.2},0).wait(1).to({x:432.8},0).wait(1));

	// Layer 1
	this.instance_8 = new lib.Symbol44();
	this.instance_8.parent = this;
	this.instance_8.setTransform(568.6,612.4,1,1,0,0,0,568.6,564.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:791.2,regY:943.4,x:791.7,y:991.1},0).wait(1).to({x:792.2},0).wait(1).to({x:792.7},0).wait(1).to({x:793.2},0).wait(1).to({x:793.6},0).wait(1).to({x:794.1},0).wait(1).to({x:794.6},0).wait(1).to({x:795.1},0).wait(1).to({x:795.6},0).wait(1).to({x:796.1},0).wait(1).to({x:796.6},0).wait(1).to({x:797.1},0).wait(1).to({x:797.5},0).wait(1).to({x:798},0).wait(1).to({x:798.5},0).wait(1).to({x:799},0).wait(1).to({x:799.5},0).wait(1).to({x:800},0).wait(1).to({x:800.5},0).wait(1).to({x:801},0).wait(1).to({x:801.4},0).wait(1).to({x:801.9},0).wait(1).to({x:802.4},0).wait(1).to({x:802.9},0).wait(1).to({x:803.4},0).wait(1).to({x:803.9},0).wait(1).to({x:804.4},0).wait(1).to({x:804.9},0).wait(1).to({x:805.3},0).wait(1).to({x:805.8},0).wait(1).to({x:806.3},0).wait(1).to({x:806.8},0).wait(1).to({x:807.3},0).wait(1).to({x:807.8},0).wait(1).to({x:808.3},0).wait(1).to({x:808.8},0).wait(1).to({x:809.2},0).wait(1).to({x:809.7},0).wait(1).to({x:810.2},0).wait(1).to({x:810.7},0).wait(1).to({x:811.2},0).wait(1).to({x:810.7},0).wait(1).to({x:810.3},0).wait(1).to({x:809.8},0).wait(1).to({x:809.3},0).wait(1).to({x:808.9},0).wait(1).to({x:808.4},0).wait(1).to({x:807.9},0).wait(1).to({x:807.5},0).wait(1).to({x:807},0).wait(1).to({x:806.5},0).wait(1).to({x:806.1},0).wait(1).to({x:805.6},0).wait(1).to({x:805.2},0).wait(1).to({x:804.7},0).wait(1).to({x:804.2},0).wait(1).to({x:803.8},0).wait(1).to({x:803.3},0).wait(1).to({x:802.8},0).wait(1).to({x:802.4},0).wait(1).to({x:801.9},0).wait(1).to({x:801.4},0).wait(1).to({x:801},0).wait(1).to({x:800.5},0).wait(1).to({x:800},0).wait(1).to({x:799.6},0).wait(1).to({x:799.1},0).wait(1).to({x:798.6},0).wait(1).to({x:798.2},0).wait(1).to({x:797.7},0).wait(1).to({x:797.2},0).wait(1).to({x:796.8},0).wait(1).to({x:796.3},0).wait(1).to({x:795.9},0).wait(1).to({x:795.4},0).wait(1).to({x:794.9},0).wait(1).to({x:794.5},0).wait(1).to({x:794},0).wait(1).to({x:793.5},0).wait(1).to({x:793.1},0).wait(1).to({x:792.6},0).wait(1).to({x:792.1},0).wait(1).to({x:791.7},0).wait(1).to({x:791.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,1173.3,1354.4);


(lib.cloud_group3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol51();
	this.instance.parent = this;
	this.instance.setTransform(269.5,962.9,1,1,0,0,0,245,132.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:248.5,regY:136.3,x:272.4,y:966.4},0).wait(1).to({x:271.9},0).wait(1).to({x:271.3},0).wait(1).to({x:270.8},0).wait(1).to({x:270.2},0).wait(1).to({x:269.7},0).wait(1).to({x:269.1},0).wait(1).to({x:268.5},0).wait(1).to({x:268},0).wait(1).to({x:267.4},0).wait(1).to({x:266.9},0).wait(1).to({x:266.3},0).wait(1).to({x:265.8},0).wait(1).to({x:265.2},0).wait(1).to({x:264.6},0).wait(1).to({x:264.1},0).wait(1).to({x:263.5},0).wait(1).to({x:263},0).wait(1).to({x:262.4},0).wait(1).to({x:261.9},0).wait(1).to({x:261.3},0).wait(1).to({x:260.8},0).wait(1).to({x:260.2},0).wait(1).to({x:259.6},0).wait(1).to({x:259.1},0).wait(1).to({x:258.5},0).wait(1).to({x:258},0).wait(1).to({x:257.4},0).wait(1).to({x:256.9},0).wait(1).to({x:256.3},0).wait(1).to({x:255.7},0).wait(1).to({x:255.2},0).wait(1).to({x:254.6},0).wait(1).to({x:254.1},0).wait(1).to({x:253.5},0).wait(1).to({x:253},0).wait(1).to({x:252.4},0).wait(1).to({x:251.8},0).wait(1).to({x:251.3},0).wait(1).to({x:250.7},0).wait(1).to({x:250.2},0).wait(1).to({x:249.6},0).wait(1).to({x:249.1},0).wait(1).to({x:248.5},0).wait(1).to({x:249},0).wait(1).to({x:249.6},0).wait(1).to({x:250.1},0).wait(1).to({x:250.7},0).wait(1).to({x:251.2},0).wait(1).to({x:251.8},0).wait(1).to({x:252.3},0).wait(1).to({x:252.9},0).wait(1).to({x:253.4},0).wait(1).to({x:253.9},0).wait(1).to({x:254.5},0).wait(1).to({x:255},0).wait(1).to({x:255.6},0).wait(1).to({x:256.1},0).wait(1).to({x:256.7},0).wait(1).to({x:257.2},0).wait(1).to({x:257.8},0).wait(1).to({x:258.3},0).wait(1).to({x:258.8},0).wait(1).to({x:259.4},0).wait(1).to({x:259.9},0).wait(1).to({x:260.5},0).wait(1).to({x:261},0).wait(1).to({x:261.6},0).wait(1).to({x:262.1},0).wait(1).to({x:262.7},0).wait(1).to({x:263.2},0).wait(1).to({x:263.7},0).wait(1).to({x:264.3},0).wait(1).to({x:264.8},0).wait(1).to({x:265.4},0).wait(1).to({x:265.9},0).wait(1).to({x:266.5},0).wait(1).to({x:267},0).wait(1).to({x:267.6},0).wait(1).to({x:268.1},0).wait(1).to({x:268.6},0).wait(1).to({x:269.2},0).wait(1).to({x:269.7},0).wait(1).to({x:270.3},0).wait(1).to({x:270.8},0).wait(1).to({x:271.4},0).wait(1).to({x:271.9},0).wait(1).to({x:272.5},0).wait(1).to({x:273},0).wait(1));

	// Layer 8
	this.instance_1 = new lib.Symbol50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(135.8,121.4,1,1,0,0,0,135.8,73.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:139.3,regY:77.2,x:139.6,y:124.9},0).wait(1).to({x:139.9},0).wait(1).to({x:140.2},0).wait(1).to({x:140.5},0).wait(1).to({x:140.8},0).wait(1).to({x:141.1},0).wait(1).to({x:141.4},0).wait(1).to({x:141.8},0).wait(1).to({x:142.1},0).wait(1).to({x:142.4},0).wait(1).to({x:142.7},0).wait(1).to({x:143},0).wait(1).to({x:143.3},0).wait(1).to({x:143.6},0).wait(1).to({x:143.9},0).wait(1).to({x:144.2},0).wait(1).to({x:144.5},0).wait(1).to({x:144.8},0).wait(1).to({x:145.1},0).wait(1).to({x:145.4},0).wait(1).to({x:145.7},0).wait(1).to({x:146.1},0).wait(1).to({x:146.4},0).wait(1).to({x:146.7},0).wait(1).to({x:147},0).wait(1).to({x:147.3},0).wait(1).to({x:147.6},0).wait(1).to({x:147.9},0).wait(1).to({x:148.2},0).wait(1).to({x:148.5},0).wait(1).to({x:148.8},0).wait(1).to({x:149.1},0).wait(1).to({x:149.4},0).wait(1).to({x:149.7},0).wait(1).to({x:150},0).wait(1).to({x:150.3},0).wait(1).to({x:150.7},0).wait(1).to({x:151},0).wait(1).to({x:151.3},0).wait(1).to({x:151.6},0).wait(1).to({x:151.9},0).wait(1).to({x:152.2},0).wait(1).to({x:152.5},0).wait(1).to({x:152.8},0).wait(1).to({x:152.5},0).wait(1).to({x:152.2},0).wait(1).to({x:151.9},0).wait(1).to({x:151.6},0).wait(1).to({x:151.3},0).wait(1).to({x:151},0).wait(1).to({x:150.7},0).wait(1).to({x:150.4},0).wait(1).to({x:150.1},0).wait(1).to({x:149.8},0).wait(1).to({x:149.5},0).wait(1).to({x:149.2},0).wait(1).to({x:148.9},0).wait(1).to({x:148.6},0).wait(1).to({x:148.3},0).wait(1).to({x:148},0).wait(1).to({x:147.7},0).wait(1).to({x:147.4},0).wait(1).to({x:147.1},0).wait(1).to({x:146.8},0).wait(1).to({x:146.5},0).wait(1).to({x:146.2},0).wait(1).to({x:145.9},0).wait(1).to({x:145.6},0).wait(1).to({x:145.3},0).wait(1).to({x:145},0).wait(1).to({x:144.7},0).wait(1).to({x:144.4},0).wait(1).to({x:144.1},0).wait(1).to({x:143.8},0).wait(1).to({x:143.5},0).wait(1).to({x:143.2},0).wait(1).to({x:142.9},0).wait(1).to({x:142.6},0).wait(1).to({x:142.3},0).wait(1).to({x:142},0).wait(1).to({x:141.7},0).wait(1).to({x:141.4},0).wait(1).to({x:141.1},0).wait(1).to({x:140.8},0).wait(1).to({x:140.5},0).wait(1).to({x:140.2},0).wait(1).to({x:139.9},0).wait(1).to({x:139.6},0).wait(1).to({x:139.3},0).wait(1));

	// Layer 7
	this.instance_2 = new lib.Symbol49();
	this.instance_2.parent = this;
	this.instance_2.setTransform(833.1,86.1,1,1,0,0,0,158.8,86.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:162.7,regY:90,x:837.5,y:90},0).wait(1).to({x:838.1},0).wait(1).to({x:838.6},0).wait(1).to({x:839.2},0).wait(1).to({x:839.7},0).wait(1).to({x:840.3},0).wait(1).to({x:840.8},0).wait(1).to({x:841.4},0).wait(1).to({x:841.9},0).wait(1).to({x:842.5},0).wait(1).to({x:843},0).wait(1).to({x:843.5},0).wait(1).to({x:844.1},0).wait(1).to({x:844.6},0).wait(1).to({x:845.2},0).wait(1).to({x:845.7},0).wait(1).to({x:846.3},0).wait(1).to({x:846.8},0).wait(1).to({x:847.4},0).wait(1).to({x:847.9},0).wait(1).to({x:848.5},0).wait(1).to({x:849},0).wait(1).to({x:849.5},0).wait(1).to({x:850.1},0).wait(1).to({x:850.6},0).wait(1).to({x:851.2},0).wait(1).to({x:851.7},0).wait(1).to({x:852.3},0).wait(1).to({x:852.8},0).wait(1).to({x:853.4},0).wait(1).to({x:853.9},0).wait(1).to({x:854.5},0).wait(1).to({x:855},0).wait(1).to({x:855.5},0).wait(1).to({x:856.1},0).wait(1).to({x:856.6},0).wait(1).to({x:857.2},0).wait(1).to({x:857.7},0).wait(1).to({x:858.3},0).wait(1).to({x:858.8},0).wait(1).to({x:859.4},0).wait(1).to({x:859.9},0).wait(1).to({x:860.5},0).wait(1).to({x:861},0).wait(1).to({x:860.5},0).wait(1).to({x:859.9},0).wait(1).to({x:859.4},0).wait(1).to({x:858.9},0).wait(1).to({x:858.3},0).wait(1).to({x:857.8},0).wait(1).to({x:857.3},0).wait(1).to({x:856.7},0).wait(1).to({x:856.2},0).wait(1).to({x:855.7},0).wait(1).to({x:855.1},0).wait(1).to({x:854.6},0).wait(1).to({x:854.1},0).wait(1).to({x:853.5},0).wait(1).to({x:853},0).wait(1).to({x:852.5},0).wait(1).to({x:851.9},0).wait(1).to({x:851.4},0).wait(1).to({x:850.9},0).wait(1).to({x:850.3},0).wait(1).to({x:849.8},0).wait(1).to({x:849.3},0).wait(1).to({x:848.7},0).wait(1).to({x:848.2},0).wait(1).to({x:847.7},0).wait(1).to({x:847.1},0).wait(1).to({x:846.6},0).wait(1).to({x:846.1},0).wait(1).to({x:845.5},0).wait(1).to({x:845},0).wait(1).to({x:844.5},0).wait(1).to({x:843.9},0).wait(1).to({x:843.4},0).wait(1).to({x:842.9},0).wait(1).to({x:842.3},0).wait(1).to({x:841.8},0).wait(1).to({x:841.3},0).wait(1).to({x:840.7},0).wait(1).to({x:840.2},0).wait(1).to({x:839.7},0).wait(1).to({x:839.1},0).wait(1).to({x:838.6},0).wait(1).to({x:838.1},0).wait(1).to({x:837.5},0).wait(1).to({x:837},0).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol48();
	this.instance_3.parent = this;
	this.instance_3.setTransform(153.4,749,1,1,0,0,0,246.5,133.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:250,regY:137.1,x:157.4,y:752.5},0).wait(1).to({x:157.8},0).wait(1).to({x:158.2},0).wait(1).to({x:158.6},0).wait(1).to({x:159},0).wait(1).to({x:159.4},0).wait(1).to({x:159.8},0).wait(1).to({x:160.2},0).wait(1).to({x:160.6},0).wait(1).to({x:161},0).wait(1).to({x:161.4},0).wait(1).to({x:161.9},0).wait(1).to({x:162.3},0).wait(1).to({x:162.7},0).wait(1).to({x:163.1},0).wait(1).to({x:163.5},0).wait(1).to({x:163.9},0).wait(1).to({x:164.3},0).wait(1).to({x:164.7},0).wait(1).to({x:165.1},0).wait(1).to({x:165.5},0).wait(1).to({x:165.9},0).wait(1).to({x:166.4},0).wait(1).to({x:166.8},0).wait(1).to({x:167.2},0).wait(1).to({x:167.6},0).wait(1).to({x:168},0).wait(1).to({x:168.4},0).wait(1).to({x:168.8},0).wait(1).to({x:169.2},0).wait(1).to({x:169.6},0).wait(1).to({x:170},0).wait(1).to({x:170.4},0).wait(1).to({x:170.9},0).wait(1).to({x:171.3},0).wait(1).to({x:171.7},0).wait(1).to({x:172.1},0).wait(1).to({x:172.5},0).wait(1).to({x:172.9},0).wait(1).to({x:173.3},0).wait(1).to({x:173.7},0).wait(1).to({x:174.1},0).wait(1).to({x:174.5},0).wait(1).to({x:174.9},0).wait(1).to({x:174.5},0).wait(1).to({x:174.1},0).wait(1).to({x:173.7},0).wait(1).to({x:173.3},0).wait(1).to({x:172.9},0).wait(1).to({x:172.5},0).wait(1).to({x:172.1},0).wait(1).to({x:171.7},0).wait(1).to({x:171.3},0).wait(1).to({x:170.9},0).wait(1).to({x:170.5},0).wait(1).to({x:170.1},0).wait(1).to({x:169.7},0).wait(1).to({x:169.3},0).wait(1).to({x:168.9},0).wait(1).to({x:168.5},0).wait(1).to({x:168.1},0).wait(1).to({x:167.7},0).wait(1).to({x:167.3},0).wait(1).to({x:166.9},0).wait(1).to({x:166.5},0).wait(1).to({x:166.1},0).wait(1).to({x:165.7},0).wait(1).to({x:165.3},0).wait(1).to({x:164.9},0).wait(1).to({x:164.5},0).wait(1).to({x:164.1},0).wait(1).to({x:163.7},0).wait(1).to({x:163.3},0).wait(1).to({x:162.9},0).wait(1).to({x:162.5},0).wait(1).to({x:162.1},0).wait(1).to({x:161.7},0).wait(1).to({x:161.3},0).wait(1).to({x:160.9},0).wait(1).to({x:160.5},0).wait(1).to({x:160.1},0).wait(1).to({x:159.7},0).wait(1).to({x:159.3},0).wait(1).to({x:158.9},0).wait(1).to({x:158.5},0).wait(1).to({x:158.1},0).wait(1).to({x:157.7},0).wait(1).to({x:157.3},0).wait(1).to({x:156.9},0).wait(1));

	// Layer 5
	this.instance_4 = new lib.Symbol47();
	this.instance_4.parent = this;
	this.instance_4.setTransform(31.3,505.2,1,1,0,0,0,254,137.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:257.6,regY:141.3,x:34.4,y:508.8},0).wait(1).to({x:33.8},0).wait(1).to({x:33.2},0).wait(1).to({x:32.6},0).wait(1).to({x:32},0).wait(1).to({x:31.4},0).wait(1).to({x:30.8},0).wait(1).to({x:30.2},0).wait(1).to({x:29.6},0).wait(1).to({x:29},0).wait(1).to({x:28.4},0).wait(1).to({x:27.9},0).wait(1).to({x:27.3},0).wait(1).to({x:26.7},0).wait(1).to({x:26.1},0).wait(1).to({x:25.5},0).wait(1).to({x:24.9},0).wait(1).to({x:24.3},0).wait(1).to({x:23.7},0).wait(1).to({x:23.1},0).wait(1).to({x:22.5},0).wait(1).to({x:21.9},0).wait(1).to({x:21.4},0).wait(1).to({x:20.8},0).wait(1).to({x:20.2},0).wait(1).to({x:19.6},0).wait(1).to({x:19},0).wait(1).to({x:18.4},0).wait(1).to({x:17.8},0).wait(1).to({x:17.2},0).wait(1).to({x:16.6},0).wait(1).to({x:16},0).wait(1).to({x:15.4},0).wait(1).to({x:14.9},0).wait(1).to({x:14.3},0).wait(1).to({x:13.7},0).wait(1).to({x:13.1},0).wait(1).to({x:12.5},0).wait(1).to({x:11.9},0).wait(1).to({x:11.3},0).wait(1).to({x:10.7},0).wait(1).to({x:10.1},0).wait(1).to({x:9.5},0).wait(1).to({x:8.9},0).wait(1).to({x:9.5},0).wait(1).to({x:10.1},0).wait(1).to({x:10.7},0).wait(1).to({x:11.3},0).wait(1).to({x:11.8},0).wait(1).to({x:12.4},0).wait(1).to({x:13},0).wait(1).to({x:13.6},0).wait(1).to({x:14.1},0).wait(1).to({x:14.7},0).wait(1).to({x:15.3},0).wait(1).to({x:15.9},0).wait(1).to({x:16.5},0).wait(1).to({x:17},0).wait(1).to({x:17.6},0).wait(1).to({x:18.2},0).wait(1).to({x:18.8},0).wait(1).to({x:19.3},0).wait(1).to({x:19.9},0).wait(1).to({x:20.5},0).wait(1).to({x:21.1},0).wait(1).to({x:21.7},0).wait(1).to({x:22.2},0).wait(1).to({x:22.8},0).wait(1).to({x:23.4},0).wait(1).to({x:24},0).wait(1).to({x:24.5},0).wait(1).to({x:25.1},0).wait(1).to({x:25.7},0).wait(1).to({x:26.3},0).wait(1).to({x:26.9},0).wait(1).to({x:27.4},0).wait(1).to({x:28},0).wait(1).to({x:28.6},0).wait(1).to({x:29.2},0).wait(1).to({x:29.7},0).wait(1).to({x:30.3},0).wait(1).to({x:30.9},0).wait(1).to({x:31.5},0).wait(1).to({x:32.1},0).wait(1).to({x:32.6},0).wait(1).to({x:33.2},0).wait(1).to({x:33.8},0).wait(1).to({x:34.4},0).wait(1).to({x:34.9},0).wait(1));

	// Layer 4
	this.instance_5 = new lib.Symbol46();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1029,586.3,1,1,0,0,0,274.4,148.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:278.3,regY:152.7,x:1032.4,y:590.2},0).wait(1).to({x:1032},0).wait(1).to({x:1031.5},0).wait(1).to({x:1031.1},0).wait(1).to({x:1030.6},0).wait(1).to({x:1030.2},0).wait(1).to({x:1029.7},0).wait(1).to({x:1029.3},0).wait(1).to({x:1028.8},0).wait(1).to({x:1028.4},0).wait(1).to({x:1027.9},0).wait(1).to({x:1027.4},0).wait(1).to({x:1027},0).wait(1).to({x:1026.5},0).wait(1).to({x:1026.1},0).wait(1).to({x:1025.6},0).wait(1).to({x:1025.2},0).wait(1).to({x:1024.7},0).wait(1).to({x:1024.3},0).wait(1).to({x:1023.8},0).wait(1).to({x:1023.4},0).wait(1).to({x:1022.9},0).wait(1).to({x:1022.4},0).wait(1).to({x:1022},0).wait(1).to({x:1021.5},0).wait(1).to({x:1021.1},0).wait(1).to({x:1020.6},0).wait(1).to({x:1020.2},0).wait(1).to({x:1019.7},0).wait(1).to({x:1019.3},0).wait(1).to({x:1018.8},0).wait(1).to({x:1018.4},0).wait(1).to({x:1017.9},0).wait(1).to({x:1017.4},0).wait(1).to({x:1017},0).wait(1).to({x:1016.5},0).wait(1).to({x:1016.1},0).wait(1).to({x:1015.6},0).wait(1).to({x:1015.2},0).wait(1).to({x:1014.7},0).wait(1).to({x:1014.3},0).wait(1).to({x:1013.8},0).wait(1).to({x:1013.4},0).wait(1).to({x:1012.9},0).wait(1).to({x:1013.3},0).wait(1).to({x:1013.8},0).wait(1).to({x:1014.2},0).wait(1).to({x:1014.7},0).wait(1).to({x:1015.1},0).wait(1).to({x:1015.6},0).wait(1).to({x:1016},0).wait(1).to({x:1016.5},0).wait(1).to({x:1016.9},0).wait(1).to({x:1017.3},0).wait(1).to({x:1017.8},0).wait(1).to({x:1018.2},0).wait(1).to({x:1018.7},0).wait(1).to({x:1019.1},0).wait(1).to({x:1019.6},0).wait(1).to({x:1020},0).wait(1).to({x:1020.5},0).wait(1).to({x:1020.9},0).wait(1).to({x:1021.3},0).wait(1).to({x:1021.8},0).wait(1).to({x:1022.2},0).wait(1).to({x:1022.7},0).wait(1).to({x:1023.1},0).wait(1).to({x:1023.6},0).wait(1).to({x:1024},0).wait(1).to({x:1024.5},0).wait(1).to({x:1024.9},0).wait(1).to({x:1025.3},0).wait(1).to({x:1025.8},0).wait(1).to({x:1026.2},0).wait(1).to({x:1026.7},0).wait(1).to({x:1027.1},0).wait(1).to({x:1027.6},0).wait(1).to({x:1028},0).wait(1).to({x:1028.5},0).wait(1).to({x:1028.9},0).wait(1).to({x:1029.3},0).wait(1).to({x:1029.8},0).wait(1).to({x:1030.2},0).wait(1).to({x:1030.7},0).wait(1).to({x:1031.1},0).wait(1).to({x:1031.6},0).wait(1).to({x:1032},0).wait(1).to({x:1032.5},0).wait(1).to({x:1032.9},0).wait(1));

	// Layer 6
	this.instance_6 = new lib.Symbol45();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1027.1,397,1,1,0,0,0,208.5,113);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:212,regY:116.6,x:1030.9,y:400.6},0).wait(1).to({x:1031.1},0).wait(1).to({x:1031.4},0).wait(1).to({x:1031.7},0).wait(1).to({x:1032},0).wait(1).to({x:1032.2},0).wait(1).to({x:1032.5},0).wait(1).to({x:1032.8},0).wait(1).to({x:1033.1},0).wait(1).to({x:1033.3},0).wait(1).to({x:1033.6},0).wait(1).to({x:1033.9},0).wait(1).to({x:1034.1},0).wait(1).to({x:1034.4},0).wait(1).to({x:1034.7},0).wait(1).to({x:1035},0).wait(1).to({x:1035.2},0).wait(1).to({x:1035.5},0).wait(1).to({x:1035.8},0).wait(1).to({x:1036.1},0).wait(1).to({x:1036.3},0).wait(1).to({x:1036.6},0).wait(1).to({x:1036.9},0).wait(1).to({x:1037.1},0).wait(1).to({x:1037.4},0).wait(1).to({x:1037.7},0).wait(1).to({x:1038},0).wait(1).to({x:1038.2},0).wait(1).to({x:1038.5},0).wait(1).to({x:1038.8},0).wait(1).to({x:1039.1},0).wait(1).to({x:1039.3},0).wait(1).to({x:1039.6},0).wait(1).to({x:1039.9},0).wait(1).to({x:1040.1},0).wait(1).to({x:1040.4},0).wait(1).to({x:1040.7},0).wait(1).to({x:1041},0).wait(1).to({x:1041.2},0).wait(1).to({x:1041.5},0).wait(1).to({x:1041.8},0).wait(1).to({x:1042.1},0).wait(1).to({x:1042.3},0).wait(1).to({x:1042.6},0).wait(1).to({x:1042.3},0).wait(1).to({x:1042.1},0).wait(1).to({x:1041.8},0).wait(1).to({x:1041.5},0).wait(1).to({x:1041.3},0).wait(1).to({x:1041},0).wait(1).to({x:1040.7},0).wait(1).to({x:1040.5},0).wait(1).to({x:1040.2},0).wait(1).to({x:1039.9},0).wait(1).to({x:1039.7},0).wait(1).to({x:1039.4},0).wait(1).to({x:1039.1},0).wait(1).to({x:1038.9},0).wait(1).to({x:1038.6},0).wait(1).to({x:1038.3},0).wait(1).to({x:1038.1},0).wait(1).to({x:1037.8},0).wait(1).to({x:1037.5},0).wait(1).to({x:1037.3},0).wait(1).to({x:1037},0).wait(1).to({x:1036.7},0).wait(1).to({x:1036.5},0).wait(1).to({x:1036.2},0).wait(1).to({x:1035.9},0).wait(1).to({x:1035.7},0).wait(1).to({x:1035.4},0).wait(1).to({x:1035.1},0).wait(1).to({x:1034.9},0).wait(1).to({x:1034.6},0).wait(1).to({x:1034.3},0).wait(1).to({x:1034.1},0).wait(1).to({x:1033.8},0).wait(1).to({x:1033.5},0).wait(1).to({x:1033.3},0).wait(1).to({x:1033},0).wait(1).to({x:1032.7},0).wait(1).to({x:1032.5},0).wait(1).to({x:1032.2},0).wait(1).to({x:1031.9},0).wait(1).to({x:1031.7},0).wait(1).to({x:1031.4},0).wait(1).to({x:1031.1},0).wait(1).to({x:1030.9},0).wait(1).to({x:1030.6},0).wait(1));

	// Layer 1
	this.instance_7 = new lib.Symbol44();
	this.instance_7.parent = this;
	this.instance_7.setTransform(568.6,612.4,1,1,0,0,0,568.6,564.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:791.2,regY:943.4,x:791.5,y:991.1},0).wait(1).to({x:791.7},0).wait(1).to({x:791.9},0).wait(1).to({x:792.2},0).wait(1).to({x:792.5},0).wait(1).to({x:792.7},0).wait(1).to({x:792.9},0).wait(1).to({x:793.2},0).wait(1).to({x:793.5},0).wait(1).to({x:793.7},0).wait(1).to({x:794},0).wait(1).to({x:794.2},0).wait(1).to({x:794.5},0).wait(1).to({x:794.7},0).wait(1).to({x:794.9},0).wait(1).to({x:795.2},0).wait(1).to({x:795.5},0).wait(1).to({x:795.7},0).wait(1).to({x:796},0).wait(1).to({x:796.2},0).wait(1).to({x:796.5},0).wait(1).to({x:796.7},0).wait(1).to({x:797},0).wait(1).to({x:797.2},0).wait(1).to({x:797.5},0).wait(1).to({x:797.7},0).wait(1).to({x:798},0).wait(1).to({x:798.2},0).wait(1).to({x:798.5},0).wait(1).to({x:798.7},0).wait(1).to({x:799},0).wait(1).to({x:799.2},0).wait(1).to({x:799.5},0).wait(1).to({x:799.7},0).wait(1).to({x:800},0).wait(1).to({x:800.2},0).wait(1).to({x:800.5},0).wait(1).to({x:800.7},0).wait(1).to({x:801},0).wait(1).to({x:801.2},0).wait(1).to({x:801.5},0).wait(1).to({x:801.7},0).wait(1).to({x:802},0).wait(1).to({x:802.2},0).wait(1).to({x:802},0).wait(1).to({x:801.7},0).wait(1).to({x:801.5},0).wait(1).to({x:801.2},0).wait(1).to({x:801},0).wait(1).to({x:800.7},0).wait(1).to({x:800.5},0).wait(1).to({x:800.2},0).wait(1).to({x:800},0).wait(1).to({x:799.8},0).wait(1).to({x:799.5},0).wait(1).to({x:799.3},0).wait(1).to({x:799},0).wait(1).to({x:798.8},0).wait(1).to({x:798.5},0).wait(1).to({x:798.3},0).wait(1).to({x:798},0).wait(1).to({x:797.8},0).wait(1).to({x:797.6},0).wait(1).to({x:797.3},0).wait(1).to({x:797.1},0).wait(1).to({x:796.8},0).wait(1).to({x:796.6},0).wait(1).to({x:796.3},0).wait(1).to({x:796.1},0).wait(1).to({x:795.8},0).wait(1).to({x:795.6},0).wait(1).to({x:795.4},0).wait(1).to({x:795.1},0).wait(1).to({x:794.9},0).wait(1).to({x:794.6},0).wait(1).to({x:794.4},0).wait(1).to({x:794.1},0).wait(1).to({x:793.9},0).wait(1).to({x:793.6},0).wait(1).to({x:793.4},0).wait(1).to({x:793.2},0).wait(1).to({x:792.9},0).wait(1).to({x:792.7},0).wait(1).to({x:792.4},0).wait(1).to({x:792.2},0).wait(1).to({x:791.9},0).wait(1).to({x:791.7},0).wait(1).to({x:791.4},0).wait(1).to({x:791.2},0).wait(1));

	// Layer 10
	this.instance_8 = new lib.Symbol51();
	this.instance_8.parent = this;
	this.instance_8.setTransform(429.3,1185.2,1,1,0,0,0,245,132.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:248.5,regY:136.3,x:433,y:1188.7},0).wait(1).to({x:433.2},0).wait(1).to({x:433.3},0).wait(1).to({x:433.5},0).wait(1).to({x:433.7},0).wait(1).to({x:433.8},0).wait(1).to({x:434},0).wait(1).to({x:434.2},0).wait(1).to({x:434.4},0).wait(1).to({x:434.6},0).wait(1).to({x:434.7},0).wait(1).to({x:434.9},0).wait(1).to({x:435.1},0).wait(1).to({x:435.2},0).wait(1).to({x:435.4},0).wait(1).to({x:435.6},0).wait(1).to({x:435.8},0).wait(1).to({x:436},0).wait(1).to({x:436.1},0).wait(1).to({x:436.3},0).wait(1).to({x:436.5},0).wait(1).to({x:436.7},0).wait(1).to({x:436.8},0).wait(1).to({x:437},0).wait(1).to({x:437.2},0).wait(1).to({x:437.4},0).wait(1).to({x:437.5},0).wait(1).to({x:437.7},0).wait(1).to({x:437.9},0).wait(1).to({x:438},0).wait(1).to({x:438.2},0).wait(1).to({x:438.4},0).wait(1).to({x:438.6},0).wait(1).to({x:438.8},0).wait(1).to({x:438.9},0).wait(1).to({x:439.1},0).wait(1).to({x:439.3},0).wait(1).to({x:439.5},0).wait(1).to({x:439.6},0).wait(1).to({x:439.8},0).wait(1).to({x:440},0).wait(1).to({x:440.2},0).wait(1).to({x:440.3},0).wait(1).to({x:440.5},0).wait(1).to({x:440.3},0).wait(1).to({x:440.2},0).wait(1).to({x:440},0).wait(1).to({x:439.8},0).wait(1).to({x:439.6},0).wait(1).to({x:439.5},0).wait(1).to({x:439.3},0).wait(1).to({x:439.1},0).wait(1).to({x:439},0).wait(1).to({x:438.8},0).wait(1).to({x:438.6},0).wait(1).to({x:438.4},0).wait(1).to({x:438.3},0).wait(1).to({x:438.1},0).wait(1).to({x:437.9},0).wait(1).to({x:437.8},0).wait(1).to({x:437.6},0).wait(1).to({x:437.4},0).wait(1).to({x:437.2},0).wait(1).to({x:437.1},0).wait(1).to({x:436.9},0).wait(1).to({x:436.7},0).wait(1).to({x:436.6},0).wait(1).to({x:436.4},0).wait(1).to({x:436.2},0).wait(1).to({x:436.1},0).wait(1).to({x:435.9},0).wait(1).to({x:435.7},0).wait(1).to({x:435.5},0).wait(1).to({x:435.4},0).wait(1).to({x:435.2},0).wait(1).to({x:435},0).wait(1).to({x:434.9},0).wait(1).to({x:434.7},0).wait(1).to({x:434.5},0).wait(1).to({x:434.3},0).wait(1).to({x:434.2},0).wait(1).to({x:434},0).wait(1).to({x:433.8},0).wait(1).to({x:433.7},0).wait(1).to({x:433.5},0).wait(1).to({x:433.3},0).wait(1).to({x:433.1},0).wait(1).to({x:433},0).wait(1).to({x:432.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.7,-9,1562.3,1354.4);


(lib.charge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.charge_button = new lib.charge_button();
	this.charge_button.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.charge_button).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.2,-54.1,104.5,108.3);


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


(lib.bling4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(13.2,17.4,1,1,0,0,0,13.2,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:17.3,y:17.3,alpha:0.95},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.6,34.7);


(lib.bling2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(149.3,122.9,1,1,0,0,0,149.3,122.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,298.7,245.8);


(lib.bling1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(218.6,91.7,1,1,0,0,0,218.6,91.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.951},0).wait(1).to({alpha:0.927},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.878},0).wait(1).to({alpha:0.854},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.805},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.756},0).wait(1).to({alpha:0.732},0).wait(1).to({alpha:0.707},0).wait(1).to({alpha:0.683},0).wait(1).to({alpha:0.659},0).wait(1).to({alpha:0.634},0).wait(1).to({alpha:0.61},0).wait(1).to({alpha:0.585},0).wait(1).to({alpha:0.561},0).wait(1).to({alpha:0.537},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.488},0).wait(1).to({alpha:0.463},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.415},0).wait(1).to({alpha:0.39},0).wait(1).to({alpha:0.366},0).wait(1).to({alpha:0.341},0).wait(1).to({alpha:0.317},0).wait(1).to({alpha:0.293},0).wait(1).to({alpha:0.268},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.22},0).wait(1).to({alpha:0.195},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.146},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.098},0).wait(1).to({alpha:0.073},0).wait(1).to({alpha:0.049},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.079},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.132},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.237},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.289},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.342},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.395},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.605},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.658},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.763},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.816},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.921},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,437.3,183.4);


(lib.arrow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.real_arrow_1 = new lib.Symbol24();
	this.real_arrow_1.parent = this;
	this.real_arrow_1.setTransform(0,0,1,1,0,0,0,389.4,679.1);

	this.timeline.addTween(cjs.Tween.get(this.real_arrow_1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389.4,-679.1,779,1358.2);


(lib.welcomelayer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.arrow1 = new lib.arrow1();
	this.arrow1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.arrow1).wait(1));

}).prototype = getMCSymbolPrototype(lib.welcomelayer1, new cjs.Rectangle(-389.4,-679.1,779,1358.2), null);


(lib.welcome_mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hide_mask:21});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(10).call(this.frame_20).wait(12).call(this.frame_32).wait(1));

	// arrow
	this.arrow111 = new lib.real_arrow_1();
	this.arrow111.parent = this;
	this.arrow111.setTransform(159.5,388.9,1,1,0,0,0,64,81);
	this.arrow111.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.arrow111).wait(1).to({regX:68,regY:92.5,x:163.5,y:400.4,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({regX:64,regY:81,x:159,y:388.9},0).wait(1).to({regX:68,regY:92.5,x:163,y:400.4},0).wait(9).to({regX:64,regY:81,x:159,y:388.9},0).wait(1).to({regX:68,regY:92.5,x:163,y:400.4,alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));

	// Layer 1
	this.welcom_layer_1 = new lib.welcomelayer1();
	this.welcom_layer_1.parent = this;
	this.welcom_layer_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.welcom_layer_1).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(2).to({alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389.4,-679.1,779,1358.2);


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

	this.instance = new lib.ClipGroup_7();
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

	this.instance = new lib.ClipGroup_7();
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


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 7
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(23,-37.7,1,1,0,0,0,125,173.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:73,y:-98.4},7).to({x:109,y:243.6},11).to({_off:true},1).wait(1));

	// Layer 6
	this.instance_1 = new lib.ClipGroup_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.5,-0.2,1,1,0,0,0,123.5,136);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:103.5,y:-30},7).to({x:119.5,y:210},11).to({_off:true},1).wait(1));

	// Layer 5
	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-0.2,1,1,0,0,0,102,136);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:21,y:-44},7).to({x:37,y:237},11).to({_off:true},1).wait(1));

	// Layer 4
	this.instance_3 = new lib.ClipGroup_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-18.5,-17.6,1,1,0,0,0,120.7,153.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-72.3,y:-46.7},7).to({x:-117.3,y:206.3},11).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_4 = new lib.ClipGroup();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-0.2,1,1,0,0,0,102,136);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-24,y:-32},7).to({x:-42,y:151},11).to({_off:true},1).wait(1));

	// Layer 2
	this.instance_5 = new lib.ClipGroup_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-23.5,-0.2,1,1,0,0,0,125.6,136);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-118.4,y:-26},7).to({x:-160.4,y:128},11).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_6 = new lib.ClipGroup_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-2.3,20.1,1,1,0,0,0,113.5,156.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:27.5,y:-7.7},7).to({x:46.5,y:132.3},11).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.1,-211.3,297.1,387.8);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mapmask_gone:49,nextstep:60,closeTheachievement:109,mapmapmap:115});

	// timeline functions:
	this.frame_0 = function() {
		var canvas = this
		
		this.mapmask.addEventListener("click",tellyouhowtodo)
		function tellyouhowtodo(){
			canvas.gotoAndPlay("mapmask_gone");
		}
	}
	this.frame_48 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
		var canvas = this
		this.charge_2.addEventListener("click",energyEmpty)
		function energyEmpty(){
			canvas.barOfmap.gotoAndPlay("energy_empty");
			canvas.gotoAndPlay("nextstep");
			
		}
	}
	this.frame_69 = function() {
		var canvas = this
		this.whirlpool.addEventListener("click",ToWhirlpool)
		function ToWhirlpool(){
			canvas.parent.gotoAndPlay("page4");
		
		}
	}
	this.frame_108 = function() {
		this.stop();
	}
	this.frame_115 = function() {
		this.stop();
		var canvas = this
		
		this.backBtn.addEventListener("click",PineappleIsland)
		function PineappleIsland(){
			
			canvas.parent.gotoAndPlay("Pineapple");
			
		}
		var canvas = this
		this.topineapplepage.addEventListener("click",GotoPage6)
		function GotoPage6(){
			canvas.parent.gotoAndPlay("page6");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48).call(this.frame_48).wait(11).call(this.frame_59).wait(10).call(this.frame_69).wait(39).call(this.frame_108).wait(7).call(this.frame_115).wait(1));

	// mask3
	this.instance = new lib.Path_20();
	this.instance.parent = this;
	this.instance.setTransform(376.2,667,1,1,0,0,0,376.2,667);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).wait(1).to({regX:376.3,x:376.3,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).wait(1));

	// mask2
	this.instance_1 = new lib.CompoundPath_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(380,668.5,1,1,0,0,0,380,670.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(2).to({alpha:0.909},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0},0).wait(11).to({_off:true},1).wait(33));

	// mask1
	this.mapmask = new lib.Symbol22();
	this.mapmask.parent = this;
	this.mapmask.setTransform(415,701.2,1,1,0,0,0,417,739.2);
	this.mapmask.alpha = 0;
	this.mapmask._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mapmask).wait(13).to({_off:false},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(23).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(56));

	// position
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AE4C45").s().p("AiZBeIEzlMQgFAkgmBbQgjBThNCNQgmBHggA2g");
	this.shape.setTransform(266.2,332.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC5C4E").s().p("AhyCgQhzjeAAhOQAAheBDhCQBEhDBeAAQBgAABCBDQBEBCAABeQAABOhzDeQg5Bwg6BgQg5hgg5hwgAhnjkQgrAqAAA8QAAA7ArArQArApA8AAQA8AAAsgpQAqgrAAg7QAAg8gqgqQgsgrg8AAQg8AAgrArg");
	this.shape_1.setTransform(259,319.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhvBwQgugvAAhBQAAhBAugtQAvgvBAAAQBBAAAvAvQAuAtAABBQAABBguAvQgvAuhBAAQhAAAgvgug");
	this.shape_2.setTransform(258.9,307.6);

	this.instance_2 = new lib.Symbol52();
	this.instance_2.parent = this;
	this.instance_2.setTransform(259,319.4,1,1,0,0,0,23,36.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_2}]},72).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).wait(1).to({x:246,y:315.4},0).wait(1).to({x:233,y:311.4},0).wait(1).to({x:223,y:331.4},0).wait(1).to({x:205.9,y:336.8},0).wait(1).to({x:188.9,y:342.3},0).wait(1).to({x:190.9,y:364.3},0).wait(1).to({x:172.8,y:373.3},0).wait(1).to({x:154.8,y:382.3},0).wait(1).to({x:164.8,y:412.3},0).wait(1).to({x:158.6,y:419.3},0).wait(1).to({x:152.5,y:426.3},0).wait(1).to({x:148.5,y:507.7},0).wait(1).to({x:150.5,y:522.7},0).wait(1).to({x:152.6,y:537.7},0).wait(1).to({x:160.6,y:557.7},0).wait(1).to({x:168.6,y:577.7},0).wait(1).to({x:186.6,y:613.7},0).wait(1).to({x:194.6,y:628.7},0).wait(1).to({x:202.6,y:643.7},0).wait(1).to({x:233,y:637.7},0).wait(1).to({x:240,y:651.7},0).wait(1).to({x:247,y:665.7},0).wait(1).to({x:279,y:653.7},0).wait(1).to({x:300,y:659.7},0).wait(1).to({x:321,y:665.7},0).wait(1).to({x:358,y:651.7},0).wait(18));

	// name1
	this.instance_3 = new lib.WhirlpoolForest();
	this.instance_3.parent = this;
	this.instance_3.setTransform(381,317);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(116));

	// backbtn
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABlEDIj3jqQgLgKAAgPQAAgOALgKID3jqQAPgPAWAJQAUAJAAAWIAABUQAAAVgPAOIhgBaQgLAKABAOQgBAPALAKIBgBaQAPAOAAAVIAABUQAAAWgUAJQgIAEgHAAQgMAAgKgKg");
	this.shape_3.setTransform(72.3,79.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8DC89").s().p("AlHFJQiJiIAAjBQAAi/CJiJQCHiIDAAAQDAAACJCIQCICJAAC/QAADBiICIQiJCIjAAAQjAAAiHiIg");
	this.shape_4.setTransform(77.3,79.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlwFxQiZiYgBjZQABjXCZiZQCZiZDXgBQDZABCYCZQCZCZAADXQAADZiZCYQiYCZjZAAQjXAAiZiZg");
	this.shape_5.setTransform(77.3,79.3);

	this.backBtn = new lib.backBtn();
	this.backBtn.parent = this;
	this.backBtn.setTransform(77.3,79.3,1,1,0,0,0,52.2,52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.backBtn}]},115).wait(1));

	// charge2
	this.instance_4 = new lib.charge();
	this.instance_4.parent = this;
	this.instance_4.setTransform(669.1,1240.5);
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).wait(56));

	// charge2
	this.charge_2 = new lib.charge();
	this.charge_2.parent = this;
	this.charge_2.setTransform(669.1,1240.5);
	new cjs.ButtonHelper(this.charge_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.charge_2).wait(59).to({_off:true},1).wait(56));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EF5046").s().p("AgNCPQgIgBgHgDQgJgEgHgFQgHgGgFgKQgGgJgDgOQgDgNgBgTIAAh3QABgSADgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAHgDAIgBIANgBIAOABIAPAEQAIACAIAGQAGAFAGAKQAFAJAEAOQAEANAAATIAAB3QAAATgEANQgEAOgFAJQgGAKgHAGQgHAFgIAEIgPAEIgOABgAgShmQgGAIgBATIAACYQABASAGAIQAGAIAMAAQANAAAGgIQAHgIAAgSIAAiYQAAgTgHgIQgGgJgNAAQgMAAgGAJg");
	this.shape_6.setTransform(726.3,683.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EF5046").s().p("AgNCPQgIgBgHgDQgJgEgHgFQgHgGgFgKQgGgJgDgOQgEgNAAgTIAAh3QAAgSAEgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAIgDAHgBIANgBIAOABIAPAEQAIACAHAGQAIAFAFAKQAFAJAEAOQADANABATIAAB3QgBATgDANQgEAOgFAJQgFAKgIAGQgIAFgHAEIgPAEIgOABgAgShmQgHAIAAATIAACYQAAASAHAIQAGAIAMAAQANAAAGgIQAHgIAAgSIAAiYQAAgTgHgIQgGgJgNAAQgMAAgGAJg");
	this.shape_7.setTransform(708.9,683.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EF5046").s().p("AgNCPQgIgBgIgDQgIgEgHgFQgHgGgGgKQgFgJgDgOQgEgNABgTIAAh3QgBgSAEgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAIgDAHgBIANgBIAOABIAQAEQAHACAHAGQAIAFAFAKQAGAJADAOQADANAAATIAAB3QAAATgDANQgDAOgGAJQgGAKgHAGQgIAFgHAEIgPAEIgOABgAgShmQgHAIABATIAACYQgBASAHAIQAGAIAMAAQANAAAHgIQAFgIAAgSIAAiYQAAgTgFgIQgHgJgNAAQgMAAgGAJg");
	this.shape_8.setTransform(691.6,683.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EF5046").s().p("AgrCOIAAghIAhAAIAAjAIgjAfIgTgWIBAhDIAgAAIgBABIABgBIAAD6IAhAAIAAAhg");
	this.shape_9.setTransform(676,683.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EF5046").s().p("AgSBpQgHgIAAgQQAAgSAHgHQAHgIALAAQAMAAAIAIQAGAIAAARQAAAPgGAJQgIAIgMAAQgLAAgHgIgAgSg3QgHgJAAgPQAAgSAHgIQAHgHALAAQAMAAAIAIQAGAIAAARQAAAPgGAIQgIAJgMAAQgLAAgHgIg");
	this.shape_10.setTransform(657.7,686.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EF5046").s().p("AAcByIgchPIgBAAIgcBPIgpAAIAwhzIgthwIArAAIAYBLIAZhLIApAAIgsBsIAxB3g");
	this.shape_11.setTransform(646.1,686.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EF5046").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgHQAKgHANgHIANgGIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHABQgFADgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAIIgHAJIgGAMQgCAHAAAIQAAAOAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_12.setTransform(630.3,686.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EF5046").s().p("AA3COIAAheIABgqIABgjIACgeIABgUIgDAAIgrC4IgaAAIgri4IgDAAIABAUIACAeIAAAjIABAqIAABeIgoAAIAAkbIA4AAIAbBuIAHAiIAEAfIABAAIAFgfIAHgiIAchuIA3AAIAAEbg");
	this.shape_13.setTransform(611.4,683.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#BBBDBF").ss(2).p("AClAAIlJAA");
	this.shape_14.setTransform(671.3,1072.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BBBDBF").ss(2).p("ACmAAIlKAA");
	this.shape_15.setTransform(668.4,840.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#BBBDBF").ss(2).p("ACmAAIlKAA");
	this.shape_16.setTransform(668.4,950.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EgARAiAQgHgHAAgLMAAAhDbQAAgKAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAKMAAABDbQAAALgHAHQgIAHgKAAQgJAAgIgHg");
	this.shape_17.setTransform(655.8,966.5);

	this.barOfmap = new lib.map_bar2();
	this.barOfmap.parent = this;
	this.barOfmap.setTransform(667.1,1071.9,1,1,0,0,0,0,-124.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(3).p("EADDAl2ImFAAMAAAhIoQAAhQA5g5QA6g6BPAAQBRAAA5A6QA5A5AABQg");
	this.shape_18.setTransform(667.1,955.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D0D2D3").s().p("EgDCAl2MAAAhIoQAAhQA5g6QA5g4BQAAQBRAAA5A4QA5A6AABQMAAABIog");
	this.shape_19.setTransform(667.1,955.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.barOfmap},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(116));

	// Layer 16
	this.instance_5 = new lib.cloud_group3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(360,804,1,1,0,0,0,568.6,659.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(115).to({_off:false},0).wait(1));

	// cloud7
	this.instance_6 = new lib.clouds_group();
	this.instance_6.parent = this;
	this.instance_6.setTransform(360,733.5,1,1,0,0,0,568.6,588.6);

	this.instance_7 = new lib.clouds_group2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-208.6,145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},72).to({state:[]},43).wait(1));

	// whirlpool
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CAAB89").s().p("Ag6ArQAFgbAGgSQAFgMAOgPIAOgNIAkAAIALAJQAMALAEAHQAGANAEAtg");
	this.shape_20.setTransform(277.2,326,1.129,1.129);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9C8166").s().p("AhIA7QAMgzAGgIQAGgKAZgwIAiACQAkAEAGANQALAUAKBOg");
	this.shape_21.setTransform(277.1,324.2,1.129,1.129);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CAAB89").s().p("AhhBkIAIguQALgwAGgIQAMgQAXgGIAQgjQASgkAJgEQALgFAUAIQASAGAEAHQAEAEASBbIARBag");
	this.shape_22.setTransform(292.4,317.1,1.129,1.129);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9C8166").s().p("Ah2B6QAQhsAOgRQAOgTAdgHQAIgVALgWQAVgsAMgFQANgFAYAJQAXAIAFAIQAFAFAVBuIAVBug");
	this.shape_23.setTransform(291.6,314.6,1.129,1.129);

	this.instance_8 = new lib.Path_17();
	this.instance_8.parent = this;
	this.instance_8.setTransform(288.9,331.5,1.129,1.129,0,0,0,21.7,4.6);
	this.instance_8.alpha = 0.512;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CAAB89").s().p("AhLA3QAIgjAIgXQAFgPATgTIARgRIAuAAIAPAMQAOAOAFAKQAIAPAGA6g");
	this.shape_24.setTransform(191.5,346.2,1.129,1.129);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9C8166").s().p("AhcBLQAPhCAIgLQAFgGASgiIARggIAqACQAuAFAJARQAOAZALBkg");
	this.shape_25.setTransform(191.3,344,1.129,1.129);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CAAB89").s().p("AhFCGQALhhAIgcQAGgRAVgyIAVguIACgMQAFgNAKgDQALgDAGAPQADAIABAIIgGAcQgFAfADALQACALAMAUIAVAkQAJAQgDAsQgCAWgEATg");
	this.shape_26.setTransform(179.4,334.7,1.129,1.129);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9C8166").s().p("AhdCNQAJhVARgsIAZhYQARg4AZgHQAYgHAaAYQAMAMAHANIgIApQgEAqAMAKQASAOAHAgIAABjg");
	this.shape_27.setTransform(179,333.9,1.129,1.129);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#563B20").s().p("AgRCpIAAhVIhuAAIBVhVIg8AAIBThUIg2AAIBJhTIBKBTIg2AAIBTBUIg8AAIBVBVIhuAAIAABVg");
	this.shape_28.setTransform(187.7,285.5,1.129,1.129);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3C2D1D").s().p("AgRCpIAAhVIhuAAIBVhVIg8AAIBThUIg2AAIBJhTIBKBTIg2AAIBTBUIg8AAIBVBVIhuAAIAABVg");
	this.shape_29.setTransform(168.3,290,1.129,1.129);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B48258").s().p("AgMB2IAAg7IhMAAIA7g7IgqAAIA6g7IgmAAIAzg6IA0A6IgmAAIA6A7IgqAAIA7A7IhMAAIAAA7g");
	this.shape_30.setTransform(290.9,274.4,1.129,1.129);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B48258").s().p("AgUDCIAAhiIh+AAIBihhIhFAAIBghhIg/AAIBUhfIBVBfIg+AAIBgBhIhGAAIBiBhIh+AAIAABig");
	this.shape_31.setTransform(161.4,236.4,1.129,1.129);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CAAB89").s().p("AgUDDIAAhhIh/AAIBjhjIhGAAIBghhIg/AAIBVhgIBWBgIg/AAIBgBhIhGAAIBjBjIh/AAIAABhg");
	this.shape_32.setTransform(134.9,249.7,1.129,1.129);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.8)"],[0.325,1],-6.1,22.3,7.1,-18.4).s().p("AhjBrQAWhwAnhEQAfg2ApglQAcgaAcgOQAFgCAGABQAGACAEAFQAGAKgHAJQgzBBgKA2QgHAoAJBAQAFAfAGAYIivBsQADgrALg5g");
	this.shape_33.setTransform(204.9,275,1.129,1.129);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.8)"],[0.325,1],22.7,4,-17.7,-4.8).s().p("ABzBaQhygLhHggQhggsgvhHQgDgFABgGQABgGAFgEQAJgHAKAGQBDAsA6AFQAoAEA+gQQAggIAXgJIB8CkIgOAAQgmAAgxgEg");
	this.shape_34.setTransform(257.2,265.8,1.129,1.129);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.8)"],[0.325,1],-21.6,-8,14.8,7.7).s().p("ACoB/Qg6g4g3gQQgngLhAAEIg5AGIhai5IBiAYQBtAgBBAtQAyAjAiAtQAWAeAMAeQACAFgCAGQgDAGgFADQgFACgDAAQgGAAgFgFg");
	this.shape_35.setTransform(196,222.7,1.129,1.129);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.8)"],[0.325,1],7.9,-21.7,-7.9,16).s().p("Ah2DEQgGgCgDgGQgGgKAJgJQA4g9AOg1QALgngEg/IgHg5IC4hcQgGArgQA3QggBugsBAQgiAzgtAiQgeAXgdAMIgGABIgGgBg");
	this.shape_36.setTransform(246.5,208.9,1.129,1.129);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["rgba(20,17,18,0)","rgba(34,26,31,0.071)","rgba(72,51,63,0.267)","rgba(132,90,117,0.58)","rgba(202,136,179,0.949)"],[0.192,0.282,0.455,0.694,0.949],2,0.9,0,2,0.9,26.7).s().p("AAaDPQhVgBg7g+Qg8g9ABhVQAChWA9g8QAqgoA3gNQA2gMA1AQQgsgHgrANQgrAOghAgQg6A3gBBQQgBBPA3A5QA0A2BJAFQBJAEA6gtIgEAFQg9A6hUAAIgDAAg");
	this.shape_37.setTransform(214.2,245.7,1.129,1.129);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(20,17,18,0)","rgba(35,27,22,0.063)","rgba(72,55,35,0.227)","rgba(133,99,55,0.49)","rgba(217,159,84,0.855)","rgba(238,174,91,0.949)"],[0.192,0.271,0.424,0.631,0.886,0.949],-0.8,-0.1,0,-0.8,-0.1,32.2).s().p("Ah8DlQg+gbgng2QAmAnAyASQA1ATA3gHQBfgMA7hMQA7hNgMheQgLhZhEg7QhEg6hXACIAIgBQBmgNBRBAQBSA/ANBnQANBlg/BTQhABShnANQgPACgQAAQg0AAgwgWg");
	this.shape_38.setTransform(226.6,246.8,1.129,1.129);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["rgba(20,17,18,0)","rgba(29,25,33,0.094)","rgba(53,46,71,0.349)","rgba(92,79,133,0.757)","rgba(110,95,162,0.949)"],[0.192,0.306,0.522,0.82,0.949],0.4,0,0,0.4,0,12.7).s().p("AgcBdQgagHgTgUQgSgUgGgZQAIAUAPAOQAQAPAWAGQAkALAggTQAigSAKglQAKghgPgfQgQgggggNIADAAQAnAMAUAkQAUAjgMAnQgLAngkAUQgWAMgYAAQgNAAgPgEg");
	this.shape_39.setTransform(222.4,244.7,1.129,1.129);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["rgba(20,17,18,0)","rgba(31,31,33,0.063)","rgba(58,67,72,0.235)","rgba(102,126,136,0.514)","rgba(163,206,222,0.894)","rgba(172,218,235,0.949)"],[0.192,0.275,0.431,0.647,0.914,0.949],0.5,0.1,0,0.5,0.1,16.4).s().p("Ag/BmQgqgfgIg1QgHgzAggqQAfgrA1gHQAigFAgANQAgANAVAcQgUgUgagJQgbgJgcAEQgwAHgdAoQgeAnAHAwQAHAtAjAdQAjAdAsgBIgEAAIgTACQgoAAgjgag");
	this.shape_40.setTransform(218.5,242.5,1.129,1.129);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["rgba(20,17,18,0)","rgba(32,32,24,0.075)","rgba(63,71,40,0.278)","rgba(112,133,67,0.604)","rgba(165,199,95,0.949)"],[0.192,0.286,0.467,0.714,0.949],0.8,-1.2,0,0.8,-1.2,22.2).s().p("AhwBuQgkgggPgtQgOgrAKgtQgDAlAOAiQAOAjAdAaQAyArBBgEQBCgFAsgyQApgugBg9QgBg9gqgtIAEAEQA2AvAFBHQAFBGgvA2QgvA1hHAFIgNABQg/AAgwgrg");
	this.shape_41.setTransform(221.8,247.2,1.129,1.129);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["rgba(20,17,18,0)","rgba(34,22,20,0.063)","rgba(70,34,25,0.235)","rgba(129,55,35,0.518)","rgba(209,85,51,0.898)","rgba(220,89,53,0.949)"],[0.192,0.275,0.431,0.647,0.914,0.949],-1.4,1.5,0,-1.4,1.5,37.7).s().p("AiqEHQhihHgUh4QgTh3BHhiQBHhiB3gUQB3gTBiBHQBCAvAgBLQAfBIgJBNQgBg+gdg4Qgeg6g1gnQhchBhuASQhvAShCBbQg9BVALBnQAMBoBNBFg");
	this.shape_42.setTransform(221.5,240.2,1.129,1.129);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#261D16").s().p("AjEDFQhRhSAAhzQAAhyBRhSQBRhRBzgBQBzABBSBRQBRBSAAByQAABzhRBSQhSBRhzAAQhzAAhRhRg");
	this.shape_43.setTransform(221.8,243,1.129,1.129);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#634B36").s().p("AgfHrIAAt2QAAgzgngrQBGAMAiA2QAmA6AABxIAALng");
	this.shape_44.setTransform(268.4,236,1.129,1.129);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#634B36").s().p("ABnBoQgXhkgsg3Qgrg4hFgyQg5gkAEAAQCCAAA7BJQA6BHAACbIAABSQABgcALgeIgMBAQgDgngMgzg");
	this.shape_45.setTransform(218.5,177.9,1.129,1.129);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#83674A").s().p("Am2JXIAAuWQAAkXDuAAQCCAAA7BJQA5BHAACcIAABRIADgVQAFghAPgbQAwhYB9AAQBjAAAuA0QA0A5AACGIAALmg");
	this.shape_46.setTransform(226.9,223.7,1.129,1.129);

	this.instance_9 = new lib.Path_7_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(188.7,305.5,1.129,1.129,0,0,0,3.9,2.6);
	this.instance_9.alpha = 0.512;

	this.instance_10 = new lib.Path_8_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(226.7,390.4,1.129,1.129,0,0,0,3.8,1.7);
	this.instance_10.alpha = 0.512;

	this.instance_11 = new lib.Path_9_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(191.7,311.8,1.129,1.129,0,0,0,4.9,2);
	this.instance_11.alpha = 0.512;

	this.instance_12 = new lib.Path_10_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(192.6,374.4,1.129,1.129,0,0,0,9.2,2.6);
	this.instance_12.alpha = 0.512;

	this.instance_13 = new lib.Path_11_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(169.4,309.8,1.129,1.129,0,0,0,4.2,2.4);
	this.instance_13.alpha = 0.512;

	this.instance_14 = new lib.Path_12_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(291.6,289.1,1.129,1.129,0,0,0,3.1,2.2);
	this.instance_14.alpha = 0.512;

	this.instance_15 = new lib.Path_13_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(162.5,259,1.129,1.129,0,0,0,7.2,3.1);
	this.instance_15.alpha = 0.512;

	this.instance_16 = new lib.Path_14();
	this.instance_16.parent = this;
	this.instance_16.setTransform(135.7,272.4,1.129,1.129,0,0,0,7,3.1);
	this.instance_16.alpha = 0.512;

	this.instance_17 = new lib.Path_15();
	this.instance_17.parent = this;
	this.instance_17.setTransform(186.9,352,1.129,1.129,0,0,0,20.2,4.6);
	this.instance_17.alpha = 0.512;

	this.instance_18 = new lib.Path_16();
	this.instance_18.parent = this;
	this.instance_18.setTransform(226.6,292.8,1.129,1.129,0,0,0,53.1,9.7);
	this.instance_18.alpha = 0.512;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#654D33").s().p("AgfNZQhWgfhDhOQhDhNh9jeIiCjtQgJgQASiHQASiJgbg0Qgagzh+gsQhQgdgQgHQgygVgYgXQgsgugkhkIgbhcQARiFC1hmQCqhfC0AAQBLAAA0AiQAaARA1A7QAxA1AsAYQBCAkBjAEQDNAHDxBeQDYBUAqA/QAdAtAGBGQADAigDAaIARADQAVAGASAOQA4AvAIB0QAIB6hrDEQhYCjhAA3QglAgiGA2Ih/AwIguBDQg5BIg0AaQg0AahLAaIhAAUQgdAAgrgPg");
	this.shape_47.setTransform(213.7,326.2,1.129,1.129);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3C2D1D").s().p("AiJLHQhRhQiIiyQhwiSg+iOQg4h+gJhqQgFg4APhEQALg0gThLQgVhPhggZQgzgMgYgHQgogMgTgVQglgpghiZIgaiSIYOESQAnAUA9AIIBgANQAyALAcAdQAjAkAMBIQAYCLhQDaQhEC7g+BCQgqAsh3A7Qh3A6gxA2QgWAXg6BKQg7BKgjAmQh5CEhaAAQhBAAhphog");
	this.shape_48.setTransform(214,357,1.129,1.129);

	this.whirlpool = new lib.Symbol64();
	this.whirlpool.parent = this;
	this.whirlpool.setTransform(214,302.5,1,1,0,0,0,106,146.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_8},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_8},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},60).to({state:[{t:this.whirlpool}]},9).wait(47));

	// island2
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5E432B").s().p("AgagRIA2giIgjBng");
	this.shape_49.setTransform(473.9,657.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#846446").s().p("AgbgyIA3AgIgTBFg");
	this.shape_50.setTransform(468.3,657.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#573F2D").s().p("AgSAjIAShFIATBFg");
	this.shape_51.setTransform(471.1,659.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B38E71").s().p("Ag2gPIBtgBIg3Ahg");
	this.shape_52.setTransform(471.1,654.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5E432B").s().p("AgbgQIAzghIAEBjg");
	this.shape_53.setTransform(473.8,647.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#846446").s().p("AgYgxIAzAhIg2BCg");
	this.shape_54.setTransform(468.3,647.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#573F2D").s().p("AAAghIA3BCIhtABg");
	this.shape_55.setTransform(471.1,649.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B38E71").s().p("AgzgPIBngBIg0Ahg");
	this.shape_56.setTransform(471.1,644.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#573F2D").s().p("AAAgmIA0BNIhnAAg");
	this.shape_57.setTransform(471.1,638.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#846446").s().p("AACg8IAYAsIgzBOg");
	this.shape_58.setTransform(468.5,636.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5E432B").s().p("AgcgFIA4gkIgyBTg");
	this.shape_59.setTransform(481.9,657.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#573F2D").s().p("AAbgeIAGAvIhBAOg");
	this.shape_60.setTransform(476.3,659.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#846446").s().p("AAGgzIAYAqIg7A9g");
	this.shape_61.setTransform(476,657.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B38E71").s().p("AgogUIBRAGIg4Ajg");
	this.shape_62.setTransform(480.7,654.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5E432B").s().p("AgTABIAfg9IAIB5g");
	this.shape_63.setTransform(482.7,647);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#573F2D").s().p("AgoAZIAog2IApA7g");
	this.shape_64.setTransform(480.7,650.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#846446").s().p("AgVgxIArAtIgnA2g");
	this.shape_65.setTransform(478.5,647.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B38E71").s().p("AglgNIBLgRIggA9g");
	this.shape_66.setTransform(480.1,644);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5E432B").s().p("AgUgDIAIglIAFAFQAFAJAGATIARAwg");
	this.shape_67.setTransform(481.9,636.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#573F2D").s().p("AgCgeIAoAsIhLARg");
	this.shape_68.setTransform(480.1,639.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#846446").s().p("Agfg8IA/A8IgiA9g");
	this.shape_69.setTransform(476.6,636.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B38E71").s().p("AgjgdIBHAXIgIAkg");
	this.shape_70.setTransform(477,633.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#846446").s().p("AgcgpIA5AkIgGAvg");
	this.shape_71.setTransform(460.3,657.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#573F2D").s().p("AggARIAFgvIA8A9g");
	this.shape_72.setTransform(465.9,659.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5E432B").s().p("AgdgJIAYgpIAkBlg");
	this.shape_73.setTransform(466.2,657.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B38E71").s().p("AgogOIBRgGIgZApg");
	this.shape_74.setTransform(461.5,654.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#846446").s().p("AgMg8IAgA9IgnA8g");
	this.shape_75.setTransform(459.4,647.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#573F2D").s().p("AAAgdIApA2IhRAFg");
	this.shape_76.setTransform(461.5,650.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5E432B").s().p("AgVgEIArgtIgDBjg");
	this.shape_77.setTransform(463.7,647.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B38E71").s().p("AglgeIBLARIgrAsg");
	this.shape_78.setTransform(462,644.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#846446").s().p("AgDgHQAGgTAFgJIAEgGIAJAnIgpAsIARgxg");
	this.shape_79.setTransform(460.3,636.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#573F2D").s().p("AglAOIAogsIAjA9g");
	this.shape_80.setTransform(462,639.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5E432B").s().p("AgZgQIAXgsIAcB5g");
	this.shape_81.setTransform(473.7,636.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5E432B").s().p("AgfAAIA+g8IgcB6g");
	this.shape_82.setTransform(465.5,636.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B38E71").s().p("AgXgVIAvAAIgYArg");
	this.shape_83.setTransform(471,632.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B38E71").s().p("AgjgHIBHgWIg+A8g");
	this.shape_84.setTransform(465.1,633.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#452717").s().p("AgzBKQgCgLgOgGQgNgHgUADIgRADIAKgIQAOgKARgEQAPgEAQAKQAIAEAGAGQgEgHgIgJQgPgSgUgJQgSgHgcgEIgYgDIAWgCQAZgCATABQATABAXARQALAJAIAJQgEgKgJgOQgRgcgYgWQgYgWgegEIgZAAIAbgIQAhgFAdALQAdAMASAeQAJAPADANQgBgLADgNQAFgaAUgOQATgNAhAGQAQACANAGQgKACgNAEQgZAJgOAPQgOAOACAcQABAPAEALIAJgSQANgUAUgKQAcgPAdAMQAPAFAIAJQgNgCgSABQgiABgQAPQgSARAAAeQgBAPAEAMIhvADQACgEgBgGg");
	this.shape_85.setTransform(470.6,623.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CBAC8A").s().p("Ag/AvQAGgeAHgTQAEgNAQgQIAPgPIAnAAIAMAKQAMAMAEAIQAHANAFAyg");
	this.shape_86.setTransform(460.9,729.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#9E8167").s().p("AhOBAQANg4AHgJQAHgJAag1IAlADQAmAEAIAOQALAVAKBVg");
	this.shape_87.setTransform(460.7,728.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CBAC8A").s().p("AhpBsIAJgxQALg0AIgJQAMgRAZgHIARgmQATgnAKgEQAMgFAWAIQATAHAFAHQAEAGATBhIATBhg");
	this.shape_88.setTransform(475.3,721.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#9E8167").s().p("AiACEQAFgdAGggQANg/AJgLQAQgUAegIQAJgXAMgYQAXgvAMgFQAPgGAaAKQAYAIAGAJQAEAGAYB3IAXB2g");
	this.shape_89.setTransform(474.6,718.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CBAC8A").s().p("AhRA7QAJgmAIgYQAGgRAUgUIATgSIAyAAIAPAMQAQAPAFALQAJARAGA+g");
	this.shape_90.setTransform(337.1,693.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#9E8167").s().p("AhkBRQARhHAJgLQAFgIAUgkIASgjIAuADQAyAGAJARQAOAbANBsg");
	this.shape_91.setTransform(336.9,691.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CBAC8A").s().p("AhKCQQALhoAJgeQAGgSAXg2IAXgzQAAgGACgHQAFgNALgDQAMgEAGAQQAEAJABAIIgGAfQgGAhADAMQADAMAMAWIAXAmQAKARgEAwQgCAYgEAUg");
	this.shape_92.setTransform(325.5,682.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9E8167").s().p("AhlCYQAKhcASgvQARg9AKgiQAUg9AagHQAagHAbAZQANANAJAOIgIAsQgFAuANAKQAMAKAIAVQAFALACAIIAABrg");
	this.shape_93.setTransform(325.2,681.7);

	this.instance_19 = new lib.Path_13();
	this.instance_19.parent = this;
	this.instance_19.setTransform(331.9,698.1,1,1,0,0,0,20.9,4.2);
	this.instance_19.alpha = 0.512;

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#754A36").s().p("Ai5AhQgCgCAAgEQgBgDACgDQACgCAEAAIA4gSQBDgSA6gGQBrgMBHACQAEgBACADQADACAAADQABADgDADQgCACgDABQg7gDh3ANQhEAHhAASIgyARIgBAAQgDAAgCgCg");
	this.shape_94.setTransform(377.5,646);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#754A36").s().p("AivBBQgDgCgBgDQgDgIAIgDIA0gbQA+gfA5gRQBAgVA9gKQAfgGARgBQAEgBADABQADACAAAEQABACgBAEQgCADgDAAQgPABgdAFQg6ALhIAVQhBAUg7AeIguAaIgDAAIgDAAg");
	this.shape_95.setTransform(359.7,647.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#754A36").s().p("AgFDFQgCgCAAgEIAAl+QAAgHAHAAQAIAAAAAHIAAF+QAAAEgCACQgDACgDABQgDgBgCgCg");
	this.shape_96.setTransform(400.7,619.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#754A36").s().p("AgCAtQgFAAAAgFIAAhPQAAgFAFAAIAFAAQAFAAAAAFIAABPQAAAFgFAAg");
	this.shape_97.setTransform(400.7,725);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#754A36").s().p("AgHB1IAAjpQAAgDACgDQACgDADAAQADAAADADQACADAAADIAADpQAAAIgIAAQgHAAAAgIg");
	this.shape_98.setTransform(400.7,744.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#754A36").s().p("AgHB2IAAjqQAAgDADgDQACgCACAAQAEAAACACQACADAAADIAADqQAAAHgIAAQgHAAAAgHg");
	this.shape_99.setTransform(397.4,733.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#754A36").s().p("AgHB2IAAjqQAAgDACgDQACgCADgBQADABADACQACADAAADIAADqQAAAIgIAAQgHAAAAgIg");
	this.shape_100.setTransform(400.7,585);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#754A36").s().p("AgHDpIAAnRQAAgDADgCQACgDACAAQAEAAACADQACACAAADIAAHRQAAAIgIAAQgHAAAAgIg");
	this.shape_101.setTransform(397.4,596.5);

	this.instance_20 = new lib.Path_9_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(471.2,734.3,1,1,0,0,0,22.4,4.2);
	this.instance_20.alpha = 0.512;

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#452717").s().p("ADdPEQgFgCAAgaQgGhqgEhXQgGiqAQglQAHgSAbgMQAjgNARgKQBFglAAhrQAAg7h/gcQg8gNjZgWQjCgThVgbQh/gqAAhRQAAhmCHhPQBeg3CFgeQAwgOCAgIQBdgFADgYQAGg8AEkZQAEkVgEgVIlHg3IHtAAIg8A3QgMHzAACVQAAA6glAMQgJAChQADIhxAEQhBAGhCAVQksBXAUB9QANBOD5AUQBEAGCLAIQB1AJA3AQQBbAbAiAuQAZAhAAA4QAAA4gNAfQgNAdgjAgQgNALguAeQgXAPAAASIAAFPQAAAOgGAGQgGAIgQAAQgNAAgFgIIgCgIQAAAigNAAQgJAEgEAAIgCAAg");
	this.shape_102.setTransform(373.8,664);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#573F2D").s().p("Ai+BSIC+ijIC/Cjg");
	this.shape_103.setTransform(387.9,637);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#5E432B").s().p("AhegbICphtIAVERg");
	this.shape_104.setTransform(397.4,631.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#846446").s().p("AhKiIICpBtIi9Ckg");
	this.shape_105.setTransform(378.3,631.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#B38E71").s().p("Aipg1IFTAAIiqBsg");
	this.shape_106.setTransform(387.9,623.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#573F2D").s().p("AipBIICpiOICqCOg");
	this.shape_107.setTransform(387.9,610.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#5E432B").s().p("AhUgQICVhtIAUD7g");
	this.shape_108.setTransform(396.4,605.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#846446").s().p("Ag/h9ICUBtIipCOg");
	this.shape_109.setTransform(379.4,605.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#B38E71").s().p("AiUg1IEpAAIiVBsg");
	this.shape_110.setTransform(387.9,598.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#573F2D").s().p("AiUBHICUiNICVCNg");
	this.shape_111.setTransform(387.9,585.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#5E432B").s().p("AhKgPICAhtIAVD6g");
	this.shape_112.setTransform(395.3,580.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#846446").s().p("Ag1h8ICABtIiVCNg");
	this.shape_113.setTransform(380.4,580.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B38E71").s().p("Ah/g1ID/AAIiABsg");
	this.shape_114.setTransform(387.9,573.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#846446").s().p("AhyiIIDlBgIjQCxg");
	this.shape_115.setTransform(416.4,631.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B38E71").s().p("AiggvIFBAAIhcBfg");
	this.shape_116.setTransform(421,622.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#573F2D").s().p("AjCBZIDRixIC0Cxg");
	this.shape_117.setTransform(426.5,636.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#5E432B").s().p("AhZgoIBbhgIBYERg");
	this.shape_118.setTransform(436.9,631.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#846446").s().p("AhXh9ICvBgIibCbg");
	this.shape_119.setTransform(411.6,605.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#B38E71").s().p("AiCgvIEFAAIhWBfg");
	this.shape_120.setTransform(415.9,597.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#573F2D").s().p("AigBOICcibIClCbg");
	this.shape_121.setTransform(421,610.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#5E432B").s().p("AhSgdIBUhgIBRD7g");
	this.shape_122.setTransform(428.8,605.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#846446").s().p("AhDh9ICHBgIhyCbg");
	this.shape_123.setTransform(407.5,580.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#B38E71").s().p("AhlgvIDLAAIhEBfg");
	this.shape_124.setTransform(410.9,572.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#573F2D").s().p("AiCBOIByibICTCbg");
	this.shape_125.setTransform(416,585);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#5E432B").s().p("AhJgdIBDhgIBQD7g");
	this.shape_126.setTransform(421.7,580.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#5E432B").s().p("AhygoIDlhgIgVERg");
	this.shape_127.setTransform(359.4,631.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B38E71").s().p("AiggvIFBAAIjlBfg");
	this.shape_128.setTransform(354.7,622.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#573F2D").s().p("AjCBZIC0ixIDRCxg");
	this.shape_129.setTransform(349.3,636.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#846446").s().p("AgBiIIBbBgIizCxg");
	this.shape_130.setTransform(338.8,631.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#5E432B").s().p("AhYgdICwhgIgUD7g");
	this.shape_131.setTransform(364.1,605.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B38E71").s().p("AiCgvIEFAAIiwBfg");
	this.shape_132.setTransform(359.8,597.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#573F2D").s().p("AigBOIClibICcCbg");
	this.shape_133.setTransform(354.7,610.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#846446").s().p("AgBh9IBUBgIilCbg");
	this.shape_134.setTransform(346.9,605.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#5E432B").s().p("AhCgdICGhgIgVD7g");
	this.shape_135.setTransform(368.3,580.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B38E71").s().p("AhkgvIDJAAIiGBfg");
	this.shape_136.setTransform(364.9,572.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#573F2D").s().p("AiCBOICTibIByCbg");
	this.shape_137.setTransform(359.8,585);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#846446").s().p("AAHh9IBDBgIiTCbg");
	this.shape_138.setTransform(354.1,580.2);

	this.instance_21 = new lib.Path_11_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(471.2,662.6,1,1,0,0,0,14.8,3.1);
	this.instance_21.alpha = 0.512;

	this.instance_22 = new lib.Path_12_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(387.9,643.2,1,1,0,0,0,70.7,11.7);
	this.instance_22.alpha = 0.512;

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#654D33").s().p("AOCLoQhXgHjEhcIkBiCQg3gbhlhHQhrhLgsgYQhNgqjvgRQj4gRgrAsQgVAVggBGQgVAtgrAAQgvAAg1giQg1gngRgLQgMgHgdgBQgXgBgXgYQgkglAHgoIAHggQADgUgGgSQgLghhGg1QhqhPgHgHQg5g0gZgoQgvhKAEhbQADg7BBhMQBFhQB0hGQEcisF7gOQFygOG7CCQCsAyB4A3QBzA0AIAdQAHAXAsAcIBkA3QCaBWA5BjQBIB8gwDbQgTBaghBAQgiBCghAIQgdAGgbA2QgGANgoBjQgdBKgaAhQgiArgqAAIgGAAg");
	this.shape_139.setTransform(409.5,690.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3C2E1D").s().p("AGqF2QlkkCgfgVQgtgfjVAAQjUAAg+AfQgbANgNAmQgHATgJA3QgIAygLAYQgQAlggAOQg1AXhMhwIg3hRQgegngWAAQg5AAgcgPQgkgUgMg1QgShRABg8QABgigZgpQgPgZghgfIg+g3QhQhLgWhRQgWhWgLg7IgHgqMAlDAEQQAXAGAegaQASgPAfghQAagXAPAKQAUAMAMBFQAXCGgXBoQgNA6g8CKQgkBTgFACQgOAFgSAZQhUCOg9BhQh1C5gqAAQgrAAldj5g");
	this.shape_140.setTransform(409.9,725.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#452717").s().p("AAiBeQgJgXgPgKQgPgJgVAGIgSAHIgahOIAHgBQAHgDACgMQABgKgGgNIgGgMIAIAGQAKAIAHALQAGAKgDANQgCAHgDAFQARgQADgaQACgOgDgVIgDgRIAGAPQAHARADAOQAGAWgSAcQAXgTARghQAKgVgDgWIgGgSIAMASQALAWgCAXQgCAWgSATIgRANIARgDQAUAAAOALQAOALADAYQABAMgBAKQgNgagVgMQgNgHgUAGIgRAJIAOADQARAFAMANQARAQgCAXQgBALgEAIQgCgKgEgMg");
	this.shape_141.setTransform(437.6,600.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#452717").s().p("AgaBNQAJgRAZgNQANgHALgDQgLgBgQACQggAEgeAMQgeANgRAZIgLAXQAAgMAFgQQAJggAWgWQAYgVAigDQARgCANACQgKgDgKgIQgVgQgEgYQgDgXASgbQAKgOAKgJQgDAKgCANQgCAbAIATQAFATAcAKQANAFAMACQgGgGgHgKQgMgVgBgWQgDggAYgWQALgKALgEQgHALgHAQQgMAfAGAWQAJAYAaANQAOAGAMACIgsBlQgDgDgGgBQgLgDgLAKQgMAJgGATIgEARQgHgTAFgcQACgPAQgKQAHgGAIgCQgJAAgLADQgWAHgQAOQgPANgPAXIgNAVQAKgjAPgag");
	this.shape_142.setTransform(342.3,576.3);

	this.topineapplepage = new lib.Symbol65();
	this.topineapplepage.parent = this;
	this.topineapplepage.setTransform(410,675.2,1,1,0,0,0,128,112.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.instance_22},{t:this.instance_21},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.instance_20},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.instance_19},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.instance_22},{t:this.instance_21},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.instance_20},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.instance_19},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},60).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.instance_22},{t:this.instance_21},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.instance_20},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.instance_19},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},9).to({state:[{t:this.topineapplepage}]},46).wait(1));

	// redspot
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#D83B34").s().p("AhdBdQgngmABg3QgBg2AngnQAngmA2gBQA3ABAnAmQAnAngBA2QABA3gnAmQgnAog3AAQg2AAgngog");
	this.shape_143.setTransform(242.7,699.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#D83B34").s().p("AhdBeQgmgngBg3QABg2AmgnQAngmA2AAQA3AAAmAmQAoAnAAA2QAAA3goAnQgmAmg3AAQg2AAgngmg");
	this.shape_144.setTransform(203.2,672.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#D83B34").s().p("AhdBeQgmgnAAg3QAAg2AmgnQAngmA2AAQA3AAAnAmQAmAnAAA2QAAA3gmAnQgnAmg3AAQg2AAgngmg");
	this.shape_145.setTransform(173.2,637.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#D83B34").s().p("AhcBdQgngmgBg3QABg2AngnQAmgnA2AAQA3AAAnAnQAnAnAAA2QAAA3gnAmQgnAng3AAQg2AAgmgng");
	this.shape_146.setTransform(154.7,591.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#D83B34").s().p("AhdBdQgngmAAg3QAAg1AngnQAngoA2AAQA3AAAmAoQAnAnAAA1QAAA3gnAmQgmAng3ABQg2gBgngng");
	this.shape_147.setTransform(145,543.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#D83B34").s().p("AhdBeQgngnAAg3QAAg2AngnQAngmA2AAQA3AAAmAmQAnAnABA2QgBA3gnAnQgmAng3gBQg2ABgngng");
	this.shape_148.setTransform(150.7,493);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#D83B34").s().p("AhdBdQgmgmAAg3QAAg2AmgnQAngnA2AAQA3AAAnAnQAmAnAAA2QAAA3gmAmQgnAng3AAQg2AAgngng");
	this.shape_149.setTransform(167.9,444.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143}]}).wait(116));

	// redspots2
	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#D83B34").s().p("AhdBdQgngmABg3QgBg2AngnQAngnA2AAQA3AAAnAnQAnAngBA2QABA3gnAmQgnAng3AAQg2AAgngng");
	this.shape_150.setTransform(367.8,789.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#D83B34").s().p("AhdBeQgngnAAg3QAAg1AngnQAngoA2AAQA3AAAmAoQAnAnAAA1QAAA3gnAnQgmAmg3ABQg2gBgngmg");
	this.shape_151.setTransform(228.7,1049.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#D83B34").s().p("AhdBeQgngnAAg3QAAg2AngnQAngmA2gBQA3ABAmAmQAnAnAAA2QAAA3gnAnQgmAng3AAQg2AAgngng");
	this.shape_152.setTransform(240.4,993.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#D83B34").s().p("AhdBeQgngnAAg3QAAg2AngmQAngnA2AAQA3AAAmAnQAnAnABA1QgBA3gnAnQgmAng3AAQg2AAgngng");
	this.shape_153.setTransform(256.5,949.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#D83B34").s().p("AhdBeQgmgnAAg3QAAg2AmgnQAngnA2ABQA3gBAnAnQAmAnAAA2QAAA3gmAnQgnAng3gBQg2ABgngng");
	this.shape_154.setTransform(278.3,909.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D83B34").s().p("AhcBdQgogmAAg3QAAg2AogmQAngnA1gBQA3ABAnAnQAmAmABA2QgBA3gmAmQgnAog3AAQg1AAgngog");
	this.shape_155.setTransform(312.4,869.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D83B34").s().p("AhcBeQgngngBg3QABg2AngnQAmgmA2AAQA3AAAnAmQAnAnAAA2QAAA3gnAnQgnAmg3AAQg2AAgmgmg");
	this.shape_156.setTransform(348.2,829.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]}).wait(116));

	// name2
	this.instance_23 = new lib.PineappleVolcano();
	this.instance_23.parent = this;
	this.instance_23.setTransform(72,748);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(116));

	// tinycloud2
	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#A79679").s().p("AAlCYQgvAbg2AAQgrAAgogSQgmgRgcgfQgaAIgbAAQhPAAg6g2Qg6g1gHhNQgKgNgHgOQAkAhAjAWQAkAXAZAFQAsAJBNgRQAngJAdgLIAdAVQAnAWAzAMQAxAMBDgSQAhgKAXgLIAyAcQA7AYAvgZQAwgYAYg3IAPgyIATAFQAagEAegtIAQgZQAZAtAAA0QAABTg7A7Qg7A8hUAAIgDgBQgcAcgkAPQgmAQgpAAQg2AAgvgbg");
	this.shape_157.setTransform(214.2,1076.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#D2BD95").s().p("AAxEyQgwAbg1AAQgrAAgogSQgmgRgcgfQgaAIgbAAQhPAAg6g2Qg6g1gHhOQgpg3AAhDQAAhTA6g7QA6g7BTgBQAbgtAtgaQAvgbA2AAQA2AAAwAbQAugbA2AAQBEAAA1AoQAegJAfAAQBUAAA7A8QA8A7AABUQAAAYgGAXQAqA2AABFQAABUg7A7Qg7A8hUAAIgDgBQgcAcgkAPQgmAQgpAAQg2AAgvgbg");
	this.shape_158.setTransform(213,1061.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#A79679").s().p("AAkCYQgtAbg3AAQgsAAgngSQgmgRgcgfQgbAHgaAAQhPAAg7g1Qg5g1gHhNQgJgLgIgQQAkAhAjAWQAkAXAZAFQAsAJBNgRQAmgJAegLIAdAUQAnAXAzAMQAxAMBDgTQAhgJAXgLIAyAcQA7AYAvgZQAvgYAZg3IAPgzIATAFQAagEAegsIAQgZQAZAsAAA1QAABTg7A7Qg8A7hTAAIgEAAQgcAcgkAPQglAQgpAAQg3AAgvgbg");
	this.shape_159.setTransform(264,956.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#D2BD95").s().p("AAwEyQguAbg1AAQgsAAgngSQgmgRgdgfQgaAHgbAAQhPAAg7g1Qg5g1gHhOQgqg3AAhDQAAhTA7g7QA6g7BTgBQAbgtAugaQAugbA3AAQA2AAAvAbQAtgbA3AAQBDAAA3AoQAcgJAgAAQBUAAA7A7QA8A7AABUQgBAYgFAYQAqA1AABGQAABUg7A7Qg7A7hUAAIgEAAQgbAcglAPQglAQgpAAQg2AAgwgbg");
	this.shape_160.setTransform(262.8,941.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#A79679").s().p("AAkCYQguAbg2AAQgsAAgngSQgmgRgcgfQgbAHgaAAQhPAAg7g1Qg5g1gHhNQgKgNgHgOQAkAhAjAWQAkAXAZAFQAsAJBNgRQAmgJAegLIAdAVQAnAWAzAMQAxAMBDgSQAhgKAXgLIAyAcQA7AYAvgZQAvgYAZg3IAPgyIATAEQAagEAegsIAQgZQAZAtAAA0QAABTg7A7Qg8A7hTAAIgDAAQgdAcgkAPQglAQgpAAQg2AAgwgbg");
	this.shape_161.setTransform(354.4,836.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D2BD95").s().p("AAwEyQgvAbg1AAQgsAAgngSQgmgRgcgfQgbAHgaAAQhPAAg7g1Qg5g1gHhOQgpg2AAhEQAAhTA6g7QA6g7BTgBQAbgtAtgaQAvgbA2AAQA2AAAwAbQAugbA2AAQBDAAA2AoQAegJAfAAQBUAAA7A7QA7A8AABUQAAAXgFAYQAqA2AABFQAABUg7A7Qg8A7hTAAIgDAAQgdAcgkAPQglAQgpAAQg2AAgwgbg");
	this.shape_162.setTransform(353.2,821.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157}]}).wait(116));

	// tiny_cloud
	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#A79679").s().p("AAkCYQgtAbg3AAQgsAAgngSQgmgRgcgfQgbAHgaAAQhPAAg7g1Qg5g1gHhNQgJgLgIgQQAlAhAiAWQAkAXAZAFQAsAJBNgRQAmgJAegLIAdAUQAnAXAzAMQAxAMBDgSQAhgKAXgLIAyAcQA7AYAvgZQAvgYAZg3IAPgzIATAFQAagEAegsIAQgZQAZAsAAA1QAABTg7A7Qg8A7hTAAIgEAAQgcAcgkAPQglAQgpAAQg3AAgvgbg");
	this.shape_163.setTransform(207.3,707);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#D2BD95").s().p("AAwEyQguAbg2AAQgsAAgngSQgmgRgcgfQgbAHgaAAQhPAAg7g1Qg5g1gHhOQgpg2AAhEQAAhTA6g7QA6g7BTgBQAbgtAtgaQAvgbA2AAQA2AAAwAbQAugbA2AAQBDAAA2AoQAegJAfAAQBUAAA7A7QA7A8AABTQAAAYgFAYQAqA2AABFQAABUg7A7Qg8A7hTAAIgEAAQgcAcgkAPQglAQgpAAQg3AAgvgbg");
	this.shape_164.setTransform(206.1,691.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#A79679").s().p("AAlCYQguAbg3AAQgrAAgogSQgmgRgcgfQgaAHgbAAQhPAAg6g1Qg6g1gHhNQgKgOgHgNQAkAhAjAWQAkAXAZAFQAsAJBNgRQAngJAdgLIAdAUQAnAXAzAMQAyAMBCgTQAhgJAXgLIAyAcQA7AYAwgZQAvgYAYg3IAPgzIATAFQAagEAfgsIAQgZQAYAtAAA0QAABTg7A7Qg7A7hUAAIgDAAQgcAcgkAPQgmAQgpAAQg3AAgugbg");
	this.shape_165.setTransform(147.6,614.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D2BD95").s().p("AAxEyQgvAbg2AAQgrAAgogSQgmgRgcgfQgaAHgbAAQhPAAg6g1Qg6g1gHhOQgpg3AAhDQAAhTA6g7QA6g7BTgBQAbgtAtgaQAvgbA2AAQA3AAAvAbQAtgbA3AAQBDAAA3AoQAcgJAgAAQBUAAA7A7QA8A7AABUQAAAZgGAXQAqA0AABHQAABUg7A7Qg7A7hUAAIgDAAQgcAcgkAPQgmAQgpAAQg3AAgugbg");
	this.shape_166.setTransform(146.4,598.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#A79679").s().p("AAlCYQgvAbg2AAQgrAAgogSQgmgRgcgfQgZAIgcAAQhPAAg6g2Qg6g1gHhNQgKgNgHgOQAkAhAjAWQAkAXAZAFQAsAJBNgRQAngJAdgLIAdAVQAnAWAzAMQAyAMBCgSQAhgKAXgLIAyAcQA7AYAwgZQAvgYAYg3IAPgyIATAFQAagEAfgtIAQgZQAYAuAAAzQAABTg7A7Qg7A8hUAAIgDgBQgcAcgkAPQgmAQgpAAQg2AAgvgbg");
	this.shape_167.setTransform(147.6,501.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D2BD95").s().p("AAxEyQgwAbg1AAQgrAAgogSQgmgRgcgfQgZAIgcAAQhPAAg6g2Qg6g1gHhOQgpg3AAhDQAAhTA6g7QA6g7BTgBQAbgtAtgaQAvgbA2AAQA3AAAvAbQAugbA2AAQBEAAA2AoQAcgJAgAAQBUAAA7A8QA8A7AABUQAAAYgGAXQAqA1AABGQAABUg7A7Qg7A8hUAAIgDgBQgcAcgkAPQgmAQgpAAQg2AAgvgbg");
	this.shape_168.setTransform(146.4,486.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163}]}).wait(116));

	// bgjpeg
	this.instance_24 = new lib.mappage_bg01();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-2,0,0.361,0.361);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.6,0,1173.3,1489.3);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(397.8,1010.2,1,1,0,0,0,90.2,107.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTCYQgHgJAAgQQAAgTAHgHQAIgJALABQANAAAHAIQAIAJAAARQAAAQgIAIQgHAJgNAAQgLABgIgJgAgRA8IgHjbIAvAAIgFDbg");
	this.shape.setTransform(283.8,740.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQAAgXADgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIAOgBQALAAALAEQALAEAJAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQAAALADAGQAEAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgQAAgLgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgFAAgEADg");
	this.shape_1.setTransform(269.7,744.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIACgQIADgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAGAAQALAAAEgGQAFgGgBgHIgBgHIgCgHIgFgIIgGgIIgggmIgMgPIgKgRIgIgSQgDgKAAgKQABgOAEgLQAFgKAIgHQAIgHALgDQALgEALAAQANAAALAEQAKADAIAGQAHAGAEAKQAFAJgBANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgHAAQgEAAgEACIgHAFIgDAGIAAAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgNAAgLgDg");
	this.shape_2.setTransform(254.3,744.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2B7IAAjxIAhAAIADAYQAHgNAKgIQAJgGAKgBQATAAAJANQAJALAAAYIAAAHIgCAIIgBAJIgCAIIggAAIAAgWIgBgMIgCgHIgEgFIgEgBQgFAAgEADQgFAEgDAGIAADHg");
	this.shape_3.setTransform(240.9,744.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcB2QgLgGgJgMQgIgMgEgTQgFgUAAgbIAAgtQAAgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIANgBQANAAALAEQAKAEAJAIQAJAJAEAPQAGAOAAAWIgBAPIgBAPIgCAOIgDAMIhPAAIAAAYIABAbQACALADAGQACAHAGADQAEADAHAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgQAAgMgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQABgYgGgLQgFgKgMAAQgEAAgFADg");
	this.shape_4.setTransform(225.1,744.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSB5Ig3jxIAsAAIAYCAIAFAzIABAAIAHgzIAXiAIArAAIg3Dxg");
	this.shape_5.setTransform(209.2,744.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgHAAgPQAAgHACgGQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAIgNgBQgLABgIgIg");
	this.shape_6.setTransform(197.1,739.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWB7IAAi4QAAgQgFgFQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAjxIAiAAIAFAaQAFgJAGgFIAMgJIANgFIANgCQAWAAALAPQALAPAAAeIAAC5g");
	this.shape_7.setTransform(183.5,744.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1BrQgMgOAAgeIAAi4IAsAAIAAC0QAAAQAFAGQAFAHAKAAQAFAAAGgEQAHgEAFgGIAAjDIAsAAIAADxIghAAIgFgaQgFAIgGAFQgGAGgHADIgMAFIgNABQgWAAgKgPg");
	this.shape_8.setTransform(165.6,744.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWB7IAAi4QAAgQgFgFQgEgHgKAAQgGAAgHAEQgGAFgFAIIAADDIgtAAIAAjxIAiAAIAEAaQAGgJAGgFIAMgJIANgFIANgCQAWAAALAPQALAPAAAeIAAC5g");
	this.shape_9.setTransform(562.2,687.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgIgEgGgIQgGgHgFgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAHgGQAGgHAIgEQAHgDAIgBIAPgCIAPABQAHABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgHAEgIACIgOABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAFADAFAAQAFAAAFgDQAEgEADgHQACgHABgLIABgdIAAg6IgBgdQgBgMgCgHQgDgHgEgDQgFgDgFAAQgFAAgFADg");
	this.shape_10.setTransform(544.9,687.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABCB7IAAi4IgBgMIgEgJQgCgEgEgCIgJgBQgHAAgGAEQgGAFgFAIIAAADIAAAEIAAC8IgsAAIAAi4IgBgMIgDgJQgDgEgEgCIgJgBQgGAAgGAEQgHAFgEAIIAADDIgsAAIAAjxIAiAAIAEAaQAFgJAGgFIAMgJIAOgFIANgCQAOABAJAGQAKAIAFANQAFgIAGgFIAMgIIANgFIANgCQAVAAAMAPQALAPAAAeIAAC5g");
	this.shape_11.setTransform(523.2,687.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgOQAAgIACgFQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAIgNgBQgLABgIgIg");
	this.shape_12.setTransform(505.4,682.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaCgIgyh4IgCAAIAAB4IgsAAIAAk/IAsAAIAAC3IACAAIAvhpIArAAIg2BtIA7CEg");
	this.shape_13.setTransform(493.6,683.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_14.setTransform(479.6,683.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_15.setTransform(466.2,687.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAfB5IgZiGIgFgkIgBAAIgFAkIgWCGIgrAAIgpjxIArAAIARCCIAEAxIACAAIAFgxIAYiCIAkAAIAYCCIAGAxIACAAIADgxIAPiCIApAAIgmDxg");
	this.shape_16.setTransform(447.1,687.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcB2QgMgGgIgMQgIgMgFgTQgEgUABgbIAAgtQAAgXADgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAIgEAHgBIAOgBQALAAALAEQALAEAJAIQAJAJAEAPQAFAOABAWIgBAPIgCAPIgBAOIgCAMIhQAAIAAAYIABAbQABALAEAGQADAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgNgGgAgHhXQgEACgDAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgEAAgFADg");
	this.shape_17.setTransform(419.7,687.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_18.setTransform(402.5,683.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIACIALgCIAKgEIAAAYIgIAHIgKAFIgJADIgKABQgJAAgIgDg");
	this.shape_19.setTransform(387.7,684.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcB2QgLgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIAOgBQAMAAAKAEQALAEAJAIQAJAJAFAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIABAbQABALADAGQAEAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgQAAgMgGgAgHhXQgFACgCAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgFAAgEADg");
	this.shape_20.setTransform(366,687.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag2B7IAAjxIAgAAIAEAYQAIgNAKgIQAIgGAKgBQATAAAJANQAJALAAAYIAAAHIgBAIIgCAJIgDAIIgeAAIAAgWIgBgMIgDgHIgEgFIgEgBQgGAAgDADQgEAEgDAGIAADHg");
	this.shape_21.setTransform(351.8,687.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgIgEgGgIQgGgHgFgLQgGgMgCgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAFADAEAAQAGAAAFgDQAEgEADgHQACgHABgLIABgdIAAg6IgBgdQgBgMgCgHQgDgHgEgDQgFgDgGAAQgEAAgFADg");
	this.shape_22.setTransform(335.7,687.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_23.setTransform(322.7,683.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhCChIAAk/IAjAAIADAaIAIgKIAKgJIALgHQAHgCAIAAIAJAAIALAEQAFADAGAFQAGAGAEAJQAFAKACAOQADAPAAAUIAABKQAAATgDAPQgCAOgFAKQgEAJgGAGQgGAGgGACIgKAEIgKABQgOAAgJgGQgJgFgGgIIACAeIAABAgAgNh7QgFAFgDAHIAACRIADAHIAFAFIAFAEIAIACIAIgCQAEgCAEgFQACgFACgIIACgXIAAhbIgCgWQgBgJgDgFQgDgFgEgBIgJgCQgHAAgGAFg");
	this.shape_24.setTransform(309.8,691);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAdB5IgdhTIgBAAIgeBTIgrAAIAyh6Igvh3IAtAAIAaBPIAAAAIAbhPIAqAAIguBzIA0B+g");
	this.shape_25.setTransform(292.8,687.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcB2QgLgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQAAgXADgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIAOgBQALAAALAEQALAEAJAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIABAbQABALADAGQAEAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgQAAgMgGgAgHhXQgFACgCAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgFAAgEADg");
	this.shape_26.setTransform(276.9,687.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgIgEgGgIQgGgHgFgLQgGgMgCgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAHgGQAGgHAIgEQAHgDAIgBIAPgCIAPABQAHABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgHAEgIACIgOABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAFADAFAAQAFAAAFgDQAEgEADgHQACgHABgLIABgdIAAg6IgBgdQgBgMgCgHQgDgHgEgDQgFgDgFAAQgFAAgFADg");
	this.shape_27.setTransform(252.8,687.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIACIALgCIAKgEIAAAYIgIAHIgKAFIgJADIgKABQgJAAgIgDg");
	this.shape_28.setTransform(238.6,684.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIACIALgCIAKgEIAAAYIgIAHIgKAFIgJADIgKABQgJAAgIgDg");
	this.shape_29.setTransform(219.1,684.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag2B7IAAjxIAgAAIAEAYQAIgNAJgIQAJgGAKgBQATAAAJANQAJALAAAYIAAAHIgCAIIgCAJIgCAIIgeAAIAAgWIgCgMIgCgHIgEgFIgFgBQgEAAgEADQgEAEgEAGIAADHg");
	this.shape_30.setTransform(207,687.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_31.setTransform(190.4,687.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIACIALgCIAKgEIAAAYIgIAHIgKAFIgJADIgKABQgJAAgIgDg");
	this.shape_32.setTransform(177.2,684.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgFgKQgEgKAAgPIACgQIACgLIAfAAIACAWQABAIADAGQADAFAFACQAFADAGAAQALAAAEgGQAFgGgBgHIgBgHIgDgHIgEgIIgGgIIgggmIgMgPIgKgRIgIgSQgCgKAAgKQAAgOAEgLQAFgKAJgHQAHgHALgDQALgEALAAQANAAALAEQAKADAIAGQAHAGAEAKQAFAJAAANIgCAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgHAAQgEAAgEACIgHAFIgDAGIAAAIQgBAIAEAHIALAQIAjApIAJALIAJAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgNAAgLgDg");
	this.shape_33.setTransform(164,687.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXCgIgMgDQgFgDgGgGQgGgFgEgKQgEgKgDgOQgDgPAAgUIAAhMQAAgVADgOQADgOAFgJQAFgJAGgFQAFgFAGgDIAMgDIAJAAIAMABIAJAFIAIAHIAHAHIgBgfIAAhAIAsAAIAAE+IgjAAIgEgWIgHAJIgJAIIgMAGQgFACgJAAgAgIgzQgEABgDAFQgDAFgBAJIgCAWIAABbIACAXQABAIADAFQADAFAEACIAIACIAIgCIAHgEIAEgFIAEgHIAAiQQgEgIgFgFQgGgFgIAAg");
	this.shape_34.setTransform(571.6,626.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgRgFgFQgFgHgJAAQgGAAgHAEQgGAFgFAIIAADCIgsAAIAAjwIAiAAIADAZQAGgIAGgFIANgJIAMgFIAOgCQAUAAAMAQQAMAOAAAeIAAC4g");
	this.shape_35.setTransform(554.2,629.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_36.setTransform(536.5,630);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgRgFgFQgFgHgJAAQgGAAgHAEQgGAFgFAIIAADCIgtAAIAAjwIAjAAIADAZQAGgIAGgFIANgJIAMgFIAOgCQAUAAAMAQQAMAOAAAeIAAC4g");
	this.shape_37.setTransform(512.5,629.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgPB7QgIgCgHgDQgHgEgHgIQgGgHgGgLQgFgMgCgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAHgGQAGgHAIgEQAHgDAIgBIAPgCIAOABQAIABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgIAEgHACIgOABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAEADAGAAQAFAAAFgDQAEgEADgHQACgHABgLIABgdIAAg6IgBgdQgBgMgCgHQgDgHgEgDQgFgDgFAAQgGAAgEADg");
	this.shape_38.setTransform(495.2,630);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgDg");
	this.shape_39.setTransform(481.1,627);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgDg");
	this.shape_40.setTransform(469.2,627);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag2BrQgMgOABgeIAAi4IAsAAIAAC1QAAAQAFAFQAFAHAKAAQAFAAAGgEQAHgDAFgIIAAjCIAtAAIAADwIgiAAIgFgZQgGAIgFAFQgGAGgGADIgNAFIgNACQgVgBgMgPg");
	this.shape_41.setTransform(454.2,630.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAACfIgLgGIgJgIIgHgJIgEAWIgjAAIAAk+IAtAAIAABAIgCAgIAHgIIAJgHIAKgFIAOgBIAJAAIAKAEQAGADAFAFQAGAGAEAJQAEAKADAOQADAPAAATIAABKQAAAUgDAPQgDAOgEAKQgEAKgGAFQgGAGgFADIgMADIgJABQgJAAgGgCgAgNgwQgFAFgDAGIAACSIADAHIAFAFIAGAEIAHACIAJgCQAEgCADgFQADgFABgIIACgXIAAhbIgCgWQgBgJgDgFQgDgFgEgBIgJgCQgHAAgGAFg");
	this.shape_42.setTransform(436.9,626.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhCChIAAk/IAjAAIADAaIAIgKIAJgJIAMgHQAHgCAIAAIAJAAIALAEQAGADAGAFQAEAGAFAJQAFAKACAOQADAPAAAUIAABKQAAATgDAPQgCAOgFAKQgEAJgGAGQgFAGgGACIgMAEIgJABQgPAAgHgGQgKgFgGgIIABAeIAABAgAgNh7QgGAFgDAHIAACRIAEAHIAEAFIAHAEIAHACIAJgCQADgCADgFQAEgFACgIIABgXIAAhbIgBgWQgCgJgDgFQgDgFgEgBIgJgCQgIAAgFAFg");
	this.shape_43.setTransform(411.9,633.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_44.setTransform(394.1,630);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("ABCB6IAAi2IgBgNIgEgJQgDgEgDgCIgKgBQgFAAgHAEQgGAFgFAIIAAADIAAADIAAC8IgrAAIAAi2IgBgNIgFgJQgCgEgDgCIgKgBQgGAAgGAEQgGAFgFAIIAADCIgtAAIAAjwIAjAAIADAZQAGgIAGgFIANgJIAMgFIAOgCQAOAAAJAHQAKAHAFAOQAFgIAGgFIANgIIAMgFIAOgCQAUAAAMAQQAMAOAAAeIAAC4g");
	this.shape_45.setTransform(373.3,629.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIAOgBQALAAALAEQALAEAJAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQAAALADAGQAEAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgFAAgEADg");
	this.shape_46.setTransform(344.3,630);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_47.setTransform(327.1,626.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgCCXQgJgCgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgDg");
	this.shape_48.setTransform(312.4,627);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAaCgIgyh4IgCAAIAAB4IgsAAIAAk/IAsAAIAAC3IACAAIAvhpIArAAIg2BtIA7CEg");
	this.shape_49.setTransform(291.6,626.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgtBjQgQgZAAg0IAAgtQAAgXAEgQQADgQAGgMQAFgLAHgGQAHgHAIgDQAHgEAIgBIAMgBQANAAAKAEQAKADAHAHQAIAGAEAKQAEAKAAAOIgBAOIgCAMIgkAAIAAgIQAAgTgEgKQgEgKgKAAQgFAAgEADQgEACgCAGQgDAGgBALIgCAaIAABDIABAbQABALADAHQADAHAEADQAEAEAGAAIAGgCQAEgCACgEIAEgKIABgQIAAgHIAnAAIAAAJQAAAigPAQQgQAQgeAAQgeAAgQgZg");
	this.shape_50.setTransform(274.6,630);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgOQAAgIACgFQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_51.setTransform(262.3,625.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_52.setTransform(253.1,626.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgtBjQgQgZAAg0IAAgtQAAgXAEgQQADgQAGgMQAFgLAHgGQAHgHAIgDQAHgEAIgBIAMgBQANAAAKAEQAKADAHAHQAIAGAEAKQAEAKAAAOIgBAOIgCAMIgkAAIAAgIQAAgTgEgKQgEgKgKAAQgFAAgEADQgEACgCAGQgDAGgBALIgCAaIAABDIABAbQABALADAHQADAHAEADQAEAEAGAAIAGgCQAEgCACgEIAEgKIABgQIAAgHIAnAAIAAAJQAAAigPAQQgQAQgeAAQgeAAgQgZg");
	this.shape_53.setTransform(241,630);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgeA7IARh2IAtAAIgaB2g");
	this.shape_54.setTransform(220.7,641.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAgB5IgZiGIgHgkIAAAAIgFAkIgWCGIgsAAIgnjxIAqAAIARCCIAFAxIABAAIAGgxIAWiCIAlAAIAYCCIAHAxIABAAIADgxIAPiCIApAAIgnDxg");
	this.shape_55.setTransform(204.8,630);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgOB7QgIgCgIgDQgIgEgGgIQgHgHgFgLQgEgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgEAAgFADg");
	this.shape_56.setTransform(184.8,630);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAkCWIhHjDIgCAAIACARIACAWIABAdIAAAnIAABYIgpAAIAAkrIAlAAIBJDIIABAAIgCgQIgCgUIgBgYIgBgeIAAhuIAqAAIAAErg");
	this.shape_57.setTransform(166.5,627.1);

	this.instance_1 = new lib.CompoundPath_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(375.1,667,1,1,0,0,0,375.1,667);
	this.instance_1.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,750.2,1334), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{show_map_guide:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// Layer 1
	this.map_guide = new lib.Symbol40();
	this.map_guide.parent = this;
	this.map_guide.setTransform(375.1,667,1,1,0,0,0,375.1,667);
	this.map_guide.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.map_guide).wait(23).to({alpha:0.059},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750.2,1334);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(384.5,803.5,1,1,0,0,0,90.2,107.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTCYQgHgJgBgQQABgTAHgHQAIgJALABQANAAAHAIQAIAJgBARQABAQgIAIQgHAJgNAAQgLAAgIgIgAgSA8IgGjbIAwAAIgGDbg");
	this.shape.setTransform(322.8,638.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWCfQgKgCgJgFQgHgFgFgKQgFgJAAgOIABgGIACgIIAfAAQAAAPAGAHQAGAGAMAAIAJgBQAEgCAEgDQADgEACgIQACgHAAgLIAAgmQgGAIgJAGQgJAFgOAAIgJgBIgLgDQgGgDgGgGQgGgGgEgJQgEgKgDgOQgDgPAAgTIAAhAQAAgUADgOQADgNAEgKQAEgJAHgFQAFgGAGgCIALgEIAKAAQAJAAAGACQAGACAFAEIAJAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgJALgMAGQgNAGgRAAQgLAAgLgCgAgIh+QgEABgDAFQgDAFgBAJIgCAWIAABPIACAVQABAJADAFQADAFAFACIAIACIAIgCIAFgEIAFgFIADgHIAAiDQgDgIgGgFQgFgFgIAAg");
	this.shape_1.setTransform(307.7,645.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWCfQgKgCgJgFQgHgFgFgKQgFgJAAgOIABgGIACgIIAfAAQAAAPAGAHQAGAGAMAAIAJgBQAEgCAEgDQADgEACgIQACgHAAgLIAAgmQgGAIgJAGQgJAFgOAAIgJgBIgMgDQgFgDgGgGQgGgGgEgJQgEgKgDgOQgDgPAAgTIAAhAQAAgUADgOQADgNAEgKQAEgJAHgFQAFgGAGgCIALgEIAKAAQAJAAAGACQAGACAFAEIAJAIIAGAKIAEgYIAjAAIAADnQAAAVgEAQQgEAQgIAMQgJALgMAGQgNAGgRAAQgLAAgLgCgAgIh+QgEABgDAFQgDAFgBAJIgCAWIAABPIACAVQABAJADAFQADAFAFACIAIACIAIgCIAGgEIAEgFIADgHIAAiDQgDgIgGgFQgFgFgIAAg");
	this.shape_2.setTransform(290.2,645.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbB2QgNgGgIgMQgIgMgEgTQgEgUgBgbIAAgtQAAgXAEgQQAEgQAFgMQAGgLAHgGQAHgHAIgDQAIgEAHgBIANgBQAMAAAMAEQALAEAIAIQAJAJAEAPQAGAOAAAWIgBAPIgBAPIgCAOIgDAMIhPAAIAAAYIACAbQABALACAGQAEAHAFADQAEADAHAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgQAAgLgGgAgHhXQgEACgDAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQABgYgGgLQgFgKgMAAQgEAAgFADg");
	this.shape_3.setTransform(273.8,641.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhBASIAAgjICDAAIAAAjg");
	this.shape_4.setTransform(256.9,640.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgOQAAgIACgFQACgFADgDQAEgEAFgBIAKgCQANAAAHAHQAHAHAAAOQAAAOgHAIQgHAIgNgBQgLABgIgIg");
	this.shape_5.setTransform(243.6,637.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaCgIgyh4IgCAAIAAB4IgsAAIAAk/IAsAAIAAC3IACAAIAvhpIArAAIg2BtIA7CEg");
	this.shape_6.setTransform(231.9,637.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_7.setTransform(217.8,637.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_8.setTransform(204.5,641.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgB5IgaiGIgGgkIAAAAIgFAkIgXCGIgrAAIgojxIArAAIASCCIADAxIACAAIAGgxIAWiCIAlAAIAYCCIAGAxIACAAIADgxIAPiCIAqAAIgoDxg");
	this.shape_9.setTransform(185.3,641.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2B6IAAjwIAhAAIADAYQAHgOAKgHQAJgHAKAAQATABAJAMQAJALAAAXIAAAIIgCAIIgCAJIgCAIIgeAAIAAgWIgCgMIgCgIIgEgEIgFgBQgEAAgEADQgEAEgEAGIAADGg");
	this.shape_10.setTransform(574.2,584.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag2BrQgMgOAAgeIAAi4IAtAAIAAC1QAAAQAFAFQAFAHAJAAQAGAAAHgEQAGgDAFgIIAAjCIAtAAIAADwIgiAAIgFgZQgFAIgGAFQgGAGgGADIgNAFIgNACQgVgBgMgPg");
	this.shape_11.setTransform(557.5,584.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPB7QgIgCgHgDQgHgEgHgIQgGgHgGgLQgFgMgCgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAHgGQAGgHAIgEQAHgDAIgBIAPgCIAOABQAIABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgIAEgHACIgOABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAEADAGAAQAFAAAFgDQAEgEADgHQACgHABgLIABgdIAAg6IgBgdQgBgMgCgHQgDgHgEgDQgFgDgFAAQgGAAgEADg");
	this.shape_12.setTransform(540.2,584.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag/CcIAAgcQAKACAIgCQAJgCAHgGQAFgGAEgIQADgKABgNIg5jyIAtAAIAaCGIAFAtIACAAIAFgtIAViGIArAAIgyD6QgEASgFAMQgFAOgIAIQgGAIgLAFQgKAEgOAAQgMAAgMgEg");
	this.shape_13.setTransform(523.9,588.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_14.setTransform(499.5,580.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtBjQgQgZAAg0IAAgtQAAgXAEgQQADgQAGgMQAFgLAHgGQAHgHAIgDQAHgEAIgBIAMgBQANAAAKAEQAKADAHAHQAIAGAEAKQAEAKAAAOIgBAOIgCAMIgkAAIAAgIQAAgTgEgKQgEgKgKAAQgFAAgEADQgEACgCAGQgDAGgBALIgCAaIAABDIABAbQABALADAHQADAHAEADQAEAEAGAAIAGgCQAEgCACgEIAEgKIABgQIAAgHIAnAAIAAAJQAAAigPAQQgQAQgeAAQgeAAgQgZg");
	this.shape_15.setTransform(483,584.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCCYQgJgDgGgHQgHgHgEgMQgEgMAAgVIAAiUIgTAAIAAggIAXAAIAJg/IAfAAIAAA/IAmAAIAAAgIgmAAIAACZIABAMIAEAIIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgCg");
	this.shape_16.setTransform(469.4,581.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_17.setTransform(454.6,584.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_18.setTransform(438.2,580.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgQgFgGQgFgHgJAAQgGAAgGAEQgHAFgFAIIAADCIgsAAIAAjwIAhAAIAFAZQAFgIAGgFIAMgJIANgFIANgCQAWABALAPQALAOAAAeIAAC4g");
	this.shape_19.setTransform(412.6,584.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_20.setTransform(394.9,584.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgtBjQgQgZAAg0IAAgtQAAgXAEgQQADgQAGgMQAFgLAHgGQAHgHAIgDQAHgEAIgBIAMgBQANAAAKAEQAKADAHAHQAIAGAEAKQAEAKAAAOIgBAOIgCAMIgkAAIAAgIQAAgTgEgKQgEgKgKAAQgFAAgEADQgEACgCAGQgDAGgBALIgCAaIAABDIABAbQABALADAHQADAHAEADQAEAEAGAAIAGgCQAEgCACgEIAEgKIABgQIAAgHIAnAAIAAAJQAAAigPAQQgQAQgeAAQgeAAgQgZg");
	this.shape_21.setTransform(380,584.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag1BrQgMgOAAgeIAAi4IAsAAIAAC1QAAAQAFAFQAFAHAKAAQAFAAAGgEQAHgDAFgIIAAjCIAsAAIAADwIghAAIgFgZQgGAIgFAFQgGAGgGADIgNAFIgNACQgWgBgKgPg");
	this.shape_22.setTransform(355.6,584.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOB7QgJgCgHgDQgIgEgGgIQgHgHgFgLQgEgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAPABQAIABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAEADAFAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgFAAgEADg");
	this.shape_23.setTransform(338.3,584.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag/CcIAAgcQAKACAJgCQAIgCAGgGQAGgGAEgIQADgKABgNIg6jyIAuAAIAZCGIAGAtIACAAIAFgtIAViGIArAAIgzD6QgDASgFAMQgFAOgIAIQgHAIgKAFQgKAEgPAAQgLAAgMgEg");
	this.shape_24.setTransform(322,588.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAgB5IgZiFIgHglIAAAAIgFAlIgWCFIgsAAIgnjxIAqAAIARCCIAFAxIABAAIAGgxIAWiCIAlAAIAYCCIAHAxIABAAIADgxIAPiCIApAAIgnDxg");
	this.shape_25.setTransform(294.8,584.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOB7QgIgCgIgDQgIgEgGgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAPABQAIABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgEAAgFADg");
	this.shape_26.setTransform(274.8,584.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAkCWIhHjDIgCAAIACARIACAWIABAdIAAAnIAABYIgpAAIAAkrIAlAAIBJDIIABAAIgCgQIgCgTIgBgZIgBgeIAAhuIAqAAIAAErg");
	this.shape_27.setTransform(256.5,581.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgTCZQgHgIAAgRQAAgSAHgIQAHgIAMAAQANAAAHAIQAIAJAAARQAAAQgIAJQgHAJgNAAQgMAAgHgJgAgVA9IAAgjIABgMIABgKIADgJIAHgLIATghQAHgLAEgLQAEgMAAgKIgCgNQgCgGgEgEQgDgEgFgDQgGgCgFAAQgOAAgHANQgGAMAAAYIAAAPIgkAAIgEgSIgBgSQAAgOAEgLQAEgMAJgIQAIgJANgFQAOgFASAAQARAAAOAFQANAFAJAJQAKAJAEAMQAEANAAAPIgBARIgFAQIgIARIgMARIgOATIgIALIgEAJIgCAKIAAANIAAAZg");
	this.shape_28.setTransform(230,580.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXCgIgMgDQgFgDgGgGQgFgFgFgKQgEgKgDgOQgDgPAAgUIAAhMQAAgVADgOQADgOAFgJQAFgJAFgFQAGgFAGgDIAMgDIAJAAIAMABIAJAFIAJAHIAGAHIgBgfIAAhAIAsAAIAAE+IgjAAIgEgWIgHAJIgJAIIgMAGQgFACgJAAgAgIgzQgEABgDAFQgDAFgBAJIgCAWIAABbIACAXQABAIADAFQADAFAEACIAIACIAIgCIAHgEIAEgFIAEgHIAAiQQgEgIgFgFQgGgFgIAAg");
	this.shape_29.setTransform(212,580.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQAAgXADgQQAEgQAFgMQAFgLAIgGQAHgHAIgDQAIgEAHgBIANgBQAMAAAMAEQALAEAIAIQAIAJAGAPQAEAOAAAWIAAAPIgBAPIgCAOIgDAMIhPAAIAAAYIACAbQABALACAGQAEAHAEADQAFADAHAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgMgGgAgHhXQgEACgDAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQAAgYgGgLQgGgKgLAAQgEAAgFADg");
	this.shape_30.setTransform(195.6,584.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag2B6IAAjwIAgAAIAEAYQAIgOAJgHQAJgHAKAAQATABAJAMQAJALAAAXIAAAIIgCAIIgCAJIgBAIIgfAAIAAgWIgCgMIgCgIIgEgEIgFgBQgEAAgEADQgEAEgEAGIAADGg");
	this.shape_31.setTransform(181.4,584.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgOB7QgIgCgIgDQgHgEgHgIQgHgHgFgLQgEgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAPABQAIABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgEAAgFADg");
	this.shape_32.setTransform(569.5,527.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgCCYQgJgDgGgHQgHgHgEgMQgEgMAAgVIAAiVIgTAAIAAgfIAXAAIAJg/IAfAAIAAA/IAmAAIAAAfIgmAAIAACaIABAMIAEAIIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgCg");
	this.shape_33.setTransform(555.4,524.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXCgIgMgDQgGgDgFgGQgGgFgEgKQgFgKgCgOQgDgPAAgUIAAhMQAAgVADgOQADgOAFgJQAFgJAFgFQAGgFAHgDIALgDIAJAAIALABIAKAFIAIAHIAHAHIgBgfIAAhAIAsAAIAAE+IgjAAIgDgWIgHAJIgJAIIgNAGQgGACgHAAgAgIgzQgEABgDAFQgDAFgCAJIgBAWIAABbIABAXQACAIADAFQADAFAEACIAIACIAIgCIAGgEIAFgFIAEgHIAAiQQgEgIgFgFQgGgFgIAAg");
	this.shape_34.setTransform(532.7,523.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQAAgXADgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIAOgBQALAAALAEQALAEAJAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIABAbQABALADAGQAEAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgQAAgLgGgAgHhXQgFACgCAHQgDAGgCALIgBAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgFAAgEADg");
	this.shape_35.setTransform(516.3,527.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgQgFgHQgEgGgKAAQgGAAgHAEQgGAFgFAIIAADCIgtAAIAAjxIAiAAIAEAaQAGgIAGgFIAMgJIANgFIANgCQAWABALAPQALAPAAAdIAAC4g");
	this.shape_36.setTransform(499.2,527.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag2B6IAAjxIAgAAIAEAZQAIgOAKgGQAIgIAKAAQATABAJALQAJAMAAAXIAAAIIgBAIIgCAJIgDAIIgeAAIAAgWIgBgMIgDgIIgEgDIgEgCQgGAAgDADQgEAEgDAGIAADGg");
	this.shape_37.setTransform(484.2,527.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag1BsQgNgPAAgeIAAi5IAtAAIAAC2QAAAQAFAFQAFAHAKAAQAFAAAGgEQAHgDAFgIIAAjDIAsAAIAADxIgiAAIgEgaQgFAJgGAGQgGAFgHADIgLAFIgOACQgWAAgKgPg");
	this.shape_38.setTransform(467.4,527.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgCCYQgJgDgGgHQgHgHgEgMQgEgMAAgVIAAiVIgTAAIAAgfIAXAAIAJg/IAfAAIAAA/IAmAAIAAAfIgmAAIAACaIABAMIAEAIIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgCg");
	this.shape_39.setTransform(452.7,524.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIABgQIAEgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAHAAQAKAAAEgGQAEgGAAgHIAAgHIgDgHIgFgIIgHgIIgfgmIgMgPIgLgRIgHgSQgCgKgBgKQAAgOAGgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAAKAEQALADAHAGQAIAGAEAKQAEAJAAANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgGAAQgGAAgDACIgHAFIgCAGIgBAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgMAAgMgDg");
	this.shape_40.setTransform(431.8,527.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgWCnIAAjxIArAAIAADxgAgTh0QgHgIAAgNQAAgJACgFQACgGADgDQAEgDAFgBIAKgCQANAAAHAHQAHAGAAAQQAAANgHAIQgHAHgNAAQgLAAgIgHg");
	this.shape_41.setTransform(419.9,522.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgQgFgHQgFgGgJAAQgGAAgGAEQgHAFgFAIIAADCIgsAAIAAjxIAhAAIAFAaQAFgIAGgFIAMgJIANgFIANgCQAWABALAPQALAPAAAdIAAC4g");
	this.shape_42.setTransform(398.7,527.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgOB7QgIgCgIgDQgHgEgHgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAPABQAIABAIAEQAHADAGAHQAHAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgBAdIAAA6IABAdQABALADAHQADAHAEAEQAFADAEAAQAHAAAEgDQAEgEACgHQADgHACgLIABgdIAAg6IgBgdQgCgMgDgHQgCgHgEgDQgEgDgHAAQgEAAgFADg");
	this.shape_43.setTransform(381.4,527.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgCCYQgJgDgGgHQgHgHgEgMQgEgMAAgVIAAiVIgTAAIAAgfIAXAAIAJg/IAfAAIAAA/IAmAAIAAAfIgmAAIAACaIABAMIAEAIIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgCg");
	this.shape_44.setTransform(367.3,524.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgCCYQgJgDgGgHQgHgHgEgMQgEgMAAgVIAAiVIgTAAIAAgfIAXAAIAJg/IAfAAIAAA/IAmAAIAAAfIgmAAIAACaIABAMIAEAIIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgCg");
	this.shape_45.setTransform(355.4,524.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Ag1BsQgNgPAAgeIAAi5IAtAAIAAC2QAAAQAFAFQAFAHAJAAQAGAAAHgEQAGgDAFgIIAAjDIAsAAIAADxIgiAAIgEgaQgFAJgGAGQgGAFgHADIgLAFIgOACQgWAAgKgPg");
	this.shape_46.setTransform(340.4,527.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAACfIgLgGIgJgIIgHgJIgEAWIgjAAIAAk+IAtAAIAABAIgCAgIAHgIIAJgHIAKgFIAOgBIAJAAIAKAEQAGADAFAFQAGAGAEAJQAEAKADAOQADAPAAATIAABKQAAAUgDAPQgDAOgEAKQgEAKgGAFQgGAGgFADIgMADIgJABQgJAAgGgCgAgNgwQgFAFgDAGIAACSIADAHIAFAFIAGAEIAHACIAJgCQAEgCADgFQADgFABgIIACgXIAAhbIgCgWQgBgJgDgFQgDgFgEgBIgJgCQgHAAgGAFg");
	this.shape_47.setTransform(323.1,523.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_48.setTransform(297.5,523.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgtBjQgQgZAAg0IAAgtQAAgXAEgQQADgQAGgMQAFgLAHgGQAHgHAIgDQAHgEAIgBIAMgBQANAAAKAEQAKADAHAHQAIAGAEAKQAEAKAAAOIgBAOIgCAMIgkAAIAAgIQAAgTgEgKQgEgKgKAAQgFAAgEADQgEACgCAGQgDAGgBALIgCAaIAABDIABAbQABALADAHQADAHAEADQAEAEAGAAIAGgCQAEgCACgEIAEgKIABgQIAAgHIAnAAIAAAJQAAAigPAQQgQAQgeAAQgeAAgQgZg");
	this.shape_49.setTransform(281,527.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgCCYQgJgDgGgHQgHgHgEgMQgEgMAAgVIAAiVIgTAAIAAgfIAXAAIAJg/IAfAAIAAA/IAmAAIAAAfIgmAAIAACaIABAMIAEAIIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgCg");
	this.shape_50.setTransform(267.4,524.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_51.setTransform(252.6,527.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_52.setTransform(236.2,523.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIAOgBQALAAALAEQALAEAJAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQABALACAGQAEAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgFAAgEADg");
	this.shape_53.setTransform(211.6,527.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_54.setTransform(194.4,523.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgCCYQgJgDgGgHQgHgHgEgMQgEgMAAgVIAAiVIgTAAIAAgfIAXAAIAJg/IAfAAIAAA/IAmAAIAAAfIgmAAIAACaIABAMIAEAIIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgCg");
	this.shape_55.setTransform(179.6,524.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgbB2QgNgGgIgMQgIgMgFgTQgDgUAAgbIAAgtQAAgXADgQQAEgQAFgMQAFgLAIgGQAHgHAIgDQAIgEAHgBIANgBQAMAAAMAEQALAEAIAIQAIAJAGAPQAEAOAAAWIAAAPIgBAPIgCAOIgDAMIhPAAIAAAYIACAbQABALACAGQAEAHAFADQAEADAHAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgQAAgLgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQAAgYgGgLQgGgKgLAAQgEAAgFADg");
	this.shape_56.setTransform(595.2,470);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQAAgXADgQQAEgQAFgMQAFgLAIgGQAHgHAIgDQAIgEAHgBIANgBQAMAAAMAEQALAEAIAIQAIAJAGAPQAEAOAAAWIAAAPIgBAPIgCAOIgDAMIhPAAIAAAYIACAbQABALACAGQAEAHAEADQAFADAHAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgPAAgMgGgAgHhXQgEACgDAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQAAgYgGgLQgGgKgLAAQgEAAgFADg");
	this.shape_57.setTransform(579,470);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgYB5QgKgDgIgGQgIgGgEgKQgFgKAAgPIABgQIAEgLIAeAAIACAWQABAIADAGQADAFAGACQAEADAHAAQAKAAAEgGQAEgGAAgHIAAgHIgDgHIgFgIIgHgIIgfgmIgMgPIgLgRIgHgSQgCgKgBgKQAAgOAGgLQAEgKAIgHQAJgHAKgDQALgEALAAQANAAAKAEQALADAHAGQAIAGAEAKQAEAJAAANIgBAQIgDAOIgfAAIgBgVQgBgJgCgGQgDgGgEgDQgEgDgGAAQgGAAgDACIgHAFIgCAGIgBAIQAAAIADAHIALAQIAiApIAJALIAKAPIAIASQADAKAAAKQAAANgEALQgEAKgIAHQgIAIgLAEQgMAEgNAAQgMAAgMgDg");
	this.shape_58.setTransform(563.6,470);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag1BsQgNgPAAgeIAAi5IAtAAIAAC2QAAAQAFAGQAFAGAJAAQAGAAAHgEQAGgDAFgIIAAjDIAsAAIAADxIgiAAIgEgaQgGAJgFAGQgGAFgHAEIgLAEIgOACQgWAAgKgPg");
	this.shape_59.setTransform(539.7,470.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgIgEgGgIQgHgHgEgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAHgGQAGgHAIgEQAHgDAIgBIAPgCIAPABQAHABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgHAEgIACIgOABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAFADAFAAQAFAAAFgDQAEgEADgHQACgHABgLIABgdIAAg6IgBgdQgBgMgCgHQgDgHgEgDQgFgDgFAAQgFAAgFADg");
	this.shape_60.setTransform(522.4,470);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ag/CcIAAgbQAKABAIgCQAJgCAHgFQAFgGAEgKQAEgJAAgMIg5jzIAtAAIAaCGIAGAtIABAAIAFgtIAViGIAsAAIgzD6QgEASgFAMQgFANgHAJQgHAJgLAEQgLAEgNAAQgMAAgMgEg");
	this.shape_61.setTransform(506.1,474);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgPB7QgHgCgIgDQgIgEgGgIQgGgHgFgLQgFgMgDgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAGgGQAHgHAIgEQAHgDAIgBIAOgCIAQABQAHABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgHAHgHAEQgHAEgIACIgPABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAFADAEAAQAGAAAFgDQAEgEADgHQACgHABgLIABgdIAAg6IgBgdQgBgMgCgHQgDgHgEgDQgFgDgGAAQgEAAgFADg");
	this.shape_62.setTransform(482.4,470);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhICWIAAkrIAwAAIAWAAQAKABAMADQAKAEAKAGQAKAHAHALQAHAMAFASQAEATAAAZIAABXQAAAZgEATQgFARgHAMQgHAMgKAHQgKAGgKADQgMAEgKABIgWAAgAgbB2IANAAQAMAAAHgDQAHgDAFgIQAFgIABgOQACgOAAgVIAAhcQAAgVgCgOQgBgOgFgHQgFgJgHgDQgHgDgMAAIgNAAg");
	this.shape_63.setTransform(465.2,467.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgTCYQgIgJAAgQQAAgTAIgIQAHgHAMgBQANAAAIAJQAGAIAAASQAAAQgGAIQgIAKgNgBQgMAAgHgIgAgSA9IgFjdIAvAAIgGDdg");
	this.shape_64.setTransform(441.7,466.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("Ag2B6IAAjxIAhAAIADAZQAHgOAKgGQAJgIAKAAQATAAAJAMQAJAMAAAXIAAAIIgCAIIgCAKIgBAIIggAAIAAgXIgBgMIgCgIIgEgDIgFgCQgEAAgEAEQgFADgDAGIAADGg");
	this.shape_65.setTransform(429.6,469.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgbB2QgNgGgIgMQgIgMgEgTQgEgUgBgbIAAgtQAAgXAEgQQAEgQAFgMQAGgLAHgGQAHgHAIgDQAIgEAHgBIANgBQAMAAAMAEQALAEAIAIQAJAJAEAPQAGAOgBAWIAAAPIgBAPIgCAOIgDAMIhPAAIAAAYIACAbQABALACAGQADAHAGADQAEADAHAAIAIgCQAEgCADgEIAEgKIACgQIAAgHIAlAAIAAAJQAAAigQAQQgRAQgeAAQgQAAgLgGgAgHhXQgEACgDAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIAAgHIAAgHIAAgGQABgYgGgLQgFgKgMAAQgEAAgFADg");
	this.shape_66.setTransform(413.8,470);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgVCgIAAk/IArAAIAAE/g");
	this.shape_67.setTransform(401,466.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgbB2QgMgGgJgMQgIgMgFgTQgDgUAAgbIAAgtQgBgXAEgQQADgQAGgMQAGgLAHgGQAHgHAIgDQAHgEAIgBIAOgBQALAAALAEQALAEAJAIQAIAJAGAPQAEAOAAAWIAAAPIgCAPIgBAOIgCAMIhQAAIAAAYIACAbQAAALADAGQAEAHAEADQAGADAGAAIAIgCQAEgCADgEIAFgKIABgQIAAgHIAlAAIAAAJQAAAigQAQQgQAQgfAAQgPAAgMgGgAgHhXQgFACgCAHQgDAGgBALIgCAaIAAAPIAsAAIAAgFIABgHIAAgHIAAgGQgBgYgFgLQgGgKgLAAQgFAAgEADg");
	this.shape_68.setTransform(388.4,470);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgSB5Ig3jxIAsAAIAYB/IAFA0IABAAIAHg0IAXh/IArAAIg3Dxg");
	this.shape_69.setTransform(372.5,470.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_70.setTransform(356.1,470);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Ag2B6IAAjxIAhAAIADAZQAHgOAKgGQAJgIAKAAQATAAAJAMQAJAMAAAXIAAAIIgCAIIgBAKIgCAIIggAAIAAgXIgBgMIgCgIIgEgDIgEgCQgGAAgDAEQgFADgDAGIAADGg");
	this.shape_71.setTransform(342.6,469.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCCYQgJgDgGgHQgHgHgEgMQgEgNAAgTIAAiWIgTAAIAAgfIAXAAIAJg/IAfAAIAAA/IAmAAIAAAfIgmAAIAACZIABAOIAEAHIAGADIAIABIALgBIAKgEIAAAYIgIAHIgKAGIgJACIgKABQgJAAgIgCg");
	this.shape_72.setTransform(329,467.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Ag2BsQgMgPAAgeIAAi5IAtAAIAAC2QAAAQAFAGQAFAGAJAAQAGAAAHgEQAGgDAFgIIAAjDIAtAAIAADxIgiAAIgFgaQgFAJgGAGQgGAFgGAEIgNAEIgNACQgVAAgMgPg");
	this.shape_73.setTransform(306.4,470.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgPB7QgIgCgHgDQgHgEgHgIQgGgHgGgLQgFgMgCgSQgDgRAAgYIAAglQAAgXADgRQADgRAFgLQAFgMAHgGQAGgHAIgEQAHgDAIgBIAPgCIAOABQAIABAHAEQAIADAHAHQAGAHAFALQAFAMADARQADARAAAXIAAAlQAAAYgDARQgDARgFAMQgFAMgHAHQgGAHgIAEQgIAEgHACIgOABgAgJhXQgEADgDAHQgDAHgBAMIgCAdIAAA6IACAdQABALADAHQADAHAEAEQAEADAGAAQAFAAAFgDQAEgEADgHQACgHABgLIABgdIAAg6IgBgdQgBgMgCgHQgDgHgEgDQgFgDgFAAQgGAAgEADg");
	this.shape_74.setTransform(289.1,470);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("Ag/CcIAAgbQAKABAIgCQAJgCAHgFQAFgGAEgKQADgJABgMIg5jzIAtAAIAaCGIAFAtIACAAIAFgtIAViGIArAAIgyD6QgEASgFAMQgFANgIAJQgGAJgLAEQgKAEgOAAQgMAAgMgEg");
	this.shape_75.setTransform(272.8,474);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAaCgIgyh4IgCAAIAAB4IgsAAIAAk/IAsAAIAAC3IACAAIAvhpIArAAIg2BtIA7CEg");
	this.shape_76.setTransform(250.3,466.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAWB6IAAi2QAAgQgFgHQgEgGgKAAQgGAAgHAEQgGAFgFAHIAADDIgtAAIAAjxIAiAAIAEAaQAGgIAGgFIAMgJIANgFIANgCQAWABALAPQALAPABAdIAAC4g");
	this.shape_77.setTransform(231.9,469.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AglB3QgJgEgGgIQgGgIgDgKQgDgLAAgMQAAgPAEgMQAEgLAHgKQAHgJAKgIQALgGAOgHIAOgHIAPgGIAAggIgBgNIgCgKQgCgFgEgCQgEgDgHAAIgJACQgEABgEAFQgDAEgCAHQgCAHAAAKIAAALIgiAAIgCgNIgBgLQAAgOAFgKQAEgKAJgHQAIgHALgEQAMgEANAAQASAAAMAEQAMAEAHAIQAHAIADAMQADAMAAAQIAAC0IghAAIgDgUQgHAKgMAGQgMAHgPAAQgLAAgJgFgAAOAHIgKAFIgIAHIgIAKIgGAOQgCAHAAAJQAAAOAFAIQAGAJALAAQAFAAAGgDIAJgHIAAhMg");
	this.shape_78.setTransform(214.1,470);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAWCgIAAi3QAAgQgFgGQgFgHgJAAQgGAAgGAFQgHAEgFAIIAADDIgtAAIAAk/IAtAAIAAA5IgDApQAFgGAGgFIAMgHIALgEIAMgBQAWAAALAPQAMAPAAAdIAAC5g");
	this.shape_79.setTransform(197.7,466.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgVCWIAAkIIgxAAIAAgjICNAAIAAAjIgwAAIAAEIg");
	this.shape_80.setTransform(181.2,467.2);

	this.instance_1 = new lib.CompoundPath_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(375.1,667,1,1,0,0,0,375.1,667);
	this.instance_1.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,750.2,1334), null);


(lib.page6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var canvas = this
		this.nextpool.addEventListener("click",nextback)
		function nextback(){
			canvas.parent.gotoAndPlay("page4");
		
			
		}
		
		this.backpool.addEventListener("click",nextback2)
		function nextback2(){
			canvas.parent.gotoAndPlay("page4");
		
			
		}
		this.stop();
		var canvas = this
		this.backToMap.addEventListener("click",ToMap)
		function ToMap(){
			canvas.parent.gotoAndPlay("page5");
		
			console.log("!!");
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// UI
	this.nextpool = new lib.Path_8();
	this.nextpool.parent = this;
	this.nextpool.setTransform(695.2,622.2,1,1,0,0,0,35,59.4);
	this.nextpool.alpha = 0.801;

	this.backpool = new lib.Path_1_2();
	this.backpool.parent = this;
	this.backpool.setTransform(59.2,622.2,1,1,0,0,0,35,59.4);
	this.backpool.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backpool},{t:this.nextpool}]}).wait(1));

	// UI
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAYQgHgIAAgPQAAgSAHgHQAHgHALgBQAMAAAHAIQAHAJAAAQQAAAOgHAJQgHAIgMAAQgLAAgHgIg");
	this.shape.setTransform(641.1,1005.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_1.setTransform(629.4,996.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_2.setTransform(616,996.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_3.setTransform(601.1,996.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVCXIAAisQAAgQgFgGQgEgFgJAAQgGgBgGAFQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgEIALgHIALgEIALgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_4.setTransform(584.9,993);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_5.setTransform(561.6,996.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_6.setTransform(546.6,996.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_7.setTransform(535.2,992.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_8.setTransform(525.1,996.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_9.setTransform(512,996.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgHQAKgHANgHIANgGIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHABQgFADgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAIIgHAJIgGAMQgCAHAAAJQAAANAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_10.setTransform(496.4,996.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgFgGgIAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAGgIAFgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_11.setTransform(473.7,996.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgGQgHgIgEgLQgFgKgCgRQgDgQAAgWIAAgjQAAgWADgRQACgPAFgLQAFgLAGgGQAGgHAIgDQAHgDAHgCIAOgBIAOABQAHABAHADQAHAEAGAGQAGAHAFAKQAFALADAQQACAQAAAXIAAAjQAAAVgCARQgDAQgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAbQABALADAGQADAHAEADQAEADAFgBQAFABAEgDQAEgDADgHQACgGABgLIABgbIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_12.setTransform(457.3,996.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWBzQgKgDgIgGQgHgGgEgJQgFgKAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFABQAFACAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgHIgGgIIgdglIgMgOIgKgPIgGgRQgDgKAAgJQAAgOAFgKQAEgKAIgGQAHgHALgDQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAHIgBAGQAAAJADAGIAKAQIAhAlIAIALIAKAPIAHARQADAIAAALQAAAMgEAJQgEALgHAGQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_13.setTransform(442.6,996.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_14.setTransform(430,996.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_15.setTransform(415.1,996.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag+CZIAAkuIAhAAIAEAYIAGgJIAJgJIALgGQAHgDAIABIAIAAIAKADQAGADAFAFQAFAGAEAJQAEAJADANQACAOAAATIAABGQAAASgCANQgDAOgEAKQgEAJgFAFQgGAFgFADIgLAEIgJAAQgNAAgIgFQgJgGgFgGIABAbIAAA+gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHABIAIgBQAEgCADgFQADgEACgIIABgVIAAhWIgBgVQgCgJgDgEQgDgEgDgDIgJgBQgHAAgFAFg");
	this.shape_16.setTransform(399.4,1000.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNCPQgIgBgIgDQgIgEgGgFQgIgGgGgKQgFgJgDgOQgDgNAAgTIAAh3QAAgSADgOQADgNAGgKQAFgJAIgGQAHgFAIgDQAIgDAHgBIAOgBIANABIAPAEQAIACAIAGQAGAFAGAKQAFAJAEAOQADANAAATIAAB3QAAATgDANQgEAOgFAJQgFAKgIAGQgHAFgIAEIgPAEIgNABgAgShmQgGAIAAATIAACYQAAASAGAIQAGAIANAAQAMAAAHgIQAFgIABgSIAAiYQgBgTgFgIQgHgJgMAAQgNAAgGAJg");
	this.shape_17.setTransform(375.1,993.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgzCAQgRgPAAgdIABgQIAEgRIAiAAIAAAOQAAANACAJQACAJADAGQAFAFAEADQAGACAHAAIAJgCQAFgCAEgEQAEgEABgGQACgGAAgJIAAgfIgBgQQgCgHgEgFQgDgFgGgCQgFgDgIAAIgSAAIAAgdIASAAIAKgCQAEgCADgEQAEgEACgGQACgGAAgJIAAgeQAAgPgGgIQgHgHgKAAQgOAAgHAMQgIAMAAAXIAAAQIggAAIgEgRIgBgRQAAgLAEgLQAEgKAIgJQAIgJAMgFQAMgFASAAQAQAAANAEQANAEAJAIQAIAIAEAMQADAMAAAOIAAASQAAAMgCAJQgDAKgFAHQgFAHgGAFIgNAHIAAACQAIADAHADQAHAFAGAHQAFAHADAKQADAKAAAOIAAATQAAAUgGANQgGAOgJAIQgJAIgNAEQgNADgNAAQghAAgSgQg");
	this.shape_18.setTransform(357.7,993.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhDCPIAAgZIA/h4IANgcIAIgWIAFgQIABgNIgCgNQgBgHgDgDQgEgEgEgBIgKgCQgOAAgHAMQgGAMAAAXIAAAQIgiAAIgDgRIgBgRQAAgLAEgKQADgLAIgJQAIgJANgEQAMgGARAAQASAAANAFQANADAJAJQAIAIAEAMQAEAMAAAPIgCARIgFASIgJAVIgPAZIg3BqIBSAAIAAAig");
	this.shape_19.setTransform(341.2,993.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgrCOIAAghIAhAAIAAjAIgjAfIgTgWIBAhDIAgAAIgBABIABgBIAAD6IAhAAIAAAhg");
	this.shape_20.setTransform(325.9,993.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_21.setTransform(304.2,996.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAVCXIAAisQAAgQgFgGQgEgFgJAAQgGgBgGAFQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgEIALgHIALgEIALgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_22.setTransform(288,993);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgGgHQgGgGgFgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgJAAgHgCg");
	this.shape_23.setTransform(274.1,993.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_24.setTransform(253.5,996.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_25.setTransform(240.1,996.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_26.setTransform(225.1,996.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAdByIgXh+IgGgjIAAAAIgFAjIgVB+IgpAAIgljjIAoAAIAQB6IAEAvIABAAIAFgvIAWh6IAjAAIAWB6IAGAvIACAAIACgvIAPh6IAnAAIglDjg");
	this.shape_27.setTransform(206.3,996.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgzBmQgLgOAAgdIAAitIAqAAIAACqQAAAQAFAFQAEAGAJAAQAGAAAGgEQAGgDAFgHIAAi3IAqAAIAADjIghAAIgEgZQgFAIgFAGQgGAFgGADIgLAEIgNABQgUAAgLgNg");
	this.shape_28.setTransform(179.5,996.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgGQgHgIgEgLQgFgKgCgRQgDgQAAgWIAAgjQAAgWADgRQACgPAFgLQAFgLAGgGQAGgHAIgDQAHgDAHgCIAOgBIAOABQAHABAHADQAHAEAGAGQAGAHAFAKQAFALADAQQACAQAAAXIAAAjQAAAVgCARQgDAQgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAbQABALADAGQADAHAEADQAEADAFgBQAFABAEgDQAEgDADgHQACgGABgLIABgbIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_29.setTransform(163.1,996.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVCOIAAhfIg5i8IArAAIAjCIIABAAIAiiIIAsAAIg6C8IAABfg");
	this.shape_30.setTransform(147.3,993.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// UI
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ai6gwIAfhAIFWChIgfBAg");
	this.shape_31.setTransform(668.5,93.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ai1BAIFIi9IAjA+IlIC9g");
	this.shape_32.setTransform(668.6,72.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhIBJQgfgeAAgrQAAgqAfgeQAegfAqAAQArAAAeAfQAfAeAAAqQAAArgfAeQgeAfgrAAQgqAAgegfg");
	this.shape_33.setTransform(648.7,83.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhIBJQgfgeAAgrQAAgqAfgeQAegfAqAAQArAAAeAfQAfAeAAAqQAAArgfAeQgeAfgrAAQgqAAgegfg");
	this.shape_34.setTransform(688,101.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhIBJQgfgeAAgrQAAgqAfgeQAegfAqAAQArAAAeAfQAfAeAAAqQAAArgfAeQgeAfgrAAQgqAAgegfg");
	this.shape_35.setTransform(688,62.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F9DD89").s().p("AlIFJQiIiJAAjAQAAjACIiHQCIiJDAAAQDAAACJCJQCICHAADAQAADAiICJQiJCIjAAAQjAAAiIiIg");
	this.shape_36.setTransform(673,82.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AlwFxQiZiYgBjZQABjXCZiZQCZiZDXgBQDZABCYCZQCZCZAADXQAADZiZCYQiYCZjZAAQjXAAiZiZg");
	this.shape_37.setTransform(673,82.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).wait(1));

	// Layer 2
	this.backToMap = new lib.backTomap();
	this.backToMap.parent = this;
	this.backToMap.setTransform(82.2,82.2,1,1,0,0,0,52.2,52.2);

	this.timeline.addTween(cjs.Tween.get(this.backToMap).wait(1));

	// Layer 17
	this.instance = new lib.blingbling();
	this.instance.parent = this;
	this.instance.setTransform(468.4,757.5,1,1,0,0,0,468.4,757.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol63();
	this.instance_1.parent = this;
	this.instance_1.setTransform(420.2,660.2,1,1,0,0,0,147.5,156.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#AC4767").s().p("AjJhYIAAgxIGTDhIAAAyg");
	this.shape_38.setTransform(304.7,833.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#682234").s().p("AjMBYIGZjhIAAAxImZDig");
	this.shape_39.setTransform(471.2,833.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#853344").s().p("Ap0AZIAAgxITpAAIAAAxg");
	this.shape_40.setTransform(387.8,844.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C54C5F").s().p("Ap4DiImTjiIGTjhITxAAIGTDhImTDig");
	this.shape_41.setTransform(388.1,819.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_1}]}).wait(1));

	// levelAndName
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgWIAAgkQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAkQAAAWgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAHgBAKIgBAcIAAA2IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg2IgBgcQgBgKgCgHQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_42.setTransform(490.8,80.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgEgGQgFgGgJAAQgFAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_43.setTransform(474.5,80.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFABgDAEQgDAEgCAHQgCAHAAAJIAAALIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_44.setTransform(457.8,80.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgqBeQgPgYAAgxIAAgqQAAgWADgPQADgQAFgKQAGgLAGgGQAHgHAHgCQAHgEAHgBIAMgBQAMAAAJAEQAKACAGAHQAHAGAFAJQAEAKgBANIAAANIgCAMIgiAAIAAgIQAAgSgEgJQgEgKgKAAQgEAAgEADQgEACgCAGQgDAFAAAKIgCAZIAAA/IABAaQABALACAGQADAGAEADQAEADAFABIAHgCQADgBACgEIAEgKIABgPIAAgHIAkAAIAAAIQAAAigOAOQgPAPgcAAQgcAAgPgXg");
	this.shape_45.setTransform(443.7,80.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_46.setTransform(432,76.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgWIAAgkQAAgWADgPQACgQAFgLQAFgLAGgGQAGgHAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAkQAAAWgCAPQgDARgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAHgBAKIgBAcIAAA2IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg2IgBgcQgBgKgCgHQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_47.setTransform(419.8,80.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgYCOIgzkbIAsAAIAfDgIABAAIAfjgIAsAAIgzEbg");
	this.shape_48.setTransform(404,77.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_49.setTransform(381.3,80.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_50.setTransform(369.3,76.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAGQAFAEAEAJQAEAKADAOQACANAAATIAABFQAAATgCAOQgDAOgEAIQgEAKgFAFQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAFIAFAEIAHACIAIgCQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_51.setTransform(357,83.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgCAIgBIAIABIAKAEQAGACAFAGQAFAEAEAJQAEAKADAOQACANAAATIAABFQAAATgCAOQgDAOgEAIQgEAKgFAFQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAFIAFAEIAHACIAIgCQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_52.setTransform(340.6,83.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFABgDAEQgDAEgCAHQgCAHAAAJIAAALIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_53.setTransform(323.9,80.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAJQAIAHAFAOQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAYQABAKADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_54.setTransform(309.3,80.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgKAAQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_55.setTransform(293.1,80.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_56.setTransform(280.5,75.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhACOIAAkbIArAAIASABIASAEQAKACAJAGQAJAFAHAKQAHAKAEAOQAEAPAAAVIAAAKQAAAXgDAQQgEAPgHALQgGALgJAHQgIAGgKAEQgJADgJABIgRABIgEAAIAABXgAgVAYIACAAQAMAAAHgDQAIgEAFgHQAEgHACgLQACgLAAgQIAAgaQAAgMgCgJQgBgKgFgGQgFgGgIgCQgHgDgMAAIgCAAg");
	this.shape_57.setTransform(268.7,77.5);

	this.instance_2 = new lib.Path_1_16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(193.3,78.5,1,1,0,0,0,40.2,32.4);
	this.instance_2.alpha = 0.66;

	this.instance_3 = new lib.Path_3_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(563.6,78.5,1,1,0,0,0,40.2,32.4);
	this.instance_3.alpha = 0.66;

	this.instance_4 = new lib.Path_4_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(378.7,78.5,1,1,0,0,0,165.3,32.4);
	this.instance_4.alpha = 0.66;

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-57.1,111.7,-18.4,9.5).s().p("AuKUMMAKRgrPISEG3MgUvAnPg");
	this.shape_58.setTransform(524.1,626.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],56.7,101.2,13.4,0.8).s().p("AtgrnIRvnqMAJSAjVIndDOg");
	this.shape_59.setTransform(256.1,647);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgrCOIAAghIAhAAIAAjAIgjAfIgSgWIA/hDIAgAAIAAABIAAgBIAAD6IAgAAIAAAhg");
	this.shape_60.setTransform(412.3,931.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgSAYQgHgIAAgQQAAgRAHgHQAHgIALAAQANABAGAHQAHAJAAAPQAAAPgHAJQgGAJgNAAQgLAAgHgJg");
	this.shape_61.setTransform(393.9,942.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_62.setTransform(382.5,934.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgyCOIAAkbIArAAIAAD5IA6AAIAAAig");
	this.shape_63.setTransform(370,931.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgFgGQgEgGgJAAQgGAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAFgIAFgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_64.setTransform(448.3,884.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgNB0QgIgBgHgEQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgRQACgQAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAWgCARQgDAQgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA4IABAbQABAKADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgKIABgbIAAg4IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_65.setTransform(432,884.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgFAEgFAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgDgIQgDgDgEgBIgJgCQgFAAgGAEQgGAFgEAHIAAC4IgrAAIAAjkIAhAAIAEAZQAFgIAFgFIAMgJIAMgEIANgCQAOAAAIAHQAKAGAEANQAFgHAGgFIALgIIAMgEIANgCQAUAAAKAPQALAOAAAcIAACug");
	this.shape_66.setTransform(411.5,884.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_67.setTransform(394.7,880.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_68.setTransform(382.4,881.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_69.setTransform(366,881.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgHIANgGIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgMIgBgMQAAgMAFgKQAEgKAIgHQAIgGALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAHIgHAJIgGAMQgCAHAAAJQAAAMAFAIQAFAJAKAAQAGgBAFgCIAIgHIAAhHg");
	this.shape_70.setTransform(349.2,884.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_71.setTransform(334.3,882);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]}).wait(1));

	// Layer 18
	this.instance_5 = new lib.clouds_group_pine();
	this.instance_5.parent = this;
	this.instance_5.setTransform(456.4,180.7,1,1,0,0,0,456.4,180.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 4
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6FB77F").s().p("ArnDEICGhJIHxCPInjjDIB4hMIHRDgInFkeICGhKIIaF9InjnKIEBhUIE0H6IjgohIDwgbIBAIxIBAoQICTA9IiSHCIDemBIBWApIkiGqIniBvg");
	this.shape_72.setTransform(115.1,574.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6FB77F").s().p("AmnBRIAhgrIDWCCIjBi0IA7hFICrDwIhzkiICAgxIAeFDIAXlIICXgbIh7FeICrlHIBXABIiZEDICvjoIBRAGIjBDdIDWjIIBXAAIk8EQIkQBLg");
	this.shape_73.setTransform(226.6,720.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CCCCCC").s().p("AjuAGQAJg0A2hPIA1hEICigZIA2AiQA7AoAWAfQAWAfAjBxQARA4ANAzIoLBRQAIiAAPhVg");
	this.shape_74.setTransform(206.7,722.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E6E6E5").s().p("Ak2CiQAPiAAOgcQAMgcAsh9IAph3IAvgHQA4gHAzgCQCfgGAnAzQAmAzA/C+QAfBfAXBVIqGBkQAGg6AHhAg");
	this.shape_75.setTransform(206,716.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CCCCCC").s().p("AjnEvQgEjDAIhAQAJg/Awi4IAvisQgCgUAFgXQAJgvAjgQQAjgPAeAwQAOAYAIAcIgFBmQgCBtAPAkQAPAlAyA/QAdAkBCBOQApAyAKCbQAGBNgDBEInLBGQgDhUgChig");
	this.shape_76.setTransform(166.9,692.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E6E6E5").s().p("AlFFbQAAi+AWhlQAKgsAKhmQAMh6AIgxQAfjNBSglQBTglBhBFQAxAiAhAqIgDCQQAGCVAuAbQAvAbAlA/QATAgAKAaIA1FYIqJBkQgEhLABhfg");
	this.shape_77.setTransform(167,691.2);

	this.instance_6 = new lib.Path_9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(202.7,740.5,1,1,0,0,0,45.8,10.8);
	this.instance_6.alpha = 0.41;

	this.instance_7 = new lib.Path_1_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.7,740.4,1,1,0,0,0,45.8,10.8);
	this.instance_7.alpha = 0.41;

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6FB77F").s().p("AmnBRIAigrIDVCCIjBi0IA7hFICsDwIh0kiIB/gxIAfFDIAXlIICXgaIh7FeICrlIIBXABIiZEDICvjoIBRAGIjBDdIDWjHIBWAAIk7EQIkQBJg");
	this.shape_78.setTransform(157.5,911.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EBA24D").s().p("AhDgWICHiSIgTFRg");
	this.shape_79.setTransform(139.8,914.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FAE485").s().p("AhhiJIC/AzIAEDgg");
	this.shape_80.setTransform(123.6,920.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CD6C38").s().p("Ag6hvIB0C/IhwAhg");
	this.shape_81.setTransform(138.9,923);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F2BC5F").s().p("AijAVIFHhdIiICRg");
	this.shape_82.setTransform(130.2,904.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EBA24D").s().p("AhugCIB+iQIBfElg");
	this.shape_83.setTransform(135.6,882.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FAE485").s().p("AhbiVIC3A3IhqD0g");
	this.shape_84.setTransform(115.3,891.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CD6C38").s().p("Ag4h6IDcCWIlHBfg");
	this.shape_85.setTransform(130.2,894.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F2BC5F").s().p("AiaARIE1hYIh/CPg");
	this.shape_86.setTransform(121.7,874.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CD6C38").s().p("AhCiKIDdC8Ik1BZg");
	this.shape_87.setTransform(121.7,862.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FAE485").s().p("Ag1jCIBrBwIhXEVg");
	this.shape_88.setTransform(109.5,857.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EBA24D").s().p("AhEAJICJicIhQEmg");
	this.shape_89.setTransform(164.4,906.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CD6C38").s().p("AAjh1IA5CJIi3Big");
	this.shape_90.setTransform(154,919.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FAE485").s().p("AgsioIBsBmIh/Drg");
	this.shape_91.setTransform(151.1,914.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F2BC5F").s().p("Ah7gXID3g2IiKCbg");
	this.shape_92.setTransform(159,899.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EBA24D").s().p("AhWAiIAtjUICAFlg");
	this.shape_93.setTransform(162.7,873.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CD6C38").s().p("AgwhjICsCQIj3A2g");
	this.shape_94.setTransform(159,887.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FAE485").s().p("AhTiSICnBfIhKDGg");
	this.shape_95.setTransform(145.6,882.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F2BC5F").s().p("AhqALIDVh0IgtDTg");
	this.shape_96.setTransform(147.9,866.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EBA24D").s().p("AhNALIgHh3IAQAMQAYAWAmA1QA4BPAjAzg");
	this.shape_97.setTransform(150.1,845.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CD6C38").s().p("Ag3hqICiBhIjVB0g");
	this.shape_98.setTransform(147.9,856.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FAE485").s().p("Ah3ipIDvB+IgzDWg");
	this.shape_99.setTransform(130.3,850.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F2BC5F").s().p("Ah3g+IDoAGIAHB3g");
	this.shape_100.setTransform(130.3,839.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FAE485").s().p("AhwhmIDIA7IAZCSg");
	this.shape_101.setTransform(101.3,925.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CD6C38").s().p("Ah0hJIDpCDIjPAQg");
	this.shape_102.setTransform(121.7,928.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EBA24D").s().p("Ah0AHIAmiQIDDETg");
	this.shape_103.setTransform(121.7,920.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F2BC5F").s().p("Ah2ANIDthVIgmCQg");
	this.shape_104.setTransform(101.9,913.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FAE485").s().p("AhLi5ICXCdIhGDWg");
	this.shape_105.setTransform(89.4,896.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#CD6C38").s().p("AgxhrICoCAIjtBWg");
	this.shape_106.setTransform(101.9,904.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EBA24D").s().p("AhUAVIBbiqIBOErg");
	this.shape_107.setTransform(105.4,891.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F2BC5F").s().p("Ah5hGIDzgPIhcCrg");
	this.shape_108.setTransform(94,885.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FAE485").s().p("AgigWQAEhBAIgfIAIgSIA5BpIhVCoQACg9AGhig");
	this.shape_109.setTransform(86.1,864.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CD6C38").s().p("AgjhUICdCaIjzAOg");
	this.shape_110.setTransform(94,869.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EBA24D").s().p("AhugRIAhiYIC8FUg");
	this.shape_111.setTransform(126.1,850.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EBA24D").s().p("AhOApICIjrIAVGFg");
	this.shape_112.setTransform(98.3,857.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F2BC5F").s().p("AhGgjICNgoIghCXg");
	this.shape_113.setTransform(111.2,841.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F2BC5F").s().p("AhgANIDBiCIiHDrg");
	this.shape_114.setTransform(94.3,849.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#61B26F").s().p("Ag3ELQgQgfgugIQgugIg4AYIguAZQAGgOAQgTQAhgnAwgdQAngXA4AOQAdAHAUALQgQgSgfgTQg8gohEgKQg8gIhWALIhLANIA/gaQBLgcA5gNQA4gNBVAiQApARAgATQgVgagngiQhMhFhagtQhZgsheAMQgdAEgbAJIgUAIIAUgPQAagRAdgOQBegsBgAJQBgAKBQBKQAnAmATAjQgKgegDgqQgEhTAvg6QAvg4BkgLQAzgGApAGIg8AmQhEAxgeA3QgeA2AfBVQAQApAVAfQACgaAKgjQAXhIAxgwQBIhGBgALQAwAFAhATQgrAEgyARQhkAigkA+QgnBBAYBZQANAtAUAfIlIBqQABgOgIgQg");
	this.shape_115.setTransform(100.6,816.2);

	this.instance_8 = new lib.Path_90();
	this.instance_8.parent = this;
	this.instance_8.setTransform(135.5,934.3,1,1,0,0,0,51.2,13.2);
	this.instance_8.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.instance_7},{t:this.instance_6},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]}).wait(1));

	// Layer 3
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#386741").s().p("AhmB4QABgJgBgMQgBgXgLgOQgKgOgPgJIgMgHIATABQAWACASAFQARAEANANQAHAHADAGQADgHABgKQADgUgHgRQgHgRgMgOIgJgMIAaARQAbARAGAJQAKAMACAHQAJgvgJggQgGgTgLgbIgKgXIAOALQAQAQAIATQANAfACARQAEgrATgbQALgRAVgNIASgKIgNAvQgNAyABAUQABASAMAbQAGANAGAJQAKgdANgKQAJgHAQgIIAOgFIgNARQgOAWgDAUIgKBLg");
	this.shape_116.setTransform(174.9,465.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F1B64D").s().p("AQLN+QhohBhZhVQhVhSguhNQhUiMnfkuQm+kZkdh0QlTiJl/igQncjIhrg2Qg8gegZgsQgagsAXgkQAYgnBMgNQBWgPCKAWQCQAYCCA0QBXAiCMBLQCkBXBQAkQCaBGCqAwQClAvFDBEQC8AoGcBTQMICeDbBdQETB1CNCjQA8BGAKA1QAKA2gsATQhCAciygRQjYgUhRAJQg+AHAiBcQAMAgBZCoQBKCKAJBFQAOBjhhATQgnAHgqAAQinAAjJh8g");
	this.shape_117.setTransform(238.5,916.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F6D1A3").s().p("AnkIqQhBgpgug4Qgug4gPg4QgchlBbh0QBKheCjh0QCth7FkjGQGXjhBNALQAiAFiiBtQlODhgoAdQomGLCVCeICSCWQA1A3AHAUQAIAWgiAPQgNAGhnAfQgxAPgxAAQhmAAhmhAg");
	this.shape_118.setTransform(46.3,723.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F1B64D").s().p("Av8MyQkZh1gci2QgbivDOkNQCwjkKCkhQFuimKGjpQCvg/D8gHQB0gEA7ARQBDASgWAnQgSAikFCfIotFUQscHzgVDEQgMBvAkA9QAZAqA6AbQBGAgAHAHQAdAagUA4QgYBAhYAqQhWAph/AMQg2AFg1AAQjlAAjihfg");
	this.shape_119.setTransform(91.7,707.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F6D1A3").s().p("AjoGLQgmgZg1hLQg4hQgngfQhCg1higDQhZgChnANQhkAPglACQg9AFgfgUQgkgWgShCQggh3CbgaQA7gKBogBIC9ACQBVABAwgzQAcgdAjhRQAjhRAegfQAygyBYgBQBYgBBLAeQAyAUBBAuQBLA0AaANQA5AdA8gCQBSgDDPgkQDHgkBwAAQBHAAAqBSQAlBLAABrQAABqgmBIQgpBRhHgDQhAgDgvgoQgKgJhAhLQgvg2gzgYQhIgghtAGQhsAGhIBAQgwArg4BjQg+BuggAlQg+BHhZAOQgZAEgWAAQg9AAgsgeg");
	this.shape_120.setTransform(458.4,1104.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F1B64D").s().p("AlDKZQg9hCg1iTIgph4QgXhEgSgnQgyhshDgJQhGgKgfAtQgQAYgUBVQgUBRgcAkQgsA4hbAGQhfAGhQiWQhHiGgijKQghjHAXiSQAYifBTgKQAvgGA4AhQAXANBRA+QBFA1AyAWQBIAgBKgHQBJgGARg2QAGgVAAhgQgBhRAcgqQApg9BwgRQBxgSBjAqQBFAeBVBJQBtBgAUANQBIAxBEgHQBFgGBEgZQAfgMBWgnQCXhHCKgGQC0gHCLC7QB9CoAYDZQAJBZgkBGQgbAyg+A5QhZBQgKALQgwA3gHA7QgSCYgzBPQg8BehxADQg0ABgah7QgGgdgej2QgYi+gkheQg1iEhggNQhfgNg4B3QgdA/g0DWQgwDKgyBZQhLCLh+ANQgQABgQAAQhrAAhJhQg");
	this.shape_121.setTransform(465.3,1115.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F6D1A3").s().p("AjpEVQg0grAlhmQA4h5ANg6QAIgkACgxIADhLQAGhNAvgXQAkgSARApQALAbAJBMQAJBWAIAdQAPA4AfAEQAgAFAHgXQAEgNgDgqQgEgpAIgTQALgdAngEQApgFAkAzQAfAuAUBMQATBHABBDQABBFgUAcQgoA6i8ATQg0AGgrAAQhvAAgtglg");
	this.shape_122.setTransform(258.8,544);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F1B64D").s().p("AmqLbQhlgOgbgcQgsguBDi5IA5iWQAghUAGgtQAFgmgBhcQAAhqACgqQAMiuBcgGQAygDAdAyQAQAbAaBXQAYBRAYAiQAkA0A9AAQB5ABAmiaQAYhjgHjGQgGieALg9QANhSA0gfQAqgZAbBXQAPAyAWB4IAcCAQAOAyATADQAKABgCgqIgHhhQgHiRAvgMQAygMAOCMIAJCCQAGBTAIAtQAOBNA0DyQAoDYgWA6QgaBDg2AEQgyAEgpgxQgQgUgGhQIgIigQgMjag4gRQhBgUgPBMQgHAhAEBmQAAAOANBRQANBVAEA7QAMDHhPBcQhZBnknASQgrACgoAAQhIAAg/gIg");
	this.shape_123.setTransform(275.5,508.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#61B26F").s().p("AinC9QAFgJAAgNQAAgagdgTQgdgSgugBIgpADIAbgQQAjgRArgFQAigFAjAbQARANAKAOQgGgRgOgXQgcgtgrgbQgmgWhAgSIg3gNIA0ABQA8ACAsAIQArAIAuAwQAYAYAOAWQgFgYgPgjQgchFgvg5Qgug5hFgUIg7gIIBDgJQBPgDA/AjQA/AkAdBKQAPAlACAeQACgYAMgdQAYg6A1gZQAygYBKAWQAkALAbAQQgYABgfAHQg/ANgnAdQgmAcgIBCQgDAiAEAbQAJgRAUgWQAngqAzgRQBIgaA+AjQAgAQAQAXQgfgJgogDQhQgGgtAfQgyAigNBEQgGAiADAbg");
	this.shape_124.setTransform(179.1,458.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#386741").s().p("AgECKQgVgMgRABQgRABgQAGIgMAGQASgYAWgTQAOgMASgDQAJgCAGABQgEgGgHgHQgPgOgSgEQgSgDgTAAIgPABIAdgMQAfgMAKAAQAQgBAGACQgIgJgNgKQgZgTgTgGQgUgGgcgGIgZgFIASgFQAVgFAVAEQAiAHAPAIQgJgHgJgLQgUgVgHgUQgHgTAAgYIADgVIAeAmQAiAnARAKQAaARAsACQgSgZgBgRQgBgLACgRIADgPIAIAVQAKAYAPAOQAXAWAhAcIiDCrIgQgNg");
	this.shape_125.setTransform(135,366.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#61B26F").s().p("AgGEOQAEgnAQgoQAOggAogPQAVgIARgCQgSgEgaABQg1ABgtAYQgoAUgwAtQgYAXgPASQAqhLAwg1QAcghBAgPQAigHAagBQgXgIgmgFQhLgMhIALQhJAKgzAxQgaAYgMAWQAHgbAUgjQAmhFA/gkQA+gjBOANQAmAHAcANQgUgNgSgaQglgzAGg6QAFg4A4gzIA3gpIgVAzQgUA9AEAwQAFAwA1AoQAbAVAaAKQgKgRgIgcQgQg3AKg1QAOhMA+gjQAUgLAWgFQALgDAHgBIgwA3QguBBAEA3QAEA8AzAuQAaAWAZALIicDTQgFgJgLgGQgXgNgfAPQgfAOgYAoQgLAUgGARQgBgMABgUg");
	this.shape_126.setTransform(121.3,361.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F6D1A3").s().p("AkTEZQgMg3gOieQgTjWBAiOQAdhABBgGQAggDBIARQAjAIBKgQQApgIBHgQQAwgIAbAQQAgATAUA9QA1CmhyAyQgzAXg5hKIgrg2QgYgagVACQgsADgvB6QgrBvAABNQAABPgbBOQgeBbgwASQgGACgGAAQglAAgUhjg");
	this.shape_127.setTransform(286.3,406.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F1B64D").s().p("AhSJCQgohqgYh+QgNhJgNkyIgKkkIkQh9IktgoIDniaIEggmQE2gkBwADQBwADDwBRQB5ApBhAoIhlCnIhaA6IAMCUQAMCfgBAuQgDBIgoB7QgsCLgpAEQgoAFg3iAQgrhngRhRQgGgcgTgTQgTgSgXgBQg4gDgHBfQgDAjgEB4QgFB7gLBUQggEDhfAKIgDAAQgzAAg1iKg");
	this.shape_128.setTransform(265.6,400.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D76837").s().p("EAYJBJWQgjhngPiCIgIhsQgeg9g8g+Qh5h9iYgIQhRgEgkA8QgXAogMBiQgNBrgNAhQgaBBhCACQg+ACgYkZQgVmhgVkOQgmnzhVljQhyngjUkrQjMkgqhlxQj9iKl/i6Iqck/QspmFlHjmQnVlKBZkAQCknXVgowQGuivHzijQD6hRCjgvIDE0MIgPsrIhnkQImLggIEJjvIHFhsIBShzII8AkIAMCZIF/CXIi/FMIAYTOIC1MhQi4BHkPB0QoeDom0DjQpkE/k3EGQmGFJBoDfQCaFNLfEtQHgDFMRDHQNqDdKWGUQIQFDFxGpQEIEvCdFEQBPCiAaBlIATBkQAUB5gBBpQgBFSjGA3QhnAcgtCGQgSA0ghDWQgaCngxBCQhFBeiVgeQhbgRgthkQgcg8gYiQQgZiOgXgwQgnhThSAHQhQAHghDBQgMBHgLB+IgSDkQgaEkgzCTQhKDRiVAfQgpAJgmAAQjVAAhgkXg");
	this.shape_129.setTransform(262.5,804.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FAE485").s().p("AjCj2IGFBdIlJGQg");
	this.shape_130.setTransform(341.6,487.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F2BC5F").s().p("AkFAYIILiLIiHDng");
	this.shape_131.setTransform(348.4,460.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#CD6C38").s().p("AgTjIIFxDoIq7Cpg");
	this.shape_132.setTransform(363.1,492.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FAE485").s().p("Ai9jSIF7BbIj+FKg");
	this.shape_133.setTransform(328.6,442.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EBA24D").s().p("Ai4AAICHjoIDqHRg");
	this.shape_134.setTransform(379.6,472.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CD6C38").s().p("AgHikIENC9IoLCNg");
	this.shape_135.setTransform(348.4,446.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F2BC5F").s().p("AjxANIHkh0IhqDPg");
	this.shape_136.setTransform(333.9,419.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FAE485").s().p("AiWioIEtB2IiTDbg");
	this.shape_137.setTransform(309.2,404.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EBA24D").s().p("AiGAJIBpjPICkGNg");
	this.shape_138.setTransform(361.1,429.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#CD6C38").s().p("AhehtIFRBnInkB0g");
	this.shape_139.setTransform(333.9,410);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EBA24D").s().p("AiogFIB6hbIDXDBg");
	this.shape_140.setTransform(341.2,399.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F2BC5F").s().p("AjTg6IGnAbIh5Bag");
	this.shape_141.setTransform(315.3,393.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FAE485").s().p("AjnlPIHPDJImLHWg");
	this.shape_142.setTransform(351.3,546.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F2BC5F").s().p("AldgPIK7ipIjsFxg");
	this.shape_143.setTransform(363.1,514.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CD6C38").s().p("AgijqIHRD1Qg/AZhaAfQixA9h6AeQh8AeibAbIiCAUg");
	this.shape_144.setTransform(378,556.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EBA24D").s().p("AjoA+IDslxIDlJng");
	this.shape_145.setTransform(397.8,526.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FAE485").s().p("AiugkIFeh3IiHE3g");
	this.shape_146.setTransform(354.1,393.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F2BC5F").s().p("ACCj3IAuF3IleB3g");
	this.shape_147.setTransform(354.1,365.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CD6C38").s().p("AgxknIFxC+QgVAegoAqQhQBTheA7QhcA8imBFIiSA6g");
	this.shape_148.setTransform(453.1,527.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FAE485").s().p("Aj5kzIHzAZIkNJOg");
	this.shape_149.setTransform(423.1,526.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EBA24D").s().p("Ai4BAIBsk9IA3BiQA+ByAsBQQAsBRAhBMQAPAlAIAVg");
	this.shape_150.setTransform(466.6,491.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F2BC5F").s().p("AkvCGIJfkkIhsE9g");
	this.shape_151.setTransform(428.5,482.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FAE485").s().p("AjojoIHRAAIjmHRg");
	this.shape_152.setTransform(397.9,472.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CD6C38").s().p("AhJjoIF5CsIpfElg");
	this.shape_153.setTransform(428.5,472.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EBA24D").s().p("Ai8A3IBQkZIBABZQBDBhAYAoQAnBBBnCig");
	this.shape_154.setTransform(440,443.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F2BC5F").s().p("AkQCNIIhkZIhREZg");
	this.shape_155.setTransform(401.9,435.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FAE485").s().p("AijjGIFHAAIijGNg");
	this.shape_156.setTransform(374.5,429.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CD6C38").s().p("AhtjGIF+B1IohEYg");
	this.shape_157.setTransform(401.9,429.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#EBA24D").s().p("Ai+BNIBckOIA2BIQA+BUAuA5QBJBfA2BPg");
	this.shape_158.setTransform(410,401.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F2BC5F").s().p("AjRCIIGjkPIhcEPg");
	this.shape_159.setTransform(379.1,395.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#CD6C38").s().p("AhKibIEcApImjEOg");
	this.shape_160.setTransform(379.1,393.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EBA24D").s().p("Ah2CnIgul2IA0A/QA9BJAoA2QA9BWBzCLg");
	this.shape_161.setTransform(383.6,361.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#CD6C38").s().p("AEyDjQjKAAihgRQihgRiQgiIhwgfIHzliIHCHCQg8ADhVAAIgYAAg");
	this.shape_162.setTransform(172.6,568.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EBA24D").s().p("AjgiBIHBjAIAAKDg");
	this.shape_163.setTransform(197.6,558.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#386741").s().p("AidgpIARgNQARgPAFgRQAFgQgBgSIgCgNIAKAPQAMATAGARQAHARgCASQgBAJgDAFIAQgGQASgKAJgQQAPgaADgXIACAfQACAhgDAKQgEAQgEAGIAYgPQAbgRALgRQAUgbATglIAAASQgCAXgLASQgKASgLAOIgIAJIAXgLQAagMAVgBQAUgBAXAIQAMAEAHAFQhUAegYAUQgQANgNAZIgLAXIARgEQASgEALACQAQAFAYANIgXABQgaACgRAKIhBAmg");
	this.shape_164.setTransform(448.1,432.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FAE485").s().p("Ah7kzIF1EEInzFjg");
	this.shape_165.setTransform(150.1,550.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F2BC5F").s().p("AmbiBIM3BEInBC/g");
	this.shape_166.setTransform(178.9,532.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#CD6C38").s().p("AmbBHIHtjRIFKEVg");
	this.shape_167.setTransform(178.9,512.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#EBA24D").s().p("AjEg8IGKicIhCGwg");
	this.shape_168.setTransform(206.9,504.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FAE485").s().p("AhXjXIFODeIntDRg");
	this.shape_169.setTransform(162.4,498.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#F2BC5F").s().p("AlshvILZBEImKCbg");
	this.shape_170.setTransform(190.1,487.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#CD6C38").s().p("AlsBmIGtkPIEsFTg");
	this.shape_171.setTransform(190.1,466.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#EBA24D").s().p("AjGheIGMiWIhgHpg");
	this.shape_172.setTransform(216.5,458.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FAE485").s().p("Agmj8ID9DqImtEPg");
	this.shape_173.setTransform(175.1,451.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#F2BC5F").s().p("AlFh0IKKBVImMCUg");
	this.shape_174.setTransform(203.8,437.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FAE485").s().p("ABckKICEGEIm/CRg");
	this.shape_175.setTransform(193.6,399.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FAE485").s().p("AiMDIQAdhgAmhjIBKjIIAehRICEFGIlFDjQAHgcAPgxg");
	this.shape_176.setTransform(76.2,526.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#61B26F").s().p("ACsEcQguhCg1gPQg5gRg8AhIgyAkIiRjaIAUgKQAUgRgEghQgEgjgdgjIgcgeIAeAKQAkASAfAdQAZAYACAqQAAAWgFAQQAKgOAJgYQARgzgHgyQgGgtgag9IgZgzIAgAqQAlAwAUAnQAWAmgIBCQgEAhgIAZIAhg0QAkhDAOhIQAOhHgbhCIgegzIAwAuQA0A8AMBGQANBHgnBGQgMAWgQASIgNAPIAxgXQA+gQA0AXQAzAZAdBGQAOAjAFAfQgQgSgYgTQgzgogugNQgvgLg5AkIguAnIAwgCQA6AEAuAcQBCAnAMBHQAGAigHAcQgMgegXghg");
	this.shape_177.setTransform(455.3,422.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#CD6C38").s().p("ADZDfQiDglh2gyQh3gxhjg7IhKgxIFEjjIFFHxQgqgIhCgSg");
	this.shape_178.setTransform(92.5,556.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#EBA24D").s().p("Ajhi9IHDh2Ih/Jng");
	this.shape_179.setTransform(115.1,550.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#F2BC5F").s().p("AklijIJLDRInDB2g");
	this.shape_180.setTransform(108.3,515.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FAE485").s().p("AgwAVQAmhjAjhRIAdg/IBKEBIj/C8QATgsA8ieg");
	this.shape_181.setTransform(92.1,476.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#CD6C38").s().p("AkjgKID/i8IFIGNg");
	this.shape_182.setTransform(108.5,499.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#EBA24D").s().p("Ajyi0IHmgjIifGvg");
	this.shape_183.setTransform(129.2,498.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#F2BC5F").s().p("AkXiCIIvDgInyAlg");
	this.shape_184.setTransform(125.6,467.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FAE485").s().p("AgbgIIBwjmIA8D5IkhDkQAqhgBLiXg");
	this.shape_185.setTransform(112.1,430.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#CD6C38").s().p("AkXABIEhjiIEOHDg");
	this.shape_186.setTransform(125.6,453.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#EBA24D").s().p("AjejGIG9g2IiwH5g");
	this.shape_187.setTransform(148.9,451.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F2BC5F").s().p("Aj8h8IH5DDIm9A2g");
	this.shape_188.setTransform(145.9,418.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FAE485").s().p("AgbgJQA0hOA4hKIAvg7IArDxIlVDIQBGh8BJhqg");
	this.shape_189.setTransform(137.7,384.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#CD6C38").s().p("Aj8AFIFVjHICkGFg");
	this.shape_190.setTransform(145.9,406.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EBA24D").s().p("Ajvh7IHfiPIk7IVg");
	this.shape_191.setTransform(178.8,399.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F2BC5F").s().p("AkEh4IIJBjIneCOg");
	this.shape_192.setTransform(176.7,374.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#ECA342").s().p("AovCDIoLhkIFfmAIJcilIMJAqIGxEgIkxHuIt7g4Ik6ENg");
	this.shape_193.setTransform(258.8,359.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#EBA24D").s().p("AicAUIE5kMIhuHxg");
	this.shape_194.setTransform(231.6,409.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#CD6C38").s().p("AlFAeIG/iQIDLDlg");
	this.shape_195.setTransform(203.8,422.8);

	this.instance_9 = new lib.Path_91();
	this.instance_9.parent = this;
	this.instance_9.setTransform(315.6,560,1,1,0,0,0,225.6,45);
	this.instance_9.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]}).wait(1));

	// Layer 15
	this.instance_10 = new lib.sunlayer();
	this.instance_10.parent = this;
	this.instance_10.setTransform(359.4,325.9,1,1,0,0,0,359.4,325.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// FlashAICB
	this.instance_11 = new lib.Path_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(315.7,996.8,1,1,0,0,0,20.6,32.4);
	this.instance_11.alpha = 0.68;

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgmA0Qgngzg3gBQA3AAAngzQAmgzAAhHQABBHAnAzQAmAzA3AAQg3ABgmAzQgnAzgBBHQAAhHgmgzg");
	this.shape_196.setTransform(251.1,287.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#6FB77F").s().p("AjmD+Ig2lbIAsgsIAeE+IAMl9IBJhDIg8HJIB2nxIBgADIi2HwIDUnWIBfAzIkWG7IEhl9IAtA1IjuEjIDojtIAmA5IjsDUIDpipIAtA0IlJDWg");
	this.shape_197.setTransform(642.5,572.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#EBA24D").s().p("Ah5hsIDzhGIjzFkg");
	this.shape_198.setTransform(595.4,576.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FAE485").s().p("AhXjXICvC4IiRD3g");
	this.shape_199.setTransform(574.4,568.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#CD6C38").s().p("AhIBoICRj3IAAEfg");
	this.shape_200.setTransform(575.9,580.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#F2BC5F").s().p("AjRhbIGjBxIjzBGg");
	this.shape_201.setTransform(586.6,556.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#EBA24D").s().p("Ahzh1IDohKIhdF/g");
	this.shape_202.setTransform(605.2,539.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FAE485").s().p("AgXi8ICjC2IkXDEg");
	this.shape_203.setTransform(579.6,528.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#CD6C38").s().p("AjRAqIEWjEICNE1g");
	this.shape_204.setTransform(586.6,543.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#F2BC5F").s().p("AjFhaIGMBrIjoBKg");
	this.shape_205.setTransform(597,518.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#CD6C38").s().p("AjFBFIEWj1IB2Fhg");
	this.shape_206.setTransform(597,502.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FAE485").s().p("ABfjaIAtDBIkXD1g");
	this.shape_207.setTransform(591.1,487.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#EBA24D").s().p("Ahwg2ID+hPIkbELg");
	this.shape_208.setTransform(624,582.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#CD6C38").s().p("AiSBOIEmirIgeC7g");
	this.shape_209.setTransform(598,586.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FAE485").s().p("ABhiyIAzC4IkmCsg");
	this.shape_210.setTransform(598,576.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#F2BC5F").s().p("AiYhbIExBoIj+BPg");
	this.shape_211.setTransform(622.9,568);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#EBA24D").s().p("AhegiIC9jLIhgHbg");
	this.shape_212.setTransform(638.5,545.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#CD6C38").s().p("AiYAfIDUinIBdERg");
	this.shape_213.setTransform(622.9,555.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FAE485").s().p("AgNi/IB3DYIjUCng");
	this.shape_214.setTransform(618.3,539.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#F2BC5F").s().p("AiahrIE1AOIi9DKg");
	this.shape_215.setTransform(632.4,531.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#EBA24D").s().p("Ag3gnIBHiHIAJAXQALAoAHBTQAKB8ADBPg");
	this.shape_216.setTransform(642.3,504.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#CD6C38").s().p("AiaBdIDFjHIBwDVg");
	this.shape_217.setTransform(632.4,511);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FAE485").s().p("AhOj4ICxEpIjFDIg");
	this.shape_218.setTransform(626.8,495.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#F2BC5F").s().p("Ah8iUID5CiIhICHg");
	this.shape_219.setTransform(631.4,485.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FAE485").s().p("AhZi7ICzDFIhGCyg");
	this.shape_220.setTransform(542.9,559.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#CD6C38").s().p("Ah2AdIBGixICnEpg");
	this.shape_221.setTransform(556.8,575.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#EBA24D").s().p("AhThSICIiFIAfGvg");
	this.shape_222.setTransform(560.3,568.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#F2BC5F").s().p("AiehiIE8BBIiJCEg");
	this.shape_223.setTransform(549.8,550.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FAE485").s().p("AAwjlIA9EOIjZC9g");
	this.shape_224.setTransform(544.8,517.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#CD6C38").s().p("AieA+IDai7IBiD8g");
	this.shape_225.setTransform(549.8,534.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#EBA24D").s().p("Ahqg+IDVh+IhzF6g");
	this.shape_226.setTransform(566.5,528.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#F2BC5F").s().p("AiJiGIETCQIjVB+g");
	this.shape_227.setTransform(563.4,508.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FAE485").s().p("AhLBeIBUh5QAwhFAdgcQAPgPAFgBIgGCZIjNCAg");
	this.shape_228.setTransform(560.2,480.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#CD6C38").s().p("AiJgIIDNh/IBGEPg");
	this.shape_229.setTransform(563.4,495.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#EBA24D").s().p("AhEhnICJiRIgUHxg");
	this.shape_230.setTransform(612,495.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#EBA24D").s().p("AiXg0IEvimIjpG2g");
	this.shape_231.setTransform(585.4,487.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#F2BC5F").s().p("AhahgIC1AyIiICPg");
	this.shape_232.setTransform(609.7,475.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#F2BC5F").s().p("AiRhFIEpgNIkvClg");
	this.shape_233.setTransform(585.4,473.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#61B26F").s().p("Ak0E0QALgOABgWQADgtgsgnQgtgnhNgLIhEgEIAvgVQA+gVBIAAQA6ABA0A0QAaAbAPAaQgGgegUgqQgohUhEg2Qg8gxhmgtIhZgjIBVANQBkATBGAXQBHAYBGBcQAjAuAUAqQgFgqgThAQglh+hEhsQhEhshvgxQgigPgjgIIgcgEIAggDQAogCApAEQCEAOBiBLQBjBKAlCFQASBDgBAzIAGgZQAKggAQgdQAyheBbgfQBXgeB2A3QA7AbApAhQgngDg1AEQhqAJhFAoQhEAngWBwQgLA5ACAwIA3g7QBIhABWgUQB8gcBhBKQAxAlAYArQgygXhBgPQiEgdhQArQhXAvggByQgQA5ABAvg");
	this.shape_234.setTransform(616.9,438.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#67A7A7").s().p("AhBApQgfgIgDgSQgDgQAcgSQAbgRApgGQApgHAfAJQAfAIADASQADAQgbASQgcARgpAGQgRADgRAAQgUAAgSgFg");
	this.shape_235.setTransform(238.9,869.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#67A7A7").s().p("AhBApQgfgIgDgSQgDgQAcgSQAbgRApgGQApgHAfAJQAfAIADASQADAQgbASQgcARgpAGQgRADgQAAQgVAAgSgFg");
	this.shape_236.setTransform(46.7,789.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#61763D").s().p("AhBApQgfgIgDgSQgDgRAcgRQAbgRApgGQApgHAfAJQAfAIADARQADARgcARQgbARgpAHQgSADgQAAQgVAAgRgFg");
	this.shape_237.setTransform(109.2,732.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#67A7A7").s().p("AgqASQgTgFgBgIQgBgIASgHQASgIAagCQAZgCAUAFQATAEAAAJQABAHgSAIQgSAIgaACIgPAAQgQAAgNgDg");
	this.shape_238.setTransform(273.9,783.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#61763D").s().p("AgCAoQgtgEgfgPQgegOABgPQACgRAggJQAhgJAsAEQAsAEAfAOQAfAPgCAQQgBAQghAJQgXAGgcAAIgZgBg");
	this.shape_239.setTransform(520.1,932.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#67A7A7").s().p("AgDAoQhZgIg+gRQg+gRABgQQACgRBAgGQBBgGBYAIQBZAIA+ARQA+ARgBAQQgCARhAAGQgbACggAAQgrAAgzgEg");
	this.shape_240.setTransform(483.4,728.9);

	this.instance_12 = new lib.Path_92();
	this.instance_12.parent = this;
	this.instance_12.setTransform(575.2,587.7,1,1,0,0,0,52.1,15.2);
	this.instance_12.alpha = 0.66;

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#61763D").s().p("AgGBLQiogPh1ggQh1ggADgfQADgfB5gMQB4gLCoAPQCoAPB1AgQB1AggDAfQgCAfh5AMQg1AFg9AAQhQAAhfgJg");
	this.shape_241.setTransform(616.9,861.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#67A7A7").s().p("AiIA0Qg9gDgCgSQgDgSA5gUQA4gWBTgNQBSgNA9AEQA9ADACASQADASg5AVQg4AWhTAMQg/AKgzAAIgdgBg");
	this.shape_242.setTransform(63.8,699.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#61763D").s().p("EAyuAUNQl8gwjUk5QhChigphwIgchdQiLAaipAKQlTAUichPQhVgrgahNQgUg8AMhiQAUhyAHg4QANhigUg8QgghigJgQQgVgugtgbQgwgdhqgdQhcgYjUgsQkZg6vOCoQkxA1lSBFIkUA6QhkAWh2AtQjrBdhaB8QixD2lIBGQjzAzlhgsQjpgchnjDQgWgsghheQgYhCgQgKQgTgKiMAVQjmAjhEAHQmuAvhbiBQhdiFAljcQAMhFAYhFIAUg3Il7ljQLgjyPIiCQQtiOUrAAQTlAAUPDxQT4DtQtGoIB7MbQivDzj6DpQnHGmljAAQglAAgkgFg");
	this.shape_243.setTransform(398.2,628);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#917556").s().p("AkJLQQg5gGAOl2QAKjDAChRQAEiHgNgcQgNgdgfgfIg5g2QhEhDAKhFQAFggAegJQAWgGA3AEQBTAGAZAAQBGAAA7gQQBagYD7inQByhLAqgXQBEgmAOAPQAWAZjRD9QjyEnghA+QgYAvgkCNQgVBTgsC8QhTFUg5AAIgCAAg");
	this.shape_244.setTransform(667.2,1197.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#74542E").s().p("AqIVIQg0gngXjIQgTidADjFQABhDAqiyIBTlSQBpmzg/goQhXg5gth1QgziCAVifQASiKBnhlQAhggAkgYIAfgRIAVAHQAeAIAsADQCNAJDjgvQDjgvEthwQCWg4BpgvIAGBNQACBqgZCQQgOBQgyBDQgpA3hPBAQgvAmhsBSQhkBQhHBKQiNCTiaHoQgnB4hFDzQg3DDgVA3QhNDJhxDDQh0DKg2AAQgJAAgHgFg");
	this.shape_245.setTransform(677.9,1233.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#644725").s().p("Atde+QgjgYgahFQg8ifAXj9QAJhlAQmBQAZozAKjAQA0wJBGj4QBJj/CAizQAog4ApgqIAggeIBEADQBWADBdgFQEogPEAhVQEBhVDUhtQBCgiA2ghIApgZIgXCpQghDRgxDAQibJnj6DhQiKB8hUDFQhCCdgvDyQgbCOguEpQguEKg4CuQh3FnkfExQhdBhhxBfIh/BoQgSAQgTAAQgPAAgQgLg");
	this.shape_246.setTransform(673,1286.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#917556").s().p("AobVsQgjgagKhAQgIg3AJhqQAkk2ANjnQAQkeg3kzQgOhOgjihQgfiQgMhMQggjLBSj0QBMjfCHijQAbggCugcQCagYDTgMQDPgMCRAHQCfAHACAbQAEA1iMA2QhwAskqBMQh/AhhJA4Qg/AwgnBNQgSAigsB2QgnBpgoBDQgxBTgBBYQgBBBAdBtQAtCkAIArQAbCHgFCIQgNFThfGoQgsDGgrBpQgnBfgfAAQgHAAgGgFg");
	this.shape_247.setTransform(375.3,1285.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#74542E").s().p("ANnbuQksixiDkiQhFiag6mnQggjug4pCQgzoUggjLQgylBg9gKQjwgmh0IYQgnC1gUDfQgOCiACBYQACDFg3FwQhKHih1C5QhxCyjFA4Qg9ASg/ADIgyAAQhlp4gdj9QgLhpgIjoQgJkCADkDQAGq1BPjPQAUg1AviWQAfhlAfgyQAphFBOgzQBVg4Cbg1QEKhcFFggQCtgRDugMQCVgQC1BHQDCBMCCCMQC0DDAyEYQBIGWi7JcQhgE1APEWQAMDVBRDgQAuB/BfDTQBGCtgIByQgQDng9BfQgfAwgbABQh8geiWhYg");
	this.shape_248.setTransform(413.2,1309.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#644725").s().p("EgTKAnDQgthJgIhDQgGg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBODYA3HOQAUCvgOC9QgLCPgkDKIhBFeQgjDRgJCsQgKCyA4EGQAeCOBbFBQBPEcAWCAQAgDGgtBbQgvBdivAdQiGAXkHgKQk5gRiegEQkUgIinAdQiyAei/CtQiDB2iuDhQjCD7gjAkQg9A/gnAAQgaAAgRgag");
	this.shape_249.setTransform(423.9,1368.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#C6DA92").s().p("AgUQbQhogDjPgzQjMgxjkhMQofi1ipiUQhhhVAOhKQALg2BLg8IA9guQAigZANgQQAngsg4gkQgagQjaAaQlyAtiQAMQs0BEoSivQkihejOk0Qi7kVhsmyQCvEND2CKQHxEXI0CXQDRA4D/AwQA1AKFrA/QB+AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBvBegDBnQgBAzgXAgIBMgLQBigMBsgHQFXgUE3AyQCeAaCAAkQAaAICKAtQBEAXApAAQA0ABBLgdQBBgYB2hDQCNhSBLgqQEXibCFAAQB9AABoBBQBEAsAUAJQA5AdBDANQB/AZFajUQBNgwCthxQCBhUAkgRQAsgUBRAgQA1AUB1BCQCIBOBAAeQB3A5BgAQQC1AgFwAgQC3AQCTAKQgsCv55CjQoFAzpqArIoCAhQhpAJiAA1QgzAWitBXQiMBHhdAfQh8Aoh1AAIgTAAg");
	this.shape_250.setTransform(183.7,1053.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#C6DA92").s().p("AqlC0QhEgEgJi0QgCg4ADhDIAEg4IAPAeQAWAlAgAfQBnBjCoAMQCNALF1gyQF0gzEXhDQhmBMiQA9QjaBgmtAyQkOAgirAAQg3AAgsgEg");
	this.shape_251.setTransform(686.7,1099);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#A6BD55").s().p("AusUYQhngDjQgzQjMgxjjhMQofi2ipiTQhihVAOhKQALg2BMg8IA9guQAhgZAOgQQAmgsg3gkQgZgQjcAdQlqAxiaANQs1BKoOi9QmuiajTodQhKi8hCkfQhCk5gjiIQAoA9CeCeQCdCdC+CqQHfGqCLAaQBLAOAwhqQARgnAXhLIAqiGQA5itBPhZQBuh8CygLQDLgMCDCDQBVBUBmDZQA8B/AVAoQAxBcAwA8QB7CaC3AWQC1AWBxiXQBLhkBVj/QBgkhA1hgQBoi9CeghQE4hBIRFuQCwB6DFCnIDjDJQBLBEBHBpQAxBJBGCDQBXCgAeAyQBFB0BFBOQA6A3DXhZQCVg+E2irQF+jTBngzQD6h8BkACQB+ACCsCmQAtAsBSBVQBEBDAmAWQBhA6GyhDIFXg2QC6gbBcABQBvACCMAnQBAATCwA+QCQAzBPAQQB1AXBTgXQCagpFPlTQCoiqCJiiQgCAGgQCpQgaDLgxCsQiZIslIBrQvFE8kJjOQhOg9gQhvIgIhBQgCgZgMADQoHCP3BCoQnKA0n2AxImYAmQhpAJh/A1QgzAWitBXQiNBHhdAeQh8Aph2AAIgTAAg");
	this.shape_252.setTransform(274.6,1026.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#2B4C43").s().p("AjZKrQgLvzBmnsQBnnqBfjBQAeg8AagXIAUgLIBHFsIgVAcQgbAngbAzQhXCjg5DcQh4HagtPPQgXHoACGJQgamYgFn7g");
	this.shape_253.setTransform(598.8,1239);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#8CAC50").s().p("EgllAzeQhogDjQgzQjMgxjjhMQogi2ioiTQhihVAPhKQALg1BMg9IA8guQAigZAOgQQAmgsg3gkQgagQjaAaQl2AtiMAMQs0BEoSivQmpiMjwpHQjPn3gproQgkqYBmptQBlpgCwjlQDkkpGbj7QHLkZKQjKUAYDgHcAmCAAAQUeAAVHEHQUxEDRAHLQRkHZJ4JOQKmJ4AAKbQAAEk5KNxQslG5slF+IAbA/QAYBOgOBRQgtEBmcC1QjaBgmvAyQljApi5gNQhEgFgIi0QgDg4AEhDIAEg4QgsCv56CjQoFAzppArIoCAhQhqAJh+A1Qg0AWisBXQiNBHhdAeQh9Aph1AAIgTAAg");
	this.shape_254.setTransform(424,827.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#917556").s().p("AHpbSQgvhVggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAcQgnAMieBTQiCBEhCgBQhggCgjh/QguingZi6QgVieAAh3QAAhYHMASQDmAIDlAaIBiAbQB1AhBjAmQE+B6ARB0QAPBkgPCOQgJBWgjDEQhOG1AAEWQAAE7A1GhQAcDbApENQAFAsAVBrQAVBqAHA9QAXDQhNCjQhJCdhKAHIgGAAQg7AAg2hhg");
	this.shape_255.setTransform(159.7,1357.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#74542E").s().p("EAJMAoKQh2gSg6g1QgSgQgKgSIgGgPQgjgPghgqQhEhVAGiKQAGiChZhpIhUhbQg0g6geg4Qg3hih6o0QiDpegnhmQgZhDhVifQh7jkgthbQjrnZhqnHQh8oTgVlTQgHhuAEhoQAFhgAAgjQAAhYRahXQItgsItgbIg3GDQg3GaAAB2QAABfAIJEQAFIpgNBcQgPBxAAEFQAAEHAPCOQAFAwAeDgQAgD2AQDHQAzJzhXEUQhiE7hzB1QhTBThzAAQgbAAgdgFg");
	this.shape_256.setTransform(166.8,1383.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg3hih6o0QiDpegmhmQhGi4igkiQiokwkmnWQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_257.setTransform(153.3,1345.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#523821").s().p("Egc5A/GQkihKjKlEQiikDh2m/Qg7jehpoeQhSmsg8iNQhJivjYhrQiThJkphGQlnhVhkgjQjrhShfiCQi0j1hknkQgciFgpkEQgnj0gWhmQgfiNhuhRQhWg/irgvQjPgxhwggQjFg4iIhSQkNiij3tMQhOkHhBksIgzj4MDMhgQwICWV+QlNJomLKfQsVU+k5EPQiqCUj5B4QixBVkuBrQmgCThRAgQkYBujDB3QlsDelWHaQgwBCjUE5QiUDahgBwQhxCDjnA5QioAqk1APIkGALQidAHhqAKQkpAai6BJQi3BHjWDqQhBBIh3CPQh/Cag7BDQjiD9jCBkQijBUixAAQhjAAhogbg");
	this.shape_258.setTransform(419.6,1258.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-339,0,339).s().p("Eg6xAzhMAAAhoeMB1jAAAMAAABp7g");
	this.shape_259.setTransform(375.8,339.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.instance_12},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.instance_11}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.page6, new cjs.Rectangle(-309.4,-227.8,1413.1,1893), null);


(lib.page5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mapmapmap":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var canvas = this
		
		this.backBtn.addEventListener("click",PineappleIsland)
		function PineappleIsland(){
			
			canvas.parent.gotoAndPlay("Pineapple");
			
		}
		var canvas = this
		this.whirlpool.addEventListener("click",ToWhirlpool)
		function ToWhirlpool(){
			canvas.parent.gotoAndPlay("page4");
		
		}
		var canvas = this
		this.topineapplepage.addEventListener("click",GotoPage6)
		function GotoPage6(){
			canvas.parent.gotoAndPlay("page6");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask3
	this.instance = new lib.Path_20();
	this.instance.parent = this;
	this.instance.setTransform(376.2,667,1,1,0,0,0,376.2,667);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// position
	this.instance_1 = new lib.Symbol52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(358,651.7,1,1,0,0,0,23,36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// name1
	this.instance_2 = new lib.WhirlpoolForest();
	this.instance_2.parent = this;
	this.instance_2.setTransform(381,317);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// backbtn
	this.backBtn = new lib.backBtn();
	this.backBtn.parent = this;
	this.backBtn.setTransform(77.3,79.3,1,1,0,0,0,52.2,52.2);

	this.timeline.addTween(cjs.Tween.get(this.backBtn).wait(1));

	// charge2
	this.instance_3 = new lib.charge();
	this.instance_3.parent = this;
	this.instance_3.setTransform(669.1,1240.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF5046").s().p("AgNCPQgIgBgHgDQgJgEgHgFQgHgGgFgKQgGgJgDgOQgDgNgBgTIAAh3QABgSADgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAHgDAIgBIANgBIAOABIAPAEQAIACAIAGQAGAFAGAKQAFAJAEAOQAEANAAATIAAB3QAAATgEANQgEAOgFAJQgGAKgHAGQgHAFgIAEIgPAEIgOABgAgShmQgGAIgBATIAACYQABASAGAIQAGAIAMAAQANAAAGgIQAHgIAAgSIAAiYQAAgTgHgIQgGgJgNAAQgMAAgGAJg");
	this.shape.setTransform(726.3,683.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF5046").s().p("AgNCPQgIgBgHgDQgJgEgHgFQgHgGgFgKQgGgJgDgOQgEgNAAgTIAAh3QAAgSAEgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAIgDAHgBIANgBIAOABIAPAEQAIACAHAGQAIAFAFAKQAFAJAEAOQADANABATIAAB3QgBATgDANQgEAOgFAJQgFAKgIAGQgIAFgHAEIgPAEIgOABgAgShmQgHAIAAATIAACYQAAASAHAIQAGAIAMAAQANAAAGgIQAHgIAAgSIAAiYQAAgTgHgIQgGgJgNAAQgMAAgGAJg");
	this.shape_1.setTransform(708.9,683.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF5046").s().p("AgNCPQgIgBgIgDQgIgEgHgFQgHgGgGgKQgFgJgDgOQgEgNABgTIAAh3QgBgSAEgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAIgDAHgBIANgBIAOABIAQAEQAHACAHAGQAIAFAFAKQAGAJADAOQADANAAATIAAB3QAAATgDANQgDAOgGAJQgGAKgHAGQgIAFgHAEIgPAEIgOABgAgShmQgHAIABATIAACYQgBASAHAIQAGAIAMAAQANAAAHgIQAFgIAAgSIAAiYQAAgTgFgIQgHgJgNAAQgMAAgGAJg");
	this.shape_2.setTransform(691.6,683.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF5046").s().p("AgrCOIAAghIAhAAIAAjAIgjAfIgTgWIBAhDIAgAAIgBABIABgBIAAD6IAhAAIAAAhg");
	this.shape_3.setTransform(676,683.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EF5046").s().p("AgSBpQgHgIAAgQQAAgSAHgHQAHgIALAAQAMAAAIAIQAGAIAAARQAAAPgGAJQgIAIgMAAQgLAAgHgIgAgSg3QgHgJAAgPQAAgSAHgIQAHgHALAAQAMAAAIAIQAGAIAAARQAAAPgGAIQgIAJgMAAQgLAAgHgIg");
	this.shape_4.setTransform(657.7,686.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EF5046").s().p("AAcByIgchPIgBAAIgcBPIgpAAIAwhzIgthwIArAAIAYBLIAZhLIApAAIgsBsIAxB3g");
	this.shape_5.setTransform(646.1,686.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EF5046").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgHQAKgHANgHIANgGIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHABQgFADgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAIIgHAJIgGAMQgCAHAAAIQAAAOAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_6.setTransform(630.3,686.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EF5046").s().p("AA3COIAAheIABgqIABgjIACgeIABgUIgDAAIgrC4IgaAAIgri4IgDAAIABAUIACAeIAAAjIABAqIAABeIgoAAIAAkbIA4AAIAbBuIAHAiIAEAfIABAAIAFgfIAHgiIAchuIA3AAIAAEbg");
	this.shape_7.setTransform(611.4,683.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BBBDBF").ss(2).p("AClAAIlJAA");
	this.shape_8.setTransform(671.3,1072.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BBBDBF").ss(2).p("ACmAAIlKAA");
	this.shape_9.setTransform(668.4,840.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BBBDBF").ss(2).p("ACmAAIlKAA");
	this.shape_10.setTransform(668.4,950.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EgARAiAQgHgHAAgLMAAAhDbQAAgKAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAKMAAABDbQAAALgHAHQgIAHgKAAQgJAAgIgHg");
	this.shape_11.setTransform(655.8,966.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(3).p("EADDAl2ImFAAMAAAhIoQAAhQA5g5QA6g6BPAAQBRAAA5A6QA5A5AABQg");
	this.shape_12.setTransform(667.1,955.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D0D2D3").s().p("EgDCAl2MAAAhIoQAAhQA5g6QA5g4BQAAQBRAAA5A4QA5A6AABQMAAABIog");
	this.shape_13.setTransform(667.1,955.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 11
	this.instance_4 = new lib.cloud_group3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(360,804,1,1,0,0,0,568.6,659.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// whirlpool
	this.whirlpool = new lib.Symbol64();
	this.whirlpool.parent = this;
	this.whirlpool.setTransform(214,302.5,1,1,0,0,0,106,146.5);

	this.timeline.addTween(cjs.Tween.get(this.whirlpool).wait(1));

	// island2
	this.topineapplepage = new lib.Symbol65();
	this.topineapplepage.parent = this;
	this.topineapplepage.setTransform(410,675.2,1,1,0,0,0,128,112.7);

	this.timeline.addTween(cjs.Tween.get(this.topineapplepage).wait(1));

	// redspot
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D83B34").s().p("AhdBdQgngmABg3QgBg2AngnQAngmA2gBQA3ABAnAmQAnAngBA2QABA3gnAmQgnAog3AAQg2AAgngog");
	this.shape_14.setTransform(242.7,699.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D83B34").s().p("AhdBeQgmgngBg3QABg2AmgnQAngmA2AAQA3AAAmAmQAoAnAAA2QAAA3goAnQgmAmg3AAQg2AAgngmg");
	this.shape_15.setTransform(203.2,672.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D83B34").s().p("AhdBeQgmgnAAg3QAAg2AmgnQAngmA2AAQA3AAAnAmQAmAnAAA2QAAA3gmAnQgnAmg3AAQg2AAgngmg");
	this.shape_16.setTransform(173.2,637.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D83B34").s().p("AhcBdQgngmgBg3QABg2AngnQAmgnA2AAQA3AAAnAnQAnAnAAA2QAAA3gnAmQgnAng3AAQg2AAgmgng");
	this.shape_17.setTransform(154.7,591.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D83B34").s().p("AhdBdQgngmAAg3QAAg1AngnQAngoA2AAQA3AAAmAoQAnAnAAA1QAAA3gnAmQgmAng3ABQg2gBgngng");
	this.shape_18.setTransform(145,543.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D83B34").s().p("AhdBeQgngnAAg3QAAg2AngnQAngmA2AAQA3AAAmAmQAnAnABA2QgBA3gnAnQgmAng3gBQg2ABgngng");
	this.shape_19.setTransform(150.7,493);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D83B34").s().p("AhdBdQgmgmAAg3QAAg2AmgnQAngnA2AAQA3AAAnAnQAmAnAAA2QAAA3gmAmQgnAng3AAQg2AAgngng");
	this.shape_20.setTransform(167.9,444.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// redspots2
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D83B34").s().p("AhdBdQgngmABg3QgBg2AngnQAngnA2AAQA3AAAnAnQAnAngBA2QABA3gnAmQgnAng3AAQg2AAgngng");
	this.shape_21.setTransform(367.8,789.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D83B34").s().p("AhdBeQgngnAAg3QAAg1AngnQAngoA2AAQA3AAAmAoQAnAnAAA1QAAA3gnAnQgmAmg3ABQg2gBgngmg");
	this.shape_22.setTransform(228.7,1049.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D83B34").s().p("AhdBeQgngnAAg3QAAg2AngnQAngmA2gBQA3ABAmAmQAnAnAAA2QAAA3gnAnQgmAng3AAQg2AAgngng");
	this.shape_23.setTransform(240.4,993.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D83B34").s().p("AhdBeQgngnAAg3QAAg2AngmQAngnA2AAQA3AAAmAnQAnAnABA1QgBA3gnAnQgmAng3AAQg2AAgngng");
	this.shape_24.setTransform(256.5,949.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D83B34").s().p("AhdBeQgmgnAAg3QAAg2AmgnQAngnA2ABQA3gBAnAnQAmAnAAA2QAAA3gmAnQgnAng3gBQg2ABgngng");
	this.shape_25.setTransform(278.3,909.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D83B34").s().p("AhcBdQgogmAAg3QAAg2AogmQAngnA1gBQA3ABAnAnQAmAmABA2QgBA3gmAmQgnAog3AAQg1AAgngog");
	this.shape_26.setTransform(312.4,869.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D83B34").s().p("AhcBeQgngngBg3QABg2AngnQAmgmA2AAQA3AAAnAmQAnAnAAA2QAAA3gnAnQgnAmg3AAQg2AAgmgmg");
	this.shape_27.setTransform(348.2,829.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(1));

	// name2
	this.instance_5 = new lib.PineappleVolcano();
	this.instance_5.parent = this;
	this.instance_5.setTransform(72,748);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// tinycloud2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A79679").s().p("AAlCYQgvAbg2AAQgrAAgogSQgmgRgcgfQgaAIgbAAQhPAAg6g2Qg6g1gHhNQgKgNgHgOQAkAhAjAWQAkAXAZAFQAsAJBNgRQAngJAdgLIAdAVQAnAWAzAMQAxAMBDgSQAhgKAXgLIAyAcQA7AYAvgZQAwgYAYg3IAPgyIATAFQAagEAegtIAQgZQAZAtAAA0QAABTg7A7Qg7A8hUAAIgDgBQgcAcgkAPQgmAQgpAAQg2AAgvgbg");
	this.shape_28.setTransform(214.2,1076.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D2BD95").s().p("AAxEyQgwAbg1AAQgrAAgogSQgmgRgcgfQgaAIgbAAQhPAAg6g2Qg6g1gHhOQgpg3AAhDQAAhTA6g7QA6g7BTgBQAbgtAtgaQAvgbA2AAQA2AAAwAbQAugbA2AAQBEAAA1AoQAegJAfAAQBUAAA7A8QA8A7AABUQAAAYgGAXQAqA2AABFQAABUg7A7Qg7A8hUAAIgDgBQgcAcgkAPQgmAQgpAAQg2AAgvgbg");
	this.shape_29.setTransform(213,1061.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A79679").s().p("AAkCYQgtAbg3AAQgsAAgngSQgmgRgcgfQgbAHgaAAQhPAAg7g1Qg5g1gHhNQgJgLgIgQQAkAhAjAWQAkAXAZAFQAsAJBNgRQAmgJAegLIAdAUQAnAXAzAMQAxAMBDgTQAhgJAXgLIAyAcQA7AYAvgZQAvgYAZg3IAPgzIATAFQAagEAegsIAQgZQAZAsAAA1QAABTg7A7Qg8A7hTAAIgEAAQgcAcgkAPQglAQgpAAQg3AAgvgbg");
	this.shape_30.setTransform(264,956.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D2BD95").s().p("AAwEyQguAbg1AAQgsAAgngSQgmgRgdgfQgaAHgbAAQhPAAg7g1Qg5g1gHhOQgqg3AAhDQAAhTA7g7QA6g7BTgBQAbgtAugaQAugbA3AAQA2AAAvAbQAtgbA3AAQBDAAA3AoQAcgJAgAAQBUAAA7A7QA8A7AABUQgBAYgFAYQAqA1AABGQAABUg7A7Qg7A7hUAAIgEAAQgbAcglAPQglAQgpAAQg2AAgwgbg");
	this.shape_31.setTransform(262.8,941.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A79679").s().p("AAkCYQguAbg2AAQgsAAgngSQgmgRgcgfQgbAHgaAAQhPAAg7g1Qg5g1gHhNQgKgNgHgOQAkAhAjAWQAkAXAZAFQAsAJBNgRQAmgJAegLIAdAVQAnAWAzAMQAxAMBDgSQAhgKAXgLIAyAcQA7AYAvgZQAvgYAZg3IAPgyIATAEQAagEAegsIAQgZQAZAtAAA0QAABTg7A7Qg8A7hTAAIgDAAQgdAcgkAPQglAQgpAAQg2AAgwgbg");
	this.shape_32.setTransform(354.4,836.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D2BD95").s().p("AAwEyQgvAbg1AAQgsAAgngSQgmgRgcgfQgbAHgaAAQhPAAg7g1Qg5g1gHhOQgpg2AAhEQAAhTA6g7QA6g7BTgBQAbgtAtgaQAvgbA2AAQA2AAAwAbQAugbA2AAQBDAAA2AoQAegJAfAAQBUAAA7A7QA7A8AABUQAAAXgFAYQAqA2AABFQAABUg7A7Qg8A7hTAAIgDAAQgdAcgkAPQglAQgpAAQg2AAgwgbg");
	this.shape_33.setTransform(353.2,821.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).wait(1));

	// tiny_cloud
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A79679").s().p("AAkCYQgtAbg3AAQgsAAgngSQgmgRgcgfQgbAHgaAAQhPAAg7g1Qg5g1gHhNQgJgLgIgQQAlAhAiAWQAkAXAZAFQAsAJBNgRQAmgJAegLIAdAUQAnAXAzAMQAxAMBDgSQAhgKAXgLIAyAcQA7AYAvgZQAvgYAZg3IAPgzIATAFQAagEAegsIAQgZQAZAsAAA1QAABTg7A7Qg8A7hTAAIgEAAQgcAcgkAPQglAQgpAAQg3AAgvgbg");
	this.shape_34.setTransform(207.3,707);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D2BD95").s().p("AAwEyQguAbg2AAQgsAAgngSQgmgRgcgfQgbAHgaAAQhPAAg7g1Qg5g1gHhOQgpg2AAhEQAAhTA6g7QA6g7BTgBQAbgtAtgaQAvgbA2AAQA2AAAwAbQAugbA2AAQBDAAA2AoQAegJAfAAQBUAAA7A7QA7A8AABTQAAAYgFAYQAqA2AABFQAABUg7A7Qg8A7hTAAIgEAAQgcAcgkAPQglAQgpAAQg3AAgvgbg");
	this.shape_35.setTransform(206.1,691.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A79679").s().p("AAlCYQguAbg3AAQgrAAgogSQgmgRgcgfQgaAHgbAAQhPAAg6g1Qg6g1gHhNQgKgOgHgNQAkAhAjAWQAkAXAZAFQAsAJBNgRQAngJAdgLIAdAUQAnAXAzAMQAyAMBCgTQAhgJAXgLIAyAcQA7AYAwgZQAvgYAYg3IAPgzIATAFQAagEAfgsIAQgZQAYAtAAA0QAABTg7A7Qg7A7hUAAIgDAAQgcAcgkAPQgmAQgpAAQg3AAgugbg");
	this.shape_36.setTransform(147.6,614.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D2BD95").s().p("AAxEyQgvAbg2AAQgrAAgogSQgmgRgcgfQgaAHgbAAQhPAAg6g1Qg6g1gHhOQgpg3AAhDQAAhTA6g7QA6g7BTgBQAbgtAtgaQAvgbA2AAQA3AAAvAbQAtgbA3AAQBDAAA3AoQAcgJAgAAQBUAAA7A7QA8A7AABUQAAAZgGAXQAqA0AABHQAABUg7A7Qg7A7hUAAIgDAAQgcAcgkAPQgmAQgpAAQg3AAgugbg");
	this.shape_37.setTransform(146.4,598.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A79679").s().p("AAlCYQgvAbg2AAQgrAAgogSQgmgRgcgfQgZAIgcAAQhPAAg6g2Qg6g1gHhNQgKgNgHgOQAkAhAjAWQAkAXAZAFQAsAJBNgRQAngJAdgLIAdAVQAnAWAzAMQAyAMBCgSQAhgKAXgLIAyAcQA7AYAwgZQAvgYAYg3IAPgyIATAFQAagEAfgtIAQgZQAYAuAAAzQAABTg7A7Qg7A8hUAAIgDgBQgcAcgkAPQgmAQgpAAQg2AAgvgbg");
	this.shape_38.setTransform(147.6,501.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D2BD95").s().p("AAxEyQgwAbg1AAQgrAAgogSQgmgRgcgfQgZAIgcAAQhPAAg6g2Qg6g1gHhOQgpg3AAhDQAAhTA6g7QA6g7BTgBQAbgtAtgaQAvgbA2AAQA3AAAvAbQAugbA2AAQBEAAA2AoQAcgJAgAAQBUAAA7A8QA8A7AABUQAAAYgGAXQAqA1AABGQAABUg7A7Qg7A8hUAAIgDgBQgcAcgkAPQgmAQgpAAQg2AAgvgbg");
	this.shape_39.setTransform(146.4,486.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]}).wait(1));

	// bgjpeg
	this.instance_6 = new lib.mappage_bg01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-2,0,0.361,0.361);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.page5, new cjs.Rectangle(-440.3,0,1562.3,1489.3), null);


(lib.page4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var canvas = this
		this.backValcano.addEventListener("click",gotoValcano)
		this.nextValcano.addEventListener("click",gotoValcano)
		function gotoValcano(){
			canvas.parent.gotoAndPlay("page6");
		}
		var canvas = this
		this.backToMap.addEventListener("click",ToMap)
		function ToMap(){
			canvas.parent.gotoAndPlay("page5");
		
			console.log("!!");
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// UI
	this.nextValcano = new lib.Path_7();
	this.nextValcano.parent = this;
	this.nextValcano.setTransform(695.2,622.2,1,1,0,0,0,35,59.4);
	this.nextValcano.alpha = 0.801;

	this.backValcano = new lib.Path_1_1();
	this.backValcano.parent = this;
	this.backValcano.setTransform(59.2,622.2,1,1,0,0,0,35,59.4);
	this.backValcano.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backValcano},{t:this.nextValcano}]}).wait(1));

	// UI
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai6gwIAfhAIFWChIgfBAg");
	this.shape.setTransform(666.4,93.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai1BAIFHi9IAkA+IlHC9g");
	this.shape_1.setTransform(666.4,72.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIBJQgfgeAAgrQAAgqAfgeQAegfAqAAQArAAAeAfQAfAeAAAqQAAArgfAeQgeAfgrAAQgqAAgegfg");
	this.shape_2.setTransform(646.6,83.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhIBJQgfgeAAgrQAAgqAfgeQAegfAqAAQArAAAeAfQAfAeAAAqQAAArgfAeQgeAfgrAAQgqAAgegfg");
	this.shape_3.setTransform(685.8,101.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIBJQgfgeAAgrQAAgqAfgeQAegfAqAAQArAAAeAfQAfAeAAAqQAAArgfAeQgeAfgrAAQgqAAgegfg");
	this.shape_4.setTransform(685.8,62.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9DD89").s().p("AlHFJQiJiJAAjAQAAjACJiHQCHiJDAAAQDAAACJCJQCICHAADAQAADAiICJQiJCIjAAAQjAAAiHiIg");
	this.shape_5.setTransform(670.9,82.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlwFxQiZiYgBjZQABjXCZiZQCZiZDXgBQDZABCYCZQCZCZAADXQAADZiZCYQiYCZjZAAQjXAAiZiZg");
	this.shape_6.setTransform(670.9,82.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 方案3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAYQgHgIAAgQQAAgQAHgIQAHgIALABQAMAAAIAIQAGAHAAAQQAAAPgGAJQgIAJgMAAQgLAAgHgJg");
	this.shape_7.setTransform(636.4,1000.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgGAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAIAFAPQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_8.setTransform(624.7,991.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_9.setTransform(611.3,991.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgGAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAIAFAPQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_10.setTransform(596.4,991.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVCXIAAitQAAgPgFgFQgEgGgJgBQgGAAgGAFQgGAEgFAHIAAC4IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgFIALgHIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_11.setTransform(580.2,988.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgGAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAIAFAPQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_12.setTransform(556.9,991.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_13.setTransform(541.9,991.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_14.setTransform(530.5,987.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_15.setTransform(520.4,991.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_16.setTransform(507.3,991.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgJAKgGQAKgHANgGIANgHIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHABQgFACgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAPIAACqIgfAAIgDgTQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAGIgHAKIgGANQgCAGAAAJQAAAMAFAJQAFAHAKABQAGgBAFgCIAIgHIAAhHg");
	this.shape_17.setTransform(491.7,991.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgEgGQgFgGgKAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIADAZQAFgIAGgFIAMgJIALgEIANgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_18.setTransform(469,991.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgQQACgRAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_19.setTransform(452.6,991.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWByQgKgCgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFADQAFACAFAAQAKAAAEgGQAFgFAAgHIgBgHIgDgHIgFgGIgGgIIgdgkIgMgOIgKgRIgGgRQgDgIAAgLQAAgNAFgJQAEgKAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgJgCgFQgCgGgEgCQgEgDgGAAQgFAAgDACIgGAFIgDAFIgBAHQAAAJADAHIAKAOIAhAnIAIALIAKANIAHARQADAKAAAJQAAAMgEALQgEAJgHAIQgIAGgKAEQgLAEgNAAQgMAAgKgDg");
	this.shape_20.setTransform(437.9,991.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_21.setTransform(425.3,991.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgGAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAIAFAPQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_22.setTransform(410.4,991.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgDAIAAIAIABIAKAEQAGACAFAGQAFAFAEAIQAEAKADAOQACANAAAUIAABEQAAATgCAOQgDAOgEAIQgEAJgFAGQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAdIAAA8gAgMh0QgFAEgDAHIAACJIADAGIAFAFIAFAFIAHABIAIgCQAEgCADgEQADgFACgIIABgVIAAhXIgBgVQgCgHgDgFQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_23.setTransform(394.7,995.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgyCAQgRgPAAgdIABgQIADgRIAhAAIAAAOQAAANACAJQADAJAEAGQAEAFAEADQAGACAGAAIALgCQAFgCADgEQADgEACgGQACgGAAgJIAAgfIgCgQQgBgHgDgFQgEgFgFgCQgGgDgIAAIgRAAIAAgdIARAAIAJgCQAFgCADgEQAEgEACgGQACgGAAgJIAAgeQAAgPgGgIQgHgHgLAAQgNAAgHAMQgHAMgBAXIAAAQIghAAIgCgRIgCgRQAAgLAEgLQAEgKAIgJQAIgJANgFQAMgFAQAAQARAAAOAEQANAEAIAIQAIAIAEAMQAEAMAAAOIAAASQAAAMgDAJQgEAKgEAHQgFAHgHAFIgMAHIAAACQAIADAIADQAGAFAGAHQAFAHADAKQADAKAAAOIAAATQAAAUgFANQgHAOgJAIQgJAIgOAEQgNADgNAAQggAAgRgQg");
	this.shape_24.setTransform(370.4,989);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgrCOIAAghIAhAAIAAjAIgjAfIgSgWIA/hDIAgAAIgBABIABgBIAAD6IAgAAIAAAhg");
	this.shape_25.setTransform(355,989);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAOCOIAAgzIhdAAIAAgXIBSjRIAzAAIAADGIAaAAIAAAiIgaAAIAAAzgAgjA5IAxAAIAAgqIAEhqIgFAAg");
	this.shape_26.setTransform(339.2,989);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgrCOIAAghIAhAAIAAjAIgjAfIgTgWIBAhDIAgAAIAAABIAAgBIAAD6IAhAAIAAAhg");
	this.shape_27.setTransform(323,989);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgGAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAIAFAPQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_28.setTransform(301.3,991.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAVCXIAAitQAAgPgFgFQgEgGgJgBQgGAAgGAFQgGAEgFAHIAAC4IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgFIALgHIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_29.setTransform(285.1,988.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgHgHQgGgGgEgMQgDgMAAgSIAAiNIgSAAIAAgeIAVAAIAJg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIACANIADAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgIAEIgKADIgJAAQgIAAgIgCg");
	this.shape_30.setTransform(271.2,988.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgGAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAIAFAPQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_31.setTransform(250.6,991.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_32.setTransform(237.2,991.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgSQgEgTAAgZIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgGAHgEQAIgDAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAIAFAPQAFANAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFACAGABIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_33.setTransform(222.2,991.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAdByIgXh+IgGgjIAAAAIgFAjIgVB+IgpAAIgljjIAoAAIAQB6IAEAvIABAAIAFgvIAWh6IAjAAIAWB6IAGAvIACAAIACgvIAPh6IAnAAIglDjg");
	this.shape_34.setTransform(203.4,991.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgzBlQgLgNAAgcIAAivIAqAAIAACrQAAAPAFAHQAEAFAJAAQAGAAAGgDQAGgEAFgGIAAi5IAqAAIAADkIghAAIgEgYQgFAHgFAFQgGAGgGADIgLAFIgNABQgUgBgLgOg");
	this.shape_35.setTransform(176.6,991.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgGQgHgIgEgKQgFgMgCgQQgDgQAAgXIAAgjQAAgVADgQQACgRAFgKQAFgLAGgHQAGgGAIgDQAHgEAHAAIAOgCIAOABQAHABAHADQAHADAGAHQAGAGAFALQAFALADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEACAFABQAFgBAEgCQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_36.setTransform(160.2,991.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVCOIAAhfIg5i8IArAAIAjCIIABAAIAiiIIAsAAIg6C8IAABfg");
	this.shape_37.setTransform(144.4,989);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Layer 2
	this.backToMap = new lib.backTomap();
	this.backToMap.parent = this;
	this.backToMap.setTransform(82.2,82.2,1,1,0,0,0,52.2,52.2);

	this.timeline.addTween(cjs.Tween.get(this.backToMap).wait(1));

	// UI
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgrCOIAAghIAhAAIAAjAIgjAfIgTgWIBAhDIAgAAIAAABIAAgBIAAD6IAgAAIAAAhg");
	this.shape_38.setTransform(407.1,931.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgSAYQgHgIAAgPQAAgSAHgHQAHgHALgBQAMAAAIAIQAGAJAAAQQAAAOgGAJQgIAJgMgBQgLABgHgJg");
	this.shape_39.setTransform(388.7,942.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_40.setTransform(377.3,934.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgyCOIAAkbIArAAIAAD5IA6AAIAAAig");
	this.shape_41.setTransform(364.8,931.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAVB0IAAitQAAgPgEgGQgGgGgJAAQgEAAgHAEQgGAFgFAHIAAC4IgqAAIAAjkIAgAAIAFAZQAEgIAGgFIAMgJIAMgEIAMgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_42.setTransform(443.1,884.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgHQAGgGAIgDQAHgEAHgBIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_43.setTransform(426.8,884.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AA/B0IAAitIgBgNIgEgIQgDgDgDgBIgJgCQgGAAgGAFQgGAEgEAHIAAADIAAADIAACyIgpAAIAAitIgBgNIgEgIQgCgDgEgBIgJgCQgFAAgGAEQgGAFgFAHIAAC4IgqAAIAAjkIAhAAIAEAZQAFgIAGgFIALgJIAMgEIAOgCQANAAAIAHQAJAGAFANQAFgHAGgFIALgIIANgEIAMgCQATAAALAPQAMAOAAAcIAACug");
	this.shape_44.setTransform(406.3,884.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_45.setTransform(389.5,880.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_46.setTransform(377.2,881);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAACWIgLgFIgIgIIgHgIIgDAVIghAAIAAktIAqAAIAAA9IgBAeIAAAAIAGgIIAJgGIAJgFIANgBIAIAAIAKAEQAFACAGAGQAFAFAEAJQAEAJADAOQACANAAATIAABFQAAATgCAOQgDAOgEAJQgEAJgGAFQgFAGgFACIgLAEIgJAAQgIAAgGgCgAgMgtQgFAEgDAHIAACJIADAHIAEAFIAGAEIAHABIAIgCQAEgCADgEQADgFABgIIACgVIAAhWIgCgVQgBgIgDgFQgDgEgEgCIgIgCQgHAAgFAFg");
	this.shape_47.setTransform(360.8,881);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHACQgFABgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAPIAACrIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAGIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_48.setTransform(344,884.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAZCOIgkhqIgQAAIAABqIgrAAIAAkbIAvAAIASABIASADQAJADAJAFQAJAFAHAJQAHAJAEAOQAEANAAATIAAAHQAAAhgJAUQgJATgTAJIAuBygAgbAFIAGAAQALAAAIgDQAHgCAFgFQAFgGACgKQACgKAAgOIAAgWQAAgLgCgIQgCgIgFgFQgEgFgHgDQgIgCgMAAIgGAAg");
	this.shape_49.setTransform(329.1,881.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAlAAIAAAeIglAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgIAAgIgCg");
	this.shape_50.setTransform(480.4,78.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgWBzQgKgDgIgGQgHgGgEgJQgFgKAAgPIACgOIADgLIAdAAIABAVQACAJACAEQADAGAFACQAFABAFAAQAKAAAEgEQAFgGAAgHIgBgHIgDgGIgFgHIgGgIIgdglIgMgOIgKgPIgGgRQgDgKAAgJQAAgOAFgKQAEgKAIgGQAHgHALgDQAKgDAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAALIgBAQIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAHIgBAGQAAAJADAGIAKAQIAhAlIAIALIAKAPIAHARQADAIAAALQAAAMgEAJQgEALgHAGQgIAIgKADQgLAEgNAAQgMAAgKgCg");
	this.shape_51.setTransform(467.8,81.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgaBvQgLgFgIgMQgIgLgEgTQgEgRAAgaIAAgrQAAgVAEgQQADgPAFgLQAFgKAHgHQAHgFAHgEQAIgDAHgBIAMgBQAMAAAKADQAKAEAIAJQAIAHAFAOQAFAOAAAVIAAANIgCAPIgBANIgDALIhKAAIAAAXIABAZQABALADAGQACAGAFADQAFADAGgBIAHgBQAEgCADgDIAEgKIACgPIAAgHIAjAAIAAAJQAAAggQAPQgPAPgdAAQgOAAgMgGgAgGhSQgFACgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgHIAAgGIAAgFQAAgXgFgKQgFgKgLAAQgEAAgEADg");
	this.shape_52.setTransform(453.3,81.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_53.setTransform(439.9,81.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgHQgHgHgEgKQgFgLgCgRQgDgQAAgWIAAgjQAAgWADgRQACgPAFgLQAFgLAGgGQAGgHAIgDQAHgDAHgCIAOgBIAOABQAHABAHADQAHAEAGAGQAGAHAFAKQAFALADAQQACAQAAAXIAAAjQAAAVgCARQgDAQgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAbQABALADAGQADAHAEADQAEADAFgBQAFABAEgDQAEgDADgHQACgGABgLIABgbIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_54.setTransform(424.6,81.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("Ag1COIAAkbIBrAAIAAAiIhAAAIAABVIAyAAIAAAhIgyAAIAACDg");
	this.shape_55.setTransform(410.9,79);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_56.setTransform(391.5,78.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgHQgHgHgEgKQgFgLgCgRQgDgQAAgWIAAgjQAAgWADgRQACgPAFgLQAFgLAGgGQAGgHAIgDQAHgDAHgCIAOgBIAOABQAHABAHADQAHAEAGAGQAGAHAFAKQAFALADAQQACAQAAAXIAAAjQAAAVgCARQgDAQgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAbQABALADAGQADAHAEADQAEADAFgBQAFABAEgDQAEgDADgHQACgGABgLIABgbIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_57.setTransform(379.3,81.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgEgGgHQgHgHgEgKQgFgLgCgRQgDgQAAgWIAAgjQAAgWADgRQACgPAFgLQAFgLAGgGQAGgHAIgDQAHgDAHgCIAOgBIAOABQAHABAHADQAHAEAGAGQAGAHAFAKQAFALADAQQACAQAAAXIAAAjQAAAVgCARQgDAQgFALQgFALgGAHQgHAHgHADQgGAEgIACIgOABgAgIhSQgEADgDAHQgDAGgBAMIgBAbIAAA3IABAbQABALADAGQADAHAEADQAEADAFgBQAFABAEgDQAEgDADgHQACgGABgLIABgbIAAg3IgBgbQgBgMgCgGQgDgHgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_58.setTransform(363.6,81.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag+CZIAAkuIAhAAIAEAYIAGgJIAJgJIALgGQAHgDAIABIAIAAIAKADQAGADAFAFQAFAGAEAJQAEAJADANQACAOAAATIAABGQAAASgCANQgDAOgEAKQgEAJgFAFQgGAFgFADIgLAEIgJAAQgNAAgIgFQgJgGgFgGIABAcIAAA9gAgMh0QgFAFgDAFIAACKIADAGIAFAGIAFADIAHABIAIgBQAEgCADgFQADgEACgIIABgVIAAhWIgBgVQgCgJgDgEQgDgEgDgDIgJgBQgHAAgFAFg");
	this.shape_59.setTransform(347.8,85.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_60.setTransform(335,78.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_61.setTransform(325,81.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_62.setTransform(313.5,77.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAVCXIAAisQAAgQgFgGQgEgFgJAAQgGgBgGAFQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgGAGgEIALgHIALgEIALgCQAUAAALAPQALAOAAAcIAACug");
	this.shape_63.setTransform(300.6,78.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAhCOIgXiJIgHg6IgDAAIgHA6IgYCJIgrAAIgqkbIAqAAIATCrIACAoIAEAAIAEgtIAfimIAhAAIAeCmIACAtIAFAAIACgoIASirIAoAAIgnEbg");
	this.shape_64.setTransform(279.8,79);

	this.instance = new lib.Path_1_16();
	this.instance.parent = this;
	this.instance.setTransform(190.8,80,1,1,0,0,0,40.2,32.4);
	this.instance.alpha = 0.66;

	this.instance_1 = new lib.Path_3_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(561.1,80,1,1,0,0,0,40.2,32.4);
	this.instance_1.alpha = 0.66;

	this.instance_2 = new lib.Path_4_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(376.2,80,1,1,0,0,0,165.3,32.4);
	this.instance_2.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).wait(1));

	// 闪光
	this.instance_3 = new lib.Symbol63();
	this.instance_3.parent = this;
	this.instance_3.setTransform(420.2,660.2,1,1,0,0,0,147.5,156.1);

	this.shangguang6 = new lib.Symbol19();
	this.shangguang6.parent = this;
	this.shangguang6.setTransform(572,823.9,1,1,0,0,0,13.2,13.2);

	this.shangguang6_1 = new lib.Symbol19();
	this.shangguang6_1.parent = this;
	this.shangguang6_1.setTransform(518.7,625.7,1,1,0,0,0,13.2,13.2);

	this.shangguang5 = new lib.Symbol19();
	this.shangguang5.parent = this;
	this.shangguang5.setTransform(485.5,942.7,1,1,0,0,0,13.2,13.2);

	this.shangguang5_1 = new lib.Symbol19();
	this.shangguang5_1.parent = this;
	this.shangguang5_1.setTransform(317.3,860.7,1,1,0,0,0,13.2,13.2);

	this.shanguang3 = new lib.Symbol15();
	this.shanguang3.parent = this;
	this.shanguang3.setTransform(84.2,652.2,1,1,0,0,0,13.2,13.2);

	this.shanguang2 = new lib.Symbol13();
	this.shanguang2.parent = this;
	this.shanguang2.setTransform(168,377.9,1,1,0,0,0,13.2,13.2);

	this.shanguang1 = new lib.shanguang1();
	this.shanguang1.parent = this;
	this.shanguang1.setTransform(238.8,695.3,1,1,0,0,0,13.2,13.2);

	this.bling4 = new lib.bling4();
	this.bling4.parent = this;
	this.bling4.setTransform(252.2,287.3,1,1,0,0,0,13.2,17.4);

	this.bling3 = new lib.Symbol9();
	this.bling3.parent = this;
	this.bling3.setTransform(516.6,624.6,1,1,0,0,0,44.3,88);

	this.bling2 = new lib.bling2();
	this.bling2.parent = this;
	this.bling2.setTransform(340.7,735.6,1,1,0,0,0,149.3,122.9);

	this.bling1 = new lib.bling1();
	this.bling1.parent = this;
	this.bling1.setTransform(423.9,688.6,1,1,0,0,0,218.6,91.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.3).s().p("AhdBdQgmgmgBg3QABg2AmgnQAngnA2AAQA3AAAmAnQAoAnAAA2QAAA3goAmQgmAng3AAQg2AAgngng");
	this.shape_65.setTransform(461,784.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.3).s().p("AhdBeQgmgnAAg3QAAg2AmgnQAngmA2AAQA3AAAnAmQAmAnAAA2QAAA3gmAnQgnAmg3AAQg2AAgngmg");
	this.shape_66.setTransform(621.7,712.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.3).s().p("AhdBeQgmgnAAg3QAAg2AmgnQAngmA2AAQA3AAAnAmQAmAnAAA2QAAA3gmAnQgnAmg3AAQg2AAgngmg");
	this.shape_67.setTransform(385.9,453);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.bling1},{t:this.bling2},{t:this.bling3},{t:this.bling4},{t:this.shanguang1},{t:this.shanguang2},{t:this.shanguang3},{t:this.shangguang5_1},{t:this.shangguang5},{t:this.shangguang6_1},{t:this.shangguang6},{t:this.instance_3}]}).wait(1));

	// 云
	this.cloud2 = new lib.Path_21();
	this.cloud2.parent = this;
	this.cloud2.setTransform(753.1,253.6,1,1,0,0,0,186.1,33.5);
	this.cloud2.alpha = 0.77;

	this.cloud1 = new lib.Path_1_17();
	this.cloud1.parent = this;
	this.cloud1.setTransform(62.4,313.5,1,1,0,0,0,145.8,26.3);
	this.cloud1.alpha = 0.77;

	this.cloud4 = new lib.Path_2_4();
	this.cloud4.parent = this;
	this.cloud4.setTransform(491.3,144.2,1,1,0,0,0,76.8,13.8);
	this.cloud4.alpha = 0.77;

	this.cloud3 = new lib.Path_3_4();
	this.cloud3.parent = this;
	this.cloud3.setTransform(238.9,88.2,1,1,0,0,0,114.2,20.6);
	this.cloud3.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cloud3},{t:this.cloud4},{t:this.cloud1},{t:this.cloud2}]}).wait(1));

	// 静物
	this.shanguang4 = new lib.Symbol17();
	this.shanguang4.parent = this;
	this.shanguang4.setTransform(257.5,804.6,1,1,0,0,0,13.2,13.2);

	this.instance_4 = new lib.whirpool();
	this.instance_4.parent = this;
	this.instance_4.setTransform(314.2,447.1,1,1,0,0,0,137.6,162.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFD983").s().p("AkfAwIAUgnICgCQIiWjAIAjg+ICMD4IhokkIBVgmIAwE/IgLk/IBngOIg5FNIBdkyIA9AHIhWDwIBojTIA5AMIh1DJICFiyIA9AHIjHDwIi4Ayg");
	this.shape_68.setTransform(189.2,645.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3B2314").s().p("ADIROQA9gXAVgfQAjg2AFgMQAQgmgBhHQgBhCgXhHQgmhugfhqQgchbAQh3QAGg0AAgOQgBgbgRgJQheg1hPgmQiVhIhQgFQiUgGhRgFQiUgHg/gVQhAgTh/AAQg/AAgzAEQA7gPBOgMQCdgXBjATQBPAOCUAmQBvAWANghQAGgSgagkIhGhUQh2iRgsiRQgwihgkiTIgbhzIiZhIICZASIDbjQIi8DTIBcFTQBsFjBMBTQBMBRBvA+QA3AfAoAPIA3gIQBDgKA4gQQC0guAJhGIAUinQARhVAkgWQAXgOA9gSQAugNANgUQAOgXAmhTIAjhPIDQhQIiyBwIhcDTIiQBQIgUBfQgXBpgTAxQgTAxgpAxIgKAMIAegdQBCg6AogPQAngPAwAKQAXAFAQAIQgdAIglARQhLAfgmApQgyA0gvCGQgzCRABB3QAABrBMBWQAzA6AsASQAPAGAHA0QADAbAAAZICGAfQCSAbBBgRQBBgSAJAVQAFAKgJANQjOAtgkgEQgXgDiGgZIiBgaIgRAvQgZA1gpAZQgoAYhEAKIg8AFg");
	this.shape_69.setTransform(102.2,547.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#9991C9").s().p("AAHEZQgygKAagiQAug8gFADIgOAQQg4AihNAZQiZAyhfgrQhegrAogkQAHgHALgFQhMAbhNASQjGAvgOhKQgOhLCsgvQBWgYBZgJQgKg2BJgsQBIgsCSgbQBEgNAKgFQAIgEgVgEQhGgPARgeQAZgsDVgYQDTgXAuAfQAnAahFA/QgkAggbAQQAWgGAagEQCHgYBzAhQCmAvAnAmQA2AziIA8Qh8A3iFAMQgqAEglgBIgegCIBTAKQBIASgyApQgdAXhTAXQhOAVhVAKQgvAFgiAAQggAAgVgEg");
	this.shape_70.setTransform(63.4,448.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6F6791").s().p("AAMHHQhTgRArg3QBKhhgHAFIgWAZQhdA3h8ApQj5BSiahGQiZhGBCg7QAKgJAQgIQh6Arh9AdQlBBLgXh4QgWh5EXhNQBXgYBsgRIBZgMQgQhZB2hHQB2hHDsgtQBugVARgIQANgGgigHQgygLgTgKQgjgUASggQAUgjB0gfQBogcCTgQQCQgQBzACQB8ADAiAXQA/ArhvBmQgqAlgzAgIgVAMIgeAKQgzASAggGQARgDAggTQAogLAygJQDagnC7A2QEOBNBAA9QBXBTjcBiQjJBajZAUQhBAGg8gCQAwAFAiAIQB2AehRBCQgvAmiHAlQh/AjiJAPQhMAJg4AAQg0AAgigHg");
	this.shape_71.setTransform(42.3,441.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9991C9").s().p("AkbD8QgMgmBFgeQAhgOAjgIQiBAZiBANQkGAbAAg9QgBg9CzgpQBZgUBagIQgZgDgIgPQgQgcBUg8QBTg7CpgZQBUgNBEAAQAJgDAIgFQAPgLgCgOQgGgjCagbQBdgQAxAEQA/AEAGAkQAGAgg6AWIg7AQIAqgGQAygFArABQCJACAKA+QALA+hhAaQgeAIglAEIggACIA+AQQAvAWhMAYQhLAYiZAZIiKAUIAbATQAVAZggAZQgsAkjFAgQhcAQg1AAQhCAAgHgYg");
	this.shape_72.setTransform(32.4,545.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9991C9").s().p("AhlDnQgigTAKgiIARgeQg3ALhGAKQiLAUhJgCQhIgDAigmIAwgnQgsAPguABQhbABgKhIQgJhHB1gtQA3gVA4gJQgXADgZgDQg4gGgFgmQgGgpA1gZQApgTBWgMQCMgSAGAoQACAQARAHQAIAEAIAAIAngMQAxgNAwgIQCZgaBZAoQBaAngFAmQgCATgUALIAygKQA8gLA0gEQCmgLASBDQATBDjqA1QhJAQhZAOIhLAJIBFADQBFALABAuQACAzi8AbQhJALhCAAIgGAAQg/AAgUgKg");
	this.shape_73.setTransform(189.2,487.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],37.1,66.3,8.7,0.6).s().p("Ao1nlILnlCIGEXIIk4CHg");
	this.shape_74.setTransform(296.6,640.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFD983").s().p("AiyAFIALgsIBpDfIhkkaIAUhHIBgFgIhLmPIA1gbIAoGiIgRmYIBBAIIgaGZIAxlvIAmAZIgvEdIA8j0IAkAfIhEDiIBPjBIAmAYIh2EAIhyARg");
	this.shape_75.setTransform(92.5,861.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFD983").s().p("AiMC/IiKjHIAbgiIBvC5IhZjmIAwg1IBBEcIgXk+IBXgQIgjFKIBFk/IBhAOIiFE6ICfkXIA2AYIiKDYICTi2IAwAbIibCoICliNIA1AXIjwC6g");
	this.shape_76.setTransform(196,855.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFD983").s().p("AjMCqIjIiyIAogdICgCkIiBjNIBFgvIBfD9IghkbIB+gOIgzEmIBkkdICNAMIjCEZIDoj5IBNAWIjHDAIDViiIBHAYIjiCVIDvh9IBOAUIldCmg");
	this.shape_77.setTransform(591.7,640.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFD983").s().p("AjMCqIjIiyIAogeICgClIiBjNIBFgvIBfD9IghkcIB/gNIgzEmIBjkdICNANIjCEYIDoj5IBOAWIjIDAIDVijIBHAZIjiCWIDvh+IBOAUIlcCmg");
	this.shape_78.setTransform(678.5,765.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#AD8E51").s().p("AjMCqIjIiyIAogeICgClIiBjNIBFgvIBfD9IghkcIB+gNIgzEmIBkkdICNAMIjCEZIDoj5IBNAVIjHDBIDViiIBHAYIjiCVIDvh9IBOAUIldCmg");
	this.shape_79.setTransform(452.7,532.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#AD8E51").s().p("AhlE1Ip4kuICNglIGyDlImakQICAgtIGDEoIlqleICMgnIGmHFIlhn+IEBgXIC1IFIhdoWIDlAZIg9IEICtnNIB9BWIjpF1IEiksIBIA3IlqFDg");
	this.shape_80.setTransform(196,554.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-34.9,66.7,-9.5,-0.2).s().p("AoWKyIE43bIL1EfIrvU0g");
	this.shape_81.setTransform(454.4,642.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CCCCCC").s().p("AkHCjQAlh5AihPQAVgzBHg/IBCg1ICkANIAtAtQAwA0AOAkQAPAjAHB1QAEA7ABA0g");
	this.shape_82.setTransform(568.7,764);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E6E6E6").s().p("AlFDiQASg3AWg9QAsh3AUgZQATgYBHhwIBDhrICYAUQCfAfAZA7QAaA6ARDHQAIBkADBYg");
	this.shape_83.setTransform(568,757.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CCCCCC").s().p("AmyGGQAYhhAehpQA9jRAignQAjgoBFgZQAhgMAbgFQAkhKAuhNQBZibAvgOQAzgPBWAnQBOAkATAgQANAWAuGZQAYDNAVDJg");
	this.shape_84.setTransform(629,735.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E6E6E6").s().p("AoQHbQAch2AmiAQBJj+ArgwQAqgxBTgeQApgPAggGQAshaA3heQBti8A5gRQA+gSBpAwQBfArAXAnQAQAaA5HyQAdD6AZD0g");
	this.shape_85.setTransform(626.1,725.5);

	this.instance_5 = new lib.Path_9_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(633.2,777.4,1,1,0,0,0,61.9,11.8);
	this.instance_5.alpha = 0.41;

	this.instance_6 = new lib.Path_10_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(568.1,782.3,1,1,0,0,0,46.1,9.3);
	this.instance_6.alpha = 0.41;

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3B2314").s().p("ABWPSQg/gEgggRQghgShXhIIhRhEIgPAWQgWAYgpAHQgpAHhGgPIg+gQIBdAIQAgACAlgNQACgEgBgDQgDgFgWAHQgbAJgxgLQgvgMAvgJQArgJBJj1QA/jTAIhQQAEghgHhSQgGhMADgKQAEgWAnheQAqhlARgXQAZghCgpEQABgGgFgNQgGgOgBgRQgBgWAPgjQAPgiAPgNIAZgTQAKgGgBAIQgBACgXAYQgYAYgDAWQgEAcAEAWQADAWAJADQAGACAXgdQAWgbADAEQADAHgIAKQgIAKgWARQgSAPgSA5QgPAxgBAYQgBATADAWQAEAXAHALQAIAMA2gUQA4gVAtghQArgfBagCQBWgCADATQADATgRAJQgXALg5gIQhBgJhpAgQhtAhgwAxQgqAsgwD8QgsDfADAyQACAVAaA9QAfBJAJAiQAJAlghCaQgnCwgBA/QgBBXAeBSQARAtAiA4QAQAbBDAaQAiANAfAIIgbABIgdgBg");
	this.shape_86.setTransform(591.7,549.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3B2314").s().p("ABmOwQiYgpghgaQghgZAOg2IAUgxQjAAsg8gBQglAAg5gbIgxgaIBNgIQBSgLAbgQQAWgNA9ggQA4gnAnhMQAdg4AxisQAriYAagdQAXgZA+gxQA0gqALgSQAbgpBEjbQBMj0gRg7QgThChQhRQhNhOg+gWQg2gUgOgVQgLgQALgQQAMgPBLArQBOAsAXAvQAZAzAmAtQAmAsANgHQALgHAPgSQANgSAIgRQALgWAKgyQALg6gJgWQgLgagCgMQgDgOAGgDQAEgDAHAiQAHAkAGABQAJACAOgRQANgSAKgbQAIgVgKggQgJgfABgDQACgIAGALIANAcQAIASgDAlQgEAmgLATQgJAOgNALQgKAIgCAGQgHATg8EdQg/EqAEAaQAEAcgMBtQgKBlgGAVQgDAKgpBBQgsBFgNAfQgXA3gPD6QgQEIAkAdQAlAfg/gPQg/gPgUgVQgQgRgPgGIgNgDIAUAjQAZAkASAIIC0BSQhHgQhNgVg");
	this.shape_87.setTransform(705.2,616.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F4AEAE").s().p("ADvFgQhdgQheggQhighgrggQgxglAsgXQBPgogGACIgXAJQhNAHhegLQi7gXhOhdQhOhbA8gSQAKgDALgBQhcgJhZgTQjngxAWhWQAWhVDNAkQBnARBiAjQARhABjgKQBhgKCoAsQBNAUAOAAQAKAAgUgQQhBgyAggXQAwgjDtBRQDrBRAhA3QAbAvhnAgQg2ARgmADQAaAFAfAIQCaApBpBbQCYCFAXA7QAfBSitgEQiegDiTg2QgtgQgngTQAfASAUAQQBDA3hJASQgQAEgXAAQgoAAg+gLg");
	this.shape_88.setTransform(705.6,542.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F4AEAE").s().p("AA/EfQiqg9hYg9QhYg9A4gTIBKgZQhFgGhKgTQiSglgSg9QgSg8AogqQAUgVAYgJQg7gJgtgSQhZgjBHgsQBHgsCzAzQBZAaBMAiQgFgEgCgHQgGgNAGgIQAWgcCJAYQCLAZA0AyQAbAZgCAUQBjAeBiBYQBhBWgVAqQgSAihRgNIhPgVIAjARQAoAVAgAXQBlBHgbA2QgbA1hPgVQgZgHgcgNIgWgMQgSAVguAMQgdAHghAAQhLAAhigjg");
	this.shape_89.setTransform(746.8,621.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#9991C9").s().p("ADsEmQhSgEhTgSQhWgSgogXQgtgbAjgXQBkhEg8AmQhCAOhQgBQiigBhMhGQhMhHAygWQAJgCAJgCQhPAChOgIQjLgTALhKQAKhLCzAJQBZAFBXAUQAIg4BTgTQBSgSCTAUQBFAKALgCQAIgBgRgLQg+glAZgWQAmgiDRAtQDQAtAiAsQAcAlhVAmQgsATggAHQAXABAbAEQCHAUBjBDQCPBhAZAxQAiBCiTAOQiIANiCgfQgpgKgjgMIgbgLIBLAjQA/Aog8AXQgZAKg0AAIgsgCg");
	this.shape_90.setTransform(612.2,487.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F27070").s().p("AANJXQhugchfgqQhggsgVgiQgkg5Amg6QAUgeAagRQhVgQhqgZQjTg0hkg0Qhkg0BLg1QAlgaA6gPQhJABhAgdQiCg5AliQQAmiQDGgLQBdgFBWAUQgjgKgigVQhLgxAUhMQAVhTBcgNQBJgKCAAiQBrAbAwAlQAtAhgKAnQgIAgATAZQAJANALAGIBAACQBNAGBJAPQDrAzBjCHQBiCGghBFQgRAiglAIIBOANQBeASBMAbQDyBWgWCOQgXCOlvgzQhzgQiHghIhxgeIAfAMQAlARAcAVQBZBDgfBZQgSAyhfAEIgSABQhNAAhugbg");
	this.shape_91.setTransform(794.4,544.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6F6791").s().p("AF/HdQiEgIiHgcQiNgehBgmQhJgqA5gnQBmhEgIADIgdAQQhrAXiDgBQkGgBh7hzQh7hzBRgiQANgFARgEIBMgDQgsgDggAGQiBADh/gMQlJgeARh6QAQh5EiAPQCRAHCNAgQANhaCHgeQCGgeDuAhQBwAPASgCQANgCgcgSQgtgagOgQQgcgdAcgZQAegbB3AHQBsAHCRAfQCNAeBtAnQB1AqAZAhQAuA9iLA9QgzAWg6AOIgZAGQAqABAyAIQDcAgCgBtQDoCgApBNQA4BsjwAXQjbAVjUgyQhBgPg5gVQAtAUAfATQBnBBhiAlQgqAQhVAAQggAAgmgCg");
	this.shape_92.setTransform(578,459.8);

	this.whirlpool = new lib.Symbol3();
	this.whirlpool.parent = this;
	this.whirlpool.setTransform(309,441,1,1,0,0,0,191,199);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9991C9").s().p("AAbDaQiUgugdggQgWgXATgQQAJgJANgEQgugMg5gSQhzgjg3gaQg4gaAngLQATgGAegBQgngGgkgPQhHgeAPgvQAOguBqANQAxAGAuAOQgTgGgSgKQgqgXAIgZQAJgbAwAEQAmACBGAXQBzAkgIAaQgDALALAKQAFAFAGADIBzAaQB/AlA6A2QA5A2gPAVQgFAHgMACIgKABICGApQCFAxgHAvQgHAvjGgwIjEg6IA0AZQAyAfgNAcQgGAMgbAAQgqAAhdgdg");
	this.shape_93.setTransform(606.2,545.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3A3A3A").s().p("AAtJVQgBoDhul7Qhvl+h1jYQgkhDghgqIgZgeIAzARQBAAfBDBHQDVDfCmIPQClILAnEYQAUCMgOAjIAAALQgDAOgJAQQggAxhfAvQheAvhJAXIg2APQAWi1AAkBg");
	this.shape_94.setTransform(433.6,430.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#58595B").s().p("AvGX7QiygQiegfIh6gdQgLirgFkGQgLoKAcm/QAmpxBsmDQCHnjDthOQF5h9FNIXQBoCnBXDVQAqBrAXBJQAXhLBLhTQCUilEBglQFKgwE0PHQCaHkBYHuIgDAcQgHAjgZAiQhRBtjjA8QjKA2ibgWQgwgGglgOIgcgMQhLAphhAtQjCBbhwAZQmJBamTAAQigAAijgOg");
	this.shape_95.setTransform(320.1,411.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#754C28").s().p("AgnGuQAOgFANgNQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgCgCgIAHQgKAKgXAFQgWAFASgOQARgMgTh4QgQhngNgjQgFgQgTghQgTgggBgEQgCgKgCgxQgDgyACgOQAEgTgxkYQgBgDgEgEQgGgGgEgGQgFgKAAgSQgBgRAEgIQAJgUACAFQAAACgFAOQgFAPADAKQAEANAGAJQAGAJAEgBQADgBAFgRQADgQACACQAFADgLAXQgEAKADAcQAEAXAEALQAKAWAMAHQAFAEATgUQAUgUAMgYQAMgVAngTQAjgTAFAIQAMASgtAOQgeAKgmAiQgoAlgKAeQgJAcAeB1QAbBoALAUQAFAJAYAVQAcAZAKAMQAMAPAQBIQATBTAMAbQAbA7A/AoQAMAIAigCQARgCAPgDQgpAXgcgBQgSAAg0gNIgwgNIgCAMQgEAPgQALQgZASg1AHg");
	this.shape_96.setTransform(155.1,493.1);

	this.instance_7 = new lib.Path_24();
	this.instance_7.parent = this;
	this.instance_7.setTransform(138.6,443.5,1,1,0,0,0,85.4,37.5);
	this.instance_7.alpha = 0.699;

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3B2314").s().p("Ag4JnQAUgIASgTQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgEgDgLALQgNANghAIQghAHAbgUQAXgSgaiqQgXiTgSgzQgIgWgbgwQgagsgCgHQgDgPgEhFQgEhIAEgTQAFgchFmQQgCgEgGgGQgIgIgGgKQgHgNgBgaQgBgZAGgLIAJgTQAFgHABAFQABACgIAVQgHAVAEAPQAGASAJAMQAIANAGgBQAFgBAGgYQAFgXADACQAHAFgQAgQgGAOAFAoQAFAhAGARQAFAMAJAMQAJANAIAEQAIAFAbgcQAcgdASghQARgfA2gbQA0gaAGAKQASAahBAUQgrAOg2AxQg5A0gPAsQgNAoArCnQAnCTAQAfQAHAMAiAeQAnAjAQASQARAUAXBoQAbB2ASAnQAYA1ArApQAXAXAlAYQASAMAxgEQAYgCAVgEQgPAIgTAIQgnAQgZgBQgagBhKgSIhFgTIgCASQgHAWgWAQQgXAQgvALIgrAIg");
	this.shape_97.setTransform(32.8,562);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#754C28").s().p("AgxJLQgjgCgWgMQgWgLgPgaIgLgYQh/AjgTAEQgSAEhtgPQgEgHACgFQADgLAjAGQAiAHBLgUQAlgKAfgLIAAgbQABgcAIgDQAVgLAZggQAjgwgEg3QgEg9gghKQgdhDgcgZQgVgUgogOIgkgKIAUgIQAZgGAUAFQAWAHAkAcIATAPIgIgIQgXgYgMgXQgLgZgRg1IgOgxIhNgkIg4hpIhhg0IBvAiIAVAnQAXAqAIALQAIAKAYAFQAhAHAMAGQAUAKALAsIASBVQAHAjBeASQAwAIAuACIAvgcQA3gjAkguQAkgtAqi8IAjizIhqhmIB6BjIBOgPIhMArIgJA9QgNBNgUBVQgQBNg4BPQgZAigIAMQgMAUAEAJQAIARA5gQQAigJBRgbQAzgNBRAGQAqADAfAGQgbAAggACQhDAFgfANQghANhLAJIh3AOQgpAFhKAsIhWA2QgLAHAJAuQAMA8gKAxQgMA4gQA6QgJAmACAiQADAlAKATQACAGAVAaQAMAQAgAJQAQAFAPACIgMAAIgUgBg");
	this.shape_98.setTransform(491.4,457.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFE383").s().p("ABOEbQhGgHgggSQgmgVAZgcQBHhRgrAtQgxAXg/AKQh+AVhCg+QhCg9AlgcQAGgFAIgDQg+AMg+ADQifAIAAhNQABhMCMgOQBGgHBFAIQABg5A/geQA+gdB1ABQA2AAAJgDQAGgCgPgIQgzgdARgaQAagoCoASQCmARAeApQAaAig/AxQggAZgYALQASgCAVABQBsACBTA3QB5BPAYAtQAiA+hyAiQhoAfhogOQghgEgdgIIgWgIIA+AaQA1AggtAfQgaAShDAHQgfADgfAAQgiAAgjgEg");
	this.shape_99.setTransform(443.5,434.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFE383").s().p("ABMDSQhDgFgfgOQglgPAYgVQBEg8gpAhQgvARg9AIQh4APhAguQhAguAjgVIANgGQg7AJg7ADQiaAFABg5QAAg4CHgKQBDgFBDAGQABgqA8gWQA8gWBwABQA0AAAIgCQAHgCgPgGQgxgVAQgUQAZgdChAOQCgANAdAeQAZAZg8AkQgeATgXAIQARgBAUAAQBnACBQApQB1A7AXAhQAgAuhtAZQhkAXhkgKIhRgPIA8ATQAzAYgrAXQgZANhBAFQgbACgdAAQgiAAgjgDg");
	this.shape_100.setTransform(514.8,397.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFE383").s().p("AAyDLQiYgbgigbQgYgUAQgTQAIgKANgFQgvgHg7gKQh3gUg6gTQg6gTAkgRQASgHAegEQgngBgmgLQhKgVAIgwQAJgwBqAAQAygBAvAIQgTgDgTgIQgtgRAFgaQAFgbAwgDQAmgCBJANQB2AVgFAbQgCALANAIQAGAFAGACIB1ALQCDAVBAAuQBAAvgMAVQgGAMgTACICKAXQCKAhgBAvQgBAvjKgWIjLggIA4ASQA1AYgJAdQgGARgxAAQgqAAhIgMg");
	this.shape_101.setTransform(550.7,453);

	this.instance_8 = new lib.Path_26();
	this.instance_8.parent = this;
	this.instance_8.setTransform(9.3,491.2,1,1,0,0,0,122,53.6);
	this.instance_8.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_7},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.whirlpool},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.instance_6},{t:this.instance_5},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.instance_4},{t:this.shanguang4}]}).wait(1));

	// 岛屿
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4EA8A8").s().p("AhBApQgggIgCgSQgDgRAbgRQAcgRApgGQApgHAfAJQAfAIADARQADARgcARQgbARgpAHQgSADgQAAQgVAAgRgFg");
	this.shape_102.setTransform(240,869.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4EA8A8").s().p("AhBApQgggIgCgSQgDgQAbgSQAcgRApgGQApgHAfAJQAfAIADARQADARgcARQgbARgpAHQgSADgRAAQgUAAgRgFg");
	this.shape_103.setTransform(47.9,789.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#4EA8A8").s().p("AhBApQgggIgCgSQgDgQAcgSQAbgRApgGQApgHAfAJQAfAIADASQADAQgcASQgbARgpAGQgRADgQAAQgVAAgSgFg");
	this.shape_104.setTransform(110.3,732.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4EA8A8").s().p("AgrASQgSgEgBgJQgBgHASgIQASgHAagDQAagCASAFQATAFABAIQABAIgSAHQgTAIgaACIgPAAQgQAAgNgDg");
	this.shape_105.setTransform(275.1,783.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4EA8A8").s().p("AgDAoQgsgEgfgPQgegOABgQQACgQAggJQAhgJArAEQAtAEAfAPQAeAOgBAQQgCAQggAJQgXAGgbAAIgbgBg");
	this.shape_106.setTransform(521.2,931.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4EA8A8").s().p("AgCAoQhagIg+gRQg+gRABgQQACgRBAgGQBAgGBYAIQBZAIA/ARQA+ARgBAQQgCARhAAGQgdACgiAAQgpAAgwgEg");
	this.shape_107.setTransform(484.6,728.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4EA8A8").s().p("AgGBLQiogPh1ggQh1ggADgfQACgfB5gMQB5gLCoAPQCoAPB1AgQB1AggDAfQgDAfh5AMQg0AFg9AAQhQAAhfgJg");
	this.shape_108.setTransform(618,861.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4EA8A8").s().p("AiIA0Qg8gDgDgSQgDgSA5gVQA4gVBTgNQBTgNA8AEQA9ADACASQADASg5AUQg4AWhTANQhBAKgzAAIgbgBg");
	this.shape_109.setTransform(64.9,699.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3A8484").s().p("EAyuAUOQl9gxjTk5QhChhgphxIgchcQiKAZiqAKQlUAUibhOQiphViejgQiDi5g5isQgRg0gEiCQgFiRgKgxQgThfg5gSQhGgXiIBUQj1CXvpgaQk4gIlggZIkggXIhECxQhHDQgPCXQgJBXiXBfQiIBXjbBJQjSBHjUAjQjcAkiMgRQjogdhnjDQgXgsghheQgXhCgRgKQgSgKiMAVQjnAjhDAHQmvAvhaiBQheiEAmjcQALhFAYhFIAVg4Il7ljQLgjyPHiCQQtiOUrAAQTlAAUPDxQT5DuQsGoIB7MaQivDzj7DpQnGGmljAAQglAAgkgEg");
	this.shape_110.setTransform(399.3,627.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#95EFDE").s().p("AkJLQQg5gGAOl2QAKjDAChRQAEiHgNgcQgNgdgfgfIg5g2QhEhDALhFQAFggAegJQAWgGA3AEQBTAGAYAAQBGAAA7gPQBagYD7ioQBxhLArgXQBEgmAOAPQAWAZjRD9QjyEnghA+QgYAvgkCNQgVBTgsC8QhUFUg5AAIgBAAg");
	this.shape_111.setTransform(668.3,1197);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#72CEBC").s().p("AqIVIQg0gngXjIQgTieADjEQABhDAqiyIBTlRQBpm0g+goQhXg4guh2QgziCAVieQASiLBnhlQAhggAkgYIAfgRIAVAHQAeAIAsADQCNAJDkgvQDigvEthwQCWg4BpgvIAGBNQACBqgZCQQgOBQgyBDQgpA3hPBAQgvAmhsBSQhkBQhHBKQiNCTiaHoQgnB4hFDzQg3DDgVA3QhNDJhxDEQh0DJg2AAQgJAAgHgFg");
	this.shape_112.setTransform(679,1233);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#4EA594").s().p("Atde+QgjgYgahFQg8ifAXj9QAJhlARmBQAYo6AKi5QA0wKBHj3QBIj/CAizQAog4ApgqIAggeIBEADQBVADBegEQEogQEAhVQEBhVDUhtQBCgiA2ghIApgZIgXCpQghDRgxDAQibJnj6DhQiKB8hUDFQhCCcgvDzQgbCOguEpQguEKg4CuQh3FnkfExQhdBhhxBfIh/BoQgSAQgTAAQgPAAgQgLg");
	this.shape_113.setTransform(674.1,1286.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#95EFDE").s().p("AobVsQgjgagKhAQgIg3AIhqQAkk2ANjnQAQkeg3kzQgNhMgjijQgfiQgMhMQggjLBSj0QBLjfCIiiQAbghCtgbQCagZDTgMQDQgMCRAHQCeAHADAbQAEA1iMA2QhwAskrBNQh+AghKA5Qg+AvgoBNQgSAjgrB1QgnBpgoBDQgxBTgBBYQgBBBAdBtQAsCkAJArQAaCHgFCIQgMFShfGpQgtDGgrBpQgmBfgfAAQgHAAgGgFg");
	this.shape_114.setTransform(376.5,1285.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#72CEBC").s().p("ANobtQksiwiEkjQhFiag6mmQggjug4pCQgzoUggjMQgylBg9gKQjwgmh0IZQgnC1gUDeQgOCiACBZQABBDgNCUQgPCxgaCsQhJHjh2C4QhxCyjEA5Qg+ASg/ADIgyAAQhlp4gdj+QgLhogIjoQgJkDADkCQAGq1BPjQQAUg1AviWQAfhlAfgyQAqhEBNgzQBVg4Cbg1QEKhcFGggQCtgSDugLQCUgQC1BHQDDBMCBCLQC1DEAxEYQBIGWi7JbQhgE2APEVQAMDWBRDgQAuB/BfDTQBGCtgIBxQgQDog9BfQgeAvgcABQh7geiWhYg");
	this.shape_115.setTransform(414.3,1308.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#4EA594").s().p("EgTKAnDQgthJgHhDQgHg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkrgTjUQglmiAnpdQALirAXkFQAVjsADg/QALjGB6iTQBjh4C0haQCQhIKphQQJlhJEIABQDCAABsEoQBPDXA2HPQAVCugPC+QgKCOglDLIhAFeQgjDRgKCsQgKCyA4EGQAfCNBaFCQBQEcAVCAQAhDGguBbQguBdiwAdQiGAXkHgKQk5gRiegEQkUgIinAdQiyAei/CtQiDB2iuDhQjCD6gjAlQg9A/goAAQgZAAgRgag");
	this.shape_116.setTransform(425,1368.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B5F4E5").s().p("AgUQbQhngDjRgyQjLgxjkhMQofi2ipiTQhihVAPhLQALg1BMg8IA8guQAigaAOgQQAmgsg4gjQgagRjaAbQl1AtiNAMQszBDoSiuQkjhfjOk0Qi7kWhrmxQCsEMD5CMQHwEWI0CYQDSA4D+AwQA1AKFrA/QB+AWC8AaQCPAWA2ALQBOARA2AbQA3AcBBA4QBvBegDBmQgBAzgYAhQBugUCsgKQFYgUE3AyQCeAZCAAlQAbAHCJAuQBEAWApABQA0AABKgcQBBgZB3hDQCNhSBKgpQEXibCGAAQB9AABnBBQBFArATAKQA5AdBEANQB+AYFbjUQBNgvCthyQCBhUAjgQQAsgVBRAgQA2AVB0BCQCIBNBAAeQB4A5BfARQC2AfFvAhQC4AQCTAKQgsCv55CiQs9BSs0AuQhqAJh/A1Qg0AVisBXQiNBHhcAfQh9Aoh1AAIgSAAg");
	this.shape_117.setTransform(184.8,1053.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B5F4E5").s().p("AqlC0QhEgEgJi0QgDg4AEhDIAEg4IAPAeQAWAlAgAfQBnBjCoAMQCNALF1gyQF0gzEXhDQhjBKiTA/QjaBgmuAyQkNAgirAAQg3AAgsgEg");
	this.shape_118.setTransform(687.8,1098.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#66E2E2").s().p("AurUYQhogDjQgzQjMgxjjhMQogi1ioiUQhihVAPhKQALg1BMg9IA8guQAigZAOgQQAmgsg3gkQgagQjcAdQloAxicAOQs0BJoOi9QmuiajUodQhJi8hDkfQhCk5giiIQAnA9CeCeQCeCeC+CpQHfGqCLAaQBMAOAxhbQASgiAYhBIAsh7QA9ijBNhdQBtiGCrgvQDIg4CxBtQCMBXCJDIQBFBmCED0QBmC8AvApQBvBeClgmQBTgTA8glQE3kkF2kZQLqo0E2AyQCqAcA5CKQAtBpgQDDQgJBtgdDPQgOCjAvA0QAsAyCBApQB3AlCjAVQCdAUCRgBQCXgBBXgYQB9gjFchpQFChXDAADQB+ADCsClQAtAsBSBVQBEBEAlAWQBjA6GxhBQBzgSDkglQC8gcBbAAQA9AACAAnQBMAXCrA6QFQBsCNgmQCagqFPlTQBphqBuh8IBZhmQgBAGgRCpQgaDLgvCsQiZIslIBrQvFE8kKjOQhOg9gQhvIgHhBQgDgZgLADQoICP3BCoQrgBUp4A3QhpAJh/A1QgzAWitBXQiMBHhdAfQh9Aoh1AAIgTAAg");
	this.shape_119.setTransform(275.7,1026.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#BC3C67").s().p("AjJhYIAAgxIGTDiIAAAxg");
	this.shape_120.setTransform(305.8,833);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#721933").s().p("AjMBZIGZjiIAAAxImZDig");
	this.shape_121.setTransform(472.4,833);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#912942").s().p("Ap0AZIAAgxITpAAIAAAxg");
	this.shape_122.setTransform(388.9,844.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D83F5C").s().p("Ap4DjImTjjIGTjhITwAAIGUDhImUDjg");
	this.shape_123.setTransform(389.3,819.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#1A4C42").s().p("AjZKsQgLv0BmnrQBmnrBgjBQAeg8AZgXIAUgLIBIFsIgVAcQgbAngcAzQhXCig4DdQh5HbgsPPQgXHnACGJQgamYgFn6g");
	this.shape_124.setTransform(600,1238.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#CCCCCC").s().p("AjuAGQAJg1A2hOIA0hEICjgYIA2AhQA6AoAXAfQAWAgAjBwQARA4ANAzIoLBQQAIh+APhWg");
	this.shape_125.setTransform(169.8,860.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E6E6E6").s().p("Ak2CiQAPiAANgcQANgcArh9IAph3IAvgHQA5gHAygCQChgGAlAzQAnAzA+C+QAgBfAYBVIqGBkQAEg6AIhAg");
	this.shape_126.setTransform(169.2,855.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#CCCCCC").s().p("AjoEvQgDjCAIhBQAJg/Awi4IAuisQgCgUAFgXQAKgvAjgQQAjgPAeAwQANAYAIAcIgEBmQgCBtAPAkQAPAlAxA/QAdAlBDBOQAoAxALCbQAFBNgDBEInKBGQgEhUgChig");
	this.shape_127.setTransform(130.1,831.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E6E6E6").s().p("AlGFbQABi+AWhlQAJgsALhnQANh6AHgwQAgjNBRglQBTglBhBEQAyAjAgAqIgDCPQAGCVAuAbQAuAcAmA/QATAfAKAbIA1FYIqJBkQgDhLgBhfg");
	this.shape_128.setTransform(130.2,829.8);

	this.instance_9 = new lib.Path_16_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(165.8,879.2,1,1,0,0,0,45.7,10.9);
	this.instance_9.alpha = 0.41;

	this.instance_10 = new lib.Path_17_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(113.8,879,1,1,0,0,0,45.7,10.8);
	this.instance_10.alpha = 0.41;

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#58BDBF").s().p("EglkAzeQhogDjQgzQjMgxjjhMQofi1ipiUQhihVAPhKQAKg2BMg8IA9guQAhgZAOgQQAngsg4gkQgagQjaAaQlzAtiPAMQs0BEoSivQmoiMjxpHQjOn3gproQgkqYBmpsQBkphCwjlQDlkpGaj7QHLkZKQjKUAYDgHcAmCAAAQUeAAVHEHQUyEDRAHLQRjHZJ4JOQKmJ4AAKbQAAEk5KNxQslG5slF+IAbA/QAYBOgOBRQgtEBmcC1QjaBgmvAyQljApi4gNQhEgEgJi1QgDg4AEhDIAEg4QgsCv55CjQs8BRs0AuQhqAJh/A1Qg0AWisBXQiNBHhcAfQh9Aoh1AAIgTAAg");
	this.shape_129.setTransform(426.2,827.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#95EFDE").s().p("AHqbTQgwhWggiKQgdh9gBhdQgQmwhAnzQh+vajsoAQgkhMhiAdQgoALieBTQiCBEhCgBQhggCgjh/QguingZi6QgVieAAh3QAAhYHMASQDmAJDlAaIBiAaQB1AiBjAmQE9B5ASB0QAPBkgPCOQgKBWgjDEQhOG1AAEWQAAE7A2GiQAcDaApENQAFAsAVBrQAVBqAHA9QAWDQhMCkQhJCdhKAGIgGAAQg7AAg1hgg");
	this.shape_130.setTransform(160.8,1357.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#72CEBC").s().p("EAJLAoKQh2gSg6g1QgRgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6geg4Qg4hih6o0QiDpegmhmQgahDhUifQh6jjguhcQjrnZhqnHQh8oTgVlTQgHhuAEhoQAFhgAAgjQAAhYRZhXQItgsItgbIg3GDQg3GaAAB2QAABfAIJEQAFIpgNBcQgPBxAAEFQAAEHAPCOQAFAwAeDgQAgD3AQDGQAzJzhWEUQhjE7hzB1QhTBThzAAQgbAAgdgFg");
	this.shape_131.setTransform(168,1383);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#1A4C42").s().p("EALSAuDQh2gSg6g1QgRgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg4hih5o0QiDpegmhmQhGi4igkiQiokwkmnWQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg3GDQg3GaAAB2QAABfAIJEQAFIpgNBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAgD3AQDGQAzJzhWEUQhjE7hzB1QhTBThzAAQgbAAgdgFg");
	this.shape_132.setTransform(154.5,1345.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#2D7769").s().p("Egc5A/HQkjhKjJlFQiikDh2m/Qg7jdhooeQhTmsg7iOQhKivjXhrQiUhJkqhGQllhUhmgjQjqhThfiBQi0j2hknkQgciFgpkDQgnj1gWhmQgfiNhvhRQhVg+irgvQhigbjdg2QjGg5iHhRQkNijj3tLQhNkIhCksIgyj4MDMfgQwICXV+QlNJpmLKeQsWU+k5EPQipCVj5B3QiyBWktBqQmiCUhQAfQkXBujDB3QlsDelXHaQgvBCjVE5QiUDahgBwQhwCDjnA5QioAqk1AQIkGALQieAGhpAKQkpAbi6BIQi3BHjWDrQhCBHh3CPQh/Cbg7BCQjiD+jBBjQikBUixAAQhjAAhngag");
	this.shape_133.setTransform(420.8,1258.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.instance_10},{t:this.instance_9},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102}]}).wait(1));

	// Layer 1
	this.instance_11 = new lib.Symbol31();
	this.instance_11.parent = this;
	this.instance_11.setTransform(375.7,337.2,1,1,0,0,0,374.9,337.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.page4, new cjs.Rectangle(-441.6,-386,1598.2,2051.1), null);


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


(lib.hatch_guide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{show_hatch_guide:1,"show_hatch_guide":20,hide_hatch_guide:50});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_63 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(14).call(this.frame_63).wait(1));

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(375.1,667,1,1,0,0,0,375.1,667);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.egg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{cracking:1,egg_flash:18});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(30).call(this.frame_47).wait(2));

	// egg_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArNRsQkqkAAAoQQAAkXBQkuQBPksCLj6QCRkFCyiUQDBihDJAAQDKAADCChQCyCUCQEFQCLD6BPEsQBQEtAAEYQAAIQkqEAQkCDenMAAQnKAAkDjeg");
	var mask_graphics_1 = new cjs.Graphics().p("ArNRsQkqkAAAoQQAAkXBQkuQBPksCLj6QCRkFCyiUQDBihDJAAQDKAADCChQCyCUCQEFQCLD6BPEsQBQEtAAEYQAAIQkqEAQkCDenMAAQnKAAkDjeg");
	var mask_graphics_17 = new cjs.Graphics().p("ArNRsQkqkAAAoQQAAkXBQkuQBPksCLj6QCRkFCyiUQDBihDJAAQDKAADCChQCyCUCQEFQCLD6BPEsQBQEtAAEYQAAIQkqEAQkCDenMAAQnKAAkDjeg");
	var mask_graphics_18 = new cjs.Graphics().p("ArNRsQkqkAAAoQQAAkXBQkuQBPksCLj6QCRkFCyiUQDBihDJAAQDKAADCChQCyCUCQEFQCLD6BPEsQBQEtAAEYQAAIQkqEAQkCDenMAAQnKAAkDjeg");
	var mask_graphics_47 = new cjs.Graphics().p("ArNRsQkqkAAAoQQAAkXBQkuQBPksCLj6QCRkFCyiUQDBihDJAAQDKAADCChQCyCUCQEFQCLD6BPEsQBQEtAAEYQAAIQkqEAQkCDenMAAQnKAAkDjeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-0.3}).wait(1).to({graphics:mask_graphics_1,x:0,y:-0.3}).wait(16).to({graphics:mask_graphics_17,x:0,y:-0.3}).wait(1).to({graphics:mask_graphics_18,x:0,y:-0.3}).wait(29).to({graphics:mask_graphics_47,x:0,y:-0.3}).wait(2));

	// crack1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-47.2,244);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-46.6,y:239.1},1).to({rotation:-15,x:-43.7,y:205.9},4).to({regX:-0.1,regY:0.1,rotation:-22.3,x:-39.5,y:156},6).to({regX:0,regY:0,rotation:0,x:-35.2,y:106},6).to({startPosition:0},1).to({startPosition:0},14).to({_off:true},1).wait(16));

	// crack2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("Au3B8IARjZIJqEWIGoiAIDlkmIF1CUIDyh/IjkC/IloiBIioE8IoPBMg");
	this.shape.setTransform(-214.5,80);

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-214.5,80);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.shape,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},14).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({rotation:15,x:-183,y:52.8},4).to({rotation:-8.9,x:-127.9,y:5.1},7).to({rotation:0,x:-88.5,y:-29},5).to({startPosition:0},1).to({startPosition:0},14).to({_off:true},1).wait(16));

	// crack3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AFOCtIkYlZIlmhjIgEmSIjSivIEICLIARF9IFkAjIEPHLICBJpIjQBCg");
	this.shape_1.setTransform(197.5,114);

	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(197.5,114);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.shape_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},14).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:-0.1,regY:0.1,rotation:-20.3,x:175.8,y:98.9},4).to({regX:0,scaleX:1,scaleY:1,rotation:-6,x:143.3,y:76},6).to({regY:0,scaleX:1,scaleY:1,rotation:-21.7,x:110.6,y:53},6).to({startPosition:0},1).to({startPosition:0},14).to({_off:true},1).wait(16));

	// monster
	this.instance_3 = new lib.Symbol63();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28.6,-21.4,1,1,0,0,0,147.5,156.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).wait(1).to({regX:150.9,regY:152.4,x:32,y:-25.1,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(3));

	// Layer 2
	this.instance_4 = new lib.Tween7();
	this.instance_4.parent = this;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({_off:false},0).wait(9).to({alpha:0},6).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(122.8,6.2);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(122.8,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},18).to({state:[{t:this.instance_6}]},14).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({_off:true},14).wait(17));

	// egg
	this.instance_7 = new lib.Path_19();
	this.instance_7.parent = this;
	this.instance_7.setTransform(26.6,30.9,1,1,0,0,0,75,104.9);
	this.instance_7.alpha = 0.059;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDD91B").s().p("AiZDzIk1CiQAUhEAWhDIELiNIENCOIg0krIDajVIksgrIgwhhQAegjAZgZIAwBiIGqA+Ik1ErIBJGog");
	this.shape_2.setTransform(-46.2,-68.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDD91B").s().p("ABLGCIl8DIIBJmoIk0krIGpg+IC+mCIC+GCIDjAhQAdBYAUBWIieCaIBJGogAFYGfIgzksIDajUIktgsIiHkRIiGERIktAsIDaDUIg0EsIENiOIENCOg");
	this.shape_3.setTransform(42,-14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDD91B").s().p("AFwJKIl7jIIigBTQg1gagvghIEEiJIEMCOIg0ksIDajUIksgsIiGkRIiHERIkuAsIDbDUIgyEhQgngcghggIAgi2IkVkNIgHgiIGRg6IC/mCIC9GCIGqA+Ik0ErIBIGog");
	this.shape_4.setTransform(-38,77.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#231F20").p("AP4FcQAAIQkqEAQkCDenMAAQnKAAkDjeQkqkAAAoQQAAkXBQkuQBPksCLj6QCRkFCyiUQDBihDJAAQDKAADCChQCyCUCQEFQCLD6BPEsQBQEtAAEYg");
	this.shape_5.setTransform(0,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ArNRsQkqkAAAoQQAAkXBQkuQBPksCLj6QCRkFCyiUQDBihDJAAQDKAADCChQCyCUCQEFQCLD6BPEsQBQEtAAEYQAAIQkqEAQkCDenMAAQnKAAkDjeg");
	this.shape_6.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_7}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_7}]},32).to({state:[]},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-136.7,205.2,272.9);


(lib.page3 = function(mode,startPosition,loop) {
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

	this.instance_2 = new lib.Path_0_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(141,66,1,1,0,0,0,40.2,32.4);
	this.instance_2.alpha = 0.66;

	this.instance_3 = new lib.Path_1_16();
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

	this.instance_6 = new lib.Path_4_2();
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
	this.shape_22.graphics.f("#FFFFFF").s().p("AgrCOIAAghIAhAAIAAjAIgjAfIgTgWIBAhDIAgAAIAAABIAAgBIAAD6IAgAAIAAAhg");
	this.shape_22.setTransform(712.1,126.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSAYQgHgIAAgQQAAgRAHgHQAHgIALABQANAAAGAHQAHAJAAAPQAAAQgHAIQgGAJgNAAQgLAAgHgJg");
	this.shape_23.setTransform(693.7,137.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_24.setTransform(682,132.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgFIAAgfIAAgMIgCgKQgCgEgEgDQgEgCgHAAIgHACQgFABgDAFQgDADgCAHQgCAHAAAKIAAAKIggAAIgCgNIgBgLQAAgMAFgKQAEgKAIgGQAIgHALgDQALgEAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAPIAACqIgfAAIgDgTQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAFIgIAGIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKABQAGAAAFgDIAIgHIAAhHg");
	this.shape_25.setTransform(666.4,129);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhECOIAAkbIAtAAIAVABQAKAAAKADQAKADAKAHQAJAGAHALQAHALAEARQAEARAAAZIAABRQAAAZgEARQgEARgHALQgHALgJAGQgKAHgKADQgKADgKAAIgVABgAgZBwIALAAQAMAAAGgDQAIgDAFgIQADgHACgNQACgNAAgUIAAhXQAAgUgCgNQgCgNgDgIQgFgHgIgDQgGgDgMAAIgLAAg");
	this.shape_26.setTransform(651.1,126.2);

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

	this.instance_7 = new lib.Path_5_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(640,181.1,1,1,0,0,0,79,19.9);
	this.instance_7.alpha = 0.66;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgrCOIAAghIAhAAIAAjAIgjAfIgSgWIA/hDIAgAAIAAABIAAgBIAAD6IAgAAIAAAhg");
	this.shape_35.setTransform(412.3,931.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgSAYQgHgIAAgQQAAgRAHgHQAHgIALAAQANABAGAHQAHAJAAAPQAAAPgHAJQgGAJgNAAQgLAAgHgJg");
	this.shape_36.setTransform(393.9,942.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgRByIg0jjIAqAAIAWB4IAFAxIABAAIAGgxIAWh4IApAAIg0Djg");
	this.shape_37.setTransform(382.5,934.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgyCOIAAkbIArAAIAAD5IA6AAIAAAig");
	this.shape_38.setTransform(370,931.5);

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

	this.instance_8 = new lib.Path_1_5();
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

	this.instance_9 = new lib.Path();
	this.instance_9.parent = this;
	this.instance_9.setTransform(533,1240.3,1,1,0,0,0,52.2,54.2);
	this.instance_9.alpha = 0.602;

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EF5046").s().p("Ag0BxIgTgLIALgYIAJAHIAKAGIALAFQAMAFAPAAQAYAAALgNQAHgKABgLQAAgKgDgGQgDgLgMgJIgNgHIgcgPQgQgIgIgIQgIgIgFgHQgJgQAAgZQAAgZASgSQASgSAdAAQASAAAPAEQAOAFAIAHIgGAYQgVgQgbAAQgQAAgIALQgKALAAARQAAAIADAHQAEALAOAKIAOAIIAcAOIAMAHIAMAJQARASAAAcQAAAcgTATQgSATgfAAQghAAgWgMg");
	this.shape_70.setTransform(544.3,1262.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EF5046").s().p("AgMB6IhcjzIAfAAIBKDIIBKjIIAeAAIhcDzg");
	this.shape_71.setTransform(523.8,1262.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AkWCrQhRg8gvhYQgyhagHhnIOeAAQgGBngxBaQgwBYhQA8g");
	this.shape_72.setTransform(533.1,1262.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3EBCA4").s().p("AjoDJQhpg+g/hpQg/hrgBh/IOhAAQAAB/hABrQg+BphpA+g");
	this.shape_73.setTransform(533.1,1262.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgJAtQgEgFgBgGIAAhDQABgGAEgEQAEgFAFAAQAGAAAFAFQADAEAAAGIAABDQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_74.setTransform(530.2,1206.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgJAsQgFgEAAgHIAAhCQAAgGAFgEQAEgFAFAAQAGAAAEAFQAEAEAAAGIAABCQAAAHgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_75.setTransform(537.5,1207.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgJAsQgFgEAAgGIAAhDQAAgGAFgEQAEgFAFABQAGgBAEAFQAEAEABAGIAABDQgBAGgEAEQgEAEgGABQgFgBgEgEg");
	this.shape_76.setTransform(544.8,1208);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgJAsQgFgEAAgGIAAhDQAAgGAFgEQAEgFAFABQAGgBAEAFQAEAEABAGIAABDQgBAGgEAEQgEAEgGABQgFgBgEgEg");
	this.shape_77.setTransform(552.1,1208);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AiSAVQgJAAgGgGQgGgHAAgIQAAgIAGgGQAGgGAJAAIElAAQAJAAAGAGQAGAGAAAIQAAAIgGAHQgGAGgJAAg");
	this.shape_78.setTransform(503.4,1188.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BD4440").s().p("AjABnIEejNQA0ARAZAwQAWArAABAIAAAhg");
	this.shape_79.setTransform(555.3,1216.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EF5046").s().p("AltDDIAAmFIDzADIAGA4QAPA7ArAUQBSAmEgAAQAcAAAaAIIkfDNg");
	this.shape_80.setTransform(528.1,1207.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AlzAZQgRAAgOgNQgMgMAAgQIAAgIIM9AAIAAAIQAAAQgMAMQgNANgSAAg");
	this.shape_81.setTransform(533.1,1229.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFDD7B").s().p("AlIFIQiIiHAAjBQAAi/CIiJQCJiIC/AAQDBAACHCIQCJCJAAC/QAADBiJCHQiHCIjBAAQi/AAiJiIg");
	this.shape_82.setTransform(533.1,1242.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AlwFxQiZiZAAjYQAAjYCZiYQCYiZDYAAQDZAACZCZQCYCYAADYQAADYiYCZQiZCZjZABQjYgBiYiZg");
	this.shape_83.setTransform(533.1,1242.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.instance_9},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).wait(1));

	// barLayer
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EF5046").s().p("AgNCPQgIgBgHgDQgJgEgHgFQgHgGgFgKQgGgJgDgOQgDgNgBgTIAAh3QABgSADgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAHgDAIgBIANgBIAOABIAPAEQAIACAIAGQAGAFAGAKQAFAJAEAOQAEANAAATIAAB3QAAATgEANQgEAOgFAJQgGAKgHAGQgHAFgIAEIgPAEIgOABgAgShmQgGAIgBATIAACYQABASAGAIQAGAIAMAAQANAAAGgIQAHgIAAgSIAAiYQAAgTgHgIQgGgJgNAAQgMAAgGAJg");
	this.shape_84.setTransform(726.3,683.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EF5046").s().p("AgNCPQgIgBgHgDQgJgEgHgFQgHgGgFgKQgGgJgDgOQgEgNAAgTIAAh3QAAgSAEgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAIgDAHgBIANgBIAOABIAPAEQAIACAHAGQAIAFAFAKQAFAJAEAOQADANABATIAAB3QgBATgDANQgEAOgFAJQgFAKgIAGQgIAFgHAEIgPAEIgOABgAgShmQgHAIAAATIAACYQAAASAHAIQAGAIAMAAQANAAAGgIQAHgIAAgSIAAiYQAAgTgHgIQgGgJgNAAQgMAAgGAJg");
	this.shape_85.setTransform(708.9,683.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EF5046").s().p("AgNCPQgIgBgIgDQgIgEgHgFQgHgGgGgKQgFgJgDgOQgEgNABgTIAAh3QgBgSAEgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAIgDAHgBIANgBIAOABIAQAEQAHACAHAGQAIAFAFAKQAGAJADAOQADANAAATIAAB3QAAATgDANQgDAOgGAJQgGAKgHAGQgIAFgHAEIgPAEIgOABgAgShmQgHAIABATIAACYQgBASAHAIQAGAIAMAAQANAAAHgIQAFgIAAgSIAAiYQAAgTgFgIQgHgJgNAAQgMAAgGAJg");
	this.shape_86.setTransform(691.6,683.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EF5046").s().p("AgrCOIAAghIAhAAIAAjAIgjAfIgTgWIBAhDIAgAAIgBABIABgBIAAD6IAhAAIAAAhg");
	this.shape_87.setTransform(676,683.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EF5046").s().p("AgSBpQgHgIAAgQQAAgSAHgHQAHgIALAAQAMAAAIAIQAGAIAAARQAAAPgGAJQgIAIgMAAQgLAAgHgIgAgSg3QgHgJAAgPQAAgSAHgIQAHgHALAAQAMAAAIAIQAGAIAAARQAAAPgGAIQgIAJgMAAQgLAAgHgIg");
	this.shape_88.setTransform(657.7,686.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EF5046").s().p("AAcByIgchPIgBAAIgcBPIgpAAIAwhzIgthwIArAAIAYBLIAZhLIApAAIgsBsIAxB3g");
	this.shape_89.setTransform(646.1,686.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EF5046").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgHQAKgHANgHIANgGIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHABQgFADgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAIIgHAJIgGAMQgCAHAAAIQAAAOAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_90.setTransform(630.3,686.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EF5046").s().p("AA3COIAAheIABgqIABgjIACgeIABgUIgDAAIgrC4IgaAAIgri4IgDAAIABAUIACAeIAAAjIABAqIAABeIgoAAIAAkbIA4AAIAbBuIAHAiIAEAfIABAAIAFgfIAHgiIAchuIA3AAIAAEbg");
	this.shape_91.setTransform(611.4,683.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#BBBDBF").ss(2).p("AClAAIlJAA");
	this.shape_92.setTransform(671.3,1072.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#BBBDBF").ss(2).p("ACmAAIlKAA");
	this.shape_93.setTransform(668.4,840.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#BBBDBF").ss(2).p("ACmAAIlKAA");
	this.shape_94.setTransform(668.4,950.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("EgARAiAQgHgHAAgLMAAAhDbQAAgKAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAKMAAABDbQAAALgHAHQgIAHgKAAQgJAAgIgHg");
	this.shape_95.setTransform(655.8,966.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(3).p("EADDAl2ImFAAMAAAhIoQAAhQA5g5QA6g6BPAAQBRAAA5A6QA5A5AABQg");
	this.shape_96.setTransform(667.1,955.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D0D2D3").s().p("EgDCAl2MAAAhIoQAAhQA5g6QA5g4BQAAQBRAAA5A4QA5A6AABQMAAABIog");
	this.shape_97.setTransform(667.1,955.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]}).wait(1));

	// Layer 18
	this.instance_10 = new lib.clouds_group_pine();
	this.instance_10.parent = this;
	this.instance_10.setTransform(456.4,180.7,1,1,0,0,0,456.4,180.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Layer 4
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6FB77F").s().p("ArnDEICGhJIHxCPInjjDIB4hMIHRDgInFkeICGhKIIaF9InjnKIEBhUIE0H6IjgohIDwgbIBAIxIBAoQICTA9IiSHCIDemBIBWApIkiGqIniBvg");
	this.shape_98.setTransform(115.1,574.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6FB77F").s().p("AmnBRIAhgrIDWCCIjBi0IA7hFICrDwIhzkiICAgxIAeFDIAXlIICXgbIh7FeICrlHIBXABIiZEDICvjoIBRAGIjBDdIDWjIIBXAAIk8EQIkQBLg");
	this.shape_99.setTransform(226.6,720.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#CCCCCC").s().p("AjuAGQAJg0A2hPIA1hEICigZIA2AiQA7AoAWAfQAWAfAjBxQARA4ANAzIoLBRQAIiAAPhVg");
	this.shape_100.setTransform(206.7,722.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E6E6E5").s().p("Ak2CiQAPiAAOgcQAMgcAsh9IAph3IAvgHQA4gHAzgCQCfgGAnAzQAmAzA/C+QAfBfAXBVIqGBkQAGg6AHhAg");
	this.shape_101.setTransform(206,716.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CCCCCC").s().p("AjnEvQgEjDAIhAQAJg/Awi4IAvisQgCgUAFgXQAJgvAjgQQAjgPAeAwQAOAYAIAcIgFBmQgCBtAPAkQAPAlAyA/QAdAkBCBOQApAyAKCbQAGBNgDBEInLBGQgDhUgChig");
	this.shape_102.setTransform(166.9,692.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E6E6E5").s().p("AlFFbQAAi+AWhlQAKgsAKhmQAMh6AIgxQAfjNBSglQBTglBhBFQAxAiAhAqIgDCQQAGCVAuAbQAvAbAlA/QATAgAKAaIA1FYIqJBkQgEhLABhfg");
	this.shape_103.setTransform(167,691.2);

	this.instance_11 = new lib.Path_9();
	this.instance_11.parent = this;
	this.instance_11.setTransform(202.7,740.5,1,1,0,0,0,45.8,10.8);
	this.instance_11.alpha = 0.41;

	this.instance_12 = new lib.Path_1_3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150.7,740.4,1,1,0,0,0,45.8,10.8);
	this.instance_12.alpha = 0.41;

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6FB77F").s().p("AmnBRIAigrIDVCCIjBi0IA7hFICsDwIh0kiIB/gxIAfFDIAXlIICXgaIh7FeICrlIIBXABIiZEDICvjoIBRAGIjBDdIDWjHIBWAAIk7EQIkQBJg");
	this.shape_104.setTransform(157.5,911.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EBA24D").s().p("AhDgWICHiSIgTFRg");
	this.shape_105.setTransform(139.8,914.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FAE485").s().p("AhhiJIC/AzIAEDgg");
	this.shape_106.setTransform(123.6,920.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CD6C38").s().p("Ag6hvIB0C/IhwAhg");
	this.shape_107.setTransform(138.9,923);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F2BC5F").s().p("AijAVIFHhdIiICRg");
	this.shape_108.setTransform(130.2,904.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EBA24D").s().p("AhugCIB+iQIBfElg");
	this.shape_109.setTransform(135.6,882.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FAE485").s().p("AhbiVIC3A3IhqD0g");
	this.shape_110.setTransform(115.3,891.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CD6C38").s().p("Ag4h6IDcCWIlHBfg");
	this.shape_111.setTransform(130.2,894.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F2BC5F").s().p("AiaARIE1hYIh/CPg");
	this.shape_112.setTransform(121.7,874.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#CD6C38").s().p("AhCiKIDdC8Ik1BZg");
	this.shape_113.setTransform(121.7,862.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FAE485").s().p("Ag1jCIBrBwIhXEVg");
	this.shape_114.setTransform(109.5,857.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EBA24D").s().p("AhEAJICJicIhQEmg");
	this.shape_115.setTransform(164.4,906.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#CD6C38").s().p("AAjh1IA5CJIi3Big");
	this.shape_116.setTransform(154,919.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FAE485").s().p("AgsioIBsBmIh/Drg");
	this.shape_117.setTransform(151.1,914.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F2BC5F").s().p("Ah7gXID3g2IiKCbg");
	this.shape_118.setTransform(159,899.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EBA24D").s().p("AhWAiIAtjUICAFlg");
	this.shape_119.setTransform(162.7,873.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#CD6C38").s().p("AgwhjICsCQIj3A2g");
	this.shape_120.setTransform(159,887.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FAE485").s().p("AhTiSICnBfIhKDGg");
	this.shape_121.setTransform(145.6,882.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F2BC5F").s().p("AhqALIDVh0IgtDTg");
	this.shape_122.setTransform(147.9,866.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#EBA24D").s().p("AhNALIgHh3IAQAMQAYAWAmA1QA4BPAjAzg");
	this.shape_123.setTransform(150.1,845.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#CD6C38").s().p("Ag3hqICiBhIjVB0g");
	this.shape_124.setTransform(147.9,856.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FAE485").s().p("Ah3ipIDvB+IgzDWg");
	this.shape_125.setTransform(130.3,850.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F2BC5F").s().p("Ah3g+IDoAGIAHB3g");
	this.shape_126.setTransform(130.3,839.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FAE485").s().p("AhwhmIDIA7IAZCSg");
	this.shape_127.setTransform(101.3,925.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#CD6C38").s().p("Ah0hJIDpCDIjPAQg");
	this.shape_128.setTransform(121.7,928.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#EBA24D").s().p("Ah0AHIAmiQIDDETg");
	this.shape_129.setTransform(121.7,920.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F2BC5F").s().p("Ah2ANIDthVIgmCQg");
	this.shape_130.setTransform(101.9,913.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FAE485").s().p("AhLi5ICXCdIhGDWg");
	this.shape_131.setTransform(89.4,896.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#CD6C38").s().p("AgxhrICoCAIjtBWg");
	this.shape_132.setTransform(101.9,904.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EBA24D").s().p("AhUAVIBbiqIBOErg");
	this.shape_133.setTransform(105.4,891.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F2BC5F").s().p("Ah5hGIDzgPIhcCrg");
	this.shape_134.setTransform(94,885.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FAE485").s().p("AgigWQAEhBAIgfIAIgSIA5BpIhVCoQACg9AGhig");
	this.shape_135.setTransform(86.1,864.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#CD6C38").s().p("AgjhUICdCaIjzAOg");
	this.shape_136.setTransform(94,869.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EBA24D").s().p("AhugRIAhiYIC8FUg");
	this.shape_137.setTransform(126.1,850.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EBA24D").s().p("AhOApICIjrIAVGFg");
	this.shape_138.setTransform(98.3,857.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F2BC5F").s().p("AhGgjICNgoIghCXg");
	this.shape_139.setTransform(111.2,841.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F2BC5F").s().p("AhgANIDBiCIiHDrg");
	this.shape_140.setTransform(94.3,849.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#61B26F").s().p("Ag3ELQgQgfgugIQgugIg4AYIguAZQAGgOAQgTQAhgnAwgdQAngXA4AOQAdAHAUALQgQgSgfgTQg8gohEgKQg8gIhWALIhLANIA/gaQBLgcA5gNQA4gNBVAiQApARAgATQgVgagngiQhMhFhagtQhZgsheAMQgdAEgbAJIgUAIIAUgPQAagRAdgOQBegsBgAJQBgAKBQBKQAnAmATAjQgKgegDgqQgEhTAvg6QAvg4BkgLQAzgGApAGIg8AmQhEAxgeA3QgeA2AfBVQAQApAVAfQACgaAKgjQAXhIAxgwQBIhGBgALQAwAFAhATQgrAEgyARQhkAigkA+QgnBBAYBZQANAtAUAfIlIBqQABgOgIgQg");
	this.shape_141.setTransform(100.6,816.2);

	this.instance_13 = new lib.Path_90();
	this.instance_13.parent = this;
	this.instance_13.setTransform(135.5,934.3,1,1,0,0,0,51.2,13.2);
	this.instance_13.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.instance_12},{t:this.instance_11},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98}]}).wait(1));

	// Layer 3
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#386741").s().p("AhmB4QABgJgBgMQgBgXgLgOQgKgOgPgJIgMgHIATABQAWACASAFQARAEANANQAHAHADAGQADgHABgKQADgUgHgRQgHgRgMgOIgJgMIAaARQAbARAGAJQAKAMACAHQAJgvgJggQgGgTgLgbIgKgXIAOALQAQAQAIATQANAfACARQAEgrATgbQALgRAVgNIASgKIgNAvQgNAyABAUQABASAMAbQAGANAGAJQAKgdANgKQAJgHAQgIIAOgFIgNARQgOAWgDAUIgKBLg");
	this.shape_142.setTransform(174.9,465.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F1B64D").s().p("AQLN+QhohBhZhVQhVhSguhNQhUiMnfkuQm+kZkdh0QlTiJl/igQncjIhrg2Qg8gegZgsQgagsAXgkQAYgnBMgNQBWgPCKAWQCQAYCCA0QBXAiCMBLQCkBXBQAkQCaBGCqAwQClAvFDBEQC8AoGcBTQMICeDbBdQETB1CNCjQA8BGAKA1QAKA2gsATQhCAciygRQjYgUhRAJQg+AHAiBcQAMAgBZCoQBKCKAJBFQAOBjhhATQgnAHgqAAQinAAjJh8g");
	this.shape_143.setTransform(238.5,916.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F6D1A3").s().p("AnkIqQhBgpgug4Qgug4gPg4QgchlBbh0QBKheCjh0QCth7FkjGQGXjhBNALQAiAFiiBtQlODhgoAdQomGLCVCeICSCWQA1A3AHAUQAIAWgiAPQgNAGhnAfQgxAPgxAAQhmAAhmhAg");
	this.shape_144.setTransform(46.3,723.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F1B64D").s().p("Av8MyQkZh1gci2QgbivDOkNQCwjkKCkhQFuimKGjpQCvg/D8gHQB0gEA7ARQBDASgWAnQgSAikFCfIotFUQscHzgVDEQgMBvAkA9QAZAqA6AbQBGAgAHAHQAdAagUA4QgYBAhYAqQhWAph/AMQg2AFg1AAQjlAAjihfg");
	this.shape_145.setTransform(91.7,707.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F6D1A3").s().p("AjoGLQgmgZg1hLQg4hQgngfQhCg1higDQhZgChnANQhkAPglACQg9AFgfgUQgkgWgShCQggh3CbgaQA7gKBogBIC9ACQBVABAwgzQAcgdAjhRQAjhRAegfQAygyBYgBQBYgBBLAeQAyAUBBAuQBLA0AaANQA5AdA8gCQBSgDDPgkQDHgkBwAAQBHAAAqBSQAlBLAABrQAABqgmBIQgpBRhHgDQhAgDgvgoQgKgJhAhLQgvg2gzgYQhIgghtAGQhsAGhIBAQgwArg4BjQg+BuggAlQg+BHhZAOQgZAEgWAAQg9AAgsgeg");
	this.shape_146.setTransform(458.4,1104.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F1B64D").s().p("AlDKZQg9hCg1iTIgph4QgXhEgSgnQgyhshDgJQhGgKgfAtQgQAYgUBVQgUBRgcAkQgsA4hbAGQhfAGhQiWQhHiGgijKQghjHAXiSQAYifBTgKQAvgGA4AhQAXANBRA+QBFA1AyAWQBIAgBKgHQBJgGARg2QAGgVAAhgQgBhRAcgqQApg9BwgRQBxgSBjAqQBFAeBVBJQBtBgAUANQBIAxBEgHQBFgGBEgZQAfgMBWgnQCXhHCKgGQC0gHCLC7QB9CoAYDZQAJBZgkBGQgbAyg+A5QhZBQgKALQgwA3gHA7QgSCYgzBPQg8BehxADQg0ABgah7QgGgdgej2QgYi+gkheQg1iEhggNQhfgNg4B3QgdA/g0DWQgwDKgyBZQhLCLh+ANQgQABgQAAQhrAAhJhQg");
	this.shape_147.setTransform(465.3,1115.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F6D1A3").s().p("AjpEVQg0grAlhmQA4h5ANg6QAIgkACgxIADhLQAGhNAvgXQAkgSARApQALAbAJBMQAJBWAIAdQAPA4AfAEQAgAFAHgXQAEgNgDgqQgEgpAIgTQALgdAngEQApgFAkAzQAfAuAUBMQATBHABBDQABBFgUAcQgoA6i8ATQg0AGgrAAQhvAAgtglg");
	this.shape_148.setTransform(258.8,544);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F1B64D").s().p("AmqLbQhlgOgbgcQgsguBDi5IA5iWQAghUAGgtQAFgmgBhcQAAhqACgqQAMiuBcgGQAygDAdAyQAQAbAaBXQAYBRAYAiQAkA0A9AAQB5ABAmiaQAYhjgHjGQgGieALg9QANhSA0gfQAqgZAbBXQAPAyAWB4IAcCAQAOAyATADQAKABgCgqIgHhhQgHiRAvgMQAygMAOCMIAJCCQAGBTAIAtQAOBNA0DyQAoDYgWA6QgaBDg2AEQgyAEgpgxQgQgUgGhQIgIigQgMjag4gRQhBgUgPBMQgHAhAEBmQAAAOANBRQANBVAEA7QAMDHhPBcQhZBnknASQgrACgoAAQhIAAg/gIg");
	this.shape_149.setTransform(275.5,508.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#61B26F").s().p("AinC9QAFgJAAgNQAAgagdgTQgdgSgugBIgpADIAbgQQAjgRArgFQAigFAjAbQARANAKAOQgGgRgOgXQgcgtgrgbQgmgWhAgSIg3gNIA0ABQA8ACAsAIQArAIAuAwQAYAYAOAWQgFgYgPgjQgchFgvg5Qgug5hFgUIg7gIIBDgJQBPgDA/AjQA/AkAdBKQAPAlACAeQACgYAMgdQAYg6A1gZQAygYBKAWQAkALAbAQQgYABgfAHQg/ANgnAdQgmAcgIBCQgDAiAEAbQAJgRAUgWQAngqAzgRQBIgaA+AjQAgAQAQAXQgfgJgogDQhQgGgtAfQgyAigNBEQgGAiADAbg");
	this.shape_150.setTransform(179.1,458.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#386741").s().p("AgECKQgVgMgRABQgRABgQAGIgMAGQASgYAWgTQAOgMASgDQAJgCAGABQgEgGgHgHQgPgOgSgEQgSgDgTAAIgPABIAdgMQAfgMAKAAQAQgBAGACQgIgJgNgKQgZgTgTgGQgUgGgcgGIgZgFIASgFQAVgFAVAEQAiAHAPAIQgJgHgJgLQgUgVgHgUQgHgTAAgYIADgVIAeAmQAiAnARAKQAaARAsACQgSgZgBgRQgBgLACgRIADgPIAIAVQAKAYAPAOQAXAWAhAcIiDCrIgQgNg");
	this.shape_151.setTransform(135,366.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#61B26F").s().p("AgGEOQAEgnAQgoQAOggAogPQAVgIARgCQgSgEgaABQg1ABgtAYQgoAUgwAtQgYAXgPASQAqhLAwg1QAcghBAgPQAigHAagBQgXgIgmgFQhLgMhIALQhJAKgzAxQgaAYgMAWQAHgbAUgjQAmhFA/gkQA+gjBOANQAmAHAcANQgUgNgSgaQglgzAGg6QAFg4A4gzIA3gpIgVAzQgUA9AEAwQAFAwA1AoQAbAVAaAKQgKgRgIgcQgQg3AKg1QAOhMA+gjQAUgLAWgFQALgDAHgBIgwA3QguBBAEA3QAEA8AzAuQAaAWAZALIicDTQgFgJgLgGQgXgNgfAPQgfAOgYAoQgLAUgGARQgBgMABgUg");
	this.shape_152.setTransform(121.3,361.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F6D1A3").s().p("AkTEZQgMg3gOieQgTjWBAiOQAdhABBgGQAggDBIARQAjAIBKgQQApgIBHgQQAwgIAbAQQAgATAUA9QA1CmhyAyQgzAXg5hKIgrg2QgYgagVACQgsADgvB6QgrBvAABNQAABPgbBOQgeBbgwASQgGACgGAAQglAAgUhjg");
	this.shape_153.setTransform(286.3,406.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F1B64D").s().p("AhSJCQgohqgYh+QgNhJgNkyIgKkkIkQh9IktgoIDniaIEggmQE2gkBwADQBwADDwBRQB5ApBhAoIhlCnIhaA6IAMCUQAMCfgBAuQgDBIgoB7QgsCLgpAEQgoAFg3iAQgrhngRhRQgGgcgTgTQgTgSgXgBQg4gDgHBfQgDAjgEB4QgFB7gLBUQggEDhfAKIgDAAQgzAAg1iKg");
	this.shape_154.setTransform(265.6,400.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D76837").s().p("EAYJBJWQgjhngPiCIgIhsQgeg9g8g+Qh5h9iYgIQhRgEgkA8QgXAogMBiQgNBrgNAhQgaBBhCACQg+ACgYkZQgVmhgVkOQgmnzhVljQhyngjUkrQjMkgqhlxQj9iKl/i6Iqck/QspmFlHjmQnVlKBZkAQCknXVgowQGuivHzijQD6hRCjgvIDE0MIgPsrIhnkQImLggIEJjvIHFhsIBShzII8AkIAMCZIF/CXIi/FMIAYTOIC1MhQi4BHkPB0QoeDom0DjQpkE/k3EGQmGFJBoDfQCaFNLfEtQHgDFMRDHQNqDdKWGUQIQFDFxGpQEIEvCdFEQBPCiAaBlIATBkQAUB5gBBpQgBFSjGA3QhnAcgtCGQgSA0ghDWQgaCngxBCQhFBeiVgeQhbgRgthkQgcg8gYiQQgZiOgXgwQgnhThSAHQhQAHghDBQgMBHgLB+IgSDkQgaEkgzCTQhKDRiVAfQgpAJgmAAQjVAAhgkXg");
	this.shape_155.setTransform(262.5,804.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FAE485").s().p("AjCj2IGFBdIlJGQg");
	this.shape_156.setTransform(341.6,487.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F2BC5F").s().p("AkFAYIILiLIiHDng");
	this.shape_157.setTransform(348.4,460.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#CD6C38").s().p("AgTjIIFxDoIq7Cpg");
	this.shape_158.setTransform(363.1,492.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FAE485").s().p("Ai9jSIF7BbIj+FKg");
	this.shape_159.setTransform(328.6,442.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EBA24D").s().p("Ai4AAICHjoIDqHRg");
	this.shape_160.setTransform(379.6,472.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CD6C38").s().p("AgHikIENC9IoLCNg");
	this.shape_161.setTransform(348.4,446.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F2BC5F").s().p("AjxANIHkh0IhqDPg");
	this.shape_162.setTransform(333.9,419.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FAE485").s().p("AiWioIEtB2IiTDbg");
	this.shape_163.setTransform(309.2,404.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EBA24D").s().p("AiGAJIBpjPICkGNg");
	this.shape_164.setTransform(361.1,429.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#CD6C38").s().p("AhehtIFRBnInkB0g");
	this.shape_165.setTransform(333.9,410);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EBA24D").s().p("AiogFIB6hbIDXDBg");
	this.shape_166.setTransform(341.2,399.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F2BC5F").s().p("AjTg6IGnAbIh5Bag");
	this.shape_167.setTransform(315.3,393.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FAE485").s().p("AjnlPIHPDJImLHWg");
	this.shape_168.setTransform(351.3,546.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F2BC5F").s().p("AldgPIK7ipIjsFxg");
	this.shape_169.setTransform(363.1,514.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#CD6C38").s().p("AgijqIHRD1Qg/AZhaAfQixA9h6AeQh8AeibAbIiCAUg");
	this.shape_170.setTransform(378,556.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EBA24D").s().p("AjoA+IDslxIDlJng");
	this.shape_171.setTransform(397.8,526.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FAE485").s().p("AiugkIFeh3IiHE3g");
	this.shape_172.setTransform(354.1,393.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F2BC5F").s().p("ACCj3IAuF3IleB3g");
	this.shape_173.setTransform(354.1,365.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#CD6C38").s().p("AgxknIFxC+QgVAegoAqQhQBTheA7QhcA8imBFIiSA6g");
	this.shape_174.setTransform(453.1,527.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FAE485").s().p("Aj5kzIHzAZIkNJOg");
	this.shape_175.setTransform(423.1,526.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EBA24D").s().p("Ai4BAIBsk9IA3BiQA+ByAsBQQAsBRAhBMQAPAlAIAVg");
	this.shape_176.setTransform(466.6,491.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F2BC5F").s().p("AkvCGIJfkkIhsE9g");
	this.shape_177.setTransform(428.5,482.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FAE485").s().p("AjojoIHRAAIjmHRg");
	this.shape_178.setTransform(397.9,472.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#CD6C38").s().p("AhJjoIF5CsIpfElg");
	this.shape_179.setTransform(428.5,472.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EBA24D").s().p("Ai8A3IBQkZIBABZQBDBhAYAoQAnBBBnCig");
	this.shape_180.setTransform(440,443.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F2BC5F").s().p("AkQCNIIhkZIhREZg");
	this.shape_181.setTransform(401.9,435.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FAE485").s().p("AijjGIFHAAIijGNg");
	this.shape_182.setTransform(374.5,429.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#CD6C38").s().p("AhtjGIF+B1IohEYg");
	this.shape_183.setTransform(401.9,429.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EBA24D").s().p("Ai+BNIBckOIA2BIQA+BUAuA5QBJBfA2BPg");
	this.shape_184.setTransform(410,401.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#F2BC5F").s().p("AjRCIIGjkPIhcEPg");
	this.shape_185.setTransform(379.1,395.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#CD6C38").s().p("AhKibIEcApImjEOg");
	this.shape_186.setTransform(379.1,393.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#EBA24D").s().p("Ah2CnIgul2IA0A/QA9BJAoA2QA9BWBzCLg");
	this.shape_187.setTransform(383.6,361.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#CD6C38").s().p("AEyDjQjKAAihgRQihgRiQgiIhwgfIHzliIHCHCQg8ADhVAAIgYAAg");
	this.shape_188.setTransform(172.6,568.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#EBA24D").s().p("AjgiBIHBjAIAAKDg");
	this.shape_189.setTransform(197.6,558.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#386741").s().p("AidgpIARgNQARgPAFgRQAFgQgBgSIgCgNIAKAPQAMATAGARQAHARgCASQgBAJgDAFIAQgGQASgKAJgQQAPgaADgXIACAfQACAhgDAKQgEAQgEAGIAYgPQAbgRALgRQAUgbATglIAAASQgCAXgLASQgKASgLAOIgIAJIAXgLQAagMAVgBQAUgBAXAIQAMAEAHAFQhUAegYAUQgQANgNAZIgLAXIARgEQASgEALACQAQAFAYANIgXABQgaACgRAKIhBAmg");
	this.shape_190.setTransform(448.1,432.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FAE485").s().p("Ah7kzIF1EEInzFjg");
	this.shape_191.setTransform(150.1,550.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F2BC5F").s().p("AmbiBIM3BEInBC/g");
	this.shape_192.setTransform(178.9,532.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#CD6C38").s().p("AmbBHIHtjRIFKEVg");
	this.shape_193.setTransform(178.9,512.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#EBA24D").s().p("AjEg8IGKicIhCGwg");
	this.shape_194.setTransform(206.9,504.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FAE485").s().p("AhXjXIFODeIntDRg");
	this.shape_195.setTransform(162.4,498.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#F2BC5F").s().p("AlshvILZBEImKCbg");
	this.shape_196.setTransform(190.1,487.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#CD6C38").s().p("AlsBmIGtkPIEsFTg");
	this.shape_197.setTransform(190.1,466.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#EBA24D").s().p("AjGheIGMiWIhgHpg");
	this.shape_198.setTransform(216.5,458.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FAE485").s().p("Agmj8ID9DqImtEPg");
	this.shape_199.setTransform(175.1,451.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#F2BC5F").s().p("AlFh0IKKBVImMCUg");
	this.shape_200.setTransform(203.8,437.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FAE485").s().p("ABckKICEGEIm/CRg");
	this.shape_201.setTransform(193.6,399.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FAE485").s().p("AiMDIQAdhgAmhjIBKjIIAehRICEFGIlFDjQAHgcAPgxg");
	this.shape_202.setTransform(76.2,526.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#61B26F").s().p("ACsEcQguhCg1gPQg5gRg8AhIgyAkIiRjaIAUgKQAUgRgEghQgEgjgdgjIgcgeIAeAKQAkASAfAdQAZAYACAqQAAAWgFAQQAKgOAJgYQARgzgHgyQgGgtgag9IgZgzIAgAqQAlAwAUAnQAWAmgIBCQgEAhgIAZIAhg0QAkhDAOhIQAOhHgbhCIgegzIAwAuQA0A8AMBGQANBHgnBGQgMAWgQASIgNAPIAxgXQA+gQA0AXQAzAZAdBGQAOAjAFAfQgQgSgYgTQgzgogugNQgvgLg5AkIguAnIAwgCQA6AEAuAcQBCAnAMBHQAGAigHAcQgMgegXghg");
	this.shape_203.setTransform(455.3,422.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#CD6C38").s().p("ADZDfQiDglh2gyQh3gxhjg7IhKgxIFEjjIFFHxQgqgIhCgSg");
	this.shape_204.setTransform(92.5,556.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EBA24D").s().p("Ajhi9IHDh2Ih/Jng");
	this.shape_205.setTransform(115.1,550.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#F2BC5F").s().p("AklijIJLDRInDB2g");
	this.shape_206.setTransform(108.3,515.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FAE485").s().p("AgwAVQAmhjAjhRIAdg/IBKEBIj/C8QATgsA8ieg");
	this.shape_207.setTransform(92.1,476.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#CD6C38").s().p("AkjgKID/i8IFIGNg");
	this.shape_208.setTransform(108.5,499.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EBA24D").s().p("Ajyi0IHmgjIifGvg");
	this.shape_209.setTransform(129.2,498.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#F2BC5F").s().p("AkXiCIIvDgInyAlg");
	this.shape_210.setTransform(125.6,467.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FAE485").s().p("AgbgIIBwjmIA8D5IkhDkQAqhgBLiXg");
	this.shape_211.setTransform(112.1,430.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#CD6C38").s().p("AkXABIEhjiIEOHDg");
	this.shape_212.setTransform(125.6,453.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#EBA24D").s().p("AjejGIG9g2IiwH5g");
	this.shape_213.setTransform(148.9,451.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#F2BC5F").s().p("Aj8h8IH5DDIm9A2g");
	this.shape_214.setTransform(145.9,418.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FAE485").s().p("AgbgJQA0hOA4hKIAvg7IArDxIlVDIQBGh8BJhqg");
	this.shape_215.setTransform(137.7,384.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#CD6C38").s().p("Aj8AFIFVjHICkGFg");
	this.shape_216.setTransform(145.9,406.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#EBA24D").s().p("Ajvh7IHfiPIk7IVg");
	this.shape_217.setTransform(178.8,399.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#F2BC5F").s().p("AkEh4IIJBjIneCOg");
	this.shape_218.setTransform(176.7,374.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#ECA342").s().p("AovCDIoLhkIFfmAIJcilIMJAqIGxEgIkxHuIt7g4Ik6ENg");
	this.shape_219.setTransform(258.8,359.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#EBA24D").s().p("AicAUIE5kMIhuHxg");
	this.shape_220.setTransform(231.6,409.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#CD6C38").s().p("AlFAeIG/iQIDLDlg");
	this.shape_221.setTransform(203.8,422.8);

	this.instance_14 = new lib.Path_91();
	this.instance_14.parent = this;
	this.instance_14.setTransform(315.6,560,1,1,0,0,0,225.6,45);
	this.instance_14.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142}]}).wait(1));

	// Layer 15
	this.instance_15 = new lib.sunlayer();
	this.instance_15.parent = this;
	this.instance_15.setTransform(359.4,325.9,1,1,0,0,0,359.4,325.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// FlashAICB
	this.instance_16 = new lib.Path_11();
	this.instance_16.parent = this;
	this.instance_16.setTransform(315.7,996.8,1,1,0,0,0,20.6,32.4);
	this.instance_16.alpha = 0.68;

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgmA0Qgngzg3gBQA3AAAngzQAmgzAAhHQABBHAnAzQAmAzA3AAQg3ABgmAzQgnAzgBBHQAAhHgmgzg");
	this.shape_222.setTransform(251.1,287.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#6FB77F").s().p("AjmD+Ig2lbIAsgsIAeE+IAMl9IBJhDIg8HJIB2nxIBgADIi2HwIDUnWIBfAzIkWG7IEhl9IAtA1IjuEjIDojtIAmA5IjsDUIDpipIAtA0IlJDWg");
	this.shape_223.setTransform(642.5,572.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#EBA24D").s().p("Ah5hsIDzhGIjzFkg");
	this.shape_224.setTransform(595.4,576.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FAE485").s().p("AhXjXICvC4IiRD3g");
	this.shape_225.setTransform(574.4,568.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#CD6C38").s().p("AhIBoICRj3IAAEfg");
	this.shape_226.setTransform(575.9,580.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#F2BC5F").s().p("AjRhbIGjBxIjzBGg");
	this.shape_227.setTransform(586.6,556.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#EBA24D").s().p("Ahzh1IDohKIhdF/g");
	this.shape_228.setTransform(605.2,539.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FAE485").s().p("AgXi8ICjC2IkXDEg");
	this.shape_229.setTransform(579.6,528.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#CD6C38").s().p("AjRAqIEWjEICNE1g");
	this.shape_230.setTransform(586.6,543.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#F2BC5F").s().p("AjFhaIGMBrIjoBKg");
	this.shape_231.setTransform(597,518.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#CD6C38").s().p("AjFBFIEWj1IB2Fhg");
	this.shape_232.setTransform(597,502.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FAE485").s().p("ABfjaIAtDBIkXD1g");
	this.shape_233.setTransform(591.1,487.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#EBA24D").s().p("Ahwg2ID+hPIkbELg");
	this.shape_234.setTransform(624,582.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#CD6C38").s().p("AiSBOIEmirIgeC7g");
	this.shape_235.setTransform(598,586.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FAE485").s().p("ABhiyIAzC4IkmCsg");
	this.shape_236.setTransform(598,576.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#F2BC5F").s().p("AiYhbIExBoIj+BPg");
	this.shape_237.setTransform(622.9,568);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#EBA24D").s().p("AhegiIC9jLIhgHbg");
	this.shape_238.setTransform(638.5,545.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#CD6C38").s().p("AiYAfIDUinIBdERg");
	this.shape_239.setTransform(622.9,555.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FAE485").s().p("AgNi/IB3DYIjUCng");
	this.shape_240.setTransform(618.3,539.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#F2BC5F").s().p("AiahrIE1AOIi9DKg");
	this.shape_241.setTransform(632.4,531.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#EBA24D").s().p("Ag3gnIBHiHIAJAXQALAoAHBTQAKB8ADBPg");
	this.shape_242.setTransform(642.3,504.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#CD6C38").s().p("AiaBdIDFjHIBwDVg");
	this.shape_243.setTransform(632.4,511);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FAE485").s().p("AhOj4ICxEpIjFDIg");
	this.shape_244.setTransform(626.8,495.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#F2BC5F").s().p("Ah8iUID5CiIhICHg");
	this.shape_245.setTransform(631.4,485.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FAE485").s().p("AhZi7ICzDFIhGCyg");
	this.shape_246.setTransform(542.9,559.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#CD6C38").s().p("Ah2AdIBGixICnEpg");
	this.shape_247.setTransform(556.8,575.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#EBA24D").s().p("AhThSICIiFIAfGvg");
	this.shape_248.setTransform(560.3,568.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#F2BC5F").s().p("AiehiIE8BBIiJCEg");
	this.shape_249.setTransform(549.8,550.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FAE485").s().p("AAwjlIA9EOIjZC9g");
	this.shape_250.setTransform(544.8,517.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#CD6C38").s().p("AieA+IDai7IBiD8g");
	this.shape_251.setTransform(549.8,534.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#EBA24D").s().p("Ahqg+IDVh+IhzF6g");
	this.shape_252.setTransform(566.5,528.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#F2BC5F").s().p("AiJiGIETCQIjVB+g");
	this.shape_253.setTransform(563.4,508.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FAE485").s().p("AhLBeIBUh5QAwhFAdgcQAPgPAFgBIgGCZIjNCAg");
	this.shape_254.setTransform(560.2,480.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#CD6C38").s().p("AiJgIIDNh/IBGEPg");
	this.shape_255.setTransform(563.4,495.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#EBA24D").s().p("AhEhnICJiRIgUHxg");
	this.shape_256.setTransform(612,495.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#EBA24D").s().p("AiXg0IEvimIjpG2g");
	this.shape_257.setTransform(585.4,487.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#F2BC5F").s().p("AhahgIC1AyIiICPg");
	this.shape_258.setTransform(609.7,475.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#F2BC5F").s().p("AiRhFIEpgNIkvClg");
	this.shape_259.setTransform(585.4,473.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#61B26F").s().p("Ak0E0QALgOABgWQADgtgsgnQgtgnhNgLIhEgEIAvgVQA+gVBIAAQA6ABA0A0QAaAbAPAaQgGgegUgqQgohUhEg2Qg8gxhmgtIhZgjIBVANQBkATBGAXQBHAYBGBcQAjAuAUAqQgFgqgThAQglh+hEhsQhEhshvgxQgigPgjgIIgcgEIAggDQAogCApAEQCEAOBiBLQBjBKAlCFQASBDgBAzIAGgZQAKggAQgdQAyheBbgfQBXgeB2A3QA7AbApAhQgngDg1AEQhqAJhFAoQhEAngWBwQgLA5ACAwIA3g7QBIhABWgUQB8gcBhBKQAxAlAYArQgygXhBgPQiEgdhQArQhXAvggByQgQA5ABAvg");
	this.shape_260.setTransform(616.9,438.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#67A7A7").s().p("AhBApQgfgIgDgSQgDgQAcgSQAbgRApgGQApgHAfAJQAfAIADASQADAQgbASQgcARgpAGQgRADgRAAQgUAAgSgFg");
	this.shape_261.setTransform(238.9,869.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#67A7A7").s().p("AhBApQgfgIgDgSQgDgQAcgSQAbgRApgGQApgHAfAJQAfAIADASQADAQgbASQgcARgpAGQgRADgQAAQgVAAgSgFg");
	this.shape_262.setTransform(46.7,789.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#61763D").s().p("AhBApQgfgIgDgSQgDgRAcgRQAbgRApgGQApgHAfAJQAfAIADARQADARgcARQgbARgpAHQgSADgQAAQgVAAgRgFg");
	this.shape_263.setTransform(109.2,732.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#67A7A7").s().p("AgqASQgTgFgBgIQgBgIASgHQASgIAagCQAZgCAUAFQATAEAAAJQABAHgSAIQgSAIgaACIgPAAQgQAAgNgDg");
	this.shape_264.setTransform(273.9,783.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#61763D").s().p("AgCAoQgtgEgfgPQgegOABgPQACgRAggJQAhgJAsAEQAsAEAfAOQAfAPgCAQQgBAQghAJQgXAGgcAAIgZgBg");
	this.shape_265.setTransform(520.1,932.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#67A7A7").s().p("AgDAoQhZgIg+gRQg+gRABgQQACgRBAgGQBBgGBYAIQBZAIA+ARQA+ARgBAQQgCARhAAGQgbACggAAQgrAAgzgEg");
	this.shape_266.setTransform(483.4,728.9);

	this.instance_17 = new lib.Path_92();
	this.instance_17.parent = this;
	this.instance_17.setTransform(575.2,587.7,1,1,0,0,0,52.1,15.2);
	this.instance_17.alpha = 0.66;

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#61763D").s().p("AgGBLQiogPh1ggQh1ggADgfQADgfB5gMQB4gLCoAPQCoAPB1AgQB1AggDAfQgCAfh5AMQg1AFg9AAQhQAAhfgJg");
	this.shape_267.setTransform(616.9,861.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#67A7A7").s().p("AiIA0Qg9gDgCgSQgDgSA5gUQA4gWBTgNQBSgNA9AEQA9ADACASQADASg5AVQg4AWhTAMQg/AKgzAAIgdgBg");
	this.shape_268.setTransform(63.8,699.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#61763D").s().p("EAyuAUNQl8gwjUk5QhChigphwIgchdQiLAaipAKQlTAUichPQhVgrgahNQgUg8AMhiQAUhyAHg4QANhigUg8QgghigJgQQgVgugtgbQgwgdhqgdQhcgYjUgsQkZg6vOCoQkxA1lSBFIkUA6QhkAWh2AtQjrBdhaB8QixD2lIBGQjzAzlhgsQjpgchnjDQgWgsghheQgYhCgQgKQgTgKiMAVQjmAjhEAHQmuAvhbiBQhdiFAljcQAMhFAYhFIAUg3Il7ljQLgjyPIiCQQtiOUrAAQTlAAUPDxQT4DtQtGoIB7MbQivDzj6DpQnHGmljAAQglAAgkgFg");
	this.shape_269.setTransform(398.2,628);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#917556").s().p("AkJLQQg5gGAOl2QAKjDAChRQAEiHgNgcQgNgdgfgfIg5g2QhEhDAKhFQAFggAegJQAWgGA3AEQBTAGAZAAQBGAAA7gQQBagYD7inQByhLAqgXQBEgmAOAPQAWAZjRD9QjyEnghA+QgYAvgkCNQgVBTgsC8QhTFUg5AAIgCAAg");
	this.shape_270.setTransform(667.2,1197.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#74542E").s().p("AqIVIQg0gngXjIQgTidADjFQABhDAqiyIBTlSQBpmzg/goQhXg5gth1QgziCAVifQASiKBnhlQAhggAkgYIAfgRIAVAHQAeAIAsADQCNAJDjgvQDjgvEthwQCWg4BpgvIAGBNQACBqgZCQQgOBQgyBDQgpA3hPBAQgvAmhsBSQhkBQhHBKQiNCTiaHoQgnB4hFDzQg3DDgVA3QhNDJhxDDQh0DKg2AAQgJAAgHgFg");
	this.shape_271.setTransform(677.9,1233.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#644725").s().p("Atde+QgjgYgahFQg8ifAXj9QAJhlAQmBQAZozAKjAQA0wJBGj4QBJj/CAizQAog4ApgqIAggeIBEADQBWADBdgFQEogPEAhVQEBhVDUhtQBCgiA2ghIApgZIgXCpQghDRgxDAQibJnj6DhQiKB8hUDFQhCCdgvDyQgbCOguEpQguEKg4CuQh3FnkfExQhdBhhxBfIh/BoQgSAQgTAAQgPAAgQgLg");
	this.shape_272.setTransform(673,1286.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#917556").s().p("AobVsQgjgagKhAQgIg3AJhqQAkk2ANjnQAQkeg3kzQgOhOgjihQgfiQgMhMQggjLBSj0QBMjfCHijQAbggCugcQCagYDTgMQDPgMCRAHQCfAHACAbQAEA1iMA2QhwAskqBMQh/AhhJA4Qg/AwgnBNQgSAigsB2QgnBpgoBDQgxBTgBBYQgBBBAdBtQAtCkAIArQAbCHgFCIQgNFThfGoQgsDGgrBpQgnBfgfAAQgHAAgGgFg");
	this.shape_273.setTransform(375.3,1285.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#74542E").s().p("ANnbuQksixiDkiQhFiag6mnQggjug4pCQgzoUggjLQgylBg9gKQjwgmh0IYQgnC1gUDfQgOCiACBYQACDFg3FwQhKHih1C5QhxCyjFA4Qg9ASg/ADIgyAAQhlp4gdj9QgLhpgIjoQgJkCADkDQAGq1BPjPQAUg1AviWQAfhlAfgyQAphFBOgzQBVg4Cbg1QEKhcFFggQCtgRDugMQCVgQC1BHQDCBMCCCMQC0DDAyEYQBIGWi7JcQhgE1APEWQAMDVBRDgQAuB/BfDTQBGCtgIByQgQDng9BfQgfAwgbABQh8geiWhYg");
	this.shape_274.setTransform(413.2,1309.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#644725").s().p("EgTKAnDQgthJgIhDQgGg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkqgTjVQglmiAnpcQALisAXkEQAVjtADg/QALjGB6iTQBkh4CzhaQCQhIKphQQJlhJEIABQDCAABsEoQBODYA3HOQAUCvgOC9QgLCPgkDKIhBFeQgjDRgJCsQgKCyA4EGQAeCOBbFBQBPEcAWCAQAgDGgtBbQgvBdivAdQiGAXkHgKQk5gRiegEQkUgIinAdQiyAei/CtQiDB2iuDhQjCD7gjAkQg9A/gnAAQgaAAgRgag");
	this.shape_275.setTransform(423.9,1368.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#C6DA92").s().p("AgUQbQhogDjPgzQjMgxjkhMQofi1ipiUQhhhVAOhKQALg2BLg8IA9guQAigZANgQQAngsg4gkQgagQjaAaQlyAtiQAMQs0BEoSivQkihejOk0Qi7kVhsmyQCvEND2CKQHxEXI0CXQDRA4D/AwQA1AKFrA/QB+AWC7AbQCQAVA1AMQBPARA2AbQA3AbBBA4QBvBegDBnQgBAzgXAgIBMgLQBigMBsgHQFXgUE3AyQCeAaCAAkQAaAICKAtQBEAXApAAQA0ABBLgdQBBgYB2hDQCNhSBLgqQEXibCFAAQB9AABoBBQBEAsAUAJQA5AdBDANQB/AZFajUQBNgwCthxQCBhUAkgRQAsgUBRAgQA1AUB1BCQCIBOBAAeQB3A5BgAQQC1AgFwAgQC3AQCTAKQgsCv55CjQoFAzpqArIoCAhQhpAJiAA1QgzAWitBXQiMBHhdAfQh8Aoh1AAIgTAAg");
	this.shape_276.setTransform(183.7,1053.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#C6DA92").s().p("AqlC0QhEgEgJi0QgCg4ADhDIAEg4IAPAeQAWAlAgAfQBnBjCoAMQCNALF1gyQF0gzEXhDQhmBMiQA9QjaBgmtAyQkOAgirAAQg3AAgsgEg");
	this.shape_277.setTransform(686.7,1099);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#A6BD55").s().p("AusUYQhngDjQgzQjMgxjjhMQofi2ipiTQhihVAOhKQALg2BMg8IA9guQAhgZAOgQQAmgsg3gkQgZgQjcAdQlqAxiaANQs1BKoOi9QmuiajTodQhKi8hCkfQhCk5gjiIQAoA9CeCeQCdCdC+CqQHfGqCLAaQBLAOAwhqQARgnAXhLIAqiGQA5itBPhZQBuh8CygLQDLgMCDCDQBVBUBmDZQA8B/AVAoQAxBcAwA8QB7CaC3AWQC1AWBxiXQBLhkBVj/QBgkhA1hgQBoi9CeghQE4hBIRFuQCwB6DFCnIDjDJQBLBEBHBpQAxBJBGCDQBXCgAeAyQBFB0BFBOQA6A3DXhZQCVg+E2irQF+jTBngzQD6h8BkACQB+ACCsCmQAtAsBSBVQBEBDAmAWQBhA6GyhDIFXg2QC6gbBcABQBvACCMAnQBAATCwA+QCQAzBPAQQB1AXBTgXQCagpFPlTQCoiqCJiiQgCAGgQCpQgaDLgxCsQiZIslIBrQvFE8kJjOQhOg9gQhvIgIhBQgCgZgMADQoHCP3BCoQnKA0n2AxImYAmQhpAJh/A1QgzAWitBXQiNBHhdAeQh8Aph2AAIgTAAg");
	this.shape_278.setTransform(274.6,1026.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#2B4C43").s().p("AjZKrQgLvzBmnsQBnnqBfjBQAeg8AagXIAUgLIBHFsIgVAcQgbAngbAzQhXCjg5DcQh4HagtPPQgXHoACGJQgamYgFn7g");
	this.shape_279.setTransform(598.8,1239);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#8CAC50").s().p("EgllAzeQhogDjQgzQjMgxjjhMQogi2ioiTQhihVAPhKQALg1BMg9IA8guQAigZAOgQQAmgsg3gkQgagQjaAaQl2AtiMAMQs0BEoSivQmpiMjwpHQjPn3gproQgkqYBmptQBlpgCwjlQDkkpGbj7QHLkZKQjKUAYDgHcAmCAAAQUeAAVHEHQUxEDRAHLQRkHZJ4JOQKmJ4AAKbQAAEk5KNxQslG5slF+IAbA/QAYBOgOBRQgtEBmcC1QjaBgmvAyQljApi5gNQhEgFgIi0QgDg4AEhDIAEg4QgsCv56CjQoFAzppArIoCAhQhqAJh+A1Qg0AWisBXQiNBHhdAeQh9Aph1AAIgTAAg");
	this.shape_280.setTransform(424,827.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#917556").s().p("AHpbSQgvhVggiKQgdh9gBhdQgQmwhAnzQh+vajtoAQgjhMhjAcQgnAMieBTQiCBEhCgBQhggCgjh/QguingZi6QgVieAAh3QAAhYHMASQDmAIDlAaIBiAbQB1AhBjAmQE+B6ARB0QAPBkgPCOQgJBWgjDEQhOG1AAEWQAAE7A1GhQAcDbApENQAFAsAVBrQAVBqAHA9QAXDQhNCjQhJCdhKAHIgGAAQg7AAg2hhg");
	this.shape_281.setTransform(159.7,1357.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#74542E").s().p("EAJMAoKQh2gSg6g1QgSgQgKgSIgGgPQgjgPghgqQhEhVAGiKQAGiChZhpIhUhbQg0g6geg4Qg3hih6o0QiDpegnhmQgZhDhVifQh7jkgthbQjrnZhqnHQh8oTgVlTQgHhuAEhoQAFhgAAgjQAAhYRahXQItgsItgbIg3GDQg3GaAAB2QAABfAIJEQAFIpgNBcQgPBxAAEFQAAEHAPCOQAFAwAeDgQAgD2AQDHQAzJzhXEUQhiE7hzB1QhTBThzAAQgbAAgdgFg");
	this.shape_282.setTransform(166.8,1383.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#402818").s().p("EALTAuDQh3gSg5g1QgSgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg3hih6o0QiDpegmhmQhGi4igkiQiokwkmnWQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg2GDQg3GaAAB2QAABfAHJEQAFIpgMBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAfD2AQDHQAzJzhWEUQhiE7h0B1QhSBThzAAQgbAAgdgFg");
	this.shape_283.setTransform(153.3,1345.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#523821").s().p("Egc5A/GQkihKjKlEQiikDh2m/Qg7jehpoeQhSmsg8iNQhJivjYhrQiThJkphGQlnhVhkgjQjrhShfiCQi0j1hknkQgciFgpkEQgnj0gWhmQgfiNhuhRQhWg/irgvQjPgxhwggQjFg4iIhSQkNiij3tMQhOkHhBksIgzj4MDMhgQwICWV+QlNJomLKfQsVU+k5EPQiqCUj5B4QixBVkuBrQmgCThRAgQkYBujDB3QlsDelWHaQgwBCjUE5QiUDahgBwQhxCDjnA5QioAqk1APIkGALQidAHhqAKQkpAai6BJQi3BHjWDqQhBBIh3CPQh/Cag7BDQjiD9jCBkQijBUixAAQhjAAhogbg");
	this.shape_284.setTransform(419.6,1258.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.lf(["#8ABD56","#A8CA6C","#C9DB8C","#E2E8A2","#F2F0B0","#F8F3B6"],[0,0.204,0.463,0.69,0.875,1],0,-339,0,339).s().p("Eg6xAzhMAAAhoeMB1jAAAMAAABp7g");
	this.shape_285.setTransform(375.8,339.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.instance_17},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.instance_16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.page3, new cjs.Rectangle(-309.4,-227.8,1413.1,1893), null);


// stage content:
(lib.task1_part2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mappage:1,Pineapple:2,page4:3,page5:4,page6:5});

	// timeline functions:
	this.frame_0 = function() {
		playSound("projectBGM20173172010",-1);
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
		var canvas = this
		this.charge.addEventListener("click",link1)
		function link1(){
			canvas.energy_motion_upper.gotoAndPlay("energymove");
			canvas.exp_bar.gotoAndPlay("exp_grow");
			canvas.welcome_mask.gotoAndPlay("hide_mask");
			canvas.egg_cracking.gotoAndPlay("cracking");
			canvas.a_hatch_guide.gotoAndPlay("show_hatch_guide");
			
		}
		var canvas = this
		this.map.addEventListener("click",gotothemappage)
		function gotothemappage(){
			canvas.gotoAndPlay("mappage");
		}
		var canvas = this
		this.hatch_btn.addEventListener("click",hatch_anime)
		function hatch_anime(){
			canvas.egg_cracking.gotoAndPlay("egg_flash");
			canvas.a_hatch_guide.gotoAndPlay("hide_hatch_guide");
			canvas.hatch_btn.gotoAndPlay("hatchTolevel");
			canvas.egg_name.gotoAndPlay("rabbimon");
			canvas.exp_bar.gotoAndPlay("xp_empty");
			canvas.blur_layer.gotoAndPlay("newmon");
			
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// map
	this.instance = new lib.page1();
	this.instance.parent = this;
	this.instance.setTransform(-56.1,-156);

	this.allMap = new lib.Symbol41();
	this.allMap.parent = this;

	this.instance_1 = new lib.page3();
	this.instance_1.parent = this;

	this.instance_2 = new lib.page4();
	this.instance_2.parent = this;

	this.instance_3 = new lib.page5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(331.7,731.5,1,1,0,0,0,331.7,731.5);

	this.instance_4 = new lib.page6();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.allMap}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// gotoMap
	this.gotoMap = new lib.Symbol38();
	this.gotoMap.parent = this;
	this.gotoMap.setTransform(375.1,667,1,1,0,0,0,375.1,667);

	this.timeline.addTween(cjs.Tween.get(this.gotoMap).to({_off:true},1).wait(5));

	// blur_layer
	this.blur_layer = new lib.Symbol36();
	this.blur_layer.parent = this;
	this.blur_layer.setTransform(378,667,1,1,0,0,0,375,667);

	this.timeline.addTween(cjs.Tween.get(this.blur_layer).to({_off:true},1).wait(5));

	// welcome
	this.welcome_mask = new lib.welcome_mask();
	this.welcome_mask.parent = this;
	this.welcome_mask.setTransform(379.6,667.1);

	this.timeline.addTween(cjs.Tween.get(this.welcome_mask).to({_off:true},1).wait(5));

	// a_hatch_guide
	this.a_hatch_guide = new lib.hatch_guide();
	this.a_hatch_guide.parent = this;
	this.a_hatch_guide.setTransform(375.1,667,1,1,0,0,0,375.1,667);

	this.timeline.addTween(cjs.Tween.get(this.a_hatch_guide).to({_off:true},1).wait(5));

	// egg
	this.egg_cracking = new lib.egg();
	this.egg_cracking.parent = this;
	this.egg_cracking.setTransform(390.5,685.4,1,1,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.egg_cracking).to({_off:true},1).wait(5));

	// 闪光
	this.shangguang6 = new lib.Symbol19();
	this.shangguang6.parent = this;
	this.shangguang6.setTransform(572,823.9,1,1,0,0,0,13.2,13.2);

	this.shangguang6_1 = new lib.Symbol19();
	this.shangguang6_1.parent = this;
	this.shangguang6_1.setTransform(518.7,625.7,1,1,0,0,0,13.2,13.2);

	this.shangguang5 = new lib.Symbol19();
	this.shangguang5.parent = this;
	this.shangguang5.setTransform(485.5,942.7,1,1,0,0,0,13.2,13.2);

	this.shangguang5_1 = new lib.Symbol19();
	this.shangguang5_1.parent = this;
	this.shangguang5_1.setTransform(317.3,860.7,1,1,0,0,0,13.2,13.2);

	this.shanguang3 = new lib.Symbol15();
	this.shanguang3.parent = this;
	this.shanguang3.setTransform(84.2,652.2,1,1,0,0,0,13.2,13.2);

	this.shanguang2 = new lib.Symbol13();
	this.shanguang2.parent = this;
	this.shanguang2.setTransform(168,377.9,1,1,0,0,0,13.2,13.2);

	this.shanguang1 = new lib.shanguang1();
	this.shanguang1.parent = this;
	this.shanguang1.setTransform(238.8,695.3,1,1,0,0,0,13.2,13.2);

	this.bling4 = new lib.bling4();
	this.bling4.parent = this;
	this.bling4.setTransform(252.2,287.3,1,1,0,0,0,13.2,17.4);

	this.bling3 = new lib.Symbol9();
	this.bling3.parent = this;
	this.bling3.setTransform(516.6,624.6,1,1,0,0,0,44.3,88);

	this.bling2 = new lib.bling2();
	this.bling2.parent = this;
	this.bling2.setTransform(340.7,735.6,1,1,0,0,0,149.3,122.9);

	this.bling1 = new lib.bling1();
	this.bling1.parent = this;
	this.bling1.setTransform(423.9,688.6,1,1,0,0,0,218.6,91.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.3).s().p("AhdBdQgmgmgBg3QABg2AmgnQAngnA2AAQA3AAAmAnQAoAnAAA2QAAA3goAmQgmAng3AAQg2AAgngng");
	this.shape.setTransform(461,784.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.3).s().p("AhdBeQgmgnAAg3QAAg2AmgnQAngmA2AAQA3AAAnAmQAmAnAAA2QAAA3gmAnQgnAmg3AAQg2AAgngmg");
	this.shape_1.setTransform(621.7,712.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.3).s().p("AhdBeQgmgnAAg3QAAg2AmgnQAngmA2AAQA3AAAnAmQAmAnAAA2QAAA3gmAnQgnAmg3AAQg2AAgngmg");
	this.shape_2.setTransform(385.9,453);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.bling1},{t:this.bling2},{t:this.bling3},{t:this.bling4},{t:this.shanguang1},{t:this.shanguang2},{t:this.shanguang3},{t:this.shangguang5_1},{t:this.shangguang5},{t:this.shangguang6_1},{t:this.shangguang6}]}).to({state:[]},1).wait(5));

	// 方案3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrCOIAAghIAhAAIAAjAIgjAfIgSgWIA/hDIAgAAIAAABIAAgBIAAD6IAgAAIAAAhg");
	this.shape_3.setTransform(709.3,126);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAYQgHgIAAgPQAAgSAHgHQAHgIALAAQANABAGAHQAHAJAAAQQAAAOgHAJQgGAJgNAAQgLAAgHgJg");
	this.shape_4.setTransform(690.9,137.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7CTIAAgaQAJACAIgCQAIgCAGgGQAGgFADgJQADgIABgMIg2jlIAqAAIAYB+IAGArIACAAIAFgrIATh+IApAAIgwDsQgDAQgFAMQgFANgHAIQgGAIgKAEQgKAEgNAAQgLAAgLgEg");
	this.shape_5.setTransform(679.2,132.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBxQgIgFgGgHQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgIQAKgGANgGIANgHIAOgGIAAgeIAAgMIgCgKQgCgEgEgCQgEgDgHAAIgHACQgFACgDADQgDAEgCAHQgCAHAAAJIAAAKIggAAIgCgMIgBgKQAAgNAFgKQAEgKAIgGQAIgHALgEQALgDAMAAQARAAALAEQALAEAHAHQAHAHADAMQACALAAAQIAACqIgfAAIgDgUQgHAJgLAHQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAHIgHAKIgGANQgCAGAAAIQAAANAFAJQAFAHAKAAQAGAAAFgCIAIgHIAAhIg");
	this.shape_6.setTransform(663.6,128.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhECOIAAkbIAtAAIAVABQAKAAAKADQAKADAKAHQAJAGAHALQAHALAEARQAEARAAAZIAABRQAAAZgEARQgEARgHALQgHALgJAGQgKAHgKADQgKADgKAAIgVABgAgZBwIALAAQAMAAAGgDQAIgDAFgIQADgHACgNQACgNAAgUIAAhXQAAgUgCgNQgCgNgDgIQgFgHgIgDQgGgDgMAAIgLAAg");
	this.shape_7.setTransform(648.3,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[]},1).wait(5));

	// charge_btn
	this.charge = new lib.charge();
	this.charge.parent = this;
	this.charge.setTransform(669.1,1240.5);

	this.timeline.addTween(cjs.Tween.get(this.charge).to({_off:true},1).wait(5));

	// mapBtn
	this.map = new lib.map();
	this.map.parent = this;
	this.map.setTransform(398.5,1236.2);
	new cjs.ButtonHelper(this.map, 0, 1, 1);

	this.steps_arena = new lib.steps_arena();
	this.steps_arena.parent = this;
	this.steps_arena.setTransform(533.1,1240.4);
	new cjs.ButtonHelper(this.steps_arena, 0, 1, 1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BBBDBF").ss(2).p("AClAAIlJAA");
	this.shape_8.setTransform(671.3,1072.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BBBDBF").ss(2).p("ACmAAIlKAA");
	this.shape_9.setTransform(668.4,840.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BBBDBF").ss(2).p("ACmAAIlKAA");
	this.shape_10.setTransform(668.4,950.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EgARAiAQgHgHAAgLMAAAhDbQAAgKAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAKMAAABDbQAAALgHAHQgIAHgKAAQgJAAgIgHg");
	this.shape_11.setTransform(655.8,966.5);

	this.energy_motion_upper = new lib.map_bar();
	this.energy_motion_upper.parent = this;
	this.energy_motion_upper.setTransform(667.1,1071.9,1,1,0,0,0,0,-124.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(3).p("EADDAl2ImFAAMAAAhIoQAAhQA5g5QA6g6BPAAQBRAAA5A6QA5A5AABQg");
	this.shape_12.setTransform(667.1,955.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D0D2D3").s().p("EgDCAl2MAAAhIoQAAhQA5g6QA5g4BQAAQBRAAA5A4QA5A6AABQMAAABIog");
	this.shape_13.setTransform(667.1,955.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.energy_motion_upper},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.steps_arena},{t:this.map}]}).to({state:[]},1).wait(5));

	// UI
	this.egg_name = new lib.Symbol35();
	this.egg_name.parent = this;
	this.egg_name.setTransform(385.6,907.8,1,1,0,0,0,70.8,48.1);

	this.hatch_btn = new lib.Symbol28();
	this.hatch_btn.parent = this;
	this.hatch_btn.setTransform(383.9,996.9);

	this.menu = new lib.menu();
	this.menu.parent = this;
	this.menu.setTransform(95,1242.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EF5046").s().p("AgNCPQgIgBgHgDQgJgEgHgFQgHgGgFgKQgGgJgDgOQgDgNgBgTIAAh3QABgSADgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAHgDAIgBIANgBIAOABIAPAEQAIACAIAGQAGAFAGAKQAFAJAEAOQAEANAAATIAAB3QAAATgEANQgEAOgFAJQgGAKgHAGQgHAFgIAEIgPAEIgOABgAgShmQgGAIgBATIAACYQABASAGAIQAGAIAMAAQANAAAGgIQAHgIAAgSIAAiYQAAgTgHgIQgGgJgNAAQgMAAgGAJg");
	this.shape_14.setTransform(726.3,683.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EF5046").s().p("AgNCPQgIgBgHgDQgJgEgHgFQgHgGgFgKQgGgJgDgOQgEgNAAgTIAAh3QAAgSAEgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAIgDAHgBIANgBIAOABIAPAEQAIACAHAGQAIAFAFAKQAFAJAEAOQADANABATIAAB3QgBATgDANQgEAOgFAJQgFAKgIAGQgIAFgHAEIgPAEIgOABgAgShmQgHAIAAATIAACYQAAASAHAIQAGAIAMAAQANAAAGgIQAHgIAAgSIAAiYQAAgTgHgIQgGgJgNAAQgMAAgGAJg");
	this.shape_15.setTransform(708.9,683.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EF5046").s().p("AgNCPQgIgBgIgDQgIgEgHgFQgHgGgGgKQgFgJgDgOQgEgNABgTIAAh3QgBgSAEgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAIgDAHgBIANgBIAOABIAQAEQAHACAHAGQAIAFAFAKQAGAJADAOQADANAAATIAAB3QAAATgDANQgDAOgGAJQgGAKgHAGQgIAFgHAEIgPAEIgOABgAgShmQgHAIABATIAACYQgBASAHAIQAGAIAMAAQANAAAHgIQAFgIAAgSIAAiYQAAgTgFgIQgHgJgNAAQgMAAgGAJg");
	this.shape_16.setTransform(691.6,683.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EF5046").s().p("AgrCOIAAghIAhAAIAAjAIgjAfIgTgWIBAhDIAgAAIgBABIABgBIAAD6IAhAAIAAAhg");
	this.shape_17.setTransform(676,683.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EF5046").s().p("AgSBpQgHgIAAgQQAAgSAHgHQAHgIALAAQAMAAAIAIQAGAIAAARQAAAPgGAJQgIAIgMAAQgLAAgHgIgAgSg3QgHgJAAgPQAAgSAHgIQAHgHALAAQAMAAAIAIQAGAIAAARQAAAPgGAIQgIAJgMAAQgLAAgHgIg");
	this.shape_18.setTransform(657.7,686.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EF5046").s().p("AAcByIgchPIgBAAIgcBPIgpAAIAwhzIgthwIArAAIAYBLIAZhLIApAAIgsBsIAxB3g");
	this.shape_19.setTransform(646.1,686.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EF5046").s().p("AgjBxQgIgEgGgIQgFgHgDgKQgDgKAAgMQAAgOADgLQAEgLAGgJQAHgIAKgHQAKgHANgHIANgGIAOgGIAAgdIAAgNIgCgKQgCgEgEgCQgEgDgHAAIgHABQgFADgDADQgDAEgCAHQgCAGAAAKIAAAKIggAAIgCgLIgBgLQAAgNAFgKQAEgJAIgIQAIgGALgEQALgDAMAAQARAAALAEQALADAHAIQAHAIADALQACALAAAQIAACqIgfAAIgDgUQgHAKgLAGQgLAGgOAAQgLAAgIgEgAANAHIgJAEIgIAIIgHAJIgGAMQgCAHAAAIQAAAOAFAHQAFAJAKgBQAGABAFgDIAIgHIAAhIg");
	this.shape_20.setTransform(630.3,686.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EF5046").s().p("AA3COIAAheIABgqIABgjIACgeIABgUIgDAAIgrC4IgaAAIgri4IgDAAIABAUIACAeIAAAjIABAqIAABeIgoAAIAAkbIA4AAIAbBuIAHAiIAEAfIABAAIAFgfIAHgiIAchuIA3AAIAAEbg");
	this.shape_21.setTransform(611.4,683.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFB0DD").s().p("AAjhgIAPAsIg3CDIgsASg");
	this.shape_22.setTransform(693.3,176);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D67FB4").s().p("AgrhQIArgSIAsBaIAABrg");
	this.shape_23.setTransform(692.7,193.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#932F6D").s().p("AhfgkIBygjIBNBpIi/Amg");
	this.shape_24.setTransform(706.7,196.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B74988").s().p("AhdAYIA9iaIB+AAIhtEFg");
	this.shape_25.setTransform(718,187);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F270B4").s().p("AgcBOIhFhMIBFhPIB+Cbg");
	this.shape_26.setTransform(717.6,166.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFD4EB").s().p("AhYASICxhPIhEBPIheAsg");
	this.shape_27.setTransform(705.7,164.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF78B4").s().p("AhtArIA4iDIBegsIBFBMIg9CaIhyAjg");
	this.shape_28.setTransform(703.7,179.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNCPQgIgBgIgDQgIgEgHgFQgHgGgGgKQgFgJgDgOQgEgNABgTIAAh3QgBgSAEgOQADgNAGgKQAGgJAGgGQAIgFAIgDQAIgDAHgBIANgBIAOABIAQAEQAHACAHAGQAIAFAFAKQAGAJADAOQADANAAATIAAB3QAAATgDANQgDAOgGAJQgGAKgHAGQgIAFgHAEIgPAEIgOABgAgShmQgHAIABATIAACYQgBASAHAIQAGAIAMAAQANAAAHgIQAFgIAAgSIAAiYQAAgTgFgIQgHgJgNAAQgMAAgGAJg");
	this.shape_29.setTransform(671.3,180);

	this.instance_5 = new lib.Path_5_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(637.1,180.9,1,1,0,0,0,79,19.9);
	this.instance_5.alpha = 0.66;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCCPQgIgCgGgHQgHgGgDgMQgEgMAAgSIAAiNIgSAAIAAgeIAWAAIAIg7IAdAAIAAA7IAkAAIAAAeIgkAAIAACQIABANIAEAHIAGADIAHABIALgCIAJgEIAAAXIgIAIIgJAEIgJADIgJAAQgIAAgIgCg");
	this.shape_30.setTransform(490.4,64.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWByQgKgCgIgGQgHgGgEgKQgFgJAAgOIACgPIADgLIAdAAIABAVQACAIACAGQADAEAFACQAFADAFAAQAKgBAEgFQAFgFAAgHIgBgHIgDgHIgFgHIgGgHIgdgkIgMgOIgKgRIgGgRQgDgIAAgLQAAgNAFgJQAEgKAIgHQAHgGALgDQAKgEAKAAQAMAAAKADQAKADAHAGQAIAGADAJQAEAJAAAMIgBAPIgDANIgdAAIgBgUQgBgJgCgFQgCgFgEgDQgEgDgGAAQgFAAgDACIgGAEIgDAGIgBAIQAAAHADAIIAKAOIAhAnIAIALIAKANIAHARQADAKAAAJQAAAMgEALQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgDg");
	this.shape_31.setTransform(477.8,67.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgaBwQgLgGgIgLQgIgMgEgTQgEgRAAgaIAAgqQAAgWAEgPQADgQAFgKQAFgLAHgGQAHgHAHgCQAIgEAHgBIAMgBQAMAAAKAEQAKADAIAIQAIAJAFANQAFAOAAAUIAAAPIgCAOIgBANIgDALIhKAAIAAAYIABAZQABAJADAHQACAGAFADQAFADAGAAIAHgCQAEgBADgEIAEgKIACgPIAAgHIAjAAIAAAIQAAAigQAOQgPAPgdAAQgOAAgMgFgAgGhTQgFADgCAGQgDAGgBAKIgBAZIAAAOIApAAIAAgFIAAgGIAAgHIAAgGQAAgWgFgKQgFgKgLAAQgEAAgEACg");
	this.shape_32.setTransform(463.3,67.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_33.setTransform(449.9,67.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgCIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_34.setTransform(434.6,67.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag1COIAAkbIBrAAIAAAiIhAAAIAABVIAyAAIAAAhIgyAAIAACDg");
	this.shape_35.setTransform(420.9,65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_36.setTransform(401.5,64.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgCIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_37.setTransform(389.3,67.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNB0QgIgCgHgDQgHgDgGgIQgHgGgEgMQgFgKgCgRQgDgQAAgXIAAgjQAAgWADgPQACgQAFgLQAFgLAGgHQAGgGAIgDQAHgDAHgCIAOgBIAOABQAHABAHAEQAHADAGAGQAGAHAFALQAFAKADAQQACAQAAAWIAAAjQAAAXgCAPQgDARgFALQgFALgGAHQgHAHgHAEQgGAEgIABIgOABgAgIhSQgEADgDAGQgDAIgBAKIgBAbIAAA3IABAbQABALADAHQADAHAEADQAEADAFAAQAFAAAEgDQAEgDADgHQACgHABgLIABgbIAAg3IgBgbQgBgKgCgIQgDgGgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_38.setTransform(373.6,67.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag+CYIAAktIAhAAIAEAYIAGgKIAJgIIALgGQAHgDAIAAIAIABIAKAEQAGACAFAGQAFAFAEAIQAEAKADAOQACANAAATIAABFQAAATgCAOQgDAOgEAIQgEAKgFAFQgGAFgFADIgLADIgJABQgNAAgIgFQgJgFgFgIIABAcIAAA9gAgMh0QgFAEgDAGIAACKIADAGIAFAFIAFAFIAHABIAIgCQAEgCADgEQADgFACgIIABgVIAAhXIgBgUQgCgJgDgEQgDgEgDgCIgJgCQgHAAgFAFg");
	this.shape_39.setTransform(357.8,71.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgUCXIAAktIApAAIAAEtg");
	this.shape_40.setTransform(345,64.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgzB0IAAjkIAfAAIADAXQAHgNAJgGQAIgHAKAAQASAAAIAMQAJALAAAWIAAAHIgBAIIgCAIIgDAIIgdAAIAAgVIgBgMIgCgHIgEgEIgEgBQgFAAgDAEQgEADgDAFIAAC8g");
	this.shape_41.setTransform(335,67.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVCeIAAjkIApAAIAADkgAgShuQgGgHAAgNQAAgHACgFQABgGADgDQAEgDAEgBIAKgCQAMAAAHAHQAGAGAAAOQAAANgGAHQgHAHgMAAQgLAAgHgHg");
	this.shape_42.setTransform(323.5,63.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAVCXIAAitQAAgPgFgFQgEgHgJAAQgGABgGAEQgGAEgFAIIAAC3IgqAAIAAktIAqAAIAAA2IgCAnQAEgHAGgEIALgHIALgDIALgBQAUAAALAOQALAOAAAcIAACug");
	this.shape_43.setTransform(310.6,64.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAhCOIgXiJIgHg6IgDAAIgHA6IgYCJIgsAAIgokbIApAAIATCrIACAoIAEAAIAEgtIAfimIAhAAIAeCmIACAtIAFAAIACgoIASirIAoAAIgnEbg");
	this.shape_44.setTransform(289.8,65);

	this.instance_6 = new lib.Path_0_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(141,66,1,1,0,0,0,40.2,32.4);
	this.instance_6.alpha = 0.66;

	this.instance_7 = new lib.Path_1_16();
	this.instance_7.parent = this;
	this.instance_7.setTransform(200.8,66,1,1,0,0,0,40.2,32.4);
	this.instance_7.alpha = 0.66;

	this.instance_8 = new lib.Path_2_3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(630.8,66,1,1,0,0,0,40.2,32.4);
	this.instance_8.alpha = 0.66;

	this.instance_9 = new lib.Path_3_3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(571.1,66,1,1,0,0,0,40.2,32.4);
	this.instance_9.alpha = 0.66;

	this.instance_10 = new lib.Path_4_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(386.2,66,1,1,0,0,0,165.3,32.4);
	this.instance_10.alpha = 0.66;

	this.exp_bar = new lib.Path_22();
	this.exp_bar.parent = this;
	this.exp_bar.setTransform(382.8,996.6,1,1,0,0,0,98.5,33.9);
	this.exp_bar.alpha = 0.68;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.exp_bar},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_5},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.menu},{t:this.hatch_btn},{t:this.egg_name}]}).to({state:[]},1).wait(5));

	// 云
	this.cloud2 = new lib.Path_21();
	this.cloud2.parent = this;
	this.cloud2.setTransform(753.1,253.6,1,1,0,0,0,186.1,33.5);
	this.cloud2.alpha = 0.77;

	this.cloud1 = new lib.Path_1_17();
	this.cloud1.parent = this;
	this.cloud1.setTransform(62.4,313.5,1,1,0,0,0,145.8,26.3);
	this.cloud1.alpha = 0.77;

	this.cloud4 = new lib.Path_2_4();
	this.cloud4.parent = this;
	this.cloud4.setTransform(491.3,144.2,1,1,0,0,0,76.8,13.8);
	this.cloud4.alpha = 0.77;

	this.cloud3 = new lib.Path_3_4();
	this.cloud3.parent = this;
	this.cloud3.setTransform(238.9,88.2,1,1,0,0,0,114.2,20.6);
	this.cloud3.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cloud3},{t:this.cloud4},{t:this.cloud1},{t:this.cloud2}]}).to({state:[]},1).wait(5));

	// 静物
	this.shanguang4 = new lib.Symbol17();
	this.shanguang4.parent = this;
	this.shanguang4.setTransform(257.5,804.6,1,1,0,0,0,13.2,13.2);

	this.instance_11 = new lib.whirpool();
	this.instance_11.parent = this;
	this.instance_11.setTransform(314.2,447.1,1,1,0,0,0,137.6,162.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFD983").s().p("AkfAwIAUgnICgCQIiWjAIAjg+ICMD4IhokkIBVgmIAwE/IgLk/IBngOIg5FNIBdkyIA9AHIhWDwIBojTIA5AMIh1DJICFiyIA9AHIjHDwIi4Ayg");
	this.shape_45.setTransform(189.2,645.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3B2314").s().p("ADIROQA9gXAVgfQAjg2AFgMQAQgmgBhHQgBhCgXhHQgmhugfhqQgchbAQh3QAGg0AAgOQgBgbgRgJQheg1hPgmQiVhIhQgFQiUgGhRgFQiUgHg/gVQhAgTh/AAQg/AAgzAEQA7gPBOgMQCdgXBjATQBPAOCUAmQBvAWANghQAGgSgagkIhGhUQh2iRgsiRQgwihgkiTIgbhzIiZhIICZASIDbjQIi8DTIBcFTQBsFjBMBTQBMBRBvA+QA3AfAoAPIA3gIQBDgKA4gQQC0guAJhGIAUinQARhVAkgWQAXgOA9gSQAugNANgUQAOgXAmhTIAjhPIDQhQIiyBwIhcDTIiQBQIgUBfQgXBpgTAxQgTAxgpAxIgKAMIAegdQBCg6AogPQAngPAwAKQAXAFAQAIQgdAIglARQhLAfgmApQgyA0gvCGQgzCRABB3QAABrBMBWQAzA6AsASQAPAGAHA0QADAbAAAZICGAfQCSAbBBgRQBBgSAJAVQAFAKgJANQjOAtgkgEQgXgDiGgZIiBgaIgRAvQgZA1gpAZQgoAYhEAKIg8AFg");
	this.shape_46.setTransform(102.2,547.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9991C9").s().p("AAHEZQgygKAagiQAug8gFADIgOAQQg4AihNAZQiZAyhfgrQhegrAogkQAHgHALgFQhMAbhNASQjGAvgOhKQgOhLCsgvQBWgYBZgJQgKg2BJgsQBIgsCSgbQBEgNAKgFQAIgEgVgEQhGgPARgeQAZgsDVgYQDTgXAuAfQAnAahFA/QgkAggbAQQAWgGAagEQCHgYBzAhQCmAvAnAmQA2AziIA8Qh8A3iFAMQgqAEglgBIgegCIBTAKQBIASgyApQgdAXhTAXQhOAVhVAKQgvAFgiAAQggAAgVgEg");
	this.shape_47.setTransform(63.4,448.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6F6791").s().p("AAMHHQhTgRArg3QBKhhgHAFIgWAZQhdA3h8ApQj5BSiahGQiZhGBCg7QAKgJAQgIQh6Arh9AdQlBBLgXh4QgWh5EXhNQBXgYBsgRIBZgMQgQhZB2hHQB2hHDsgtQBugVARgIQANgGgigHQgygLgTgKQgjgUASggQAUgjB0gfQBogcCTgQQCQgQBzACQB8ADAiAXQA/ArhvBmQgqAlgzAgIgVAMIgeAKQgzASAggGQARgDAggTQAogLAygJQDagnC7A2QEOBNBAA9QBXBTjcBiQjJBajZAUQhBAGg8gCQAwAFAiAIQB2AehRBCQgvAmiHAlQh/AjiJAPQhMAJg4AAQg0AAgigHg");
	this.shape_48.setTransform(42.3,441.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9991C9").s().p("AkbD8QgMgmBFgeQAhgOAjgIQiBAZiBANQkGAbAAg9QgBg9CzgpQBZgUBagIQgZgDgIgPQgQgcBUg8QBTg7CpgZQBUgNBEAAQAJgDAIgFQAPgLgCgOQgGgjCagbQBdgQAxAEQA/AEAGAkQAGAgg6AWIg7AQIAqgGQAygFArABQCJACAKA+QALA+hhAaQgeAIglAEIggACIA+AQQAvAWhMAYQhLAYiZAZIiKAUIAbATQAVAZggAZQgsAkjFAgQhcAQg1AAQhCAAgHgYg");
	this.shape_49.setTransform(32.4,545.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9991C9").s().p("AhlDnQgigTAKgiIARgeQg3ALhGAKQiLAUhJgCQhIgDAigmIAwgnQgsAPguABQhbABgKhIQgJhHB1gtQA3gVA4gJQgXADgZgDQg4gGgFgmQgGgpA1gZQApgTBWgMQCMgSAGAoQACAQARAHQAIAEAIAAIAngMQAxgNAwgIQCZgaBZAoQBaAngFAmQgCATgUALIAygKQA8gLA0gEQCmgLASBDQATBDjqA1QhJAQhZAOIhLAJIBFADQBFALABAuQACAzi8AbQhJALhCAAIgGAAQg/AAgUgKg");
	this.shape_50.setTransform(189.2,487.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],37.1,66.3,8.7,0.6).s().p("Ao1nlILnlCIGEXIIk4CHg");
	this.shape_51.setTransform(296.6,640.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFD983").s().p("AiyAFIALgsIBpDfIhkkaIAUhHIBgFgIhLmPIA1gbIAoGiIgRmYIBBAIIgaGZIAxlvIAmAZIgvEdIA8j0IAkAfIhEDiIBPjBIAmAYIh2EAIhyARg");
	this.shape_52.setTransform(92.5,861.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFD983").s().p("AiMC/IiKjHIAbgiIBvC5IhZjmIAwg1IBBEcIgXk+IBXgQIgjFKIBFk/IBhAOIiFE6ICfkXIA2AYIiKDYICTi2IAwAbIibCoICliNIA1AXIjwC6g");
	this.shape_53.setTransform(196,855.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFD983").s().p("AjMCqIjIiyIAogdICgCkIiBjNIBFgvIBfD9IghkbIB+gOIgzEmIBkkdICNAMIjCEZIDoj5IBNAWIjHDAIDViiIBHAYIjiCVIDvh9IBOAUIldCmg");
	this.shape_54.setTransform(591.7,640.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFD983").s().p("AjMCqIjIiyIAogeICgClIiBjNIBFgvIBfD9IghkcIB/gNIgzEmIBjkdICNANIjCEYIDoj5IBOAWIjIDAIDVijIBHAZIjiCWIDvh+IBOAUIlcCmg");
	this.shape_55.setTransform(678.5,765.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#AD8E51").s().p("AjMCqIjIiyIAogeICgClIiBjNIBFgvIBfD9IghkcIB+gNIgzEmIBkkdICNAMIjCEZIDoj5IBNAVIjHDBIDViiIBHAYIjiCVIDvh9IBOAUIldCmg");
	this.shape_56.setTransform(452.7,532.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#AD8E51").s().p("AhlE1Ip4kuICNglIGyDlImakQICAgtIGDEoIlqleICMgnIGmHFIlhn+IEBgXIC1IFIhdoWIDlAZIg9IEICtnNIB9BWIjpF1IEiksIBIA3IlqFDg");
	this.shape_57.setTransform(196,554.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-34.9,66.7,-9.5,-0.2).s().p("AoWKyIE43bIL1EfIrvU0g");
	this.shape_58.setTransform(454.4,642.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CCCCCC").s().p("AkHCjQAlh5AihPQAVgzBHg/IBCg1ICkANIAtAtQAwA0AOAkQAPAjAHB1QAEA7ABA0g");
	this.shape_59.setTransform(568.7,764);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E6E6E6").s().p("AlFDiQASg3AWg9QAsh3AUgZQATgYBHhwIBDhrICYAUQCfAfAZA7QAaA6ARDHQAIBkADBYg");
	this.shape_60.setTransform(568,757.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCCCCC").s().p("AmyGGQAYhhAehpQA9jRAignQAjgoBFgZQAhgMAbgFQAkhKAuhNQBZibAvgOQAzgPBWAnQBOAkATAgQANAWAuGZQAYDNAVDJg");
	this.shape_61.setTransform(629,735.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E6E6E6").s().p("AoQHbQAch2AmiAQBJj+ArgwQAqgxBTgeQApgPAggGQAshaA3heQBti8A5gRQA+gSBpAwQBfArAXAnQAQAaA5HyQAdD6AZD0g");
	this.shape_62.setTransform(626.1,725.5);

	this.instance_12 = new lib.Path_9_3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(633.2,777.4,1,1,0,0,0,61.9,11.8);
	this.instance_12.alpha = 0.41;

	this.instance_13 = new lib.Path_10_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(568.1,782.3,1,1,0,0,0,46.1,9.3);
	this.instance_13.alpha = 0.41;

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3B2314").s().p("ABWPSQg/gEgggRQghgShXhIIhRhEIgPAWQgWAYgpAHQgpAHhGgPIg+gQIBdAIQAgACAlgNQACgEgBgDQgDgFgWAHQgbAJgxgLQgvgMAvgJQArgJBJj1QA/jTAIhQQAEghgHhSQgGhMADgKQAEgWAnheQAqhlARgXQAZghCgpEQABgGgFgNQgGgOgBgRQgBgWAPgjQAPgiAPgNIAZgTQAKgGgBAIQgBACgXAYQgYAYgDAWQgEAcAEAWQADAWAJADQAGACAXgdQAWgbADAEQADAHgIAKQgIAKgWARQgSAPgSA5QgPAxgBAYQgBATADAWQAEAXAHALQAIAMA2gUQA4gVAtghQArgfBagCQBWgCADATQADATgRAJQgXALg5gIQhBgJhpAgQhtAhgwAxQgqAsgwD8QgsDfADAyQACAVAaA9QAfBJAJAiQAJAlghCaQgnCwgBA/QgBBXAeBSQARAtAiA4QAQAbBDAaQAiANAfAIIgbABIgdgBg");
	this.shape_63.setTransform(591.7,549.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3B2314").s().p("ABmOwQiYgpghgaQghgZAOg2IAUgxQjAAsg8gBQglAAg5gbIgxgaIBNgIQBSgLAbgQQAWgNA9ggQA4gnAnhMQAdg4AxisQAriYAagdQAXgZA+gxQA0gqALgSQAbgpBEjbQBMj0gRg7QgThChQhRQhNhOg+gWQg2gUgOgVQgLgQALgQQAMgPBLArQBOAsAXAvQAZAzAmAtQAmAsANgHQALgHAPgSQANgSAIgRQALgWAKgyQALg6gJgWQgLgagCgMQgDgOAGgDQAEgDAHAiQAHAkAGABQAJACAOgRQANgSAKgbQAIgVgKggQgJgfABgDQACgIAGALIANAcQAIASgDAlQgEAmgLATQgJAOgNALQgKAIgCAGQgHATg8EdQg/EqAEAaQAEAcgMBtQgKBlgGAVQgDAKgpBBQgsBFgNAfQgXA3gPD6QgQEIAkAdQAlAfg/gPQg/gPgUgVQgQgRgPgGIgNgDIAUAjQAZAkASAIIC0BSQhHgQhNgVg");
	this.shape_64.setTransform(705.2,616.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F4AEAE").s().p("ADvFgQhdgQheggQhighgrggQgxglAsgXQBPgogGACIgXAJQhNAHhegLQi7gXhOhdQhOhbA8gSQAKgDALgBQhcgJhZgTQjngxAWhWQAWhVDNAkQBnARBiAjQARhABjgKQBhgKCoAsQBNAUAOAAQAKAAgUgQQhBgyAggXQAwgjDtBRQDrBRAhA3QAbAvhnAgQg2ARgmADQAaAFAfAIQCaApBpBbQCYCFAXA7QAfBSitgEQiegDiTg2QgtgQgngTQAfASAUAQQBDA3hJASQgQAEgXAAQgoAAg+gLg");
	this.shape_65.setTransform(705.6,542.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F4AEAE").s().p("AA/EfQiqg9hYg9QhYg9A4gTIBKgZQhFgGhKgTQiSglgSg9QgSg8AogqQAUgVAYgJQg7gJgtgSQhZgjBHgsQBHgsCzAzQBZAaBMAiQgFgEgCgHQgGgNAGgIQAWgcCJAYQCLAZA0AyQAbAZgCAUQBjAeBiBYQBhBWgVAqQgSAihRgNIhPgVIAjARQAoAVAgAXQBlBHgbA2QgbA1hPgVQgZgHgcgNIgWgMQgSAVguAMQgdAHghAAQhLAAhigjg");
	this.shape_66.setTransform(746.8,621.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9991C9").s().p("ADsEmQhSgEhTgSQhWgSgogXQgtgbAjgXQBkhEg8AmQhCAOhQgBQiigBhMhGQhMhHAygWQAJgCAJgCQhPAChOgIQjLgTALhKQAKhLCzAJQBZAFBXAUQAIg4BTgTQBSgSCTAUQBFAKALgCQAIgBgRgLQg+glAZgWQAmgiDRAtQDQAtAiAsQAcAlhVAmQgsATggAHQAXABAbAEQCHAUBjBDQCPBhAZAxQAiBCiTAOQiIANiCgfQgpgKgjgMIgbgLIBLAjQA/Aog8AXQgZAKg0AAIgsgCg");
	this.shape_67.setTransform(612.2,487.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F27070").s().p("AANJXQhugchfgqQhggsgVgiQgkg5Amg6QAUgeAagRQhVgQhqgZQjTg0hkg0Qhkg0BLg1QAlgaA6gPQhJABhAgdQiCg5AliQQAmiQDGgLQBdgFBWAUQgjgKgigVQhLgxAUhMQAVhTBcgNQBJgKCAAiQBrAbAwAlQAtAhgKAnQgIAgATAZQAJANALAGIBAACQBNAGBJAPQDrAzBjCHQBiCGghBFQgRAiglAIIBOANQBeASBMAbQDyBWgWCOQgXCOlvgzQhzgQiHghIhxgeIAfAMQAlARAcAVQBZBDgfBZQgSAyhfAEIgSABQhNAAhugbg");
	this.shape_68.setTransform(794.4,544.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6F6791").s().p("AF/HdQiEgIiHgcQiNgehBgmQhJgqA5gnQBmhEgIADIgdAQQhrAXiDgBQkGgBh7hzQh7hzBRgiQANgFARgEIBMgDQgsgDggAGQiBADh/gMQlJgeARh6QAQh5EiAPQCRAHCNAgQANhaCHgeQCGgeDuAhQBwAPASgCQANgCgcgSQgtgagOgQQgcgdAcgZQAegbB3AHQBsAHCRAfQCNAeBtAnQB1AqAZAhQAuA9iLA9QgzAWg6AOIgZAGQAqABAyAIQDcAgCgBtQDoCgApBNQA4BsjwAXQjbAVjUgyQhBgPg5gVQAtAUAfATQBnBBhiAlQgqAQhVAAQggAAgmgCg");
	this.shape_69.setTransform(578,459.8);

	this.whirlpool = new lib.Symbol3();
	this.whirlpool.parent = this;
	this.whirlpool.setTransform(309,441,1,1,0,0,0,191,199);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#9991C9").s().p("AAbDaQiUgugdggQgWgXATgQQAJgJANgEQgugMg5gSQhzgjg3gaQg4gaAngLQATgGAegBQgngGgkgPQhHgeAPgvQAOguBqANQAxAGAuAOQgTgGgSgKQgqgXAIgZQAJgbAwAEQAmACBGAXQBzAkgIAaQgDALALAKQAFAFAGADIBzAaQB/AlA6A2QA5A2gPAVQgFAHgMACIgKABICGApQCFAxgHAvQgHAvjGgwIjEg6IA0AZQAyAfgNAcQgGAMgbAAQgqAAhdgdg");
	this.shape_70.setTransform(606.2,545.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3A3A3A").s().p("AAtJVQgBoDhul7Qhvl+h1jYQgkhDghgqIgZgeIAzARQBAAfBDBHQDVDfCmIPQClILAnEYQAUCMgOAjIAAALQgDAOgJAQQggAxhfAvQheAvhJAXIg2APQAWi1AAkBg");
	this.shape_71.setTransform(433.6,430.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#58595B").s().p("AvGX7QiygQiegfIh6gdQgLirgFkGQgLoKAcm/QAmpxBsmDQCHnjDthOQF5h9FNIXQBoCnBXDVQAqBrAXBJQAXhLBLhTQCUilEBglQFKgwE0PHQCaHkBYHuIgDAcQgHAjgZAiQhRBtjjA8QjKA2ibgWQgwgGglgOIgcgMQhLAphhAtQjCBbhwAZQmJBamTAAQigAAijgOg");
	this.shape_72.setTransform(320.1,411.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#754C28").s().p("AgnGuQAOgFANgNQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgCgCgIAHQgKAKgXAFQgWAFASgOQARgMgTh4QgQhngNgjQgFgQgTghQgTgggBgEQgCgKgCgxQgDgyACgOQAEgTgxkYQgBgDgEgEQgGgGgEgGQgFgKAAgSQgBgRAEgIQAJgUACAFQAAACgFAOQgFAPADAKQAEANAGAJQAGAJAEgBQADgBAFgRQADgQACACQAFADgLAXQgEAKADAcQAEAXAEALQAKAWAMAHQAFAEATgUQAUgUAMgYQAMgVAngTQAjgTAFAIQAMASgtAOQgeAKgmAiQgoAlgKAeQgJAcAeB1QAbBoALAUQAFAJAYAVQAcAZAKAMQAMAPAQBIQATBTAMAbQAbA7A/AoQAMAIAigCQARgCAPgDQgpAXgcgBQgSAAg0gNIgwgNIgCAMQgEAPgQALQgZASg1AHg");
	this.shape_73.setTransform(155.1,493.1);

	this.instance_14 = new lib.Path_24();
	this.instance_14.parent = this;
	this.instance_14.setTransform(138.6,443.5,1,1,0,0,0,85.4,37.5);
	this.instance_14.alpha = 0.699;

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3B2314").s().p("Ag4JnQAUgIASgTQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgEgDgLALQgNANghAIQghAHAbgUQAXgSgaiqQgXiTgSgzQgIgWgbgwQgagsgCgHQgDgPgEhFQgEhIAEgTQAFgchFmQQgCgEgGgGQgIgIgGgKQgHgNgBgaQgBgZAGgLIAJgTQAFgHABAFQABACgIAVQgHAVAEAPQAGASAJAMQAIANAGgBQAFgBAGgYQAFgXADACQAHAFgQAgQgGAOAFAoQAFAhAGARQAFAMAJAMQAJANAIAEQAIAFAbgcQAcgdASghQARgfA2gbQA0gaAGAKQASAahBAUQgrAOg2AxQg5A0gPAsQgNAoArCnQAnCTAQAfQAHAMAiAeQAnAjAQASQARAUAXBoQAbB2ASAnQAYA1ArApQAXAXAlAYQASAMAxgEQAYgCAVgEQgPAIgTAIQgnAQgZgBQgagBhKgSIhFgTIgCASQgHAWgWAQQgXAQgvALIgrAIg");
	this.shape_74.setTransform(32.8,562);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#754C28").s().p("AgxJLQgjgCgWgMQgWgLgPgaIgLgYQh/AjgTAEQgSAEhtgPQgEgHACgFQADgLAjAGQAiAHBLgUQAlgKAfgLIAAgbQABgcAIgDQAVgLAZggQAjgwgEg3QgEg9gghKQgdhDgcgZQgVgUgogOIgkgKIAUgIQAZgGAUAFQAWAHAkAcIATAPIgIgIQgXgYgMgXQgLgZgRg1IgOgxIhNgkIg4hpIhhg0IBvAiIAVAnQAXAqAIALQAIAKAYAFQAhAHAMAGQAUAKALAsIASBVQAHAjBeASQAwAIAuACIAvgcQA3gjAkguQAkgtAqi8IAjizIhqhmIB6BjIBOgPIhMArIgJA9QgNBNgUBVQgQBNg4BPQgZAigIAMQgMAUAEAJQAIARA5gQQAigJBRgbQAzgNBRAGQAqADAfAGQgbAAggACQhDAFgfANQghANhLAJIh3AOQgpAFhKAsIhWA2QgLAHAJAuQAMA8gKAxQgMA4gQA6QgJAmACAiQADAlAKATQACAGAVAaQAMAQAgAJQAQAFAPACIgMAAIgUgBg");
	this.shape_75.setTransform(491.4,457.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFE383").s().p("ABOEbQhGgHgggSQgmgVAZgcQBHhRgrAtQgxAXg/AKQh+AVhCg+QhCg9AlgcQAGgFAIgDQg+AMg+ADQifAIAAhNQABhMCMgOQBGgHBFAIQABg5A/geQA+gdB1ABQA2AAAJgDQAGgCgPgIQgzgdARgaQAagoCoASQCmARAeApQAaAig/AxQggAZgYALQASgCAVABQBsACBTA3QB5BPAYAtQAiA+hyAiQhoAfhogOQghgEgdgIIgWgIIA+AaQA1AggtAfQgaAShDAHQgfADgfAAQgiAAgjgEg");
	this.shape_76.setTransform(443.5,434.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFE383").s().p("ABMDSQhDgFgfgOQglgPAYgVQBEg8gpAhQgvARg9AIQh4APhAguQhAguAjgVIANgGQg7AJg7ADQiaAFABg5QAAg4CHgKQBDgFBDAGQABgqA8gWQA8gWBwABQA0AAAIgCQAHgCgPgGQgxgVAQgUQAZgdChAOQCgANAdAeQAZAZg8AkQgeATgXAIQARgBAUAAQBnACBQApQB1A7AXAhQAgAuhtAZQhkAXhkgKIhRgPIA8ATQAzAYgrAXQgZANhBAFQgbACgdAAQgiAAgjgDg");
	this.shape_77.setTransform(514.8,397.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFE383").s().p("AAyDLQiYgbgigbQgYgUAQgTQAIgKANgFQgvgHg7gKQh3gUg6gTQg6gTAkgRQASgHAegEQgngBgmgLQhKgVAIgwQAJgwBqAAQAygBAvAIQgTgDgTgIQgtgRAFgaQAFgbAwgDQAmgCBJANQB2AVgFAbQgCALANAIQAGAFAGACIB1ALQCDAVBAAuQBAAvgMAVQgGAMgTACICKAXQCKAhgBAvQgBAvjKgWIjLggIA4ASQA1AYgJAdQgGARgxAAQgqAAhIgMg");
	this.shape_78.setTransform(550.7,453);

	this.instance_15 = new lib.Path_26();
	this.instance_15.parent = this;
	this.instance_15.setTransform(9.3,491.2,1,1,0,0,0,122,53.6);
	this.instance_15.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.instance_14},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.whirlpool},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.instance_13},{t:this.instance_12},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance_11},{t:this.shanguang4}]}).to({state:[]},1).wait(5));

	// 岛屿
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4EA8A8").s().p("AhBApQgggIgCgSQgDgRAbgRQAcgRApgGQApgHAfAJQAfAIADARQADARgcARQgbARgpAHQgSADgQAAQgVAAgRgFg");
	this.shape_79.setTransform(240,869.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4EA8A8").s().p("AhBApQgggIgCgSQgDgQAbgSQAcgRApgGQApgHAfAJQAfAIADARQADARgcARQgbARgpAHQgSADgRAAQgUAAgRgFg");
	this.shape_80.setTransform(47.9,789.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#4EA8A8").s().p("AhBApQgggIgCgSQgDgQAcgSQAbgRApgGQApgHAfAJQAfAIADASQADAQgcASQgbARgpAGQgRADgQAAQgVAAgSgFg");
	this.shape_81.setTransform(110.3,732.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4EA8A8").s().p("AgrASQgSgEgBgJQgBgHASgIQASgHAagDQAagCASAFQATAFABAIQABAIgSAHQgTAIgaACIgPAAQgQAAgNgDg");
	this.shape_82.setTransform(275.1,783.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4EA8A8").s().p("AgDAoQgsgEgfgPQgegOABgQQACgQAggJQAhgJArAEQAtAEAfAPQAeAOgBAQQgCAQggAJQgXAGgbAAIgbgBg");
	this.shape_83.setTransform(521.2,931.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4EA8A8").s().p("AgCAoQhagIg+gRQg+gRABgQQACgRBAgGQBAgGBYAIQBZAIA/ARQA+ARgBAQQgCARhAAGQgdACgiAAQgpAAgwgEg");
	this.shape_84.setTransform(484.6,728.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#4EA8A8").s().p("AgGBLQiogPh1ggQh1ggADgfQACgfB5gMQB5gLCoAPQCoAPB1AgQB1AggDAfQgDAfh5AMQg0AFg9AAQhQAAhfgJg");
	this.shape_85.setTransform(618,861.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4EA8A8").s().p("AiIA0Qg8gDgDgSQgDgSA5gVQA4gVBTgNQBTgNA8AEQA9ADACASQADASg5AUQg4AWhTANQhBAKgzAAIgbgBg");
	this.shape_86.setTransform(64.9,699.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3A8484").s().p("EAyuAUOQl9gxjTk5QhChhgphxIgchcQiKAZiqAKQlUAUibhOQiphViejgQiDi5g5isQgRg0gEiCQgFiRgKgxQgThfg5gSQhGgXiIBUQj1CXvpgaQk4gIlggZIkggXIhECxQhHDQgPCXQgJBXiXBfQiIBXjbBJQjSBHjUAjQjcAkiMgRQjogdhnjDQgXgsghheQgXhCgRgKQgSgKiMAVQjnAjhDAHQmvAvhaiBQheiEAmjcQALhFAYhFIAVg4Il7ljQLgjyPHiCQQtiOUrAAQTlAAUPDxQT5DuQsGoIB7MaQivDzj7DpQnGGmljAAQglAAgkgEg");
	this.shape_87.setTransform(399.3,627.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#95EFDE").s().p("AkJLQQg5gGAOl2QAKjDAChRQAEiHgNgcQgNgdgfgfIg5g2QhEhDALhFQAFggAegJQAWgGA3AEQBTAGAYAAQBGAAA7gPQBagYD7ioQBxhLArgXQBEgmAOAPQAWAZjRD9QjyEnghA+QgYAvgkCNQgVBTgsC8QhUFUg5AAIgBAAg");
	this.shape_88.setTransform(668.3,1197);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#72CEBC").s().p("AqIVIQg0gngXjIQgTieADjEQABhDAqiyIBTlRQBpm0g+goQhXg4guh2QgziCAVieQASiLBnhlQAhggAkgYIAfgRIAVAHQAeAIAsADQCNAJDkgvQDigvEthwQCWg4BpgvIAGBNQACBqgZCQQgOBQgyBDQgpA3hPBAQgvAmhsBSQhkBQhHBKQiNCTiaHoQgnB4hFDzQg3DDgVA3QhNDJhxDEQh0DJg2AAQgJAAgHgFg");
	this.shape_89.setTransform(679,1233);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4EA594").s().p("Atde+QgjgYgahFQg8ifAXj9QAJhlARmBQAYo6AKi5QA0wKBHj3QBIj/CAizQAog4ApgqIAggeIBEADQBVADBegEQEogQEAhVQEBhVDUhtQBCgiA2ghIApgZIgXCpQghDRgxDAQibJnj6DhQiKB8hUDFQhCCcgvDzQgbCOguEpQguEKg4CuQh3FnkfExQhdBhhxBfIh/BoQgSAQgTAAQgPAAgQgLg");
	this.shape_90.setTransform(674.1,1286.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#95EFDE").s().p("AobVsQgjgagKhAQgIg3AIhqQAkk2ANjnQAQkeg3kzQgNhMgjijQgfiQgMhMQggjLBSj0QBLjfCIiiQAbghCtgbQCagZDTgMQDQgMCRAHQCeAHADAbQAEA1iMA2QhwAskrBNQh+AghKA5Qg+AvgoBNQgSAjgrB1QgnBpgoBDQgxBTgBBYQgBBBAdBtQAsCkAJArQAaCHgFCIQgMFShfGpQgtDGgrBpQgmBfgfAAQgHAAgGgFg");
	this.shape_91.setTransform(376.5,1285.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#72CEBC").s().p("ANobtQksiwiEkjQhFiag6mmQggjug4pCQgzoUggjMQgylBg9gKQjwgmh0IZQgnC1gUDeQgOCiACBZQABBDgNCUQgPCxgaCsQhJHjh2C4QhxCyjEA5Qg+ASg/ADIgyAAQhlp4gdj+QgLhogIjoQgJkDADkCQAGq1BPjQQAUg1AviWQAfhlAfgyQAqhEBNgzQBVg4Cbg1QEKhcFGggQCtgSDugLQCUgQC1BHQDDBMCBCLQC1DEAxEYQBIGWi7JbQhgE2APEVQAMDWBRDgQAuB/BfDTQBGCtgIBxQgQDog9BfQgeAvgcABQh7geiWhYg");
	this.shape_92.setTransform(414.3,1308.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#4EA594").s().p("EgTKAnDQgthJgHhDQgHg5AUhPQBKjbAijDQAXiGgSjZQgOimgtkUQg4lGgbiqQgwkrgTjUQglmiAnpdQALirAXkFQAVjsADg/QALjGB6iTQBjh4C0haQCQhIKphQQJlhJEIABQDCAABsEoQBPDXA2HPQAVCugPC+QgKCOglDLIhAFeQgjDRgKCsQgKCyA4EGQAfCNBaFCQBQEcAVCAQAhDGguBbQguBdiwAdQiGAXkHgKQk5gRiegEQkUgIinAdQiyAei/CtQiDB2iuDhQjCD6gjAlQg9A/goAAQgZAAgRgag");
	this.shape_93.setTransform(425,1368.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B5F4E5").s().p("AgUQbQhngDjRgyQjLgxjkhMQofi2ipiTQhihVAPhLQALg1BMg8IA8guQAigaAOgQQAmgsg4gjQgagRjaAbQl1AtiNAMQszBDoSiuQkjhfjOk0Qi7kWhrmxQCsEMD5CMQHwEWI0CYQDSA4D+AwQA1AKFrA/QB+AWC8AaQCPAWA2ALQBOARA2AbQA3AcBBA4QBvBegDBmQgBAzgYAhQBugUCsgKQFYgUE3AyQCeAZCAAlQAbAHCJAuQBEAWApABQA0AABKgcQBBgZB3hDQCNhSBKgpQEXibCGAAQB9AABnBBQBFArATAKQA5AdBEANQB+AYFbjUQBNgvCthyQCBhUAjgQQAsgVBRAgQA2AVB0BCQCIBNBAAeQB4A5BfARQC2AfFvAhQC4AQCTAKQgsCv55CiQs9BSs0AuQhqAJh/A1Qg0AVisBXQiNBHhcAfQh9Aoh1AAIgSAAg");
	this.shape_94.setTransform(184.8,1053.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B5F4E5").s().p("AqlC0QhEgEgJi0QgDg4AEhDIAEg4IAPAeQAWAlAgAfQBnBjCoAMQCNALF1gyQF0gzEXhDQhjBKiTA/QjaBgmuAyQkNAgirAAQg3AAgsgEg");
	this.shape_95.setTransform(687.8,1098.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#66E2E2").s().p("AurUYQhogDjQgzQjMgxjjhMQogi1ioiUQhihVAPhKQALg1BMg9IA8guQAigZAOgQQAmgsg3gkQgagQjcAdQloAxicAOQs0BJoOi9QmuiajUodQhJi8hDkfQhCk5giiIQAnA9CeCeQCeCeC+CpQHfGqCLAaQBMAOAxhbQASgiAYhBIAsh7QA9ijBNhdQBtiGCrgvQDIg4CxBtQCMBXCJDIQBFBmCED0QBmC8AvApQBvBeClgmQBTgTA8glQE3kkF2kZQLqo0E2AyQCqAcA5CKQAtBpgQDDQgJBtgdDPQgOCjAvA0QAsAyCBApQB3AlCjAVQCdAUCRgBQCXgBBXgYQB9gjFchpQFChXDAADQB+ADCsClQAtAsBSBVQBEBEAlAWQBjA6GxhBQBzgSDkglQC8gcBbAAQA9AACAAnQBMAXCrA6QFQBsCNgmQCagqFPlTQBphqBuh8IBZhmQgBAGgRCpQgaDLgvCsQiZIslIBrQvFE8kKjOQhOg9gQhvIgHhBQgDgZgLADQoICP3BCoQrgBUp4A3QhpAJh/A1QgzAWitBXQiMBHhdAfQh9Aoh1AAIgTAAg");
	this.shape_96.setTransform(275.7,1026.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#BC3C67").s().p("AjJhYIAAgxIGTDiIAAAxg");
	this.shape_97.setTransform(305.8,833);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#721933").s().p("AjMBZIGZjiIAAAxImZDig");
	this.shape_98.setTransform(472.4,833);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#912942").s().p("Ap0AZIAAgxITpAAIAAAxg");
	this.shape_99.setTransform(388.9,844.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D83F5C").s().p("Ap4DjImTjjIGTjhITwAAIGUDhImUDjg");
	this.shape_100.setTransform(389.3,819.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1A4C42").s().p("AjZKsQgLv0BmnrQBmnrBgjBQAeg8AZgXIAUgLIBIFsIgVAcQgbAngcAzQhXCig4DdQh5HbgsPPQgXHnACGJQgamYgFn6g");
	this.shape_101.setTransform(600,1238.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CCCCCC").s().p("AjuAGQAJg1A2hOIA0hEICjgYIA2AhQA6AoAXAfQAWAgAjBwQARA4ANAzIoLBQQAIh+APhWg");
	this.shape_102.setTransform(169.8,860.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E6E6E6").s().p("Ak2CiQAPiAANgcQANgcArh9IAph3IAvgHQA5gHAygCQChgGAlAzQAnAzA+C+QAgBfAYBVIqGBkQAEg6AIhAg");
	this.shape_103.setTransform(169.2,855.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CCCCCC").s().p("AjoEvQgDjCAIhBQAJg/Awi4IAuisQgCgUAFgXQAKgvAjgQQAjgPAeAwQANAYAIAcIgEBmQgCBtAPAkQAPAlAxA/QAdAlBDBOQAoAxALCbQAFBNgDBEInKBGQgEhUgChig");
	this.shape_104.setTransform(130.1,831.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E6E6E6").s().p("AlGFbQABi+AWhlQAJgsALhnQANh6AHgwQAgjNBRglQBTglBhBEQAyAjAgAqIgDCPQAGCVAuAbQAuAcAmA/QATAfAKAbIA1FYIqJBkQgDhLgBhfg");
	this.shape_105.setTransform(130.2,829.8);

	this.instance_16 = new lib.Path_16_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(165.8,879.2,1,1,0,0,0,45.7,10.9);
	this.instance_16.alpha = 0.41;

	this.instance_17 = new lib.Path_17_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(113.8,879,1,1,0,0,0,45.7,10.8);
	this.instance_17.alpha = 0.41;

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#58BDBF").s().p("EglkAzeQhogDjQgzQjMgxjjhMQofi1ipiUQhihVAPhKQAKg2BMg8IA9guQAhgZAOgQQAngsg4gkQgagQjaAaQlzAtiPAMQs0BEoSivQmoiMjxpHQjOn3gproQgkqYBmpsQBkphCwjlQDlkpGaj7QHLkZKQjKUAYDgHcAmCAAAQUeAAVHEHQUyEDRAHLQRjHZJ4JOQKmJ4AAKbQAAEk5KNxQslG5slF+IAbA/QAYBOgOBRQgtEBmcC1QjaBgmvAyQljApi4gNQhEgEgJi1QgDg4AEhDIAEg4QgsCv55CjQs8BRs0AuQhqAJh/A1Qg0AWisBXQiNBHhcAfQh9Aoh1AAIgTAAg");
	this.shape_106.setTransform(426.2,827.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#95EFDE").s().p("AHqbTQgwhWggiKQgdh9gBhdQgQmwhAnzQh+vajsoAQgkhMhiAdQgoALieBTQiCBEhCgBQhggCgjh/QguingZi6QgVieAAh3QAAhYHMASQDmAJDlAaIBiAaQB1AiBjAmQE9B5ASB0QAPBkgPCOQgKBWgjDEQhOG1AAEWQAAE7A2GiQAcDaApENQAFAsAVBrQAVBqAHA9QAWDQhMCkQhJCdhKAGIgGAAQg7AAg1hgg");
	this.shape_107.setTransform(160.8,1357.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#72CEBC").s().p("EAJLAoKQh2gSg6g1QgRgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6geg4Qg4hih6o0QiDpegmhmQgahDhUifQh6jjguhcQjrnZhqnHQh8oTgVlTQgHhuAEhoQAFhgAAgjQAAhYRZhXQItgsItgbIg3GDQg3GaAAB2QAABfAIJEQAFIpgNBcQgPBxAAEFQAAEHAPCOQAFAwAeDgQAgD3AQDGQAzJzhWEUQhjE7hzB1QhTBThzAAQgbAAgdgFg");
	this.shape_108.setTransform(168,1383);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1A4C42").s().p("EALSAuDQh2gSg6g1QgRgQgKgSIgGgPQgjgPgigqQhDhVAGiKQAGiChahpIhThbQg0g6gfg4Qg4hih5o0QiDpegmhmQhGi4igkiQiokwkmnWQkfnLgyvPQgPk0AJlbQANksAAgjQAAhYTbGVQJuDKJuDbIg3GDQg3GaAAB2QAABfAIJEQAFIpgNBbQgPBxAAEGQAAEHAPCOQAFAwAeDgQAgD3AQDGQAzJzhWEUQhjE7hzB1QhTBThzAAQgbAAgdgFg");
	this.shape_109.setTransform(154.5,1345.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#2D7769").s().p("Egc5A/HQkjhKjJlFQiikDh2m/Qg7jdhooeQhTmsg7iOQhKivjXhrQiUhJkqhGQllhUhmgjQjqhThfiBQi0j2hknkQgciFgpkDQgnj1gWhmQgfiNhvhRQhVg+irgvQhigbjdg2QjGg5iHhRQkNijj3tLQhNkIhCksIgyj4MDMfgQwICXV+QlNJpmLKeQsWU+k5EPQipCVj5B3QiyBWktBqQmiCUhQAfQkXBujDB3QlsDelXHaQgvBCjVE5QiUDahgBwQhwCDjnA5QioAqk1AQIkGALQieAGhpAKQkpAbi6BIQi3BHjWDrQhCBHh3CPQh/Cbg7BCQjiD+jBBjQikBUixAAQhjAAhngag");
	this.shape_110.setTransform(420.8,1258.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.instance_17},{t:this.instance_16},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]}).to({state:[]},1).wait(5));

	// 蓝天
	this.instance_18 = new lib.Symbol31();
	this.instance_18.parent = this;
	this.instance_18.setTransform(375.7,337.2,1,1,0,0,0,374.9,337.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.6,281,1598.2,2051.1);
// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/task1_part2_atlas_.png", id:"task1_part2_atlas_"},
		{src:"sounds/projectBGM20173172010.mp3", id:"projectBGM20173172010"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;