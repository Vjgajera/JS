let x = Math.floor(Math.random() * 10);

let y = Math.floor(Math.random() * 10);

document.getElementById("num1").innerHTML = x;

document.getElementById("num2").innerHTML = y;

let z = x + y;

function handleCaptcha() {                  
    let ans = parseInt(document.getElementById("ans").value);

    if (ans == z) {
        alert("CORRECT CAPTCHA ANSWER");
    } else {
        alert("INCORRECT CAPTCHA ANSWER");
    }
}