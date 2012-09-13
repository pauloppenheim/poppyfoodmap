
var assert = require("assert")
describe('map2', function(){
	describe('fakemenus()', function(){
		it('should be an array', function(){
			var menus = fakemenus();
			assert.equal(typeOf(menus), "array");
		})
		it('should have an element', function(){
			var menus = fakemenus();
			var menu = menus[0];
			assert(menu !== undefined);
		})
		it('...with an ID', function(){
			var menus = fakemenus();
			var menu = menus[0];
			assert(menu['_id'] !== undefined);
		})
		it('... and a vendor', function(){
			var menus = fakemenus();
			var menu = menus[0];
			assert(menu['vendor'] !== undefined);
		})
		it('... with a name', function(){
			var menus = fakemenus();
			var menu = menus[0];
			assert(menu['vendor']['name'] !== undefined);
			assert.equal(menu['vendor']['name'], "Josey Baker Bread");
		})
	})
})
