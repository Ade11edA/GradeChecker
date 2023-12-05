document.querySelector('form').addEventListener('submit', checkGrade);
const grades = [];
function checkGrade(e){
    e.preventDefault();
    let grade = document.querySelector('input').value;
    let message = `<ul>`;

    console.log("If your grade is " + grade + " then...")
    if (grade >= 90 ) {
        message += `<li>your grade of `+ grade + ` is an A</li>`;
        grades.push(parseFloat(grade));
    }
    if (grade >= 80 && grade < 90) {
        message += `<li>your grade of `+ grade + `is a B</li>`;
        grades.push(parseFloat(grade));
    }
    if (grade >= 70 && grade < 80) {
        message += `<li>your grade of `+ grade + ` is a C</li>`;
        grades.push(parseFloat(grade));
    }
    if (grade >= 60 && grade < 70){
        message +=`<li>your grade of `+ grade + ` is a D</li>`;
        grades.push(parseFloat(grade));
    }
    if (grade >= 0 && grade < 60){
        message +=`<li>your grade of `+ grade +` is a F</li>`;
        grades.push(parseFloat(grade));
    }
    message += `</ul>`
    var sum = grades.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      },0);      
    document.querySelector('#output').innerHTML += message;
    document.querySelector('#average').innerHTML = `Your average is ` + sum / grades.length;
}