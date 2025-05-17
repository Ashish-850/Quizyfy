const readLineSync = require("readline-sync");
const dataset = require("./data");

// to show category of the quiz
function showCategories() {
    const categories = Object.keys(dataset.category);
    console.log("Available Categories:\n");
    categories.forEach((cat, index) => {
        console.log(`${index + 1}. ${cat}`);
    });
    return categories;
}

// get user input
function getUserCategoryChoice(categories) {
    const choice = readLineSync.questionInt("Entert the number of your category: ");
    const index = choice - 1;
    if (index >= 0 && index<categories.length) {
        return categories[index];
    }
    else {
        console.log("Invalid choice. Please try again. ");
        return getUserCategoryChoice(categories);
    }

}

function askQuestion(questionObj) {
    console.log(`\n${questionObj.question}`);
    for (let key in questionObj.options) {
        console.log(`${key}: ${questionObj.options[key]}`);
    }

    const userAnswer = readLineSync.question("Your answer: ").toLowerCase();
    if (userAnswer === questionObj.correctAnswer) {
        console.log("Correct answer\n");
        return true;
    }
    else {
        console.log("wrong answer");
        return false;
    }
}

function runQuiz(dataset, categoryName) {
    const questions = dataset.category[categoryName];
    let score = 0;
    questions.forEach(q => {
        if (askQuestion(q)) {
            score++;
        }
    });
    console.log(`\n🎯 You got ${score}/${questions.length} correct answers in '${categoryName}'`);
}

// export the fucntion
module.exports = {
    showCategories,
    getUserCategoryChoice,
    runQuiz
};

