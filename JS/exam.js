function handleinterest() {

   event.defaultPrevented();
   
   let p = document.getElementById("PRINCIPAL").value
   
   let r = document.getElementById("RATE").value

   let n = document.getElementById("YEAR").value

   let interest = (p*r*n) / 100

   document.getElementById("ans").innerHTML = interest;

   document.getElementById("ans").style.backgroundColor("red");

}