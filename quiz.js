const readlineSync = require("readline-sync");
const { shuffleArray, arrayToObj } = require("./helpers");

function askQuestion(questionArray) {
    let score = 0;

    for (let i = 0; i < questionArray.length; i++) {
        console.log("\n");
        console.log(`${i + 1}. ${questionArray[i].question}\n`);

        const options = [questionArray[i].correct_answer, ...questionArray[i].incorrect_answers];
        const shuffled = shuffleArray(options);
        const optionObj = arrayToObj(shuffled);

        Object.entries(optionObj).forEach(([key, value]) => {
            console.log(`${key}. ${value}`);
        });

        let userInput = readlineSync.question("Your answer: ").trim().toLowerCase();
        const selected = optionObj[userInput];

        if (selected === questionArray[i].correct_answer) {
            console.log(`✅ Correct! ${userInput}. ${selected}`);
            score++;
        } else {
            const correctKey = Object.keys(optionObj).find(k => optionObj[k] === questionArray[i].correct_answer);
            console.log(`❌ Wrong! Correct answer: ${correctKey}. ${optionObj[correctKey]}`);
        }
    }

    console.log(`\n🎯 Final Score: ${score}/${questionArray.length}`);
}

module.exports = askQuestion;