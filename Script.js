function convert(){
    let in_value=document.getElementById("inputValue").value;
    let in_measurment=document.getElementById("fromUnit").value;
    let out_measurment="°C";
    if(in_measurment==="celsius")
    {
        in_value=(in_value * 9/5) + 32;
        out_measurment="°F ";
    }
    else{in_value=(in_value - 32) * 5/9;}
    in_value=Math.round(in_value*100)/100;
    document.getElementById("result").innerHTML= in_value+out_measurment;
    console.log(in_value+out_measurment);
}