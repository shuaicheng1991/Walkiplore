(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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



(lib.Group_0 = function() {
	this.initialize(img.Group_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,367);


(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2613,2179);


(lib.Image_1 = function() {
	this.initialize(img.Image_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2550,3300);


(lib.Image_2 = function() {
	this.initialize(img.Image_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2550,3300);


(lib.Image_3 = function() {
	this.initialize(img.Image_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2550,3300);


(lib.backgroundbg_hover01 = function() {
	this.initialize(img.backgroundbg_hover01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3125,5558);


(lib.bg201 = function() {
	this.initialize(img.bg201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1562,2779);


(lib.cloud1 = function() {
	this.initialize(img.cloud1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,678,470);


(lib.FlashAICBAssets = function() {
	this.initialize(img.FlashAICBAssets);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,368,243);


(lib.FlashAICBAssets_1 = function() {
	this.initialize(img.FlashAICBAssets_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,428,224);


(lib.FlashAICBAssets_2 = function() {
	this.initialize(img.FlashAICBAssets_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,443,175);


(lib.FlashAICBAssets_3 = function() {
	this.initialize(img.FlashAICBAssets_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,617,209);// helper functions:

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


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg201();
	this.instance.parent = this;
	this.instance.setTransform(-399.1,-710.1,0.511,0.511);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399.1,-710.1,798.3,1420.2);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg201();
	this.instance.parent = this;
	this.instance.setTransform(-399.1,-710.1,0.511,0.511);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399.1,-710.1,798.3,1420.2);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABoFCQgRAAgOgGQgQgHgMgLQgNgMgGgQQgHgRAAgRQAAgSAHgPQAFgPAMgNQALgMASgHQAPgHARABQASAAAPAGQAPAGANANQAMAMAHAQQAHARAAARQAAAQgHAQQgGAPgMANQgMAMgQAHQgPAGgQAAIgDAAgAi+j0IC5hNICGGaIiKA7g");
	this.shape.setTransform(168.6,-12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhSD1IgihSIghhRIgjhUIgmhcIglheQAqgjAugbQAtgcA0gVQAdgMAfgIQAegHAfgBQAfgBAeAGQAcAFAaAOQAaAPAVAXQAUAXAOAhQAQAlABAhQAAAhgJAdQgLAegUAZQgTAZgZAVQgaAWgdARIg8AeIBDCiIivBKgAAFibIgOAIIgPAKIApBxIAKgEIAKgEQAOgGAKgKQALgKAHgMQAGgNABgOQABgOgGgOQgLgZgUgHQgJgEgJAAQgNAAgOAGg");
	this.shape_1.setTransform(131.9,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwE7QgagJgYgOQgYgQgUgSQgVgUgPgXQgRgWgJgXIgchHIgahLIgVhMIgQhKIBfgjIBdgmIALBKIANBJIARBGIAXBGIALAXIAQAcIATAVQALAHANgFQAOgFAGgRQAHgSgBgYIgFg3IgMg8IgTg/IgSg6IgSgyIgOggIgGgPIgIgPIAwgTIAygUIAmgQIAlgRQAnCMAqCJIBZESIiXBMIgRg9IgLAXIgSAUIgUAPIgXALQgaAKgbAAQgaAAgZgIg");
	this.shape_2.setTransform(89.6,18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSEmQghgIgdgRQgdgRgZgZQgZgYgUgeQgUgegPgiQgOgjgIgmQgJglAAgmQgBgmAJgkQAHgkASggQASggAdgaQAcgaApgQQAhgPAhgCQAegCAdAIQAcAHAaAQQAZAQAWAWQAWAXARAcQASAcANAfIAXBDQg/Agg8AjIh3BIQAUAXAcAHQAcAIAdgNQAPgGAQgNIAdgdIAbghIAUgdIA2CzIgYAhIgeAcIgjAXIgkARQglAQgkADIgRAAQgaAAgYgFgAgdh6QgPAHgIAMQgIANgDAQIgDAgIADAeIBrg5IgEgJIgLgUIgPgSQgKgGgKgCIgHgBQgIAAgIADg");
	this.shape_3.setTransform(29,47.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AlHjMIC0hAIA0CiIArjMIDKgfIhUENIEGDDIijBoIizhsIA3CXIiaBIg");
	this.shape_4.setTransform(-15.9,68.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AkajqIDOhiIFnG/IixBnIg7hNIhVAkIARBeIjJA+gAhHA4IA5gYIhUh3g");
	this.shape_5.setTransform(-57.5,88.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AmehcIC0hgICpEpIhQlOICSg+IDAElIhmlKIDCg9ICCIwIjVBfIifj9IA7EQIjTBhg");
	this.shape_6.setTransform(-128,110.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABpFCQgRAAgQgGQgPgHgNgLQgLgMgHgQQgHgRgBgRQABgSAHgPQAFgPAMgNQAMgMAQgHQARgHARABQARAAAPAGQAQAGAMANQANAMAGAQQAHARAAARQgBAQgFAQQgHAPgLANQgMAMgQAHQgQAGgQAAIgCAAgAi+j0IC5hNICHGaIiMA7g");
	this.shape_7.setTransform(129.8,-105.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhSD1IgihSIghhRIgjhUIgmhcIglheQAqgjAugbQAtgcA0gVQAdgMAfgIQAegHAfgBQAfgBAeAGQAcAFAaAOQAaAPAVAXQAUAXAOAhQAQAlABAhQAAAhgJAdQgLAegUAZQgTAZgZAVQgaAWgdARIg8AeIBDCiIivBKgAAFibIgOAIIgPAKIApBxIAKgEIAKgEQAOgGAKgKQALgKAHgMQAGgNABgOQABgOgGgOQgLgZgUgHQgJgEgJAAQgNAAgOAGg");
	this.shape_8.setTransform(93,-86.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgwE7QgZgIgZgPQgYgPgUgTQgVgUgPgWQgQgXgKgXIgbhHIgahLIgWhMIgPhKIBegjIBdglIALBJIAMBJIASBGIAYBHIAKAWIAQAbIAUAWQAKAHAMgFQAPgFAHgSQAFgRAAgYIgEg2IgOg9IgSg/IgTg7IgSgxIgNghIgGgOIgIgPIAwgTIAxgTIAmgRIAmgRQAnCNAqCJIBYERIiVBNIgSg+IgLAXIgSAUIgVAPIgWALQgaAKgaAAQgagBgagHg");
	this.shape_9.setTransform(50.8,-74.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSEmQghgIgdgRQgdgRgZgZQgZgYgUgeQgUgegPgiQgOgjgIgmQgJglAAgmQgBgmAJgkQAHgkASggQASggAdgaQAcgaApgQQAhgPAhgCQAegCAdAIQAcAHAaAQQAZAQAWAWQAWAXARAcQASAcANAfIAXBDQg/Agg8AjIh3BIQAUAXAcAHQAcAIAdgNQAPgGAQgNIAdgdIAbghIAUgdIA2CzIgYAhIgeAcIgjAXIgkARQglAQgkADIgRAAQgaAAgYgFgAgdh6QgPAHgIAMQgIANgDAQIgDAgIADAeIBrg5IgEgJIgLgUIgPgSQgKgGgKgCIgHgBQgIAAgIADg");
	this.shape_10.setTransform(-9.8,-45.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AlHjMIC0hAIA0CiIArjMIDKgfIhUENIEGDDIijBoIizhsIA3CXIiaBIg");
	this.shape_11.setTransform(-54.8,-24.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AkajpIDOhjIFnG/IixBnIg7hNIhVAkIARBeIjJA+gAhHA4IA5gZIhUh2g");
	this.shape_12.setTransform(-96.3,-4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AmehcIC0hgICpEpIhQlOICSg+IDAElIhmlKIDCg9ICCIwIjVBfIifj9IA7EPIjTBig");
	this.shape_13.setTransform(-166.8,17.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AqjeVIxALCICmw9IyRCpIMptaItJuMIMdlNIm4tNIQEARIFbs9IK2HSIP4z8IFnUAITojqIp9QjISZP/Iu9EFIC5OdIq9lNIkXRCIr7pJIqfShg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-279.9,-283.6,559.8,567.2);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhDRIhBidIgCAAIAACdIg6AAIAAmhIA6AAIAADwIACAAIA+iKIA4AAIhGCPIBNCsg");
	this.shape.setTransform(429.4,57.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTCgQgKgCgKgFQgKgFgIgJQgJgKgHgPQgGgPgEgXQgDgXAAgeIAAgxQAAgfADgWQAEgWAHgPQAGgPAJgIQAIgKALgEQAJgFAKgBIATgCIAUABQALACAJAEQAJAFAKAJQAIAJAGAOQAHAPAEAXQADAWAAAfIAAAxQAAAegDAXQgFAVgGAQQgHAPgIAKQgJAKgJAEQgLAGgKACIgTABgAgMhyQgFAEgEAKQgEAJgCAPIgBAlIAABNIABAmQACAPAEAIQAEAKAFAEQAGADAHAAQAHAAAGgDQAGgEADgKQADgIACgPIABgmIAAhNIgBglQgCgPgDgJQgDgKgGgEQgGgEgHAAQgHAAgGAEg");
	this.shape_1.setTransform(406.2,62.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTCgQgKgCgKgFQgKgFgIgJQgJgKgGgPQgHgPgEgXQgEgXAAgeIAAgxQAAgfAFgWQADgWAHgPQAGgPAJgIQAJgKAKgEQAJgFALgBIASgCIAUABQALACAJAEQAKAFAJAJQAIAJAGAOQAHAPAEAXQADAWABAfIAAAxQAAAegFAXQgEAVgGAQQgHAPgJAKQgIAKgKAEQgJAGgLACIgTABgAgMhyQgFAEgEAKQgEAJgBAPIgCAlIAABNIACAmQABAPAEAIQAEAKAFAEQAFADAIAAQAIAAAFgDQAGgEADgKQADgIACgPIABgmIAAhNIgBglQgCgPgDgJQgDgKgGgEQgFgEgIAAQgIAAgFAEg");
	this.shape_2.setTransform(384.4,62.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAADQIgPgHIgMgLIgJgNIgFAeIgtAAIAAmhIA6AAIAABVIgCApIAAABIAJgLIAMgJIANgGIASgDIALABIAOAFQAHAEAIAHQAHAHAGANQAFANAEASQADATAAAaIAABfQAAAbgDAUQgEASgGANQgFAMgIAIQgHAHgIAEIgOAFIgNAAQgLABgIgDgAgRg/QgHAHgEAIIAAC/IAEAJIAGAHIAIAFIAKABIALgBQAGgDADgGQAEgHADgLIACgdIAAh4IgCgdQgDgLgDgGQgEgHgGgCIgLgCQgKAAgHAGg");
	this.shape_3.setTransform(362.5,57.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkCaQgQgIgLgQQgLgQgFgZQgGgZABgkIAAg6QgBgeAFgWQAEgVAIgPQAHgOAJgJQAKgIAKgFQAKgEALgCIARgBQAPABAOAEQAPAFALALQALALAHAUQAHATAAAcIgBATIgCAUIgCATIgDAPIhoAAIAAAgIABAjQACAOAEAIQAEAJAGAEQAHADAJAAIAKgBQAFgDAEgFIAGgNIACgVIAAgKIAwAAIAAANQAAAtgVAUQgVAVgogBQgVAAgPgHgAgKhzQgFAEgEAJQgEAHgCAOIgBAjIAAATIA5AAIABgHIAAgJIAAgJIAAgIQAAgfgHgOQgIgNgOAAQgHAAgGADg");
	this.shape_4.setTransform(340.4,62.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7CAQgVggAAhEIAAg6QAAgeAFgWQAEgVAHgPQAIgOAJgJQAJgIAKgFQAKgEAJgCIARgBQAQAAAOAFQANAEAJAIQAKAJAFANQAGANAAASIgBATIgDAPIgvAAIAAgKQAAgZgFgNQgGgNgNAAQgGAAgFADQgFADgEAJQgDAHgCAOIgCAiIAABZIABAjQACAPADAIQAEAJAFAFQAGADAIAAIAIgBQAEgDAEgFIAFgNIABgVIAAgKIAyAAIAAANQAAAtgTAUQgUAVgogBQgnABgVgig");
	this.shape_5.setTransform(319.9,62.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxCbQgLgGgIgJQgIgKgEgOQgEgOAAgQQAAgUAFgPQAFgPAJgMQAJgMAOgLQAOgIASgKIATgJIATgHIAAgqIgBgRIgDgOQgDgFgFgEQgFgDgJAAIgLACQgGACgFAGQgEAFgDAKQgCAIAAAOIAAAOIgtAAIgDgQIgBgPQAAgSAGgNQAGgOALgJQALgJAPgFQAPgEARgBQAYAAAQAGQAPAEAKALQAJALAEAPQAEAQAAAUIAADsIgsAAIgEgbQgJANgQAJQgPAIgUAAQgOABgMgHgAASAJIgNAHIgLAJIgKANIgIARQgDAKAAAMQAAARAHAMQAHALAPgBQAHAAAHgDIAMgJIAAhjg");
	this.shape_6.setTransform(298.2,62.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhKDEIAAmHICVAAIAAAvIhaAAIAAB1IBGAAIAAAuIhGAAIAAC1g");
	this.shape_7.setTransform(280.4,58.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdDRIAAjvQAAgVgGgIQgGgIgNAAQgIAAgIAFQgKAGgGALIAAD+Ig6AAIAAmhIA6AAIAABLIgDA2QAHgJAHgGIAPgJIAQgFIAQgCQAbAAAPAUQAPATAAAnIAADxg");
	this.shape_8.setTransform(247.8,57.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDDGQgLgEgJgIQgJgKgEgQQgGgQAAgZIAAjDIgZAAIAAgqIAeAAIALhSIApAAIAABSIAyAAIAAAqIgyAAIAADIIACAQIAFAKIAIAFIAKABIAPgCIAMgGIAAAgIgKAKIgMAHIgNADIgNABQgMAAgKgDg");
	this.shape_9.setTransform(228.6,58.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdDaIAAk7IA5AAIAAE7gAgYiYQgKgKAAgSQAAgKACgIQADgGAFgFQAEgEAHgBIANgDQARAAAJAJQAJAIAAAUQAAASgJAKQgJAKgRAAQgPAAgJgKg");
	this.shape_10.setTransform(214.8,56.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAuDEIggi8IgKhRIgEAAIgKBRIgiC8Ig7AAIg5mHIA5AAIAbDsIACA3IAGAAIAFg+IArjlIAuAAIApDlIAEA+IAGAAIADg3IAYjsIA5AAIg3GHg");
	this.shape_11.setTransform(191.7,58.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAdCgIAAjvQgBgVgFgIQgHgIgMAAQgIAAgJAFQgJAGgGAKIAAD/Ig6AAIAAk7IAtAAIAFAhIAAABQAGgLAJgHIAQgMIARgGIARgCQAbAAAQAUQAPATAAAnIAADxg");
	this.shape_12.setTransform(153,62.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdDaIAAk7IA5AAIAAE7gAgYiYQgKgKAAgSQAAgKADgIQACgGAFgFQAEgEAHgBIANgDQARAAAJAJQAJAIAAAUQAAASgJAKQgJAKgRAAQgPAAgJgKg");
	this.shape_13.setTransform(135.5,56.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdDQQgOgDgKgHQgLgHgGgMQgGgMAAgSIABgIIACgLIApAAQAAAVAIAIQAIAJAPAAIAMgCQAGgCAEgFQAFgFACgKQADgJAAgOIAAgyQgIAKgMAHQgLAHgSAAIgNAAIgOgFQgIgEgHgHQgIgIgFgNQgGgMgEgTQgDgTAAgaIAAhTQAAgaADgSQAEgSAGgMQAFgMAIgHQAHgHAIgDIAPgFIANgBQAMAAAHADQAJADAHAFIALALIAIANIAFgfIAtAAIAAEuQAAAagFAWQgFAVgLAPQgLAPgQAIQgRAIgWAAQgQAAgNgDgAgLilQgFACgEAHQgEAGgCALIgCAdIAABoIACAcQACALAEAGQAEAHAGACIAKACIALgBIAIgGIAGgHIAEgIIAAisQgEgKgHgHQgHgGgLAAg");
	this.shape_14.setTransform(117.6,67.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTCgQgKgCgKgFQgKgFgJgJQgIgKgGgPQgHgPgEgXQgDgXgBgeIAAgxQAAgfAFgWQADgWAHgPQAGgPAJgIQAJgKAJgEQAKgFALgBIATgCIATABQAKACAKAEQAJAFAJAJQAJAJAGAOQAHAPAEAXQAEAWAAAfIAAAxQgBAegEAXQgDAVgHAQQgGAPgKAKQgIAKgKAEQgKAGgJACIgTABgAgMhyQgGAEgEAKQgDAJgBAPIgCAlIAABNIACAmQABAPADAIQAEAKAGAEQAFADAIAAQAHAAAGgDQAFgEAEgKQADgIACgPIABgmIAAhNIgBglQgCgPgDgJQgEgKgFgEQgGgEgHAAQgIAAgFAEg");
	this.shape_15.setTransform(95.7,62.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhFDEIAAmHIA7AAIAAFYIBQAAIAAAvg");
	this.shape_16.setTransform(77.4,58.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#415A94").s().p("EgkpAJJQhLABg2g2Qg3g2AAhMIAAsjQAAhMA3g2QA2g2BLAAMBJTAAAQBMAAA2A2QA2A2gBBMIAAMjQABBMg2A2Qg2A2hMgBg");
	this.shape_17.setTransform(253,58.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,505.9,117.1), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDDGQgLgEgJgIQgJgKgEgQQgGgQAAgZIAAjDIgZAAIAAgqIAeAAIALhSIApAAIAABSIAyAAIAAAqIgyAAIAADIIACAQIAFAKIAIAFIAKABIAPgCIAMgGIAAAgIgKAKIgMAHIgNADIgNABQgMAAgKgDg");
	this.shape.setTransform(482.4,264.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdCgIAAjvQAAgVgHgIQgGgIgNAAQgHAAgJAFQgJAGgGAKIAAD/Ig6AAIAAk7IAtAAIAFAhIAAABQAGgLAJgHIAQgMIARgGIARgCQAbAAAQAUQAPATAAAnIAADxg");
	this.shape_1.setTransform(462.7,268.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGCNQgPgUgBgnIAAjxIA6AAIAADtQAAAVAHAIQAGAIAMAAQAJAAAHgFQAJgFAHgJIAAj/IA5AAIAAE7IgsAAIgFghQgIAKgHAIQgIAHgIAEIgRAGIgRACQgbAAgPgTg");
	this.shape_2.setTransform(439.3,268.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTCgQgLgCgJgFQgKgFgIgKQgJgIgHgQQgGgPgEgXQgEgXABgeIAAgxQAAgfADgWQAEgWAHgPQAGgOAJgKQAIgIAKgFQAKgEAKgCIAUgCIATABQALACAJAFQAJAEAJAJQAJAJAHAOQAGAPAEAXQAEAWgBAfIAAAxQAAAegDAWQgFAXgGAPQgGAPgJAKQgJAKgJAEQgLAGgJACIgTACgAgMhyQgGAEgEAKQgDAIgCAQIgBAlIAABNIABAlQACAQADAIQAEAKAGAEQAFADAIABQAIgBAFgDQAFgEAEgKQADgIACgQIABglIAAhNIgBglQgCgQgDgIQgEgKgFgEQgFgEgIAAQgIAAgFAEg");
	this.shape_3.setTransform(416.7,268.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7CAQgVggAAhEIAAg6QAAgeAFgVQAEgWAHgOQAIgPAJgJQAJgIAKgEQAKgFAJgCIARgBQAQAAAOAFQANAEAJAIQAKAJAFANQAGANAAASIgBATIgDAPIgvAAIAAgLQAAgXgFgOQgGgNgNAAQgGAAgFADQgFAEgEAHQgDAIgCAOIgCAiIAABZIABAjQACAOADAJQAEAJAFAFQAGAEAIAAIAIgCQAEgDAEgFIAFgNIABgVIAAgKIAyAAIAAAMQAAAugTAUQgUAVgoAAQgnAAgVgig");
	this.shape_4.setTransform(396.1,268.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7CAQgVggAAhEIAAg6QAAgeAFgVQAEgWAHgOQAIgPAJgJQAJgIAKgEQAKgFAJgCIARgBQAQAAAOAFQANAEAJAIQAKAJAFANQAGANAAASIgBATIgDAPIgvAAIAAgLQAAgXgFgOQgGgNgNAAQgGAAgFADQgFAEgEAHQgDAIgCAOIgCAiIAABZIABAjQACAOADAJQAEAJAFAFQAGAEAIAAIAIgCQAEgDAEgFIAFgNIABgVIAAgKIAyAAIAAAMQAAAugTAUQgUAVgoAAQgnAAgVgig");
	this.shape_5.setTransform(376.1,268.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuDEIgLhGIhGAAIgLBGIg8AAIBImHIBEAAIBIGHgAAdBRIgcjDIgCAAIgbDDIA5AAg");
	this.shape_6.setTransform(354.9,264.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhUAYIAAgvICqAAIAAAvg");
	this.shape_7.setTransform(332.4,266.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdDaIAAk7IA5AAIAAE7gAgZiYQgJgKAAgSQAAgKACgIQADgHAEgEQAFgEAGgCIAOgCQASAAAIAJQAJAIAAAUQAAASgJAKQgJAKgRAAQgPAAgKgKg");
	this.shape_8.setTransform(315.1,262.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAhDRIhBidIgCAAIAACdIg6AAIAAmhIA6AAIAADwIACAAIA+iKIA4AAIhGCPIBNCsg");
	this.shape_9.setTransform(299.7,263.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcDRIAAmhIA5AAIAAGhg");
	this.shape_10.setTransform(281.4,263.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgxCbQgLgGgIgJQgIgLgEgNQgEgOAAgQQAAgUAFgPQAFgPAJgMQAJgMAOgLQAOgJASgJIATgJIATgHIAAgqIgBgRIgDgOQgDgFgFgEQgFgDgJAAIgLACQgGADgFAFQgEAGgDAJQgCAIAAAOIAAAOIgtAAIgDgQIgBgPQAAgSAGgNQAGgOALgJQALgKAPgEQAPgEARgBQAYAAAQAGQAPAEAKALQAJALAEAPQAEAQAAAUIAADsIgsAAIgEgbQgJANgQAJQgPAIgUABQgOAAgMgHgAASAJIgNAHIgLAJIgKANIgIARQgDAKAAAMQAAARAHAMQAHALAPAAQAHgBAHgDIAMgJIAAhjg");
	this.shape_11.setTransform(263.9,268.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAuDEIghi8IgKhRIgDAAIgKBRIgiC8Ig7AAIg5mHIA5AAIAaDsIADA3IAGAAIAGg+IAqjlIAvAAIAnDlIAFA+IAGAAIADg3IAYjsIA5AAIg3GHg");
	this.shape_12.setTransform(237.3,264.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdDRIAAjvQAAgVgGgIQgGgIgNAAQgIAAgIAFQgJAGgHALIAAD+Ig6AAIAAmhIA6AAIAABLIgDA2QAGgJAIgGIAQgJIAPgFIAPgCQAcAAAPAUQAPATAAAnIAADxg");
	this.shape_13.setTransform(198.5,263.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDDGQgLgEgJgIQgJgKgEgQQgGgQAAgZIAAjDIgZAAIAAgqIAeAAIAMhSIAoAAIAABSIAyAAIAAAqIgyAAIAADIIACAQIAFAKIAIAFIAKABIAPgCIAMgGIAAAgIgKAKIgMAHIgNADIgMABQgNAAgKgDg");
	this.shape_14.setTransform(179.3,264.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdDaIAAk7IA5AAIAAE7gAgYiYQgKgKAAgSQAAgKADgIQACgHAFgEQAEgEAHgCIANgCQARAAAJAJQAJAIAAAUQAAASgJAKQgJAKgRAAQgPAAgJgKg");
	this.shape_15.setTransform(165.5,262.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAuDEIggi8IgKhRIgEAAIgKBRIgiC8Ig7AAIg5mHIA5AAIAbDsIADA3IAFAAIAFg+IArjlIAuAAIApDlIAEA+IAGAAIADg3IAYjsIA5AAIg3GHg");
	this.shape_16.setTransform(142.5,264.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAcCgIAAjvQAAgVgFgIQgHgIgMAAQgIAAgIAFQgKAGgGAKIAAD/Ig6AAIAAk7IAtAAIAFAhIAAABQAHgLAIgHIAQgMIARgGIARgCQAcAAAPAUQAPATAAAnIAADxg");
	this.shape_17.setTransform(103.8,268.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdDaIAAk7IA5AAIAAE7gAgZiYQgJgKAAgSQAAgKADgIQACgHAEgEQAFgEAHgCIANgCQARAAAJAJQAJAIAAAUQAAASgJAKQgJAKgRAAQgPAAgKgKg");
	this.shape_18.setTransform(86.2,262.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdDQQgOgDgKgHQgLgHgGgMQgGgMAAgSIABgIIACgLIApAAQAAAVAIAIQAIAJAPAAIAMgCQAGgCAEgFQAFgFACgKQADgJAAgOIAAgyQgIAKgMAHQgLAHgSAAIgNAAIgOgFQgIgEgHgHQgIgIgFgNQgGgMgEgTQgDgTAAgaIAAhTQAAgaADgSQAEgSAGgMQAFgMAIgHQAHgHAIgDIAPgFIANgBQAMAAAHADQAJADAHAFIALALIAIANIAFgfIAtAAIAAEuQAAAagFAWQgFAVgLAPQgLAPgQAIQgRAIgWAAQgQAAgNgDgAgLilQgFACgEAHQgEAGgCALIgCAdIAABoIACAcQACALAEAGQAEAHAGACIAKACIALgBIAIgGIAGgHIAEgIIAAisQgEgKgHgHQgHgGgLAAg");
	this.shape_19.setTransform(68.3,273.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTCgQgLgCgJgFQgKgFgJgKQgIgIgHgQQgGgPgEgXQgDgXAAgeIAAgxQAAgfADgWQAEgWAHgPQAGgOAJgKQAIgIAKgFQAKgEAKgCIAUgCIATABQAKACAKAFQAJAEAJAJQAJAJAHAOQAGAPAEAXQAEAWgBAfIAAAxQAAAegDAWQgEAXgHAPQgGAPgJAKQgJAKgKAEQgJAGgKACIgTACgAgMhyQgGAEgEAKQgDAIgBAQIgCAlIAABNIACAlQABAQADAIQAEAKAGAEQAGADAHABQAHgBAGgDQAFgEAEgKQADgIACgQIABglIAAhNIgBglQgCgQgDgIQgEgKgFgEQgGgEgHAAQgHAAgGAEg");
	this.shape_20.setTransform(46.5,268.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhFDEIAAmHIA7AAIAAFYIBQAAIAAAvg");
	this.shape_21.setTransform(28.1,264.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6CC2CC").s().p("EgkpAJJQhLABg2g2Qg3g2AAhMIAAsjQAAhMA3g2QA2g2BLAAMBJTAAAQBMAAA2A2QA2A2gBBMIAAMjQABBMg2A2Qg2A2hMgBg");
	this.shape_22.setTransform(253,265.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,206.7,505.9,117.1), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#418FA5","#509EB4","#A4D2E4","#CBE7F8"],[0,0.165,0.745,1],186.4,-173.8,-135.2,184.9).s().p("AIWIlQgpi5iUh6QiXh7jCAAQjBAAiXB7QiUB6gpC5IhPAAQAnjNCdiNQCdiPDTgRIAwpQIAxJQQDTARCdCPQCdCNAnDNg");
	this.shape.setTransform(167,92.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#418FA5","#509EB4","#A4D2E4","#CBE7F8"],[0,0.165,0.745,1],218.6,-277.9,-103,80.8).s().p("AgwgqQjTgRidiOQidiOgnjOIBPAAQApC6CUB6QCXB7DBAAQDCAACXh7QCUh6Api6IBPAAQgnDOidCOQidCOjTARIgxJQg");
	this.shape_1.setTransform(167,225.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#418FA5","#509EB4","#A4D2E4","#CBE7F8"],[0,0.165,0.745,1],149.6,-205.5,-172,153.2).s().p("ApiKiQDrgyCai8QCbi+AAj2QAAj1ibi+Qiai8jrgzIAAhkQEIAzCzDJQC0DMAREQIJFAuIpFAwQgREPi0DLQizDLkIAxg");
	this.shape_2.setTransform(242.7,159);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#418FA5","#509EB4","#A4D2E4","#CBE7F8"],[0,0.165,0.745,1],255.5,-246.2,-66.1,112.5).s().p("ACoIKQi0jLgQkPIpGgwIJGguQAQkQC0jMQC0jJEHgzIAABkQjrAziZC8QicC+AAD1QAAD2CcC+QCZC8DrAyIAABkQkHgxi0jLg");
	this.shape_3.setTransform(91.3,159);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#418FA5","#509EB4","#A4D2E4","#CBE7F8"],[0,0.165,0.745,1],202.5,-225.8,-119.1,132.9).s().p("AkPEQQhwhxAAifQAAieBwhxQBxhwCegBQCfABBxBwQBwBxAACeQAACfhwBxQhxBwifABQiegBhxhwgAjYjYQhaBaAAB+QAAB/BaBaQBaBaB+AAQB/AABahaQBahaAAh/QAAh+hahaQhahah/AAQh+AAhaBag");
	this.shape_4.setTransform(167,159);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DC5C4E").s().p("AhQBSQgjgiAAgwQAAguAjgjQAhghAvgBQAwABAiAhQAhAjABAuQgBAwghAiQgiAhgwABQgvgBghghg");
	this.shape_5.setTransform(167,159);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#404041").s().p("AhgNLQkogijUjTQjUjTgiknIszhoIM0hnQAlkmDTjRQDUjREnghIBerrIBfLrQEnAhDUDRQDTDRAlEmIM0BnIszBoQgiEnjUDTQjUDTkoAiIhhL8g");
	this.shape_6.setTransform(167,160.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,334.1,321.5), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.backgroundbg_hover01();
	this.instance.parent = this;
	this.instance.setTransform(-4,-7,0.259,0.259);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-4,-7,810.6,1441.6), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAdQgWgcgdAAQAdgBAVgbQAVgcAAgnQAAAnAVAbQAWAcAeAAQgeAAgVAcQgVAcAAAnQgBgngUgbg");
	this.shape.setTransform(234.6,342.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqA4Qgqg3g7gBQA7AAAqg3QAqg3AAhNQACBNApA3QAqA3A7AAQg7ABgqA3QgpA3gCBMQAAhMgqg3g");
	this.shape_1.setTransform(160.8,440.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpA5Qgqg4g8gBQA8AAAqg4QApg2AAhMQABBMApA2QAqA4A7AAQg7ABgqA4QgpA2gBBMQAAhMgpg2g");
	this.shape_2.setTransform(391.3,198.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMASQgOgSgTABQATgBAOgRQAMgRAAgYQAAAYANARQAOARASAAQgSAAgNASQgNARAAAYQgBgYgMgRg");
	this.shape_3.setTransform(54.8,55.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMASQgOgSgTAAQATAAAOgRQAMgRAAgYQAAAYANARQAOARASAAQgSAAgNARQgNASAAAYQgBgYgMgRg");
	this.shape_4.setTransform(175.1,145.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAjQgagigkgBQAkAAAagiQAagiAAgwQABAwAZAiQAbAiAkAAQgkABgbAiQgZAigBAwQAAgwgagig");
	this.shape_5.setTransform(8.9,117);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAjQgagjgkAAQAkAAAagiQAagiAAgwQABAwAZAiQAbAiAkAAQgkAAgbAjQgZAigBAwQAAgwgagig");
	this.shape_6.setTransform(132.9,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,405.6,459.2), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAdQgWgcgdAAQAdgBAVgbQAVgcAAgnQAAAnAVAbQAWAcAeAAQgeAAgVAcQgUAcgBAnQgBgngUgbg");
	this.shape.setTransform(234.6,342.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpA5Qgrg4g7gBQA7AAArg3QApg3AAhNQABBNAqA3QApA3A8AAQg8ABgpA4QgqA2gBBNQAAhNgpg2g");
	this.shape_1.setTransform(160.8,440.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpA5Qgqg4g8gBQA8AAAqg3QApg3AAhNQABBNApA3QAqA3A7AAQg7ABgqA4QgpA2gBBNQAAhNgpg2g");
	this.shape_2.setTransform(391.3,198.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMASQgOgRgTgBQATAAAOgRQAMgRAAgYQAAAYANARQAOARASAAQgSAAgNARQgNASAAAYQgBgYgMgRg");
	this.shape_3.setTransform(54.8,56);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMASQgOgSgSABQASgBANgRQANgRAAgYQAAAYANARQAOARASAAQgSAAgNASQgNARAAAYQgBgYgMgRg");
	this.shape_4.setTransform(175.1,145.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAjQgagjgkAAQAkAAAagiQAagiAAgwQABAwAZAiQAbAiAkAAQgkAAgbAjQgZAigBAwQAAgwgagig");
	this.shape_5.setTransform(8.9,117.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAjQgagigkgBQAkAAAagiQAagiAAgwQABAwAZAiQAbAiAkAAQgkABgbAiQgZAigBAwQAAgwgagig");
	this.shape_6.setTransform(132.9,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,405.6,459.3), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,678,470), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICBAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,368,243), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICBAssets_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,428,224), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICBAssets_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,617,209), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICBAssets_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,443,175), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,612,792), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#395266").s().p("Eg94BsAMAAAjX/MB7xAAAMAAADX/g");
	this.shape.setTransform(396.1,691.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,792.2,1382.3), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#688A9E").s().p("AAOBhQhgh9h2iuIhkiVIBYAtQBrA6BaBEQEhDZAZDnQAJBUgjAAQg+AAjFj/g");
	this.shape.setTransform(158.1,121,0.319,0.319);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#688A9E").s().p("AAABfQhyhiiJiPIhzh7IBzALQCJASByAkQFvBzAAD5QAABuhIAAQhaAAjNivg");
	this.shape_1.setTransform(104.9,118.4,0.319,0.319);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#688A9E").s().p("EAMgA+kQmVj6kulxQkwl1ijnBQiqnTAAn0QAAjWAgjWQg9iwiJltQinnBhKjIQk6tgjCq2QiFnYg4nIQg1m5AXl5QAYl3BhkJQBjkPClh6QhcHRgmFmQguG2AnD8QBCGmHkXWQEcNtArCKQCWHdANB2QAKBagNHBQgCHzBDGDQDWTTObGiQKAEhDtE6QnZhmmdj/g");
	this.shape_2.setTransform(53.8,142.6,0.319,0.319);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7FA0B6").s().p("EgIRBCDQn7jXmHmHQmImIjWn7QjeoOAAo/QAAjXAgjVQg+iwiIluQionAhJjJQk6tgjDq1QiSoJg1nzQgynjAsmLQAsmLCDj3QCJkADTg7QDfg/C8ArQDJAuCzCsQF4FpFbPpQEnNUB/EtQD8JVC9BgQH2jJIhAAQI/AAINDeQH7DXGIGHQGHGHDXH7QDeINAAI/QAAI/jeIOQjXH7mHGIQmIGHn7DXQoNDeo/AAQo+AAoOjeg");
	this.shape_3.setTransform(108.4,141.8,0.319,0.319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,216.7,283.7), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhCQBvmMAAAjfLMCEhAAAMAAADfLg");
	this.shape.setTransform(424.1,714.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,848.2,1428.4), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Eg7EBoaMAAAjQzMB2JAAAMAAADQzg");
	this.shape.setTransform(378.1,668.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,756.2,1336.3), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjHCpQhHhGABhjQgBhiBHhGQBGhGBiAAQAyAAAtAVQAsATAiAjIBVgKIArByIg/BNQgIBdhEBAQhFBAhdAAQhiAAhGhGg");
	this.shape.setTransform(27.1,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,54.1,47.8), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol5, null, null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0F1EA").s().p("AiZkQIEzgPIg4I6IhuAGg");
	this.shape.setTransform(88.4,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0F1EA").s().p("AkBhoID6i2IEJH8IhbBBg");
	this.shape_1.setTransform(50.6,32.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0F1EA").s().p("AkxBWIB3kcIHrEmIgrBng");
	this.shape_2.setTransform(30.6,62.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,103.9,82.2), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(237,188,178,0)","rgba(239,185,151,0.396)","rgba(241,182,129,0.725)","rgba(242,180,117,0.929)","#F3B370"],[0,0.263,0.541,0.796,1],0,5,0,-4.9).s().p("AgKAtQgEgFgBgGIAAhDQABgGAEgFQAFgFAFABQAGgBAFAFQAFAFAAAGIAABDQAAAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape.setTransform(270,365.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(237,188,178,0)","rgba(239,185,151,0.396)","rgba(241,182,129,0.725)","rgba(242,180,117,0.929)","#F3B370"],[0,0.263,0.541,0.796,1],0,44.6,0,-44.5).s().p("AgKG5QgEgEgBgHIAAtbQABgHAEgEQAFgFAFAAQAGAAAFAFQAFAEAAAHIAANbQAAAHgFAEQgFAFgGAAQgFAAgFgFg");
	this.shape_1.setTransform(270,417.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(237,188,178,0)","rgba(237,173,133,0.282)","rgba(237,160,95,0.537)","rgba(238,150,70,0.737)","rgba(238,143,57,0.882)","rgba(238,139,52,0.969)","#EE8933"],[0,0.18,0.369,0.553,0.722,0.875,1],0,53.7,0,-53.6).s().p("AgpIHQgSgRAAgZIAAu4QAAgZASgSQARgSAYAAQAZAAARASQASASAAAZIAAO4QAAAZgSARQgRARgZAAQgYAAgRgRg");
	this.shape_2.setTransform(272.2,411.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3B370").s().p("AgKIVQgEgEgBgHIAAwTQABgHAEgEQAFgFAFAAQAGAAAFAFQAFAEAAAHIAAQTQAAAHgFAEQgFAFgGAAQgFAAgFgFg");
	this.shape_3.setTransform(270,282.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3B370").s().p("AgKMeQgFgEABgHIAA4lQgBgHAFgEQAEgFAGAAQAGAAAFAFQAEAEABAHIAAYlQgBAHgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape_4.setTransform(275.2,223.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3B370").s().p("AgKHoQgEgEgBgHIAAu6QABgGAEgEQAFgFAFAAQAGAAAFAFQAFAEAAAGIAAO6QAAAHgFAEQgFAFgGAAQgFAAgFgFg");
	this.shape_5.setTransform(270,163);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE8933").s().p("AADRdIgHgqQAKoRAGoXQALwsgbgbQgbgbgvgaIgpgUIAngBQAvAAAhABQAxABAgARQAnAUAAAjMAAAAhnQAAAugLATQgPAbgoAAQgkAAgPgqg");
	this.shape_6.setTransform(266.2,225.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3B370").s().p("AgHHgQgDgDAAgFIAAuwQAAgEADgDQADgEAEAAQAFAAADAEQADADAAAEIAAOwQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_7.setTransform(32.6,244.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE8933").s().p("AgYILQgFgJAAgXIAAwCIA7BYIgGOvIgCAUQgHAUgPAAQgRAAgHgNg");
	this.shape_8.setTransform(33.8,241.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(63,54,31,0)","#3F361F"],[0,1],0,-91.6,0,119.7).s().p("AENTxQh5iIhXgeQhWgehigVIhSgQQgWhKgshqQhZjUhvigQg7hWjAiLQh5hYkDinQkIiohXg/QichwgGguQgNhVCeg2QBPgbBRgKQglgjghg9QhCh8ASiHQATiICMhJQBHgmBCgKQB+g2Dog2QHRhtIYAAQJCABGlBYQCmAkBrAqQBhAnASAgQAOAZgzBNQgSAahsCMQjKEFgQCNQgUC2hBDJQg9C5g1BHQgqA4i5BmQhcAyhVAoIgHCDQgMCggVCOQhGHGiTBqQgrg9g9hEg");
	this.shape_9.setTransform(161.7,244.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#907456").s().p("ACbHjQgzhEgjh0QgXhLhdhNQg5gugSgRQgogogXgsQgWgogpg3Qgvg+gWgeQhNhtAGhSQADgqBmgpQBcglCKgYQCHgYBvACQB4ABAkAgQAiAfAGAzQAEAmgLBHQgRBsgCAVQgIBQALBCQAVB4gaBTIgVA9QgMAjgCAgQgCA1AEBoQgFBSg0ARQgMADgLAAQgvAAgug+g");
	this.shape_10.setTransform(106.4,171.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#74542F").s().p("AjrIRQAUh2BIjcQBhknBRhMQBPhKBRmnQAojUAYjEQgIFkguEKQgyEghMAsQhCAmhpEyQgiBhhPEMQgQA2gUDpQgKB0gHBpQAJniAOhLg");
	this.shape_11.setTransform(214.8,216.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#74542F").s().p("AHSShQg3gRhDgNIg4gKQgThcgdh1Qg5jpgsh4QgwiHjal3QjMlfhVhvQhtiOhPiHQhvi8ARhFQAThNB4gzQBzgyEag3QEXg4D3ABQD8AAA+A7QAcAbgFAtQgDAZgbBSQhBDGALC4QAMC8hIEoQgnChgJAxQgVBvAGBQQARDxAsKlg");
	this.shape_12.setTransform(112.3,233.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#74542F").s().p("Ak4L9QBHh/AriLQAtiNAhlZQASjHAKi+QACg5BcjdIBcjSIAgAFQAsAIA1AMQBVATBDASQg7Ccg6C2Qh0FrAGCAQAGCUhsEJQguBwgvBSQgyBUghATQhbAyiZBOQAagkAkhAg");
	this.shape_13.setTransform(262.3,198.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#74542F").s().p("AAhAPQgpgtiLhnQhyhUhgg/Qg/gpgngrIgbgiQAJgHAQgHQAhgQAngKQA+gQBLgPIBNBtQBdCFBUBtQCICvFdGdQmJmCg9hFg");
	this.shape_14.setTransform(55.9,235.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#513720").s().p("AENTxQh5iIhXgeQhWgehigVIhSgQQgWhKgshqQhZjUhvigQg7hWjAiLQh5hYkDinQkIiohXg/QichwgGguQgNhVCeg2QBPgbBRgKQglgjghg9QhCh8ASiHQATiICMhJQBHgmBCgKQB+g2Dog2QHRhtIYAAQJCABGlBYQCmAkBrAqQBhAnASAgQAOAZgzBNQgSAahsCMQjKEFgQCNQgUC2hBDJQg9C5g1BHQgqA4i5BmQhcAyhVAoIgHCDQgMCggVCOQhGHGiTBqQgrg9g9hEg");
	this.shape_15.setTransform(161.7,244.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#376641").s().p("AhCBJQgLgGgMgCIgJgBIAMgFQAPgEANgCQAUgDAOALQAAgUgPgPQgJgJgMgHIgJgFIAWAEQAXAFAGADQAKAGADAEQgHghgPgSQgKgLgPgOIgMgMIAMADQAPAFALALQARAQAGALQgJgeAEgWQADgOAJgPIAJgLIAFAiQAFAkAGANQAKAUAZAQQgBgUAGgLQADgGAIgKIAIgIIgEAQQgDASAEAMIAOA0IiOA1QgGgZgRgKg");
	this.shape_16.setTransform(48.9,119.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#61B26F").s().p("AghCTQgIgRgYgDQgYgEgeAOIgZAOQADgIAJgKQASgWAagQQAVgNAdAGQAPAEALAGQgJgKgPgKQgggVgkgEQgggDgtAHIgoAIQA3gbAwgMQAfgIAsARQAWAJAQAKQgLgOgUgSQgngjgvgXQgvgXgxAIIgpAMQAPgNAZgNQAzgZAyAEQAzAEApAnQAUATAJATQgFgQAAgXQgBgsAZggQAZgfA2gIQAagDAWACIghAVQgkAcgQAeQgRAdAQAuQAIAVALARQABgOAGgTQAMgnAbgbQAngmAyAEQAZACASAKQgXADgaAKQg2AUgUAhQgVAkAMAvQAGAYAKARIiuA9QABgHgEgIg");
	this.shape_17.setTransform(46,114.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC6A37").s().p("AhLiEIFvDpIpHAgg");
	this.shape_18.setTransform(206,114.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F3BD5E").s().p("AjzhjIHnA2Ih6CRg");
	this.shape_19.setTransform(186.2,91.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#376641").s().p("Ag1A3QADgSgIgMQgEgHgHgFIgGgDIAJABQALABAJADQAOAFAFALQAGgNgFgOQgDgIgFgIIgFgGIANAKQANAJADAEQAFAGAAAEQAGgXgEgQIgHgYIgFgLIAHAGQAIAIADAKQAGAQAAAIIADgMQAEgOAGgJQAKgNAQgFIgHAXQgIAZAAAJQAAAPALATIAEgHQAEgJAFgDQAGgFANgDIgHAHQgHALgCAKIgHAlg");
	this.shape_20.setTransform(199.7,80.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#61B26F").s().p("AhVBeQADgEAAgHQAAgNgOgJQgPgKgXgBIgUACIANgIQASgJAWgCQARgCARAOQAIAGAFAHQgCgIgHgMQgOgWgVgOQgTgLgggKIgbgHIAaABQAeACAVAFQAWAEAXAXQALANAHALQgCgMgHgSQgOgigXgdQgXgdgigKIgdgFIAhgEQAogBAfASQAfASAOAmQAHATABAPQABgMAHgPQAMgdAagMQAagMAkAMQATAGANAIQgMABgQADQggAGgTAOQgUAOgEAgQgCARACAOIAPgTQAUgVAZgIQAlgNAfASQAPAJAIALQgPgFgUgCQgogEgXAQQgZAQgHAiQgEASACANg");
	this.shape_21.setTransform(201.7,76.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EBA14C").s().p("Ai3grIB6iSID1F7g");
	this.shape_22.setTransform(216.8,105.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FBE384").s().p("Ai2joIFtDIIjXEJg");
	this.shape_23.setTransform(180.2,104.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EBA14C").s().p("AinhBIBYh+ID3F/g");
	this.shape_24.setTransform(193.8,67.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F3BD5E").s().p("AikhwIAtAJQA5ANA/ASQBoAeA8AeIhYB9g");
	this.shape_25.setTransform(169.3,49.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FBE384").s().p("Ah4jXIDxDiIiXDMg");
	this.shape_26.setTransform(165,59.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC6A37").s().p("AjzBLICYjLIFPEBg");
	this.shape_27.setTransform(186.2,73.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F3BD5E").s().p("AjIhHIA0gMQBBgOBBgDQBFgDBSAGQApAEAbAEIjFC/g");
	this.shape_28.setTransform(132.8,47.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FBE384").s().p("Ag/jYIDLCuIkYEDg");
	this.shape_29.setTransform(119.1,61.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC6A37").s().p("AgCiBIEeDuIo3AVg");
	this.shape_30.setTransform(133.5,70.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EBA14C").s().p("AiPgXIDEjAIBaGug");
	this.shape_31.setTransform(147.5,59.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC6A37").s().p("AgniWIHVD+ItbAvg");
	this.shape_32.setTransform(133.9,117.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EBA14C").s().p("AjqgVIE/jTICWHRg");
	this.shape_33.setTransform(153.4,104.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FBE384").s().p("Ag1j1ID4C+ImFEtg");
	this.shape_34.setTransform(110.4,108.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F3BD5E").s().p("AkbhUII3gVIk/DSg");
	this.shape_35.setTransform(133.5,92);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FBE384").s().p("ABojtIAmCEIkbFXg");
	this.shape_36.setTransform(79.6,73.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EBA14C").s().p("AheAMIC8jkIhMGxg");
	this.shape_37.setTransform(103.3,61.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC6A37").s().p("ABWirIBwDLImLCMg");
	this.shape_38.setTransform(85.2,80.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F3BD5E").s().p("AhwgRIAWgOQAhgUA0gWQBUghAigHIi8Djg");
	this.shape_39.setTransform(101.4,51.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FBE384").s().p("ABKi7IAvCeIjxDZg");
	this.shape_40.setTransform(58.1,116.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC6A37").s().p("AARhsIDQDBInBAYg");
	this.shape_41.setTransform(68.5,124.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EBA14C").s().p("AiuA0IFdkpIiOHrg");
	this.shape_42.setTransform(87.6,108.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F3BD5E").s().p("AjFgIIGLiMIlcEpg");
	this.shape_43.setTransform(85.2,98.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#376641").s().p("AhECFQgLgVgPgIQgPgJgQgDIgPgCIASgGQAVgGATgDQARgCASAHQAIADAFAEQAAgHgCgKQgGgUgNgNQgNgNgRgJIgNgHIAfAFQAhAHAIAFQAPAIAEAFIgIgbQgKgegNgPQgOgQgUgUIgSgRIARAFQAVAHAPAPQAYAXAJAPIgFgZQgGgcAFgUQAEgUANgUQAHgLAFgGIAHAwQAHA0AJASQAJASAVASQAKAKAJAGIAAgRQABgSAGgKQAEgJAMgNIALgLIgGAVQgDAaAEATQAIAfANApIjKBLQgCgJgFgLg");
	this.shape_44.setTransform(105.3,29.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#61B26F").s().p("AgwDOQgLgXgjgFQgigFgqATIgjAUIARgaQAZgeAlgXQAdgTAqAKQAWAFAOAIQgMgNgVgPQgtgdgzgGQgsgFhBAKIg4ALIAwgVQA3gXArgKQAqgLA/AYQAfAMAXAOQgPgTgcgaQg4gzhCggQhCgghHALIg4ARIA4gkQBHgkBIAGQBHAFA6A4QAdAbANAbQgHgXgBggQgBg/AkgtQAkgrBLgLQAngFAfADQgWALgZATQgzAngYAqQgXAqAVBAQAMAfAPAYQABgUAJgbQASg3AngmQA2g2BHAGQAkADAYAOQggAEglAOQhMAcgcAvQgfAzASBDQAIAiAOAXIj2BXQABgLgGgMg");
	this.shape_45.setTransform(101.3,22.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#376641").s().p("AhRBCQAHgZgKgRQgGgKgJgIIgIgGIANADQAPADAMAFQATAIAGAQQALgRgFgUQgEgMgHgMIgFgJIARAPQARAPADAFQAGAKABAFQAKgggDgXQgCgPgGgUIgGgQIAKAJQAJAMAEAOQAHAYAAALIAFgRQAIgTAJgLQAPgRAXgGIgMAfQgOAigBAOQgCAWANAbIAGgKQAIgLAHgEQAJgGATgFIgLALQgMAPgDANIgOA0g");
	this.shape_46.setTransform(248.2,104.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#61B26F").s().p("AiCCBQAFgGAAgJQACgTgUgPQgTgPgggDIgegBIAVgJQAagKAegBQAZgBAWAVQAMAKAGALQgDgNgIgRQgRghgdgVQgagSgrgRIgmgNIAkAEQArAGAdAIQAeAJAfAjQAOATAJAQQgCgRgJgaQgQgygdgrQgdgrgugSIgqgKIAwgCQA4ADAqAdQAqAdAQA2QAIAbAAAUIANgjQAUgoAngOQAlgOAyAUQAZAKASANQgRAAgWADQgtAFgdASQgeARgJAuQgEAXABAUIAXgZQAegcAlgJQA0gNAqAcQAVAOALARQgWgIgcgFQg4gKgiATQglAVgNAvQgHAYAAATg");
	this.shape_47.setTransform(251.5,97.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,323.4,465.3), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(-13.2,-13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-13.2,-13.6,333,367), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F1E7FD").s().p("AgKGYQgFgFAAgHIAAsYQAAgHAFgEQAEgEAGgBQAGABAFAEQAFAEAAAHIAAMYQAAAHgFAFQgEAEgHABQgGgBgEgEg");
	this.shape_48.setTransform(252.9,316.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F1E7FD").s().p("AgKFEQgFgEAAgHIAApxQAAgHAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAHIAAJxQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_49.setTransform(257.9,260.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F1E7FD").s().p("AgKFrQgFgEAAgGIAArAQAAgGAFgGQAEgEAGAAQAHAAAEAEQAFAGAAAGIAALAQAAAGgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_50.setTransform(252.9,212.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F3C6FB").s().p("AgnQdIgHgmIgK8DIBxk3MAAAAgyQAAAqgJASQgNAZghAAQgdAAgMgng");
	this.shape_51.setTransform(255.4,255.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(84,112,166,0)","rgba(43,78,140,0.588)","#11387B"],[0,0.557,1],0.7,-69.5,-3.3,123.2).s().p("AgiSmQg8gmhDheQhBhbguhqQgwhvgGhTQgMiMo5lJQiWhWkFiLQjPhugXgSQgigZAcgxQAUgkBCg+QBOhIAigiQA7g8ALglQAMgngSgnQgLgWglgvQgkgugNgcQgVguAIgwQAKg1AkgcQAhgaBPgXQEKg6D9hMQERhSHqgQQGdgNEAAhQDuAfB7BnQAyArANAqQANAqgZAbQhIBOgIAUQgQAtBgAAQB4AACXBJQCdBMATBNQARBBjPCfQj4CvhLA7QheBIiAERQg/CIguB6QgmgTg8AEQh4AIhvByQhiBkhZDJQg2B6gKAUQgkBIgjAmQgTAVgaAAQgaAAgigWg");
	this.shape_52.setTransform(156.8,227.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6F87BF").s().p("AiVFGQCIkQAKhXQAJhZCNjuQBHh2BDhmQhgD+gwBYQgXAqgKBMQgKBIgeAwQg3BekpHnQBCh3BFiIg");
	this.shape_53.setTransform(233.6,202.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6F87BF").s().p("AD4FpQjHjhgxhbQg0hgg6hDQgegihnhkQhEhBhFiDIg2h2IBlCHQB6CVBlBHQBgBDBzDGIBQCSQApBKATAZQBCBUCBC4Qhahehihwg");
	this.shape_54.setTransform(60.1,199.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6F87BF").s().p("ADLFIQhYjDhVhgQhUhfh1jSIhli/ICpgsIBDCzQBPDCA9BGQA8BGA8D+QAeCAATBwQgbhOgrhig");
	this.shape_55.setTransform(81.3,170.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9FB4DE").s().p("AiuLEQgzgaggk4QgPiagRlRQgDg8grhMQgRgdhGhkQg2hOgQgtQgYhBAagyQAohNCZgIQBggEEsAdQDrAWBqBdQBgBUgvBpQggBIiCCKQiXChgpA6QggAvgvB7QgcBIg2CeQhfEFguAAQgDAAgEgCg");
	this.shape_56.setTransform(167,181.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6F87BF").s().p("Ai3SUQgygGg+hWQg5hQgzh7Qgzh9gYh5QgaiDAPhWQAciog+mqQg5mRg2h5QgVgvghgmIg1g3Qg3g5AJhNQALhbBHgaQAegLA7gIIB/gRQClgYDlgLQDYgLCRAGQCZAHCLAiQCeAnA5A5QAyAyhhDSQg0ByhnDDQgUAvg3BWIhtCnQiXDqgzCVQgXBEg1DBQg8DdgeBiQhzF0hTAAIgEAAg");
	this.shape_57.setTransform(175.2,224.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5470A6").s().p("AgiSmQg8gmhDheQhBhbguhqQgwhvgGhTQgMiMo5lJQiWhWkFiLQjPhugXgSQgigZAcgxQAUgkBCg+QBOhIAigiQA7g8ALglQAMgngSgnQgLgWglgvQgkgugNgcQgVguAIgwQAKg1AkgcQAhgaBPgXQEKg6D9hMQERhSHqgQQGdgNEAAhQDuAfB7BnQAyArANAqQANAqgZAbQhIBOgIAUQgQAtBgAAQB4AACXBJQCdBMATBNQARBBjPCfQj4CvhLA7QheBIiAERQg/CIguB6QgmgTg8AEQh4AIhvByQhiBkhZDJQg2B6gKAUQgkBIgjAmQgTAVgaAAQgaAAgigWg");
	this.shape_58.setTransform(156.8,227.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(237,188,178,0)","rgba(184,149,174,0.576)","#9278AC"],[0,0.553,1],-21.9,-62.1,22,87.1).s().p("AokKWQi7hmg8jLQhelAE2mdQCcjOCuiPICOAYQCsAjCXA4QHlCzBeFAQA8DLhmC7QhmC6jMA8QhUAZhXgEQhTgEhPgfQgxBFhDAwQhHAzhUAYQhMAXhKAAQh8AAh1hAg");
	this.shape_59.setTransform(157.8,72.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(237,188,178,0)","rgba(233,161,176,0.42)","#E57EAE"],[0,0.4,1],23.6,93.9,-33.3,-103.2).s().p("AokKWQi7hmg8jLQhelAE2mdQCcjOCuiPICOAYQCsAjCXA4QHlCzBeFAQA8DLhmC7QhmC6jMA8QhUAZhXgEQhTgEhPgfQgxBFhDAwQhHAzhUAYQhMAXhKAAQh8AAh1hAg");
	this.shape_60.setTransform(157.8,72.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D78E83").s().p("AgGJ8QhUgFhOgeQA0ADBHgQQBYgTBJgqQDIhyAOjpQARkqm2khQjbiQjfhVICOAYQCtAkCYA4QHkCzBeFAQA8DKhmC7QhmC7jNA8QhIAWhLAAIgWgBg");
	this.shape_61.setTransform(186.2,63.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDBCB2").s().p("AokKWQi7hmg8jLQhelAE2mdQCcjOCuiPICOAYQCsAjCXA4QHlCzBeFAQA8DLhmC7QhmC6jMA8QhUAZhXgEQhTgEhPgfQgxBFhDAwQhHAzhUAYQhMAXhKAAQh8AAh1hAg");
	this.shape_62.setTransform(157.8,72.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6CA392").s().p("AphA3QArAABfACQBbgFBdgnQCnhEBTgaQBnggCIgSQBggNBrAXQBZATBuAwIAHAHQgugghngFQjNgLkgCDQjZBjihABIgFAAQiRAAgyhRg");
	this.shape_63.setTransform(232.4,119);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#85D0BA").s().p("AmYEDQiagCgqhdQguhlBAhpQBLh6DGg/QEpheFdC9QCvBeB0BxQgtgghngFQjOgLkgCEQjdBkigAAIgJAAg");
	this.shape_64.setTransform(231.1,106.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0.1,0,313.5,364.3), null);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9DBBF").s().p("AAUExQhEgCgth0QgjhYgGhlQgEg/AUhbQAKguALghIDihFIAGFiQAGD/h2AAIgDAAg");
	this.shape.setTransform(13.6,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,27.1,61), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2210").s().p("AjmA9QhggZAAgkQAAgjBggZQBfgaCHAAQCHAABgAaQBgAZAAAjQAAAkhgAZQhgAaiHAAQiHAAhfgag");
	this.shape.setTransform(32.7,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,65.4,17.4), null);


(lib.Path_19_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9DBBF").s().p("AAUExQhEgCgth0QgjhYgGhlQgEg/AUhbQAKguALghIDihFIAGFiQAGD/h2AAIgDAAg");
	this.shape.setTransform(13.6,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19_0, new cjs.Rectangle(0,0,27.1,61), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2210").s().p("Ag5APQgYgGAAgJQAAgIAYgGQAYgHAhAAQAiAAAYAHQAYAGAAAIQAAAJgYAGQgYAHgiAAQghAAgYgHg");
	this.shape.setTransform(8.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,16.4,4.4), null);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2210").s().p("Ag5AIQgYgDAAgFQAAgDAYgDQAYgEAhAAQAhAAAZAEQAYADAAADQAAAFgYADQgYADgiAAQghAAgYgDg");
	this.shape.setTransform(8.2,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,16.4,2.2), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2210").s().p("Ag5AIQgYgDAAgFQAAgDAYgDQAYgEAhAAQAiAAAYAEQAYADAAADQAAAFgYADQgYADgiAAQghAAgYgDg");
	this.shape.setTransform(8.2,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,16.4,2.2), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2210").s().p("AizAhQhLgNAAgUQAAgSBLgOQBKgOBpAAQBqAABKAOQBKAOABASQgBAUhKANQhKAOhqAAQhpAAhKgOg");
	this.shape.setTransform(25.5,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,50.9,9.4), null);


(lib.Path_13_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9DBBF").s().p("AiRD7Qg6goAChvQABhZAjhWQAXg7A6hJQAdglAYgZIDpAjQgCAVgOArQgcBWg6BwQhRCggoAtQgjAlgkAAQgaAAgbgTg");
	this.shape.setTransform(20.2,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13_0, new cjs.Rectangle(0,0,40.4,54.1), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3B3B3").s().p("AjjCLQClgdB3hdQBbhEBQhbQgbCVhsBIQheBAiYAAQgjAAgngEg");
	this.shape.setTransform(22.8,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,45.5,28.7), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404041").s().p("AitAtQhLgIgBgTQgBgSBIgSQBIgTBogHQBmgIBKAIQBKAIACATQABAShIASQhIAThoAHQgxAEgrAAQguAAgmgEg");
	this.shape.setTransform(25,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,50,9.8), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404041").s().p("AitAtQhLgIgBgTQgBgSBIgSQBIgTBogHQBmgIBKAIQBLAIABATQABAShIASQhIAThoAHQgxAEgrAAQguAAgmgEg");
	this.shape.setTransform(25,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,50,9.8), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2210").s().p("AkiBhQh5goAAg5QAAg4B5goQB4goCqgBQCqABB6AoQB4AoAAA4QAAA5h4AoQh6ApiqAAQiqAAh4gpg");
	this.shape.setTransform(41.2,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,82.4,27.5), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2210").s().p("AiuAgQhJgNAAgTQAAgRBJgOQBIgNBmAAQBnAABIANQBJAOAAARQAAAThJANQhIANhnAAQhmAAhIgNg");
	this.shape.setTransform(24.8,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,49.5,9), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2210").s().p("Ah6AwQgygUAAgcQAAgbAygUQAzgUBHAAQBIAAAzAUQAyAUAAAbQAAAcgyAUQgzAUhIAAQhHAAgzgUg");
	this.shape.setTransform(17.3,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,34.7,13.6), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#173347").s().p("AjMF9QiZgpg/g7QgtgrADhgQAChTAoiRQAhh4BChbQA1hKAdgGQAsAUBHAQQCMAfCEgRQB0gPBEglQAigSALgQQAJAFAOAdQAbA6AVB7QAaCZgSB7QgTCBg8A2QhMBFgwAaQhKAphtANQgeAEggAAQhfAAh1ghg");
	this.shape.setTransform(46.3,41.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,92.7,82.7), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2210").s().p("AhNAQQgggGgBgKQABgIAggHQAggHAtAAQAuAAAgAHQAhAHAAAIQAAAKghAGQghAHgtAAQgsAAghgHg");
	this.shape.setTransform(11.1,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,22.1,4.7), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404041").s().p("AgEA1Qh5gLhTgXQhUgWACgWQACgWBWgIQBXgIB4ALQB4ALBUAXQBUAWgCAWQgCAWhWAIQglADgqAAQg7AAhFgGg");
	this.shape.setTransform(29.1,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,58.3,11.9), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("Ag8BgQAcg9AcghQARgUAQgoQAIgUAFgRQAKAqAGArQAKBUgaAKQgbAKgnACIgTAAIgRAAg");
	this.shape.setTransform(6.1,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,12.2,19.2), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2210").s().p("Ah3AZQgxgKAAgPQAAgOAxgKQAygLBFAAQBGAAAyALQAxAKAAAOQAAAPgxAKQgyALhGAAQhFAAgygLg");
	this.shape.setTransform(16.9,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,33.9,7.1), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404041").s().p("AgFBCQiigPhxgdQhwgcACgcQADgbB0gKQB0gIChAOQCiAPBxAdQBwAdgCAbQgCAch1AIQgsAEgzAAQhTAAhjgJg");
	this.shape.setTransform(39.1,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,78.2,15), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("Ag4CNQAehAAfgxQAggxAXhcQAMguAFgkQAEAkgCAwQgDBigdBFQgcBFgzAqQgaAWgUAGQAIgVAOghg");
	this.shape.setTransform(7.9,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,15.9,39.1), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3B3B3").s().p("AqLGOQHUhRFbkMQEHjJDhkCQhMGsk1DQQkQC5myAAQhoAAhsgNg");
	this.shape.setTransform(65.2,41.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,130.5,82.2), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egb7AvEMAAAheHMA33AAAMAAABeHg");
	mask.setTransform(238.1,301.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2E8E4").s().p("Egr4AvFMAAAheJMBXwAAAMAAABeJg");
	this.shape.setTransform(280.9,301.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(59.3,0,357.7,602.4), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg2RAhFMAAAhCJMBsjAKcMAAAA3tg");
	mask.setTransform(418.1,266.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAtQgigrguAAQAugCAhgrQAggrAAg9QABA8AhArQAhArAvAAQgvABggAsQggArAAA9QgCg9gggqg");
	this.shape.setTransform(251.2,238.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguA/Qgvg9hBAAQBBgBAtg+QAug+AAhVQACBVAvA9QAvA9BBAAQhBABgtA+QguA+AABVQgChVgvg9g");
	this.shape_1.setTransform(677.2,205.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAiQgZghgkgBQAkAAAZghQAYghAAguQABAuAZAhQAZAhAjAAQgjABgZAhQgZAhgBAuQAAgugYghg");
	this.shape_2.setTransform(116,391);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAiQgaghgjgBQAjAAAaghQAYghAAguQABAuAZAhQAZAhAjAAQgjABgZAhQgZAhgBAuQAAgugYghg");
	this.shape_3.setTransform(693,339.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmAzQgmgyg1gBQA1AAAmgyQAmgxAAhGQABBGAlAxQAnAyA1AAQg1ABgnAyQglAxgBBGQAAhGgmgxg");
	this.shape_4.setTransform(517.3,122.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFD91","#75E1FB"],[0,1],0,330,0,-349.5).s().p("EhBOApnMAAAhTNMCCdAAAMAAABTNg");
	this.shape_5.setTransform(417.5,266.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(70.7,55,694.8,423.4), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg2RAZNMAAAgxsMBsjgKxMAAABGhg");
	mask_1.setTransform(440.1,240.4);

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAtQgigrguAAQAugBAhgsQAggsAAg8QABA8AhArQAhAsAvgBQgvABggAsQggAsAAA8QgCg8gggrg");
	this.shape_6.setTransform(303.2,190.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguA/Qgvg8hBgBQBBgBAtg+QAug+AAhVQACBVAvA9QAvA9BBAAQhBABgtA+QguA+AABVQgChVgvg9g");
	this.shape_7.setTransform(729.1,157.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAiQgZghgkgBQAkAAAZghQAYghAAguQABAuAZAhQAZAhAjAAQgjABgZAhQgZAhgBAuQAAgugYghg");
	this.shape_8.setTransform(167.9,343.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAiQgZghgjgBQAjAAAZghQAZghAAguQAAAuAaAhQAZAhAjAAQgjABgZAhQgaAhAAAuQAAgugZghg");
	this.shape_9.setTransform(745,292);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmAzQgmgyg1gBQA1AAAmgyQAmgxAAhGQABBGAlAxQAnAyA1AAQg1ABgnAyQglAxgBBGQAAhGgmgxg");
	this.shape_10.setTransform(569.2,74.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFD91","#75E1FB"],[0,1],0,330,0,-349.5).s().p("EhBOApnMAAAhTNMCCdAAAMAAABTNg");
	this.shape_11.setTransform(417.5,266.3);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(92.7,14.7,694.9,451.5), null);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2210").s().p("AqzBxQkfgugBhDQABhBEfgvQEegvGVAAQGWAAEfAvQEfAvAABBQAABDkfAuQkfAvmWAAQmVAAkegvg");
	this.shape.setTransform(98,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_36, new cjs.Rectangle(0,0,195.9,32), null);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2210").s().p("AmqBxQiwgvgBhCQABhCCwguQCxgvD5AAQD6AACxAvQCwAuAABCQAABCiwAvQixAvj6AAQj5AAixgvg");
	this.shape.setTransform(60.4,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0,120.7,32.1), null);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9DBBF").s().p("AgBCMQgFgGgCgKQgCgKACgLQAEgSAQgXIAdglQAOgTAMgYQAGgOACgLQADgPgCgJIAAgEIAAgBIgDgFIAAgBIgBAAIAAgBIgCgDIgEgGQgJgMgLgIQgXgVgagIQghgJgUAPQgPALgFAcQgDAcAFAOQAEAOARAFQALAEARgBIAUgCIAHgCIABADIgGAEQgIAGgLADQgTAGgQgBQgNgCgKgGQgMgIgGgOQgKgXAGggQAEgRAJgMQAKgNAQgHQAZgKAlAKQAcAHAdAQQANAHANAMIAJAJIAIALIADAKQAFAPgDAUQgCAOgGARQgLAbgSAXIgqAsIgGAIQgGAGgDAIQgHAPAFAJQAEAIAJAEIAGACIAAADIgIABQgMgBgIgKg");
	this.shape.setTransform(10.5,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,0.1,21,30.2), null);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9DBBF").s().p("AnPDvQB5gDBJgiQCGg9DtjMQB4hmBchaICWAfInpFEQgsA3hMAsQhjA5hnAAQg5AAg7gRg");
	this.shape.setTransform(46.4,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0,0,92.8,51.3), null);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9DBBF").s().p("AgdAnQgOgHgHgMQAIAEAMABQAYAEASgMQAUgLAKgZQAGgNABgKQADALgBAOQgBAbgSAOQgXATgTAAQgKAAgJgEg");
	this.shape.setTransform(5.1,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,10.3,8.7), null);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9DBBF").s().p("AFtEaQhHgWguiUQgOgugKg1IgIgrQhUAkhpArQjQBWhnAeQhnAfhdgxQgugZgageIABj5IQyiFIAeIOQgTAVggAQQgmASgpAAQgcAAgegJg");
	this.shape.setTransform(55.3,29.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,110.6,58.3), null);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AkrDYQitgMh8gaQh9gbgOgdQgXgwgHg2IgCgrQB+AdCvAVQFgArD6gvQD7gtCNhpQBGg1AUgrICWCFQgGAhg0AwQhnBfjjBMQi5A9kbABQhkAAhvgIg");
	this.shape.setTransform(76.8,22.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,153.6,44.7), null);


(lib.Path_18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9DBBF").s().p("Ak5CBQA5gJBMgRQCZgjBggsQBhgqBAg/QAfgfAMgXIApAmQgBAEgbAUQg2Aoh+BNQh8BPigALQgcACgYAAQgvAAgkgHg");
	this.shape_1.setTransform(31.4,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18_1, new cjs.Rectangle(0,0,62.9,27.2), null);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC8F9F").s().p("AhSBRQgMgVgKgdQgSg5ARgnQATgtBlBbQA0AtAvA3g");
	this.shape.setTransform(11.4,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,22.9,16.2), null);


(lib.Path_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#173347").s().p("AhIBUQByhQBAhIQBnh2gxA6QhPCAgoAqQgZAbhhArQgxAVgtAPQAtgZA6gng");
	this.shape_1.setTransform(17.6,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,-0.4,35.2,29.7), null);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#173347").s().p("AghKlQhiiBACgzQABgZAmg4QBDhmANgWQBxjFgGjYQgGjhixjSQhZhqhXg8QgIhKArABQAmABBEA2QA9AwA8BHQA9BGAYAxQAQAhAmBGQAiBDAWA/QA+C1AHEPQAGEIhmDJQgzBlg1AvQgxg2gwhBg");
	this.shape_1.setTransform(26.4,79.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,52.9,159.3), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#404041").s().p("AlBBSQiJgPgDgiQgCgiCFgiQCGgiC/gOQC+gOCJAPQCJAPACAjQADAiiGAiQiFAii/AOQhaAGhOAAQhXAAhIgIg");
	this.shape.setTransform(46.2,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,92.3,18.1), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404041").s().p("AlBBTQiJgQgCgiQgDgiCGgiQCFgiC/gOQC+gOCJAPQCJAPACAjQADAiiGAiQiFAii/AOQhbAGhQAAQhVAAhHgHg");
	this.shape_1.setTransform(46.1,9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,92.3,18.1), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3B3B3").s().p("AmjEBQEtg1DgisQCriDCPilQgxEUjHCGQivB3kXAAQhJAAhAgIg");
	this.shape_1.setTransform(42,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,84,53), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404041").s().p("AgGBUQi/gSiFgkQiFgjADgjQADgjCJgMQCJgMC+ARQC/ARCFAkQCFAkgDAiQgDAjiJAMQg6AFhEAAQhcAAhtgJg");
	this.shape_1.setTransform(46.1,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,92.2,18.7), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9DBBF").s().p("AjCADQhAgyglg1QAxAfBCAiQCGBDBfARQBfARBPgeQAogPATgTIAOBMQgEAEgeAFQg8AJiGAFIgMAAQh/AAh7hig");
	this.shape.setTransform(29.6,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,59.1,20.2), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404041").s().p("AgIBoQkBgWiygvQiyguADgrQAEgrC4gPQC4gPD/AYQEAAXCzAuQCyAugEArQgDAri4APQhHAGhSAAQiCAAicgPg");
	this.shape_1.setTransform(61.9,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,123.7,23.7), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhqBLQguhVgjhcQAGgQAOgTQAbgnAmgOQAmgPCBgKQBBgFA6gCQgNBjgYBoQgyDRg6AdQgIAEgJAAQg1AAhPiUg");
	mask_1.setTransform(18.8,22.3);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D2210").s().p("AAFBkQgig0gWhOQgXhPAegOQAngSARAGQASAGAHAhQAsDOggAaQgDACgCAAQgNAAgagmg");
	this.shape_1.setTransform(8.9,15.2);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(2.7,1.5,12.5,27.6), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Eg2XAifMAAAhE9MBsvAIcMAAAA8hg");
	mask_2.setTransform(457,307.7);

	// Layer 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#395266").s().p("EhLxAwEMAAAhgHMCXjALwMAAABUXg");
	this.shape_12.setTransform(485,307.6);

	var maskedShapeInstanceList = [this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(109,86.9,696,441.5), null);


(lib.Path_28_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B4C6A").s().p("Al0A8QCDAkB5AKQCiANBSgsQCYhOA5hWQAdgqgCgbIANA4QgXAugdAmQh2CXjJAXQgeADgfAAQilAAiUhjg");
	this.shape_1.setTransform(37.3,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28_1, new cjs.Rectangle(0,0,74.5,31.9), null);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B4C6A").s().p("AgtFRQBBhPAiioQAThag6iYQgqhyhIh0QChCHAjDGQAjDGhxCcQgcApgmAgIg5AFQAagGAhgog");
	this.shape.setTransform(10.5,38.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,21.1,76.5), null);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B4C6A").s().p("AkLBiQAiABA3gHQBsgNBmgoQBpgnBLhPQAmgoARggQgEAUgSAeQgkA9hGAxQhHAyhhAnQgwAUgkAJIhmAZg");
	this.shape.setTransform(26.8,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,53.5,30.5), null);


(lib.Path_19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B4C6A").s().p("AB6CGQi+hkhKg+QhKg/gvg5QgYgdgKgRIA8gbQAQAWAbAiQA4BDA6A6QA6A4ClBtQBTA2BHArQhQglhfgzg");
	this.shape_1.setTransform(29.8,22.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19_1, new cjs.Rectangle(0,0,59.5,44.5), null);


(lib.Path_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B4C6A").s().p("AlVDWQgfgmg5goIg0ghQAugVBAgnQB+hOBVhbQBUhbBHhjQAigyATgfIAsAmQA1AsApAeQBXA+DRBuQhcgfh/g7Qh/g9hdggQhTBmhpBrQg/BDhYBIQgsAlggAXICjEeQhQh5g0g/g");
	this.shape.setTransform(48.2,39.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_1, new cjs.Rectangle(0,0,96.4,79.6), null);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B4C6A").s().p("AEvFwQhZg+hkhzQiXiuisjwQgWA9ggBGQg6B9hOBKQgoAmgcAMQAegbAogxQBQhfA1htQA0htAliFIAKgrQAPAfAlBBQBJCBBrCpQBtCpCdB5QBOA8A5AbIhgAuQgYgJgtggg");
	this.shape_1.setTransform(46.8,40.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,93.6,81.7), null);


(lib.Path_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3B4C6A").s().p("AzkQ6QAmkDgGi+QgGi+hKk0IhJkNQCiAPDkgiQHHhFFJj3QFJj2EQk+QCIifBGhuICCAxQCYAxBzAEQBzAECKgqQBGgWAugVQjRCAjCgJQipgIiKgLIhogKQglBVhrCKQjWESlcECQlcECmWBlQjKAyiFgCIAhCIQAoC/AdEOQAWDFg8DgQgrCfhOCbQAVhbATiCg");
	this.shape_2.setTransform(137.4,130.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_2, new cjs.Rectangle(0,0,274.8,260.6), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6B7D9D").s().p("AhmCCQBHg3A1g5QA2g4AyhJQAYgkAOgaQgLAlgUAvQgqBegvAyQguAzhVAnQgrATghAKQAZgQAkgcg");
	this.shape_2.setTransform(16.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,32.9,34.8), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Eg2XAaRMAAAg8lMBsvAAAMAAABEpg");
	mask_3.setTransform(497.5,313.4);

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#657073").s().p("AglBHIhhAQIAuhXIguhYIBiASIBEhHIAOBiIBZArIhZAsIgOBig");
	this.shape_13.setTransform(690,126);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#657073").s().p("AhmDDIkOAtICAjwIh+jyIENAvIC+jEIAnEPID1B5Ij2B4IgoEOg");
	this.shape_14.setTransform(758.1,224.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#657073").s().p("AgoA+IhjAFIA5hRIgjhdIBfAdIBNg+IACBjIBTA2IheAgIgbBgg");
	this.shape_15.setTransform(268.8,395.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#395266").s().p("EhTMA3qMAAAhvTMCmZAAAMAAABvTg");
	this.shape_16.setTransform(532.5,356.2);

	var maskedShapeInstanceList = [this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(149.5,93.7,696,439.4), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EgjyA8TMAAAh4lMBHlAAAMAAAB4lg");
	mask_2.setTransform(305,385.9);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2F3EB").s().p("Eg4OA8VMAAAh4pMBwdAAAMAAAB4pg");
	this.shape_2.setTransform(359.9,386.1);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(75.9,0,458.3,771.9), null);


(lib.Path_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggnARHMAMego+MA0xAHNMgGOAoig");
	this.shape.setTransform(208.8,152.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_63, new cjs.Rectangle(0,0,417.6,305.6), null);


(lib.Path_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A+xCOIlAkWMAvDgBnIYgExIicCtg");
	this.shape.setTransform(229,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_55, new cjs.Rectangle(0,0,458,47.9), null);


(lib.Path_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArxSmQmFinAUk+QAPjvC3lhQCxlXEPlIQEdlaEfjNQFAjkD7gBQG/AAAKLfQADDxguFqQgYDAgoEkQgSC1ghB7QgtCkhSBvQjLEUnZgBQo8AAlYiUg");
	this.shape.setTransform(112.4,133.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_45, new cjs.Rectangle(0,0,224.8,267.7), null);


(lib.Path_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#173347").s().p("AquHVQkchuAAkBQAAihBli0QBki1CpiJQg+CYgIB5QgICHAMBKQARBgA7A8QCFCFG2gDQHngCCNglQBVgXAngrQAigpAGhIQAKh4inmjQChCJBiCyQBgCwAACdQAAEBkcBuQjnBZnIAAQnHAAjnhZg");
	this.shape.setTransform(97.1,55.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_42, new cjs.Rectangle(0,0,194.2,111.7), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Eg1OAh6MAAAhDzMBqdANSMAAAA2hg");
	mask_4.setTransform(340.7,217);

	// Layer 3
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(32.6,14.1,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(32.6,14.1,627.1,420), null);


(lib.Path_15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgtEgN6MAv0gEiMAqVAX6Mg9sAM+g");
	this.shape_1.setTransform(288.5,118.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15_1, new cjs.Rectangle(0,0,577,236.1), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#173347").s().p("Ai2KIQjjgIhqg9QhNgsgciHQgYh1AIjYQAHiwA9iUQAxh4AngSQBDANBogBQDOgCCxhDQCdg8BShKQApglAKgZIAKAGQAPAKARAXQA5BHBHCmQBWDKAQCyQAQC6hCBfQhTB5g6A0QhZBRiTA2QiOA0jGAAIgzgBg");
	this.shape_2.setTransform(63.9,64.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0.1,0,127.8,129.8), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3B4C6A").s().p("AjMMRQiJgthyiDQhoh2g+igQg8iaAAiKQAAlTB8i+QCskKGsguQFEgiCsDpQCPDDAAE3QAAEKioD9QilD4jtBjQhcAmhZAAQhEAAhDgWg");
	this.shape_2.setTransform(68.2,80.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,136.4,161.4), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("Ag9hXIA1gDIACAhQAAgOAOgMQAOgMASgBIAUgBIACAvIgTABQgZABgKAIQgKAHAAASIAFBuIg4ADg");
	this.shape.setTransform(189,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AhWApIgDhCQgCgkAXgRQAWgQAugCQAqgCAWANQAWAPACAlIACAsIh4AGIABAQQABARALAGQALAHAegCQAdgBAhgKIACAkQgjAJgmACIgNAAQhVAAgDg4gAAAg+QgTACgHAEQgHAGAAAIIABAcIBDgEIgBgbQgBgIgHgFQgHgEgPAAIgEAAg");
	this.shape_1.setTransform(170,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E6E6").s().p("AhhhXIA7gCIAuB+IAiiBIA4gDIg8C8Ig4ADg");
	this.shape_2.setTransform(148.9,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E6E6").s().p("AgfCAQgQgBgWgHQgVgGgMgPQgMgOgBgXIgFhtQgBgTAIgPQAIgPAMgIQANgKAQgEQARgGANgCIAdgCIAcAAQAOABARADQARAEAOAHQANAIAIAOQAKAOAAATIAFBtQACAUgLARQgLAQgSAIQgSAHgUAFQgTAEgVABIgOAAIgWgBgAgDhVQgdABgPAIQgOAHABATIAFBtQABAKAFAGQAFAGAJACIATADIAqgCQAJgBAIgDQAKgDAEgHQAEgGAAgKIgFhtQAAgSgQgHQgNgFgVAAIgJAAg");
	this.shape_3.setTransform(125.3,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6E6E6").s().p("AhWApIgDhCQgBgkAWgRQAXgRAtgBQArgCAWANQAWAOABAlIACAtIh4AFIABARQAAAQAMAHQAMAHAegCQAcgBAigKIABAkQgjAJgmACIgNAAQhVAAgDg4gAAAg+QgTABgHAFQgHAFABAJIABAbIBCgDIgBgbQAAgIgIgFQgHgEgPAAIgEAAg");
	this.shape_4.setTransform(91.7,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E6E6").s().p("AiUhVIA4gDIACAXQAEgbAygCQAZgCAOAHQAOAGAEAOQAFgOAMgIQANgHAbgBQAmgCAMAMQANANABAbIAGCIIg4ADIgGiAQAAgRgFgFQgDgEgUAAQgWABgGAFQgEAFABARIAFCBIg3ACIgGiAQgBgSgEgEQgEgEgTAAQgXACgFAFQgEAEAAASIAGCAIg5ACg");
	this.shape_5.setTransform(64.1,18.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E6E6").s().p("AhLBYQgNgKgBglQgCghAMgNQAMgNAhgCIA/gDIgBgMQgBgRgIgGQgIgFgZABQgXABgqAHIgCgkQAjgFAlgCQAzgCAUAMQAVALABAlIAGCAIg3ACIgBgRQgGALgLAGQgKAFgfACIgJAAQgfAAgLgKgAgIAJQgSABgFAEQgEAFABASQABATAFADQAEAEAUgBIAYgDQAFAAACgCIADgFQACgEAAgFIgCgkg");
	this.shape_6.setTransform(36.1,20.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E6E6").s().p("AgWCBQgSgBgQgEQgPgEgOgHQgLgHgIgNQgHgMgBgTIgFhnQgBgSAHgRQAIgQAMgJQAKgIATgHQASgHAPgCQAPgCASgBQA3gDAvAGIACAuQgygJg0ADQhBADACAlIAFBkQABAUASAGQASAGAigBQATgBAVgHIgDg6IgoACIgCgmIBigFIAGCBQgUAIgdAGQgeAGgYABIgTABIgSgBg");
	this.shape_7.setTransform(11.8,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,195.3,31), null);


(lib.aaaaaaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#657073").s().p("AgkBHIhjARIAvhYIguhXIBiARIBFhHIANBiIBZArIhZAsIgOBig");
	this.shape.setTransform(622.4,84);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#657073").s().p("AhmDDIkOAuICAjxIh+jyIENAvIC+jDIAnEOID1B5Ij1B4IgpEOg");
	this.shape_1.setTransform(608.9,212.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#657073").s().p("AhmDDIkOAuICAjxIh+jyIENAvIC+jDIAnEOID1B5Ij2B4IgoEOg");
	this.shape_2.setTransform(486.7,344.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#657073").s().p("Ag4BrIiUAZIBGiEIhFiFICUAaIBohrIAVCUICHBCIiHBCIgWCVg");
	this.shape_3.setTransform(389.6,197.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#657073").s().p("Ag4BrIiUAZIBHiEIhGiFICUAaIBohrIAVCVICHBCIiHBCIgWCUg");
	this.shape_4.setTransform(257.4,119.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#657073").s().p("Ag4BrIiUAZIBHiEIhHiFICVAaIBohrIAVCVICHBBIiHBDIgWCUg");
	this.shape_5.setTransform(166,323.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#657073").s().p("AgnA+IhkAEIA5hQIgjhdIBfAdIBNg+IACBjIBTA1IheAiIgaBfg");
	this.shape_6.setTransform(403.6,39.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#657073").s().p("AgnA+IhjAFIA4hRIgjhdIBfAdIBMg+IADBjIBTA2IheAgIgbBgg");
	this.shape_7.setTransform(277.9,358.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#657073").s().p("AhuCrIkRAMICcjfIhgkAIEFBPIDViqIAFERIDkCVIkCBaIhIEHg");
	this.shape_8.setTransform(74.9,212.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#657073").s().p("Ag9BdIiVAIIBVh7Ig1iMICQArIB1heIADCXIB+BRIiOAxIgpCSg");
	this.shape_9.setTransform(36.5,39.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#395266").s().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	this.shape_10.setTransform(348,197.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.aaaaaaa, new cjs.Rectangle(0,0,696,395.3), null);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B198D7").s().p("AioCiIilipIAhgdICECeIhqjEIA5gtIBODyIgbkQIBogMIgqEYIBSkQIB1AMIihEMIC/jtIBAAUIikC4ICvibIA7AXIi7CPIDGh4IBAATIkgCeg");
	this.shape.setTransform(126.9,58.9,0.759,0.759);

	this.instance = new lib.Path_1_1();
	this.instance.parent = this;
	this.instance.setTransform(123.9,71.5,0.759,0.759,0,0,0,17.7,4.2);
	this.instance.alpha = 0.23;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B198D7").s().p("AhuBqIhrhuIAWgTIBVBnIhEiAIAlgeIAyCeIgRixIBEgIIgcC3IA2ixIBLAIIhnCuIB8iaIApAMIhrB4IBzhlIAmAPIh6BeICBhOIAqALIi8Bog");
	this.shape_1.setTransform(106,-39.5,0.759,0.759);

	this.instance_1 = new lib.Path_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(104.4,-31,0.759,0.759,0,0,0,12,3);
	this.instance_1.alpha = 0.23;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C87B8A").s().p("AitE3IiolFIAhg4ICHEvIhsl4IA6hXIBQHRIgcoJIBrgYIgrIaIBUoJIB4AXIilICIDEnIIBCAnIipFhIC0krIA8AtIi/ETIDLjnIBBAlIkmEwg");
	this.shape_2.setTransform(155.5,36.4,0.759,0.759);

	this.instance_2 = new lib.Path_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(152.9,59.9,0.759,0.759,0,0,0,17.9,7.7);
	this.instance_2.alpha = 0.23;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C87B8A").s().p("Aj3DNIjwjWIAwglIDADIIibj4IBTg5IBzEyIgolXICZgQIg+FiIB4lXICrAPIjrFSIEYksIBeAaIjxDoIEBjEIBVAdIkQC1IEhiYIBdAZImkDIg");
	this.shape_3.setTransform(7.8,110.3,0.759,0.759);

	this.instance_3 = new lib.Path_7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(3.9,126.1,0.759,0.759,0,0,0,25.7,5.4);
	this.instance_3.alpha = 0.23;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9D98E").s().p("AiBBsIh+hwIAZgTIBlBoIhRiCIArgeIA9CgIgVizIBQgJIghC6IA/i0IBZAIIh6CxICSidIAxAOIh+B5ICGhmIAtAPIiPBeICYhPIAxANIjcBpg");
	this.shape_4.setTransform(178.2,-46.7,0.759,0.759);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AimBoQAXhOAWgxQANggAtgoQAWgUAUgOIBnAJIAdAcQAeAhAJAWQAOAlADCCg");
	this.shape_5.setTransform(125.6,-47.4,0.759,0.759);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E6E6").s().p("AjNCPIAZhJQAchMAMgPQAUgZBQiBIBgANQBkAUAQAlQAQAkALB+QAFA/ACA4g");
	this.shape_6.setTransform(125.2,-50.6,0.759,0.759);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AkSD3QAPg9AThCQAniEAVgZQAXgZArgQQAVgIARgDIAzhgQA5hhAdgJQAggKA3AZQAxAXAMAUQAIAOAeECQAPCCANB+g");
	this.shape_7.setTransform(154.5,-61.2,0.759,0.759);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E6E6").s().p("AlNEsQARhKAYhRQAuigAbgfQAbgfA0gTQAagJAVgEIA+h0QBFh3AkgLQAngLBDAeQA7AcAPAYQAKARAkE6QATCeAPCag");
	this.shape_8.setTransform(153.1,-65.8,0.759,0.759);

	this.instance_4 = new lib.Path_1_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(157.3,-40.1,0.759,0.759,0,0,0,39.9,8.3);
	this.instance_4.alpha = 0.41;

	this.instance_5 = new lib.Path_2_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(126,-37.8,0.759,0.759,0,0,0,29.9,6.8);
	this.instance_5.alpha = 0.41;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#23222F").s().p("AhvA8QgugZAAgjQAAgiAugYQAvgZBAAAQBBAAAuAZQAvAYAAAiQAAAjgvAZQguAYhBAAQhBAAgugYg");
	this.shape_9.setTransform(-7.7,26.2,0.759,0.759);

	this.instance_6 = new lib.Path_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(33.5,-16.2,0.759,0.759,0,0,0,8.8,20.4);
	this.instance_6.alpha = 0.211;

	this.instance_7 = new lib.Path_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(17.2,-4.8,0.759,0.759,0,0,0,7.1,10.2);
	this.instance_7.alpha = 0.211;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#322015").s().p("AkTH2QhWg0g5hsQgzhhgRh3QgPhzAWhdQA3joBzhuQCgiZErAmQDiAdBPC7QBCCcgyDTQgrC2ibCRQiZCPiwAcQgeAFgdAAQhXAAhJgtg");
	this.shape_10.setTransform(22.6,-120.4,0.759,0.759);

	this.instance_8 = new lib.Path_4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(7.1,-50.2,0.759,0.759,0,0,0,47,42.1);
	this.instance_8.alpha = 0.602;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#173347").s().p("ACuCpQhUgBhTgXQhcgahrg5QhcgyhkhPQhShIgHgFIA+gYIA0AsQA/AzBEArQDYCIC6AAQA+ABBAgbQA7gYAjgiQAngmAPg5IAaAyIgFAcQgLAjgtAuQhRBTiXAAIgHAAg");
	this.shape_11.setTransform(3.5,-75.5,0.759,0.759);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#173347").s().p("AiNCAQijg4iChxQgngjgTgWIAwhJQA3BAB+BJQC+BuC8ADQDbADBch8QAvg+ADhFIARCIQgWA6giAjQgtAuguAaQhEAmhWAGQgeACgeAAQiLAAiGgug");
	this.shape_12.setTransform(5.6,-55.9,0.759,0.759);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#173347").s().p("AgWC5QgngEgmgJQitgpiMiBQgtgoglguQgSgXgMgTIARhAIAkAtQAvA2A2AvQCsCTC3AUQD3AbCriCQBWhBAkhIIgRBhQgIAUgPAXQgdAvgmAbQhKA1hcAXQhKAShbAAQg0AAg5gGg");
	this.shape_13.setTransform(3.1,-40.9,0.759,0.759);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#563A2A").s().p("An1BQQgZh0BJhuQAkg4ApggIgCASQgBAWAHAUQATBABPAZQAiALBPgSICoglQEEgrDxBtQg2AEhlgTQhsgUhEACQhaACilAmQijAkgvAaQgpAYgHA4QgIA6AqAbQAlAYg9AoQiWgjgZh4g");
	this.shape_14.setTransform(-5.5,-165.6,0.759,0.759);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#452D21").s().p("ADLIxQg0hBhKgRQhKgShwA5QgjASgjAXIgcATQg1gHg9giQh6hEgoiGQgoiFBDi5QAVg5Aeg4QAOgcALgQQhDAFhHgSQiPglgYh0QgZh1BJhuQAkg4ApggIgCASQgBAWAHAUQATBABPAZQAjAMBegWQCMghA5gHQEsglEkC3QEtC9hZGPQgsDIhpCiQgOgQgYgNQgxgYgzAUQgyAVg0AgIgqAcQgMgdgaggg");
	this.shape_15.setTransform(8.5,-136.2,0.759,0.759);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9DBBF").s().p("AjEDsQgsiTAjiTQAlieB1h0QBxhwCfgtQhnBahcB2QhWBwgnBYQgkBRgDB3QgCBdASBkQANBGAqA8QAUAeATARIgRABQhshvgriPg");
	this.shape_16.setTransform(-24.8,-130.1,0.759,0.759);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EBBE98").s().p("AiKJLQkHg+iRjYQiRjYA5jzQA6jzDjiAQDiiAEGA+QEHA/CRDYQCRDYg6DyQg5D0jjCAQiYBWioAAQhSAAhWgVg");
	this.shape_17.setTransform(7.8,-123.2,0.759,0.759);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#455D79").s().p("AjXG0QhjguhZhdQg1g2gahKIgPg+QAHglAOguQAahcAegyQAegyAVgcQAKgNAFgEQgugegxgkQgfgWgxgNIgsgJQAXgVAhgZQBCgzAygUQAxgVBQgQQAogIAegEIKDA5IASAQQAWAYATAkQA+ByALC/QAMDjh4CQQh3COjbAYQgsAEgqAAQiMAAh0g2g");
	this.shape_18.setTransform(-0.3,-53.7,0.759,0.759);

	this.instance_9 = new lib.Path_13_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-32.7,-55.5,0.759,0.759,0,0,0,20.9,27.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9DBBF").s().p("AhoFeQhBgUgPh0QgPh0AriQQAsiRBMhZQBMhYBBATQBBAUAPB0QAPB0gsCQQgrCRhMBZQg+BIg3AAQgMAAgMgDg");
	this.shape_19.setTransform(-40.9,-55.8,0.759,0.759);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNAbIgmAFIASggIgRgiIAmAHIAagaIAEAlIAiARIgjAQIgFAlg");
	this.shape_20.setTransform(28.9,-15.3,0.759,0.759);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAbIgmAFIASggIgRgiIAmAHIAagbIAEAnIAiAQIgiAQIgGAmg");
	this.shape_21.setTransform(-1.5,-2.2,0.759,0.759);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNAbIgmAFIASggIgRgiIAmAHIAagaIAEAlIAiARIgiAQIgGAlg");
	this.shape_22.setTransform(-21,-15.3,0.759,0.759);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B3DFE7").s().p("AkAEGQh8g7gPg3QgNgvgwjUIgtjMIPrAVIggFYQgFAZgTAiQgnBEhJApQhJAphFAJIg2ABQgSALghALQhCAWhFADIgLAAQhTAAhyg2g");
	this.shape_23.setTransform(1.4,-18.7,0.759,0.759);

	this.instance_10 = new lib.Path_19_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-5.4,8.6,0.759,0.759,0,0,0,14.3,31.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#23222F").s().p("AhvA8QgugZAAgjQAAgiAugYQAvgZBAAAQBBAAAuAZQAvAYAAAiQAAAjgvAZQguAYhBAAQhBAAgugYg");
	this.shape_24.setTransform(23.6,14.5,0.759,0.759);

	this.instance_11 = new lib.Path_21();
	this.instance_11.parent = this;
	this.instance_11.setTransform(26.1,-3.4,0.759,0.759,0,0,0,14.6,30.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F9DBBF").s().p("AhKERQg/hjgYiVQgXiVAfhwQAfhxBDgLQBCgKBABiQBABjAXCVQAXCUgfByQgfBwhDALIgMABQg8AAg6hZg");
	this.shape_25.setTransform(22.6,-8.1,0.759,0.759);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F9DBBF").s().p("AhKERQg/hjgYiVQgXiVAfhwQAfhxBDgLQBCgKBABiQA/BjAXCVQAYCUgfByQgfBwhDALIgMABQg8AAg6hZg");
	this.shape_26.setTransform(-8.7,3.6,0.759,0.759);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#372416").s().p("AC2UgQgwgQiGhOIh7hKQgBAPgNATQgZAlg2ASQg1AShigEIhXgIICAgKQAsgEAugaQACgGgCgDQgGgHgbAOQgjAThEgFQgbgCgDgGQgFgIAfgLQA4gVAslaQAlkqgGhtQgDgugbhsQgZhmABgOQACgfAfiGQAiiRASgjQAagyBZsvQAAgJgKgPQgMgTgFgWQgGgeAMgyQANgxARgUQAXgZAHgGQAMgLAAALQAAADgaAmQgbAkABAfQABAnAKAdQAJAcANACQAIABAZgrQAYgpAEAFQAGAHgKAQQgIAOgZAdQgVAYgMBRQgJBEADAiQADAaAKAcQAKAeANAOQANAOBDgoQBGgoA2g3QAygyB5gXQBzgVAIAYQAJAZgWAQQgcAUhOACQhaADiFBBQiLBFg1BMQgwBFgKFdQgJE2APBDQAHAbAxBNQA5BbAUArQAUAxgLDXQgMD0ALBVQARB1A8BoQAgA3A7BFQAcAhBhAUQAwAKAqAEQggAHgrAFQgeADgaAAQguAAgfgKg");
	this.shape_27.setTransform(142.6,-152.1,0.759,0.759);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9793C5").s().p("ACTF7Qh6gFg5gWQhDgaArgnQBKhHgHAEIgVARQhVAhhsASQjZAih2hOQh2hPA/goQAKgGANgFQhqAUhrAHQkUAUgDhnQgDhmDygaQB5gOB6AHQgChMBrgrQBrgrDKgGQBegCAPgFQAMgDgbgLQgpgQgOgKQgbgVAUgYQAVgbBkgKQBagJB8AGQB5AGBfARQBnATAZAYQAuAshqBFQgnAagvATIgTAIQAjgFAqAAQC6gDCUBFQDWBjAsA7QA9BRjDA0QizAvi2gMQg5gEgzgKQApAKAdANQBeAohMAsQgsAZh1ANQhLAIhOAAQgkAAglgCg");
	this.shape_28.setTransform(152.7,-218.6,0.759,0.759);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6D688E").s().p("ADvJoQjGgJheglQhtgpBFhAQB5hzgLAGIgiAdQiKA2iwAcQlhA4i/h/Qi/iABlhAQARgLAVgIQitAgitAMQnBAggEinQgEimGIgrQDFgWDFAMQgDh9CvhGQCthGFIgIQCZgEAZgIQASgFgsgRQhCgbgWgRQgsgiAggnQAigrCjgRQCSgPDKAKQDFAKCbAcQCmAfApAnQBLBHisBwQhAAqhMAfIggANQA5gHBFgBQEugFDwBxQFbChBIBgQBjCEk8BUQkjBNkogVQhbgFhRgQQBCARAtATQCYBBh7BHQhIAqi9AUQh9AOiBAAQg4AAg5gDg");
	this.shape_29.setTransform(113.6,-242.9,0.759,0.759);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9793C5").s().p("ABMEOQjRgdgvgkQgigaAVgaQALgOARgIQhBgGhRgLQiigXhQgXQhRgXAxgYQAYgMApgIQg1ABg0gMQhmgZAJhBQAKhCCQgGQBDgDBBAJQgagFgagJQg+gVAFgjQAGgmBCgGQA0gFBjAPQCjAYgGAlQgCAOARALQAIAGAJADIAvAAQA6ADA3AGQC0AWBZA8QBaA9gQAfQgIAQgaADIA7AGQBHAHA7AMQC+AmABBAQABBAkVgVQhXgGhogOIhWgNIBMAWQBLAdgMApQgIAahQAAQg3AAhXgMg");
	this.shape_30.setTransform(156.2,-155.5,0.759,0.759);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6F4D2E").s().p("AkzLXQACgNAqgCQApgCBTgtQApgVAhgWQgFgPgDgRQgGggAHgGQAYgUATgrQAdhDgUhAQgWhHg6hMQg2hHgngWQgfgRgygGIgtgBIAVgQQAbgOAaABQAaACAzAWIAaANIgLgHQghgVgVgaQgVgagig5Igdg1IhlgVIhghsIh/giICLAJIAkApQAmArANAKQALAJAfAAQAogBAQAEQAaAGAaAvIArBfQATAoB0gFQA6gEA2gLIAwgsQA3g6AehAQAeg/gDjoIgKjcIiYhbICrBTIBWgnIhMBIIAFBJQAHBeABBpQACBfgrBuIgaA/QgJAaAIAKQANASA+gjQAlgVBZg1QA3geBigQQAygIAmgCQggAIgmAMQhMAYghAXQgjAZhWAgQhiAjglAPQguAThMBGIhWBXQgLAMAYAzQAfBEAAA7QACBGgCBIQAAAwAMAmQANArARAUQAEAGAgAaQASAOApACQAUABASgCQgQAGgVACQgrAIgdgIQgcgGgZgcIgTgYQiLBMgVAKQgNAGhHAJIhEAHQgIgGABgIg");
	this.shape_31.setTransform(82.2,-115.7,0.759,0.759);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FAE38F").s().p("AAbFSQgygNAWgpQAmhIgEAEIgMATQgzAohHAeQiOA7hfg2Qheg1AjgsQAGgGAHgGQhFAfhHAUQi5A2gUhaQgVhbCgg3QBRgcBUgKQgPhCBBg0QBBg0CJggQBAgOAJgGQAHgFgUgGQhFgTAOgkQATg1DKgaQBUgLBEADQBJADAWASQAoAgg8BLQgfAogZATQAUgHAagGQB+gbBxAqQClA8ApAuQA4A+h7BIQhyBBh/ANQglAEgjgBQAcAEAUAGQBIAXgsAxQgaAchNAaQhJAZhQALQgoAGgfAAQgiAAgXgHg");
	this.shape_32.setTransform(39.8,-128.9,0.759,0.759);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FAE38F").s().p("AlLD9QhXgkAkgjQAFgFAIgFQhDAbhFATQiyAxgQhDQgPhDCbgyQBNgYBRgMQgLgxBBgqQBAgqCDgeQA+gOAJgFQAHgEgTgDQhAgMAOgbQAWgqDAgdQC/gdArAbQAkAXg8A7QggAfgZAQQAUgGAZgGQB6gaBqAaQCZAlAlAhQAyAth5A7QhvA2h5AQQgmAFgiAAIgbAAIBMAGQBCAOgsAnQgZAWhLAYQhHAWhMAMQhRAMgpgHQgugHAWggQBAhagoA0QgzAhhEAZQhSAfg/AAQgtAAgkgPg");
	this.shape_33.setTransform(95.1,-177.2,0.759,0.759);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FAE38F").s().p("Ah9C8QgigRAOgbIAUgXQjmAXh2gKQhKgGAmgdQATgPAigOQguAKgvgCQhegEgDg6QgDg6B8geQA6gPA6gEQgYABgYgDQg5gIgCgfQgBghA4gSQAsgNBYgFQCSgIACAiQAAANARAGQAIAEAIABICOgUQCfgNBYAlQBYAlgIAeQgEAPgWAIIA0gFQA+gGA2AAQCrgBANA4QAMA2j0AfQhNAJhcAGIhOAEIBHAFQBFAOgDAlQgDApjCAMQg9ADguAAQhfAAgfgPg");
	this.shape_34.setTransform(138.6,-131.1,0.759,0.759);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMARQgNgQgSAAQASgBAMgQQANgRAAgXQAAAXANARQANAQASAAQgSAAgNARQgNARABAXQgBgXgMgRg");
	this.shape_35.setTransform(61.7,50.8,0.759,0.759);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgZAiQgZghgkgBQAkAAAZghQAZghAAgvQABAvAZAhQAZAhAkAAQgkABgZAhQgZAhgBAvQAAgvgZghg");
	this.shape_36.setTransform(27.8,95.9,0.759,0.759);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgZAiQgZgigkAAQAkAAAZghQAZghAAgvQABAvAZAhQAZAhAkAAQgkAAgZAiQgZAhgBAvQAAgvgZghg");
	this.shape_37.setTransform(133.6,-15.3,0.759,0.759);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHALQgIgLgLAAQALAAAIgKQAHgKAAgPQAAAPAIAKQAIAKAMAAQgMAAgIALQgIAKABAPQgBgPgHgKg");
	this.shape_38.setTransform(-128,-67.7,0.759,0.759);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgHALQgIgLgMAAQAMAAAIgKQAHgKAAgPQAAAPAIAKQAIAKALAAQgLAAgIAKQgIALAAAPQAAgPgHgKg");
	this.shape_39.setTransform(-72.7,-26.7,0.759,0.759);

	this.instance_12 = new lib.Path_8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(18.5,26.9,0.759,0.759,0,0,0,42.4,14.6);
	this.instance_12.alpha = 0.23;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgPAWQgQgVgWAAQAWgBAQgUQAPgVAAgdQAAAdAQAUQAQAVAWAAQgWAAgQAVQgPAVAAAdQgBgdgPgUg");
	this.shape_40.setTransform(-52.5,-39.7,0.759,0.759);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F9D98E").s().p("AhhgBIAIgYIAwB8IgqicIAOglIAkDBIgXjaIAegMIADDjIAKjdIAhAIIgfDbIAqjEIAUAQIgmCXIAqiBIASASIguB3IAzhkIATAOIhKCFIg+AEg");
	this.shape_41.setTransform(-137.5,35.9,0.759,0.759);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F9D98E").s().p("AhUBhIhBhxIAQgRIAzBoIgmiAIAcgaIAXCcIACitIAwgEIgiCwIAzipIA0AMIhWCjIBiiPIAcAQIhUBuIBXhcIAaARIhcBTIBfhFIAcAPIiKBag");
	this.shape_42.setTransform(-94.9,37,0.759,0.759);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CCCCCC").s().p("Ah4gCQAHgcAhgoIAfgiIBYgGIAcAUQAeAYAKASQARAdATBuIkdAUQAKhEAMgtg");
	this.shape_43.setTransform(-106.4,38,0.759,0.759);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E6E6E6").s().p("AiOgBQAJgOAdhCIAbg/IBSgCQBYAFASAcQATAdAZBpQANA2AJAuIlhAaQAVh9ANgXg");
	this.shape_44.setTransform(-106.7,35.5,0.759,0.759);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CCCCCC").s().p("AhsAUQAHghAjhiIAghbQAAgLAEgMQAHgYATgHQATgHAOAbQAHAOADAPIgHA3QgGA7AGAUQAHAUAYAlIAuBBQAUAdgBBUQgBAqgEAkIj6ASQAHi3AMg3g");
	this.shape_45.setTransform(-122.3,24.6,0.759,0.759);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E6E6E6").s().p("AirC2QAJhmAQg2QAWhtAOg8QAZhtAvgRQAtgQAyAqQAZAUAPAYIgIBOQgDBQAYARQAYARASAjQAIASAEAPIAOC7IljAaQACgpAEgzg");
	this.shape_46.setTransform(-122.5,23.7,0.759,0.759);

	this.instance_13 = new lib.Path_11();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-107.5,46.5,0.759,0.759,0,0,0,25.7,5.8);
	this.instance_13.alpha = 0.41;

	this.instance_14 = new lib.Path_12();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-128.8,44.6,0.759,0.759,0,0,0,25.8,5.4);
	this.instance_14.alpha = 0.41;

	this.instance_15 = new lib.Path_13();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-91.6,13.3,0.759,0.759,0,0,0,23.2,15);
	this.instance_15.alpha = 0.289;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7EACF9").s().p("AAbA6QgWgFgjgNIgrgNQgXgFgUABQgeABg3ATQguAOgXADQgnAGgigLIgOgGQgCAAgJgaIgKggIALAIQAPAHAYADQAfADAagDQAYgDAfgJQA+gTAjgDQAbgBAcAGQARAEAhALQApAOAXAEQApAJAtgFQArgEAkgNQAWgIAkgTIAtgZQAbgMAigCIgKAxQgRADgSAJIgnAUQgoAVgYAJQgqAPgwAFIglACQgnAAgmgJg");
	this.shape_47.setTransform(-103.3,5.2,0.759,0.759);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7EACF9").s().p("AAmBEQgVgFglgNQgdgKgNgEQgXgFgUABQgdACg5ASQgoANgcADQgmAFgjgJQgSgEgNgMQgMgLgEgMIAJg0IANASQARATAXAIQAYAIAegFQASgDAogNQA9gSAjgCQAbgCAcAGQAPAEAjALQAoAOAZAFQAoAIAugFQAsgEAYgIQAQgFAfgQQAGgDApgkQAegbAfgDIAKAwQgZACgZAZQgiAfgIAEQgkATgTAGQggALgyAFQgRACgUAAQgnAAglgJg");
	this.shape_48.setTransform(-104.1,-15.4,0.759,0.759);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7EACF9").s().p("AAZA4QgSgGgbgNQgXgKgIgCQgQgGgOACQgWACgoARQglAPgSADQghAGgcgMQgfgNgJgRQgEgIACgHIASgnIAJAPQANAQAVAIQAPAHAUgEQAOgDAdgLQAvgUAegDQAWgCAYAHQAOAEAZAMQAeANARAFQAeAHAhgEQAggEAUgJQANgFAYgRIAjgbQAUgOAagDIAXAsQgTACgVANQgMAGgXASQgcATgRAIQgbAMgoAFQgOACgQAAQgfAAgegJg");
	this.shape_49.setTransform(-104.3,-34.7,0.759,0.759);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AkTG4QhxhkgBjMQABjmBxjQQB6jeCZgBQCaABB5DeQBzDQAADmQAADMhzBkQhjBViwAAQivAAhkhVg");
	this.shape_50.setTransform(-103.8,-16.4,0.759,0.759);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgPAVQgQgUgWgBQAWAAAQgUQAPgVAAgcQABAcAPAVQAQAUAWAAQgWABgQAUQgPAVgBAcQAAgcgPgVg");
	this.shape_51.setTransform(-149.1,-39.7,0.759,0.759);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgPAVQgPgUgXgBQAXAAAPgUQAPgVAAgdQABAdAPAVQAQAUAWAAQgWABgQAUQgPAVgBAdQAAgdgPgVg");
	this.shape_52.setTransform(-92.1,-88.1,0.759,0.759);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F9D98E").s().p("AhuBcIhshfIAVgRIBXBZIhGhvIAlgZIA0CIIgSiZIBFgHIgcCfIA2iaIBMAGIhpCYIB9iHIAqANIhsBnIBzhYIAnAOIh6BRICBhEIAqAKIi8Bag");
	this.shape_53.setTransform(-67.4,-10.2,0.759,0.759);

	this.instance_16 = new lib.Path_15();
	this.instance_16.parent = this;
	this.instance_16.setTransform(81.4,-62.9,0.759,0.759,0,0,0,26.4,5.6);
	this.instance_16.alpha = 0.23;

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#67A6A7").s().p("AAAAfQg3gCgmgLQgmgLAAgLQABgNAngHQAngHA1ABQA3ACAmALQAmALAAALQgBAMgnAIQgfAGgoAAIgVAAg");
	this.shape_54.setTransform(-71.3,-3.5,0.759,0.759);

	this.instance_17 = new lib.Path_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-70.1,58.7,0.759,0.759,0,0,0,8.9,1.9);
	this.instance_17.alpha = 0.23;

	this.instance_18 = new lib.Path_18();
	this.instance_18.parent = this;
	this.instance_18.setTransform(152.7,10.2,0.759,0.759,0,0,0,8.8,1.7);
	this.instance_18.alpha = 0.23;

	this.instance_19 = new lib.Path_19();
	this.instance_19.parent = this;
	this.instance_19.setTransform(76.7,-23.2,0.759,0.759,0,0,0,9,3.1);
	this.instance_19.alpha = 0.23;

	this.instance_20 = new lib.Path_20();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-96,19.9,0.759,0.759,0,0,0,33.6,9.5);
	this.instance_20.alpha = 0.23;

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6BBCAD").s().p("AhyLaQAKl3hqk3QhvlGhQmcQgZiBgTh6IgOhgIAKAtQASA2AlAyQB2CeEGAyQDVAqCggQQAxgFANAFQATAGARAlQAPAig/A4QgMAKiMBoQhsBPgzA9QhJBXADBUQAEBVAfBIQAWA0AxBGQBEBhANAWQAsBJAVBLQAoCSAACHQAABDgIAmInKDSQAbh9AFi7g");
	this.shape_55.setTransform(-86.2,172.7,0.759,0.759);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6BBCAD").s().p("ABbV5QhejIjh1HQhGmnhLnnIg8mTIALAVQAQAaAVAWQBDBFBfAEQCZAHD4AAIgKAJQgMAQgKAjQggBtAAD6QAACFAjBaQARAtBDBsQBABoAkBkQA3CZAdDhQAfDxgYEqQgWEPg7DoQg6DlhDBYQghAqgdAAQgkAAgdg/g");
	this.shape_56.setTransform(-167.6,174.2,0.759,0.759);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#84D0C1").s().p("AhiIbIhQmkIhRuyIAJANQANAQAVAPQBCAxB1AdQA4AOBIgHQAlgEAYgFIBoX/g");
	this.shape_57.setTransform(-212.5,106.1,0.759,0.759);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#84D0C1").s().p("AlGWMIjZu2Ikz96IAOAYQAVAdAdAYQBfBMCUgCQDtgDSFAAQieAUifAxQk+BigECUQgCBIBZFnQA1DWCNIoQBcFyhJHSQglDpg2Cgg");
	this.shape_58.setTransform(-136,172.7,0.759,0.759);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6BBCAD").s().p("AGgOZQhskdiIipQhIhahTgeQgzgThTAAQhPABgcgNQgxgWgZhPQgtiThRp6IhJpdIAuAiQA7ApA8AkQDDB0CSAVQCTAWB5AxQA9AZAfAUQhNgPg8ABQh5ABBPBOQBPBOB6OdQA9HQAuG/Qgbhsg3iPg");
	this.shape_59.setTransform(-215.1,119.4,0.759,0.759);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#8FDDD0").s().p("EghFAk9QgRjQg3kSQhtoki1lIQhhixhchaQhAg/hRgjQhngsgPgKQg+gqguhgQhgjBhhokQhOm3gTkJQAXggBTg3QCohuExhyQEyhzElgrQCTgWBWACQiQgphJhNQiQibFpi3QFqi2OtBIQHXAkGOBJQAJgdAcgsQA3hZBWhNQEUj4HmgrQHngrNpCtQG0BXFUBfMgE0BIfg");
	this.shape_60.setTransform(0,101.5,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.shape_54},{t:this.instance_16},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.instance_12},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_11},{t:this.shape_24},{t:this.instance_10},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance_9},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_8},{t:this.shape_10},{t:this.instance_7},{t:this.instance_6},{t:this.shape_9},{t:this.instance_5},{t:this.instance_4},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_3},{t:this.shape_3},{t:this.instance_2},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252.8,-289.9,505.8,579.8);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4D").s().p("AAAALQgMgBgIgEQgIgEAAgEQABgFAIgCQAJgCALABQAMABAIAEQAIAEgBAEQAAAFgJACIgNACIgGgBg");
	this.shape.setTransform(127.7,91.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282828").s().p("AAAALQgMgBgIgEQgIgEAAgEQABgEAIgDQAJgCALABQAMABAIAFQAIAEgBADQAAAFgJACIgNABIgGAAg");
	this.shape_1.setTransform(127.7,91.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4D").s().p("AgDAKQgLgEgHgGQgHgGACgEQACgEAJAAQAJAAAKAEQALAFAHAGQAGAFgBAFQgCAEgJAAQgKAAgJgFg");
	this.shape_2.setTransform(140.5,94);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#282828").s().p("AgDAKQgLgEgHgGQgGgGABgEQACgEAJAAQAJAAAKAFQAMAEAGAGQAHAGgCAEQgCAEgJAAQgJAAgKgFg");
	this.shape_3.setTransform(140.3,94.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4D").s().p("AgCAOQgOgCgIgGQgJgGABgFQABgGAKgCQALgDAMADQAOACAJAGQAJAFgBAGQgBAGgKACIgMACIgMgCg");
	this.shape_4.setTransform(133.9,93.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#282828").s().p("AgBAPQgOgDgJgGQgJgGABgFQABgGAKgDQALgCANACQAOADAJAGQAIAFgBAGQgBAGgKADIgMABIgLgBg");
	this.shape_5.setTransform(133.8,93.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4D").s().p("AgtAlQgXgGgDgQQgDgPASgPQATgPAegGQAdgGAXAGQAXAGAEAPQADAPgTAPQgTAQgdAGQgOADgNAAQgOAAgMgDg");
	this.shape_6.setTransform(85.8,91.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#282828").s().p("AgsAlQgXgGgEgQQgDgPATgOQATgQAdgGQAdgHAXAHQAYAGADAQQADAOgSAQQgTAPgeAGQgOAEgNAAQgOAAgLgEg");
	this.shape_7.setTransform(86.1,93.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#282828").s().p("AGABDQgpgIgWgcIiQg9IlnAAIiQA9QgVAcgpAIQgpAIglgQQgigOgMgbQAdAEAsgBQBegEA/gqQAhgWANgVIH1AAIAxAtQA6ArA1gBQAlAAA0gGQgLAfgpAPQgYAKgaAAQgOAAgOgCg");
	this.shape_8.setTransform(112.3,122.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#344159").s().p("AmnEqQCJgNB9gYQGRhMCNicQCMibgChpQAAghgPgYIgPgRIAKAIQAMALAJASQAaA5gTBiQgMA6hIBGQhFBEhsA+Qj1CNjpAIIlCAMg");
	this.shape_9.setTransform(163,173.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#344159").s().p("AjjDgQiChlApiPQAqiQEwhPQCYgoCQgMQh9AUiJAtQkPBcgzCEQgqBrBlBsQAyA2A7AhQhJgWhAgyg");
	this.shape_10.setTransform(78,171.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#344159").s().p("ACuAbQg5gehLgKQhLgJhjADIhTAGIB1gaQCAgXA7AJQA5AKApAyQAVAaAIAXQgOgNgcgQg");
	this.shape_11.setTransform(146.7,137.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#344159").s().p("Ai6AHQAogyA6gKQA6gJCAAYQBBAMA1ANQgigDgygCQhigEhLAJQhLAKg5AeIgqAdQAJgXAUgag");
	this.shape_12.setTransform(77.2,137.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#64809D").s().p("ACVAhQg3glhDgQQhCgQhSARIhFAUIBOgmQBZglA8AJQA+AKA0A+QAaAfAOAeQgOgQgcgTg");
	this.shape_13.setTransform(57.6,88);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#64809D").s().p("AivAWQBIhUBFgFQBEgFBfAkQAvARAhASQgOgHgfgIQhCgQhhgDQhggDhPBHQgSAQgQATg");
	this.shape_14.setTransform(167.4,77.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DBD1C4").s().p("ABWFlQhDhXgzg3Qg9g/iZh4IiMhqIBfAZQBlAXAfgOQAggPhOhHIhUhDIBrAtQByApAlgQQAlgShOhWIhXhTIBqA/QBwA8AigQQAhgRg7hLIhDhIIBhAqQBkAoARgKQAXgPgbgwQgWgnglglIAYAXQAeAeAcAkQBYB0AdCHQAfCRAFBMQAEA1gKAdQgGASh0BqQg6A0g5AyQgXgigigsg");
	this.shape_15.setTransform(-150.3,-1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyASIAAgjIBlAAIAAAjg");
	this.shape_16.setTransform(138.8,-17.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D87C3").s().p("AgLCVQgqgEgaguQgaguAFg8QAFg+AhgpQAhgpApADQAqAEAaAuQAaAugFA8QgFA+ghApQgeAmglAAIgHAAg");
	this.shape_17.setTransform(137,-10.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgyASIAAgjIBlAAIAAAjg");
	this.shape_18.setTransform(63.2,-17.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D87C3").s().p("AgLCVQgqgEgaguQgaguAFg8QAFg+AggpQAigpApADQAqAEAaAuQAbAugGA8QgFA+ghApQgeAmgmAAIgGAAg");
	this.shape_19.setTransform(61.4,-10.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3F4D66").s().p("AGsARQkBiNk/AAQkPAAjEA/Qg+ATguAYIgiASQgTgTgRglQgghLAOhYQAOhXA7g1QAdgaAbgJQgRAXgRAeQghA8gBAlQgBAmASAyQAIAZAJARIBTgeQBqggB3gMQF9goFvCuQFZCiCEEfQiMjxj5iJg");
	this.shape_20.setTransform(128,-97.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#567296").s().p("ApjDHQD1APDqgoQDDgiDLhzQCzhkCniZQiRDRj4B6Qj/B+kpAAQiOAAiIgeg");
	this.shape_21.setTransform(137,58.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4F5E80").s().p("Am1FcQjgg6geiPQgfiPC1iPQC2iQEfg9QEeg9DgA6QDgA6AeCPQAfCPi1CPQi2CQkfA9QiSAfiCAAQh8AAhugcg");
	this.shape_22.setTransform(147.2,166.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4F5E80").s().p("AhTFXQkdhGixiWQixiVAkiOQAiiODjgzQDhgzEcBGQEdBGCxCWQCxCVgkCOQgiCOjjAzQhfAVhpAAQiRAAikgog");
	this.shape_23.setTransform(77.4,166.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4D4D4D").s().p("AGBC6QgpgIgVgcIiQg+IlnAAIiQA+QgWAcgpAIQgpAIglgQQglgPgLgfQgLgfAVgbICIixQAegnA0gXQA0gWA9AAIFVAAQA8AAA0AWQA0AXAeAmICOC1QAVAcgMAdQgMAegmAOQgYAKgbAAQgNAAgPgCg");
	this.shape_24.setTransform(112.1,110.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#567296").s().p("AjEA8QgDgbAJgdQARg4A4gHQA4gGCHA/QBEAeA4Agg");
	this.shape_25.setTransform(103.9,48.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag5DZQjzgmg1jMQgQhAAEhJIAIg8ILTBUQgIBog5BgQhgChi6AAQgjAAgpgGg");
	this.shape_26.setTransform(154.8,-5.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#567296").s().p("Ag5D7Qjzgsg1jsQgQhKAEhUIAIhGILTBhQgIB5g5BuQhgC7i6AAQgjAAgpgHg");
	this.shape_27.setTransform(154.8,-1.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AkvAxQgkg4gUhGIgNg6ILphUIAABCQgEBPgYBDQhKDWjmANIgdAAQjPAAhsirg");
	this.shape_28.setTransform(46.8,-5.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#567296").s().p("AkvA6QgkhCgUhSIgNhEILphjIAABNQgEBdgYBPQhKD6jmAPIgdABQjPAAhsjIg");
	this.shape_29.setTransform(46.8,-1.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4F5E7F").s().p("AQGG0QhikQi8hFQi7hFh0AIQgkACgYAKIgSAJQgqAhhTAgQilBBjHAAQjHAAi6gyQg5gQgygSIgmgQQgoAKg8AeQh3A8hjBkQhjBkgaClQgNBSAGA/QgKhBgFhaQgKi0AZh9QAZh9BviGQA4hEAygqQAKg/AUhOQAnieA0hRQA0hRB+g6QA/gcA1gNQgRAXgRAdQghA9gBAlQgBAlASAzQAIAZAJARIBTgeQBqggB3gNQF8goFwCvQHVDeBHGzQAXCIgVCOQgKBGgOAsQgMh7gxiIg");
	this.shape_30.setTransform(104.7,-67);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#82A6BB").s().p("AmpNQQjFhGiYh/QiXiAhTilQhWirAAi7QAAi7BWiqQBTimCXh/QCYh/DFhGQDLhIDeAAQDeAADMBIQDEBGCYB/QCYB/BTCmQBWCqAAC7QAAC7hWCrQhUCliXCAQiYB/jEBGQjMBIjeAAQjeAAjLhIg");
	this.shape_31.setTransform(103.6,-10.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#64809D").s().p("AhdFKQhzgngwh/Qgwh/AviNQAchTA4hAQA3g9BFgeIB5A+QglgRgvAHQhSAMhPBVQhXBeAIBrQAEA1AVAjIgDAUQgCAZAHAZQAZBQBwAyQBwAyCJhrQBFg2AuhAIAFAGQg4B5hrA7QhDAkhAAAQgoAAgogNg");
	this.shape_32.setTransform(44.9,94.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#64809D").s().p("AhKFeQBzgtA1hRQA4hWARhVIAFhEQgCgrgMg3QgZhtg0g7Qg3g8iggmQATgDAUAAQB4AABWBpQBWBqAACVQAAA8gQA7QgRBWhFBIQhGBJhlAhQg6AUg+ACQA/gJA7gYg");
	this.shape_33.setTransform(194,86.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#567296").s().p("Ag4CtQgngSgeggQAfANAUAEQAfAFAYgKIAYgKQgIgNgJgWQgTgqgHgnQgGgmAFhUIAGhNICADUIAfCSQgtAXgzAAQgsAAgqgSg");
	this.shape_34.setTransform(-2.4,10.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#82A6BB").s().p("AiYCZQg+g/gBhaQABhYA+g/QBAg/BYAAQBZAAA/A/QBAA/gBBYQABBahAA/Qg/A+hZABQhYgBhAg+g");
	this.shape_35.setTransform(0.6,8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#567296").s().p("AiJBcIBbjsIBPgDIgKBUQgKBYgHAbQgJArgIAOIApAMQA1AHA3gZQg6AthKAAQhRAAg+g4g");
	this.shape_36.setTransform(212.4,9.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#769BAD").s().p("AhxFVQhzgmgwiAQgwh/AviMQAviOBzhIQBzhJByAmQB0AnAwB/QAwCAgwCMQgvCOhzBIQhMAwhKAAQgoAAgngOg");
	this.shape_37.setTransform(47,93.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#82A6BB").s().p("Ai2FnQh/gxgmhzQgdhZAnhcQAmhaBZg/QAehsBLhDQBNhFBeAAQB6AABWBqQBWBpAACVQAAA8gRA7QgRBXhEBHQhGBJhmAiQhFAXhBAAQhFAAhBgZg");
	this.shape_38.setTransform(177.7,86.8);

	this.instance = new lib.Path_42();
	this.instance.parent = this;
	this.instance.setTransform(114.1,126.6,1,1,0,0,0,97.1,55.8);
	this.instance.alpha = 0.602;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#455D79").s().p("AqtJHQkdhuAAkBQAAiLBNicQBMicCEiEQCLiLCphPQC5hWDAAAQDAAAC6BWQCpBPCMCLQCDCEBNCcQBMCcAACLQAAEBkcBuQjoBZnHAAQnHAAjmhZg");
	this.shape_39.setTransform(114.1,115.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#82A6BB").s().p("AiYCZQg/g/AAhaQAAhYA/hAQBAg/BYAAQBaAAA/A/QA/BAAABYQAABag/A/Qg/A/haAAQhYAAhAg/g");
	this.shape_40.setTransform(213,2.4);

	this.instance_1 = new lib.Path_45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(123.4,63.8,1,1,0,0,0,112.4,133.8);
	this.instance_1.alpha = 0.289;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DBD1C4").s().p("ApCCGQARhtAEhKQACgvgDhQIgFhGIARBzQASBzANABQANAAANhPIAKhNIAGB6QAQB9AuALQAvAMAeiQIAUiWIgGCOQACCNAuADQAvACAOhPIAGhOIgBAVQABAZAFAVQARBDA9ADQA+ACAYihQAHgyADg9IABgzIAbC0QAlC0AzAEQAyAEAuh1IAlh2IgHB7QABB8ApALQAoAKAri3IAji6IABB/QAICAAnAGQAoAGA9hvQAfg5AXg6IiTGog");
	this.shape_41.setTransform(251.9,0.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DBD1C4").s().p("AoJBVQgHgugUhNIgShEIAoBsQApBtANgCQAMgCgDhQIgGhNIAfB2QApB3AwACQAwADgBiVIgKiVIAWCLQAgCKAugHQAtgHgBhQIgLhOIADAUQAGAYAKAUQAeA/A9gKQA8gKgJiiQgDgzgJg8IgJgyIA+CqQBKCpAygGQAygGAVh8IAMh7IASB6QAbB6AqACQApACAFi9IgDi+IAaB9QAiB9AogCQAngCAmh7IAeh7Ig6G9Iv1BcQgFhugMhKg");
	this.shape_42.setTransform(-58.6,-8.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DBD1C4").s().p("AVeCtQumhlnYgCQnZgCsrAYIrMAZIj7lIIBvATQCHAWB6APQBKAJBMgPQAxgKBXgdQBjgiAvgMQBagXBbgDQAzgCA5ASIBoAhQCTAlDxhCQBsgeDMAzICmAqQBhAWBGACQB6AEDsgoQDbglCBAMQCeAPD7BcQCXA4AlAMQBnAiBMAMQBrAQDNgeQDJgeBCAMQCxAhBnAVIhHEAQl0gynTgyg");
	this.shape_43.setTransform(109.3,79.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DBD1C4").s().p("AgOAKQAPgOAUgOIgpAlg");
	this.shape_44.setTransform(328.5,-48.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DBD1C4").s().p("EgkCAHCQgng2gQhOQgbiAAyiWQA8i3DJhdQCDg8EggwQC7gfFxAmQC4ASCSAZIAdgaQAqgeA/gaQDMhTFcAAQFcAAE/BXQCgAsBaAsIAjgcQAyghBIgWQDnhIF0A8QGdBCDOC9QCuCfgNDIQgGBSgYBBQAdhrg/jDQgmh0iIhiQh4hYi0g9Qijg4irgWQilgUhtASQiyAghTAyQgaARgNAQIgIAMQhzgqizgtQlmhblAgTQlBgSjcBaQhFAdgzAkIgkAeQksghlMABQqYAEihCvQigCuATDcQAKBuAqBLg");
	this.shape_45.setTransform(94.7,-90.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DBD1C4").s().p("AAOgLQgJALgJAHIgIAFg");
	this.shape_46.setTransform(325,-45.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DBD1C4").s().p("AUrAnQubhcnJgYQnKgXtiA4IsFA7ICtgYQDdgfDwgYQMAhNKjARQIpAON/B4QHAA8FQA6QlygqnOgvg");
	this.shape_47.setTransform(104.7,17.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DBD1C4").s().p("AgMAmQAhhpAwiYIAoiDIgYCSQggCighBQIiAE5QApiRA3iog");
	this.shape_48.setTransform(329.8,106.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DBD1C4").s().p("ACjDrQg2ikgshMQgshNh2ieIhviOICBBvQCJCDAyBkQAyBjAfCsQAPBWAFBCQgThCgbhSg");
	this.shape_49.setTransform(-109.1,85.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DBD1C4").s().p("AgsAaQlIgPtnAQIslAUIgmhuIMbgaQNjgcFmgGQFmgGOlBUQHTAqGLAqIgkBVMggvgBig");
	this.shape_50.setTransform(116.7,119.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DBD1C4").s().p("AjvCBQASgjA4gyQA5gyCqhOQBVgoBKgdIAbAJQgmAMgqAQQhUAfgTAVQgUAVAqAMQAVAGAZABQgwABgoADQhRAGAjANQAiANAQAYQAGAKACAJQgCgFgMgEQgggMhXACQhXACgzA6QgZAegIAcQgCgHAKgSg");
	this.shape_51.setTransform(-217.8,-27.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAF8E8").s().p("EAqeAVdIAdhWQjZgVllgcQrLg3rBgbQq/gbsCAmQjyAMjbAQIirAPIAAAuQABANgKAIQgKAKgMgBIqTgaQgPgBgMgJQgMgKgDgPQgliugqiQQhGjvg7hCQhFhMgNgIQgwgThZgvIiNhEQhVgqgxgkQiMhkgBieQAAikA1hTQAhgzBeg5QBbg2DOhZQDphlBpgUQBhgTBrA3QA1AbAhAfQgggjgVhIQgqiNA4irQA8i5DJhcQCDg9EfgvQC8ggFwAmQC4ASCTAZIAdgaQAqgeA/gaQDKhSFdgBQFcABFABXQCgAsBaArIAjgcQAyggBHgXQDohHFzA8QGeBCDNC8QCuCggNDIQgHBwgpBRQBKhCA2AOIAAeng");
	this.shape_52.setTransform(47,3.2);

	this.instance_2 = new lib.Path_55();
	this.instance_2.parent = this;
	this.instance_2.setTransform(106.7,116.7,1,1,0,0,0,229,23.9);
	this.instance_2.alpha = 0.289;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D9ECFD").s().p("AnOAAIGwh+IHuBFIkaC3g");
	this.shape_53.setTransform(-126.4,150);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A7AEB6").s().p("AAnCbIoRh3QgRgEAAgRQgBgQARgFIH8iSQAYgHAKgBQALAAAYADIGcA6QAIABACAIQACAJgGAEIkgDIQgnAaguAIQgVAEgUAAQgaAAgZgGg");
	this.shape_54.setTransform(-128.9,151.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333127").s().p("AAbCaIkQhMQjWg8gNgFQgIgEgQgmIgOgnIP9hkIgGAiQgGAkgGAJQgGAJhtBZQhgBPg3AsQgpAggxAEIgRABQgoAAg1gPg");
	this.shape_55.setTransform(-128.6,160.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#657073").s().p("AgjAkIhJgcIBCgoIAEhOIA6AyIBLgUIgdBIIArBAIhOgGIgwA9g");
	this.shape_56.setTransform(-299.6,79.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#657073").s().p("AgQARIgigLIAegUIgBgkIAcAVIAigLIgMAiIAWAcIgkgBIgUAeg");
	this.shape_57.setTransform(-197.5,131);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#657073").s().p("AgjAjIhJgbIBCgoIAEhOIA6AyIBLgUIgdBIIArBAIhOgGIgwA9g");
	this.shape_58.setTransform(282.1,-174);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#657073").s().p("AhMBMIibg7ICNhXIAIimIB+BsICggsIg/CaIBbCKIilgNIhnCCg");
	this.shape_59.setTransform(-284.5,-67.4);

	this.instance_3 = new lib.Path_63();
	this.instance_3.parent = this;
	this.instance_3.setTransform(123.1,82.8,1,1,0,0,0,208.8,152.8);
	this.instance_3.alpha = 0.121;

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#041322").s().p("Eg1OgFGIKzilMBfqAIhIAAG3g");
	this.shape_60.setTransform(0,192.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#395266").s().p("Eg1OAY6MAAAgoEMBqdgWjMAAABLbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.instance_3},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.instance_2},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.instance_1},{t:this.shape_40},{t:this.shape_39},{t:this.instance},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340.6,-241.4,681.3,482.9);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EA9F44","#F8DC89"],[0,1],0,34.9,0,-34.8).s().p("AjWlcIG9AAIgMC0IjNALIgFA9ICQAAIgKCVIiRAFIgEBGIDMAAIgMDTImgAKg");
	this.shape.setTransform(568.3,219.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EA9F44","#F8DC89"],[0,1],0,35.3,0,-35.2).s().p("AgICSIg8ACIgJDJIjPAAIALolQABgwADg+QAjgNAfgIQAfgHAjgFQAggFAkgCQAigBAjAAQA3AAA0APQAzAPAoAfQAnAeAZAtQAYAugBA8QABAjgHAiQgHAfgOAYQgOAagWAWQgXAWgfATIBzDOIjZAqgAgki5IgSAEIgIC0IALAAQAXAAAUgFQAVgGAQgLQASgLAKgRQALgSAAgYQABgUgGgRQgFgRgLgNQgLgMgQgHQgQgHgVAAIgTABg");
	this.shape_1.setTransform(513.7,218.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EA9F44","#F8DC89"],[0,1],0,33.6,0,-33.5).s().p("AjPAAIAJlPID7AAIgVDUQgJBhgGBzIDFAAIgUDXImXAgg");
	this.shape_2.setTransform(370.2,218);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EA9F44","#F8DC89"],[0,1],0,35.8,0,-35.8).s().p("AkYFmIACm5IAAh2QAAg4ADg/QBCgTA6gJQA9gJBCAAQAlAAAlAGQAoAGAfANQAhAMAfAVQAeATAUAbQAWAdAMAhQAMAiAAAsQAAAvgOAkQgOAigYAdQgYAagiAUQggARgmANQgjALgrAGQgnAGgnAAIAADigAgrieIgGCNIAaABQASAAAPgFQAOgFAPgMQAMgLAIgPQAHgPAAgSQAAgegTgTQgTgRgdgBg");
	this.shape_3.setTransform(318.2,219.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EA9F44","#F8DC89"],[0,1],0,33.5,0,-33.4).s().p("AiAlAIEBgOIg2KSIjLALg");
	this.shape_4.setTransform(273.8,219.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EA9F44","#F8DC89"],[0,1],0,37.1,0,-37).s().p("AkklxIDhAMIgRDaICVjmID0ATIjqFCIDFFWIjhAnIiSjQIgIDaIjJAHg");
	this.shape_5.setTransform(230.1,220.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#EA9F44","#F8DC89"],[0,1],0,33.6,0,-33.5).s().p("AjPAAIAJlPID7AAIgVDUQgJBhgGBzIDFAAIgUDXImXAgg");
	this.shape_6.setTransform(176,218);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#EA9F44","#F8DC89"],[0,1],0,34.1,0,-34.1).s().p("AA4DoIhtAAIgYBtIj3gYIDAqDIEMgOIC9KKIjwAfgAghBUIBIAAIgliog");
	this.shape_7.setTransform(121.3,219.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#EA9F44","#F8DC89"],[0,1],0,34.9,0,-34.8).s().p("AABABIg6FDIkTAJIhzqTIDwgWIAxGRIBBmRIC7AAIBMGVIAnmVIDvAWIhyKdIkSAGg");
	this.shape_8.setTransform(48.8,220.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#404041").s().p("Aj2l3IH8AAIgFBpIgDBCQgCAwgCASIjRALIgFAWICTAAIgKCzIiUAFIgFAfIDRAAIgGB5QgDAvgDBYIneAKg");
	this.shape_9.setTransform(568.3,219.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#404041").s().p("AgkCoIgaADIgKDaIkJAAIANprIAFiAQAQgFAdgIIAtgKQAmgKAlgGQBBgJAMACQAigCAsAAQA+AAA7ASQA7ASAtAjQAtAkAbA0QAcA0AABGQAAArgIAkQgHAigQAeQgQAdgZAZQgLALgKAHIgaAQICDDtIkjA/gAghijIgNADIgFCAIAIAAQAQAAAOgEQAQgFAKgGQAMgJAIgMQAHgMAAgSQAAgNgEgNQgDgMgIgJQgJgKgKgDQgKgGgQAAg");
	this.shape_10.setTransform(515.3,219.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#404041").s().p("AkIAAIAIlxIFfAAIglGjQDEgbASAAIgwFVInvAFIAHlxg");
	this.shape_11.setTransform(371.2,218.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#404041").s().p("Ak+GOIACngQACg8gBhMQAAhSADg3QBFgVBHgKQBGgLBLAAQAsAAAoAHQApAGAoAQQAnAPAgAWQAhAWAZAgQAZAhANAmQAOAnAAAzQAAA2gQApQgQApgcAfQgdAhgkATQgmAXgqANQgsAPgsAFIgeAFIgeACIAADogAgeiPIgQACIgFBtIAVABQAOAAAMgEQANgFAJgJQAKgHAGgMQAGgLAAgPQAAgYgPgOQgPgNgXAAg");
	this.shape_12.setTransform(319.3,219.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#404041").s().p("AiXFoIAArEIEvgOIgcLVg");
	this.shape_13.setTransform(273.6,220.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#404041").s().p("AlpGLIAQsbIEbANIgeCoIBui1IFYATIj7FWIDjFqIlDA2Ih6ieIgJC2g");
	this.shape_14.setTransform(233.2,221.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#404041").s().p("Ajrl3IFQANIg/GxIBkgOQBmgOAMAAIgVE6IniATQALpKAFilg");
	this.shape_15.setTransform(176.6,217.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#404041").s().p("Al6FpIDErOIFVghIDcLpIlGAfIgdiKIhCAAIgZCPgAggA8IA5gHIgchUg");
	this.shape_16.setTransform(122.2,219.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#404041").s().p("AgVBkIgjEAIk+AKIiGrBIEsgZIAeEEIAvkVIDVAAIBCFMIAWlFIFTACIilLsIk+AGg");
	this.shape_17.setTransform(50.9,219.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},28).wait(1));

	// Layer 2
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(434.6,160.8,1,1,0,0,0,167,160.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:159.7},0).wait(1).to({y:158.5},0).wait(1).to({y:157.4},0).wait(1).to({y:156.2},0).wait(1).to({y:155.1},0).wait(1).to({y:153.9},0).wait(1).to({y:152.8},0).wait(1).to({y:151.6},0).wait(1).to({y:150.5},0).wait(1).to({y:149.3},0).wait(1).to({y:148.2},0).wait(1).to({y:147},0).wait(1).to({y:145.8},0).wait(1).to({y:146.8},0).wait(1).to({y:147.8},0).wait(1).to({y:148.8},0).wait(1).to({y:149.8},0).wait(1).to({y:150.8},0).wait(1).to({y:151.8},0).wait(1).to({y:152.8},0).wait(1).to({y:153.8},0).wait(1).to({y:154.8},0).wait(1).to({y:155.8},0).wait(1).to({y:156.8},0).wait(1).to({y:157.8},0).wait(1).to({y:158.8},0).wait(1).to({y:159.8},0).wait(1).to({y:160.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,601.6,321.5);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(271.4,617,1,1,0,0,0,202.8,229.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.021},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.149},0).wait(1).to({alpha:0.17},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.213},0).wait(1).to({alpha:0.234},0).wait(1).to({alpha:0.255},0).wait(1).to({alpha:0.277},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.319},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.383},0).wait(1).to({alpha:0.404},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.468},0).wait(1).to({alpha:0.489},0).wait(1).to({alpha:0.511},0).wait(1).to({alpha:0.532},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.574},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.617},0).wait(1).to({alpha:0.638},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.681},0).wait(1).to({alpha:0.702},0).wait(1).to({alpha:0.723},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.766},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.83},0).wait(1).to({alpha:0.851},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.925},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.887},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.849},0).wait(1).to({alpha:0.83},0).wait(1).to({alpha:0.811},0).wait(1).to({alpha:0.792},0).wait(1).to({alpha:0.774},0).wait(1).to({alpha:0.755},0).wait(1).to({alpha:0.736},0).wait(1).to({alpha:0.717},0).wait(1).to({alpha:0.698},0).wait(1).to({alpha:0.679},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.642},0).wait(1).to({alpha:0.623},0).wait(1).to({alpha:0.604},0).wait(1).to({alpha:0.585},0).wait(1).to({alpha:0.566},0).wait(1).to({alpha:0.547},0).wait(1).to({alpha:0.528},0).wait(1).to({alpha:0.509},0).wait(1).to({alpha:0.491},0).wait(1).to({alpha:0.472},0).wait(1).to({alpha:0.453},0).wait(1).to({alpha:0.434},0).wait(1).to({alpha:0.415},0).wait(1).to({alpha:0.396},0).wait(1).to({alpha:0.377},0).wait(1).to({alpha:0.358},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.321},0).wait(1).to({alpha:0.302},0).wait(1).to({alpha:0.283},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.245},0).wait(1).to({alpha:0.226},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.17},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.132},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.038},0).wait(1).to({alpha:0.019},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(325,229.6,1,1,0,0,0,202.8,229.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.079},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.132},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.237},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.289},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.342},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.395},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.605},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.658},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.763},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.816},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.921},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.892},0).wait(1).to({alpha:0.865},0).wait(1).to({alpha:0.838},0).wait(1).to({alpha:0.811},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.649},0).wait(1).to({alpha:0.622},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.568},0).wait(1).to({alpha:0.541},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.459},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.351},0).wait(1).to({alpha:0.324},0).wait(1).to({alpha:0.297},0).wait(1).to({alpha:0.27},0).wait(1).to({alpha:0.243},0).wait(1).to({alpha:0.216},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.162},0).wait(1).to({alpha:0.135},0).wait(1).to({alpha:0.108},0).wait(1).to({alpha:0.081},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.027},0).wait(1).to({alpha:0},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.6,0,459.2,846.6);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(1042.5,112.5,1,1,0,0,0,221.5,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1041.2},0).wait(1).to({x:1039.9},0).wait(1).to({x:1038.6},0).wait(1).to({x:1037.3},0).wait(1).to({x:1036},0).wait(1).to({x:1034.8},0).wait(1).to({x:1033.5},0).wait(1).to({x:1032.2},0).wait(1).to({x:1030.9},0).wait(1).to({x:1029.6},0).wait(1).to({x:1028.3},0).wait(1).to({x:1027},0).wait(1).to({x:1025.7},0).wait(1).to({x:1024.4},0).wait(1).to({x:1023.1},0).wait(1).to({x:1021.9},0).wait(1).to({x:1020.6},0).wait(1).to({x:1019.3},0).wait(1).to({x:1018},0).wait(1).to({x:1016.7},0).wait(1).to({x:1015.4},0).wait(1).to({x:1014.1},0).wait(1).to({x:1012.8},0).wait(1).to({x:1011.5},0).wait(1).to({x:1010.2},0).wait(1).to({x:1009},0).wait(1).to({x:1007.7},0).wait(1).to({x:1006.4},0).wait(1).to({x:1005.1},0).wait(1).to({x:1003.8},0).wait(1).to({x:1002.5},0).wait(1).to({x:1001.2},0).wait(1).to({x:999.9},0).wait(1).to({x:998.6},0).wait(1).to({x:997.3},0).wait(1).to({x:996},0).wait(1).to({x:994.8},0).wait(1).to({x:993.5},0).wait(1).to({x:992.2},0).wait(1).to({x:990.9},0).wait(1).to({x:989.6},0).wait(1).to({x:988.3},0).wait(1).to({x:987},0).wait(1).to({x:985.7},0).wait(1).to({x:984.4},0).wait(1).to({x:983.1},0).wait(1).to({x:981.9},0).wait(1).to({x:980.6},0).wait(1).to({x:979.3},0).wait(1).to({x:978},0).wait(1).to({x:976.7},0).wait(1).to({x:975.4},0).wait(1).to({x:974.1},0).wait(1).to({x:972.8},0).wait(1).to({x:971.5},0).wait(1).to({x:970.2},0).wait(1).to({x:969},0).wait(1).to({x:967.7},0).wait(1).to({x:966.4},0).wait(1).to({x:965.1},0).wait(1).to({x:963.8},0).wait(1).to({x:962.5},0).wait(1).to({x:963.9},0).wait(1).to({x:965.3},0).wait(1).to({x:966.7},0).wait(1).to({x:968.1},0).wait(1).to({x:969.5},0).wait(1).to({x:970.9},0).wait(1).to({x:972.3},0).wait(1).to({x:973.7},0).wait(1).to({x:975.1},0).wait(1).to({x:976.5},0).wait(1).to({x:977.9},0).wait(1).to({x:979.3},0).wait(1).to({x:980.7},0).wait(1).to({x:982.1},0).wait(1).to({x:983.6},0).wait(1).to({x:985},0).wait(1).to({x:986.4},0).wait(1).to({x:987.8},0).wait(1).to({x:989.2},0).wait(1).to({x:990.6},0).wait(1).to({x:992},0).wait(1).to({x:993.4},0).wait(1).to({x:994.8},0).wait(1).to({x:996.2},0).wait(1).to({x:997.6},0).wait(1).to({x:999},0).wait(1).to({x:1000.4},0).wait(1).to({x:1001.8},0).wait(1).to({x:1003.2},0).wait(1).to({x:1004.6},0).wait(1).to({x:1006},0).wait(1).to({x:1007.4},0).wait(1).to({x:1008.8},0).wait(1).to({x:1010.2},0).wait(1).to({x:1011.6},0).wait(1).to({x:1013},0).wait(1).to({x:1014.4},0).wait(1).to({x:1015.8},0).wait(1).to({x:1017.2},0).wait(1).to({x:1018.6},0).wait(1).to({x:1020},0).wait(1).to({x:1021.4},0).wait(1).to({x:1022.9},0).wait(1).to({x:1024.3},0).wait(1).to({x:1025.7},0).wait(1).to({x:1027.1},0).wait(1).to({x:1028.5},0).wait(1).to({x:1029.9},0).wait(1).to({x:1031.3},0).wait(1).to({x:1032.7},0).wait(1).to({x:1034.1},0).wait(1).to({x:1035.5},0).wait(1).to({x:1036.9},0).wait(1).to({x:1038.3},0).wait(1).to({x:1039.7},0).wait(1).to({x:1041.1},0).wait(1).to({x:1042.5},0).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(285.5,244.5,1,1,0,0,0,308.5,104.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:287.4},0).wait(1).to({x:289.2},0).wait(1).to({x:291.1},0).wait(1).to({x:292.9},0).wait(1).to({x:294.7},0).wait(1).to({x:296.6},0).wait(1).to({x:298.4},0).wait(1).to({x:300.3},0).wait(1).to({x:302.1},0).wait(1).to({x:303.9},0).wait(1).to({x:305.8},0).wait(1).to({x:307.6},0).wait(1).to({x:309.4},0).wait(1).to({x:311.2},0).wait(1).to({x:313.1},0).wait(1).to({x:314.9},0).wait(1).to({x:316.8},0).wait(1).to({x:318.6},0).wait(1).to({x:320.4},0).wait(1).to({x:322.3},0).wait(1).to({x:324.1},0).wait(1).to({x:326},0).wait(1).to({x:327.8},0).wait(1).to({x:329.6},0).wait(1).to({x:331.5},0).wait(1).to({x:333.3},0).wait(1).to({x:335.1},0).wait(1).to({x:337},0).wait(1).to({x:338.8},0).wait(1).to({x:340.7},0).wait(1).to({x:342.5},0).wait(1).to({x:344.3},0).wait(1).to({x:346.2},0).wait(1).to({x:348},0).wait(1).to({x:349.9},0).wait(1).to({x:351.7},0).wait(1).to({x:353.5},0).wait(1).to({x:355.4},0).wait(1).to({x:357.2},0).wait(1).to({x:359},0).wait(1).to({x:360.9},0).wait(1).to({x:362.7},0).wait(1).to({x:364.6},0).wait(1).to({x:366.4},0).wait(1).to({x:368.2},0).wait(1).to({x:370.1},0).wait(1).to({x:371.9},0).wait(1).to({x:373.8},0).wait(1).to({x:375.6},0).wait(1).to({x:377.4},0).wait(1).to({x:379.3},0).wait(1).to({x:381.1},0).wait(1).to({x:383},0).wait(1).to({x:384.8},0).wait(1).to({x:386.6},0).wait(1).to({x:388.5},0).wait(1).to({x:390.3},0).wait(1).to({x:392.1},0).wait(1).to({x:394},0).wait(1).to({x:395.8},0).wait(1).to({x:397.7},0).wait(1).to({x:399.5},0).wait(1).to({x:397.5},0).wait(1).to({x:395.5},0).wait(1).to({x:393.5},0).wait(1).to({x:391.5},0).wait(1).to({x:389.5},0).wait(1).to({x:387.5},0).wait(1).to({x:385.5},0).wait(1).to({x:383.5},0).wait(1).to({x:381.5},0).wait(1).to({x:379.5},0).wait(1).to({x:377.5},0).wait(1).to({x:375.5},0).wait(1).to({x:373.5},0).wait(1).to({x:371.5},0).wait(1).to({x:369.5},0).wait(1).to({x:367.5},0).wait(1).to({x:365.5},0).wait(1).to({x:363.5},0).wait(1).to({x:361.5},0).wait(1).to({x:359.5},0).wait(1).to({x:357.5},0).wait(1).to({x:355.5},0).wait(1).to({x:353.5},0).wait(1).to({x:351.5},0).wait(1).to({x:349.5},0).wait(1).to({x:347.5},0).wait(1).to({x:345.5},0).wait(1).to({x:343.5},0).wait(1).to({x:341.5},0).wait(1).to({x:339.5},0).wait(1).to({x:337.5},0).wait(1).to({x:335.5},0).wait(1).to({x:333.5},0).wait(1).to({x:331.5},0).wait(1).to({x:329.5},0).wait(1).to({x:327.5},0).wait(1).to({x:325.5},0).wait(1).to({x:323.5},0).wait(1).to({x:321.5},0).wait(1).to({x:319.5},0).wait(1).to({x:317.5},0).wait(1).to({x:315.5},0).wait(1).to({x:313.5},0).wait(1).to({x:311.5},0).wait(1).to({x:309.5},0).wait(1).to({x:307.5},0).wait(1).to({x:305.5},0).wait(1).to({x:303.5},0).wait(1).to({x:301.5},0).wait(1).to({x:299.6},0).wait(1).to({x:297.5},0).wait(1).to({x:295.5},0).wait(1).to({x:293.5},0).wait(1).to({x:291.5},0).wait(1).to({x:289.5},0).wait(1).to({x:287.6},0).wait(1).to({x:285.5},0).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1050,552,1,1,0,0,0,214,112);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:1051.3},0).wait(1).to({x:1052.6},0).wait(1).to({x:1053.9},0).wait(1).to({x:1055.2},0).wait(1).to({x:1056.5},0).wait(1).to({x:1057.7},0).wait(1).to({x:1059},0).wait(1).to({x:1060.3},0).wait(1).to({x:1061.6},0).wait(1).to({x:1062.9},0).wait(1).to({x:1064.2},0).wait(1).to({x:1065.5},0).wait(1).to({x:1066.8},0).wait(1).to({x:1068.1},0).wait(1).to({x:1069.4},0).wait(1).to({x:1070.7},0).wait(1).to({x:1071.9},0).wait(1).to({x:1073.2},0).wait(1).to({x:1074.5},0).wait(1).to({x:1075.8},0).wait(1).to({x:1077.1},0).wait(1).to({x:1078.4},0).wait(1).to({x:1079.7},0).wait(1).to({x:1081},0).wait(1).to({x:1082.3},0).wait(1).to({x:1083.6},0).wait(1).to({x:1084.9},0).wait(1).to({x:1086.2},0).wait(1).to({x:1087.4},0).wait(1).to({x:1088.7},0).wait(1).to({x:1090},0).wait(1).to({x:1091.3},0).wait(1).to({x:1092.6},0).wait(1).to({x:1093.9},0).wait(1).to({x:1095.2},0).wait(1).to({x:1096.5},0).wait(1).to({x:1097.8},0).wait(1).to({x:1099.1},0).wait(1).to({x:1100.4},0).wait(1).to({x:1101.6},0).wait(1).to({x:1102.9},0).wait(1).to({x:1104.2},0).wait(1).to({x:1105.5},0).wait(1).to({x:1106.8},0).wait(1).to({x:1108.1},0).wait(1).to({x:1109.4},0).wait(1).to({x:1110.7},0).wait(1).to({x:1112},0).wait(1).to({x:1113.3},0).wait(1).to({x:1114.6},0).wait(1).to({x:1115.8},0).wait(1).to({x:1117.1},0).wait(1).to({x:1118.4},0).wait(1).to({x:1119.7},0).wait(1).to({x:1121},0).wait(1).to({x:1122.3},0).wait(1).to({x:1123.6},0).wait(1).to({x:1124.9},0).wait(1).to({x:1126.2},0).wait(1).to({x:1127.5},0).wait(1).to({x:1128.8},0).wait(1).to({x:1130.1},0).wait(1).to({x:1128.6},0).wait(1).to({x:1127.2},0).wait(1).to({x:1125.8},0).wait(1).to({x:1124.4},0).wait(1).to({x:1123},0).wait(1).to({x:1121.6},0).wait(1).to({x:1120.2},0).wait(1).to({x:1118.8},0).wait(1).to({x:1117.4},0).wait(1).to({x:1116},0).wait(1).to({x:1114.6},0).wait(1).to({x:1113.2},0).wait(1).to({x:1111.8},0).wait(1).to({x:1110.4},0).wait(1).to({x:1109},0).wait(1).to({x:1107.6},0).wait(1).to({x:1106.2},0).wait(1).to({x:1104.8},0).wait(1).to({x:1103.4},0).wait(1).to({x:1102},0).wait(1).to({x:1100.6},0).wait(1).to({x:1099.2},0).wait(1).to({x:1097.7},0).wait(1).to({x:1096.3},0).wait(1).to({x:1094.9},0).wait(1).to({x:1093.5},0).wait(1).to({x:1092.1},0).wait(1).to({x:1090.7},0).wait(1).to({x:1089.3},0).wait(1).to({x:1087.9},0).wait(1).to({x:1086.5},0).wait(1).to({x:1085.1},0).wait(1).to({x:1083.7},0).wait(1).to({x:1082.3},0).wait(1).to({x:1080.9},0).wait(1).to({x:1079.5},0).wait(1).to({x:1078.1},0).wait(1).to({x:1076.7},0).wait(1).to({x:1075.3},0).wait(1).to({x:1073.9},0).wait(1).to({x:1072.5},0).wait(1).to({x:1071.1},0).wait(1).to({x:1069.7},0).wait(1).to({x:1068.3},0).wait(1).to({x:1066.9},0).wait(1).to({x:1065.4},0).wait(1).to({x:1064},0).wait(1).to({x:1062.6},0).wait(1).to({x:1061.2},0).wait(1).to({x:1059.8},0).wait(1).to({x:1058.4},0).wait(1).to({x:1057},0).wait(1).to({x:1055.6},0).wait(1).to({x:1054.2},0).wait(1).to({x:1052.8},0).wait(1).to({x:1051.4},0).wait(1).to({x:1050},0).wait(1));

	// Layer 2
	this.instance_3 = new lib.Symbol25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,816.5,1,1,0,0,0,184,121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:276.4},0).wait(1).to({x:277.7},0).wait(1).to({x:279.1},0).wait(1).to({x:280.4},0).wait(1).to({x:281.8},0).wait(1).to({x:283.1},0).wait(1).to({x:284.5},0).wait(1).to({x:285.8},0).wait(1).to({x:287.2},0).wait(1).to({x:288.5},0).wait(1).to({x:289.9},0).wait(1).to({x:291.3},0).wait(1).to({x:292.6},0).wait(1).to({x:294},0).wait(1).to({x:295.3},0).wait(1).to({x:296.7},0).wait(1).to({x:298},0).wait(1).to({x:299.4},0).wait(1).to({x:300.7},0).wait(1).to({x:302.1},0).wait(1).to({x:303.5},0).wait(1).to({x:304.8},0).wait(1).to({x:306.2},0).wait(1).to({x:307.5},0).wait(1).to({x:308.9},0).wait(1).to({x:310.2},0).wait(1).to({x:311.6},0).wait(1).to({x:312.9},0).wait(1).to({x:314.3},0).wait(1).to({x:315.6},0).wait(1).to({x:317},0).wait(1).to({x:318.4},0).wait(1).to({x:319.7},0).wait(1).to({x:321.1},0).wait(1).to({x:322.4},0).wait(1).to({x:323.8},0).wait(1).to({x:325.1},0).wait(1).to({x:326.5},0).wait(1).to({x:327.8},0).wait(1).to({x:329.2},0).wait(1).to({x:330.5},0).wait(1).to({x:331.9},0).wait(1).to({x:333.3},0).wait(1).to({x:334.6},0).wait(1).to({x:336},0).wait(1).to({x:337.3},0).wait(1).to({x:338.7},0).wait(1).to({x:340},0).wait(1).to({x:341.4},0).wait(1).to({x:342.7},0).wait(1).to({x:344.1},0).wait(1).to({x:345.5},0).wait(1).to({x:346.8},0).wait(1).to({x:348.2},0).wait(1).to({x:349.5},0).wait(1).to({x:350.9},0).wait(1).to({x:352.2},0).wait(1).to({x:353.6},0).wait(1).to({x:354.9},0).wait(1).to({x:356.3},0).wait(1).to({x:357.6},0).wait(1).to({x:359},0).wait(1).to({x:357.5},0).wait(1).to({x:356.1},0).wait(1).to({x:354.6},0).wait(1).to({x:353.1},0).wait(1).to({x:351.6},0).wait(1).to({x:350.2},0).wait(1).to({x:348.7},0).wait(1).to({x:347.2},0).wait(1).to({x:345.7},0).wait(1).to({x:344.3},0).wait(1).to({x:342.8},0).wait(1).to({x:341.3},0).wait(1).to({x:339.8},0).wait(1).to({x:338.4},0).wait(1).to({x:336.9},0).wait(1).to({x:335.4},0).wait(1).to({x:333.9},0).wait(1).to({x:332.5},0).wait(1).to({x:331},0).wait(1).to({x:329.5},0).wait(1).to({x:328.1},0).wait(1).to({x:326.6},0).wait(1).to({x:325.1},0).wait(1).to({x:323.6},0).wait(1).to({x:322.2},0).wait(1).to({x:320.7},0).wait(1).to({x:319.2},0).wait(1).to({x:317.7},0).wait(1).to({x:316.3},0).wait(1).to({x:314.8},0).wait(1).to({x:313.3},0).wait(1).to({x:311.8},0).wait(1).to({x:310.4},0).wait(1).to({x:308.9},0).wait(1).to({x:307.4},0).wait(1).to({x:305.9},0).wait(1).to({x:304.5},0).wait(1).to({x:303},0).wait(1).to({x:301.5},0).wait(1).to({x:300.1},0).wait(1).to({x:298.6},0).wait(1).to({x:297.1},0).wait(1).to({x:295.6},0).wait(1).to({x:294.2},0).wait(1).to({x:292.7},0).wait(1).to({x:291.2},0).wait(1).to({x:289.7},0).wait(1).to({x:288.3},0).wait(1).to({x:286.8},0).wait(1).to({x:285.3},0).wait(1).to({x:283.8},0).wait(1).to({x:282.4},0).wait(1).to({x:280.9},0).wait(1).to({x:279.4},0).wait(1).to({x:277.9},0).wait(1).to({x:276.5},0).wait(1).to({x:275},0).wait(1));

	// Layer 1
	this.instance_4 = new lib.Symbol27();
	this.instance_4.parent = this;
	this.instance_4.setTransform(411,1284,1,1,0,0,0,339,235);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:409.1},0).wait(1).to({x:407.3},0).wait(1).to({x:405.4},0).wait(1).to({x:403.5},0).wait(1).to({x:401.6},0).wait(1).to({x:399.8},0).wait(1).to({x:397.9},0).wait(1).to({x:396},0).wait(1).to({x:394.2},0).wait(1).to({x:392.3},0).wait(1).to({x:390.4},0).wait(1).to({x:388.5},0).wait(1).to({x:386.7},0).wait(1).to({x:384.8},0).wait(1).to({x:382.9},0).wait(1).to({x:381.1},0).wait(1).to({x:379.2},0).wait(1).to({x:377.3},0).wait(1).to({x:375.5},0).wait(1).to({x:373.6},0).wait(1).to({x:371.7},0).wait(1).to({x:369.8},0).wait(1).to({x:368},0).wait(1).to({x:366.1},0).wait(1).to({x:364.2},0).wait(1).to({x:362.4},0).wait(1).to({x:360.5},0).wait(1).to({x:358.6},0).wait(1).to({x:356.7},0).wait(1).to({x:354.9},0).wait(1).to({x:353},0).wait(1).to({x:351.1},0).wait(1).to({x:349.3},0).wait(1).to({x:347.4},0).wait(1).to({x:345.5},0).wait(1).to({x:343.6},0).wait(1).to({x:341.8},0).wait(1).to({x:339.9},0).wait(1).to({x:338.1},0).wait(1).to({x:336.2},0).wait(1).to({x:334.3},0).wait(1).to({x:332.5},0).wait(1).to({x:330.6},0).wait(1).to({x:328.7},0).wait(1).to({x:326.9},0).wait(1).to({x:325},0).wait(1).to({x:323.1},0).wait(1).to({x:321.2},0).wait(1).to({x:319.4},0).wait(1).to({x:317.5},0).wait(1).to({x:315.6},0).wait(1).to({x:313.8},0).wait(1).to({x:311.9},0).wait(1).to({x:310},0).wait(1).to({x:308.1},0).wait(1).to({x:306.3},0).wait(1).to({x:304.4},0).wait(1).to({x:302.5},0).wait(1).to({x:300.7},0).wait(1).to({x:298.8},0).wait(1).to({x:296.9},0).wait(1).to({x:295},0).wait(1).to({x:297.1},0).wait(1).to({x:299.1},0).wait(1).to({x:301.2},0).wait(1).to({x:303.2},0).wait(1).to({x:305.2},0).wait(1).to({x:307.3},0).wait(1).to({x:309.3},0).wait(1).to({x:311.3},0).wait(1).to({x:313.4},0).wait(1).to({x:315.4},0).wait(1).to({x:317.4},0).wait(1).to({x:319.5},0).wait(1).to({x:321.5},0).wait(1).to({x:323.5},0).wait(1).to({x:325.6},0).wait(1).to({x:327.6},0).wait(1).to({x:329.6},0).wait(1).to({x:331.7},0).wait(1).to({x:333.7},0).wait(1).to({x:335.8},0).wait(1).to({x:337.8},0).wait(1).to({x:339.8},0).wait(1).to({x:341.8},0).wait(1).to({x:343.8},0).wait(1).to({x:345.9},0).wait(1).to({x:347.9},0).wait(1).to({x:349.9},0).wait(1).to({x:352},0).wait(1).to({x:354},0).wait(1).to({x:356.1},0).wait(1).to({x:358.1},0).wait(1).to({x:360.1},0).wait(1).to({x:362.2},0).wait(1).to({x:364.2},0).wait(1).to({x:366.2},0).wait(1).to({x:368.3},0).wait(1).to({x:370.3},0).wait(1).to({x:372.3},0).wait(1).to({x:374.4},0).wait(1).to({x:376.4},0).wait(1).to({x:378.4},0).wait(1).to({x:380.5},0).wait(1).to({x:382.5},0).wait(1).to({x:384.5},0).wait(1).to({x:386.6},0).wait(1).to({x:388.6},0).wait(1).to({x:390.6},0).wait(1).to({x:392.7},0).wait(1).to({x:394.7},0).wait(1).to({x:396.8},0).wait(1).to({x:398.8},0).wait(1).to({x:400.8},0).wait(1).to({x:402.9},0).wait(1).to({x:404.9},0).wait(1).to({x:406.9},0).wait(1).to({x:409},0).wait(1).to({x:411},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,25,1287,1494);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_10();
	this.instance.parent = this;
	this.instance.setTransform(431.1,377.3,1,1,0,0,0,16.4,17.4);
	this.instance.alpha = 0.539;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B7D9D").s().p("A1BO+QjegQhuiXQisjsgdlWQgJhsAGhoIAIhTQBCC6B9ClQD8FLErhtQCig7B/hyQBShKCFioQCbjDBbhfQCqiwDTiRQHOk5GMhSQFlhKD9B6QDGBgCBCiQBBBRAZA9QhdgxiBgsQkChXi3AbQjqAjkhDTQkvDblcGRQiwDMj5CtQj5Csj7BeQjnBVi4AAQgbAAgagBg");
	this.shape.setTransform(198.1,109.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#173347").s().p("ArFJsQB3hBChhtQE/jaDejsQDejuCTj6QBJh9AehQIB/AbQgjBkhNCKQiYESjpD4QjoD4lGDLQikBniIA/g");
	this.shape_1.setTransform(483.2,423.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#173347").s().p("AsKKbQCUhTC9iCQF4kADejtQDfjuCdkVQBPiKAjheICAApQgpBvhSCUQijEmjqD4QjpD5lxEEQi7CDidBbg");
	this.shape_2.setTransform(505.8,438.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#173347").s().p("AtFLiQCmhfDPiMQGdkXDejtQDfjuC6k5QBeidAxhxIBzBWQg0B1hdCcQi5E0jqD5QjqD5mQEOQjLCJitBhg");
	this.shape_3.setTransform(532.1,456.9);

	this.instance_1 = new lib.Path_5_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(265.8,212.8,1,1,0,0,0,137.3,130.3);
	this.instance_1.alpha = 0.59;

	this.instance_2 = new lib.Path_6_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(433.4,507.8,1,1,0,0,0,46.8,40.9);
	this.instance_2.alpha = 0.59;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B4C6A").s().p("AgRggQhGhUhag+IhNgtIAJhYIBwBoQB4B0AwA/QA0BCBZCPIBPCDQikjXhsiBg");
	this.shape_4.setTransform(653,424.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F4D66").s().p("A1qL2QiPhvhYjBQgyhugqioIAHgRIAVAkQAcAtAmAsQB5CQCmBaQCmBaCxgaQBZgNA3ggQAcg2A9hYQB5ixCliqQINoeLzkTQGyieHODJQiGgmjBgKQmEgVkuCNQpGEQmuIcQhmCAieDrQhyCpgpAdQiHBei0AVQgpAFgmAAQiaAAhohRg");
	this.shape_5.setTransform(181.7,83.9);

	this.instance_3 = new lib.Path_9_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(588.7,505.6,1,1,0,0,0,48.1,39.8);
	this.instance_3.alpha = 0.59;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3B4C6A").s().p("AFeCdQiNh5iBgzQiAg0j0hEIjZg5ICGhLIC6AlQDZA1CYBNQCYBNBoBeQA1AvAVAfIgtB3QgtgyhGg9g");
	this.shape_6.setTransform(579.2,379.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#173347").s().p("AqZMbQh/gNg0gUIASh2QBIAdCLAIQCdAJBYggQCPg0CuhtQDOiCCaiaQCninBniZQBfiNAahsQAZhqAGhhQAHhugPiDIB2AGQAKBZgHCHQgIClggByQgjCAhlCQQhkCOivCvQilCmjRCJQjZCOiaAlQhXAVhoAAQg5AAg/gGg");
	this.shape_7.setTransform(444.9,384.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#567296").s().p("AlDBjQgrjxC1hyQC7h3C4BwQBcA4A2BPIo/G+Qg6higWh5g");
	this.shape_8.setTransform(414.7,355);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#4F5E7F").ss(9,1).p("AgKm7Qh4APhvBJQjgCQArEfQAZCkBnBgQBbBVCHASQB8ARB4gtQB6guBAhaQBChcAChqQAChhgzhXQgyhUhUguQhYgwhiAMQiVAShKBgQhHBdASCKQAQCBBcArQBQAnB7ghQA2gOAqgsQAogoAPg1QAQg1gPgsQgRgwgxgXQhhgtg8A8QgZAZgDAgQgFAjASAd");
	this.shape_9.setTransform(257.4,306.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#4F5E7F").ss(9,1).p("AgKm7Qh4APhvBJQjgCQArEfQAZCkBnBgQBbBVCHASQB8ARB4gtQB6gtBAhaQBChdAChqQAChhgzhXQgyhUhUguQhYgwhiAMQiVAShKBgQhHBdASCLQAQCABcArQBQAnB7ghQA2gOAqgrQAogpAPg1QAQg1gPgsQgQgwgygXQhhgtg8A8QgZAZgDAgQgFAjASAd");
	this.shape_10.setTransform(375.6,182);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AmjLcIh0gOQgyhQgUiUQgnknCYlRQByj+EPjDQCGhhBxgvIBqBpQB8CDBWCGQETGsjLEiQjfE+m6A3QhUAKhWAAQg3AAg5gEg");
	this.shape_11.setTransform(252.9,304.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ak1H3QiMhIiMhsIhxheQAjhzBTiNQClkbDuiIQE7i1ElALQCTAFBTAqIAZBwQAYCMgECJQgMG1kiD4QiEBxiwAAQixAAjghzg");
	this.shape_12.setTransform(371.5,183.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4F5E7F").s().p("ArldLQmFkxkQlbQiDimg+jpQgThJgKhGIgHg5QhoAPiHg7QkOh4ihl1Qigl1A/m7QAUiKAoiBIAkhlIAVAkQAcAtAmAtQB5CPClBbQCnBaCxgbQBYgNA3gfQAdg2A8hZQB6iwCliqQIOogLxkSQGfiXG3CwQFfCNFeFXQD6D1DhFBQBwChA+BvIsio8QjQCBjDgJQipgIiKgMIhngJQgmBVhqCJQjWETldECQlcECmWBkQh+Agh1AMIhcAFIAiCIQAnC/AdEOQAWDEg8DhQgrCfhNCbIA2BxQBGCDBiB3QBlB5CqCeQBVBQBBA3QiLhUjDiZg");
	this.shape_13.setTransform(241.7,210.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7FA0B6").s().p("AomerQmEhhk9j2Qk9j1i/lgQi4lUgqmHQgqmHBrl+QBvmMEAlKQD/lJFkjOQFYjHGFg6QGFg5F3BeQGEBhE9D2QE9D1C+FgQC5FUAqGHQApGHhrF+QhvGMj/FKQkAFKlkDOQlXDHmGA5QiTAViRAAQjuAAjpg6g");
	this.shape_14.setTransform(313.2,252.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#455D79").s().p("AlaR+Qh8hihtiRQheh9hXhvIhEhWIoLiOQgChBAPhgQAJg7AXhNIAVhBINIw7IEHhqQEahqBogDQBpgDBRAGQApADAUADIAPHYIDQAvQDoA7B0A9QB0A9B3BlQA7AyAkAmQgRBVhbCXQi2EtlxFNQlwFNlCDJQigBkhXAiQgogUg+gxg");
	this.shape_15.setTransform(495,426.6);

	this.instance_4 = new lib.Path_19_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(501,563.9,1,1,0,0,0,29.8,22.2);
	this.instance_4.alpha = 0.59;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4F5E80").s().p("ApENUQjliChYhhQhWhihGhyIg1hfIbCz/IA5AwQBHA+BGBOQBHBNByC0QA5BZArBKQgeANgsAaQhZAzhLBAQhKA/g7BbIgsBOQhcgeh/g7QhQgmhOgfIg+gYQhVBmhoBrQg/BChYBJIhLA9ICiEdQgiAWgvAjQhfBFg/A/QhKBNgjBTQgQApgDAbQhhgth0hBg");
	this.shape_16.setTransform(567.8,490.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7FA0B6").s().p("ACZGOQing4ijicQikicg/ikQg/ikBKhOQBKhNCnA4QCnA3CjCcQCjCcBACkQA/ClhKBNQgrAthKAAQg2AAhGgXg");
	this.shape_17.setTransform(648.8,465.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7FA0B6").s().p("ADTFzQiugei4iCQi5iBhYiYQhXiaA9hYQA9hXCuAeQCuAdC5CBQC5CCBXCZQBYCZg9BXQguBChtAAQglAAgsgHg");
	this.shape_18.setTransform(537.9,557.3);

	this.instance_5 = new lib.Path_23();
	this.instance_5.parent = this;
	this.instance_5.setTransform(568.4,343.2,1,1,0,0,0,26.8,15.2);
	this.instance_5.alpha = 0.59;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7FA0B6").s().p("AlWD+QirgrgVhpQgVhpCOhoQCOhpDegsQDcgsCsArQCrArAVBpQAVBpiOBoQiOBpjeAsQhvAWhjAAQhhAAhVgVg");
	this.shape_19.setTransform(541.7,333.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7FA0B6").s().p("AiFIQQhngagjitQgiiuA4jZQA3jbBxiJQBviIBoAaQBnAbAiCtQAjCug4DZQg4DbhwCIQhdBzhYAAQgRAAgRgFg");
	this.shape_20.setTransform(389,472.3);

	this.instance_6 = new lib.Path_26();
	this.instance_6.parent = this;
	this.instance_6.setTransform(489.9,116.1,1,1,0,0,0,10.5,38.2);
	this.instance_6.alpha = 0.289;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7FA0B6").s().p("AkqGCQixiJgljSQgmjRB8igQB7ifDWgRQDTgQCxCJQCxCJAmDTQAlDQh8CgQh7CgjVAQQgWACgVAAQi7AAifh7g");
	this.shape_21.setTransform(447.6,114.2);

	this.instance_7 = new lib.Path_28_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(181,415.9,1,1,0,0,0,37.2,15.9);
	this.instance_7.alpha = 0.289;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7FA0B6").s().p("AkqGCQixiKgljRQgmjSB8ifQB8igDVgQQDTgQCxCJQCxCJAlDSQAmDRh8CgQh8CfjUARQgXABgVAAQi7AAieh6g");
	this.shape_22.setTransform(170.4,381);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.instance_7},{t:this.shape_21},{t:this.instance_6},{t:this.shape_20},{t:this.shape_19},{t:this.instance_5},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_4},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_3},{t:this.shape_5},{t:this.shape_4},{t:this.instance_2},{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,692.2,595.1), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#657073").s().p("AgaAqIhBAFIAkg2IgZg9IBAASIAxgqIADBBIA4AiIg+AXIgQA/g");
	this.shape.setTransform(20.9,338.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#657073").s().p("AgqBRIhwAUIA1hlIg1hkIBwATIBPhRIAQBwIBmAyIhmAyIgQBxg");
	this.shape_1.setTransform(458.8,85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#657073").s().p("AhCAwIhehAIBtgjIAghuIBCBdIBygEIhDBcIAmBsIhsgjIhaBEg");
	this.shape_2.setTransform(629.3,363.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#657073").s().p("AhJBNIikgfIB8htIgVilICPBTICWhGIgjCiIByB4IimARIhPCRg");
	this.shape_3.setTransform(605.8,125.8);

	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(340.7,268.5,1,1,0,0,0,340.7,268.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#395266").s().p("Eg1OAh6MAAAhDzMBqdANSMAAAA2hg");
	this.shape_4.setTransform(340.7,217);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,681.4,537), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(51.9,41.1,1,1,0,0,0,51.9,41.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.page4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{image10:0});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
		this.loginGuest.addEventListener("click", fl_ClickToGoToWebPage_2);
				
				function fl_ClickToGoToWebPage_2() {
					
					handleSignUp();
				}
				
		this.loginFacebook.addEventListener("click", loginwithFacebook);
		function loginwithFacebook() {
					toggleSignIn();
				}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(19));

	// Layer 3
	this.instance = new lib.Symbol32();
	this.instance.parent = this;
	this.instance.setTransform(402.1,388.1,1,1,0,0,0,300.4,160.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).wait(1).to({regX:300.8,regY:153.2,x:402.5,y:380.5,alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).wait(4).to({_off:true},1).wait(14));

	// Layer 11
	this.loginFacebook = new lib.Symbol35();
	this.loginFacebook.parent = this;
	this.loginFacebook.setTransform(399.1,1119.7,1,1,0,0,0,253,58.6);
	this.loginFacebook.alpha = 0;
	this.loginFacebook._off = true;

	this.timeline.addTween(cjs.Tween.get(this.loginFacebook).wait(100).to({_off:false},0).wait(1).to({regX:252.9,regY:58.5,x:399,y:1119.6,alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).wait(4).to({_off:true},1).wait(14));

	// Layer 10
	this.loginGuest = new lib.Symbol34();
	this.loginGuest.parent = this;
	this.loginGuest.setTransform(399.1,817.8,1,1,0,0,0,253,161.9);
	this.loginGuest.alpha = 0;
	this.loginGuest._off = true;

	this.timeline.addTween(cjs.Tween.get(this.loginGuest).wait(100).to({_off:false},0).wait(1).to({regX:252.9,regY:265.2,x:399,y:921.1,alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).wait(4).to({_off:true},1).wait(14));

	// Layer 2
	this.instance_1 = new lib.Symbol31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(398.1,722.2,1,1,0,0,0,406.1,726.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100).to({_off:false},0).wait(1).to({regX:401.3,regY:713.8,x:393.3,y:709.8,alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).wait(4).to({_off:true},1).wait(14));

	// Layer 4
	this.instance_2 = new lib.Symbol28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(377.6,623.7,1,1,0,0,0,263.9,421.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({_off:true},24).wait(14));

	// Layer 7
	this.instance_3 = new lib.Symbol21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(328,792.5,1,1,0,0,0,632,778.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:true},24).wait(14));

	// Layer 20
	this.instance_4 = new lib.Tween6("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(469.6,1060.1,2.915,2.915,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:0,scaleX:1.32,scaleY:1.32,x:545.1,y:1171.8},64).to({startPosition:0},20).to({startPosition:0},16).to({_off:true},24).wait(14));

	// Layer 20
	this.instance_5 = new lib.Group_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(479.5,-198.1,3.046,3.046,0,0,0,153.4,169.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:169.7,scaleX:1.14,scaleY:1.14,x:497.1,y:329.7},64).wait(36).to({_off:true},24).wait(14));

	// Layer 1
	this.instance_6 = new lib.Group_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-22.9,58.1,0.974,0.974,0,0,0,156.7,182.1);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,0.298)",2,2,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:156.8,scaleX:1,scaleY:1,x:55.5,y:510.1},64).wait(36).to({_off:true},24).wait(14));

	// Layer 20
	this.instance_7 = new lib.Group();
	this.instance_7.parent = this;
	this.instance_7.setTransform(344,271.6,1,1,0,0,0,161.7,232.6);
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,0.298)",2,2,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:232.7,scaleX:1.12,scaleY:1.12,x:317.9,y:732.3},64).wait(36).to({_off:true},24).wait(14));

	// Layer 21
	this.instance_8 = new lib.Tween8("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(399.1,710.1);

	this.instance_9 = new lib.Tween9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(399.1,710.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8}]},64).to({state:[{t:this.instance_8}]},20).to({state:[{t:this.instance_9}]},16).to({state:[]},24).to({state:[]},6).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},64).to({startPosition:0},20).to({_off:true},16).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-327,-756.3,1533.8,2661);


(lib.GAMEOVER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_1_1();
	this.instance.parent = this;
	this.instance.setTransform(97.6,15.5,1,1,0,0,0,97.6,15.5);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,0.749)",0,0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,267,103);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Egb7AvFMAAAheJMA33AAAMAAABeJg");
	mask_5.setTransform(303.4,374.3);

	// Layer 3
	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(347.4,572.8,1,1,0,0,0,65.2,41.1);
	this.instance_1.alpha = 0.289;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7EACF9").s().p("ABOCnQg/gOhogmQhSgcgogKQhBgPg5ADQg5AEhEARQgqALhOAZQiBAphEAJQhxARhgggIgqgQQgFABgahKQgNgogJgeIgGgZIAeAWQAtAVBFAIQBYAJBKgIQBFgIBagcQBagcArgKQBNgUBDgFQBNgEBRASQAwALBfAhQB0ApBGAOQB0AWCDgNQB5gMBpgmQA9gXBog3ICEhHQBLghBhgHIgaCNQgzAJgzAZQgfAPhQAsQhxA8hGAaQh4AsiLAOQg0AGg4AAQhvAAhsgag");
	this.shape_17.setTransform(305,544.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7EACF9").s().p("ABrDDQg/gPhoglQhSgdgngJQhCgQg5AEQg4ADhFASQgoAKhQAZQh1AlhPAKQhuAOhkgZQgzgNglgiQghgegMgjIAaiZIAjA1QAxA5BDAWQBEAWBWgOQA1gIBxgkQBXgbAugLQBNgTBDgFQBNgFBRATQAwALBfAgQB2AqBEANQB1AXCCgNQB+gNBGgWQAugQBZguQAegQAmgjIBDg/QBVhNBZgHIAdCKQhHAGhJBFIg6A5QgiAggdAPQhkA1g5ATQhbAfiOAOQg8AFgwAAQhvAAhsgZg");
	this.shape_18.setTransform(302.1,466.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7EACF9").s().p("ABHChQgygQhRglQg9gcgcgJQgtgOgoADQgoADgxARQgdAJg9AZQhnAqg3ALQhfAShQgkQhYglgZgvQgNgYAFgWIA1hxIAZArQAlAvA9AZQAsATA4gLQAogJBVgiQBCgbAlgMQA+gVA3gEQBAgGBDAUQApAMBIAiQBWAnAzANQBVAWBegNQBcgMA4gZQAlgPBHgxQAmgaA9g1QA6gqBMgHIBCB/Qg4AHg7AkIhmBHQhSA4gvAVQhOAjhxAPQgtAFgpABQhZAAhWgbg");
	this.shape_19.setTransform(301.6,394);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AsVTsQlHkdAApLQAAk3BYlPQBXlOCYkWQCgkkDDilQDVizDdAAQDeAADVCzQDDClCgEkQCYEWBXFOQBYFPAAE3QAAJLlHEdQkdD3n5AAQn4AAkdj3g");
	this.shape_20.setTransform(303.4,463.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(133,100,63,0)","rgba(129,98,63,0.067)","rgba(118,92,64,0.278)","rgba(101,82,65,0.627)","#524742"],[0.275,0.475,0.667,0.855,1],129.5,-19.9,-165.4,54.9).s().p("AvpDFQADgjgMhMQgIgwgQgWIgOgMIbckDIFVH+g");
	this.shape_21.setTransform(433.9,199.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(133,100,63,0)","rgba(129,98,63,0.067)","rgba(118,92,64,0.278)","rgba(101,82,65,0.627)","#524742"],[0.275,0.475,0.667,0.855,1],-119.9,20.1,156.2,-68).s().p("AwlnSMAgGAD+IgCAzQABA/ALAuQAKAvAZA6QANAdALAVI7JFsg");
	this.shape_22.setTransform(137.4,229.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(133,100,63,0)","rgba(129,98,63,0.067)","rgba(118,92,64,0.278)","rgba(101,82,65,0.627)","#524742"],[0.275,0.475,0.667,0.855,1],-112.3,-42.4,160.6,55.2).s().p("AtkBpIEEvPIXFWoQgOAQgTAYQgkAygVArQgUAsgPA+QgIAfgDAXg");
	this.shape_23.setTransform(182.6,117.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(133,100,63,0)","rgba(129,98,63,0.067)","rgba(118,92,64,0.278)","rgba(101,82,65,0.627)","#524742"],[0.275,0.475,0.667,0.855,1],51.4,-106.1,-66.9,158.5).s().p("AqjMtQgugpgqgXQgqgYg9gUIg1gPIN34CIO4FPI4VVSQgPgQgXgUg");
	this.shape_24.setTransform(413.3,84.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(133,100,63,0)","rgba(129,98,63,0.067)","rgba(118,92,64,0.278)","rgba(101,82,65,0.627)","#524742"],[0.275,0.475,0.667,0.855,1],-68.2,245.2,87.8,-322).s().p("A1dX0MAp7gxwIBABSMglIAyng");
	this.shape_25.setTransform(137.4,436);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(133,100,63,0)","rgba(129,98,63,0.067)","rgba(118,92,64,0.278)","rgba(101,82,65,0.627)","#524742"],[0.275,0.475,0.667,0.855,1],135.4,181.4,-271.6,-236.3).s().p("A1S7eIBfgsQBug5BMg8QBLg9BShkQAqgxAbglMAiqArvI03X+g");
	this.shape_26.setTransform(451.2,458.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5F4838").s().p("AAAiEIkUGUIl0ofIDOAAICmDzICmjzIDdAAICmDzICmjzIDOAAIl0Ifg");
	this.shape_27.setTransform(302.2,117.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5F4838").s().p("AkQAAIIhgsIAABZg");
	this.shape_28.setTransform(209.9,215.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5F4838").s().p("AkQgsIIhAsIohAtg");
	this.shape_29.setTransform(394.4,215.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5F4838").s().p("AgskQIBZAAIgtIhg");
	this.shape_30.setTransform(302.2,294.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5F4838").s().p("AkXJNQDNgsCFikQCIimAAjXQAAjWiIimQiFikjNgsIAAhYQDxAuCdC9QChDAAAD5QAAD6ihDAQidC9jxAug");
	this.shape_31.setTransform(343,215.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5F4838").s().p("Ah3G6QihjAAAj6QAAj5ChjAQCfi9DxguIAABYQjOAsiFCkQiICmAADWQAADXCICmQCFCkDOAsIAABYQjyguiei9g");
	this.shape_32.setTransform(261.4,215.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5F4838").s().p("AHSDeQgjiiiChqQiDhriqAAQipAAiEBrQiCBqgiCiIhGAAQAli/CWh8QCXiADFAAQDGAACYCAQCWB8AjC/g");
	this.shape_33.setTransform(302.2,183.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5F4838").s().p("AlcBfQiWh9gli/IBGAAQAiCjCCBpQCEBrCpAAQCqAACDhrQCChpAjijIBFAAQgjC/iWB9QiYB/jGAAQjFAAiXh/g");
	this.shape_34.setTransform(302.2,247.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5F4838").s().p("AjtDtQhihiAAiLQAAiKBihiQBjhjCKAAQCLAABiBjQBjBiAACKQAACLhjBiQhiBjiLAAQiKAAhjhjgAi8i9QhPBPAABuQAABvBPBPQBOBOBuAAQBvAABPhOQBOhPAAhvQAAhuhOhPQhPhOhvAAQhuAAhOBOg");
	this.shape_35.setTransform(302.2,215.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5F4838").s().p("AhGBHQgegdAAgqQAAgoAegfQAdgdApAAQApAAAfAdQAdAfAAAoQAAAqgdAdQgfAegpAAQgpAAgdgeg");
	this.shape_36.setTransform(302.2,215.4);

	this.instance_2 = new lib.Image_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(124.6,73,0.14,0.183);

	this.instance_3 = new lib.ClipGroup_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(346.3,374.3,1,1,0,0,0,280.9,301.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Egb7AvFMAAAheJMA33AAAMAAABeJg");
	this.shape_37.setTransform(303.4,374.3);

	var maskedShapeInstanceList = [this.instance_1,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.instance_2,this.instance_3,this.shape_37];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.instance_3},{t:this.instance_2},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(124.6,73,357.7,602.6), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("Eg2RglZMBsjAAAMAAABApMhsjAKKg");
	mask_6.setTransform(419.1,293.9);

	// Layer 3
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#563A2A").s().p("AgUCMQhRgvghiCQgKgqgFgsIgCgkIAJAdQALAlAPAhQAyBrBHAmQBXAtAsgjQAJgIAHgJQgNAZgTAVQgiAkgpAAQgfAAgigUg");
	this.shape_38.setTransform(536.5,206.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#563A2A").s().p("AAkC/QiIgRgthSQgthTBHhtQAkg4AsgmIghA4QgfBJANBQQAMBQB6A5QA9AcA7AMQgdADgfAAQghAAgjgEg");
	this.shape_39.setTransform(445.6,177.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNAUQgQgTgUAAQAUgBAPgTQAOgTAAgbQAAAbAPATQAPATAVAAQgVAAgOAUQgPATAAAbQgBgbgNgTg");
	this.shape_40.setTransform(186.9,196.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgOAUQgPgTgVgBQAVAAAOgTQAPgTAAgbQAAAbAPATQAPATAUAAQgUAAgPATQgOAUAAAbQgBgagOgUg");
	this.shape_41.setTransform(321.2,296.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgcAoQgfgngpAAQApgBAegmQAcgnAAg2QABA2AdAmQAfAnApgBQgpABgdAnQgdAnAAA2QgBg2gdgmg");
	this.shape_42.setTransform(370.5,264.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F9D98E").s().p("AizgEIAPgsIBWDnIhMkhIAahFIBCFnIgqmUIA3gXIAGGkIARmYIA/ANIg7GVIBOlpIAlAcIhGEZIBPjvIAiAhIhXDcIBfi6IAkAbIiKD2IhzAIg");
	this.shape_43.setTransform(163.8,448.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F9D98E").s().p("AibCzIh6jSIAfgfIBeDBIhGjsIA0gxIArEgIACk/IBZgIIg+FGIBfk5IBfAWIifEvIC2kJIAzAcIibDMICiiqIAuAgIipCaICwiAIA0AcIj/Cmg");
	this.shape_44.setTransform(267.4,451.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#67A6A7").s().p("AhEAkQgfgLgBgSQgBgRAcgPQAdgPAqgDQApgDAeALQAfALABASQABARgcAPQgdAOgqADIgRABQgfAAgXgIg");
	this.shape_45.setTransform(108.6,380.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CCCCCC").s().p("AjggEQAOg0A9hKIA5g/ICkgLIAzAlQA3AtAUAhQATAhAaByQANA6AJAzIoRAmQATh9AVhUg");
	this.shape_46.setTransform(239.3,453.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E6E6E6").s().p("AkvCWQAah+APgaQAQgbA1h5IAzh0IAvgDQA5gCAxACQChAHAiA2QAiA2AuDCQAYBiARBXIqNAuIAXh5g");
	this.shape_47.setTransform(238.6,447.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CCCCCC").s().p("AjjEnQAMjCAOg/QAOg+A/i1IA9inQgBgUAHgXQANgtAkgNQAjgNAaAzQANAZAGAcIgNBlQgLBtAMAlQAMAmAsBDQAaAmA8BUQAkA1gCCbQgBBNgIBDInPAhQADhUAGhig");
	this.shape_48.setTransform(200.6,421);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E6E6E6").s().p("Ak8FQQAQi9AehjQANgrAShlQAWh4AMgxQAwjJBUgeQBVgfBdBNQAuAmAdAsIgPCPQgGCVAsAfQAsAfAgBCQAQAhAIAbIAZFbIqPAvQAChLAJhfg");
	this.shape_49.setTransform(200.1,418.9);

	this.instance_4 = new lib.Path_5_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(235.2,472.7,1,1,0,0,0,46.1,9);
	this.instance_4.alpha = 0.41;

	this.instance_5 = new lib.Path_6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(183.4,468.3,1,1,0,0,0,46.1,9);
	this.instance_5.alpha = 0.41;

	this.instance_6 = new lib.Path_7_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(626.3,348.7,1,1,0,0,0,26.4,79.6);
	this.instance_6.alpha = 0.461;

	this.instance_7 = new lib.Path_2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(274.1,392.1,1,1,0,0,0,42,26.4);
	this.instance_7.alpha = 0.289;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7EACF9").s().p("AAyBrQgogJhDgYQg1gSgZgGQgqgLglADQgkADgsAKQgaAHg0AQQhTAbgsAGQhIAKg+gUIgbgKQgDABgRgxQgJgZgFgTIgEgQIATAOQAdAOAtAFQA5AFAvgFQAtgFA5gSQA2gRAggIQAxgMAsgDQAxgDA0AMQAgAHA8AVQBMAbAsAIQBLAPBUgJQBOgIBDgYQApgPBCgjIBVguQAwgVA+gFIgQBaQghAHghAQQgUAKgzAbQhJAngtARQhOAchZAKQgjADgiAAQhIAAhGgRg");
	this.shape_50.setTransform(246.7,374.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7EACF9").s().p("ABFB9QgpgJhCgYQg0gSgbgHQgpgKgmADQgkACgsALQgbAHgyAQQhMAYgyAGQhHAJhAgQQghgJgYgVQgVgTgJgXIARhiIAXAiQAfAkAsAOQArAPA4gJQAjgGBIgXQA5gRAcgHQAygMAsgDQAxgDA0AMQAfAHA9AUQBLAbAsAJQBMAOBTgIQBSgIAsgPQAegJA6geQATgKAZgXQAbgbAPgNQA3gyA6gFIATBZQguAEgvAtQg9A5gRAJQhBAigkANQg7AThcAJQgiAEgjAAQhIAAhFgRg");
	this.shape_51.setTransform(244.9,323.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7EACF9").s().p("AAuBoQghgKg0gZQgmgSgTgFQgdgKgZADQgaACggAKQgTAGgnARQhDAbgjAHQg9ALgzgXQg5gYgQgeQgIgPADgPIAihIIAQAbQAYAfAnAQQAdAMAkgIQAZgFA3gWQAugSAVgHQAogNAjgDQApgEArANQAbAIAuAWQA4AZAgAIQA2AOA9gIQA7gIAkgQQAYgJAuggQAZgRAngiQAlgaAxgGIArBTQgkAEgmAXIhCAtQg1AkgfAOQgyAWhIAKQgfAEgZAAQg5AAg3gRg");
	this.shape_52.setTransform(244.5,277);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("An8MrQjSi3AAl6QAAjIA4jYQA4jXBiizQBni8B+hqQCJhzCOAAQCPAACJBzQB+BqBnC8QBiCzA4DXQA4DYAADIQAAF6jSC3Qi4CflFAAQlEAAi4ifg");
	this.shape_53.setTransform(245.7,321.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#173347").s().p("Ag6DYQgbgtgmg3QhNhsg8gwQg9gxiDguIh5gkIBFhJIBvAiQB3ArBGA4QBeBMBvCxQCagjBxgLQBSgIBjAEQA/ADAYADIAmBgQgtgFg7gEQh2gHhLAIQhOAHhvAXIhgAVIgiAIg");
	this.shape_54.setTransform(587.7,301);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#173347").s().p("AEcBEQilg0ixgTQjQgZgtgDQgsgDg8AGIBFhSIAvgEQBHAAC0AVQC6AWCXAyQBNAYAsAYIAGBYQgxgVhTgag");
	this.shape_55.setTransform(611.1,350.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#173347").s().p("AGZCNQiahWirg3Qitg6kBg3QilgkgkgDIgFADQgMgFARACIBQg/QBAAGCBAZQDYAqCrA4QCzA7CUBRQBKApAsAgIgbBZQgsgghOgrg");
	this.shape_56.setTransform(593.8,382);

	this.instance_8 = new lib.Path_11_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(564.6,345.5,1,1,0,0,0,17.6,14.3);
	this.instance_8.alpha = 0.461;

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AggAJQgOgDAAgGQAAgFAOgDQAOgEASgBQATABAOAEQAOADAAAFQAAAGgOADQgOAEgTAAQgSAAgOgEg");
	this.shape_57.setTransform(466.6,247);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#503A28").s().p("AgdAgQgKAAgEgFQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIAAgCIACAAIACABIADABQACAAAIgEIAXgKIAAAAIADgCIACgBIABgBIAEgCIANgJIAOgLIAOgQIACABIgBAFQgBAHgDAHQgEAKgGAHIgIAJIgKAHIgMAFIgKAEQgKADgIAAIgDgBg");
	this.shape_58.setTransform(479.2,279.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#503A28").s().p("Ai9ApQAFgKAKgNQAPgSAZgRIAMgIIAGgCIABgBIACgBIAAgBIADgBIAagKQAVgHAfgGQArgJA/gDIA1gBIA1ABIAQABIgCAQIgEAWIgKAdIgKAUIgGAJIgDgLIgCggIADgZIgjgBIg0AAQg5ACgtAGQgbAFgXAGIgvATQgIACgOAJIgUAPQgKAIgHALQgJANgDAKQAAgNAGgOg");
	this.shape_59.setTransform(475.4,243.3);

	this.instance_9 = new lib.ClipGroup_0_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(474.7,260.4,1,1,0,0,0,18.8,22.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#173347").s().p("ACWC3QguhjhEhTQhAhQh8g6QgngSgogOIgggKIArhXQALADAbAKQAqAPApAWQCBBCBNBfQBLBcAvBhQAZAxAKAiIhRAyQgJgigYgyg");
	this.shape_60.setTransform(542.2,328.1);

	this.instance_10 = new lib.Path_16();
	this.instance_10.parent = this;
	this.instance_10.setTransform(474.6,313.6,1,1,0,0,0,11.4,8.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#455D79").s().p("AG1MDQh1hciihXQiihYkuhmIkOhUIAsgZIBTgsQAigRArgjQAWgRAPgPQgIgUgYgiQgvhEhOhGQhOhHhTgnIhEgYQASgyAihLQBCiWBLh9QBdiaDNhSQDVhVCbBEQDIBYCNC1QC7DwAtFsQAqFThwEBQg3CBhAA9Qgagcg7gug");
	this.shape_61.setTransform(580.5,343.8);

	this.instance_11 = new lib.Path_18_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(521.3,366.6,1,1,0,0,0,31.4,13.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F9DBBF").s().p("AjoEvQifgDgshaQgrhbBhh8QBgh9C1hXQCzhXCeACQCeACAsBbQAsBahhB9QhhB9i0BXQiuBViaAAIgJAAg");
	this.shape_62.setTransform(519.7,349.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhqBLQgdg2gdhCIgWg5IATgjQAbgnAmgOQAmgPCBgKQBBgFA5gCIgJA+QgNBMgPBBQgxDRg6AdQgIAEgJAAQg1AAhPiUg");
	this.shape_63.setTransform(474.7,260.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3D2210").s().p("AMVLJQhdg4hTg2QilhtA4AJQAiAGAjgTQAkgSAVgkQAzhYhIhuQhGhshzAAQhZABhWA6QhaA9gnAGQhHAMhFhPQhBhKgbhqQgIgggDggIgCgaQjHBbjTA3QmnBug+i7QhXkNC4jyQBbh6BuhDIgGAZQgGAgABAhQADBoBBBMQBIBRBpgXQA9gNDlhuQBegtCPgSQCNgRCYANQCcAOB/ApQCKAuBLBHQCoCdAqFgQAQCIgICFQgIB5gYBCQglBnhiAiQgeAKghADg");
	this.shape_64.setTransform(528.2,205.2);

	this.instance_12 = new lib.Path_22();
	this.instance_12.parent = this;
	this.instance_12.setTransform(556,430.8,1,1,0,0,0,76.8,22.4);
	this.instance_12.alpha = 0.211;

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgUAmIg1AIIAagvIgYgwIA1AKIAmgmIAGA2IAwAYIgxAXIgJA2g");
	this.shape_65.setTransform(523.5,441.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgUAmIg2AIIAbguIgYgxIA1AKIAmgmIAHA2IAwAYIgyAXIgJA2g");
	this.shape_66.setTransform(597.7,416);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgUAmIg1AIIAaguIgYgxIA1AKIAlgmIAHA2IAwAYIgxAXIgJA2g");
	this.shape_67.setTransform(550.8,416);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgUAmIg2AIIAbguIgZgxIA2AKIAmgmIAGA2IAxAYIgyAXIgJA2g");
	this.shape_68.setTransform(500.8,395.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B3DFE7").s().p("AoPH+QhUgSg+gZIgugVQgUgagSg0QgjhnANh9QAMh9A/hyQAgg5AdggIImlkINtMJQgSA+hcBEQi6CJl3AhQiKAMh9AAQjSAAingjg");
	this.shape_69.setTransform(554.3,398.4);

	this.instance_13 = new lib.Path_0();
	this.instance_13.parent = this;
	this.instance_13.setTransform(488.7,433.1,1,1,0,0,0,29.6,10.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F9DBBF").s().p("AgYFWQi0gZh4h1Qh4h1AKiNQAKiOCHhTQCHhTCzAZQC0AZB4B1QB4B1gKCNQgKCOiHBTQhnBAiDAAQgnAAgpgGg");
	this.shape_70.setTransform(496.3,408.4);

	this.instance_14 = new lib.Path_28();
	this.instance_14.parent = this;
	this.instance_14.setTransform(491.6,204.5,1,1,0,0,0,55.2,29.1);

	this.instance_15 = new lib.Path_29();
	this.instance_15.parent = this;
	this.instance_15.setTransform(441.6,279.5,1,1,0,0,0,5.1,4.3);

	this.instance_16 = new lib.Path_30();
	this.instance_16.parent = this;
	this.instance_16.setTransform(520.3,311,1,1,0,0,0,46.4,25.6);

	this.instance_17 = new lib.Path_31();
	this.instance_17.parent = this;
	this.instance_17.setTransform(573.5,237.8,1,1,0,0,0,10.5,15.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F9DBBF").s().p("AnkL+QiKgxhVhUQhPhRgIhWQgIhRAJhGIAJg1QgagCgVgRQgsgiAVhMQAVhKA6ANQAdAGAZAWQgaglgdg3Qg6hsgKheQgLheAQibIARiJINCjRIIsCxIEmGCIAAENIt5JPQguA4hQAuQhgA2hkAAQhDAAhEgYg");
	this.shape_71.setTransform(520.5,257.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgcAnQgegngpAAQApAAAegmQAcgmAAg1QABA1AdAmQAdAmApAAQgpAAgdAnQgdAmgBA1QAAg1gcgmg");
	this.shape_72.setTransform(135.6,264.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgdAnQgdgmgpgBQApAAAdgmQAdgnAAg1QABA1AdAnQAdAmApAAQgpABgdAmQgdAngBA1QAAg1gdgng");
	this.shape_73.setTransform(274.1,147.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F9D98E").s().p("AjMCqIjIixIApgfICfClIiBjNIBFgvIBgD9IgikcIB/gNIg0EmIBkkdICNANIjCEYIDoj5IBOAWIjIDAIDViiIBGAYIjiCWIDwh+IBNAUIlbCmg");
	this.shape_74.setTransform(334.3,336.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F9D98E").s().p("AjMCqIjHixIAngfICgClIiBjNIBFgvIBgD9IgikcIB+gNIgyEmIBjkdICNANIjCEYIDoj5IBNAWIjHDAIDVijIBHAZIjjCWIDwh+IBOAUIlcCmg");
	this.shape_75.setTransform(726.1,365.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CCCCCC").s().p("AkICkQAmh6AihQQAWgxBGhAQAjggAggVICkAMIAsAtQAwA1APAjQAOAkAHB1QAFA8ABAzg");
	this.shape_76.setTransform(612.9,361.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E6E6E6").s().p("AlFDjQASg4AWg8QAsh4ATgZQAfgnB/jMICYAUQCfAgAZA6QAaA6AQDHQAJBkADBYg");
	this.shape_77.setTransform(612.2,355);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CCCCCC").s().p("AmyGHQAXhhAfhqQA9jRAignQAkgoBDgZQAigMAbgFIBRiXQBaibAugOQAzgPBWAnQBPAkASAgQANAWAwGZQAXDNAVDJg");
	this.shape_78.setTransform(673.2,333);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E6E6E6").s().p("AoQHbQAch2AliAQBKj+AqgwQAsgxBSgeQApgPAggFIBji5QBui8A4gRQA+gSBpAwQBgAsAWAmQAQAbA5HyQAdD5AZD0g");
	this.shape_79.setTransform(670.2,323.4);

	this.instance_18 = new lib.Path_9();
	this.instance_18.parent = this;
	this.instance_18.setTransform(677.4,375.3,1,1,0,0,0,61.9,11.8);
	this.instance_18.alpha = 0.41;

	this.instance_19 = new lib.Path_1_2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(612.3,380.2,1,1,0,0,0,46.1,9.3);
	this.instance_19.alpha = 0.41;

	this.instance_20 = new lib.Path_35();
	this.instance_20.parent = this;
	this.instance_20.setTransform(263,407.8,1,1,0,0,0,60.4,16);
	this.instance_20.alpha = 0.23;

	this.instance_21 = new lib.Path_36();
	this.instance_21.parent = this;
	this.instance_21.setTransform(587.7,436.9,1,1,0,0,0,98,16);
	this.instance_21.alpha = 0.23;

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6BBCAD").s().p("EhBOAHHIAAuNIAHAVQAKAbARAeQA2BdBkBQQFBD+KTAXQFkAMFehQQDtg0FeiCQGViWCNgoQEzhYETAAQEVAAIjBtQEaA5MbC5QLaCoGDBIQJQBtFeAAIMgAAIAADRg");
	this.shape_80.setTransform(417.5,487.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#78D0C3").s().p("EhBOAPrIAA4pQIGhrMNhqQYajWUhAAQUjAAYZDWQMNBqIGBrIAAYpg");
	this.shape_81.setTransform(417.5,433.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AujBwIAegjQApgqA+gjQDFhvFBAAQDKAACjAzQB5AlBzBHQBMgyA0gUQBagkB3AAQCMAABRBVQAoArANAqg");
	this.shape_82.setTransform(652.7,112.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AujBwIAdgjQAqgqA+gjQDFhvFBAAQDKAACjAzQB5AlBzBHQBLgyA1gUQBbgkB3AAQCLAABRBVQAoArANAqg");
	this.shape_83.setTransform(212.4,90.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#FFFD91","#75E1FB"],[0,1],0,330,0,-349.5).s().p("EhBOApnMAAAhTNMCCdAAAMAAABTNg");
	this.shape_84.setTransform(417.5,266.3);

	var maskedShapeInstanceList = [this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.instance_8,this.shape_57,this.shape_58,this.shape_59,this.instance_9,this.shape_60,this.instance_10,this.shape_61,this.instance_11,this.shape_62,this.shape_63,this.shape_64,this.instance_12,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.instance_13,this.shape_70,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_70},{t:this.instance_13},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.instance_12},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_11},{t:this.shape_61},{t:this.instance_10},{t:this.shape_60},{t:this.instance_9},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.instance_8},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(71.7,54.5,694.9,478.9), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("EgjyA8UMAAAh4oMBHlAAAMAAAB4og");
	mask_7.setTransform(388.8,421.4);

	// Layer 3
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("Ag6BEQgWgZAAgrQAAgvAbgYQAXgSAegBQAkAAAXAYQAWAYAAApQAAAggKATQgJATgUALQgTAKgXAAQgjAAgXgWgAgjgxQgPAQAAAhQAAAiAPAQQAOAQAVABQAWgBAPgQQAOgSAAggQAAgggOgQQgPgRgWAAQgVAAgOAQg");
	this.shape_85.setTransform(494.4,747.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AA+B4Ih9i7IAAC7IgeAAIAAjvIAgAAIB9C7IAAi7IAeAAIAADvg");
	this.shape_86.setTransform(473,744.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgxBNQgRgPgFgbIAdgEQADARALAJQALAKATAAQAUAAAKgJQAKgJAAgKQAAgKgJgGQgGgEgYgFQgfgJgNgFQgLgGgIgLQgGgKAAgMQAAgMAGgKQAFgKAJgHQAGgEANgEQAKgDAPgBQATAAAPAHQAPAEAJALQAHALACAQIgcAEQgDgOgIgHQgKgHgQAAQgTgBgKAIQgJAFAAAKQAAAGAEAEQAEAFAHADIAaAHQAeAJANAFQANAGAGAIQAHALAAAPQAAAPgIAMQgJAOgQAGQgQAIgUgBQgiABgSgOg");
	this.shape_87.setTransform(304.9,747.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("Ag4BDQgXgXAAgrQAAgqAXgYQAWgZAjAAQAjAAAWAYQAWAZAAApIAAAHIiAAAQABAdAOAQQAQAPAUAAQAQAAAMgJQALgIAHgTIAeADQgIAbgSAPQgVAOgdAAQgmAAgVgXgAgfg0QgPAOgBAWIBgAAQgCgWgJgKQgOgSgXABQgTAAgNANg");
	this.shape_88.setTransform(287.3,747.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgQB4IAAhlIhdiKIAnAAIBGBxIBJhxIAlAAIhgCKIAABlg");
	this.shape_89.setTransform(269.9,744.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#DC7060").s().p("AtHFGQgPAAgKgKQgLgLAAgPIAApDQAAgPALgLQAKgKAPAAIaPAAQAPAAAKAKQALALAAAPIAAJDQAAAPgLALQgKAKgPAAg");
	this.shape_90.setTransform(482.4,743.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#DC7060").s().p("AtHFGQgPAAgLgKQgKgLAAgPIAApDQAAgPAKgLQALgKAPAAIaPAAQAPAAALAKQAKALAAAPIAAJDQAAAPgKALQgLAKgPAAg");
	this.shape_91.setTransform(286.1,743.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["rgba(133,99,63,0)","rgba(130,97,63,0.067)","rgba(119,92,64,0.267)","rgba(101,82,64,0.604)","#514742"],[0.275,0.471,0.659,0.843,1],166,-25.5,-211.9,70.4).s().p("A0DD9QADgtgPhiQgJg9gVgcIgSgRMAjJgFLIG2KOg");
	this.shape_92.setTransform(556,256.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["rgba(133,99,63,0)","rgba(130,97,63,0.067)","rgba(119,92,64,0.267)","rgba(101,82,64,0.604)","#514742"],[0.275,0.471,0.659,0.843,1],-153.6,25.8,200.2,-87.2).s().p("A1PpVMApHAFEIgCBDQABBPANA8QAOA9AgBKQARAmANAZMgixAHTg");
	this.shape_93.setTransform(176.1,294.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["rgba(133,99,63,0)","rgba(130,97,63,0.067)","rgba(119,92,64,0.267)","rgba(101,82,64,0.604)","#514742"],[0.275,0.471,0.659,0.843,1],-143.9,-54.2,205.8,70.8).s().p("AxZCHIFOziIdldAQgSAUgYAfQgvBAgaA4QgaA4gUBQQgJAogFAcg");
	this.shape_94.setTransform(234,150.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(133,99,63,0)","rgba(130,97,63,0.067)","rgba(119,92,64,0.267)","rgba(101,82,64,0.604)","#514742"],[0.275,0.471,0.659,0.843,1],65.9,-135.9,-85.7,203.1).s().p("AthQSQg8g0g2gfQg1gdhOgaIhEgUIRw+zITFGuI/MbRQgTgVgdgZg");
	this.shape_95.setTransform(529.6,108.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["rgba(133,99,63,0)","rgba(130,97,63,0.067)","rgba(119,92,64,0.267)","rgba(101,82,64,0.604)","#514742"],[0.275,0.471,0.659,0.843,1],-87.4,314.2,112.6,-412.7).s().p("A7gegMA1ug/vIBTBpMgvlBA2g");
	this.shape_96.setTransform(176.1,558.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["rgba(133,99,63,0)","rgba(130,97,63,0.067)","rgba(119,92,64,0.267)","rgba(101,82,64,0.604)","#514742"],[0.275,0.471,0.659,0.843,1],173.5,232.4,-348,-302.8).s().p("EgbSgjNIB7g4QCNhJBghOQBghOBrh+QA1hAAigwMAsaA4CI6teug");
	this.shape_97.setTransform(578.2,588);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#5A391A").s().p("AgUCcIAAgrIAqAAIAAArgAgSBRIAAgLQAAgXAGgQQAFgNAJgLQAHgIAUgSQAUgSAGgJQAGgLAAgMQAAgWgSgQQgRgSgZABQgXgBgQAQQgRAQgEAfIgngFQAFgqAagXQAagYApAAQAuAAAaAZQAbAZAAAjQAAAUgJARQgJARgcAXQgSAQgGAIQgGAJgDAJQgCAJgBAYg");
	this.shape_98.setTransform(392.9,544.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#5A391A").s().p("AhJBWQgdgdAAg3QAAg4AdgfQAdgeAtAAQAtAAAcAeQAdAfAAA2IgBAKIilAAQADAlASATQATATAaAAQAWAAAOgLQAPgKAIgZIAnAGQgJAhgZAUQgaASgmABQgwAAgcgfgAgphDQgSASgCAcIB8AAQgCgbgNgOQgSgXgcAAQgZAAgSASg");
	this.shape_99.setTransform(369.1,549.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#5A391A").s().p("AByByIAAiMQAAgWgFgKQgEgKgIgGQgKgGgOAAQgXAAgPAQQgQAPAAAiIAACBIglAAIAAiQQAAgYgJgOQgJgMgVAAQgRAAgNAIQgNAJgHAQQgFAQgBAfIAAByIglAAIAAjeIAiAAIAAAfQAKgQARgKQASgKAWAAQAZAAAQALQAPAJAGATQAbgnAqAAQAhAAASASQASATAAAmIAACYg");
	this.shape_100.setTransform(339.4,549.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#5A391A").s().p("AhSBjQgTgTAAgbQAAgRAHgNQAIgOAMgIQALgHAQgEIAhgGQArgFAXgIIABgKQAAgWgLgKQgOgNgcAAQgaAAgNAJQgNAKgGAXIglgFQAGgYAKgOQAMgPAWgHQAVgJAdABQAcgBASAIQASAGAIAKQAIALAEAPQACANAAAVIAAAyQAAA2ACAMQADAPAHAMIgoAAQgFgLgDgQQgVATgSAGQgTAIgXAAQgjgBgVgRgAgIAOQgXADgKAEQgJAFgGAIQgFAHAAALQAAAOALALQANAKAUAAQAVAAASgKQAQgJAIgQQAHgOgBgZIAAgNQgVAIgnAGg");
	this.shape_101.setTransform(309.3,549.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#5A391A").s().p("AhCCNQgZgSACgkIAkAGQACARALAHQAOALAYAAQAaAAAOgLQAOgKAFgTQADgMAAgkQgYAdglAAQguAAgZghQgZgiAAgtQAAggAMgbQALgbAWgOQAWgPAeAAQAmAAAaAgIAAgbIAiAAIAADAQAAA0gKAVQgLAWgXANQgXAMggAAQgoAAgZgSgAgphqQgRAUAAAoQAAAsARATQARAUAaAAQAaAAASgUQARgTAAgqQAAgpgSgVQgTgVgZAAQgYAAgSAVg");
	this.shape_102.setTransform(284.8,553.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#5A391A").s().p("AhJBWQgdgdAAg3QAAg3AdggQAegeAsAAQAtAAAdAeQAcAfAAA2IAAAKIimAAQADAkASAUQATATAbAAQAVAAAOgLQAOgKAKgZIAnAGQgKAigZATQgZASgmABQgwAAgdgfgAgphDQgSARgBAdIB7AAQgDgcgLgNQgSgXgdAAQgZAAgSASg");
	this.shape_103.setTransform(249.6,549.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#5A391A").s().p("AA1CaIAAiOQAAgbgMgNQgMgNgXAAQgQAAgOAJQgPAIgHAQQgGAOAAAaIAAB6IgmAAIAAkzIAmAAIAABuQAbgeAnAAQAYAAATAKQASAJAIASQAIARAAAfIAACOg");
	this.shape_104.setTransform(225.7,545.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#5A391A").s().p("AgFCRQgLgGgFgLQgFgJAAgkIAAh/IgbAAIAAgdIAbAAIAAg3IAlgXIAABOIAmAAIAAAdIgmAAIAACCQAAAPACAGQACAEAEADQAEADAJgBIARgBIAFAiQgOADgOAAQgVAAgKgHg");
	this.shape_105.setTransform(208.1,545.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#5A391A").s().p("AgFCRQgMgGgEgLQgFgKAAgiIAAiAIgbAAIAAgdIAbAAIAAg3IAlgXIAABOIAmAAIAAAdIgmAAIAACCQAAAQACAFQACAFAEACQAFADAIAAIARgCIAFAhQgOAEgOAAQgVAAgKgHg");
	this.shape_106.setTransform(578.4,494);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#5A391A").s().p("Ag7ByIAAjdIAiAAIAAAhQAMgXALgIQALgIANAAQASAAAUAMIgMAjQgNgHgPgBQgMABgKAGQgJAIgEAOQgHAUAAAXIAAB0g");
	this.shape_107.setTransform(566.8,497.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#5A391A").s().p("AhSBjQgUgSAAgcQAAgQAIgOQAIgPALgGQANgJAOgDQALgDAXgDQArgFAXgIIABgKQAAgXgLgJQgPgNgbAAQgcAAgLAJQgNAKgGAYIglgGQAFgXALgPQAMgPAWgIQAXgHAaAAQAcAAATAGQASAHAIAKQAIAJAEARQACANAAAWIAAAyQAAA2ACAMQADAQAHALIgoAAQgGgLgBgRQgVASgUAIQgRAGgYAAQgkAAgUgRgAgIAOQgXAEgKAEQgKAEgFAIQgFAIAAAKQAAAPALAKQAMAKAVAAQAVAAARgKQARgJAIgRQAGgMAAgaIAAgNQgTAIgpAGg");
	this.shape_108.setTransform(545.8,497.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#5A391A").s().p("AgFCRQgMgGgEgLQgEgKgBgiIAAiAIgbAAIAAgdIAbAAIAAg3IAlgXIAABOIAmAAIAAAdIgmAAIAACCQAAAQACAFQACAEAEADQAFADAJAAIAQgCIAGAhQgQAEgNAAQgVAAgKgHg");
	this.shape_109.setTransform(528.3,494);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#5A391A").s().p("Ag+BiQgYgRgFgkIAlgGQADAXAOAMQAPAMAYgBQAaAAANgKQANgKAAgPQgBgMgKgIQgHgEgggJQgpgLgQgGQgQgIgIgNQgJgOAAgQQABgOAGgNQAIgNALgJQAIgFAQgGQAPgFARABQAbAAATAHQAVAIAIANQAJAMAEAXIglAEQgCgQgMgLQgMgJgVAAQgcAAgJAIQgMAJAAALQAAAJAFAFQAEAGALAEIAfAKQAnAKARAHQARAGAIANQAKANgBATQABATgMARQgLARgVAIQgUAJgbAAQgqABgWgTg");
	this.shape_110.setTransform(511.2,497.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#5A391A").s().p("AhKBWQgdgdgBg5QAAg8AjgfQAdgZAoABQAuAAAdAeQAeAfAAA0QAAAqgOAZQgOAYgXAOQgYANgeAAQguAAgcgegAgug/QgTAWAAApQAAAqATAXQATAUAbAAQAcABATgWQASgWAAgqQABgpgUgWQgSgVgcAAQgbAAgTAVg");
	this.shape_111.setTransform(476.6,497.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#5A391A").s().p("AgFCRQgMgGgEgLQgFgKAAgiIAAiAIgbAAIAAgdIAbAAIAAg3IAlgXIAABOIAmAAIAAAdIgmAAIAACCQAAAQACAFQACAFAEACQAFADAIAAIARgCIAFAhQgOAEgOAAQgVAAgKgHg");
	this.shape_112.setTransform(459,494);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#5A391A").s().p("AgFCRQgKgFgGgMQgFgKAAgiIAAiAIgbAAIAAgdIAbAAIAAg3IAlgXIAABOIAmAAIAAAdIgmAAIAACCQAAAOACAHQACAFAEACQAFADAIAAIARgCIAFAhQgOAEgOAAQgVAAgKgHg");
	this.shape_113.setTransform(435.1,494);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#5A391A").s().p("AA1ByIAAiHQAAgWgFgMQgEgMgLgGQgLgHgQAAQgXAAgRAPQgSAPAAAsIAAB4IgmAAIAAjdIAiAAIAAAfQAZglAtAAQAVAAAQAIQASAHAIALQAIANADAPQADAMAAAZIAACIg");
	this.shape_114.setTransform(416.9,497.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#5A391A").s().p("AhSBjQgTgSAAgcQAAgSAGgMQAIgPAMgGQAOgJAOgDQALgDAWgDQArgFAYgIIAAgKQAAgXgLgJQgQgNgaAAQgbAAgMAJQgMAJgIAZIgkgGQAEgXAMgPQAMgOAWgJQAYgHAaAAQAbAAATAGQASAHAIAKQAJAKADAQQABAIAAAbIAAAyQABAyACAQQACAMAHAPIgnAAQgGgLgCgRQgUASgUAIQgRAGgYAAQgkAAgUgRgAgJAOQgXAEgKAEQgJAEgFAIQgFAIgBAKQAAAPAMAKQALAKAWAAQAWAAAQgKQASgKAHgQQAHgMAAgaIAAgNQgVAIgpAGg");
	this.shape_115.setTransform(392.9,497.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#5A391A").s().p("AAsBvIgsiqIgtCqIgmAAIhFjdIAnAAIAxCvIALguIAkiBIAlAAIAtCqIAziqIAlAAIhGDdg");
	this.shape_116.setTransform(365.5,497.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#5A391A").s().p("AgyBqQgRgHgIgMQgIgKgEgSQgCgKAAgZIAAiJIAlAAIAAB7QAAAcADAMQAEAPALAIQAKAIASAAQARAAAOgIQAQgJAFgPQAGgPAAgdIAAh2IAmAAIAADeIgiAAIAAghQgZAmgsAAQgUAAgRgIg");
	this.shape_117.setTransform(326,498);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#5A391A").s().p("AhLBWQgdgdAAg5QABg8AigfQAdgZAoABQAtAAAeAeQAdAfAAA0QAAAqgMAZQgNAYgZAOQgZANgdAAQguAAgdgegAgug/QgSAVgBAqQABArASAWQATAUAbAAQAcABATgWQATgUgBgsQAAgqgSgVQgTgVgcAAQgbAAgTAVg");
	this.shape_118.setTransform(302.2,497.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#5A391A").s().p("AhRCYIgEgkQALAEAKAAQANAAAHgEQAHgEAGgIQADgFAIgXIAEgKIhVjdIApAAIAuCAQAHASAIAhQAIgcAIgWIAviBIAmAAIhVDhQgOAlgGANQgJATgOAJQgOAJgRgBQgLABgNgFg");
	this.shape_119.setTransform(279.7,502.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#5A391A").s().p("AhLBWQgcgdAAg5QAAg8AigfQAdgZAoABQAuAAAeAeQAcAfAAA0QABAqgNAZQgNAYgZAOQgZANgdAAQguAAgdgegAgug/QgTAVAAAqQAAArATAWQATAUAbAAQAdABASgWQATgUAAgsQAAgqgTgVQgSgVgdAAQgbAAgTAVg");
	this.shape_120.setTransform(244.8,497.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#5A391A").s().p("Ah+CaIAAkzIBqAAQAiAAAUAFQAaAGATAQQAYAVAMAfQAMAhAAAoQAAAggIAeQgIAbgNARQgNASgPAKQgPALgWAFQgUAFgcAAgAhVB2IBBAAQAeAAARgGQARgFALgLQAOgOAIgZQAIgYAAgiQAAgwgQgaQgPgagXgJQgRgGgjAAIhAAAg");
	this.shape_121.setTransform(217.9,493.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#5F4838").s().p("AAAiqIliIGIncq3IEHAAIDVE3IDVk3IEbAAIDVE3IDVk3IEHAAIncK3g");
	this.shape_122.setTransform(387.2,150.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#5F4838").s().p("AleAAIK8g5IAABzg");
	this.shape_123.setTransform(269,276);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#5F4838").s().p("Aldg5IK7A5Iq7A6g");
	this.shape_124.setTransform(505.4,276);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#5F4838").s().p("Ag5ldIBzAAIg6K8g");
	this.shape_125.setTransform(387.2,377);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#5F4838").s().p("AlnL0QEIg6CrjSQCujVAAkTQAAkRiujWQirjSkIg5IAAhwQE1A6DLDzQDPD1gBFAQABFBjPD2QjLDyk1A6g");
	this.shape_126.setTransform(439.5,276);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#5F4838").s().p("AiYI3QjPj2ABlBQgBlADPj1QDLjzE1g6IAABwQkIA5irDSQiuDWAAERQAAETCuDVQCrDSEIA6IAABvQk1g6jLjyg");
	this.shape_127.setTransform(334.9,276);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#5F4838").s().p("AJVEdQgtjRimiHQioiJjagBQjZABioCJQimCHgtDRIhZAAQAuj1DAigQDDijD8AAQD+AADCCjQDACgAuD1g");
	this.shape_128.setTransform(387.2,234.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#5F4838").s().p("Am/B5QjAigguj1IBZAAQAtDRCmCGQCpCKDYABQDagBCoiKQCmiGAtjRIBZAAQguD1jACgQjCCjj+AAQj8AAjDijg");
	this.shape_129.setTransform(387.2,317.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#5F4838").s().p("AkvEwQh+h+AAiyQAAixB+h+QB+h+CxAAQCyAAB+B+QB+B+AACxQAACyh+B+Qh+B+iyAAQixAAh+h+gAjyjyQhkBlAACNQAACOBkBlQBlBlCNAAQCOAABlhlQBlhlAAiOQAAiNhlhlQhlhliOAAQiNAAhlBlg");
	this.shape_130.setTransform(387.2,276);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#5F4838").s().p("AhaBbQgmgmAAg1QAAg1AmglQAmgmA0AAQA2AAAlAmQAmAmAAA0QAAA1gmAmQglAmg2AAQg0AAgmgmg");
	this.shape_131.setTransform(387.2,276);

	this.instance_22 = new lib.Image_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(159.7,35.3,0.18,0.234);

	this.instance_23 = new lib.ClipGroup_0_2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(443.7,421.4,1,1,0,0,0,359.9,386.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("EgjyA8UMAAAh4oMBHlAAAMAAAB4og");
	this.shape_132.setTransform(388.8,421.4);

	var maskedShapeInstanceList = [this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.instance_22,this.instance_23,this.shape_132];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_132},{t:this.instance_23},{t:this.instance_22},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(159.7,35.3,458.3,772.1), null);


(lib.boy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_1_3();
	this.instance.parent = this;
	this.instance.setTransform(140.7,98.9,1,1,0,0,0,68.2,80.7);
	this.instance.alpha = 0.59;

	this.instance_1 = new lib.Path_2_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(145.1,227.7,1,1,0,0,0,64,64.8);
	this.instance_1.alpha = 0.602;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#173347").s().p("ABTDgQiJgFingsQiRgmikhPQiLhIgKgEIBOg3IBVAsQBpAyBsAlQFZB2EFg8QBVgUBRg6QBJg0Amg7QAagqAMg6IAGgzIAzA9QAHAYgCASQgGA1guBNQhYCSjZAwQhhAWhnAAIgogBg");
	this.shape.setTransform(123.9,186.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#173347").s().p("AiEE1Qj2gYjYh0QhAgigkgaIArh1QAfAVBFAhQBeAtBnAfQEsBbEHg6QEwhDBYjLQAbhAADhHQABgogGgXIBFC2QgLBagjA7QgxBOg3AzQhSBLh1AlQiyA3i4AAQg6AAg6gFg");
	this.shape_1.setTransform(136.5,215.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#173347").s().p("AoYCrQhLgqhCg0QgXgRgigfIABheIBCA0QBTA6BaAvQEgCVEEghQFigsDCjsQBih3AbhwIAICMIgSBFQgZBLgrAwQhWBjh3A9QiaBQjhAcQg1AHg5AAQj+AAjtiFg");
	this.shape_2.setTransform(137.2,249.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7FA0B6").s().p("AoRFGQhYgogphXQhIiaBAiwQAUg4AfgzQAQgaALgOIAEAZQAFAeAQAaQAwBUB2AJQAzAEBpgzQDMhkASgIQFZiRF0BIQhKAXiUAHQibAHheAZQh9AhjZBrQjVBog6A1QgxAtAIBRQAJBTBDAYQA8AVhJBMIgDAAQhdAAhFgfg");
	this.shape_3.setTransform(69.7,35.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4F5E7F").s().p("AjgMZQjBg2hjisQhkisAhkXQAKhXAWhXIAUhGQhaAdhpgCQjSgDhJiaQhIiaBAixQAUg4AfgzQAQgaALgOIAEAZQAGAeAPAaQAwBUB2AJQA1AEB7g9QC4hcBNgdQGViXHRCeQHhCjAIJJQADC2gsDMQgXBlgXBBQgZgSgmgJQhMgShAAtQg/Aug+A9IgxA0QgZgkgvgkQhehIhtAAQhtAAiJB0QgrAkgoArIggAkQgRACgRAAQg/AAhLgWg");
	this.shape_4.setTransform(104.8,81.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#82A6BB").s().p("AhzGmQhui+AAjZQAAjnB8jHQB4jBDPh0QhzCfhYDCQhTC4gZCIQgYB+AkClQAcCCA5CGQAoBcBOBGQAnAjAfAQIgYAIQi4h3hri4g");
	this.shape_5.setTransform(43.1,98.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#567296").s().p("AlqMbQinhCiAh3QiBh4hHiaQhJigAAiwQAAiuBJihQBHiaCBh4QCAh3CnhBQCthEC9AAQC9AACtBEQCoBBCAB3QCBB4BHCaQBJChAACuQAACwhJCgQhHCaiBB4QiAB3ioBCQitBDi9AAQi9AAithDg");
	this.shape_6.setTransform(113.6,99.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#455D79").s().p("AhxLAQiXggichjQhcg6g8heQgTgdgNgdIgKgXQgBg1ADhGQAHiKAZhPQAZhPAUgtIAPgdQhKgahQgiQgygVhJgBIg/ACIA/hTQBLhcA+gtQA+gtBpgwQA1gZAogPIOQiFIAfARQAnAZAmAsQB7CKBOEGQBdE4h4DvQh2DskpBqQirA8ifAAQhSAAhQgQg");
	this.shape_7.setTransform(124.6,227.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4F5E80").s().p("AkCFrQj/g3i2h3Qi2h3gPh3QgOh0CMhPQCFhLDQgKQCngJCnAEQBUABAxAEINUg2IgJA6QgOBHgTBEQg+DYhgBkQh6B/kdBNQi5AyiiAAQhoAAhegVg");
	this.shape_8.setTransform(120.4,279.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F8294").s().p("AjBDJQg/grALhcQAJhQA1hAQAmgvBRg4QApgcAggSIDWB+IALAFQAMAIACANQAHAthZBYQhyBzhRAkQgrATglAAQguAAgmgbg");
	this.shape_9.setTransform(59.8,220.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#82A0B2").s().p("AiYCZQhAg/ABhaQgBhZBAg/QA/hABZAAQBZAABABAQBAA/AABZQAABahAA/QhABAhZAAQhZAAg/hAg");
	this.shape_10.setTransform(47.5,222.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.boy1, new cjs.Rectangle(0,0,210.8,317.8), null);


(lib.aaaaaab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(251,498,1,1,0,0,0,401.8,432.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggrBKgQh3AAhUhUQhVhVAAh3MAAAiL+QAAh4BVhUQBUhVB3AAMBBXAAAQB3AABUBVQBVBUAAB4MAAACL+QAAB3hVBVQhUBUh3AAg");
	this.shape.setTransform(238,476.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.aaaaaab, new cjs.Rectangle(-150.8,0,803.5,953.6), null);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(54,58.7,1,1,0,0,0,27.1,23.9);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340.6,-241.4,681.3,482.9);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boy1();
	this.instance.parent = this;
	this.instance.setTransform(92.6,-25.2,1,1,0,0,0,105.4,158.8);

	this.instance_1 = new lib.GAMEOVER();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-81.9,-135,1,1,0,0,0,97.6,15.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("Eg1Ogn5MBqdAAAMAAAA5YMhqdAWag");
	this.shape.setTransform(0,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82A0B2").s().p("Ah+EQQhNgkgQhpQgRhpA1hvQA1hxBbg2QBag2BMAjQBMAkARBpQARBpg1BvQg1BxhbA2Qg2AhgxAAQghAAgegOg");
	this.shape_1.setTransform(44.4,30.5);

	this.instance_2 = new lib.Path_15_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.2,77,1,1,0,0,0,288.5,118);
	this.instance_2.alpha = 0.121;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C8A838").s().p("AkHghIHWikICdA8IhiB/InGCeIhagjIhVBVg");
	this.shape_2.setTransform(-137,171.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F2F2F2").ss(4).p("AFHBQQggBJh3AcQh2AciHghQiHgihJhLQhJhKAghIQAghJB2gcQB3gcCGAhQCIAhBJBLQBJBKggBJg");
	this.shape_3.setTransform(-179.5,129);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B03634").s().p("AhNCwQiHgihJhLQhJhKAghIQAghJB2gcQB3gcCGAhQCIAhBJBLQBJBKggBJQggBJh3AcQg2ANg6AAQhDAAhKgSg");
	this.shape_4.setTransform(-179.5,129);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5D246").s().p("AszgZIBRj9IHJjqIDrAAICCAiILgIaIhvAWIhvBoQhpA8h8A3Qj3BuhegZQgVgFguBBQgYAhgTAig");
	this.shape_5.setTransform(-167.7,151.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#657073").s().p("AmQj8IBCghILfIaIhCAhg");
	this.shape_6.setTransform(-216.2,177.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#657073").s().p("AmQj8IBCghILfIaIhCAhg");
	this.shape_7.setTransform(-119.2,129);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#657073").s().p("AgoApIhTggIBLguIAFhZIBDA6IBVgXIghBRIAwBKIhYgGIg3BFg");
	this.shape_8.setTransform(-284,157.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#657073").s().p("AgoAoIhUgfIBNguIADhZIBEA6IBVgYIghBTIAwBJIhZgHIg2BGg");
	this.shape_9.setTransform(220.7,-28.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#041322").s().p("AroBHISBmLIFQCSIxuH4g");
	this.shape_10.setTransform(-128.7,184.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#657073").s().p("AgoAoIhTgfIBLguIAEhZIBDA6IBWgYIgiBTIAxBJIhYgHIg3BGg");
	this.shape_11.setTransform(-310.9,-176.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#657073").s().p("AgBBPIhQAoIARhYIg+g/IBYgKIAohPIAmBRIBXAOIhBA8IANBYg");
	this.shape_12.setTransform(274.9,-109.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#657073").s().p("Ag9BeIiVAHIBVh7Ig1iNICQAsIB1hdIADCWIB+BSIiOAwIgoCRg");
	this.shape_13.setTransform(237.4,-226.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#041322").s().p("A1+hCIQYjbIblCBMggbAG6g");
	this.shape_14.setTransform(193.6,129);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B1E3D").s().p("A6DslMA0HgERImHdnMgrGAEHg");
	this.shape_15.setTransform(-74.8,-129);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").p("AV5N/MgvLAEHMgCGggHMA2wgEEg");
	this.shape_16.setTransform(-74.4,-127.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("A7XuBMA2vgEEMgFfAgEMgvLAEHg");
	this.shape_17.setTransform(-74.4,-127.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1).p("A3GpqIBDBLQBFBVARA3QAFATAQBuQASB+ARBPQA9EZBzBCQBvA/E4gcQBTgHCggSQCDgOBAAEQBnAHCiAAQB0AEAYAiQAWAeiOBiQhRA5gUAQQguAlACARQAFArB6gDQCCgDCAg5QB1gzDRiGQClhpA3grQAUgQBThmQBQhjANgIQAPgHBLg3QBIgyAMAEQABABAgAVQAZARAbABQAcACBRgvQApgYAjgY");
	this.shape_18.setTransform(-116.3,63.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1A3D65").s().p("Ak9hKIDjgRQBQgGBHAjIEBB7IlbAgg");
	this.shape_19.setTransform(-276.2,-109.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#041322").s().p("Ah1GLQgogwACg+IAYu/IEgCoIgwScg");
	this.shape_20.setTransform(-294.8,-49.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0D2C53").s().p("AiVo+IFbgfIghSRIlqAqg");
	this.shape_21.setTransform(-264.1,-43);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FAF8E8").s().p("EgkTgBaMA5FgEyIPiF5MhDtAGgg");
	this.shape_22.setTransform(-91.3,-12);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C6C3B4").s().p("AhtA9IgvpVIE5HoIAAJJg");
	this.shape_23.setTransform(-308,32.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DBD1C4").s().p("Egh2gBUMBDtgGhIAAG9MhDtAIug");
	this.shape_24.setTransform(-75.6,36.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#989586").s().p("Ag7hhIB3AAIAACvIh3AUg");
	this.shape_25.setTransform(-270.1,85.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#808080").s().p("Ah1iqIB1gpIB1DiIAADEg");
	this.shape_26.setTransform(-287.9,74.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#041322").s().p("Eg0GgB8MBOzgIOIZaEYMhhAAP9g");
	this.shape_27.setTransform(7.2,60.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#395266").s().p("Eg1Ogn4MBqdAAAMAAAA5YMhqdAWZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341.6,-256.3,683.3,512.7);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(195.8,343.2,1,1,0,0,0,313.5,337.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgYgA6JQh3AAhVhUQhUhVAAh3MAAAhrRQAAh4BUhUQBVhUB3AAMAxBAAAQB4AABUBUQBUBVAAB3MAAABrRQAAB3hUBVQhUBUh4AAg");
	this.shape.setTransform(185.7,372.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-117.7,0,627.1,744.3), null);


(lib.page3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{image7:0,image8:30,image9:62});

	// timeline functions:
	this.frame_27 = function() {
		var canvas = this;
		this.Tap3.addEventListener("click",link3)
		var continue3 = 0;
		function link3(){
			if(continue3 == 0){
			canvas.gotoAndPlay("image8");
			}
			if(continue3 == 1){
			canvas.gotoAndPlay("image9");
			}
			if(continue3 == 2){
				canvas.parent.gotoAndStop(3);
				//canvas.parent.forth.gotoAndPlay("image10");
			}
			
			continue3++ ;
			
		}
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_61 = function() {
		this.stop();
	}
	this.frame_90 = function() {
		this.stop();
		//alert("Done");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(27).call(this.frame_27).wait(2).call(this.frame_29).wait(32).call(this.frame_61).wait(29).call(this.frame_90).wait(1));

	// Layer 4
	this.Tap3 = new lib.Symbol18();
	this.Tap3.parent = this;
	this.Tap3.setTransform(360.5,691.1,1,1,0,0,0,396.1,691.1);
	this.Tap3.alpha = 0.012;
	this.Tap3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Tap3).wait(27).to({_off:false},0).wait(64));

	// Layer 20
	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(-381.2,266.1,1,1,0,0,0,418.9,293.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:419.1,regY:293.9,x:-371.9,y:266.2},0).wait(1).to({x:-360.2},0).wait(1).to({x:-346.1},0).wait(1).to({x:-329.4},0).wait(1).to({x:-310.2},0).wait(1).to({x:-288.5},0).wait(1).to({x:-264.2},0).wait(1).to({x:-237.4},0).wait(1).to({x:-208.1},0).wait(1).to({x:-176.3},0).wait(1).to({x:-142},0).wait(1).to({x:-105.1},0).wait(1).to({x:-65.7},0).wait(1).to({x:-23.8},0).wait(1).to({x:20},0).wait(1).to({x:62},0).wait(1).to({x:101.4},0).wait(1).to({x:138.2},0).wait(1).to({x:172.6},0).wait(1).to({x:204.4},0).wait(1).to({x:233.7},0).wait(1).to({x:260.5},0).wait(1).to({x:284.7},0).wait(1).to({x:306.5},0).wait(1).to({x:325.7},0).wait(1).to({x:342.3},0).wait(1).to({x:356.5},0).wait(1).to({x:368.1},0).wait(1).to({x:377.2},0).wait(1).to({regX:418.9,regY:293.8,x:377,y:266.1},0).wait(61));

	// Layer 20 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_30 = new cjs.Graphics().p("Eg0CA9pMAAAgxtMBskgKxMAAABGjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(30).to({graphics:mask_graphics_30,x:361.8,y:459}).wait(61));

	// phone
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(356,650,1,1,0,0,0,306,395.9);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(1).to({regY:396,x:357.2,y:652.7,alpha:0.009},0).wait(1).to({x:358.3,y:655.3,alpha:0.008},0).wait(1).to({x:359.5,y:658,alpha:0.006},0).wait(1).to({x:360.7,y:660.6,alpha:0.005},0).wait(1).to({x:361.8,y:663.3,alpha:0.004},0).wait(1).to({x:363,y:665.9,alpha:0.003},0).wait(1).to({x:364.1,y:668.6,alpha:0.001},0).wait(1).to({x:365.3,y:671.2,alpha:0},0).wait(1).to({x:366.5,y:673.9,alpha:0.2},0).wait(1).to({x:367.6,y:676.5,alpha:0.4},0).wait(1).to({x:368.8,y:679.2,alpha:0.6},0).wait(1).to({x:370,y:681.8,alpha:0.8},0).wait(1).to({x:371.1,y:684.5,alpha:1},0).wait(1).to({x:372.3,y:687.1},0).wait(1).to({x:373.4,y:689.8},0).wait(1).to({x:374.6,y:692.4},0).wait(1).to({x:375.8,y:695},0).wait(1).to({x:376.9,y:697.7},0).wait(1).to({x:378.1,y:700.3},0).wait(1).to({x:379.3,y:703},0).wait(1).to({x:380.4,y:705.6},0).wait(1).to({x:381.6,y:708.3},0).wait(1).to({x:382.7,y:710.9},0).wait(1).to({x:383.9,y:713.6},0).wait(1).to({x:385.1,y:716.2},0).wait(1).to({x:386.2,y:718.9},0).wait(1).to({x:387.4,y:721.5},0).wait(1).to({x:388.6,y:724.2},0).wait(1).to({x:389.7,y:726.8},0).wait(1).to({x:390.9,y:729.5},0).wait(1).to({x:392.1,y:732.1},0).wait(30));

	// Layer 20
	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1164.1,692.1,1,1,0,0,0,439.9,240.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).wait(1).to({regX:440.1,regY:240.4,x:1113.5,y:692.2},0).wait(1).to({x:1055.2},0).wait(1).to({x:989.6},0).wait(1).to({x:916.7},0).wait(1).to({x:836.4},0).wait(1).to({x:748.7},0).wait(1).to({x:653.8},0).wait(1).to({x:551.5},0).wait(1).to({x:441.7},0).wait(1).to({x:377.2},0).wait(51));

	// Layer 20 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_62 = new cjs.Graphics().p("Eg2RBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_63 = new cjs.Graphics().p("Eg2RBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_64 = new cjs.Graphics().p("Eg2RBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_65 = new cjs.Graphics().p("Eg2RBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_66 = new cjs.Graphics().p("Eg2RBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_67 = new cjs.Graphics().p("Eg2RBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_68 = new cjs.Graphics().p("Eg2RBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_69 = new cjs.Graphics().p("Eg2RBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_70 = new cjs.Graphics().p("Eg2RBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_71 = new cjs.Graphics().p("Eg2RBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_72 = new cjs.Graphics().p("Eg2RBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_73 = new cjs.Graphics().p("Eg2RBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_74 = new cjs.Graphics().p("Eg2RBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_75 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_76 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_77 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_78 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_79 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_80 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_81 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_82 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_83 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_84 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_85 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_86 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_87 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_88 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_89 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");
	var mask_1_graphics_90 = new cjs.Graphics().p("Eg0WBmAMAAAhCKMBsjAKcMAAAA3ug");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_62,x:-317.7,y:652.8}).wait(1).to({graphics:mask_1_graphics_63,x:-297.6,y:652.8}).wait(1).to({graphics:mask_1_graphics_64,x:-271.7,y:652.8}).wait(1).to({graphics:mask_1_graphics_65,x:-240.1,y:652.8}).wait(1).to({graphics:mask_1_graphics_66,x:-202.7,y:652.8}).wait(1).to({graphics:mask_1_graphics_67,x:-159.6,y:652.8}).wait(1).to({graphics:mask_1_graphics_68,x:-110.7,y:652.8}).wait(1).to({graphics:mask_1_graphics_69,x:-56.1,y:652.8}).wait(1).to({graphics:mask_1_graphics_70,x:4.2,y:652.8}).wait(1).to({graphics:mask_1_graphics_71,x:70.3,y:652.8}).wait(1).to({graphics:mask_1_graphics_72,x:142.2,y:652.8}).wait(1).to({graphics:mask_1_graphics_73,x:219.7,y:652.8}).wait(1).to({graphics:mask_1_graphics_74,x:303.1,y:652.8}).wait(1).to({graphics:mask_1_graphics_75,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_76,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_77,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_78,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_79,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_80,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_81,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_82,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_83,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_84,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_85,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_86,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_87,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_88,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_89,x:359.8,y:652.8}).wait(1).to({graphics:mask_1_graphics_90,x:359.8,y:652.8}).wait(1));

	// Isolation Mode
	this.instance_3 = new lib.Symbol20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(397.2,934.2,1,1,0,0,0,195.8,372.1);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).wait(1).to({regX:185.7,x:387.1,y:950,alpha:0.208},0).wait(1).to({y:965.8,alpha:0.406},0).wait(1).to({y:981.6,alpha:0.604},0).wait(1).to({y:997.4,alpha:0.802},0).wait(1).to({y:1013.3,alpha:1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:387.6,y:1029.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:388,y:1044.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:388.5,y:1060.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:389,y:1076.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:389.5,y:1092.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:390,y:1108.2},0).wait(6));

	// Layer 20
	this.instance_4 = new lib.ClipGroup();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-317.9,1093.8,1,1,0,0,0,417.9,266.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).wait(1).to({regX:418.1,regY:266.6,x:-297.5,y:1093.9},0).wait(1).to({x:-271.7},0).wait(1).to({x:-240.1},0).wait(1).to({x:-202.7},0).wait(1).to({x:-159.6},0).wait(1).to({x:-110.7},0).wait(1).to({x:-56.1},0).wait(1).to({x:4.2},0).wait(1).to({x:70.3},0).wait(1).to({x:142.2},0).wait(1).to({x:219.7},0).wait(1).to({x:303.1},0).wait(1).to({x:372.1},0).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1000.1,-29.7,1241,543);


(lib.page2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{image4:0,image5:44,image6:83});

	// timeline functions:
	this.frame_27 = function() {
		var canvas = this;
		this.Tap2.addEventListener("click",link2)
		var continue2 = 0;
		function link2(){
			if(continue2 == 0){
			canvas.gotoAndPlay("image5");
			}
			if(continue2 == 1){
			canvas.gotoAndPlay("image6");
			}
			if(continue2 == 2){
				canvas.parent.gotoAndStop(2);
				//canvas.parent.third.gotoAndPlay("image7");
			}
			continue2 ++ ;
		}
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_82 = function() {
		this.stop();
	}
	this.frame_112 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(27).call(this.frame_27).wait(17).call(this.frame_44).wait(38).call(this.frame_82).wait(30).call(this.frame_112).wait(1));

	// Isolation Mode
	this.Tap2 = new lib.Symbol14();
	this.Tap2.parent = this;
	this.Tap2.setTransform(-396.1,922.2,1,1,0,0,0,424.1,714.1);
	this.Tap2.alpha = 0.012;
	this.Tap2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Tap2).wait(27).to({_off:false},0).wait(86));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_1 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_2 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_3 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_4 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_5 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_6 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_7 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_8 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_10 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_11 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_12 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_13 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_16 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_17 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_18 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_19 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_20 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_21 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_22 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_23 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_24 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_25 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_26 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_27 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_28 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_29 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_30 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_31 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_32 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_33 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_34 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_35 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");
	var mask_graphics_36 = new cjs.Graphics().p("Eg2XAe4MAAAg9vMBsvAAAMAAAA9vg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-380,y:-232.4}).wait(1).to({graphics:mask_graphics_1,x:-380,y:-218.9}).wait(1).to({graphics:mask_graphics_2,x:-380,y:-205.4}).wait(1).to({graphics:mask_graphics_3,x:-380,y:-192}).wait(1).to({graphics:mask_graphics_4,x:-380,y:-178.5}).wait(1).to({graphics:mask_graphics_5,x:-380,y:-165}).wait(1).to({graphics:mask_graphics_6,x:-380,y:-151.5}).wait(1).to({graphics:mask_graphics_7,x:-380,y:-138.1}).wait(1).to({graphics:mask_graphics_8,x:-380,y:-124.6}).wait(1).to({graphics:mask_graphics_9,x:-380,y:-111.1}).wait(1).to({graphics:mask_graphics_10,x:-380,y:-97.7}).wait(1).to({graphics:mask_graphics_11,x:-380,y:-84.2}).wait(1).to({graphics:mask_graphics_12,x:-380,y:-70.7}).wait(1).to({graphics:mask_graphics_13,x:-380,y:-57.2}).wait(1).to({graphics:mask_graphics_14,x:-380,y:-43.8}).wait(1).to({graphics:mask_graphics_15,x:-380,y:-30.3}).wait(1).to({graphics:mask_graphics_16,x:-380,y:-16.8}).wait(1).to({graphics:mask_graphics_17,x:-380,y:-3.3}).wait(1).to({graphics:mask_graphics_18,x:-380,y:10.1}).wait(1).to({graphics:mask_graphics_19,x:-380,y:23.6}).wait(1).to({graphics:mask_graphics_20,x:-380,y:37.1}).wait(1).to({graphics:mask_graphics_21,x:-380,y:50.5}).wait(1).to({graphics:mask_graphics_22,x:-380,y:64}).wait(1).to({graphics:mask_graphics_23,x:-380,y:77.5}).wait(1).to({graphics:mask_graphics_24,x:-380,y:91}).wait(1).to({graphics:mask_graphics_25,x:-380,y:104.4}).wait(1).to({graphics:mask_graphics_26,x:-380,y:117.9}).wait(1).to({graphics:mask_graphics_27,x:-380,y:131.4}).wait(1).to({graphics:mask_graphics_28,x:-380,y:144.8}).wait(1).to({graphics:mask_graphics_29,x:-380,y:158.3}).wait(1).to({graphics:mask_graphics_30,x:-380,y:171.8}).wait(1).to({graphics:mask_graphics_31,x:-380,y:185.3}).wait(1).to({graphics:mask_graphics_32,x:-380,y:198.7}).wait(1).to({graphics:mask_graphics_33,x:-380,y:212.2}).wait(1).to({graphics:mask_graphics_34,x:-380,y:225.7}).wait(1).to({graphics:mask_graphics_35,x:-380,y:239.2}).wait(1).to({graphics:mask_graphics_36,x:-380,y:252.6}).wait(77));

	// image1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(-244.3,625.4,1,1,0,0,0,108.4,141.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(1).to({x:-252.8,y:609.2},0).wait(1).to({x:-261.3,y:593},0).wait(1).to({x:-269.8,y:576.8},0).wait(1).to({x:-278.4,y:560.6},0).wait(1).to({x:-286.9,y:544.4},0).wait(1).to({x:-295.4,y:528.2},0).wait(1).to({x:-303.9,y:512},0).wait(1).to({x:-312.4,y:495.8},0).wait(1).to({x:-320.9,y:479.6},0).wait(1).to({x:-329.4,y:463.4},0).wait(1).to({x:-338,y:447.2},0).wait(72));

	// Layer 5
	this.instance_1 = new lib.aaaaaab();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-361.1,-548.1,1,1,0,0,0,250.9,476.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:238,x:-374,y:-532.6},0).wait(1).to({y:-517.2},0).wait(1).to({y:-501.8},0).wait(1).to({y:-486.4},0).wait(1).to({y:-471},0).wait(1).to({y:-455.6},0).wait(1).to({y:-440.2},0).wait(1).to({y:-424.7},0).wait(1).to({y:-409.3},0).wait(1).to({y:-393.9},0).wait(1).to({y:-378.5},0).wait(1).to({y:-363.1},0).wait(1).to({y:-347.7},0).wait(1).to({y:-332.3},0).wait(1).to({y:-316.8},0).wait(1).to({y:-301.4},0).wait(1).to({y:-286},0).wait(1).to({y:-270.6},0).wait(1).to({y:-255.2},0).wait(1).to({y:-239.8},0).wait(1).to({y:-224.4},0).wait(1).to({y:-208.9},0).wait(1).to({y:-193.5},0).wait(1).to({y:-178.1},0).wait(1).to({y:-162.7},0).wait(1).to({y:-147.3},0).wait(1).to({y:-131.9},0).wait(1).to({y:-116.5},0).wait(1).to({y:-101},0).wait(1).to({y:-85.6},0).wait(1).to({y:-70.2},0).wait(1).to({y:-54.8},0).wait(1).to({y:-39.4},0).wait(1).to({y:-24},0).wait(1).to({y:-8.6},0).wait(1).to({y:6.8},0).wait(77));

	// Layer 4
	this.instance_2 = new lib.aaaaaaa();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-380,-232.4,1,1,0,0,0,348,197.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:-218.9},0).wait(1).to({y:-205.4},0).wait(1).to({y:-191.9},0).wait(1).to({y:-178.5},0).wait(1).to({y:-165},0).wait(1).to({y:-151.5},0).wait(1).to({y:-138},0).wait(1).to({y:-124.6},0).wait(1).to({y:-111.1},0).wait(1).to({y:-97.6},0).wait(1).to({y:-84.2},0).wait(1).to({y:-70.7},0).wait(1).to({y:-57.2},0).wait(1).to({y:-43.7},0).wait(1).to({y:-30.3},0).wait(1).to({y:-16.8},0).wait(1).to({y:-3.3},0).wait(1).to({y:10.1},0).wait(1).to({y:23.6},0).wait(1).to({y:37.1},0).wait(1).to({y:50.6},0).wait(1).to({y:64},0).wait(1).to({y:77.5},0).wait(1).to({y:91},0).wait(1).to({y:104.4},0).wait(1).to({y:117.9},0).wait(1).to({y:131.4},0).wait(1).to({y:144.9},0).wait(1).to({y:158.3},0).wait(1).to({y:171.8},0).wait(1).to({y:185.3},0).wait(1).to({y:198.7},0).wait(1).to({y:212.2},0).wait(1).to({y:225.7},0).wait(1).to({y:239.1},0).wait(1).to({y:252.6},0).wait(5).to({y:252.5},0).wait(9).to({y:252.4},0).wait(10).to({y:252.3},0).wait(9).to({y:252.2},0).wait(9).to({y:252.1},0).wait(35));

	// image5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_58 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_59 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_60 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_61 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_62 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_63 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_64 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_65 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_66 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_67 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_68 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_70 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_71 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_72 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_73 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_74 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_75 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_76 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_77 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_78 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_79 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_80 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_81 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_82 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_83 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_84 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_85 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_86 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_87 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_88 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_89 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_90 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_91 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_92 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_93 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_94 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_95 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_96 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_97 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_98 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_99 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_100 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_101 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_102 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_103 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_104 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_105 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_106 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_107 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_108 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_109 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_110 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_111 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");
	var mask_1_graphics_112 = new cjs.Graphics().p("Eg43A/BMAAAg8mMBsvAAAMAAABEqg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(58).to({graphics:mask_1_graphics_58,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_59,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_60,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_61,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_62,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_63,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_64,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_65,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_66,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_67,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_68,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_69,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_70,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_71,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_72,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_73,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_74,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_75,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_76,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_77,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_78,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_79,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_80,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_81,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_82,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_83,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_84,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_85,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_86,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_87,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_88,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_89,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_90,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_91,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_92,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_93,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_94,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_95,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_96,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_97,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_98,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_99,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_100,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_101,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_102,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_103,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_104,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_105,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_106,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_107,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_108,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_109,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_110,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_111,x:-364,y:454.9}).wait(1).to({graphics:mask_1_graphics_112,x:-364,y:454.9}).wait(1));

	// Isolation Mode
	this.instance_3 = new lib.Symbol12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-378.1,699.9,1.384,1.384,0,0,0,345.6,297.6);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(58).to({_off:false},0).wait(1).to({regX:346.1,regY:297.5,scaleX:1.35,scaleY:1.35,rotation:15,x:-377.4,y:700,alpha:0.175},0).wait(1).to({scaleX:1.32,scaleY:1.32,rotation:30,x:-377.5,y:700.1,alpha:0.34},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:45,x:-377.6,y:700.3,alpha:0.505},0).wait(1).to({scaleX:1.26,scaleY:1.26,rotation:60,x:-377.7,y:700.4,alpha:0.67},0).wait(1).to({scaleX:1.24,scaleY:1.24,rotation:75,x:-377.9,y:700.5,alpha:0.835},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:90,x:-378.1,y:700.6,alpha:1},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:105,x:-378.3},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:120,x:-378.5,y:700.5},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:135,x:-378.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:150,x:-378.7,y:700.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:165,y:700.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:180,y:700},0).wait(1).to({scaleX:1,scaleY:1,rotation:195,y:699.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:210,y:699.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:225,x:-378.6,y:699.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:240,x:-378.5,y:699.5},0).wait(1).to({rotation:255,x:-378.4,y:699.4},0).wait(1).to({rotation:270,x:-378.3},0).wait(1).to({rotation:285,x:-378.1},0).wait(1).to({rotation:300,x:-378,y:699.5},0).wait(1).to({rotation:315,x:-377.9},0).wait(1).to({rotation:330,x:-377.8,y:699.6},0).wait(1).to({rotation:345,x:-377.7,y:699.7},0).wait(1).to({rotation:360,y:699.8},0).wait(31));

	// image5
	this.instance_4 = new lib.ClipGroup_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1378.1,684,1,1,0,0,0,244.9,309.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).wait(1).to({regX:497.5,regY:313.4,x:-1105.6,y:688.2},0).wait(1).to({x:-1083.1,y:688.3},0).wait(1).to({x:-1058.1},0).wait(1).to({x:-1030.5,y:688.4},0).wait(1).to({x:-1000.4,y:688.5},0).wait(1).to({x:-967.6,y:688.6},0).wait(1).to({x:-932.4,y:688.7},0).wait(1).to({x:-894.6,y:688.8},0).wait(1).to({x:-854.2,y:688.9},0).wait(1).to({x:-811.3,y:689},0).wait(1).to({x:-765.7,y:689.1},0).wait(1).to({x:-717.7,y:689.2},0).wait(1).to({x:-667.1,y:689.4},0).wait(1).to({x:-613.9,y:689.5},0).wait(1).to({x:-558.2,y:689.7},0).wait(1).to({x:-499.9,y:689.8},0).wait(1).to({x:-439,y:690},0).wait(1).to({x:-380,y:690.2},0).wait(51));

	// image1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_83 = new cjs.Graphics().p("Eg43BnwMAAAhE/MBsvAIcMAAAA8jg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(83).to({graphics:mask_2_graphics_83,x:-364,y:664}).wait(30));

	// wakeup
	this.instance_5 = new lib.Tween5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-380.6,1111.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(97).to({_off:false},0).to({alpha:1},5).to({rotation:-12},2).to({regX:-0.1,regY:0.1,scaleX:1,scaleY:1,rotation:0.9,y:1111.7},2).to({regX:-0.2,regY:0.2,scaleX:1,scaleY:1,rotation:-7.9,x:-380.7},2).to({regY:0.3,rotation:7.4,y:1111.8},2).wait(3));

	// image1
	this.instance_6 = new lib.ClipGroup_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-380.2,1507.3,1,1,0,0,0,456.8,307.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(83).to({_off:false},0).wait(1).to({regX:457,x:-380,y:1497.3},0).wait(1).to({y:1484.6},0).wait(1).to({regY:307.7,y:1469.2},0).wait(1).to({regY:307.6,y:1450.9},0).wait(1).to({y:1429.9},0).wait(1).to({y:1406.1},0).wait(1).to({y:1379.6},0).wait(1).to({y:1350.3},0).wait(1).to({y:1318.2},0).wait(1).to({regY:307.7,y:1283.5},0).wait(1).to({y:1245.9},0).wait(1).to({regY:307.6,y:1205.4},0).wait(1).to({y:1162.3},0).wait(1).to({y:1116.4},0).wait(1).to({y:1106.8},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-728,-430,696,395.3);


(lib.image2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(387.6,304.1,1,1,0,0,0,27.1,18.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:27,regY:23.9,x:386.7,y:309.3,alpha:0.029},0).wait(1).to({x:386,y:309.6,alpha:0.057},0).wait(1).to({x:385.2,y:309.8,alpha:0.086},0).wait(1).to({x:384.5,y:310.1,alpha:0.114},0).wait(1).to({x:383.8,y:310.4,alpha:0.143},0).wait(1).to({x:383,y:310.6,alpha:0.171},0).wait(1).to({x:382.3,y:310.9,alpha:0.2},0).wait(1).to({x:381.6,y:311.2,alpha:0.229},0).wait(1).to({x:380.8,y:311.4,alpha:0.257},0).wait(1).to({x:380.1,y:311.7,alpha:0.286},0).wait(1).to({x:379.4,y:312,alpha:0.314},0).wait(1).to({x:378.6,y:312.2,alpha:0.343},0).wait(1).to({x:377.9,y:312.5,alpha:0.371},0).wait(1).to({x:377.2,y:312.8,alpha:0.4},0).wait(1).to({x:376.4,y:313,alpha:0.429},0).wait(1).to({x:375.7,y:313.3,alpha:0.457},0).wait(1).to({x:375,y:313.5,alpha:0.486},0).wait(1).to({x:374.2,y:313.8,alpha:0.514},0).wait(1).to({x:373.5,y:314.1,alpha:0.543},0).wait(1).to({x:372.8,y:314.3,alpha:0.571},0).wait(1).to({x:372,y:314.6,alpha:0.6},0).wait(1).to({x:371.3,y:314.9,alpha:0.629},0).wait(1).to({x:370.5,y:315.1,alpha:0.657},0).wait(1).to({x:369.8,y:315.4,alpha:0.686},0).wait(1).to({x:369.1,y:315.7,alpha:0.714},0).wait(1).to({x:368.3,y:315.9,alpha:0.743},0).wait(1).to({x:367.6,y:316.2,alpha:0.771},0).wait(1).to({x:366.9,y:316.5,alpha:0.8},0).wait(1).to({x:366.1,y:316.7,alpha:0.829},0).wait(1).to({x:365.4,y:317,alpha:0.857},0).wait(1).to({x:364.7,y:317.3,alpha:0.886},0).wait(1).to({x:363.9,y:317.5,alpha:0.914},0).wait(1).to({x:363.2,y:317.8,alpha:0.943},0).wait(1).to({x:362.5,y:318,alpha:0.971},0).wait(1).to({x:361.7,y:318.3,alpha:1},0).wait(1).to({x:361,y:318.6},0).wait(1).to({x:360.3,y:318.8},0).wait(1).to({x:359.5,y:319.1},0).wait(1).to({x:358.8,y:319.4},0).wait(1).to({x:358.1,y:319.6},0).wait(1).to({x:357.3,y:319.9},0).wait(1).to({x:356.6,y:320.2},0).wait(1).to({x:355.9,y:320.4},0).wait(1).to({x:355.1,y:320.7},0).wait(1).to({x:354.4,y:321},0).wait(1).to({x:353.6,y:321.2},0).wait(1).to({x:352.9,y:321.5},0).wait(1).to({x:352.2,y:321.7},0).wait(1).to({x:351.4,y:322},0).wait(1).to({x:350.7,y:322.3},0).wait(1).to({x:350,y:322.5},0).wait(1).to({x:349.2,y:322.8},0).wait(1).to({x:348.5,y:323.1},0).wait(1).to({x:347.8,y:323.3},0).wait(1).to({x:347,y:323.6},0).wait(1).to({x:346.3,y:323.9},0).wait(1).to({x:345.6,y:324.1},0).wait(1).to({x:344.8,y:324.4},0).wait(1).to({x:344.1,y:324.7},0).wait(1).to({x:343.4,y:324.9},0).wait(1).to({x:342.6,y:325.2},0).wait(1).to({x:341.9,y:325.5},0).wait(1).to({x:341.2,y:325.7},0).wait(1).to({x:340.4,y:326},0).wait(1).to({x:339.7,y:326.2},0).wait(1).to({x:339,y:326.5},0).wait(1).to({x:338.2,y:326.8},0).wait(1).to({x:337.5,y:327},0).wait(1).to({x:336.7,y:327.3},0).wait(1).to({x:336,y:327.6},0).wait(1).to({x:335.3,y:327.8},0).wait(1).to({x:334.5,y:328.1},0).wait(1).to({x:333.8,y:328.4},0).wait(1).to({x:333.1,y:328.6},0).wait(1).to({x:332.3,y:328.9},0).wait(1).to({x:331.6,y:329.2},0).wait(1).to({x:330.9,y:329.4},0).wait(1).to({x:330.1,y:329.7},0).wait(1).to({x:329.4,y:329.9},0).wait(1).to({x:328.7,y:330.2},0).wait(1).to({x:327.9,y:330.5},0).wait(1).to({x:327.2,y:330.7},0).wait(1).to({x:326.5,y:331},0).wait(1).to({x:324.7,y:331.6,alpha:0.875},0).wait(1).to({x:323,y:332.3,alpha:0.75},0).wait(1).to({x:321.2,y:332.9,alpha:0.625},0).wait(1).to({x:319.5,y:333.5,alpha:0.5},0).wait(1).to({x:317.7,y:334.2,alpha:0.375},0).wait(1).to({x:316,y:334.8,alpha:0.25},0).wait(1).to({x:314.2,y:335.4,alpha:0.125},0).wait(1).to({x:312.5,y:336.1,alpha:0},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(340.7,241.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,681.4,482.9);


(lib.page1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{image2:10,image3:46});

	// timeline functions:
	this.frame_0 = function() {
		var canvas = this;
		this.Tap.addEventListener("click",link1)
		var continue1 = 0;
		function link1(){
			if(continue1 == 0){
			canvas.gotoAndPlay("image2");
			}
			if(continue1 == 1){
			canvas.gotoAndPlay("image3");
			}
			if(continue1 == 2){
				canvas.parent.gotoAndStop(1);
				//canvas.parent.second.gotoAndPlay("image4");
			}
			
			continue1++ ;
			
		}
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_45 = function() {
		this.stop();
	}
	this.frame_68 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(36).call(this.frame_45).wait(23).call(this.frame_68).wait(2));

	// Layer 11
	this.Tap = new lib.Symbol9();
	this.Tap.parent = this;
	this.Tap.setTransform(379.2,668.2,1,1,0,0,0,378.1,668.1);
	this.Tap.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.Tap).to({_off:true},69).wait(1));

	// image3
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(375.4,1246.8,1,1,0,0,0,340.5,216.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).wait(1).to({regX:340.7,regY:217,x:375.6,y:1224.4,alpha:0.048},0).wait(1).to({y:1204,alpha:0.095},0).wait(1).to({y:1185.5,alpha:0.143},0).wait(1).to({y:1168.9,alpha:0.19},0).wait(1).to({y:1154,alpha:0.238},0).wait(1).to({y:1140.8,alpha:0.286},0).wait(1).to({y:1129.1,alpha:0.333},0).wait(1).to({y:1118.9,alpha:0.381},0).wait(1).to({y:1110,alpha:0.429},0).wait(1).to({y:1102.4,alpha:0.476},0).wait(1).to({y:1096,alpha:0.524},0).wait(1).to({y:1090.6,alpha:0.571},0).wait(1).to({y:1086.2,alpha:0.619},0).wait(1).to({y:1082.7,alpha:0.667},0).wait(1).to({y:1082.3,alpha:0.714},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:1},0).wait(1).to({_off:true},1).wait(1));

	// image2
	this.image2 = new lib.image2();
	this.image2.parent = this;
	this.image2.setTransform(802.4,671.8,1,1,0,0,0,340.5,241.3);
	this.image2._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyASIAAgjIBlAAIAAAjg");
	this.shape.setTransform(438.7,654.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D87C3").s().p("AgLCVQgqgEgaguQgbguAGg8QAEg+AigpQAhgpApADQAqAEAaAuQAbAugGA8QgEA+giApQgeAmgmAAIgGAAg");
	this.shape_1.setTransform(436.9,661.5);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(181.7,773,1,1,0,0,0,51.9,41.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4D").s().p("AAAALQgMgBgIgEQgIgEAAgEQABgFAIgCQAJgCALABQAMABAIAEQAIAEgBAEQAAAFgJACIgNACIgGgBg");
	this.shape_2.setTransform(503.2,763.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#282828").s().p("AAAALQgMgBgIgEQgIgEAAgEQABgEAIgDQAJgCALABQAMABAIAFQAIAEgBADQAAAFgJACIgNABIgGAAg");
	this.shape_3.setTransform(503.2,763.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4D").s().p("AgDAKQgLgEgHgGQgHgGACgEQACgEAJAAQAJAAAKAEQALAFAHAGQAGAFgBAFQgCAEgJAAQgKAAgJgFg");
	this.shape_4.setTransform(516,765.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#282828").s().p("AgDAKQgLgEgHgGQgGgGABgEQACgEAJAAQAJAAAKAFQAMAEAGAGQAHAGgCAEQgCAEgJAAQgJAAgKgFg");
	this.shape_5.setTransform(515.8,766.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4D").s().p("AgCAOQgOgCgIgGQgJgGABgFQABgGAKgCQALgDAMADQAOACAJAGQAJAFgBAGQgBAGgKACIgMACIgMgCg");
	this.shape_6.setTransform(509.4,765.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#282828").s().p("AgBAPQgOgDgJgGQgJgGABgFQABgGAKgDQALgCANACQAOADAJAGQAIAFgBAGQgBAGgKADIgMABIgLgBg");
	this.shape_7.setTransform(509.3,765.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D4D4D").s().p("AgtAlQgXgGgDgQQgDgPASgPQATgPAegGQAdgGAXAGQAXAGAEAPQADAPgTAPQgTAQgdAGQgOADgNAAQgOAAgMgDg");
	this.shape_8.setTransform(461.3,763.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#282828").s().p("AgsAlQgXgGgEgQQgDgPATgOQATgQAdgGQAdgHAXAHQAYAGADAQQADAOgSAQQgTAPgeAGQgOAEgNAAQgOAAgLgEg");
	this.shape_9.setTransform(461.6,765.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#282828").s().p("AGABDQgpgIgWgcIiQg9IlnAAIiQA9QgVAcgpAIQgpAIglgQQgigOgMgbQAdAEAsgBQBegEA/gqQAhgWANgVIH1AAIAxAtQA6ArA1gBQAlAAA0gGQgLAfgpAPQgYAKgaAAQgOAAgOgCg");
	this.shape_10.setTransform(487.8,794);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#344159").s().p("AmnEqQCJgNB9gYQGRhMCNicQCMibgChpQAAghgPgYIgPgRIAKAIQAMALAJASQAaA5gTBiQgMA6hIBGQhFBEhsA+Qj1CNjpAIIlCAMg");
	this.shape_11.setTransform(538.5,845.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#344159").s().p("AjjDgQiChlApiPQAqiQEwhPQCYgoCQgMQh9AUiJAtQkPBcgzCEQgqBrBlBsQAyA2A7AhQhJgWhAgyg");
	this.shape_12.setTransform(453.5,843);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#344159").s().p("ACuAbQg5gehLgKQhLgJhjADIhTAGIB1gaQCAgXA7AJQA5AKApAyQAVAaAIAXQgOgNgcgQg");
	this.shape_13.setTransform(522.2,809.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#344159").s().p("Ai6AHQAogyA6gKQA6gJCAAYQBBAMA1ANQgigDgygCQhigEhLAJQhLAKg5AeIgqAdQAJgXAUgag");
	this.shape_14.setTransform(452.7,809.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#64809D").s().p("ACVAhQg3glhDgQQhCgQhSARIhFAUIBOgmQBZglA8AJQA+AKA0A+QAaAfAOAeQgOgQgcgTg");
	this.shape_15.setTransform(433.1,759.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#64809D").s().p("AivAWQBIhUBFgFQBEgFBfAkQAvARAhASQgOgHgfgIQhCgQhhgDQhggDhPBHQgSAQgQATg");
	this.shape_16.setTransform(542.9,749.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DBD1C4").s().p("ABWFlQhDhXgzg3Qg9g/iZh4IiMhqIBfAZQBlAXAfgOQAggPhOhHIhUhDIBrAtQByApAlgQQAlgShOhWIhXhTIBqA/QBwA8AigQQAhgRg7hLIhDhIIBhAqQBkAoARgKQAXgPgbgwQgWgnglglIAYAXQAeAeAcAkQBYB0AdCHQAfCRAFBMQAEA1gKAdQgGASh0BqQg6A0g5AyQgXgigigsg");
	this.shape_17.setTransform(225.2,670.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgyASIAAgjIBlAAIAAAjg");
	this.shape_18.setTransform(514.3,654.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D87C3").s().p("AgLCVQgqgEgaguQgaguAFg8QAFg+AhgpQAhgpApADQAqAEAaAuQAaAugFA8QgFA+ghApQgeAmglAAIgHAAg");
	this.shape_19.setTransform(512.5,661.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3F4D66").s().p("AGsARQkBiNk/AAQkPAAjEA/Qg+ATguAYIgiASQgTgTgRglQgghLAOhYQAOhXA7g1QAdgaAbgJQgRAXgRAeQghA8gBAlQgBAmASAyQAIAZAJARIBTgeQBqggB3gMQF9goFvCuQFZCiCEEfQiMjxj5iJg");
	this.shape_20.setTransform(503.5,574.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#567296").s().p("ApjDHQD1APDqgoQDDgiDLhzQCzhkCniZQiRDRj4B6Qj/B+kpAAQiOAAiIgeg");
	this.shape_21.setTransform(512.5,730.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4F5E80").s().p("Am1FcQjgg6geiPQgfiPC1iPQC2iQEfg9QEeg9DgA6QDgA6AeCPQAfCPi1CPQi2CQkfA9QiSAfiCAAQh8AAhugcg");
	this.shape_22.setTransform(522.7,838.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4F5E80").s().p("AhTFXQkdhGixiWQixiVAkiOQAiiODjgzQDhgzEcBGQEdBGCxCWQCxCVgkCOQgiCOjjAzQhfAVhpAAQiRAAikgog");
	this.shape_23.setTransform(452.9,838.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4D4D4D").s().p("AGBC6QgpgIgVgcIiQg+IlnAAIiQA+QgWAcgpAIQgpAIglgQQglgPgLgfQgLgfAVgbICIixQAegnA0gXQA0gWA9AAIFVAAQA8AAA0AWQA0AXAeAmICOC1QAVAcgMAdQgMAegmAOQgYAKgbAAQgNAAgPgCg");
	this.shape_24.setTransform(487.6,782.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#567296").s().p("AjEA8QgDgbAJgdQARg4A4gHQA4gGCHA/QBEAeA4Agg");
	this.shape_25.setTransform(479.4,720.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag5DZQjzgmg1jMQgQhAAEhJIAIg8ILTBUQgIBog5BgQhgChi6AAQgjAAgpgGg");
	this.shape_26.setTransform(530.3,666.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#567296").s().p("Ag5D7Qjzgsg1jsQgQhKAEhUIAIhGILTBhQgIB5g5BuQhgC7i6AAQgjAAgpgHg");
	this.shape_27.setTransform(530.3,670.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AkvAxQgkg4gUhGIgNg6ILphUIAABCQgEBPgYBDQhKDWjmANIgdAAQjPAAhsirg");
	this.shape_28.setTransform(422.3,666.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#567296").s().p("AkvA6QgkhCgUhSIgNhEILphjIAABNQgEBdgYBPQhKD6jmAPIgdABQjPAAhsjIg");
	this.shape_29.setTransform(422.3,670.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4F5E7F").s().p("AQGG0QhikQi8hFQi7hFh0AIQgkACgYAKIgSAJQgqAhhTAgQilBBjHAAQjHAAi6gyQg5gQgygSIgmgQQgoAKg8AeQh3A8hjBkQhjBkgaClQgNBSAGA/QgKhBgFhaQgKi0AZh9QAZh9BviGQA4hEAygqQAKg/AUhOQAnieA0hRQA0hRB+g6QA/gcA1gNQgRAXgRAdQghA9gBAlQgBAlASAzQAIAZAJARIBTgeQBqggB3gNQF8goFwCvQHVDeBHGzQAXCIgVCOQgKBGgOAsQgMh7gxiIg");
	this.shape_30.setTransform(480.2,604.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#82A6BB").s().p("AmpNPQjFhFiYiAQiXh/hTilQhWirAAi7QAAi7BWirQBTikCXh/QCYiADFhGQDLhIDeAAQDeAADMBIQDFBGCXCAQCYB/BTCkQBWCrAAC7QAAC7hWCrQhTCliYB/QiXCAjFBFQjMBJjeAAQjeAAjLhJg");
	this.shape_31.setTransform(479.1,661.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#64809D").s().p("AhdFKQhzgngwh/Qgwh/AviNQAchTA4hAQA3g9BFgeIB5A+QglgRgvAHQhSAMhPBVQhXBeAIBrQAEA1AVAjIgDAUQgCAZAHAZQAZBQBwAyQBwAyCJhrQBFg2AuhAIAFAGQg4B5hrA7QhDAkhAAAQgoAAgogNg");
	this.shape_32.setTransform(420.4,766.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#64809D").s().p("AhKFeQBzgtA1hRQA4hWARhVIAFhEQgCgrgMg3QgZhtg0g7Qg3g8iggmQATgDAUAAQB4AABWBpQBWBqAACVQAAA8gQA7QgRBWhFBIQhGBJhlAhQg6AUg+ACQA/gJA7gYg");
	this.shape_33.setTransform(569.5,758.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#567296").s().p("Ag4CtQgngSgeggQAfANAUAEQAfAFAYgKIAYgKQgIgNgJgWQgTgqgHgnQgGgmAFhUIAGhNICADUIAfCSQgtAXgzAAQgsAAgqgSg");
	this.shape_34.setTransform(373.1,682.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#82A6BB").s().p("AiYCZQg+g/gBhaQABhYA+g/QBAg/BYAAQBZAAA/A/QBAA/gBBYQABBahAA/Qg/A+hZABQhYgBhAg+g");
	this.shape_35.setTransform(376.1,679.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#567296").s().p("AiJBcIBbjsIBPgDIgKBUQgKBYgHAbQgJArgIAOIApAMQA1AHA3gZQg6AthKAAQhRAAg+g4g");
	this.shape_36.setTransform(587.9,681.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#769BAD").s().p("AhxFVQhzgmgwiAQgwh/AviMQAviOBzhIQBzhJByAmQB0AnAwB/QAwCAgwCMQgvCOhzBIQhMAwhKAAQgoAAgngOg");
	this.shape_37.setTransform(422.5,765.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#82A6BB").s().p("Ai2FnQh/gxgmhzQgdhZAnhcQAmhaBZg/QAehsBLhDQBNhFBeAAQB6AABWBqQBWBpAACVQAAA8gRA7QgRBXhEBHQhGBJhmAiQhFAXhBAAQhFAAhBgZg");
	this.shape_38.setTransform(553.2,758.7);

	this.instance_2 = new lib.Path_42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(489.6,798.5,1,1,0,0,0,97.1,55.8);
	this.instance_2.alpha = 0.602;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#455D79").s().p("AqtJHQkdhuAAkBQAAiLBNicQBMicCEiEQCLiLCphPQC5hWDAAAQDAAAC6BWQCpBPCMCLQCDCEBNCcQBMCcAACLQAAEBkcBuQjoBZnHAAQnHAAjmhZg");
	this.shape_39.setTransform(489.6,787.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#82A6BB").s().p("AiYCZQg/g/AAhaQAAhYA/hAQBAg/BYAAQBaAAA/A/QA/BAAABYQAABag/A/Qg/A/haAAQhYAAhAg/g");
	this.shape_40.setTransform(588.5,674.3);

	this.instance_3 = new lib.Path_45();
	this.instance_3.parent = this;
	this.instance_3.setTransform(498.9,735.7,1,1,0,0,0,112.4,133.8);
	this.instance_3.alpha = 0.289;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DBD1C4").s().p("ApCCGQARhtAEhKQACgvgDhQIgFhGIARBzQASBzANABQANAAANhPIAKhNIAGB6QAQB9AuALQAvAMAeiQIAUiWIgGCOQACCNAuADQAvACAOhPIAGhOIgBAVQABAZAFAVQARBDA9ADQA+ACAYihQAHgyADg9IABgzIAbC0QAlC0AzAEQAyAEAuh1IAlh2IgHB7QABB8ApALQAoAKAri3IAji6IABB/QAICAAnAGQAoAGA9hvQAfg5AXg6IiTGog");
	this.shape_41.setTransform(627.4,672.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DBD1C4").s().p("AoJBVQgHgugUhNIgShEIAoBsQApBtANgCQAMgCgDhQIgGhNIAfB2QApB3AwACQAwADgBiVIgKiVIAWCLQAgCKAugHQAtgHgBhQIgLhOIADAUQAGAYAKAUQAeA/A9gKQA8gKgJiiQgDgzgJg8IgJgyIA+CqQBKCpAygGQAygGAVh8IAMh7IASB6QAbB6AqACQApACAFi9IgDi+IAaB9QAiB9AogCQAngCAmh7IAeh7Ig6G9Iv1BcQgFhugMhKg");
	this.shape_42.setTransform(316.9,663.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DBD1C4").s().p("AVeCtQumhlnYgCQnZgCsrAYIrMAZIj7lIIBvATQCHAWB6APQBKAJBMgPQAxgKBXgdQBjgiAvgMQBagXBbgDQAzgCA5ASIBoAhQCTAlDxhCQBsgeDMAzICmAqQBhAWBGACQB6AEDsgoQDbglCBAMQCeAPD7BcQCXA4AlAMQBnAiBMAMQBrAQDNgeQDJgeBCAMQCxAhBnAVIhHEAQl0gynTgyg");
	this.shape_43.setTransform(484.8,751.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DBD1C4").s().p("AgOAKQAPgOAUgOIgpAlg");
	this.shape_44.setTransform(704,623.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DBD1C4").s().p("EgkCAHCQgng2gQhOQgbiAAyiWQA8i3DJhdQCDg8EggwQC7gfFxAmQC4ASCSAZIAdgaQAqgeA/gaQDMhTFcAAQFcAAE/BXQCgAsBaAsIAjgcQAyghBIgWQDnhIF0A8QGdBCDOC9QCuCfgNDIQgGBSgYBBQAdhrg/jDQgmh0iIhiQh4hYi0g9Qijg4irgWQilgUhtASQiyAghTAyQgaARgNAQIgIAMQhzgqizgtQlmhblAgTQlBgSjcBaQhFAdgzAkIgkAeQksghlMABQqYAEihCvQigCuATDcQAKBuAqBLg");
	this.shape_45.setTransform(470.2,581.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DBD1C4").s().p("AAOgLQgJALgJAHIgIAFg");
	this.shape_46.setTransform(700.5,626.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DBD1C4").s().p("AUrAnQubhcnJgYQnKgXtiA4IsFA7ICtgYQDdgfDwgYQMAhNKjARQIpAON/B4QHAA8FQA6QlygqnOgvg");
	this.shape_47.setTransform(480.2,689);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DBD1C4").s().p("AgMAmQAhhpAwiYIAoiDIgYCSQggCighBQIiAE5QApiRA3iog");
	this.shape_48.setTransform(705.3,778.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DBD1C4").s().p("ACjDrQg2ikgshMQgshNh2ieIhviOICBBvQCJCDAyBkQAyBjAfCsQAPBWAFBCQgThCgbhSg");
	this.shape_49.setTransform(266.4,757.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DBD1C4").s().p("AgsAaQlIgPtnAQIslAUIgmhuIMbgaQNjgcFmgGQFmgGOlBUQHTAqGLAqIgkBVMggvgBig");
	this.shape_50.setTransform(492.2,791.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DBD1C4").s().p("AjvCBQASgjA4gyQA5gyCqhOQBVgoBKgdIAbAJQgmAMgqAQQhUAfgTAVQgUAVAqAMQAVAGAZABQgwABgoADQhRAGAjANQAiANAQAYQAGAKACAJQgCgFgMgEQgggMhXACQhXACgzA6QgZAegIAcQgCgHAKgSg");
	this.shape_51.setTransform(157.7,644.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAF8E8").s().p("EAqeAVdIAdhWQjZgVllgcQrLg3rBgbQq/gbsCAmQjyAMjbAQIirAPIAAAuQABANgKAIQgKAKgMgBIqTgaQgPgBgMgJQgMgKgDgPQgliugqiQQhGjvg7hCQhFhMgNgIQgwgThZgvIiNhEQhVgqgxgkQiMhkgBieQAAikA1hTQAhgzBeg5QBbg2DOhZQDphlBpgUQBhgTBrA3QA1AbAhAfQgggjgVhIQgqiNA4irQA8i5DJhcQCDg9EfgvQC8ggFwAmQC4ASCTAZIAdgaQAqgeA/gaQDKhSFdgBQFcABFABXQCgAsBaArIAjgcQAyggBHgXQDohHFzA8QGeBCDNC8QCuCggNDIQgHBwgpBRQBKhCA2AOIAAeng");
	this.shape_52.setTransform(422.5,675.1);

	this.instance_4 = new lib.Path_55();
	this.instance_4.parent = this;
	this.instance_4.setTransform(482.2,788.6,1,1,0,0,0,229,23.9);
	this.instance_4.alpha = 0.289;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D9ECFD").s().p("AnOAAIGwh+IHuBFIkaC3g");
	this.shape_53.setTransform(249.1,821.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A7AEB6").s().p("AAnCbIoRh3QgRgEAAgRQgBgQARgFIH8iSQAYgHAKgBQALAAAYADIGcA6QAIABACAIQACAJgGAEIkgDIQgnAaguAIQgVAEgUAAQgaAAgZgGg");
	this.shape_54.setTransform(246.6,823.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333127").s().p("AAbCaIkQhMQjWg8gNgFQgIgEgQgmIgOgnIP9hkIgGAiQgGAkgGAJQgGAJhtBZQhgBPg3AsQgpAggxAEIgRABQgoAAg1gPg");
	this.shape_55.setTransform(246.9,832.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#657073").s().p("AgjAkIhJgcIBCgoIAEhOIA6AyIBLgUIgdBIIArBAIhOgGIgwA9g");
	this.shape_56.setTransform(75.9,751.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#657073").s().p("AgQARIgigLIAegUIgBgkIAcAVIAigLIgMAiIAWAcIgkgBIgUAeg");
	this.shape_57.setTransform(178,802.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#657073").s().p("AgjAjIhJgbIBCgoIAEhOIA6AyIBLgUIgdBIIArBAIhOgGIgwA9g");
	this.shape_58.setTransform(657.6,497.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#657073").s().p("AhMBMIibg7ICNhXIAIimIB+BsICggsIg/CaIBbCKIilgNIhnCCg");
	this.shape_59.setTransform(91,604.5);

	this.instance_5 = new lib.Path_63();
	this.instance_5.parent = this;
	this.instance_5.setTransform(498.6,754.7,1,1,0,0,0,208.8,152.8);
	this.instance_5.alpha = 0.121;

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#041322").s().p("Eg1OgFGIKzilMBfqAIhIAAG3g");
	this.shape_60.setTransform(375.5,864.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#395266").s().p("Eg1OAY6MAAAgoEMBqdgWjMAAABLbg");
	this.shape_61.setTransform(375.5,671.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4D87C3").s().p("AgLCVQgqgEgaguQgaguAFg8QAFg+AggpQAigpApADQAqAEAaAuQAbAugGA8QgFA+ghApQgeAmgmAAIgGAAg");
	this.shape_62.setTransform(436.9,661.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#82A6BB").s().p("AmpNQQjFhGiYh/QiXiAhTilQhWirAAi7QAAi7BWiqQBTimCXh/QCYh/DFhGQDLhIDeAAQDeAADMBIQDEBGCYB/QCYB/BTCmQBWCqAAC7QAAC7hWCrQhUCliXCAQiYB/jEBGQjMBIjeAAQjeAAjLhIg");
	this.shape_63.setTransform(479.1,661.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.image2}]},10).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.image2}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.instance_5},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.instance_4},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.instance_3},{t:this.shape_40},{t:this.shape_39},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:514.3}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.shape,p:{x:438.7,y:654.7}}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.instance_5},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.instance_4},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.instance_3},{t:this.shape_40},{t:this.shape_39},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_63},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_62},{t:this.shape_18,p:{x:438.7}},{t:this.shape_19},{t:this.shape,p:{x:514.3,y:654.6}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1}]},6).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.instance_5},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.instance_4},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.instance_3},{t:this.shape_40},{t:this.shape_39},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_63},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_62},{t:this.shape_18,p:{x:438.7}},{t:this.shape_19},{t:this.shape,p:{x:514.3,y:654.6}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.instance_5},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.instance_4},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.instance_3},{t:this.shape_40},{t:this.shape_39},{t:this.instance_2},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_63},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_62},{t:this.shape_18,p:{x:438.7}},{t:this.shape_19},{t:this.shape,p:{x:514.3,y:654.6}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1}]},22).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.image2).wait(10).to({_off:false},0).wait(1).to({regX:340.7,regY:241.4,x:783.9,y:671.9},0).wait(1).to({x:759.9},0).wait(1).to({x:730.5},0).wait(1).to({x:695.8},0).wait(1).to({x:655.8},0).wait(1).to({x:610.4},0).wait(1).to({x:559.7},0).wait(1).to({x:503.7},0).wait(1).to({x:442.3},0).wait(1).to({x:375.6},0).wait(18).to({_off:true},1).wait(31));

	// image1
	this.instance_6 = new lib.Tween1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-354,284);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-31.4},3).to({x:375.5,mode:"independent"},6).wait(58).to({mode:"synched",startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-695.6,0.1,1452.9,1336.3);


// stage content:
(lib.task1_part1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{page2:1});

	// timeline functions:
	this.frame_0 = function() {
		playSound("projectBGM20173172010");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.page1();
	this.instance.parent = this;

	this.second = new lib.page2();
	this.second.parent = this;
	this.second.setTransform(756.2,-22);

	this.third = new lib.page3();
	this.third.parent = this;

	this.forth = new lib.page4();
	this.forth.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.second}]},1).to({state:[{t:this.third}]},1).to({state:[{t:this.forth}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.1,667.1,1452.4,1336.3);
// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Group_0.png", id:"Group_0"},
		{src:"images/Image.png", id:"Image"},
		{src:"images/Image_1.png", id:"Image_1"},
		{src:"images/Image_2.png", id:"Image_2"},
		{src:"images/Image_3.png", id:"Image_3"},
		{src:"images/backgroundbg_hover01.png", id:"backgroundbg_hover01"},
		{src:"images/bg201.jpg", id:"bg201"},
		{src:"images/cloud1.png", id:"cloud1"},
		{src:"images/FlashAICBAssets.png", id:"FlashAICBAssets"},
		{src:"images/FlashAICBAssets_1.png", id:"FlashAICBAssets_1"},
		{src:"images/FlashAICBAssets_2.png", id:"FlashAICBAssets_2"},
		{src:"images/FlashAICBAssets_3.png", id:"FlashAICBAssets_3"},
		{src:"sounds/projectBGM20173172010.mp3", id:"projectBGM20173172010"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;