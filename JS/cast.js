let cgpa = parseFloat(prompt("ENTER YOUR CGPA :"));

let fees = parseInt(prompt("ENTER YOUR FEES :"));

let cast = (prompt("ENTER YOUR CAST :"));

let grade;
let scholarship;

if (cgpa > 9) {
    grade = 'A';
} else if (cgpa > 8.5) {
    grade = 'B';
} else if (cgpa > 8) {
    grade = 'C';
} else if (cgpa > 7.5) {
    grade = 'D';
} else {
    grade = 'E';
}

console.log(grade);

if (grade == 'A' || grade == 'B') {
    if (cast == 'O') {
        scholarship = 0;
    } else if (cast == 'B') {
        scholarship = fees * 0.25;
    } else if (cast == 'S') {
        scholarship = fees * 0.50;
    } else if (cast == 'T') {
        scholarship = fees * 1;
    }
} else {
    console.log("YOU ARE NOT ELIGIBLE FOR SCHOLARSHIP.");
}

console.log(scholarship);