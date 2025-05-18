function shuffleArray(arr) {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function arrayToObj(arr) {
    const keys = ["a", "b", "c", "d"];
    const result = {};
    keys.forEach((key, index) => {
        result[key] = arr[index];
    });
    return result;
}

module.exports = { shuffleArray, arrayToObj };