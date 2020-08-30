//const expect = require('chai').expect;
const b=require("./bpmCheck");
const r=require("./respCheck");
const s=require("./spo2Check");
function vitalsAreOk(bpm, spo2, respRate) {
    if((!IsBPMUnderControl(bpm)) || (!IsRespirationOk(respRate)) ||(!IsSPO2UnderControl(spo2))){
        return true;
    }
    console.log("Everything is under control");
    return false;
}

expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;

console.log('checker is done');