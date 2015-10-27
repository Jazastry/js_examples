var sum = (function() {
	function Sum(){}

    Sum.prototype.addToTen = function(firstNum, secondNum) {
        var _this = this;
        var res = firstNum + secondNum;

        if (res <= 10) {
            _this.result = res;
        } else if (res > 10) {
            _this.errRes = res;
            _this.errorMess = 'Sum is bigger than 10.';
        }


        return _this;
    };

    Sum.prototype.success = function(callback) {
        var _this = this;

        if (_this.result) {
            _this.success = callback(_this.result);
        }

        return _this;
    };

    Sum.prototype.error = function(callback) {
        var _this = this;

        if (_this.errorMess) {
            _this.error = callback(_this.errorMess + ' Sum is ' + _this.errRes);
        }

        return _this;
    };

    return new Sum();
}());

sum.addToTen(2, 10)
    .success(function(result) {
        console.log('result ', result);
    })
    .error(function(err) {
        console.log('err ', err);
    });