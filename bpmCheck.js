function IsBPMUnderControl(bpm){
    if(bpm<70){
        console.log("Low BPM");
        return false;
    }
    else if(bpm>150){
        console.log("High BPM");
        return false;
    }
    return true;
}
module.exports=IsBPMUnderControl;
