function convert(){
    //get the values
    let value = document.getElementById("inputValue").value;
    let initial= value;
    let fromunit= document.getElementById("fromUnit").value;
    let tounit = document.getElementById("toUnit").value;
    console.log(value +" "+ fromunit +" to "+ tounit)
    //first transform fromunit to meter
    if(fromunit === "kilometers"){value=value*1000;}
    else if(fromunit === "centimeters"){value=value/100;}
    else if(fromunit === "feet"){value=value/3.281;}
    else if(fromunit === "inches"){value=value/39.37;}
    //then transform fromunit in meter value to the tounit
    if(tounit === "kilometers"){value=value/1000;}
    else if(tounit === "centimeters"){value=value*100;}
    else if(tounit === "feet"){value=value*3.281;}
    else if(tounit === "inches"){value=value*39.37;}
    console.log(value);
    //round the answer to 100000th place
    value=Math.round(value*100000)/100000;
    document.getElementById("result").innerHTML= initial+" "+fromunit+" is equal to "+value+" "+tounit;
}