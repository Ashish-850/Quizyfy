const getQuestion = require("./apiData");
const askQuestion = require("./quiz");

(async () => {
    const data = await getQuestion();
    if (data?.results) {
        askQuestion(data.results);
    } else {
        console.log("No questions available.");
    }
})();
