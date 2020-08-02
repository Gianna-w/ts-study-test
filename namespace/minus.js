"use strict";
var myMath;
(function (myMath) {
    function minus(value1, value2) {
        return value1 - value2;
    }
    myMath.minus = minus;
})(myMath || (myMath = {}));
