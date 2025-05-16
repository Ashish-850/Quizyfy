const dataset = require("./data");  // imported dataset
const readLineSync = require("readline-sync");


const n = dataset.category.data.length; // store the length of the question array
let correctAnswer = 0;

function showQuestionAnswer() {
    for (let i = 0; i < n; i++) {
        console.log(`Q${i + 1} - ${dataset.category.data[i].question}\n`);
        for (let key in dataset.category.data[i].options) {
            console.log(`     ${key}:${dataset.category.data[i].options[key]}`);
        }
        console.log("\n");
        let userAnswer = readLineSync.question("Enter your answer:- ");
        if(userAnswer === dataset.category.data[i].correctAnswer){
            correctAnswer++;
        }
    }
}

showQuestionAnswer();
console.log(`Your got ${correctAnswer}/${n} correct answers`);