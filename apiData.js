const he = require("he");

const url = "https://opentdb.com/api.php?amount=5&type=multiple";

const getQuestion = async () => {
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }

        const json = await response.json();

        // Decode special characters
        json.results = json.results.map(q => ({
            ...q,
            question: he.decode(q.question),
            correct_answer: he.decode(q.correct_answer),
            incorrect_answers: q.incorrect_answers.map(ans => he.decode(ans))
        }));

        return json;
    } catch (error) {
        console.error("Fetch error:", error.message);
        return { results: [] }; // So app doesn't crash
    }
};

module.exports = getQuestion;