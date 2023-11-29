document.querySelector('form').addEventListener('submit', checkGrade);

function checkGrade(e){
    e.preventDefault();
    let grade = document.querySelector('input').value;
    let message = `<ul>`;

    console.log("If your grade is " + grade + " then...")
    if (grade >= 90 ) {
        message += `<li>your grade is an A</li>`;
    }
    if (grade >= 80 && grade < 90) {
        message += `<li>your grade is a B</li>`;
    }
    if (grade >= 70 && grade < 80) {
        message += `<li>your grade is a C</li>`;
    }
    if (grade >= 60 && grade < 70){
        message +=`<li>your grade is a D</li>`;
    }
    if (grade >= 0 && grade < 60){
        message +=`<li>your grade is a F</li>`;
    }
    message += `</ul>`
    document.querySelector('#output').innerHTML = message;
}