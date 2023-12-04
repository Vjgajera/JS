function handleinterest() {

    event.defaultPrevented()

    let p = parseFloat(document.getElementById("principal").value);

    let r = parseFloat(document.getElementById("rate").value);

    let n = parseFloat(document.getElementById("year").value);

    let interest = (p*r*n)/100
    console.log(interest);

    document.getElementById("disp").innerHTML = interest;


    document.getElementById("disp").style.backgroundColor= 'red';

}