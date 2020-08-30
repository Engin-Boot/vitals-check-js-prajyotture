const expect = require('chai').expect;
//const b=require("./bpmCheck.js");
const respChecker=require("./respCheck.js");
const spo2Checker=require("./spo2Check.js");
const bpmChecker=require("./bpmCheck.js")
function vitalsAreOk(bpm, spo2, respRate) {
    if(  (bpmChecker(bpm)==false) || (respChecker(respRate)==false) || (spo2Checker(spo2)==false) ) {
        return false;
    }
    console.log("Everything is under control");
    //return true;
}

expect(vitalsAreOk(100, 95, 70)).to.be.true
expect(vitalsAreOk(50, 95, 70)).to.be.false;
//vitalsAreOk(100,95,70);
console.log('checker is done');
