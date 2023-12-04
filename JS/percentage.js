function Handlepercentage() {

    let m = parseInt(document.getElementById("math").value);
  
    let p = parseInt(document.getElementById("physics").value);
    
    let c = parseInt(document.getElementById("chemistry").value);

    let percentage = ((m+p+c)/300)*100;

    document.getElementById("percentage").innerHTML = percentage;

    document.getElementById("maths").innerHTML = m;

    document.getElementById("phy").innerHTML = p;

    document.getElementById("chem").innerHTML = c;

    return false;
}