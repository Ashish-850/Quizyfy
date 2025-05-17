const dataset = require("./data");  // imported dataset
const readLineSync = require("readline-sync");

// to show category of the quiz
function showCategory() {
    const categories = Object.keys(dataset.category);
    console.log("Available Categories:\n");
    categories.forEach((cat, index) => {
        console.log(`${index + 1}. ${cat}`);
    });
    return categories;
}

function showQuestionAnswer(categoryName) {
    const questions = dataset.category[categoryName];
    const n = questions.length;
    let correctAnswer = 0;
    for (let i = 0; i < n; i++) {
        console.log(`${i + 1}.${questions[i].question}\n`);
        for (let key in questions[i].options) {
            console.log(`${key}: ${questions[i].options[key]}`);
        }
        let userAnswer = readLineSync.question("Enter your answer:");
        if(userAnswer.toLowerCase() === questions[i].correctAnswer.toLowerCase()){
            console.log("✅ Correct!\n");
            correctAnswer++;
        }
        else{
            console.log("❌ Wrong! Correct/n");
        }
    }
    console.log(`You got ${correctAnswer}/${n} answers`);
}

const categories = showCategory();
let userCategory = readLineSync.questionInt("Which category you want to choose :");
if (userCategory < 1 || userCategory > categories.length) {
    console.log("Invalid Input : Out of scope");
}
else {
    const selectedCategory = categories[userCategory - 1];
    console.log(`You have selected ${selectedCategory}`);
    showQuestionAnswer(selectedCategory);
}
