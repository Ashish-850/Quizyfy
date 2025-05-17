const dataset = require("./data");
const quiz = require("./quizLogic");

function startGame() {
    console.log("🎉 Welcome to the Quiz Game!\n");

    const categories = quiz.showCategories(); // This returns the list
    const chosenCategory = quiz.getUserCategoryChoice(categories); // Then use it to get user's choice
    quiz.runQuiz(dataset, chosenCategory);
}

startGame();