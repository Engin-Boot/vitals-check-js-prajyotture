fucntion IsRespirationOk(respRate){
    if(respRate<30){
        console.log("Low respRate");
        return false;
    }
    else if(respRate>95){
        console.log("High respRate");
        return false;
    }
    return true;
}
module.exports=IsRespirationOk;