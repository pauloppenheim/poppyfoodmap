
// courtesy http://aymanh.com/9-javascript-tips-you-may-not-know#assertion
function AssertException(message) { this.message = message; }
AssertException.prototype.toString = function () {
	return 'AssertException: ' + this.message;
}

assert = function(exp, message) {
	if (!exp) {
		throw new AssertException(message);
	}
}

assert.equal = function(a, b) {
	assert(a===b, "should be equal: " + a.toString() + " !== " + b.toString() );
}

