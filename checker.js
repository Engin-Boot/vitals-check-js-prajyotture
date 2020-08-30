const expect = require('chai').expect;
const b=require("./bpmCheck.js");
const r=require("./respCheck.js");
const s=require("./spo2Check.js");
function vitalsAreOk(bpm, spo2, respRate) {
    if(( (IsBPMUnderControl(bpm)==false) || (!IsSPO2UnderControl(spo2)==false) || (!IsRespirationOk(respRate)==false) )==false) {
        return false;
    }
    console.log("Everything is under control");
    return true;
}

expect(vitalsAreOk(100, 95, 70)).to.be.true
expect(vitalsAreOk(50, 95, 70)).to.be.false;

console.log('checker is done');
