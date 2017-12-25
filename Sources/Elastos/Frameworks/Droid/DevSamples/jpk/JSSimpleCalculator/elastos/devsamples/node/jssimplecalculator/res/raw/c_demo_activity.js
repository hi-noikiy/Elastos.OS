module.exports = function(aoElastos, aoActivity){
    var activity_calc = require("/data/temp/node/JSSimpleCalculator/activity_calc.js")(aoElastos, aoActivity);
    return activity_calc;
};