// creating data set
const database = {
    category: {
        name: "general knowledge",
        data: [
            {
                question: "What is the capital of Delhi?",
                options: {
                    a: "Mumbai",
                    b: "Bengaluru",
                    c: "New Delhi",
                    d: "Delhi"
                },
                correctAnswer: "c"
            },
            {
                question: "Who is the prime minister of India?",

                options: {
                    a: "Rahul Gandi",
                    b: "Narendra Modi",
                    c: "Pranav Mukherji",
                    d: "Salman Khan"
                },
                correctAnswer: "b"
            },
            {
                question: "What is national animal of India?",

                options: {
                    a: "Lion",
                    b: "Tiger",
                    c: "Bear",
                    d: "Monkey"
                },
                correctAnswer: "b"
            },
            {
                question: "Which year India got independence?",

                options: {
                    a: "1947",
                    b: "1926",
                    c: "1965",
                    d: "1971"
                },
                correctAnswer: "a"
            },
            {
                question: "Who was the first president of India?",

                options: {
                    a: "Mahatma Gandhi",
                    b: "Chandra Shekhar Azad",
                    c: "Dr. Rajendra Prasad",
                    d: "Shahid Bhagat Singh"
                },
                correctAnswer: "b"
            }
        ]
    }
}

module.exports = database;
