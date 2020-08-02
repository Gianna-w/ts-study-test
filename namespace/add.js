"use strict";
var myMath;
(function (myMath) {
    function add(value1, value2) {
        return value1 + value2;
    }
    myMath.add = add;
})(myMath || (myMath = {}));
